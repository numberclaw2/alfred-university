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
    }
  });

  const updateMedia = (week, media) => {
    const module = C.modules.find(item => Number(item.week) === Number(week));
    if (!module || !module.integration) return;
    module.integration.media = media;
    module.sourceIds = [...new Set([...(module.sourceIds || []), ...media.map(item => item.source)])];
  };

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

  C.meta = C.meta || {};
  C.meta.mediaRevision = "2026-09-17-teaching-media-v16.3.3";
  C.meta.mediaPolicy = "Objective-mapped, content-verified external reinforcement; Alfred remains the complete primary instruction.";
})();