# Alfred University — AU-ESET 301 v16.3

AU-ESET 301 is a fictional, university-style independent-study environment built around two equal goals:

1. Prepare for the current ETA Associate Certified Electronics Technician (CETa) competency scope.
2. Build demonstrable electronics, hardware-test, and embedded-systems skill for an electronics / embedded career transition while continuing school.

It is not an accredited university, an ETA-endorsed course, an official exam, or a guarantee of certification or employment. The learner-facing Classroom is the instructional product.

## Current production state — v16.3.3

The accepted instructional baseline remains **v16.3**. Runtime patch **v16.3.3** is a surgical Teaching Media update on top of the accepted v16.3.2 runtime.

The current deployment markers are:

- Course release: `16.3`
- Runtime patch: `16.3.3`
- Objective evidence revision: `16.2`
- Cloud Sync protocol: `2`
- Build: `v16.3.3-teaching-media-20260917-verified`
- Schedule revision: `2026-09-16-week1-reset`
- Teaching Media revision: `2026-09-17-objective-mapped-content-verified`
- Service-worker cache: `alfred-u-v16-3-3-teaching-media-20260917-verified`

The 31-week schedule remains shifted so **Week 1 is September 15–19, 2026** and **Week 31 is April 13–17, 2027**. Calendar identities and iCalendar UIDs remain preserved.

## What v16.3.3 changes

v16.3.3 changes only Stage 4, **Teaching Media**.

The resource layer was re-audited against the actual instructional objectives instead of treating a valid URL, broad documentation page, competency list, or library landing page as proof that a resource teaches the required material.

Targeted Teaching Media replacements or refinements are applied to Weeks:

- 7 — transformers, inductive loads, relays, motors
- 8 — semiconductor devices and MOSFET switching
- 13 — schematic reading and evidence-driven troubleshooting
- 14 — C programming foundation and memory/pointers
- 16 — STM32CubeIDE, GPIO, PWM, ADC/DMA, USART, bring-up
- 17 — UART capture/decoding and Python serial work
- 18 — I2C/SPI capture, decoding, timing, and layered diagnosis

The update uses the runtime overlay `teaching-media-overrides.js`. `learn.html` loads it immediately after `curriculum-data.js`, before Classroom rendering begins.

## What v16.3.3 does not change

This patch does **not** change:

- the 62 primary Alfred lessons
- instructional objectives or standards mappings
- CETa/Career 50/50 program balance
- labs or practical evidence requirements
- assessments, question identities, answers, or mastery thresholds
- calendar dates, event IDs, or UIDs
- study-guide assignments
- progress keys, saved progress, or assessment history
- Cloud Sync protocol or Student Sync Key behavior
- module sequencing
- lesson SVGs or mobile visual behavior

Alfred-authored lessons remain the complete primary instruction. External video, university material, manufacturer training, standards, and documentation are reinforcement and alternate explanation paths.

## Classroom sequence

Every week retains the seven-stage learner path:

1. Start Here
2. CETa Lesson
3. Career Lesson
4. Teaching Media / accessible text path
5. Guided and independent practice
6. Lab or application
7. Weekly Mastery

## Instructional baseline

The accepted v16.3 instructional architecture preserves:

- 31 weeks
- 62 primary lessons
- 24 labs
- 262 CETa competency rows
- 78 Alfred Career standards
- 87 subject-specific semantic evidence tasks
- 223 reviewed objective-bank questions
- the cumulative Week 18 embedded hardware gate
- two 100-question Alfred CETa readiness runs at ≥85% as the internal readiness rule

The objective-bank evidence revision intentionally remains **16.2** for compatibility with qualifying historical evidence.

## Current schedule

The schedule revision remains `2026-09-16-week1-reset`.

- Week 1: September 15–19, 2026
- Week 31: April 13–17, 2027
- 125 calendar events / 125 preserved UIDs

Teaching Media v16.3.3 does not move or recreate calendar events.

## Files and sources of truth

- `curriculum-data.js` — accepted v16.3 lesson/curriculum source.
- `teaching-media-overrides.js` — v16.3.3 objective-mapped Teaching Media overlay.
- `learn.html` / `learn.js` — authoritative Classroom rendering and completion path.
- `semantic-repair.js` — semantic-evidence and standards compatibility.
- `assessment-data.js` / `assessment-engine.js` — reviewed assessment identities and runtime.
- `academic-content.js` / `practical-completion.js` — labs and practical gates.
- `course-data.js` — 125-event calendar source.
- `build-info.json` — deployment marker.
- `service-worker.js` — offline/cache behavior.
- `AU-ESET-301-v16.3-Resource-Verification.md` — carried-forward resource/provenance record; v16.3.3 Teaching Media supersedes it where the runtime overlay specifies a newer media assignment.

## Deployment

For the v16.3.3 Teaching Media update, upload these complete replacement files at the repository root:

- `learn.html`
- `service-worker.js`
- `build-info.json`
- `README.md`
- `teaching-media-overrides.js`

Replace matching files when prompted.

Do **not** upload `.patch` files. Any temporary files named:

- `learn.html.patch`
- `service-worker.js.patch`
- `build-info.json.patch`

can be deleted after the complete replacement files are in place.

No frontend build, package installation, Cloudflare Worker redeployment, D1 migration, progress reset, or browser-site-data clearing is required.

## Post-deployment verification

After GitHub Pages finishes deploying:

1. `build-info.json` must report runtime patch `16.3.3` and build `v16.3.3-teaching-media-20260917-verified`.
2. `service-worker.js` must use cache `alfred-u-v16-3-3-teaching-media-20260917-verified`.
3. `learn.html` must load `teaching-media-overrides.js` immediately after `curriculum-data.js`.
4. Week 7 Teaching Media should begin with the Texas Instruments / UT Austin transformer resource rather than the old scope-only media path.
5. Week 14 should use Harvard CS50x Week 1 C before the later memory/pointers material.
6. Weeks 16–18 should show the targeted ST and Saleae practical media.
7. Calendar, assessments, progress, Cloud Sync, and lesson content should remain unchanged.

Production Cloud Sync endpoint:

`https://alfred-university-sync.totallywill13.workers.dev`

Cloud Sync protocol 2 and the existing progress record structure remain unchanged.
