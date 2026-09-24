AU-ESET 301 v16.3.59 — CETa STUDY GUIDE + OUTSIDE LITERATURE INTEGRATION

NO WORKFLOW IS REQUIRED.

UPLOAD TO THE REPOSITORY ROOT.

REPLACE:
- resources.html
- ceta-study-guide-private.js
- build-info.json
- patch-notes.html
- service-worker.js
- SHA256SUMS.txt

ADD:
- reading-library-integration.js
- release-notes-v16.3.59.js

WHAT THIS UPDATE DOES
- Keeps the accepted v16.3.58 Teaching Media/curriculum runtime unchanged.
- Adds all 62 CETa Study Guide records to a centralized searchable Engineering Library index.
- Adds the runtime outside-literature sources to that same index.
- Shows Required / Review / Study / Reference status without creating new obligations.
- Shows Study Guide page range, estimated time, purpose, focus, after-reading action, and ETA errata.
- Keeps contextual lesson placement and Teaching Media behavior unchanged.
- Makes Study Guide cards in Study show estimated time + after-reading action.
- Preserves private CETa PDF storage as device-local IndexedDB only.
- Adds v16.3.59 to Release Notes.
- Bumps the service-worker cache so the new files deploy cleanly.

VALIDATION COMPLETED
- reading-library-integration.js syntax: PASS
- ceta-study-guide-private.js syntax: PASS
- release-notes-v16.3.59.js syntax: PASS
- service-worker.js syntax: PASS
- build-info.json parse: PASS
- Resources script-order check: PASS
- Reading-index pure-data smoke test: PASS
- CETa baseline audited before implementation: 62 records, 18 Required records,
  64 Required printed pages, 241 Required minutes, 14 Required weeks,
  17 zero-new-Required weeks.
- No v16.3.58 Teaching Media placement/curriculum files are modified by this package.

After upload, tell ChatGPT:
uploaded v16.3.59
