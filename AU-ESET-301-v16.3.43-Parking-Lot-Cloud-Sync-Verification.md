# AU-ESET 301 v16.3.43 — Parking Lot Cloud Sync Verification

**Scope:** targeted Study parking-lot persistence/sync repair only.  
**Baseline:** accepted v16.3.42.  
**Cloud Sync protocol:** 2 (unchanged).  
**Curriculum / assessments / visual design:** unchanged.

## Root cause reproduced

The accepted v16.3.42 Study page stored both parking categories only inside `alfred-u-study-v13` in browser `localStorage`.

The Study-page sync path uploaded only `event:*` and `week:*` records. The Progress-page Cloud Sync path uploaded `event:*`, `week:*`, `readiness:*`, and `analytics:*` records. Neither path serialized the Study `parking` array, so Cloud Sync could not restore parking items on another device or after loss of local site storage.

## Repair

v16.3.43 adds `parking-sync.js`, a small shared parking-record layer used by both Study and Progress.

Each parked item now has an independent protocol-2 record:

`parking:<item-id>`

Active values carry the item ID, text, kind (`curiosity` or `site`), week, creation time, and update time.

Marking an item **Done** writes a tombstone using the same record key with `deleted: true`, `deletedAt`, and `updatedAt`. This prevents another device with an older active copy from resurrecting the deleted item.

Existing v16.3.42 parking items migrate automatically. Their existing IDs are preserved, and their original `at` timestamp becomes their initial cloud record time when possible.

Local storage remains the offline cache. Parking records are now included by:

- Study-page automatic cloud sync;
- Study-page immediate add/delete pushes;
- Progress-page manual **Sync Now**;
- Progress-page automatic cloud sync.

No Worker/D1 schema migration or Cloud Sync protocol bump is required because the existing protocol already synchronizes generic keyed records (the same mechanism used by additive `readiness:*` and `analytics:*` record families).

## Executed verification

### Source / syntax

PASS:

- `parking-sync.js` JavaScript syntax
- `study.js` JavaScript syntax
- `progress.js` JavaScript syntax
- `service-worker.js` JavaScript syntax
- `release-notes-current.js` JavaScript syntax
- Study and Progress load `parking-sync.js` before their page-specific runtime
- v16.3.43 cache/build markers are consistent
- Cloud Sync protocol remains 2

### Pure record-model tests

PASS:

- legacy local parking item → `parking:<id>` record migration
- curiosity/site item creation
- independent per-item record generation
- concurrent additions from two devices merge without whole-array overwrite
- deletion creates tombstone
- tombstone removes a remote active item
- stale pre-delete active record cannot resurrect a deleted item
- newer tombstone beats older local active record

### Chromium learner-facing sync harness

Chromium executed the actual v16.3.43 `study.js`, `progress.js`, and `parking-sync.js` against the current Study/Progress markup with a protocol-2 mock cloud endpoint.

PASS:

1. Device A added one **Curiosity · explore later** item and one **Site issue · fix later** item.
2. Both rendered immediately and produced independent `parking:<id>` sync records.
3. Reopening the Study page from the same local state retained both items.
4. A second device with empty Study local storage pulled both items from cloud records and rendered both categories correctly.
5. Marking the curiosity item **Done** on Device B produced a tombstone record.
6. Device A, starting from a stale local copy, received that tombstone and removed the item instead of resurrecting it.
7. A legacy v16.3.42 parking item opened on the Progress page was automatically migrated and included when **Sync Now** executed.
8. Progress sync payloads contained individual `parking:*` records rather than one whole parking-array record.

### Regression boundary

Cryptographic comparison against v16.3.42 confirms no change to:

- `styles.css`
- `ux-system.css`
- `curriculum-data.js`
- `career-curriculum-reconstruction.js`
- `assessment-data.js`
- `learn.js`
- `academic-state.js`

The repair does not alter curriculum, lesson sequence, CETa/Career standards, assessments, labs, projects, glossary behavior, progress identities, or visual design.

## Expected behavior after deployment

**Add on Device A → Sync → open/sync Device B → item appears.**

**Mark Done on either device → Sync → item disappears on the other device and stays deleted.**

If offline, add/delete operations remain stored locally and are sent when Cloud Sync next runs while connected.

## Acceptance

**PASS for the targeted parking-lot persistence defect.**

The fix is intentionally narrow and does not reopen the accepted v16.3.42 educational/curriculum baseline.
