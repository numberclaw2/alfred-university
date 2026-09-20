# AU-ESET 301 v16.3.39 — Career Curriculum Reconstruction Verification

## Release verdict

**PASS — ready for changed-files deployment.**

This release implements the dependency-first Career reconstruction on top of the accepted v16.3.38 runtime. It changes instructional content, standards/provenance, and the minimum runtime wiring needed to deliver that content. It does **not** redesign the website.

## What was reconstructed

- All **31 Career lessons** now carry an explicit CETa foundation, Career prerequisite, new Career learning scope, genuine cross-track overlap, future preparation, difficulty level, and source basis.
- All Career teaching sections now expose a `Builds on` dependency so the instructional chain can be audited.
- The highest-risk teaching bodies were **fully reconstructed** in Weeks **1, 3, 12, 14, 15, 16, 17, 18, 20, and 27**.
- The remaining 21 Career lessons retain strong existing technical bodies, but their purpose/prerequisite/connection wording and dependency/provenance layer were revised so they participate in the same woven curriculum.
- The difficulty curve is explicit: **Foundation (Weeks 1–6) → Intermediate (Weeks 7–21) → Advanced (Weeks 22–31)**.

## Standards disposition

- Official CETa coverage rows preserved: **262 / 262**.
- Career standard IDs preserved for assessment/progress compatibility: **78 / 78**.
- Career standards materially rewritten: **26**.
- Career standards retained after re-audit: **52**.
- Career standards with provenance: **78 / 78**.
- Career standards with an evidence route and first curriculum-use week: **78 / 78**.

Keeping the 78 Career IDs is a compatibility decision, not a decision to freeze the old wording. The rewritten standards preserve the same broad competency identities while making prerequisite and performance expectations more explicit.

## Cross-track continuity

The reconstruction uses a shared CETa/Career dependency model:

**CETa foundation → Career activation/application → later deepening → integrated professional evidence.**

Career may rely on CETa only when the prerequisite has already been taught. When CETa supplies the foundation, Career activates it rather than re-teaching it from zero. Where Career needs additional depth, the Career lesson provides that depth explicitly.

## High-risk sequencing corrections

- **Week 1:** bench supply/DMM/current-limit/pre-power/first-power concepts are onboarded before professional bench execution.
- **Week 3:** oscilloscope and measurement planning are taught from known electrical/waveform questions; later UART knowledge is no longer an implicit prerequisite.
- **Week 12:** Git is taught as repository/working-tree/status/diff/commit/history/branch/tag concepts before it becomes project-control infrastructure.
- **Week 14:** C is taught as a genuine foundation: source/build model → variables/types → control flow → functions → data structures → addresses/pointers → debugging.
- **Week 15:** embedded architecture builds from the C foundation before blocking/nonblocking logic, state machines, polling, interrupts, shared state, and `volatile`.
- **Week 16:** STM32 bring-up is a ladder of proofs: board/MCU → project/build → image → flash/reset/run → SWD → breakpoint/internal state → physical evidence.
- **Week 17:** Python fundamentals and bytes/text precede serial-client automation.
- **Week 18:** one concrete bus transaction is mastered before broader UART/I²C/SPI comparison; logic-analyzer evidence is layered on after the electrical/transaction contract.
- **Week 20:** spectrum-analyzer mental model precedes procedure, feature classification, interpretation, and handoff.
- **Week 27:** automated test is decomposed into physical test system → setup/stimulus/acquisition/evaluation/cleanup/report → verdict semantics → configuration → boundary/fault cases.

## External benchmark verification

Current authoritative sources were rechecked during this release rather than relying only on prior summaries. The source ledger records exact URLs and provenance relationships.

The benchmark supports the chosen architecture:

- Georgia Piedmont Technical College sequences DC circuits before AC circuits and AC before solid-state devices, while also explicitly teaching laboratory safety/test equipment.
- Portland Community College EET 101A explicitly introduces electronic bench equipment, DMM/oscilloscope measurement, data collection, and technical reporting; EET 101B requires 101A and advances into equipment use and troubleshooting.
- Texas A&M ESET uses prerequisite chains before microcontroller architecture and later electronics testing, supporting a staged embedded/test progression rather than a compressed single lesson.
- ABET Engineering Technology criteria are used as a coverage/outcomes guardrail, not as a weekly syllabus.
- Manufacturer/maintainer materials from Fluke, Tektronix, STMicroelectronics, Arm, GitHub, Saleae, Python/pySerial, TI, Analog Devices, and related sources ground tool/technology-specific instruction.
- O*NET is used as an occupational destination check for technician work, not as a beginner teaching sequence.

