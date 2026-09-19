# POST-UPDATE QA — v16.3.23 Course Glossary UX

## Static verification
- Glossary entries: **282**
- Unique entry slugs: **282**
- Course categories: **15**
- Authoritative source families: **11**
- Uppercase acronym-style canonical terms: **68**
- Entries with symbol/notation/abbreviation metadata: **133**
- Primary-navigation Glossary insertion present in site.js.
- Course Glossary footer insertion present in site.js.
- Search Everything loads glossary-data.js and indexes Glossary Term results.
- Glossary supports All Terms, Acronyms & Abbreviations, Symbols & Notation, and Sources views.
- Glossary supports search, category, week, and A–Z controls plus Clear filters.
- Definition popover supports mouse hover, keyboard focus, Escape dismissal, hoverable/persistent pointer behavior, aria-describedby, and visible focus.
- Full entries retain persistent definitions, source links, related terms, Classroom week links, and copyable deep links.
- build-info.json reports runtimePatch 16.3.23.
- Service worker namespace advanced to v16.3.23.
- Release Notes contain v16.3.22 and v16.3.23 manifests so this cumulative package can be uploaded even if v16.3.22 was not separately deployed.

## Browser acceptance checks after upload
1. Confirm **Glossary** appears as a direct primary-navigation tab on Home, Classroom, Search, Progress, and at least one More-menu page.
2. Open Glossary and test All Terms, Acronyms & Abbreviations, Symbols & Notation, and Sources.
3. Search `MOSFET`, filter Week 18, filter a category, and test A–Z; then Clear filters.
4. Open Classroom Week 1 and hover/focus a marked term; verify concise definition, pronunciation, and technical meaning.
5. Move the pointer from the term into the popover; it must remain open. Press Escape; it must dismiss without moving focus.
6. Click/tap a term and verify its exact glossary fragment opens.
7. Use Copy entry link and open the copied URL in a new tab.
8. In Search Everything, search `UART`, select Glossary terms, and confirm a direct glossary result.
9. Verify mobile navigation, horizontally scrollable A–Z controls, and tap-to-open lesson terms.
10. Verify build-info.json reports v16.3.23 and stale v16.3.22/older cache does not persist.

## Protected systems
Curriculum, lesson source content, assessments/scoring, mastery, labs, projects, calendar, progress identities, Cloud Sync protocol, Teaching Media, and branding remain unchanged.
