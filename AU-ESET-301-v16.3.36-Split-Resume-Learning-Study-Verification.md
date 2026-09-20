# AU-ESET 301 v16.3.36 — Split Resume Learning / Resume Study Verification

**Date:** September 20, 2026  
**Release:** v16.3.36 — Independent Learning and Study Resume Points  
**Baseline:** deployed v16.3.35 (`8ab32fdb7c25eab0f292e8fdf453868de22bbfc5`)

## Requested behavior

Replace the shared/priority-based return-to-work button with two persistent destinations wherever that control was surfaced:

- **Resume Learning** returns to the learner's saved Classroom learning position.
- **Resume Study** returns to the learner's saved Study position.

The two systems remain independent. An unfinished Study session or due review no longer steals the Learning button, and Classroom progress no longer overwrites the Study return point.

## Implementation

### Learning resume point

`site.js` now exposes `AlfredNextAction.learning()` separately from the legacy priority helper. It:

- inspects saved `alfred-u-progress-v2` week learning records;
- prefers the most recently updated incomplete Classroom week;
- resolves the exact incomplete seven-stage Classroom stage;
- preserves the existing saved CETa/Career lesson-segment state, so `learn.js` reopens the saved section automatically;
- falls back to the current course week when no prior Classroom learning state exists.

### Study resume point

`site.js` now exposes `AlfredNextAction.study()`. `study.js` persists `lastWeek` in `alfred-u-study-v13` alongside the existing saved Study Library view/indexes and Active Recall session. The Study resume route therefore restores:

- the last Study week;
- the last Study Library view (Review Material, Concept Flashcards, Watch & Review, Reference, Work Weak Areas, or Active Recall);
- the existing review/flashcard index already stored by Study;
- the exact Active Recall step when a session is unfinished.

### Places updated

The split controls replace the prior shared action in all three existing surfaces:

1. global desktop header;
2. Home hero actions, including static fallback labels before the state-aware UX layer initializes;
3. Calendar current-week dashboard.

The existing `AlfredNextAction.get()` priority helper remains for backward compatibility, but these resume surfaces now use `.learning()` and `.study()` directly.

## Compatibility preserved

- Course release remains **16.3**.
- Evidence revision remains **16.2**.
- Cloud Sync protocol remains **2**.
- No Calendar event IDs or ICS UIDs changed.
- No curriculum, assessment, lab, mastery, glossary, visual, or career-content logic changed.
- Existing Progress keys and Classroom lesson-segment addressing are unchanged.

## Verification gates

- JavaScript syntax: `site.js`, `ux-system.js`, `study.js`, `service-worker.js`, and `release-notes-current.js` pass `node --check`.
- Learning routing: tested for fresh state, saved incomplete stage, and saved lesson-segment state.
- Study routing: tested for saved Review Material, Concept Flashcards, and unfinished Active Recall states.
- Separation: confirmed Learning and Study routes can point to different weeks without overwriting each other.
- Surface scan: the global header, Home hero, and Calendar dashboard each render both **Resume Learning** and **Resume Study**.
- PWA cache namespace and UX asset cache-busters advanced to **v16.3.36**.

**Candidate status: PASS FOR UPLOAD.**
