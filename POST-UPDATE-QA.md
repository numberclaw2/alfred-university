# AU-ESET 301 v16.3.8 — Week 1 Instructional Update QA

**Date:** September 18, 2026  
**Scope:** Week 1 Subject 1 teaching depth and visuals only

## Required boundaries

- PASS — Weeks 2–31 module data are byte-equivalent before and after the Week 1 overlay.
- PASS — Week 1 Subject 1 knowledge-check object is unchanged.
- PASS — the complete Week 1 Subject 2 lesson object is byte-equivalent before and after the overlay.
- PASS — Week 1 integrated check objects are unchanged.
- PASS — Week 1 semantic competency tasks are unchanged.
- PASS — all five existing Subject 1 safety teaching blocks are preserved exactly.
- PASS — assessment, calendar, progress, Cloud Sync, lab, and project data files are not part of this package.

## Instructional depth

- PASS — Subject 1 prerequisite now assumes only basic arithmetic, not prior metric-prefix/scientific-notation knowledge.
- PASS — technical sequence is dependency ordered: charge → current → voltage → path → resistance → prefixes → conversion → Ohm's law → proportional reasoning → power → prediction/measurement.
- PASS — 16 Subject 1 teaching sections after overlay: 11 new technical sections + 5 preserved safety sections.
- PASS — approximately 2,900 words of Subject 1 teaching text before worked examples/checks, compared with the prior surface-level treatment.
- PASS — four progressive worked examples: prefix conversion, current from V/R, resistance from V/I, and resistor power/rating.
- PASS — five guided technical practice prompts plus the existing Week 1 application rehearsal in the Practice stage.
- PASS — visible “Builds on” callouts name the prerequisite concept for each new technical layer.

## Visual instruction

- PASS — the homemade Subject 1 Week 1 Classroom SVG is disabled by the overlay, and the old shared Week 1 concept-map graphic is suppressed by the renderer.
- PASS — four source figures/reference visuals are integrated in Subject 1. Subject 2 is not modified in this update.
- PASS — OpenStax/UCF source figures include alt text, caption, source link, and CC BY 4.0 license link.
- PASS — SI-prefix reference table cites NIST plus OpenStax source data and does not redistribute a NIST image.
- PASS — external figure URLs use HTTPS.

## Runtime/package

- PASS — `learn.js`, `week1-instructional-depth.js`, and `release-notes-current.js` pass JavaScript syntax checks.
- PASS — `build-info.json` parses as valid JSON.
- PASS — `learn.html` loads `week1-instructional-depth.js` after `semantic-repair.js` and before state/render scripts.
- PASS — service-worker cache namespace and build metadata identify v16.3.8.
- PASS — the service worker caches the new Week 1 overlay itself. Remote source images remain network-delivered and are not silently republished into the repository.

## Verification boundary

- PASS — the three remote OpenStax/UCF figure URLs resolved successfully during packaging, and the NIST source page was rechecked for the SI-prefix factors used by the lesson.
- ENVIRONMENT LIMIT — a full screenshot/render smoke test of the local package could not be completed because this execution environment blocks Chromium navigation to localhost. This is not a detected site defect. After upload, verify the deployed Week 1 Classroom visually on the normal GitHub Pages origin before closing the update.
