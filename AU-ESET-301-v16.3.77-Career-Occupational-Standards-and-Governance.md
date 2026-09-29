# AU-ESET 301 — Career Occupational Standards & Readiness Governance

**Revision:** v16.3.77 · September 29, 2026  
**Authority:** Current governing Career curriculum layer  
**Supersedes for Career acceptance:** prior rules that allowed lesson prose, media presence, CETa coverage, or an end-of-week lab by themselves to establish Career completion.

## Governing principle

> **Career readiness is proven by observable technician performance and evidence. CETa knowledge supports Career performance but never substitutes for it.**

This reconstruction preserves the 31-week technical spine and the existing C1–C13 IDs so current routing is not broken. It adds two missing occupational domains—**C14 Production Workmanship, Quality & Traceability** and **C15 Metrology, Calibration & Test Assets**—bringing the Career framework from 81 to **95 standards**.

## Proficiency ladder

- **L0 — Awareness:** Can explain what the tool/process is and why it matters. No occupational competence claim.
- **L1 — Guided Performance:** Can perform the task with Alfred providing the sequence, checkpoints, and expected evidence.
- **L2 — Independent Performance:** Can perform the task without step-by-step prompting in a known-good context and produce required evidence.
- **L3 — Diagnostic / Changed-Context Performance:** Can adapt the skill to a fault, changed setup, ambiguous evidence, or unfamiliar but bounded context and justify the next action.
- **L4 — Role-Proof Evidence:** Can produce authentic physical/software/test evidence that would survive a technical interview or supervisor review.

**L0/L1 do not establish technician readiness.** A skill counted toward the Technician Ready gate must meet its standard-specific L2/L3/L4 target and required evidence modality.

## Hard acceptance rules

- A procedural Career page cannot PASS if its primary learner experience is reading or watching.
- A video or demonstration is instruction, not learner-performance evidence.
- Simulation may prove reasoning but cannot prove physical handling, probing, soldering, rework, crimping, inspection, or fixture competence.
- A later lab cannot compensate for missing prerequisite instruction before the lab.
- CETa coverage cannot be counted as Career competency evidence.
- A fault-diagnosis standard requires a faulted or ambiguous condition, evidence collection, and a justified next action.
- A quality/workmanship standard requires explicit acceptance criteria; Alfred may not invent pass/fail rules.
- An instrument standard requires setup validity, expected result, measurement evidence, and limitations/status checks.
- A standard requiring Level 4 must have an authentic artifact tied to a real/representative physical or software test context.
- No week may be labeled VERIFIED_PASS until every assigned Career standard has a valid teaching route, immediate practice, assessment/repair route, and evidence plan.

## Page-level procedural gate

A procedural Career page cannot be labeled PASS until all required gates are present:

- occupational task
- beginner-first prerequisite teaching
- technician demonstration
- immediate learner action
- tool/equipment context when applicable
- failure/fault exposure when applicable
- physical-vs-simulation boundary
- required evidence artifact
- assessment/repair route
- occupational benchmark
- CETa/theory handoff

Diagnostic, quality/workmanship, and instrument pages receive additional mandatory gates defined in `career-occupational-governance-v16.3.77.js`.

## Readiness claims are now separate

- **CETa Ready:** Certification-knowledge gate. Separate from occupational competence.
- **Technician Ready:** Occupational performance gate. Requires evidence across core Career domains.
- **Alfred Complete:** Both CETa Ready and Technician Ready are satisfied. Embedded/test-automation extensions are reported separately.

The site must not claim whole-course **Technician Ready** while any CORE standard lacks the required evidence level. Objective-question scores cannot substitute for physical or authentic performance evidence.

## Occupational domains

- **C1 — Bench Safety & ESD** (6 standards)
- **C2 — Schematics, Datasheets & Design Intent** (6 standards)
- **C3 — Measurement & Instrumentation** (8 standards)
- **C4 — Assembly, Soldering, Rework & Harnesses** (6 standards)
- **C5 — Troubleshooting & Root Cause** (6 standards)
- **C6 — C Programming Fundamentals** (7 standards)
- **C7 — Embedded C & MCU Architecture** (6 standards)
- **C8 — STM32 Bring-Up & Debugging** (7 standards)
- **C9 — UART, I²C & SPI Interfaces** (6 standards)
- **C10 — Python Test Automation & Data** (6 standards)
- **C11 — Hardware Test, Validation & Quality** (6 standards)
- **C12 — Engineering Workflow & Documentation** (7 standards)
- **C13 — Portfolio, Interview & Career Transition** (6 standards)
- **C14 — Production Workmanship, Quality & Traceability** (6 standards)
- **C15 — Metrology, Calibration & Test Assets** (6 standards)

## New standards added in v16.3.77

### C14.1 — Production Workmanship, Quality & Traceability
Given a controlled work instruction, traveler, drawing, or test procedure, identify the correct revision, unit/serial identity, required tools/materials, process steps, hold points, and acceptance criteria before beginning work.

**Required final level:** L3 — Diagnostic / Changed-Context Performance  
**Accepted evidence:** completed traveler/work-instruction check, revision/unit/tool verification.

### C14.2 — Production Workmanship, Quality & Traceability
Inspect an electronic assembly, soldered connection, connector, or harness against defined workmanship criteria and classify the condition as acceptable, rework-required, reject/escalate, or inconclusive without inventing acceptance criteria.

