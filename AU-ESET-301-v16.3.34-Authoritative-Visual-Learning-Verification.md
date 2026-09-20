# AU-ESET 301 v16.3.34 — Authoritative Visual Learning Verification

**Release date:** September 19, 2026  
**Baseline:** v16.3.33 `v16.3.33-career-beginner-first-instructional-depth-20260919`  
**Candidate:** v16.3.34 `v16.3.34-authoritative-visual-learning-layer-20260919`  
**Baseline deployment:** GitHub Pages run #94 · commit `e4989c2b3590e95904ee06b7dc00a985d01ad535` · artifact `10593206210`  
**Result:** **PASS FOR UPLOAD**

## Purpose

Audit the complete instructional visual layer and rebuild it around an educationally explicit provenance rule:

- use **real/open-license source visuals** when the learner needs to recognize real equipment, workmanship, displays, boards, or test hardware;
- use **source-grounded technical visuals** when an authoritative source is available but direct redistribution is unnecessary or unclear;
- use **Alfred instructional models** only when the visual is teaching Alfred's own reasoning/process structure rather than pretending to be an external technical figure.

The goal is not to maximize image count. The goal is to place a visual where it makes a mental model, physical object, waveform, interface, or professional artifact easier to understand.

## Corrected baseline visual inventory

The pre-update audit initially described the 62 `w01-*.svg` through `w31-*.svg` assets as dead files. Runtime inspection corrected that conclusion before implementation:

- **62/62 legacy SVGs were still wired into the learner path** through each lesson's `integrated.visualId`.
- `learn.js` rendered those legacy visual IDs in the Purpose & mental-model stage.
- `service-worker.js` also pre-cached the 62 files.
- Separately, newer section-level figures already existed: accepted Week 1 CETa figures and v16.3.33 Career flow figures.
- `learn.js` also owns **30 weekly orientation `CONCEPT_MAPS`** for Weeks 2–31.

v16.3.34 therefore does not merely ignore the old SVGs. It explicitly clears all legacy `visualId` hooks at runtime and removes the 62 SVGs from the service-worker CORE list. The physical files may remain in repository history/current storage until a future cleanup release, but they are no longer current instructional evidence.

## Implemented visual architecture

### Provenance system

Classroom and Study now identify each instructional figure as one of:

1. **Real/source visual** — an actual source image/photograph with creator, source, and license attribution where applicable.
2. **Source-grounded technical visual** — an Alfred-authored technical table/flow/redraw grounded in a named textbook, specification, standards body, manufacturer handbook, or official project documentation.
3. **Alfred instructional model** — an Alfred-authored reasoning/process diagram. These remain appropriate for troubleshooting loops, model-selection logic, retention, and career workflow where an external photograph would not teach the intended relationship.

### Real/open-license media

v16.3.34 uses remotely hosted openly licensed/public-domain media, with item-level attribution shown in the learner UI, for representative physical recognition needs including:

- digital multimeter;
- bench DC power supply;
- oscilloscope display;
- good PCB solder joint;
- STM32 Nucleo development board;
- wiring harness;
- spectrum-analyzer display/noise floor;
- logic analyzer.

The detailed creator, source-page, and license ledger is recorded in `VISUAL-SOURCES.md`. The course text remains understandable if an external image is temporarily unavailable.

### Authoritative technical grounding

New or explicit visual grounding uses authoritative/open educational sources including OpenStax/Rice University, Fluke, Keysight, Tektronix, Texas Instruments, Analog Devices, Pro Git, GNU C, Arm CMSIS, STMicroelectronics, NXP, Microchip, NASA, pySerial, and NI. Manufacturer/standards figures are not automatically copied into the public site when reuse permission is unclear; in those cases Alfred creates a new technical table/flow from factual concepts and links to the authoritative source.

## CETa visual coverage

The accepted Week 1 source figures remain. Weeks 2–31 now each receive at least one targeted section-level visual. The structural harness reported:

- Week 1 CETa: **4** section-level figures.
- Weeks 2–31 CETa: **1 or more each**.
- **31/31 CETa weeks have section-level visual coverage.**

Examples of the repaired visual layer include:

- Week 2 KCL/KVL conservation model grounded in OpenStax.
- Week 3 real DMM / bench supply / oscilloscope recognition gallery.
- Week 4 RC time-response reference.
- Week 6 reactance/phase table grounded in OpenStax RLC material.
- Week 9 power-supply block chain grounded in Analog Devices material.
- Week 10 op-amp negative-feedback loop grounded in Analog Devices.
- Week 12 real solder-joint recognition plus NASA workmanship grounding.
- Week 14 compiler/build pipeline grounded in GNU C.
- Week 15 GPIO/register path grounded in Arm CMSIS.
- Week 16 real STM32 Nucleo board plus ST documentation.
- Week 18 I2C/SPI comparison grounded in NXP/Microchip.
- Week 19 real wiring harness plus NASA workmanship.
- Week 20 real spectrum-analyzer display plus Keysight training.
- Week 22 requirements-verification matrix grounded in NASA systems engineering.
- Week 27 automated-test/data-record reference grounded in NI test architecture.

