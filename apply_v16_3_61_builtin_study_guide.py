#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import json
import re
import shutil
import sys
from pathlib import Path

PATCH_DIR = Path(__file__).resolve().parent
PDF_NAME = 'Associate_CET_Study_Guide_Sixth_Edition.pdf'
JS_NAME = 'ceta-study-guide-private.js'
RELEASE_NOTE = 'release-notes-v16.3.61.js'


def fail(msg: str) -> None:
    raise SystemExit(f'v16.3.61 patch aborted: {msg}')


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def require_file(root: Path, name: str) -> Path:
    path = root / name
    if not path.is_file():
        fail(f'missing required baseline file: {name}')
    return path


def replace_once(text: str, pattern: str, repl: str, label: str, flags: int = 0) -> str:
    out, n = re.subn(pattern, repl, text, count=1, flags=flags)
    if n != 1:
        fail(f'could not update {label}; expected one match, found {n}')
    return out


def main() -> None:
    root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd().resolve()

    for packaged in (PDF_NAME, JS_NAME, RELEASE_NOTE):
        if not (PATCH_DIR / packaged).is_file():
            fail(f'package is missing {packaged}')

    build_path = require_file(root, 'build-info.json')
    service_worker_path = require_file(root, 'service-worker.js')
    patch_notes_path = require_file(root, 'patch-notes.html')
    checksum_path = require_file(root, 'SHA256SUMS.txt')

    info = json.loads(build_path.read_text(encoding='utf-8'))
    if info.get('courseRelease') != '16.3':
        fail(f"expected courseRelease 16.3, found {info.get('courseRelease')!r}")
    if info.get('runtimePatch') != '16.3.60':
        fail(f"expected runtimePatch 16.3.60, found {info.get('runtimePatch')!r}; do not apply this patch to another baseline")
    if info.get('cloudSyncProtocol') != 2:
        fail('Cloud Sync protocol is not 2')

    # Copy the two functional assets + standalone release note into repository root.
    for name in (PDF_NAME, JS_NAME, RELEASE_NOTE):
        shutil.copy2(PATCH_DIR / name, root / name)

    # Update every HTML surface that already loads the private guide module.
    touched_html = []
    for html in sorted(root.glob('*.html')):
        text = html.read_text(encoding='utf-8')
        if JS_NAME not in text:
            continue
        new = re.sub(
            r'ceta-study-guide-private\.js\?v=[0-9.]+',
            f'{JS_NAME}?v=16.3.61',
            text,
        )
        if new != text:
            html.write_text(new, encoding='utf-8')
            touched_html.append(html.name)

    # Release Notes page: load the standalone v16.3.61 entry after v16.3.60.
    patch_notes = patch_notes_path.read_text(encoding='utf-8')
    if RELEASE_NOTE not in patch_notes:
        marker = '<script src="release-notes-v16.3.60.js"></script>'
        if marker in patch_notes:
            patch_notes = patch_notes.replace(marker, marker + f'<script src="{RELEASE_NOTE}"></script>', 1)
        else:
            marker = '<script src="release-change-ledger.js"></script>'
            if marker not in patch_notes:
                fail('patch-notes.html does not contain a safe release-note insertion point')
            patch_notes = patch_notes.replace(marker, f'<script src="{RELEASE_NOTE}"></script>' + marker, 1)
        patch_notes_path.write_text(patch_notes, encoding='utf-8')

    # Build metadata: course version remains 16.3; only runtime patch advances.
    info.update({
        'runtimePatch': '16.3.61',
        'build': 'v16.3.61-built-in-private-ceta-study-guide-20260924',
        'releaseStatus': 'built-in-private-ceta-study-guide',
        'releaseNotesRevision': '2026-09-24-v16.3.61-built-in-private-ceta-study-guide',
        'cetaStudyGuideRevision': '2026-09-24-v16.3.61-built-in-private-ceta-study-guide',
        'cetaStudyGuidePublicPdfIncluded': False,
        'cetaStudyGuideBundledPdfIncluded': True,
        'cetaStudyGuideBundledPdfPath': PDF_NAME,
        'cetaStudyGuidePrivateCopyStorage': 'private-repository bundled static asset; Cloud Sync interaction permitted; this patch does not transfer the PDF through Cloud Sync',
        'serviceWorkerRevision': '2026-09-24-v16.3.61-built-in-private-ceta-study-guide-cache-refresh',
    })
    build_path.write_text(json.dumps(info, indent=2) + '\n', encoding='utf-8')

    # Service worker: bump cache, refresh module URL, and add the PDF/release note.
    sw = service_worker_path.read_text(encoding='utf-8')
    sw = replace_once(
        sw,
        r"^const CACHE='[^']+';",
        "const CACHE='alfred-u-v16-3-61-built-in-private-ceta-study-guide-20260924';",
        'service-worker cache id',
        re.M,
    )
    sw = re.sub(
        r'ceta-study-guide-private\.js\?v=[0-9.]+',
        f'{JS_NAME}?v=16.3.61',
        sw,
    )

    core_match = re.search(r'const CORE=\[(.*?)\];', sw, re.S)
    if not core_match:
        fail('service-worker CORE array not found')
    core_body = core_match.group(1)
    additions = []
    for name in (PDF_NAME, RELEASE_NOTE):
        if f"'{name}'" not in core_body:
            additions.append(f"'{name}'")
    if additions:
        insert = ',' + ','.join(additions)
        new_body = core_body.rstrip() + insert + '\n'
        sw = sw[:core_match.start(1)] + new_body + sw[core_match.end(1):]
    service_worker_path.write_text(sw, encoding='utf-8')

    # Update SHA256SUMS while preserving existing tracked entries.
    existing = []
    for line in checksum_path.read_text(encoding='utf-8').splitlines():
        parts = line.strip().split(None, 1)
        if len(parts) == 2:
            existing.append(parts[1].strip())
    changed = {
        'build-info.json', 'service-worker.js', 'patch-notes.html',
        JS_NAME, PDF_NAME, RELEASE_NOTE, *touched_html,
    }
    names = []
    for name in existing + sorted(changed):
        if name not in names and (root / name).is_file():
            names.append(name)
    checksum_path.write_text(
        ''.join(f'{sha256(root/name)}  {name}\n' for name in names),
        encoding='utf-8',
    )

    # Verification gates.
    updated = json.loads(build_path.read_text(encoding='utf-8'))
    assert updated['runtimePatch'] == '16.3.61'
    assert updated['courseRelease'] == '16.3'
    assert updated['cloudSyncProtocol'] == 2
    assert updated['cetaStudyGuideBundledPdfIncluded'] is True
    assert updated['cetaStudyGuidePublicPdfIncluded'] is False

    js = (root / JS_NAME).read_text(encoding='utf-8')
    assert PDF_NAME in js
    assert 'verifiedCopyPdfPageOffset??10' in js
    assert 'cloudSynced:false' not in js
    assert "cloudIntegration:'allowed; not configured by this module'" in js

    sw = service_worker_path.read_text(encoding='utf-8')
    assert 'alfred-u-v16-3-61-built-in-private-ceta-study-guide-20260924' in sw
    assert PDF_NAME in sw
    assert RELEASE_NOTE in sw

    print('AU-ESET 301 v16.3.61 patch applied successfully.')
    print(f'Repository: {root}')
    print(f'HTML files refreshed: {", ".join(touched_html) if touched_html else "none"}')
    print(f'Built-in Study Guide: {PDF_NAME}')
    print('Cloud Sync protocol remains 2; Study Guide cloud interaction is permitted but not configured by this patch; curriculum release remains 16.3.')


if __name__ == '__main__':
    main()
