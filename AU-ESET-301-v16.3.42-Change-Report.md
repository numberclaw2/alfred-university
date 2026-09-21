# AU-ESET 301 v16.3.42 — Change Report

## Scope
v16.3.42 is a focused traceability, learner-review-routing, instructional-cleanup, and independent-acceptance repair over v16.3.41. It does not redesign the site and does not alter official CETa competency wording.

## Runtime/content changes
- Added `career-traceability-routing.js` as the authoritative v16.3.42 post-reconstruction layer.
- Gave every substantive Career teaching section a stable semantic ID independent of display title and section number.
- Rebuilt all 93 Career question remediation routes and all 17 Career semantic-task remediation routes against stable IDs.
- Updated `learn.js` so current Career review actions resolve by stable ID first; title/position fallback remains only for legacy resilience.
- Reconciled all 81 Career standards to one instructional lifecycle: exposure, substantive teaching, guided practice, application, reinforcement, and mastery.
- Rebuilt weekly “Career · taught this week” lists from actual substantive instructional homes and separated preview/reinforcement states.
- Corrected Week 17 learner-visible Python escape-sequence teaching and validated runnable Python examples.
- Moved the Week 14 pointer visual to the pointer/address section and the Week 17 serial-client pipeline visual to the pySerial pipeline section.
- Removed remaining premature crimp-procedure dependence from Week 12 while preserving an explicit Week 19 defer/preview.
- Added or strengthened teaching discovered by the blind acceptance pass: repository-secret handling, diagram/representation selection, UART physical/config contract checks, spectrum/RBW/compliance boundaries, summary/plot evidence rules, and unknown-interview-question reasoning.
- Removed hidden early MCU dependence in switching lessons by teaching a generic digital-control source first and explicitly previewing later MCU architecture.

## Presentation and official standards
- `styles.css` unchanged.
- `ux-system.css` unchanged.
- Official 262 CETa competency objects unchanged from the reconstructed v16.3.38 pre-reconstruction runtime.

## Modified runtime/deployment files
`analytics.html`, `assessments.html`, `build-info.json`, `documents.html`, `instructional-visuals.js`, `learn.html`, `learn.js`, `practice.html`, `progress.html`, `quiz.html`, `release-notes-current.js`, `search.html`, `service-worker.js`, `standards.html`, `study.html`, `UPLOAD_README.txt`.

## Added runtime/deployment files
- `career-traceability-routing.js`
- `AU-ESET-301-v16.3.42-31-Week-Woven-Curriculum-Map.csv`
- `AU-ESET-301-v16.3.42-Career-Standards-Provenance-Matrix.csv`
- `AU-ESET-301-v16.3.42-Concept-Level-CETa-Career-Dependency-Graph.csv`
- `AU-ESET-301-v16.3.42-Question-Review-Route-Matrix.csv`
- `AU-ESET-301-v16.3.42-Semantic-Task-Review-Route-Matrix.csv`
- `AU-ESET-301-v16.3.42-External-Source-Benchmark-Ledger.md`
- `AU-ESET-301-v16.3.42-Final-Independent-Acceptance-Report.md`
- `AU-ESET-301-v16.3.42-Regression-Report.md`
- this change report.

## Acceptance-relevant counts
- 31 Career weeks
- 81 Career standards
- 262 unchanged official CETa competency records
- 219 stable Career teaching-section IDs
- 93 Career question/gate remediation actions
- 17 Career semantic tasks / 43 semantic remediation buttons
