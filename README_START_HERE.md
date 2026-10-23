# ALFRED UNIVERSITY — CETa-Only Structural Remodel v1.0.1

## Important: how to deploy

**This package is the complete replacement site. Do not mix it with the old repository contents.** The old repository has version-specific Career scripts, obsolete documents, and a locally bundled official study-guide PDF. GitHub's normal Upload files screen *does not delete files omitted from a ZIP*. Merging the package over the old repository would therefore leave obsolete material publicly accessible and would not accomplish the requested repository cleanup.

Use an existing local Git checkout or ask for help deploying the clean replacement. The included `tools/replace_local_checkout.sh` stages the replacement in a local checkout and makes a backup; it does not push or publish anything by itself. **Only after inspecting the changes** should the user commit and push, which is a separate explicit action.

This ZIP intentionally has the website files at its root, so a GitHub Pages site can serve `index.html` directly. GitHub Pages must use the branch/root currently configured for the site.

## What this package contains

- **30 self-paced CETa modules**, **373 source-derived instructional pages**, **84 mapped instructional sections**, and **262 provisional competency placements**.
- **Five teaching stages:** Start → Learn → Practice → Apply → Master, with lesson pagination and stage-aware progress.
- Relevant technician teaching retained from the former Career lessons, with resume/interview/portfolio requirements retired.
- **23 migrated CETa-relevant laboratory/application routes** from the original 24; the disposition register covers all 24.
- Preserved descriptions for **62 official study-guide reading records**, including required contextual readings and errata, with a private local PDF connector.
- Current glossary, resource links, original reviewed base questions, 100-question internal practice rehearsal, independent-practice log, module completion metrics, search, library, and flexible calendar.
- Static source manifests, structured audit reports, and reproducible release checks.

## How to use the official sixth-edition study guide

In the Engineering Library, select **Connect personal PDF**, then choose the study-guide file you have permission to use. Alfred stores a local browser copy using IndexedDB; it does not upload the book. Contextual readings open at the applicable printed pages (in the provided scan, printed page + 9 = PDF page). Clearing browser site data removes this local guide connection. The copyrighted study-guide PDF is deliberately not redistributed in this public deployment package. Current ETA competency standards, corrections and formula sheets take precedence.

## Learner progress

The original key `alfred-u-progress-v2` is read for legacy detection and export, **never deleted or automatically treated as CETa mastery**. New CETa achievements use `alfred-ceta-only-progress-v1`. The Progress page supports backups and a cautious, manual, existing-account Cloud Sync bridge that fetches remote records before sending updates. The remote service was *not* exercised in production during packaging; export your records before attempting synchronization.

## Verified and not verified

Static QA: 22 checks passed; none failed. Headless rendering: 16 site sections and 30 Classroom modules displayed. Representative interactions: 55 checks, no detected failures. The internal 100-question flow was exercised from start to finish, including its ten-question pages and scoring. Mobile home, Classroom, Progress and Library were checked for horizontal overflow. ZIP CRC integrity is checked before delivery.

**Still requiring verification:** objective-by-objective expert review; difficulty-balanced question bank expansion; live server sync and separate-device merge; official published resource link availability; production service-worker/offline and private-PDF persistence; full assistive-technology accessibility testing. The original reviewed bank is not sufficient to claim that every objective is individually examined. These limitations are listed explicitly in `audit/STATIC_AUDIT.json`.

Do not describe a passed module score as an official ETA exam pass or accreditation. Alfred University here is an independent educational interface and is not affiliated with ETA International.
