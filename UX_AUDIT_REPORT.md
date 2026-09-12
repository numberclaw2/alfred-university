# Alfred University v15.2 UX / information-flow audit

Date: 2026-09-12  
Scope: the complete static site, including all HTML routes, shared CSS and navigation, client-side state/assessment code, academic data, service worker, documents index, and deployment/readme copy.

## Executive result

The v15 architecture is now coherent: Study owns the next action and review queue; Week owns weekly instruction; Calendar owns schedule; Practice owns labs and assessments; Progress owns completion and synced records; Mastery owns evidence, retention, and repair priorities. The remaining opportunity was presentation rather than another feature layer.

The v15.2 pass makes the interface calmer and easier to re-enter without flattening the academic system:

- the home page puts the current-week action immediately after the announcement and before the six-system map;
- every inner page gets a short linked location trail, and every main page gets a keyboard skip link;
- the 13-item More menu is grouped by task rather than shown as one undifferentiated list;
- long explanatory copy is kept to a controlled reading measure;
- selected small metadata labels are raised so they do not become a second, low-legibility interface;
- buttons and compact controls use a consistent 44px minimum height;
- reduced-motion behavior is explicit;
- the decorative paper texture is retained at lower opacity so the institutional identity remains while task content has more visual priority;
- the service-worker cache is v15.2, so the new presentation layer replaces the stale v15.1 CSS/JS on the next visit.

No academic record model, event ID, assessment evidence, Cloud Sync protocol, Worker/D1 schema, recovery-key behavior, or Release Notes placement was changed.

## Research basis

### Reading size and spacing

