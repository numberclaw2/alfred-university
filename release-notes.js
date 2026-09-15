window.ALFRED_RELEASES = [
  {
    "version": "v16.3.2",
    "date": "September 15, 2026",
    "title": "Runtime Assessment Integrity & Deployment Verification",
    "type": "Surgical Runtime / Deployment Repair",
    "request": "Remove learner-facing answer-position bias, make the deployed build directly verifiable, and prevent historical platform documentation from masquerading as current operating instructions without touching the instructional rebuild.",
    "changes": [
      "Replaced the reviewed-bank choice-order shuffle with a deterministic constrained-random placement strategy. Question selection, IDs, wording, distractors, correct content, explanations, standards tags, and saved-history identities remain unchanged; conspicuous concentration and long runs are rejected without imposing a fixed per-form answer-letter quota.",
      "Kept the objective evidence revision at 16.2 while identifying the course curriculum as 16.3 and the runtime patch as 16.3.2.",
      "Added build-info.json as a non-sensitive deployment marker containing course release, runtime patch, evidence revision, Cloud Sync protocol, and a unique build identifier. The service worker intentionally does not cache this marker.",
      "Bumped the application cache to alfred-u-v16-3-2 and retained activate-time cleanup of obsolete Alfred caches without clearing localStorage, IndexedDB, progress, assessment history, notes, or Cloud Sync configuration.",
      "Marked the v15.8 Academic System Guide as historical/superseded in Documents and Search while preserving the original PDF unchanged for provenance.",
      "Preserved all 62 integrated lessons, 62 teaching visuals, 340 teaching routes, 24 labs, 125 calendar identities, Week 18 cumulative embedded gate, 2,790/2,790 weighting, protocol-2 Cloud Sync, and existing progress/history keys."
    ]
  },
  {
    "version": "v16.3.1",
    "date": "September 15, 2026",
    "title": "Runtime Evidence Revision Hotfix",
    "type": "Compatibility & Mastery Evidence Fix",
    "request": "Audit the uploaded GitHub release and correct runtime defects without changing the 62-lesson instructional content, calendar, labs, Cloud Sync contract, or saved course history.",
    "changes": [
      "Fixed Standards, Analytics, and Progress consumers that still treated the old v15.8 bank revision as current. They now derive the active evidence revision from assessment metadata, which is intentionally 16.2 for v16.3 saved-run compatibility.",
      "Prevented uncompleted rubric/self-reviewed semantic tasks from inflating the automatic Mastered breadth guard. Automatic mastery breadth now counts only active independently scored reviewed-bank items; semantic tasks remain a separate evidence type.",
      "Updated learner-facing Standards and Analytics language so current versus historical evidence is described by the active evidence revision rather than stale v14.2/v15.8 labels.",
      "Kept the course instructional release at v16.3 and the objective-bank evidence revision at 16.2; no assessment history, event identity, calendar UID, lab, lesson, or Cloud Sync migration is introduced.",
      "Bumped the offline cache to alfred-u-v16-3-1 so GitHub Pages clients refresh the corrected runtime files cleanly."
    ]
  },
  {
    "version": "v16.3",
    "date": "September 15, 2026",
    "title": "Final Instructional Depth — The Lesson Becomes the Professor",
    "type": "Final Academic Depth Rebuild",
    "request": "Replace the remaining stacked/generic lesson architecture with 62 coherent, individually taught asynchronous lessons while preserving v16.2 semantic coverage and all healthy course infrastructure.",
    "changes": [
      "Removed the old instructional-completion.js learner layer and consolidated each CETa/Career stage into one v16.3 integrated lesson instead of stacking a short lesson, generic expansion, semantic repair, and competency clinic.",
      "Re-authored all 62 lessons with subject-specific prerequisite recall, technical instruction, a second worked example, concrete guided practice, an explicit changed independent scenario, topic-specific misconceptions/corrections, technician/embedded connection, checks, and a specific teach-back.",
      "Integrated the strongest v16.2 semantic teaching directly into the applicable lessons while retaining the 87 semantic tasks as evidence rather than teaching substitutes; 262/262 CETa and 78/78 Career standards remain mapped.",
      "Added 62 lesson-specific instructional SVGs for circuits, waveforms, digital/embedded interfaces, instrument workflows, troubleshooting, RF, and project/test/career reasoning; visuals are responsive and include text alternatives.",
      "Added one additional auto-graded MCQ and one model-answer short-response check inside every integrated lesson while keeping the reviewed 223-question bank, required lesson gates, weekly mastery, semantic tasks, and practical evidence distinct.",
      "Preserved all 24 labs, the Week 18 cumulative STM32/SWD/UART/I2C-or-SPI/logic-analysis fault gate, two-run CETa readiness rule, Week 30 career green-light, 2,790/2,790 weighting, 125 calendar identities, protocol-2 Cloud Sync, D1 compatibility, saved progress, and no-login static architecture.",
      "Updated the Word curriculum, 62-row lesson-depth audit, 340-row semantic matrix, final acceptance report, service worker, document center, README, and release metadata for v16.3."
    ]
  },
  {
    "version": "v16.2",
    "date": "September 15, 2026",
    "title": "Semantic Instruction Repair — Technical Meaning Before Coverage Counts",
    "type": "Targeted Academic Repair & Semantic QA",
    "request": "Repair v16.1 without rebuilding healthy architecture: replace generic competency coverage with subject-specific technical teaching and assessments, retire generic fill questions, clean calendar wording, and preserve all working course, sync, lab, schedule, and embedded-career systems.",
    "changes": [
      "Added 74 CETa topic-specific semantic teaching sections that collectively cover all 262 current CETa rows and 13 career sections that cover all 78 career standards. These sections teach the actual device, concept, procedure, distinction, calculation, or behavior instead of treating a competency label as instruction.",
      "Added 87 required constructed-response/performance semantic tasks. A learner must save a substantive response or artifact pointer and confirm every topic-specific required element before the associated lesson stage can complete.",
      "Preserved the 186 v16.1 automatically generated coverage-fill question IDs for history compatibility but retired those items from current mastery evidence because their generic wording could be answered without demonstrating the assigned technical competency.",
      "Repaired the previously demonstrated false-pass examples including First Aid recognition and escalation, logic probes and logic pulsers, RF feedline types, duty cycle/pulse width, PLLs, piezoelectric devices, solder/rework/BGA/pad repair, isolation transformers/Variacs, SMPS, amplifier analysis, computer/software topics, optical/display/photo devices, and other current ETA rows.",
      "Kept v16.1 healthy instruction, 31-week sequencing, 62 primary lessons, 24 labs, Week 18 cumulative STM32/SWD/UART/I2C-or-SPI/logic-analysis fault gate, 2,790/2,790 weighted track balance, event IDs/dates/UIDs, saved progress identifiers, protocol 2 Cloud Sync, and the static no-login architecture.",
      "Corrected malformed AST/Practice wording package-wide without changing the 125-event schedule or event identities.",
      "Updated Classroom completion so semantic tasks are instructional gates rather than decorative mappings; Search and Standards index and expose the subject-specific repair layer.",
      "Advanced the evidence revision and offline cache to v16.2, added the semantic layer and current semantic audit artifacts to the deployable package, and preserved old v16.1 QA files as historical records rather than current semantic acceptance authority."
    ]
  },
  {
    "version": "v16.1",
    "date": "September 15, 2026",
    "title": "Instructional Completion — Every Requirement Gets a Teaching Path",
    "type": "Academic Completion & Final Audit",
    "request": "Finish the instructional rebuild so Alfred can teach the complete course rather than merely point to references, preserve equal CETa and career preparation, close every lab and competency gap, and deliver a stable long-term release with detailed evidence.",
    "changes": [
      "Expanded all 62 required lessons with an in-house instructional-depth layer: purpose, why the topic matters, prerequisite activation, retrieval, mechanism-level teaching, calculation and representation guidance, evidence rules, worked diagnostic reasoning, misconceptions, guided practice, independent transfer, technician context, troubleshooting, teach-back, and exact traceability.",
      "Mapped all 262 current ETA Associate CET competency rows and all 78 Alfred career standards to a specific week, lesson, teaching section, guided task, independent task, current assessment path, mastery evidence, and lab/project evidence route. The machine-readable coverage matrix contains all 340 rows with no unmapped row.",
      "Preserved the v16 equal-weight design: 2,790 weighted minutes of CETa preparation and 2,790 weighted minutes of career-transition preparation. Every week still labels the certification lesson, career lesson, and combined application separately.",
      "Added one original, reviewed current-course assessment path for every formerly uncovered standard while keeping historical question IDs and records intact. The bank now contains 1,381 total records, of which 409 are active substantive reviewed items; all 262 CETa rows and 78 career rows have direct current assessment coverage.",
      "Removed a predictable answer-position pattern from the 186 standards-gap evidence questions. Their stems now vary by review context, distractors identify distinct evidence failures, and the correct positions are balanced across A–D (47/46/46/47) so answer-letter guessing cannot substitute for reading the requirement.",
      "Made the CETa readiness rule explicit in policy, guidance, assessment cards, and saved evidence: two separate current full-length 100-question Alfred CETa practice runs at 85% or higher. ETA’s published 75% official threshold remains clearly distinct, and Alfred makes no pass guarantee or official-weighting claim.",
      "Strengthened all 24 lab records with complete virtual and physical requirements, procedures, evidence definitions, honest route limitations, and practical-completeness metadata. LAB-018 is now one cumulative STM32 build/flash/SWD/UART/I²C-or-SPI/logic-capture/fault/diagnosis/correction/retest/report gate.",
      "Closed the C1.6 safety traceability gap with an explicit hazard-log rule: stop and de-energize as appropriate, record the condition and risk, document the corrective action, independently verify the safe state, obtain required authorization, and only then continue testing.",
      "Kept external videos, university materials, official PDFs, simulations, manufacturer instruction, and the private study booklet integrated as additional teachers and practice—not as dependencies that excuse incomplete Alfred instruction.",
      "Normalized calendar typography, missing word spaces, labels, punctuation, and link formatting without changing any event date, order, ID, or UID. The downloadable 125-event ICS was regenerated and its malformed Week 1 Engineering Library host was corrected.",
      "Preserved the v15.8 desktop Study header correction and the bounded More menu: grouped two-column presentation on desktop, viewport-aware scrolling on short screens, a full scrollable mobile drawer, keyboard escape/focus handling, and Release Notes in its requested location.",
      "Updated every consumer page so Classroom, Assessment Center, quizzes, Progress, Standards, Analytics, Study, Search, Lab Center, and Week Overview load the same v16.1 completion data rather than parallel or partial copies.",
      "Advanced the offline cache to v16.1 and added all three completion layers, the current Word curriculum plan, coverage matrix, audit reports, and the complete route set while keeping documents and reports optional during installation.",
      "Added a v16.1 Curriculum & Instruction Plan and machine-readable CSV/JSON coverage matrices plus acceptance, instructional-depth, and resource-verification reports. These make the release’s scope, evidence, limitations, and maintenance rules inspectable outside the interface.",
      "Preserved the existing static GitHub Pages architecture, production Cloudflare Worker URL, protocol 2, D1 schema, recovery-key model, local progress records, event IDs, assessment history, PWA routes, university presentation, and flat root-level upload workflow. No deployment or backend migration is included.",
      "The final audit distinguishes structural coverage from proven learning: mapping and original questions do not constitute ETA endorsement, accreditation, external psychometric validation, certification, job qualification, or proof of physical skill. Physical handling and workmanship claims still require honest physical evidence."
    ]
  },
  {
    "version": "v16.0",
    "date": "September 15, 2026",
    "title": "Instructional Rebuild — The Classroom Becomes the Product",
    "type": "Major Academic Release",
    "request": "Rebuild the full 31-week program as a real asynchronous classroom that teaches CETa knowledge and electronics-to-embedded career skills in-house, with external resources supporting rather than replacing the lessons.",
    "changes": [
      "Added a complete 31-week Classroom path with 62 in-house lessons: one explicitly labeled CETa lesson and one explicitly labeled Career lesson every week, plus a CETa + Career application that joins both goals without allowing either to disappear.",
      "Replaced optional learning checks with required instructional gates. Every lesson has an embedded knowledge check, targeted correct-answer feedback, a correction after a miss, and a safety-critical gate where the activity requires it.",
      "Added a predictable seven-stage sequence—Start Here, CETa Lesson, Career Lesson, Teaching Media, Guided Practice, Lab/Application, and Weekly Mastery—with pause/resume state, one next action, Quiet Mode, text-first alternatives, and explicit required versus supplemental labels.",
      "Wrote original teaching sequences for every lesson: learning objectives, three concept explanations, concise hold-onto-this summaries, worked examples, transfer prompts, corrective feedback, common mistakes, guided practice, independent transfer, and evidence contracts.",
      "Added one compact concept map for every week so the learner can see the controlling relationship before reading the detail. Maps are text-based and keyboard/screen-reader friendly rather than decorative images.",
      "Balanced the two program goals by design: 2,790 weighted minutes of CETa preparation and 2,790 weighted minutes of career preparation. Combined work counts half toward each track, and every weekly plan identifies the intended track label.",
      "Mapped the scope against the current ETA Associate CET competency document, official exam information and formula sheet, O*NET and BLS technician work, the learner-provided private study-guide scope, and the approved university, government, manufacturer, and open-learning source stack. The private booklet is used as a scope reference and is not republished.",
      "Kept external videos, university lectures, PDFs, simulations, manufacturer training, safety standards, embedded-development references, and career sources abundant, but placed them after Alfred's explanation and added a statement of what to watch for and what the in-house lesson still supplies.",
      "Made weekly mastery cumulative and spaced: each required weekly assessment targets 80%, safety-critical checks target 100%, and missed work routes to a bounded correction and fresh attempt rather than a punishment streak. Calendar-event quizzes remain supplemental practice so the calendar does not create a competing course path.",
      "Connected the Classroom to Lab Center requirements, virtual and physical evidence routes, lab checks, project bring-up, safe low-voltage boundaries, and the existing assessment/progress/sync records without changing Cloud Sync protocol 2, the Worker/D1 schema, recovery-key model, event IDs, or saved academic evidence.",
      "Updated Home, Study, Week Overview, Calendar, Practice, Progress, Search, Resources, Student Services, and offline guidance so the Classroom is the authoritative teaching route while each surrounding page keeps its narrower job.",
      "Added the complete AU-ESET 301 Curriculum and Instruction Plan as a Word document in the Document Center. It includes the standards rationale, teaching psychology/evidence basis, learner-access design, assessment and safety policy, every week's lesson plan, source-role map, maintenance limits, and cited sources.",
      "Updated the PWA cache and manifest for learn.html, curriculum-data.js, assessment-policy.js, the current document plan, and the complete v16 route set. Release Notes remains in the existing More/About location by request.",
      "Completed structural audits: 31 modules, 62 lessons, 62 embedded checks, 24 lab quizzes, 31 weekly tests, 3 readiness assessments, 1,195 assessment items, equal track minutes, complete lab records, valid offline asset references, and no curriculum validation errors.",
      "The course remains a fictional independent-study environment, not an accredited institution. External sources can change, Alfred questions are supplemental rather than official ETA exam content, and physical work must remain within the learner's equipment, training, supervision, and safety limits."
    ]
  },
  {
    "version": "v15.8.1",
    "date": "September 14, 2026",
    "title": "Complete Lab Readiness Guidance",
    "type": "Course Guidance Fix",
    "request": "Fix the DC Lab Kit Check because it asks the learner to identify required equipment without showing the equipment, then check every lab for the same kind of instructional hole.",
    "changes": [
      "All nine equipment-preparation reminders now contain an actionable Today checklist instead of relying on generic outcomes.",
      "The Week 1 DC kit check names the low-voltage source, DMM, breadboard, LED, resistor choices and jumper wires, explains their purposes, and states the approved virtual fallback.",
      "Later instrument, soldering, STM32, UART, serial-bus, cabling, project-BOM and Week 29 preparation reminders identify required items, compatibility checks, safety boundaries and no-purchase alternatives.",
      "Twenty-six scheduled lab and practical items now direct the learner to the matching Lab Center route and state what evidence completes the task; late Project 1 labs receive specific bring-up, interface, firmware, fault-injection and workmanship steps.",
      "Study displays the full preparation checklist and provides a direct Lab Center or Project Center link from the assigned-work panel.",
      "Every Lab Center card separates virtual and physical requirements into scannable lists and explains what to do before the scheduled lab.",
      "The 24 Lab Center records were checked for an objective, both routes, required equipment, procedure steps, evidence, completion rules and working tool links. Existing progress records, calendar dates, questions and assessment evidence are unchanged."
    ]
  },
  {
    "version": "v15.8",
    "date": "September 14, 2026",
    "title": "Final Pre-Release Quality and Reliability Audit",
    "type": "Quality & Reliability",
    "request": "A stable long-term learning release for CETa preparation and the electronics/test-technician bridge, with the university atmosphere and attention-friendly workflow preserved. Fix the More menu at 100% zoom and deliver complete flat files.",
    "changes": [
      "More uses three groups, a compact desktop layout and available-viewport height with internal scrolling; keyboard dismissal, focus and mobile drawer behavior are corrected. Release Notes remains in More and About.",
      "Seven instructional week starts and shared Current Week calculations are corrected. Calendar event records and the ICS schedule remain unchanged.",
      "Study prioritizes incomplete instructional work over equipment preparation, honors explicit selections, refreshes after completion and gives an honest all-complete state.",
      "Generic equipment-checklist outcomes no longer displace learning priorities in weekly summaries. Calendar reminder details remain available.",
      "Quick/Standard/Deep Work, Quiet/Focus, pause/resume, next-action notes and manageable review blocks are retained. Confidence schedules review; explicit completion records completion.",
      "Pre-v15.8 mixed-question aggregates remain historical evidence instead of current mastery. New optional forms build current-bank evidence without resetting completed coursework or existing score history.",
      "Mastery dashboard indices describe available web evidence, not certification or employment probability. Virtual and physical lab records stay distinct.",
      "Tracker saves and backup exports use the latest state. Backup import validates structure, strips unsafe prototype keys and never silently replaces recovery credentials.",
      "Local reset disconnects before clearing academic and saved Study state, preserves the key/cloud record, and rejects stale in-flight sync responses. Other-tab reset cannot resurrect a saved Study session.",
      "Search results target specific events, labs, concepts, standards and releases. Counts distinguish displayed from total results and user queries remain escaped.",
      "HTML headings, buttons, form labels, dialog names, hidden focus states, keyboard handling and skip links receive a consistency repair.",
      "Offline coverage includes all current academic routes and dependencies. Query navigation, cache writes, temporary errors, essential versus optional failures and app-specific cache cleanup are handled explicitly.",
      "Empty downloaded-library controls and unused mirror dependencies are retired. Five NPTEL URLs and a looping Fluke reference are repaired; optional publisher resources still require normal access.",
      "Academic System Guide Revision 2.1 documents current use. Cover notices distinguish current guidance from archived workflows, and all seven PDFs are reindexed for Search.",
      "README, deployment guidance and upload instructions describe the production Worker/D1 architecture, data preservation and the complete root-level package. The private CETa booklet, recovery keys and QA tooling are excluded."
    ]
  },
  {
    "version": "v15.7",
    "date": "September 13, 2026",
    "title": "CETa and Technician Preparation — Final Scope Audit",
    "type": "Course Quality",
    "request": "Make exam preparation sufficient and technician preparation demonstrable without expanding the course.",
    "changes": [
      "Retired the remaining 337 legacy template questions from graded use; retained historical IDs and records.",
      "Added 147 original reviewed questions and retained 76 recalculated numerical items: 223 active supplementary questions. Editorial review is not external exam validation.",
      "Practice selection now respects taught prerequisites. Optional checks use up to five questions; weekly reviews use up to twelve. Preparation and milestone tasks no longer add unrelated quizzes.",
      "CETa breadth practice uses 100 questions, five per domain, with a 120-minute suggested window. This is not an official exam weighting.",
      "Added a booklet-to-domain coverage map that explicitly identifies objectives without directly tagged web questions.",
      "Clarified booklet-first review, errata, simulation versus physical experience, and the existing projects’ technician evidence requirements.",
      "Added instrument traceability and nominal, boundary and failure-case checks to existing labs without adding calendar events.",
      "Fixed answer-control handling, preserved grading records, updated offline assets and corrected malformed site origins."
    ]
  },
  {
    "version": "v15.6",
    "date": "September 13, 2026",
    "title": "Assessment Integrity — First Audit Pass",
    "type": "Assessment Audit",
    "request": "Check question provenance, answers, distractors and lesson alignment.",
    "changes": [
      "Retired 78 graded questions that repeated competency objectives as their answers. Historical IDs and saved records are preserved.",
      "Recalculated 76 numerical answers; 71 have checked formula references and 5 have arithmetic-only checks. This is not full-bank validation.",
      "Replaced 15 reactance/resonance distractors with missing-factor errors; clarified DC, zero-offset sinusoid and grounded-input assumptions.",
      "Added per-question review status and source references after grading. Remaining items are explicitly pending review.",
      "Career screen now honestly shows its available 78-question short practice form. No unrelated padding is added.",
      "Prevented repeated submissions of the same displayed form from adding duplicate evidence.",
      "Lesson alignment, remaining technical answers and expert difficulty calibration remain open audit work."
    ]
  },
  {
    "version": "v15.5",
    "date": "September 12, 2026",
    "title": "Study Continuity & Clear Next Actions",
    "type": "Quality of Life",
    "request": "Make starting, pausing, and returning easier.",
    "changes": [
      "Resume appears before the new recommendation.",
      "Study shows the actual assigned work and book reading.",
      "Optional next-action notes stay with the saved session on this browser.",
      "Help is available in the same place on every step.",
      "Review blocks stop after three ratings, with an explicit choice to continue.",
      "Week links into labs preserve the selected week.",
      "Session estimates match the 20, 60, and 120 minute plans."
    ]
  },
  {
    "version": "v15.4",
    "date": "September 12, 2026",
    "title": "Focus-Resilient Study Flow",
    "type": "ADHD / Autism-Informed Quality Patch",
    "request": "Keep the Alfred university presentation and CETa/job-transition depth, while reducing executive-function friction for a learner who may lose focus, need predictable steps, or return after an interruption.",
    "changes": [
      "Added an interruption-resilient Study session save: an unfinished session now offers Resume Session at the saved step instead of making the learner reconstruct the task from memory.",
      "Added literal setting descriptions for Quiet Mode and Focus Mode so the learner knows what each control changes before using it.",
      "Added an explicit one-line study sequence: choose a mode, follow the steps in order, rate confidence, then mark the scheduled work complete.",
      "Added current-week-first defaults for lesson quizzes and the Lab Center, while keeping All weeks available for deliberate browsing.",
      "Added current-filter guidance so a smaller initial list is clearly intentional rather than appearing to hide course content.",
      "Added current-step semantics to the guided Study tabs for keyboard and screen-reader orientation.",
      "Kept the existing visual identity, full course content, 125 events, assessment evidence, Cloud Sync records, and progressive-disclosure patterns intact.",
      "Bumped the offline cache to v15.4 so the saved-session and focus-flow changes replace the older Study layer."
    ]
  },
  {
    "version": "v15.3",
    "date": "September 12, 2026",
    "title": "Calendar Readability & Task-First Notes",
    "type": "Calendar / Information Design Patch",
    "request": "Keep the complete 125-item academic calendar, but make its wording, hierarchy, and event details easier to scan and retain.",
    "changes": [
      "Kept every dated event, event ID, resource, lab, milestone, mastery gate, Project 1 item, career item, and required outcome intact.",
      "Reordered event details around the learner’s task: today’s work first, required explain-or-demonstrate outcomes next, then mastery and career context.",
      "Separated reference links and full source notes into expandable sections so long descriptions remain available without dominating the first read.",
      "Added a dedicated Week focus block that turns dense “WEEK … FOCUS” lines into a short focus label plus a readable topic list.",
      "Repaired common display-only spacing glitches in older event copy without rewriting the authoritative course-data record.",
      "Shortened month, week, and agenda labels while preserving the full event title in the accessible event label and modal heading.",
      "Added clearer calendar orientation text, live period updates, pressed-state view buttons, keyboard-friendly Week event buttons, and descriptive Agenda controls.",
      "Bumped the offline cache to v15.3 so the calendar presentation layer replaces the stale v15.2 JavaScript and CSS."
    ]
  },
  {
    "version": "v15.2",
    "date": "September 12, 2026",
    "title": "Evidence-Backed UX Flow Audit",
    "type": "UX / Accessibility Quality Patch",
    "request": "Audit the complete site against research on visual complexity, cognitive load, typography, scanning, information scent, and cognitive accessibility, then make the flow calmer and easier to follow without removing useful academic depth.",
    "changes": [
      "Moved the live Current Week Dashboard directly below the home announcement so returning students see the current context before the six-system map.",
      "Added a consistent linked context trail to inner pages and a keyboard-accessible Skip to main content link, reducing orientation and memory load.",
      "Grouped the More menu into Course & Library, Practice & Mastery, and Documents & Support so the 13 secondary destinations scan as task clusters instead of one flat list.",
      "Constrained long reading blocks to a comfortable measure, raised the smallest instructional metadata sizes, and preserved the Georgia display / sans-serif body pairing.",
      "Standardized the touch target rhythm for buttons and compact controls, retained visible focus treatment, and added a reduced-motion fallback.",
      "Reduced the decorative paper texture behind task content while keeping the Alfred green, gold, cream, seal, and institutional presentation system.",
      "Revised the service-worker cache to v15.2 so the new UX and accessibility layer replaces stale v15.1 CSS/JS on the next visit.",
      "Preserved all academic data, calendar event IDs, assessment evidence, Progress records, Cloud Sync protocol 2, Worker/D1 schema, and Release Notes placement under About."
    ]
  },
  {
    "version": "v15.1",
    "date": "September 12, 2026",
    "title": "Quality, Compatibility & Review Flow",
    "type": "Quality-of-Life Patch",
    "request": "Complete a final quality audit, repair confirmed issues, restore direct patch-history access, and provide upload-ready files.",
    "changes": [
      "Aligned primary navigation with Study, Week, Calendar, Practice, Progress, and Mastery; restored Release Notes in More while retaining the About administration link.",
      "Added a lightweight Practice gateway linking to existing Lab and Assessment Centers.",
      "Fixed offline query-string navigation, made optional document caching failure-tolerant, and restricted cache cleanup to Alfred caches.",
      "Migrated legacy review statuses and flags into Study reviews while preserving outcomes, notes, scores, and Study-only review schedules.",
      "Added Review in Study links for weak competencies, with reviews stored in existing synced week records. Retrieval ratings never change assessment mastery.",
      "Repaired career pillar counts, connected status labels for accessibility, and added an explicit Save Server and Reconnect action with a server-change warning.",
      "Protected Study cloud merges against edits made during network requests and included analytics records in Study sync.",
      "Updated the Lab Manual to Revision 2.0, indexed the Academic System Guide and revised manual, and labeled the archived binder in search.",
      "Removed obsolete homepage and curriculum renderers and the retired assigned-resource renderer; Week opens at the current week by default.",
      "Preserved protocol 2, the existing Worker and D1 schema, recovery keys, event IDs, and assessment bank."
    ]
  },
  {
    "version": "v15.0",
    "date": "September 12, 2026",
    "title": "Academic System Consolidation",
    "type": "Architecture & UX Release",
    "request": "Remove redundant workflows that remained after newer academic tools replaced them, and give every major function one authoritative home.",
    "changes": [
      "Rebuilt Home around six clear systems: Study, Week, Calendar, Practice, Progress, and Mastery; removed repeated weekly, career, and instructional sections.",
      "Made Study the daily command center and single review queue; Week Modules now own detailed weekly instruction; Calendar remains the schedule authority.",
      "Removed the manual Weekly Mastery and manual Needs Review systems from Progress while preserving existing stored records for backward compatibility.",
      "Kept Progress focused on completion, outcome checkoffs, notes, career gates, backup/import, and Cloud Sync; Standards and Analytics remain the mastery authority.",
      "Replaced the Course page’s duplicate 31-week accordion with a direct Week Modules gateway and removed the duplicate Assigned Resources catalog from the Engineering Library.",
      "Removed the obsolete Study Hall section from Student Services and routed daily work to Study.",
      "Simplified Cloud Sync setup around the Recovery Key and built in the production Worker URL; server configuration now lives under advanced Sync Settings.",
      "Moved Release Notes and Deployment Notes under About as site-administration information rather than academic destinations.",
      "Added the Revision 2.0 Academic System Guide and marked the older Binder Index workflow as archived where its instructions conflict with the live platform.",
      "Rebuilt the PWA cache as v15, added all current academic systems and the new guide, and replaced misleading homepage fallback with a dedicated offline page.",
      "Preserved assessment history, competency evidence, event IDs, calendar dates, Cloud Sync protocol 2, the current D1 schema, and existing Student Sync Keys."
    ]
  },
  {
    "version": "v14.2",
    "date": "September 11, 2026",
    "title": "Assessment Validity QA Patch",
    "type": "Academic Validity Patch",
    "request": "Repair the final-audit finding that standards/scope-recognition items could inflate competency scores, while preserving the new analytics dashboard and existing Cloud Sync architecture.",
    "changes": [
      "Excluded standards-number and scope-recognition items from every graded lesson quiz, lab check, weekly test, mock exam, and final; those items remain orientation aids with zero mastery weight.",
      "Rebuilt uncovered CETa standards with substantive technical/concept/application questions grounded in current ETA competency wording, the supplied Associate CET Study Guide, and the validated course source stack.",
      "Rebuilt Career evidence around standard-specific technical scenarios and removed repetitive scenario-template variants from graded forms.",
      "Separated true difficulty (Foundation, Intermediate, Advanced) from cognitive skill (Recall, Understanding, Calculation, Analysis, Troubleshooting, Application).",
      "Refined cognitive-skill tagging during final QA so graded evidence actually exercises Recall and Analysis instead of leaving those dashboard dimensions empty or underrepresented.",
      "Deterministically shuffles answer choices on each assessment form to reduce answer-position cueing while keeping forms reproducible from assessment ID and attempt number.",
      "Hardened storage by retaining three compact score/timing summaries, only the newest detailed standard/question map, and permanent lifetime competency rollups in analytics shards.",
      "Changed competency scoring to weighted validated evidence. Foundation-only performance can start a standard but cannot by itself produce Proficient or Mastered status.",
      "Added a bank-breadth safeguard: repeated success on a single unique question can support Proficient evidence but cannot by itself produce a Mastered label.",
      "Added conservative legacy migration: v14.0/v14.1 scores remain in history, but older mixed-validity standard evidence is labeled Revalidation Needed until retested under v14.2.",
      "Final migration QA also preserves standard IDs from unmigrated v14.0 attempt summaries as legacy/revalidation evidence, so direct upgrades do not silently lose which competencies were previously tested.",
      "Preserved Cloud Sync protocol 2, the current Worker/D1 schema, Student Sync Key, calendar event IDs, dates/times, and iCalendar UIDs."
    ]
  },
  {
    "version": "v14.1",
    "date": "September 11, 2026",
    "title": "Learning Analytics & Competency Dashboard",
    "type": "Assessment Intelligence Patch",
    "request": "Preserve richer quiz/test evidence over time and turn it into a dashboard that shows competency strengths, weaknesses, retention decay, CETa readiness, career readiness, and practical lab evidence.",
    "changes": [
      "Added lifetime assessment analytics inside the existing event/week JSON records without changing the Cloudflare Worker or D1 schema.",
      "Each new assessment now preserves question IDs, chosen answers, correctness, standard evidence, CETa/career track, cognitive skill, difficulty, time spent, attempt number, and compact trend history.",
      "Added permanent lifetime rollups so standard-level evidence survives after older detailed attempts roll out of the three-attempt review window.",
      "Added six cognitive-skill tags: Recall, Understanding, Calculation, Analysis, Troubleshooting, and Application.",
      "Added the Competency Dashboard with overall confidence, CETa readiness, career readiness, retention-due count, domain heatmaps, cognitive/difficulty performance, assessment-type performance, trends, strongest competencies, and a prioritized repair queue.",
      "Upgraded Standards & Retention to use lifetime evidence, evidence quantity, recency, and repeated successful retrieval when calculating confidence and mastery state.",
      "Added Virtual/Physical lab-completion evidence controls to the Lab Center and synchronized them through the existing week records.",
      "Preserved backward compatibility with v14.0 results. v14.2 later tightened validity: older scores remain visible, while mixed-validity standard evidence requires revalidation before it can raise current competency confidence."
    ]
  },
  {
    "version": "v14.0",
    "date": "September 11, 2026",
    "title": "Assessment, Standards & Retention System",
    "type": "Major Academic Assessment Release",
    "request": "Add quizzes and tests for every calendar lesson and lab, use the official CETa standards, study guide, and practice exam, give equal weight to career-transition readiness, store results in Cloud Sync, and track retention like a real school.",
    "changes": [
      "Added 125 lesson quizzes, one for every scheduled calendar item, with 20 questions each and a balanced 10 CETa / 10 career mix.",
      "Added 24 lab knowledge checks and 31 weekly mastery tests, plus CETa Mock, Career Bridge Technical Screen, and Comprehensive Final assessments.",
      "Built a 1,047-question original bank: 599 CETa-aligned questions and 448 career-transition questions. The official ETA practice exam informed breadth and style; its questions were not copied.",
      "Mapped all 262 individual current CETa competency rows and added 78 Alfred career standards across bench safety, schematics, instrumentation, workmanship, troubleshooting, C/embedded C, STM32, serial buses, Python automation, validation, documentation, and career evidence.",
      "Added Standards & Retention with Not Introduced, Learning, Developing, Proficient, Mastered, and Retention Due states.",
      "Added school-style A–F grading, an 80% Alfred mastery target, an 85% CETa mock readiness target, and clear separation from ETA’s published 75% passing threshold.",
      "Added evidence-based spaced retrieval: misses return quickly while successful retrieval moves through approximately 7-, 21-, and 45-day intervals.",
      "Stored assessment attempts inside the existing event/week Progress records so results can use the established Cloud Sync protocol without a Worker or D1 schema migration.",
      "Added assessment links to calendar event details, Week Modules, and every Lab Center card, and indexed standards/major assessments in Search Everything.",
      "Grounded the career framework in current BLS/O*NET technician duties, ST STM32 training, NASA workmanship references, and the already validated course resource stack."
    ]
  },
  {
    "version": "v13.1",
    "date": "September 11, 2026",
    "title": "Hardware Access / Virtual Lab Patch",
    "type": "Accessibility & Course-Access Patch",
    "request": "Keep the physical lab option for later, but add a free virtual option so lack of money for electronics hardware never blocks course progress.",
    "changes": [
      "Added a Virtual and Physical route to all 24 Engineering Lab Center labs.",
      "Mapped free browser-based tools such as Falstad CircuitJS, Wokwi, CircuitVerse, Tinkercad Circuits, and browser C environments to the labs they fit best.",
      "Kept the original physical equipment lists, procedures, and evidence requirements available for later hardware practice.",
      "Made one-path completion the default so the student does not have to perform both virtual and physical versions of the same academic lab.",
      "Added explicit physical-verification-later labeling for genuinely tactile skills such as real soldering/desoldering/crimping.",
      "Added hardware-access status language so virtual completion can keep the course moving without pretending simulation replaces every tactile skill.",
      "Updated Week Modules and the guided Study workflow to point students toward the Virtual/Physical choice instead of assuming hardware ownership."
    ]
  },
  {
    "version": "v13.0",
    "date": "September 11, 2026",
    "title": "Neurodivergent Study System",
    "type": "Major Academic UX Release",
    "request": "Reduce the executive-function load of studying with ADHD and autism while keeping the CETa exam and career transition as the central goal.",
    "changes": [
      "Added the Student Success Center with one clear “Start Today’s Session” workflow.",
      "Added Quick, Standard, and Deep Work session modes with realistic time budgets.",
      "Added Focus Mode and Quiet Mode to reduce visual and decision clutter.",
      "Added an automatic spaced-review queue driven by Green / Yellow / Red self-checks.",
      "Stored review scheduling inside the existing Progress event records so the review queue can travel through the established Cloud Sync system.",
      "Added “I’m Stuck” recovery paths that route to simpler explanations, worked material, Search Everything, the Knowledge Base, and the Engineering Library.",
      "Added a Curiosity Parking Lot so interesting side topics can be saved without derailing the current study session.",
      "Added weekly planning summaries, Definitions of Done, task time estimates, and a clearer Required → Help → Deep Dive resource hierarchy.",
      "Added this Release Notes page so future requests, fixes, and upgrades remain documented like software releases."
    ]
  },
  {
    "version": "v12.0",
    "date": "September 11, 2026",
    "title": "Calendar Clarity & Academic Integration",
    "type": "Content / Calendar Release",
    "request": "Make calendar titles immediately understandable at a glance and connect the calendar to the expanded academic system.",
    "changes": [
      "Rewrote all 125 calendar titles into a consistent Week • Action — Topic pattern.",
      "Preserved all 125 event IDs, dates, times, week assignments, event types, iCalendar UIDs, and alarms so Progress and Cloud Sync remained compatible.",
      "Integrated Week Modules, Lab Center, Assessment Center, Search Everything, and the Engineering Library into scheduled work.",
      "Kept the calendar focused on required work while leaving optional depth in the library.",
      "Regenerated the standalone .ics course calendar from the same source data."
    ]
  },
  {
    "version": "v11.0",
    "date": "September 11, 2026",
    "title": "Academic Library",
    "type": "Library Release",
    "request": "Build a real study library, not just a list of links; download eligible free PDFs and keep useful web/video links where local redistribution is not appropriate.",
    "changes": [
      "Added a local-PDF library architecture with downloadable open/public-release engineering references.",
      "Added GitHub Actions automation to refresh and index approved PDF sources.",
      "Added full-text PDF indexing to Search Everything for locally stored library material.",
      "Kept copyrighted ETA/CETa and manufacturer material at the official publisher when redistribution rights were not clear.",
      "Added a flat GitHub package so library documents and support files are easier to find.",
      "Standardized downloaded reference names with the LIB- prefix."
    ]
  },
  {
    "version": "v10.0",
    "date": "September 11, 2026",
    "title": "Academic Content Upscale",
    "type": "Major Content Release",
    "request": "Make Alfred University feel like a real engineering program with substantially more teaching, labs, assessments, documentation, and verified video resources.",
    "changes": [
      "Added dedicated modules for all 31 weeks.",
      "Added a 24-lab Engineering Lab Center.",
      "Added an Assessment Center with diagnostics and mastery gates.",
      "Added a 61-topic Engineering Knowledge Base.",
      "Expanded the verified resource layer with official, university, manufacturer, government, and carefully selected video resources.",
      "Expanded the Project Center into a multi-project portfolio pathway.",
      "Added explicit career translation between weekly skills and electronics / test / embedded roles.",
      "Expanded Search Everything beyond titles into course text, lab text, knowledge entries, resource metadata, and Alfred document content.",
      "Established CETa Core → Career Core → Deep Dive as the content priority hierarchy."
    ]
  },
  {
    "version": "v9.x",
    "date": "September 11, 2026",
    "title": "Cloud Sync Reliability Repairs",
    "type": "Infrastructure Patch Series",
    "request": "Fix persistent cross-device synchronization failures and verify the whole GitHub Pages → Worker → D1 chain.",
    "changes": [
      "Corrected the GitHub Pages origin/CORS mismatch in the Cloudflare Worker.",
      "Redesigned D1 writes so a 125-record synchronization stays below the Workers Free-plan D1 query ceiling.",
      "Added Cloud Sync protocol version checks so mismatched frontend/backend releases fail clearly instead of silently.",
      "Improved /health so it verifies schema readiness instead of only checking whether a D1 binding exists.",
      "Added schema self-initialization and clearer backend diagnostics.",
      "Normalized pasted Worker URLs ending in /health or /sync.",
      "Preserved the existing Student Sync Key and cloud record throughout the repairs.",
      "Established the production Worker as alfred-university-sync.totallywill13.workers.dev."
    ]
  },
  {
    "version": "v8.x",
    "date": "September 11, 2026",
    "title": "Mobile Navigation & Cache Repair",
    "type": "UI / PWA Patch Series",
    "request": "Fix the iPhone hamburger menu becoming gray and untappable after opening.",
    "changes": [
      "Fixed the mobile drawer/backdrop z-index stacking conflict that intercepted taps.",
      "Bumped the service-worker cache so iPhone Safari would receive corrected CSS instead of stale cached files.",
      "Retained keyboard focus management, Escape handling, body-scroll locking, and accessible navigation state."
    ]
  },
  {
    "version": "v7.x",
    "date": "September 11, 2026",
    "title": "Final Audit & Hardening",
    "type": "Quality Patch Series",
    "request": "Run a complete audit after the major site and sync additions and fix contradictions, accessibility issues, security details, and cache behavior.",
    "changes": [
      "Standardized primary navigation and the More menu across the site.",
      "Corrected pages that still described the site as having no progress tracker or cloud/database component.",
      "Changed PWA caching strategy so updated HTML/CSS/JS does not remain trapped behind stale cache-first behavior.",
      "Hardened progress backups so the normal backup does not expose the Student Sync Key.",
      "Improved dialog/filter accessibility, focus handling, local-link integrity, footer consistency, and external-link protection.",
      "Added clickable “Show more” behavior in Month calendar view and improved offline asset coverage.",
      "Removed unused large legacy image assets and other deployment waste."
    ]
  },
  {
    "version": "v6.0",
    "date": "September 11, 2026",
    "title": "Cloud Sync",
    "type": "Infrastructure Release",
    "request": "Make Progress work across devices while keeping GitHub Pages as the static frontend.",
    "changes": [
      "Added a Cloudflare Worker + D1 backend for private student progress synchronization.",
      "Added a private Student Sync Key identity model.",
      "Kept the readable key out of D1 by hashing it before database lookup.",
      "Added offline-first local saving with cloud merge when connected.",
      "Added connect, disconnect, Sync Now, health checking, and cloud-record erase controls."
    ]
  },
  {
    "version": "v5.0",
    "date": "September 11, 2026",
    "title": "Student Progress Portal",
    "type": "Major Feature Release",
    "request": "Add useful progress tracking without turning the site into a login-heavy LMS.",
    "changes": [
      "Added event-level Not Started / In Progress / Complete / Needs Review tracking.",
      "Added outcome checklists and review flags.",
      "Added Green / Yellow / Red weekly mastery tracking.",
      "Added career-readiness gates and progress summaries.",
      "Added local progress backup/import support.",
      "Kept the system login-free and private to the student browser."
    ]
  },
  {
    "version": "v4.x",
    "date": "September 10–11, 2026",
    "title": "University Portal Expansion",
    "type": "Site Expansion",
    "request": "Make the site feel more like a polished institutional university environment instead of a static course homepage.",
    "changes": [
      "Added Month, Week, and Agenda calendar views.",
      "Added the automatic Current Week dashboard.",
      "Organized the curriculum into six academic phases.",
      "Added the School of Engineering page, richer Project Center, campus notices, and Student Services.",
      "Added responsive/mobile polish and stronger document previews.",
      "Added PWA/offline support and 404/offline handling."
    ]
  },
  {
    "version": "v3.x",
    "date": "September 10–11, 2026",
    "title": "GitHub Pages Deployment",
    "type": "Deployment Release",
    "request": "Make the Alfred University site easy to publish as a static GitHub Pages website.",
    "changes": [
      "Moved index.html to the repository root and converted the site to relative paths.",
      "Added .nojekyll and a no-build deployment structure.",
      "Created GitHub Pages-ready and flat-upload packages.",
      "Verified the site after proper ZIP extraction and deployment."
    ]
  },
  {
    "version": "v2.x",
    "date": "September 2026",
    "title": "Calendar & Course System",
    "type": "Academic Foundation",
    "request": "Turn the career-transition plan into a readable, scheduled course that tells the student exactly what to do and what should be learned afterward.",
    "changes": [
      "Built the 31-week AU-ESET 301 curriculum.",
      "Built the 125-event academic calendar with resource links and After Today learning outcomes.",
      "Added searchable calendar structure, academic milestones, labs, project work, CETa review, and career gates.",
      "Created the standalone iCalendar export for Apple / Google Calendar use."
    ]
  },
  {
    "version": "v1.x",
    "date": "September 2026",
    "title": "Alfred University Web Foundation",
    "type": "Initial Release",
    "request": "Create a private university-style website for the embedded-systems / electrical-engineering career transition course.",
    "changes": [
      "Established the Alfred University green / gold / cream institutional visual system.",
      "Created the Student Gateway, course area, Resource Library, Project 1 Center, Documents, and Student Services foundation.",
      "Added responsive static-site architecture with no login requirement.",
      "Established the School of Engineering and Applied Technology / Applied Electronics and Embedded Technology identity."
    ]
  }
];
