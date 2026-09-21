# AU-ESET 301 v16.3.42 — Final Independent Acceptance Report

## Release decision

**ACCEPTED after two-pass internal acceptance testing and clean-overlay reconstruction.**

This decision is based on the executed v16.3.42 runtime and learner-facing Chromium behavior, not on prior v16.3.41 reports.

## Method

Two separate QA passes were used.

**Pass A — implementation verification** first reproduced the known v16.3.41 defects and repaired their root causes: contradictory first-use metadata, stale question/task remediation routing, Week 17 escape-sequence rendering, misplaced visuals, Week 12 crimp leakage, curriculum-map/provenance mismatch, and patch-layer cleanup risks.

**Pass B — blind adversarial acceptance** then treated the resulting site as an unknown candidate. It independently checked curriculum structure, exact learner remediation destinations, standards/evidence coverage, prerequisite ordering and cycles, first-use state consistency, duplicate-section similarity, future-concept leaks, visual placement, executable Python/C examples, and regression hashes. Pass B found additional issues during development; those were repaired before the release candidate was packaged.

## Internal execution environment

- Production curriculum/assessment JavaScript was executed from the actual site script stack.
- Chromium 144 launched successfully through Playwright in the internal code/container environment.
- Direct `file://` / localhost navigation is blocked by the container policy. This is reported as an environment limitation, **not** as a browser-navigation pass.
- The Chromium harness loads the real `learn.html` markup, injects the production scripts in their real order, opens every week in a fresh Chromium page, traverses the actual learner-facing Career lesson controls, and invokes the production Review/Back-to-question handlers.

## Learner-facing Chromium results

A clean v16.3.41 tree was overlaid with only the proposed v16.3.42 changed-files package and tested as a reconstructed deployment.

- **31/31 Career weeks:** PASS.
- **62/62 integrated Career question Review clicks:** PASS.
- **31/31 required/gate Review clicks:** PASS.
- **93/93 total Career question remediation actions:** PASS through the production stable-ID routing path.
- **43/43 semantic remediation buttons across 17/17 semantic tasks:** PASS through the production stable-ID routing path.
- **219/219 stable Career teaching-section IDs:** unique and resolvable.
- Every tested Review action landed on the intended current-week teaching section, and the production **Back to question** action returned correctly.
- Current Career content did not require the legacy title/section-number fallback in the acceptance run.

## Curriculum / traceability gates

- **31/31 Career lessons:** present and executable.
- **81/81 Career standards:** instructional home, lifecycle metadata, provenance, and semantic evidence present.
- **31/31 woven curriculum-map rows:** runtime reconciliation PASS.
- **93/93 question route-matrix rows:** target exists, correct week, concept actually taught there, Chromium click PASS.
- **17/17 semantic route-matrix rows:** all targets exist, same week, prerequisite-correct, Chromium clicks PASS.
- **0** Career standards without instructional homes.
- **0** Career standards without semantic mastery/evidence routes.
- **0** backward prerequisite edges.
- **0** prerequisite cycles.
- **0** semantic assessment-before-instruction violations.
- **0** curriculum-map / authoritative standard-timeline contradictions found by Pass B.
- **0** duplicate stable teaching-section IDs.
- **0** probable accidental duplicate lesson blocks at the blind similarity-audit threshold.
- **0** blocking future-concept dependency violations in the high-risk terminology scan.

## Specific defect closure

- Week 17 visibly preserves source notation such as `"READY\n"` and `b"READY\r\n"` where literal escape sequences are being taught.
- Week 14's pointer/address visual is attached to the pointer/address section rather than the bitwise section.
- Week 17's serial-client pipeline visual is attached to the pySerial pipeline section after the prerequisite Python foundations.
- Week 12 no longer depends on untaught crimp procedure; formal stripping/crimp selection/geometry remains deferred to Week 19.
- Early switching lessons no longer silently depend on MCU architecture; they teach a generic digital-control source and explicitly preview the later MCU concept.

## Runnable-code checks

- Python example syntax compilation: **PASS** (`python -m py_compile`).
- C example compilation: **PASS** with `-Wall -Wextra -Werror`.
- Compiled C example executable: **PASS**.

## CETa regression protection

The official CETa competency data was independently compared against a reconstructed v16.3.38 pre-Career-reconstruction runtime assembled from the accepted v16.3.32 full baseline plus v16.3.33–v16.3.38 overlays.

- Baseline CETa records: **262**.
- v16.3.42 CETa records: **262**.
- Structural equality: **PASS**.
- Canonical SHA-256 of the complete ordered CETa object array in both runtimes: `5037f7f19a1a2b99e30604e5ababff1f3e3276cd86eb8879c5b92c6acecdce30`.

This proves equality of the objects themselves, not merely the count.

## UI / unrelated-system regression protection

- `styles.css`: unchanged from v16.3.41.
- `ux-system.css`: unchanged from v16.3.41.
- `glossary.js` and `glossary-data.js`: unchanged.
- `progress.js`: unchanged.
- `academic-state.js`, `site.js`, `study.js`, and `practice.js`: unchanged.
- No broad navigation, branding, typography, color, or responsive-layout redesign was introduced.

## Version / cache / load order

- `build-info.json` reports runtime patch **16.3.42**.
- Relevant production pages load `career-curriculum-reconstruction.js?v=16.3.42` and `career-traceability-routing.js?v=16.3.42` in the correct order.
- `learn.html` loads the v16.3.42 visual/runtime scripts after the curriculum/traceability layer.
- Service-worker cache is `alfred-u-v16-3-42-final-traceability-routing-acceptance-20260921`.
- Every service-worker CORE asset referenced by the release exists in the tested deployment tree.

## Clean-overlay acceptance

The proposed changed-files package was applied over a fresh reconstructed v16.3.41 baseline. The reconstructed overlay produced:

- 31 modules;
- 81 Career standards;
- 262 CETa standards;
- 17 Career semantic tasks;
- 219 stable Career teaching sections.

The overlay then passed the full 31-week Chromium traversal and the independent blind acceptance suite with **0 reported blocking errors**.

## Browser-status wording

**SOURCE INTEGRITY: PASS**  
**JAVASCRIPT EXECUTION: PASS**  
**CHROMIUM DOM / LEARNER-FACING HANDLER EXECUTION: PASS**  
**DIRECT LOCAL HTTP/FILE NAVIGATION: ENVIRONMENT BLOCKED** — not represented as a pass.

## Acceptance conclusion

v16.3.42 satisfies the blocking acceptance gates defined for this repair. It can be used as the new AU-ESET 301 baseline for subsequent work rather than continuing the v16.3.39–v16.3.41 reconstruction loop.
