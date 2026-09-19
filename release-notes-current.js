(() => {
  const entries = [
    {
        "version": "v16.3.22",
        "date": "September 18, 2026",
        "title": "Course Dictionary — In-Lesson Vocabulary Hover + Click Reference",
        "type": "Learning Support / Course Reference / Runtime Feature",
        "request": "Add an in-house course dictionary so unfamiliar electronics and embedded-systems vocabulary can be understood without leaving the website: identify textbook-level vocabulary across the actual lesson sources, bold recognized terms in Classroom content, show pronunciation and layered definitions on hover/focus, and open the full Dictionary entry on click using authoritative technical sources.",
        "changes": [
            "Added a dedicated Course Dictionary covering the major technical vocabulary found across the live lesson/curriculum sources, including electrical foundations, circuit analysis, AC/signals, components, semiconductors, power electronics, digital logic, instruments/measurement, PCB/assembly, embedded systems, serial protocols, RF/communications, test/troubleshooting, software automation, and safety/workmanship.",
            "Built every Dictionary entry with a plain-English teaching definition, a more technical definition, pronunciation, aliases/abbreviation expansion where applicable, notation, course-week references, and an authoritative-source link. Dictionary wording is a concise teaching paraphrase so the in-house explanation stays readable; the linked IEC/NIST/OSHA/NXP/Arm/ST/IPC/FCC/Python source controls specialized terminology.",
            "Added automatic Classroom vocabulary markup driven by one glossary dataset. Recognized lesson terms are bold with a dotted underline, hover/mouse focus displays a full definition card, keyboard focus provides the same card, and clicking navigates to the exact full Dictionary entry.",
            "Added an in-Classroom Dictionary button plus an explanatory cue so vocabulary support is discoverable without changing lesson sequencing, mastery requirements, or instructional content.",
            "Added Dictionary search, category filtering, A–Z filtering, anchorable term entries, mobile-responsive layout, keyboard accessibility, and source links.",
            "The glossary runtime intentionally avoids rewriting links, buttons, form controls, code/preformatted content, scripts/styles, and already-marked vocabulary. A MutationObserver decorates dynamically rendered lesson stages after learn.js updates the Classroom.",
            "Advanced the service-worker cache namespace and cached the Dictionary page/data/runtime/style/source-verification assets for reliable deployment and offline reuse.",
            "No curriculum sequence, lesson wording, Teaching Media, calendar dates/identities, assessments or scoring, mastery formulas, labs, projects, Cloud Sync protocol, progress identities, branding assets, or existing learner-completion logic was changed."
        ],
        "filesAdded": [
            "AU-ESET-301-v16.3.22-Glossary-Source-Verification.md",
            "glossary.css",
            "glossary-data.js",
            "glossary.html",
            "glossary.js"
        ],
        "filesModified": [
            "POST-UPDATE-QA.md",
            "SHA256SUMS.txt",
            "UPLOAD_README.txt",
            "build-info.json",
            "learn.html",
            "release-notes-current.js",
            "service-worker.js"
        ],
        "filesRemoved": []
    },
    {
      "version": "v16.3.21",
      "date": "September 18, 2026",
      "title": "Transparent Branding Asset Sweep — Crest, Seal & App Icons",
      "type": "Branding / Asset Delivery / Cache Refresh",
      "request": "Audit the entire project for Alfred University crest, seal, logo, symbol, and app-icon usage; remove the visible white raster backgrounds while preserving the existing artwork and filenames; replace the actual runtime assets rather than only unused source PNGs; and make browsers reliably refresh the same-named files.",
      "changes": [
        "Completed a repository-wide branded-asset reference audit. The displayed site uses crest.webp throughout headers and hero branding, seal.webp throughout footers, hero decoration, About, Progress, Projects, and other institutional surfaces, plus icon-180.png, icon-192.png, and icon-512.png for browser/PWA icons. The root alfred-university-crest.png and alfred-university-seal.png files are source assets and are not direct current HTML/CSS runtime references.",
        "Explained and corrected the prior replacement mismatch: replacing only alfred-university-crest.png and alfred-university-seal.png did not change the visible website because the live pages reference crest.webp and seal.webp instead.",
        "Replaced crest.webp and seal.webp with transparent-background versions using the exact existing artwork. Only edge-connected near-white background pixels were made transparent; internal white/cream artwork such as lettering, books, mountain snow, and seal details remains opaque.",
        "Replaced icon-180.png, icon-192.png, and icon-512.png with transparent-background versions at the same pixel dimensions and filenames, so browser, Apple touch, manifest, and shortcut references continue working without markup changes.",
        "Normalized alfred-university-crest.png and alfred-university-seal.png as transparent source assets with the same filenames so future manual reuse does not reintroduce a white rectangular background.",
        "Intentionally left syllabus-cover.png, resource-manual-cover.png, assignment-lab-cover.png, binder-index-cover.png, and certificate-cover.png unchanged. Their white or light areas are the document/page artwork itself, not an accidental background surrounding a crest or seal.",
        "No HTML image paths or manifest icon paths changed. Existing references continue to use the same filenames, so uploading this package directly over the repository replaces the assets in place.",
        "Updated service-worker registration to bypass cached service-worker scripts and request an immediate update check, and advanced the Alfred cache namespace to v16.3.21 so previously cached same-named logo/icon files are retired instead of persisting after upload.",
        "No curriculum, lessons, Teaching Media, calendar, assessments, mastery logic, labs, projects, progress records, Cloud Sync protocol, navigation architecture, or page layout is changed by this branding-only release."
      ],
      "filesAdded": [],
      "filesModified": ["POST-UPDATE-QA.md", "SHA256SUMS.txt", "UPLOAD_README.txt", "alfred-university-crest.png", "alfred-university-seal.png", "build-info.json", "crest.webp", "icon-180.png", "icon-192.png", "icon-512.png", "release-notes-current.js", "seal.webp", "service-worker.js", "site.js"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.20",
      "date": "September 18, 2026",
      "title": "Final Acceptance Repair — Hero Layout, Deep Links & Durable Runtime Labels",
      "type": "Runtime / Navigation / Documentation Repair",
      "request": "Repair the bounded defects found by the final whole-site acceptance audit and the user-provided About, Progress, and Projects screenshots without reopening curriculum, learner workflow, assessment scoring, calendar, Cloud Sync protocol, or Teaching Media.",
      "changes": [
        "Fixed the shared context-trail insertion logic so breadcrumbs are placed inside the primary content column of grid-based heroes instead of becoming an extra CSS Grid item. This restores the intended two-column About, Progress, Projects, Engineering compatibility, and Study hero layouts and prevents breadcrumbs from displacing headings, seals, and progress cards.",
        "Repaired the retired Knowledge Base compatibility page's More menu by restoring the nav-more-button class and aria-haspopup attribute expected by site.js, eliminating the page-specific JavaScript exception while preserving the compatibility route.",
        "Added id=cloud-sync to the existing Progress Cloud Sync section so Deployment's Progress / Cloud Sync deep links land on the actual sync controls instead of only opening the top of Progress.",
        "Added stable domain-N anchors to the existing CETa coverage-map details rendered by readiness.js so Search Everything CETa Domain results such as assessments.html#domain-1 resolve to the intended domain section.",
        "Replaced the Assessment Center's stale v16.3.7 runtime label with durable wording that describes the current assessment and mastery evidence model without pretending an older patch is the site runtime.",
        "Relabeled the v16.3.7 Whole-System Audit Repair document as an audit repair record and clarified that build-info.json and Release Notes control the current runtime; the historical repair remains valid evidence incorporated into later releases.",
        "Updated the Week Overview, Engineering, Knowledge Base, and Student Services compatibility notes to reflect that Step 9 navigation retirement is already complete rather than describing it as future work.",
        "Preserved all curriculum content, lesson/media data, calendar identities and dates, assessment questions/scoring, mastery formulas, labs, projects, progress identities, Cloud Sync protocol 2, Worker/D1 behavior, compatibility URLs, and the v16.3.19 owner-based information architecture."
      ],
      "filesAdded": [],
      "filesModified": ["POST-UPDATE-QA.md", "SHA256SUMS.txt", "UPLOAD_README.txt", "assessments.html", "build-info.json", "documents.html", "engineering.html", "knowledge.html", "progress.html", "readiness.js", "release-notes-current.js", "service-worker.js", "site.js", "student-services.html", "week.html"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.19",
      "date": "September 18, 2026",
      "title": "Home + Navigation Final Cleanup — Owner-Based Information Architecture",
      "type": "Information Architecture / Final Navigation Cleanup",
      "request": "Execute Step 9, the final item in the locked one-tab-at-a-time cleanup roadmap: keep Home as the orientation/dashboard, remove retired destinations from normal navigation, align Search and breadcrumbs with current owner systems, and finish the site-wide information architecture without deleting compatibility URLs.",
      "changes": [
        "Kept the seven-item primary learner navigation unchanged and canonical: Home, Study, Learn, Calendar, Practice, Progress, and Mastery.",
        "Removed Week Overview, Engineering, Knowledge Base, and Student Services from every global More menu and every full global footer. Their HTML compatibility routes remain deployed for old bookmarks, historical links, and preserved calendar-note URLs.",
        "Rebuilt the More menu around current owners only: Course & Reference contains Course Overview, Engineering Library, Projects, and Search Everything; Practice & Mastery contains Lab Center, Assessment Center, and Standards & Retention; Administration contains Documents, About, Deployment, and Release Notes.",
        "Added Deployment to normal administrative navigation so the permanent operations page is directly discoverable after its Step 8 upgrade.",
        "Standardized full-site footers into Learning & Practice plus Course & Administration groups and removed all legacy Week Overview, Knowledge Base, Career Services, Laboratory Safety, and Student Services footer routes.",
        "Corrected context-trail ownership in site.js: Projects and Engineering Library now sit under Course Overview; the retired Knowledge Base compatibility page points back to Search Everything; Search and Mastery no longer receive self-parent breadcrumb entries; direct Week Overview and Engineering compatibility pages still identify their current owner context.",
        "Updated Search Everything so week-level results are Classroom Week results that open the Classroom orientation stage directly instead of routing through the retired Week Overview compatibility page. The visible filter now says Classroom weeks.",
        "Updated the dormant legacy week renderer's CETa-domain chips to open Concept Reference results in Search Everything rather than the retired Knowledge Base page, preventing future reuse from reintroducing the old owner route.",
        "Updated Home's Practice card to describe the current priority ladder—guided work, labs, required checks, mastery, and repair—rather than the old labs-then-assessment portal behavior.",
        "Compatibility URLs, service-worker caching of those compatibility pages, historical release records, calendar identities/content, progress identities, Cloud Sync protocol, lesson content, assessments, labs, projects, mastery formulas, and Teaching Media remain intact."
      ],
      "filesAdded": [],
      "filesModified": ["POST-UPDATE-QA.md", "SHA256SUMS.txt", "UPLOAD_README.txt", "about.html", "academic.js", "analytics.html", "assessments.html", "build-info.json", "calendar.html", "course.html", "deployment.html", "documents.html", "engineering.html", "index.html", "knowledge.html", "labs.html", "learn.html", "patch-notes.html", "practice.html", "progress.html", "projects.html", "quiz.html", "release-notes-current.js", "resources.html", "search.html", "search.js", "service-worker.js", "site.js", "standards.html", "student-services.html", "study.html", "week.html"],
      "filesRemoved": []
    },
    {
          "version": "v16.3.18",
          "date": "September 18, 2026",
          "title": "Deployment Page Durability Upgrade — Live Build Verification & Recovery Operations",
          "type": "Information Architecture / Deployment & Maintenance Documentation",
          "request": "Execute Step 8 of the locked one-tab-at-a-time cleanup plan: keep Deployment because it has a unique maintenance job, remove stale release-specific v16.3.7 instructions, make build-info.json authoritative for the live runtime, and preserve durable hosting, Cloud Sync, offline, recovery, and maintenance guidance without starting the final Home/navigation cleanup early.",
          "changes": [
                "Kept Deployment as a permanent administrative page because the site owner still needs one durable place for hosting architecture, live-build verification, Cloud Sync operations, offline/service-worker behavior, and safe recovery/maintenance rules.",
                "Removed the stale v16.3.7 hero, v16.3.7 integration instructions, old fixed build marker, and release-specific v16.3.6/v16.3.7 acceptance narrative. Release-specific history remains in Release Notes instead of permanent Deployment prose.",
                "Added a Deployed Build status block that reads courseRelease, runtimePatch, evidenceRevision, cloudSyncProtocol, releaseStatus, and build directly from build-info.json with cache disabled.",
                "Documented the four durable architecture layers separately: GitHub repository source, GitHub Pages static deployment, browser/local progress state, and optional Cloud Sync through the configured Cloudflare Worker and D1 database.",
                "Documented current Cloud Sync operating behavior without changing it: Progress owns setup and status; the browser stores the Worker URL, Student Sync/Recovery Key, device identity, and last-sync time; sync health checks Worker reachability, D1 binding/schema, and protocol compatibility before merging timestamped progress records.",
                "Documented service-worker behavior from the current runtime: navigation and HTML/CSS/JS/webmanifest are network-first with cache fallback, each runtime uses a versioned Alfred cache namespace, older Alfred namespaces are removed on activation, and build-info.json is always network-fetched rather than trusted from the offline cache.",
                "Added a safe maintenance/recovery sequence: export Progress and preserve the Recovery Key before major maintenance, verify the exact Pages commit and build-info marker after updates, troubleshoot Cloud Sync in Progress, preserve the existing origin when practical, and never clear browser site data as a routine refresh step.",
                "Clarified change-control ownership: Deployment documents durable operating procedure; Release Notes own file-by-file release history and exceptional migration instructions.",
                "No hosting provider, Worker endpoint, D1 schema, Cloud Sync protocol, service-worker fetch strategy, progress storage schema, curriculum, learner workflow, About page, or global navigation is changed by this documentation upgrade."
          ],
          "filesAdded": [],
          "filesModified": [
                "deployment.html",
                "release-notes-current.js",
                "build-info.json",
                "service-worker.js",
                "POST-UPDATE-QA.md",
                "UPLOAD_README.txt",
                "SHA256SUMS.txt"
          ],
          "filesRemoved": []
    },
    {
      "version": "v16.3.17",
      "date": "September 18, 2026",
      "title": "About Page Durability Upgrade — Dynamic Runtime Metadata & Clear Disclosure",
      "type": "Information Architecture / Administrative Accuracy",
      "request": "Execute Step 7 of the locked one-tab-at-a-time cleanup plan: keep About because it has a unique disclosure/project-explanation job, remove stale release-specific claims, and make current runtime information authoritative without starting Deployment or final navigation cleanup early.",
      "changes": [
        "Kept About as a permanent administrative page because it uniquely explains the purpose of the Alfred University environment, the fictional-institution framing, and the distinction between the site identity and the real learning work performed inside it.",
        "Removed the stale hard-coded statement that the current runtime was v16.3.7 and removed the long release-specific Teaching Media / whole-system audit paragraph from the permanent About narrative.",
        "Rewrote the About purpose section as durable project documentation: Alfred University is a fictional personal learning environment used to organize AU-ESET 301 lessons, labs, assessments, projects, schedules, progress, and study support into one coherent system.",
        "Added an explicit Fictional vs. Real explanation. The institution, branding, mascot, history, and university-style documents are fictional framing; the electronics learning, practice, linked third-party resources, assessments, projects, evidence-building, and career-transition work are real learning activities.",
        "Added a Current Platform Status block that reads courseRelease, runtimePatch, cloudSyncProtocol, and build directly from build-info.json at page load with cache disabled, rather than embedding release numbers in About copy.",
        "Added a graceful metadata fallback that sends the learner to Release Notes when build-info.json cannot be loaded, preventing a failed metadata request from producing a misleading fixed runtime claim.",
        "Clarified administrative ownership: Release Notes own change history; Deployment Notes own hosting, Cloud Sync, service-worker, recovery, and maintenance guidance. Deployment content itself is deliberately unchanged until Step 8.",
        "Preserved the institutional disclosure that Alfred University is fictional, non-accredited, grants no degrees or academic credit, and does not issue official academic credentials.",
        "No learner workflow, Study, Practice, Classroom, Calendar, Progress, Mastery, Labs, Assessments, Projects, Search, Course Overview, compatibility routes, Cloud Sync protocol, lesson content, Teaching Media, Deployment page content, or global navigation is changed in this release."
      ],
      "filesAdded": [],
      "filesModified": ["about.html", "release-notes-current.js", "build-info.json", "service-worker.js", "POST-UPDATE-QA.md", "UPLOAD_README.txt", "SHA256SUMS.txt"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.16",
      "date": "September 18, 2026",
      "title": "Student Services Retirement — Support Moves to Point of Use",
      "type": "Information Architecture / Support Consolidation",
      "request": "Execute Step 6 of the locked one-tab-at-a-time cleanup plan: determine whether Student Services still has a unique job, preserve useful support guidance, move each support function to the system that owns the moment of need, and retire the catch-all page without starting the final global navigation cleanup early.",
      "changes": [
        "Retired Student Services as an independent catch-all destination because study help, career guidance, and lab safety now have stronger point-of-use owners.",
        "Moved the five-part Office Hours protocol into Study's I’m Stuck modal so deeper-help preparation appears at the exact moment a learner is blocked. The protocol still asks for week/assignment, expected behavior, actual evidence, attempted fixes, and a request for diagnosis or teaching rather than only a final answer.",
        "Moved the standing laboratory-safety rules into Lab Center: low-voltage/current-limited bench work, polarity/supply/current checks before power-up, correct DMM current-mode use, earth-referenced oscilloscope-ground awareness, ESD precautions, and de-energized continuity/resistance checks unless a procedure explicitly requires otherwise.",
        "Moved the useful Career Services role-fit filter into Progress career readiness. The guidance preserves the rule that job content matters more than title and prioritizes schematics, PCBAs, instruments, firmware interaction, Python/test automation, troubleshooting, and proximity to engineers.",
        "Preserved the broader bridge-role examples in Progress: R&D Electronics / Engineering Lab Technician, Hardware Test / Validation Technician, Hardware Integration / Test Technician, Electronics / PCBA Test Technician, and Embedded Test / HIL Technician when actual requirements fit.",
        "Converted student-services.html into a compatibility route with anchored cards for legacy #office-hours, #career, and #lab-safety links, routing each function to Study, Progress, Lab Center, or Projects without maintaining a second copy of the support content.",
        "Did not relocate the old 'Study is your daily command center' banner because the rebuilt Study tab already owns that function directly.",
        "Intentionally deferred removal of Student Services and its legacy footer links from global navigation until Step 9 (Home + Navigation final cleanup), matching the locked roadmap.",
        "No Study session/mastery logic, Practice logic, Week Overview compatibility behavior, Engineering compatibility behavior, Knowledge Base compatibility behavior, Calendar data, lab definitions, project requirements, assessment bank, mastery formulas, Progress data schema, Cloud Sync protocol, lesson content, or Teaching Media is changed in this release."
      ],
      "filesAdded": [],
      "filesModified": ["student-services.html", "study.html", "labs.html", "progress.html", "release-notes-current.js", "build-info.json", "service-worker.js", "POST-UPDATE-QA.md", "UPLOAD_README.txt", "SHA256SUMS.txt"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.15",
      "date": "September 18, 2026",
      "title": "Knowledge Base Retirement — Concept Reference Moves Into Search",
      "type": "Information Architecture / Search Consolidation",
      "request": "Execute Step 5 of the locked one-tab-at-a-time cleanup plan: determine whether the standalone Knowledge Base page still has a unique job, preserve all useful concept-reference data, move that quick-reference experience into the correct owner, and retire the duplicate page without starting the final global navigation cleanup early.",
      "changes": [
        "Retired Knowledge Base as an independent search destination because Classroom now owns teaching and Search Everything already owns cross-program retrieval. The underlying concept-reference data remains useful and is preserved unchanged in academic-content.js.",
        "Moved the former Knowledge Base quick-reference experience into Search Everything. Concept Reference results now show the concise definition, formula when one exists, deeper technician note, CETa domain, and mapped weeks directly in the search result instead of sending the learner to a second search page.",
        "Preserved all 61 current concept records without deleting, renaming, or rewriting their academic-content.js source data.",
        "Changed the Search Everything type filter from the legacy 'Knowledge base' label to 'Concept references' and changed indexed concept-result type from Knowledge to Concept Reference.",
        "Added URL support for Search Everything type and CETa-domain filters so an old Knowledge Base bookmark can carry its q and domain values into the consolidated search owner.",
        "Converted knowledge.html into a compatibility route. It explains the new ownership model and preserves legacy ?q= and ?domain= values when opening Search Everything's Concept Reference filter.",
        "Kept Classroom as the teaching owner, Standards & Retention as the competency/evidence owner, and Engineering Library as the deeper-source owner; the concept-reference merge does not duplicate those systems.",
        "Intentionally deferred removal of Knowledge Base from global More menus and legacy footers until Step 9 (Home + Navigation final cleanup), matching the locked roadmap.",
        "No Study, Practice, Week Overview compatibility behavior, Engineering compatibility behavior, Student Services, Calendar data, labs, projects, assessments, mastery formulas, progress schema, Cloud Sync protocol, lesson content, Teaching Media, or academic-content.js concept data is changed in this release."
      ],
      "filesAdded": [],
      "filesModified": ["knowledge.html", "search.html", "search.js", "release-notes-current.js", "build-info.json", "service-worker.js", "POST-UPDATE-QA.md", "UPLOAD_README.txt", "SHA256SUMS.txt"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.14",
      "date": "September 18, 2026",
      "title": "Engineering Page Retirement — Merge Into Course, Labs & Projects",
      "type": "Information Architecture / Redundancy Cleanup",
      "request": "Execute Step 4 of the locked one-tab-at-a-time cleanup plan: determine whether the standalone Engineering page still has a unique job, preserve its useful concepts, move them to the correct owners, and retire the redundant page without starting the final global navigation cleanup early.",
      "changes": [
        "Retired Engineering as an independent program destination because its technical pillars, lab philosophy, career-pathway summary, and course promotion are now better owned by Course Overview, Classroom/Lab Center, Projects, Progress, and Mastery.",
        "Preserved engineering.html as a compatibility route so existing bookmarks and still-visible pre-Step-9 navigation links do not break. The page now explains where program architecture, lab work, employer-facing project evidence, and readiness tracking live.",
        "Moved the useful career-transition ladder into Course Overview: R&D Engineering Lab, Hardware Test / Validation, and Hardware Integration / Test remain bridge-role families, while Embedded Systems Engineering remains the long-term destination supported by the BSEE path and practical engineering evidence.",
        "Preserved the concise engineering philosophy 'understand it, measure or build it, debug it, and explain the evidence' by integrating it into the Course Overview mastery section instead of maintaining a duplicate philosophy page.",
        "Did not duplicate the old Engineering page's electronics/embedded/lab/test pillar cards because the same technical progression is already represented more concretely by the six AU-ESET 301 academic phases, Classroom lessons, Lab Center, and Project Center.",
        "Did not relocate the old lab-promotion block because Lab Center and Classroom Application already own instrumentation, troubleshooting procedure, evidence routes, and practical completion.",
        "Intentionally deferred removal of Engineering from global More menus and legacy footers until Step 9 (Home + Navigation final cleanup), matching the locked roadmap.",
        "No Study, Practice, Week Overview compatibility behavior, Knowledge Base, Student Services, Calendar data, lab definitions, project requirements, assessment bank, mastery formulas, progress schema, Cloud Sync protocol, lesson content, or Teaching Media is changed in this release."
      ],
      "filesAdded": [],
      "filesModified": ["engineering.html", "course.html", "release-notes-current.js", "build-info.json", "service-worker.js", "POST-UPDATE-QA.md", "UPLOAD_README.txt", "SHA256SUMS.txt"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.13",
      "date": "September 18, 2026",
      "title": "Week Overview Retirement — Merge Into Classroom & Owner Systems",
      "type": "Information Architecture / Redundancy Cleanup",
      "request": "Execute Step 3 of the locked one-tab-at-a-time cleanup plan: determine whether Week Overview still has a unique purpose, preserve any useful information, merge it into the correct owner, and retire the redundant standalone section without starting the final navigation cleanup early.",
      "changes": [
        "Retired Week Overview as an independent weekly-content destination because its outcomes, standards, planned time, schedule, lab/application, mastery, and resource summaries are now better owned by Classroom, Calendar, Lab Center, Assessment Center, Practice, and Engineering Library.",
        "Preserved old week.html bookmarks and calendar-note links by converting week.html into a compatibility route instead of deleting it. The bridge carries a requested ?week= value into Classroom and Practice and explains where each former Week Overview job now lives.",
        "Identified the week-specific Career Translation block as the one meaningful Week Overview element not already surfaced as well elsewhere. Moved that content into Classroom Stage 1 (Start Here), including the weekly capability unlock, roles this builds toward, and interview prompt.",
        "Removed the dedicated Week Overview shortcut from the Classroom control panel so the active learning path no longer sends the learner back into a duplicate summary page.",
        "Updated Course Overview copy and its academic-sequence callout so it no longer describes Week Overview as the schedule/source map or promotes it as a destination; the callout now routes to Classroom, Calendar, and Practice.",
        "Confirmed the two-finish-line CETa / technician-readiness guidance is already preserved on Course Overview through readiness.js, so retiring Week Overview does not remove that guidance.",
        "Intentionally deferred the site-wide removal of Week Overview links from global More menus and legacy footers until Step 9 (Home + Navigation final cleanup), as required by the locked roadmap. Until then, those links land on the compatibility bridge rather than duplicated weekly content.",
        "No Study, Practice logic, Calendar data, labs, assessments, mastery formulas, projects, Knowledge Base, Engineering, Student Services, progress schema, Cloud Sync protocol, lesson content, or Teaching Media is changed in this release."
      ],
      "filesAdded": [],
      "filesModified": ["week.html", "learn.html", "learn.js", "course.html", "release-notes-current.js", "build-info.json", "service-worker.js", "POST-UPDATE-QA.md", "UPLOAD_README.txt", "SHA256SUMS.txt"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.12",
      "date": "September 18, 2026",
      "title": "Practice Tab Rebuild — Priority Hub for Deliberate Practice",
      "type": "Practice / Learning Workflow Upgrade",
      "request": "Evaluate whether the Practice tab still earns a top-level place after the Classroom and Study systems evolved, and either upgrade it into a uniquely useful practice router or retire it before changing the next cleanup-roadmap tab.",
      "changes": [
        "Kept the Practice tab because it now has a distinct job: answer 'what should I practice right now?' by reading the current week and existing progress, then routing the learner to the system that owns the required practice or evidence.",
        "Replaced the former two-link Lab Center / Assessment Center portal with a dynamic current-week Practice Hub.",
        "Added a highest-value-practice recommendation engine. If prerequisite teaching is incomplete, Practice sends the learner back to the exact Classroom stage rather than encouraging premature testing.",
        "Added sequencing for the real practice path: guided Classroom practice -> lab/application evidence -> required lab check when applicable -> weekly mastery -> targeted repair when evidence is weak.",
        "Added a four-card Practice Ladder that reports live status for Guided Practice, Lab/Application, Weekly Mastery, and Targeted Repair as Done, Ready now, Not ready yet, or Repair needed.",
        "Added a Repair Queue that reads existing week reviewQueue records and below-target assessment evidence. Due Study concepts route back to Study; below-target lab or weekly assessment evidence routes to the appropriate repair/retest path.",
        "Added a current-week selector so Practice can inspect another week without changing the authoritative Classroom sequence or progress schema.",
        "Added job-based routing for guided problem solving, build/measure/troubleshoot work, closed-note assessment, and targeted concept repair. Practice itself remains a router and does not duplicate lab procedures, quiz execution, or Study remediation.",
        "Separated optional supplemental practice from required work. Extra assessment-bank repetitions are presented only after the required path and are explicitly labeled optional.",
        "Practice is read-only with respect to course completion: it does not write lesson, lab, assessment, mastery, calendar, or progress completion records. Existing Classroom, Lab Center, Assessment Center, Progress, Study, and Mastery systems remain authoritative.",
        "Added practice.js for live priority/status logic and practice-v2.css for Practice-specific presentation. Rebuilt practice.html around the new hub while preserving the existing global navigation/footer structure.",
        "No Study, Week Overview, Engineering, Knowledge Base, Student Services, Classroom lesson content, Teaching Media, calendar data, assessment bank, lab definitions, mastery formulas, projects, or Cloud Sync protocol is changed in this release."
      ],
      "filesAdded": ["practice.js", "practice-v2.css"],
      "filesModified": ["practice.html", "release-notes-current.js", "build-info.json", "service-worker.js", "POST-UPDATE-QA.md", "UPLOAD_README.txt", "SHA256SUMS.txt"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.11",
      "date": "September 18, 2026",
      "title": "Study Tab Rebuild — Active Retrieval, Diagnosis & Targeted Repair",
      "type": "Study / Learning Workflow Upgrade",
      "request": "Re-evaluate whether the Study tab still earns its place after the Classroom evolved, keep the useful executive-function infrastructure, and replace the generic Study Session with an educationally useful active-learning workflow before changing any other tab.",
      "changes": [
        "Kept the Study tab because its next-action logic, review queue, resume support, focus/quiet modes, curiosity parking lot, weekly orientation, stuck recovery, and spaced-retrieval scheduling still perform useful jobs that the Classroom does not own.",
        "Replaced the former timer-oriented Recall → Learn → Apply → Prove wrapper with a six-stage active-study loop: Retrieve → Diagnose → Repair → Practice → Teach Back → Next Move.",
        "Study now retrieves individual concepts instead of asking only a broad weekly outcome. Week 1 receives a purpose-built concept set for voltage, current, resistance/Ohm’s law, SI prefixes/conversion, power, and open/closed/short paths; later weeks fall back to the existing Academic Knowledge data until they are refined through actual student use.",
        "Added evidence-based self-rating at retrieval and fresh-practice stages so Partial/Missed concepts become repair targets while cleanly recalled concepts stay out of the way.",
        "Added targeted repair cards that give only the minimum corrective explanation, formula/rule where useful, and direct links back to the current Classroom or verified search layer when a short repair is insufficient.",
        "Added fresh transfer practice after repair, including a model-answer reveal only after an attempt, followed by Correct/Partial/Missed evidence rating.",
        "Added a required teach-back stage. Week 1 explicitly asks the learner to connect charge, current, voltage, resistance, Ohm’s law, power, SI prefixes, and real measurement/application rather than merely rate confidence.",
        "Added a final Next Move decision that distinguishes 'ready to continue the saved Classroom stage' from 'one more repair pass' without claiming course mastery or certification readiness.",
        "Removed the Study Session's 'Mark Scheduled Work Complete' behavior. Study no longer writes course-completion status merely because a study wrapper was finished; Classroom, Lab Center, assessments, and Progress remain the completion/evidence authorities.",
        "Preserved and integrated the existing spaced-review queue. Concept ratings now schedule concept-level retrieval reviews; Mastery-requested standard reviews and historical event-level Study reviews remain supported. Ratings schedule review only and do not inflate assessment/mastery evidence.",
        "Preserved Cloud Sync behavior for existing Progress week/event records. Study diagnostics themselves remain local session state; only the already-supported week reviewQueue records are synchronized.",
        "Added study-v2.css as a Study-specific presentation layer loaded by study.js so the active-learning cards, diagnosis view, repair cards, practice ladder, and teach-back remain isolated from the rest of the site styling.",
        "Reworded the Study hero and session-mode copy at runtime so modes describe retrieval workload rather than treating time spent as the educational objective.",
        "No Practice, Week Overview, Engineering, Knowledge Base, Student Services, Classroom lesson content, calendar data, assessment bank, project data, mastery rules, or other cleanup-roadmap tab is changed in this release."
      ],
      "filesAdded": ["study-v2.css"],
      "filesModified": ["study.js", "release-notes-current.js", "build-info.json", "service-worker.js", "POST-UPDATE-QA.md", "UPLOAD_README.txt", "SHA256SUMS.txt"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.10.1",
      "date": "September 18, 2026",
      "title": "Release Notes Manifest Classification Correction",
      "type": "Documentation / Change-Control Correction",
      "request": "Correct the v16.3.10 Added/Modified file classification after post-deployment verification against the actual GitHub commit.",
      "changes": [
        "Post-deployment verification confirmed that v16.3.10 was successfully committed and deployed, but its release entry incorrectly labeled three pre-existing bookkeeping files as newly added.",
        "Corrected v16.3.10 so only AU-ESET-301-Release-Notes-Policy.md and release-change-ledger.js are classified as Added, matching GitHub commit 2f9b63814939577bb5accf6f902f626b5fe29db1.",
        "Reclassified POST-UPDATE-QA.md, SHA256SUMS.txt, and UPLOAD_README.txt as Modified because those filenames already existed before v16.3.10.",
        "Kept patch-notes.html, patch-notes.js, release-notes-current.js, build-info.json, and service-worker.js classified as Modified; no files were removed by v16.3.10.",
        "Verified the historical ledger still contains 63 commits through the v16.3.9 baseline, including 10 no-tree-change commits and 90,815 additions / 42,486 deletions as reported by GitHub.",
        "No curriculum, Week 1 instruction, Teaching Media, assessments, labs, projects, calendar, progress, mastery, Cloud Sync, or other course-learning behavior is changed by this correction."
      ],
      "filesAdded": [],
      "filesModified": ["release-notes-current.js", "build-info.json", "service-worker.js", "POST-UPDATE-QA.md"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.10",
      "date": "September 18, 2026",
      "title": "Release Notes Completeness — Permanent Change Ledger",
      "type": "Documentation / Maintenance / Change-Control Update",
      "request": "Make Release Notes mandatory for every website change going forward and backfill the site so small edits, additions, removals, and repository uploads are no longer lost inside major-version summaries.",
      "changes": [
        "Established a permanent release-logging rule: every future website update, no matter how small, must include a Release Notes entry before the upload package is delivered.",
        "Future entries must record the request/reason, every meaningful behavior/content/design change, every addition and subtraction, and the exact files added, modified, or removed.",
        "Audited the existing human-readable history and retained all 42 unique release records spanning v1.x through v16.3.9; no prior narrative release entry was deleted or rewritten out of history.",
        "Added release-change-ledger.js with a historical ledger of all 63 GitHub commits from the original September 11 repository build through the v16.3.9 baseline, including 10 upload commits whose repository tree did not change.",
        "The Release Notes page now searches both narrative releases and the repository ledger, displays line additions/deletions for historical commits, and links each ledger row to the exact GitHub commit diff for file-by-file verification.",
        "Added optional Added / Modified / Removed file sections to the Release Notes renderer. v16.3.10 is the first release required to use this exact-file format; future releases will continue it.",
        "Corrected current-release ordering so v16.3.10, v16.3.9, v16.3.8, v16.3.7, v16.3.6, and v16.3.5 display in true newest-to-oldest order before the historical release file.",
        "Added a permanent AU-ESET-301-Release-Notes-Policy.md record describing the logging contract and the self-reference rule: the historical commit ledger is backfilled through v16.3.9, while v16.3.10 and later releases record exact changed files directly in their release entry so a release never requires an endless follow-up commit merely to record its own SHA.",
        "No curriculum, Week 1 instruction, Teaching Media, assessments, labs, projects, calendar identities, progress data, mastery rules, Cloud Sync protocol, or course-learning behavior is changed by this release."
      ],
      "filesAdded": ["release-change-ledger.js", "AU-ESET-301-Release-Notes-Policy.md"],
      "filesModified": ["POST-UPDATE-QA.md", "SHA256SUMS.txt", "UPLOAD_README.txt", "build-info.json", "patch-notes.html", "patch-notes.js", "release-notes-current.js", "service-worker.js"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.9",
      "date": "September 18, 2026",
      "title": "Week 1 Beginner-Teacher YouTube Clarity Layer",
      "type": "Teaching Media / Week 1 Learning-Support Update",
      "request": "Add Week 1 videos from instructors who are especially effective at making introductory electricity concepts click for struggling beginners, while preserving the verified Teaching Media coverage already accepted for the course.",
      "changes": [
        "Added week1-beginner-teaching-media.js after teaching-media-content-completion.js. The new layer is additive and Week-1-only: it prepends a beginner-clarity path without deleting, replacing, or weakening any previously verified Teaching Media card.",
        "Added seven public YouTube resources: Math and Science/Jason Gibson for the first-pass voltage-current-resistance mental model; Afrotechmods for current/amps, voltage, resistance/Ohm's law, power/watts, and multimeter use; and The Organic Chemistry Tutor for worked basic-circuit, Ohm's-law, charge, and power problems.",
        "Ordered the additions by learning job rather than authority alone: START HERE concept bridge -> current -> voltage -> resistance/Ohm's law -> power -> worked practice -> bench/multimeter bridge.",
        "Kept the accepted All About Circuits, Fluke, OSHA, Keysight, NASA/ESD, simulation, and other Week 1 resources in place behind the new beginner layer so technical rigor, safety, and audit coverage remain available.",
        "Rechecked source identity and mapped instructional content on September 18, 2026 using public YouTube metadata and creator/source pages where available. The Afrotechmods multimeter card explicitly notes that the exact meter shown is discontinued; the course uses it for measurement concepts, not current purchasing guidance.",
        "Updated resource-verification notes, build metadata, load order, and service-worker cache for v16.3.9. No Week 2-31 media, written curriculum, labs, projects, assessments, calendar identities, progress keys, Cloud Sync protocol, or Week 1 Subject 2 lesson data are changed."
      ]
    },
    {
      "version": "v16.3.8",
      "date": "September 18, 2026",
      "title": "Week 1 From-Zero Teaching + Source-Backed Visuals",
      "type": "Week 1 Instructional Depth Update",
      "request": "Improve Week 1 as the learner actually experiences it: teach technical concepts from zero, make prerequisite connections explicit, explain SI prefixes/conversions before using them, and integrate credible source visuals. Keep the change strictly scoped to Week 1 and avoid reopening Weeks 2–31.",
      "changes": [
        "Added a Week-1 Subject-1-only instructional overlay loaded after the preserved semantic-repair layer; Week 1 Subject 2, Weeks 2–31 lesson data, assessments, calendar identities, progress keys, Cloud Sync, and Teaching Media assignments are not rewritten by this update.",
        "Rebuilt Subject 1 in dependency order: charge → current → voltage → closed circuit path → resistance → SI prefixes/powers of ten → unit conversion → Ohm’s law → proportional reasoning → power → predict-before-measure workflow.",
        "Removed the assumption that the learner already understands metric prefixes or scientific notation. The lesson now explains kilo, mega, milli, micro, nano, pico, powers of ten, decimal movement as a consequence of multiplication/division, symbol capitalization, and conversion reasonableness checks.",
        "Expanded worked reasoning from two examples to four progressive examples covering prefix conversion, forward Ohm’s-law calculation, reverse solving for resistance, and power-rating evaluation.",
        "Removed the homemade Subject 1 Week 1 lesson diagram from the Classroom presentation and suppresses the old shared Week 1 concept-map graphic. Added textbook-style credited source figures from OpenStax/UCF Pressbooks for charge transfer, meter placement/Ohm’s-law measurement, and the voltage-current graph, plus a source-derived SI-prefix reference table grounded in NIST and OpenStax data.",
        "Added visible Builds on callouts so each new concept names the prerequisite idea it extends instead of repeatedly restarting the explanation.",
        "Kept the existing Week 1 safety teaching, safety-critical gates, semantic competency tasks, knowledge checks, and the complete Subject 2 lesson data intact. Subject 2 is deliberately deferred until the learner reaches and evaluates it.",
        "Updated the Classroom renderer only to support source figures/tables and Week 1 concept-dependency callouts; other weeks receive no new figure data or lesson rewrite."
      ]
    },
    {
      "version": "v16.3.7",
      "date": "September 18, 2026",
      "title": "Whole-System Acceptance Audit Repair — Readiness, Mastery & Portfolio Coherence",
      "type": "Assessment / Mastery / Portfolio Coherence Repair",
      "request": "Resolve the three material defects identified by the completed Parts 1–8 whole-system acceptance audit without reopening curriculum, Teaching Media, calendar, labs, Cloud Sync, or other systems that already passed.",
      "changes": [
        "Replaced the misleading two-Alfred-mock independence claim with a dual-source CETa readiness gate: one current full-length 100-question Alfred run at 85% or higher plus one separate current independent CETa practice assessment at 85% or higher from outside the Alfred question bank. Repeat Alfred mocks remain useful retrieval practice but no longer count as independent evidence.",
        "Repaired automatic mastery progression without fabricating difficulty: Foundation questions are not relabeled as Intermediate/Advanced. Automatic status now uses validated accuracy, repeated sessions, retention streak, recency, and distinct reviewed-bank breadth. Standards with fewer than two distinct current reviewed items surface as Evidence Limited and cannot automatically claim Mastered until the bank expands.",
        "Synchronized the Competency Dashboard with the Standards page so both use the same evidence model and no longer demand nonexistent intermediate/advanced CETa bank evidence.",
        "Made the Career Readiness definition canonical in the Project Center: Project 2 is Automated Hardware Validation / HIL, Project 3 is the Custom PCB strong differentiator, and the former Embedded Control System concept is preserved as an optional long-term extension rather than conflicting with Project 2.",
        "Preserved course release v16.3, evidence revision v16.2, the accepted 31/31 Teaching Media pathway, all 62 lessons, 24 labs, calendar dates/event IDs/UIDs, Study Guide assignments, progress identities/history, Cloud Sync protocol 2, and the CETa/Career architecture.",
        "Post-repair static/runtime QA passed for JavaScript syntax, JSON validity, old-defect string removal, cross-page policy consistency, project-identity consistency, and service-worker/version synchronization."
      ]
    },
    {
      "version": "v16.3.5",
      "date": "September 17, 2026",
      "title": "Teaching Media Self-Reliance — Independent Instructional Pathway",
      "type": "Teaching Media / Academic Resource Revision",
      "request": "Make the existing Teaching Media pathway capable of independently teaching the course explanation layer across all 31 modules—enough to support CETa preparation, electronics understanding, associated troubleshooting/lab readiness, and hardware-oriented embedded progression—without changing the written curriculum, labs, assessments, calendar, progress identities, or Cloud Sync.",
      "changes": [
        "Introduced teaching-media-self-reliance.js after teaching-media-overrides.js and attempted a 31-week independent Teaching Media explanation path.",
        "Preserved all 62 primary lessons, 24 labs, assessment identities and mastery thresholds, study-guide assignments, calendar dates/event IDs/UIDs, progress identities, Cloud Sync protocol 2, module sequencing, and the 50/50 CETa/Career architecture.",
        "A later adversarial semantic-coverage audit found that the v16.3.5 self-reliance acceptance claim was too broad: structural 31-week coverage did not independently teach every subject represented by the full v16.3 semantic coverage matrix. v16.3.6 supersedes that acceptance claim while retaining v16.3.5 as release history."
      ]
    },
    {
      "version": "v16.3.6",
      "date": "September 18, 2026",
      "title": "Teaching Media Content Completion — Final 31-Week Standalone Acceptance",
      "type": "Teaching Media / Academic Resource Repair",
      "request": "Repair every verified Teaching Media gap found by the adversarial v16.3.5 audit so the external media pathway can be tested against the complete v16.3 semantic/standards map as a standalone explanation path, while preserving the accepted curriculum and all protected runtime identities.",
      "changes": [
        "Added teaching-media-content-completion.js after the existing v16.3.5 self-reliance overlay. The new layer appends missing instruction and narrowly corrects overclaimed card metadata without replacing the accepted curriculum.",
        "Targeted all previously identified blocker/material-defect weeks while leaving prior substantive-PASS weeks unchanged by the content-completion additions.",
        "Closed verified gaps in safety/work procedures, waveform generation, technician test equipment, component/device breadth, power supplies, amplifiers, digital breadth, advanced repair literacy, PLC/computer topics, embedded state/nonblocking design, computer support, USB/Zigbee/interfacing, AV/photoelectronics, RF/telecom, technical workflow/configuration control, invalid/stale sensor handling, hardware-test automation, controlled fault injection/service procedures, and technical project defense.",
        "Corrected specific metadata overclaims: NPTEL is no longer treated as full RF/telecom instruction; the private CETa Study Guide remains available but is excluded from Teaching Media standalone-sufficiency evidence; GitHub Skills is narrowed to the introductory collaboration workflow it actually teaches; generic Saleae support navigation is not counted as fault-injection instruction.",
        "Preserved the v16.3 curriculum, 62 lessons, 24 labs, assessments/mastery, calendar dates and UIDs, progress identities/history, Study Guide assignments, Cloud Sync protocol 2, module sequencing, visual design, and CETa/Career 50/50 architecture.",
        "The first post-repair acceptance audit executed the actual GitHub production composition and found residual defects rather than rubber-stamping the candidate: Week 1 lacked direct ESD-control teaching; Week 7 taught several of its mapped semiconductor families one week late; Week 12 still overclaimed GitHub Skills; the Week 27 NI card linked to a free-trial page instead of the claimed workflow tutorial; and Week 28 still lacked explicit productivity calculation and project-planning instruction.",
        "The corrective candidate adds NASA ESD instruction to Week 1; assigns the verified semiconductor-family resources directly to Week 7; narrows the Week 12 GitHub Skills card; replaces the Week 27 NI link with the actual Setup/Main/Cleanup stimulus-profile tutorial; and adds explicit field-service utilization plus NASA technical-planning/project-management instruction to Week 28.",
        "A second semantic pass found one final Week 20 material defect: the existing POTS splitter resource taught voice/data frequency separation but did not itself teach tip/ring loop-start behavior, off-hook loop current, dial-tone response, and ringing.",
        "The final POTS correction assigns Cisco Voice Network Signaling and Control directly to Week 20 for tip/ring, loop-start, off-hook current flow, dial-tone response, and ringing while retaining the splitter resource for DSL/voice coexistence.",
        "The final re-audit executed the exact corrected GitHub production composition and accepted all 31 weeks: 31/31 PASS, zero BLOCKER, zero MATERIAL DEFECT. The four subject-level questions—CETa preparation, electronics theory, technician/troubleshooting conceptual preparation, and hardware-oriented embedded preparation—are all YES for the Teaching Media explanation layer. Required labs, projects, measurements, soldering/rework, coding, debugging, troubleshooting demonstrations, assessments and physical evidence remain required and are not replaced by media.",
        "Final acceptance-sync cleanup removed the stale WORKING DRAFT / DO NOT DEPLOY header from teaching-media-content-completion.js so the production source comment now agrees with the accepted v16.3.6 runtime, Release Notes, build metadata, and Resource Verification record. This cleanup changes no curriculum, media assignment, assessment, calendar, progress, or Cloud Sync behavior."
      ]
    }
  ];
  const currentOrder = ['v16.3.21','v16.3.20','v16.3.19','v16.3.18','v16.3.17','v16.3.16','v16.3.15','v16.3.14','v16.3.13','v16.3.12','v16.3.11','v16.3.10.1','v16.3.10','v16.3.9','v16.3.8','v16.3.7','v16.3.6','v16.3.5'];
  entries.sort((a,b)=>currentOrder.indexOf(a.version)-currentOrder.indexOf(b.version));
  const historical = Array.isArray(window.ALFRED_RELEASES) ? window.ALFRED_RELEASES : [];
  const currentVersions = new Set(entries.map(entry=>entry.version));
  window.ALFRED_RELEASES = [...entries, ...historical.filter(item=>item && !currentVersions.has(item.version))];
})();
