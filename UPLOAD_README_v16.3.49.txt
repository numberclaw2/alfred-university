AU-ESET 301 v16.3.49 — TEACHING MEDIA FILTERS
================================================

BASELINE
GitHub main / v16.3.48 Part 2 Outside Literature Integration
Verified baseline commit: f26d352d1fff910a827da4eb9a675780e6a450a9

PURPOSE
Adds client-side Teaching Media browsing filters only. No curriculum, resource assignments, videos, literature selections, lesson mappings, assessments, labs, progress, or Cloud Sync behavior is changed.

UPLOAD
Upload/replace the files in this ZIP at the repository root.

RUNTIME FILES
- learn.js
- styles.css
- learn.html
- service-worker.js
- build-info.json
- release-notes-current.js

EVIDENCE / OPERATIONS FILES
- AU-ESET-301-v16.3.49-Teaching-Media-Filter-QA.md
- UPLOAD_README_v16.3.49.txt
- SHA256SUMS.txt

AFTER UPLOAD
1. Confirm build-info.json reports runtimePatch 16.3.49.
2. Hard refresh/reload the site once so the v16.3.49 service-worker cache activates.
3. Open Learn -> Teaching Media in Week 1.
4. Confirm the Filter Teaching Media panel appears.
5. Quick smoke check: choose Video, then Beginner-friendly only, then Reset filters.
6. Confirm result count changes and Reset returns all Week 1 cards.

QA
The package was audited before delivery. See AU-ESET-301-v16.3.49-Teaching-Media-Filter-QA.md.
