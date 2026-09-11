#!/usr/bin/env python3
"""Build Alfred University's local open/public PDF library.

Only sources explicitly listed in library-sources.json are downloaded.  The list is
intentionally restricted to open-license material or U.S. government/public-release
material appropriate to redistribute from the public GitHub Pages repository.
Publisher-controlled ETA/manufacturer PDFs remain official external links.
"""
from __future__ import annotations
import io, json, os, re, shutil, sys, time, zipfile
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent
SOURCES = ROOT / "library-sources.json"
PDF_ROOT = ROOT
CATALOG = ROOT / "library-catalog.js"
INDEX = ROOT / "library-index.js"
REPORT = ROOT / "library-sync-report.json"
SOURCES_MD = ROOT / "LIBRARY-SOURCES.md"
USER_AGENT = "AlfredUniversityStudyLibrary/1.1 (+GitHub Pages educational archive; primary-source preservation)"
MAX_PDF_BYTES = 95 * 1024 * 1024
TIMEOUT = 75

session = requests.Session()
session.headers.update({"User-Agent": USER_AGENT, "Accept": "text/html,application/pdf,application/zip,*/*;q=0.8"})


def fetch(url: str, *, stream=False):
    r = session.get(url, timeout=TIMEOUT, allow_redirects=True, stream=stream)
    r.raise_for_status()
    return r


def valid_pdf(data: bytes) -> bool:
    return data.lstrip().startswith(b"%PDF")


def clean_name(name: str) -> str:
    name = os.path.basename(name.split("?")[0]) or "document.pdf"
    name = re.sub(r"[^A-Za-z0-9._()\-]+", "-", name).strip("-.")
    if not name.lower().endswith(".pdf"):
        name += ".pdf"
    return name[:180]


def download_pdf(url: str, dest: Path) -> tuple[str, int]:
    r = fetch(url)
    data = r.content
    if len(data) > MAX_PDF_BYTES:
        raise RuntimeError(f"PDF exceeds {MAX_PDF_BYTES // (1024*1024)} MB safety cap")
    if not valid_pdf(data):
        ctype = r.headers.get("content-type", "")
        raise RuntimeError(f"not a PDF (content-type={ctype!r}, first bytes={data[:24]!r})")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    return r.url, len(data)


def find_pdf_on_page(page_url: str, title_hint: str = "") -> str:
    r = fetch(page_url)
    soup = BeautifulSoup(r.text, "html.parser")
    candidates = []
    for a in soup.find_all("a", href=True):
        href = urljoin(r.url, a["href"])
        txt = " ".join(a.stripped_strings)
        blob = (txt + " " + href).lower()
        if ".pdf" in href.lower() or "pdf" in txt.lower():
            score = 0
            if href.lower().split("?")[0].endswith(".pdf"): score += 8
            if title_hint and title_hint.lower() in blob: score += 8
            if "download" in blob: score += 2
            if "english" in blob: score += 1
            candidates.append((score, href, txt))
    if not candidates:
        raise RuntimeError("no PDF link found on source page")
    candidates.sort(key=lambda x: x[0], reverse=True)
    return candidates[0][1]


def extract_pdf_text(path: Path) -> tuple[str, int]:
    try:
        reader = PdfReader(str(path))
        parts = []
        for page in reader.pages:
            try:
                parts.append(page.extract_text() or "")
            except Exception:
                parts.append("")
        text = re.sub(r"\s+", " ", " ".join(parts)).strip()
        return text, len(reader.pages)
    except Exception as exc:
        return f"[Text extraction unavailable: {type(exc).__name__}]", 0


def title_from_pdf(path: Path) -> str:
    try:
        reader = PdfReader(str(path))
        meta = reader.metadata or {}
        t = str(meta.get("/Title") or "").strip()
        if t and t.lower() not in {"untitled", "document"}: return t
    except Exception:
        pass
    return path.stem.replace("-", " ").replace("_", " ")


def js_assignment(name: str, value) -> str:
    return f"window.{name} = " + json.dumps(value, ensure_ascii=False, separators=(",", ":")) + ";\n"


