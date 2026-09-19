AU-ESET 301 v16.3.30 — EXECUTIVE-FUNCTION STUDY-FLOW UPDATE
================================================================

WHAT THIS PACKAGE IS
--------------------
This is the COMPLETE FLAT replacement/upload package for the current AU-ESET 301 GitHub repository.
It contains the full current site, with the approved ADHD/autism executive-function audit recommendations integrated into the v16.3.29 baseline without reducing instructional depth.

UPLOAD METHOD
-------------
1. Extract this ZIP.
2. Open the root of the `numberclaw2/alfred-university` repository on branch `main`.
3. Upload EVERY file from this ZIP directly into the repository root.
4. Allow GitHub to replace files that already have the same names.
5. The one v16.3.30 verification Markdown file is new; keep it.
6. Commit the upload.
7. Wait for the GitHub Pages `pages build and deployment` workflow to finish successfully.
8. Reload the published site. The service-worker namespace is new for v16.3.30, so the updated runtime will replace the previous cached UX layer.

DO NOT
------
- Do not create a subfolder for these files.
- Do not delete unrelated existing repository files.
- Do not rename the files.
- Do not upload only selected files from this package.

WHAT CHANGED
------------
- Long CETa/Career Classroom lessons now display one resumable learning section at a time while preserving all accepted source instruction.
- Classroom saves exact section progress and resumes at that section.
- Each section ends with a short Pause & retrieve prompt.
- Home, header Continue, and Study now share one state-aware next-action engine.
- Unseen required instruction routes to Classroom; due reviews and saved Study sessions route to Study.
- Focus Mode now hides Study shortcuts and the Vocabulary Study Lab while a session is active.
- Student Mode is the default and hides Deployment / Release Notes until Builder Mode is explicitly opened.
- Study now has a one-field Park a site issue workflow for improvements that should wait until Builder Mode.
- Release notes, build metadata, audit record, service-worker cache, checksums, and QA documentation are updated.

FILES CHANGED OR ADDED BY THIS UPDATE
-------------------------------------
ADHD_AUTISM_AUDIT_REPORT.md
AU-ESET-301-v16.3.30-Executive-Function-Study-Flow-Verification.md
POST-UPDATE-QA.md
SHA256SUMS.txt
UPLOAD_README.txt
build-info.json
learn.js
release-notes-current.js
service-worker.js
site.js
study.js
styles.css
ux-system.js

The ZIP also contains every unchanged current production file so you can upload the entire extracted package directly into the repository root.

NO FILES ARE REMOVED BY THIS UPDATE.

POST-UPLOAD SPOT CHECK
----------------------
After deployment, verify these five things:
1. Fresh Week 1 Classroom shows a saved learning section such as `Section 1/21`, not the full 6,000-word lesson at once.
2. Advancing a learning section and refreshing returns you to the saved section.
3. A fresh learner's primary Continue action routes to Classroom; a due review or saved Study session routes to Study.
4. During an active Study Focus Mode session, Study shortcuts and Vocabulary Study are hidden.
5. `More` shows `Open Builder Mode`; Deployment and Release Notes appear only after Builder Mode is opened.

QA STATUS
---------
PASS FOR UPLOAD — final routed-artifact acceptance: 87 checks passed, 0 failed. See `POST-UPDATE-QA.md` and `AU-ESET-301-v16.3.30-Executive-Function-Study-Flow-Verification.md`.
