# Alfred v4.1 — Cloud Sync Monitor Test and Limitations

Build: 2026-10-24. Baseline: v4.0, commit `e52ba582c6e3fd233480ec92dfd280d786a7f527`.

## Automated testing

- `node --check ceta.js`: PASS.
- `node --check service-worker.js`: PASS.
- v4.0 preservation/regression harness: 427 executable checks PASS, including 373 instructional page renderings, two 100-question exams, backup and cloud merge.
- Chromium real DOM rendering: 36 route/viewport combinations PASS (390px mobile and 1280px desktop), zero page exceptions and no horizontal layout overflow.
- Cloud monitor new browser harness: 14 scenarios PASS across 390px/1280px. Verified missing config, read-only successful authenticated probe, 401-key rejection, HTTP 503, browser offline, incomplete old config, reconnect with existing key. No progress uploads occurred during verification. Header remains visible while scrolling on mobile.
- Static asset precache file presence and ZIP CRC/payload hashing: release-time checks. Service-worker cache key changed for this release.

## What was NOT tested

- Real Worker authentication against the user's live Cloudflare instance; credentials were deliberately not requested or logged.
- Actual iPhone Safari hardware, physical airplane-mode offline test, and two-device sync.
- External technical review of CETa practice exam accuracy.

## Acceptance criteria after GitHub deployment

1. No local config → neutral 'Cloud Sync not connected' at top, plus safe reconnection form on Learning Record.
2. Valid existing URL and recovery key → successful read-only check triggers 'Cloud Sync connected'.
3. Wrong key → rejected/error indicator, no saved new connection or written records.
4. Turn off Wi-Fi/cellular → offline indicator; coursework continues to save locally.
5. Export backup, then manually sync a newly completed page on device 1; on device 2 authenticate with the same key and manually sync to verify that page.
6. Recheck after a simulated or real outage; status should recover without deleting local progress.

Do not confuse authenticated server connectivity with confirmed full-record synchronization.
