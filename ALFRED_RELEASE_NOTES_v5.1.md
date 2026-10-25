# Alfred University v5.1 — Collegiate Classroom UX Release

**Base:** Verified deployed v5.0 GitHub commit `d93e5397dd944ec5f1a5a16888c97a93b6c86afa`.
**Scope:** Visual structure, responsive learning interface, accessible navigation and examination presentation; **no curriculum or examination content changes**.

## Design principle
Traditional university presentation where institutional identity matters, clean modern learning interactions in instructional pages, and restrained testing-center presentation for assessments. Preserve forest green, cream, gold, Grizzlies crest and institutional creed.

## Improvements

1. **Mobile classroom:** Compressed repetitive module metadata (the full metadata remains present on desktop and in source), reduced unused top-of-screen space, kept the course-directory control visible, and located course reading/progress panels after primary instruction. Module directory can still be opened when needed.
2. **Desktop classroom:** Adjusted column ratios to give the central lesson more width while keeping navigation and required reading references visible.
3. **Digital textbook:** More legible hierarchy, restrained content width, readable worked-example spacing, stronger technical figure treatment, clearer page completion controls, and accessible progressbar semantics.
4. **Page directory:** 44px+ navigation targets and a useful labeled page-navigation region.
5. **Testing center:** Improved contrast, answer-choice spacing, touch target size and reading measure while retaining the original question text, scoring, timers, attempt and saved-answer behavior.
6. **Focus Reading:** The existing focus mode has clearer language and continues to use the same saved preference and toggle semantics.
7. **Accessibility:** Keyboard-visible focus states, mobile touch targets, preserved reduced-motion support, labels and responsive overflow containment.
8. **Release freshness:** Bumped the service-worker cache identifier without changing offline strategy or the Cloud Sync code.

## Unchanged / explicitly preserved

- `course.js` and `course.json` are byte-for-byte identical to v5.0.
- All 30 modules, 373 teaching page IDs, questions, keyed answers, explanation content, chapter references and 234-page Study Guide unchanged.
- Saved learning record keys, exam draft schemas, Cloud Sync protocol and endpoint routines, progress import/export, manuscript references and Grizzlies brand assets unchanged.
- Current home hero, crest and institutional style preserved; this is not a rebrand.

## Installation

Extract this ZIP and upload its six root-level files directly into the **root** of your `numberclaw2/alfred-university` repository, allowing GitHub to replace same-named files. Do not upload the Study Guide PDF or other curriculum files. After GitHub Pages publishes, the v5.1 cache key prompts browsers to refresh source scripts and styles on the next service-worker update cycle.

## Limitation

The browser tests ran against the exact released files loaded into an isolated Chromium document (the environment blocks `http://localhost`, `file://` and public-site navigation). Test harness supplied localStorage and URL query semantics without calling Cloudflare. This validates layout and many interactions, but is **not** a real iPhone Safari acceptance test or an authenticated Cloud Sync test. Academic validity remains at the v5.0 documented level; no new technical certification claim is made.
