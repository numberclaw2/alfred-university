# AU-ESET 301 v16.3.66 — Ahead-of-Calendar Mastery Support + CETa Errata QA

**Date:** September 26, 2026  
**Baseline:** exact successful GitHub Pages artifact for v16.3.65  
**Scope:** pacing semantics, resume/study behavior, calendar completion truth, and Study Guide errata only. No calendar compression and no curriculum rebuild.

## Governing pacing rule

- **Calendar = sustainable baseline pace.**
- **Mastery/evidence = actual advancement and completion truth.**
- The learner may work ahead of the calendar.
- Working ahead does **not** move dates, rewrite course weeks, or create a new January schedule inside Alfred.
- If the accelerated personal target proves too aggressive, the original calendar remains intact as the healthy fallback.

## Calendar preservation

- `course-data.js`: intentionally unchanged.
- `Alfred University - AU-ESET 301 - Simplified Course Calendar.ics`: intentionally unchanged.
- Existing 125 calendar events and IDs remain unchanged.
- Existing schedule revision remains `2026-09-20-current-classroom-stage-and-workload-sync`.
- v16.3.66 only changes how shared UI explains baseline-vs-actual progress and how one prep item derives completion after its practical evidence already exists.

## Ahead-of-calendar behavior

- Classroom already supports opening any course week and stores progress per week.
- Existing `learningResumeWeek()` logic remains authoritative for Resume Learning and can follow work beyond the scheduled calendar week.
- Home and Calendar now explicitly distinguish **schedule baseline** from **Learning resume point**.
- Study now keeps a started ahead-of-calendar week selectable even before much Study content is available. It still reveals only teaching sections actually reached in Classroom.
- No future lesson content is unlocked merely by selecting a Study week.

## Completion-truth repair

The lone `REQUIRED PREP` / `sessionKind=prep` calendar record can no longer become falsely overdue after the practical/application evidence it prepared has already been completed. This is derived from existing application evidence; it does not auto-pass a lab or mastery gate.

## CETa Study Guide errata repair

Alfred previously mapped five official sixth-edition corrections (pp. 68, 102, 138, 202, 224). The current ETA errata sheet also contains corrections on **pp. 23, 47, 48, 74, and 78**. v16.3.66 adds all five to the same structured `errata` system and attaches each notice to the Study Guide record whose printed-page range contains that page.

Current structured mapped errata count: **10**.

New mappings:
- p.23 — resonance example numeric/square-root correction.
- p.47 — AC formula `13.2KΩ` → `132.6KΩ`.
- p.48 — Ω symbols for R1 / XL1 / XC1.
- p.74 — common-base/common-collector amplifier wording correction.
- p.78 — Chapter 9 Quiz #9 answer C.

Official source: `https://www.etai.org/6thEdASTErrataSheet.pdf`

## Protected systems

No changes were made to:
- curriculum lesson prose or sequencing;
- CETa competency identities;
- Career standards;
- assessment banks or answer keys;
- lab definitions or project definitions;
- mastery thresholds;
- Teaching Media assignment inventory;
- Study Guide Required/Study/Reference page counts;
- calendar dates/events/ICS;
- Cloud Sync protocol;
- saved progress keys.

## Required post-upload check

After upload, confirm `build-info.json` reports runtime patch `16.3.66`, reload once so the new service worker takes control, then verify:
1. Calendar still shows the original dates.
2. Open a future week in Classroom, do some work, and confirm Resume Learning points there while Calendar still shows the scheduled baseline.
3. Open Study for that future week and confirm only reached teaching appears.
4. Confirm Study Guide cards touching the repaired printed pages show the ETA errata warning.

## Validation results

- JavaScript syntax: **PASS** for `ceta-study-guide-map.js`, `site.js`, `study.js`, `learn.js`, `release-notes-v16.3.66.js`, and `service-worker.js`.
- HTML parser smoke: **PASS** for `learn.html`, `study.html`, and `patch-notes.html`.
- Service-worker CORE references: **PASS — 0 missing local assets**.
- Calendar event count: **PASS — 125**.
- `course-data.js`: **byte-for-byte unchanged** from the deployed v16.3.65 artifact.
- Simplified Course Calendar ICS: **byte-for-byte unchanged** from the deployed v16.3.65 artifact.
- Study Guide structured errata: **PASS — 10 mapped corrections**, including all five new official ETA items.
- Browser graphical smoke: **NOT CLAIMED**. Headless Chromium in this container timed out during startup with the same DBus/zygote environment limitation seen in prior Alfred QA; no graphical PASS was inferred from that environment failure.

### Calendar-owner hashes preserved

- `course-data.js` SHA-256: `6dcd0a266f789765806a914865c3cc9b37ca9635f5ea35e8b88f2007c43d91ed`
- `Alfred University - AU-ESET 301 - Simplified Course Calendar.ics` SHA-256: `ab9c1ec20b21694e8e12fc2f0cb6eef1da846c26bfae1906c15de8603c1ecb6e`

These hashes match the exact successful v16.3.65 GitHub Pages deployment artifact used as the baseline.