def write_outputs(records, full_records, report, config):
    CATALOG.write_text(js_assignment("ALFRED_LIBRARY_CATALOG", records) + js_assignment("ALFRED_LIBRARY_META", {
        "updated": report["completedAt"],
        "documents": len(records),
        "collections": sorted(set(r["collection"] for r in records)),
        "failedSources": len(report["failed"]),
        "policy": "Local copies are limited to open-license/public-release material. ETA and manufacturer-controlled documents remain official publisher links."
    }), encoding="utf-8")
    INDEX.write_text(js_assignment("ALFRED_LIBRARY_INDEX", full_records), encoding="utf-8")
    REPORT.write_text(json.dumps(report, indent=2), encoding="utf-8")
    lines = [
        "# Alfred University Local PDF Library", "",
        "This flat PDF library is generated from `library-sources.json`. Downloaded reference PDFs are stored at the repository root with filenames beginning `LIB-`.", "",
        "The local library intentionally contains only material identified as open-license, U.S. government, or explicitly public-release material suitable for redistribution from a public GitHub repository.",
        "ETA International and manufacturer-controlled PDFs remain linked to their official publisher copies unless the publisher grants redistribution rights.", "",
        f"Last build: {report['completedAt']}", f"Local PDFs indexed: {len(records)}", "",
        "## Collections", ""
    ]
    for rec in records:
        lines += [f"- **{rec['title']}** — {rec['publisher']} — [{rec['license']}]({rec['sourceUrl']})"]
    if report["failed"]:
        lines += ["", "## Sources that failed during the latest sync", ""]
        for f in report["failed"]: lines.append(f"- `{f['id']}` — {f['error']}")
    SOURCES_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def add_record(base, path: Path, source_url: str, download_url: str, sub_title: str | None = None):
    text, pages = extract_pdf_text(path)
    title = sub_title or base["title"]
    rel = path.relative_to(ROOT).as_posix()
    return {
        "id": base["id"] + ("-" + path.stem.lower() if sub_title else ""),
        "title": title,
        "publisher": base["publisher"],
        "collection": base.get("collection", "Reference Library"),
        "license": base.get("license", "Open/public release"),
        "distributionBasis": base.get("distributionBasis", ""),
        "sourceUrl": source_url,
        "downloadUrl": download_url,
        "localUrl": rel,
        "ceta": base.get("ceta", []),
        "weeks": base.get("weeks", []),
        "keywords": base.get("keywords", ""),
        "pages": pages,
        "bytes": path.stat().st_size,
        "text": text,
    }


def process_source(src, records, full_records):
    strategy = src["strategy"]
    prefix = "LIB-" + re.sub(r"[^A-Za-z0-9._-]+", "-", src["id"]).strip("-")

    if strategy == "zip_pdfs":
        r = fetch(src["url"])
        if not zipfile.is_zipfile(io.BytesIO(r.content)):
            raise RuntimeError("download is not a ZIP archive")
        # Flat layout: remove this source's previous generated PDFs before refreshing.
        for old in ROOT.glob(prefix + "-*.pdf"):
            old.unlink(missing_ok=True)
        with zipfile.ZipFile(io.BytesIO(r.content)) as z:
            names = [n for n in z.namelist() if n.lower().endswith(".pdf") and not n.endswith("/")]
            if not names:
                raise RuntimeError("ZIP contained no PDFs")
            seen = set()
            for n in names:
                data = z.read(n)
                if not valid_pdf(data) or len(data) > MAX_PDF_BYTES:
                    continue
                base_name = clean_name(Path(n).name)
                fn = clean_name(prefix + "-" + base_name)
                if fn.lower() in seen:
                    fn = clean_name(prefix + "-" + Path(n).stem + "-" + str(len(seen)+1) + ".pdf")
                seen.add(fn.lower())
                path = ROOT / fn
                path.write_bytes(data)
                inferred = title_from_pdf(path)
                rec_full = add_record(src, path, src["sourceUrl"], src["url"], inferred)
                full_records.append(rec_full)
                records.append({k:v for k,v in rec_full.items() if k != "text"})
        return len(names)

    if strategy == "page_pdf":
        pdf_url = find_pdf_on_page(src["url"], src.get("filename", ""))
    elif strategy == "direct_pdf":
        pdf_url = src["url"]
    else:
        raise RuntimeError(f"unknown strategy {strategy}")

    original = clean_name(src.get("filename") or Path(urlparse(pdf_url).path).name)
    dest = ROOT / clean_name(prefix + "-" + original)
    final_url, _ = download_pdf(pdf_url, dest)
    rec_full = add_record(src, dest, src.get("sourceUrl", src["url"]), final_url)
    full_records.append(rec_full)
    records.append({k:v for k,v in rec_full.items() if k != "text"})
    return 1

def main():
    config = json.loads(SOURCES.read_text(encoding="utf-8"))
    PDF_ROOT.mkdir(parents=True, exist_ok=True)
    records, full_records = [], []
    report = {"startedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "completedAt": None, "successful": [], "failed": []}
    for src in config["sources"]:
        try:
            count = process_source(src, records, full_records)
            report["successful"].append({"id": src["id"], "documents": count})
            print(f"OK  {src['id']}: {count} PDF(s)")
        except Exception as exc:
            report["failed"].append({"id": src["id"], "error": str(exc)[:500]})
            print(f"ERR {src['id']}: {exc}", file=sys.stderr)
    records.sort(key=lambda r: (r["collection"], r["publisher"], r["title"]))
    full_records.sort(key=lambda r: (r["collection"], r["publisher"], r["title"]))
    report["completedAt"] = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    report["documents"] = len(records)
    write_outputs(records, full_records, report, config)
    print(f"\nIndexed {len(records)} local PDFs; {len(report['failed'])} source(s) failed.")
    if not records:
        raise SystemExit("No local PDFs were built; refusing to publish an empty library.")

if __name__ == "__main__":
    main()