## Career visual repairs

v16.3.34 preserves the v16.3.33 beginner-first Career instructional depth while repairing visuals where a generic Alfred flow was not the best primary teaching representation.

Key changes:

- **Week 1:** the primary bench-orientation visual now uses real bench-power-supply and DMM photographs, while the Career workflow remains available as process instruction.
- **Week 12:** Git concept flow is explicitly grounded in Pro Git's repository/commit/branch model.
- **Week 14:** the prior generic pointer flow is replaced by a concrete memory/address table grounded in GNU C pointer/array definitions.
- **Week 16:** adds real STM32 Nucleo board recognition grounded in ST documentation.
- **Week 17:** Python serial flow is grounded in pySerial documentation.
- **Week 18:** I2C/SPI technical representation is grounded in NXP/Microchip documentation.
- **Week 19:** adds real harness recognition grounded in NASA workmanship.
- **Week 20:** adds real spectrum-analyzer recognition grounded in Keysight material.
- **Week 22:** requirements/verification visual uses a NASA-grounded verification-matrix structure.
- **Week 27:** adds real logic-analyzer recognition and NI test-system grounding.

Alfred-specific process diagrams that remain educationally appropriate are retained and now clearly labeled as Alfred instructional models rather than external/source figures.

## Quantitative visual audit

The deterministic curriculum/runtime harness produced the following candidate state:

- **68 section-level instructional figures** across CETa + Career.
- Provenance classification of those 68 figures:
  - **15 Real/source visuals**
  - **25 Source-grounded technical visuals**
  - **28 Alfred instructional models**
- **30 additional weekly orientation concept maps** remain in `learn.js`; they are now labeled **Alfred instructional model**.
- **0 legacy `integrated.visualId` hooks remain active.**
- **0 legacy `wNN-*.svg` references remain in the service-worker CORE cache.**
- Gallery/source integrity scan: **0 gallery issues, 0 source-link issues**.

The counts above describe rendered visual elements/models, not unique external image files.

## State / question integrity

The visual overlay does not change lesson sequencing or saved-progress addressing:

- PASS — all lesson titles unchanged.
- PASS — all teaching-section titles unchanged.
- PASS — all teaching-section counts unchanged.
- PASS — **93/93 Career question locations** still resolve to valid teaching-section targets.
- PASS — **13/13 Career semantic competency tasks** still resolve to valid teaching sections.
- PASS — the v16.3.32 Study reached-material boundary remains intact because Study consumes the same reached teaching sections after the visual overlay has been applied.

## Runtime and renderer QA

### Syntax / load order

- PASS — `node --check instructional-visuals.js`
- PASS — `node --check learn.js`
- PASS — `node --check study.js`
- PASS — `node --check release-notes-current.js`
- PASS — `node --check service-worker.js`
- PASS — `instructional-visuals.js` loads exactly once on Classroom, Study, and Search, after the accepted Week 1/Career content overlays and before the consuming page runtime.

### Chromium renderer harness

The environment blocked normal local/file navigation and external network image retrieval, so this release does **not** claim a full native routed-site browser test. Instead, the exact modified Classroom and Study figure-rendering functions were exercised in an inline Chromium harness with representative real/source, source-grounded, Alfred-model, table, flow, and gallery figures. External image URLs were replaced only inside the QA harness with local data-URI placeholders; production source URLs/metadata were not altered.

- Desktop **1440 × 1000**: PASS — 7 Classroom fixtures + 7 Study fixtures, provenance labels present, no page-level horizontal overflow, zero JavaScript errors.
- Mobile **390 × 844**: PASS — same representative fixture set, galleries stack correctly, tables remain contained/scrollable, no page-level horizontal overflow, zero JavaScript errors.
- Representative Week 1/3 equipment gallery, Week 14 pointer table, Week 16 board visual, Week 20 spectrum visual, Week 22 verification table, and Alfred-process model were visually inspected.

External image source pages/licenses were verified separately; `VISUAL-SOURCES.md` records the resulting provenance.

## Protected-system verification

PASS — v16.3.34 does not intentionally alter:

- course release 16.3;
- evidence revision 16.2;
- Cloud Sync protocol 2;
- CETa or Career teaching-section sequence/titles/counts;
- CETa standards mappings or Career competency goals;
- assessment answers/scoring;
- mastery formulas or safety-critical thresholds;
- labs/projects or calendar IDs/UIDs/dates;
- Progress identities;
- the 599-term glossary or vocabulary click/double-click interaction;
- Teaching Media verification/selection;
- Student/Builder Mode or Focus Mode;
- completed-section back/forward review or Back to question;
- branding assets.

## Acceptance

**PASS FOR UPLOAD.** v16.3.34 replaces the competing legacy synthetic visual path with a single provenance-aware visual-learning layer: real/open-license imagery for physical recognition, authoritative-source-grounded technical representations for technical concepts, and clearly labeled Alfred models for reasoning/process instruction.
