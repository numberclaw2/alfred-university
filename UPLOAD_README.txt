AU-ESET 301 v16.3.34 — AUTHORITATIVE VISUAL LEARNING LAYER
CHANGED-FILES-ONLY UPLOAD
==========================================================

BASELINE
--------
Course release: 16.3
Runtime baseline: v16.3.33
New runtime patch: v16.3.34
Build: v16.3.34-authoritative-visual-learning-layer-20260919
Evidence revision: 16.2 (unchanged)
Cloud Sync protocol: 2 (unchanged)

WHAT THIS UPDATE DOES
---------------------
- Retires the 62 legacy w01–w31 SVG visuals from the active learner path and service-worker CORE cache.
- Adds a provenance-aware visual system: Real/source visual, Source-grounded technical visual, and Alfred instructional model.
- Gives all 31 CETa weeks targeted section-level visual support while preserving the accepted Week 1 visuals.
- Uses real/open-license equipment/workmanship images where physical recognition matters.
- Uses authoritative source-grounded technical diagrams/tables when manufacturer/standards figures should not be copied directly.
- Replaces the weak Week 1 Career bench visual with real equipment recognition.
- Replaces the weak Week 14 Career pointer flow with a concrete memory/address model grounded in GNU C.
- Strengthens visual grounding for Git, STM32, Python serial, I2C/SPI, harness/workmanship, RF/spectrum, requirements verification, and automated hardware test.
- Preserves Alfred process diagrams where they genuinely teach reasoning/workflow, but labels them honestly as Alfred instructional models.
- Adds a visual-source ledger with creator/source/license information and redistribution boundaries.

UPLOAD INSTRUCTIONS
-------------------
1. Extract the ZIP.
2. Upload EVERY file from the ZIP directly into the repository root.
3. Replace same-named files when GitHub asks.
4. Do NOT delete, replace, or manually edit `.nojekyll`.
5. This is a changed-files-only patch. Do not delete files that are not in this ZIP.
6. The old `wNN-*.svg` files do NOT need to be manually deleted; this release removes their runtime/cache use. They can remain as dormant repository files.
7. After GitHub Pages finishes deploying, verify the post-upload build before treating the release as live.

FILES CHANGED OR ADDED BY THIS UPDATE — 16 TOTAL
--------------------------------------------------
AU-ESET-301-v16.3.34-Authoritative-Visual-Learning-Verification.md
POST-UPDATE-QA.md
SHA256SUMS.txt
UPLOAD_README.txt
VISUAL-SOURCES.md
build-info.json
instructional-visuals.js
learn.html
learn.js
release-notes-current.js
search.html
service-worker.js
study-v2.css
study.html
study.js
styles.css

NO DOTFILES ARE INCLUDED.
NO NESTED FOLDERS ARE INCLUDED.
`.nojekyll` IS NOT INCLUDED.
NO REPOSITORY FILE MUST BE MANUALLY DELETED FOR THIS RELEASE.

POST-UPLOAD SPOT CHECK
----------------------
1. Confirm `build-info.json` reports runtime patch 16.3.34.
2. Open Week 3 CETa and confirm the instrument section shows a real-equipment gallery with provenance/source/license information.
3. Open Week 12 CETa and confirm the solder/workmanship section shows the real-source visual and source grounding.
4. Open Week 16 CETa and confirm the Nucleo board visual appears with provenance.
5. Open Week 20 CETa and confirm the spectrum-analyzer visual appears with provenance.
6. Open Week 1 Career and confirm the bench-orientation visual uses real DMM/bench-supply recognition instead of the old generic primary flow.
7. Open Week 14 Career and confirm the pointer section uses a concrete memory/address model.
8. Open Study after reaching one of those sections and confirm the same visual/provenance renders only for reached material.
9. Confirm the old `wNN-*.svg` lesson visual does not appear in the Purpose stage.
10. Confirm `.nojekyll` remains present without manually uploading it.

QA STATUS
---------
PASS FOR UPLOAD. See `POST-UPDATE-QA.md`,
`AU-ESET-301-v16.3.34-Authoritative-Visual-Learning-Verification.md`, and
`VISUAL-SOURCES.md`.
