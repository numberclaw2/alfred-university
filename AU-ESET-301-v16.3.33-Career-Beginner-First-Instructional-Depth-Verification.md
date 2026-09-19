# AU-ESET 301 v16.3.33 — Career Beginner-First Instructional Depth Verification

**Release date:** September 19, 2026  
**Baseline:** v16.3.32 `v16.3.32-study-library-week1-safety-scaffolding-20260919`  
**Candidate:** v16.3.33 `v16.3.33-career-beginner-first-instructional-depth-20260919`  
**Baseline deployment:** GitHub Pages run #93 · commit `fd35e4ca53f16b3ec24a7b7a97939641e3783d9e` · artifact `10591421863`  
**Result:** **PASS FOR UPLOAD**

## Purpose

Bring all 31 Career lessons up to the same beginner-first instructional standard as the accepted CETa work without redundantly reteaching material Alfred already taught. The governing rule is: **Career may assume previously taught Alfred knowledge; new Career-only knowledge must be taught before it is used.**

## Implementation strategy

- Added `career-instructional-depth.js`, loaded after the accepted curriculum/semantic/Week 1 overlays. It strengthens the existing Career teaching homes rather than replacing the 31-week architecture.
- Preserved every Career teaching-section **count and title**. This is deliberate: saved `learning.lessonSegments` indices, existing resume positions, semantic evidence titles, and Review Section behavior remain compatible.
- Added explicit prerequisites that distinguish **already-taught CETa/Career knowledge** from **new Career-only knowledge**.
- Added beginner-first foundations at the original teaching home for tools/workflows such as bench equipment, Git, C, STM32 development/debug, Python serial tooling, requirements/traceability, controlled project baselines, automated hardware testing, and job-search evidence workflows.
- Added **32 instructional flow models across all 31 Career lessons**. These are internally authored mental-model visuals using the existing accepted course source layer; no new external source family was introduced.
- Added `reviewSectionTitle` metadata for all **93 Career lesson question locations** (62 integrated checks + 31 required lesson gates), so the existing Review Section → Back to question path can target the strengthened teaching home.

## Quantitative depth check

- Career teaching text before this repair: **13,789 words total**, median **428** words per Career lesson.
- Career teaching text after this repair: **18,429 words total**, median **537** words per Career lesson.
- Minimum Career lesson teaching text increased from **332** to **439** words.
- The increase is targeted rather than uniform; weeks with already-adequate professional instruction received smaller dependency/context repairs, while high-risk new-skill weeks received deeper foundations.

## 31-week dependency audit

| Week | Career lesson | Teaching words | Added | Sections stable | Flow visual | Build-on chain |
|---:|---|---:|---:|:---:|:---:|:---:|
| 1 | Safe bench setup, prediction, and measurement | 1238 | +378 | PASS | 1 | PASS |
| 2 | Use expected node values to troubleshoot instead of guessing | 539 | +105 | PASS | 1 | PASS |
| 3 | Measurement planning, probe discipline, and uncertainty | 657 | +113 | PASS | 1 | PASS |
| 4 | Turn time-domain measurements into filter and fault evidence | 501 | +97 | PASS | 1 | PASS |
| 5 | A complete troubleshooting loop under a practical gate | 485 | +107 | PASS | 1 | PASS |
| 6 | Characterize a filter or resonant network like a technician | 481 | +88 | PASS | 1 | PASS |
| 7 | Read a datasheet and design a relay/inductive-load interface | 532 | +104 | PASS | 1 | PASS |
| 8 | Design and diagnose a protected low-side switch | 494 | +93 | PASS | 1 | PASS |
| 9 | Rail-by-rail bring-up and supply troubleshooting | 475 | +99 | PASS | 1 | PASS |
| 10 | Measure and troubleshoot a signal chain | 473 | +87 | PASS | 1 | PASS |
| 11 | Real logic levels, pull resistors, debounce, and measurement | 574 | +171 | PASS | 1 | PASS |
| 12 | Make physical changes traceable with Git and lab records | 716 | +260 | PASS | 1 | PASS |
| 13 | Troubleshoot with competing hypotheses and high-information tests | 696 | +94 | PASS | 1 | PASS |
| 14 | Write and debug small C programs methodically | 835 | +313 | PASS | 2 | PASS |
| 15 | Responsive embedded architecture, volatile, and timing choices | 731 | +230 | PASS | 1 | PASS |
| 16 | Create, flash, verify, and document a minimum STM32 bring-up | 673 | +205 | PASS | 1 | PASS |
| 17 | Build a robust Python serial client and evidence log | 718 | +233 | PASS | 1 | PASS |
| 18 | Datasheet-to-wire integration and bus fault isolation | 561 | +95 | PASS | 1 | PASS |
| 19 | Terminate, inspect, continuity-test, and isolate a connection fault | 439 | +107 | PASS | 1 | PASS |
| 20 | Measurement procedure, spectrum interpretation, and technical handoff | 490 | +108 | PASS | 1 | PASS |
| 21 | Turn broad theory into rapid technician choices | 452 | +89 | PASS | 1 | PASS |
| 22 | Write requirements and verification before building | 743 | +286 | PASS | 1 | PASS |
| 23 | Create a controlled project baseline before hardware bring-up | 663 | +209 | PASS | 1 | PASS |
| 24 | Execute staged first power and establish a known-good baseline | 474 | +72 | PASS | 1 | PASS |
| 25 | Integrate one peripheral through a controlled vertical slice | 491 | +92 | PASS | 1 | PASS |
| 26 | Separate drivers, application state, diagnostics, and recovery | 462 | +102 | PASS | 1 | PASS |
| 27 | Design a maintainable automated hardware test | 749 | +289 | PASS | 1 | PASS |
| 28 | Design controlled faults and write a defensible report | 537 | +85 | PASS | 1 | PASS |
| 29 | Assemble an employer-facing role-proof dossier | 528 | +109 | PASS | 1 | PASS |
| 30 | Build an evidence-first application and interview package | 578 | +118 | PASS | 1 | PASS |
| 31 | Run applications as an evidence-and-feedback loop | 444 | +102 | PASS | 1 | PASS |

