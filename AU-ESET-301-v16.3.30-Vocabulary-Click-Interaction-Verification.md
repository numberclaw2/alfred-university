# AU-ESET 301 v16.3.30 — Vocabulary Click Interaction Verification

## Requested behavior
- **Hover:** no definition popup action.
- **One click:** open the highlighted term's definition popup in the current lesson.
- **Two clicks / double-click:** open the same term's full Course Glossary entry.

## Implementation
- Removed highlighted-term `mouseenter` / `mouseleave` popup handlers from `glossary.js`.
- Single click prevents immediate link navigation and opens the existing definition card.
- A second click on the same term within 500 ms follows the anchor to `glossary.html#<term-slug>`.
- The popup remains dismissible with Escape or an outside click.
- Classroom helper text and popup hint text now explain click / double-click behavior.
- `glossary.css` uses a pointer cursor instead of the prior help cursor.

## Native browser interaction test
A Chromium test harness loaded the production glossary dataset and updated runtime against a representative Classroom teaching block.

Results:
- Vocabulary anchors rendered: **4**.
- Hover over highlighted `Voltage`: visible popup count **0**.
- First click on highlighted `Voltage`: visible popup count **1**.
- Popup hint: **“Double-click the highlighted term for the full Glossary entry.”**
- Second-click navigation branch executed successfully.
- JavaScript runtime errors: **0**.

## Protected behavior
This patch does not change the 599-term glossary dataset, glossary definitions, pronunciation/source data, section-scoped highlighting rules, term-selection scoring, curriculum text, lesson sequence, Teaching Media, assessments/scoring, mastery, labs, projects, calendar identities, Progress state, Cloud Sync protocol, or branding.
