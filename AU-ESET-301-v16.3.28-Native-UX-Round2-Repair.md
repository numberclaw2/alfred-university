# AU-ESET 301 v16.3.28 — Native UX Audit Round 2 Repair

**Repair date:** September 18, 2026  
**Baseline:** v16.3.27 — `v16.3.27-native-visual-qa-mobile-layout-repair-20260918`  
**Scope:** Targeted UX repair only; no curriculum or learning-logic redesign.

## Why this patch exists

The second native whole-site UX audit rendered the exact deployed v16.3.27 GitHub Pages artifact in Chromium across 20 user-facing pages and six viewport widths: 1440, 1024, 768, 430, 390, and 360 CSS pixels. That audit produced 120 native renders with zero fatal renders and accepted the overall UX architecture, but identified six bounded polish/responsive issues.

v16.3.28 repairs those six findings without reopening the accepted navigation, Study, Classroom, Progress, Mastery, Glossary, or course architecture.

## Repairs

### 1. Release Notes mobile clipping

**Before:** long filenames/code tokens and release-file grid min-content could expand current release cards beyond the usable phone shell at 430/390/360px.  
**Repair:** release-list/card/file-grid descendants now use zero-min-width behavior; file groups collapse to one column on narrow phones; long code/filename/list/request text can wrap anywhere; mobile list indentation is reduced.

### 2. Release Notes generic TOC overload

**Before:** the generic long-page UX layer could generate an `On this page · 63 sections` control on Release Notes. Although collapsed on mobile, the expanded list duplicated weaker navigation over the page's purpose-built release search/filter system.  
**Repair:** `patch-notes` is excluded from the generic `On this page` generator. Release-specific search and version navigation remain the primary discovery mechanisms.

### 3. Home course-packet statistics at 360px

**Before:** the three-stat course-packet row could exceed its inner card width because the grid tracks honored label min-content, clipping the third statistic.  
**Repair:** the row now uses `repeat(3,minmax(0,1fr))`; statistic cards can shrink; labels wrap safely; ≤375px spacing and type are tuned to preserve all three statistics.

### 4. Back-to-top overlap on Home

**Before:** the fixed Back-to-top control could obscure the lower-right Home statistic during narrow-phone scrolling.  
**Repair:** Home/index is excluded from the global Back-to-top control. Long reference pages retain the feature.

### 5. Alfred University wordmark at 360px

**Before:** the full university name could truncate at the smallest tested width because crest + Search + Menu + subtitle competed for the row.  
**Repair:** at ≤375px Alfred preserves the full university name by hiding the optional Latin subtitle first, slightly reducing crest/brand gaps, tightening letter spacing, and keeping Search/Menu usable.

### 6. Calendar previous/next controls

**Before:** period arrow controls were approximately 33×44px. They met height expectations but were narrower than Alfred's preferred 44px primary-control language.  
**Repair:** previous/next period buttons are now 44×44px minimum while retaining existing calendar behavior.

## Native regression validation

The repaired composition was tested natively in Chromium using the exact v16.3.27 deployed artifact as the base plus the v16.3.28 candidate files.

### Whole-site render matrix

- 20 pages
- 6 viewport sizes per page
- 120 rendered page/viewport combinations
- **Fatal renders: 0**
- **Targeted defect regressions: 0**

The automated matrix specifically rechecked:

- document/page horizontal overflow,
- clipped visible elements outside intentional horizontal scrollers,
- Release Notes file-list width at 430/390/360px,
- Release Notes generic TOC absence,
- Home statistics intrinsic width at 360px,
- Home wordmark intrinsic width at 360px,
- Home Back-to-top absence,
- Calendar previous/next width at all phone widths.

All targeted checks passed.

### Mobile interaction regression

Representative shared-shell interaction tests were run on Home, Study, Classroom, Calendar, Course, and Release Notes at 430/390/360px:

- 18 Menu open/Escape cycles
- 18 Search open/focus/Escape cycles
- **36 interaction checks total**
- **Failures: 0**

### Visual spot checks

Native screenshots were inspected after repair for:

- Home at 360px — full Alfred University wordmark visible; subtitle hidden; Search/Menu preserved.
- Release Notes at 390px — content stays inside the card/shell; no generic `On this page` block.
- Release-card content at 390px — long release prose and list items remain inside the card.
- Calendar at 390px — shared mobile header remains stable; period navigation geometry passes automated 44px checks.

## Cache/version handling

- Runtime patch advanced to **16.3.28**.
- UX loader markers advanced to **16.3.28**.
- `ux-system.css` and `ux-system.js` load with `?v=16.3.28` cache-busting query strings.
- Service-worker namespace advanced to `alfred-u-v16-3-28-native-ux-round2-20260918`.
- Both cache-busted UX asset requests are included in the service-worker core manifest.

## Protected systems

This patch does **not** modify:

- curriculum or lesson wording,
- Classroom stage sequencing,
- Study/Vocabulary scheduling logic,
- glossary data or definitions,
- Teaching Media,
- calendar dates/event identities,
- assessments or scoring,
- mastery formulas,
- labs/projects,
- Progress records,
- Cloud Sync protocol,
- branding artwork.

## Acceptance conclusion

**PASS.** v16.3.28 resolves the six bounded findings from Native UX Audit Round 2 and passes the post-repair 120-render native regression matrix plus representative mobile interaction regression.
