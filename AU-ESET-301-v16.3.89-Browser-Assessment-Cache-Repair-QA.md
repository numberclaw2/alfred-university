# AU-ESET 301 v16.3.89 — Browser Assessment Cache Repair QA

## Status

**PACKAGE QA PASS — user-browser confirmation and post-upload Pages verification still required.**

## Why v16.3.88 was not sufficient

The v16.3.88 published artifact and selector harness correctly assembled the Week 2 12-question 6-CETa/6-Career form, but the user’s actual browser still displayed “Practice could not load.”

That contradiction means the browser was not reliably executing the same runtime state as the newly published artifact. The old design allowed previously cached assessment HTML/JS and older Alfred service-worker caches to survive a release transition.

A passing artifact therefore did not prove a currently controlled client had received the fix.

## v16.3.89 repair layers

1. **Authoritative source repair**
   - CQ1204–CQ1209 now use `audit.status = 'editorially-reviewed'` directly in `week2-career-assessment-v16.3.74.js`.
   - The prior custom status is retained as provenance in `previousStatus`.

2. **Defensive quiz repair**
   - Before `AlfredAssessmentEngine.select()`, `quiz.js` repairs the six known Week 2 Career statuses if a stale question object is encountered.
   - A selector error now displays its actual diagnostic rather than incorrectly saying the release files may be incomplete.

3. **Cache-busted HTML wiring**
   - `quiz.html` and `assessments.html` request the repaired Week 2 source as `?v=16.3.89`.
   - `quiz.html` requests `quiz.js?v=16.3.89`.

4. **Service-worker stale-client repair**
   - New cache: `alfred-u-v16-3-89-browser-assessment-cache-repair-20260930`.
   - Older `alfred-u-*` caches are deleted after the complete v16.3.89 cache installs.
   - Release-sensitive HTML/JS network fetches use cache reload semantics.
   - Stale quiz/assessment HTML is rewritten to the v16.3.89 assessment source and quiz runtime URLs.

5. **Already-open failed-page recovery**
   - On quiz/assessment pages, `site.js` performs a one-release-only reload when the v16.3.89 service worker takes control.

## Runtime selector tests

Tested from the exact v16.3.88 deployed artifact with v16.3.89 applied:

- Week 2 Career canonical source status: 6 / 6
- v16.3.88 compatibility overlay omitted: Week 2 selector still passes
- Week 2 weekly mastery attempts 1–10: PASS
- Each form: 12 total = 6 CETa + 6 Career
- Week 2 lesson forms: PASS
- LAB-002 form: PASS
- Question IDs / prompts / answers: unchanged
- Guided Practice v16.3.87 repair: preserved
- Cloud Sync protocol: 2

## Stale-path static verification

The service worker rewrites stale references:
- `week2-career-assessment-v16.3.74.js?v=<old>` → `?v=16.3.89`
- `quiz.js?v=<old>` → `?v=16.3.89`

The current quiz can also repair a stale in-memory Week 2 question status before selection.

## Acceptance rule

Do **not** freeze v16.3.89 merely because the artifact and selector harness pass.

The release remains deployment/browser-pending until:
1. the upload commit is verified,
2. the exact Pages artifact is verified,
3. the deployed selector is executed,
4. the user confirms the real browser no longer shows the failure (or an actual graphical browser test proves the same path).
