# AU-ESET 301 — v16.3.75 Week 2 Final Career UX QA

**Scope:** Week 2 final UX/practice remediation only  
**Baseline:** production-deployed v16.3.74  
**Goal:** close the final two Week 2 gaps identified by the second acceptance audit without reopening the CETa content, Career media architecture, Study Guide scope, LAB-002, Week 3, calendar, or Cloud Sync.

## Final implementation verdict

**PASS for the v16.3.75 implementation package, pending post-upload production verification.**

The two targeted deficiencies are corrected:

1. Career Pages 3 and 4 now contain native interactive troubleshooting trainers rather than only text-described demonstrations.
2. Every question in the 12-question Week 2 mastery form now routes a miss to the exact teaching section and provides a return path to the saved mastery question review.

## 1. Career Page 3 — interactive fault-boundary training

`career-w02-last-good-first-bad` now contains a native measurement-counted trainer.

### Challenge 1 — four-point path

The learner sees expected readings but must choose which test points to measure. Actual values are revealed only when a point is selected. The interface counts measurements and asks the learner to identify:

- last-known-good point
- first-known-bad point

The configured case has a unique boundary:

- last known good = A
- first known bad = B

The trainer then compares the learner’s measurement count with an efficient target of two measurements.

### Challenge 2 — split-half extension

A longer eight-point path provides a second challenge so divide-and-conquer is performed rather than merely described. The unique boundary is:

- last known good = D
- first known bad = E

The efficiency target is three measurements. This trains the learner to sample high-information points instead of mechanically walking every node.

### Proficiency boundary

The trainer explicitly remains a reasoning exercise. Physical technician proficiency still requires safe real probe placement and DMM handling on an approved low-voltage circuit.

## 2. Career Page 4 — branching Troubleshooting Decision Trainer

`career-w02-discriminating-measurement` now contains a hidden-fault decision trainer with three possible faults:

- upper resistor open
- output shorted to ground
- source missing

The learner chooses among four candidate tests:

- measure Vout again
- measure source-side voltage
- power OFF and measure Vout-to-ground resistance
- measure voltage across the upper resistor

Each test returns a simulated reading generated from the hidden fault. Alfred then eliminates hypotheses whose predicted reading conflicts with the evidence.

The trainer:

- counts measurements
- records every chosen test/readout
- visually crosses out eliminated hypotheses
- identifies redundant low-information tests
- requires the learner to commit to a diagnosis
- reports diagnosis efficiency
- can rotate to a new hidden fault
- labels the resistance test as a power-off measurement

Exhaustive configuration testing confirms all three hidden faults are uniquely diagnosable within the configured efficiency target of two measurements or fewer:

- open upper resistor → 2 tests minimum
- output short → 1 test minimum
- source missing → 1 test minimum

## 3. Exact weekly-mastery repair routing

All 12 Week 2 mastery questions now carry explicit review metadata:

### Current Week 2 CETa

- `CQ1067` → Week 2 CETa → `w02-kcl-conservation-charge`
- `CQ1068` → Week 2 CETa → `w02-kvl-conservation-energy`
- `CQ0312` → Week 2 CETa → `w02-parallel-same-nodes`
- `CQ0316` → Week 2 CETa → `w02-divider-ideal-then-loaded`

### Cumulative Week 1 retrieval

- `CQ1088` → Week 1 Career → DMM mode/connection page (`concept-2`)
- `CQ0290` → Week 1 CETa → Ohm’s-law page (`concept-8`)

These two questions remain legitimate cumulative retrieval rather than being falsely routed to Week 2 content.

### Week 2 Career

- `CQ1204` → Predict before measuring
- `CQ1205` → Fault signatures
- `CQ1206` → Last-good / first-bad
- `CQ1207` → Discriminating measurement
- `CQ1208` → Repair / verify / document
- `CQ1209` → Repair / verify / document

Runtime validation confirms **12/12 routes resolve to existing teaching-page IDs**.

## 4. Miss → exact teaching section → back to question

After grading a mastery form, an incorrect question with review metadata displays:

**Repair this exact concept → [teaching section]**

The URL opens the correct week, CETa/Career lesson, and exact lesson page. Saved lesson progress is not moved backward.

Before leaving the assessment, Alfred stores the just-graded question-review state in session storage. The lesson page displays a targeted-repair banner with:

**← Back to mastery question**

Returning restores the exact prior question review, including:

