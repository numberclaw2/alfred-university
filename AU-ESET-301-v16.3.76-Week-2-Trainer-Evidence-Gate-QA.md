# AU-ESET 301 — v16.3.76 Week 2 Trainer Evidence-Gate & Mastery-Route QA

**Scope:** Week 2 final post-upload logic hotfix only  
**Baseline audited:** production-built v16.3.75 Pages artifact from commit `7428d9c24d7ccd5276b05f861b26c3fe9b0ab666`  
**Goal:** close the last two defects discovered during production verification without reopening curriculum, media, Study Guide, lab, calendar, or Cloud Sync.

## Verdict

**PASS for the v16.3.76 hotfix package, pending upload/deployment verification.**

Production verification of v16.3.75 confirmed that the intended interactive trainers and mastery repair UI were present, but found two logic defects:

1. Both trainers could technically be passed by a lucky guess before sufficient evidence was collected.
2. Cumulative mastery question `CQ1088` still used retired generated route ID `concept-2` rather than the current stable Week 1 Career DMM section ID.

Both are corrected here.

## 1. Fault-boundary trainer evidence gate

The four-point and split-half trainers now refuse to score a boundary until:

- both last-known-good and first-known-bad selections are made;
- the learner has actually measured both selected points; and
- the configured minimum evidence count has been reached.

Evidence minimums remain aligned to the efficiency target:

- four-point path: **2 measurements minimum**
- eight-point split-half extension: **3 measurements minimum**

A learner can no longer select A/B or D/E without measurement and receive an “efficient” zero-measurement pass.

## 2. Troubleshooting Decision Trainer evidence gate

The hidden-fault trainer now refuses every diagnosis while more than one hypothesis still matches the collected readings.

The learner must therefore use measurements until exactly one hypothesis remains. Exhaustive result-table analysis confirms the configured hidden faults remain uniquely diagnosable within the intended target:

- upper resistor open: **2 measurements minimum**
- output short: **1 measurement minimum**
- source missing: **1 measurement minimum**

The intentionally low-information `Measure Vout again` test does not eliminate any hypothesis and therefore cannot produce a valid diagnosis by itself.

## 3. Exact mastery repair routing

The v16.3.75 production artifact correctly added review metadata to all 12 Week 2 mastery questions, but `CQ1088` routed to `concept-2`. Week 1 Career now uses stable section IDs, so that generated ID no longer resolves.

v16.3.76 updates `CQ1088` to:

`career-w01-voltage-resistance-and-current-modes-are-different-circuits`

Runtime route validation now confirms **12/12 Week 2 mastery questions resolve to existing lesson-page IDs**, including both cumulative Week 1 retrieval items.

The existing miss → exact teaching section → back-to-question mechanism remains unchanged.

## 4. Curriculum and assessment regression

Runtime after the v16.3.76 overlay confirms:

- Week 2 CETa pages: **7**
- Week 2 Career pages: **5**
- Week 2 mastery: **12 questions**
- Week 2 mastery mix: **6 CETa / 6 Career**
- Week 2 exact mastery repair routes: **12/12**
- Week 3 CETa pages: **7**
- Week 3 Career pages: **6**
- Week 3 Required resources: **4**
- Week 3 final acceptance status: **PASS**

No Week 2 instructional prose/media architecture, Study Guide scope, or LAB-002 identity is changed.

## 5. Infrastructure boundaries

Compared with the production v16.3.75 artifact:

- `course-data.js` remains byte-for-byte unchanged.
- `Alfred University - AU-ESET 301 - Simplified Course Calendar.ics` remains byte-for-byte unchanged.
- Cloud Sync protocol remains **2**.
- saved lesson IDs and formal lab IDs are unchanged.

## 6. Final acceptance rule

Do not call Week 2 closed until v16.3.76 is uploaded, GitHub Pages completes successfully, and the deployed Pages artifact reproduces these evidence-gate and 12/12 routing assertions.
