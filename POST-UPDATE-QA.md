# AU-ESET 301 v16.3.34 — Post-Update QA

**QA date:** September 19, 2026  
**Baseline:** v16.3.33 `v16.3.33-career-beginner-first-instructional-depth-20260919`  
**Candidate:** v16.3.34 `v16.3.34-authoritative-visual-learning-layer-20260919`  
**Result:** **PASS FOR UPLOAD**

## Visual-learning acceptance

- PASS — corrected baseline audit confirmed 62 legacy `wNN-*.svg` visuals were still active through `integrated.visualId`; v16.3.34 clears all 62 runtime hooks.
- PASS — all 62 legacy SVG entries were removed from the service-worker CORE cache.
- PASS — Classroom and Study render explicit provenance: Real/source visual, Source-grounded technical visual, or Alfred instructional model.
- PASS — all **31/31 CETa weeks** have section-level instructional visual coverage; Week 1 retains four accepted visuals and Weeks 2–31 have targeted new visual support.
- PASS — candidate curriculum contains **68 section-level figures**: 15 source, 25 source-grounded, 28 Alfred-model.
- PASS — the existing **30 weekly orientation concept maps** remain and are now explicitly labeled Alfred instructional models.
- PASS — real/open-license image use includes representative DMM, bench supply, oscilloscope display, solder joint, STM32 Nucleo board, wiring harness, spectrum-analyzer display, and logic-analyzer media with item-level attribution/licensing.
- PASS — Week 1 Career bench orientation now leads with real equipment recognition rather than a generic flow.
- PASS — Week 14 Career pointer visual now uses a concrete memory/address model grounded in GNU C rather than an abstract generated flow.
- PASS — manufacturer/standards material is used as authoritative technical grounding and linked rather than copied when redistribution permission is unclear.
- PASS — `VISUAL-SOURCES.md` records source/licensing/provenance and the redistribution boundary.

## Structural / instructional integrity

- PASS — lesson titles, teaching-section titles, and teaching-section counts remain unchanged.
- PASS — zero legacy `integrated.visualId` hooks remain after the visual overlay.
- PASS — gallery/source integrity scan returned zero issues.
- PASS — **93/93 Career question targets** remain valid.
- PASS — **13/13 Career semantic competency tasks** remain mapped to valid teaching sections.
- PASS — Study continues to inherit visuals only from reached teaching sections.

## Runtime / rendering checks

- PASS — JavaScript syntax: `instructional-visuals.js`, `learn.js`, `study.js`, `release-notes-current.js`, `service-worker.js`.
- PASS — `instructional-visuals.js` loads once on Classroom, Study, and Search after accepted content overlays.
- PASS — inline Chromium renderer harness at **1440 × 1000**: representative Classroom/Study source images, galleries, tables, flows, and Alfred models rendered with zero JS errors and no page-level horizontal overflow.
- PASS — inline Chromium renderer harness at **390 × 844**: representative figures remained readable/contained, galleries stacked, tables stayed contained/scrollable, zero JS errors and no page-level horizontal overflow.
- LIMITATION — the environment blocked local/file navigation and external network image retrieval in Chromium. Therefore this QA does **not** claim a full native routed-site browser run or live remote-image fetch test. External image licenses/source pages were verified separately.

## Protected systems

PASS — course release remains 16.3, evidence revision 16.2, Cloud Sync protocol 2. Assessments/scoring, mastery, standards/competencies, labs/projects, calendar identities, Progress, glossary/vocabulary behavior, Teaching Media, Student/Builder, Focus Mode, section review/backlinks, and branding were not intentionally changed.

**PASS FOR UPLOAD.** See `AU-ESET-301-v16.3.34-Authoritative-Visual-Learning-Verification.md` and `VISUAL-SOURCES.md` for full evidence.

---

## Previous QA record

# AU-ESET 301 v16.3.33 — Post-Update QA

**QA date:** September 19, 2026  
**Baseline:** v16.3.32 `v16.3.32-study-library-week1-safety-scaffolding-20260919`  
**Candidate:** v16.3.33 `v16.3.33-career-beginner-first-instructional-depth-20260919`  
**Result:** **PASS FOR UPLOAD**

## Targeted acceptance

