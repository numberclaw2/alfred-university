AU-ESET 301 v16.3.18 — DEPLOYMENT PAGE DURABILITY / OPERATIONS DOCUMENTATION

UPLOAD EVERY FILE IN THIS ZIP DIRECTLY TO THE GITHUB REPOSITORY ROOT.
Replace matching files when prompted. Do not create a wrapper folder.

PURPOSE
- Keep Deployment as the permanent operations/maintenance page.
- Remove stale v16.3.7-specific deployment and acceptance prose.
- Read current runtime/build/status metadata from build-info.json.
- Document the durable repository -> GitHub Pages -> browser/local state -> optional Worker/D1 Cloud Sync architecture.
- Preserve safe offline, recovery, and maintenance guidance.
- Leave final Home/global navigation cleanup for Step 9.

FILES ADDED
- None

FILES MODIFIED
- deployment.html
- release-notes-current.js
- build-info.json
- service-worker.js
- POST-UPDATE-QA.md
- UPLOAD_README.txt
- SHA256SUMS.txt

FILES REMOVED
- None

NOT CHANGED
- GitHub Pages hosting configuration
- Cloudflare Worker endpoint/code
- D1 database/schema
- Cloud Sync protocol or Progress storage/sync behavior
- Service-worker fetch strategy (cache namespace only advances)
- About page
- Home/global navigation cleanup
- Study / Practice / Classroom
- Calendar / Progress behavior / Mastery
- Labs / Assessments / Projects / Search
- Curriculum / Teaching Media

EXPECTED RUNTIME
runtimePatch: 16.3.18
build: v16.3.18-deployment-durable-operations-20260918
cache: alfred-u-v16-3-18-deployment-durable-operations-20260918
