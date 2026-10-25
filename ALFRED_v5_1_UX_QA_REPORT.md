# Alfred v5.1 — UX Regression and Preservation QA

Baseline: deployed v5.0, commit `d93e5397dd944ec5f1a5a16888c97a93b6c86afa`.

## Automated results

- Node syntax check on `ceta.js` and `service-worker.js`: PASS.
- Headless Chromium isolated-document rendering: **30 view scenarios**, including two before/after baseline comparisons; all **28 current v5.1 scenarios** have zero page JavaScript exceptions, zero detected horizontal overflow and no fatal page-render errors.
- Includes home, course, study, progress, assessments, resources, standards, glossary, analytics, practice, learning pages in M01/M05/M16, and M29 mastery form, at **390px mobile** and desktop 1280px/1440px.
- Additional real-DOM interaction test: **4 scenarios** (M01 on mobile/desktop, M29 and M30 on mobile/desktop), with Focus Reading toggling, persisted preference, module drawer open/close on mobile, answer radio selection in the two exam forms, and lesson page-navigation target size: PASS.
- Baseline M01 lesson begins at vertical coordinate **699px**, v5.1 begins at **539px** in the isolated 390×844 viewport, an approximate **160px earlier**. Measurements reflect test fonts/assets and are not real iPhone geometry.
- `course.js` and `course.json` byte equality against v5.0: PASS.
- All existing saved-record, sync and scoring logic remains present and unmodified; only layout/ARIA wording and focus button text changed in runtime.
- Deployed cache key changed; caching strategy unchanged.

## Not tested / not claimed

- User's authenticated Cloudflare account; actual device-local Safari, PDF viewer behavior, or legacy device session hydration.
- Remote GitHub Pages navigation, due to browsing restrictions in the isolated Chromium environment.
- No external assessment validity or independent technical curriculum review in this UX-only release.
- In browser screenshots the Grizzlies crest image may appear broken because external asset requests are prohibited by the test environment; the actual site assets were not altered.

## Summary

The release is a conservative, single-upload UI treatment protecting the complete existing academic website and Cloud Sync runtime. Cross-browser and physical-device acceptance should not be inferred from isolated Chromium checks.
