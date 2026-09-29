# AU-ESET 301 — v16.3.74 Week 2 Career Coequal Instruction Remediation QA

**Scope:** Week 2 Career lesson and its CETa handoffs only  
**Baseline:** deployed v16.3.73 Pages artifact  
**Reason for reopening Week 2:** production review showed that the five Career pages had good prose and lesson-level practice but zero point-of-use Career Teaching Media placements.

## Verdict

**PASS for implementation package, pending post-upload production verification.**

The remediation treats Career and CETa as co-equal instructional tracks. CETa supplies analytical tools; Career independently teaches how a technician uses those tools to predict, measure, isolate, discriminate, repair, verify, and document.

## 1. Five Career pages retained and upgraded

The original five-page troubleshooting progression is preserved:

1. Predict before measuring
2. Learn the signatures of common faults
3. Find the last good point and the first bad point
4. Choose one measurement that separates hypotheses
5. Change one thing, verify the repair, and preserve the evidence

Every page now contains all of the following runtime objects:

- a technician demonstration (`careerDemo`)
- an immediate page-level Career Skill Drill (`careerPractice`)
- a two-way CETa↔Career handoff (`trackHandoff`)
- a teaching visual/table/flow appropriate to the skill

This corrects the prior architecture where most rich media and contextual resources were attached to lesson 0 (CETa) while lesson 1 (Career) had none.

## 2. Point-of-use Career Teaching Media

### Required Career sources — 3

1. **Keysight — Troubleshooting Electronics Board with Handheld Instruments**
   - Page: Predict before measuring
   - Purpose: real electronics-manufacturing troubleshooting context
   - Boundary: learner watches the evidence/tool-selection workflow; unfamiliar LCR/scope/thermal procedures are not Week 2 skills.
2. **MIT PCB Design — Lecture 07: Debugging**
   - Page: Predict before measuring; reused on Last-good/first-bad and Verify/document
   - Required reading scope: Overview, Multimeters, and Strategies for Effective Debugging
   - Later-tool sections are explicitly deferred.
3. **RealPars — How to Find Open and Short Circuits Fast**
   - Page: Fault signatures
   - Use: open/short behavior plus practical DMM troubleshooting demonstration
   - Focus: 00:44 onward, especially 02:48 open troubleshooting and 06:13 short troubleshooting.

### Optional Study shown inline at the Career page — 4

- AAC Troubleshooting Open and Shorted Series Circuits → Fault signatures
- AAC Troubleshooting Strategies → Last-good/first-bad / split-half extension
- AAC Basic Troubleshooting Strategies worksheet → Discriminating measurement
- AAC Troubleshooting Series-Parallel Circuits → Discriminating measurement

These resources remain `destination: study` and `requirement: supporting`. The Learn renderer now accepts only placements explicitly marked `inlineStudy:true`, allowing optional Study to appear collapsed at the relevant Career page without becoming Required coursework.

## 3. Immediate practice is no longer delayed to the end

Each page now has point-of-use practice:

- Page 1: fill the expected-value / decision table before measuring
- Page 2: fault-injection reasoning for open/short/wrong-value/load/reference hypotheses
- Page 3: last-good / first-bad boundary plus split-half extension
- Page 4: choose-next-test decision matrix and information-value drill
- Page 5: unknown-fault Career Skill Drill plus repair/verification record

The prior lesson-level Guided Practice is retained as an integration layer, but it is no longer the first place the learner applies the concept.

## 4. CETa and Career pass the same model back and forth

All **7 Week 2 CETa teaching pages** receive a `trackHandoff` and all **5 Career pages** receive a reciprocal handoff.

Examples:

- topology → technician test boundaries → measured boundary returns to the topology model
- series/parallel → fault signatures → measured signature returns to shared-current/shared-voltage reasoning
- KCL/KVL → plausibility/discriminating tests → measured mismatch returns to a conservation equation
- mixed network → redraw into regions → last-good/first-bad isolates one region → recompute only that region
- loaded divider → unexpected node sag → Career separates wrong resistor from parallel loading → return to equivalent-resistance calculation

The Career lesson prerequisite text explicitly states that CETa is an analytical tool provider, not the lead instructional track.

## 5. Career mastery is now co-equal

The prior Week 2 weekly pool was configured as **10 CETa / 2 Career**.

