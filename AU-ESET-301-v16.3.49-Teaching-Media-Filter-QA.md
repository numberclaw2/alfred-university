# AU-ESET 301 v16.3.49 — Teaching Media Filter QA

## Verdict

**PASS — READY TO UPLOAD**

This release is a Teaching Media browsing/UX change only. It does not change curriculum content, resource assignments, literature/video selections, lesson mappings, assessments, labs, progress, or Cloud Sync.

## Baseline verification

The implementation was built against the accepted GitHub `main` v16.3.48 baseline (commit `f26d352d1fff910a827da4eb9a675780e6a450a9`). The six baseline runtime files used for the patch matched the GitHub blob SHAs verified after the v16.3.48 upload.

## Implemented filters

Teaching Media now supports combinable filters for:

- Search — searches the rendered resource card, including title, provider, instructional framing, and course connections.
- Type — Video, Written literature, Interactive / tool, Reference / guide.
- Priority — Required, Not required, Supporting, Optional.
- Track — CETa, Career, or CETa + Career when the resource has legitimate uses in both.
- Purpose — Core teaching, Demonstration, Lab preparation, Troubleshooting, Reinforcement, Review, Go deeper, or Reference/source as present in that week.
- Beginner-friendly only — deliberately conservative; uses the accepted Week 1 beginner-teacher resource set plus explicit beginner/clarity-first metadata. It does not infer difficulty from week number alone.

Every card also receives an at-a-glance normalized format badge, and explicitly beginner-friendly cards receive a Beginner-friendly badge.

## Required-resource safety

Filtering changes visibility only. It does not alter requirement state, stage completion state, resource relationships, or lesson progress.

When an active filter hides one or more required resources, Teaching Media displays an explicit warning such as:

> Current filters hide 2 required sources. Filtering never changes what is required.

The completion control continues to use the unfiltered required-resource count.

## Behavioral tests

Automated DOM-behavior harnesses passed for:

- Show all.
- Video-only.
- Not-required grouping.
- Beginner-friendly only.
- Career-track matching, including resources legitimately used in both tracks.
- Troubleshooting-purpose filtering.
- Free-text search.
- Combined Written literature + Optional + Beginner-friendly filtering.
- Zero-result state.
- Hidden-required warning count.
- Reset-state logic.
- Video / Reading / Interactive / Reference classification helpers.
- Cross-week track classification.
- Current-week purpose classification.
- Conservative beginner classification.

## Source / integration QA

Passed:

- `learn.js` JavaScript syntax.
- `release-notes-current.js` JavaScript syntax.
- `service-worker.js` JavaScript syntax.
- `build-info.json` JSON parsing.
- `learn.html` HTML parsing.
- Static duplicate-ID check for `learn.html`.
- CSS brace integrity.
- v16.3.49 stylesheet and JavaScript cache-busted references.
- Service worker cache ID and v16.3.49 asset references.
- Release Notes ordering with v16.3.49 before v16.3.48.
- Build metadata contains all six filter categories.
- Expected filter controls, count/status region, no-results state, reset action, and required-resource warning contract.
- Responsive filter layouts at the source level for desktop/tablet and <=700 px mobile.
- Existing `teaching-media-resource-integration.js` and `outside-literature-integration.js` are not modified by this patch.

## Accessibility / UX checks

The filter form uses native labeled `input`, `select`, checkbox, and button controls. The visible-result count uses `role="status"` and `aria-live="polite"`. Disabled Beginner-friendly state explains when no explicitly beginner-labeled source is available in the current week. Mobile controls have minimum touch-height rules and collapse to a single-column layout at <=700 px.

## Browser-execution limitation

A real Chromium process launches in this environment, but managed browser policy blocks navigation to localhost, `file://`, and `data:` with `ERR_BLOCKED_BY_ADMINISTRATOR`. Therefore native rendered-browser QA could not be honestly claimed. The release was instead tested using the full v16.3.48 source overlay, syntax/static validation, and executable DOM/filter behavior harnesses.

This is an environment limitation, not a known product defect.

## Changed runtime/source files

- `learn.js`
- `styles.css`
- `learn.html`
- `service-worker.js`
- `build-info.json`
- `release-notes-current.js`

No resource-data or curriculum file is changed.

## Final acceptance

**PASS — v16.3.49 Teaching Media filtering is ready for upload.**
