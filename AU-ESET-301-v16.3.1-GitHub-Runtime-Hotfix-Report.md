# AU-ESET 301 v16.3.1 GitHub Runtime Hotfix Report

> **Historical record — superseded for current runtime operations by v16.3.2.** This report is retained for provenance and does not describe the current deployment procedure.

**Date:** 2026-09-15  
**Base course release:** v16.3 Final Instructional Depth  
**Objective assessment evidence revision:** 16.2 (intentionally unchanged)

## Defects found after GitHub upload

1. Standards, Analytics, and the Progress assessment-intelligence summary still hard-coded `15.8` as the current evidence revision. Current v16.3 objective evidence is revision `16.2`, so valid new evidence could be shown as legacy/revalidation evidence.
2. Standards automatic mastery breadth counted the mere existence of a semantic task as a second bank item even if that rubric/self-reviewed task had not been completed. This could weaken the distinction between independently scored evidence and self/rubric-reviewed evidence.

## Repairs

- `standards.js`: derives the current evidence revision from assessment metadata and counts only active independently scored reviewed-bank items toward automatic mastery breadth.
- `analytics.js`: derives the current evidence revision from assessment metadata and labels the current evidence rule with that revision.
- `progress.js`: filters assessment-intelligence shards using the metadata-derived current evidence revision.
- `standards.html`: removes stale v14.2 wording.
- `assessment-policy.js`: removes stale v15.8 maintenance wording while preserving evidence revision 16.2.
- `quiz.js`: derives the saved attempt evidence revision from current assessment metadata.
- `service-worker.js`: cache bumped to `alfred-u-v16-3-1`.
- `release-notes.js` and `README.md`: document the runtime hotfix without relabeling the 62-lesson instructional release or invalidating prior evidence.

## Regression checks

- All **24** production JavaScript files parse with `node --check` (**0 failures**).
- Runtime assessment metadata resolves to release 16.3 / evidence revision 16.2.
- Active reviewed bank questions: 223. Retired historical filler questions: 186. Semantic tasks: 87.
- Synthetic Standards regression: current 16.2 evidence is recognized as validated, and a standard with one objective-bank item cannot reach automatic `Mastered` merely because a semantic-task mapping exists.
- Synthetic Analytics regression: a current 16.2 assessment record is counted as current, not historical, and the displayed rule identifies revision 16.2.
- Static regression: **25 HTML pages**, **0 missing local references**, **0 broken anchors**, **137 service-worker core assets / 0 missing**, **0 missing manifest assets**, **62 lesson SVGs**, and **0 stale 15.8 current-revision checks** in the active evidence consumers.
- Calendar regression: **125 VEVENTs / 125 unique UIDs**; `course-data.js` and the ICS file are byte-for-byte unchanged from the uploaded v16.3 package.
- Assessment-form regression: **151 forms** selected successfully (**1,099 questions total**), with **0 retired/mastery-disabled questions selected**.
- The calendar, lessons, labs, semantic mapping, Cloud Sync protocol, D1 contract, and saved progress keys are unchanged by the hotfix.

**Hotfix disposition: PASS.**
