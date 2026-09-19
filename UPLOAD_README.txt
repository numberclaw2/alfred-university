AU-ESET 301 v16.3.29 — GLOSSARY EXPANSION + SECTION-SCOPED HIGHLIGHTING
=======================================================================

Baseline: verified deployed v16.3.28 production state.
Upload every file in this ZIP directly to the GitHub repository root, replacing same-named files.

NEW
- AU-ESET-301-v16.3.29-Glossary-Coverage-and-Section-Highlighting-Verification.md

REPLACE / UPDATE
- POST-UPDATE-QA.md
- SHA256SUMS.txt
- UPLOAD_README.txt
- build-info.json
- glossary-data.js
- glossary.html
- glossary.js
- learn.html
- release-notes-current.js
- search.html
- service-worker.js
- study.html

WHAT CHANGES
1. Course Glossary expands from 282 to 599 field-specific terms.
2. Classroom highlights more unique electrical/electronics/physics/signals/embedded/test vocabulary.
3. A canonical glossary concept is highlighted at most once inside each numbered teaching section.
4. The same concept may be highlighted once again when a new numbered section starts.
5. Placement scoring still chooses a useful instructional occurrence rather than blindly linking the first match.
6. Canonical plural matching, acronym case safety, and ambiguous-word technical-context safeguards reduce false positives.
7. Study Vocabulary and Search Everything automatically inherit all 599 terms from the same glossary dataset.

NATIVE QA
- Actual Week 1 Classroom: 16 teaching blocks, 0 JS errors, 0 duplicate canonical glossary slugs within a block.
- Representative Weeks 8, 11, 18, 20, 27: 43 total teaching blocks, 0 JS errors, 0 duplicate block slugs.
- Full Glossary page: 599 cards rendered, 0 JS errors.
- Study Vocabulary All Course scope: 599 terms available.
- Search Everything: expanded glossary terms searchable.

PROTECTED
No curriculum wording, lesson order, Teaching Media, assessments/scoring, mastery,
labs, projects, calendar identities, Progress data, Cloud Sync, global UX architecture,
or branding artwork changed.
