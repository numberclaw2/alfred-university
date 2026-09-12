# Alfred University v15.2 package QA

Date: 2026-09-12

## Result

PASS — the cumulative replacement package passed static, data-integrity, local-reference, service-worker, and package checks.

## Checks run

- `node qa-v152/regression.cjs` — **PASS, 1,215 checks**.
  - 18 root JavaScript files parsed with Node syntax checking.
  - 24 HTML documents checked for duplicate IDs, one primary `h1`, local references, shared navigation order, and shared `site.js` loading where applicable.
  - Data verified: 31 weeks, 125 calendar events, 48 assigned resources, 99 deep resources, 24 labs, 61 knowledge entries, 7 indexed local documents, 262 CETa standards, 78 career standards, 1,048 assessment questions, 125 lesson quizzes, 24 lab quizzes, and 31 weekly tests.
  - Service-worker cache is `alfred-u-v15-2`; every listed local asset exists.
  - v15.2 current-week ordering, context/skip-link hooks, grouped navigation, 70ch reading measure, 44px control rhythm, reduced-motion rule, README inventory, release note, and audit report are present.
- `pdfinfo` on the revised Assignment & Lab Manual — **PASS**: tagged, 13 pages, letter size, unencrypted, no embedded JavaScript.
- ZIP manifest verification after packaging — **PASS**: cumulative replacement files plus upload instructions and audit report are present.

## Browser-test limitation

No full browser screenshot pass is claimed in this report. The execution environment did not contain a usable Chromium binary after the earlier browser download attempt timed out. Perform one live visual pass after upload at desktop and mobile widths, then run the five-task usability check in `UX_AUDIT_REPORT.md` with an unfamiliar user and an ADHD/autistic learner.

## Upload note

The ZIP is cumulative relative to the repository baseline. Upload the files at the ZIP root while preserving filenames and the repository root layout. Do not upload the `qa-v152` working folder as part of the site; the report and instructions are included in the ZIP for reference only.

