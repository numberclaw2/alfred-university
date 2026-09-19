AU-ESET 301 v16.3.25 — GLOSSARY RENDER DEDUPLICATION
========================================================

Upload every file in this ZIP to the GitHub repository root, replacing same-named files when prompted.

NEW
- AU-ESET-301-v16.3.25-Glossary-Deduplication-Verification.md

REPLACE / UPDATE
- glossary.js
- learn.html
- build-info.json
- release-notes-current.js
- service-worker.js
- POST-UPDATE-QA.md
- UPLOAD_README.txt
- SHA256SUMS.txt

WHAT THIS FIXES
- Hard DOM-level guarantee: only one live glossary anchor per canonical concept in the currently rendered lesson/stage.
- Stronger judgment about which occurrence is selected.
- Weak or incidental placements may remain unhighlighted.
- Classroom glossary script is cache-busted so an older highlighter is not silently reused after refresh.

No glossary definitions, Vocabulary Study data, curriculum, assessments, mastery, calendar, labs, projects, Teaching Media, Progress, Cloud Sync, or branding are replaced.
