# AU-ESET 301 v16.3.38 — Global Glossary Click Contract Verification

## Requested behavior
- Hover: **no definition popup**.
- One click/tap on a highlighted lesson term: **open the in-lesson definition card**.
- Second click/tap on the same term within 500 ms: **open that term's full Course Glossary entry**.
- Apply the same behavior to **every Classroom module and both CETa and Career lesson tracks**, including Week 1 Career Selection.

## Regression confirmed
The current v16.3.37 package had regressed the approved v16.3.30 interaction layer:

- `learn.html` loaded `glossary.js?v=16.3.29`.
- The active `glossary.js` contained `mouseenter` / `mouseleave` popup handlers.
- Its helper text instructed the learner to hover/focus for definitions and click once for the full entry.
- The active `glossary.css` used `cursor: help` and a hover visual state.

This was not specific to Career Selection. The same `glossary.js` decorates the shared `#classroom-content` container used by both `ceta-lesson` and `career-lesson` stages. Therefore the regression affected in-lesson glossary interaction throughout the Classroom.

## Repair
- Restored the accepted v16.3.30 click interaction implementation in `glossary.js`.
- Restored the accepted no-hover/pointer interaction rule in `glossary.css`.
- Updated `learn.html` and `glossary.html` to request `glossary.js?v=16.3.38` and `glossary.css?v=16.3.38`.
- Advanced the service-worker cache namespace and added the v16.3.38 versioned glossary assets.
- Advanced `build-info.json` and release notes to v16.3.38.

## Across-the-board scope check
Static runtime inspection confirms:

1. `learn.js` defines one shared seven-stage Classroom for every module, including `ceta-lesson` and `career-lesson`.
2. Both lesson tracks render into the same `#classroom-content` element.
3. `glossary.js` attaches a MutationObserver to that shared element and re-decorates it whenever lesson content/sections change.
4. Every highlighted lesson term is created through the same `makeTermAnchor()` function, so the restored click contract is not module-specific.
5. The curriculum contains 31 modules, each with both a CETa and Career lesson.

Result: **one shared repair covers all 62 primary lesson tracks (31 CETa + 31 Career)** without duplicating event-handler code in individual modules.

## Protected behavior
This patch does not change the 599-term glossary dataset, definitions, source/provenance data, pronunciation data, section-scoped highlighting/deduplication logic, curriculum text, lesson section titles/counts, Teaching Media, assessments/scoring, mastery, labs, projects, Calendar identities, Progress keys, or Cloud Sync protocol 2.
