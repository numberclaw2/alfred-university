# AU-ESET 301 v16.3.88 — Week 2 Assessment Runtime Repair QA

## Verdict

**PACKAGE QA PASS — deployment verification pending user upload.**

## User-visible failure

Week 2 could open `quiz.html` and display:

- **Practice could not load**
- “The release files may be incomplete…”

This was not caused by missing release files.

## Root cause

The Week 2 weekly mastery definition created in v16.3.74 correctly required:

- 12 total questions
- 6 CETa
- 6 Career
- CQ1204–CQ1209 as the six Career questions

Those six Career questions existed and were mapped to the correct Week 2 Career teaching sections.

However, they used the custom audit status:

`week2-career-v16.3.74-reviewed`

The shared assessment selector only treats a question as active when:

`audit.status === 'editorially-reviewed'`

Therefore the actual eligible Week 2 weekly pool was:

- CETa: 6
- Career: 0

The selector correctly threw `Insufficient reviewed Career questions`, which `quiz.js` converted into the generic “Practice could not load” page.

## Repair

v16.3.88 keeps the six existing Career questions and their IDs, prompts, answers, standards, explanations, and review routes unchanged.

The new runtime overlay normalizes CQ1204–CQ1209 to the canonical selector status:

`editorially-reviewed`

It preserves the prior custom status in `audit.previousStatus` and records the v16.3.88 repair revision.

No CETa/Career weighting was reduced.

## Runtime smoke tests

Using the exact v16.3.87 deployed artifact as the baseline, with the v16.3.88 files applied:

- Week 2 weekly mastery selector: **PASS**
- Total selected questions: **12**
- CETa selected: **6**
- Career selected: **6**
- CQ1204–CQ1209 active/eligible: **6/6**
- Attempts 1–10 all assemble successfully: **PASS**
- Week 2 supplemental lesson quizzes: **PASS**
- Week 2 lab quiz: **PASS**
- Existing question IDs and answer keys: **UNCHANGED**
- Cloud Sync protocol: **2**
- Guided Practice v16.3.87 runtime repair: **PRESERVED**

## HTML/runtime wiring

- `quiz.html` loads v16.3.88 after the existing Week 2 assessment/evidence overlays and before `assessment-engine.js`.
- `assessments.html` loads the same repair overlay.
- service worker caches both plain and versioned v16.3.88 overlay URLs.
- service worker navigation decoration injects the overlay into stale cached `quiz.html` / `assessments.html` documents when absent.
- Release Notes loads v16.3.88.

## Governance repair

Assessment QA must execute the actual selector/launch route. A declared question-ID list and a declared 6/6 track mix do not prove the engine can assemble the form.

## Scope / regressions

This release does not change:

- Week 2 CETa teaching
- Week 2 Career teaching
- Week 2 source-authentic visuals
- Week 3 teaching or acceptance
- lab evidence requirements
- calendar
- Study Guide
- Teaching Media
- saved progress IDs
- Cloud Sync protocol

## Browser limitation

A fresh graphical browser click-through is not claimed. The failing selector path itself is executed directly against the same assessment runtime/data contract that `quiz.js` uses. Post-upload commit, Pages artifact, service-worker, and deployed-route verification remain required before v16.3.88 is frozen.
