# AU-ESET 301 v16.3.19 — Home + Navigation Final Cleanup QA

**Date:** September 18, 2026  
**Scope:** Step 9 — Home + Navigation final cleanup, plus the minimum Search/context-trail owner-route corrections and release/build/cache bookkeeping required to complete the locked information-architecture roadmap.

## Final information architecture

- PASS — primary learner navigation is exactly **Home · Study · Learn · Calendar · Practice · Progress · Mastery** on every page that carries the full navigation shell.
- PASS — global More menus contain only current destinations: Course Overview, Engineering Library, Projects, Search Everything, Lab Center, Assessment Center, Standards & Retention, Documents, About, Deployment, and Release Notes.
- PASS — Week Overview, Engineering, Knowledge Base, and Student Services do not appear in any global More menu or full global footer.
- PASS — compatibility files `week.html`, `engineering.html`, `knowledge.html`, and `student-services.html` remain deployed and cached for old bookmarks/historical links.
- PASS — full footers now use **Learning & Practice** and **Course & Administration** owner groups rather than the retired Student Services structure.

## Home / owner routing

- PASS — Home remains an orientation/current-week dashboard and does not absorb teaching, practice, completion, or mastery ownership.
- PASS — Home's Practice card now describes the v16.3.12 priority ladder: guided work, labs, required checks, mastery, or repair.
- PASS — Search week-level results are now **Classroom Week** results and route directly to `learn.html?week=N&stage=orientation`.
- PASS — Search's type filter says **Classroom weeks**; it no longer offers Week overviews as a normal destination.
- PASS — the dormant legacy week renderer's CETa-domain chips route to Search Concept References rather than the retired Knowledge Base page.

## Context trails

- PASS — Projects -> Course Overview.
- PASS — Engineering Library -> Course Overview.
- PASS — Knowledge Base compatibility -> Search Everything.
- PASS — Lab Center / Assessment Center -> Practice.
- PASS — Standards & Retention -> Mastery.
- PASS — Deployment / Release Notes -> About.
- PASS — Search and Mastery no longer receive self-parent breadcrumb entries.
- PASS — direct Week Overview and Engineering compatibility pages retain useful owner context without being promoted in navigation.

## Regression / scope checks

- PASS — all 23 HTML pages with the full primary navigation shell were checked after source-level replacement.
- PASS — all 22 HTML pages with a full footer were checked after footer consolidation.
- PASS — no retired-page `href` remains anywhere in those HTML source files.
- PASS — for every HTML page except the intentional Home Practice copy and Search filter update, `<main>` content is byte-for-byte unchanged from v16.3.18.
- PASS — `course-data.js` and the `.ics` calendar were not changed; preserved historical Week Overview links continue to land on the compatibility route.
- PASS — no progress key, event/calendar identity, assessment identity, lab/project identity, mastery formula, curriculum data, Cloud Sync record type/protocol, or Teaching Media assignment is changed.
- PASS — `site.js`, `search.js`, `academic.js`, `release-notes-current.js`, and `service-worker.js` pass JavaScript syntax validation.
- PASS — `build-info.json` parses and reports runtime **v16.3.19**.
- PASS — service-worker cache advances to `alfred-u-v16-3-19-home-navigation-final-cleanup-20260918` while retaining compatibility pages in CORE.
- PASS — Release Notes records the exact final file manifest.

## Roadmap closure

Steps 1–9 are now implemented in source. Step 9 is not considered fully closed until the package is uploaded, the exact GitHub commit is verified, and GitHub Pages successfully deploys that commit.
