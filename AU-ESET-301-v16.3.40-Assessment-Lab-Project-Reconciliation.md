# AU-ESET 301 v16.3.40 — Assessment / Lab / Project Reconciliation

## Purpose

This report reconciles the v16.3.40 dependency-first Career reconstruction against the independent v16.3.39 acceptance findings. It focuses on assessment-before-instruction, future-concept leakage, and evidence-route timing. It does not redesign the website.

## Corrected premature mastery routes

| Standard | v16.3.39 defect | v16.3.40 instructional home | v16.3.40 mastery route |
|---|---|---|---|
| C3.5 | Logic-analyzer configuration was required in Week 3 before a bus transaction or analyzer onboarding existed. | Week 18 — known-good I²C transaction followed by logic-analyzer acquisition/decoder setup. | `SEM-C3-18-1640B` |
| C4.3 | Strip/crimp/strain-relief workmanship was assessed in Week 12 although the physical harness procedure is taught in Week 19. | Week 19 — harness preparation, crimping, insulation support/strain relief, orientation, continuity/short verification. | `SEM-C4-19-1640B` |
| C5.5 | Formal fault injection was grouped with Week 13 troubleshooting even though controlled injection/recovery belongs later. | Week 28 — known-good baseline → reversible fault → predicted signature → detection → restoration/retest. | `SEM-C5-28-1640B` |
| C13.6 | Application/interview feedback-loop mastery was required in Week 30 before the explicit feedback-loop lesson. | Week 31 — outcome log → repeated actionable gap → smallest repair → new evidence → re-entry. | `SEM-C13-31-1640B` |

## Repaired split standards and evidence routes

The prior 78-standard inventory was not preserved merely for compatibility. Three overloaded standards were split and three explicit standards added:

- **C6.3 / C6.7:** aggregate data structures are separated from values/addresses/pointers/lifetime.
- **C8.4 / C8.7:** timer/event/interrupt proof is separated from ADC known-input conversion proof.
- **C12.1 / C12.7:** status/diff/staging/commit/history is separated from branch/tag/known-good-baseline control.

The runtime now contains **81 Career standards**. All 81 have source provenance and a required semantic evidence route.

## Semantic task reconciliation

The prior runtime contained 87 total semantic tasks: 74 CETa + 13 Career aggregate tasks. v16.3.40 retains the 74 CETa tasks, removes the seven Career aggregate routes that contained timing defects, and replaces them with eleven prerequisite-correct Career routes.

Final runtime: **91 semantic tasks = 74 CETa + 17 Career**.

The affected domains are C3, C4, C5, C6, C8, C12, and C13. Unaffected Career domain routes remain in place.

## Lesson/practice alignment repairs

### Week 3
The UART worked example and SPI/logic-analyzer mastery task are removed. Required work now uses the bench supply, DMM, and oscilloscope only. The logic analyzer is mentioned only as a clearly deferred Week 18 tool.

### Week 13
Troubleshooting examples are protocol-neutral. I²C ACK/NACK, UART, and logic-analyzer assumptions were removed. Formal deliberate fault injection is explicitly deferred to Week 28.

### Week 15
The concurrent-work example now uses LED heartbeat plus a digital input/sample task. Serial protocols and ADC configuration are not used as learner responsibilities here.

### Week 16
The lesson now continues beyond the GPIO/SWD baseline into one explicit timer/event proof and one explicit ADC known-input proof before C8.4/C8.7 mastery evidence is requested.

### Week 17
Python is taught from zero before serial I/O: interpreter/source/output → variables/types → conditionals → loops → functions → imports → exceptions → files → bytes/text → serial contract → pySerial pipeline → parsing/validation → evidence logger.

### Week 18
I²C is carried through one complete datasheet-to-wire-to-transaction-to-logic-analyzer path before SPI is introduced as a comparison. UART is reactivated only after its Week 17 foundation.

## Labs and projects

No existing lab or project was deleted merely because the instructional route moved. Existing practical evidence remains valid when it occurs after the prerequisite-complete lesson. The v16.3.40 overlay changes the teaching/mastery route for the affected standards while retaining existing project/lab IDs and saved-history compatibility.

## Acceptance result

The native V8 production-runtime QA executed the actual curriculum/assessment scripts in production order and passed **62/62 checks** with zero failures. The checks include standard counts, semantic routes, moved/split/add standards, future-concept gates, Week 17 Python sequencing, Week 18 I²C-first sequencing, Week 16 timer/ADC teaching, provenance resolution, CETa preservation, and aesthetic-file hash comparisons.

A headless Chromium launch was also attempted in the container, but the installed Chromium process did not initialize successfully even for a trivial data URL; therefore this report does **not** claim browser-render acceptance from that binary. The runtime acceptance result is based on direct execution of the production JavaScript in the container's V8 runtime plus static file/version/hash validation.
