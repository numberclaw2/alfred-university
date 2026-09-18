# Alfred University — AU-ESET 301 v16.3

AU-ESET 301 is a fictional, university-style independent-study environment built around two equal goals:

1. Prepare for the current ETA Associate Certified Electronics Technician (CETa) competency scope.
2. Build demonstrable electronics, hardware-test, and embedded-systems skill for an electronics / embedded career transition while continuing school.

It is not an accredited university, an ETA-endorsed course, an official exam, or a guarantee of certification or employment.

## Current production state — v16.3.6 accepted

The accepted instructional curriculum remains **v16.3**. Runtime patch **v16.3.6** is the accepted Teaching Media content-completion release following the adversarial v16.3.5 audit, corrective repair, and full 31-week post-repair re-audit.

**Acceptance status:** **31/31 PASS** — zero BLOCKER and zero MATERIAL DEFECT results in the final standalone Teaching Media re-audit.

Current production markers:

- Course release: `16.3`
- Runtime patch: `16.3.6`
- Objective evidence revision: `16.2`
- Cloud Sync protocol: `2`
- Build: `v16.3.6-teaching-media-final-pots-accepted-20260918`
- Schedule revision: `2026-09-16-week1-reset`
- Teaching Media revision: `2026-09-18-final-pots-31-week-standalone-accepted`
- Resource verification revision: `2026-09-18-v16.3.6-final-pots-accepted`
- Service-worker cache: `alfred-u-v16-3-6-teaching-media-final-pots-accepted-20260918`

The 31-week schedule is unchanged: **Week 1 is September 15–19, 2026** and **Week 31 is April 13–17, 2027**. Calendar identities and iCalendar UIDs remain preserved.

## Teaching Media architecture

The accepted load order is:

1. `curriculum-data.js` — accepted v16.3 curriculum/source registry.
2. `teaching-media-overrides.js` — earlier targeted Teaching Media layer.
3. `teaching-media-self-reliance.js` — v16.3.5 independent-path attempt retained for provenance and existing assignments.
4. `teaching-media-content-completion.js` — v16.3.6 accepted content-completion and metadata-correction layer.

The v16.3.6 overlay uses append/de-duplicate behavior for missing instruction and narrowly patches inaccurate media-card claims. The first post-repair audit triggered a corrective pass for Week 1 ESD, Week 7 semiconductor sequencing, Week 12 Git metadata, Week 27 test-workflow sourcing, and Week 28 productivity/project planning; the final re-audit accepted all 31 weeks. It does not rewrite the accepted Alfred lessons.

Teaching Media is intended to provide the explanatory preparation layer. It does **not** replace required labs, projects, measurements, soldering/rework practice, coding, debugging, controlled troubleshooting/fault work, assessments, mastery gates, or physical evidence.

## What v16.3.6 does not change

This release does not change:

- the 62 primary Alfred lessons;
- the 24 labs or practical evidence rules;
- instructional objectives or standards mappings;
- CETa/Career 50/50 program balance;
- assessments, question identities, answers, or mastery thresholds;
- Study Guide assignments;
- calendar dates, event IDs, or iCalendar UIDs;
- progress keys, saved progress, or assessment history;
- Cloud Sync protocol 2 or Student Sync Key behavior;
- module sequencing;
- lesson SVGs or the accepted mobile visual system.

## Files of record for v16.3.6

- `curriculum-data.js` — accepted v16.3 curriculum/source.
- `teaching-media-overrides.js` — earlier targeted media overlay.
- `teaching-media-self-reliance.js` — v16.3.5 media layer retained.
- `teaching-media-content-completion.js` — accepted v16.3.6 content-completion layer.
- `learn.html` — Classroom load order.
- `AU-ESET-301-v16.3-Resource-Verification.md` — final v16.3.6 Teaching Media acceptance record.
- `release-notes.js` + `release-notes-current.js` — historical/current release record.
- `build-info.json` — deployment marker.
- `service-worker.js` — offline/cache behavior.

## Deployment rule

Upload every file in the final v16.3.6 acceptance-sync package to the repository root, replacing matching files. No Worker/D1 migration, progress reset, calendar re-import, or Cloud Sync change is required.

Production Cloud Sync endpoint remains unchanged:

`https://alfred-university-sync.totallywill13.workers.dev`


### Final Week 20 closure
The final semantic re-audit added direct POTS loop-start instruction for tip/ring, off-hook current, dial tone, and ringing. v16.3.6 is accepted at 31/31 PASS after that correction.
