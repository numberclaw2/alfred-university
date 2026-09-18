AU-ESET 301 v16.3.15 — KNOWLEDGE BASE RETIREMENT / SEARCH CONSOLIDATION

UPLOAD EVERY FILE IN THIS ZIP DIRECTLY TO THE GITHUB REPOSITORY ROOT.
Replace matching files when prompted. Do not create a wrapper folder.

PURPOSE
- Retire Knowledge Base as a duplicate standalone search page.
- Preserve all existing concept-reference data in academic-content.js unchanged.
- Make Search Everything the owner of the quick-reference concept-card experience.
- Preserve old knowledge.html q/domain bookmarks through a compatibility route.
- Do NOT perform final global navigation cleanup yet; that remains Step 9.

FILES ADDED
- None

FILES MODIFIED
- knowledge.html
- search.html
- search.js
- release-notes-current.js
- build-info.json
- service-worker.js
- POST-UPDATE-QA.md
- UPLOAD_README.txt
- SHA256SUMS.txt

FILES REMOVED
- None

NOT CHANGED
- academic-content.js concept data
- Study
- Practice
- Week Overview compatibility behavior
- Engineering compatibility behavior
- Student Services
- Home/global navigation cleanup
- Calendar data/identities
- Lab definitions / projects
- Assessment bank / mastery formulas
- Progress schema / Cloud Sync protocol
- Classroom lesson content / Teaching Media

EXPECTED RUNTIME
runtimePatch: 16.3.15
build: v16.3.15-knowledge-base-retirement-20260918
cache: alfred-u-v16-3-15-knowledge-base-retirement-20260918
