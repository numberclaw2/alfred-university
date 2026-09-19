# POST-UPDATE QA — v16.3.24 Vocabulary Study + Smart Glossary Highlighting

## Static/runtime verification
- Baseline Study HTML matched the current GitHub blob before modification.
- Vocabulary Study uses existing `glossary-data.js`; no duplicate terminology dataset was created.
- Study page loads `vocabulary-study.css`, `glossary-data.js`, and `vocabulary-study.js`.
- Vocabulary scopes present: recommended/due + current week, needs review, by week, by category, all course.
- Session sizes present: 5 / 10 / 20 terms.
- Retrieval-before-reveal plus Again / Hard / Got it controls present.
- Retained status requires >=3 distinct success dates.
- Vocabulary state is isolated from assessment/mastery/progress state.
- Classroom glossary decoration uses whole-lesson candidate scoring.
- Maximum one selected anchor per canonical glossary slug in a rendered lesson pass.
- Headings, interactive controls, code/pre, hidden content, and question-like low-value surfaces are excluded or deprioritized.
- Multiword/self-disambiguating variants are preferred over weak bare aliases where appropriate.
- Ambiguous bare terms require technical context.
- Dynamic lesson mutations trigger a debounced full re-evaluation rather than cumulative decoration.
- Existing hover/focus popover, Escape dismissal, pointer hoverability, and click-to-full-entry behavior are retained.
- build-info.json reports runtimePatch 16.3.24.
- Service worker namespace advanced to v16.3.24 and includes vocabulary-study.js/css.
- Release Notes contain the v16.3.24 manifest.

## Executed logic checks
- JavaScript syntax passed for `glossary.js`, `vocabulary-study.js`, `release-notes-current.js`, and `service-worker.js`; `build-info.json` parsed successfully.
- Glossary placement unit checks passed: everyday uses of `charge`/`power` were rejected; technical uses were accepted; `electric charge` outranked bare `charge`; explanatory prose outranked a practice-question surface.
- Vocabulary scheduling unit checks passed: Again resets the streak and remains due, Hard schedules a next-day review, and a third distinct successful retrieval date satisfies the retained-state rule.
- Static integration checks confirmed Study loads glossary data before the Vocabulary Study runtime and confirmed the 282-entry / 282-unique-slug source glossary remains unchanged.

## Browser acceptance after upload
1. Open Study and confirm Vocabulary Study Lab appears below Today’s Review Queue / Curiosity Parking Lot and above Weekly Planning.
2. Start a 5-term Due + Current Week session; verify answer is hidden until Reveal.
3. Rate cards Again / Hard / Got it and confirm Again can return later in the same session.
4. Test By Week, By Category, Needs Review, and All Course scopes.
5. Reload Study and confirm vocabulary study status persists locally.
6. Open Classroom Week 1. For a repeated concept such as charge/current, verify only one occurrence is highlighted in the rendered stage.
7. If both a fuller technical phrase and a bare alias appear, verify the clearer instructional occurrence is the highlighted one when eligible.
8. Change Classroom stages and verify highlighting is recalculated cleanly without duplicate accumulation.
9. Hover/focus the selected term, press Escape, and click through to the full Glossary entry.
10. Verify build-info.json reports v16.3.24 and stale v16.3.23 cache is retired.

## Protected systems
Curriculum, glossary definitions/sources, Teaching Media, assessments/scoring, mastery, labs, projects, calendar, Progress identities, Cloud Sync protocol, and branding remain unchanged.
