// AU-ESET 301 Course Dictionary — v16.3.22
// Definitions are concise course paraphrases grounded in the linked authoritative source; source terminology controls when context differs.
window.ALFRED_GLOSSARY = [
  {
    "term": "absolute maximum rating",
    "category": "Test & Troubleshooting",
    "definition": "A limit that must not be exceeded without risking permanent device damage or degraded reliability.",
    "technical": "Absolute maximum ratings define stress limits, not normal operating targets; functional operation is specified separately under recommended conditions.",
    "aliases": [
      "absolute maximum ratings"
    ],
    "weeks": [
      8,
      9,
      15,
      16,
      24
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈæbsəlˌut mˈæksəməm rˈeɪtɪŋ/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "absolute-maximum-rating"
  },
  {
    "term": "accuracy",
    "category": "Instruments & Measurement",
    "definition": "How closely a measurement agrees with the value of the quantity being measured.",
    "technical": "NIST/VIM terminology treats measurement accuracy as closeness of agreement between a measured result and the measurand value; it is a qualitative concept, not a numeric synonym for uncertainty.",
    "aliases": [],
    "weeks": [
      3,
      27,
      29
    ],
    "source": "nist_unc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈækjɚəsi/",
    "sourceDetail": {
      "name": "NIST Technical Note 1297 — Measurement Uncertainty Terminology",
      "url": "https://www.nist.gov/pml/nist-technical-note-1297",
      "note": "NIST guidance for measurement accuracy, repeatability, reproducibility, calibration, and uncertainty."
    },
    "slug": "accuracy"
  },
  {
    "term": "ACK",
    "category": "Interfaces & Protocols",
    "definition": "An acknowledgement indicating that a transmitted item was accepted or received.",
    "technical": "On I²C, ACK is the active-low acknowledge bit driven during the ninth clock pulse by the receiving device.",
    "aliases": [
      "acknowledge"
    ],
    "weeks": [
      18
    ],
    "source": "nxp_i2c",
    "notation": "ACK",
    "note": "",
    "auto": true,
    "pronunciation": "/æk/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "ack"
  },
  {
    "term": "actuator",
    "category": "Components",
    "definition": "A device that turns a control signal into physical action.",
    "technical": "An actuator converts electrical control energy into mechanical, thermal, optical, or another physical output.",
    "aliases": [],
    "weeks": [
      7,
      15,
      25
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈæktjuˌeɪtɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "actuator"
  },
  {
    "term": "ADC",
    "category": "Embedded Systems",
    "definition": "A circuit that converts an analog voltage or current into a digital number.",
    "technical": "An analog-to-digital converter samples and quantizes an analog input into a finite-resolution digital code.",
    "aliases": [
      "analog-to-digital converter",
      "analog to digital converter"
    ],
    "weeks": [
      15,
      25,
      27
    ],
    "source": "st",
    "notation": "ADC",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌeɪ diː ˈsiː/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "adc"
  },
  {
    "term": "aliasing",
    "category": "Instruments & Measurement",
    "definition": "A measurement error where an inadequately sampled signal appears as a different frequency or waveform.",
    "technical": "Aliasing occurs when distinct continuous-time frequency components become indistinguishable after sampling, typically when sampling constraints are violated.",
    "aliases": [],
    "weeks": [
      3,
      25,
      27
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/aliasing/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "aliasing"
  },
  {
    "term": "alternating current",
    "category": "Foundations & Units",
    "definition": "Current that reverses direction periodically.",
    "technical": "AC denotes electrical quantities that vary with time and usually reverse polarity in a periodic manner.",
    "aliases": [
      "AC"
    ],
    "weeks": [
      1,
      3,
      6,
      9
    ],
    "source": "iec",
    "notation": "AC",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈɔltɚnˌeɪtɪŋ kˈɝənt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "alternating-current"
  },
  {
    "term": "ALU",
    "category": "Embedded Systems",
    "definition": "The processor block that performs arithmetic and logical operations.",
    "technical": "An arithmetic logic unit executes operations such as addition, subtraction, shifts, comparisons, and bitwise logic under processor control.",
    "aliases": [
      "arithmetic logic unit"
    ],
    "weeks": [
      14,
      15
    ],
    "source": "arm",
    "notation": "ALU",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌeɪ ɛl ˈjuː/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "alu"
  },
  {
    "term": "AM",
    "category": "RF & Communications",
    "definition": "Modulation in which information varies the amplitude of a carrier.",
    "technical": "Amplitude modulation varies carrier amplitude according to the information signal while carrier frequency is nominally fixed.",
    "aliases": [
      "amplitude modulation"
    ],
    "weeks": [
      20
    ],
    "source": "iec",
    "notation": "AM",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌeɪ ˈɛm/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "am"
  },
  {
    "term": "ampere",
    "category": "Foundations & Units",
    "definition": "The SI unit used to measure electric current.",
    "technical": "The ampere is the SI base unit of electric current and is defined through the fixed value of the elementary charge.",
    "aliases": [
      "amp",
      "amps"
    ],
    "weeks": [
      1,
      2,
      3
    ],
    "source": "nist_si",
    "notation": "A",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈæmpˌɝ/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "ampere"
  },
  {
    "term": "amplitude",
    "category": "AC & Signals",
    "definition": "The size or magnitude of a varying signal relative to a reference.",
    "technical": "Amplitude describes the magnitude of a waveform and may be specified as peak, peak-to-peak, RMS, or another defined measure.",
    "aliases": [],
    "weeks": [
      3,
      6,
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈæmplətˌud/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "amplitude"
  },
  {
    "term": "AND gate",
    "category": "Digital Logic",
    "definition": "A logic gate whose output is true/high only when all required inputs are true/high.",
    "technical": "Implements logical conjunction.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ənd ɡˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "and-gate"
  },
  {
    "term": "antenna",
    "category": "RF & Communications",
    "definition": "A structure that converts guided electrical signals to radiated electromagnetic waves, or the reverse.",
    "technical": "An antenna is a transducer between guided electromagnetic energy in a feed system and free-space radiation.",
    "aliases": [],
    "weeks": [
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/æntˈɛnə/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "antenna"
  },
  {
    "term": "ARM Cortex-M",
    "category": "Embedded Systems",
    "definition": "A family of Arm processor cores optimized for microcontrollers and deeply embedded systems.",
    "technical": "Cortex-M cores implement the Arm M-profile architecture with exception handling, low-latency interrupt support, and embedded debug features.",
    "aliases": [
      "Cortex-M",
      "Arm Cortex-M"
    ],
    "weeks": [
      15,
      16,
      24,
      26
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɑːrm ˈkɔːrtɛks ɛm/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "arm-cortex-m"
  },
  {
    "term": "attenuation",
    "category": "AC & Signals",
    "definition": "Reduction in signal magnitude as it passes through a system or medium.",
    "technical": "Attenuation is the decrease of a signal quantity between two points and is often expressed as a ratio or in decibels.",
    "aliases": [],
    "weeks": [
      4,
      6,
      20
    ],
    "source": "iec",
    "notation": "dB",
    "note": "",
    "auto": true,
    "pronunciation": "/ətˌɛnjuˈeɪʃən/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "attenuation"
  },
  {
    "term": "band-pass filter",
    "category": "AC & Signals",
    "definition": "A filter that passes a range of frequencies while attenuating frequencies below and above that range.",
    "technical": "A band-pass response is defined by lower and upper cutoff regions and a passband between them.",
    "aliases": [
      "bandpass filter"
    ],
    "weeks": [
      4,
      6,
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bˈænd-pˈæs fˈɪltɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "band-pass-filter"
  },
  {
    "term": "bandwidth",
    "category": "Instruments & Measurement",
    "definition": "The range of frequencies over which a system or instrument performs within a defined limit.",
    "technical": "Bandwidth is the difference between frequency limits satisfying a specified response criterion; instrument bandwidth constrains faithfully measurable signal content.",
    "aliases": [],
    "weeks": [
      3,
      6,
      10,
      20
    ],
    "source": "iec",
    "notation": "Hz",
    "note": "",
    "auto": true,
    "pronunciation": "/bˈændwɪdθ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "bandwidth"
  },
  {
    "term": "base",
    "category": "Semiconductors",
    "definition": "The control region/terminal of a bipolar junction transistor.",
    "technical": "In a BJT, base current and base-emitter conditions control collector-emitter conduction.",
    "aliases": [
      "BJT base"
    ],
    "weeks": [
      8,
      10
    ],
    "source": "iec",
    "notation": "B",
    "note": "",
    "auto": false,
    "pronunciation": "/bˈeɪs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "base"
  },
  {
    "term": "baud rate",
    "category": "Interfaces & Protocols",
    "definition": "The number of signal symbols transmitted per second.",
    "technical": "Baud measures symbol rate; for ordinary binary UART where one symbol carries one bit, baud rate numerically matches bit rate.",
    "aliases": [
      "baud"
    ],
    "weeks": [
      17
    ],
    "source": "iec",
    "notation": "Bd",
    "note": "",
    "auto": true,
    "pronunciation": "/bˈɔd rˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "baud-rate"
  },
  {
    "term": "bench power supply",
    "category": "Instruments & Measurement",
    "definition": "An adjustable laboratory DC source used to power circuits during development and testing.",
    "technical": "A bench supply provides controlled voltage/current output and commonly includes current limiting, readback, and protection features.",
    "aliases": [
      "bench supply",
      "laboratory power supply"
    ],
    "weeks": [
      1,
      3,
      8,
      9,
      16,
      24
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bˈɛntʃ pˈaʊɚ səplˈaɪ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "bench-power-supply"
  },
  {
    "term": "BGA",
    "category": "PCB & Assembly",
    "definition": "An integrated-circuit package that uses an array of solder balls underneath the package.",
    "technical": "A ball grid array package connects to the PCB through a two-dimensional array of solder-ball terminals.",
    "aliases": [
      "ball grid array"
    ],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "BGA",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌbiː dʒiː ˈeɪ/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "bga"
  },
  {
    "term": "bias",
    "category": "Semiconductors",
    "definition": "A DC operating condition intentionally applied to place a device in a desired region.",
    "technical": "Biasing establishes quiescent voltages and currents so an active device operates as intended for switching or amplification.",
    "aliases": [
      "biasing"
    ],
    "weeks": [
      8,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bˈaɪəs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "bias"
  },
  {
    "term": "BJT",
    "category": "Semiconductors",
    "definition": "A transistor controlled primarily by current into its base-emitter junction.",
    "technical": "A bipolar junction transistor uses both carrier types and has emitter, base, and collector terminals.",
    "aliases": [
      "bipolar junction transistor"
    ],
    "weeks": [
      8,
      10
    ],
    "source": "iec",
    "notation": "BJT",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌbiː dʒeɪ ˈtiː/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "bjt"
  },
  {
    "term": "BNC",
    "category": "RF & Communications",
    "definition": "A bayonet-lock coaxial connector commonly used on oscilloscopes, test equipment, and RF systems.",
    "technical": "BNC is a quick-connect bayonet-style coaxial connector family used for controlled-impedance signal and RF connections in test, video, and communications equipment.",
    "aliases": [
      "Bayonet Neill–Concelman",
      "Bayonet Neill Concelman"
    ],
    "weeks": [
      3,
      19,
      20
    ],
    "source": "iec",
    "notation": "BNC",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌbiː ɛn ˈsiː/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "bnc"
  },
  {
    "term": "BOM",
    "category": "PCB & Assembly",
    "definition": "A structured list of the parts and materials required to build an assembly.",
    "technical": "A bill of materials identifies component items, quantities, part numbers, descriptions, and related procurement or assembly information.",
    "aliases": [
      "bill of materials"
    ],
    "weeks": [
      12,
      23,
      29
    ],
    "source": "ipc",
    "notation": "BOM",
    "note": "",
    "auto": true,
    "pronunciation": "/bɒm/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "bom"
  },
  {
    "term": "Boolean logic",
    "category": "Digital Logic",
    "definition": "A system of logic using binary true/false values and operations such as AND, OR, and NOT.",
    "technical": "Boolean algebra provides the mathematical framework for binary logic expressions and digital circuit simplification.",
    "aliases": [
      "Boolean algebra"
    ],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bulˈiən lˈɑdʒɪk/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "boolean-logic"
  },
  {
    "term": "boost converter",
    "category": "Power Electronics",
    "definition": "A switching converter that produces a higher DC voltage than its input under normal operation.",
    "technical": "A boost converter uses controlled switching and an inductor/capacitor network to step a DC input up to a higher output.",
    "aliases": [
      "boost"
    ],
    "weeks": [
      9,
      25
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bˈust kənvˈɝtɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "boost-converter"
  },
  {
    "term": "bootloader",
    "category": "Embedded Systems",
    "definition": "A small program that runs early after reset and loads, verifies, or starts the main firmware.",
    "technical": "An embedded bootloader initializes enough hardware to select, validate, update, or transfer control to an application image.",
    "aliases": [],
    "weeks": [
      16,
      24,
      26
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bootloader/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "bootloader"
  },
  {
    "term": "branch",
    "category": "Circuit Analysis",
    "definition": "A section of a circuit between two nodes that contains one or more elements.",
    "technical": "A branch is a circuit path between nodes carrying a single branch current in lumped-circuit analysis.",
    "aliases": [],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/brˈæntʃ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "branch"
  },
  {
    "term": "breakpoint",
    "category": "Embedded Systems",
    "definition": "A selected location where a debugger pauses program execution.",
    "technical": "A breakpoint uses hardware or software mechanisms to stop execution when the program reaches a configured address or condition.",
    "aliases": [],
    "weeks": [
      16,
      26
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/breakpoint/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "breakpoint"
  },
  {
    "term": "bring-up",
    "category": "Embedded Systems",
    "definition": "The controlled process of powering and proving a new board or subsystem for the first time.",
    "technical": "Hardware bring-up verifies rails, clocks, reset, debug access, firmware loading, interfaces, and subsystem behavior in a staged order that limits risk.",
    "aliases": [
      "bringup",
      "board bring-up",
      "board bringup"
    ],
    "weeks": [
      16,
      23,
      24,
      25
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/brˈɪŋ-ˈʌp/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "bring-up"
  },
  {
    "term": "buck converter",
    "category": "Power Electronics",
    "definition": "A switching converter that produces a lower DC voltage than its input under normal operation.",
    "technical": "A buck converter uses controlled switching and energy-storage elements to step a DC input down to a regulated or controlled lower output.",
    "aliases": [
      "buck"
    ],
    "weeks": [
      9,
      25
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bˈʌk kənvˈɝtɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "buck-converter"
  },
  {
    "term": "bus",
    "category": "Interfaces & Protocols",
    "definition": "A shared set of conductors and rules used to transfer data, addresses, control, or power among components.",
    "technical": "A digital bus combines physical signal lines with electrical/timing/protocol conventions for communication among nodes.",
    "aliases": [
      "data bus"
    ],
    "weeks": [
      14,
      15,
      18
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bˈʌs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "bus"
  },
  {
    "term": "calibration",
    "category": "Instruments & Measurement",
    "definition": "A documented comparison that relates an instrument’s indication to reference standards or known values.",
    "technical": "Calibration establishes the relationship between indicated values and reference quantity values, including associated uncertainty and corrections as applicable.",
    "aliases": [],
    "weeks": [
      3,
      27,
      29
    ],
    "source": "nist_unc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kˌæləbrˈeɪʃən/",
    "sourceDetail": {
      "name": "NIST Technical Note 1297 — Measurement Uncertainty Terminology",
      "url": "https://www.nist.gov/pml/nist-technical-note-1297",
      "note": "NIST guidance for measurement accuracy, repeatability, reproducibility, calibration, and uncertainty."
    },
    "slug": "calibration"
  },
  {
    "term": "capacitance",
    "category": "Components",
    "definition": "A measure of how much electric charge is stored for a given voltage.",
    "technical": "Capacitance is the charge-to-voltage ratio for a capacitor under defined conditions and is measured in farads.",
    "aliases": [],
    "weeks": [
      4,
      6,
      9
    ],
    "source": "iec",
    "notation": "C, farad (F)",
    "note": "",
    "auto": true,
    "pronunciation": "/kəpˈæsətəns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "capacitance"
  },
  {
    "term": "capacitor",
    "category": "Components",
    "definition": "A component that stores energy in an electric field between conductors.",
    "technical": "A capacitor is characterized primarily by capacitance and opposes changes in voltage by storing electric charge.",
    "aliases": [
      "cap"
    ],
    "weeks": [
      4,
      6,
      9,
      12
    ],
    "source": "iec",
    "notation": "C, farad (F)",
    "note": "",
    "auto": true,
    "pronunciation": "/kəpˈæsətɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "capacitor"
  },
  {
    "term": "carrier",
    "category": "RF & Communications",
    "definition": "A periodic signal whose amplitude, frequency, or phase is varied to carry information.",
    "technical": "A carrier is the waveform parameterized by modulation to translate baseband information to another frequency region.",
    "aliases": [],
    "weeks": [
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kˈæriɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "carrier"
  },
  {
    "term": "chassis ground",
    "category": "Safety & Workmanship",
    "definition": "A connection to the conductive frame or enclosure of equipment.",
    "technical": "Chassis ground bonds conductive equipment structure to a reference or protective grounding system as required by the design.",
    "aliases": [],
    "weeks": [
      1,
      3
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tʃˈæsi ɡrˈaʊnd/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "chassis-ground"
  },
  {
    "term": "chip select",
    "category": "Interfaces & Protocols",
    "definition": "A control signal used to select which SPI peripheral participates in a transfer.",
    "technical": "SPI chip-select/slave-select is normally asserted for the intended peripheral while clock and data are exchanged.",
    "aliases": [
      "CS",
      "SS",
      "slave select"
    ],
    "weeks": [
      18
    ],
    "source": "st",
    "notation": "CS / SS",
    "note": "",
    "auto": true,
    "pronunciation": "/tʃˈɪp səlˈɛkt/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "chip-select"
  },
  {
    "term": "circuit",
    "category": "Circuit Analysis",
    "definition": "A connected path or network through which electrical behavior can occur.",
    "technical": "An electric circuit is an arrangement of interconnected electrical elements considered as a system for current and voltage relationships.",
    "aliases": [],
    "weeks": [
      1,
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sˈɝkət/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "circuit"
  },
  {
    "term": "clock",
    "category": "Embedded Systems",
    "definition": "A repeating timing signal used to coordinate digital operations.",
    "technical": "Digital systems use clock edges or cycles to sequence state changes, communication, timers, and processor execution.",
    "aliases": [
      "clock signal"
    ],
    "weeks": [
      11,
      14,
      15,
      18,
      26
    ],
    "source": "arm",
    "notation": "CLK",
    "note": "",
    "auto": true,
    "pronunciation": "/klˈɑk/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "clock"
  },
  {
    "term": "CMOS",
    "category": "Digital Logic",
    "definition": "A digital semiconductor technology using complementary n-channel and p-channel MOSFETs.",
    "technical": "Complementary metal-oxide-semiconductor logic uses complementary MOS devices to achieve low static power and high integration density.",
    "aliases": [
      "complementary metal-oxide-semiconductor"
    ],
    "weeks": [
      11,
      15
    ],
    "source": "iec",
    "notation": "CMOS",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈsiːmɒs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "cmos"
  },
  {
    "term": "coaxial cable",
    "category": "RF & Communications",
    "definition": "A cable with a central conductor and concentric outer conductor/shield designed for controlled impedance.",
    "technical": "Coaxial transmission line confines electromagnetic fields mainly between inner and outer conductors and is widely used for RF and measurement connections.",
    "aliases": [
      "coax",
      "coaxial"
    ],
    "weeks": [
      19,
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kˈoʊˈæksiəl kˈeɪbəl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "coaxial-cable"
  },
  {
    "term": "collector",
    "category": "Semiconductors",
    "definition": "One of the main current terminals of a bipolar junction transistor.",
    "technical": "In a BJT, collector current is controlled by base-emitter drive within the selected operating region.",
    "aliases": [],
    "weeks": [
      8,
      10
    ],
    "source": "iec",
    "notation": "C",
    "note": "",
    "auto": true,
    "pronunciation": "/kəlˈɛktɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "collector"
  },
  {
    "term": "comparator",
    "category": "Semiconductors",
    "definition": "A circuit that indicates which of two input voltages is higher.",
    "technical": "A voltage comparator switches its output state according to the sign of the differential input, often without linear feedback operation.",
    "aliases": [],
    "weeks": [
      10,
      15
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kəmpˈɝətɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "comparator"
  },
  {
    "term": "conductance",
    "category": "Foundations & Units",
    "definition": "How easily electric current can flow through something.",
    "technical": "Conductance is the reciprocal of resistance and is measured in siemens (S).",
    "aliases": [],
    "weeks": [
      1,
      2
    ],
    "source": "iec",
    "notation": "G, siemens (S)",
    "note": "",
    "auto": true,
    "pronunciation": "/conductance/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "conductance"
  },
  {
    "term": "connector",
    "category": "PCB & Assembly",
    "definition": "A component that provides a separable electrical and often mechanical interface between circuits or assemblies.",
    "technical": "A connector uses mating contacts and housing/keying features to establish defined electrical paths between separable parts.",
    "aliases": [],
    "weeks": [
      19,
      24,
      29
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kənˈɛktɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "connector"
  },
  {
    "term": "continuity",
    "category": "Circuit Analysis",
    "definition": "The condition that an electrical path is unbroken from one point to another.",
    "technical": "Continuity testing checks whether resistance between points is low enough to indicate a connected conductive path.",
    "aliases": [],
    "weeks": [
      1,
      3,
      12,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kˌɑntənˈuəti/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "continuity"
  },
  {
    "term": "controller",
    "category": "Interfaces & Protocols",
    "definition": "The device that initiates or manages transactions on a bus or subsystem.",
    "technical": "Modern I²C terminology uses controller/target; many SPI materials use controller/peripheral. Older documents may use master/slave terminology.",
    "aliases": [
      "master"
    ],
    "weeks": [
      18
    ],
    "source": "nxp_i2c",
    "notation": "",
    "note": "Older documentation may use “master.”",
    "auto": true,
    "pronunciation": "/kəntrˈoʊlɚ/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "controller"
  },
  {
    "term": "counter",
    "category": "Digital Logic",
    "definition": "A sequential circuit that advances through a defined series of states in response to events or clock pulses.",
    "technical": "A digital counter uses sequential logic to represent the number or sequence of input transitions.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kˈaʊntɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "counter"
  },
  {
    "term": "CPHA",
    "category": "Interfaces & Protocols",
    "definition": "The SPI configuration bit that defines which clock edge is used first for sampling/shifting.",
    "technical": "Clock phase combines with CPOL to define the relationship between data validity and clock transitions.",
    "aliases": [
      "clock phase"
    ],
    "weeks": [
      18
    ],
    "source": "st",
    "notation": "CPHA",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌsiː faː/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "cpha"
  },
  {
    "term": "CPOL",
    "category": "Interfaces & Protocols",
    "definition": "The SPI configuration bit that defines the idle polarity of the clock.",
    "technical": "Clock polarity selects whether SCLK idles low or high and combines with CPHA to define SPI mode timing.",
    "aliases": [
      "clock polarity"
    ],
    "weeks": [
      18
    ],
    "source": "st",
    "notation": "CPOL",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌsiː pɒl/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "cpol"
  },
  {
    "term": "CRC",
    "category": "Interfaces & Protocols",
    "definition": "An error-detecting code computed from a block of data and checked after transmission or storage.",
    "technical": "A cyclic redundancy check treats the bit sequence as a polynomial and computes a remainder used to detect many classes of data corruption.",
    "aliases": [
      "cyclic redundancy check"
    ],
    "weeks": [
      18,
      27
    ],
    "source": "iec",
    "notation": "CRC",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌsiː ɑːr ˈsiː/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "crc"
  },
  {
    "term": "CSV",
    "category": "Software & Automation",
    "definition": "A simple text format that stores tabular data as rows with separated fields.",
    "technical": "Comma-separated values files represent records in lines and fields separated by a delimiter, commonly used for test logs and exports.",
    "aliases": [
      "comma-separated values"
    ],
    "weeks": [
      27
    ],
    "source": "python",
    "notation": "CSV",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌsiː ɛs ˈviː/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "csv"
  },
  {
    "term": "current divider",
    "category": "Circuit Analysis",
    "definition": "A parallel network in which current splits among branches according to their conductances.",
    "technical": "For parallel resistive branches, branch current divides inversely with branch resistance.",
    "aliases": [],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kˈɝənt dɪvˈaɪdɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "current-divider"
  },
  {
    "term": "cutoff",
    "category": "Semiconductors",
    "definition": "An operating condition where an active device is effectively off or a response is strongly attenuated.",
    "technical": "For transistor switching, cutoff means conduction is reduced to leakage; in filters, cutoff refers to a defined frequency boundary.",
    "aliases": [],
    "weeks": [
      4,
      8,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kˈʌtˌɔf/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "cutoff"
  },
  {
    "term": "cutoff frequency",
    "category": "AC & Signals",
    "definition": "A frequency used to mark the boundary of a filter’s pass or stop behavior.",
    "technical": "For a first-order filter, cutoff is commonly the frequency where magnitude is 1/√2 of the passband value, corresponding to about −3 dB.",
    "aliases": [
      "corner frequency",
      "-3 dB frequency"
    ],
    "weeks": [
      4,
      6
    ],
    "source": "iec",
    "notation": "fc",
    "note": "",
    "auto": true,
    "pronunciation": "/kˈʌtˌɔf frˈikwənsi/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "cutoff-frequency"
  },
  {
    "term": "DAC",
    "category": "Embedded Systems",
    "definition": "A circuit that converts a digital number into an analog voltage or current.",
    "technical": "A digital-to-analog converter maps a digital code to a corresponding analog output level with finite resolution and error limits.",
    "aliases": [
      "digital-to-analog converter",
      "digital to analog converter"
    ],
    "weeks": [
      15,
      25
    ],
    "source": "st",
    "notation": "DAC",
    "note": "",
    "auto": true,
    "pronunciation": "/dæk/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "dac"
  },
  {
    "term": "datasheet",
    "category": "Test & Troubleshooting",
    "definition": "A manufacturer document that specifies a component’s electrical characteristics, limits, pin functions, timing, package, and application information.",
    "technical": "A datasheet is the primary device-specific engineering reference for ratings, operating conditions, characteristics, interface details, and test conditions.",
    "aliases": [],
    "weeks": [
      2,
      8,
      9,
      10,
      12,
      15,
      16,
      18,
      23,
      24
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/datasheet/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "datasheet"
  },
  {
    "term": "datasheet pin function",
    "category": "Embedded Systems",
    "definition": "The documented electrical/functional role assigned to a device terminal.",
    "technical": "Pin-function tables define GPIO, alternate-function, power, ground, analog, reset, clock, and other terminal behaviors and restrictions.",
    "aliases": [],
    "weeks": [
      15,
      16,
      18,
      24
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": false,
    "pronunciation": "/datasheet pˈɪn fˈʌŋkʃən/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "datasheet-pin-function"
  },
  {
    "term": "de-energized",
    "category": "Safety & Workmanship",
    "definition": "Disconnected from electrical energy so hazardous voltage is not present.",
    "technical": "OSHA uses deenergized for equipment free from electrical connection to a source of potential difference and electrical charge, subject to the applicable procedure.",
    "aliases": [
      "deenergized"
    ],
    "weeks": [
      1
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/dˈi-ˈɛnɚdʒˌaɪzd/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "de-energized"
  },
  {
    "term": "debounce",
    "category": "Digital Logic",
    "definition": "Filtering or logic used to prevent one mechanical switch action from being read as many rapid transitions.",
    "technical": "Debouncing suppresses contact-bounce transitions using timing, filtering, hysteresis, or software state logic.",
    "aliases": [
      "debouncing"
    ],
    "weeks": [
      11,
      15
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/debounce/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "debounce"
  },
  {
    "term": "debugger",
    "category": "Embedded Systems",
    "definition": "A tool that lets you inspect and control program execution while finding faults.",
    "technical": "A debugger can halt/run code, set breakpoints/watchpoints, inspect memory/registers, step instructions, and interact through a debug interface.",
    "aliases": [],
    "weeks": [
      16,
      24,
      26
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/debugger/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "debugger"
  },
  {
    "term": "decibel",
    "category": "AC & Signals",
    "definition": "A logarithmic unit used to express ratios such as gain, loss, or signal level.",
    "technical": "The decibel is one tenth of a bel; power ratios use 10 log10(P2/P1), while equal-impedance voltage ratios commonly use 20 log10(V2/V1).",
    "aliases": [
      "dB"
    ],
    "weeks": [
      6,
      10,
      20
    ],
    "source": "iec",
    "notation": "dB",
    "note": "",
    "auto": true,
    "pronunciation": "/dˈɛsəbˌɛl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "decibel"
  },
  {
    "term": "demultiplexer",
    "category": "Digital Logic",
    "definition": "A circuit that routes one input to one of several outputs according to select controls.",
    "technical": "A demultiplexer performs one-to-many selection under digital control.",
    "aliases": [
      "DEMUX"
    ],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/demultiplexer/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "demultiplexer"
  },
  {
    "term": "diode",
    "category": "Semiconductors",
    "definition": "A two-terminal semiconductor device that conducts much more readily in one direction than the other.",
    "technical": "A semiconductor diode is based on a junction or equivalent structure with direction-dependent current-voltage behavior.",
    "aliases": [],
    "weeks": [
      8,
      9,
      12
    ],
    "source": "iec",
    "notation": "D",
    "note": "",
    "auto": true,
    "pronunciation": "/dˈaɪˌoʊd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "diode"
  },
  {
    "term": "direct current",
    "category": "Foundations & Units",
    "definition": "Current that maintains one overall direction of flow.",
    "technical": "DC denotes electrical quantities that do not periodically reverse polarity.",
    "aliases": [
      "DC"
    ],
    "weeks": [
      1,
      3,
      9
    ],
    "source": "iec",
    "notation": "DC",
    "note": "",
    "auto": true,
    "pronunciation": "/dɚˈɛkt kˈɝənt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "direct-current"
  },
  {
    "term": "DMA",
    "category": "Embedded Systems",
    "definition": "Hardware that moves data between memory and peripherals with little or no CPU instruction-by-instruction involvement.",
    "technical": "Direct memory access controllers autonomously transfer blocks or streams according to configured addresses, triggers, and transfer parameters.",
    "aliases": [
      "direct memory access"
    ],
    "weeks": [
      16,
      18,
      26
    ],
    "source": "st",
    "notation": "DMA",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌdiː ɛm ˈeɪ/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "dma"
  },
  {
    "term": "drain",
    "category": "Semiconductors",
    "definition": "One of the main current-carrying terminals of a field-effect transistor.",
    "technical": "In a MOSFET, drain and source are the channel terminals; conventional current direction and device type determine their operating roles.",
    "aliases": [
      "MOSFET drain"
    ],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "D",
    "note": "",
    "auto": true,
    "pronunciation": "/drˈeɪn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "drain"
  },
  {
    "term": "DUT",
    "category": "Test & Troubleshooting",
    "definition": "The device or assembly currently being tested.",
    "technical": "Device under test identifies the specific unit connected to test equipment, fixtures, or automated procedures.",
    "aliases": [
      "device under test",
      "unit under test",
      "UUT"
    ],
    "weeks": [
      3,
      13,
      27,
      28,
      29
    ],
    "source": "iec",
    "notation": "DUT",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌdiː juː ˈtiː/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "dut"
  },
  {
    "term": "duty cycle",
    "category": "AC & Signals",
    "definition": "The fraction of each period that a periodic digital or pulse signal is active.",
    "technical": "Duty cycle is active time divided by total period, usually expressed as a percentage.",
    "aliases": [],
    "weeks": [
      6,
      15,
      25
    ],
    "source": "iec",
    "notation": "D, %",
    "note": "",
    "auto": true,
    "pronunciation": "/dˈuti sˈaɪkəl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "duty-cycle"
  },
  {
    "term": "earth ground",
    "category": "Safety & Workmanship",
    "definition": "A deliberate electrical connection to the earth used mainly for safety and reference.",
    "technical": "Earth grounding connects exposed or system conductors to earth through a grounding system intended to control hazardous potential differences.",
    "aliases": [],
    "weeks": [
      1,
      3
    ],
    "source": "osha",
    "notation": "⏚",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈɝθ ɡrˈaʊnd/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "earth-ground"
  },
  {
    "term": "electric charge",
    "category": "Foundations & Units",
    "definition": "A physical property that can be positive or negative and is carried by particles such as electrons.",
    "technical": "Charge is the electrical quantity whose flow constitutes electric current; its SI unit is the coulomb (C).",
    "aliases": [
      "charge"
    ],
    "weeks": [
      1
    ],
    "source": "nist_si",
    "notation": "Q, coulomb (C)",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlˈɛktrɪk tʃˈɑrdʒ/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "electric-charge"
  },
  {
    "term": "electric current",
    "category": "Foundations & Units",
    "definition": "The rate at which electric charge passes a point in a circuit.",
    "technical": "Current is charge flow per unit time; the SI unit is the ampere (A).",
    "aliases": [
      "current",
      "amperage"
    ],
    "weeks": [
      1,
      2,
      3
    ],
    "source": "nist_si",
    "notation": "I, ampere (A)",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlˈɛktrɪk kˈɝənt/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "electric-current"
  },
  {
    "term": "electromagnet",
    "category": "Components",
    "definition": "A magnet whose magnetic field is produced mainly by electric current.",
    "technical": "An electromagnet creates magnetic flux by current in a winding, usually enhanced by a magnetic core.",
    "aliases": [
      "electro-magnet"
    ],
    "weeks": [
      7
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlˌɛktroʊmˈæɡnət/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "electromagnet"
  },
  {
    "term": "embedded system",
    "category": "Embedded Systems",
    "definition": "A computer-based system built into a larger product to perform dedicated control, sensing, communication, or processing tasks.",
    "technical": "An embedded system combines hardware and firmware/software to perform a defined function, often with real-time, power, cost, or reliability constraints.",
    "aliases": [
      "embedded systems"
    ],
    "weeks": [
      14,
      15,
      16,
      24,
      25,
      26
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɛmbˈɛdɪd sˈɪstəm/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "embedded-system"
  },
  {
    "term": "EMF",
    "category": "Foundations & Units",
    "definition": "The source-generated electrical potential that drives charge around a circuit.",
    "technical": "Electromotive force is an energy-per-unit-charge quantity associated with a source, despite the historical word “force.”",
    "aliases": [
      "electromotive force"
    ],
    "weeks": [
      1,
      7
    ],
    "source": "iec",
    "notation": "E or ℰ, volt (V)",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌiː ɛm ˈɛf/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "emf"
  },
  {
    "term": "emitter",
    "category": "Semiconductors",
    "definition": "One of the main current terminals of a bipolar junction transistor.",
    "technical": "The BJT emitter injects charge carriers into the base region and is commonly the reference for base-emitter voltage.",
    "aliases": [],
    "weeks": [
      8,
      10
    ],
    "source": "iec",
    "notation": "E",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪmˈɪtɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "emitter"
  },
  {
    "term": "energy",
    "category": "Foundations & Units",
    "definition": "The capacity to do work or cause change.",
    "technical": "Electrical energy is commonly measured in joules in SI and may be computed from power integrated over time.",
    "aliases": [],
    "weeks": [
      1,
      9
    ],
    "source": "iec",
    "notation": "E, joule (J)",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈɛnɚdʒi/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "energy"
  },
  {
    "term": "ESD",
    "category": "Safety & Workmanship",
    "definition": "A sudden transfer of static electric charge that can damage electronics.",
    "technical": "Electrostatic discharge is a rapid charge transfer caused by different electrostatic potentials; ESD controls limit damage to sensitive components.",
    "aliases": [
      "electrostatic discharge"
    ],
    "weeks": [
      1,
      8,
      12,
      16,
      29
    ],
    "source": "iec",
    "notation": "ESD",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌiː ɛs ˈdiː/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "esd"
  },
  {
    "term": "farad",
    "category": "Components",
    "definition": "The SI unit of capacitance.",
    "technical": "One farad corresponds to one coulomb of charge per volt of potential difference.",
    "aliases": [
      "farads"
    ],
    "weeks": [
      4,
      6
    ],
    "source": "iec",
    "notation": "F",
    "note": "",
    "auto": true,
    "pronunciation": "/farad/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "farad"
  },
  {
    "term": "fault",
    "category": "Test & Troubleshooting",
    "definition": "A defect, abnormal condition, or failure mechanism that prevents intended operation.",
    "technical": "A fault is a condition that causes or can cause a system, component, or function to deviate from required behavior.",
    "aliases": [],
    "weeks": [
      2,
      5,
      13,
      22,
      28
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fˈɔlt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "fault"
  },
  {
    "term": "fault injection",
    "category": "Test & Troubleshooting",
    "definition": "Deliberately creating a controlled fault or abnormal condition to test detection, response, or robustness.",
    "technical": "Fault injection introduces known errors, signal changes, component conditions, or software/hardware disturbances to observe system behavior and recovery.",
    "aliases": [],
    "weeks": [
      18,
      23,
      27
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fˈɔlt ˌɪndʒˈɛkʃən/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "fault-injection"
  },
  {
    "term": "fault isolation",
    "category": "Test & Troubleshooting",
    "definition": "Narrowing a problem to a particular component, connection, stage, or subsystem.",
    "technical": "Fault isolation uses observations and tests to reduce the set of possible causes until the failing region or mechanism is identified.",
    "aliases": [],
    "weeks": [
      5,
      13,
      22,
      28
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fˈɔlt ˌaɪsəlˈeɪʃən/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "fault-isolation"
  },
  {
    "term": "feedback",
    "category": "Semiconductors",
    "definition": "Returning part of a system’s output to its input.",
    "technical": "Negative feedback is commonly used to set gain and improve linearity/stability; positive feedback can create hysteresis or oscillation.",
    "aliases": [],
    "weeks": [
      6,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fˈidbˌæk/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "feedback"
  },
  {
    "term": "firmware",
    "category": "Embedded Systems",
    "definition": "Software stored on and intended to operate hardware at a low level.",
    "technical": "NIST sources describe firmware as computer programs/data stored in hardware, commonly nonvolatile memory, that provide device control and behavior.",
    "aliases": [
      "embedded firmware"
    ],
    "weeks": [
      15,
      16,
      24,
      26
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fˈɝmwˌɛr/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "firmware"
  },
  {
    "term": "flash memory",
    "category": "Embedded Systems",
    "definition": "Nonvolatile semiconductor memory that can be electrically erased and reprogrammed in blocks.",
    "technical": "Flash memory is widely used to store firmware and persistent data in embedded systems.",
    "aliases": [],
    "weeks": [
      14,
      15,
      16,
      26
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/flˈæʃ mˈɛmɚi/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "flash-memory"
  },
  {
    "term": "flip-flop",
    "category": "Digital Logic",
    "definition": "A one-bit storage element that usually changes state on a clock edge.",
    "technical": "A flip-flop is a bistable sequential-logic element triggered by an event such as a rising or falling clock edge.",
    "aliases": [],
    "weeks": [
      11,
      15
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/flˈɪp-flˈɑp/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "flip-flop"
  },
  {
    "term": "flux",
    "category": "PCB & Assembly",
    "definition": "A chemical material that cleans metal surfaces and helps solder wet properly.",
    "technical": "Soldering flux removes/reduces oxides, promotes wetting, and may leave residues that must meet the applicable process requirements.",
    "aliases": [],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/flˈʌks/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "flux"
  },
  {
    "term": "FM",
    "category": "RF & Communications",
    "definition": "Modulation in which information varies the instantaneous frequency of a carrier.",
    "technical": "Frequency modulation varies carrier instantaneous frequency according to the modulating signal while nominal amplitude remains controlled.",
    "aliases": [
      "frequency modulation"
    ],
    "weeks": [
      20
    ],
    "source": "iec",
    "notation": "FM",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛf ˈɛm/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "fm"
  },
  {
    "term": "footprint",
    "category": "PCB & Assembly",
    "definition": "The PCB land pattern and mechanical arrangement used to mount a component.",
    "technical": "A component footprint defines pads, holes, courtyard/outline, and placement geometry needed for assembly and layout.",
    "aliases": [],
    "weeks": [
      12,
      23
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fˈʊtprˌɪnt/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "footprint"
  },
  {
    "term": "forward bias",
    "category": "Semiconductors",
    "definition": "Applying voltage polarity that encourages a semiconductor junction to conduct.",
    "technical": "Forward bias lowers the effective junction barrier of a pn junction and permits substantial conduction once operating conditions are met.",
    "aliases": [],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fˈɔrwɚd bˈaɪəs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "forward-bias"
  },
  {
    "term": "frequency",
    "category": "Foundations & Units",
    "definition": "How many times a repeating event occurs each second.",
    "technical": "Frequency is the reciprocal of period for a periodic signal and is measured in hertz (Hz).",
    "aliases": [
      "hertz"
    ],
    "weeks": [
      3,
      4,
      6,
      20
    ],
    "source": "iec",
    "notation": "f, hertz (Hz)",
    "note": "",
    "auto": true,
    "pronunciation": "/frˈikwənsi/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "frequency"
  },
  {
    "term": "function generator",
    "category": "Instruments & Measurement",
    "definition": "A bench instrument that produces test waveforms such as sine, square, triangle, or pulse signals.",
    "technical": "A function generator provides controlled electrical excitation with selectable waveform, frequency, amplitude, offset, and often modulation.",
    "aliases": [
      "signal generator"
    ],
    "weeks": [
      3,
      4,
      6,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fˈʌŋkʃən dʒˈɛnɚˌeɪtɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "function-generator"
  },
  {
    "term": "gain",
    "category": "AC & Signals",
    "definition": "How much a circuit increases or decreases a signal quantity.",
    "technical": "Gain is an output-to-input ratio for voltage, current, or power and may be expressed as a ratio or in decibels.",
    "aliases": [],
    "weeks": [
      10,
      20
    ],
    "source": "iec",
    "notation": "A or G",
    "note": "",
    "auto": true,
    "pronunciation": "/ɡˈeɪn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "gain"
  },
  {
    "term": "galvanic isolation",
    "category": "Components",
    "definition": "Electrical separation that prevents direct DC current flow between two circuit sections while allowing signal or power transfer by another mechanism.",
    "technical": "Galvanic isolation separates conductive domains using optical, magnetic, capacitive, transformer, or other isolation structures with specified withstand ratings.",
    "aliases": [],
    "weeks": [
      7,
      19,
      24
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɡælvˈænɪk ˌaɪsəlˈeɪʃən/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "galvanic-isolation"
  },
  {
    "term": "gate",
    "category": "Semiconductors",
    "definition": "The control terminal of a field-effect transistor.",
    "technical": "The MOSFET gate is insulated from the channel and its voltage relative to source controls channel conduction.",
    "aliases": [
      "MOSFET gate"
    ],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "G",
    "note": "",
    "auto": true,
    "pronunciation": "/ɡˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "gate"
  },
  {
    "term": "GFCI",
    "category": "Safety & Workmanship",
    "definition": "A protective device that shuts off power when it detects current leaking to ground.",
    "technical": "A ground-fault circuit interrupter compares outgoing and returning current and opens the circuit when the difference exceeds its trip threshold.",
    "aliases": [
      "ground-fault circuit interrupter",
      "ground fault circuit interrupter"
    ],
    "weeks": [
      1
    ],
    "source": "osha",
    "notation": "GFCI",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌdʒiː ɛf siː ˈaɪ/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "gfci"
  },
  {
    "term": "GPIO",
    "category": "Embedded Systems",
    "definition": "General-purpose pins that firmware can configure as digital inputs or outputs.",
    "technical": "General-purpose input/output peripheral logic connects MCU pins to readable input states or software-controlled output drivers, often with alternate functions.",
    "aliases": [
      "general-purpose input/output",
      "general purpose input output"
    ],
    "weeks": [
      15,
      16,
      18,
      24
    ],
    "source": "st",
    "notation": "GPIO",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌdʒiː piː aɪ ˈoʊ/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "gpio"
  },
  {
    "term": "ground",
    "category": "Safety & Workmanship",
    "definition": "A conducting reference or return connection, often tied to earth for safety or system reference.",
    "technical": "OSHA defines ground in electrical safety as a conducting connection between a circuit/equipment and earth or a conducting body serving in place of earth.",
    "aliases": [
      "grounding"
    ],
    "weeks": [
      1,
      3,
      9,
      12
    ],
    "source": "osha",
    "notation": "GND",
    "note": "",
    "auto": true,
    "pronunciation": "/ɡrˈaʊnd/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "ground"
  },
  {
    "term": "ground fault",
    "category": "Safety & Workmanship",
    "definition": "An unintended current path from an energized conductor to ground.",
    "technical": "A ground fault is an insulation or connection failure that allows current to flow to earth or grounded conductive parts.",
    "aliases": [
      "ground-fault"
    ],
    "weeks": [
      1
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɡrˈaʊnd fˈɔlt/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "ground-fault"
  },
  {
    "term": "HAL",
    "category": "Embedded Systems",
    "definition": "A software layer that provides a consistent interface to hardware-specific peripherals.",
    "technical": "A hardware abstraction layer wraps device registers and hardware details in APIs so application code can use peripherals at a higher level.",
    "aliases": [
      "hardware abstraction layer"
    ],
    "weeks": [
      16,
      26
    ],
    "source": "st",
    "notation": "HAL",
    "note": "",
    "auto": true,
    "pronunciation": "/hæl/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "hal"
  },
  {
    "term": "henry",
    "category": "Components",
    "definition": "The SI unit of inductance.",
    "technical": "One henry produces one volt of induced voltage when current changes at one ampere per second under the defining relation.",
    "aliases": [
      "henries"
    ],
    "weeks": [
      4,
      6,
      7
    ],
    "source": "iec",
    "notation": "H",
    "note": "",
    "auto": true,
    "pronunciation": "/hˈɛnri/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "henry"
  },
  {
    "term": "high-pass filter",
    "category": "AC & Signals",
    "definition": "A filter that passes higher frequencies more readily than lower frequencies.",
    "technical": "A high-pass filter has a passband above its cutoff region and attenuates lower-frequency or DC components according to its response.",
    "aliases": [
      "high pass filter"
    ],
    "weeks": [
      4,
      6
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/hˈaɪ-pˈæs fˈɪltɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "high-pass-filter"
  },
  {
    "term": "HIL",
    "category": "Test & Troubleshooting",
    "definition": "A test setup that connects real hardware to a simulated or controlled environment so system behavior can be exercised safely and repeatedly.",
    "technical": "Hardware-in-the-loop testing places one or more real components in a closed-loop test system where models or instruments emulate the surrounding system.",
    "aliases": [
      "hardware-in-the-loop",
      "hardware in the loop"
    ],
    "weeks": [
      18,
      23,
      27
    ],
    "source": "nist_csrc",
    "notation": "HIL",
    "note": "",
    "auto": true,
    "pronunciation": "/hɪl/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "hil"
  },
  {
    "term": "hypothesis",
    "category": "Test & Troubleshooting",
    "definition": "A testable proposed explanation for an observed symptom or measurement.",
    "technical": "In troubleshooting, a hypothesis predicts what additional evidence should be present if a suspected cause is correct.",
    "aliases": [],
    "weeks": [
      5,
      13,
      22
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/haɪpˈɑθəsəs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "hypothesis"
  },
  {
    "term": "hysteresis",
    "category": "Semiconductors",
    "definition": "A behavior where switching depends partly on the previous state, creating different thresholds in each direction.",
    "technical": "Electronic hysteresis deliberately separates rising and falling thresholds to improve noise immunity and stable switching.",
    "aliases": [],
    "weeks": [
      10,
      11,
      15
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/hysteresis/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "hysteresis"
  },
  {
    "term": "IDE",
    "category": "Embedded Systems",
    "definition": "Software that combines source editing, build tools, debugging, and project management for programming.",
    "technical": "An integrated development environment organizes editing, compilation, linking, flashing, and debugging workflows.",
    "aliases": [
      "integrated development environment"
    ],
    "weeks": [
      16,
      17,
      26
    ],
    "source": "st",
    "notation": "IDE",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌaɪ diː ˈiː/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "ide"
  },
  {
    "term": "impedance",
    "category": "AC & Signals",
    "definition": "The total opposition a circuit presents to AC, combining resistance and reactance.",
    "technical": "Impedance is the complex ratio of phasor voltage to phasor current and is measured in ohms.",
    "aliases": [
      "electrical impedance"
    ],
    "weeks": [
      4,
      6,
      20
    ],
    "source": "iec",
    "notation": "Z, ohm (Ω)",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɪmpˈidəns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "impedance"
  },
  {
    "term": "impedance matching",
    "category": "RF & Communications",
    "definition": "Choosing source, line, and load impedances to reduce reflections or obtain a desired power-transfer condition.",
    "technical": "Transmission-line impedance matching minimizes reflection coefficient at an interface when the load is made equal or suitably transformed to the line impedance.",
    "aliases": [],
    "weeks": [
      6,
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɪmpˈidəns mˈætʃɪŋ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "impedance-matching"
  },
  {
    "term": "inductance",
    "category": "Components",
    "definition": "A measure of how strongly a circuit or component links changing current to induced voltage.",
    "technical": "Inductance relates magnetic flux linkage to current and is measured in henries.",
    "aliases": [],
    "weeks": [
      4,
      6,
      7
    ],
    "source": "iec",
    "notation": "L, henry (H)",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɪndˈʌktəns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "inductance"
  },
  {
    "term": "inductor",
    "category": "Components",
    "definition": "A component that stores energy in a magnetic field when current flows through it.",
    "technical": "An inductor is characterized primarily by inductance and opposes changes in current by developing an induced voltage.",
    "aliases": [],
    "weeks": [
      4,
      6,
      7,
      9
    ],
    "source": "iec",
    "notation": "L",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɪndˈʌktɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "inductor"
  },
  {
    "term": "inrush current",
    "category": "Power Electronics",
    "definition": "A short burst of high current that can occur when equipment is first energized.",
    "technical": "Inrush current is the transient input current associated with charging capacitors, magnetizing inductors, or starting loads.",
    "aliases": [],
    "weeks": [
      9,
      24
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/inrush kˈɝənt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "inrush-current"
  },
  {
    "term": "interrupt",
    "category": "Embedded Systems",
    "definition": "A hardware or software event that causes the processor to suspend normal flow and run a designated handler.",
    "technical": "An interrupt is an exception-like event routed to processor handling logic according to enable, priority, and vector configuration.",
    "aliases": [],
    "weeks": [
      15,
      16,
      18,
      26
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɪntɚˈʌpt/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "interrupt"
  },
  {
    "term": "ISR",
    "category": "Embedded Systems",
    "definition": "The function or routine executed in response to an interrupt.",
    "technical": "An interrupt service routine handles the interrupt source, performs time-critical work, and returns control to interrupted execution according to the architecture.",
    "aliases": [
      "interrupt service routine",
      "interrupt handler"
    ],
    "weeks": [
      15,
      16,
      26
    ],
    "source": "arm",
    "notation": "ISR",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌaɪ ɛs ˈɑːr/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "isr"
  },
  {
    "term": "I²C",
    "category": "Interfaces & Protocols",
    "definition": "A two-wire addressed serial bus commonly used for sensors and peripheral ICs.",
    "technical": "The I²C bus uses serial data (SDA) and serial clock (SCL), open-drain/open-collector signaling, pull-up resistors, addressing, and acknowledge cycles.",
    "aliases": [
      "I2C",
      "IIC",
      "Inter-Integrated Circuit"
    ],
    "weeks": [
      18,
      25
    ],
    "source": "nxp_i2c",
    "notation": "I²C",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌaɪ skuːrd ˈsiː/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "i-c"
  },
  {
    "term": "JSON",
    "category": "Software & Automation",
    "definition": "A structured text format for representing objects, arrays, numbers, strings, booleans, and null values.",
    "technical": "JavaScript Object Notation is a language-independent data-interchange syntax commonly used for configuration, APIs, logs, and structured test results.",
    "aliases": [
      "JavaScript Object Notation"
    ],
    "weeks": [
      17,
      27
    ],
    "source": "nist_csrc",
    "notation": "JSON",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈdʒeɪsɒn/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "json"
  },
  {
    "term": "JTAG",
    "category": "Embedded Systems",
    "definition": "A standardized test/debug interface used for boundary scan and processor/system debugging.",
    "technical": "JTAG commonly refers to IEEE 1149.1 test-access architecture using a test access port and instruction/data registers; many devices extend it for debug.",
    "aliases": [
      "Joint Test Action Group"
    ],
    "weeks": [
      16,
      24
    ],
    "source": "arm",
    "notation": "JTAG",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈdʒeɪtæɡ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "jtag"
  },
  {
    "term": "KCL",
    "category": "Circuit Analysis",
    "definition": "The rule that current flowing into a node must balance current flowing out.",
    "technical": "Kirchhoff’s Current Law expresses conservation of charge at a circuit node: the algebraic sum of branch currents at a node is zero.",
    "aliases": [
      "Kirchhoff’s Current Law",
      "Kirchhoffs Current Law",
      "Kirchhoff current law"
    ],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "ΣI = 0",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌkeɪ siː ˈɛl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "kcl"
  },
  {
    "term": "KVL",
    "category": "Circuit Analysis",
    "definition": "The rule that voltage rises and drops around a closed loop must balance.",
    "technical": "Kirchhoff’s Voltage Law states that the algebraic sum of voltages around a closed loop is zero for the lumped-circuit model.",
    "aliases": [
      "Kirchhoff’s Voltage Law",
      "Kirchhoffs Voltage Law",
      "Kirchhoff voltage law"
    ],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "ΣV = 0",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌkeɪ viː ˈɛl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "kvl"
  },
  {
    "term": "latch",
    "category": "Digital Logic",
    "definition": "A storage element that can hold one bit of state and is typically level-sensitive.",
    "technical": "A latch is a bistable storage circuit whose state can change while an enable condition is active.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lˈætʃ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "latch"
  },
  {
    "term": "LCR meter",
    "category": "Instruments & Measurement",
    "definition": "An instrument used to measure inductance, capacitance, resistance, and often related impedance parameters.",
    "technical": "An LCR meter applies an AC stimulus and derives impedance-related component values at specified test conditions.",
    "aliases": [],
    "weeks": [
      4,
      6,
      12
    ],
    "source": "iec",
    "notation": "LCR",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛl siː ˈɑːr ˈmiːtər/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "lcr-meter"
  },
  {
    "term": "LDO",
    "category": "Power Electronics",
    "definition": "A linear regulator designed to regulate with a relatively small input-to-output voltage difference.",
    "technical": "A low-dropout regulator maintains regulation down to a specified dropout voltage that is lower than conventional linear-regulator requirements.",
    "aliases": [
      "low-dropout regulator",
      "low dropout regulator"
    ],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "LDO",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛl diː ˈoʊ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "ldo"
  },
  {
    "term": "LED",
    "category": "Semiconductors",
    "definition": "A diode that emits light when current flows in the forward direction.",
    "technical": "A light-emitting diode converts electrical carrier recombination energy into optical radiation.",
    "aliases": [
      "light-emitting diode",
      "light emitting diode"
    ],
    "weeks": [
      8,
      11,
      12
    ],
    "source": "iec",
    "notation": "LED",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛl iː ˈdiː/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "led"
  },
  {
    "term": "linear regulator",
    "category": "Power Electronics",
    "definition": "A regulator that controls output voltage by operating a pass device in its linear region.",
    "technical": "A linear regulator dissipates excess voltage as heat to maintain a controlled output, subject to dropout and thermal limits.",
    "aliases": [],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lˈɪniɚ rˈɛɡjəlˌeɪtɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "linear-regulator"
  },
  {
    "term": "loading effect",
    "category": "Instruments & Measurement",
    "definition": "A change in the circuit being measured caused by the measuring instrument itself.",
    "technical": "Instrument input impedance, capacitance, probe characteristics, or current burden can alter the measurand when connected.",
    "aliases": [],
    "weeks": [
      3
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lˈoʊdɪŋ ɪfˈɛkt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "loading-effect"
  },
  {
    "term": "logic analyzer",
    "category": "Instruments & Measurement",
    "definition": "An instrument that captures and displays multiple digital signals so their timing and protocol relationships can be inspected.",
    "technical": "A logic analyzer samples digital channels and represents logic states versus time; many models also decode serial protocols.",
    "aliases": [],
    "weeks": [
      11,
      17,
      18,
      25
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lˈɑdʒɪk ˈænəlˌaɪzɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "logic-analyzer"
  },
  {
    "term": "logic gate",
    "category": "Digital Logic",
    "definition": "A circuit that performs a basic Boolean operation on one or more binary inputs.",
    "technical": "Logic gates implement Boolean functions and produce output logic levels based on defined input-state combinations.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lˈɑdʒɪk ɡˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "logic-gate"
  },
  {
    "term": "logic level",
    "category": "Digital Logic",
    "definition": "A voltage range interpreted as a digital 0 or digital 1.",
    "technical": "Digital interfaces specify acceptable input and guaranteed output voltage ranges rather than one exact voltage for each state.",
    "aliases": [],
    "weeks": [
      11,
      15,
      18
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lˈɑdʒɪk lˈɛvəl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "logic-level"
  },
  {
    "term": "logic threshold",
    "category": "Digital Logic",
    "definition": "A specified input voltage boundary used to determine whether a signal is recognized as low or high.",
    "technical": "Digital devices specify VIL/VIH input limits and VOH/VOL output limits to guarantee compatible logic levels with noise margin.",
    "aliases": [],
    "weeks": [
      11,
      15,
      18
    ],
    "source": "st",
    "notation": "VIL, VIH, VOL, VOH",
    "note": "",
    "auto": true,
    "pronunciation": "/lˈɑdʒɪk θrˈɛʃˌoʊld/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "logic-threshold"
  },
  {
    "term": "LOTO",
    "category": "Safety & Workmanship",
    "definition": "A safety process that isolates energy and prevents equipment from being re-energized during work.",
    "technical": "Lockout/tagout uses energy-isolating devices, locks, tags, verification, and controlled procedures to prevent hazardous energization.",
    "aliases": [
      "lockout/tagout",
      "lockout tagout",
      "lockout",
      "tagout"
    ],
    "weeks": [
      1,
      12,
      28
    ],
    "source": "osha",
    "notation": "LOTO",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈloʊtoʊ/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "loto"
  },
  {
    "term": "low-pass filter",
    "category": "AC & Signals",
    "definition": "A filter that passes lower frequencies more readily than higher frequencies.",
    "technical": "A low-pass filter has a passband below its cutoff region and attenuates higher-frequency components according to its response.",
    "aliases": [
      "low pass filter"
    ],
    "weeks": [
      4,
      6
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lˈoʊ-pˈæs fˈɪltɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "low-pass-filter"
  },
  {
    "term": "measurement uncertainty",
    "category": "Instruments & Measurement",
    "definition": "A quantified statement of doubt or spread associated with a measurement result.",
    "technical": "NIST treats a measurement result as incomplete without a quantitative uncertainty statement describing the dispersion attributable to the measurand estimate.",
    "aliases": [
      "uncertainty"
    ],
    "weeks": [
      3,
      27,
      29
    ],
    "source": "nist_unc",
    "notation": "U or u",
    "note": "",
    "auto": true,
    "pronunciation": "/mˈɛʒɚmənt ənsˈɝtənti/",
    "sourceDetail": {
      "name": "NIST Technical Note 1297 — Measurement Uncertainty Terminology",
      "url": "https://www.nist.gov/pml/nist-technical-note-1297",
      "note": "NIST guidance for measurement accuracy, repeatability, reproducibility, calibration, and uncertainty."
    },
    "slug": "measurement-uncertainty"
  },
  {
    "term": "mesh",
    "category": "Circuit Analysis",
    "definition": "A loop in a planar circuit that contains no smaller loop inside it.",
    "technical": "Mesh analysis assigns loop currents to the smallest independent loops of a planar network.",
    "aliases": [],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/mˈɛʃ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "mesh"
  },
  {
    "term": "microcontroller",
    "category": "Embedded Systems",
    "definition": "A single integrated circuit containing a processor plus memory and peripherals for embedded control.",
    "technical": "A microcontroller unit integrates a CPU core with on-chip memory, digital/analog peripherals, timers, buses, and I/O intended for embedded applications.",
    "aliases": [
      "MCU",
      "microcontroller unit"
    ],
    "weeks": [
      15,
      16,
      18,
      24,
      25,
      26
    ],
    "source": "st",
    "notation": "MCU",
    "note": "",
    "auto": true,
    "pronunciation": "/microcontroller/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "microcontroller"
  },
  {
    "term": "MISO",
    "category": "Interfaces & Protocols",
    "definition": "The traditional SPI signal name for data sent from the peripheral/slave toward the controller/master.",
    "technical": "Many modern documents use controller/peripheral naming; MISO remains a common legacy signal label in hardware and datasheets.",
    "aliases": [
      "controller in peripheral out",
      "master in slave out"
    ],
    "weeks": [
      18
    ],
    "source": "st",
    "notation": "MISO",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈmaɪsoʊ/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "miso"
  },
  {
    "term": "modulation",
    "category": "RF & Communications",
    "definition": "Changing a carrier signal in a controlled way so it conveys information.",
    "technical": "Modulation varies one or more carrier parameters according to a modulating/baseband signal.",
    "aliases": [],
    "weeks": [
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/mˌɑdʒəlˈeɪʃən/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "modulation"
  },
  {
    "term": "MOSFET",
    "category": "Semiconductors",
    "definition": "A voltage-controlled transistor widely used as an electronic switch and amplifier.",
    "technical": "A metal-oxide-semiconductor field-effect transistor controls channel conduction using an insulated gate electric field.",
    "aliases": [
      "metal-oxide-semiconductor field-effect transistor",
      "FET"
    ],
    "weeks": [
      8,
      9,
      10
    ],
    "source": "iec",
    "notation": "MOSFET",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈmɒsfɛt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "mosfet"
  },
  {
    "term": "MOSI",
    "category": "Interfaces & Protocols",
    "definition": "The traditional SPI signal name for data sent from the controller/master toward the peripheral/slave.",
    "technical": "Many modern documents use controller/peripheral naming; MOSI remains a common legacy signal label in hardware and datasheets.",
    "aliases": [
      "controller out peripheral in",
      "master out slave in"
    ],
    "weeks": [
      18
    ],
    "source": "st",
    "notation": "MOSI",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈmoʊsi/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "mosi"
  },
  {
    "term": "motor",
    "category": "Components",
    "definition": "A device that converts electrical energy into mechanical motion.",
    "technical": "An electric motor converts electrical input into mechanical torque and rotation or linear motion through electromagnetic interaction.",
    "aliases": [],
    "weeks": [
      7,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/mˈoʊtɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "motor"
  },
  {
    "term": "multimeter",
    "category": "Instruments & Measurement",
    "definition": "A test instrument that combines several electrical measurements such as voltage, current, and resistance.",
    "technical": "A digital multimeter measures selected electrical quantities using internal conversion, ranging, and protection circuits.",
    "aliases": [
      "DMM",
      "digital multimeter"
    ],
    "weeks": [
      1,
      3,
      12,
      13,
      19
    ],
    "source": "iec",
    "notation": "DMM",
    "note": "",
    "auto": true,
    "pronunciation": "/multimeter/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "multimeter"
  },
  {
    "term": "multiplexer",
    "category": "Digital Logic",
    "definition": "A circuit that selects one of several inputs and routes it to one output.",
    "technical": "A multiplexer uses select inputs to choose which data input is connected logically or electronically to its output.",
    "aliases": [
      "MUX"
    ],
    "weeks": [
      11,
      25
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/mˈʌltiplˌɛksɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "multiplexer"
  },
  {
    "term": "NACK",
    "category": "Interfaces & Protocols",
    "definition": "A negative acknowledgement indicating that a transfer was not accepted or should end.",
    "technical": "On I²C, NACK is represented by leaving SDA high during the acknowledge clock and can signal no response or end-of-read conditions.",
    "aliases": [
      "NAK",
      "negative acknowledgement"
    ],
    "weeks": [
      18
    ],
    "source": "nxp_i2c",
    "notation": "NACK",
    "note": "",
    "auto": true,
    "pronunciation": "/næk/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "nack"
  },
  {
    "term": "NAND gate",
    "category": "Digital Logic",
    "definition": "A logic gate that produces the inverse of an AND result.",
    "technical": "Implements NOT(AND) and is functionally complete.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/NAND ɡˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "nand-gate"
  },
  {
    "term": "netlist",
    "category": "PCB & Assembly",
    "definition": "A machine-readable description of which component pins are electrically connected together.",
    "technical": "A netlist represents the nodes/nets and terminals of a circuit and is used by design, simulation, layout, and verification tools.",
    "aliases": [],
    "weeks": [
      12,
      23
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/netlist/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "netlist"
  },
  {
    "term": "node",
    "category": "Circuit Analysis",
    "definition": "A point or connected region where two or more circuit elements join.",
    "technical": "A node is a set of electrically connected points treated as having the same potential in ideal circuit analysis.",
    "aliases": [],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/nˈoʊd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "node"
  },
  {
    "term": "noise margin",
    "category": "Digital Logic",
    "definition": "The voltage cushion between guaranteed output levels and required input thresholds.",
    "technical": "Noise margin quantifies how much unwanted voltage disturbance can be tolerated before a valid logic state becomes ambiguous.",
    "aliases": [],
    "weeks": [
      11,
      15,
      18
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/nˈɔɪz mˈɑrdʒən/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "noise-margin"
  },
  {
    "term": "NOR gate",
    "category": "Digital Logic",
    "definition": "A logic gate that produces the inverse of an OR result.",
    "technical": "Implements NOT(OR) and is functionally complete.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/nˈɔr ɡˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "nor-gate"
  },
  {
    "term": "Norton equivalent",
    "category": "Circuit Analysis",
    "definition": "A way to replace a linear two-terminal network with one current source and one parallel resistance.",
    "technical": "The Norton equivalent preserves the external terminal behavior using In and Rn, with Rn equal to the Thévenin resistance.",
    "aliases": [
      "Norton theorem"
    ],
    "weeks": [
      2,
      5
    ],
    "source": "iec",
    "notation": "In, Rn",
    "note": "",
    "auto": true,
    "pronunciation": "/nˈɔrtən ɪkwˈɪvələnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "norton-equivalent"
  },
  {
    "term": "NOT gate",
    "category": "Digital Logic",
    "definition": "A logic gate that produces the logical opposite of its input.",
    "technical": "Implements logical negation and is also called an inverter.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/nˈɑt ɡˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "not-gate"
  },
  {
    "term": "ohm",
    "category": "Foundations & Units",
    "definition": "The SI unit used to measure electrical resistance.",
    "technical": "One ohm is one volt per ampere (1 Ω = 1 V/A).",
    "aliases": [
      "ohms"
    ],
    "weeks": [
      1,
      2,
      4
    ],
    "source": "nist_si",
    "notation": "Ω",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈoʊm/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "ohm"
  },
  {
    "term": "Ohm’s law",
    "category": "Circuit Analysis",
    "definition": "The relationship between voltage, current, and resistance in an ohmic circuit.",
    "technical": "For an ohmic element, V = IR, with equivalent forms I = V/R and R = V/I.",
    "aliases": [
      "Ohms law",
      "Ohm law"
    ],
    "weeks": [
      1,
      2
    ],
    "source": "nist_si",
    "notation": "V = IR",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈoʊmz lˈɔ/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "ohm-s-law"
  },
  {
    "term": "op-amp",
    "category": "Semiconductors",
    "definition": "A high-gain differential amplifier designed to be used with feedback.",
    "technical": "An operational amplifier amplifies the voltage difference between two inputs and is normally configured by external feedback networks.",
    "aliases": [
      "operational amplifier",
      "op amp"
    ],
    "weeks": [
      10
    ],
    "source": "iec",
    "notation": "op-amp",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈɒp æmp/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "op-amp"
  },
  {
    "term": "open circuit",
    "category": "Circuit Analysis",
    "definition": "A broken or intentionally disconnected path that prevents normal current flow.",
    "technical": "An open circuit has a very high effective resistance between points that would otherwise complete a current path.",
    "aliases": [],
    "weeks": [
      1,
      2,
      3,
      13
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈoʊpən sˈɝkət/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "open-circuit"
  },
  {
    "term": "optocoupler",
    "category": "Components",
    "definition": "A component that transfers a signal using light to provide electrical isolation between input and output sides.",
    "technical": "An optocoupler/optoisolator contains an emitter and photosensitive receiver arranged to communicate optically while limiting direct conductive coupling.",
    "aliases": [
      "optoisolator",
      "opto-isolator",
      "optical isolator"
    ],
    "weeks": [
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/optocoupler/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "optocoupler"
  },
  {
    "term": "OR gate",
    "category": "Digital Logic",
    "definition": "A logic gate whose output is true/high when at least one input is true/high.",
    "technical": "Implements logical disjunction.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈɔr ɡˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "or-gate"
  },
  {
    "term": "oscillator",
    "category": "AC & Signals",
    "definition": "A circuit or system that generates a repeating waveform without needing a repeating external input.",
    "technical": "An electronic oscillator converts DC power into a periodic signal through feedback or another regenerative mechanism.",
    "aliases": [],
    "weeks": [
      6,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈɑsəlˌeɪtɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "oscillator"
  },
  {
    "term": "oscilloscope",
    "category": "Instruments & Measurement",
    "definition": "An instrument that displays electrical signals as waveforms, usually voltage versus time.",
    "technical": "An oscilloscope acquires and displays time-varying signals, enabling measurement of amplitude, timing, frequency, edge behavior, and many derived quantities.",
    "aliases": [
      "scope"
    ],
    "weeks": [
      3,
      4,
      6,
      10,
      17,
      18,
      20,
      27
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɔsˈɪləskˌoʊp/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "oscilloscope"
  },
  {
    "term": "pad",
    "category": "PCB & Assembly",
    "definition": "A conductive land on a PCB used to connect a component lead, terminal, or via.",
    "technical": "A land/pad is a conductive feature designed for component attachment, test contact, or interconnection.",
    "aliases": [],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pˈæd/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "pad"
  },
  {
    "term": "parallel circuit",
    "category": "Circuit Analysis",
    "definition": "A connection in which components share the same two nodes and therefore the same voltage.",
    "technical": "Elements are in parallel when both of their terminals connect to the same pair of nodes.",
    "aliases": [],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pˈɛrəlˌɛl sˈɝkət/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "parallel-circuit"
  },
  {
    "term": "parity bit",
    "category": "Interfaces & Protocols",
    "definition": "An optional serial-data bit used for simple error detection.",
    "technical": "Parity makes the number of one bits even or odd according to the selected convention; it detects some but not all transmission errors.",
    "aliases": [],
    "weeks": [
      17
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pˈɛrəti bˈɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "parity-bit"
  },
  {
    "term": "pass/fail criterion",
    "category": "Test & Troubleshooting",
    "definition": "The explicit rule used to decide whether a test result is acceptable.",
    "technical": "A pass/fail criterion defines measurable limits, conditions, tolerances, or required behavior before the test is run so the decision is repeatable and auditable.",
    "aliases": [
      "pass/fail",
      "acceptance criterion"
    ],
    "weeks": [
      21,
      22,
      27,
      29
    ],
    "source": "nist_unc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pˈæs/fˈeɪl kraɪtˈɪriən/",
    "sourceDetail": {
      "name": "NIST Technical Note 1297 — Measurement Uncertainty Terminology",
      "url": "https://www.nist.gov/pml/nist-technical-note-1297",
      "note": "NIST guidance for measurement accuracy, repeatability, reproducibility, calibration, and uncertainty."
    },
    "slug": "pass-fail-criterion"
  },
  {
    "term": "PCB",
    "category": "PCB & Assembly",
    "definition": "A printed circuit board that mechanically supports and electrically connects electronic components.",
    "technical": "A printed board uses patterned conductive features on or within insulating material to interconnect components.",
    "aliases": [
      "printed circuit board",
      "printed board"
    ],
    "weeks": [
      12,
      19,
      23,
      29
    ],
    "source": "ipc",
    "notation": "PCB",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌpiː siː ˈbiː/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "pcb"
  },
  {
    "term": "PCBA",
    "category": "PCB & Assembly",
    "definition": "A printed circuit board after components have been assembled onto it.",
    "technical": "A printed circuit board assembly is the populated/soldered board considered as an electronic assembly.",
    "aliases": [
      "printed circuit board assembly"
    ],
    "weeks": [
      12,
      19,
      23,
      29
    ],
    "source": "ipc",
    "notation": "PCBA",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌpiː siː biː ˈeɪ/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "pcba"
  },
  {
    "term": "period",
    "category": "Foundations & Units",
    "definition": "The time required for one complete cycle of a repeating waveform.",
    "technical": "For a periodic signal, period T and frequency f are reciprocals: T = 1/f.",
    "aliases": [],
    "weeks": [
      3,
      6,
      20
    ],
    "source": "iec",
    "notation": "T, second (s)",
    "note": "",
    "auto": true,
    "pronunciation": "/pˈɪriəd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "period"
  },
  {
    "term": "peripheral",
    "category": "Interfaces & Protocols",
    "definition": "A hardware block or device that provides a function outside the processor core, such as UART, timer, ADC, or GPIO.",
    "technical": "In microcontrollers, peripherals are hardware modules controlled through registers and connected to clocks, buses, pins, DMA, and interrupts.",
    "aliases": [
      "peripherals"
    ],
    "weeks": [
      15,
      16,
      18,
      25
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pɚˈɪfɚəl/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "peripheral"
  },
  {
    "term": "phase",
    "category": "AC & Signals",
    "definition": "The position of one periodic waveform relative to another within a cycle.",
    "technical": "Phase specifies angular displacement within a periodic signal, usually expressed in degrees or radians.",
    "aliases": [],
    "weeks": [
      3,
      6,
      20
    ],
    "source": "iec",
    "notation": "φ",
    "note": "",
    "auto": true,
    "pronunciation": "/fˈeɪz/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "phase"
  },
  {
    "term": "phasor",
    "category": "AC & Signals",
    "definition": "A complex-number representation that makes sinusoidal steady-state AC calculations easier.",
    "technical": "A phasor represents the magnitude and phase of a sinusoidal quantity at one angular frequency while suppressing the explicit time factor.",
    "aliases": [],
    "weeks": [
      6
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/phasor/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "phasor"
  },
  {
    "term": "pinout",
    "category": "PCB & Assembly",
    "definition": "A map showing what function or signal is assigned to each pin of a connector or device.",
    "technical": "A pinout documents terminal identifiers, locations, signal names, power rails, grounds, and sometimes direction/electrical type.",
    "aliases": [],
    "weeks": [
      15,
      16,
      19,
      24
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pinout/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "pinout"
  },
  {
    "term": "power",
    "category": "Foundations & Units",
    "definition": "The rate at which electrical energy is transferred or converted.",
    "technical": "Electrical power is energy per unit time; in DC circuits it is commonly P = VI and is measured in watts.",
    "aliases": [
      "electrical power"
    ],
    "weeks": [
      1,
      2,
      9
    ],
    "source": "iec",
    "notation": "P, watt (W)",
    "note": "",
    "auto": true,
    "pronunciation": "/pˈaʊɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "power"
  },
  {
    "term": "power supply",
    "category": "Power Electronics",
    "definition": "A circuit or device that provides electrical power at required voltage/current conditions.",
    "technical": "A power supply converts available input energy into regulated or unregulated electrical outputs suitable for a load.",
    "aliases": [],
    "weeks": [
      1,
      3,
      9,
      24
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pˈaʊɚ səplˈaɪ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "power-supply"
  },
  {
    "term": "power tree",
    "category": "Power Electronics",
    "definition": "A diagram showing how power rails are derived and distributed through a system.",
    "technical": "A power tree maps sources, converters, regulators, rails, loads, dependencies, and sequencing relationships for system power.",
    "aliases": [],
    "weeks": [
      9,
      24
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pˈaʊɚ trˈi/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "power-tree"
  },
  {
    "term": "PPE",
    "category": "Safety & Workmanship",
    "definition": "Protective clothing or equipment worn to reduce exposure to hazards.",
    "technical": "Personal protective equipment is selected based on identified workplace hazards and the protection required.",
    "aliases": [
      "personal protective equipment"
    ],
    "weeks": [
      1,
      12,
      29
    ],
    "source": "osha",
    "notation": "PPE",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌpiː piː ˈiː/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "ppe"
  },
  {
    "term": "precision",
    "category": "Instruments & Measurement",
    "definition": "How closely repeated measurements agree with one another under stated conditions.",
    "technical": "Precision concerns agreement among independent results and encompasses repeatability/reproducibility concepts; it is distinct from accuracy.",
    "aliases": [],
    "weeks": [
      3,
      27,
      29
    ],
    "source": "nist_unc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/prisˈɪʒən/",
    "sourceDetail": {
      "name": "NIST Technical Note 1297 — Measurement Uncertainty Terminology",
      "url": "https://www.nist.gov/pml/nist-technical-note-1297",
      "note": "NIST guidance for measurement accuracy, repeatability, reproducibility, calibration, and uncertainty."
    },
    "slug": "precision"
  },
  {
    "term": "probe",
    "category": "Instruments & Measurement",
    "definition": "The sensing connection used to bring a signal from the circuit to a test instrument.",
    "technical": "A measurement probe has electrical loading, bandwidth, voltage/current limits, and compensation characteristics that affect the measurement.",
    "aliases": [],
    "weeks": [
      3,
      6,
      10,
      18
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/prˈoʊb/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "probe"
  },
  {
    "term": "processor",
    "category": "Embedded Systems",
    "definition": "The part of a computer system that executes instructions and performs data/control operations.",
    "technical": "A processor implements an instruction architecture and datapath/control mechanisms to fetch, decode, and execute instructions.",
    "aliases": [
      "CPU",
      "central processing unit"
    ],
    "weeks": [
      14,
      15
    ],
    "source": "arm",
    "notation": "CPU",
    "note": "",
    "auto": true,
    "pronunciation": "/prˈɑsˌɛsɚ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "processor"
  },
  {
    "term": "PTH",
    "category": "PCB & Assembly",
    "definition": "A plated-through hole that provides an electrical connection through a PCB hole.",
    "technical": "A plated-through hole has conductive plating on the hole wall and may receive a component lead or provide interlayer connection.",
    "aliases": [
      "plated-through hole",
      "plated through hole"
    ],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "PTH",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌpiː tiː ˈeɪtʃ/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "pth"
  },
  {
    "term": "pull-down resistor",
    "category": "Digital Logic",
    "definition": "A resistor that biases a signal toward a low logic level when nothing else actively drives it.",
    "technical": "A pull-down provides a passive path to ground so an undriven node has a defined low state.",
    "aliases": [
      "pull-down",
      "pulldown"
    ],
    "weeks": [
      11,
      15
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pˈʊl-dˈaʊn rɪzˈɪstɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "pull-down-resistor"
  },
  {
    "term": "pull-up resistor",
    "category": "Digital Logic",
    "definition": "A resistor that biases a signal toward a high logic level when nothing else actively drives it.",
    "technical": "A pull-up provides a passive path to the positive rail so an open-drain/open-collector or otherwise undriven node has a defined high state.",
    "aliases": [
      "pull-up",
      "pullup"
    ],
    "weeks": [
      11,
      15,
      18
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pˈʊl-ˈʌp rɪzˈɪstɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "pull-up-resistor"
  },
  {
    "term": "PWM",
    "category": "Embedded Systems",
    "definition": "A digital pulse technique that controls average power or encodes an analog-like level by changing duty cycle.",
    "technical": "Pulse-width modulation varies pulse width at a fixed or controlled period; the duty cycle determines average delivered value after the load/filter response.",
    "aliases": [
      "pulse-width modulation",
      "pulse width modulation"
    ],
    "weeks": [
      7,
      9,
      15,
      25
    ],
    "source": "st",
    "notation": "PWM",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌpiː dʌbəljuː ˈɛm/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "pwm"
  },
  {
    "term": "pySerial",
    "category": "Software & Automation",
    "definition": "A Python library that provides access to serial ports.",
    "technical": "pySerial exposes serial-port configuration, read/write, timing, and device-enumeration functionality to Python programs.",
    "aliases": [
      "pyserial"
    ],
    "weeks": [
      17,
      27
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pySerial/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "pyserial"
  },
  {
    "term": "Python",
    "category": "Software & Automation",
    "definition": "A high-level programming language widely used for scripting, automation, data analysis, and test tooling.",
    "technical": "Python is an interpreted, general-purpose language with a large standard library and ecosystem, often used for serial communication and automated test workflows.",
    "aliases": [],
    "weeks": [
      17,
      27
    ],
    "source": "python",
    "notation": "Python",
    "note": "",
    "auto": true,
    "pronunciation": "/pˈaɪθɑn/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "python"
  },
  {
    "term": "quantization",
    "category": "Embedded Systems",
    "definition": "Mapping a continuously variable or high-resolution value into one of a limited number of discrete levels.",
    "technical": "ADC/DAC quantization represents a range with finite codes, creating a quantization step and associated error.",
    "aliases": [],
    "weeks": [
      25,
      27
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/quantization/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "quantization"
  },
  {
    "term": "RAM",
    "category": "Embedded Systems",
    "definition": "Working memory that can be read and written while the system is running and normally loses data without power.",
    "technical": "Random-access memory provides directly addressable read/write storage; embedded MCUs commonly use SRAM for runtime data.",
    "aliases": [
      "random-access memory",
      "random access memory"
    ],
    "weeks": [
      14,
      15,
      26
    ],
    "source": "nist_csrc",
    "notation": "RAM",
    "note": "",
    "auto": true,
    "pronunciation": "/ræm/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "ram"
  },
  {
    "term": "reactance",
    "category": "AC & Signals",
    "definition": "Frequency-dependent opposition to AC caused by capacitance or inductance.",
    "technical": "Reactance is the imaginary component of impedance; capacitive and inductive reactance have opposite signs under the usual convention.",
    "aliases": [
      "capacitive reactance",
      "inductive reactance"
    ],
    "weeks": [
      4,
      6
    ],
    "source": "iec",
    "notation": "X, ohm (Ω)",
    "note": "",
    "auto": true,
    "pronunciation": "/reactance/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "reactance"
  },
  {
    "term": "recommended operating condition",
    "category": "Test & Troubleshooting",
    "definition": "The range of voltage, current, temperature, timing, or other conditions in which normal device operation is specified.",
    "technical": "Datasheet recommended operating conditions bound the environment in which published electrical characteristics and functional behavior are intended to apply.",
    "aliases": [
      "recommended operating conditions"
    ],
    "weeks": [
      8,
      9,
      15,
      16,
      24
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rˌɛkəmˈɛndɪd ˈɑpɚˌeɪtɪŋ kəndˈɪʃən/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "recommended-operating-condition"
  },
  {
    "term": "rectification",
    "category": "Power Electronics",
    "definition": "The process of converting AC into a one-direction output.",
    "technical": "Rectification uses nonlinear switching behavior, commonly diodes or controlled switches, to produce DC-like output from AC.",
    "aliases": [],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rˌɛktəfəkˈeɪʃən/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "rectification"
  },
  {
    "term": "rectifier",
    "category": "Semiconductors",
    "definition": "A circuit or device that converts alternating current into a one-direction electrical output.",
    "technical": "Rectification uses nonlinear devices such as diodes to produce a unidirectional voltage or current from an alternating source.",
    "aliases": [],
    "weeks": [
      8,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rˈɛktəfˌaɪɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "rectifier"
  },
  {
    "term": "reflection",
    "category": "RF & Communications",
    "definition": "Signal energy that travels back toward the source because of an impedance discontinuity.",
    "technical": "A transmission-line reflection occurs when the terminating impedance differs from the characteristic impedance, creating a nonzero reflection coefficient.",
    "aliases": [],
    "weeks": [
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rɪflˈɛkʃən/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "reflection"
  },
  {
    "term": "reflow",
    "category": "PCB & Assembly",
    "definition": "A soldering process that melts previously applied solder paste to form component joints.",
    "technical": "Reflow soldering heats an assembly through a controlled temperature profile so solder paste melts, wets, and solidifies into joints.",
    "aliases": [],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/reflow/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "reflow"
  },
  {
    "term": "register",
    "category": "Embedded Systems",
    "definition": "A small, fast storage location inside a processor or peripheral.",
    "technical": "Registers hold operands, status, addresses, configuration bits, control fields, or peripheral data and may be memory-mapped.",
    "aliases": [
      "registers"
    ],
    "weeks": [
      14,
      15,
      16,
      18
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rˈɛdʒɪstɚ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "register"
  },
  {
    "term": "relay",
    "category": "Components",
    "definition": "An electrically controlled switch.",
    "technical": "A relay uses an input actuation mechanism—often an electromagnetic coil—to operate one or more contacts and provide control and/or isolation.",
    "aliases": [],
    "weeks": [
      7,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rˈilˌeɪ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "relay"
  },
  {
    "term": "repeatability",
    "category": "Instruments & Measurement",
    "definition": "How consistent results are when the same measurement is repeated under the same stated conditions.",
    "technical": "Repeatability is precision under repeatability conditions: same method, item, operator/system, location, and short time interval as defined by the procedure.",
    "aliases": [],
    "weeks": [
      3,
      27,
      29
    ],
    "source": "nist_unc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/repeatability/",
    "sourceDetail": {
      "name": "NIST Technical Note 1297 — Measurement Uncertainty Terminology",
      "url": "https://www.nist.gov/pml/nist-technical-note-1297",
      "note": "NIST guidance for measurement accuracy, repeatability, reproducibility, calibration, and uncertainty."
    },
    "slug": "repeatability"
  },
  {
    "term": "reproducibility",
    "category": "Instruments & Measurement",
    "definition": "How consistent results remain when relevant conditions change, such as operator, setup, or location.",
    "technical": "Reproducibility is precision under reproducibility conditions where specified measurement conditions are intentionally varied.",
    "aliases": [],
    "weeks": [
      27,
      29
    ],
    "source": "nist_unc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/reproducibility/",
    "sourceDetail": {
      "name": "NIST Technical Note 1297 — Measurement Uncertainty Terminology",
      "url": "https://www.nist.gov/pml/nist-technical-note-1297",
      "note": "NIST guidance for measurement accuracy, repeatability, reproducibility, calibration, and uncertainty."
    },
    "slug": "reproducibility"
  },
  {
    "term": "requirement",
    "category": "Test & Troubleshooting",
    "definition": "A documented condition, capability, or performance criterion that a system or test must satisfy.",
    "technical": "A requirement states a needed or expected property in a form that can be traced and, when appropriate, verified or validated.",
    "aliases": [
      "requirements"
    ],
    "weeks": [
      21,
      22,
      23,
      27,
      28,
      29
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rɪkwˈaɪrmənt/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "requirement"
  },
  {
    "term": "reset",
    "category": "Embedded Systems",
    "definition": "A hardware or software action that returns a system or peripheral to a defined initial state.",
    "technical": "Reset forces selected logic, registers, and execution state to architecture- or device-defined reset values and startup behavior.",
    "aliases": [],
    "weeks": [
      14,
      15,
      16,
      24,
      26
    ],
    "source": "arm",
    "notation": "RESET",
    "note": "",
    "auto": true,
    "pronunciation": "/risˈɛt/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "reset"
  },
  {
    "term": "resistance",
    "category": "Foundations & Units",
    "definition": "How strongly a material or component opposes electric current.",
    "technical": "Electrical resistance is the ratio of voltage to current for an ohmic element; its SI unit is the ohm.",
    "aliases": [
      "electrical resistance"
    ],
    "weeks": [
      1,
      2,
      4
    ],
    "source": "nist_si",
    "notation": "R, ohm (Ω)",
    "note": "",
    "auto": true,
    "pronunciation": "/rɪzˈɪstəns/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "resistance"
  },
  {
    "term": "resistor",
    "category": "Components",
    "definition": "A component designed to provide a specified electrical resistance.",
    "technical": "A resistor is a passive device whose principal useful property is resistance, commonly used for current limiting, biasing, sensing, and voltage division.",
    "aliases": [],
    "weeks": [
      1,
      2,
      12
    ],
    "source": "iec",
    "notation": "R",
    "note": "",
    "auto": true,
    "pronunciation": "/rɪzˈɪstɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "resistor"
  },
  {
    "term": "resolution",
    "category": "Instruments & Measurement",
    "definition": "The smallest change an instrument or converter can meaningfully distinguish or represent.",
    "technical": "Resolution describes the smallest discernible increment in a measurement or quantized code under specified conditions.",
    "aliases": [],
    "weeks": [
      3,
      25,
      27
    ],
    "source": "nist_unc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rˌɛzəlˈuʃən/",
    "sourceDetail": {
      "name": "NIST Technical Note 1297 — Measurement Uncertainty Terminology",
      "url": "https://www.nist.gov/pml/nist-technical-note-1297",
      "note": "NIST guidance for measurement accuracy, repeatability, reproducibility, calibration, and uncertainty."
    },
    "slug": "resolution"
  },
  {
    "term": "resonance",
    "category": "AC & Signals",
    "definition": "A condition where a system responds strongly near a natural frequency.",
    "technical": "In an ideal RLC circuit, resonance occurs where inductive and capacitive reactances cancel in the net impedance.",
    "aliases": [],
    "weeks": [
      6
    ],
    "source": "iec",
    "notation": "f0",
    "note": "",
    "auto": true,
    "pronunciation": "/rˈɛzənəns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "resonance"
  },
  {
    "term": "reverse bias",
    "category": "Semiconductors",
    "definition": "Applying voltage polarity that discourages normal junction conduction.",
    "technical": "Reverse bias increases the junction barrier and ideally leaves only small leakage current until breakdown.",
    "aliases": [],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rɪvˈɝs bˈaɪəs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "reverse-bias"
  },
  {
    "term": "rework",
    "category": "PCB & Assembly",
    "definition": "Corrective work performed on an assembled electronic product to replace or reattach components or repair joints.",
    "technical": "IPC rework practices cover controlled removal, replacement, and restoration of electronic assembly features while preserving required acceptability.",
    "aliases": [],
    "weeks": [
      12,
      22,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/riwˈɝk/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "rework"
  },
  {
    "term": "RF",
    "category": "RF & Communications",
    "definition": "Electrical signals or electromagnetic energy in radio-frequency ranges used for communication, sensing, or other functions.",
    "technical": "Radio-frequency systems generate, transport, process, radiate, or receive electromagnetic signals at frequencies used for radio services and related applications.",
    "aliases": [
      "radio frequency"
    ],
    "weeks": [
      20
    ],
    "source": "fcc",
    "notation": "RF",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɑːr ˈɛf/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "rf"
  },
  {
    "term": "ripple",
    "category": "Power Electronics",
    "definition": "Residual periodic variation that remains on a DC supply after conversion or filtering.",
    "technical": "Power-supply ripple is the AC component superimposed on the intended DC output and is commonly specified peak-to-peak or RMS.",
    "aliases": [],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rˈɪpəl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "ripple"
  },
  {
    "term": "RMS",
    "category": "Foundations & Units",
    "definition": "A way to express the effective magnitude of a changing voltage or current.",
    "technical": "Root-mean-square value is the square root of the mean of the squared instantaneous values over the defined interval.",
    "aliases": [
      "root mean square",
      "root-mean-square"
    ],
    "weeks": [
      3,
      6,
      9
    ],
    "source": "iec",
    "notation": "RMS",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɑːr ɛm ˈɛs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "rms"
  },
  {
    "term": "ROM",
    "category": "Embedded Systems",
    "definition": "Nonvolatile memory intended primarily for stored data or code that is not normally rewritten during execution.",
    "technical": "Read-only memory is nonvolatile storage whose contents are fixed or not normally modified by ordinary execution.",
    "aliases": [
      "read-only memory",
      "read only memory"
    ],
    "weeks": [
      14,
      15,
      26
    ],
    "source": "nist_csrc",
    "notation": "ROM",
    "note": "",
    "auto": true,
    "pronunciation": "/rɒm/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "rom"
  },
  {
    "term": "root cause",
    "category": "Test & Troubleshooting",
    "definition": "The underlying reason a failure occurred, not merely the symptom that revealed it.",
    "technical": "Root-cause analysis seeks the causal mechanism or process condition whose correction prevents recurrence of the observed problem.",
    "aliases": [],
    "weeks": [
      5,
      13,
      22,
      28
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rˈut kˈɑz/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "root-cause"
  },
  {
    "term": "RTC",
    "category": "Embedded Systems",
    "definition": "A low-power hardware clock used to keep calendar/time information across normal processor sleep or reset states.",
    "technical": "A real-time clock peripheral maintains time using a low-frequency clock domain and backup power options when available.",
    "aliases": [
      "real-time clock",
      "real time clock"
    ],
    "weeks": [
      15,
      26
    ],
    "source": "st",
    "notation": "RTC",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɑːr tiː ˈsiː/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "rtc"
  },
  {
    "term": "RX",
    "category": "Interfaces & Protocols",
    "definition": "The receive signal or data direction of a communication interface.",
    "technical": "RX identifies the node input used to receive serial data or another incoming signal.",
    "aliases": [
      "receive"
    ],
    "weeks": [
      17,
      18
    ],
    "source": "st",
    "notation": "RX",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɑːr ˈɛks/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "rx"
  },
  {
    "term": "sample rate",
    "category": "Instruments & Measurement",
    "definition": "How many samples an instrument or converter takes per second.",
    "technical": "Sample rate is the number of discrete samples acquired per unit time and must be considered relative to signal bandwidth.",
    "aliases": [
      "sampling rate"
    ],
    "weeks": [
      3,
      25,
      27
    ],
    "source": "iec",
    "notation": "S/s",
    "note": "",
    "auto": true,
    "pronunciation": "/sˈæmpəl rˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "sample-rate"
  },
  {
    "term": "sampling",
    "category": "Instruments & Measurement",
    "definition": "Measuring a signal at discrete points in time.",
    "technical": "Sampling converts a continuous-time quantity into a sequence of discrete-time values at a defined sampling rate.",
    "aliases": [],
    "weeks": [
      3,
      17,
      25,
      27
    ],
    "source": "iec",
    "notation": "samples/s",
    "note": "",
    "auto": true,
    "pronunciation": "/sˈæmplɪŋ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "sampling"
  },
  {
    "term": "saturation",
    "category": "Semiconductors",
    "definition": "A device operating region where increasing control drive produces little additional output change.",
    "technical": "For a BJT used as a switch, saturation means both junctions are forward biased and collector-emitter voltage is relatively low; other devices use the term differently.",
    "aliases": [],
    "weeks": [
      8,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sˌætʃɚˈeɪʃən/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "saturation"
  },
  {
    "term": "schematic",
    "category": "PCB & Assembly",
    "definition": "A diagram that shows electrical connections and circuit function using standardized symbols.",
    "technical": "A schematic represents logical/electrical connectivity and component relationships without necessarily showing physical placement.",
    "aliases": [],
    "weeks": [
      2,
      8,
      12,
      13,
      16,
      23
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/skɪmˈætɪk/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "schematic"
  },
  {
    "term": "SCL",
    "category": "Interfaces & Protocols",
    "definition": "The serial clock line used by I²C.",
    "technical": "SCL coordinates bit timing on the I²C bus and uses the same pull-up/open-drain electrical style defined by the bus specification.",
    "aliases": [
      "serial clock line"
    ],
    "weeks": [
      18
    ],
    "source": "nxp_i2c",
    "notation": "SCL",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛs siː ˈɛl/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "scl"
  },
  {
    "term": "SCLK",
    "category": "Interfaces & Protocols",
    "definition": "The serial clock signal used by SPI.",
    "technical": "SCLK/SCK provides the timing reference for shifting and sampling SPI data according to CPOL and CPHA configuration.",
    "aliases": [
      "SCK",
      "serial clock"
    ],
    "weeks": [
      18
    ],
    "source": "st",
    "notation": "SCLK",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛs klɒk/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "sclk"
  },
  {
    "term": "SCPI",
    "category": "Test & Troubleshooting",
    "definition": "A standardized command language widely used to control programmable test instruments.",
    "technical": "Standard Commands for Programmable Instruments define a hierarchical text-command model used over interfaces such as USB, LAN, GPIB, or serial links.",
    "aliases": [
      "Standard Commands for Programmable Instruments"
    ],
    "weeks": [
      27
    ],
    "source": "iec",
    "notation": "SCPI",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈskɪpi/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "scpi"
  },
  {
    "term": "SDA",
    "category": "Interfaces & Protocols",
    "definition": "The bidirectional serial data line used by I²C.",
    "technical": "SDA carries addresses, data, and acknowledge bits and is normally implemented with wired-AND/open-drain behavior and a pull-up resistor.",
    "aliases": [
      "serial data line"
    ],
    "weeks": [
      18
    ],
    "source": "nxp_i2c",
    "notation": "SDA",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛs diː ˈeɪ/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "sda"
  },
  {
    "term": "SDR",
    "category": "RF & Communications",
    "definition": "A radio system in which significant signal-processing functions are implemented in software.",
    "technical": "Software-defined radio moves functions such as filtering, modulation/demodulation, and tuning into programmable digital processing when architecture permits.",
    "aliases": [
      "software-defined radio",
      "software defined radio"
    ],
    "weeks": [
      20
    ],
    "source": "iec",
    "notation": "SDR",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛs diː ˈɑːr/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "sdr"
  },
  {
    "term": "semiconductor",
    "category": "Semiconductors",
    "definition": "A material whose electrical conductivity can be controlled between conductor-like and insulator-like behavior.",
    "technical": "Semiconductor devices exploit controlled charge carriers and junction or field effects to rectify, switch, amplify, sense, or process signals.",
    "aliases": [],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sˌɛmikəndˈʌktɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "semiconductor"
  },
  {
    "term": "sensor",
    "category": "Components",
    "definition": "A device that detects a physical condition and produces a usable signal.",
    "technical": "A sensor converts a measurand or physical phenomenon into an electrical or digital signal for measurement or control.",
    "aliases": [],
    "weeks": [
      7,
      15,
      25
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sˈɛnsɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "sensor"
  },
  {
    "term": "serial communication",
    "category": "Interfaces & Protocols",
    "definition": "Sending data sequentially over one or a small number of signal lines.",
    "technical": "Serial interfaces transfer bits over time according to defined timing, framing, electrical, and protocol rules.",
    "aliases": [
      "serial"
    ],
    "weeks": [
      17,
      18,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sˈɪrˌiəl kəmjˌunəkˈeɪʃən/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "serial-communication"
  },
  {
    "term": "series circuit",
    "category": "Circuit Analysis",
    "definition": "A connection in which the same current must pass through components one after another.",
    "technical": "Elements are in series when they share a connection such that the same branch current flows through them.",
    "aliases": [],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sˈɪriz sˈɝkət/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "series-circuit"
  },
  {
    "term": "shift register",
    "category": "Digital Logic",
    "definition": "A chain of storage elements that shifts stored bits from one position to another with clock events.",
    "technical": "Shift registers provide serial/parallel data conversion, delay, or state storage using clocked stages.",
    "aliases": [],
    "weeks": [
      11,
      18
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ʃˈɪft rˈɛdʒɪstɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "shift-register"
  },
  {
    "term": "short circuit",
    "category": "Circuit Analysis",
    "definition": "An unintended or intentional very-low-resistance connection between two points.",
    "technical": "A short circuit bypasses the intended load or path and can produce excessive current depending on the source impedance.",
    "aliases": [],
    "weeks": [
      1,
      2,
      3,
      13
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ʃˈɔrt sˈɝkət/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "short-circuit"
  },
  {
    "term": "signal flow",
    "category": "Test & Troubleshooting",
    "definition": "The path a signal takes through functional stages of a system.",
    "technical": "Signal-flow tracing follows stimulus, conditioning, processing, conversion, and output paths to localize expected versus actual behavior.",
    "aliases": [],
    "weeks": [
      5,
      13,
      25
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sˈɪɡnəl flˈoʊ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "signal-flow"
  },
  {
    "term": "signal ground",
    "category": "Safety & Workmanship",
    "definition": "The reference node used by signals in an electronic circuit.",
    "technical": "Signal ground is the circuit reference against which signal voltages are defined; it is not automatically the same as protective earth.",
    "aliases": [],
    "weeks": [
      1,
      3,
      15
    ],
    "source": "iec",
    "notation": "GND",
    "note": "",
    "auto": true,
    "pronunciation": "/sˈɪɡnəl ɡrˈaʊnd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "signal-ground"
  },
  {
    "term": "sine wave",
    "category": "AC & Signals",
    "definition": "A smooth periodic waveform described by a sine function.",
    "technical": "A sinusoidal waveform has one frequency component in the ideal case and is fundamental to AC circuit analysis.",
    "aliases": [],
    "weeks": [
      3,
      6,
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sˈaɪn wˈeɪv/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "sine-wave"
  },
  {
    "term": "SMD",
    "category": "PCB & Assembly",
    "definition": "A component designed for surface-mount assembly.",
    "technical": "A surface-mount device has terminations intended for attachment to pads on the board surface.",
    "aliases": [
      "surface-mount device",
      "surface mount device"
    ],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "SMD",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛs ɛm ˈdiː/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "smd"
  },
  {
    "term": "SMPS",
    "category": "Power Electronics",
    "definition": "A power supply that regulates by rapidly switching energy through inductors, capacitors, transformers, or combinations of them.",
    "technical": "A switch-mode power supply controls average energy transfer using high-frequency switching and filtering.",
    "aliases": [
      "switch-mode power supply",
      "switching power supply"
    ],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "SMPS",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛs ɛm piː ˈɛs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "smps"
  },
  {
    "term": "SMT",
    "category": "PCB & Assembly",
    "definition": "A method of mounting components directly onto PCB surface lands instead of inserting leads through holes.",
    "technical": "Surface-mount technology uses components and processes designed for attachment to board surfaces.",
    "aliases": [
      "surface-mount technology",
      "surface mount technology"
    ],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "SMT",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛs ɛm ˈtiː/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "smt"
  },
  {
    "term": "SOIC",
    "category": "PCB & Assembly",
    "definition": "A common small-outline surface-mount integrated-circuit package.",
    "technical": "Small-outline integrated circuit packages use gull-wing leads on two sides with standardized dimensional families.",
    "aliases": [
      "small-outline integrated circuit"
    ],
    "weeks": [
      12
    ],
    "source": "ipc",
    "notation": "SOIC",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈsoʊɪk/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "soic"
  },
  {
    "term": "solder",
    "category": "PCB & Assembly",
    "definition": "A fusible metal alloy used to make electrical and mechanical joints between conductors.",
    "technical": "Electronic soldering forms a metallurgical interconnection by melting filler alloy while the base conductors remain substantially solid.",
    "aliases": [],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sˈɑdɚ/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "solder"
  },
  {
    "term": "solenoid",
    "category": "Components",
    "definition": "A coil-based actuator that produces linear motion when energized.",
    "technical": "A solenoid converts electrical energy into magnetic force on a movable plunger or armature.",
    "aliases": [],
    "weeks": [
      7,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/solenoid/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "solenoid"
  },
  {
    "term": "source",
    "category": "Semiconductors",
    "definition": "One of the main current-carrying terminals of a field-effect transistor.",
    "technical": "The MOSFET source is the terminal used as the usual reference for gate-source voltage VGS.",
    "aliases": [
      "MOSFET source"
    ],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "S",
    "note": "",
    "auto": false,
    "pronunciation": "/sˈɔrs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "source"
  },
  {
    "term": "source impedance",
    "category": "Circuit Analysis",
    "definition": "The effective impedance inside a source that causes its output voltage to change with load.",
    "technical": "Source impedance models the internal opposition seen looking back into a source and affects loading, power transfer, and measurement.",
    "aliases": [],
    "weeks": [
      2,
      3,
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sˈɔrs ˌɪmpˈidəns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "source-impedance"
  },
  {
    "term": "spectrum",
    "category": "RF & Communications",
    "definition": "A representation of signal content versus frequency.",
    "technical": "A frequency spectrum shows the distribution of signal magnitude or power across frequency components.",
    "aliases": [],
    "weeks": [
      6,
      20,
      27
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/spˈɛktrəm/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "spectrum"
  },
  {
    "term": "SPI",
    "category": "Interfaces & Protocols",
    "definition": "A synchronous serial interface using separate clock and data paths, commonly with chip-select signals.",
    "technical": "Serial Peripheral Interface implementations commonly use SCLK, MOSI, MISO, and one or more chip-select signals; detailed behavior depends on controller/peripheral configuration.",
    "aliases": [
      "Serial Peripheral Interface"
    ],
    "weeks": [
      18,
      25
    ],
    "source": "st",
    "notation": "SPI",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛs piː ˈaɪ/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "spi"
  },
  {
    "term": "SRAM",
    "category": "Embedded Systems",
    "definition": "Fast volatile static memory commonly used for microcontroller runtime data.",
    "technical": "Static random-access memory stores bits in bistable cells while power remains applied and does not require periodic refresh like DRAM.",
    "aliases": [
      "static RAM",
      "static random-access memory"
    ],
    "weeks": [
      14,
      15,
      26
    ],
    "source": "iec",
    "notation": "SRAM",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈɛsræm/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "sram"
  },
  {
    "term": "start bit",
    "category": "Interfaces & Protocols",
    "definition": "A framing bit that marks the beginning of an asynchronous serial character.",
    "technical": "UART framing usually transitions from idle into a defined start-bit level so the receiver can establish bit timing.",
    "aliases": [],
    "weeks": [
      17
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/stˈɑrt bˈɪt/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "start-bit"
  },
  {
    "term": "state machine",
    "category": "Embedded Systems",
    "definition": "A model where system behavior is organized into states and defined transitions between them.",
    "technical": "A finite-state machine has a finite set of states, transition rules, inputs/events, and associated outputs/actions.",
    "aliases": [
      "FSM",
      "finite state machine"
    ],
    "weeks": [
      15,
      16,
      26
    ],
    "source": "iec",
    "notation": "FSM",
    "note": "",
    "auto": true,
    "pronunciation": "/stˈeɪt məʃˈin/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "state-machine"
  },
  {
    "term": "steady state",
    "category": "AC & Signals",
    "definition": "Circuit behavior after temporary startup or disturbance effects have settled.",
    "technical": "Steady state is the condition in which the relevant response has become constant or periodic with stable characteristics.",
    "aliases": [],
    "weeks": [
      4,
      6,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/stˈɛdi stˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "steady-state"
  },
  {
    "term": "STM32",
    "category": "Embedded Systems",
    "definition": "STMicroelectronics’ family of 32-bit microcontrollers based mainly on Arm Cortex processor cores.",
    "technical": "STM32 MCUs integrate Arm cores with flash, SRAM, timers, communication interfaces, analog peripherals, and device-specific features.",
    "aliases": [
      "STM32 MCU"
    ],
    "weeks": [
      15,
      16,
      18,
      24,
      25,
      26
    ],
    "source": "st",
    "notation": "STM32",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛs tiː ɛm ˌθɜːrti ˈtuː/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "stm32"
  },
  {
    "term": "stop bit",
    "category": "Interfaces & Protocols",
    "definition": "A framing interval that marks the end of an asynchronous serial character.",
    "technical": "UART stop bits return the line to the idle state for one or more bit periods after the data/parity field.",
    "aliases": [],
    "weeks": [
      17
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/stˈɑp bˈɪt/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "stop-bit"
  },
  {
    "term": "SWD",
    "category": "Embedded Systems",
    "definition": "Arm’s two-wire serial debug interface commonly used on Cortex-M microcontrollers.",
    "technical": "Serial Wire Debug provides access to Arm debug and memory resources through SWDIO and SWCLK signals.",
    "aliases": [
      "Serial Wire Debug"
    ],
    "weeks": [
      16,
      24
    ],
    "source": "arm",
    "notation": "SWD",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌɛs dʌbəljuː ˈdiː/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "swd"
  },
  {
    "term": "target device",
    "category": "Interfaces & Protocols",
    "definition": "An addressed device that responds to an I²C controller.",
    "technical": "Current I²C terminology uses controller and target for the initiating and addressed devices on the bus.",
    "aliases": [
      "slave device",
      "slave"
    ],
    "weeks": [
      18
    ],
    "source": "nxp_i2c",
    "notation": "",
    "note": "Older documentation may use “slave.”",
    "auto": true,
    "pronunciation": "/tˈɑrɡət dɪvˈaɪs/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "target-device"
  },
  {
    "term": "test automation",
    "category": "Test & Troubleshooting",
    "definition": "Using software to control instruments, apply stimuli, collect measurements, evaluate limits, and save results.",
    "technical": "Automated test systems execute repeatable procedures through instrument/control interfaces and produce structured evidence.",
    "aliases": [
      "automation"
    ],
    "weeks": [
      17,
      27
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tˈɛst ɔtəmˈeɪʃən/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "test-automation"
  },
  {
    "term": "test fixture",
    "category": "Test & Troubleshooting",
    "definition": "A repeatable hardware setup that connects, supports, stimulates, or measures a device during testing.",
    "technical": "A test fixture controls mechanical/electrical interfaces so test conditions can be reproduced and measurement connections remain consistent.",
    "aliases": [],
    "weeks": [
      19,
      27,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tˈɛst fˈɪkstʃɚ/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "test-fixture"
  },
  {
    "term": "test point",
    "category": "Test & Troubleshooting",
    "definition": "A designated accessible node intended for measurement or diagnostic connection.",
    "technical": "Test points provide controlled access to signals, rails, or nodes for production, validation, troubleshooting, or service.",
    "aliases": [],
    "weeks": [
      3,
      12,
      13,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tˈɛst pˈɔɪnt/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "test-point"
  },
  {
    "term": "Thevenin equivalent",
    "category": "Circuit Analysis",
    "definition": "A way to replace a linear two-terminal network with one voltage source and one series resistance.",
    "technical": "The Thévenin equivalent preserves the external terminal voltage-current behavior of a linear network using Vth and Rth.",
    "aliases": [
      "Thevenin theorem",
      "Thévenin equivalent"
    ],
    "weeks": [
      2,
      5
    ],
    "source": "iec",
    "notation": "Vth, Rth",
    "note": "",
    "auto": true,
    "pronunciation": "/Thevenin ɪkwˈɪvələnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "thevenin-equivalent"
  },
  {
    "term": "time constant",
    "category": "AC & Signals",
    "definition": "A characteristic time that describes how quickly a first-order circuit responds to a change.",
    "technical": "For RC circuits τ = RC; for RL circuits τ = L/R under the usual simple first-order assumptions.",
    "aliases": [
      "tau"
    ],
    "weeks": [
      4
    ],
    "source": "iec",
    "notation": "τ",
    "note": "",
    "auto": true,
    "pronunciation": "/tˈaɪm kˈɑnstənt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "time-constant"
  },
  {
    "term": "timer",
    "category": "Embedded Systems",
    "definition": "A hardware peripheral that counts clock events to measure time or generate scheduled events.",
    "technical": "MCU timers/counters can generate periodic interrupts, capture timestamps, produce PWM, count external events, or implement delays.",
    "aliases": [],
    "weeks": [
      15,
      16,
      25,
      26
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tˈaɪmɚ/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "timer"
  },
  {
    "term": "tolerance",
    "category": "Instruments & Measurement",
    "definition": "The allowed amount a component value, dimension, or result may vary from its nominal target.",
    "technical": "Tolerance specifies permissible limits around a nominal value and is not the same thing as measurement uncertainty.",
    "aliases": [],
    "weeks": [
      1,
      4,
      12,
      27
    ],
    "source": "iec",
    "notation": "% or absolute limits",
    "note": "",
    "auto": true,
    "pronunciation": "/tˈɑlɚəns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "tolerance"
  },
  {
    "term": "trace",
    "category": "PCB & Assembly",
    "definition": "A conductive path on a printed circuit board.",
    "technical": "A PCB trace is a patterned conductor connecting pads, vias, planes, or other conductive features.",
    "aliases": [],
    "weeks": [
      12,
      19,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/trˈeɪs/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "trace"
  },
  {
    "term": "traceability",
    "category": "Test & Troubleshooting",
    "definition": "The ability to connect a requirement, measurement, test, result, or artifact back to its origin and related evidence.",
    "technical": "Engineering traceability maintains explicit links among requirements, design elements, procedures, observations, results, and corrective actions.",
    "aliases": [],
    "weeks": [
      22,
      23,
      27,
      29
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/trˌeɪsəbˈɪlɪti/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "traceability"
  },
  {
    "term": "transformer",
    "category": "Components",
    "definition": "A device that transfers AC electrical energy between windings through magnetic coupling.",
    "technical": "A transformer uses mutual electromagnetic induction to transfer energy and transform voltage/current levels while preserving frequency in the ideal model.",
    "aliases": [],
    "weeks": [
      7,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/trænsfˈɔrmɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "transformer"
  },
  {
    "term": "transient",
    "category": "AC & Signals",
    "definition": "The temporary behavior that occurs while a circuit moves from one steady condition to another.",
    "technical": "A transient is the non-steady-state response following a switching event, disturbance, or change in excitation.",
    "aliases": [],
    "weeks": [
      4,
      5,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/trˈænʒənt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "transient"
  },
  {
    "term": "transistor",
    "category": "Semiconductors",
    "definition": "A semiconductor device used mainly for switching or amplification.",
    "technical": "A transistor is an active semiconductor device in which one electrical quantity controls another; common families include BJT and FET/MOSFET devices.",
    "aliases": [],
    "weeks": [
      8,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/trænzˈɪstɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "transistor"
  },
  {
    "term": "truth table",
    "category": "Digital Logic",
    "definition": "A table listing every input combination and the corresponding output of a logic function.",
    "technical": "A truth table exhaustively defines the behavior of a finite Boolean function over its input combinations.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/trˈuθ tˈeɪbəl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "truth-table"
  },
  {
    "term": "TTL",
    "category": "Digital Logic",
    "definition": "A historical logic family based on bipolar transistor circuitry and commonly associated with 5 V logic conventions.",
    "technical": "Transistor-transistor logic is a bipolar digital-logic family whose thresholds and loading differ from CMOS.",
    "aliases": [
      "transistor-transistor logic"
    ],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "TTL",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌtiː tiː ˈɛl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "ttl"
  },
  {
    "term": "TX",
    "category": "Interfaces & Protocols",
    "definition": "The transmit signal or data direction of a communication interface.",
    "technical": "TX identifies the node output used to send serial data or another transmitted signal.",
    "aliases": [
      "transmit"
    ],
    "weeks": [
      17,
      18
    ],
    "source": "st",
    "notation": "TX",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌtiː ˈɛks/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "tx"
  },
  {
    "term": "UART",
    "category": "Interfaces & Protocols",
    "definition": "A hardware block for asynchronous serial transmit and receive communication.",
    "technical": "A Universal Asynchronous Receiver/Transmitter converts between parallel internal data and framed asynchronous serial bit streams.",
    "aliases": [
      "Universal Asynchronous Receiver/Transmitter",
      "Universal Asynchronous Receiver Transmitter"
    ],
    "weeks": [
      17,
      18
    ],
    "source": "nist_csrc",
    "notation": "UART",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈjuːɑːrt/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "uart"
  },
  {
    "term": "UHF",
    "category": "RF & Communications",
    "definition": "Ultra High Frequency, the radio-frequency band from 300 MHz to 3 GHz.",
    "technical": "UHF is the ITU/FCC radio-frequency designation covering frequencies from 300 MHz up to 3 GHz and is used by many mobile, broadcast, telemetry, and wireless services.",
    "aliases": [
      "ultra high frequency"
    ],
    "weeks": [
      20
    ],
    "source": "fcc",
    "notation": "UHF",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌjuː eɪtʃ ˈɛf/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "uhf"
  },
  {
    "term": "USART",
    "category": "Interfaces & Protocols",
    "definition": "A serial peripheral similar to UART that can also support synchronous serial operation on many MCUs.",
    "technical": "A Universal Synchronous/Asynchronous Receiver/Transmitter can operate in asynchronous UART-like mode and synchronous clocked modes depending on implementation.",
    "aliases": [
      "Universal Synchronous/Asynchronous Receiver/Transmitter"
    ],
    "weeks": [
      17,
      18
    ],
    "source": "st",
    "notation": "USART",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈjuːsɑːrt/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "usart"
  },
  {
    "term": "validation",
    "category": "Test & Troubleshooting",
    "definition": "Checking that the completed solution is suitable for its intended use or need.",
    "technical": "Validation provides objective evidence that the system or result satisfies intended use, stakeholder need, or application context.",
    "aliases": [
      "validate"
    ],
    "weeks": [
      21,
      23,
      27,
      29
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/vˌælədˈeɪʃən/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "validation"
  },
  {
    "term": "verification",
    "category": "Test & Troubleshooting",
    "definition": "Checking that a design or implementation meets specified requirements.",
    "technical": "Verification provides objective evidence that specified requirements have been fulfilled for the item under review.",
    "aliases": [
      "verify"
    ],
    "weeks": [
      21,
      22,
      23,
      27,
      29
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/vˌɛrəfəkˈeɪʃən/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "verification"
  },
  {
    "term": "VHF",
    "category": "RF & Communications",
    "definition": "Very High Frequency, the radio-frequency band from 30 MHz to 300 MHz.",
    "technical": "VHF is the ITU/FCC radio-frequency designation covering frequencies from 30 MHz up to 300 MHz and is used by multiple terrestrial communication and broadcasting services.",
    "aliases": [
      "very high frequency"
    ],
    "weeks": [
      20
    ],
    "source": "fcc",
    "notation": "VHF",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌviː eɪtʃ ˈɛf/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "vhf"
  },
  {
    "term": "via",
    "category": "PCB & Assembly",
    "definition": "A plated or conductive hole that connects copper features between PCB layers.",
    "technical": "A via provides vertical electrical interconnection between printed-board conductive layers and may be through, blind, buried, microvia, or another defined type.",
    "aliases": [],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": false,
    "pronunciation": "/vˈaɪə/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "via"
  },
  {
    "term": "VISA",
    "category": "Test & Troubleshooting",
    "definition": "A software API standard used to communicate with test and measurement instruments over multiple physical interfaces.",
    "technical": "Virtual Instrument Software Architecture provides a common programming interface for instrument sessions, resources, reads/writes, and events.",
    "aliases": [
      "Virtual Instrument Software Architecture"
    ],
    "weeks": [
      27
    ],
    "source": "iec",
    "notation": "VISA",
    "note": "",
    "auto": true,
    "pronunciation": "/ˈviːzə/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "visa"
  },
  {
    "term": "volt",
    "category": "Foundations & Units",
    "definition": "The SI unit used to measure electric potential difference.",
    "technical": "One volt is one watt per ampere (1 V = 1 W/A).",
    "aliases": [
      "volts"
    ],
    "weeks": [
      1,
      2,
      3
    ],
    "source": "nist_si",
    "notation": "V",
    "note": "",
    "auto": true,
    "pronunciation": "/vˈoʊlt/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "volt"
  },
  {
    "term": "voltage",
    "category": "Foundations & Units",
    "definition": "The electrical potential difference that can push charge through a circuit.",
    "technical": "Voltage is electric potential difference between two points; the SI derived unit is the volt (V).",
    "aliases": [
      "potential difference",
      "electric potential difference"
    ],
    "weeks": [
      1,
      2,
      3
    ],
    "source": "nist_si",
    "notation": "V",
    "note": "",
    "auto": true,
    "pronunciation": "/vˈoʊltədʒ/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "voltage"
  },
  {
    "term": "voltage divider",
    "category": "Circuit Analysis",
    "definition": "A resistor network that produces an output voltage that is a fraction of the input voltage.",
    "technical": "For an unloaded two-resistor divider, the output equals the input multiplied by the ratio of the selected resistor to total series resistance.",
    "aliases": [
      "divider"
    ],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "Vout = Vin·R2/(R1+R2)",
    "note": "",
    "auto": true,
    "pronunciation": "/vˈoʊltədʒ dɪvˈaɪdɚ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "voltage-divider"
  },
  {
    "term": "VSWR",
    "category": "RF & Communications",
    "definition": "A ratio that indicates the severity of standing waves caused by RF mismatch.",
    "technical": "Voltage standing wave ratio is the ratio of maximum to minimum voltage magnitude along a line and is related to reflection coefficient magnitude.",
    "aliases": [
      "SWR",
      "voltage standing wave ratio",
      "standing wave ratio"
    ],
    "weeks": [
      20
    ],
    "source": "iec",
    "notation": "VSWR",
    "note": "",
    "auto": true,
    "pronunciation": "/ˌviː ɛs dʌbəljuː ˈɑːr/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "vswr"
  },
  {
    "term": "watchdog timer",
    "category": "Embedded Systems",
    "definition": "A timer that can reset or recover a system if software stops servicing it correctly.",
    "technical": "A watchdog requires periodic servicing within a configured interval and generates a reset or interrupt when expected execution fails.",
    "aliases": [
      "watchdog"
    ],
    "weeks": [
      16,
      26
    ],
    "source": "st",
    "notation": "WDT",
    "note": "",
    "auto": true,
    "pronunciation": "/wˈɑtʃdˌɔɡ tˈaɪmɚ/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "watchdog-timer"
  },
  {
    "term": "watchpoint",
    "category": "Embedded Systems",
    "definition": "A debugger trigger that stops or reports when a selected memory location is accessed or changed.",
    "technical": "A watchpoint uses data-access debug comparators or software instrumentation to monitor reads/writes to specified addresses.",
    "aliases": [],
    "weeks": [
      16,
      26
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/watchpoint/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "watchpoint"
  },
  {
    "term": "watt",
    "category": "Foundations & Units",
    "definition": "The SI unit of power.",
    "technical": "One watt is one joule of energy transferred per second.",
    "aliases": [
      "watts"
    ],
    "weeks": [
      1,
      2,
      9
    ],
    "source": "iec",
    "notation": "W",
    "note": "",
    "auto": true,
    "pronunciation": "/wˈɑt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "watt"
  },
  {
    "term": "waveform",
    "category": "AC & Signals",
    "definition": "The shape of a signal as it changes over time.",
    "technical": "A waveform is the time-domain variation of a quantity such as voltage or current.",
    "aliases": [],
    "weeks": [
      3,
      4,
      6,
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/wˈeɪvfˌɔrm/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "waveform"
  },
  {
    "term": "wetting",
    "category": "PCB & Assembly",
    "definition": "The spreading and bonding of molten solder over a clean metal surface.",
    "technical": "Good solder wetting indicates intimate metallurgical contact and is influenced by surface condition, temperature, alloy, and flux.",
    "aliases": [],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/wˈɛtɪŋ/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "wetting"
  },
  {
    "term": "wire harness",
    "category": "PCB & Assembly",
    "definition": "An organized assembly of wires, cables, terminals, and connectors used to carry power and signals.",
    "technical": "IPC/WHMA-A-620 establishes process and acceptance requirements for cable and wire-harness assemblies.",
    "aliases": [
      "harness",
      "cable harness"
    ],
    "weeks": [
      19,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/wˈaɪɚ hˈɑrnəs/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "wire-harness"
  },
  {
    "term": "workmanship",
    "category": "Safety & Workmanship",
    "definition": "The quality and acceptability of how electronic assembly or repair work is physically performed.",
    "technical": "Electronics workmanship standards define process and acceptance criteria for soldered assemblies, conductors, harnesses, cleanliness, damage, and related fabrication results.",
    "aliases": [],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/wˈɝkmənʃˌɪp/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "workmanship"
  },
  {
    "term": "XNOR gate",
    "category": "Digital Logic",
    "definition": "A logic gate that is true/high when inputs are equal for the two-input case.",
    "technical": "Implements equivalence, the inverse of XOR.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/XNOR ɡˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "xnor-gate"
  },
  {
    "term": "XOR gate",
    "category": "Digital Logic",
    "definition": "A logic gate that is true/high when inputs differ for the two-input case.",
    "technical": "Implements exclusive OR.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/XOR ɡˈeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "xor-gate"
  },
  {
    "term": "Zener diode",
    "category": "Semiconductors",
    "definition": "A diode designed to operate in controlled reverse breakdown for voltage regulation or reference.",
    "technical": "A Zener or avalanche reference diode is specified for reverse operation near a defined breakdown voltage and is commonly used for clamping or regulation.",
    "aliases": [
      "zener"
    ],
    "weeks": [
      8,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/Zener dˈaɪˌoʊd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "zener-diode"
  }
];
