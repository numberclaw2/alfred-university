# AU-ESET 301 v16.3.4 — Teaching Media Resource Verification

**Verification date:** September 17, 2026  
**Instructional baseline:** v16.3  
**Runtime patch:** v16.3.4  
**Teaching Media revision:** `2026-09-17-31-week-final-audit-repair`

## Acceptance decision

**PASS — the original 31-week Teaching Media objective is complete after the v16.3.4 final-audit repair.**

The audit standard is teaching value and objective coverage, not resource count. External media must actually support the week's stated learning objective, use exact instructional pages when they exist instead of generic landing pages, preserve the CETa + hardware-oriented embedded balance, and remain supplemental to Alfred's complete primary instruction.

Effective post-overlay validation:

- 31/31 modules have Teaching Media.
- 107 effective media cards.
- 72 effective source objects in the current registry.
- 0 unresolved media source IDs.
- 0 media cards missing `source`, `role`, `use`, `watchFor`, or `gap`.
- The content repair is isolated to Stage 4 Teaching Media metadata; lesson text, labs, assessments, calendar identities, progress, and Cloud Sync are unchanged.

## Final-audit repairs

### Week 6 — transformer ratio gap closed

Week 6 explicitly requires the learner to explain and calculate transformer ratios. The previous media concentrated on impedance, phasors, filters, simulation, and passive references. v16.3.4 adds **Transformers (Part 1)** from North Seattle Community College / All About Circuits, which explicitly teaches turns ratio (`Np/Ns`) and the corresponding primary/secondary voltage relationship. This is distinct from Week 7's newer TI transformer lecture, which carries the deeper real-transformer/magnetics model.

- Source: https://www.allaboutcircuits.com/video-lectures/transformers-part-1/

### Week 12 — soldering/rework instruction gap closed

Week 12 requires actual soldering, defect recognition, safe rework, and ESD practice. The previous media contained strong ESD and harness standards but did not directly teach solder-joint technique. v16.3.4 adds:

- DigiKey, **How To Solder — Electronics with Becky Stern**: direct demonstration of heating the joint, solder flow, wetting, and cooling. https://www.digikey.com/en/videos/d/digi-key-electronics/how-to-solder-electronics-with-becky-stern-digi-key-electronics
- Adafruit Learning System, **Common Soldering Problems**: visual defect/repair guidance for disturbed/cold/overheated joints, wetting problems, excess/insufficient solder, bridges, and lifted pads. https://learn.adafruit.com/adafruit-guide-excellent-soldering/common-problems
- NASA ESD remains required for ESD control; NASA-STD-8739.4 is now explicitly path-specific for harness/wire/terminal evidence instead of being treated as soldering instruction.

NASA's current workmanship program continues to identify soldered electronic assemblies and cable/harness workmanship as separate standards/training domains, supporting this separation of roles.
- NASA Workmanship program: https://sma.nasa.gov/sma-disciplines/workmanship

### Week 25 — generic Saleae landing page replaced

Week 25 requires a controlled sensor/peripheral vertical slice with firmware, physical interface, protocol evidence, conversion, and fault handling. The generic Saleae support page no longer carries a Required role. The effective path now uses exact manufacturer tutorials:

- I²C path: Saleae **STM32 Nucleo Board — Analyzing I2C**. https://www.saleae.com/support/tutorials-learning/example-projects/how-to-analyze-i2c
- SPI path: Saleae **STM32 Nucleo Board — Analyzing SPI**. https://www.saleae.com/support/tutorials-learning/example-projects/how-to-analyze-spi
- Analog path: TI Precision Labs — ADCs. https://www.ti.com/video/series/precision-labs/ti-precision-labs-analog-to-digital-converters-adcs.html
- SparkFun I²C/SPI pages remain optional diagram/reference help rather than primary Required instruction.

### Week 29 — instrumentation/rework retention gap closed

Week 29 explicitly requires retained competence in solder/rework, cable acceptance, DMM/scope/analyzer selection, ESD, and employer-facing evidence. v16.3.4 adds tool-specific refreshers rather than relying only on harness/ESD/career references:

- Fluke, **How to Use a Multimeter — Comprehensive Guide**: functions, jacks, voltage/resistance/continuity/diode measurement, and safety framing. https://www.fluke.com/en/learn/blog/maintenance-monitoring/how-to-use-a-multimeter-guide
- Tektronix, **How to Use an Oscilloscope and Probe — Step-by-Step Tutorial**: grounding, probe connection/compensation, vertical/horizontal controls, triggering, and basic measurements. https://www.tek.com/en/documents/primer/setting-and-using-oscilloscope
- Saleae, **STM32 Nucleo Board — Digital Signals**: concrete logic-analyzer setup/capture on an STM32 signal. https://www.saleae.com/support/tutorials-learning/example-projects/how-to-measure-digital-logic
- Adafruit solder-defect/rework guide: retained workmanship refresher.
- NASA harness and ESD material: retained only for the matching physical evidence paths.
- O*NET technician profile: retained as occupational relevance evidence, not technical instruction.

