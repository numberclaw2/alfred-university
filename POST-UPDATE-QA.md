# AU-ESET 301 v16.3.21 — Transparent Branding Asset Sweep QA

**Date:** September 18, 2026  
**Scope:** Full-project audit of Alfred University crest, seal, institutional symbol, and app-icon raster assets; same-filename transparent replacements; cache-refresh hardening. No curriculum or learner-system redesign.

## Repository-wide asset audit

- PASS — every top-level raster branding asset was inventoried.
- PASS — `crest.webp` is the actual site-wide crest used by headers and About/branding surfaces.
- PASS — `seal.webp` is the actual site-wide seal used by footers, hero decoration, About, Progress, Projects, and other institutional surfaces.
- PASS — `icon-180.png`, `icon-192.png`, and `icon-512.png` are the browser/PWA icon family referenced by HTML, `manifest.webmanifest`, and the service worker.
- PASS — `alfred-university-crest.png` and `alfred-university-seal.png` are source assets, not direct current HTML/CSS runtime references. This is why the prior two-PNG-only manual upload did not change visible page logos.
- PASS — document cover thumbnails were reviewed separately. `syllabus-cover.png`, `resource-manual-cover.png`, `assignment-lab-cover.png`, `binder-index-cover.png`, and `certificate-cover.png` intentionally retain their paper/art backgrounds and are not part of the transparent-logo replacement set.
- PASS — the week-specific SVG instructional figures are technical lesson graphics, not Alfred University logo/symbol assets, and remain untouched.

## Transparency conversion

- PASS — 7 branding files now contain alpha transparency:
  - `alfred-university-crest.png`
  - `alfred-university-seal.png`
  - `crest.webp`
  - `seal.webp`
  - `icon-180.png`
  - `icon-192.png`
  - `icon-512.png`
- PASS — the white/background removal is edge-connected rather than a global white-key operation. Internal light artwork is preserved.
- PASS — source RGB artwork is unchanged on retained pixels for the deployed crest/seal/icon originals; the operation changes background alpha rather than recoloring or redesigning the logos.
- PASS — runtime WebP assets remain WebP and support alpha.
- PASS — app-icon dimensions remain exactly 180×180, 192×192, and 512×512.

## Runtime reference coverage

- PASS — all existing HTML/CSS references continue to use the same filenames.
- PASS — no page-by-page markup rewrite is required.
- PASS — `manifest.webmanifest` continues to resolve the same icon filenames.
- PASS — `service-worker.js` continues to cache all branding assets under the new v16.3.21 namespace.

## Cache refresh / delivery

- PASS — service-worker cache advances to `alfred-u-v16-3-21-transparent-branding-assets-20260918`.
- PASS — `site.js` registers the service worker with `updateViaCache: 'none'` and requests `registration.update()` so the browser checks the new worker instead of relying on an older cached worker script.
- PASS — no service-worker fetch strategy, offline behavior, or progress storage logic changed.

## Runtime metadata

- PASS — `build-info.json` reports runtime `16.3.21`.
- PASS — build is `v16.3.21-transparent-branding-assets-20260918`.
- PASS — release status is `transparent-branding-assets`.
- PASS — Release Notes lists v16.3.21 first and records the exact package manifest.

## Protected systems unchanged

This release does **not** modify curriculum/lesson content, Teaching Media, calendar dates or IDs, assessment content/scoring, mastery formulas, labs, projects, Progress record identities, Cloud Sync protocol 2, Worker/D1 behavior, Study/Practice workflow, page layout, or the owner-based navigation architecture.
