# Alfred University

Static GitHub Pages frontend for the fictional Alfred University independent-study environment.

## Hosting

The website itself is hosted on GitHub Pages from the repository root. `index.html` must remain at the repository root.

GitHub Pages hosts the HTML, CSS, JavaScript, images, PDFs, calendar file, and installable web-app manifest.

## Student Progress and Cloud Sync

The Student Progress Portal works offline-first using browser storage.

Optional cross-device sync uses a separate Cloudflare Worker + Cloudflare D1 backend. The frontend remains static on GitHub Pages; the Cloudflare backend stores synchronized progress records when the user explicitly connects it from the Progress page.

There is no conventional username/password account system. Cross-device sync uses a private Alfred University Student Sync Key.
The Student Sync Key authenticates access, but synchronized D1 record contents are not end-to-end encrypted. Avoid storing sensitive secrets in Personal Notes.

> Alfred University is a fictional independent-study environment for personal learning and is not an accredited institution.


## Academic Content Upscale (v10)
Added Week Modules, Lab Center, Assessment Center, Engineering Knowledge Base, verified deep-resource library, and Search Everything. CETa competency scope remains the authority for exam preparation; deeper material exists to explain, demonstrate, and career-translate those objectives. Alfred PDFs are full-text indexed locally in `academic-content.js`; external publisher material is linked rather than repackaged.

### v10 academic inventory
- 31 week modules tied to the existing course calendar
- 24 structured electronics/embedded laboratories
- 8 mastery/diagnostic assessment groups
- 61 searchable engineering knowledge-base concepts
- 96 additional deep-study resources from ETA, universities, government/standards sources, manufacturers, and professional training providers
- 48 original assigned course resources retained
- 6 Alfred University PDFs indexed by full local text for site search
- External PDFs/video/course resources are indexed by verified metadata, CETa domains, week alignment, summaries, and keywords; the authoritative publisher copy remains the source of truth.

Resource verification snapshot: 2026-09-11. Re-check external publisher URLs periodically because third-party sites can reorganize content without notice.

## Local Engineering PDF Library (v11)

v11 turns the Engineering Library into a hybrid **local document library + verified publisher-link library**.

### What is stored locally

Open-license, U.S. government, and explicitly public-release PDFs listed in `library-sources.json` are downloaded by the GitHub Actions workflow `.github/workflows/library-sync.yml`. The workflow:

1. downloads the approved source documents,
2. stores the actual PDFs under `the repository root as LIB-*.pdf files`,
3. extracts searchable text from every PDF,
4. generates `library-catalog.js` for the Engineering Library page,
5. generates `library-index.js` for full-content Search Everything,
6. commits the refreshed library back to the repository.

The first refresh runs automatically when the v11 workflow/source files are pushed to GitHub. It can also be started manually from **GitHub → Actions → Refresh Alfred PDF Library → Run workflow**. A monthly refresh checks the open/public collection for updated source copies.

### Why some PDFs remain links

The site is public. A PDF being free to read/download does not automatically grant permission to republish it. ETA International's CETa competency and other ETA documents remain the controlling exam sources, but ETA marks its current competency as copyrighted/all-rights-reserved. Manufacturer handbooks likewise generally remain publisher-controlled. Those resources therefore stay as verified official publisher links unless redistribution rights are explicit.

This does **not** reduce their academic priority: ETA material remains first in CETa planning, search metadata, week alignment, and assessment mapping. The local PDF mirror exists to make legally redistributable reference material searchable and available inside Alfred University.

### Current local-library source families

- MIT OpenCourseWare 6.002 Circuits and Electronics PDF course pack (Creative Commons)
- U.S. Department of Energy Electrical Science and engineering-drawing handbooks
- U.S. Department of Energy Electrical Safety handbook
- NASA public workmanship / ESD standards
- OSHA electrical-safety publications
- NIST SI / measurement references
- FCC RF-exposure guidance

No Cloudflare/D1 changes are required for this library release.


## v13 Student Success System
The v13 release adds `study.html` as the executive-function layer for AU-ESET 301. It provides one-next-action guided study sessions, Quick/Standard/Deep Work modes, Focus/Quiet modes, spaced review, a Curiosity Parking Lot, and recovery routes when a concept is not clicking. The release history is documented in `patch-notes.html`. Core Progress and Cloud Sync remain compatible with protocol 2; no backend migration is required for v13.


## v13.1 Hardware Access / Virtual Lab Patch
Every one of the 24 Engineering Lab Center labs now offers two routes: a **Virtual Lab — Free** route and the original **Physical Lab — Hardware** route. The student completes one route for the scheduled academic lab; doing both is not required. Simulation evidence counts for course progress when hardware is unavailable. Labs that teach genuinely tactile skills (especially actual soldering/desoldering/crimping) explicitly preserve a **Physical Verification Later** requirement rather than pretending simulation can reproduce the motor skill. No calendar IDs, dates, Progress records, or Cloud Sync protocol changed in v13.1.


## v14 Assessment, Standards & Retention System
- 125 lesson quizzes, 24 lab checks, 31 weekly mastery tests, and 3 cumulative exams.
- Normal lesson/lab/weekly assessments use a 50/50 CETa + career-transition mix. The CETa mock and Career Bridge screen isolate each track; the comprehensive final returns to 50/50.
- 1,047 original assessment-bank questions: 599 CETa-aligned and 448 career-transition items. Assessment selection prioritizes application, calculation, and troubleshooting scenarios before using standards-scope checks to fill required coverage.
- 262 individual CETa competency rows + 78 Alfred career standards. The current ETA competency wording controls certification scope; the supplied Associate CET Study Guide, 6th Edition is the primary instructional reference; the official ETA practice exam calibrates breadth/style without being copied.
- `standards.html` includes the CETa competency outline and evidence-based retention status. `quiz.html` runs the assessments and returns explanations plus weak-standard diagnostics after submission.
- Results are stored inside existing event/week Progress records so Cloud Sync protocol 2 and the current D1 schema remain compatible. The latest 3 detailed attempts per assessment are retained for mastery/retention evidence, while `attemptCount`, `bestPct`, and `lastPct` preserve the long-term summary without exceeding production Worker limits.
- `course-data.js` and the AU-ESET 301 `.ics` calendar remain byte-for-byte unchanged from v13.1.

## v14.1 Learning Analytics & Competency Dashboard
- Added `analytics.html` / `analytics.js` to turn assessment evidence into readiness, confidence, domain, trend, and repair-priority views.
- New assessment attempts retain a compact question-level ID/choice/correctness map for the latest attempt plus lifetime standard, CETa/career track, cognitive-skill, difficulty, timestamp, time-spent, and attempt-number evidence.
- Added lifetime rollups inside each existing assessment record so older detailed attempts can roll off without losing cumulative standard evidence.
- Added six cognitive-skill dimensions: Recall, Understanding, Calculation, Analysis, Troubleshooting, and Application.
- Standards & Retention now uses lifetime accuracy, evidence quantity, recency, and repeated retrieval when calculating confidence/mastery.
- Lab Center now records Virtual and Physical completion evidence in the existing week records; one route still completes the academic lab, while physical practice can be added later.
- No Cloudflare Worker, D1 schema, Student Sync Key, calendar event ID, date/time, or iCalendar UID migration is required.
- v14.0 assessment history remains compatible. Older attempts continue to contribute score/standard evidence; cognitive/difficulty analytics begin when those richer fields exist.
