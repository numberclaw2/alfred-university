# AU-ESET 301 v16.3.32 — Study Library & Week 1 Safety Scaffolding Verification

**Release date:** September 19, 2026  
**Baseline:** v16.3.31 `v16.3.31-lesson-review-navigation-question-backlinks-20260919`  
**Release:** v16.3.32 `v16.3.32-study-library-week1-safety-scaffolding-20260919`

## Purpose

This release addresses two learner-facing problems without reopening the accepted curriculum architecture:

1. **Study was too practice/diagnostic-forward.** The Study page opened with retrieval questions and required self-rating before the learner could simply reread, review visuals, use flashcards, watch the verified teaching media, or consult reference material.
2. **Week 1 safety prompts assumed too much technical vocabulary.** Safety sections mentioned later-course objects and terms such as CMOS, semiconductor structures, fiber termination, MPE, interrupting rating, inrush, stored energy, and meter category ratings before giving a true beginner enough context to understand the question.

## Implemented — Study Library

1. **Review-first default.** Study now opens on `Review Material`, not Active Recall.
2. **Six explicit study paths.** The page exposes:
   - Review Material
   - Concept Flashcards
   - Watch & Review
   - Reference
   - Work Weak Areas
   - Active Recall
3. **Reached-material boundary.** Study Library derives its content from the existing Classroom `learning.lessonSegments` state. Only teaching sections already reached in Classroom are exposed. Unreached future material remains hidden.
4. **Review sheets.** Reached lesson sections can be reread one at a time with:
   - a Quick re-read summary;
   - the complete teaching text;
   - the existing lesson figure/table when present;
   - the existing `Hold onto this` summary;
   - a simple repeated-study sequence;
   - Previous/Next navigation through reached material only.
5. **Concept flashcards.** Each reached teaching section creates a learner-controlled flashcard. Answers can be revealed immediately for study/memorization; no rating is required.
6. **Watch & Review.** The already-verified Teaching Media layer is available inside Study. Week 1 sources use explicit unlock points so later-topic videos do not appear before the matching Classroom concept is reached.
7. **Reference view.** The page surfaces course knowledge/formula notes, glossary terms found in reached material, and assigned resources connected to the reached material.
8. **Weak-area review.** Partial/Missed/due concepts can be reviewed directly without requiring another cold question first.
9. **Active Recall preserved but repositioned.** The existing `Retrieve → Diagnose → Repair → Practice → Teach Back → Next Move` system remains available as an optional memory check. It no longer serves as the entry gate to Study.
10. **Reached-only Active Recall.** Week 1 memory-check concepts have explicit unlock boundaries; later concepts such as Ohm’s law, prefixes, and power do not appear before their teaching sections are reached.
11. **Focus Mode preserved.** Active Recall Focus Mode hides the Study Library and Active Recall setup surfaces, leaving the active session as the visible task.
12. **State compatibility.** The existing `alfred-u-study-v13` storage key remains in use. A new additive `library` UI-state object is stored without changing Classroom Progress or Cloud Sync protocol 2.

## Implemented — Week 1 beginner-first safety scaffolding

The five preserved Week 1 safety sections remain mapped to the same CETa competency codes, but their teaching is expanded so later-course terminology is no longer treated as assumed background knowledge.

### Shock / emergency response

Adds plain-language definitions of energized/de-energized state, shock path logic, CPR, AED, and the learner’s recognition/escalation boundary.

### NEC / overcurrent / lockout-tagout

Adds beginner context for:

- NEC / NFPA 70;
- overcurrent;
- fuse versus circuit breaker;
- interrupting rating;
- time-delay versus fast-acting fuse;
- inrush current;
- lockout/tagout (LOTO);
- stored energy;
- the distinction between a software/control command and verified physical isolation.

### ESD / CMOS / bench hazards / PPE

Adds beginner context for:

- static charge and electrostatic discharge;
- semiconductor devices;
- CMOS as a common digital-chip technology;
- why ESD below the human perception threshold can damage electronics;
- dissipative mats, wrist straps, antistatic packaging, and de-energized ESD workstations;
- meter category/rating;
- capacitor stored energy;
- PPE and its limits.

### RF / fiber-optic hazards

Adds beginner context for:

- RF and transmitters;
- antenna gain;
- duty cycle;
- Maximum Permissible Exposure (MPE);
- interlocks;
- fiber-optic cable;
- fiber termination;
- cleaving and splicing;
- invisible infrared light;
- optical test instruments and fiber-shard controls.

### Ladders / vehicles / fire classes

