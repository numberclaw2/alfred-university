# ALFRED UNIVERSITY — CETa v5.2 · FINAL READY-TO-UPLOAD UPDATE

**26 October 2026 · CETa-only course release overlay**

This release is a **five-file root update** for the existing Alfred University site on GitHub Pages, not a replacement of unchanged image, PDF, HTML, or historical files. **Keep every other existing repository file.** The baseline source commit at packaging was `49ef52ae5ecb425077192ca2f9eb3dc200d01dfb`.

## Changes that materially improve preparation

- Reconcile Stage 08 and Stage 10 CETa task mappings. Six fixed-resistor voltage divider questions are no longer counted as potentiometer-specific evidence; remove similarly unsupported transformer lamination and transistor-bias objective claims.
- Repair the misleading RF question that compared an ideal *lossless* line to loss experienced in a real cable. Its correct keyed answer and choices remain unchanged.
- Flag historical C/D form questions that still carry invalid legacy focus codes without rewriting past score records.
- Keep all 30 modules, 373 instructional page IDs, the existing 100-question original and v5.2 Form A/B banks, C/D study rehearsals, instructor-written material, the school crest/identity, and the private-study-guide linkage.
- Publish a fresh service-worker cache identifier to retrieve updated course content, while retaining the saved progress key, backup schema and Cloud Sync interface.

## Exam preparation and honesty

Alfred is a serious independently written course, **not** an official ETA exam or an accredited university degree. Passing its assessments does not guarantee passing ETA's CETa exam. Question-objective alignments that have not received independent item-by-item review remain provisional; the site warns learners against treating inherited tags and familiar rehearsals as certified mastery. The official 2025 ETA Associate CET competency requirements and the sixth-edition study guide remain external primary authorities.

## Learner data

The release does **not** clear localStorage, change Cloud Sync protocol, change the learner schema, rewrite answers, or delete previously saved exam records. For additional protection, export a local CETa progress backup from the Progress page **before** updating the site. Never share your Cloud Sync recovery key with GitHub or ChatGPT.

## Scope of testing

Checks included source preservation, lesson and bank inventory, answer-key immutability, historical-focus flags, JSON-to-JS integrity, JavaScript syntax, and packaged root-file verification. Earlier Stage 08 browser fixtures passed, and the service-worker lifecycle was modeled again. A new Chromium run could not navigate to the local fixture because browser administration blocked all local URLs; that browser check is explicitly **untested**, not passed. The current release was checked for JavaScript syntax, exact browser/course data agreement, archived-browser-runtime immutability, answer-key preservation and cache lifecycle. These are summarized in `ALFRED_CETA_V5_2_RELEASE_QA.json`. Actual authenticated Cloud Sync, real iPhone Safari, live GitHub Pages deployment, and remote image delivery could not be tested in this build environment; they require post-upload smoke tests. These external limitations are not claimed as passed.

## Upload method

Upload **only** the files at the root of this ZIP to the repository **root** (`main` branch), replacing the five names listed below and adding the supporting release documentation:

1. `course.json`
2. `course.js`
3. `ceta.js`
4. `ceta.css`
5. `service-worker.js`

`README_UPLOAD.txt`, this release note, the QA report and the SHA-256 listing are informational. Do not delete existing files. Allow Pages to deploy, hard-refresh your browser, verify Version/course behavior and export+import with a noncritical test backup. Keep your existing learner backup until you confirm your progress remains visible.
