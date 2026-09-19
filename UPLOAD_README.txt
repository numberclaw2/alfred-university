AU-ESET 301 v16.3.33 — CAREER BEGINNER-FIRST INSTRUCTIONAL DEPTH
CHANGED-FILES-ONLY UPLOAD
===============================================================

BASELINE
--------
Course release: 16.3
Runtime baseline: v16.3.32
New runtime patch: v16.3.33
Build: v16.3.33-career-beginner-first-instructional-depth-20260919
Cloud Sync protocol: 2 (unchanged)

WHAT THIS UPDATE DOES
---------------------
- Audits and repairs all 31 Career lessons so Career may assume only material Alfred already taught.
- Reuses adequately taught CETa/Career prerequisites instead of redundantly reteaching them.
- Teaches new Career-only tools, software concepts, workflows, and professional vocabulary before required use/testing.
- Adds beginner-first foundations for bench work, Git, C, embedded architecture/debugging, Python serial tooling, requirements/traceability, controlled project baselines, automated hardware test, and career evidence/application workflows.
- Adds 32 Career instructional flow/mental-model visuals across all 31 Career lessons.
- Preserves existing Career teaching-section counts/titles so saved lesson progress does not shift.
- Gives all 93 Career lesson question locations a valid strengthened Review Section teaching target.
- Keeps the v16.3.32 Study Library progression-aware: strengthened Career material appears only after the corresponding Career section is reached.

UPLOAD INSTRUCTIONS
-------------------
1. Extract the ZIP.
2. Upload EVERY file from the ZIP directly into the repository root.
3. Replace same-named files when GitHub asks.
4. Do NOT delete, replace, or manually edit `.nojekyll`.
5. This is a changed-files-only patch. Do not delete files that are not in this ZIP.
6. After GitHub Pages finishes deploying, verify the post-upload build before treating the release as live.

FILES CHANGED OR ADDED BY THIS UPDATE — 14 TOTAL
--------------------------------------------------
AU-ESET-301-v16.3.33-Career-Beginner-First-Instructional-Depth-Verification.md
POST-UPDATE-QA.md
SHA256SUMS.txt
UPLOAD_README.txt
build-info.json
career-instructional-depth.js
learn.html
learn.js
release-notes-current.js
search.html
service-worker.js
study.html
study.js
styles.css

NO DOTFILES ARE INCLUDED.
NO NESTED FOLDERS ARE INCLUDED.
NO FILES ARE REMOVED BY THIS UPDATE.

POST-UPLOAD SPOT CHECK
----------------------
1. Open Week 1 Career Lesson. Confirm the first teaching section explains the bench power supply, DMM, rails/reference, and current-limit mental model before the workflow.
2. Open Week 12 Career Lesson. Confirm Git begins with version control/repository/working-tree concepts before commit/branch workflow.
3. Open Week 14 Career Lesson. Confirm C begins with language/source/compiler, variables/types, control flow, and functions before arrays/pointers.
4. Open Week 17 Career Lesson. Confirm Python is introduced before the serial-client task.
5. Open Week 27 Career Lesson. Confirm automated-test lifecycle/fixture/result/configuration vocabulary is taught before the procedure.
6. Use a Career question's Review Section control and confirm it lands on the teaching section that explains the concept, then use Back to question.
7. Open Study after reaching a Career section and confirm the strengthened Career explanation/flow visual appears in Review Material without future Career sections being exposed.
8. Confirm the glossary still uses one click for the popup definition and double-click for the full Glossary entry.
9. Confirm `.nojekyll` remains present in the repository without manually uploading it.

QA STATUS
---------
PASS FOR UPLOAD. See `POST-UPDATE-QA.md` and
`AU-ESET-301-v16.3.33-Career-Beginner-First-Instructional-Depth-Verification.md`.
