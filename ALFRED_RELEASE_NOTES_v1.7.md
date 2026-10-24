# Alfred University CETa v1.7 — Instructional Reconstruction (Modules 11–15)

**Release date:** 2026-10-23  
**Upload scope:** `course.js`, `course.json`, `service-worker.js`, `ALFRED PROJECT GOVERNANCE.md`, `ALFRED_RELEASE_NOTES_v1.7.md`, `README_START_HERE.md` at GitHub root.  
**Base commit:** `2f11f672e9103d67b083464a15034b51e73a50ae` (the accepted v1.6 repository version). 

## Educational changes

- Rewrote **65** previously existing teaching pages in **five** CETa modules: M11 (9), M12 (14), M13 (14), M14 (14), M15 (14). Their original IDs and saved progress positions are preserved.
- Recovered the original governance rule that Alfred teaches first. Each page includes a physical/mechanistic explanation, a specific worked numerical or procedural case, known limits/misconceptions, a meaningful question, and an answer revealed only after attempting.
- M11: semiconductor junction and diode characteristics; bridge rectification, Zener, LEDs/photodiodes, SCR/TRIAC triggering, diode selection and diagnosis.
- M12: BJTs, PNP/NPN topology, MOSFET gate drive and losses, JFET modes, biasing, amplifier stages, ICs, thermal/SOA and transistor troubleshooting.
- M13: supply block diagrams, RMS/peak and rectification, ripple frequency, reservoir capacitors, linear/adjustable regulation, SMPS, batteries, ripple measurement, power-tree troubleshooting and thermal testing.
- M14: gain, dB, loading, amplifier classes, feedback, op amps, inverting/non-inverting gains, bandwidth/slew limits, distortion and stage-by-stage diagnosis.
- M15: ESD vs safety, PCB construction, alloys/flux/wetting, thermal technique, joint defects, desoldering and rework limits, SMT, handling, inspection, crimp workmanship and physical-evidence distinctions.
- Added **35 provisional** internal practice questions (seven per module), all with module/page teaching repair links. Prior questions are not removed, renumbered, or changed.
- Relevant publisher materials are linked at point of instruction: OpenStax, Analog Devices, TI, EOS/ESD and SparkFun. These are official/existing externally hosted diagrams/references, *not* newly embedded or offline-downloaded figures.
- Localized existing provisional Required sixth-edition study-guide reading assignments to three correct topical teaching points (M11, M13, M14). M12/M15 exact first-use passages require future owned-guide verification.

## Preserved behavior

Grizzlies visual identity, 30 modules, five stages, progress storage keys and semantics, module and page IDs, prior scored questions and records, original M01–M10 and M16–M30 curriculum objects, labs, private PDF connector, no-login learner path and Cloud Sync client functions. `service-worker.js` changes **only** the release cache namespace to fetch the new course data on update.

## Known verification limits

1. Authored questions remain **provisional** until independent SME/editorial review. They are internal practice, not certified ETA items.
2. Some older question IDs are repeated across source modules; v1.7 adds no new collision and preserves old identities.
3. The official sixth-edition guide's M11/M13/M14 assigned printed pages were present in earlier mappings but have not been independently reread and editorially verified for this release; M12/M15 first-use required mapping remains pending.
4. Reference diagrams and media appear as outbound publisher links. No universal embedded visual coverage or media completeness is claimed. External sources might not work offline.
5. Cloud Sync live round-trip, production service-worker update, full assistive-technology testing and complete objective-by-objective educational verification remain open.
6. Passing a quiz or simulation does not certify safe physical work, professional workmanship or ETA credentialing.

## Release quality gate

File-level checks validate exact unchanged non-target content, old stable IDs, added question identifiers/answers, JSON/JS consistency, governance archival integrity and ZIP structure. A targeted browser harness checks real module rendering, question scoring and responsive layout. The GitHub Pages deployment and user-device cache state will remain unverified until uploaded.
