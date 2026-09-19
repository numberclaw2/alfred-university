# AU-ESET 301 — v16.3.23 Glossary UX & Academic Reference Verification

**Date:** September 18, 2026  
**Runtime:** v16.3.23  
**Glossary entries:** 282

## Purpose
This release upgrades the v16.3.22 Course Dictionary into a first-class **Course Glossary** and applies researched glossary, tooltip, information-architecture, keyboard, and accessibility practices.

## UX research used
- **Nielsen Norman Group — Tooltip Guidelines:** tooltips should be brief contextual microcontent, available by mouse and keyboard, consistently implemented, and positioned so they do not block the related content. https://www.nngroup.com/articles/tooltip-guidelines/
- **Nielsen Norman Group — User-Interface Elements: Glossary / AI Glossary:** professional glossaries support quick lookup through alphabetical scanning/jump navigation and direct access to individual definitions. https://www.nngroup.com/articles/ui-elements-glossary/ and https://www.nngroup.com/articles/artificial-intelligence-glossary/
- **Nielsen Norman Group — LATCH information organization:** complex information can be usefully organized by alphabet, time, category, and hierarchy. The AU-ESET 301 Glossary therefore supports A–Z, course-week, category, and section/view navigation. https://www.nngroup.com/articles/?page=33
- **W3C WCAG 2.2 SC 1.4.13 — Content on Hover or Focus:** hover/focus content must be dismissible, hoverable, and persistent. https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus
- **W3C WAI-ARIA Tooltip Pattern:** tooltip triggers support keyboard focus, use `role=tooltip`/`aria-describedby`, and Escape dismissal. https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
- **W3C WCAG Focus Visible:** keyboard users need a visible focus indicator. https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html
- **Atlassian Design System — Tooltip Usage:** tooltip content should be concise, non-critical, accessible from interactive elements, and should not contain interactive controls. https://atlassian.design/components/tooltip/usage

## Resulting design decisions
1. **Glossary is a first-class navigation tab.** `site.js` inserts a direct Glossary destination before More across the existing site and adds Course Glossary to the Learning & Practice footer.
2. **Multiple findability paths.** Users can search full text, browse A–Z, filter by course category, filter by Week 1–31, or switch among All Terms, Acronyms & Abbreviations, Symbols & Notation, and Sources.
3. **Search Everything integration.** Glossary entries are indexed as `Glossary Term` results and can be filtered as a result type.
4. **Concise lesson popovers; complete full entries.** Hover/focus provides a short two-level definition and pronunciation. The full Glossary entry carries aliases/notation, course-week links, related course terms, source provenance, and a copyable deep link.
5. **Accessible hover/focus behavior.** Definition popovers can be reached by keyboard, remain open while pointer moves into them, can be dismissed with Escape, retain focus on the term, use `aria-describedby`, and display a visible focus treatment.
6. **No essential learning is tooltip-only.** Every definition remains available as persistent page content in the Course Glossary; touch users can tap a term to reach it.
7. **Stable deep linking.** Each entry has a unique fragment anchor, and users can copy a direct entry URL.
8. **Source transparency.** The Sources view groups authoritative terminology families and reports how many glossary entries/categories each supports.
9. **No-result recovery.** Empty searches explain how to broaden the query and provide a Clear filters action.
10. **Reduced cognitive load.** Filters are labeled, views use familiar language, the A–Z control is horizontally scrollable on small screens, and the long glossary keeps a persistent control surface on larger screens.

## Academic glossary content model
Each full term entry can contain:
- canonical term/spelling;
- pronunciation;
- plain-English definition;
- technical definition;
- aliases/alternate writing;
- symbol, notation, or abbreviation;
- course note where available;
- course-week mapping with links back to Classroom;
- related course terms;
- authoritative source/provenance;
- stable deep link.

## Protected systems
No curriculum sequencing, lesson wording, assessment questions/scoring, mastery logic, labs, projects, calendar identities/dates, Cloud Sync protocol, progress identities, Teaching Media, or branding asset is changed by this release.