v16.3.74 changes the runtime weekly mastery form to exactly **12 questions: 6 CETa / 6 Career**.

Six new original Career questions (`CQ1204`–`CQ1209`) assess:

- prediction before probing
- open-circuit signature
- last-good / first-bad isolation
- measurement information value
- repair verification / regression
- why changing multiple variables destroys causal evidence

Assessment-only pages (`quiz.html`, `assessments.html`) load `week2-career-assessment-v16.3.74.js` so the balanced form is used even though those pages do not load the full curriculum runtime.

## 6. Physical versus simulation proficiency

The final Career Skill Drill explicitly states:

- use the approved low-voltage Week 2 network only
- power down before rewiring and resistance/continuity checks
- do not create a direct supply short
- simulation can demonstrate troubleshooting reasoning
- physical proficiency requires real meter/probe/lead handling

This is a Career Skill Drill, not a second formal lab; the existing Week 2 practical/lab identity is preserved.

## 7. Rendering / UX changes

`learn.js` now supports three optional section-level structures:

- `trackHandoff`
- `careerDemo`
- `careerPractice`

The Learn resource selector also supports `inlineStudy:true`, which is narrowly scoped to deliberately placed Study resources. Generic Study resources do not suddenly appear inline across the course.

`styles.css` adds responsive cards for the new handoff/demo/practice blocks. `learn.html` cache-busts both `styles.css` and `learn.js` at v16.3.74.

## 8. Runtime QA targets

The integrated test harness confirms:

- Week 2 Career teaching pages: **5**
- Career pages with technician demonstration: **5/5**
- Career pages with immediate practice: **5/5**
- Career pages with two-way handoff: **5/5**
- CETa pages with Career handoff: **7/7**
- live Career target placements: **10**
- unique Required Career sources: **3**
- unique optional inline Study sources: **4**
- complete Week 2 Required media path: **7 sources total (4 CETa + 3 Career)**
- Week 2 weekly mastery: **12 questions**
- mastery mix: **6 CETa / 6 Career**
- six new Career question IDs present: **PASS**
- required MIT literature placement: **PASS**
- optional AAC worksheet literature placement: **PASS**

## 9. Regression boundaries

The package does not modify:

- `course-data.js`
- the course `.ics` calendar
- Week 2 CETa teaching content itself (only handoff metadata is added)
- Week 2 Study Guide page ranges or completion identity
- Week 3 curriculum
- Cloud Sync protocol/status logic
- saved lesson progress IDs
- existing formal lab/practical IDs

## 10. Production acceptance boundary

This package is not considered deployed until the GitHub Pages run succeeds and the deployed artifact reports runtimePatch `16.3.74`. After upload, verify the actual Pages artifact and execute the same Week 2 Career runtime assertions before closing the remediation.

## 11. Final static/runtime regression results

Pre-package checks on the merged v16.3.73 → v16.3.74 build:

- `week2-career-remediation-v16.3.74.js` syntax: PASS
- `week2-career-assessment-v16.3.74.js` syntax: PASS
- `learn.js` syntax after section-renderer extension: PASS
- `service-worker.js` syntax: PASS
- Week 2 Career pages with demo + practice + handoff: **5/5**
- Week 2 CETa pages with handoff: **7/7**
- Week 2 Career target placements: **10**
- unique Required Career resources: **3**
- unique inline optional Study resources: **4**
- total live Week 2 Required resources: **7** (4 CETa + 3 Career)
- Week 2 mastery question IDs present: **12/12**
- mastery track mix: **6 CETa / 6 Career**
- assessment-only runtime (`quiz.html` / `assessments.html`) patch: PASS
- Week 2 CETa explanatory content: **byte-equivalent at the data-object level except newly added handoff metadata**
- Week 3 regression: **7 CETa pages / 6 Career pages / 4 Required resources preserved**
- service-worker CORE local assets: **254 checked, 0 missing**
- HTML local references: **1,383 checked, 0 missing**
- `course-data.js`: unchanged from deployed v16.3.73
- course `.ics` calendar: unchanged from deployed v16.3.73

A headless Chromium screenshot attempt did not complete in this container because Chromium stalled on the environment's system-service/DBus limitations. No graphical-browser PASS is claimed. The new section renderer is validated through syntax checks, runtime data assertions, resource-placement resolution, responsive CSS inspection, and post-upload production verification will remain the final acceptance step.
