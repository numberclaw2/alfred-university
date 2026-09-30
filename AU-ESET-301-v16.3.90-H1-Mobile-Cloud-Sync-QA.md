# AU-ESET 301 v16.3.90-H1 — Mobile Cloud Progress QA

**Date:** 2026-09-30  
**Scope:** Mobile/global Cloud Sync progress freshness and Home Course Completion truth only.  
**Cloud Sync protocol:** 2 (unchanged)

## Reported defect

A connected mobile client could show **0% Course Completion** even though the synchronized Alfred student record was already at **6%**.

## Root cause

Two independent behaviors combined:

1. `cloud-sync-status.js` was global, but it only verified `/health` and displayed server-health status. It did **not** pull/merge the learner's progress record on ordinary pages. The full protocol-2 progress pull/merge lived in `progress.js` and ran automatically only after opening `progress.html`.
2. The Home card labeled **Course Completion** calculated its percentage from completed calendar events, while Student Progress calculated course completion from the 31-week classroom stage model. The two surfaces could therefore display different percentages even after local data was current.

## Repair

- Added protocol-2 progress POST/merge to the global Cloud Sync runtime on connected pages other than `progress.html`.
- Preserved `progress.js` as the sync owner on the Progress page to avoid competing sync engines there.
- Preserved per-record timestamps and last-write-wins behavior.
- Older cloud records cannot overwrite newer local mobile records.
- Untouched/default local event shells are not uploaded as progress.
- Home rerenders when cloud progress is merged.
- Home Course Completion now uses the same 31-week × 7-stage classroom completion model as Student Progress.
- A global page does not present server health alone as proof that progress has synchronized; the badge becomes Active after the progress merge succeeds.
- Cloud Sync protocol remains 2.

## QA executed

### JavaScript syntax

`node --check cloud-sync-status.js` — **PASS**

### Exact hotfix core test

Mocked a mobile device with empty local progress and a cloud record containing enough Week 1/Week 2 classroom completion for 13 completed stage units out of 217.

Expected:

`13 / 217 = 5.99% → 6%`

Result — **PASS**

- cloud records merged locally
- Course Completion resolved to 6%
- record timestamps preserved for future uploads

### Adversarial timestamp merge

Injected an older cloud record against a newer local mobile record.

Result — **PASS**

- newer local record remained authoritative
- older cloud record did not overwrite it
- untouched default shells were not uploaded

### Mobile browser runtime

Chromium viewport: **390 × 844**

Mocked healthy protocol-2 `/health` and `/sync` responses.

Result — **PASS**

- global cloud merge executed
- Home Course Completion changed from 0% to 6%
- Cloud badge ended in Active state after synchronization
- no horizontal overflow at 390 px

## Acceptance boundary

This package is locally/runtime verified, but it is **not yet a deployed-site acceptance**. After upload, verify:

1. exact files are committed to `main`;
2. GitHub Pages deploys the exact commit successfully;
3. the live `cloud-sync-status.js` matches this H1 file;
4. the user's real mobile browser pulls the cloud record and shows the expected 6%.

Per Alfred governance, the user's real browser result overrides local/static QA.
