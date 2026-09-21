# AU-ESET 301 v16.3.41 — Assessment Route Reconciliation

## Purpose

This reconciliation addresses the critical v16.3.40 defect where repaired semantic tasks existed in the canonical assessment registry but the Classroom could still render stale `lesson.integrated.semanticTasks` entries.

## Runtime contract

v16.3.41 establishes one authoritative learner-facing route:

1. `ALFRED_ASSESSMENT.semanticTasks` is the canonical semantic-task registry.
2. Each Career lesson receives a prerequisite-correct `semanticTeaching` list derived from that registry.
3. The legacy-compatible `integrated.semanticTasks` list is synchronized to the same canonical task set.
4. `learn.js` resolves semantic tasks through the repaired semantic-teaching list first and falls back only for compatibility.

This prevents older embedded task arrays from reintroducing assessment-before-instruction defects.

## Reconciled mastery locations

- **C3.5 — logic-analyzer acquisition/decoding:** mastery remains in Week 18 after logic-analyzer onboarding.
- **C4.3 — strip/crimp/strain-relief workmanship:** mastery remains in Week 19 after the physical interconnect process is taught.
- **C5.5 — controlled fault injection:** mastery remains in Week 28 after the validation/fault-injection sequence is taught.
- **C13.6 — application/interview feedback loop:** mastery remains in Week 31 after the feedback-loop lesson.
- **C12.2–C12.5 — Git/CLI and documentation:** Week 12 now contains the missing CLI, lab-note, report, and handoff instruction before mastery.
- **C6.4 — bitwise reasoning:** Week 14 now explicitly teaches bit positions, AND/OR/XOR, shifts, masks, and changed-context practice before mastery.

## Stale routes removed from learner-facing lessons

The following known stale task IDs are not present in live learner-facing routes after v16.3.41 reconciliation:

- `SEM-C3-03-079`
- `SEM-C4-12-078`
- `SEM-C12-22-086`
- `SEM-C13-30-087`

## Acceptance result

The fresh runtime suite confirmed that learner-facing semantic task IDs match the canonical registry for **all 31 Career lessons**, and that each of the **81 Career standards** has exactly one prerequisite-complete mastery route.
