# AU-ESET 301 v16.3.31 — Post-Update QA

**QA date:** September 19, 2026  
**Baseline:** v16.3.30  
**Candidate:** v16.3.31 `v16.3.31-lesson-review-navigation-question-backlinks-20260919`  
**Result:** **PASS FOR UPLOAD**

## Targeted acceptance

- PASS — Previous section is available at the top and bottom of Classroom learning sections.
- PASS — Reviewing earlier material does not reduce the saved furthest/resume position.
- PASS — Forward review navigation stops at the learner's already reached resume point; it cannot skip into unreached future instruction.
- PASS — Normal `I answered · continue` remains the only path that unlocks a new future section.
- PASS — 186/186 lesson-question locations have a direct same-lesson teaching-section review target: 124 integrated checks + 62 required lesson gates.
- PASS — Review links preserve a session return marker and expose `Back to question`.
- PASS — Returning to the question restores its exact anchor without changing official lesson progress.
- PASS — All review-map targets point to valid teaching sections.
- PASS — `learn.js`, `release-notes-current.js`, and `service-worker.js` pass JavaScript syntax checks.
- PASS — v16.3.30 vocabulary click/double-click behavior and the v16.3.30 executive-function systems remain present in the baseline files.

## Protected systems

No curriculum content, standards mapping, Teaching Media, assessment scoring/answers, mastery formulas, labs, projects, calendar identities, Progress state, Cloud Sync protocol, glossary dataset, or branding was changed.

---

## Previous QA record

# AU-ESET 301 v16.3.30 — Post-Update QA

**QA date:** September 19, 2026  
**Baseline:** v16.3.29 `v16.3.29-glossary-coverage-section-highlighting-20260919`  
**Candidate:** v16.3.30 `v16.3.30-executive-function-study-flow-20260919`  
**Result:** **PASS FOR UPLOAD**

## Scope

This QA verifies the targeted executive-function study-flow update only. It does not reopen the accepted v16.3 curriculum, Teaching Media, assessment banks, labs, calendar identities, mastery formulas, Cloud Sync protocol, glossary definitions, or branding assets.

## JavaScript / metadata checks

- PASS — `node --check site.js`
- PASS — `node --check ux-system.js`
- PASS — `node --check study.js`
- PASS — `node --check learn.js`
- PASS — `node --check release-notes-current.js`
- PASS — `node --check service-worker.js`
- PASS — `build-info.json` parses and reports runtime patch `16.3.30`.
- PASS — protected metadata remains course release `16.3`, evidence revision `16.2`, Cloud Sync protocol `2`.
- PASS — the v16.3.30 release is the first/current entry in `release-notes-current.js`.
- PASS — service-worker cache namespace advanced to v16.3.30.
- PASS — all 172 service-worker CORE file references resolve to files in the current production artifact; zero missing.

## Classroom segmentation checks

A deterministic curriculum/runtime harness was run against the current 31-week curriculum.

- PASS — all **62 integrated lessons** produce a valid resumable segment plan.
- PASS — segment counts range from **10 to 21**; no lesson produces an empty/invalid plan.
- PASS — Week 1 CETa lesson produces **21** saved learning sections.
- PASS — Week 1 Career lesson produces **14** saved learning sections.
- PASS — a fresh Week 1 CETa render shows **section 1/21**, not all technical teaching blocks at once.
- PASS — advancing from the first section persists `current: 1` and marks section `0` complete in `learning.lessonSegments.lesson-0`.
- PASS — the final section renders competency evidence and the required lesson gate.
- PASS — old week records without `lessonSegments` remain valid and begin at section 1.

## State-aware next-action checks

A deterministic shared-action harness verified the new `AlfredNextAction` priority order.

- PASS — fresh Week 1 learner → **Classroom** / required instruction.
- PASS — saved Classroom segment state → Classroom detail includes the exact saved section, e.g. `CETa Lesson · Section 4 of 21`.
- PASS — due spaced review → **Study** / Review Queue.
- PASS — saved Study session → **Study** / Resume Study.
- PASS — Home hero and persistent header both consume the same shared next-action owner in source.
- PASS — Study recommendation consumes the same owner and does not start generic retrieval ahead of unseen required instruction.

## Focus Mode / issue parking / Student Mode checks

- PASS — Focus Mode CSS now suppresses `.ux-study-shortcuts`.
- PASS — Focus Mode CSS now suppresses `#vocabulary-study-section`.
- PASS — active Study workspace remains the focus-mode task owner.
- PASS — one-field `Park a site issue` is installed in the existing parking panel and stores site items with `kind: "site"`.
- PASS — Student Mode is the default when no preference is stored.
- PASS — Deployment and Release Notes are hidden in Student Mode and restored by the single Builder Mode toggle.
- PASS — existing curiosity parking entries without `kind` remain backward compatible.

## Native visual inspection

The exact v16.3.30 files were loaded into Chromium using the same self-contained/routed-asset technique required in this environment because ordinary localhost and `file://` browser navigation is blocked.

Native routed-artifact QA completed successfully for the changed workflows plus a representative 10-page matrix at both **1440 × 1000** and **390 × 844**. Key screenshots were captured for Week 1 Classroom and active Study Focus Mode.

Observed results:

- PASS — header/search/current-week controls remain visually coherent.
- PASS — Week 1 reports `CETa Lesson · Section 1/21` instead of exposing the previous giant continuous lesson.
- PASS — desktop composition preserves the accepted institutional visual hierarchy.
- PASS — mobile composition remains within the 390px viewport with no new obvious horizontal-overflow regression in the inspected Classroom surface.
- PASS — existing glossary guidance and lesson-stage navigation remain present.

The final routed-artifact acceptance harness produced **87 PASS checks and 0 FAIL checks**. It verified fresh and saved Classroom state, final-section gating, Home routing for fresh/due-review/saved-Study states, Focus Mode isolation, issue parking, Student/Builder Mode, desktop/mobile overflow, and representative page rendering. Ordinary live-host navigation remains blocked in this execution environment, so production post-upload acceptance should still confirm the deployed GitHub Pages origin after its workflow completes.

## Protected-system comparison

No intended changes were made to:

- `curriculum-data.js` lesson source wording;
- `assessment-data.js` or scoring engines;
- Teaching Media data/overrides;
- lab/project definitions;
- calendar event IDs, dates, or UIDs;
- Progress record identity scheme;
- Cloud Sync protocol;
- glossary definitions / 599-term source dataset;
- branding image assets.

## Acceptance repair found during QA

The first Student Mode visual check found that footer link display rules could override the HTML `hidden` attribute for Deployment / Release Notes. A narrow CSS rule was added so builder-only links are forcibly hidden in Student Mode and restored in Builder Mode. The complete 87-check harness was rerun after this repair and passed with **0 failures**.

## Acceptance

**PASS FOR UPLOAD.**

The candidate implements the approved minimum effective intervention: one manageable Classroom section at a time, exact resume state, earlier micro-retrieval, one state-aware next action, restored Focus Mode isolation, and a small Student/Builder boundary without adding another productivity system.
