AU-ESET 301 — v16.3.81 WEEK 3 REMEDIATION

WHY THIS PACKAGE EXISTS
The connected GitHub integration can read the repository but returned HTTP 403 for both direct file creation and branch creation. No repository changes have been committed from ChatGPT.

FILES
1. week3-remediation-v16.3.81.js
2. release-notes-v16.3.81.js
3. APPLY v16.3.81.mjs
4. AU-ESET-301-v16.3.81-Week-3-Remediation-QA.md

RECOMMENDED APPLICATION
Place files 1–4 in the repository root, then run from a checked-out repository root:

node "APPLY v16.3.81.mjs"

The installer will:
- add the v16.3.81 overlay after the v16.3.80 CETa authority script on every applicable HTML surface;
- add the overlay to the Lab Center;
- add the v16.3.81 release-note loader;
- update build-info.json;
- refresh the service-worker cache key and CORE list;
- run source-level guard checks.

IMPORTANT
The source update intentionally reports PENDING_DEPLOYMENT_QA, not final VERIFIED_PASS. After the files are uploaded/deployed, the production artifact must be audited before Week 3 is formally closed.

UNCHANGED BY DESIGN
- course-data.js calendar dates
- Simplified Course Calendar.ics
- Cloud Sync protocol 2
- Week 2 VERIFIED_PASS content
- the four focused Week 3 Required media resources
