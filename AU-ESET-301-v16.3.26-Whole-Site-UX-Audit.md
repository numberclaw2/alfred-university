# AU-ESET 301 v16.3.26 — Whole-Site UX Audit & Design Rationale

**Audit date:** September 18, 2026  
**Production baseline audited:** AU-ESET 301 runtime v16.3.25  
**Baseline GitHub commit:** `8797cfd23a503e8d642c6b736c575bf845847b04`  
**Scope:** 26 HTML pages, shared navigation/runtime, five CSS layers, page-specific task flows, desktop/mobile interaction behavior, accessibility, information architecture, search/findability, visual hierarchy, and learner continuity.

## Executive conclusion

The v16.3.25 site already had a strong foundation. It was not appropriate to replace the existing task-oriented information architecture or flatten the specialized Study, Classroom, Calendar, Practice, Progress, Mastery, Glossary, Lab, and Assessment workflows into one generic template.

The highest-value UX gaps were instead:

1. **Search was too hidden for a large course system.** Search Everything existed, but it lived under More instead of being continuously discoverable.
2. **Returning to learning required navigation recall.** Reference and administrative pages did not offer a persistent “resume the work” path.
3. **Home had two strong entry actions without a sufficiently clear first choice.** For an asynchronous course, “what should I do now?” should be the dominant action.
4. **Long reference pages required excessive scrolling and memory.** Several pages contained many H2 sections but no local table of contents.
5. **Study had become a long, capable workspace without fast internal navigation.** Review Queue, Vocabulary, weekly planning, and the primary study session were all legitimate destinations.
6. **Mobile affordances could be more explicit.** A hamburger-only control depends more heavily on icon recognition than a visible “Menu” label.
7. **Interaction polish was not fully uniform.** Focus visibility, large hit targets, external-link signaling, current nested navigation state, and long-page recovery could be made more consistent.

v16.3.26 addresses these issues through a shared UX layer without changing the course’s educational or evidence systems.

---

## Research basis

The design decisions were informed by established usability/accessibility guidance rather than engagement gimmicks or dark patterns.

### Scanning and visual hierarchy

- Nielsen Norman Group, **F-Shaped Pattern of Reading on the Web**: users frequently scan rather than read linearly, especially when structure does not guide the eye. Clear headings, hierarchy, and concise navigation improve scanning.  
  https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
- Nielsen Norman Group, **Text Scanning Patterns** and **How Users Read on the Web**: content should support scanning with meaningful headings, grouping, and visible information scent.  
  https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/  
  https://www.nngroup.com/articles/how-users-read-on-the-web/

### Progressive disclosure and recognition

- Nielsen Norman Group, **Progressive Disclosure**: prioritize common/important actions and defer secondary complexity instead of presenting every option with equal prominence.  
  https://www.nngroup.com/articles/progressive-disclosure/
- Nielsen Norman Group, **Recognition Rather Than Recall**: interfaces should expose destinations and state so users do not need to remember where functionality lives.  
  https://www.nngroup.com/articles/recognition-and-recall/

### Navigation, information scent, and search

- Nielsen Norman Group, **Information Scent**: labels and destinations should clearly predict what users will find after clicking.  
  https://www.nngroup.com/articles/information-scent/
- Nielsen Norman Group guidance on site search: visible search complements navigation for large information spaces and should follow familiar placement conventions.  
  https://www.nngroup.com/articles/search-visible-and-simple/
- U.S. Web Design System, **Header**: important sections should be easy to access, labels should stay concise, and navigation should preserve orientation.  
  https://designsystem.digital.gov/components/header/

### Buttons, icons, and primary actions

- U.S. Web Design System, **Button**: emphasize the primary action, keep action labels concise, and use buttons for actions rather than treating every link as a button.  
  https://designsystem.digital.gov/components/button/
- Nielsen Norman Group, **Icon Usability**: icons work best when they reinforce clear labels instead of replacing words except for highly conventional symbols.  
  https://www.nngroup.com/articles/icon-usability/
- Nielsen Norman Group, **Similarity Principle in Visual Design**: the main CTA should be visually distinct from secondary actions instead of making every option equally prominent.  
  https://www.nngroup.com/articles/similarity-gestalt/

### Long pages and in-page navigation

- Nielsen Norman Group, **In-Page Links / Tables of Contents**: long pages benefit from descriptive jump navigation when users need to locate sections rather than read everything sequentially.  
  https://www.nngroup.com/articles/in-page-links/

### Accessibility, targets, focus, and motion

