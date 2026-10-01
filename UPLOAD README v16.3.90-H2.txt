ALFRED UNIVERSITY AU-ESET 301
v16.3.90-H2 — WEEK 3 READINESS UPDATE

UPLOAD THESE FILES TO THE REPOSITORY ROOT.

REPLACE EXISTING FILES:
1. week3-final-acceptance-v16.3.83.js
2. release-notes-v16.3.90.js
3. ALFRED PROJECT GOVERNANCE.md

ADD NEW FILE:
4. AU-ESET-301-v16.3.90-H2-Week-3-Readiness-QA.md

OPTIONAL / PACKAGE DOCUMENTATION:
5. UPLOAD README v16.3.90-H2.txt
6. SHA256SUMS.txt

WHY THE HISTORICAL week3-final-acceptance-v16.3.83.js FILENAME IS BEING REPLACED:
The current deployed loader already references this exact filename on Learn, and the current service worker injects it on assessment/lab surfaces. H2 intentionally uses that established compatibility hook so no HTML or service-worker migration is needed for this Week 3 retrofit.

WHAT H2 CHANGES:
- source-authentic visuals on 8/8 Week 3 CETa pages
- separate source-authentic occupational/equipment visuals on 8/8 Career pages
- fixes Week 2 / Week 3 question-ID collision
- Week 2 keeps CQ1204-CQ1209
- Week 3 uses unique CQ1210-CQ1214 for its newer meter/metrology items
- reconstructs CQ1196-CQ1203 on assessment-only surfaces
- Week 3 weekly mastery = 14 questions, actual 7 CETa / 7 Career
- LAB-003 knowledge gate = 6 questions, actual 3 CETa / 3 Career
- preserves LAB-003 ten-checkpoint evidence gate and physical-vs-simulation boundary
- preserves C3.8 Week-20 rehome
- Cloud Sync protocol 2 unchanged

AFTER UPLOAD:
1. Wait for GitHub Pages deployment to finish.
2. Reload/navigate the site while connected so the network-first service worker fetches the replacement JS.
3. Open Learn -> Week 3 and inspect both CETa and Career visuals.
4. Launch Week 3 weekly mastery; it must assemble 14 questions with 7 CETa and 7 Career.
5. Launch LAB-003 knowledge check; it must assemble 6 questions with 3 CETa and 3 Career.
6. Recheck Week 2 weekly mastery; it must remain 12 questions with 6 CETa and 6 Career.
7. Confirm Cloud Sync still reports protocol 2 and saved progress remains intact.

DO NOT CALL WEEK 3 FROZEN UNTIL THE DEPLOYED/CLIENT QA ABOVE PASSES.
