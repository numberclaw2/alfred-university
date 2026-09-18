# Alfred University — AU-ESET 301 v16.3

AU-ESET 301 is a fictional, university-style independent-study environment built around two equal goals:

1. Prepare for the current ETA Associate Certified Electronics Technician (CETa) competency scope.
2. Build demonstrable electronics, hardware-test, and embedded-systems skill for an electronics / embedded career transition while continuing school.

It is not an accredited university, an ETA-endorsed course, an official exam, or a guarantee of certification or employment.

## Current production state — v16.3.5

The accepted instructional curriculum remains **v16.3**. Runtime patch **v16.3.5** upgrades Teaching Media from a reinforcement-only layer into an independently instructional explanation pathway across all 31 modules.

Current deployment markers:

- Course release: `16.3`
- Runtime patch: `16.3.5`
- Objective evidence revision: `16.2`
- Cloud Sync protocol: `2`
- Build: `v16.3.5-teaching-media-self-reliance-20260917-reference-sync`
- Schedule revision: `2026-09-16-week1-reset`
- Teaching Media revision: `2026-09-17-31-week-self-reliance`
- Resource verification revision: `2026-09-17-v16.3.5-self-reliance`
- Service-worker cache: `alfred-u-v16-3-5-teaching-media-self-reliance-reference-sync-20260917`

The 31-week schedule is unchanged: **Week 1 is September 15–19, 2026** and **Week 31 is April 13–17, 2027**. Calendar identities and iCalendar UIDs are preserved.

## What v16.3.5 changes

The stronger v16.3.5 rule is: a learner should be able to use the Teaching Media stage as an independent explanation path rather than depending on the Alfred lesson to fill instructional gaps.

The current production overlay updates **31/31 weeks** and defines **177 effective Teaching Media cards**. Coverage includes DC/AC circuits, instrumentation, components, semiconductors, power supplies, analog and digital electronics, solder/rework/ESD, schematics/datasheets, C and computer architecture, embedded C/STM32, UART/I2C/SPI, cabling/fiber, RF/spectrum analysis, requirements/V&V, safe bring-up, galvanic isolation, firmware diagnostics, Python hardware-test automation, fault injection/root cause, technical evidence portfolios, and continuing retention.

Teaching Media does **not** replace the course’s required labs, projects, measurements, soldering, coding, debugging, troubleshooting demonstrations, assessments, mastery gates, or physical evidence.

## What v16.3.5 does not change

This patch does not change:

- the 62 primary Alfred lessons
- the 24 labs or practical evidence rules
- instructional objectives or standards mappings
- CETa/Career 50/50 program balance
- assessments, question identities, answers, or mastery thresholds
- study-guide assignments
- calendar dates, event IDs, or iCalendar UIDs
- progress keys, saved progress, or assessment history
- Cloud Sync protocol 2 or Student Sync Key behavior
- module sequencing
- lesson SVGs or the accepted mobile visual system

## Current files of record

- `curriculum-data.js` — accepted v16.3 lesson/curriculum source.
- `teaching-media-overrides.js` — earlier v16.3.3/v16.3.4 targeted Teaching Media overlay, retained.
- `teaching-media-self-reliance.js` — v16.3.5 self-reliance overlay loaded after the earlier override.
- `learn.html` / `learn.js` — authoritative Classroom rendering and completion flow.
- `AU-ESET-301-v16.3-Resource-Verification.md` — current 31-week Teaching Media verification record.
- `release-notes.js` — historical release record through v16.3.4.
- `release-notes-current.js` — current v16.3.5 release entry, loaded after the historical record.
- `patch-notes.js` — release-note renderer.
- `build-info.json` — deployment marker.
- `service-worker.js` — offline/cache behavior.

## Deployment

Upload **every file in the supplied v16.3.5 reference-sync ZIP to the repository root**, replacing matching files and adding `release-notes-current.js`.

No Worker redeployment, D1 migration, progress reset, calendar re-import, or Cloud Sync migration is required.

## Post-deployment verification

After GitHub Pages deploys:

1. `build-info.json` reports runtime patch `16.3.5`.
2. `service-worker.js` uses `alfred-u-v16-3-5-teaching-media-self-reliance-reference-sync-20260917`.
3. Release Notes displays v16.3.5 above v16.3.4.
4. Search can find the v16.3.5 release note.
5. About and Deployment Notes identify v16.3.5 as the current runtime.
6. Document Center describes Resource Verification as the current v16.3.5 Teaching Media verification.
7. `AU-ESET-301-v16.3-Resource-Verification.md` identifies the 31-week self-reliance standard.
8. Learn continues loading `teaching-media-overrides.js` followed by `teaching-media-self-reliance.js`.
9. Calendar, assessments, progress, Cloud Sync, lesson text, and study-guide assignments remain unchanged.

Production Cloud Sync endpoint:

`https://alfred-university-sync.totallywill13.workers.dev`