**Required final level:** L4 — Role-Proof Evidence  
**Accepted evidence:** inspection record, accept/rework/reject decision, annotated evidence image.

### C14.3 — Production Workmanship, Quality & Traceability
Create a nonconformance or anomaly record that separates observed facts from suspected cause, preserves unit/revision/test context, and avoids unauthorized repair or disposition.

**Required final level:** L3 — Diagnostic / Changed-Context Performance  
**Accepted evidence:** nonconformance/anomaly record, fact-vs-hypothesis separation.

### C14.4 — Production Workmanship, Quality & Traceability
Maintain traceability among unit/serial number, hardware revision, component/part identity, firmware or test-software version, tool/fixture identity, repair action, and retest result.

**Required final level:** L4 — Role-Proof Evidence  
**Accepted evidence:** traceability record, unit/revision/software/tool linkage.

### C14.5 — Production Workmanship, Quality & Traceability
Perform authorized rework or assembly only within the defined process and acceptance criteria, then complete required inspection and electrical/functional verification before declaring the work complete.

**Required final level:** L4 — Role-Proof Evidence  
**Accepted evidence:** authorized rework evidence, inspection result, electrical/functional retest.

### C14.6 — Production Workmanship, Quality & Traceability
Distinguish technician/operator authority from engineering, quality, safety, or configuration-control authority and stop/escalate when the required disposition exceeds the learner’s authorized process.

**Required final level:** L3 — Diagnostic / Changed-Context Performance  
**Accepted evidence:** escalation decision, documented stop/hold point.

### C15.1 — Metrology, Calibration & Test Assets
Before using an instrument, fixture, cable, probe, or measurement accessory for acceptance evidence, verify identity, calibration/status information when applicable, ratings, visible condition, and required configuration.

**Required final level:** L4 — Role-Proof Evidence  
**Accepted evidence:** instrument/fixture pre-use record, calibration/status verification.

### C15.2 — Metrology, Calibration & Test Assets
Perform available self-test, zero, compensation, known-reference, or sanity checks and recognize when a failed pre-use check invalidates subsequent measurements.

**Required final level:** L3 — Diagnostic / Changed-Context Performance  
**Accepted evidence:** self-test/reference-check result, instrument validity decision.

### C15.3 — Metrology, Calibration & Test Assets
Use accuracy, resolution, tolerance, repeatability, loading, bandwidth, and stated uncertainty at technician depth to decide whether a measurement can support a PASS/FAIL or troubleshooting conclusion.

**Required final level:** L3 — Diagnostic / Changed-Context Performance  
**Accepted evidence:** measurement capability calculation/justification, acceptability decision.

### C15.4 — Metrology, Calibration & Test Assets
Reject or quarantine measurement evidence when calibration/status is expired or unknown, the setup exceeds ratings, configuration is invalid, or the instrument/accessory condition makes the result untrustworthy.

**Required final level:** L4 — Role-Proof Evidence  
**Accepted evidence:** invalid-measurement disposition, remove-from-service/escalation record.

### C15.5 — Metrology, Calibration & Test Assets
Use a known-good reference, substitution, independent measurement, or controlled fixture check to distinguish a DUT failure from a cable, probe, fixture, instrument, or test-software failure.

**Required final level:** L4 — Role-Proof Evidence  
**Accepted evidence:** DUT-vs-test-system isolation record, known-good comparison.

### C15.6 — Metrology, Calibration & Test Assets
Maintain a simple inspection/maintenance record for test assets and fixtures, identify preventive-maintenance needs, and remove or escalate equipment that cannot be trusted or safely used.

**Required final level:** L3 — Diagnostic / Changed-Context Performance  
**Accepted evidence:** asset inspection/maintenance record, service/escalation decision.

## 31-week curriculum rule

Every week now has an explicit occupational target level and required artifact. Only a week explicitly marked `VERIFIED_PASS` after the v16.3.77 hard-gate audit may be described as Career-accepted. At this baseline, **Week 2 is the only verified-pass week**; all others remain remediation-required until reworked and re-audited. This is intentional and prevents another false “finished” declaration.

## Final Technician Ready role-proof artifacts

- safe bench/pre-power record
- DMM measurement record
- bench-supply/current-limit record
- oscilloscope capture with documented setup
- schematic/test-point plan
- component-level fault-isolation case
- solder/rework inspection and verification
- harness/crimp/continuity evidence
- controlled test procedure with PASS/FAIL result
- quality/nonconformance/traceability record
- calibration/status/pre-use instrument record
- DUT-vs-fixture/test-system isolation case
- technical test/repair report

## Source benchmark policy

Job postings are used as **current task evidence**, not as universal standards. O*NET/BLS provide broad occupational duties; NASA/IPC provide workmanship/metrology guardrails; current employer postings provide reality checks on tools and bench behaviors. No employer-specific requirement becomes a universal course requirement unless it is supported by broader occupational/industry evidence or is deliberately labeled a specialization.

## Release discipline

Future lesson updates must run `node career-governance-qa-v16.3.77.cjs <site-root>` before packaging. A week may not be changed to `VERIFIED_PASS` unless the QA gate passes and the human audit confirms the demonstrations, immediate practice, evidence artifacts, and physical boundaries are educationally sound—not merely present as fields.
