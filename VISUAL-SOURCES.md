# AU-ESET 301 — Instructional Visual Source Ledger

**Revision:** v16.3.34 · September 19, 2026  
**Policy:** Use real/openly licensed or authoritative-source-grounded visuals when the learner needs to recognize real equipment, workmanship, waveforms, interfaces, or technical structures. Use Alfred-authored diagrams only for Alfred-specific reasoning/process models where a photograph would not teach the intended relationship.

## Provenance labels shown in Classroom and Study

- **Real/source visual** — an actual source image or photograph with creator/source/license attribution.
- **Source-grounded technical visual** — a table, flow, or technical redraw authored for Alfred but grounded in an identified authoritative textbook, government standard, official specification, manufacturer handbook, or official project documentation.
- **Alfred instructional model** — an Alfred-authored reasoning/process diagram used for study strategy, troubleshooting structure, retention, or career workflow. It is not presented as an external source figure.

## Real/open-license media used in v16.3.34

| Subject | Image | Creator / host | Reuse status | Source page |
|---|---|---|---|---|
| Digital multimeter | `Fluke_87_multimeter.jpg` | Alex P. Kok / Wikimedia Commons | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Fluke_87_multimeter.jpg |
| Bench DC power supply | `Bench_power_supply.jpg` | Derrick Parker / Wikimedia Commons | CC0 1.0 | https://commons.wikimedia.org/wiki/File:Bench_power_supply.jpg |
| Oscilloscope display | `Triangular_wave_and_square_wave_on_oscilloscope_screen_(cropped).jpg` | Wikimedia Commons contributor | CC0 1.0 | https://commons.wikimedia.org/wiki/File:Triangular_wave_and_square_wave_on_oscilloscope_screen_(cropped).jpg |
| Good PCB solder joint | `Soldering-PCB-good.jpg` | Tlapicka / Wikimedia Commons | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Soldering-PCB-good.jpg |
| STM32 Nucleo development board | `Nucleo-board.jpg` | Avandalen / Wikimedia Commons | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Nucleo-board.jpg |
| Wiring harness | `Wiring_harness.jpg` | JackApplegarth / Wikimedia Commons | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Wiring_harness.jpg |
| Spectrum-analyzer display / noise floor | `Spectrum_analyzer,_display,_noise_floor.jpg` | Wikimedia Commons | Public domain | https://commons.wikimedia.org/wiki/File:Spectrum_analyzer,_display,_noise_floor.jpg |
| Logic analyzer | `Logic_Analyzer_(33575587133).jpg` | Wolfgang Stief / Wikimedia Commons | CC0 1.0 | https://commons.wikimedia.org/wiki/File:Logic_Analyzer_(33575587133).jpg |

These images are loaded from their Wikimedia-hosted originals rather than copied into the repository. The lesson remains understandable from its text/table/flow if an external image is temporarily unavailable.

## Authoritative technical grounding added or made explicit

- OpenStax / Rice University — Kirchhoff's rules, RC time response, RLC/AC behavior, transformers: https://openstax.org/
- Fluke — digital multimeter operation and measurement practice: https://www.fluke.com/en-us/learn/online-courses/digital-multimeter-essentials-online-course
- Keysight — bench power-supply CV/CC concepts and spectrum analysis: https://www.keysight.com/us/en/learn/course.bench-power-supply-basics.html
- Tektronix — oscilloscope fundamentals: https://www.tek.com/en/documents/primer/oscilloscope-basics
- Texas Instruments — semiconductor/ADC/analog technical training: https://www.ti.com/video/series/precision-labs.html
- Analog Devices — op-amp and power-supply technical handbooks: https://www.analog.com/en/resources/technical-books/op-amp-applications-handbook.html
- Pro Git — Git commit/branch mental model: https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
- GNU C Language Introduction and Reference — pointers, arrays, source/build concepts: https://www.gnu.org/software/c-intro-and-ref/manual/c-intro-and-ref.html
- Arm CMSIS — peripheral/register access model: https://arm-software.github.io/CMSIS_6/latest/Core/group__peripheral__gr.html
- STMicroelectronics — STM32 Nucleo/ST-LINK/SWD hardware documentation: https://www.st.com/
- NXP — UM10204 I2C-bus Specification and User Manual: https://www.nxp.com/docs/en/user-guide/UM10204.pdf
- Microchip — SPI technical documentation: https://developerhelp.microchip.com/xwiki/bin/view/applications/spi/
- NASA — NASA-STD-8739.4 workmanship and Systems Engineering requirements-verification guidance: https://standards.nasa.gov/ and https://www.nasa.gov/reference/appendix-d-requirements-verification-matrix/
- pySerial — official serial API documentation: https://pyserial.readthedocs.io/en/stable/shortintro.html
- NI — hardware-in-the-loop / automated test-system architecture: https://www.ni.com/en/solutions/transportation/hardware-in-the-loop/hardware-in-the-loop--hil--test-system-architectures.html

