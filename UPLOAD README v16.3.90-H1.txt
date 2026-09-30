ALFRED UNIVERSITY AU-ESET 301
v16.3.90-H1 MOBILE CLOUD PROGRESS TRUTH HOTFIX

Upload these replacement files to the repository root, preserving the names exactly:

1. cloud-sync-status.js
2. release-notes-v16.3.90.js
3. ALFRED PROJECT GOVERNANCE.md

Also included for documentation only:

4. AU-ESET-301-v16.3.90-H1-Mobile-Cloud-Sync-QA.md
5. UPLOAD README v16.3.90-H1.txt

IMPORTANT
- Do not rename cloud-sync-status.js.
- Do not change the Student Sync Key.
- Cloud Sync protocol remains 2.
- This hotfix does not change Week 2 teaching, assessment content, calendar dates, progress IDs, or the accepted v16.3.90 assessment repair.
- service-worker.js is intentionally NOT replaced in this package. The current v16.3.90 service worker uses network-first fetching for JavaScript and already injects cloud-sync-status.js on navigation. Replacing only the global sync script avoids an unnecessary service-worker/cache migration for this defect.

AFTER UPLOAD
Wait for GitHub Pages deployment. Then open Alfred on the phone. A normal navigation/reload should fetch the new global sync script. The Home Course Completion should pull the protocol-2 cloud record and match Student Progress (currently expected: 6%).

Do not consider the repair accepted until the real mobile browser confirms the synced percentage.