- W3C, **WCAG 2.2**: target size, visible keyboard focus, predictable interaction, and reduced-motion considerations informed the control treatment.  
  https://www.w3.org/TR/WCAG22/
- U.S. Web Design System typography guidance: readable body sizing, line height, and controlled reading measure remain preferable to dense full-width prose.  
  https://designsystem.digital.gov/components/typography/

### Engagement philosophy used for Alfred

The audit deliberately rejects artificial “engagement” tactics such as forced streaks, notification pressure, excessive animation, fake urgency, or reward loops. For this course, durable engagement should come from:

- knowing **what to do next**,
- being able to **resume quickly**,
- seeing **progress and system status**,
- finding information without breaking study flow,
- reducing navigation memory load,
- keeping the interface calm enough that the instructional content remains primary.

---

## What was already strong and was preserved

The existing site already contained several good UX systems that should not be replaced:

- task-oriented global navigation: **Home / Study / Learn / Calendar / Practice / Progress / Mastery / Glossary**;
- grouped **More** menu rather than exposing every secondary page at the top level;
- runtime **Skip to main content** link;
- breadcrumbs/context trails on secondary pages;
- responsive navigation with backdrop and focus handling;
- visible `:focus-visible` treatment;
- reduced-motion support;
- Quiet Mode and Focus Mode in Study;
- distinct owners for Study, Classroom, Practice, Progress, Mastery, Labs, and Assessments;
- mobile-responsive grids and forms;
- Search Everything as a genuine cross-course search engine;
- the newly completed Glossary + Vocabulary Study system;
- explicit course/progress state instead of manipulative streak mechanics.

The v16.3.26 strategy therefore **adds a UX coordination layer** rather than replacing these systems.

---

# Findings and implemented changes

## 1. Global search discoverability — HIGH priority

### Finding
Search Everything was capable but nested under More. On a 31-week course containing lessons, assessments, projects, standards, resources, glossary terms, and documents, users should not have to remember that Search is a secondary navigation item.

### Change
- Desktop: visible whole-course search field in the upper-right header utility area.
- Compact/mobile: labeled Search control beside the Menu control.
- Mobile Search opens an accessible dialog with focus management and Escape dismissal.
- Optional `Ctrl/Cmd + K` and `/` shortcuts.
- Search continues to route into the existing Search Everything engine; no duplicate search index was created.

### Why this location
Upper-right/global-header search follows a familiar web convention and stays available without competing with the course’s primary task navigation.

---

## 2. Persistent task continuity — HIGH priority

### Finding
Reference pages make it easy to branch away from the active learning workflow. Returning to the current week depended on remembering whether Study or Learn was the right owner.

### Change
Desktop header now includes **Continue Week XX**, routed to the current Study week.

### Rationale
This is a course-specific equivalent of a persistent “resume” action: it reduces recovery cost after checking a glossary entry, document, project requirement, progress record, resource, or calendar item.

The control intentionally disappears at compact widths so mobile header space remains calm.

---

## 3. Home action hierarchy — HIGH priority

### Finding
Home offered both Classroom and Study strongly. The site’s accepted architecture, however, says Study owns prioritization and the “what should I do now?” decision.

### Change
- **Start today’s study** is now the first/distinctive Home hero CTA.
- **Open classroom** remains immediately available as the secondary action.

### Rationale
The most frequent next action receives the strongest visual treatment. This preserves user choice without making two actions look equally urgent.

---

## 4. Long-page orientation — HIGH priority on reference pages

### Finding
Course Overview, Projects, Mastery, Assessments, Standards, Resources, About, Deployment, and other long information surfaces contain several meaningful sections. Reaching a later section required scrolling and remembering page structure.

### Change
A generated **On this page** navigation appears only when a reference page contains at least three meaningful visible H2 sections.

It provides:
- descriptive link labels;
- stable generated section IDs where needed;
- URL hashes compatible with Back history;
- keyboard focus on arrival;
- reduced-motion-aware smooth scrolling.

### Deliberate exclusions
The system does **not** add a generic table of contents to Study, Learn, Calendar, Practice, Progress, Glossary, Search, Quiz, or retired compatibility routes because those pages already have task-specific workflow controls. Adding a second navigation model would increase competition and clutter.

---

## 5. Study internal navigation — HIGH priority

### Finding
Study now contains several valuable systems: recommended study session, review queue, vocabulary study, parking lot, weekly planning, and study principles. The page is appropriately rich, but reaching a known tool required scrolling.

