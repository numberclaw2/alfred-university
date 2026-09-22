AU-ESET 301 v16.3.52 — DIRECT LESSON & GUIDED PRACTICE NAVIGATION
=================================================================

BASELINE
- Current GitHub main observed before this patch: v16.3.50 commit 109f43e7f798ee12ffd1ec251b8b723310ddc317
- This package is cumulative: it includes the accepted v16.3.51 one-link Teaching Media source hotfix plus the new v16.3.52 navigation feature.

UPLOAD
Upload/replace every file in this ZIP at the repository root. It is a flat changed-files-only package.

WHAT CHANGED
1. CETa and Career lessons now have Previous/Next, Page X of Y, a named section selector, and a numeric Go-to-page box.
2. Unfinished lessons still enforce sequential unlocking; typing a future locked page does not bypass the learning gate.
3. A lesson previously passed before reconstruction exposes every current page for review without erasing the prior completion flag or rewriting the official saved resume point.
4. Guided Practice is divided into directly selectable pages while preserving one shared notebook and completion/checkpoint state.
5. Mobile/desktop navigation styling was added without redesigning Alfred.

POST-UPLOAD SMOKE TEST
1. Hard refresh once so cache `alfred-u-v16-3-52-direct-section-navigation-20260922` activates.
2. Open a CETa lesson: confirm Page X of Y, arrows, section dropdown, numeric page entry, and Go.
3. On an unfinished lesson, attempt a number beyond the unlocked page; confirm Alfred reports it is locked and does not advance progress.
4. Open a previously passed lesson that has been rebuilt; confirm you can select any current page and see the prior-pass review message.
5. Browse away from the saved page and use `Return to saved resume point`; confirm the saved page is restored.
6. Open Career Lesson and repeat the selector test.
7. Open Guided Practice: confirm page selector/arrows/numeric entry; type a note, change pages, and confirm the note remains.
8. If Guided Practice was already complete, confirm browsing pages does not clear its completion.
9. Smoke-test phone width and desktop width.
10. Confirm Teaching Media still shows the v16.3.50 calibrated counts/architecture and the v16.3.51 Microsoft source hotfix remains present.

QA
See `AU-ESET-301-v16.3.52-Direct-Section-Navigation-QA.md`.
