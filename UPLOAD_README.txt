AU-ESET 301 v16.3.35 — CALENDAR EXECUTION MODERNIZATION

Upload every file in the changed-files-only ZIP to the GitHub repository root, replacing files with the same names.

This release intentionally preserves all 125 Calendar event IDs and all 125 ICS UIDs. Do not delete/recreate calendar identities manually.

After GitHub Pages deploys:
1. Hard refresh Calendar.
2. Confirm build-info.json reports runtimePatch 16.3.35.
3. Open Calendar and verify Current required stage + Next scheduled.
4. Open a milestone (for example Foundation Gate 1) and confirm it no longer routes to Week 01.
5. Confirm the downloaded ICS imports as an update to the existing UID set rather than creating duplicate calendar identities.

CHANGED-FILES-ONLY PACKAGE
Files in ZIP: 11
- Alfred University - AU-ESET 301 - Simplified Course Calendar.ics
- AU-ESET-301-v16.3.35-Calendar-Execution-Modernization-Verification.md
- build-info.json
- calendar.html
- course-data.js
- release-notes-current.js
- service-worker.js
- SHA256SUMS.txt
- site.js
- styles.css
- UPLOAD_README.txt
