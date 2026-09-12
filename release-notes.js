window.ALFRED_RELEASES = [
  {
    version:'v15.4', date:'September 12, 2026', title:'Focus-Resilient Study Flow', type:'ADHD / Autism-Informed Quality Patch',
    request:'Keep the Alfred university presentation and CETa/job-transition depth, while reducing executive-function friction for a learner who may lose focus, need predictable steps, or return after an interruption.',
    changes:[
      'Added an interruption-resilient Study session save: an unfinished session now offers Resume Session at the saved step instead of making the learner reconstruct the task from memory.',
      'Added literal setting descriptions for Quiet Mode and Focus Mode so the learner knows what each control changes before using it.',
      'Added an explicit one-line study sequence: choose a mode, follow the steps in order, rate confidence, then mark the scheduled work complete.',
      'Added current-week-first defaults for lesson quizzes and the Lab Center, while keeping All weeks available for deliberate browsing.',
      'Added current-filter guidance so a smaller initial list is clearly intentional rather than appearing to hide course content.',
      'Added current-step semantics to the guided Study tabs for keyboard and screen-reader orientation.',
      'Kept the existing visual identity, full course content, 125 events, assessment evidence, Cloud Sync records, and progressive-disclosure patterns intact.',
      'Bumped the offline cache to v15.4 so the saved-session and focus-flow changes replace the older Study layer.'
    ]
  },
  {
    version:'v15.3', date:'September 12, 2026', title:'Calendar Readability & Task-First Notes', type:'Calendar / Information Design Patch',
    request:'Keep the complete 125-item academic calendar, but make its wording, hierarchy, and event details easier to scan and retain.',
    changes:[
      'Kept every dated event, event ID, resource, lab, milestone, mastery gate, Project 1 item, career item, and required outcome intact.',
      'Reordered event details around the learner’s task: today’s work first, required explain-or-demonstrate outcomes next, then mastery and career context.',
      'Separated reference links and full source notes into expandable sections so long descriptions remain available without dominating the first read.',
      'Added a dedicated Week focus block that turns dense “WEEK … FOCUS” lines into a short focus label plus a readable topic list.',
      'Repaired common display-only spacing glitches in older event copy without rewriting the authoritative course-data record.',
      'Shortened month, week, and agenda labels while preserving the full event title in the accessible event label and modal heading.',
      'Added clearer calendar orientation text, live period updates, pressed-state view buttons, keyboard-friendly Week event buttons, and descriptive Agenda controls.',
      'Bumped the offline cache to v15.3 so the calendar presentation layer replaces the stale v15.2 JavaScript and CSS.'
    ]
  },
  {
    version:'v15.2', date:'September 12, 2026', title:'Evidence-Backed UX Flow Audit', type:'UX / Accessibility Quality Patch',
    request:'Audit the complete site against research on visual complexity, cognitive load, typography, scanning, information scent, and cognitive accessibility, then make the flow calmer and easier to follow without removing useful academic depth.',
    changes:[
      'Moved the live Current Week Dashboard directly below the home announcement so returning students see the current context before the six-system map.',
      'Added a consistent linked context trail to inner pages and a keyboard-accessible Skip to main content link, reducing orientation and memory load.',
      'Grouped the More menu into Course & Library, Practice & Mastery, and Documents & Support so the 13 secondary destinations scan as task clusters instead of one flat list.',
      'Constrained long reading blocks to a comfortable measure, raised the smallest instructional metadata sizes, and preserved the Georgia display / sans-serif body pairing.',
      'Standardized the touch target rhythm for buttons and compact controls, retained visible focus treatment, and added a reduced-motion fallback.',
      'Reduced the decorative paper texture behind task content while keeping the Alfred green, gold, cream, seal, and institutional presentation system.',
      'Revised the service-worker cache to v15.2 so the new UX and accessibility layer replaces stale v15.1 CSS/JS on the next visit.',
      'Preserved all academic data, calendar event IDs, assessment evidence, Progress records, Cloud Sync protocol 2, Worker/D1 schema, and Release Notes placement under About.'
    ]
  },
  {
    version:'v15.1', date:'September 12, 2026', title:'Quality, Compatibility & Review Flow', type:'Quality-of-Life Patch',
    request:'Complete a final quality audit, repair confirmed issues, restore direct patch-history access, and provide upload-ready files.',
    changes:[
      'Aligned primary navigation with Study, Week, Calendar, Practice, Progress, and Mastery; restored Release Notes in More while retaining the About administration link.',
      'Added a lightweight Practice gateway linking to existing Lab and Assessment Centers.',
      'Fixed offline query-string navigation, made optional document caching failure-tolerant, and restricted cache cleanup to Alfred caches.',
      'Migrated legacy review statuses and flags into Study reviews while preserving outcomes, notes, scores, and Study-only review schedules.',
      'Added Review in Study links for weak competencies, with reviews stored in existing synced week records. Retrieval ratings never change assessment mastery.',
      'Repaired career pillar counts, connected status labels for accessibility, and added an explicit Save Server and Reconnect action with a server-change warning.',
      'Protected Study cloud merges against edits made during network requests and included analytics records in Study sync.',
      'Updated the Lab Manual to Revision 2.0, indexed the Academic System Guide and revised manual, and labeled the archived binder in search.',
      'Removed obsolete homepage and curriculum renderers and the retired assigned-resource renderer; Week opens at the current week by default.',
      'Preserved protocol 2, the existing Worker and D1 schema, recovery keys, event IDs, and assessment bank.'
    ]
  },
  {
    version:'v15.0', date:'September 12, 2026', title:'Academic System Consolidation', type:'Architecture & UX Release',
    request:'Remove redundant workflows that remained after newer academic tools replaced them, and give every major function one authoritative home.',
    changes:[
      'Rebuilt Home around six clear systems: Study, Week, Calendar, Practice, Progress, and Mastery; removed repeated weekly, career, and instructional sections.',
      'Made Study the daily command center and single review queue; Week Modules now own detailed weekly instruction; Calendar remains the schedule authority.',
      'Removed the manual Weekly Mastery and manual Needs Review systems from Progress while preserving existing stored records for backward compatibility.',
      'Kept Progress focused on completion, outcome checkoffs, notes, career gates, backup/import, and Cloud Sync; Standards and Analytics remain the mastery authority.',
      'Replaced the Course page’s duplicate 31-week accordion with a direct Week Modules gateway and removed the duplicate Assigned Resources catalog from the Engineering Library.',
      'Removed the obsolete Study Hall section from Student Services and routed daily work to Study.',
      'Simplified Cloud Sync setup around the Recovery Key and built in the production Worker URL; server configuration now lives under advanced Sync Settings.',
      'Moved Release Notes and Deployment Notes under About as site-administration information rather than academic destinations.',
      'Added the Revision 2.0 Academic System Guide and marked the older Binder Index workflow as archived where its instructions conflict with the live platform.',
      'Rebuilt the PWA cache as v15, added all current academic systems and the new guide, and replaced misleading homepage fallback with a dedicated offline page.',
      'Preserved assessment history, competency evidence, event IDs, calendar dates, Cloud Sync protocol 2, the current D1 schema, and existing Student Sync Keys.'
    ]
  },
  {
    version:'v14.2', date:'September 11, 2026', title:'Assessment Validity QA Patch', type:'Academic Validity Patch',
    request:'Repair the final-audit finding that standards/scope-recognition items could inflate competency scores, while preserving the new analytics dashboard and existing Cloud Sync architecture.',
    changes:[
      'Excluded standards-number and scope-recognition items from every graded lesson quiz, lab check, weekly test, mock exam, and final; those items remain orientation aids with zero mastery weight.',
      'Rebuilt uncovered CETa standards with substantive technical/concept/application questions grounded in current ETA competency wording, the supplied Associate CET Study Guide, and the validated course source stack.',
      'Rebuilt Career evidence around standard-specific technical scenarios and removed repetitive scenario-template variants from graded forms.',
      'Separated true difficulty (Foundation, Intermediate, Advanced) from cognitive skill (Recall, Understanding, Calculation, Analysis, Troubleshooting, Application).',
      'Refined cognitive-skill tagging during final QA so graded evidence actually exercises Recall and Analysis instead of leaving those dashboard dimensions empty or underrepresented.',
      'Deterministically shuffles answer choices on each assessment form to reduce answer-position cueing while keeping forms reproducible from assessment ID and attempt number.',
      'Hardened storage by retaining three compact score/timing summaries, only the newest detailed standard/question map, and permanent lifetime competency rollups in analytics shards.',
      'Changed competency scoring to weighted validated evidence. Foundation-only performance can start a standard but cannot by itself produce Proficient or Mastered status.',
      'Added a bank-breadth safeguard: repeated success on a single unique question can support Proficient evidence but cannot by itself produce a Mastered label.',
      'Added conservative legacy migration: v14.0/v14.1 scores remain in history, but older mixed-validity standard evidence is labeled Revalidation Needed until retested under v14.2.',
      'Final migration QA also preserves standard IDs from unmigrated v14.0 attempt summaries as legacy/revalidation evidence, so direct upgrades do not silently lose which competencies were previously tested.',
      'Preserved Cloud Sync protocol 2, the current Worker/D1 schema, Student Sync Key, calendar event IDs, dates/times, and iCalendar UIDs.'
    ]
  },
  {
    version:'v14.1', date:'September 11, 2026', title:'Learning Analytics & Competency Dashboard', type:'Assessment Intelligence Patch',
    request:'Preserve richer quiz/test evidence over time and turn it into a dashboard that shows competency strengths, weaknesses, retention decay, CETa readiness, career readiness, and practical lab evidence.',
    changes:[
      'Added lifetime assessment analytics inside the existing event/week JSON records without changing the Cloudflare Worker or D1 schema.',
      'Each new assessment now preserves question IDs, chosen answers, correctness, standard evidence, CETa/career track, cognitive skill, difficulty, time spent, attempt number, and compact trend history.',
      'Added permanent lifetime rollups so standard-level evidence survives after older detailed attempts roll out of the three-attempt review window.',
      'Added six cognitive-skill tags: Recall, Understanding, Calculation, Analysis, Troubleshooting, and Application.',
      'Added the Competency Dashboard with overall confidence, CETa readiness, career readiness, retention-due count, domain heatmaps, cognitive/difficulty performance, assessment-type performance, trends, strongest competencies, and a prioritized repair queue.',
      'Upgraded Standards & Retention to use lifetime evidence, evidence quantity, recency, and repeated successful retrieval when calculating confidence and mastery state.',
      'Added Virtual/Physical lab-completion evidence controls to the Lab Center and synchronized them through the existing week records.',
      'Preserved backward compatibility with v14.0 results. v14.2 later tightened validity: older scores remain visible, while mixed-validity standard evidence requires revalidation before it can raise current competency confidence.'
    ]
  },
  {
    version:'v14.0', date:'September 11, 2026', title:'Assessment, Standards & Retention System', type:'Major Academic Assessment Release',
    request:'Add quizzes and tests for every calendar lesson and lab, use the official CETa standards, study guide, and practice exam, give equal weight to career-transition readiness, store results in Cloud Sync, and track retention like a real school.',
    changes:[
      'Added 125 lesson quizzes, one for every scheduled calendar item, with 20 questions each and a balanced 10 CETa / 10 career mix.',
      'Added 24 lab knowledge checks and 31 weekly mastery tests, plus CETa Mock, Career Bridge Technical Screen, and Comprehensive Final assessments.',
      'Built a 1,047-question original bank: 599 CETa-aligned questions and 448 career-transition questions. The official ETA practice exam informed breadth and style; its questions were not copied.',
      'Mapped all 262 individual current CETa competency rows and added 78 Alfred career standards across bench safety, schematics, instrumentation, workmanship, troubleshooting, C/embedded C, STM32, serial buses, Python automation, validation, documentation, and career evidence.',
      'Added Standards & Retention with Not Introduced, Learning, Developing, Proficient, Mastered, and Retention Due states.',
      'Added school-style A–F grading, an 80% Alfred mastery target, an 85% CETa mock readiness target, and clear separation from ETA’s published 75% passing threshold.',
      'Added evidence-based spaced retrieval: misses return quickly while successful retrieval moves through approximately 7-, 21-, and 45-day intervals.',
      'Stored assessment attempts inside the existing event/week Progress records so results can use the established Cloud Sync protocol without a Worker or D1 schema migration.',
      'Added assessment links to calendar event details, Week Modules, and every Lab Center card, and indexed standards/major assessments in Search Everything.',
      'Grounded the career framework in current BLS/O*NET technician duties, ST STM32 training, NASA workmanship references, and the already validated course resource stack.'
    ]
  },
  {
    version:'v13.1', date:'September 11, 2026', title:'Hardware Access / Virtual Lab Patch', type:'Accessibility & Course-Access Patch',
    request:'Keep the physical lab option for later, but add a free virtual option so lack of money for electronics hardware never blocks course progress.',
    changes:[
      'Added a Virtual and Physical route to all 24 Engineering Lab Center labs.',
      'Mapped free browser-based tools such as Falstad CircuitJS, Wokwi, CircuitVerse, Tinkercad Circuits, and browser C environments to the labs they fit best.',
      'Kept the original physical equipment lists, procedures, and evidence requirements available for later hardware practice.',
      'Made one-path completion the default so the student does not have to perform both virtual and physical versions of the same academic lab.',
      'Added explicit physical-verification-later labeling for genuinely tactile skills such as real soldering/desoldering/crimping.',
      'Added hardware-access status language so virtual completion can keep the course moving without pretending simulation replaces every tactile skill.',
      'Updated Week Modules and the guided Study workflow to point students toward the Virtual/Physical choice instead of assuming hardware ownership.'
    ]
  },
  {
    version:'v13.0', date:'September 11, 2026', title:'Neurodivergent Study System', type:'Major Academic UX Release',
    request:'Reduce the executive-function load of studying with ADHD and autism while keeping the CETa exam and career transition as the central goal.',
    changes:[
      'Added the Student Success Center with one clear “Start Today’s Session” workflow.',
      'Added Quick, Standard, and Deep Work session modes with realistic time budgets.',
      'Added Focus Mode and Quiet Mode to reduce visual and decision clutter.',
      'Added an automatic spaced-review queue driven by Green / Yellow / Red self-checks.',
      'Stored review scheduling inside the existing Progress event records so the review queue can travel through the established Cloud Sync system.',
      'Added “I’m Stuck” recovery paths that route to simpler explanations, worked material, Search Everything, the Knowledge Base, and the Engineering Library.',
      'Added a Curiosity Parking Lot so interesting side topics can be saved without derailing the current study session.',
      'Added weekly planning summaries, Definitions of Done, task time estimates, and a clearer Required → Help → Deep Dive resource hierarchy.',
      'Added this Release Notes page so future requests, fixes, and upgrades remain documented like software releases.'
    ]
  },
  {
    version:'v12.0', date:'September 11, 2026', title:'Calendar Clarity & Academic Integration', type:'Content / Calendar Release',
    request:'Make calendar titles immediately understandable at a glance and connect the calendar to the expanded academic system.',
    changes:[
      'Rewrote all 125 calendar titles into a consistent Week • Action — Topic pattern.',
      'Preserved all 125 event IDs, dates, times, week assignments, event types, iCalendar UIDs, and alarms so Progress and Cloud Sync remained compatible.',
      'Integrated Week Modules, Lab Center, Assessment Center, Search Everything, and the Engineering Library into scheduled work.',
      'Kept the calendar focused on required work while leaving optional depth in the library.',
      'Regenerated the standalone .ics course calendar from the same source data.'
    ]
  },
  {
    version:'v11.0', date:'September 11, 2026', title:'Academic Library', type:'Library Release',
    request:'Build a real study library, not just a list of links; download eligible free PDFs and keep useful web/video links where local redistribution is not appropriate.',
    changes:[
      'Added a local-PDF library architecture with downloadable open/public-release engineering references.',
      'Added GitHub Actions automation to refresh and index approved PDF sources.',
      'Added full-text PDF indexing to Search Everything for locally stored library material.',
      'Kept copyrighted ETA/CETa and manufacturer material at the official publisher when redistribution rights were not clear.',
      'Added a flat GitHub package so library documents and support files are easier to find.',
      'Standardized downloaded reference names with the LIB- prefix.'
    ]
  },
  {
    version:'v10.0', date:'September 11, 2026', title:'Academic Content Upscale', type:'Major Content Release',
    request:'Make Alfred University feel like a real engineering program with substantially more teaching, labs, assessments, documentation, and verified video resources.',
    changes:[
      'Added dedicated modules for all 31 weeks.',
      'Added a 24-lab Engineering Lab Center.',
      'Added an Assessment Center with diagnostics and mastery gates.',
      'Added a 61-topic Engineering Knowledge Base.',
      'Expanded the verified resource layer with official, university, manufacturer, government, and carefully selected video resources.',
      'Expanded the Project Center into a multi-project portfolio pathway.',
      'Added explicit career translation between weekly skills and electronics / test / embedded roles.',
      'Expanded Search Everything beyond titles into course text, lab text, knowledge entries, resource metadata, and Alfred document content.',
      'Established CETa Core → Career Core → Deep Dive as the content priority hierarchy.'
    ]
  },
  {
    version:'v9.x', date:'September 11, 2026', title:'Cloud Sync Reliability Repairs', type:'Infrastructure Patch Series',
    request:'Fix persistent cross-device synchronization failures and verify the whole GitHub Pages → Worker → D1 chain.',
    changes:[
      'Corrected the GitHub Pages origin/CORS mismatch in the Cloudflare Worker.',
      'Redesigned D1 writes so a 125-record synchronization stays below the Workers Free-plan D1 query ceiling.',
      'Added Cloud Sync protocol version checks so mismatched frontend/backend releases fail clearly instead of silently.',
      'Improved /health so it verifies schema readiness instead of only checking whether a D1 binding exists.',
      'Added schema self-initialization and clearer backend diagnostics.',
      'Normalized pasted Worker URLs ending in /health or /sync.',
      'Preserved the existing Student Sync Key and cloud record throughout the repairs.',
      'Established the production Worker as alfred-university-sync.totallywill13.workers.dev.'
    ]
  },
  {
    version:'v8.x', date:'September 11, 2026', title:'Mobile Navigation & Cache Repair', type:'UI / PWA Patch Series',
    request:'Fix the iPhone hamburger menu becoming gray and untappable after opening.',
    changes:[
      'Fixed the mobile drawer/backdrop z-index stacking conflict that intercepted taps.',
      'Bumped the service-worker cache so iPhone Safari would receive corrected CSS instead of stale cached files.',
      'Retained keyboard focus management, Escape handling, body-scroll locking, and accessible navigation state.'
    ]
  },
  {
    version:'v7.x', date:'September 11, 2026', title:'Final Audit & Hardening', type:'Quality Patch Series',
    request:'Run a complete audit after the major site and sync additions and fix contradictions, accessibility issues, security details, and cache behavior.',
    changes:[
      'Standardized primary navigation and the More menu across the site.',
      'Corrected pages that still described the site as having no progress tracker or cloud/database component.',
      'Changed PWA caching strategy so updated HTML/CSS/JS does not remain trapped behind stale cache-first behavior.',
      'Hardened progress backups so the normal backup does not expose the Student Sync Key.',
      'Improved dialog/filter accessibility, focus handling, local-link integrity, footer consistency, and external-link protection.',
      'Added clickable “Show more” behavior in Month calendar view and improved offline asset coverage.',
      'Removed unused large legacy image assets and other deployment waste.'
    ]
  },
  {
    version:'v6.0', date:'September 11, 2026', title:'Cloud Sync', type:'Infrastructure Release',
    request:'Make Progress work across devices while keeping GitHub Pages as the static frontend.',
    changes:[
      'Added a Cloudflare Worker + D1 backend for private student progress synchronization.',
      'Added a private Student Sync Key identity model.',
      'Kept the readable key out of D1 by hashing it before database lookup.',
      'Added offline-first local saving with cloud merge when connected.',
      'Added connect, disconnect, Sync Now, health checking, and cloud-record erase controls.'
    ]
  },
  {
    version:'v5.0', date:'September 11, 2026', title:'Student Progress Portal', type:'Major Feature Release',
    request:'Add useful progress tracking without turning the site into a login-heavy LMS.',
    changes:[
      'Added event-level Not Started / In Progress / Complete / Needs Review tracking.',
      'Added outcome checklists and review flags.',
      'Added Green / Yellow / Red weekly mastery tracking.',
      'Added career-readiness gates and progress summaries.',
      'Added local progress backup/import support.',
      'Kept the system login-free and private to the student browser.'
    ]
  },
  {
    version:'v4.x', date:'September 10–11, 2026', title:'University Portal Expansion', type:'Site Expansion',
    request:'Make the site feel more like a polished institutional university environment instead of a static course homepage.',
    changes:[
      'Added Month, Week, and Agenda calendar views.',
      'Added the automatic Current Week dashboard.',
      'Organized the curriculum into six academic phases.',
      'Added the School of Engineering page, richer Project Center, campus notices, and Student Services.',
      'Added responsive/mobile polish and stronger document previews.',
      'Added PWA/offline support and 404/offline handling.'
    ]
  },
  {
    version:'v3.x', date:'September 10–11, 2026', title:'GitHub Pages Deployment', type:'Deployment Release',
    request:'Make the Alfred University site easy to publish as a static GitHub Pages website.',
    changes:[
      'Moved index.html to the repository root and converted the site to relative paths.',
      'Added .nojekyll and a no-build deployment structure.',
      'Created GitHub Pages-ready and flat-upload packages.',
      'Verified the site after proper ZIP extraction and deployment.'
    ]
  },
  {
    version:'v2.x', date:'September 2026', title:'Calendar & Course System', type:'Academic Foundation',
    request:'Turn the career-transition plan into a readable, scheduled course that tells the student exactly what to do and what should be learned afterward.',
    changes:[
      'Built the 31-week AU-ESET 301 curriculum.',
      'Built the 125-event academic calendar with resource links and After Today learning outcomes.',
      'Added searchable calendar structure, academic milestones, labs, project work, CETa review, and career gates.',
      'Created the standalone iCalendar export for Apple / Google Calendar use.'
    ]
  },
  {
    version:'v1.x', date:'September 2026', title:'Alfred University Web Foundation', type:'Initial Release',
    request:'Create a private university-style website for the embedded-systems / electrical-engineering career transition course.',
    changes:[
      'Established the Alfred University green / gold / cream institutional visual system.',
      'Created the Student Gateway, course area, Resource Library, Project 1 Center, Documents, and Student Services foundation.',
      'Added responsive static-site architecture with no login requirement.',
      'Established the School of Engineering and Applied Technology / Applied Electronics and Embedded Technology identity.'
    ]
  }
];