No citation/provenance label implies endorsement, accreditation, certification approval, partnership, or formal equivalence.

## Source traceability

The v16.3.39 runtime now exposes source provenance in the existing lesson/standards presentation:

- Career lesson Purpose/Prerequisite stage: **Source basis** plus direct source links.
- Career Standards page: provenance relationship + named source basis + link to the full source ledger.
- `AU-ESET-301-v16.3.39-Career-Standards-Provenance-Matrix.csv/.json`: standard-by-standard source traceability and URLs.
- `AU-ESET-301-v16.3.39-31-Week-Woven-Curriculum-Map.csv`: curriculum-block source grounding and URLs.
- `AU-ESET-301-v16.3.39-External-Source-Benchmark-Ledger.md`: complete source catalog used by the reconstruction.

## Assessment / evidence compatibility

- Existing Career standard IDs remain stable.
- Existing semantic Career task titles continue to resolve to current teaching sections: **13 / 13**.
- High-risk semantic integration section titles were deliberately preserved so Review Section routing remains valid.
- Lab/project identities are unchanged.
- No official CETa competency identity, wording, or evidence identity was rewritten.
- No assessment item was silently reassigned to a different competency domain.

## Visual/aesthetic preservation

- `styles.css`: **byte-identical to v16.3.38**.
- `ux-system.css`: **byte-identical to v16.3.38**.
- CETa/Career labels, colors, page layout, branding, cards, navigation model, and general visual hierarchy are unchanged.
- Only two existing instructional visuals were moved within their Career lesson sequence: the Week 14 pointer visual and Week 17 Python-serial visual now appear after their prerequisites.
- Document Center wording/links were updated so v16.3.39 records are identified as current and older v16.3 curriculum QA records are correctly labeled baseline evidence; the existing card styling was reused.

## Runtime / static QA

Automated final QA completed successfully:

- Static/runtime/package checks: **178 passed / 178 total / 0 failed**.
- Module count: **31**.
- Career lesson count: **31**.
- CETa coverage rows: **262** and byte-equivalent requirement text to the v16.3.38 runtime baseline.
- Career coverage rows: **78**.
- Career standard status count: **52 KEEP / 26 REWRITE**.
- Semantic Career task routes unresolved: **0**.
- Invalid provenance source IDs: **0**.
- Referenced provenance sources without URLs: **0**.
- All nine content/standards consumer pages load the v16.3.39 overlay exactly once.
- Learn, Study, and Search load `career-instructional-depth.js` before the authoritative v16.3.39 reconstruction and load instructional visuals afterward.
- Service-worker cache namespace advanced to `alfred-u-v16-3-39-career-curriculum-20260920`.
- Modified JavaScript files pass `node --check`.
- `build-info.json` validates as JSON and identifies runtime patch **16.3.39**.

## Current authoritative artifacts

1. `career-curriculum-reconstruction.js`
2. `AU-ESET-301-v16.3.39-Career-Standards-Provenance-Matrix.csv`
3. `AU-ESET-301-v16.3.39-Career-Standards-Provenance-Matrix.json`
4. `AU-ESET-301-v16.3.39-31-Week-Woven-Curriculum-Map.csv`
5. `AU-ESET-301-v16.3.39-Shared-CETa-Career-Dependency-Map.csv`
6. `AU-ESET-301-v16.3.39-External-Source-Benchmark-Ledger.md`
7. `AU-ESET-301-v16.3.39-Assessment-Lab-Project-Reconciliation.md`
8. `AU-ESET-301-v16.3.39-Final-Beginner-Dependency-Audit.md`
9. `AU-ESET-301-v16.3.39-Change-Report.md`
10. this verification report.

## Final status

**v16.3.39 passes the implementation acceptance gate for the requested Career curriculum reconstruction.** The update preserves the existing visual system and official CETa standard identities while replacing the weak expert-compressed Career dependency model with a source-traceable, woven, beginner-first progression.
