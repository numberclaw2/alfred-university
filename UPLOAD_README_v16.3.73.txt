ALFRED UNIVERSITY — v16.3.73 GLOBAL CLOUD SYNC STATUS
MANUAL UPLOAD PACKAGE

UPLOAD ALL FILES IN THIS ZIP TO THE ROOT OF:
numberclaw2/alfred-university

REPLACE existing files when GitHub asks.

FILES TO UPLOAD
1. cloud-sync-status.js                         NEW
2. release-notes-v16.3.73.js                  NEW
3. AU-ESET-301-v16.3.73-Global-Cloud-Sync-Status-QA.md  NEW
4. UPLOAD_README_v16.3.73.txt                 NEW
5. service-worker.js                          REPLACE
6. build-info.json                            REPLACE
7. BUNDLE_SHA256SUMS.txt                      NEW/optional verification file

DO NOT CHANGE
- parking-sync.js
- progress.js
- your Cloudflare Worker
- D1 database/bindings
- Student Recovery Key / Sync Key

AFTER UPLOAD
1. Wait about 1–2 minutes for GitHub Pages.
2. Refresh Alfred once.
3. Wait a few seconds, then refresh/navigate again so the new service worker controls the page.
4. You should see a compact Cloud status pill in the header:
   Active / Checking / Offline / Issue / Local.
5. Tap/click it to open Progress → Alfred Cloud Sync.

On iPhone, if the pill does not appear after the first refresh, fully close Alfred/Safari and reopen it once. Do not clear website data.
