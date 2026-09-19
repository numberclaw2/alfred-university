# AU-ESET 301 — v16.3.22 Course Dictionary Source Verification

**Date:** September 18, 2026  
**Runtime:** v16.3.22  
**Dictionary entries:** 282

## Purpose
This release adds an in-house vocabulary support layer so a learner can define unfamiliar course terminology without leaving the Alfred University learning environment. The Dictionary data was selected by scanning the live AU-ESET 301 lesson/curriculum sources and retaining textbook-level electronics, measurement, embedded-systems, protocol, RF, test, PCB, and safety vocabulary.

## Definition policy
The Dictionary does **not** reproduce large blocks of standards text. Each entry contains a concise course-friendly paraphrase grounded in an authoritative terminology source, followed by a more technical paraphrase. Each full entry links to the authoritative source family. If a source defines a term more narrowly for a specific standard or application, that source context controls.

## Authoritative source families used
- **IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)** — https://www.electropedia.org/  
  International electrotechnical terminology maintained by the IEC.
- **NIST — SI Units: Electric Current and Electrical Derived Units** — https://www.nist.gov/pml/owm/si-units-electric-current  
  U.S. national metrology reference for SI electrical quantities and units.
- **OSHA — Electrical Glossary and Electrical Safety Definitions** — https://www.osha.gov/etools/electric-power/glossary-terms  
  U.S. occupational electrical-safety terminology.
- **NIST CSRC Glossary** — https://csrc.nist.gov/glossary  
  NIST technical terminology for computing, firmware, hardware, and related systems.
- **NIST Technical Note 1297 — Measurement Uncertainty Terminology** — https://www.nist.gov/pml/nist-technical-note-1297  
  NIST guidance for measurement accuracy, repeatability, reproducibility, calibration, and uncertainty.
- **NXP — UM10204 I²C-bus Specification and User Manual** — https://www.nxp.com/docs/en/user-guide/UM10204.pdf  
  Original I²C bus specification maintained by NXP.
- **Arm Developer Documentation** — https://developer.arm.com/documentation  
  Processor architecture, register, exception, debug, and embedded-system terminology.
- **STMicroelectronics — STM32 MCU Developer Zone** — https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html  
  Vendor-authoritative STM32 microcontroller and peripheral documentation.
- **IPC Standards — Electronic Assembly and Printed Board Standards** — https://www.ipc.org/meet-your-standards  
  Industry standards for PCB, soldering, rework, and cable/harness workmanship.
- **Python 3 Documentation** — https://docs.python.org/3/  
  Language-authoritative Python terminology.
- **FCC — Radio Spectrum and RF Terminology** — https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation  
  U.S. communications regulator reference for radio spectrum terminology.

## Course-source scan
Vocabulary selection was cross-checked against the current repository lesson/curriculum sources: `course-data.js`, `academic-content.js`, `curriculum-data.js`, `week1-instructional-depth.js`, `semantic-repair.js`, and `teaching-media-content-completion.js`.

## Runtime behavior verified
- Classroom vocabulary decoration is data-driven from `glossary-data.js`; lesson source files are not rewritten term-by-term.
- The runtime excludes links, buttons, inputs, code/preformatted blocks, scripts/styles, and previously decorated terms.
- Hover and keyboard focus show the same definition card.
- Click targets an exact `glossary.html#term-slug` entry.
- The Dictionary supports search, category filtering, A–Z filtering, direct anchors, mobile layout, and authoritative-source links.
- The service worker caches Dictionary assets and uses a new v16.3.22 namespace to avoid stale runtime behavior.

## Scope protected
No changes were made to curriculum sequencing, lesson wording, assessment questions/scoring, mastery rules, labs, projects, calendar dates/identities, progress identities, Cloud Sync protocol, Teaching Media, or branding assets.