## 31-week effective Teaching Media map

| Week | Module | Effective cards | Audit |
|---:|---|---:|---|
| 1 | Electricity, Safety, Ohm’s Law, and Power | 4 | PASS |
| 2 | DC Networks, Kirchhoff’s Laws, and Voltage Dividers | 3 | PASS |
| 3 | DMM, Bench Supply, and Oscilloscope | 3 | PASS |
| 4 | AC Waveforms, Capacitors, Inductors, and Time Response | 3 | PASS |
| 5 | Foundation Mastery and Practical Fault Isolation | 3 | PASS |
| 6 | Reactance, Impedance, Resonance, Filters, and Transformers | 4 | PASS |
| 7 | Components, Magnetism, Relays, Motors, and Generators | 3 | PASS |
| 8 | Diodes, BJTs, MOSFETs, and Controlled Switching | 3 | PASS |
| 9 | Rectifiers, Filters, Regulators, and Power-Supply Faults | 3 | PASS |
| 10 | Amplifiers, Op-Amps, Gain, Decibels, and Loading | 3 | PASS |
| 11 | Number Systems, Boolean Logic, and Digital Circuits | 3 | PASS |
| 12 | Soldering, ESD, Rework, and Version-Controlled Repair | 5 | PASS |
| 13 | Schematics, Datasheets, Signal Flow, and Root Cause | 3 | PASS |
| 14 | C Fundamentals and Computer Architecture | 3 | PASS |
| 15 | Embedded C, Bit Operations, State Machines, and Timing | 3 | PASS |
| 16 | STM32 Project Setup, GPIO, Clocks, and SWD Debug | 3 | PASS |
| 17 | UART Communication and Python Serial Control | 3 | PASS |
| 18 | I²C, SPI, Logic Analysis, Sensors, and Actuators | 4 | PASS |
| 19 | Cabling, Audio/Video Signal Paths, and Optical Systems | 3 | PASS |
| 20 | RF, Telecommunications, Spectrum, and Technician Procedures | 4 | PASS |
| 21 | CETa Integration I and Mixed Technician Decisions | 3 | PASS |
| 22 | CETa Repair II and Project Requirements | 3 | PASS |
| 23 | CETa Readiness Gate and Reproducible Project Setup | 3 | PASS |
| 24 | Safe Hardware Bring-Up and CETa Power/Measurement Retention | 3 | PASS |
| 25 | Sensor/Interface Integration and CETa Interface Retention | 6 | PASS |
| 26 | Firmware Architecture, Diagnostics, and CETa Digital Retention | 3 | PASS |
| 27 | Python Hardware Test, Logging, and CETa Computer-Application Retention | 4 | PASS |
| 28 | Fault Injection, Root Cause, and Technical Test Reporting | 3 | PASS |
| 29 | Instrumentation, Rework, Harnesses, and Role-Proof Integration | 7 | PASS |
| 30 | Portfolio, Resume, Interview Defense, and CETa Retention | 3 | PASS |
| 31 | Application Sprint, Interview Feedback, and Continuing Mastery | 3 | PASS |

## Effective source-role checks for repaired weeks

### Week 6 — Reactance, Impedance, Resonance, Filters, and Transformers

- **6.002 Video Lectures** — Required. Use the impedance and frequency-response lecture material as a second explanation for reactive circuits.  
  URL: https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/video_galleries/video-lectures/
- **Transformers (Part 1)** — Required. Use this transformer lecture for the turns-ratio portion that the impedance/filter material does not cover.  
  URL: https://www.allaboutcircuits.com/video-lectures/transformers-part-1/
- **LTspice Getting Started** — Required for virtual route. Use AC analysis to compare calculated and simulated response.  
  URL: https://www.analog.com/en/resources/media-center/videos/series/ltspice-getting-started-tutorial.html
- **Basic Linear Design** — Reference. Use relevant passive/filter chapters only when you need deeper reference on a topology or nonideal effect.  
  URL: https://www.analog.com/media/en/training-seminars/design-handbooks/Basic-Linear-Design/LinearDesign_Cover.pdf

### Week 12 — Soldering, ESD, Rework, and Version-Controlled Repair

- **NASA-HDBK-8739.21 — ESD Control** — Required. Read the course-mapped ESD control sections before any physical electronics work.  
  URL: https://standards.nasa.gov/standard/NASA/NASA-HDBK-873921
- **How To Solder — Electronics with Becky Stern** — Required. Use the soldering demonstration to see the heat-both-surfaces, flow, wetting, and cooling sequence before the workmanship task.  
  URL: https://www.digikey.com/en/videos/d/digi-key-electronics/how-to-solder-electronics-with-becky-stern-digi-key-electronics
- **Adafruit Guide to Excellent Soldering — Common Soldering Problems** — Required. Use the defect gallery to practice accept/rework/escalate decisions and to connect visible symptoms to likely process causes.  
  URL: https://learn.adafruit.com/adafruit-guide-excellent-soldering/common-problems
