# Alfred University CETa v3.2 — Source Integrity and Reader Verification

- Baseline: the exact v3.1 source copied from the prior verified build.
- EPUB/text rewriting: NONE. The PDF is an optimized image-only faithful scan from the user's previously supplied full book, 234 pages.
- Verified full scan printed page 7 occurs on PDF viewer page 16, giving an offset of +9. Chapter 2 safety introduction and sample later chapter pages were rendered for visual review.
- The 2025 ETA CETa competencies PDF has 10 PDF pages. All 262 current objective IDs in Alfred's course.json matched exactly one official occurrence, and the calculated PDF page map is embedded in ceta.js. This authenticates the ID's presence and page, *not* whether every Alfred local objective title or example is editorially accurate.
- Core runtime still uses `alfred-ceta-only-progress-v1` and the existing Cloud Sync protocol; the separate bundled file does not modify student records.
- The large PDF is deliberately excluded from mandatory PWA static-file prefetch and automatic cache to avoid interrupting offline install and quota limits.
- The source PDF is copyrighted third-party publisher material; a private repository does not guarantee that a GitHub Pages asset is private. No repository privacy check was performed at the user's request.
- Assessment bank independence, full Study Guide passage verification, real-device browser testing and hosted-asset accessibility remain unresolved acceptance gates.

## Automated runtime and package checks
- Executed JavaScript renderer smoke test across **all 373 teaching pages**: PASS.
- The Library emits the bundled PDF open links, opens the optional device-local PDF controls, and renders without JavaScript failures: PASS.
- The Competency registry generates **262 exact official-publisher PDF page links**: PASS.
- M29 and M30 Master rehearsal views render: PASS; independence is explicitly *not* claimed.
- `node --check ceta.js` and `node --check service-worker.js`: PASS.
- The PDF is **21,484,649 bytes** (under GitHub web upload's 25 MiB single-file limit), preserves all 234 page images at 1400×1812 px, and retains original order. Earlier scanned source: 86,126,473 bytes.
- Chromium browser navigation to local test server was blocked by administrator policy; no live browser navigation, pop-up, iPhone test, Pages deployment or remote Cloud Sync test is claimed.
