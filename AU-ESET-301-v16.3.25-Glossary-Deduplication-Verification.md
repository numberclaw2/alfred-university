# AU-ESET 301 v16.3.25 — Glossary Deduplication Verification

## Trigger
Live Classroom evidence after v16.3.24 showed the same visible concept—especially **charge**—highlighted repeatedly within one Week 1 lesson stage. That contradicts the intended one-concept/one-highlight rule and is treated as direct evidence of a runtime or stale-runtime path.

## Repair
- Added a post-render DOM guardrail that groups live `.glossary-term` anchors by canonical `data-glossary` slug and unwraps every duplicate.
- Retained whole-stage candidate scoring and strengthened it to prefer direct teaching/definition sentences.
- Added a quality floor so weak or awkward occurrences are not highlighted merely because the term exists.
- Preserved preference for fuller, self-disambiguating phrases such as `electric charge` over weaker bare aliases such as `charge`.
- Added a cache-busted Classroom runtime reference (`glossary.js?v=16.3.25`) and advanced the service-worker cache namespace.

## Acceptance criteria
1. Within one rendered Classroom lesson/stage, `document.querySelectorAll('a.glossary-term[data-glossary="electric-charge"]')` must never exceed 1.
2. The same rule applies to every other canonical glossary slug.
3. When `electric charge` and `charge` are both available, the fuller phrase should win when it is at least as instructionally useful.
4. Incidental, contrast-only, or question placements may remain plain text when no strong teaching placement exists.
5. Stage changes must clear and re-evaluate glossary links without accumulating duplicates.
6. Hover/focus tooltip, Escape dismissal, and click-through to the full Glossary entry remain intact.

## Protected systems
Glossary definitions/source provenance, Vocabulary Study scheduling/state, curriculum content, assessment/mastery, labs, projects, calendar, Teaching Media, Progress, Cloud Sync, and branding are unchanged.
