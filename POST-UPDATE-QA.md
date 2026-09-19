# POST-UPDATE QA — v16.3.29 Glossary Expansion + Section-Scoped Highlighting

## Baseline
- Base: exact deployed v16.3.28 GitHub Pages artifact / production state.
- Scope: glossary coverage, Classroom vocabulary-link placement, and cache/version integration only.

## Glossary data integrity
- Previous entries: 282.
- v16.3.29 entries: **599**.
- New canonical entries: **317**.
- Categories: **15**.
- Duplicate canonical slugs: **0**.
- Alias collisions: **0**.
- Missing plain definitions: **0**.
- Missing technical definitions: **0**.
- Missing pronunciations: **0**.
- Missing source provenance: **0**.
- Missing course-week mappings: **0**.

## Classroom placement behavior
- Highlight dedupe boundary is each `.integrated-teaching-block` / numbered teaching section.
- Maximum one anchor per canonical concept inside each section.
- Same concept may be highlighted once again in the next numbered section.
- Full-section candidate scoring is retained; the runtime does not blindly decorate the first string match.
- Fuller technical phrases are preferred when available.
- Low-value headings, controls, links, code, hidden content, quiz/prompt surfaces, and existing glossary UI are excluded/deprioritized.
- Minimum candidate quality threshold is enforced.
- Canonical noun plural matching is supported.
- Alias plural generation is not used.
- Uppercase acronym/protocol tokens require expected case.
- Ambiguous ordinary-looking terms require technical context.
- Bare generic `receive`/`transmit` RX/TX aliases were removed; technical signal phrases remain available.

## Native Chromium verification
### Actual Week 1 Classroom
- Numbered instructional blocks rendered: **16**.
- JavaScript errors: **0**.
- Duplicate canonical glossary slugs inside any block: **0**.
- Section-to-section rehighlighting confirmed for charge/current/circuit concepts.
- Ordinary `can` → CAN false match: **not present**.
- Ordinary `receive/receives` → RX false match: **not present**.

### Representative later weeks
- Week 8: 6 blocks, 0 JS errors, 0 duplicate block slugs.
- Week 11: 10 blocks, 0 JS errors, 0 duplicate block slugs.
- Week 18: 8 blocks, 0 JS errors, 0 duplicate block slugs.
- Week 20: 13 blocks, 0 JS errors, 0 duplicate block slugs.
- Week 27: 6 blocks, 0 JS errors, 0 duplicate block slugs.

### Full Glossary page
- Cards rendered: **599**.
- Summary count: 599 / 599.
- JavaScript errors: **0**.
- Search, Acronyms, Symbols, and Sources views remained functional.

### Study and Search
- Vocabulary Study All Course scope sees **599 available terms**.
- Search Everything returns new Glossary Term results from the expanded dataset.

## Version/cache checks
- `build-info.json` parses and reports runtimePatch `16.3.29`.
- Classroom, Glossary, Study, and Search use cache-busted v16.3.29 glossary assets where applicable.
- Service-worker namespace is `alfred-u-v16-3-29-glossary-expansion-section-highlighting-20260919`.
- Service worker includes v16.3.29 glossary assets and verification report.
- Release Notes includes the v16.3.29 exact-file manifest.
- JavaScript syntax checks pass for `glossary.js`, `release-notes-current.js`, and `service-worker.js`.

## Protected systems
No curriculum wording, lesson sequence, Teaching Media, assessment bank/scoring, mastery formulas, labs, projects, calendar identities, Progress history, Cloud Sync protocol, whole-site UX architecture, or branding artwork changed.
