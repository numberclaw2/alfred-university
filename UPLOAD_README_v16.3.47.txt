AU-ESET 301 — v16.3.47 FINAL TEACHING MEDIA ACCEPTANCE

BASELINE
Upload these files on top of the currently uploaded v16.3.46 repository/site.

WHY A NEW PATCH NUMBER
v16.3.46 was the audited baseline. The closed-loop audit found and repaired additional rendered-UI/routing defects, so the corrected final state is versioned v16.3.47 instead of silently overwriting the accepted v16.3.46 cache boundary.

FINAL REPAIRS
- Explicit Required / Optional / Supporting status on every Teaching Media card.
- Required lesson resources are always visible; only supporting/optional resources collapse.
- Exact cross-week Teaching Media links can preview a future section without advancing progress.
- Back to Teaching Media returns to the actual origin week/card.
- Broad FOA lecture index removed from Teaching Media; equivalent broad FOA browsing already exists in Engineering Library.
- Obsolete v16.3.45 video-only integration layer retired and no longer loaded/cached.
- One authoritative full-resource Teaching Media map remains.

UPLOAD / OVERWRITE
- teaching-media-resource-integration.js
- teaching-media-lesson-integration.js
- learn.js
- learn.html
- styles.css
- service-worker.js
- build-info.json
- release-notes-current.js
- SHA256SUMS.txt
- AU-ESET-301-v16.3.47-Final-Teaching-Media-Acceptance.md
- AU-ESET-301-v16.3.47-Teaching-Media-Reconciliation.csv
- AU-ESET-301-v16.3.47-31-Week-Acceptance.csv
- AU-ESET-301-v16.3.47-Removed-Moved-Resource-Dispositions.csv
- AU-ESET-301-v16.3.47-Duplicate-Source-Reconciliation.csv
- AU-ESET-301-v16.3.47-Regression-Report.md
- UPLOAD_README_v16.3.47.txt

AFTER UPLOAD
The service-worker cache advances to alfred-u-v16-3-47-final-teaching-media-acceptance-20260921. Close older Alfred tabs and reopen/hard-refresh once so the new cache activates. No progress reset, local-storage reset, Cloud Sync migration, curriculum migration, or database migration is required.

POST-UPLOAD SMOKE CHECK (DEPLOYMENT ONLY — NOT ANOTHER CONTENT AUDIT)
1. Open Week 1 → Teaching Media; every card should show Required/Optional/Supporting plus Course connection.
2. Open one Course connection; confirm it lands on the named exact section.
3. Open an “Also used in” cross-week link ahead of current progress; confirm Reference preview appears and Return to my resume point does not move progress.
4. Use Back to Teaching Media; confirm it returns to the originating week/card.
5. Open a dense lesson section; all required resources should already be visible, while optional/supporting resources may be collapsed.
6. Open one YouTube-backed resource; iframe should load only after Watch inline.

If those six deployment checks render as described, no further Teaching Media content/architecture repair pass is expected before the planned outside-literature and CETa Study Guide phases.