Rello, Pielot, and Marcos’ CHI 2016 eye-tracking study used 104 participants reading Wikipedia at 10, 12, 14, 18, 22, and 26 point sizes and several line spacings. Readability and comprehension improved as size increased, with more correct comprehension responses at 18 and 26 points; the smallest and largest tested line-spacing extremes impaired readability. The authors recommend larger defaults for text-heavy web content, while noting that typeface and column width matter. Source: [the full CHI paper](https://pielot.org/pubs/Rello2016-Fontsize.pdf) and [the ACM record](https://dl.acm.org/doi/10.1145/2858036.2858204).

Bernard, Chaparro, Mills, and Halcomb’s university-hosted readability work found that typeface, size, and format affected reading preference and performance; 12-point Arial was preferred in one comparison. Source: [Embry-Riddle’s publication record](https://portfolio.erau.edu/en/publications/comparing-the-effects-of-text-size-and-format-on-the-readability-/).

Application to Alfred: body text already starts from a readable sans-serif default and 1.62 line-height. This pass does not blindly set every label to 18px, because the CHI result is about text-heavy reading, not every compact control. Instead it enlarges instructional/card copy, raises the smallest repeated metadata, and preserves a clear display/body hierarchy.

### Layout, scan width, and cognitive load

Dyson’s screen-reading research examined physical layout variables including line length, columns, window size, and interlinear spacing. Source: [University of Reading repository record](https://centaur.reading.ac.uk/23344/) and [the Behaviour & Information Technology article DOI](https://doi.org/10.1080/01449290410001715714).

De Jong’s peer-reviewed cognitive-load review explains that working-memory capacity is limited and that instructional systems should avoid unnecessary load. Source: [University of Twente record](https://research.utwente.nl/en/publications/cognitive-load-theory-educational-research-and-instructional-desi/) and [Springer article](https://doi.org/10.1007/s11251-009-9110-0).

Application to Alfred: primary copy blocks now use a `70ch` measure instead of expanding across the full shell, and the home page’s first meaningful action is the generated current-week dashboard rather than a decorative course-packet showcase. This reduces the amount of context a returning student must hold before acting.

### Complexity should match the task

Wang et al. (Decision Support Systems, 2014) tracked 42 college students with an eye tracker across sites with different complexity and simple versus complex tasks. High complexity was especially costly for simple tasks, while medium complexity could be costly for complex tasks. The result is not “make every page empty”; it is “match complexity to the task.” Source: [Erasmus University Rotterdam’s record and abstract](https://pure.eur.nl/en/publications/an-eye-tracking-study-of-website-complexity-from-cognitive-load-p/) and [the DOI](https://doi.org/10.1016/j.dss.2014.02.007).

Application to Alfred: Home and navigation are simplified because they are orientation/launch tasks, while Study, Week, Calendar, Lab Center, Assessment Center, Standards, and Analytics retain the detail required for real work. The More menu is chunked into Course & Library, Practice & Mastery, and Documents & Support instead of hiding useful destinations or presenting them as a flat wall.

### First impression and visual hierarchy

The Google Research / University of Zurich visual-complexity work tested 119 real-site screenshots at very brief presentation times and found that visual complexity and prototypicality affect aesthetic judgments almost immediately. Lower visual complexity paired with recognizable/prototypical layouts was generally rated more appealing. Source: [Google Research](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/) and [the ACM record](https://dl.acm.org/doi/10.1145/2470654.2481281).

Application to Alfred: the Alfred green/gold/cream system, seal, serif display headings, and sans-serif body remain. The paper texture behind task content is reduced from 0.18 to 0.10 opacity. This is a restrained hierarchy change, not a rebrand: the eye still sees the institutional identity, but the identity no longer competes with the current task.

### Cognitive accessibility, orientation, and controls

The W3C’s *Making Content Usable for People with Cognitive and Learning Disabilities* guidance recommends clear headings and linked breadcrumbs to restore context, processes that do not rely on memory, logical sections, white space, and avoiding distracting content. Sources: [W3C COGA guidance on headings/breadcrumbs and memory](https://www.w3.org/TR/coga-usable/#objective-5-help-users-focus), [W3C guidance on chunking and white space](https://www.w3.org/TR/coga-usable/#use-clear-and-understandable-content), and [the white-space pattern](https://www.w3.org/TR/coga-usable/#use-white-spacing-pattern).

WCAG 2.2’s Target Size (Minimum) success criterion requires pointer targets to be at least 24 by 24 CSS pixels except for stated exceptions; the enhanced target-size guidance uses 44 by 44 CSS pixels. Source: [WCAG 2.2, Success Criterion 2.5.8](https://www.w3.org/TR/WCAG22/#target-size-minimum).

Application to Alfred: inner-page context trails and the skip link reduce reorientation and memory load; section headings and existing card grouping remain the primary information architecture; core buttons and compact controls use a 44px minimum height; visible focus treatment and reduced-motion support remain in the shared stylesheet.

## Site audit and resulting changes

| Audit question | Finding in the v15.1 source | v15.2 decision |
|---|---|---|
| What does a returning student see first? | Home presented a branded showcase before the generated current-week action. | Move Current Week Dashboard directly below the announcement. Keep the showcase and six-system map, but make the next action visible sooner. |
| Can a student tell where they are? | Inner pages had no consistent location trail. | Inject a linked `Home / parent / current page` trail into inner heroes. Home, offline, and 404 remain uncluttered. |
| Can a keyboard user bypass repeated chrome? | Main content had no shared skip link. | Add a focus-visible “Skip to main content” link and a stable `#main-content` target. |
| Is the secondary navigation scannable? | More contained 13 useful destinations in one flat list. | Add three non-interactive task-group labels without changing any destination URLs. |
| Are text blocks easy to scan? | Several long hero/section paragraphs could span most of the 1180px shell. | Apply a 70ch reading measure to long explanatory blocks and slightly more generous card-copy sizing. |
| Are metadata labels readable? | Some repeated labels were 0.66–0.72rem and acted as important state cues. | Raise selected status, service, document, sync, calendar-dashboard, analytics, and resource metadata to approximately 0.72–0.80rem. Decorative numerals use a darker gold. |
| Is the page too busy? | The brand texture and dense academic pages created avoidable background competition. | Lower texture opacity; retain cards, section bands, and detailed academic pages where task complexity warrants them. Quiet Mode remains available for an even calmer view. |
| Are controls comfortable to operate? | Some compact actions were visually smaller than the preferred touch rhythm. | Use a 44px minimum height for buttons and generic controls; the WCAG 24px minimum remains the floor, not the design target. |
| Does motion respect user settings? | Shared transitions existed, but no explicit global reduced-motion rule was present. | Add `prefers-reduced-motion: reduce` behavior that removes scroll animation and nearly all transitions/animations. |
| Are visible counts and descriptions current? | Most counts were generated from data, but one README inventory still said 96 deep-study resources. | Verify against the current data files: 31 weeks, 125 events, 48 assigned resources, 99 deep resources, 24 labs, 61 knowledge entries, 262 CETa standards, 78 career standards, and 1,048 question records. Update the README inventory to 99. Historical release/validation notes remain labeled as historical records. |

## Accuracy and architecture checks

The current source data was loaded and counted directly rather than trusting old copy:

- 31 week modules and 125 scheduled events;
- 48 assigned course resources and 99 deep-study resources;
- 24 labs and 61 knowledge-base concepts;
- 262 CETa standards and 78 Alfred career standards;
- 1,048 assessment-bank questions, 125 lesson quizzes, 24 lab quizzes, and 31 weekly tests;
- seven indexed local documents in the academic content manifest.

The six-system homepage language matches the current ownership model. Search, Week, Study, Resources, Standards, Assessment Center, Lab Center, Progress, and Analytics are not collapsed into a single page because their task complexity and evidence responsibilities differ. Release Notes remains in the primary More menu and under About, as requested.

The v15.2 change is presentation-only at the data boundary: it does not rename event IDs, change dates, alter assessment scoring, move Cloud Sync fields, or change the Worker endpoint. The service-worker cache name advances to `alfred-u-v15-2` so the new shared layer can be fetched after deployment.

## QA performed

Static and data checks for this package include:

1. JavaScript syntax checks for every root `*.js` file.
2. HTML parsing checks for local references, duplicate IDs, and one primary `h1` per routed page.
3. Data-shape checks for the counts above, including assessment bank totals and calendar/week totals.
4. Service-worker checks that every listed local cache asset exists and that cache cleanup is limited to Alfred caches.
5. UX-hook checks for the moved current-week section, skip-link/context-trail code, grouped navigation, reduced-motion CSS, v15.2 cache, release entry, and README entry.
6. ZIP manifest checks after packaging the cumulative replacement set.

A full browser screenshot pass was not claimed: the execution environment did not contain a usable Chromium binary after the earlier browser download attempt timed out. The package therefore reports static/data QA as the verified result. Before treating the change as a human-subject usability result, do one live visual pass at desktop and mobile widths and test the main flows with at least one ADHD/autistic learner and one unfamiliar user. Research can guide the hierarchy; only observation can validate whether Alfred’s exact content is effortless to use.

## Recommended next validation

Use five short tasks rather than a broad opinion survey:

1. “You have ten minutes. What should you do next?” — start from Home.
2. “Find this week’s lab and its required material.” — use Week and Lab Center.
3. “Show me what is due for retention.” — use Mastery/Standards.
4. “Take a lesson check and find the repair action.” — use Assessment Center and Study.
5. “Turn on the calmer view and return to the same page tomorrow.” — test Quiet Mode, context trail, and persistence.

Measure first-click success, time to first correct action, backtracking, and the student’s ability to explain what each major destination owns. Those measures directly test flow and information scent rather than asking whether the colors feel attractive.

## Sources

- [Rello, Pielot & Marcos, “Make It Big!” (CHI 2016 full paper)](https://pielot.org/pubs/Rello2016-Fontsize.pdf)
- [ACM record for “Make It Big!”](https://dl.acm.org/doi/10.1145/2858036.2858204)
- [Bernard et al., readability/typeface study — Embry-Riddle repository](https://portfolio.erau.edu/en/publications/comparing-the-effects-of-text-size-and-format-on-the-readability-/)
- [Dyson, “How physical text layout affects reading from screen” — University of Reading](https://centaur.reading.ac.uk/23344/)
- [Dyson article DOI](https://doi.org/10.1080/01449290410001715714)
- [de Jong, cognitive-load review — University of Twente](https://research.utwente.nl/en/publications/cognitive-load-theory-educational-research-and-instructional-desi/)
- [de Jong article DOI — Springer](https://doi.org/10.1007/s11251-009-9110-0)
- [Wang et al., website complexity eye-tracking study — Erasmus University Rotterdam](https://pure.eur.nl/en/publications/an-eye-tracking-study-of-website-complexity-from-cognitive-load-p/)
- [Wang et al. article DOI](https://doi.org/10.1016/j.dss.2014.02.007)
- [Google Research / University of Zurich visual complexity and prototypicality study](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/)
- [ACM record for the visual complexity study](https://dl.acm.org/doi/10.1145/2470654.2481281)
- [W3C cognitive and learning accessibility guidance](https://www.w3.org/TR/coga-usable/)
- [WCAG 2.2 Target Size (Minimum)](https://www.w3.org/TR/WCAG22/#target-size-minimum)

