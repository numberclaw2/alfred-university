# AU-ESET 301 v16.3.44 — Classroom Parking Lot Verification

Date: 2026-09-21
Scope: Learn/Classroom access to the existing v16.3.43 Cloud-synced Parking Lot only.

## UX placement decision

The Parking Lot control is placed in the Classroom hero's persistent utility group, between **Quiet Mode** and **Glossary**.

This location is intentional:

- parking a side thought is an always-available learning utility, not a lesson stage;
- the learner can reach it from any Classroom stage without leaving Learn;
- it does not compete with the seven-stage lesson rail, Continue/Previous controls, mastery gates, or instructional content;
- it sits beside the two existing tools that also remain available throughout a lesson;
- on mobile it remains in the Classroom control cluster and opens a contained modal rather than inserting another long section into the lesson.

The modal presents the two existing parking categories separately:

1. **Curiosity** — technical questions or rabbit holes to explore later.
2. **Site issue** — website defects/improvements to handle later in Builder Mode.

A small count badge shows how many active parked items exist without demanding attention when the lot is empty.

## Persistence architecture

v16.3.44 does not create a second parking store. It reuses v16.3.43:

- `alfred-u-study-v13` local cache;
- `parking:<id>` Cloud Sync records;
- per-item timestamps;
- deletion tombstones;
- Cloud Sync protocol 2.

Items created from Learn are therefore the same records shown in Study and synced through Progress.

Learn performs a lightweight parking-only cloud merge on Classroom load, when the Parking Lot is opened, and when connectivity returns. Offline creation remains local and can sync later.

## Functional Chromium tests

### Focused two-device parking test

15/15 checks passed:

- Parking Lot button is inside the Classroom utility group.
- Control order is Quiet Mode → Parking Lot → Glossary.
- Modal opens.
- Curiosity and Site issue forms are both present.
- Both item types render after capture.
- Category labels remain distinct.
- Learn-created items retain the current Classroom week.
- Cloud endpoint receives independent `parking:<id>` records.
- Count badge updates.
- A second device with empty local parking restores both items from Cloud Sync.
- Done writes a deletion tombstone.
- Deleted item disappears on the deleting device.
- Deletion propagates to the first device after merge.
- Offline creation persists locally.
- Zero JavaScript page errors occurred.

### Full production-script-order Classroom test

The actual `learn.html` DOM and production script order were executed in Chromium 144.

Desktop 1440×1000: 8/8 checks passed.

- Week 07 lesson rendered.
- Parking Lot control visible.
- Dialog visible after activation.
- Dialog fits viewport.
- Captured item renders.
- Badge updates.
- Escape closes dialog.
- Zero runtime errors.

Mobile 390×844: 8/8 checks passed with the same criteria.

Total production-runtime checks: **16/16 PASS**.

## Regression boundaries

Compared with the accepted v16.3.43 baseline, only these runtime files changed or were added:

- `learn.html`
- `learn-parking.js` (new)
- `learn-parking.css` (new)
- `service-worker.js`
- `build-info.json`
- `release-notes-current.js`

No curriculum, assessment, standards, lesson data, Career/CETa traceability, Study parking implementation, Progress sync logic, glossary behavior, or existing visual-theme stylesheet was modified.

## Acceptance

**PASS.** The Parking Lot is now available where a learner is most likely to need it—inside Learn, but outside the lesson sequence—while preserving the single shared v16.3.43 parking/sync model and the accepted v16.3.42 educational architecture.
