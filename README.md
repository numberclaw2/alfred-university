# Alfred University — AU-ESET 301 v16.3

AU-ESET 301 is a fictional, university-style independent-study environment built around two equal goals:

1. Prepare for the current ETA Associate Certified Electronics Technician (CETa) competency scope.
2. Build demonstrable electronics, hardware-test, and embedded-systems skill for an electronics / embedded career transition while continuing school.

It is not an accredited university, an ETA-endorsed course, an official exam, or a guarantee of certification or employment. The learner-facing Classroom is the instructional product.

## Current production state — v16.3.4

The accepted instructional baseline remains **v16.3**. Runtime patch **v16.3.4** completes the 31-week Teaching Media objective audit begun in v16.3.3.

Current deployment markers:

- Course release: `16.3`
- Runtime patch: `16.3.4`
- Objective evidence revision: `16.2`
- Cloud Sync protocol: `2`
- Build: `v16.3.4-teaching-media-final-audit-20260917-verified`
- Schedule revision: `2026-09-16-week1-reset`
- Teaching Media revision: `2026-09-17-31-week-final-audit-repair`
- Resource verification revision: `2026-09-17-v16.3.4`
- Service-worker cache: `alfred-u-v16-3-4-teaching-media-final-audit-20260917-verified`

The 31-week schedule remains unchanged from the accepted reset: **Week 1 is September 15–19, 2026** and **Week 31 is April 13–17, 2027**. Calendar identities and iCalendar UIDs remain preserved.

## What v16.3.4 changes

v16.3.4 is the final focused Teaching Media repair after a deployment-level audit found four remaining objective gaps.

- **Week 6:** adds a dedicated transformer turns-ratio lecture so transformer ratios are taught directly rather than inferred from impedance/filter material.
- **Week 12:** adds an actual soldering demonstration and a solder-defect/rework tutorial; NASA harness material is now correctly limited to harness-specific evidence.
- **Week 25:** replaces the generic Saleae support path with exact STM32 I²C and SPI capture tutorials and adds an explicit TI ADC path for analog sensor integrations.
- **Week 29:** adds tool-specific DMM, oscilloscope, and logic-analyzer refreshers plus solder/rework retention so the stated instrumentation/workmanship objectives have direct media support.
- Updates `AU-ESET-301-v16.3-Resource-Verification.md` to the current v16.3.4 31-week audit instead of leaving the older pre-v16.3.3 snapshot as the formal resource record.
- Backfills the missing v16.3.3 release-history entry and adds the v16.3.4 entry to the website Release Notes.

After the effective overlay is applied, all **31/31 modules** have objective-mapped Teaching Media. The effective system contains **107 media cards**, all source IDs resolve, and every card has explicit `source`, `role`, `use`, `watchFor`, and `gap` metadata.

## v16.3.3 foundation

v16.3.3 performed the broad content-level Teaching Media audit and upgraded Weeks 7, 8, 13, 14, 16, 17, and 18 with stronger university/manufacturer/industry material. v16.3.4 closes the four residual gaps found when the deployed 31-week system was audited again.

Alfred-authored lessons remain the complete primary instruction. External video, university material, manufacturer training, standards, and documentation are reinforcement, demonstration, alternate explanation, and reference depth—not substitutes for missing Alfred teaching.

## What v16.3.4 does not change

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
- the hardware-oriented embedded-systems direction of the course

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

## Files and sources of truth

- `curriculum-data.js` — accepted v16.3 lesson/curriculum source.
- `teaching-media-overrides.js` — v16.3.4 effective Teaching Media overlay.
- `learn.html` / `learn.js` — authoritative Classroom rendering and completion path.
- `release-notes.js` / `patch-notes.js` — website Release Notes data and renderer.
- `AU-ESET-301-v16.3-Resource-Verification.md` — current 31-week Teaching Media verification record, revised for v16.3.4.
- `semantic-repair.js` — semantic-evidence and standards compatibility.
- `assessment-data.js` / `assessment-engine.js` — reviewed assessment identities and runtime.
- `academic-content.js` / `practical-completion.js` — labs and practical gates.
- `course-data.js` — 125-event calendar source.
- `build-info.json` — deployment marker.
- `service-worker.js` — offline/cache behavior.

## Deployment

For the v16.3.4 final Teaching Media repair, replace these files at the repository root:

- `teaching-media-overrides.js`
- `release-notes.js`
- `AU-ESET-301-v16.3-Resource-Verification.md`
- `build-info.json`
- `service-worker.js`
- `README.md`

No change to `learn.html` is required because the v16.3.3 deployment already loads `teaching-media-overrides.js` in the correct position.

Temporary `.patch` files from the earlier v16.3.3 staging package are not part of production and may be deleted if still present.

No frontend build, package installation, Cloudflare Worker redeployment, D1 migration, progress reset, or browser-site-data clearing is required.

## Post-deployment verification

After GitHub Pages deploys:

1. `build-info.json` reports runtime patch `16.3.4` and build `v16.3.4-teaching-media-final-audit-20260917-verified`.
2. `service-worker.js` uses cache `alfred-u-v16-3-4-teaching-media-final-audit-20260917-verified`.
3. Release Notes show **v16.3.4** first and **v16.3.3** immediately below it.
4. Week 6 Teaching Media includes `Transformers (Part 1)`.
5. Week 12 Teaching Media includes the DigiKey soldering demonstration and Adafruit solder-defect/rework guide.
6. Week 25 uses exact Saleae STM32 I²C/SPI tutorials rather than the generic Saleae support landing page.
7. Week 29 exposes DMM, oscilloscope, logic-analyzer, and rework refreshers with path-specific roles.
8. Calendar, assessments, progress, Cloud Sync, lesson text, and study-guide assignments remain unchanged.

Production Cloud Sync endpoint:

`https://alfred-university-sync.totallywill13.workers.dev`

Cloud Sync protocol 2 and the existing progress record structure remain unchanged.
