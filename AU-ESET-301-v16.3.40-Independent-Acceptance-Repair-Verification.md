# AU-ESET 301 v16.3.40 — Independent Acceptance Repair Verification

## What was tested

This verification executes the actual AU-ESET 301 curriculum/assessment JavaScript in production order inside the container's V8 runtime:

`curriculum-data.js → assessment-data.js → semantic-repair.js → career-instructional-depth.js → career-curriculum-reconstruction.js`

It is not based only on static source inspection or on the v16.3.39 verification documents.

## Result

**62/62 automated checks passed. 0 failed.**

The test suite validates:
- 31 modules;
- 262 unchanged CETa standards;
- 81 reconstructed Career standards;
- 91 semantic tasks;
- 81 Career coverage rows;
- complete source provenance and resolvable source IDs;
- 3 SPLIT + 3 ADD + 4 MOVE standard decisions;
- corrected C3.5/C4.3/C5.5/C8.4/C8.7/C13.6 mastery weeks;
- no first-use/mastery contradictions;
- Week 3 future-domain removal;
- protocol-neutral Week 13 troubleshooting;
- Week 15 serial/ADC deferral;
- 13-step Python-before-serial Week 17 sequence;
- I²C-first Week 18 sequence;
- Week 16 timer and ADC instruction before mastery;
- all-31 lesson woven metadata and section-level `buildOn` dependencies;
- monotonic Foundation → Intermediate → Advanced difficulty progression;
- major assessment inventories include added Career standards;
- standards/document provenance links use v16.3.40;
- v16.3.40 cache/build/release metadata;
- unchanged aesthetic CSS hashes;
- correct row counts for the 31-week map, 81-row provenance matrix, and concept-level dependency graph.

## Browser-engine note

A native Chromium headless launch was attempted after the V8 suite. The Chromium process available in this container did not initialize even for a trivial `data:text/html` page and timed out without producing DOM output. Therefore this verification makes no unsupported claim that Chromium rendering passed. The production runtime itself was executed directly and fully in V8, and the existing visual stylesheet assets were hash-compared against v16.3.39.

## Runtime counts

- CETa standards: **262**
- Career standards: **81**
- Career standard status counts: **49 KEEP / 22 REWRITE / 4 MOVE / 3 SPLIT / 3 ADD**
- Semantic tasks: **91 total = 74 CETa + 17 Career**
- Career coverage rows: **81**
- Career modules with woven metadata: **31/31**

## Artifacts

- `AU-ESET-301-v16.3.40-31-Week-Woven-Curriculum-Map.csv`
- `AU-ESET-301-v16.3.40-Career-Standards-Provenance-Matrix.csv`
- `AU-ESET-301-v16.3.40-Concept-Level-CETa-Career-Dependency-Graph.csv`
- `AU-ESET-301-v16.3.40-External-Source-Benchmark-Ledger.md`
- `AU-ESET-301-v16.3.40-Assessment-Lab-Project-Reconciliation.md`
- `AU-ESET-301-v16.3.40-Final-Beginner-Dependency-Audit.md`
- `AU-ESET-301-v16.3.40-Change-Report.md`

## Aesthetic constraint

No broad aesthetic changes were introduced. `styles.css` and `ux-system.css` are unchanged relative to v16.3.39, and the existing CETa/Career visual distinction remains intact.
