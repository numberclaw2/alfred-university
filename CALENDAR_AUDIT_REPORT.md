# Alfred University Calendar Readability Audit — v15.3

## Scope

This audit examined the AU-ESET 301 calendar as a dated academic record and as a daily learning interface. The goal was not to redesign the course or reduce its academic depth. The goal was to make the next action, the finish line, and the optional reference material visually and linguistically distinct.

The audit preserved the canonical calendar data: 125 event IDs, dates, times, resources, labs, milestones, mastery gates, Project 1 work, career work, and required outcomes. The change is presentation-first. The source record remains available in every event under **Full event notes**.

## Evidence from the current calendar

The repository contains:

- 125 scheduled events across 31 weeks.
- 48 assigned web resources, plus the broader indexed resource library.
- A structured `outcomes` array on every event.
- Long descriptions ranging from approximately 1,900 to 4,900 characters; the median description is approximately 3,500 characters.
- Repeated boilerplate on all 125 events: Study Path, Resource Priority, Reference Hub, After Today outcomes, Coverage Audit, and Simple Completion Rule.
- A Career Connection line on 115 events and System Rules on 91 events.
- A Week Focus line on 107 events.

The raw record is valuable, but the previous modal treated every layer as equally important. A learner opening one item encountered navigation links, career context, resource policy, session instructions, mastery rules, book assignments, outcomes, coverage language, and completion language in one continuous block. That is the main source of the “busy” feeling—not a lack of detail, but a lack of priority.

## Research basis

### Cognitive load and task-matched complexity