### Change
Added a small Study shortcut row:
- Today’s plan
- Reviews
- Vocabulary
- Week plan

### Rationale
This uses recognition instead of recall and preserves the existing one-next-action model rather than adding a second competing dashboard.

---

## 6. Mobile menu/search affordance — MEDIUM/HIGH priority

### Finding
The hamburger symbol is familiar but still asks the user to recognize an icon. Search also lacked a persistent compact entry point.

### Change
- Mobile navigation trigger now displays **☰ Menu**.
- Search remains a separate adjacent button because navigation and search are different user intents.
- Search dialog quick destinations pair icons **with text labels**.

### Rationale
Icons reinforce labels instead of becoming the only carrier of meaning.

---

## 7. Interaction target and focus consistency — HIGH accessibility priority

### Finding
The site already had keyboard focus styling, but target sizes and focus contrast were not fully uniform across newly accumulated controls.

### Change
- Primary button/nav/form actions receive comfortable ~44px targets.
- Search/form inputs use 16px text at compact sizes to prevent mobile browser zoom behavior.
- Focus treatment uses a two-tone high-visibility ring that remains visible against both light and dark surfaces.
- Search dialog traps focus while open and restores focus to its trigger after dismissal.
- Reduced-motion preferences continue to disable nonessential motion.

### Note
The implementation does **not** indiscriminately enlarge every small specialist control (for example, dense A–Z glossary filters), because forcing every micro-control to 44px would itself damage information density. The improvement targets primary interaction controls while preserving the glossary’s specialized compact browsing model.

---

## 8. Nested navigation state — MEDIUM priority

### Finding
When a user is on a page inside More, the nested item is active but the top-level More control did not strongly communicate that the current location lives there.

### Change
More receives a current-section treatment when its menu contains the active page and an assistive label identifies the current nested section.

---

## 9. Long-page recovery — MEDIUM priority

### Finding
Very long reference/data pages can leave the user far from global navigation.

### Change
A conditional **Back to top** control appears only after substantial scrolling on pages where it is useful.

### Deliberate exclusions
It is not added to Study, Learn, Quiz, Calendar, Offline, or 404 surfaces, where a floating navigation control could compete with active task controls.

---

## 10. Link and card affordance — MEDIUM priority

### Finding
Some surfaces are clearly clickable while others rely on text/link styling alone. External links also differ in whether they visibly signal leaving the site.

### Change
- Actionable cards receive consistent hover/focus treatment.
- New-tab external links gain a small `↗` indicator when one is not already present.
- Existing text labels remain primary; icons and marks are supplemental.

---

# Page-by-page audit disposition

| Surface | UX disposition in v16.3.26 |
|---|---|
| **Home** | Rebalanced hero CTAs so Study is the first primary action; global Search + Continue Week added; existing portal cards retained. |
| **Study** | Added section shortcuts; preserved Quiet/Focus modes, recommended session, review queue, Vocabulary Study, weekly plan, and recovery flow. No generic ToC. |
| **Learn / Classroom** | Preserved sequential lesson/stage workflow and left-side week/stage navigation. Only global search/task continuity layer added. No generic ToC or extra floating controls. |
| **Calendar** | Preserved calendar period/filter/action model. Global search/task continuity added; no generic ToC/back-to-top competing with calendar controls. |
| **Practice** | Preserved priority ladder and repair ownership. Global search/task continuity only; no generic ToC. |
| **Progress** | Preserved record/sync/evidence controls. Global utilities and conditional long-page recovery improve orientation without changing data semantics. |
| **Mastery / Analytics** | Long multi-section evidence page receives On-this-page navigation and global utilities. Mastery calculations unchanged. |
| **Glossary** | Existing A–Z/search/category/week architecture retained. Global search complements rather than duplicates glossary-local search. No generic ToC. |
| **Lab Center** | Existing lab/filter workflow retained; only two major H2 regions, so no extra ToC. |
| **Assessment Center** | Long assessment/reference surface receives On-this-page navigation; assessment gates/scoring unchanged. |
| **Quiz / Assessment runner** | Kept deliberately task-focused; no ToC/back-to-top. Global shell remains secondary to the assessment. |
| **Search Everything** | Search engine remains canonical. Header/search sheet route into it instead of creating competing logic. |
| **Course Overview** | Long reference page receives On-this-page navigation plus persistent return-to-study/search. |
| **Engineering Library / Resources** | Long discovery surface receives On-this-page navigation; existing resource filters stay primary within the page. |
| **Projects** | Long requirements/milestone page receives On-this-page navigation; project calendar/manual actions retained. |
| **Standards & Retention** | Long standards reference receives On-this-page navigation; filters and evidence model unchanged. |
| **Documents** | Existing document-card grid is already highly scannable and has only one top-level content H2; no unnecessary ToC added. |
| **About** | Multi-section institutional/reference page receives On-this-page navigation. |
| **Deployment** | Multi-section operational reference receives On-this-page navigation. |
| **Release Notes** | Existing search/history workflow preserved; only two major H2 regions, so no generic ToC. |
| **Week Overview** | Retired compatibility route remains a compatibility route; no new workflow is introduced. |
| **Engineering (compatibility)** | Retired compatibility route stays light; no duplicate navigation system added. |
| **Knowledge Base (compatibility)** | Retired compatibility route stays owned by Search; no duplicate reference UI added. |
| **Student Services (compatibility)** | Retired compatibility route remains a routing surface; no new ownership added. |
| **Offline** | Intentionally simple; no search/continuity features that would imply network availability. |
| **404** | Intentionally minimal recovery page. It does not load the shared site runtime and is left unchanged. |

