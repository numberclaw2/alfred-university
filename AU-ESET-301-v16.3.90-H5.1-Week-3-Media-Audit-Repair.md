# AU-ESET 301 — v16.3.90-H5.1 Week 3 Media Audit Repair

**Date:** 2026-10-05  
**Scope:** targeted audit/repair of the uploaded H5 Week 3 teaching-media policy.  
**Status:** candidate content/runtime-data repair; upload required.

## What the H5 audit confirmed

The duplicate-media repair itself is correct in the uploaded code:

- 16 Week 3 teaching pages = 8 CETa + 8 Career.
- 16 video placements.
- 16 distinct video source IDs.
- 16 distinct video URLs.
- zero duplicate whole-video placements.
- 16 written lesson resources and all 16 are `requirement: required`.
- each page has exactly one page-specific video/demonstration plus one page-specific written reading.

The page-level video/reading map from H5 is therefore retained unchanged.

## Defect 1 — Study Guide policy was not actually implemented

H5 wrapped `recordsForSegment()` with a `classification === "required"` filter. The four Week 3 Chapter 19 slices created by `week3-redesign-v16.3.71.js` were still classified as `study`, so H5 hid them from lessons instead of promoting them to Required.

H5.1 promotes these existing bounded records in place:

| Record | Required first placement | Later reuse |
|---|---|---|
| `sg-w03-v16371-p165-purpose` · p.165 | Question before instrument | — |
| `sg-w03-v16371-p167-169-dmm` · pp.167–169 | DMM modes/connections | Measurement limits → previously assigned/reuse |
| `sg-w03-v16371-p172-173-scope` · pp.172–173 | Scope voltage over time | — |
| `sg-w03-v16371-p173-probe-trigger` · p.173 bounded probe/trigger material | Probe/reference discipline | Trigger → previously assigned/reuse |

Each promoted record is now `classification: required`, `role: required`, and `contextOnly: false`. The current `learn.js` already distinguishes the record's first placement from later placements using `primaryPlacement()`, so no renderer rewrite is needed.

H5.1 also updates Study Guide week/page metadata so Week 3 is a Required-reading week and the six newly promoted unique printed pages (165, 167–169, 172–173) are reflected in current runtime counts. Because earlier Week 2 overlays had already added required pages without updating the old base summary, the executed current runtime now contains **73 unique Required printed pages**, not the old base-map count of 64.

## Defect 2 — required NEETS reading URL was dead

H5 used:

`https://maritime.org/doc/neets/mod16.pdf`

The audit returned HTTP 404.

H5.1 uses:

`https://casperarc.net/library/NEETS/14188A.pdf`

The replacement resolves to **NEETS Module 16 — Test Equipment, NAVEDTRA 14188A**, 349 pages. The document identifies itself as Navy Electricity and Electronics Training Series Module 16 and includes Basic Meters, Common Test Equipment, and Oscilloscope/Spectrum Analyzer chapters.

## Defect 3 — repository checksum ledger was stale

The uploaded H5 package changed governed files but did not replace root `SHA256SUMS.txt`. Checking the deployed tree produced three mismatches:

- `ALFRED PROJECT GOVERNANCE.md`
- `PACKAGE_SHA256SUMS.txt`
- `week3-media-quality-v16.3.90-h4.js`

H5.1 regenerates the complete repository-wide checksum ledger after all candidate files are final.

## Targeted H5.1 checks

The H5.1 candidate is accepted only if:

- H5.1 media quality status = `VERIFIED_CONTENT_STRUCTURE`.
- 32 point-of-use media placements = 16 videos + 16 written readings.
- 16 unique video source IDs and 16 unique video URLs; no duplicates.
- all 16 written lesson readings are Required.
- all four mapped Week 3 Study Guide records are Required and visible on their mapped segments.
- pp.167–169 and p.173 second placements resolve as later reuse, not new first assignments.
- no non-required Study Guide record is returned to Week 3 lesson Related Learning.
- NEETS points to the live NAVEDTRA 14188A PDF.
- repository-wide SHA256 ledger validates after packaging.

## Preserved systems

No Week 3 Alfred teaching text, source-authentic visuals, assessments, LAB-003 evidence, stable learner IDs, calendar identities, or Cloud Sync protocol are changed by H5.1. The 16 H5 page-specific video and 16 H5 page-specific external reading selections remain intact.
