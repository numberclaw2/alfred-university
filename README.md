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
