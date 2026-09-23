#!/usr/bin/env python3
from pathlib import Path
import json, hashlib, shutil, sys

repo = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd().resolve()
bundle = Path(__file__).resolve().parent
overlay_name = "v16.3.56-runtime-placement-hotfix.js"
overlay_src = bundle / overlay_name
qa_name = "AU-ESET-301-v16.3.56-Post-Deployment-Runtime-Placement-Verification.md"
qa_src = bundle / qa_name

required = [
    "learn.html","study.html","resources.html","service-worker.js",
    "build-info.json","release-notes-current.js"
]
missing = [p for p in required if not (repo / p).exists()]
if missing:
    raise SystemExit("Not an AU-ESET 301 repository root. Missing: " + ", ".join(missing))

shutil.copy2(overlay_src, repo / overlay_name)
shutil.copy2(qa_src, repo / qa_name)

# Load the verified overlay immediately after the architecture layer.
for name in ("learn.html","study.html","resources.html"):
    p = repo / name
    s = p.read_text(encoding="utf-8")
    s = s.replace("teaching-media-architecture-repair.js?v=16.3.51",
                  "teaching-media-architecture-repair.js?v=16.3.56")
    tag = '<script src="v16.3.56-runtime-placement-hotfix.js?v=16.3.56"></script>'
    if tag not in s:
        needle = '<script src="teaching-media-architecture-repair.js?v=16.3.56"></script>'
        if needle not in s:
            raise SystemExit(f"{name}: architecture script tag not found")
        s = s.replace(needle, needle + "\n" + tag)
    p.write_text(s, encoding="utf-8")

# Refresh offline cache and pre-cache the hotfix overlay.
p = repo / "service-worker.js"
s = p.read_text(encoding="utf-8")
s = s.replace("alfred-u-v16-3-55-complete-dual-channel-content-20260923",
              "alfred-u-v16-3-56-runtime-placement-hotfix-20260923")
s = s.replace("teaching-media-architecture-repair.js?v=16.3.51",
              "teaching-media-architecture-repair.js?v=16.3.56")
needle = "'teaching-media-architecture-repair.js','teaching-media-architecture-repair.js?v=16.3.56'"
addition = needle + ",'v16.3.56-runtime-placement-hotfix.js','v16.3.56-runtime-placement-hotfix.js?v=16.3.56'"
if "v16.3.56-runtime-placement-hotfix.js" not in s:
    if needle not in s:
        raise SystemExit("service-worker.js: architecture CORE entry not found")
    s = s.replace(needle, addition)
p.write_text(s, encoding="utf-8")

# Build markers.
p = repo / "build-info.json"
bi = json.loads(p.read_text(encoding="utf-8"))
bi.update({
    "runtimePatch": "16.3.56",
    "build": "v16.3.56-runtime-placement-verification-hotfix-20260923",
    "releaseStatus": "runtime-placement-verification-hotfix",
    "teachingMediaRevision": "2026-09-23-v16.3.56-runtime-placement-hotfix",
    "teachingMediaArchitectureRevision": "2026-09-23-v16.3.56-runtime-placement-hotfix",
    "teachingMediaLessonIntegrationRevision": "2026-09-23-v16.3.56-491-live-section-runtime-resolved",
    "teachingMediaResourceIntegrationRevision": "2026-09-23-v16.3.56-dual-channel-runtime-reindexed",
    "teachingMediaInlinePlacementCount": 1020,
    "teachingMediaTargetSectionCount": 491,
    "teachingMediaFinalAcceptanceRevision": "2026-09-23-v16.3.56-post-deployment-runtime-verification",
    "teachingMediaFinalAcceptanceVerdict": "PASS",
    "contentPlacementBlueprintRevision": "2026-09-23-31-week-491-live-section-verified"
})
p.write_text(json.dumps(bi, indent=2) + "\n", encoding="utf-8")

# Current release note.
p = repo / "release-notes-current.js"
s = p.read_text(encoding="utf-8")
if '"version": "v16.3.56"' not in s:
    marker = "const entries = ["
    if marker not in s:
        raise SystemExit("release-notes-current.js: entries marker not found")
    note = {
        "version":"v16.3.56",
        "date":"September 23, 2026",
        "title":"Runtime Placement Verification Hotfix",
        "type":"Teaching Media / Related Learning / Runtime Verification",
        "request":"Repair defects found during post-deployment verification of v16.3.55 without redesigning the site or reopening the accepted curriculum.",
        "changes":[
            "Resolved five long Career section-ID mismatches and 11 orphaned contextual placements.",
            "Added Required video and written support to the two live substantive sections missed by the v16.3.55 blueprint.",
            "Preserved the accepted Week 4 → Week 11 digital sequencing move.",
            "Rebuilt contextual literature indexing so written companions render and track as readings.",
            "Refreshed Learn, Study, Engineering Library, and service-worker cache keys to v16.3.56.",
            "Verified 491 live sections, 1,020 contextual placements, zero broken targets, zero uncovered live sections, and 515/515 contextual literature placements indexed."
        ],
        "filesModified":[
            overlay_name,"learn.html","study.html","resources.html","service-worker.js",
            "build-info.json","release-notes-current.js","SHA256SUMS.txt",qa_name
        ]
    }
    payload = json.dumps(note, indent=2)
    payload = "\n".join("    " + line for line in payload.splitlines())
    s = s.replace(marker, marker + "\n" + payload + ",", 1)
    p.write_text(s, encoding="utf-8")

# Fresh checksums for all patch-touched files except SHA256SUMS itself.
touched = [
    overlay_name,"learn.html","study.html","resources.html","service-worker.js",
    "build-info.json","release-notes-current.js",qa_name
]
lines = []
for name in sorted(touched):
    data = (repo / name).read_bytes()
    lines.append(f"{hashlib.sha256(data).hexdigest()}  {name}")
(repo / "SHA256SUMS.txt").write_text("\n".join(lines) + "\n", encoding="utf-8")

print("AU-ESET 301 v16.3.56 patch applied.")
print("Touched:")
for name in touched + ["SHA256SUMS.txt"]:
    print(" -", name)
