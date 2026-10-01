ALFRED UNIVERSITY AU-ESET 301
v16.3.90-H3 — WEEK 3 DIRECT-ENTRY RUNTIME INTEGRITY REPAIR

WHY THIS HOTFIX EXISTS
The exact deployed H2 artifact passed its full-context data tests, but internal direct-entry execution found that quiz.html, assessments.html, and labs.html still depended on service-worker HTML injection to receive the canonical Week 3 H2 state.

Without service-worker injection, the deployed H2 static routes still exposed:
- Week 3 mastery: 12 questions / 9 CETa + 3 Career
- LAB-003 knowledge: 5 questions / 4 CETa + 1 Career
- labs.html without the canonical 10-checkpoint Week 3 evidence gate on first direct load

H3 MAKES THE CRITICAL ROUTES SELF-SUFFICIENT.

UPLOAD ALL FILES IN THIS PACKAGE TO THE REPOSITORY ROOT.
REPLACE FILES WITH THE SAME NAME.

REPLACE:
1. quiz.html
2. assessments.html
3. labs.html
4. service-worker.js
5. build-info.json
6. release-notes-v16.3.90.js
7. ALFRED PROJECT GOVERNANCE.md
8. SHA256SUMS.txt

ADD:
9. AU-ESET-301-v16.3.90-H3-Week-3-Direct-Entry-QA.md
10. UPLOAD README v16.3.90-H3.txt

IMPORTANT CHECKSUM NOTE
The included root SHA256SUMS.txt is a FULL repository checksum ledger regenerated from the final H3 tree. Do not replace it with a package-only five/ten-file checksum list. The governance file now permanently records this rule.

AFTER UPLOAD
1. Wait for GitHub Pages build/deployment to finish.
2. Tell ChatGPT "uploaded".
3. ChatGPT will verify the exact commit, Pages run, generated artifact, H3 build metadata, service-worker cache, static direct-entry routes, Week 2 regression, and checksums.
4. One real-browser confirmation is still required before Week 3 can be frozen.

EXPECTED FINAL CONTRACT
- Week 3 CETa source-authentic visuals: 8/8
- Week 3 Career source-authentic visuals: 8/8
- Week 3 mastery: 14 total = 7 CETa + 7 Career
- LAB-003 knowledge: 6 total = 3 CETa + 3 Career
- LAB-003 evidence gate: 10 checkpoints
- Week 2 mastery regression: 12 total = 6 CETa + 6 Career
- C3.8: Week 20 future target, not Week 3/6
- Cloud Sync: protocol 2 unchanged
