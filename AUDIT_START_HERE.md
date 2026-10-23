# Alfred CETa-Only v1.0.1 — Root-Only Layout

This GitHub upload layout deliberately contains **no directories**. The canonical instructional data files are `course.js` (browser) and `course.json` (structured export). The website runtime is `ceta.js`; PWA offline files are cached by `service-worker.js`.

`AUDIT_EVIDENCE.zip` stores the original unmodified audit reports, source provenance, implementation QA and replacement tools with their original internal paths. Download and extract it *locally* to inspect these files. Those reports and their QA script correspond to the original directory-based build and **must not** be represented as verifying the new root-only variant. Reverify current hosting, PWA caching and learning progress before production acceptance.

Do not distribute the proprietary publisher study-guide PDF publicly; the site's personal PDF connector is private/local.

The original `main` site remains unchanged until the user merges the tested replacement branch.
