AU-ESET 301 — v16.3.46 COMPLETE TEACHING MEDIA INTEGRATION

BASELINE
Upload these files on top of the current v16.3.45 repository/site.

PURPOSE
- Integrates every retained existing Teaching Media assignment with an exact lesson section.
- Eliminates orphan Teaching Media resources.
- Adds course-wide exact-section backlinks.
- Integrates existing non-video resources at point of use.
- Fixes Required/Go Deeper contradictions.
- Replaces generic post-video guidance with resource-specific next actions.
- Deduplicates exact-URL resource identities for Teaching Media discovery.
- Does NOT add new outside literature or CETa Study Guide recommended pages.

UPLOAD / OVERWRITE
- teaching-media-resource-integration.js  (NEW)
- learn.js
- learn.html
- styles.css
- service-worker.js
- build-info.json
- release-notes-current.js
- SHA256SUMS.txt
- AU-ESET-301-v16.3.46-Teaching-Media-Resource-Map.csv  (NEW evidence)
- AU-ESET-301-v16.3.46-Complete-Teaching-Media-Acceptance.md  (NEW evidence)
- UPLOAD_README_v16.3.46.txt  (NEW)

DO NOT DELETE
Keep teaching-media-lesson-integration.js from v16.3.45. v16.3.46 loads its complete resource map after that accepted layer.

AFTER UPLOAD
Hard-refresh once so the new service-worker cache activates, then follow the short deployed-browser checklist in the acceptance report.