- PASS — all **31 Career lessons** received a dependency-aware instructional audit/repair.
- PASS — all Career teaching-section counts remain unchanged from v16.3.32.
- PASS — all Career teaching-section titles remain unchanged, preserving saved section indices and semantic teaching-title links.
- PASS — every Career teaching section has an explicit `buildOn` chain identifying what prior Alfred instruction may be assumed.
- PASS — every Career week has at least one instructional flow/mental-model visual; **32 flow visuals** exist across the 31 lessons.
- PASS — Career teaching depth increased from **13,789** to **18,429** teaching words without expanding every week uniformly.
- PASS — high-risk beginner foundations are present for Week 1 bench tools, Week 12 Git, Week 14 C, Week 15 state/interrupt/volatile, Week 16 STM32/SWD, Week 17 Python serial, Week 18 I²C/SPI integration, Weeks 22–23 engineering/project workflow, Week 27 automated hardware test, and Weeks 29–31 career evidence/application workflow.
- PASS — **93/93 Career lesson question locations** (62 integrated checks + 31 required lesson gates) resolve to a valid strengthened teaching section.
- PASS — **13/13 Career semantic competency tasks** still resolve to their exact teaching section because teaching titles were preserved.
- PASS — the v16.3.32 Study Library inherits reached Career teaching text and flow visuals without exposing future Career sections.
- PASS — no new external source family was introduced; the existing accepted course source/reference layer remains authoritative.

## Native/browser checks

Whole-track Chromium rendering passed for **31/31 Career lessons** at the section containing each lesson’s instructional flow: **31/31 flow visuals rendered and 0 page errors** occurred. High-risk content spot checks also passed for Career Weeks **1, 12, 14, 15, 16, 17, 18, 22, 23, 27, 29, 30, and 31**.

Representative mobile rendering at **390 × 844** passed for Weeks **1, 14, 17, and 27** with no page-level horizontal overflow.

A Study integration render also passed: reached Week 1 Career material appeared in Review Material with the strengthened bench explanation and Career flow visual while unreached Career material remained outside the reached-material set.

## Runtime / packaging checks

- PASS — JavaScript syntax: `career-instructional-depth.js`, `learn.js`, `study.js`, `release-notes-current.js`, `service-worker.js`.
- PASS — build metadata: runtime `16.3.33`, course release `16.3`, evidence revision `16.2`, Cloud Sync protocol `2`.
- PASS — service-worker CORE contains **176 references**, zero missing, and includes the Career depth runtime plus this release verification record.
- PASS — Career depth runtime is loaded after the accepted curriculum overlays on Classroom and Study, and is also loaded by Search so strengthened Career teaching is indexed.
- PASS — protected CETa, assessment, mastery, labs/projects, calendar identities, Progress/Cloud Sync, glossary/vocabulary, Student/Builder, Focus Mode, lesson review navigation, Back to question, and branding systems remain outside the Career content patch.

## Acceptance

**PASS FOR UPLOAD.** See `AU-ESET-301-v16.3.33-Career-Beginner-First-Instructional-Depth-Verification.md` for the 31-week audit and high-risk transition evidence.

---

## Previous QA record

# AU-ESET 301 v16.3.32 — Post-Update QA

**QA date:** September 19, 2026  
**Baseline:** v16.3.31  
**Candidate:** v16.3.32 `v16.3.32-study-library-week1-safety-scaffolding-20260919`  
**Result:** **PASS FOR UPLOAD**

## Study Library acceptance

- PASS — Study opens review-first instead of forcing retrieval questions.
- PASS — Six study paths are present: Review Material, Concept Flashcards, Watch & Review, Reference, Work Weak Areas, Active Recall.
- PASS — Study content is derived from reached Classroom `lessonSegments`; unreached teaching stays hidden.
- PASS — No reached sections: Review explains what to do next and Active Recall is disabled.
- PASS — Week 1 reached-state checks at 1, 2, 5, 10, and 16 teaching sections returned matching Study Library counts.
- PASS — Week 1 media unlock rules prevent Ohm’s-law/power videos from appearing before those concepts are reached.
- PASS — Concept Flashcard reveal/hide and previous/next navigation work without requiring a grade or confidence rating.
- PASS — Reference view renders reached knowledge/formula notes, glossary terms, and matched assigned resources.
- PASS — Weak Areas is review-first and does not require another cold question before showing the explanation.
- PASS — Active Recall retains the existing Retrieve → Diagnose → Repair → Practice → Teach Back → Next Move engine.
- PASS — With only the first five Week 1 teaching sections reached, Active Recall exposed only already-taught Voltage, Current, and circuit-path prompts.
- PASS — Active Recall Focus Mode hides the Study Library and Active Recall setup surfaces while leaving the session workspace visible.
- PASS — Native Chromium review of all six Study views at 390 × 844 produced no page-level horizontal overflow and no JavaScript runtime errors.
- PASS — Native Chromium desktop review at 1440 × 1000 produced no page-level horizontal overflow and no JavaScript runtime errors.

## Week 1 safety-scaffolding acceptance

