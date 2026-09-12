# Alfred University v15.3 Calendar Readability QA

## Result

**PASS — 1,221 automated checks.**

Command run:

```text
node qa-v153/regression.cjs
```

## Coverage

- 18 JavaScript files parse successfully.
- 24 routed HTML documents were checked for unique IDs, one primary `h1`, local file references, shared `site.js`, and the current primary-navigation order.
- Calendar data remains 125 events across 31 weeks.
- Assigned resource count remains 48.
- Deep resources remain 99.
- Labs remain 24.
- Knowledge entries remain 61.
- Indexed local documents remain 7.
- Assessment inventory remains 262 CETa standards, 78 career standards, 1,048 questions, 125 lesson quizzes, 24 lab quizzes, and 31 weekly tests.
- Every event still has its ID, start, end, summary, source description, and outcomes array.
- Service-worker cache is `alfred-u-v15-3` and every listed core asset exists.
- Calendar orientation copy, usage cue, event hierarchy, progressive disclosure hooks, view semantics, and keyboard-friendly Week controls are present.
- README inventory and v15.3 release note are present.

## Package verification

The replacement package is built from the current repository diff plus the v15.3 audit materials. The packaging script verifies ZIP integrity and byte equality after writing the archive.

## Manual verification still recommended after upload

The environment did not have a runnable Chromium binary, so no screenshot claim is made here. After upload, open at least:

1. A long Week 1 learning event.
2. A lab event with equipment and mastery detail.
3. A Project 1 event.

Check each in Month, Week, and Agenda views at desktop and mobile widths. Confirm that Today’s work and outcomes appear before the expandable reference sections, and that the full source note opens when selected.
