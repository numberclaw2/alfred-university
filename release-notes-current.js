(() => {
  const entries = [
    {
      "version": "v16.3.36",
      "date": "September 20, 2026",
      "title": "Independent Resume Learning + Resume Study Controls",
      "type": "Navigation / Progress Resume / Study State",
      "request": "Split the shared Resume Learning/Study behavior into two separate buttons everywhere it previously appeared: one returns to the exact saved Classroom learning point and the other returns to the saved Study point.",
      "changes": [
        "Added independent Resume Learning and Resume Study destinations to the global desktop header, Home hero, and Calendar current-week dashboard.",
        "Resume Learning now resolves the most recently updated incomplete Classroom week and stage from existing Progress state, while preserving the exact saved lesson-section position already managed by Classroom.",
        "Resume Study now persists the last Study week and restores the saved Study Library view/index or the exact unfinished Active Recall session step.",
        "Separated the two resume routes so an unfinished Study session or due review no longer replaces the learner's Classroom resume control.",
        "Kept the legacy prioritized AlfredNextAction.get() helper for compatibility while adding explicit AlfredNextAction.learning() and AlfredNextAction.study() APIs for split controls.",
        "Preserved curriculum, assessments, mastery thresholds, Calendar event/UID identities, Progress keys, and Cloud Sync protocol 2.",
        "Advanced the UX asset cache-buster and service-worker namespace to v16.3.36 so the split controls replace cached v16.3.35 behavior cleanly."
      ],
      "filesAdded": [
        "AU-ESET-301-v16.3.36-Split-Resume-Learning-Study-Verification.md"
      ],
      "filesModified": [
        "index.html",
        "site.js",
        "study.js",
        "ux-system.js",
        "ux-system.css",
        "build-info.json",
        "service-worker.js",
        "release-notes-current.js",
        "SHA256SUMS.txt",
        "UPLOAD_README.txt"
      ],
      "filesRemoved": []
    },
    {
        "version": "v16.3.35",
        "date": "September 20, 2026",
        "title": "Calendar Execution Modernization — Current Classroom Stages, Workload, Mastery, and Progress-Aware Routing",
        "type": "Calendar / Scheduling / Runtime Routing / Mastery Integration",
        "request": "Implement the full adversarial Calendar audit: synchronize the existing 31-week/125-event calendar with the current seven-stage Classroom, realistic current workload, beginner-first Career instruction, formal labs, readiness gates, mastery/repair rules, current Teaching Media ownership, and progress-aware next actions without changing event IDs/UIDs or the accepted course sequence.",
        "changes": [
            "Rewrote all 125 Calendar event records around the current execution model: Start Here → CETa Lesson → Career Lesson → Teaching Media/text path → Guided Practice → Lab/Application → Weekly Mastery.",
            "Preserved all 125 event IDs, all 125 ICS UIDs, the 31-week order, lesson/lab/assessment identities, Progress keys, and Cloud Sync protocol 2.",
            "Fixed the no-week milestone routing defect: 10 milestone/career/project checkpoints now carry explicit contextWeek and destination metadata instead of falling back to Week 01.",
            "Added explicit advance-prep semantics for seven future-week equipment reminders so they no longer masquerade as the learner's next required Classroom session.",
            "Made the Calendar status layer read-only over existing Classroom/Progress state: Current required stage, Scheduled, Advance prep, Milestone, Complete, and Overdue.",
            "Updated the Calendar hero to show the shared state-aware next action first and the next dated required session second; advance prep is shown separately.",
            "Replaced the legacy completion/catch-up rule with the current mastery rule: required stages/evidence, ≥80% weekly mastery, 100% safety-critical checks, targeted repair, and a new attempt before advancing.",
            "Removed legacy Calendar ownership of direct video/resource hierarchies from current event notes; events now route to the verified Classroom Teaching Media/text path and reached-material Study Library.",
            "Applied the audit-approved duration increases in 47 events. The minimum scheduled course budget rises from about 192.25 active hours to about 221.75 hours while retaining the existing evening/weekend pattern and existing event dates.",
            "Added explicit Calendar execution homes for LAB-021 CETa Mixed Practical Review, LAB-022 Project 1 Design Review, and LAB-024 Portfolio Demonstration + Technical Defense.",
            "Reclassified Week 24/25/26/28/29 Saturday evidence blocks that are not separate Lab Center records as Project/Application events while preserving their event IDs/UIDs.",
            "Added holiday flex guidance (±48 hours with stage order preserved) for Thanksgiving, Christmas Eve/Dec. 26, and the New Year holiday weekend.",
            "Added execution-status filtering, requirement/status chips, stage-specific destinations, current time budgets, missed-session guidance, and larger mobile period-arrow targets.",
            "Regenerated the simplified ICS from the upgraded event records while preserving the original UID set exactly."
        ],
        "filesAdded": [
            "AU-ESET-301-v16.3.35-Calendar-Execution-Modernization-Verification.md"
        ],
        "filesModified": [
            "course-data.js",
            "site.js",
            "calendar.html",
            "styles.css",
            "Alfred University - AU-ESET 301 - Simplified Course Calendar.ics",
            "build-info.json",
            "service-worker.js",
            "release-notes-current.js",
            "SHA256SUMS.txt",
            "UPLOAD_README.txt"
        ],
        "filesRemoved": []
    },
    {
        "version": "v16.3.34",
        "date": "September 19, 2026",
        "title": "Authoritative Visual Learning Layer — Real Equipment, Source Grounding, and Provenance",
        "type": "Instructional Visuals / Source Provenance / Legacy Diagram Retirement",
        "request": "Audit every instructional diagram/image for educational value, add visuals where they materially improve learning, identify reputable sources, and remove or replace synthetic/AI-style visuals when real or authoritative technical visuals are better.",
        "changes": [
            "Corrected the visual inventory at runtime: the 62 legacy w01–w31 SVGs were still active through integrated.visualId even though newer section-level figures also existed. v16.3.34 explicitly retires all 62 from the learner path instead of leaving duplicate synthetic visual systems active.",
            "Added instructional-visuals.js after the accepted Week 1 and Career overlays. It nulls legacy purpose-stage visualId values without changing lesson section counts, titles, progress indices, standards mappings, or assessment logic.",
            "Removed all 62 legacy wNN-*.svg files from the service-worker CORE cache. The files may remain in repository history, but they are no longer presented or actively cached as current instruction.",
            "Added an explicit visual-provenance badge to Classroom and Study: Real/source visual, Source-grounded technical visual, or Alfred instructional model.",
            "Added source-grounded section visuals across all 31 CETa weeks. Week 1 retains the accepted OpenStax figures and SI-prefix table; Weeks 2–31 now receive targeted diagrams/tables/real-source images matched to the concept being taught.",
            "Added real open-license equipment/workmanship imagery where physical recognition matters: DMM, bench supply, oscilloscope display, solder joint, STM32 Nucleo board, wiring harness, spectrum analyzer display, and logic analyzer.",
            "Replaced the Career Week 1 generic bench flow as the primary visual with real bench-supply and DMM photographs backed by Keysight/Fluke training.",
            "Replaced the Career Week 14 generic pointer flow with a concrete source-grounded memory/address table based on GNU C pointer/array definitions.",
            "Strengthened Career Git, STM32, Python serial, I2C/SPI, harness, RF/spectrum, requirements/traceability, and automated-test visuals with authoritative technical grounding from Pro Git, ST, pySerial, NXP/Microchip, NASA, Keysight, and NI.",
            "Kept Alfred-authored process diagrams only where an external photograph would not teach the intended reasoning process (for example mixed-model selection, troubleshooting logic, retention, and application feedback). Those are now labeled honestly as Alfred instructional models.",
            "Added gallery support to Classroom and Study so real-source photographs can carry item-level creator/source/license attribution without losing the lesson-level technical source.",
            "Extended the in-course source registry and visual-source ledger so new authoritative sources are discoverable and redistribution boundaries are explicit. Manufacturer figures are linked/grounded rather than copied when reuse permission is unclear.",
            "Preserved v16.3.33 Career beginner-first teaching, v16.3.32 Study reached-material rules, question backlinks, vocabulary behavior, assessments/mastery, labs/projects, calendar, Progress/Cloud Sync 2, and branding."
        ],
        "filesAdded": [
            "instructional-visuals.js",
            "VISUAL-SOURCES.md",
            "AU-ESET-301-v16.3.34-Authoritative-Visual-Learning-Verification.md"
        ],
        "filesModified": [
            "POST-UPDATE-QA.md",
            "SHA256SUMS.txt",
            "UPLOAD_README.txt",
            "build-info.json",
            "learn.html",
            "learn.js",
            "release-notes-current.js",
            "search.html",
            "service-worker.js",
            "study.html",
            "study.js",
            "study-v2.css",
            "styles.css"
        ],
        "filesRemoved": []
    },
    {
          "version": "v16.3.33",
          "date": "September 19, 2026",
          "title": "Career Beginner-First Instructional Depth — All 31 Career Lessons",
          "type": "Career Curriculum / Dependency Repair / Teach-Before-Use",
          "request": "Bring all 31 Career lessons up to the same beginner-first teaching standard as the CETa track: build on concepts Alfred already taught, but explicitly teach new Career-only tools, software, workflows, and professional vocabulary before asking the learner to use, explain, troubleshoot, program, document, compare, or answer questions about them.",
          "changes": [
                "Audited all 31 Career lessons against the rule that Alfred may assume only knowledge it has already thoroughly taught. Existing CETa teaching remains the prerequisite authority and is not redundantly retaught.",
                "Added a dedicated career-instructional-depth layer that strengthens the existing Career teaching homes in place. Existing teaching-section counts and titles are preserved so saved lesson progress, section review state, and semantic evidence mappings do not shift.",
                "Repaired Week 1 bench onboarding so bench supply, DMM, jacks/modes, rails/reference, continuity, current limiting, CV/CC operation, first power/bring-up, and stop conditions are introduced before the technician procedure expects them.",
                "Added beginner-first Git/version-control foundations in Week 12: why version control exists, repository, working tree, tracked/untracked files, status, diff, commit, branch, tag, and known-good baseline before professional repository practice.",
                "Added C foundations in Week 14 before advanced embedded-C use: programming language/source/compiler/build, statements, variables/types, assignment/expressions, control flow, functions/parameters/return values, arrays, pointers, address-of/dereference, bounds, and strings.",
                "Strengthened Weeks 15–18 with explicit state-machine/time, interrupt/ISR/volatile/atomicity, STM32 project/toolchain/build/flash/SWD debugging, Python-from-zero serial tooling, and datasheet-to-I2C/SPI transaction/logic-analyzer mental models.",
                "Strengthened Weeks 22–23 and 27 with beginner-first requirements/traceability, command-line/README, controlled baseline/repository/BOM/toolchain/dependency concepts, and automated hardware-test lifecycle/fixture/result/configuration/source-of-truth concepts.",
                "Strengthened Weeks 29–31 with evidence-dossier, resume/application explanation-depth, role-filter, application-pipeline, and feedback-loop concepts before professional application tasks.",
                "Added 32 internally authored instructional flow models across all 31 Career lessons. The visuals teach process/dependency mental models and use the existing accepted course source layer; no new external source family was introduced.",
                "Generated direct Review Section teaching-home metadata for all 93 Career lesson question locations (62 integrated checks + 31 required lesson gates). Each target resolves to an existing strengthened Career teaching section.",
                "Study automatically inherits the strengthened Career text/visuals only after the corresponding Career sections are reached, preserving the v16.3.32 reached-material boundary.",
                "Preserved CETa lesson wording, Career competency goals, assessment scoring/mastery/safety thresholds, labs/projects, calendar identities, Progress/Cloud Sync protocol 2, glossary/vocabulary behavior, Student/Builder and Focus modes, section back/forward review, Back to question, and branding."
          ],
          "filesAdded": [
                "career-instructional-depth.js",
                "AU-ESET-301-v16.3.33-Career-Beginner-First-Instructional-Depth-Verification.md"
          ],
          "filesModified": [
                "POST-UPDATE-QA.md",
                "SHA256SUMS.txt",
                "UPLOAD_README.txt",
                "build-info.json",
                "learn.html",
                "learn.js",
                "release-notes-current.js",
                "search.html",
                "service-worker.js",
                "study.html",
                "study.js",
                "styles.css"
          ],
          "filesRemoved": []
    },
    {
      "version": "v16.3.32",
      "date": "September 19, 2026",
      "title": "Study Library + Week 1 Beginner-First Safety Scaffolding",
      "type": "Study UX / Instructional Scaffolding / Retrieval Boundary Repair",
      "request": "Make Study behave like real studying—rereading reached curriculum, reviewing visuals, using concept flashcards, verified videos, and reference material—while keeping active recall as an optional memory check; also repair Week 1 safety sections so unfamiliar future-course terms such as CMOS, fiber termination, MPE, interrupting rating, and stored-energy terminology are explained before safety questions use them.",
      "changes": [
        "Reframed Study as a review-first Study Library. The default path now opens reached Classroom material for rereading instead of immediately requiring diagnostic questions.",
        "Added six Study paths: Review Material, Concept Flashcards, Watch & Review, Reference, Work Weak Areas, and Active Recall. Active Recall preserves the existing retrieval → diagnose → repair → practice → teach-back engine but is no longer the entry requirement for studying.",
        "Study Library content is progression-aware: only teaching sections already reached in Classroom are exposed. Future lesson sections stay out of review, flashcards, media, reference, and Active Recall until the learner reaches them.",
        "Added a reread-oriented study-sheet view with Quick re-read, full review text, existing lesson figures/tables, Hold onto this summaries, and previous/next navigation across reached concepts.",
        "Added lightweight concept flashcards generated from reached teaching sections. Answers may be revealed immediately for memorization/repetition; the separate Vocabulary Study Lab remains available for glossary-focused spaced retrieval.",
        "Added Watch & Review using the already-verified Teaching Media layer, filtered to unlocked/reached material. Week 1 media has explicit unlock points so videos do not expose later concepts before the corresponding teaching section is reached.",
        "Added a Reference view that surfaces formulas/knowledge notes, glossary terms, and assigned course resources connected to reached material.",
        "Added Work Weak Areas as a review-first path. Previous Partial/Missed/due concepts show the explanation first and link back to review/flashcards instead of requiring another question before study can begin.",
        "Changed Study Active Recall so it no longer redirects the learner back to Classroom simply for opening Study. The global Home/Continue next-action system remains coursework-first, while an intentional Study visit can review already-reached material at any time.",
        "Expanded all five preserved Week 1 safety sections with beginner-context definitions and explicit 'just enough for this safety rule' scaffolding. Safety standards are unchanged; unfamiliar equipment/terms are no longer assumed background knowledge.",
        "Reworded the five Week 1 safety competency prompts so the object/context is understandable before the learner is asked to reason about the safety rule. The required technical elements, competency codes, mastery logic, and question-to-section backlinks remain unchanged.",
        "Extended the existing Review Section / Back to question workflow to all 87 semantic competency-evidence prompts. Each semantic task title already matches its exact teaching section, so safety evidence questions now have a direct path back to the section that taught the terminology and rule.",
        "Preserved v16.3.31 lesson back/forward review, Back to question, v16.3.30 vocabulary click/double-click behavior, 599-term glossary, Teaching Media verification, assessments/scoring, labs, calendar identities, Progress records, Cloud Sync protocol 2, Student/Builder Mode, and branding."
      ],
      "filesAdded": [
        "AU-ESET-301-v16.3.32-Study-Library-and-Week1-Safety-Scaffolding-Verification.md"
      ],
      "filesModified": [
        "POST-UPDATE-QA.md",
        "SHA256SUMS.txt",
        "UPLOAD_README.txt",
        "build-info.json",
        "learn.js",
        "release-notes-current.js",
        "service-worker.js",
        "study-v2.css",
        "study.html",
        "study.js",
        "week1-instructional-depth.js"
      ],
      "filesRemoved": []
    },
    {
      "version": "v16.3.31",
      "date": "September 19, 2026",
      "title": "Lesson Review Navigation — Back/Forward + Question Teaching Links",
      "type": "Classroom Review Navigation / Retrieval Repair / Executive-Function Support",
      "request": "Let the learner move backward through completed lesson sections and forward again only through already reached sections; add a direct review link from lesson questions to the teaching section that explains the concept; and add a Back to question control after reviewing without losing official lesson progress.",
      "changes": [
        "Separated temporary lesson review position from the saved furthest/resume position. Moving backward no longer rewinds official course progress or Cloud Sync-compatible week state.",
        "Added Previous section navigation at both the top and bottom of each lesson section. When reviewing earlier material, Next completed section moves forward only through sections that were already reached; unreached future sections remain locked behind the normal I answered · continue progression action.",
        "Added question-to-teaching-section review actions for all 124 integrated lesson checks and all 62 required lesson gates. Each question links to the most relevant teaching section in that same lesson instead of sending the learner to a generic lesson start.",
        "Added a session-safe Back to question control while reviewing from a question. Returning restores the exact check/gate location and preserves the learner's furthest lesson progress.",
        "Added clear reviewing-state language so Alfred distinguishes the section currently being reviewed from the official resume point.",
        "Preserved the v16.3.30 executive-function flow, v16.3.30 vocabulary single-click/double-click behavior, 599-term glossary, curriculum wording, Teaching Media, assessments/scoring, labs, calendar identities, Progress state, Cloud Sync protocol, and branding."
      ],
      "filesAdded": [
        "AU-ESET-301-v16.3.31-Lesson-Review-Navigation-and-Question-Backlinks-Verification.md"
      ],
      "filesModified": [
        "POST-UPDATE-QA.md",
        "SHA256SUMS.txt",
        "UPLOAD_README.txt",
        "build-info.json",
        "learn.js",
        "release-notes-current.js",
        "service-worker.js",
        "styles.css"
      ],
      "filesRemoved": []
    },
    {
          "version": "v16.3.30",
          "date": "September 19, 2026",
          "title": "Executive-Function Study Flow \u2014 Resumable Lessons + State-Aware Next Action",
          "type": "ADHD / Autism-Informed Study Flow / Classroom Segmentation / Student Mode",
          "request": "Apply the full v16.3.29 executive-function audit without redesigning Alfred: keep all instructional depth, but reduce study-time overwhelm, route the learner to the correct next system, repair Focus Mode, save precise Classroom resume state, and separate coursework from site-building distractions.",
          "changes": [
                "Converted integrated CETa and Career lesson stages into resumable learning sections. Every original teaching section, figure, worked example, misconception, guided/independent practice item, check, semantic competency task, and final lesson gate remains in the course; Alfred now displays one manageable section at a time instead of the entire long lesson continuously.",
                "Added exact per-lesson section state to the existing week learning record. Classroom now resumes at the saved section, shows section X/Y in the current-week status, and provides explicit Previous section / I answered \u00b7 continue boundaries.",
                "Added a short Pause & retrieve prompt to each learning section so active recall/application happens throughout the lesson instead of only after a long passive reading run. Speaking aloud or paper work counts; no extra graded form was added.",
                "Replaced the old fixed ~45-minute lesson-stage presentation with section counts and per-section estimates. This avoids implying that expanded long lessons are one uninterrupted 45-minute task while preserving the accepted curriculum and planned course structure.",
                "Added one shared AlfredNextAction engine. Saved Study sessions and due reviews route to Study; otherwise incomplete required course stages route to Classroom. The Home hero, persistent header Continue control, and Study recommendation use the same state-aware action instead of competing recommendation logic.",
                "Study now explicitly sends the learner to Classroom before retrieval when new required material has not yet been taught and no review is due. The capacity selector is hidden for that state so the learner does not have to decide between Study and Learn.",
                "Repaired Focus Mode so the whole-site Study shortcut row and Vocabulary Study Lab are hidden while an active Study session is in focus, restoring the intended only-the-active-session-visible behavior.",
                "Added Student Mode as the default navigation state. Deployment and Release Notes are hidden during normal coursework; a single Open Builder Mode control reveals them for maintenance, and Return to Student Mode restores the coursework-first view.",
                "Added a one-field Park a site issue workflow inside the existing Curiosity Parking Lot. Site improvements are saved for Builder Mode and do not need to be fixed during the study block unless they are actual blockers.",
                "Updated the current ADHD/autism executive-function audit record and added a v16.3.30 implementation/verification record.",
                "Advanced build metadata, whole-site UX cache busting, and the service-worker cache namespace to v16.3.30. No curriculum wording, Teaching Media assignments, assessment bank/scoring, mastery formulas, labs, projects, calendar identities, Progress record identities, Cloud Sync protocol, glossary definitions, or branding artwork changed."
          ],
          "filesAdded": [
                "AU-ESET-301-v16.3.30-Executive-Function-Study-Flow-Verification.md"
          ],
          "filesModified": [
                "ADHD_AUTISM_AUDIT_REPORT.md",
                "POST-UPDATE-QA.md",
                "SHA256SUMS.txt",
                "UPLOAD_README.txt",
                "build-info.json",
                "learn.js",
                "release-notes-current.js",
                "service-worker.js",
                "site.js",
                "study.js",
                "styles.css",
                "ux-system.js"
          ],
          "filesRemoved": []
    },
    {
      "version": "v16.3.29",
      "date": "September 19, 2026",
      "title": "Course Glossary Expansion — 599 Terms + Section-Scoped Rehighlighting",
      "type": "Learning Support / Vocabulary Coverage / Classroom Glossary UX",
      "request": "Expand the Glossary so substantially more electrical, electronics, physics, signals, measurement, embedded, protocol, RF, PCB, power, safety, and troubleshooting vocabulary has an in-house definition, while changing Classroom highlighting so a concept appears at most once inside each numbered teaching section but may be highlighted again when a new section begins.",
      "changes": [
        "Expanded the Course Glossary from 282 to 599 entries by scanning the actual AU-ESET 301 lesson/curriculum sources for field-specific terminology that was not yet represented and adding 317 new technical concepts while intentionally excluding remaining generic English/software words whose ordinary meaning would create visual noise.",
        "Added foundational Week 1 vocabulary visible in the learner's actual lesson flow, including atom, proton, neutron, electron, coulomb, joule, conductor, insulator, charge carrier, electron drift, conventional current, electric potential, reference node, circuit common, terminal, wire, battery, electrical component, SI unit, SI prefixes, and related concepts.",
        "Expanded later-course terminology across circuit analysis, components, AC/signals, instruments, semiconductors, power electronics, digital logic, embedded systems, interfaces/protocols, PCB/assembly, RF/communications, test/troubleshooting, safety/workmanship, and supporting software/test-automation vocabulary.",
        "Every new entry includes a plain-English definition, a more technical definition, pronunciation, category, source provenance, stable slug, and course-week references. Definitions remain concise teaching paraphrases grounded in the same authoritative IEC, NIST, OSHA, IPC, Arm, ST, NXP, FCC, Python, and NIST CSRC source families already used by the accepted Glossary architecture.",
        "Changed the Classroom repetition boundary from one highlight per concept across the entire lesson stage to one highlight per concept inside each numbered integrated teaching section. A concept such as charge/current/circuit can therefore be defined again once when Section 2 or Section 3 introduces a new context, while repeated mentions inside that same section remain plain text.",
        "Preserved placement discernment: Alfred still scores all candidate occurrences inside each section, prefers direct explanatory/definitional prose, prefers fuller technical phrases when available, avoids headings/questions/controls/hidden content, and leaves a term unhighlighted when no candidate meets the quality threshold.",
        "Added conservative canonical plural matching so normal textbook inflections such as electrons, terminals, wires, or voltage sources can resolve to one glossary concept without creating separate entries. Plural generation is limited to canonical nouns rather than aliases to avoid verb-derived false matches.",
        "Hardened acronym matching so uppercase interface/protocol acronyms require exact written case. Ordinary words such as can or am cannot accidentally become CAN or AM glossary links.",
        "Expanded ambiguous-word context gating for ordinary-looking technical words such as load, terminal, signal, filter, trigger, frame, buffer, component, switch, loop, network, driver, range, instrument, specification, and substitution so they are highlighted only when nearby technical context supports the specialized meaning.",
        "Updated Glossary, Study Vocabulary, Search Everything, and Classroom script references to cache-busted v16.3.29 glossary data/runtime URLs; the existing Vocabulary Study Lab and Search Everything automatically inherit the expanded 599-term dataset without a duplicate vocabulary source.",
        "Advanced build metadata and the service-worker cache namespace to v16.3.29 and cached the expanded glossary assets plus the new verification record.",
        "No curriculum wording, lesson sequencing, Teaching Media, assessment bank/scoring, mastery formulas, labs, projects, calendar identities, Progress records, Cloud Sync protocol, whole-site UX architecture, or branding artwork changed."
      ],
      "filesAdded": [
        "AU-ESET-301-v16.3.29-Glossary-Coverage-and-Section-Highlighting-Verification.md"
      ],
      "filesModified": [
        "POST-UPDATE-QA.md",
        "SHA256SUMS.txt",
        "UPLOAD_README.txt",
        "build-info.json",
        "glossary-data.js",
        "glossary.html",
        "glossary.js",
        "learn.html",
        "release-notes-current.js",
        "search.html",
        "service-worker.js",
        "study.html"
      ],
      "filesRemoved": []
    },
    {
      "version": "v16.3.28",
      "date": "September 18, 2026",
      "title": "Native UX Audit Round 2 — Targeted Responsive & Navigation Repair",
      "type": "Native UX QA / Responsive Repair / Interaction Polish",
      "request": "Run a second whole-site UX audit by rendering the exact deployed v16.3.27 GitHub Pages artifact natively across desktop, tablet, and phone widths, then repair the bounded issues found without reopening the accepted UX architecture.",
      "changes": [
        "Audited 20 user-facing pages at six viewport sizes (1440, 1024, 768, 430, 390, and 360 CSS pixels), totaling 120 native Chromium renders with zero fatal renders, while also checking mobile Menu/Search interaction, overflow, labels, IDs, heading structure, and link safety.",
        "Repaired Release Notes mobile min-content clipping by allowing release-card descendants and file grids to shrink to the viewport, forcing long filenames/code tokens to wrap safely, reducing narrow-phone list indentation, and using a single zero-min-width column on phones.",
        "Removed Release Notes from the generic On this page generator because its release-specific search/version controls provide stronger information scent than a 63-destination generic table of contents.",
        "Repaired the 360px Home course-packet statistics row with zero-min-width grid tracks, safer label wrapping, and narrow-phone spacing/type adjustments so the Engineering Labs statistic remains fully visible.",
        "Removed the floating Back to top control from Home, where native scrolling showed it could cover the lower-right course-packet statistic. The control remains available on genuinely long reference pages where it provides more value.",
        "Preserved the full ALFRED UNIVERSITY mobile wordmark at 360px by hiding the optional Latin subtitle first, reducing brand spacing/crest size slightly, and tightening the wordmark letter spacing before allowing the university name to truncate.",
        "Widened Calendar previous/next period controls to 44px while keeping the compact visual language and existing calendar behavior.",
        "Cache-busted ux-system.css and ux-system.js at v16.3.28 and advanced the service-worker namespace so the responsive repair reliably replaces v16.3.27 cached UX assets.",
        "No curriculum, lesson wording, Study sequencing, Classroom stages, glossary data, Vocabulary Study scheduling, Teaching Media, calendar data, assessment scoring, mastery formulas, labs, projects, Progress records, Cloud Sync protocol, or branding artwork changed."
      ],
      "filesAdded": ["AU-ESET-301-v16.3.28-Native-UX-Round2-Repair.md"],
      "filesModified": ["POST-UPDATE-QA.md","SHA256SUMS.txt","UPLOAD_README.txt","build-info.json","release-notes-current.js","service-worker.js","site.js","ux-system.css","ux-system.js"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.27",
      "date": "September 18, 2026",
      "title": "Native Visual QA Repair — Mobile Vocabulary Width + Progressive Long-Page Navigation",
      "type": "Visual QA / Responsive UX / Progressive Disclosure",
      "request": "Run the deployed site code natively to inspect the actual rendered interface, then repair any visual UX defects found instead of relying only on source-level review.",
      "changes": [
        "Downloaded the exact GitHub Pages artifact produced from the accepted v16.3.26 deployment and rendered that deployed HTML/CSS/JavaScript composition in Chromium at desktop and 390px mobile widths for Home, Study, Classroom, Course, Projects, Progress, and representative reference surfaces.",
        "Confirmed the v16.3.26 desktop hierarchy, Home primary action, persistent search/current-week tools, Classroom layout, Study task hierarchy, Progress layout, mobile header, and shared responsive shell are visually coherent and remain unchanged by this repair.",
        "Found and repaired a real 390px Study Vocabulary Lab intrinsic-width defect. The one-column grid track was being expanded by child min-content width, causing the reference card, statistics, filter controls, selects, and Start Vocabulary Session button to extend beyond the visible Study content area even though the document itself did not report horizontal scrolling.",
        "Hardened the Vocabulary Study grid with minmax(0,1fr), zero-min-width grid children, and explicit mobile max-width constraints so every vocabulary surface remains inside the 390px content shell while preserving the intended horizontal scroll only for the scope-pill row.",
        "Found that the desktop On this page navigation was useful but visually over-dominant on mobile reference pages, where seven or more links could consume most of the first screen after the hero.",
        "Converted long-page navigation to responsive progressive disclosure: it starts expanded on desktop, starts collapsed on screens up to 700px, exposes a clear On this page + section-count summary, can be opened by the learner, automatically collapses after a mobile in-page destination is chosen, and resynchronizes when crossing the desktop/mobile breakpoint.",
        "Re-ran native Chromium rendering and DOM geometry checks after repair to verify the Vocabulary Study Lab no longer extends beyond the 390px viewport and the Course mobile On this page control is compact by default while retaining all anchors and keyboard semantics.",
        "Advanced the shared UX loader marker and service-worker namespace to v16.3.27 so browsers reliably replace the v16.3.26 UX runtime and responsive CSS.",
        "No curriculum, lesson wording, glossary data/definitions, Vocabulary Study scheduling logic, Teaching Media, calendar identities, assessments/scoring, mastery formulas, labs, projects, Progress identities, Cloud Sync protocol, or branding assets were changed."
      ],
      "filesAdded": ["AU-ESET-301-v16.3.27-Native-Visual-QA-Repair.md"],
      "filesModified": ["POST-UPDATE-QA.md","SHA256SUMS.txt","UPLOAD_README.txt","build-info.json","release-notes-current.js","service-worker.js","site.js","ux-system.css","ux-system.js","vocabulary-study.css"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.26",
      "date": "September 18, 2026",
      "title": "Whole-Site UX System — Search, Task Continuity, Long-Page Navigation & Interaction Polish",
      "type": "Whole-Site UX / Accessibility / Information Architecture / Interaction Design",
      "request": "Perform a complete UX-design audit of the entire AU-ESET 301 website, research how people scan, navigate, search, click, and stay oriented on websites, then use those findings to improve button placement, icons, hierarchy, discoverability, engagement, and ease of use without changing the accepted course logic.",
      "changes": [
        "Audited the 26-page site architecture, shared navigation/runtime, five CSS layers, high-use task surfaces, long reference pages, and interaction density before making changes; preserved strong existing systems including the task-oriented primary navigation, grouped More menu, runtime skip link, context trails, quiet/focus modes, responsive layouts, reduced-motion support, and existing progress/mastery ownership.",
        "Added a dedicated ux-system.js / ux-system.css presentation layer loaded by the shared site runtime so UX improvements are consistent across normal site pages without rewriting curriculum or page-specific business logic.",
        "Made whole-course search persistently discoverable in the header. Desktop receives a conventional visible search field in the upper-right utility area; compact layouts receive a labeled search control that opens an accessible search sheet. Ctrl/Cmd+K and / provide optional keyboard access while preserving the normal global navigation.",
        "Added an accessible search sheet with focus management, Escape dismissal, descriptive quick destinations, and labeled familiar icons for Study, Classroom, Calendar, Practice, Progress, and Glossary. Icons reinforce text instead of replacing labels.",
        "Added a persistent Continue Week action to the desktop header so learners can return to the current study workflow from reference, progress, calendar, and administrative surfaces without hunting through navigation.",
        "Clarified Home's primary action hierarchy by promoting Start today's study to the first/distinctive hero action and demoting Open classroom to the secondary action, while keeping both destinations available.",
        "Added research-informed On this page navigation to long static/reference surfaces with at least three meaningful H2 sections, using descriptive in-page links, stable generated anchors, browser-history-compatible hashes, smooth scrolling when motion is allowed, and no duplicate navigation on task screens that already have stronger local workflow controls.",
        "Added a compact Study shortcut row for Today's plan, Reviews, Vocabulary, and Week plan so the long Study workspace supports recognition instead of requiring the learner to remember where each tool lives.",
        "Improved mobile menu affordance by pairing the hamburger symbol with the visible word Menu and keeping global Search immediately available in the brand/header layer.",
        "Strengthened interaction consistency: a higher-contrast focus ring, 44px targets for primary controls/form actions, 16px form text to avoid mobile zoom, consistent current-section treatment, clearer clickable-card hover/focus behavior, and external-link marks that reinforce destination behavior without replacing link text.",
        "Added a conditional Back to top control only on genuinely long pages and only after meaningful scrolling, avoiding permanent floating chrome on short pages.",
        "Added a current-section cue to the More button when the active page lives inside the More menu, improving orientation on lower-level pages.",
        "Applied reduced-motion behavior to the new UX layer and kept all new search/navigation controls keyboard operable with visible focus.",
        "Research basis documented in AU-ESET-301-v16.3.26-Whole-Site-UX-Audit.md, including Nielsen Norman Group scanning, progressive disclosure, icon, information-scent, search, consistency, and in-page-navigation research; W3C WCAG 2.2 focus/target guidance; USWDS header/button/card/typography guidance; and Apple navigation/layout guidance used as a secondary mobile/PWA convention reference.",
        "No curriculum, lesson wording, glossary definitions, vocabulary data, Teaching Media, calendar identities, assessments/scoring, mastery formulas, labs, projects, Progress identities, Cloud Sync protocol, or branding assets were changed."
      ],
      "filesAdded": [
        "AU-ESET-301-v16.3.26-Whole-Site-UX-Audit.md",
        "ux-system.css",
        "ux-system.js"
      ],
      "filesModified": [
        "POST-UPDATE-QA.md",
        "SHA256SUMS.txt",
        "UPLOAD_README.txt",
        "build-info.json",
        "release-notes-current.js",
        "service-worker.js",
        "site.js"
      ],
      "filesRemoved": []
    },
    {
      "version": "v16.3.25",
      "date": "September 18, 2026",
      "title": "Glossary Highlight Deduplication — Render-Level Guardrail & Stronger Placement Judgment",
      "type": "Classroom UX / Glossary Runtime Repair",
      "request": "Repair the remaining repeated glossary highlights visible in the live Classroom after v16.3.24, keep each concept visually highlighted only once per rendered lesson/stage, and use stronger judgment about which occurrence should carry the definition link.",
      "changes": [
        "Added a final DOM-level deduplication guardrail that physically unwraps duplicate glossary anchors by canonical glossary slug after each Classroom decoration pass, so duplicate highlighting cannot survive even if another mutation/render path produces extra anchors.",
        "Kept whole-lesson candidate selection, but strengthened placement scoring to heavily prefer direct introductory/definitional phrasing such as ‘Electric charge is…’ over incidental mentions, contrast-only mentions, quiz/question surfaces, or other weak placements.",
        "Added a minimum candidate-quality threshold: when a concept has no sufficiently useful instructional occurrence in the current lesson/stage, Alfred leaves it unhighlighted rather than forcing a distracting or awkward definition link.",
        "Preserved the canonical multiword preference so fuller phrases such as ‘electric charge’ outrank bare aliases such as ‘charge’ when both are available.",
        "Updated the Classroom MutationObserver so any external DOM mutation first enforces one live glossary anchor per concept and then schedules the authoritative whole-lesson re-evaluation.",
        "Cache-busted the Classroom glossary runtime with glossary.js?v=16.3.25 and advanced the service-worker namespace so an already-open or previously cached v16.3.23/v16.3.24 highlighter is not silently reused after refresh.",
        "No glossary definitions, vocabulary Study data, curriculum, lesson wording, assessments/scoring, mastery, labs, projects, calendar, Teaching Media, Progress identities, Cloud Sync protocol, or branding were changed."
      ],
      "filesAdded": ["AU-ESET-301-v16.3.25-Glossary-Deduplication-Verification.md"],
      "filesModified": ["POST-UPDATE-QA.md","SHA256SUMS.txt","UPLOAD_README.txt","build-info.json","glossary.js","learn.html","release-notes-current.js","service-worker.js"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.24",
      "date": "September 18, 2026",
      "title": "Vocabulary Study Lab + Context-Aware Single-Occurrence Glossary Highlighting",
      "type": "Study / Vocabulary Retention / Classroom Glossary UX",
      "request": "Add glossary-driven vocabulary study to Study, and reduce Classroom glossary-link clutter so each concept is highlighted only once at a deliberate, instructionally useful occurrence rather than every textual match.",
      "changes": [
        "Added a dedicated Vocabulary Study Lab inside Study using the same 282-entry Course Glossary as the single terminology source of truth.",
        "Added vocabulary study scopes for Due + Current Week, Needs Review, By Week, By Category, and All Course, with 5-, 10-, and 20-term session sizes.",
        "Vocabulary cards require retrieval before reveal: the learner explains the term first, then reveals the existing plain-English and technical glossary definitions, notation/aliases, source basis, and links back to the full Glossary and relevant Classroom week.",
        "Added Again / Hard / Got it self-ratings with low-stakes spaced scheduling. Again cards can re-enter the same session, Hard returns the next day, and Got it uses increasing review intervals. Retained status requires successful retrieval on at least three separate study dates rather than one familiar-looking card.",
        "Vocabulary study history is isolated in its own browser-local key and explicitly does not alter assessment scores, CETa readiness, weekly mastery, labs, course completion, Progress identities, or Cloud Sync evidence.",
        "Changed Classroom vocabulary decoration from every occurrence to a maximum of one highlighted occurrence per glossary concept in the currently rendered lesson/stage.",
        "The Classroom highlighter now evaluates the complete rendered lesson before inserting links, prefers fuller/self-disambiguating technical phrases such as electric charge or electrical power over weaker bare-word aliases when available, skips headings and interactive/question-like surfaces, and uses technical-context checks for ambiguous everyday words.",
        "Dynamic Classroom rerenders are re-evaluated as a whole so the one-occurrence rule remains stable after stage changes instead of accumulating repeated highlights through MutationObserver updates.",
        "Updated the Classroom glossary cue to explain that key terms are intentionally highlighted once at a clear instructional use.",
        "Advanced build metadata and service-worker namespace to v16.3.24 and cached the Vocabulary Study assets and verification record.",
        "No curriculum wording, lesson sequencing, glossary definitions/sources, assessments/scoring, mastery formulas, labs, projects, calendar identities, Teaching Media, Progress identities, Cloud Sync protocol, or branding was changed."
      ],
      "filesAdded": ["AU-ESET-301-v16.3.24-Vocabulary-Study-and-Glossary-Highlighting-Verification.md","vocabulary-study.css","vocabulary-study.js"],
      "filesModified": ["POST-UPDATE-QA.md","SHA256SUMS.txt","UPLOAD_README.txt","build-info.json","glossary.js","release-notes-current.js","service-worker.js","study.html"],
      "filesRemoved": []
    },
    {
      "version": "v16.3.23",
      "date": "September 18, 2026",
      "title": "Course Glossary — First-Class Tab, Academic Reference Views & UX/Accessibility Upgrade",
      "type": "Learning Support / Information Architecture / Accessibility / Search",
      "request": "Promote the dictionary into a permanent Glossary tab, add the features expected of a college course glossary, integrate it with Search Everything, and use researched glossary/tooltip UX practices to inform the design.",
      "changes": [
        "Promoted Glossary to a first-class primary navigation destination. The shared site runtime inserts a direct Glossary tab before More across existing pages and adds Course Glossary to the Learning & Practice footer without rewriting every page template.",
        "Renamed the student-facing Course Dictionary surface to Course Glossary while preserving all 282 source-grounded vocabulary entries and the in-lesson vocabulary-linking behavior introduced in v16.3.22.",
        "Expanded the Glossary into four academic reference views: All Terms, Acronyms & Abbreviations, Symbols & Notation, and Sources.",
        "Added multi-path lookup using full-text search, A–Z browsing, 15 course categories, and Week 1–31 filtering. This deliberately combines alphabetical, category, and course-time organization for faster scanning and recall.",
        "Added richer persistent entries with pronunciation, plain-English and technical definitions, aliases, symbols/notation, course notes where available, direct Classroom week links, related course terms, source provenance, and a copyable stable entry link.",
        "Added a Sources view that groups authoritative terminology source families and shows how broadly each source supports the Glossary.",
        "Integrated all Glossary terms into Search Everything as a dedicated Glossary Term result type; search covers canonical terms, definitions, aliases, notation, categories, notes, and source names.",
        "Reworked hover/focus definition cards using NN/g, W3C, and Atlassian guidance: content is concise contextual microcontent rather than the entire entry; mouse and keyboard triggers are supported; Escape dismisses; pointer users can move into the popover without it disappearing; visible keyboard focus is preserved; and no essential definition exists only in a tooltip.",
        "Removed the native title-tooltip duplication from decorated lesson terms and kept the term itself as the single interactive deep-link trigger, avoiding nested interactive controls inside the popover.",
        "Added no-result recovery, Clear filters, URL-synchronized glossary filters/views, mobile-horizontal A–Z browsing, reduced-motion compatibility, and direct deep-link highlighting.",
        "Added AU-ESET-301-v16.3.23-Glossary-UX-Verification.md documenting the UX/accessibility research sources and the design decisions derived from them.",
        "Advanced build metadata and service-worker cache namespace to v16.3.23 so the Glossary navigation/search/runtime changes replace v16.3.22 or older cached assets reliably.",
        "Curriculum, lesson source wording, assessments/scoring, mastery, labs, projects, calendar, progress identities, Cloud Sync protocol, Teaching Media, and branding remain unchanged."
      ],
      "filesAdded": ["AU-ESET-301-v16.3.23-Glossary-UX-Verification.md"],
      "filesModified": ["POST-UPDATE-QA.md","SHA256SUMS.txt","UPLOAD_README.txt","build-info.json","glossary.css","glossary.html","glossary.js","learn.html","release-notes-current.js","search.html","search.js","service-worker.js","site.js"],
      "filesRemoved": []
    },
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
  const currentOrder = ['v16.3.35','v16.3.34','v16.3.33','v16.3.32','v16.3.31','v16.3.30','v16.3.29','v16.3.28','v16.3.27','v16.3.26','v16.3.25','v16.3.24','v16.3.23','v16.3.22','v16.3.21','v16.3.20','v16.3.19','v16.3.18','v16.3.17','v16.3.16','v16.3.15','v16.3.14','v16.3.13','v16.3.12','v16.3.11','v16.3.10.1','v16.3.10','v16.3.9','v16.3.8','v16.3.7','v16.3.6','v16.3.5'];
  entries.sort((a,b)=>currentOrder.indexOf(a.version)-currentOrder.indexOf(b.version));
  const historical = Array.isArray(window.ALFRED_RELEASES) ? window.ALFRED_RELEASES : [];
  const currentVersions = new Set(entries.map(entry=>entry.version));
  window.ALFRED_RELEASES = [...entries, ...historical.filter(item=>item && !currentVersions.has(item.version))];
})();
