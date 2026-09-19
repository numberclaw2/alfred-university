# POST-UPDATE QA — v16.3.30 Vocabulary Click / Double-Click Interaction

## Baseline
- Base: v16.3.29 Glossary Expansion + Section-Scoped Highlighting.
- Scope: highlighted Classroom vocabulary interaction only, plus required cache/version/release-note integration.

## Interaction verification
- Hover opens definition popup: **NO**.
- Hover closes definition popup: **NO**.
- Single click opens definition popup: **PASS**.
- Second click on the same term within 500 ms opens its full Glossary entry: **PASS**.
- Popup Escape dismissal retained: **PASS**.
- Popup outside-click dismissal retained: **PASS**.
- Scroll/resize popup positioning retained: **PASS**.
- Classroom visible helper instructions updated: **PASS**.
- Popup hint updated for double-click behavior: **PASS**.
- Pointer cursor matches click-driven interaction: **PASS**.

## Native Chromium check
Representative Classroom content rendered highlighted vocabulary with **0 JavaScript errors**. Hover produced **0** visible definition cards; first click produced **1** visible definition card; the second-click navigation branch executed successfully.

## Regression guardrails
- Glossary dataset remains **599 entries**.
- Section-scoped vocabulary placement logic remains unchanged.
- Canonical concept deduplication remains unchanged.
- Technical-context and acronym safeguards remain unchanged.
- Study Vocabulary and Search integration remain unchanged.
- Curriculum, Teaching Media, assessments/scoring, mastery, labs, projects, calendar, Progress, Cloud Sync, and branding remain unchanged.

## Version/cache
- `runtimePatch`: **16.3.30**.
- Build: `v16.3.30-vocabulary-click-double-click-20260919`.
- Service-worker cache: `alfred-u-v16-3-30-vocabulary-click-double-click-20260919`.
- `learn.html` and `glossary.html` load `glossary.js?v=16.3.30`.
