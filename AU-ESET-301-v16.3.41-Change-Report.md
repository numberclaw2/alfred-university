# AU-ESET 301 v16.3.41 — Change Report

## Release purpose

v16.3.41 is a focused final-adversarial-acceptance repair on top of v16.3.40. It does not replace the dependency-first curriculum architecture; it repairs the remaining runtime, first-use, traceability, and lesson-cohesion defects found by the fresh independent audit.

## Instructional changes

- Week 11 no longer requires logic-analyzer use before Week 18 onboarding.
- Week 12 now explicitly teaches command-line navigation, repository location, lab-note structure, test-report structure, and technical handoff before related mastery checks.
- Week 14 now explicitly teaches bit positions, AND, OR, XOR, shifts, masks, and changed-context bitwise practice before C6.4 mastery.
- Week 17's introductory conditional example is valid Python syntax.
- Duplicate repair-layer teaching blocks were merged/removed in Weeks 10, 22, 24, and 25.
- C1.5 was narrowed so Week 1 does not claim mastery of process-specific crimping/soldering procedures that are taught later.

## Assessment/runtime changes

- Reconciled canonical semantic tasks with both `lesson.semanticTeaching` and the legacy `lesson.integrated.semanticTasks` location.
- Updated `learn.js` so the Classroom uses the repaired semantic-teaching route and only falls back for compatibility.
- Removed stale learner-facing semantic routes that assessed later concepts too early.
- Preserved 91 runtime semantic tasks while keeping mastery weeks prerequisite-correct.

## Standards / dependency / provenance changes

- Career standards remain **81** total.
- Official CETa standards remain **262**, with identities and wording unchanged.
- C13.1–C13.5 prerequisite relationships were corrected so Week 30 standards do not depend on the Week 31 feedback-loop node.
- C11/C12 first-use and instructional-coverage metadata were reconciled.
- Git provenance now uses GitHub Skills **Introduction to Git** for the relevant beginner Git foundation.
- Regenerated the v16.3.41 standards provenance matrix, 31-week woven curriculum map, concept-level dependency graph, and source benchmark ledger.

## Presentation changes

None. No broad aesthetic changes were made. `styles.css` and `ux-system.css` are unchanged from v16.3.40.

## QA

Fresh adversarial runtime acceptance: **28/28 passed**.

A separate Chromium render attempt could not initialize in the container, including for a blank page, so no browser-render PASS is claimed. Deployment should receive the normal post-upload browser smoke test.
