# POST-UPDATE QA — v16.3.22 Course Dictionary

## Static verification
- Dictionary entries present: **282**
- Unique slugs: **282**
- Entries with authoritative source links: **282 / 282**
- Entries with pronunciations: **282 / 282**
- Added runtime assets: glossary.html, glossary.css, glossary-data.js, glossary.js
- Classroom loads glossary stylesheet/data/runtime and includes a Dictionary button.
- Service worker namespace advanced to v16.3.22 and Dictionary assets are cached.
- build-info.json reports runtimePatch 16.3.22.
- Release Notes contain the v16.3.22 exact-file manifest.

## Protected systems
Curriculum, lesson source content, assessments/scoring, mastery, calendar, labs, projects, progress identities, Cloud Sync protocol, Teaching Media, and branding remain unchanged.

## Browser acceptance checks after upload
1. Open `learn.html?week=1` and confirm technical vocabulary is bold/dotted without corrupting buttons, links, equations, or code.
2. Hover **voltage** (desktop) and verify the definition card includes pronunciation, plain meaning, technical meaning, and source.
3. Keyboard-tab to a Dictionary term and confirm the same definition card appears.
4. Click a term and confirm the browser lands on the matching `glossary.html#...` entry.
5. Search Dictionary for `MOSFET`, `UART`, `I2C`, `oscilloscope`, `measurement uncertainty`, and `HIL`.
6. Change A–Z and category filters and confirm counts/results update.
7. Change Classroom stages/weeks and confirm newly rendered content is decorated automatically.
8. Verify mobile layout and direct Dictionary navigation.
9. Reload once after deployment and confirm build-info.json shows v16.3.22 and stale v16.3.21 cache does not persist.
