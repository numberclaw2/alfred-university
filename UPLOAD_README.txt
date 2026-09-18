AU-ESET 301 v16.3.20 — FINAL ACCEPTANCE REPAIR

UPLOAD EVERY FILE IN THIS ZIP DIRECTLY TO THE GITHUB REPOSITORY ROOT.
Replace matching files when prompted. Do not create a wrapper folder.

PURPOSE
- Fix the About / Progress / Projects hero-layout regression shown in the supplied screenshots.
- Fix the Knowledge Base More-menu JavaScript error.
- Make Deployment -> Progress Cloud Sync deep links land correctly.
- Make Search CETa-domain deep links land on the matching Assessment Center domain.
- Remove stale v16.3.7 "current runtime" wording from Assessment Center and Documents.
- Update retired compatibility-page notes now that Step 9 is complete.
- Record the repair in Release Notes and advance runtime/cache metadata.

FILES ADDED
- None

FILES MODIFIED
- assessments.html
- build-info.json
- documents.html
- engineering.html
- knowledge.html
- progress.html
- readiness.js
- release-notes-current.js
- service-worker.js
- site.js
- student-services.html
- week.html
- POST-UPDATE-QA.md
- UPLOAD_README.txt
- SHA256SUMS.txt

FILES REMOVED
- None

NOT CHANGED
- Curriculum / lessons / Teaching Media
- Calendar dates, event IDs, or calendar data
- Assessment questions, answers, scoring, or mastery formulas
- Labs / projects / portfolio identities
- Progress storage schema or record identities
- Cloud Sync protocol, Worker endpoint/code, or D1 schema
- Study / Practice workflow
- Primary navigation / More-menu owner architecture from v16.3.19

EXPECTED RUNTIME
runtimePatch: 16.3.20
build: v16.3.20-final-acceptance-repair-20260918
releaseStatus: final-acceptance-repair-ready
cache: alfred-u-v16-3-20-final-acceptance-repair-20260918
