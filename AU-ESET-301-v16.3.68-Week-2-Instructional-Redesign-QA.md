# AU-ESET 301 — v16.3.68 Week 2 Instructional Redesign QA

**Release:** v16.3.68  
**Scope:** Week 2 only  
**Baseline:** deployed v16.3.67 GitHub Pages artifact  
**Calendar policy:** no dates, event IDs, or iCalendar records changed

## Acceptance verdict

**PASS for the Week 2 redesign package.**

The learner-facing Week 2 path is now deliberately narrower and deeper: topology → series → parallel → KCL → KVL → mixed-network reduction → ideal/loaded voltage divider → prediction-based troubleshooting. The redesign removes unrelated future topics from the Week 2 completion path and replaces repetitive broad resource placement with bounded, section-specific teaching support.

## 1. Week 2 curriculum structure

### CETa lesson

The prior learner path contained 16 teaching sections and mixed the intended Week 2 DC-network content with unrelated future concepts. The core integrated CETa teaching prose is reduced from roughly **1,774 words across 16 sections to 976 words across 7 sections**, while worked examples, tables, retrieval, practice, and contextual resources are strengthened. v16.3.68 presents **7 required teaching sections**:

1. Read the circuit before touching the math
2. Series circuits: one path means one current
3. Parallel circuits: the same two nodes mean the same voltage
4. KCL: current cannot disappear at a node
5. KVL: every voltage rise and drop is accounted for around a loop
6. Mixed networks: simplify, redraw, solve, and work backward
7. Voltage dividers: learn the ideal case before adding the load

The visible Week 2 path no longer teaches electromagnetism, motors/generators, general RLC impedance, AC/RMS/duty-cycle theory, oscillators/PLLs, resonance/Q, filters/integrators/differentiators, or piezoelectricity as Week 2 requirements.

### Career lesson

The prior six-page troubleshooting lesson contained overlapping explanations. v16.3.68 presents **5 deliberate pages**:

1. Predict before measuring
2. Learn the signatures of common faults
3. Find the last good point and the first bad point
4. Choose one measurement that separates hypotheses
5. Change one thing, verify the repair, and preserve the evidence

The flow now follows a technician decision process rather than a list of troubleshooting facts.

## 2. Teaching-method QA

The redesigned pages use the following instructional sequence consistently:

- activate only the prerequisite knowledge needed now;
- state the physical meaning before the compact equation;
- show one worked model before independent transfer;
- use reasonableness checks as error detectors;
- ask for retrieval/explanation after the model;
- reduce scaffolding from “I do” to “We do” to “You do”;
- connect calculations to a concrete technician decision;
- keep unrelated future material out of the immediate learning path.

Examples added or strengthened include the 12 V / 2 kΩ / 4 kΩ series-KVL model, loaded-divider recalculation, an expected-versus-actual measurement table, a fault-signature table, and the last-good/first-bad boundary model.

## 3. Question-review routing

All redesigned Week 2 checks now carry stable section IDs rather than relying on the old page-index fallback map.

- Parallel-topology question → `w02-parallel-same-nodes`
- Parallel-resistance sanity check → `w02-parallel-same-nodes`
- Meter/loading short response → `w02-divider-ideal-then-loaded`
- CETa gate → `w02-parallel-same-nodes`
- Focused semantic evidence → topology + KCL + KVL + divider sections
- Career boundary question → `career-w02-last-good-first-bad`
- Discriminating-measurement question → `career-w02-discriminating-measurement`
- Career gate → `career-w02-predict-before-measuring`

This prevents review buttons from routing into obsolete Week 2 pages after the redesign.

## 4. Teaching Media QA

### Required Week 2 path

The Week 2 Required Teaching Media path is reduced to **4 curated resources**:

1. Khan Academy / Mahesh Shenoy — *Series and parallel circuits*
2. Khan Academy / Willy McAllister — *Kirchhoff’s current law*
3. Khan Academy / Willy McAllister — *Kirchhoff’s voltage law*
4. OpenStax University Physics Vol. 2 §10.2 — *Resistors in Series and Parallel*

The Week 2 learner-facing primary, supporting, and Study paths contain **zero All About Circuits teaching placements**. The one legacy AAC item that had remained parked in the Week 2 Study shelf had no future placement and is removed from the Week 2 learner experience.

### Supporting, point-of-use resources

Optional resources are attached only where they add a different representation:

- Khan Academy / Willy McAllister — *Simplifying resistor networks* at the mixed-network page
- Khan Academy / Willy McAllister — *Voltage divider* at the divider page
- Khan written Kirchhoff article at the exact KCL/KVL subsections
- Khan written divider article at the divider page
- OpenStax exact subsections / worked example at topology, series, parallel, and mixed-network pages

Resource cards include explicit focus and stop/skip instructions. Dedicated short lessons are preferred over assigning an oversized general video and making the learner find the relevant portion.

