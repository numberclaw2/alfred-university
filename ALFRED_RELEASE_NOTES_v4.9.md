# Alfred University v4.9 — Objective-anchor repair and source-informed transfer practice

Deployed baseline: v4.8 commit `877b3d118690b23b225d05a6646719edd5801cab`. Publication date: 2026-10-24.

## Verified academic changes

- **17 newly authored scored scenario/calculation questions**, targeting 17 different ETA 2025 objectives, with a matching technical explanation appended to the relevant teaching page. These are additional *instructional assessment items*. They are NOT a new independent exam or evidence of calibrated exam-passing probability.
- **11 teaching-page section assignments corrected** and **three filter-objective home assignments corrected**, including the serious SCR/Zener cross-mapping in Module 11, regulator/filter cross-mapping in Module 13, amplifier loading/op-amp anchors in Module 14, and SMT/soldering homes in Module 15. Every changed ID and its old/new section appears in the audit JSON.
- **Six quantified item solutions recomputed independently** (potentiometer loading, Q/bandwidth, source/meter loading, digital noise margin, reflected RF power and ideal SWR). Answers and units were cross-checked against the given quantities.
- **Relevant book pages visually examined** in the user-provided original Sixth Edition scan: printed pp. 23, 47, 48, 74, 87, 96, 138 and 178. Topics include impedance/resonance, AC parallel-circuit computations, transistor configurations, power filtering, amplifier stages, digital states and PCB rework. This is a *targeted*, not exhaustive, textual reconciliation.
- Publisher corrections governing technical discrepancies: <https://www.etai.org/6thEdASTErrataSheet.pdf>. ETA 2025 competency document: <https://www.etai.org/comps/CETa_comps.pdf>. Formula reference: <https://www.etai.org/Common_Formulas.pdf>.
- Additional manufacturer-specific verification examples: Tektronix on probe loading <https://www.tek.com/en/documents/application-note/how-oscilloscope-probes-affect-your-measurement> and Keysight on RF reflection/VSWR <https://go.keysight.com/us/en/assets/7018-06829/application-notes/5952-3706.pdf>.
- Educational method: integrate worked calculation/explanation and application questions beside the relevant lesson, following Institute of Education Sciences practice guide <https://ies.ed.gov/ncee/wwc/PracticeGuide/1>.

## Preserved

30 modules, 373 teaching pages, all 262 ETA ID strings and objective titles, all 682 prior scored-question placements, 200 original fresh-mock questions, all original answer choices/keys, 20 historical point-of-use required study-guide assignments and all published supplemental source links. Stable localStorage keys and progress structure. Previous M29/M30 attempts and any original history are not rewritten. The private study-guide PDF remains in the GitHub repository and must not be uploaded again.

## QA

Data equivalence, original bank preservation and additive modifications tested. 100 Chromium mobile/desktop rendering/grading cases passed, including all 17 expanded module assessments at both viewport sizes. JavaScript syntax and six independent numeric computations passed. See `ALFRED_v4_9_ACADEMIC_QA_REPORT.md`.

## Why final academic approval remains withheld

The 234-page publisher text has **not** been reviewed at every statement or quiz. Most of the 373 lesson pages and all older question explanations have not received independent technical expert validation. The original 100-question mock forms still sample the same 100 objectives, leaving 162 not sampled by those forms. Internal exam scores do not establish a near-certain or guaranteed official examination result. No third-party accreditation or ETA endorsement is claimed. Future changes should prioritize these unresolved academic findings, not cosmetic or Cloud Sync enhancements.
