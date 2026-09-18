# AU-ESET 301 v16.3.20 — Final Acceptance Repair QA

**Date:** September 18, 2026  
**Scope:** Bounded repair of the defects found by the final whole-site acceptance audit plus the user-provided About, Progress, and Projects screenshots. This release does not reopen curriculum or learner-system architecture.

## Screenshot / hero-layout repair

- PASS — root cause identified in `site.js`: the injected context trail had been inserted as a direct child of grid-based hero shells, creating a third CSS Grid item and displacing the intended two-column hero children.
- PASS — `site.js` now places the context trail inside the primary text/content column for `.about-grid`, `.progress-hero-grid`, `.engineering-hero-grid`, `.project-page-grid`, and `.study-hero-grid` instead of inserting it as a sibling grid item.
- PASS — structural DOM simulation confirms About, Progress, and Projects retain exactly two direct grid children after breadcrumb insertion, so the heading/seal/progress-card columns are no longer reflowed by the breadcrumb.
- PASS — no hero CSS, responsive breakpoints, or page-specific content was rewritten.

## Final-audit functional repairs

- PASS — `knowledge.html` restores the `nav-more-button` class and `aria-haspopup="true"`, matching every other full navigation shell and the selector expected by `site.js`.
- PASS — `progress.html` gives the existing Cloud Sync section `id="cloud-sync"`, so both Deployment deep links now land on the actual Cloud Sync controls.
- PASS — `readiness.js` gives every rendered CETa coverage-map row a stable `domain-N` anchor. A runtime VM harness confirmed `domain-1` and `domain-2` are emitted from representative coverage data.
- PASS — Search still generates `assessments.html#domain-N` CETa-domain routes, and the Assessment Center now provides matching anchors.

## Durable wording cleanup

- PASS — Assessment Center no longer labels v16.3.7 as the current site/assessment runtime. The hero now describes the current assessment and mastery evidence model without a stale patch number.
- PASS — Documents relabels the v16.3.7 file as a Whole-System Audit Repair Record instead of a current runtime repair.
- PASS — Documents now states that the v16.3.7 repairs remain incorporated into later runtimes while `build-info.json` and Release Notes control the current runtime.
- PASS — Week Overview, Engineering, Knowledge Base, and Student Services compatibility notes now state that normal-navigation retirement is already complete instead of describing Step 9 as future work.

## Whole-package regression checks

- PASS — all JavaScript files in the deployed site tree pass `node --check`.
- PASS — all JSON files parse successfully.
- PASS — 25 HTML pages scanned with zero duplicate IDs.
- PASS — zero missing local `href` / `src` targets across the HTML pages.
- PASS — all 150 `service-worker.js` CORE entries resolve to deployed files.
- PASS — compatibility files `week.html`, `engineering.html`, `knowledge.html`, and `student-services.html` remain present and cached.
- PASS — `build-info.json` reports runtime `16.3.20`, build `v16.3.20-final-acceptance-repair-20260918`, and release status `final-acceptance-repair-ready`.
- PASS — service-worker cache advances to `alfred-u-v16-3-20-final-acceptance-repair-20260918` with no fetch-strategy change.
- PASS — Release Notes lists v16.3.20 first and its 15-file manifest exactly matches the repair package.

## Browser-rendering note

A managed Chromium policy in the container blocks both localhost and `file://` page rendering, so an independent repaired-page screenshot could not be captured inside this environment. The layout defect itself is nevertheless verified at the DOM/CSS-structure level: the breadcrumb no longer becomes a direct grid child on the three user-reported pages, which removes the mechanism that produced the supplied screenshots.

## Protected systems unchanged

This repair does **not** change curriculum/lesson content, Teaching Media, calendar dates or IDs, assessment questions or scoring, mastery formulas, labs, projects, progress record identities, Cloud Sync protocol 2, Worker/D1 behavior, Study/Practice workflow, or the v16.3.19 owner-based information architecture.
