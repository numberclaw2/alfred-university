AU-ESET 301 v16.3.31 — LESSON REVIEW NAVIGATION + QUESTION BACKLINKS
====================================================================

WHAT THIS PACKAGE IS
--------------------
This is the COMPLETE FLAT replacement/upload package for the current AU-ESET 301 GitHub repository.
It starts from the deployed v16.3.30 Pages artifact (including the later vocabulary click interaction) and adds only the requested Classroom review-navigation changes.

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
- Previous section controls are now obvious at both the top and bottom of every resumable lesson section.
- When you review older sections, you can move forward again only through material you already reached; future unreached sections stay locked.
- Reviewing older material no longer moves the official saved resume point backward.
- Every integrated lesson question and every required lesson gate has a direct Review Section link to the teaching section that explains the concept.
- Reviewing from a question gives you a Back to question button that returns to the exact question without losing progress.
- Alfred clearly labels when you are reviewing an older section versus sitting at your official resume point.

FILES CHANGED OR ADDED BY THIS UPDATE
-------------------------------------
AU-ESET-301-v16.3.31-Lesson-Review-Navigation-and-Question-Backlinks-Verification.md
POST-UPDATE-QA.md
SHA256SUMS.txt
UPLOAD_README.txt
build-info.json
learn.js
release-notes-current.js
service-worker.js
styles.css

NO DOTFILES ARE INCLUDED.
NO FILES ARE REMOVED BY THIS UPDATE.

POST-UPLOAD SPOT CHECK
----------------------
1. Advance several Week 1 CETa sections, then use Previous section. The displayed section should move backward while the resume-point label stays on the furthest reached section.
2. Use Next completed section. It should move toward the resume point but never beyond it.
3. At the official resume section, only `I answered · continue` should unlock the next unreached section.
4. Reach Check your understanding, click Review Section on an Ohm's-law question, and confirm Alfred opens the relevant teaching section.
5. Click Back to question and confirm Alfred returns to that exact question.
6. Confirm the glossary still uses one click for the popup definition and double-click for the full Glossary entry.

QA STATUS
---------
PASS FOR UPLOAD. See `POST-UPDATE-QA.md` and `AU-ESET-301-v16.3.31-Lesson-Review-Navigation-and-Question-Backlinks-Verification.md`.
