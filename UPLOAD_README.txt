AU-ESET 301 v16.3.32 — STUDY LIBRARY + WEEK 1 SAFETY SCAFFOLDING
=================================================================

WHAT THIS PACKAGE IS
--------------------
This is the COMPLETE FLAT replacement/upload package for the current AU-ESET 301 GitHub repository.
It starts from the deployed v16.3.31 Pages artifact and adds only the requested Study redesign, Week 1 beginner-first safety scaffolding, and the semantic-evidence Review Section extension that supports those safety questions.

UPLOAD METHOD
-------------
1. Extract this ZIP.
2. Open the root of `numberclaw2/alfred-university` on branch `main`.
3. Upload EVERY file from this ZIP directly into the repository root.
4. Allow GitHub to replace files with the same names.
5. Commit the upload and wait for GitHub Pages deployment.
6. Do NOT manually replace `.nojekyll`; this package intentionally contains no filenames beginning with a dot, and the existing repository `.nojekyll` should remain in place.

WHAT CHANGED
------------
STUDY
- Study now opens as an actual Study Library instead of immediately forcing retrieval questions.
- Six study paths are available: Review Material, Concept Flashcards, Watch & Review, Reference, Work Weak Areas, and Active Recall.
- Only Classroom teaching sections you have already reached are available in Study. Future unreached material stays hidden.
- Review Material gives you a reread-friendly study sheet with Quick re-read, full lesson text, existing visuals/tables, Hold onto this, and previous/next review navigation.
- Concept Flashcards can be flipped freely for memorization and repeated exposure; you do not have to fail a question before seeing the answer.
- Watch & Review surfaces the already-verified Teaching Media connected to material you have reached. Week 1 videos unlock with their teaching concepts so later topics do not leak early.
- Reference surfaces reached formulas/knowledge notes, glossary terms, and assigned resources.
- Work Weak Areas shows the explanation first for concepts previously rated Partial/Missed or due for review.
- Active Recall keeps the strong existing retrieval/diagnostic/practice/teach-back system, but it is now optional and limited to already-reached material.

WEEK 1 SAFETY
- The five Week 1 safety sections now explain unfamiliar technical nouns before asking you to reason about them.
- Added beginner context for CMOS/semiconductors/ESD controls, RF/MPE/interlocks, fiber termination/IR/shards, NEC/interrupting rating/inrush, LOTO/stored energy, meter ratings, PPE, fire-class boundaries, and related safety language.
- The five safety competency prompts now include enough object/context information to understand what is being asked.
- The original competency codes, required technical elements, safety expectations, and mastery rules are unchanged.

QUESTION REVIEW
- The v16.3.31 Review Section / Back to question system still covers 124 integrated checks + 62 lesson gates.
- It now also covers all 87 semantic competency-evidence prompts, including the Week 1 safety questions.
- Total direct question/evidence review locations: 273.

FILES CHANGED OR ADDED BY THIS UPDATE
-------------------------------------
AU-ESET-301-v16.3.32-Study-Library-and-Week1-Safety-Scaffolding-Verification.md
POST-UPDATE-QA.md
SHA256SUMS.txt
UPLOAD_README.txt
build-info.json
learn.js
release-notes-current.js
service-worker.js
study-v2.css
study.html
study.js
week1-instructional-depth.js

NO DOTFILES ARE INCLUDED.
NO FILES ARE REMOVED BY THIS UPDATE.

POST-UPLOAD SPOT CHECK
----------------------
1. Open Study during Week 1. It should open Review Material, not a cold retrieval test.
2. Confirm Review Material only includes Classroom teaching sections you have already reached.
3. Open Concept Flashcards and reveal/hide a card.
4. Open Watch & Review and confirm videos correspond to concepts already reached.
5. Open Active Recall and confirm it only asks about already-reached concepts.
6. In Week 1 Classroom, open the ESD safety teaching section and confirm CMOS/semiconductor/ESD terms are explicitly explained.
7. Open Week 1 Competency Evidence, locate the ESD or RF/fiber safety prompt, click Review Section, then click Back to question.
8. Confirm the glossary still uses one click for the popup definition and double-click for the full Glossary entry.
9. Confirm `.nojekyll` remains present in the repository without manually uploading it.

QA STATUS
---------
PASS FOR UPLOAD. See `POST-UPDATE-QA.md` and `AU-ESET-301-v16.3.32-Study-Library-and-Week1-Safety-Scaffolding-Verification.md`.