## High-risk transition verification

- **Week 1: PASS** — required foundation markers present: `bench power supply`, `digital multimeter`, `power rail`, `constant-voltage`, `constant-current`, `bring-up`.
- **Week 12: PASS** — required foundation markers present: `version control`, `repository`, `working tree`, `tracked`, `untracked`, `git status`, `diff`, `commit`, `branch`, `tag`.
- **Week 14: PASS** — required foundation markers present: `programming language`, `source code`, `compiler`, `statement`, `variable`, `data type`, `assignment`, `expression`, `if/else`, `loops`, `function`, `parameters`, `return value`, `array`, `pointer`, `address`, `dereference`.
- **Week 15: PASS** — required foundation markers present: `blocking`, `nonblocking`, `state machine`, `interrupt`, `interrupt service routine`, `volatile`, `atomic`, `critical section`.
- **Week 16: PASS** — required foundation markers present: `project`, `toolchain`, `build`, `flash`, `reset`, `SWD`, `debug probe`, `breakpoint`, `program counter`.
- **Week 17: PASS** — required foundation markers present: `Python`, `script`, `interpreter`, `import`, `variables`, `strings`, `if/else`, `for`, `while`, `function`, `exceptions`, `bytes`, `str`, `decode`, `encode`, `parsing`.
- **Week 18: PASS** — required foundation markers present: `transaction contract`, `driver`, `logic analyzer`, `protocol decoder`.
- **Week 22: PASS** — required foundation markers present: `requirement ID`, `acceptance criterion`, `verification method`, `traceability matrix`, `validation`, `characterization`, `command line`, `shell`, `README`.
- **Week 23: PASS** — required foundation markers present: `baseline`, `BOM`, `toolchain version`, `dependency`, `clean checkout`, `clean build`, `hash`.
- **Week 27: PASS** — required foundation markers present: `setup`, `stimulus`, `acquisition`, `evaluation`, `cleanup`, `test fixture`, `try/finally`, `PASS`, `FAIL`, `ERROR`, `INCONCLUSIVE`, `configuration file`, `source of truth`.
- **Week 29: PASS** — required foundation markers present: `dossier`, `artifact`, `evidence claim`, `scope statement`, `evidence hierarchy`.
- **Week 30: PASS** — required foundation markers present: `resume bullet`, `evidence claim`, `30 seconds`, `2 minutes`.
- **Week 31: PASS** — required foundation markers present: `pipeline`, `role filter`, `feedback variable`.

## Question / evidence linkage

- **93/93 Career lesson question locations PASS** — 62 integrated checks + 31 required lesson gates carry a valid teaching-section target.
- **13/13 Career semantic competency tasks PASS** — each task title still resolves to an existing Career teaching section because section titles were preserved.
- The existing Review Section → Back to question workflow remains the UI owner; this release improves the teaching target rather than creating a competing review system.

## Study integration

- The v16.3.32 Study Library reads the same reached teaching sections. Because the Career repair occurs before `study.js`, strengthened Career text, Hold onto this summaries, and flow visuals appear automatically **only after that Career section is reached**.
- Native/routed acceptance confirmed Week 1 Study exposed the reached first Career section alongside completed CETa material and rendered the new Career flow visual with zero page errors.

## Native/browser acceptance

- JavaScript syntax: PASS for `career-instructional-depth.js`, `learn.js`, and `study.js` before release metadata finalization.
- Whole-track Chromium render: **31/31 Career lessons PASS** at the section containing each lesson’s instructional flow; **31/31 visuals rendered** and **0 page errors** occurred.
- High-risk content spot checks: PASS for Weeks **1, 12, 14, 15, 16, 17, 18, 22, 23, 27, 29, 30, and 31**; each expected beginner-first foundation was present.
- Mobile regression check: PASS at **390 × 844** for Weeks **1, 14, 17, and 27**; no page-level horizontal overflow and each Career flow rendered.
- Representative screenshots were visually inspected for Week 1 bench teaching and Week 14 C foundations; layout and instructional hierarchy remained coherent. The inline QA harness does not inline image assets, so its broken header-logo placeholder is a harness artifact, not a production source defect.

## Protected-system verification

- PASS — all 31 Career teaching-section counts unchanged.
- PASS — all Career teaching-section titles unchanged.
- PASS — course release remains `16.3`; evidence revision remains `16.2`; Cloud Sync remains protocol `2`.
- PASS — CETa curriculum wording was not edited by this Career layer.
- PASS — no change to Career competency goals, assessment scoring, mastery formulas, safety-critical thresholds, labs/projects, calendar IDs/UIDs, Progress identities, 599-term glossary, vocabulary click/double-click behavior, Student/Builder Mode, Focus Mode, completed-section back/forward review, Back to question, or branding.
- PASS — no new external instructional source family added; existing accepted source/reference layer remains authoritative.

## Acceptance

**PASS FOR UPLOAD.** The Career track now follows the intended dependency rule: previously taught Alfred knowledge is reused; new Career-specific knowledge is explicitly established before required use or testing.