Adds plain-language context for nonconductive ladders, battery fault-current risk, A/B/C/D/K fire classes, and the meaning of an incipient/small fire response boundary.

## Safety question repair

The five Week 1 semantic safety prompts were reworded so the object/context is understandable before the learner is asked to reason about the safety rule. The expected technical elements and competency codes are unchanged.

Examples:

- The ESD question now identifies CMOS chips as common digital semiconductor devices that can be damaged by static electricity.
- The RF/fiber question now explains that an RF transmitter sends radio-frequency energy and that fiber-optic cable carries information as light; `fiber termination` is glossed as preparing/finishing the fiber end for connection.

## Review-section coverage extended to semantic evidence

v16.3.31 already linked all 124 integrated lesson checks and 62 required lesson gates back to their teaching sections. v16.3.32 extends the same `Review Section → Back to question` workflow to all **87 semantic competency-evidence prompts**.

All 87 semantic-task titles exactly match a teaching-section title in the same lesson, so no heuristic runtime search is required. This increases direct lesson-question review coverage from 186 to **273 question/evidence locations**.

## Protected systems

This release does **not** change:

- the 31-week course order or 62 lesson identities;
- CETa/career competency codes or standards mappings;
- assessment answers, assessment scoring, mastery formulas, or safety pass thresholds;
- lab/project definitions or evidence routes;
- calendar event IDs, dates, or UIDs;
- Progress record identities or Cloud Sync protocol 2;
- the 599-term glossary dataset;
- the v16.3.30 vocabulary single-click definition / double-click Glossary behavior;
- Teaching Media verification/source records;
- v16.3.31 lesson back/forward review and Back to question behavior;
- Student/Builder Mode, issue parking, branding, or course visual identity.

## Executed verification

- JavaScript syntax: PASS for `study.js`, `learn.js`, `week1-instructional-depth.js`, `release-notes-current.js`, and `service-worker.js`.
- Study HTML structure: PASS; six study-path controls, required workspaces present, zero duplicate IDs.
- Build metadata: PASS; runtime `16.3.32`, course release `16.3`, evidence revision `16.2`, Cloud Sync protocol `2`.
- Study state boundary harness:
  - no reached teaching section → Study explains that nothing is available yet and Active Recall is disabled;
  - 1 reached Week 1 teaching section → 1 review section available;
  - 2 reached sections → 2 review sections, Current-only Active Recall, and only Current media unlocked;
  - 5 reached sections → 5 review sections, 3 eligible Active Recall concepts, no Ohm’s-law/power media leak;
  - 10 reached sections → 10 review sections, all six core Week 1 Active Recall concepts available and power media unlocked;
  - 16 reached sections → all 16 CETa teaching sections available for review.
- Native Chromium Study Library checks: PASS at 1440 × 1000 and 390 × 844; no page-level horizontal overflow and no JavaScript runtime errors in the tested paths.
- All six Study Library views rendered successfully on the 390 px mobile viewport.
- Concept Flashcard reveal/hide and previous/next controls: PASS.
- Active Recall Focus Mode: PASS; Study Library and Active Recall setup are hidden while the session workspace remains visible.
- Active Recall reached-only prompt check: PASS; with only the first five Week 1 teaching sections reached, prompts were limited to already-taught Voltage, Current, and circuit-path material.
- Week 1 safety runtime data: PASS; 16 teaching sections retained, all five safety sections scaffolded, all five `remember` summaries present.
- Week 1 ESD scaffold: PASS for explicit CMOS, semiconductor, dissipative-mat, capacitor, meter-category, and PPE context.
- Week 1 RF/fiber scaffold: PASS for explicit RF, MPE, interlock, fiber-termination, IR-light, cleaving/splicing, and shard-control context.
- Week 1 NEC/LOTO scaffold: PASS for interrupting rating, inrush, time-delay/fast-acting fuse, stored energy, and physical-isolation context.
- Safety competency-code preservation: PASS; all five Week 1 safety task code arrays remain unchanged.
- Native Chromium Week 1 safety rendering: PASS at 390 × 844 for ESD, RF/fiber, and competency-evidence sections; zero page-level horizontal overflow and zero JavaScript runtime errors.
- Semantic review backlink browser test: PASS; Week 1 ESD competency prompt linked to its exact ESD teaching section and `Back to question` returned to the exact semantic-task anchor without changing official lesson progress.
- Semantic task mapping: PASS; **87/87** semantic tasks exactly match a same-lesson teaching-section title.
- Existing v16.3.31 question review map: PASS; **186/186** integrated checks/gates remain present.

**Candidate status: PASS FOR UPLOAD.**
