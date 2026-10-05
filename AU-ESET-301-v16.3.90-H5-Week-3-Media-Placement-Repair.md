# AU-ESET 301 — v16.3.90-H5 Week 3 Teaching-Media Placement Repair

**Date:** October 5, 2026  
**Scope:** Week 3 CETa + Career teaching media and lesson-reading placement  
**Reason:** H4 incorrectly repeated whole videos across multiple lesson pages and allowed Study Guide/support-reading behavior that no longer matches the user's governing rule.

## H5 governing correction

1. A lesson page receives media selected for that page's exact subject, not merely the same instrument family.
2. A short/general video is not repeated across pages.
3. A long video may be reused only through explicit chapter/timestamp slicing. H5 uses one long repair video once and assigns only `00:00–10:35` plus `14:11–16:44`; the full repair is not required.
4. Every written source placed inside a lesson is **Required**.
5. Non-required CETa Study Guide records are removed from lesson Related Learning. A Study Guide record may reappear in the secondary review area only when that exact record was already assigned as Required.
6. CETa and Career are repaired together.

## Part 1 — CETa media map

| CETa page | Required video | Required written reading |
|---|---|---|
| Start with the question, not the instrument | VCCS/Auto Sprinkles — **Oscilloscope vs Multimeter** | Rohde & Schwarz — **Digital multimeter vs. oscilloscope** |
| Analog and digital meters: operation, construction, loading | EEVblog #1067 — **Analog vs Digital Multimeters!** | Fluke — **What is a Digital Multimeter?** |
| DMM modes are different measurement circuits | Fluke — **How to use a Multimeter: A comprehensive guide**; bounded chapters: 00:32–02:50 and 04:07–04:34 | Fluke — **How to Measure DC Voltage with a Digital Multimeter** |
| Bench supply: voltage setting plus current limit | Keysight Bench Power Supply Basics — **Lesson 4: CV/CC** | Keysight — **4 Ways to Build Your Power Supply Skill Set**, Tip 1 only |
| Oscilloscope: voltage over time | Tektronix — **Basic Time and Amplitude Measurements** (7:45) | Tektronix — **XYZs of Oscilloscopes Primer**, waveform + vertical/horizontal + simple-measurement sections only |
| Probe and reference discipline | Tektronix — **How to Set Up Probes, Vertical and Horizontal Settings** (6:37) | Tektronix — **ABCs of Probes Primer**, safety/loading/bandwidth/compensation/selection only |
| Trigger: stable display | Tektronix — **The Basics of an Oscilloscope Trigger** (4:31) | Tektronix — **Oscilloscope Fundamentals: Capturing Your Signal**, trigger/capture section only |
| Measurements can change/misrepresent the circuit | EEVblog #26 — **Counts, Accuracy, Resolution & Calibration** | Fluke — **Why Digital Multimeter Accuracy and Precision Matter** |

**CETa result:** 8 pages → 8 distinct video source IDs / URLs + 8 distinct Required reading sources.

## Part 2 — Career media map

| Career page | Required video | Required written reading |
|---|---|---|
| Question-first instrument selection | Afrotechmods — **THE BEST Multimeter Tutorial (HD)** — used **once in Week 3 only** | Fluke — **ABCs of Portable Oscilloscopes: Multimeters and Oscilloscopes** |
| Static evidence first | Keysight Bench Power Supply Basics — **Lesson 5: Power Supply Readback** (2:50) | Keysight — **An In-Depth Guide to Bench Power Supplies**, bounded to output/readback/CV-CC/protection/calibration |
| Known waveform first | Tektronix — **How to Compensate a Passive Probe** (1:09) | Tektronix — **How to Use an Oscilloscope and Probe**, grounding/controls/probes/compensation/basic measurement only |
| Reference, loading and bandwidth | Tektronix — **Probe Loading Affects Your Measurement** (9:38) | Tektronix — **How Oscilloscope Probes Affect Your Measurement** |
| Choose discriminating measurements | Learn Electronics Repair — **The Art Of Methodical Fault Finding**; **only 00:00–10:35 + 14:11–16:44** | U.S. Navy NEETS Module 16 — bounded test-equipment portions only |
| Reproducible evidence | Keysight — **Measurement Uncertainty: How Accurate?** (12:32) | NIST — **Measurement Uncertainty**, introductory material only |
| Test-asset validity | Keysight — **Out-of-Cal Instruments Cause Bad Pass/Fail Decisions** (6:24) | NIST — **Metrological Traceability**, FAQ 5.1.1 + practical elements of 5.2.1 |
| Measurement capability decision | Keysight — **Traceability: Why Is It Important?** (8:32) | NIST — **Assessment of Conformity, Decision Rules and Risk Analysis** |

**Career result:** 8 pages → 8 distinct video source IDs / URLs + 8 distinct Required reading sources.

## Structural safeguards added

The replacement keeps the existing historical filename `week3-media-quality-v16.3.90-h4.js` so the current Learn loader continues to find it, but the file internally identifies itself as H5.

Machine-readable H5 acceptance metadata now records:
- `pageCount: 16`
- `videoPlacementCount: 16`
- `readingPlacementCount: 16`
- `uniqueVideoSourceCount: 16`
- `uniqueVideoUrlCount: 16`
- `duplicateVideoSourceIds: []`
- `duplicateVideoUrls: []`
- `allLessonReadingsRequired: true`
- Study Guide lesson policy = `required-only; an already-required record may reappear later as review/backlink`

If a future edit repeats a video source/URL, drops a page's one-video/one-reading structure, or marks lesson reading non-required, H5 reports `FAILED_CONTENT_STRUCTURE` instead of accepting the media map.

## Lightweight content-file check

Per the current content-first workflow, this is not a deployment/browser audit. A focused local data harness was used only to prevent malformed handoff.

Result:
- JavaScript syntax: **PASS**
- 32 Week 3 point-of-use placements: **PASS**
- 16 video placements: **PASS**
- 16 distinct video source IDs: **PASS**
- 16 distinct video URLs: **PASS**
- duplicate videos: **0**
- 16 reading placements: **PASS**
- all lesson readings Required: **PASS**
- Study Guide lesson filter: non-required records removed; Required record retained: **PASS**
- unrelated Week 2 placement preservation in the harness: **PASS**

## Status

**H5 CONTENT REPAIR READY FOR UPLOAD.** Week 3's prior content freeze remains reopened until this H5 replacement is uploaded. No cosmetic/UX work is included.