- question prompt
- prior answer
- correct answer
- explanation
- study/source details
- standards
- retake controls

A direct runtime test of the `CQ1207` round-trip confirms the saved-question review restores successfully.

## 5. Existing Week 2 instructional architecture preserved

The final remediation does **not** change:

- 7 CETa teaching pages
- 5 Career teaching pages
- 5/5 Career demonstrations
- 5/5 immediate Career practices
- 7/7 CETa→Career handoffs
- 5/5 Career→CETa handoffs
- 4 Required CETa media sources
- 3 Required Career media sources
- 4 contextual optional AAC Study resources
- Week 2 Study Guide page ranges / completion group
- 6 CETa / 6 Career mastery balance
- LAB-002 identity

Week 2 therefore retains the co-equal theory + career architecture established in v16.3.74 while adding actual troubleshooting interaction and targeted correction.

## 6. Week 3 regression

Runtime verification after the v16.3.75 overlay confirms Week 3 remains:

- 7 CETa pages
- 6 Career pages
- 4 Required resources
- final acceptance status PASS

No Week 3 curriculum or assessment content was modified.

## 7. Calendar / source-data regression

Compared with the production v16.3.74 baseline:

- `course-data.js` SHA-256 remains `6dcd0a266f789765806a914865c3cc9b37ca9635f5ea35e8b88f2007c43d91ed`
- course calendar `.ics` SHA-256 remains `ab9c1ec20b21694e8e12fc2f0cb6eef1da846c26bfae1906c15de8603c1ecb6e`

No calendar, event, pacing, Cloud Sync protocol, saved progress ID, or formal lab identity is changed.

## 8. Code/runtime QA

- `week2-final-career-ux-v16.3.75.js` syntax: PASS
- `learn.js` syntax after interactive-trainer and mastery-return renderer changes: PASS
- `quiz.js` syntax after saved-question/repair-routing changes: PASS
- `release-notes-v16.3.75.js` syntax: PASS
- `service-worker.js` syntax: PASS
- boundary trainer unique-boundary tests: PASS (2/2 challenges)
- hidden-fault minimum-test matrix: PASS (3/3 faults)
- mastery review route resolution: PASS (12/12 questions)
- assessment-only route metadata: PASS (12/12 questions)
- saved mastery question restoration harness: PASS
- Week 2 Required media path remains 7 unique sources (4 CETa + 3 Career)
- Career inline optional Study remains 4 unique AAC resources
- Week 3 regression: PASS

- service-worker CORE local assets: **261 checked, 0 missing**
- local HTML `src` / `href` references: **1,392 checked, 0 missing**
- v16.3.75 overlay loaded exactly once on Learn, Study, Practice, Progress, Resources, Search, Quiz, and Assessments: **PASS (8/8)**
- v16.3.75 Release Notes loader on `patch-notes.html`: **PASS**

## 9. Graphical-browser boundary

No graphical Chromium acceptance is claimed. The local environment has previously blocked/stalled Chromium navigation due administrator/system-service limitations. v16.3.75 therefore uses executed curriculum/assessment runtime checks, an explicit saved-question DOM harness, trainer-state logic tests, JavaScript syntax validation, CSS/static inspection, service-worker/reference scans, and post-upload production Pages verification as the acceptance path.

## Acceptance matrix

| Requirement | Result |
|---|---|
| Week 2 CETa coherent and unchanged | PASS |
| Career co-equal with CETa | PASS |
| Career media/literature point-of-use | PASS |
| AAC optional, contextual | PASS |
| Page 3 actual fault-isolation interaction | PASS |
| Split-half performed, not merely described | PASS |
| Page 4 branching measurement selection | PASS |
| Hidden-fault evidence eliminates hypotheses | PASS |
| Measurement efficiency visible | PASS |
| Resistance-test power-off boundary | PASS |
| 6 CETa / 6 Career mastery | PASS |
| Every mastery question has exact review route | PASS |
| Cumulative Week 1 questions route to Week 1 | PASS |
| Mastery miss opens smallest relevant teaching section | PASS |
| Teaching section returns to saved mastery question | PASS |
| Study Guide future-topic boundaries preserved | PASS |
| LAB-002 identity preserved | PASS |
| Week 3 regression | PASS |
| Calendar/pacing unchanged | PASS |
| Cloud Sync protocol unchanged | PASS |

**Package verdict:** PASS, pending production deployment verification.