### Legacy/future placement preservation

All old **targetWeek=2** media placements are removed. Assignment-week-2 resources that are legitimately reused by later weeks retain their future target placements; the Week 2 renderer filters them out of the current Week 2 Required Path and weekly map so they do not appear as ghost Week 2 homework.

## 5. CETa Study Guide QA

The existing canonical Week 2 Required Path record remains one weekly obligation, but its material is now sliced contextually at the point of use.

| Context | Printed Study Guide pages | Instruction |
|---|---|---|
| Series / KVL | p.27 | Series path, total resistance, voltage drops, KVL |
| Parallel / KCL | p.28 | Parallel branches, KCL, equivalent resistance |
| Mixed networks | pp.29–30 | Reduction examples; stop when Voltage Dividers begins |
| Voltage divider | pp.30–31 | Divider material; **STOP at Maximum Power Transfer** |
| Career troubleshooting | pp.32–33 | Begin at Troubleshooting; use series/parallel fault examples |
| CETa retrieval | p.34 | Questions **4, 5, 6, 7 only**; skip maximum-power-transfer questions |

Context cards do not create duplicate completion checkboxes. The single Week 2 Study Guide path remains the completion record after the learner has used the contextual slices.

## 6. Visual / eye-flow QA

- The old CETa pseudo-schematic is removed from the redesigned required path.
- Source-grounded tables explain topology, series behavior, parallel behavior, and divider loading at the exact teaching point.
- The Career lesson includes a compact expected-versus-actual table and a fault-signature table.
- The last-good/first-bad flow explicitly labels **Node A = last known good** and **Node B = first known bad**.
- `w02-fault-boundary.svg` is corrected to the same terminology.
- Existing one-page-at-a-time navigation, direct Page X of Y navigation, Focus Prep, glossary behavior, and question backlinks are preserved.

## 7. Progress and semantic-task compatibility

The focused Week 2 DC-network semantic task keeps the existing ID **`SEM-4-02-017`**, so valid saved evidence for that task is not orphaned.

Nine broad future-topic CETa task records that had historically been forced into Week 2 are **not deleted**. They are preserved under `deferredSemanticTasks` with their original IDs and source text so they can be re-homed during the later focused audits of the weeks that naturally teach those topics. They are no longer Week 2 completion gates. This is intentional: the user requested that Week 2 be pedagogically coherent now and that later weeks be handled separately afterward.

Runtime semantic catalog accounting after the redesign:

- original catalog task count: 91
- active learner-gated task count: 82
- preserved deferred task count: 9
- catalog records preserved: 91

## 8. Whole-course regression checks

The redesign does not change the course’s structural inventory:

- 31 modules
- 62 primary lessons
- 24 LAB IDs (`LAB-001` through `LAB-024`)
- Week 2 still uses LAB-002 / the existing Week 2 application identity
- mastery threshold remains unchanged
- Cloud Sync protocol remains 2
- calendar and pacing model remain unchanged

No `course-data.js` or `.ics` calendar file is included in this patch.

## 9. Static/runtime QA

Passed checks performed on the v16.3.67 deployed runtime plus the v16.3.68 patch:

- JavaScript syntax: PASS (`week2-redesign-v16.3.68.js`, `learn.js`, `study.js`, `service-worker.js`, release notes)
- service-worker CORE local asset resolution: PASS — 0 missing paths
- decoded local HTML asset/script/link resolution in the merged deployed build: PASS — 0 missing paths
- Week 2 CETa visible teaching section count: 7
- Week 2 Career visible teaching section count: 5
- Week 2 All About Circuits target placements: 0
- Week 2 Required media assignments with live Week 2 placements: 4
- future-week placements owned by historical Week 2 resources remain present
- Study Guide weekly Required card count for Week 2: 1
- Study Guide contextual slice count: 6
- stable question-review section IDs: present
- semantic task ID `SEM-4-02-017`: preserved
- deferred semantic records: 9 preserved, not learner-gated in Week 2

A graphical browser acceptance test is not claimed by this report unless separately run after deployment. Static/runtime QA is not a substitute for post-upload visual inspection on the production Pages build.

## 10. Post-upload checks

After GitHub Pages deploys v16.3.68, verify:

1. Week 2 CETa lesson opens with the topology page and shows 7 teaching pages.
2. Week 2 Career lesson shows 5 teaching pages.
3. Related Learning cards are section-specific and do not show All About Circuits as a Week 2 teacher.
4. Study Guide cards show the intended page slices and stop instructions.
5. Review-question buttons return to the correct redesigned section.
6. Stage 4 Required Teaching Media contains exactly the four curated Week 2 requirements.
7. LAB-002, Week 2 mastery, saved progress, and calendar status remain intact.
8. Release Notes display v16.3.68.