- PASS — All 16 Week 1 CETa teaching sections remain present.
- PASS — All five safety sections retain their original titles and standards placement.
- PASS — Shock/emergency teaching now defines energized/de-energized boundaries and beginner CPR/AED context.
- PASS — NEC/overcurrent/LOTO teaching now defines interrupting rating, inrush, time-delay vs fast-acting protection, stored energy, and physical isolation.
- PASS — ESD teaching now defines semiconductor/CMOS context, dissipative mats, wrist straps, meter category/rating, capacitor stored energy, PPE, and the distinction between protecting electronics and protecting people.
- PASS — RF/fiber teaching now defines RF, antenna gain, duty cycle, MPE, interlocks, fiber-optic cable, termination, cleaving/splicing, invisible IR, and glass-shard controls.
- PASS — Ladder/vehicle/fire teaching adds nonconductive-ladder, battery fault-current, fire-class, and incipient-fire context.
- PASS — The five safety semantic prompts now define unfamiliar objects/context before asking for the safety decision.
- PASS — All five safety competency-code arrays are unchanged.
- PASS — Native Chromium mobile renders of ESD, RF/fiber, and competency-evidence sections at 390 × 844 showed no horizontal overflow or JavaScript runtime errors.

## Question-review acceptance

- PASS — Existing v16.3.31 Review Section / Back to question mapping remains intact for 124 integrated checks + 62 lesson gates = 186 locations.
- PASS — All 87 semantic competency-evidence task titles exactly match a same-lesson teaching-section title.
- PASS — Semantic evidence now exposes Review Section links for all 87 tasks, bringing direct question/evidence review coverage to 273 locations.
- PASS — Browser test on Week 1 ESD evidence: Review Section opened the exact ESD teaching section; Back to question returned to the exact semantic-task anchor without changing official lesson progress.

## Runtime / package integrity

- PASS — `node --check` for `study.js`, `learn.js`, `week1-instructional-depth.js`, `release-notes-current.js`, and `service-worker.js`.
- PASS — `study.html` has zero duplicate IDs and all required study workspaces.
- PASS — build metadata reports runtime `16.3.32`, course release `16.3`, evidence revision `16.2`, Cloud Sync protocol `2`.
- PASS — service-worker namespace advanced to v16.3.32.
- PASS — service-worker CORE contains 174 references and all resolve in the candidate artifact.
- PASS — Protected systems were not intentionally changed: assessment answers/scoring, mastery formulas, labs, projects, calendar IDs/dates/UIDs, Progress identity scheme, Cloud Sync protocol, glossary dataset, Teaching Media verification/source records, branding.

**PASS FOR UPLOAD.**

---

## Previous QA record

# AU-ESET 301 v16.3.31 — Post-Update QA

**QA date:** September 19, 2026  
**Baseline:** v16.3.30  
**Candidate:** v16.3.31 `v16.3.31-lesson-review-navigation-question-backlinks-20260919`  
**Result:** **PASS FOR UPLOAD**

## Targeted acceptance

- PASS — Previous section is available at the top and bottom of Classroom learning sections.
- PASS — Reviewing earlier material does not reduce the saved furthest/resume position.
- PASS — Forward review navigation stops at the learner's already reached resume point; it cannot skip into unreached future instruction.
- PASS — Normal `I answered · continue` remains the only path that unlocks a new future section.
- PASS — 186/186 lesson-question locations have a direct same-lesson teaching-section review target: 124 integrated checks + 62 required lesson gates.
- PASS — Review links preserve a session return marker and expose `Back to question`.
- PASS — Returning to the question restores its exact anchor without changing official lesson progress.
- PASS — All review-map targets point to valid teaching sections.
- PASS — `learn.js`, `release-notes-current.js`, and `service-worker.js` pass JavaScript syntax checks.
- PASS — v16.3.30 vocabulary click/double-click behavior and the v16.3.30 executive-function systems remain present in the baseline files.

## Protected systems

No curriculum content, standards mapping, Teaching Media, assessment scoring/answers, mastery formulas, labs, projects, calendar identities, Progress state, Cloud Sync protocol, glossary dataset, or branding was changed.

---

## Previous QA record

# AU-ESET 301 v16.3.30 — Post-Update QA

**QA date:** September 19, 2026  
**Baseline:** v16.3.29 `v16.3.29-glossary-coverage-section-highlighting-20260919`  
**Candidate:** v16.3.30 `v16.3.30-executive-function-study-flow-20260919`  
**Result:** **PASS FOR UPLOAD**

## Scope

This QA verifies the targeted executive-function study-flow update only. It does not reopen the accepted v16.3 curriculum, Teaching Media, assessment banks, labs, calendar identities, mastery formulas, Cloud Sync protocol, glossary definitions, or branding assets.

## JavaScript / metadata checks