Ton de Jong’s review of cognitive load theory describes working-memory capacity as limited and recommends instructional systems that avoid unnecessary overload. That supports showing only the information needed for the immediate calendar task first, while keeping deeper material available on demand. [de Jong, University of Twente, 2010](https://research.utwente.nl/en/publications/cognitive-load-theory-educational-research-and-instructional-desi/)

Wang and colleagues used eye tracking with 42 college students and found that website complexity interacts with task complexity: high complexity was especially costly for simple tasks, while medium complexity could be costly during complex tasks. The design implication is not “make everything minimal”; it is “match visible complexity to the user’s current task.” [Wang et al., *Decision Support Systems*, 2014](https://pure.eur.nl/en/publications/an-eye-tracking-study-of-website-complexity-from-cognitive-load-p/)

### Headings, grouping, and white space

The W3C cognitive accessibility guidance recommends clear headings, familiar hierarchy, logical grouping, visual separation, and reduced distraction. It specifically warns against dense text with little white space and recommends making important tasks easy to find near the top of the content. [W3C, *Making Content Usable for People with Cognitive and Learning Disabilities*](https://www.w3.org/TR/coga-usable/)

### Typography and reading comfort

Rello, Pielot, and Marcos ran an eye-tracking study with 104 participants and found that readability and comprehension improved as font size increased up to the tested 18–22 point range; very tight or very loose line spacing impaired readability. This audit therefore keeps the calendar’s ordinary controls compact, but gives the readable event body a comfortable size and line height rather than shrinking it to fit more copy on screen. [Rello, Pielot & Marcos, CHI 2016](https://pielot.org/pubs/Rello2016-Fontsize.pdf)

### First-impression complexity

Tuch and colleagues tested 119 website screenshots at very short exposure times and found that visual complexity affected aesthetic judgments within the first 50 milliseconds; low visual complexity and high prototypicality were generally rated most appealing. The calendar response is restrained hierarchy and spacing, not decorative reduction of the academic content. [Tuch et al., *International Journal of Human-Computer Studies*, 2012](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/)

### Plain-language and registrar patterns

The U.S. Digital.gov plain-language guidance frames clear content as audience-specific, understandable, and testable. GOV.UK’s content-design guidance likewise treats clear organization and user needs as part of content design, not a cosmetic afterthought. [Digital.gov Plain Language Guide](https://digital.gov/guides/plain-language) · [GOV.UK Writing Standards](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/)

Current university registrar calendars provide a useful structural comparison. Cornell groups events by month and presents each item as a date/time plus a concise event label. Harvard separates the academic year into expandable semester sections and uses compact event rows with dates and deadlines. Yale places the immediate registration event first and then provides linked calendar and academic services. [Cornell Registrar Academic Calendar](https://registrar.cornell.edu/calendars-exams/academic-calendar) · [Harvard FAS Calendars](https://registrar.fas.harvard.edu/calendars) · [Yale University Registrar](https://registrar.yale.edu/)

## Decisions applied to Alfred’s calendar

### 1. Make the first read answer three questions

Every event now opens in this order:

1. **What is this?** Date, time, week, activity, and topic.
2. **What do I do now?** The event’s Today’s work block.
3. **How do I know I am done?** The required outcomes, phrased as explain-or-demonstrate checks.

This is a task-first hierarchy. It does not remove the mastery gate, career connection, or reference material; it moves them below the immediate action and outcome.

### 2. Give Week Focus its own visual unit

Dense lines such as:

> WEEK 1 FOCUS: START FROM ZERO: Safety + What Electricity Is + Voltage / Current / Resistance + Ohm / Watt + SI Prefixes

are now presented as:

- **Week 1 focus**
- **START FROM ZERO**
- Safety · What Electricity Is · Voltage / Current / Resistance · Ohm / Watt · SI Prefixes

The source wording remains available in the full event notes. The visible card gives the eye a short label, a focus title, and a topic line instead of one all-caps sentence with multiple separators.

### 3. Put reference material behind progressive disclosure

Study-path links, resource links, book references, and the complete source description now sit inside expandable sections. They remain one click away, but no longer compete with Today’s work and outcomes on first open.

The full source note is intentionally preserved so this is not a destructive content rewrite. It is a reading-order change.

### 4. Shorten calendar labels without changing event identity

Month and Week views now use a compact `activity · topic` label. Agenda view separates the week/activity kicker from the topic heading. Accessible labels and the modal heading retain the full source summary so the shorter visual label does not erase context.

### 5. Tighten repeated instructional copy in the visible layer

The visible completion check is now one short paragraph:

> Complete today’s work, then test each outcome. If one is not yet explainable or demonstrable, carry that single concept into the next review block. No spreadsheet logging is required.

This preserves the current no-spreadsheet rule and the explain-or-demonstrate standard while avoiding a second long repetition of the Coverage Audit and Simple Completion Rule. The original wording remains in Full event notes.

### 6. Improve interaction and orientation cues

- Added a short “How to use this calendar” note below the filters.
- Added `aria-live` to the period label so month/week changes are announced.
- Added pressed-state semantics to Month, Week, and Agenda controls.
- Changed Week event tiles from clickable `div` elements to keyboard-friendly buttons.
- Added descriptive labels to Week and Agenda event controls.
- Kept native expandable `details` controls for references and full notes.
- Kept the existing 44px control rhythm, context trail, skip link, and reduced-motion support.

## Files changed

- `calendar.html` — concise orientation copy, calendar usage cue, view semantics, and clearer download label.
- `site.js` — event parsing, task-first modal hierarchy, display-only copy repair, concise labels, reference disclosure, and accessible controls.
- `styles.css` — focus cards, readable event body, spacing, disclosure styling, and Week/Agenda label hierarchy.
- `service-worker.js` — cache bumped to `alfred-u-v15-3`.
- `release-notes.js` — added the v15.3 calendar readability entry.

No event IDs, dates, times, resource URLs, outcome arrays, Cloud Sync records, or Release Notes placement were changed.

## QA and limitation

The regression pass checks JavaScript syntax, HTML references, primary navigation, data counts, event completeness, service-worker asset references, calendar hooks, and ZIP byte integrity. A browser screenshot pass was not claimed in this environment because the available Playwright browser binary was not installed. The package is therefore ready for upload, with one practical follow-up: after upload, open one long Week 1 event and one long Project 1 event in Month, Week, and Agenda views to confirm the visual proportions on the target device.

## Sources

1. [W3C — Making Content Usable for People with Cognitive and Learning Disabilities](https://www.w3.org/TR/coga-usable/)
2. [Ton de Jong — Cognitive load theory, educational research, and instructional design](https://research.utwente.nl/en/publications/cognitive-load-theory-educational-research-and-instructional-desi/)
3. [QZ Wang et al. — An Eye-Tracking Study of Website Complexity from Cognitive Load Perspective](https://pure.eur.nl/en/publications/an-eye-tracking-study-of-website-complexity-from-cognitive-load-p/)
4. [Luz Rello, Martin Pielot & Mari-Carmen Marcos — Make It Big!](https://pielot.org/pubs/Rello2016-Fontsize.pdf)
5. [Alexandre N. Tuch et al. — The Role of Visual Complexity and Prototypicality](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/)
6. [Digital.gov — Plain Language Guide](https://digital.gov/guides/plain-language)
7. [GOV.UK — Writing to GOV.UK Standards](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/)
8. [Cornell University Registrar — Academic Calendar](https://registrar.cornell.edu/calendars-exams/academic-calendar)
9. [Harvard FAS Registrar — Calendars](https://registrar.fas.harvard.edu/calendars)
10. [Yale University Registrar — Calendars and Registration](https://registrar.yale.edu/)