## Redistribution boundary

Manufacturer, standards-body, and official project documentation is used primarily as **technical grounding and outbound reference**. Alfred does not automatically copy a manufacturer's manual figure merely because it is publicly viewable. Where redistribution permission is not explicit, Alfred creates a new technical table/flow from factual concepts and links back to the authoritative source.

The accepted Week 1 OpenStax/UCF figures remain under their existing source attribution in `week1-instructional-depth.js`; v16.3.34 does not alter their underlying image files or claim a new license for them.

## Retired legacy visuals

The 62 legacy files named `w01-*.svg` through `w31-*.svg` are no longer part of the active learner path in v16.3.34. The new runtime clears their `integrated.visualId` hooks, and the service worker no longer pre-caches them. They may remain in repository history/files until a later repository-cleanup release, but they are not current instructional evidence.

---

## v16.3.85 — Source-authentic-first visual policy

Effective with the Week 2 visual upgrade, Alfred no longer treats an internally redrawn/source-grounded diagram as the default visual solution.

### Permanent sourcing order

1. **Public-domain or CC0 source-authentic visual** that directly teaches the concept.
2. **Permissively licensed source-authentic visual** when no equally strong public-domain/CC0 visual is available.
3. **Official manufacturer/university/government visual as an outbound reference** when redistribution rights are not sufficiently clear.
4. **Alfred-created visual only for a course-specific workflow/reasoning aid or genuine last-resort gap.**

Licensing/provenance and technical correctness are separate checks. A reusable image is not automatically authoritative; the technical meaning must also be verified against a credible source.

Alfred-created process aids must be labeled as **Alfred reasoning aid / Alfred documentation aid** rather than presented as source-authentic technical figures.

### Week 2 source-authentic visual set

| Week 2 concept | Hosted visual | Reuse status | Technical verification |
|---|---|---|---|
| Series vs parallel topology | `Resistors in Series and Parallel.svg` — Jjbeard / Wikimedia Commons | Public domain | OpenStax University Physics Vol. 2 §10.2 |
| Series resistors | `Resistors in Series.svg` — Inductiveload / Wikimedia Commons | Public domain | OpenStax University Physics Vol. 2 §10.2 |
| Parallel resistors | `Resistors in Parallel.svg` — Inductiveload / Wikimedia Commons | Public domain | OpenStax University Physics Vol. 2 §10.2 |
| Kirchhoff Current Law | `Kirchhoff's Current Law.svg` — Inductiveload / Wikimedia Commons | Public domain | OpenStax University Physics Vol. 2 §10.3 |
| Kirchhoff Voltage Law | `KVL.svg` — Steen919 / Wikimedia Commons | Public domain | OpenStax University Physics Vol. 2 §10.3 |
| Mixed series/parallel network | `Combo3.png` — Drjenncash / Wikimedia Commons | CC0 1.0 | OpenStax University Physics Vol. 2 §10.2 |
| Ideal voltage divider | `Voltage divider.svg` — Wikimedia Commons contributors | Public domain | MIT OCW 6.071J resistive circuit analysis |
| Loaded-divider equivalent | `Voltage divider-loaded eq.svg` — Forthommel / Wikimedia Commons | Public domain | MIT OCW Practical Electronics divider-loading lab |

The Week 2 Career decision matrix and repair-record table remain because they are **Alfred-specific reasoning/documentation structures**, not attempts to recreate a physical circuit or instrument. v16.3.85 labels them accordingly.