- PASS — `node --check site.js`
- PASS — `node --check ux-system.js`
- PASS — `node --check study.js`
- PASS — `node --check learn.js`
- PASS — `node --check release-notes-current.js`
- PASS — `node --check service-worker.js`
- PASS — `build-info.json` parses and reports runtime patch `16.3.30`.
- PASS — protected metadata remains course release `16.3`, evidence revision `16.2`, Cloud Sync protocol `2`.
- PASS — the v16.3.30 release is the first/current entry in `release-notes-current.js`.
- PASS — service-worker cache namespace advanced to v16.3.30.
- PASS — all 172 service-worker CORE file references resolve to files in the current production artifact; zero missing.

## Classroom segmentation checks

A deterministic curriculum/runtime harness was run against the current 31-week curriculum.

- PASS — all **62 integrated lessons** produce a valid resumable segment plan.
- PASS — segment counts range from **10 to 21**; no lesson produces an empty/invalid plan.
- PASS — Week 1 CETa lesson produces **21** saved learning sections.
- PASS — Week 1 Career lesson produces **14** saved learning sections.
- PASS — a fresh Week 1 CETa render shows **section 1/21**, not all technical teaching blocks at once.
- PASS — advancing from the first section persists `current: 1` and marks section `0` complete in `learning.lessonSegments.lesson-0`.
- PASS — the final section renders competency evidence and the required lesson gate.
- PASS — old week records without `lessonSegments` remain valid and begin at section 1.

## State-aware next-action checks

A deterministic shared-action harness verified the new `AlfredNextAction` priority order.

- PASS — fresh Week 1 learner → **Classroom** / required instruction.
- PASS — saved Classroom segment state → Classroom detail includes the exact saved section, e.g. `CETa Lesson · Section 4 of 21`.
- PASS — due spaced review → **Study** / Review Queue.
- PASS — saved Study session → **Study** / Resume Study.
- PASS — Home hero and persistent header both consume the same shared next-action owner in source.
- PASS — Study recommendation consumes the same owner and does not start generic retrieval ahead of unseen required instruction.

## Focus Mode / issue parking / Student Mode checks

- PASS — Focus Mode CSS now suppresses `.ux-study-shortcuts`.
- PASS — Focus Mode CSS now suppresses `#vocabulary-study-section`.
- PASS — active Study workspace remains the focus-mode task owner.
- PASS — one-field `Park a site issue` is installed in the existing parking panel and stores site items with `kind: "site"`.
- PASS — Student Mode is the default when no preference is stored.
- PASS — Deployment and Release Notes are hidden in Student Mode and restored by the single Builder Mode toggle.
- PASS — existing curiosity parking entries without `kind` remain backward compatible.

## Native visual inspection

The exact v16.3.30 files were loaded into Chromium using the same self-contained/routed-asset technique required in this environment because ordinary localhost and `file://` browser navigation is blocked.

Native routed-artifact QA completed successfully for the changed workflows plus a representative 10-page matrix at both **1440 × 1000** and **390 × 844**. Key screenshots were captured for Week 1 Classroom and active Study Focus Mode.

Observed results:

- PASS — header/search/current-week controls remain visually coherent.
- PASS — Week 1 reports `CETa Lesson · Section 1/21` instead of exposing the previous giant continuous lesson.
- PASS — desktop composition preserves the accepted institutional visual hierarchy.
- PASS — mobile composition remains within the 390px viewport with no new obvious horizontal-overflow regression in the inspected Classroom surface.
- PASS — existing glossary guidance and lesson-stage navigation remain present.

The final routed-artifact acceptance harness produced **87 PASS checks and 0 FAIL checks**. It verified fresh and saved Classroom state, final-section gating, Home routing for fresh/due-review/saved-Study states, Focus Mode isolation, issue parking, Student/Builder Mode, desktop/mobile overflow, and representative page rendering. Ordinary live-host navigation remains blocked in this execution environment, so production post-upload acceptance should still confirm the deployed GitHub Pages origin after its workflow completes.

## Protected-system comparison

No intended changes were made to:

- `curriculum-data.js` lesson source wording;
- `assessment-data.js` or scoring engines;
- Teaching Media data/overrides;
- lab/project definitions;
- calendar event IDs, dates, or UIDs;
- Progress record identity scheme;
- Cloud Sync protocol;
- glossary definitions / 599-term source dataset;
- branding image assets.

## Acceptance repair found during QA

The first Student Mode visual check found that footer link display rules could override the HTML `hidden` attribute for Deployment / Release Notes. A narrow CSS rule was added so builder-only links are forcibly hidden in Student Mode and restored in Builder Mode. The complete 87-check harness was rerun after this repair and passed with **0 failures**.

## Acceptance

**PASS FOR UPLOAD.**

The candidate implements the approved minimum effective intervention: one manageable Classroom section at a time, exact resume state, earlier micro-retrieval, one state-aware next action, restored Focus Mode isolation, and a small Student/Builder boundary without adding another productivity system.
