# POST-UPDATE QA — v16.3.25 Glossary Render Deduplication

## Defect reproduced from user evidence
- Live Week 1 screenshot showed repeated dotted/bold glossary anchors for `charge` in one rendered lesson stage.
- This is classified as a Classroom glossary-rendering defect or stale-runtime path, not as a glossary-data problem.

## Static/runtime checks
- `glossary.js` retains whole-stage candidate scoring.
- A final `enforceSingleGlossaryAnchor(root)` pass groups anchors by canonical `data-glossary` slug and removes all duplicates from the DOM.
- Candidate scoring strongly rewards direct definitional phrasing and canonical/multiword phrases.
- Candidate score below 10 is intentionally not highlighted.
- Question/quiz surfaces and incidental contrast language are penalized.
- MutationObserver invokes the dedupe guardrail before scheduling a full re-evaluation.
- `learn.html` loads `glossary.js?v=16.3.25` to break stale browser/runtime reuse.
- `build-info.json` reports runtimePatch 16.3.25.
- Service-worker cache namespace is v16.3.25.
- Release Notes contain the exact v16.3.25 manifest.
- Executed a repeated-`charge` selection fixture modeled on the Week 1 screenshot; `Electric charge` won as the single selected candidate for the `electric-charge` concept.

## Browser acceptance after upload
1. Refresh or reopen Classroom Week 1.
2. Open the first CETa lesson shown in the user screenshot.
3. Confirm only one `charge` / `electric charge` glossary highlight remains for the electric-charge concept.
4. Confirm the selected occurrence is a clear teaching use, preferring `Electric charge is…` when available.
5. Confirm later repetitions of `charge` are plain text.
6. Change Classroom stages and return; duplicates must not accumulate.
7. Hover/focus the selected term and confirm the tooltip works; Escape dismisses; click opens the exact Glossary entry.

## Protected systems
Vocabulary Study, glossary definitions/sources, curriculum, assessments, mastery, labs, projects, calendar, Teaching Media, Progress identities, Cloud Sync, and branding are unchanged.
