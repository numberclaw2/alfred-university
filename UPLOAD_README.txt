AU-ESET 301 v16.3.58 — FINAL DIRECT FILES

NO WORKFLOW IS REQUIRED.

Upload these SIX files to the ROOT of the repository:

REPLACE existing files:
1. v16.3.56-runtime-placement-hotfix.js
2. build-info.json
3. patch-notes.html
4. service-worker.js
5. SHA256SUMS.txt

ADD this new file:
6. release-notes-v16.3.58.js

IMPORTANT:
- Keep every filename EXACTLY as shown.
- Do not allow GitHub to add (1), (2), etc.
- release-notes-current.js is intentionally NOT replaced. The new v16.3.58
  overlay preserves all existing Release Notes history and prepends v16.3.58.
- learn.html, study.html, and resources.html are intentionally NOT replaced.
  The service worker uses network-first for JavaScript and the new cache identity
  refetches the replaced hotfix even though those pages retain the old query label.

WHAT WAS FIXED FROM THE FAILED FINALIZER:
- Week 22 no longer depends on a stale blueprint section ID.
- All 210 repair rules carry lesson + exact section title.
- Exact segment ID is tried first; live lesson title is the fallback.
- The incorrect "unique source count must remain unchanged" invariant was removed.
  v16.3.58 correctly expects 322 unique assignment source IDs.
- The runtime now expects 319 canonical source identities.
- The runtime keeps the intentional Week 17 second video, so contextual
  placement count is 1,021 rather than 1,020.
- Release Notes are visible through release-notes-v16.3.58.js without rewriting
  the large historical release-notes-current.js file.

PACKAGE VALIDATION COMPLETED:
- Repair rule count: 210
- All repair rules include week, segment, lesson, and section title
- Node syntax check: PASS for all generated JavaScript files
- build-info.json parse: PASS
- Expected runtime guards embedded:
    491 live teaching sections
    1,021 contextual placements
    515 written placements
    347 assignments
    251 Classroom
    77 Study
    19 Engineering Library
    322 unique assignment source IDs
    319 canonical source identities
    zero orphan placements
- SHA256SUMS.txt regenerated for all changed/new files and current unchanged
  critical runtime files.

After uploading the six files, tell ChatGPT:
uploaded direct files
