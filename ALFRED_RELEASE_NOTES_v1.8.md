# Alfred University CETa v1.8 — Modules 16–20 Instructional Reconstruction

**Release:** 2026-10-23, v1.8 delivery candidate. **GitHub baseline:** `22e2c2ab463eef3c9100b9c69b9c0c2fba077346` (v1.7). This update has not been automatically deployed. 

## What changed

- Reconstructed **63 existing teaching pages**, retaining original page IDs and saved positions: **M16 9; M17 14; M18 12; M19 14; M20 14**. Every lesson has a physically grounded explanation, topic-specific worked calculation or diagnostic sequence, limits/common traps and independent recall prompt with reveal.
- **M16:** binary/decimal/oct/hex representations, binary weights, Boolean AND/OR/NOT/XOR, De Morgan's transformations, simplification, signedness and truth-table-based fault checks. Off-topic inherited PLC material removed from this module's teaching path; its archived page identity stays stable.
- **M17:** physical logic families, truth tables, active-low signals, CMOS/TTL thresholds, display drivers, GPIO, flip-flops, counters, clock timing, floating inputs, contact bounce and conditioning.
- **M18:** proper diagnostic hypothesis selection, logic probes and pulsers, instrument capabilities, signal tracing, pulse capture, decoder limitations and reproducible fault documentation. Digital protocol examples are used only in service of logic diagnosis rather than substituting for it.
- **M19:** voltage and level compatibility, connector/grounding/isolation, output contention, UART vs RS-232/USB, I²C pull-ups, SPI selects and timing, cable/shield/termination choices and interface validation.
- **M20:** CPU architecture, microcontrollers, memory/registers, PLC scan behavior, programming concepts, compiler/linker, peripherals, GPIO, timer calculations and embedded firmware troubleshooting.
- Added **39 provisional internal assessment questions**—7 M16, 8 M17, 7 M18, 8 M19, 9 M20—with specific learning-page remediation and module-local CETa objective tags. Original question records remain unchanged. These questions are not independently SME validated or official ETA items.
- Selected, verified real publisher resources are available at exact topical pages: Nexperia, OpenStax, Tektronix, Texas Instruments and Microchip. Illustrations remain at the linked publisher sites; this release does not claim universally embedded or offline media coverage.
- Inherited private Sixth Edition printed-page guide mappings preserved and located contextually: M16 Ch.16 pp.132–136,138–140; M20 Ch.17 pp.149–150. Both mappings remain *provisional*. No verified first-use guide pages yet for M17–M19. Publisher's protected PDF is not distributed.

## Preserved functionality

No changes to the Grizzlies appearance, five-stage Classroom renderer, local progress key, cloud-sync client code, labs, original module/page IDs, earlier assessment IDs, or previous module data M01–M15 and M21–M30. Content reauthoring does not automatically regrade a learner or convert previously read pages into evidence of new mastery. `service-worker.js` changes only the cache version.

## Quality gate and limitations

- JSON parse and `course.js` equality passed; 30 modules; 63 target page positions and all original page IDs preserved; 39 new noncolliding question IDs; original questions intact; unrelated modules unchanged. JavaScript syntax and ZIP integrity verified.
- **38 targeted Chromium browser assertions passed**, including representative lesson renderings at desktop/phone widths, contextual guide display, no tested horizontal overflow, and all-correct mastery forms in the five target modules. The deployed GitHub Pages environment and user-device cache were not tested.
- Historical question-ID collisions remain a separate audit task. New questions are draft/internal until independent technical and editorial review. A quiz/simulation does not demonstrate safe physical electrical work.
- External figures are linked, not locally embedded or reliably offline. Required resource completeness, publisher-guide passage accuracy, full 262-objective validation, WCAG/assistive-technology tests and real Cloud Sync round-trip remain open.

## Update instructions

Flat root-level replacement package only: `course.js`, `course.json`, `service-worker.js`, `ALFRED PROJECT GOVERNANCE.md`, `ALFRED_RELEASE_NOTES_v1.8.md`, and `README_START_HERE.md`. Upload the **files** to the existing `main` branch, not this ZIP. Do not delete other repository files or reset browser storage.
