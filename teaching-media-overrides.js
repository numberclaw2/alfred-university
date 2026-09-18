(() => {
  const C = window.ALFRED_CURRICULUM;
  if (!C || !Array.isArray(C.modules)) return;

  C.sources = C.sources || {};
  Object.assign(C.sources, {
    tiTransformers2026: {
      title: "Transformers introduction",
      org: "Texas Instruments / University of Texas at Austin",
      kind: "University-industry video lecture",
      url: "https://www.ti.com/video/6244607690001"
    },
    tiInductiveLoads: {
      title: "Driving inductive loads with power switches",
      org: "Texas Instruments",
      kind: "Manufacturer training video",
      url: "https://www.ti.com/video/6018730150001"
    },
    tiMotorTypes: {
      title: "Motor types",
      org: "Texas Instruments",
      kind: "Manufacturer training video",
      url: "https://www.ti.com/video/6067548423001"
    },
    tiMosfetBasics2026: {
      title: "MOSFET basics",
      org: "Texas Instruments / University of Texas at Austin",
      kind: "University-industry video lecture",
      url: "https://www.ti.com/video/6243264133001"
    },
    digiKeySchematics: {
      title: "How to Read a Schematic — Another Teaching Moment",
      org: "DigiKey Electronics",
      kind: "Industry instructional video",
      url: "https://www.digikey.com/en/videos/d/digi-key-electronics/how-to-read-a-schematic-another-teaching-moment-digi-key-electronics"
    },
    nscTroubleshooting: {
      title: "Elements of System Level Troubleshooting",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture",
      url: "https://www.allaboutcircuits.com/video-lectures/elements-system-level-troubleshooting/"
    },
    tiBoardTroubleshooting: {
      title: "Board level troubleshooting",
      org: "Texas Instruments",
      kind: "Manufacturer training video",
      url: "https://www.ti.com/video/5971802514001"
    },
    cs50Week1C2026: {
      title: "CS50x 2026 — Week 1 C",
      org: "Harvard University",
      kind: "University lecture, notes, transcript, and video",
      url: "https://cs50.harvard.edu/x/weeks/1/"
    },
    stCubeIdeBasics: {
      title: "STM32CubeIDE basics MOOC",
      org: "STMicroelectronics",
      kind: "Manufacturer hands-on course",
      url: "https://www.st.com/content/st_com/en/support/learning/stm32-moocs/STM32CubeIDE_basics_MOOC.html"
    },
    saleaeStm32Uart: {
      title: "STM32 Nucleo Board — Analyzing UART",
      org: "Saleae",
      kind: "Manufacturer hands-on tutorial",
      url: "https://www.saleae.com/support/tutorials-learning/example-projects/how-to-analyze-uart"
    },
    saleaeAsyncSerial: {
      title: "Async Serial Analyzer — User Guide",
      org: "Saleae",
      kind: "Manufacturer protocol-analyzer guide",
      url: "https://www.saleae.com/support/protocol-analyzers/analyzer-user-guides/using-async-serial"
    },
    saleaeStm32I2c: {
      title: "STM32 Nucleo Board — Analyzing I2C",
      org: "Saleae",
      kind: "Manufacturer hands-on tutorial",
      url: "https://www.saleae.com/support/tutorials-learning/example-projects/how-to-analyze-i2c"
    },
    saleaeStm32Spi: {
      title: "STM32 Nucleo Board — Analyzing SPI",
      org: "Saleae",
      kind: "Manufacturer hands-on tutorial",
      url: "https://www.saleae.com/support/tutorials-learning/example-projects/how-to-analyze-spi"
    },
    saleaeI2cGuide: {
      title: "I2C Analyzer — User Guide",
      org: "Saleae",
      kind: "Manufacturer protocol-analyzer guide",
      url: "https://www.saleae.com/support/protocol-analyzers/analyzer-user-guides/using-i2c"
    },
    saleaeSpiGuide: {
      title: "SPI Analyzer — User Guide",
      org: "Saleae",
      kind: "Manufacturer protocol-analyzer guide",
      url: "https://www.saleae.com/support/protocol-analyzers/analyzer-user-guides/using-spi"
    },
    aacTransformerPart1: {
      title: "Transformers (Part 1)",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture",
      url: "https://www.allaboutcircuits.com/video-lectures/transformers-part-1/"
    },
    digiKeySoldering: {
      title: "How To Solder — Electronics with Becky Stern",
      org: "DigiKey Electronics",
      kind: "Industry instructional video",
      url: "https://www.digikey.com/en/videos/d/digi-key-electronics/how-to-solder-electronics-with-becky-stern-digi-key-electronics"
    },
    adafruitSolderProblems: {
      title: "Adafruit Guide to Excellent Soldering — Common Soldering Problems",
      org: "Adafruit Learning System",
      kind: "Industry workmanship tutorial",
      url: "https://learn.adafruit.com/adafruit-guide-excellent-soldering/common-problems"
    },
    flukeMultimeterGuide: {
      title: "How to Use a Multimeter — Comprehensive Guide",
      org: "Fluke",
      kind: "Manufacturer measurement guide",
      url: "https://www.fluke.com/en/learn/blog/maintenance-monitoring/how-to-use-a-multimeter-guide"
    },
    tekScopeSetup: {
      title: "How to Use an Oscilloscope and Probe — Step-by-Step Tutorial",
      org: "Tektronix",
      kind: "Manufacturer oscilloscope primer",
      url: "https://www.tek.com/en/documents/primer/setting-and-using-oscilloscope"
    },
    saleaeDigitalSignals: {
      title: "STM32 Nucleo Board — Digital Signals",
      org: "Saleae",
      kind: "Manufacturer hands-on logic-analyzer tutorial",
      url: "https://www.saleae.com/support/tutorials-learning/example-projects/how-to-measure-digital-logic"
    }
  });

  const updateMedia = (week, media) => {
    const module = C.modules.find(item => Number(item.week) === Number(week));
    if (!module || !module.integration) return;
    module.integration.media = media;
    module.sourceIds = [...new Set([...(module.sourceIds || []), ...media.map(item => item.source)])];
  };

  updateMedia(6, [
    {
      source: "mitVideos",
      use: "Use the impedance and frequency-response lecture material as a second explanation for reactive circuits.",
      role: "Required",
      watchFor: "Follow phasor relationships, frequency dependence, impedance, and how reactive elements alter magnitude and phase.",
      gap: "Alfred limits the required math to the course outcomes and adds technician-level prediction and bench interpretation."
    },
    {
      source: "aacTransformerPart1",
      use: "Use this transformer lecture for the turns-ratio portion that the impedance/filter material does not cover.",
      role: "Required",
      watchFor: "Connect primary-to-secondary turns ratio to voltage ratio, current direction, step-up/step-down behavior, and the meaning of Np/Ns.",
      gap: "Alfred supplies the exact Week 6 calculations, safe low-voltage application, and the later Week 7 real-transformer/magnetics depth."
    },
    {
      source: "adiLtspice",
      use: "Use AC analysis to compare calculated and simulated response.",
      role: "Required for virtual route",
      watchFor: "Set source amplitude and sweep range deliberately, then compare the plot to the written prediction.",
      gap: "The written prediction and diagnostic interpretation remain required."
    },
    {
      source: "adiLinear",
      use: "Use relevant passive/filter chapters only when you need deeper reference on a topology or nonideal effect.",
      role: "Reference",
      watchFor: "Look up the specific filter, resonance, loading, or passive-network point you are investigating.",
      gap: "This handbook is not the primary novice lesson."
    }
  ]);

  updateMedia(7, [
    {
      source: "tiTransformers2026",
      use: "Use this lecture for the transformer and magnetic-circuit portion of the week.",
      role: "Required",
      watchFor: "Track ideal voltage/current transformation, magnetizing inductance, leakage inductance, turns, and why real transformers differ from the ideal model.",
      gap: "Alfred still supplies the CETa component-family coverage, calculations, relay ratings, and required checks."
    },
    {
      source: "tiInductiveLoads",
      use: "Use the relay/solenoid switching examples to see stored magnetic energy and turn-off protection in a real design context.",
      role: "Required",
      watchFor: "Follow energizing current, de-energizing voltage reversal, flyback/clamp paths, stored energy, and measured decay time.",
      gap: "The module's low-voltage lab and its safety limits remain the required application path."
    },
    {
      source: "tiMotorTypes",
      use: "Use the motor-type overview to connect magnetic force to brushed, stepper, and brushless motor behavior.",
      role: "Help",
      watchFor: "Identify what physically creates torque and what differs among the three common motor families.",
      gap: "This is a conceptual bridge, not a substitute for Alfred's CETa machines and relay instruction."
    }
  ]);

  updateMedia(8, [
    {
      source: "nptelAnalog",
      use: "Use the diode and transistor lecture sections for a formal second explanation of junction behavior and BJT operation.",
      role: "Required",
      watchFor: "Focus on forward/reverse junction behavior, transistor operating regions, and how the control terminal changes current.",
      gap: "Alfred provides the exact CETa device-family distinctions, datasheet workflow, and low-side switch troubleshooting."
    },
    {
      source: "tiMosfetBasics2026",
      use: "Use this lecture to make the MOSFET switch model concrete before selecting or troubleshooting a device.",
      role: "Required",
      watchFor: "Separate gate control, body diode, switching behavior, and low on-state resistance; do not treat threshold voltage as a guaranteed full-on condition.",
      gap: "Alfred supplies the 3.3 V logic-level selection test, protection path, and measured fault-isolation sequence."
    },
    {
      source: "adiLtspice",
      use: "Simulate the low-side switch and one reversible fault before physical power.",
      role: "Alternate / reinforcement",
      watchFor: "Compare gate, drain, load current, and flyback behavior rather than watching only the animation.",
      gap: "Simulation does not replace physical ESD handling, pinout verification, or safe measurement."
    }
  ]);

  updateMedia(12, [
    {
      source: "nasaESD",
      use: "Read the course-mapped ESD control sections before any physical electronics work.",
      role: "Required",
      watchFor: "Distinguish protected work area, packaging, grounding, personnel controls, and ESD protection from personal electrical safety.",
      gap: "Alfred supplies the beginner sequence, stop conditions, and the lab-specific checklist."
    },
    {
      source: "digiKeySoldering",
      use: "Use the soldering demonstration to see the heat-both-surfaces, flow, wetting, and cooling sequence before the workmanship task.",
      role: "Required",
      watchFor: "Watch where heat is applied, when solder is fed, what proper wetting looks like, and why a joint should cool without movement.",
      gap: "Alfred defines the approved low-risk practice route, ventilation/PPE limits, and required verification."
    },
    {
      source: "adafruitSolderProblems",
      use: "Use the defect gallery to practice accept/rework/escalate decisions and to connect visible symptoms to likely process causes.",
      role: "Required",
      watchFor: "Identify disturbed/cold/overheated joints, insufficient wetting, excess or insufficient solder, bridges, lifted pads, and appropriate repair or stop decisions.",
      gap: "This is practical instructional reinforcement, not a substitute for employer, IPC, or NASA certification criteria."
    },
    {
      source: "nasaHarness",
      use: "Use the workmanship standard only when the Week 12 inspection scenario includes wire, terminal, crimp, cable, or harness evidence.",
      role: "Path-specific reference",
      watchFor: "Use objective acceptance observations rather than appearance-only judgments.",
      gap: "It does not teach solder-joint technique; the soldering resources and Alfred lesson cover that skill."
    },
    {
      source: "githubSkills",
      use: "Complete the repository/commit portion if Git is new.",
      role: "Required",
      watchFor: "Practice status, add, commit, and history without placing credentials or secrets in the repository.",
      gap: "Alfred connects the version-control workflow to before/after physical evidence and verification."
    }
  ]);

  updateMedia(13, [
    {
      source: "digiKeySchematics",
      use: "Use this video to reinforce schematic symbols, labels, electrical connectivity, and how a schematic differs from physical layout.",
      role: "Required",
      watchFor: "Trace nets and reference designators as relationships rather than interpreting drawing position as board position.",
      gap: "Alfred provides the exact CETa diagram-type distinctions, IC pinout discipline, and required test-point reasoning."
    },
    {
      source: "nscTroubleshooting",
      use: "Use the college troubleshooting lecture for block-diagram thinking, signal tracing, substitution, and divide-and-conquer.",
      role: "Required",
      watchFor: "Notice that every measurement is compared with an expected good value and that midpoint tests are chosen to eliminate hypotheses.",
      gap: "Alfred supplies the current evidence workflow, schematic-to-node predictions, and graded troubleshooting application."
    },
    {
      source: "tiBoardTroubleshooting",
      use: "Use TI's board-level lesson as an industry example of disciplined root-cause verification.",
      role: "Reinforcement",
      watchFor: "Focus on engineering checks, the A-B-A swap, PCB parasitics, cleanliness, and what evidence is needed before blaming a component.",
      gap: "The week remains broader than op-amp boards; Alfred's lesson controls the general method."
    }
  ]);

  updateMedia(14, [
    {
      source: "cs50Week1C2026",
      use: "Use Harvard's current Week 1 C lecture/notes as the primary external introduction to C syntax, types, control flow, functions, compiling, and command-line work.",
      role: "Required",
      watchFor: "Connect source code to compilation and execution; practice variables, types, conditionals, loops, functions, operators, and compiler feedback.",
      gap: "Alfred narrows the material to electronics/embedded work and adds structs, pointers, bit operations, defect classes, tests, and hardware-oriented transfer."
    },
    {
      source: "cs50C",
      use: "Use the Week 4 memory/pointers material only after the Week 1 C foundation.",
      role: "Required follow-on",
      watchFor: "Draw addresses, pointers, arrays, stack/heap relationships, bounds, and failure modes instead of memorizing pointer syntax.",
      gap: "Alfred supplies the embedded bridge, bit-field work, required coding task, and assessment."
    },
    {
      source: "beejC",
      use: "Use the exact language chapter when a syntax or C-semantics question remains after the lectures.",
      role: "Reference",
      watchFor: "Look up types, functions, arrays, strings, structs, enums, pointers, and undefined-behavior boundaries as needed.",
      gap: "Do not browse the whole book instead of writing and testing the assigned program."
    }
  ]);

  updateMedia(16, [
    {
      source: "stCubeIdeBasics",
      use: "Use ST's hands-on course for the actual STM32CubeIDE workflow and the peripheral examples that match this module.",
      role: "Required",
      watchFor: "Complete the GPIO HAL example first, then study timer PWM, ADC+DMA+timer, USART, project management, and where generated initialization belongs.",
      gap: "Alfred supplies the staged bring-up ladder, power/current checks, SWD evidence contract, deliberate fault injection, and mastery gate."
    },
    {
      source: "armEmbedded",
      use: "Use the Cortex-M course for architecture, registers, memory-mapped peripherals, and embedded-C context.",
      role: "Required reinforcement",
      watchFor: "Connect C statements to core/peripheral registers and to the debugger observations you can actually verify.",
      gap: "The exact STM32 board configuration and physical pin proof remain in the ST/Alfred path."
    },
    {
      source: "stTraining",
      use: "Use family- or board-specific ST training only when your actual device differs from the course example.",
      role: "Reference",
      watchFor: "Confirm clocks, boot configuration, pin alternate functions, debug interface, and family-specific peripheral details.",
      gap: "Do not copy settings from a different MCU or Nucleo board without checking the exact documentation."
    }
  ]);

  updateMedia(17, [
    {
      source: "saleaeStm32Uart",
      use: "Use the STM32 UART capture walkthrough to connect firmware settings to real TX/RX waveforms and decoded bytes.",
      role: "Required",
      watchFor: "Set 115200 8-N-1, capture both directions, decode the traffic, and measure timing so baud and framing become observable facts.",
      gap: "Alfred supplies the layered electrical/framing/application diagnosis and the Python evidence requirements."
    },
    {
      source: "saleaeAsyncSerial",
      use: "Use the analyzer guide when a capture decodes incorrectly or you need to verify frame settings.",
      role: "Required reference",
      watchFor: "Check bit rate, bits per frame, parity, stop bits, inversion, idle periods, and common causes of framing errors.",
      gap: "A decoded frame does not prove the application message is valid; Alfred's parser/logging work handles that layer."
    },
    {
      source: "pyserial",
      use: "Use pySerial's documentation for the host-side API and timeout/configuration behavior.",
      role: "Reference",
      watchFor: "Implement explicit port settings, timeouts, deterministic close/cleanup, byte handling, and bounded reads.",
      gap: "Alfred defines the message framing, validation, failure logging, and test evidence contract."
    }
  ]);

  updateMedia(18, [
    {
      source: "saleaeStm32I2c",
      use: "Follow the STM32 Nucleo I2C example from firmware through wiring, capture, decode, and a changing sensor value.",
      role: "Required",
      watchFor: "Identify SDA/SCL, open-drain behavior, pull-ups, address, ACK/NACK, analyzer setup, and how a real sensor transaction appears on the wire.",
      gap: "Alfred adds datasheet register planning, electrical rise-time reasoning, controlled faults, and layered diagnosis."
    },
    {
      source: "saleaeStm32Spi",
      use: "Follow the STM32 SPI example to make clock, MOSI, MISO, chip-select, and analyzer settings concrete.",
      role: "Required",
      watchFor: "Correlate firmware transfers with SCLK, MOSI/MISO, chip-select, and the selected SPI mode rather than trusting decoded text alone.",
      gap: "Alfred supplies the CPOL/CPHA failure reasoning, datasheet timing checks, and evidence contract."
    },
    {
      source: "saleaeI2cGuide",
      use: "Use the I2C analyzer guide when configuring or interpreting captures.",
      role: "Reference",
      watchFor: "Verify channel mapping, 7-bit address display, START/STOP, direction, data, ACK/NACK, and noise around clock edges.",
      gap: "Protocol decode is evidence about bus traffic, not proof that the chosen register or converted engineering value is correct."
    },
    {
      source: "saleaeSpiGuide",
      use: "Use the SPI analyzer guide when decoded data does not match the datasheet transaction.",
      role: "Reference",
      watchFor: "Check clock/data/channel mapping, enable/chip-select, word size, bit order, and clock phase/polarity assumptions.",
      gap: "Alfred still requires raw-waveform inspection, datasheet comparison, fault classification, correction, and retest."
    }
  ]);

  updateMedia(25, [
    {
      source: "stMooc",
      use: "Use the exact MCU peripheral/HAL section for the selected interface and confirm generated configuration against the device documentation.",
      role: "Required reference",
      watchFor: "Understand peripheral initialization, generated configuration, return/error behavior, and where application code belongs.",
      gap: "Alfred supplies the complete requirement-to-wire-to-code-to-evidence integration lesson."
    },
    {
      source: "saleaeStm32I2c",
      use: "Use this complete STM32 sensor example if your vertical slice uses I²C.",
      role: "Required for I²C path",
      watchFor: "Trace wiring, SDA/SCL open-drain behavior, pull-ups, address, register access, ACK/NACK, capture setup, raw bytes, and the changing sensor value.",
      gap: "Alfred still requires datasheet citations, requirement traceability, independent scaling checks, timeout handling, and controlled-fault evidence."
    },
    {
      source: "saleaeStm32Spi",
      use: "Use this complete STM32 peripheral example if your vertical slice uses SPI.",
      role: "Required for SPI path",
      watchFor: "Trace SCLK, MOSI, MISO, chip-select, analyzer configuration, transfer framing, and how captured bytes relate to the application result.",
      gap: "Alfred still requires datasheet timing/mode confirmation, requirement traceability, independent calculations, and recovery testing."
    },
    {
      source: "tiADC",
      use: "Use the TI ADC series when your vertical slice is analog rather than I²C/SPI.",
      role: "Required for analog path",
      watchFor: "Connect sampling, reference voltage, conversion code, resolution, error/noise, and front-end assumptions to the raw-to-engineering-unit calculation.",
      gap: "Alfred supplies the selected sensor's exact wiring, firmware path, calibration/independent comparison, and fault-handling evidence."
    },
    {
      source: "sparkfunI2C",
      use: "Use only as a quick electrical/transaction diagram reference when an I²C concept remains unclear after the Saleae example.",
      role: "I²C help",
      watchFor: "Verify open-drain behavior, pull-ups, address, START/STOP, and ACK.",
      gap: "The selected device datasheet remains authoritative."
    },
    {
      source: "sparkfunSPI",
      use: "Use only as a quick signal/mode diagram reference when an SPI concept remains unclear after the Saleae example.",
      role: "SPI help",
      watchFor: "Verify chip-select, clock, data direction, bit order, CPOL, and CPHA.",
      gap: "The selected device datasheet remains authoritative."
    }
  ]);

  updateMedia(29, [
    {
      source: "adafruitSolderProblems",
      use: "Use the defect/rework gallery as a fast workmanship-retention check before you claim solder or rework evidence in the dossier.",
      role: "Required workmanship refresher",
      watchFor: "Identify cold/disturbed/overheated joints, wetting problems, bridges, excess/insufficient solder, lifted pads, and when continued rework risks board damage.",
      gap: "Portfolio evidence must still use Alfred's explicit acceptance criteria, before/after record, electrical retest, and truthful limitations."
    },
    {
      source: "nasaHarness",
      use: "Use the NASA workmanship criteria when your role-proof task includes crimping, cable, terminal, harness, or wiring evidence.",
      role: "Required for harness route",
      watchFor: "Name the exact observed accept/rework/escalate condition and preserve inspection evidence.",
      gap: "The course does not confer NASA or IPC certification."
    },
    {
      source: "nasaESD",
      use: "Reapply ESD work-area and handling controls for any physical electronics route.",
      role: "Required for physical route",
      watchFor: "Distinguish ESD device protection from shock/energy safety and document the controls actually used.",
      gap: "The physical checklist and project-specific risk limits remain authoritative for this course."
    },
    {
      source: "flukeMultimeterGuide",
      use: "Use this refresher when the dossier uses DMM evidence.",
      role: "Required for DMM evidence",
      watchFor: "Select the correct function and jacks, distinguish energized from de-energized measurements, and connect voltage/resistance/continuity/diode results to the troubleshooting claim.",
      gap: "Alfred restricts the project to approved low-voltage work and requires configuration, units, expected value, measured value, and decision."
    },
    {
      source: "tekScopeSetup",
      use: "Use this refresher when the dossier uses oscilloscope evidence.",
      role: "Required for oscilloscope evidence",
      watchFor: "Check grounding, probe connection/compensation, volts/div, time/div, trigger source/level, and whether the displayed waveform supports the stated measurement.",
      gap: "Alfred requires the expected waveform, setup rationale, measured result, uncertainty/artifact check, and engineering decision."
    },
    {
      source: "saleaeDigitalSignals",
      use: "Use this STM32 logic-analyzer example when the dossier uses digital timing or logic-analyzer evidence.",
      role: "Required for logic-analyzer evidence",
      watchFor: "Verify channel mapping, threshold/signal levels, sample rate, trigger/capture setup, and the relationship between raw transitions and the interpreted event.",
      gap: "A decode or screenshot is not sufficient by itself; Alfred requires correlation to the requirement, firmware action, raw evidence, and conclusion."
    },
    {
      source: "onetTech",
      use: "Map the finished dossier artifacts to current technician duties.",
      role: "Required reference",
      watchFor: "Use occupational tasks as relevance evidence, not as a hiring guarantee or as a substitute for technical proof.",
      gap: "Alfred defines the demonstrable project artifacts and technical-defense standard."
    }
  ]);

  C.meta = C.meta || {};
  C.meta.mediaRevision = "2026-09-17-teaching-media-v16.3.4-final-audit";
  C.meta.mediaPolicy = "31-week objective-mapped, content-verified external reinforcement; exact teaching resources replace generic landing pages where a specific instructional source exists; Alfred remains the complete primary instruction.";
})();