---

# What this update deliberately does not do

A “high caliber” UX is not the same as adding more interface. v16.3.26 specifically avoids:

- adding a second mobile bottom navigation bar on top of an already familiar menu/header system;
- putting icons on every navigation label;
- turning every link into a button;
- adding autoplay, pulsing CTAs, animated counters, forced streaks, fake urgency, or notification pressure;
- rearranging Classroom stages, Study logic, assessment gates, Progress ownership, or Mastery semantics for aesthetic reasons;
- adding a table of contents to task screens that already have a stronger workflow model;
- adding new terminology, curriculum, videos, labs, assessments, or career content under the guise of UX.

---

# Technical architecture

## New shared files

- `ux-system.js` — shared interaction/orientation enhancements.
- `ux-system.css` — shared visual/accessibility layer.

## Loader

The existing `site.js` remains the shared page runtime and loads the new UX layer. This means the update reaches standard pages that already participate in the Alfred navigation system without rewriting 25 HTML files independently.

The 404 page remains intentionally standalone/minimal.

## Offline behavior

`ux-system.js`, `ux-system.css`, and this audit record are included in the v16.3.26 service-worker cache. The new loader references the exact cached filenames without query parameters so the UX layer remains available in offline/recovery scenarios after installation.

---

# Validation performed before packaging

- Exact current production `site.js` baseline verified by Git blob SHA: `193cb491b0b318a1f907af7f4759f7235704ebc9` before appending the v16.3.26 loader.
- JavaScript syntax checks passed for `site.js`, `ux-system.js`, `service-worker.js`, and `release-notes-current.js`.
- `build-info.json` parsed successfully and reports runtime patch 16.3.26.
- Headless Chromium/Playwright representative interaction harness passed for:
  - existing runtime skip-link preservation;
  - desktop header search insertion;
  - Continue Week insertion;
  - Home primary CTA reordering;
  - Ctrl+K search focus;
  - external-link indicator;
  - mobile Search visibility and minimum target size;
  - mobile Search dialog open/focus/Escape close;
  - focus restoration to the Search trigger;
  - long-page On-this-page generation;
  - More current-section state;
  - Study shortcut generation;
  - correct suppression of generic ToC on Study;
  - Back-to-top presence on eligible reference surfaces and suppression on Study;
  - Offline suppression of global Search and Back-to-top.
- Protected course/evidence systems are absent from the upload package.

## Post-upload acceptance still required

After upload, verify the exact GitHub commit and GitHub Pages deployment, then visually inspect the rendered production site at desktop and mobile widths. Browser-harness QA verifies the interaction layer itself; production acceptance should additionally confirm the actual live page compositions, fonts, real content lengths, and service-worker refresh behavior.

---

# Protected systems unchanged

v16.3.26 does **not** change:

- 62 lesson source content or sequencing;
- glossary definitions or the 282-term glossary dataset;
- Vocabulary Study scheduling/data;
- Teaching Media assignments/content;
- calendar event IDs, dates, UIDs, or schedule logic;
- assessments, scoring, question banks, or readiness gates;
- mastery formulas/evidence rules;
- labs or project requirements;
- Progress record identities;
- Cloud Sync protocol 2;
- branding artwork/assets;
- course release 16.3 or evidence revision 16.2.

The release is a presentation, accessibility, information-architecture, and interaction-quality update only.
