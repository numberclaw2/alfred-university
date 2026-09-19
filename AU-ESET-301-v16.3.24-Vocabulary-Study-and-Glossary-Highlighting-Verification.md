# AU-ESET 301 v16.3.24 — Vocabulary Study + Smart Glossary Highlighting Verification

## Scope
This release adds active vocabulary study to the existing Study center and reduces visual clutter from automatic Classroom glossary links. It does not alter the 282 glossary definitions or the accepted curriculum/assessment architecture.

## Vocabulary Study Lab
- Uses `glossary-data.js` directly; there is no duplicate vocabulary bank.
- Supports Due + Current Week, Needs Review, By Week, By Category, and All Course study scopes.
- Requires retrieval before reveal. The answer is the same source-grounded Glossary content already used by the reference page.
- Ratings: Again, Hard, Got it. Again can re-enter the current queue; Hard returns next day; Got it uses progressively longer intervals.
- `Retained` requires successful Got-it retrieval on at least three different local calendar dates.
- Study history uses `alfred-u-vocabulary-study-v1` and is intentionally separate from assessment/mastery/progress evidence.
- Keyboard support: Space/Enter reveals when focus is not already on an interactive control; 1/2/3 rate the revealed card.

## Classroom glossary highlighting policy
- Maximum one highlighted occurrence per canonical glossary entry in the currently rendered Classroom lesson/stage.
- The runtime scans the whole rendered lesson before choosing anchors. It does not accept the first textual match blindly.
- Headings, summaries, controls, code/preformatted regions, hidden content, existing links, and `data-no-glossary` surfaces are excluded.
- Explanatory paragraphs/list items are preferred over low-value question/prompt surfaces.
- Fuller technical phrases receive preference when they disambiguate a concept (for example `electric charge` over bare `charge`, or `electrical power` over bare `power`).
- Bare ambiguous words such as charge/current/power/ground/branch/bus/gate/trace require nearby technical context before they are eligible.
- On dynamic lesson/stage changes, all prior generated term links are stripped and the visible lesson is rescored as a whole. This prevents repeated highlights from accumulating.

## Protected systems
No curriculum wording, glossary definitions, glossary sources, Teaching Media, calendar identities, labs, projects, assessment questions/scoring, mastery formulas, Progress identities, Cloud Sync protocol, or branding assets are changed.
