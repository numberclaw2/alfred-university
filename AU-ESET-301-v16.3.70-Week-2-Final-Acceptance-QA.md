# AU-ESET 301 — v16.3.70 Week 2 Final Acceptance QA

**Scope:** Week 2 only  
**Baseline:** deployed v16.3.69 GitHub Pages artifact  
**Calendar:** unchanged

## Final verdict

**PASS after two final QA corrections.**

The v16.3.69 deployed build satisfied the main redesign: 7 CETa pages, 5 Career pages, a 4-item Required Teaching Media path (Khan/OpenStax), 6 All About Circuits resources in optional Study only, contextual Study Guide pp.27–34 placement, and preserved LAB-002/progress/calendar identities.

Two residual defects were found during final acceptance:

1. **Study Guide p.34 retrieval scope:** v16.3.68 had selected Q4–Q7. Visual inspection of the bundled Sixth Edition shows Q5–Q7 depend on a transistor-amplifier circuit that is not taught in Week 2. v16.3.70 changes the assignment to **Q2–Q4 only**. Q2–Q3 are intentional spaced retrieval of Week 1 current/Ohm-law foundations; Q4 is the Week 2 parallel-resistance item. Q1, Q5–Q9 are explicitly skipped.
2. **Optional AAC scope guidance:** the KCL/KVL AAC video also contains electron-flow, Ohm-law, and power material, and the Series Circuits lecture contains a polarity convention that can conflict with Alfred’s conventional-current/passive-sign convention. The Study cards now explicitly state what to use and what to ignore.

## Acceptance matrix

- Beginner-first Week 2 scope: PASS
- 7-page CETa progression: PASS
- 5-page technician troubleshooting progression: PASS
- Sentence flow / section size: PASS (core teaching averages roughly 9–16 words per sentence by section)
- Worked examples before independent transfer: PASS
- Retrieval / self-explanation: PASS
- Guided → independent scaffolding: PASS
- Section-specific required videos: PASS
- Long/broad video burden in required path: PASS — none
- Written literature bounded to exact subsections: PASS
- All About Circuits required count: 0
- All About Circuits optional Study count: 6
- Study Guide contextual printed pages: 27–34
- Study Guide p.31 stop before Maximum Power Transfer: PASS
- Study Guide p.32–33 troubleshooting placement: PASS
- Study Guide p.34 future-topic leakage: FIXED — Q2–Q4 only
- LAB-002 / calendar / Cloud Sync identity: unchanged

## Source checks

Required sources remain the dedicated Khan Academy series/parallel, KCL, and KVL lessons plus bounded OpenStax §10.2. Optional mixed-network/divider media remain section-specific. AAC remains a Study-only alternate path.

## Static/runtime checks

The final merged runtime must continue to report exactly 4 Required Week 2 media items, 6 AAC Study-only items, 7 CETa teaching sections, 5 Career teaching sections, 1 active Week 2 semantic task, and 9 preserved deferred semantic task records.

Graphical Chromium acceptance is not claimed in this environment because local page navigation is blocked by the runtime administrator; structural and data-runtime checks are used instead.