- **NASA-STD-8739.4 — Crimping, Cables, Harnesses, and Wiring** — Path-specific reference. Use the workmanship standard only when the Week 12 inspection scenario includes wire, terminal, crimp, cable, or harness evidence.  
  URL: https://standards.nasa.gov/standard/NASA/NASA-STD-87394
- **Introduction to GitHub** — Required. Complete the repository/commit portion if Git is new.  
  URL: https://github.com/skills/introduction-to-github

### Week 25 — Sensor/Interface Integration and CETa Interface Retention

- **STM32CubeMX and STM32Cube HAL Basics** — Required reference. Use the exact MCU peripheral/HAL section for the selected interface and confirm generated configuration against the device documentation.  
  URL: https://www.st.com/content/st_com/en/support/learning/stm32-moocs/stm32cubemx-and-cubeHhal-basics.html
- **STM32 Nucleo Board — Analyzing I2C** — Required for I²C path. Use this complete STM32 sensor example if your vertical slice uses I²C.  
  URL: https://www.saleae.com/support/tutorials-learning/example-projects/how-to-analyze-i2c
- **STM32 Nucleo Board — Analyzing SPI** — Required for SPI path. Use this complete STM32 peripheral example if your vertical slice uses SPI.  
  URL: https://www.saleae.com/support/tutorials-learning/example-projects/how-to-analyze-spi
- **TI Precision Labs — ADCs** — Required for analog path. Use the TI ADC series when your vertical slice is analog rather than I²C/SPI.  
  URL: https://www.ti.com/video/series/precision-labs/ti-precision-labs-analog-to-digital-converters-adcs.html
- **I2C** — I²C help. Use only as a quick electrical/transaction diagram reference when an I²C concept remains unclear after the Saleae example.  
  URL: https://learn.sparkfun.com/tutorials/i2c/all
- **Serial Peripheral Interface (SPI)** — SPI help. Use only as a quick signal/mode diagram reference when an SPI concept remains unclear after the Saleae example.  
  URL: https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all

### Week 29 — Instrumentation, Rework, Harnesses, and Role-Proof Integration

- **Adafruit Guide to Excellent Soldering — Common Soldering Problems** — Required workmanship refresher. Use the defect/rework gallery as a fast workmanship-retention check before you claim solder or rework evidence in the dossier.  
  URL: https://learn.adafruit.com/adafruit-guide-excellent-soldering/common-problems
- **NASA-STD-8739.4 — Crimping, Cables, Harnesses, and Wiring** — Required for harness route. Use the NASA workmanship criteria when your role-proof task includes crimping, cable, terminal, harness, or wiring evidence.  
  URL: https://standards.nasa.gov/standard/NASA/NASA-STD-87394
- **NASA-HDBK-8739.21 — ESD Control** — Required for physical route. Reapply ESD work-area and handling controls for any physical electronics route.  
  URL: https://standards.nasa.gov/standard/NASA/NASA-HDBK-873921
- **How to Use a Multimeter — Comprehensive Guide** — Required for DMM evidence. Use this refresher when the dossier uses DMM evidence.  
  URL: https://www.fluke.com/en/learn/blog/maintenance-monitoring/how-to-use-a-multimeter-guide
- **How to Use an Oscilloscope and Probe — Step-by-Step Tutorial** — Required for oscilloscope evidence. Use this refresher when the dossier uses oscilloscope evidence.  
  URL: https://www.tek.com/en/documents/primer/setting-and-using-oscilloscope
- **STM32 Nucleo Board — Digital Signals** — Required for logic-analyzer evidence. Use this STM32 logic-analyzer example when the dossier uses digital timing or logic-analyzer evidence.  
  URL: https://www.saleae.com/support/tutorials-learning/example-projects/how-to-measure-digital-logic
- **Electrical and Electronic Engineering Technologists and Technicians** — Required reference. Map the finished dossier artifacts to current technician duties.  
  URL: https://www.onetonline.org/link/summary/17-3023.00

## Scope protection

The v16.3.4 repair does not alter the 62 primary lessons, labs, assessment bank, mastery policy, standards mapping, study-guide assignments, calendar dates/UIDs, module sequence, saved-progress identities, Cloud Sync protocol 2, or the 50/50 CETa/Career weighting. It changes only the external Teaching Media/source overlay, release metadata, release notes, cache marker, README, and this verification record.

## Source-quality policy retained

- Alfred is the primary instructor.
- University, manufacturer, government, and established electronics education resources are preferred.
- Titles/thumbnails alone are insufficient; the content must map to the stated objective.
- Generic landing pages do not carry a Required teaching role when an exact instructional page is available.
- Multiple resources are used only when they cover different objective components or different learner paths.
- Embedded material remains hardware/electronics oriented; software-only drift is not used to fill media slots.
- Review/readiness weeks may legitimately use standards or occupational references when the role is explicitly reference/relevance rather than instruction.

## Final acceptance

With the Week 6, 12, 25, and 29 repairs applied, the previously identified residual gaps are closed. The effective 31-week Teaching Media layer now meets the requested objective and can be treated as accepted once the v16.3.4 files are deployed and the public GitHub Pages build is verified.

