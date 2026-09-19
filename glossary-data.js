// AU-ESET 301 Course Glossary — v16.3.29 expanded technical vocabulary
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
    "term": "AC coupling",
    "category": "Instruments & Measurement",
    "definition": "An input mode that blocks the signal’s DC component and displays changing components.",
    "technical": "AC coupling inserts a high-pass path, typically a series capacitor, so the instrument suppresses DC offset below its coupling cutoff.",
    "aliases": [],
    "weeks": [
      3,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/AC coupling/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "ac-coupling"
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
    "term": "active region",
    "category": "Semiconductors",
    "definition": "A transistor operating region used for approximately linear amplification.",
    "technical": "For a BJT, forward-active operation has the base-emitter junction forward biased and base-collector junction reverse biased, producing collector current controlled by base drive.",
    "aliases": [],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/æktɪv ɹidʒʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "active-region"
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
    "term": "ammeter",
    "category": "Instruments & Measurement",
    "definition": "An instrument used to measure electric current through a path.",
    "technical": "An ammeter is inserted in series with the current path and ideally has very low internal resistance; practical meters have burden voltage and current limits.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/æmitɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "ammeter"
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
    "term": "angular frequency",
    "category": "AC & Signals",
    "definition": "Frequency expressed as angular motion in radians per second.",
    "technical": "Angular frequency is ω = 2πf, where f is frequency in hertz.",
    "aliases": [],
    "weeks": [
      6,
      4
    ],
    "source": "iec",
    "notation": "ω = 2πf",
    "note": "",
    "auto": true,
    "pronunciation": "/æŋɡjʌlɝ fɹikwʌnsi/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "angular-frequency"
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
    "term": "antenna gain",
    "category": "RF & Communications",
    "definition": "A measure of how strongly an antenna radiates or receives in a direction compared with a reference antenna.",
    "technical": "Antenna gain combines directivity and efficiency and is commonly expressed in dBi or dBd.",
    "aliases": [],
    "weeks": [
      1,
      20
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/æntɛnʌ ɡeɪn/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "antenna-gain"
  },
  {
    "term": "antistatic",
    "category": "Safety & Workmanship",
    "definition": "Designed to reduce the generation, accumulation, or rapid discharge of static electricity.",
    "technical": "Antistatic materials and controls reduce triboelectric charging or promote controlled dissipation as part of ESD risk reduction.",
    "aliases": [],
    "weeks": [
      1,
      12
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/antistatic/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "antistatic"
  },
  {
    "term": "API",
    "category": "Software & Automation",
    "definition": "A defined software interface that specifies how code can request functions or services from another software component.",
    "technical": "An application programming interface consists of callable functions, types, constants, data structures, and behavioral contracts exposed to client code.",
    "aliases": [
      "application programming interface"
    ],
    "weeks": [
      17,
      18,
      26,
      27
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/API/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "api"
  },
  {
    "term": "arc flash",
    "category": "Safety & Workmanship",
    "definition": "A dangerous release of energy caused by an electrical arc through air.",
    "technical": "An arc-flash event can produce intense heat, light, pressure, molten material, and blast effects and requires hazard assessment and appropriate controls.",
    "aliases": [],
    "weeks": [
      1,
      12
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɑɹk flæʃ/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "arc-flash"
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
    "term": "ASK",
    "category": "RF & Communications",
    "definition": "Digital modulation where data changes a carrier’s amplitude between defined states.",
    "technical": "Amplitude-shift keying maps symbols to different carrier amplitudes, including on-off keying as a special case.",
    "aliases": [
      "amplitude-shift keying"
    ],
    "weeks": [
      1,
      2,
      3,
      4,
      6,
      14,
      15,
      22
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ASK/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "ask"
  },
  {
    "term": "assembly language",
    "category": "Embedded Systems",
    "definition": "A low-level programming language that represents machine instructions with mnemonic names.",
    "technical": "Assembly language maps symbolic mnemonics, registers, labels, and operands to architecture-specific machine instructions.",
    "aliases": [],
    "weeks": [
      16,
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ʌsɛmbli læŋɡwʌdʒ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "assembly-language"
  },
  {
    "term": "asynchronous communication",
    "category": "Interfaces & Protocols",
    "definition": "Communication that does not share a continuously transmitted clock between sender and receiver.",
    "technical": "Asynchronous serial links recover timing from agreed baud rate and framing conventions such as start and stop bits.",
    "aliases": [],
    "weeks": [
      18,
      17
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/eɪsɪŋkɹʌnʌs kʌmjunʌkeɪʃʌn/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "asynchronous-communication"
  },
  {
    "term": "atom",
    "category": "Foundations & Units",
    "definition": "The smallest unit of an element that retains that element’s chemical identity.",
    "technical": "An atom consists of a positively charged nucleus surrounded by electrons; electrical behavior depends strongly on how its electrons are bound or transferred.",
    "aliases": [],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ætʌm/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "atom"
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
    "term": "band-stop filter",
    "category": "AC & Signals",
    "definition": "A filter that attenuates a band of frequencies while passing frequencies below and above that band.",
    "technical": "A band-stop response has a stopband between lower and upper transition regions; a narrow band-stop filter is often called a notch filter.",
    "aliases": [
      "notch filter"
    ],
    "weeks": [
      6,
      4
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bænd stɑp fɪltɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "band-stop-filter"
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
    "term": "base current",
    "category": "Semiconductors",
    "definition": "The current flowing into or out of the base terminal of a BJT.",
    "technical": "Base current participates in controlling collector current in a bipolar junction transistor and is commonly denoted IB.",
    "aliases": [],
    "weeks": [
      7,
      8
    ],
    "source": "iec",
    "notation": "I_B",
    "note": "",
    "auto": true,
    "pronunciation": "/beɪs kɝʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "base-current"
  },
  {
    "term": "baseband",
    "category": "RF & Communications",
    "definition": "The original low-frequency information signal before translation to a higher carrier frequency.",
    "technical": "Baseband occupies a frequency range near zero or its original information bandwidth before modulation/upconversion.",
    "aliases": [],
    "weeks": [
      20
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/baseband/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "baseband"
  },
  {
    "term": "battery",
    "category": "Components",
    "definition": "A source that converts stored chemical energy into electrical energy.",
    "technical": "A battery consists of one or more electrochemical cells that establish an electromotive force and can deliver current to an external circuit.",
    "aliases": [],
    "weeks": [
      1,
      2,
      3,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bætɝi/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "battery"
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
    "term": "binary",
    "category": "Digital Logic",
    "definition": "A number or logic system based on two states, normally represented as 0 and 1.",
    "technical": "Binary representation uses radix 2; digital hardware maps binary symbols to defined logic-level ranges rather than perfect mathematical voltages.",
    "aliases": [],
    "weeks": [
      4,
      11,
      12,
      14,
      15,
      17,
      26
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/baɪnɝi/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "binary"
  },
  {
    "term": "bit",
    "category": "Digital Logic",
    "definition": "A single binary digit that can represent one of two states.",
    "technical": "A bit is the basic unit of binary information and is conventionally represented by 0 or 1.",
    "aliases": [],
    "weeks": [
      3,
      11,
      14,
      15,
      16,
      17,
      18,
      26
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bɪt/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "bit"
  },
  {
    "term": "bit rate",
    "category": "RF & Communications",
    "definition": "The number of information bits transmitted per second.",
    "technical": "Bit rate is measured in bit/s and is distinct from symbol rate when one transmitted symbol can represent more than one bit.",
    "aliases": [],
    "weeks": [
      20,
      19
    ],
    "source": "fcc",
    "notation": "bit/s",
    "note": "",
    "auto": true,
    "pronunciation": "/bɪt ɹeɪt/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "bit-rate"
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
    "term": "bonding",
    "category": "Safety & Workmanship",
    "definition": "Intentionally connecting conductive parts together to maintain electrical continuity and limit voltage differences.",
    "technical": "Electrical bonding establishes a low-impedance conductive connection between parts for fault-current, equipotential, shielding, or grounding purposes.",
    "aliases": [],
    "weeks": [
      13,
      17,
      19
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bɑndɪŋ/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "bonding"
  },
  {
    "term": "Boolean expression",
    "category": "Digital Logic",
    "definition": "A symbolic expression that describes a logic function using Boolean variables and operators.",
    "technical": "Boolean expressions evaluate binary-valued variables with operations such as AND, OR, and NOT and can be implemented with logic gates.",
    "aliases": [],
    "weeks": [
      3,
      4,
      11,
      14,
      15
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/buliʌn ɪkspɹɛʃʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "boolean-expression"
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
    "term": "bridge rectifier",
    "category": "Power Electronics",
    "definition": "A four-diode arrangement that produces full-wave rectification from an AC input.",
    "technical": "A bridge rectifier steers both input polarities so load current retains the same output polarity, with two diode drops typically in the conduction path.",
    "aliases": [],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bɹɪdʒ ɹɛktʌfaɪɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "bridge-rectifier"
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
    "term": "buffer",
    "category": "Interfaces & Protocols",
    "definition": "Temporary storage used to hold data while it moves between producers and consumers operating at different times or rates.",
    "technical": "Communication buffers decouple software or hardware timing and can be implemented as arrays, FIFOs, queues, or dedicated peripheral memory.",
    "aliases": [],
    "weeks": [
      10,
      17,
      25
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bʌfɝ/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "buffer"
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
    "term": "bus arbitration",
    "category": "Interfaces & Protocols",
    "definition": "A method for deciding which device may control a shared communication bus when multiple devices request access.",
    "technical": "Bus arbitration resolves simultaneous access without corrupting communication; the mechanism depends on the protocol, such as dominant/recessive bit arbitration in CAN.",
    "aliases": [
      "arbitration"
    ],
    "weeks": [
      18,
      17
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bʌs ɑɹbɪtɹeɪʃʌn/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "bus-arbitration"
  },
  {
    "term": "buzzer",
    "category": "Components",
    "definition": "A sound-producing component driven electrically to create an audible alert.",
    "technical": "A buzzer is an electroacoustic signaling device that may contain its own oscillator or require an external drive waveform.",
    "aliases": [],
    "weeks": [
      7,
      4
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/bʌzɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "buzzer"
  },
  {
    "term": "byte",
    "category": "Digital Logic",
    "definition": "A group of eight bits.",
    "technical": "In modern computing and embedded systems, a byte is an addressable unit containing 8 bits.",
    "aliases": [],
    "weeks": [
      11,
      14,
      15,
      17,
      18,
      25,
      26
    ],
    "source": "nist_csrc",
    "notation": "8 bits",
    "note": "",
    "auto": true,
    "pronunciation": "/baɪt/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "byte"
  },
  {
    "term": "cache",
    "category": "Embedded Systems",
    "definition": "A small fast memory that stores recently or frequently used data or instructions.",
    "technical": "A processor cache reduces average memory access time by keeping copies of selected main-memory contents close to the CPU.",
    "aliases": [],
    "weeks": [
      14
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kæʃ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "cache"
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
    "term": "callback",
    "category": "Embedded Systems",
    "definition": "A function supplied to be called later when a particular event or operation occurs.",
    "technical": "A callback is a function reference registered with a library, driver, or framework and invoked when the associated condition is met.",
    "aliases": [],
    "weeks": [
      16,
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kɔlbæk/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "callback"
  },
  {
    "term": "CAN bus",
    "category": "Interfaces & Protocols",
    "definition": "A robust shared serial network widely used for distributed embedded control.",
    "technical": "Controller Area Network uses differential signaling, message identifiers, arbitration, error detection, and retransmission on a multi-node bus.",
    "aliases": [
      "CAN",
      "Controller Area Network"
    ],
    "weeks": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/CAN bus/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "can-bus"
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
    "term": "characteristic impedance",
    "category": "RF & Communications",
    "definition": "The voltage-to-current ratio of a single traveling wave on a transmission line.",
    "technical": "Characteristic impedance Z0 is determined by the line’s distributed parameters and governs reflections when the load impedance differs from Z0.",
    "aliases": [],
    "weeks": [
      19,
      20,
      30
    ],
    "source": "fcc",
    "notation": "Z₀",
    "note": "",
    "auto": true,
    "pronunciation": "/kɛɹʌktɝɪstɪk ɪmpidʌns/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "characteristic-impedance"
  },
  {
    "term": "charge carrier",
    "category": "Foundations & Units",
    "definition": "A mobile particle or quasiparticle that transports electric charge through a material.",
    "technical": "Charge carriers can be electrons, holes, ions, or other charged species depending on the material and conduction mechanism.",
    "aliases": [
      "charge carriers"
    ],
    "weeks": [
      1,
      2,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tʃɑɹdʒ kæɹiɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "charge-carrier"
  },
  {
    "term": "charge flow",
    "category": "Foundations & Units",
    "definition": "Movement of electric charge through a path.",
    "technical": "Electric current is the time rate of charge flow through a surface or circuit cross-section.",
    "aliases": [],
    "weeks": [
      1,
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tʃɑɹdʒ floʊ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "charge-flow"
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
    "term": "circuit board",
    "category": "PCB & Assembly",
    "definition": "A board that mechanically supports and electrically connects electronic components.",
    "technical": "A printed circuit board uses patterned conductive layers, dielectric substrate, pads, vias, and other features to implement interconnections.",
    "aliases": [],
    "weeks": [
      12
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɝkʌt bɔɹd/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "circuit-board"
  },
  {
    "term": "circuit breaker",
    "category": "Components",
    "definition": "A resettable protective switch that opens a circuit when specified fault conditions occur.",
    "technical": "A circuit breaker automatically interrupts overcurrent and may provide additional protection depending on its trip mechanism.",
    "aliases": [],
    "weeks": [
      1,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɝkʌt bɹeɪkɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "circuit-breaker"
  },
  {
    "term": "circuit common",
    "category": "Foundations & Units",
    "definition": "A shared electrical reference or return connection used by multiple parts of a circuit.",
    "technical": "Circuit common is a node intentionally shared as a signal or power reference; it is not necessarily connected to earth ground.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɝkʌt kɑmʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "circuit-common"
  },
  {
    "term": "circuit loop",
    "category": "Circuit Analysis",
    "definition": "A closed path through a circuit that returns to its starting node.",
    "technical": "A circuit loop is a closed traversal of branches and is the path over which Kirchhoff’s Voltage Law can be applied.",
    "aliases": [
      "loop"
    ],
    "weeks": [
      1,
      2,
      5,
      7,
      9,
      10,
      13,
      14
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɝkʌt lup/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "circuit-loop"
  },
  {
    "term": "circuit network",
    "category": "Circuit Analysis",
    "definition": "An interconnected set of electrical components and branches.",
    "technical": "A circuit network is a graph of elements connected at nodes and analyzed using element relationships and network laws.",
    "aliases": [
      "network"
    ],
    "weeks": [
      2,
      3,
      4,
      5,
      6,
      8,
      10,
      14
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɝkʌt nɛtwɝk/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "circuit-network"
  },
  {
    "term": "CLI",
    "category": "Software & Automation",
    "definition": "A text-based interface where a user enters commands and receives textual output.",
    "technical": "A command-line interface exposes program functions through command names, options, arguments, and standard input/output streams.",
    "aliases": [
      "command-line interface"
    ],
    "weeks": [
      27,
      17
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/CLI/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "cli"
  },
  {
    "term": "clipping",
    "category": "AC & Signals",
    "definition": "Waveform distortion that occurs when a circuit cannot reproduce signal peaks beyond an available limit.",
    "technical": "Clipping limits the output waveform at a rail, current limit, device saturation boundary, or other transfer limit and creates additional harmonic content.",
    "aliases": [],
    "weeks": [
      2,
      3,
      6,
      10,
      18,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/klɪpɪŋ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "clipping"
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
    "term": "clock edge",
    "category": "Digital Logic",
    "definition": "A transition of a clock signal used to time digital events.",
    "technical": "Synchronous logic often samples or changes state on a specified rising or falling clock edge.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/klɑk ɛdʒ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "clock-edge"
  },
  {
    "term": "clock frequency",
    "category": "Digital Logic",
    "definition": "The repetition rate of a clock signal.",
    "technical": "Clock frequency is the reciprocal of clock period and sets the nominal rate of synchronous timing events.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "f_CLK",
    "note": "",
    "auto": true,
    "pronunciation": "/klɑk fɹikwʌnsi/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "clock-frequency"
  },
  {
    "term": "clock source",
    "category": "Embedded Systems",
    "definition": "The oscillator or timing reference used to generate a digital system clock.",
    "technical": "Clock sources can be internal RC oscillators, external crystals, resonators, or externally supplied clocks feeding clock-generation circuitry.",
    "aliases": [],
    "weeks": [
      16,
      23
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/klɑk sɔɹs/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "clock-source"
  },
  {
    "term": "clock stretching",
    "category": "Interfaces & Protocols",
    "definition": "An I²C behavior where a target holds the clock line low to delay the controller.",
    "technical": "In I²C, a device may extend the low period of SCL when permitted by the bus specification, allowing additional time before communication continues.",
    "aliases": [],
    "weeks": [
      18
    ],
    "source": "nxp_i2c",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/klɑk stɹɛtʃɪŋ/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "clock-stretching"
  },
  {
    "term": "clock tree",
    "category": "Embedded Systems",
    "definition": "The network that distributes and derives clocks throughout a digital system.",
    "technical": "A microcontroller clock tree routes oscillator sources through selectors, PLLs, prescalers, and gates to processor and peripheral clock domains.",
    "aliases": [],
    "weeks": [
      16,
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/klɑk tɹi/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "clock-tree"
  },
  {
    "term": "closed circuit",
    "category": "Circuit Analysis",
    "definition": "A circuit with a complete conductive path that can support current.",
    "technical": "A closed circuit has continuity around the required path; current then depends on the applied sources and circuit impedance.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kloʊzd sɝkʌt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "closed-circuit"
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
    "term": "collector current",
    "category": "Semiconductors",
    "definition": "The current flowing through the collector terminal of a BJT.",
    "technical": "Collector current IC is the principal controlled current of a BJT and depends on operating region, base drive, and device conditions.",
    "aliases": [],
    "weeks": [
      7,
      8
    ],
    "source": "iec",
    "notation": "I_C",
    "note": "",
    "auto": true,
    "pronunciation": "/kʌlɛktɝ kɝʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "collector-current"
  },
  {
    "term": "collector-emitter voltage",
    "category": "Semiconductors",
    "definition": "The voltage between a BJT collector and emitter.",
    "technical": "Collector-emitter voltage VCE helps determine BJT operating region and available voltage headroom.",
    "aliases": [],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "V_CE",
    "note": "",
    "auto": true,
    "pronunciation": "/kʌlɛktɝ ɪmɪtɝ voʊltʌdʒ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "collector-emitter-voltage"
  },
  {
    "term": "combinational logic",
    "category": "Digital Logic",
    "definition": "Digital logic whose outputs depend on the current input values.",
    "technical": "A combinational circuit has no required stored state; its outputs are Boolean functions of present inputs after propagation delay.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/combinational lɑdʒɪk/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "combinational-logic"
  },
  {
    "term": "common gate",
    "category": "Semiconductors",
    "definition": "A FET amplifier configuration in which the gate is the signal-common terminal.",
    "technical": "In a common-gate stage, the input is applied at the source, output is taken at the drain, and the gate is held at a fixed AC reference.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kɑmʌn ɡeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "common-gate"
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
    "term": "compiler",
    "category": "Embedded Systems",
    "definition": "A tool that translates source code into lower-level code for a target processor or runtime.",
    "technical": "An embedded compiler transforms source into object code while applying target-specific instruction selection, optimization, and calling conventions.",
    "aliases": [],
    "weeks": [
      14,
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kʌmpaɪlɝ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "compiler"
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
    "term": "conductor",
    "category": "Foundations & Units",
    "definition": "A material that allows electric charge to move relatively easily.",
    "technical": "A conductor has mobile charge carriers and therefore comparatively low electrical resistivity under the stated conditions.",
    "aliases": [],
    "weeks": [
      1,
      2,
      3,
      7,
      12,
      19,
      20,
      21
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kʌndʌktɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "conductor"
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
    "term": "continuity test",
    "category": "Instruments & Measurement",
    "definition": "A meter test used to check whether a low-resistance conductive path exists.",
    "technical": "Continuity mode applies a small test stimulus and indicates when measured resistance is below an instrument-dependent threshold.",
    "aliases": [],
    "weeks": [
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kɑntʌnuʌti tɛst/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "continuity-test"
  },
  {
    "term": "controlled impedance",
    "category": "PCB & Assembly",
    "definition": "A PCB interconnect designed to have a specified characteristic impedance.",
    "technical": "Controlled-impedance traces are dimensioned with the board stackup and reference planes so transmission-line impedance remains within tolerance.",
    "aliases": [],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kʌntɹoʊld ɪmpidʌns/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "controlled-impedance"
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
    "term": "conventional current",
    "category": "Foundations & Units",
    "definition": "The standard current direction defined as the direction positive charge would move.",
    "technical": "Conventional current flows from higher electric potential toward lower potential in an external passive path, opposite electron drift in metallic conductors.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kʌnvɛnʃʌnʌl kɝʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "conventional-current"
  },
  {
    "term": "coulomb",
    "category": "Foundations & Units",
    "definition": "The SI unit used to measure electric charge.",
    "technical": "One coulomb is the amount of charge transported by a current of one ampere in one second: 1 C = 1 A·s.",
    "aliases": [],
    "weeks": [
      1,
      2,
      7
    ],
    "source": "nist_si",
    "notation": "C",
    "note": "",
    "auto": true,
    "pronunciation": "/coulomb/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "coulomb"
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
    "term": "creepage distance",
    "category": "PCB & Assembly",
    "definition": "The shortest distance along an insulating surface between conductive parts.",
    "technical": "Creepage is chosen to control surface leakage and tracking based on working voltage, material group, pollution degree, and applicable safety requirements.",
    "aliases": [
      "creepage"
    ],
    "weeks": [
      7,
      19,
      25
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/creepage dɪstʌns/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "creepage-distance"
  },
  {
    "term": "crystal",
    "category": "Components",
    "definition": "A piezoelectric resonator used to provide a stable frequency reference.",
    "technical": "A quartz crystal exhibits a high-Q electromechanical resonance that can control oscillator frequency.",
    "aliases": [],
    "weeks": [
      2,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kɹɪstʌl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "crystal"
  },
  {
    "term": "crystal oscillator",
    "category": "Components",
    "definition": "An oscillator that uses a crystal resonator to set a precise frequency.",
    "technical": "A crystal oscillator sustains oscillation around a crystal’s resonant frequency to generate a stable clock or reference signal.",
    "aliases": [],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kɹɪstʌl ɑsʌleɪtɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "crystal-oscillator"
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
    "term": "current limit",
    "category": "Power Electronics",
    "definition": "A control or protection function that prevents current from exceeding a chosen level.",
    "technical": "Current limiting modifies regulator or driver behavior when sensed current reaches a threshold, protecting devices, wiring, or loads.",
    "aliases": [],
    "weeks": [
      1,
      3,
      4,
      8,
      9,
      10,
      13,
      23
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kɝʌnt lɪmʌt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "current-limit"
  },
  {
    "term": "current path",
    "category": "Circuit Analysis",
    "definition": "The route through which current flows in a circuit.",
    "technical": "A current path is the connected sequence of conductive elements and nodes supporting a branch or loop current.",
    "aliases": [],
    "weeks": [
      1,
      2,
      7,
      8,
      13
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kɝʌnt pæθ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "current-path"
  },
  {
    "term": "current source",
    "category": "Foundations & Units",
    "definition": "A source intended to deliver a specified current through a circuit branch.",
    "technical": "An ideal current source maintains its specified current independent of terminal voltage within its compliance range.",
    "aliases": [],
    "weeks": [
      9,
      23
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kɝʌnt sɔɹs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "current-source"
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
    "term": "damping",
    "category": "AC & Signals",
    "definition": "The loss mechanism that causes oscillations or transients to decrease with time.",
    "technical": "Damping dissipates stored energy and determines whether a second-order response is underdamped, critically damped, or overdamped.",
    "aliases": [],
    "weeks": [
      6
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/dæmpɪŋ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "damping"
  },
  {
    "term": "data acquisition",
    "category": "Software & Automation",
    "definition": "Collecting measurement data from sensors, instruments, or hardware into a system for analysis or control.",
    "technical": "Data acquisition combines transducers, signal conditioning, sampling/conversion, timing, interfaces, and software to capture physical measurements.",
    "aliases": [
      "DAQ"
    ],
    "weeks": [
      27,
      17
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/deɪtʌ ækwʌzɪʃʌn/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "data-acquisition"
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
    "term": "dBm",
    "category": "RF & Communications",
    "definition": "A logarithmic unit expressing power relative to one milliwatt.",
    "technical": "Power in dBm is 10 log10(P/1 mW); 0 dBm equals 1 mW.",
    "aliases": [],
    "weeks": [
      4,
      19,
      20
    ],
    "source": "fcc",
    "notation": "dBm",
    "note": "",
    "auto": true,
    "pronunciation": "/dbm/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "dbm"
  },
  {
    "term": "DC coupling",
    "category": "Instruments & Measurement",
    "definition": "An input mode that passes both DC level and changing signal components.",
    "technical": "DC coupling connects the input path without intentional DC blocking, allowing the instrument to display the full signal including offset.",
    "aliases": [],
    "weeks": [
      3,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/DC coupling/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "dc-coupling"
  },
  {
    "term": "DC offset",
    "category": "AC & Signals",
    "definition": "A constant DC level added to a varying waveform.",
    "technical": "DC offset is the mean or zero-frequency component that shifts a waveform above or below the chosen reference.",
    "aliases": [],
    "weeks": [
      3,
      4
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/DC offset/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "dc-offset"
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
    "term": "debugging",
    "category": "Test & Troubleshooting",
    "definition": "The systematic process of finding and correcting defects in hardware, software, or their interaction.",
    "technical": "Debugging forms hypotheses, gathers evidence, isolates the fault domain, applies controlled changes, and verifies that the observed failure is resolved without creating regressions.",
    "aliases": [],
    "weeks": [
      1,
      3,
      13,
      14,
      15,
      16,
      18,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/dibʌɡɪŋ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "debugging"
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
    "term": "demodulation",
    "category": "RF & Communications",
    "definition": "Recovering information from a modulated carrier or waveform.",
    "technical": "Demodulation estimates the original message/baseband signal from changes imposed on carrier amplitude, frequency, phase, or another parameter.",
    "aliases": [],
    "weeks": [
      2,
      20
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/dimɑdʒʌleɪʃʌn/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "demodulation"
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
    "term": "depletion region",
    "category": "Semiconductors",
    "definition": "The region around a PN junction where mobile charge carriers are largely depleted.",
    "technical": "The depletion region contains fixed ionized dopants and supports the junction electric field and built-in potential.",
    "aliases": [
      "depletion layer"
    ],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/dɪpliʃʌn ɹidʒʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "depletion-region"
  },
  {
    "term": "derating",
    "category": "Power Electronics",
    "definition": "Operating a component below a stated maximum rating to improve margin, reliability, or temperature capability.",
    "technical": "Derating reduces electrical, thermal, or mechanical stress relative to absolute limits according to device data and design requirements.",
    "aliases": [],
    "weeks": [
      7
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/derating/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "derating"
  },
  {
    "term": "design rule check",
    "category": "PCB & Assembly",
    "definition": "An automated PCB-layout check for geometric and manufacturing constraints.",
    "technical": "A DRC checks features such as spacing, widths, drills, annular rings, overlaps, and other layout rules against configured limits.",
    "aliases": [
      "DRC"
    ],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/dɪzaɪn ɹul tʃɛk/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "design-rule-check"
  },
  {
    "term": "device address",
    "category": "Interfaces & Protocols",
    "definition": "A value that identifies a device or endpoint on a shared communication system.",
    "technical": "A device address is encoded according to the protocol so transfers can be directed to the intended participant.",
    "aliases": [],
    "weeks": [
      18,
      17
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/dɪvaɪs ædɹɛs/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "device-address"
  },
  {
    "term": "device driver",
    "category": "Embedded Systems",
    "definition": "Software that controls a hardware peripheral or device through a defined interface.",
    "technical": "A device driver translates higher-level operations into register accesses, transactions, interrupts, timing, and error handling required by the hardware.",
    "aliases": [
      "driver"
    ],
    "weeks": [
      1,
      7,
      8,
      10,
      11,
      13,
      14,
      16
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/dɪvaɪs dɹaɪvɝ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "device-driver"
  },
  {
    "term": "diagnostic",
    "category": "Test & Troubleshooting",
    "definition": "A test or observation used to identify the condition or cause of a fault.",
    "technical": "Diagnostic information is selected to distinguish among competing fault hypotheses and localize a failing function or component.",
    "aliases": [],
    "weeks": [
      1,
      2,
      3,
      4,
      6,
      9,
      12,
      13
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/daɪʌɡnɑstɪk/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "diagnostic"
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
    "term": "distortion",
    "category": "AC & Signals",
    "definition": "Any unwanted change in a signal’s waveform or spectral content relative to the intended response.",
    "technical": "Distortion includes nonlinear harmonic/intermodulation products, clipping, phase/amplitude errors, and other departures from an ideal transferred signal.",
    "aliases": [],
    "weeks": [
      10,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/dɪstɔɹʃʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "distortion"
  },
  {
    "term": "divide and conquer",
    "category": "Test & Troubleshooting",
    "definition": "A troubleshooting method that tests near the middle of a signal or functional path to eliminate large portions of the system.",
    "technical": "Divide-and-conquer fault isolation repeatedly partitions the possible fault region using discriminating measurements.",
    "aliases": [],
    "weeks": [
      27,
      29
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/dɪvaɪd ʌnd kɑŋkɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "divide-and-conquer"
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
    "term": "DMM counts",
    "category": "Foundations & Units",
    "definition": "The number of discrete display values a digital multimeter can represent on a range.",
    "technical": "DMM count specification indicates display resolution; for example, a 6000-count meter can display values from 0 through roughly 5999 before changing range.",
    "aliases": [
      "counts"
    ],
    "weeks": [
      21,
      22,
      26,
      27
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/DMM counts/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "dmm-counts"
  },
  {
    "term": "doping",
    "category": "Semiconductors",
    "definition": "Adding controlled impurity atoms to a semiconductor to change its electrical behavior.",
    "technical": "Doping sets carrier concentration and creates p-type or n-type semiconductor regions by introducing acceptor or donor impurities.",
    "aliases": [],
    "weeks": [
      8,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/doping/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "doping"
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
    "term": "drain current",
    "category": "Semiconductors",
    "definition": "The current flowing through the drain terminal of a field-effect transistor.",
    "technical": "Drain current ID is controlled by gate-source voltage, drain-source voltage, device geometry, and operating region.",
    "aliases": [],
    "weeks": [
      7,
      10,
      30
    ],
    "source": "iec",
    "notation": "I_D",
    "note": "",
    "auto": true,
    "pronunciation": "/dɹeɪn kɝʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "drain-current"
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
    "term": "efficiency",
    "category": "Power Electronics",
    "definition": "The fraction of input power converted into useful output power.",
    "technical": "Efficiency η is output power divided by input power, usually expressed as a percentage; the difference represents losses.",
    "aliases": [],
    "weeks": [
      9,
      10,
      15,
      24
    ],
    "source": "iec",
    "notation": "η = Pout/Pin",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪfɪʃʌnsi/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "efficiency"
  },
  {
    "term": "electric charge",
    "category": "Foundations & Units",
    "definition": "A physical property that can be positive or negative and is carried by particles such as electrons.",
    "technical": "Charge is the electrical quantity whose flow constitutes electric current; its SI unit is the coulomb (C).",
    "aliases": [
      "charge",
      "charges"
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
      "amperage",
      "electrical current",
      "currents"
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
    "term": "electric field",
    "category": "Foundations & Units",
    "definition": "A field that describes the electric force a charge would experience at each location.",
    "technical": "Electric field strength is force per unit positive test charge and is expressed in volts per metre or newtons per coulomb.",
    "aliases": [],
    "weeks": [
      2,
      4,
      7,
      8,
      19,
      20
    ],
    "source": "iec",
    "notation": "E",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlɛktɹɪk fild/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "electric-field"
  },
  {
    "term": "electric potential",
    "category": "Foundations & Units",
    "definition": "Electric potential describes electric potential energy per unit charge at a location.",
    "technical": "Electric potential is a scalar field quantity measured in volts; potential difference between two points is the voltage between them.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlɛktɹɪk pʌtɛnʃʌl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "electric-potential"
  },
  {
    "term": "electrical clearance",
    "category": "PCB & Assembly",
    "definition": "The shortest distance through air between conductive parts.",
    "technical": "Electrical clearance is selected to prevent arcing or breakdown across air for the expected working voltage, transients, altitude, pollution, and safety standard.",
    "aliases": [
      "clearance"
    ],
    "weeks": [
      12,
      19,
      25,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlɛktɹɪkʌl klɪɹʌns/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "electrical-clearance"
  },
  {
    "term": "electrical component",
    "category": "Components",
    "definition": "A physical part used to perform an electrical or electronic function in a circuit.",
    "technical": "An electrical/electronic component is a discrete or integrated device characterized by terminals, electrical behavior, ratings, and intended function.",
    "aliases": [
      "component",
      "components"
    ],
    "weeks": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlɛktɹɪkʌl kʌmpoʊnʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "electrical-component"
  },
  {
    "term": "electrical load",
    "category": "Components",
    "definition": "A device or circuit that receives electrical energy or signal drive from a source.",
    "technical": "An electrical load presents an impedance to the source and draws current according to the source/load operating conditions.",
    "aliases": [
      "load"
    ],
    "weeks": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlɛktɹɪkʌl loʊd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "electrical-load"
  },
  {
    "term": "electrical rule check",
    "category": "PCB & Assembly",
    "definition": "An automated schematic check for likely electrical connectivity or pin-type problems.",
    "technical": "An ERC evaluates schematic connectivity and electrical pin rules to flag conditions such as conflicting outputs, missing drivers, or unconnected required pins.",
    "aliases": [
      "ERC"
    ],
    "weeks": [
      12,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlɛktɹɪkʌl ɹul tʃɛk/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "electrical-rule-check"
  },
  {
    "term": "electrical shock",
    "category": "Safety & Workmanship",
    "definition": "Harm caused when electric current passes through the body.",
    "technical": "Electrical shock severity depends on current path, magnitude, duration, frequency, skin/contact conditions, and other factors; safe work practices aim to prevent body current.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlɛktɹɪkʌl ʃɑk/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "electrical-shock"
  },
  {
    "term": "electrochemical cell",
    "category": "Components",
    "definition": "A device that converts chemical energy and electrical energy through oxidation-reduction reactions.",
    "technical": "An electrochemical cell establishes an electromotive force between two electrodes through electrochemical reactions; one or more cells form a battery.",
    "aliases": [
      "cell"
    ],
    "weeks": [
      9,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ʌlɛktɹoʊkɛmɪkʌl sɛl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "electrochemical-cell"
  },
  {
    "term": "electrolytic capacitor",
    "category": "Components",
    "definition": "A polarized capacitor that provides relatively high capacitance in a compact package.",
    "technical": "An electrolytic capacitor uses an electrolyte and thin dielectric oxide layer and normally requires correct polarity during operation.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlɛktɹʌlɪtɪk kʌpæsʌtɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "electrolytic-capacitor"
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
    "term": "electron",
    "category": "Foundations & Units",
    "definition": "A negatively charged subatomic particle that carries electric charge in many electrical systems.",
    "technical": "An electron has elementary charge −e; electron motion or redistribution is responsible for conduction and electrostatic charging in many materials.",
    "aliases": [],
    "weeks": [
      1,
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlɛktɹɑn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "electron"
  },
  {
    "term": "electron drift",
    "category": "Foundations & Units",
    "definition": "The slow average directed motion of electrons through a conductor when an electric field is applied.",
    "technical": "Electron drift velocity is the average carrier velocity superimposed on random thermal motion; in metals it is opposite conventional current direction.",
    "aliases": [
      "drift velocity",
      "electron motion"
    ],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪlɛktɹɑn dɹɪft/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "electron-drift"
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
    "term": "EMI",
    "category": "RF & Communications",
    "definition": "Unwanted electromagnetic energy that disrupts the operation of electronic equipment or communication.",
    "technical": "Electromagnetic interference includes conducted and radiated coupling mechanisms and is controlled through layout, filtering, grounding, shielding, and system design.",
    "aliases": [
      "electromagnetic interference"
    ],
    "weeks": [
      4,
      9
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/EMI/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "emi"
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
    "term": "emitter current",
    "category": "Semiconductors",
    "definition": "The current flowing through the emitter terminal of a BJT.",
    "technical": "For a BJT, emitter current is the algebraic sum of collector and base currents under the chosen sign convention.",
    "aliases": [],
    "weeks": [
      7
    ],
    "source": "iec",
    "notation": "I_E",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪmɪtɝ kɝʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "emitter-current"
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
    "term": "equivalent resistance",
    "category": "Circuit Analysis",
    "definition": "A single resistance that has the same terminal current-voltage behavior as a resistor network.",
    "technical": "Equivalent resistance is the resistance seen between specified terminals after reducing the network while preserving its terminal V–I relationship.",
    "aliases": [],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪkwɪvʌlʌnt ɹɪzɪstʌns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "equivalent-resistance"
  },
  {
    "term": "error handling",
    "category": "Software & Automation",
    "definition": "The strategy a program uses to detect, report, recover from, or safely stop after errors.",
    "technical": "Robust error handling defines expected failure classes, validation, timeouts, retries, logging, cleanup, and safe-state behavior.",
    "aliases": [],
    "weeks": [
      14,
      15,
      17,
      26,
      27
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɛɹɝ hændlɪŋ/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "error-handling"
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
    "term": "ESD mat",
    "category": "Safety & Workmanship",
    "definition": "A dissipative work-surface mat used as part of an electrostatic-discharge control system.",
    "technical": "An ESD mat provides a controlled resistance path to a common grounding point so accumulated charge dissipates without a rapid damaging discharge.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ESD mat/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "esd-mat"
  },
  {
    "term": "ESD-safe",
    "category": "Safety & Workmanship",
    "definition": "Designed or controlled to reduce the chance of electrostatic discharge damage.",
    "technical": "An ESD-safe workstation or tool uses grounding, dissipative materials, handling procedures, and environmental controls consistent with the required ESD control program.",
    "aliases": [],
    "weeks": [
      1,
      12
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/esd seɪf/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "esd-safe"
  },
  {
    "term": "Ethernet",
    "category": "Interfaces & Protocols",
    "definition": "A family of wired networking standards for local-area data communication.",
    "technical": "Ethernet defines physical/link-layer signaling and MAC framing standardized in IEEE 802.3.",
    "aliases": [],
    "weeks": [
      14,
      20
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/iθɝnɛt/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "ethernet"
  },
  {
    "term": "even parity",
    "category": "Interfaces & Protocols",
    "definition": "A parity convention that makes the total number of one bits even.",
    "technical": "The parity bit is selected so the protected data plus parity contains an even count of logic-1 bits.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ivɪn pɛɹʌti/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "even-parity"
  },
  {
    "term": "exception handling",
    "category": "Software & Automation",
    "definition": "Program logic for detecting and responding to exceptional or error conditions.",
    "technical": "In Python and similar languages, exceptions transfer control to handlers that can recover, report, clean up, or intentionally propagate an error.",
    "aliases": [],
    "weeks": [
      27,
      17
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪksɛpʃʌn hændlɪŋ/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "exception-handling"
  },
  {
    "term": "eye protection",
    "category": "Safety & Workmanship",
    "definition": "Protective eyewear used to reduce injury from particles, splashes, fragments, or process hazards.",
    "technical": "Safety glasses or other rated eye protection are selected according to the identified task hazard and applicable workplace requirements.",
    "aliases": [],
    "weeks": [
      1,
      12
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/aɪ pɹʌtɛkʃʌn/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "eye-protection"
  },
  {
    "term": "failure mechanism",
    "category": "Test & Troubleshooting",
    "definition": "The physical, electrical, chemical, or software process that produces a failure.",
    "technical": "Failure mechanism explains how degradation or defect progression creates a failure mode, such as electromigration, overstress, corrosion, or fatigue.",
    "aliases": [],
    "weeks": [
      10,
      22,
      29
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/feɪljɝ mɛkʌnɪzʌm/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "failure-mechanism"
  },
  {
    "term": "failure mode",
    "category": "Test & Troubleshooting",
    "definition": "A particular way in which a component or system can fail.",
    "technical": "A failure mode describes the observable manner of failure, distinct from the underlying failure mechanism or root cause.",
    "aliases": [],
    "weeks": [
      10,
      11,
      13,
      19,
      26,
      29
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/feɪljɝ moʊd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "failure-mode"
  },
  {
    "term": "fall time",
    "category": "AC & Signals",
    "definition": "The time a signal takes to transition from a defined high level to a defined low level.",
    "technical": "Fall time is measured between specified percentages of the falling transition amplitude.",
    "aliases": [],
    "weeks": [
      4,
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fɔl taɪm/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "fall-time"
  },
  {
    "term": "fan-out",
    "category": "Digital Logic",
    "definition": "The number of logic inputs that one output can drive while meeting electrical specifications.",
    "technical": "Fan-out is limited by output drive capability, input current/capacitance, timing, and logic-level noise margins.",
    "aliases": [],
    "weeks": [
      11,
      15
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fæn aʊt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "fan-out"
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
    "term": "fault tree",
    "category": "Test & Troubleshooting",
    "definition": "A logic diagram that works backward from an undesired event to combinations of possible causes.",
    "technical": "Fault-tree analysis models top-event causes using logical relationships such as AND/OR gates to support systematic fault reasoning.",
    "aliases": [],
    "weeks": [
      5,
      24
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fɔlt tɹi/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "fault-tree"
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
    "term": "feedline",
    "category": "RF & Communications",
    "definition": "The transmission line connecting an RF source or receiver to an antenna or other RF load.",
    "technical": "A feedline such as coax or balanced line carries RF energy and should be selected/matched for impedance, loss, power, frequency, and environment.",
    "aliases": [],
    "weeks": [
      20
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/feedline/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "feedline"
  },
  {
    "term": "filter",
    "category": "AC & Signals",
    "definition": "A circuit or system that selectively passes some signal frequencies while reducing others.",
    "technical": "A filter is characterized by its transfer function and frequency response, including passband, stopband, cutoff, and attenuation behavior.",
    "aliases": [],
    "weeks": [
      1,
      2,
      4,
      6,
      9,
      13,
      20,
      21
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fɪltɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "filter"
  },
  {
    "term": "filter capacitor",
    "category": "Power Electronics",
    "definition": "A capacitor used to reduce ripple by storing and releasing energy between rectifier peaks.",
    "technical": "In a rectified supply, a reservoir/filter capacitor charges near waveform peaks and supplies load current between peaks, reducing output ripple.",
    "aliases": [
      "smoothing capacitor",
      "reservoir capacitor"
    ],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fɪltɝ kʌpæsʌtɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "filter-capacitor"
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
    "term": "fixed resistor",
    "category": "Components",
    "definition": "A resistor manufactured to have a nominal resistance that is not intended to be adjusted.",
    "technical": "A fixed resistor is specified by resistance, tolerance, power rating, temperature coefficient, and other construction-dependent limits.",
    "aliases": [],
    "weeks": [
      7,
      4
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fɪkst ɹɪzɪstɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "fixed-resistor"
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
    "term": "FM modulation",
    "category": "RF & Communications",
    "definition": "Frequency modulation, where information changes the instantaneous frequency of a carrier.",
    "technical": "In FM, carrier amplitude ideally remains constant while instantaneous frequency deviation follows the modulating signal.",
    "aliases": [],
    "weeks": [
      20,
      19
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/FM modulation/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "fm-modulation"
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
    "term": "forward voltage",
    "category": "Semiconductors",
    "definition": "The voltage across a forward-biased semiconductor junction while it is conducting.",
    "technical": "Forward voltage is the device terminal voltage at a stated forward current and temperature; it depends on material, current, and junction temperature.",
    "aliases": [],
    "weeks": [
      1,
      3,
      8
    ],
    "source": "iec",
    "notation": "V_F",
    "note": "",
    "auto": true,
    "pronunciation": "/fɔɹwɝd voʊltʌdʒ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "forward-voltage"
  },
  {
    "term": "frame",
    "category": "Interfaces & Protocols",
    "definition": "A structured group of transmitted bits or bytes treated as one communication unit.",
    "technical": "A protocol frame contains defined fields such as addressing, control, payload, and error-check information according to that protocol.",
    "aliases": [],
    "weeks": [
      17,
      28
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fɹeɪm/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "frame"
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
    "term": "frequency domain",
    "category": "AC & Signals",
    "definition": "A way of viewing a signal by the frequencies that make it up.",
    "technical": "Frequency-domain representation expresses spectral magnitude and phase versus frequency, often obtained through Fourier analysis.",
    "aliases": [],
    "weeks": [
      3
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fɹikwʌnsi doʊmeɪn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "frequency-domain"
  },
  {
    "term": "frequency response",
    "category": "AC & Signals",
    "definition": "How a circuit’s gain and phase change with signal frequency.",
    "technical": "Frequency response describes the magnitude and phase of a system transfer function over frequency.",
    "aliases": [],
    "weeks": [
      4,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fɹikwʌnsi ɹɪspɑns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "frequency-response"
  },
  {
    "term": "full-wave rectifier",
    "category": "Power Electronics",
    "definition": "A rectifier that uses both halves of an AC waveform to produce unidirectional output current.",
    "technical": "Full-wave rectification converts positive and negative input half-cycles into output pulses of the same polarity, doubling ripple frequency relative to half-wave rectification.",
    "aliases": [],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fʊl weɪv ɹɛktʌfaɪɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "full-wave-rectifier"
  },
  {
    "term": "fume extraction",
    "category": "Safety & Workmanship",
    "definition": "Removal of airborne fumes near their source during soldering or other processes.",
    "technical": "Local fume extraction captures contaminants before they disperse into the breathing zone and is part of exposure-control practice.",
    "aliases": [],
    "weeks": [
      12
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fjum ɛkstɹækʃʌn/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "fume-extraction"
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
    "term": "fuse",
    "category": "Components",
    "definition": "A protective device designed to open a circuit when excessive current heats and melts its element.",
    "technical": "A fuse is an overcurrent protective device with a calibrated current-time characteristic and must be replaced after operation.",
    "aliases": [],
    "weeks": [
      1,
      3,
      5,
      9,
      10,
      13,
      20,
      21
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/fjuz/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "fuse"
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
    "term": "gain error",
    "category": "Instruments & Measurement",
    "definition": "A proportional measurement or conversion error that changes the slope of the input-output relationship.",
    "technical": "Gain error is the deviation of actual transfer-function slope from the ideal slope after offset is accounted for.",
    "aliases": [],
    "weeks": [
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɡeɪn ɛɹɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "gain-error"
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
    "term": "gate current",
    "category": "Semiconductors",
    "definition": "Current flowing into or out of a transistor gate terminal.",
    "technical": "For an ideal insulated-gate MOSFET steady-state gate current is essentially zero, while transient gate current charges or discharges gate capacitance.",
    "aliases": [],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɡeɪt kɝʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "gate-current"
  },
  {
    "term": "gate-source voltage",
    "category": "Semiconductors",
    "definition": "The voltage between a FET gate and source.",
    "technical": "Gate-source voltage VGS controls channel formation and conduction in MOSFETs and other field-effect devices.",
    "aliases": [],
    "weeks": [
      10
    ],
    "source": "iec",
    "notation": "V_GS",
    "note": "",
    "auto": true,
    "pronunciation": "/ɡeɪt sɔɹs voʊltʌdʒ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "gate-source-voltage"
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
    "term": "glitch",
    "category": "Digital Logic",
    "definition": "A brief unintended pulse or transition in a signal.",
    "technical": "A digital glitch can result from unequal propagation delays, asynchronous transitions, noise, or timing hazards.",
    "aliases": [],
    "weeks": [
      3,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɡlɪtʃ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "glitch"
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
    "term": "ground clip",
    "category": "Instruments & Measurement",
    "definition": "The reference connection on many oscilloscope probes.",
    "technical": "A conventional bench oscilloscope probe ground clip is commonly connected to protective earth through the oscilloscope chassis, so incorrect placement can short a circuit node to earth.",
    "aliases": [],
    "weeks": [
      3
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɡɹaʊnd klɪp/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "ground-clip"
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
    "term": "hard fault",
    "category": "Test & Troubleshooting",
    "definition": "A persistent fault that remains present under normal repeated tests.",
    "technical": "A hard fault generally produces repeatable incorrect behavior such as an open, short, damaged device, or permanently incorrect state.",
    "aliases": [],
    "weeks": [
      16
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/hɑɹd fɔlt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "hard-fault"
  },
  {
    "term": "hardware handshake",
    "category": "Interfaces & Protocols",
    "definition": "Dedicated control signaling used by communicating devices to coordinate data transfer.",
    "technical": "Hardware handshaking uses separate control lines such as RTS/CTS to regulate transmission readiness and flow independently of payload data.",
    "aliases": [
      "handshake"
    ],
    "weeks": [
      18,
      17
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/hɑɹdwɛɹ hændʃeɪk/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "hardware-handshake"
  },
  {
    "term": "harmonic",
    "category": "AC & Signals",
    "definition": "A sinusoidal frequency component at an integer multiple of a fundamental frequency.",
    "technical": "For a periodic waveform, the nth harmonic has frequency n times the fundamental and contributes to the waveform’s spectral shape.",
    "aliases": [],
    "weeks": [
      4,
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/hɑɹmɑnɪk/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "harmonic"
  },
  {
    "term": "hazard",
    "category": "Safety & Workmanship",
    "definition": "A source or condition with the potential to cause harm.",
    "technical": "In safety practice, a hazard is distinguished from risk, which considers both likelihood and consequence of harm.",
    "aliases": [],
    "weeks": [
      1,
      12,
      19,
      21,
      28
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/hæzɝd/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "hazard"
  },
  {
    "term": "heap",
    "category": "Embedded Systems",
    "definition": "A memory region used for dynamic allocation during program execution.",
    "technical": "Heap memory is managed by allocation/free operations; fragmentation and nondeterministic allocation behavior can matter in embedded systems.",
    "aliases": [],
    "weeks": [
      14
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/hip/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "heap"
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
    "term": "hexadecimal",
    "category": "Digital Logic",
    "definition": "A base-16 number system commonly used to write binary values compactly.",
    "technical": "Hexadecimal uses digits 0–9 and A–F; each hexadecimal digit corresponds exactly to four binary bits.",
    "aliases": [
      "hex"
    ],
    "weeks": [
      4,
      11,
      14,
      15,
      26
    ],
    "source": "nist_csrc",
    "notation": "base 16",
    "note": "",
    "auto": true,
    "pronunciation": "/hexadecimal/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "hexadecimal"
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
    "term": "hole",
    "category": "Semiconductors",
    "definition": "The absence of an electron in a semiconductor energy state, treated as a mobile positive charge carrier.",
    "technical": "In semiconductor band theory, a hole represents an unoccupied valence-band state and behaves as a quasiparticle with positive charge.",
    "aliases": [],
    "weeks": [
      12
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/hoʊl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "hole"
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
    "term": "I2C address",
    "category": "Interfaces & Protocols",
    "definition": "The address used to select a device on an I²C bus.",
    "technical": "I²C transactions begin with an address field, normally 7 bits in common use, followed by a read/write direction bit.",
    "aliases": [
      "I²C address"
    ],
    "weeks": [
      18,
      28
    ],
    "source": "nxp_i2c",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/I2C address/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "i2c-address"
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
    "term": "inductor current",
    "category": "Power Electronics",
    "definition": "The current flowing through an inductor.",
    "technical": "Inductor current cannot change instantaneously in an ideal inductor; its rate of change is related to applied voltage by v = L·di/dt.",
    "aliases": [],
    "weeks": [
      2,
      4
    ],
    "source": "iec",
    "notation": "i_L",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪndʌktɝ kɝʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "inductor-current"
  },
  {
    "term": "input impedance",
    "category": "Instruments & Measurement",
    "definition": "The impedance a circuit or instrument presents to the source driving its input.",
    "technical": "Input impedance determines loading of the measured or connected source and may include both resistance and capacitance.",
    "aliases": [],
    "weeks": [
      1,
      2,
      3,
      4
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪnpʊt ɪmpidʌns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "input-impedance"
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
    "term": "insertion loss",
    "category": "RF & Communications",
    "definition": "The reduction in signal power caused by inserting a component or network into a path.",
    "technical": "Insertion loss is the logarithmic ratio comparing delivered power before and after the device/network is inserted, normally expressed in dB.",
    "aliases": [],
    "weeks": [
      19
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪnsɝʃʌn lɔs/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "insertion-loss"
  },
  {
    "term": "instrument",
    "category": "Test & Troubleshooting",
    "definition": "A device used to measure, generate, observe, or analyze physical or electrical quantities.",
    "technical": "A test/measurement instrument has defined functions, ranges, accuracy, bandwidth, input/output characteristics, calibration state, and safety ratings.",
    "aliases": [],
    "weeks": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪnstɹʌmʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "instrument"
  },
  {
    "term": "insulator",
    "category": "Foundations & Units",
    "definition": "A material that strongly resists the movement of electric charge.",
    "technical": "An electrical insulator has very low conductivity and is used to inhibit current between conductive parts.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪnsʌleɪtɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "insulator"
  },
  {
    "term": "interference",
    "category": "RF & Communications",
    "definition": "Unwanted energy or signals that disturb desired communication or measurement.",
    "technical": "Electromagnetic interference can be conducted or radiated and can degrade signal integrity, sensitivity, or regulatory compliance.",
    "aliases": [],
    "weeks": [
      18,
      19,
      20
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪntɝfɪɹʌns/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "interference"
  },
  {
    "term": "intermittent fault",
    "category": "Test & Troubleshooting",
    "definition": "A fault that appears and disappears rather than remaining continuously present.",
    "technical": "Intermittent faults can depend on temperature, vibration, timing, contact condition, noise, or marginal operating conditions and require evidence captured near the event.",
    "aliases": [],
    "weeks": [
      21,
      27
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɪntɝmɪtʌnt fɔlt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "intermittent-fault"
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
    "term": "JFET",
    "category": "Semiconductors",
    "definition": "A junction field-effect transistor controlled by a reverse-biased gate junction.",
    "technical": "A JFET uses an electric field from a PN-junction gate to vary channel conductivity and normally draws very little gate current.",
    "aliases": [
      "junction field-effect transistor"
    ],
    "weeks": [
      7
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/JFET/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "jfet"
  },
  {
    "term": "joule",
    "category": "Foundations & Units",
    "definition": "The SI unit used to measure energy or work.",
    "technical": "One joule is one newton-metre; electrically, one volt across one coulomb corresponds to one joule of energy transfer.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "nist_si",
    "notation": "J",
    "note": "",
    "auto": true,
    "pronunciation": "/dʒul/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "joule"
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
    "term": "junction",
    "category": "Circuit Analysis",
    "definition": "A point where conductors, device regions, or circuit paths meet.",
    "technical": "In circuit work a junction is a connection point between multiple conductive paths; in semiconductor work it can mean the interface between differently doped regions.",
    "aliases": [],
    "weeks": [
      2,
      7,
      8,
      13,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/dʒʌŋkʃʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "junction"
  },
  {
    "term": "junction temperature",
    "category": "Power Electronics",
    "definition": "The temperature of the active semiconductor junction inside a device.",
    "technical": "Junction temperature Tj is estimated from ambient or case temperature, dissipated power, and the applicable thermal resistance/impedance network.",
    "aliases": [],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "T_J",
    "note": "",
    "auto": true,
    "pronunciation": "/dʒʌŋkʃʌn tɛmpɹʌtʃɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "junction-temperature"
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
    "term": "kilo",
    "category": "Foundations & Units",
    "definition": "The SI prefix meaning one thousand times the base unit.",
    "technical": "kilo, symbol k, represents a factor of 10³.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "nist_si",
    "notation": "k = 10³",
    "note": "",
    "auto": true,
    "pronunciation": "/kɪloʊ/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "kilo"
  },
  {
    "term": "Kirchhoff’s laws",
    "category": "Circuit Analysis",
    "definition": "Two basic circuit laws relating currents at nodes and voltages around loops.",
    "technical": "Kirchhoff’s Current Law follows charge conservation at a node, while Kirchhoff’s Voltage Law follows conservation of energy around a closed loop.",
    "aliases": [
      "Kirchhoff laws",
      "Kirchhoffs laws"
    ],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/kɝkhɔf ɛs lɔz/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "kirchhoffs-laws"
  },
  {
    "term": "known-good",
    "category": "Test & Troubleshooting",
    "definition": "A component, signal, configuration, or unit already verified to operate correctly.",
    "technical": "A known-good reference is used for substitution or comparison to separate DUT behavior from setup, tool, or configuration problems.",
    "aliases": [],
    "weeks": [
      5,
      9,
      12,
      13,
      14,
      16,
      18,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/noʊn ɡʊd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "known-good"
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
    "term": "LDR",
    "category": "Components",
    "definition": "A light-dependent resistor whose resistance changes with illumination.",
    "technical": "An LDR, or photoresistor, is a photoconductive device whose resistance generally decreases as incident light increases.",
    "aliases": [
      "light-dependent resistor"
    ],
    "weeks": [
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/LDR/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "ldr"
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
    "term": "LIN bus",
    "category": "Foundations & Units",
    "definition": "A low-cost single-wire serial network used for simple distributed embedded nodes, especially in vehicles.",
    "technical": "Local Interconnect Network is a master-scheduled serial bus with defined frame timing, identifiers, checksums, and a single-wire physical layer.",
    "aliases": [
      "LIN",
      "Local Interconnect Network"
    ],
    "weeks": [
      1,
      3
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/LIN bus/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "lin-bus"
  },
  {
    "term": "line regulation",
    "category": "Power Electronics",
    "definition": "How much a regulated output changes when input voltage changes.",
    "technical": "Line regulation specifies output-voltage variation versus input-voltage variation under stated load and temperature conditions.",
    "aliases": [],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/laɪn ɹɛɡjʌleɪʃʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "line-regulation"
  },
  {
    "term": "linear region",
    "category": "Semiconductors",
    "definition": "An operating region where a device behaves approximately linearly for the intended use.",
    "technical": "For MOSFET terminology, linear or triode operation occurs when the channel behaves resistively; datasheet wording should be checked because “linear region” can also describe analog operation more broadly.",
    "aliases": [],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lɪniɝ ɹidʒʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "linear-region"
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
    "term": "linker",
    "category": "Embedded Systems",
    "definition": "A build tool that combines compiled code and data into an executable image.",
    "technical": "The linker resolves symbols, places sections according to a linker script or memory map, and emits the final program image.",
    "aliases": [],
    "weeks": [
      14
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lɪŋkɝ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "linker"
  },
  {
    "term": "load regulation",
    "category": "Power Electronics",
    "definition": "How much a regulated output changes as load current changes.",
    "technical": "Load regulation specifies output-voltage variation between stated load conditions with other conditions held within the specification.",
    "aliases": [],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/loʊd ɹɛɡjʌleɪʃʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "load-regulation"
  },
  {
    "term": "load resistance",
    "category": "Circuit Analysis",
    "definition": "The effective resistance presented by the circuit or device receiving power or signal energy.",
    "technical": "Load resistance is the resistive component of the impedance connected to a source or driving network.",
    "aliases": [],
    "weeks": [
      4,
      6
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/loʊd ɹɪzɪstʌns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "load-resistance"
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
    "term": "logging",
    "category": "Software & Automation",
    "definition": "Recording events, measurements, status, or diagnostic information during program execution or testing.",
    "technical": "Technical logging captures timestamped, structured evidence that supports debugging, traceability, trend analysis, and test reproducibility.",
    "aliases": [],
    "weeks": [
      1,
      3,
      13,
      14,
      17,
      25,
      26,
      27
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lɔɡɪŋ/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "logging"
  },
  {
    "term": "logic 0",
    "category": "Digital Logic",
    "definition": "The binary LOW state represented by a voltage within the device’s valid low-level range.",
    "technical": "Logic 0 is a symbolic state; the acceptable electrical voltage range is defined by input/output low-level specifications such as VIL and VOL.",
    "aliases": [
      "LOW state"
    ],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lɑdʒɪk 0/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "logic-0"
  },
  {
    "term": "logic 1",
    "category": "Digital Logic",
    "definition": "The binary HIGH state represented by a voltage within the device’s valid high-level range.",
    "technical": "Logic 1 is a symbolic state; the acceptable electrical voltage range is defined by specifications such as VIH and VOH.",
    "aliases": [
      "HIGH state"
    ],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lɑdʒɪk 1/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "logic-1"
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
    "term": "logic family",
    "category": "Digital Logic",
    "definition": "A group of digital devices built with compatible circuit technology and electrical conventions.",
    "technical": "Logic families such as CMOS or TTL define supply ranges, thresholds, drive characteristics, speed, and power behavior.",
    "aliases": [],
    "weeks": [
      3,
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lɑdʒɪk fæmʌli/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "logic-family"
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
    "term": "logic HIGH",
    "category": "Foundations & Units",
    "definition": "The digital HIGH state represented by a voltage within a device’s valid high-level range.",
    "technical": "Logic HIGH corresponds to a valid logic-1 electrical level defined by output-high and input-high specifications, not necessarily exactly the supply voltage.",
    "aliases": [
      "HIGH"
    ],
    "weeks": [
      1,
      2,
      3,
      4,
      6,
      7,
      8,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lɑdʒɪk haɪ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "logic-high"
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
    "term": "logic LOW",
    "category": "Foundations & Units",
    "definition": "The digital LOW state represented by a voltage within a device’s valid low-level range.",
    "technical": "Logic LOW corresponds to a valid logic-0 electrical level defined by output-low and input-low specifications, not necessarily exactly 0 V.",
    "aliases": [
      "LOW"
    ],
    "weeks": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/lɑdʒɪk loʊ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "logic-low"
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
    "term": "machine code",
    "category": "Embedded Systems",
    "definition": "Binary instruction data that a processor executes directly.",
    "technical": "Machine code encodes instructions, operands, and addressing information according to a processor instruction-set architecture.",
    "aliases": [],
    "weeks": [
      16,
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/mʌʃin koʊd/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "machine-code"
  },
  {
    "term": "magnetic core",
    "category": "Components",
    "definition": "A magnetic material used to concentrate and guide magnetic flux in inductors and transformers.",
    "technical": "A magnetic core provides a high-permeability flux path and is characterized by permeability, saturation, loss, geometry, and frequency behavior.",
    "aliases": [
      "core"
    ],
    "weeks": [
      2,
      4,
      7,
      8,
      9,
      11,
      14,
      15
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/mæɡnɛtɪk kɔɹ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "magnetic-core"
  },
  {
    "term": "magnetic field",
    "category": "Foundations & Units",
    "definition": "A field associated with magnets, moving charge, and electric current.",
    "technical": "Magnetic flux density describes magnetic field effects on moving charge and current-carrying conductors and is measured in teslas.",
    "aliases": [],
    "weeks": [
      2,
      4,
      7,
      19
    ],
    "source": "iec",
    "notation": "B",
    "note": "",
    "auto": true,
    "pronunciation": "/mæɡnɛtɪk fild/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "magnetic-field"
  },
  {
    "term": "Matplotlib",
    "category": "Software & Automation",
    "definition": "A Python plotting library commonly used to visualize measurement and test data.",
    "technical": "Matplotlib provides Python APIs for creating plots, figures, axes, labels, annotations, and exported graphics from numerical or tabular data.",
    "aliases": [],
    "weeks": [
      27
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/matplotlib/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "matplotlib"
  },
  {
    "term": "measurement",
    "category": "Instruments & Measurement",
    "definition": "The process of experimentally obtaining one or more quantity values that can reasonably be attributed to a quantity.",
    "technical": "Measurement compares an unknown quantity with a reference through a defined method, instrument chain, conditions, and uncertainty contribution.",
    "aliases": [],
    "weeks": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/mɛʒɝmʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "measurement"
  },
  {
    "term": "measurement range",
    "category": "Instruments & Measurement",
    "definition": "The interval of input values over which an instrument is intended to measure within stated specifications.",
    "technical": "A measurement range defines lower/upper limits and associated resolution, accuracy, overload, and autoranging behavior for a selected function.",
    "aliases": [
      "range"
    ],
    "weeks": [
      1,
      2,
      3,
      5,
      6,
      7,
      9,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/mɛʒɝmʌnt ɹeɪndʒ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "measurement-range"
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
    "term": "mega",
    "category": "Foundations & Units",
    "definition": "The SI prefix meaning one million times the base unit.",
    "technical": "mega, symbol M, represents a factor of 10⁶.",
    "aliases": [],
    "weeks": [
      1,
      4
    ],
    "source": "nist_si",
    "notation": "M = 10⁶",
    "note": "",
    "auto": true,
    "pronunciation": "/mɛɡʌ/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "mega"
  },
  {
    "term": "memory map",
    "category": "Embedded Systems",
    "definition": "A layout showing which address ranges correspond to memory and hardware resources.",
    "technical": "A memory map assigns address ranges to flash, RAM, peripherals, system control blocks, and other resources in a processor address space.",
    "aliases": [],
    "weeks": [
      16,
      26
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/mɛmɝi mæp/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "memory-map"
  },
  {
    "term": "memory-mapped I/O",
    "category": "Embedded Systems",
    "definition": "A method where peripheral registers are accessed using normal memory addresses.",
    "technical": "Memory-mapped I/O places device registers in the processor address space so load/store instructions can read or write hardware.",
    "aliases": [
      "MMIO"
    ],
    "weeks": [
      16,
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/mɛmɝi mæpt aɪ oʊ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "memory-mapped-i-o"
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
    "term": "micro",
    "category": "Foundations & Units",
    "definition": "The SI prefix meaning one millionth of the base unit.",
    "technical": "micro, symbol µ, represents a factor of 10⁻⁶.",
    "aliases": [],
    "weeks": [
      1,
      4
    ],
    "source": "nist_si",
    "notation": "µ = 10⁻⁶",
    "note": "",
    "auto": true,
    "pronunciation": "/maɪkɹoʊ/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "micro"
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
    "term": "microphone",
    "category": "Components",
    "definition": "A transducer that converts sound pressure into an electrical signal.",
    "technical": "A microphone converts acoustic energy into an electrical representation using a transduction method such as dynamic, condenser, or MEMS sensing.",
    "aliases": [],
    "weeks": [
      10,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/maɪkɹʌfoʊn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "microphone"
  },
  {
    "term": "microprocessor",
    "category": "Embedded Systems",
    "definition": "A programmable processor that executes instructions and typically relies on external memory and peripherals.",
    "technical": "A microprocessor integrates a CPU datapath and control logic; unlike a typical microcontroller, many supporting memories and peripherals may reside off-chip.",
    "aliases": [],
    "weeks": [
      14,
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/maɪkɹoʊpɹɑsɛsɝ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "microprocessor"
  },
  {
    "term": "milli",
    "category": "Foundations & Units",
    "definition": "The SI prefix meaning one thousandth of the base unit.",
    "technical": "milli, symbol m, represents a factor of 10⁻³.",
    "aliases": [],
    "weeks": [
      1,
      4
    ],
    "source": "nist_si",
    "notation": "m = 10⁻³",
    "note": "",
    "auto": true,
    "pronunciation": "/mɪli/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "milli"
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
    "term": "nano",
    "category": "Foundations & Units",
    "definition": "The SI prefix meaning one billionth of the base unit.",
    "technical": "nano, symbol n, represents a factor of 10⁻⁹.",
    "aliases": [],
    "weeks": [
      1,
      4
    ],
    "source": "nist_si",
    "notation": "n = 10⁻⁹",
    "note": "",
    "auto": true,
    "pronunciation": "/nɑnoʊ/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "nano"
  },
  {
    "term": "negative charge",
    "category": "Foundations & Units",
    "definition": "Electric charge having the negative sign convention.",
    "technical": "Negative charge has the same sign as the electron’s charge −e.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/nɛɡʌtɪv tʃɑɹdʒ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "negative-charge"
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
    "term": "neutron",
    "category": "Foundations & Units",
    "definition": "An electrically neutral particle found in an atomic nucleus.",
    "technical": "A neutron has approximately the mass of a proton but carries no net electric charge; it contributes to atomic mass and nuclear structure.",
    "aliases": [
      "neutrons"
    ],
    "weeks": [
      1,
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/nutɹɑn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "neutron"
  },
  {
    "term": "nibble",
    "category": "Digital Logic",
    "definition": "A group of four bits.",
    "technical": "A nibble is a 4-bit binary quantity and maps exactly to one hexadecimal digit.",
    "aliases": [],
    "weeks": [
      4
    ],
    "source": "iec",
    "notation": "4 bits",
    "note": "",
    "auto": true,
    "pronunciation": "/nɪbʌl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "nibble"
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
    "term": "noise",
    "category": "AC & Signals",
    "definition": "Unwanted variation that interferes with a desired signal or measurement.",
    "technical": "Electrical noise is an undesired random or deterministic disturbance superimposed on a signal or measurement.",
    "aliases": [],
    "weeks": [
      2,
      3,
      4,
      5,
      7,
      8,
      9,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/nɔɪz/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "noise"
  },
  {
    "term": "noise floor",
    "category": "RF & Communications",
    "definition": "The background signal level produced by noise in a measurement or communication system.",
    "technical": "Noise floor is the baseline spectral or integrated noise level against which weak signals must be distinguished.",
    "aliases": [],
    "weeks": [
      20
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/nɔɪz flɔɹ/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "noise-floor"
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
    "term": "nonvolatile memory",
    "category": "Embedded Systems",
    "definition": "Memory that retains stored data when power is removed.",
    "technical": "Nonvolatile memory technologies such as flash or EEPROM preserve information without continuous power.",
    "aliases": [],
    "weeks": [
      14,
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/nɑnvɑlʌtʌl mɛmɝi/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "nonvolatile-memory"
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
    "term": "ohmmeter",
    "category": "Instruments & Measurement",
    "definition": "An instrument or meter function used to measure resistance.",
    "technical": "An ohmmeter applies an internal test stimulus and infers resistance from the resulting voltage/current response; the circuit should normally be de-energized.",
    "aliases": [],
    "weeks": [
      24
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ohmmeter/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "ohmmeter"
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
    "term": "open-circuit voltage",
    "category": "Circuit Analysis",
    "definition": "The voltage measured across terminals when no external load current is drawn.",
    "technical": "Open-circuit voltage is the terminal potential difference under the condition of essentially zero externally delivered current.",
    "aliases": [],
    "weeks": [
      2,
      6
    ],
    "source": "iec",
    "notation": "V_OC",
    "note": "",
    "auto": true,
    "pronunciation": "/oʊpʌn sɝkʌt voʊltʌdʒ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "open-circuit-voltage"
  },
  {
    "term": "open-collector",
    "category": "Digital Logic",
    "definition": "A bipolar output structure that can pull a line low but requires a pull-up for a high level.",
    "technical": "An open-collector output exposes a transistor collector so the line is driven low when conducting and otherwise floats toward the pull-up voltage.",
    "aliases": [
      "open collector"
    ],
    "weeks": [
      11,
      18
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/oʊpʌn kʌlɛktɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "open-collector"
  },
  {
    "term": "open-drain",
    "category": "Digital Logic",
    "definition": "An output structure that can actively pull a line low but relies on an external or internal pull-up to go high.",
    "technical": "An open-drain MOS output disconnects its pull-down transistor in the released state, allowing multiple devices to share a wired line.",
    "aliases": [
      "open drain"
    ],
    "weeks": [
      11,
      13,
      16,
      18,
      21,
      25,
      30
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/oʊpʌn dɹeɪn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "open-drain"
  },
  {
    "term": "open-drain output",
    "category": "Interfaces & Protocols",
    "definition": "An output that actively pulls a line low and otherwise releases it.",
    "technical": "Open-drain outputs require a pull-up for the high state and allow multiple devices to share a line without driving opposing logic levels.",
    "aliases": [],
    "weeks": [
      13
    ],
    "source": "nxp_i2c",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/oʊpʌn dɹeɪn aʊtpʊt/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "open-drain-output"
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
    "term": "oscilloscope probe",
    "category": "Instruments & Measurement",
    "definition": "A probe designed to couple a circuit signal into an oscilloscope input.",
    "technical": "An oscilloscope probe has defined attenuation, bandwidth, input resistance, and input capacitance that affect measurement loading and signal fidelity.",
    "aliases": [],
    "weeks": [
      3
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɔsɪlʌskoʊp pɹoʊb/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "oscilloscope-probe"
  },
  {
    "term": "overcurrent protection",
    "category": "Power Electronics",
    "definition": "Protection that interrupts or limits current when it exceeds an allowed value.",
    "technical": "Overcurrent protection uses devices or control circuits such as fuses, breakers, current-limiters, or electronic shutdown to reduce damage from overloads and faults.",
    "aliases": [],
    "weeks": [
      1,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/overcurrent pɹʌtɛkʃʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "overcurrent-protection"
  },
  {
    "term": "packet",
    "category": "Interfaces & Protocols",
    "definition": "A formatted unit of data transferred through a communication system.",
    "technical": "A packet encapsulates payload with protocol headers and sometimes trailers so it can be routed, checked, or interpreted by communicating devices.",
    "aliases": [],
    "weeks": [
      18,
      20,
      29
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pækʌt/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "packet"
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
    "term": "parity",
    "category": "Interfaces & Protocols",
    "definition": "A simple error-detection bit derived from the number of one bits in transmitted data.",
    "technical": "Parity can be configured so the total count of one bits is even or odd; it detects some single-bit errors but is not a robust integrity code.",
    "aliases": [],
    "weeks": [
      11,
      17,
      18
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pɛɹʌti/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "parity"
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
    "term": "parser",
    "category": "Software & Automation",
    "definition": "Software that interprets structured text or data according to expected rules.",
    "technical": "A parser converts an input byte/string representation into validated fields, tokens, values, or syntax structures for further processing.",
    "aliases": [],
    "weeks": [
      13,
      17,
      21,
      24
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pɑɹsɝ/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "parser"
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
    "term": "peak current",
    "category": "AC & Signals",
    "definition": "The maximum instantaneous magnitude reached by a current waveform.",
    "technical": "Peak current is the greatest absolute instantaneous current value within the specified interval or waveform cycle.",
    "aliases": [],
    "weeks": [
      6
    ],
    "source": "iec",
    "notation": "I_pk",
    "note": "",
    "auto": true,
    "pronunciation": "/pik kɝʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "peak-current"
  },
  {
    "term": "peak-to-peak",
    "category": "AC & Signals",
    "definition": "The difference between a waveform’s maximum positive and minimum negative values.",
    "technical": "Peak-to-peak value equals maximum minus minimum instantaneous value and is commonly used for voltage or current waveforms.",
    "aliases": [
      "peak-to-peak value"
    ],
    "weeks": [
      2,
      3,
      4,
      9
    ],
    "source": "iec",
    "notation": "Vpp / Ipp",
    "note": "",
    "auto": true,
    "pronunciation": "/pik tu pik/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "peak-to-peak"
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
    "term": "periodic signal",
    "category": "AC & Signals",
    "definition": "A signal that repeats the same pattern after a fixed time interval.",
    "technical": "A periodic signal x(t) satisfies x(t+T)=x(t) for period T and has a fundamental frequency f=1/T.",
    "aliases": [],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pɪɹiɑdɪk sɪɡnʌl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "periodic-signal"
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
    "term": "phase angle",
    "category": "AC & Signals",
    "definition": "An angular measure describing a sinusoid’s phase relative to a reference.",
    "technical": "Phase angle is the argument of a sinusoidal quantity or phasor and expresses relative time displacement at a given frequency.",
    "aliases": [],
    "weeks": [
      2,
      6
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/feɪz æŋɡʌl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "phase-angle"
  },
  {
    "term": "phase shift",
    "category": "AC & Signals",
    "definition": "A change in the relative timing or phase between signals of the same frequency.",
    "technical": "Phase shift is the angular displacement between corresponding points of periodic signals and is measured in degrees or radians.",
    "aliases": [],
    "weeks": [
      4,
      6
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/feɪz ʃɪft/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "phase-shift"
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
    "term": "photodiode",
    "category": "Semiconductors",
    "definition": "A diode designed to convert incident light into electrical current.",
    "technical": "A photodiode generates photocurrent proportional to incident optical power and is commonly operated in reverse bias or photovoltaic mode.",
    "aliases": [],
    "weeks": [
      7,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/photodiode/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "photodiode"
  },
  {
    "term": "photoresistor",
    "category": "Components",
    "definition": "A resistive light sensor whose resistance varies with illumination.",
    "technical": "A photoresistor uses photoconductivity so incident photons change carrier concentration and therefore device resistance.",
    "aliases": [
      "photocell"
    ],
    "weeks": [
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/photoresistor/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "photoresistor"
  },
  {
    "term": "phototransistor",
    "category": "Semiconductors",
    "definition": "A transistor whose conduction is controlled by incident light.",
    "technical": "A phototransistor uses photo-generated base drive or equivalent optical control to provide current gain compared with a photodiode.",
    "aliases": [],
    "weeks": [
      19,
      25
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/phototransistor/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "phototransistor"
  },
  {
    "term": "photovoltaic cell",
    "category": "Semiconductors",
    "definition": "A semiconductor device that converts light directly into electrical power.",
    "technical": "A photovoltaic cell operates a photoactive junction so incident photons generate current and terminal voltage without an external bias source.",
    "aliases": [
      "solar cell"
    ],
    "weeks": [
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/foʊtʌvoʊlteɪɪk sɛl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "photovoltaic-cell"
  },
  {
    "term": "pico",
    "category": "Foundations & Units",
    "definition": "The SI prefix meaning one trillionth of the base unit.",
    "technical": "pico, symbol p, represents a factor of 10⁻¹².",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "nist_si",
    "notation": "p = 10⁻¹²",
    "note": "",
    "auto": true,
    "pronunciation": "/pikoʊ/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "pico"
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
    "term": "PN junction",
    "category": "Semiconductors",
    "definition": "The boundary formed where p-type and n-type semiconductor regions meet.",
    "technical": "A PN junction develops a depletion region and built-in electric field; its current-voltage behavior changes strongly with applied forward or reverse bias.",
    "aliases": [
      "P-N junction"
    ],
    "weeks": [
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/PN junction/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "pn-junction"
  },
  {
    "term": "polarity",
    "category": "Foundations & Units",
    "definition": "The identification of opposite electrical directions or terminals, such as positive and negative.",
    "technical": "Polarity specifies the reference orientation of a voltage, current, component, or connection and determines the sign of measured electrical quantities.",
    "aliases": [],
    "weeks": [
      1,
      2,
      3,
      7,
      8,
      9,
      10,
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/poʊlɛɹʌti/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "polarity"
  },
  {
    "term": "polarization",
    "category": "RF & Communications",
    "definition": "The orientation and time behavior of an electromagnetic wave’s electric-field vector.",
    "technical": "RF polarization can be linear, circular, or elliptical and affects coupling between transmitting and receiving antennas.",
    "aliases": [],
    "weeks": [
      19,
      20
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/poʊlɝʌzeɪʃʌn/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "polarization"
  },
  {
    "term": "polling",
    "category": "Embedded Systems",
    "definition": "Repeatedly checking a status condition in software instead of waiting for an interrupt.",
    "technical": "Polling consumes processor execution time to read a flag, register, or device state until an event is detected.",
    "aliases": [],
    "weeks": [
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/poʊlɪŋ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "polling"
  },
  {
    "term": "positive charge",
    "category": "Foundations & Units",
    "definition": "Electric charge having the positive sign convention.",
    "technical": "Positive charge has the same sign as the proton’s elementary charge +e.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pɑzʌtɪv tʃɑɹdʒ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "positive-charge"
  },
  {
    "term": "potentiometer",
    "category": "Components",
    "definition": "A three-terminal variable resistor commonly used as an adjustable voltage divider.",
    "technical": "A potentiometer has a resistive element and movable wiper that selects a fraction of the voltage applied across the element.",
    "aliases": [
      "pot"
    ],
    "weeks": [
      3,
      7
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/potentiometer/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "potentiometer"
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
    "term": "power dissipation",
    "category": "Power Electronics",
    "definition": "The rate at which electrical energy is converted to heat in a component or system.",
    "technical": "Power dissipation is the real power absorbed and converted primarily to heat, often calculated from terminal voltage/current or equivalent loss mechanisms.",
    "aliases": [],
    "weeks": [
      9,
      24
    ],
    "source": "iec",
    "notation": "P_D",
    "note": "",
    "auto": true,
    "pronunciation": "/paʊɝ dɪsɪpeɪʃʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "power-dissipation"
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
    "term": "power-on reset",
    "category": "Embedded Systems",
    "definition": "The reset condition generated when a system powers up.",
    "technical": "Power-on reset holds or resets digital logic until supply conditions are suitable for defined startup behavior.",
    "aliases": [
      "POR"
    ],
    "weeks": [
      16
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/paʊɝ ɑn ɹisɛt/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "power-on-reset"
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
    "term": "prescaler",
    "category": "Embedded Systems",
    "definition": "A divider that reduces an input clock frequency before it reaches another block.",
    "technical": "A prescaler divides a source clock by a programmable or fixed factor and is commonly used with timers, ADCs, and communication peripherals.",
    "aliases": [],
    "weeks": [
      16
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/prescaler/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "prescaler"
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
    "term": "probe compensation",
    "category": "Instruments & Measurement",
    "definition": "Adjustment that matches a passive oscilloscope probe’s capacitance to the oscilloscope input.",
    "technical": "Probe compensation is set so the probe-input RC divider has flat frequency response, usually checked with a calibration square wave.",
    "aliases": [],
    "weeks": [
      3,
      27
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pɹoʊb kɑmpʌnseɪʃʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "probe-compensation"
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
    "term": "propagation delay",
    "category": "Digital Logic",
    "definition": "The time between a change at a circuit input and the corresponding valid change at its output.",
    "technical": "Propagation delay is specified between defined input/output threshold crossings and commonly differs for low-to-high and high-to-low transitions.",
    "aliases": [],
    "weeks": [
      11,
      20,
      25
    ],
    "source": "iec",
    "notation": "t_pd",
    "note": "",
    "auto": true,
    "pronunciation": "/pɹɑpʌɡeɪʃʌn dɪleɪ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "propagation-delay"
  },
  {
    "term": "protective earth",
    "category": "Safety & Workmanship",
    "definition": "A safety connection to earth intended to keep exposed conductive parts from reaching dangerous touch voltage.",
    "technical": "Protective earth provides a low-impedance fault-current path so protective devices can operate and exposed accessible metal remains near earth potential.",
    "aliases": [
      "PE"
    ],
    "weeks": [
      3,
      18
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pɹʌtɛktɪv ɝθ/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "protective-earth"
  },
  {
    "term": "protocol",
    "category": "Interfaces & Protocols",
    "definition": "An agreed set of rules for how communicating devices exchange information.",
    "technical": "A communication protocol defines message/frame format, timing, sequencing, addressing, error handling, and state behavior for interoperable endpoints.",
    "aliases": [],
    "weeks": [
      3,
      13,
      14,
      17,
      18,
      19,
      21,
      22
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pɹoʊtʌkɑl/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "protocol"
  },
  {
    "term": "proton",
    "category": "Foundations & Units",
    "definition": "A positively charged particle found in an atomic nucleus.",
    "technical": "A proton carries charge +e, equal in magnitude and opposite in sign to the electron’s charge.",
    "aliases": [],
    "weeks": [
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pɹoʊtɑn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "proton"
  },
  {
    "term": "PSK",
    "category": "RF & Communications",
    "definition": "Digital modulation where data changes the phase of a carrier among defined states.",
    "technical": "Phase-shift keying maps symbols to discrete carrier phases; BPSK and QPSK are common forms.",
    "aliases": [
      "phase-shift keying"
    ],
    "weeks": [
      20
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/PSK/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "psk"
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
    "term": "pulse",
    "category": "AC & Signals",
    "definition": "A signal excursion of limited duration from one level to another and back.",
    "technical": "A pulse is characterized by amplitude, width, rise time, fall time, repetition rate, and sometimes duty cycle.",
    "aliases": [],
    "weeks": [
      2,
      3,
      4,
      7,
      8,
      9,
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pʌls/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "pulse"
  },
  {
    "term": "pushbutton",
    "category": "Components",
    "definition": "A manually operated momentary switch activated by pressing a button.",
    "technical": "A pushbutton changes contact state while actuated and commonly requires debounce handling in digital interfaces.",
    "aliases": [],
    "weeks": [
      11
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/pushbutton/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "pushbutton"
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
    "term": "QAM",
    "category": "RF & Communications",
    "definition": "Digital modulation that changes both amplitude and phase to represent symbols.",
    "technical": "Quadrature amplitude modulation maps bit groups to complex I/Q constellation points with defined amplitude and phase.",
    "aliases": [
      "quadrature amplitude modulation"
    ],
    "weeks": [
      20
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/QAM/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "qam"
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
    "term": "race condition",
    "category": "Embedded Systems",
    "definition": "A condition where system behavior depends on the relative timing or ordering of events.",
    "technical": "In digital or concurrent systems, a race occurs when multiple state changes or accesses can reach different outcomes depending on timing.",
    "aliases": [],
    "weeks": [
      16,
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹeɪs kʌndɪʃʌn/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "race-condition"
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
    "term": "RC circuit",
    "category": "AC & Signals",
    "definition": "A circuit containing resistance and capacitance.",
    "technical": "An RC network has a first-order time constant τ = RC for its basic charging or discharging response.",
    "aliases": [],
    "weeks": [
      4
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/RC circuit/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "rc-circuit"
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
    "term": "reference ground",
    "category": "Circuit Analysis",
    "definition": "The node designated as the voltage reference for circuit analysis or measurement.",
    "technical": "Reference ground establishes the 0 V potential used for node-voltage definitions and need not be physically connected to earth.",
    "aliases": [],
    "weeks": [
      3
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹɛfɝʌns ɡɹaʊnd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "reference-ground"
  },
  {
    "term": "reference node",
    "category": "Foundations & Units",
    "definition": "The circuit node chosen as the zero-voltage reference for other voltage measurements.",
    "technical": "Circuit analysis assigns a reference node an electric potential of 0 V so all node voltages can be expressed relative to it.",
    "aliases": [],
    "weeks": [
      1,
      2
    ],
    "source": "iec",
    "notation": "0 V",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹɛfɝʌns noʊd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "reference-node"
  },
  {
    "term": "reference voltage",
    "category": "Instruments & Measurement",
    "definition": "A stable known voltage used as a comparison or conversion reference.",
    "technical": "A reference voltage provides a defined potential used by converters, regulators, comparators, or measurement systems to establish scale or threshold.",
    "aliases": [],
    "weeks": [
      3,
      27
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹɛfɝʌns voʊltʌdʒ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "reference-voltage"
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
    "term": "reflection coefficient",
    "category": "RF & Communications",
    "definition": "A measure of how much of a traveling wave is reflected by an impedance discontinuity.",
    "technical": "Reflection coefficient Γ is the complex ratio of reflected to incident wave amplitude and is related to load and characteristic impedance.",
    "aliases": [],
    "weeks": [
      20
    ],
    "source": "fcc",
    "notation": "Γ",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹɪflɛkʃʌn koʊʌfɪʃʌnt/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "reflection-coefficient"
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
    "term": "regression test",
    "category": "Test & Troubleshooting",
    "definition": "A repeated test used to check that a change did not break behavior that previously worked.",
    "technical": "Regression testing re-executes selected established tests after modifications to detect unintended side effects.",
    "aliases": [],
    "weeks": [
      5
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹʌɡɹɛʃʌn tɛst/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "regression-test"
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
    "term": "repeated start",
    "category": "Interfaces & Protocols",
    "definition": "An I²C START condition issued without first releasing the bus with a STOP.",
    "technical": "A repeated START keeps bus control while beginning another address or transfer phase, commonly used for combined write/read transactions.",
    "aliases": [
      "repeated START"
    ],
    "weeks": [
      18,
      17
    ],
    "source": "nxp_i2c",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹɪpitɪd stɑɹt/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "repeated-start"
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
    "term": "retry",
    "category": "Software & Automation",
    "definition": "A controlled repeat attempt after a failed or incomplete operation.",
    "technical": "Retry logic re-attempts an operation according to a defined policy, often with a limit, delay/backoff, and preservation of the original failure evidence.",
    "aliases": [],
    "weeks": [
      17,
      26,
      27
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹitɹaɪ/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "retry"
  },
  {
    "term": "return path",
    "category": "Circuit Analysis",
    "definition": "The conductive route that completes a circuit back toward the source or reference.",
    "technical": "A return path carries the corresponding current needed to satisfy circuit continuity; at high frequency its physical geometry strongly affects impedance and EMI.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹɪtɝn pæθ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "return-path"
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
    "term": "reverse breakdown",
    "category": "Semiconductors",
    "definition": "A reverse-bias condition where junction current increases sharply beyond a characteristic voltage.",
    "technical": "Reverse breakdown occurs when electric field strength causes Zener tunneling or avalanche multiplication, depending on junction structure and voltage.",
    "aliases": [],
    "weeks": [
      7,
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹɪvɝs bɹeɪkdaʊn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "reverse-breakdown"
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
    "term": "RF channel",
    "category": "Foundations & Units",
    "definition": "An assigned or selected frequency range used for one communication path.",
    "technical": "An RF channel occupies a defined portion of spectrum with specified center frequency, bandwidth, spacing, modulation, and regulatory constraints.",
    "aliases": [
      "channel"
    ],
    "weeks": [
      3,
      5,
      6,
      7,
      8,
      18,
      19,
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/RF channel/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "rf-channel"
  },
  {
    "term": "rheostat",
    "category": "Components",
    "definition": "A variable resistor normally used with two terminals to control current.",
    "technical": "A rheostat uses a resistive element and movable contact as an adjustable series resistance.",
    "aliases": [],
    "weeks": [
      3,
      7
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/rheostat/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "rheostat"
  },
  {
    "term": "ring buffer",
    "category": "Interfaces & Protocols",
    "definition": "A fixed-size buffer that wraps around from the end back to the beginning.",
    "technical": "A ring/circular buffer uses read and write indices modulo the buffer size to support streaming producer-consumer data efficiently.",
    "aliases": [
      "circular buffer"
    ],
    "weeks": [
      18,
      17
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹɪŋ bʌfɝ/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "ring-buffer"
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
    "term": "rise time",
    "category": "AC & Signals",
    "definition": "The time a signal takes to transition from a defined low level to a defined high level.",
    "technical": "Rise time is measured between specified percentages of the transition amplitude, commonly 10% and 90%, unless another convention is stated.",
    "aliases": [],
    "weeks": [
      4,
      11,
      18,
      20,
      25,
      30
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹaɪz taɪm/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "rise-time"
  },
  {
    "term": "rising edge",
    "category": "Digital Logic",
    "definition": "A signal transition from a low level to a high level.",
    "technical": "A rising edge is defined between specified voltage thresholds and has finite rise time in physical hardware.",
    "aliases": [],
    "weeks": [
      11,
      18
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹaɪzɪŋ ɛdʒ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "rising-edge"
  },
  {
    "term": "risk",
    "category": "Safety & Workmanship",
    "definition": "The combination of the likelihood of harm and the severity of its consequences.",
    "technical": "Risk assessment evaluates hazards, exposure, probability, and consequence to select appropriate controls.",
    "aliases": [],
    "weeks": [
      1,
      5,
      7,
      9,
      10,
      12,
      13,
      14
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹɪsk/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "risk"
  },
  {
    "term": "RL circuit",
    "category": "AC & Signals",
    "definition": "A circuit containing resistance and inductance.",
    "technical": "An RL network has a first-order time constant τ = L/R for its basic current transient.",
    "aliases": [],
    "weeks": [
      4
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/RL circuit/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "rl-circuit"
  },
  {
    "term": "RLC circuit",
    "category": "AC & Signals",
    "definition": "A circuit containing resistance, inductance, and capacitance.",
    "technical": "An RLC network can exhibit second-order transient behavior and resonance determined by its R, L, and C values.",
    "aliases": [],
    "weeks": [
      2,
      6
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/RLC circuit/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "rlc-circuit"
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
    "term": "roll-off",
    "category": "AC & Signals",
    "definition": "The rate at which a filter’s response decreases beyond a transition or cutoff region.",
    "technical": "Filter roll-off is commonly expressed as decibels per decade or decibels per octave.",
    "aliases": [],
    "weeks": [
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹoʊl ɔf/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "roll-off"
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
    "term": "root-cause analysis",
    "category": "Test & Troubleshooting",
    "definition": "A structured process for identifying the underlying cause that produced a problem rather than only correcting its symptom.",
    "technical": "Root-cause analysis uses evidence and causal reasoning to identify the initiating mechanism or process failure whose correction prevents recurrence.",
    "aliases": [
      "RCA"
    ],
    "weeks": [
      27,
      29
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹut kɑz ʌnælʌsʌs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "root-cause-analysis"
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
    "term": "RTOS",
    "category": "Embedded Systems",
    "definition": "Software that schedules tasks with timing behavior suitable for real-time embedded systems.",
    "technical": "A real-time operating system provides task scheduling, synchronization, timing, and inter-task communication with bounded or predictable timing behavior.",
    "aliases": [
      "real-time operating system"
    ],
    "weeks": [
      16,
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/RTOS/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "rtos"
  },
  {
    "term": "RX",
    "category": "Interfaces & Protocols",
    "definition": "The receive signal or data direction of a communication interface.",
    "technical": "RX identifies the node input used to receive serial data or another incoming signal.",
    "aliases": [
      "receive signal",
      "RX line"
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
    "term": "scheduler",
    "category": "Embedded Systems",
    "definition": "Software that decides which task or thread runs and when.",
    "technical": "A scheduler selects runnable execution contexts according to a policy such as priority, round-robin, deadlines, or time slicing.",
    "aliases": [],
    "weeks": [
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/skɛdʒʊlɝ/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "scheduler"
  },
  {
    "term": "schematic",
    "category": "PCB & Assembly",
    "definition": "A diagram that shows electrical connections and circuit function using standardized symbols.",
    "technical": "A schematic represents logical/electrical connectivity and component relationships without necessarily showing physical placement.",
    "aliases": [
      "schematics",
      "circuit diagram",
      "circuit diagrams"
    ],
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
    "term": "Schottky diode",
    "category": "Semiconductors",
    "definition": "A diode formed with a metal-semiconductor junction, known for low forward voltage and fast switching.",
    "technical": "A Schottky barrier diode uses majority-carrier conduction, typically giving lower forward drop and negligible reverse-recovery storage compared with a PN diode.",
    "aliases": [],
    "weeks": [
      7
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/schottky daɪoʊd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "schottky-diode"
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
    "term": "SCR",
    "category": "Semiconductors",
    "definition": "A four-layer thyristor that latches on after being triggered and remains conducting until current falls below its holding level.",
    "technical": "A silicon-controlled rectifier is a PNPN device with anode, cathode, and gate; a gate pulse initiates regenerative conduction.",
    "aliases": [
      "silicon-controlled rectifier"
    ],
    "weeks": [
      7,
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/SCR/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "scr"
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
    "term": "seconds per division",
    "category": "Instruments & Measurement",
    "definition": "The oscilloscope horizontal time represented by one grid division.",
    "technical": "Seconds/div sets the displayed time scale per horizontal graticule division.",
    "aliases": [
      "time per division",
      "seconds/div"
    ],
    "weeks": [
      3
    ],
    "source": "iec",
    "notation": "s/div",
    "note": "",
    "auto": true,
    "pronunciation": "/sɛkʌndz pɝ dɪvɪʒʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "seconds-per-division"
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
    "term": "sequential logic",
    "category": "Digital Logic",
    "definition": "Digital logic whose outputs depend on stored state as well as current inputs.",
    "technical": "Sequential circuits contain memory elements such as latches or flip-flops and evolve according to input conditions and state transitions.",
    "aliases": [],
    "weeks": [
      11,
      15,
      26
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sʌkwɛnʃʌl lɑdʒɪk/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "sequential-logic"
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
    "term": "serial console",
    "category": "Software & Automation",
    "definition": "A text interface used to communicate with an embedded target over a serial connection.",
    "technical": "A serial console sends and receives character data through a serial port, often for logs, commands, boot messages, and diagnostics.",
    "aliases": [],
    "weeks": [
      27,
      17
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɪɹiʌl kɑnsoʊl/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "serial-console"
  },
  {
    "term": "serial port",
    "category": "Interfaces & Protocols",
    "definition": "A hardware or logical interface that transfers data serially.",
    "technical": "A serial port sends information as a timed sequence of bits using an interface/protocol such as UART or USB serial emulation.",
    "aliases": [],
    "weeks": [
      27
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɪɹiʌl pɔɹt/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "serial-port"
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
    "term": "series resistance",
    "category": "Circuit Analysis",
    "definition": "Resistance contributed by elements connected in the same current path.",
    "technical": "For ideal resistors in series, equivalent resistance is the arithmetic sum of the individual resistances.",
    "aliases": [],
    "weeks": [
      3,
      6
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɪɹiz ɹɪzɪstʌns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "series-resistance"
  },
  {
    "term": "shielding",
    "category": "RF & Communications",
    "definition": "Using conductive or magnetic barriers to reduce unwanted electromagnetic coupling.",
    "technical": "Electromagnetic shielding reflects, absorbs, or redirects fields and currents to reduce emissions or susceptibility.",
    "aliases": [],
    "weeks": [
      18,
      19
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ʃildɪŋ/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "shielding"
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
    "term": "short fault",
    "category": "Test & Troubleshooting",
    "definition": "A fault that creates an unintended low-resistance connection.",
    "technical": "A short fault connects nodes that should be electrically separate and can alter voltages, currents, logic states, or protection behavior.",
    "aliases": [],
    "weeks": [
      27,
      29
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ʃɔɹt fɔlt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "short-fault"
  },
  {
    "term": "short-circuit current",
    "category": "Circuit Analysis",
    "definition": "The current that flows when two points are connected by a very low-resistance path.",
    "technical": "Short-circuit current is limited by source impedance, conductor impedance, protective devices, and other non-ideal circuit impedances.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ʃɔɹt sɝkʌt kɝʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "short-circuit-current"
  },
  {
    "term": "SI prefix",
    "category": "Foundations & Units",
    "definition": "A prefix that scales an SI unit by a power of ten.",
    "technical": "SI prefixes such as kilo, milli, micro, and nano denote standardized decimal factors applied to units.",
    "aliases": [
      "metric prefix"
    ],
    "weeks": [
      1,
      4
    ],
    "source": "nist_si",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/SI prefix/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "si-prefix"
  },
  {
    "term": "SI unit",
    "category": "Foundations & Units",
    "definition": "A measurement unit defined by the International System of Units.",
    "technical": "SI units provide the internationally standardized base and derived units used to express physical quantities such as amperes, volts, ohms, and watts.",
    "aliases": [
      "International System of Units"
    ],
    "weeks": [
      1,
      4
    ],
    "source": "nist_si",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/SI unit/",
    "sourceDetail": {
      "name": "NIST — SI Units: Electric Current and Electrical Derived Units",
      "url": "https://www.nist.gov/pml/owm/si-units-electric-current",
      "note": "U.S. national metrology reference for SI electrical quantities and units."
    },
    "slug": "si-unit"
  },
  {
    "term": "signal",
    "category": "AC & Signals",
    "definition": "A varying physical or electrical quantity that carries information or represents system behavior.",
    "technical": "An electrical signal is a voltage, current, or other measurable quantity whose variation conveys information or represents a stimulus/response.",
    "aliases": [],
    "weeks": [
      1,
      2,
      3,
      4,
      6,
      7,
      8,
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɪɡnʌl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "signal"
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
    "term": "signal tracing",
    "category": "Test & Troubleshooting",
    "definition": "Following a signal through successive circuit stages to find where behavior first becomes incorrect.",
    "technical": "Signal tracing compares expected and measured waveforms/levels at ordered test points to localize the stage containing a fault.",
    "aliases": [],
    "weeks": [
      11,
      13,
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɪɡnʌl tɹeɪsɪŋ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "signal-tracing"
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
    "term": "slew rate",
    "category": "AC & Signals",
    "definition": "The maximum rate at which a circuit output can change.",
    "technical": "Slew rate is the maximum time derivative of output voltage, commonly specified in volts per microsecond for amplifiers.",
    "aliases": [],
    "weeks": [
      10
    ],
    "source": "iec",
    "notation": "V/µs",
    "note": "",
    "auto": true,
    "pronunciation": "/slu ɹeɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "slew-rate"
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
    "term": "software exception",
    "category": "Embedded Systems",
    "definition": "An event that interrupts normal program flow and transfers control to exception-handling logic.",
    "technical": "A software exception may represent an error, fault, trap, interrupt-like condition, or language/runtime event depending on the architecture and environment.",
    "aliases": [
      "exception"
    ],
    "weeks": [
      27
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɔftwɛɹ ɪksɛpʃʌn/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "software-exception"
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
    "term": "solder bridge",
    "category": "PCB & Assembly",
    "definition": "An unintended solder connection between conductors that should remain separate.",
    "technical": "A solder bridge is an assembly defect that can create an electrical short between adjacent pads, leads, or traces.",
    "aliases": [],
    "weeks": [
      1,
      2,
      12
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɑdɝ bɹɪdʒ/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "solder-bridge"
  },
  {
    "term": "solder joint",
    "category": "PCB & Assembly",
    "definition": "The metallurgical connection formed by solder between conductive surfaces.",
    "technical": "A solder joint provides electrical and mechanical connection and is evaluated for wetting, geometry, defects, and workmanship criteria.",
    "aliases": [],
    "weeks": [
      12,
      21,
      29
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɑdɝ dʒɔɪnt/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "solder-joint"
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
    "term": "source current",
    "category": "Semiconductors",
    "definition": "The current flowing through the source terminal of a field-effect transistor.",
    "technical": "In a three-terminal FET, source current balances drain and gate currents according to current continuity and the selected sign convention.",
    "aliases": [],
    "weeks": [
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɔɹs kɝʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "source-current"
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
    "term": "source resistance",
    "category": "Circuit Analysis",
    "definition": "The resistance associated with the source as seen from its output terminals.",
    "technical": "Source resistance models the resistive part of a real source’s output impedance and causes terminal voltage to change with load current.",
    "aliases": [],
    "weeks": [
      2,
      4,
      6
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɔɹs ɹɪzɪstʌns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "source-resistance"
  },
  {
    "term": "speaker",
    "category": "Components",
    "definition": "An electroacoustic transducer that converts an electrical signal into sound.",
    "technical": "A loudspeaker converts electrical input power into mechanical diaphragm motion and acoustic pressure.",
    "aliases": [],
    "weeks": [
      3,
      10,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/spikɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "speaker"
  },
  {
    "term": "specification",
    "category": "Test & Troubleshooting",
    "definition": "A documented requirement or stated characteristic that defines expected limits or behavior.",
    "technical": "An engineering specification provides quantitative or qualitative criteria against which design, component, or test results can be evaluated.",
    "aliases": [],
    "weeks": [
      3,
      7,
      8,
      10,
      13
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/spɛsɪfɪkeɪʃʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "specification"
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
    "term": "SPI mode",
    "category": "Interfaces & Protocols",
    "definition": "One of the clock-polarity and clock-phase combinations used by SPI.",
    "technical": "SPI mode is defined by CPOL and CPHA and determines idle clock level and which clock edges capture or change data.",
    "aliases": [],
    "weeks": [
      18
    ],
    "source": "st",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/SPI mode/",
    "sourceDetail": {
      "name": "STMicroelectronics — STM32 MCU Developer Zone",
      "url": "https://www.st.com/content/st_com/en/stm32-mcu-developer-zone.html",
      "note": "Vendor-authoritative STM32 microcontroller and peripheral documentation."
    },
    "slug": "spi-mode"
  },
  {
    "term": "square wave",
    "category": "AC & Signals",
    "definition": "A periodic waveform that alternates rapidly between two approximately constant levels.",
    "technical": "An ideal square wave has instantaneous transitions and a 50% duty cycle; real square waves have finite rise/fall time and harmonic content.",
    "aliases": [],
    "weeks": [
      3,
      4
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/skwɛɹ weɪv/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "square-wave"
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
    "term": "stack",
    "category": "Embedded Systems",
    "definition": "A last-in, first-out memory structure used for temporary program state.",
    "technical": "On embedded processors the stack commonly stores return addresses, saved registers, local variables, and interrupt context using a stack pointer.",
    "aliases": [],
    "weeks": [
      14,
      18,
      26,
      30
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/stæk/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "stack"
  },
  {
    "term": "standing wave",
    "category": "RF & Communications",
    "definition": "A stationary pattern of voltage/current maxima and minima produced by interfering forward and reflected waves.",
    "technical": "Standing waves occur on a transmission line when reflected energy combines with incident energy due to an impedance mismatch.",
    "aliases": [],
    "weeks": [
      20
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/stændɪŋ weɪv/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "standing-wave"
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
    "term": "start condition",
    "category": "Interfaces & Protocols",
    "definition": "A bus event that marks the beginning of a transaction.",
    "technical": "On I²C, START occurs when SDA transitions from high to low while SCL is high.",
    "aliases": [],
    "weeks": [
      18
    ],
    "source": "nxp_i2c",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/stɑɹt kʌndɪʃʌn/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "start-condition"
  },
  {
    "term": "startup code",
    "category": "Embedded Systems",
    "definition": "Code that runs before the main application to prepare the processor and runtime environment.",
    "technical": "Startup code normally initializes the stack, memory sections, vector table, clocks or runtime support before calling the application entry point.",
    "aliases": [],
    "weeks": [
      14
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/stɑɹtʌp koʊd/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "startup-code"
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
    "term": "stop condition",
    "category": "Interfaces & Protocols",
    "definition": "A bus event that marks the end of a transaction.",
    "technical": "On I²C, STOP occurs when SDA transitions from low to high while SCL is high.",
    "aliases": [],
    "weeks": [
      1,
      3,
      9,
      23,
      24,
      31
    ],
    "source": "nxp_i2c",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/stɑp kʌndɪʃʌn/",
    "sourceDetail": {
      "name": "NXP — UM10204 I²C-bus Specification and User Manual",
      "url": "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
      "note": "Original I²C bus specification maintained by NXP."
    },
    "slug": "stop-condition"
  },
  {
    "term": "substitution test",
    "category": "Test & Troubleshooting",
    "definition": "A troubleshooting test that replaces a suspect part, signal, cable, or subsystem with a known-good equivalent.",
    "technical": "Controlled substitution helps isolate faults by changing one variable while preserving the rest of the setup and verifying whether the symptom follows the substituted item.",
    "aliases": [
      "substitution"
    ],
    "weeks": [
      3,
      4,
      7,
      8,
      13,
      19,
      28,
      29
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sʌbstɪtuʃʌn tɛst/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "substitution-test"
  },
  {
    "term": "superloop",
    "category": "Embedded Systems",
    "definition": "A simple embedded-software structure that repeatedly executes a main loop without an operating-system scheduler.",
    "technical": "A superloop cyclically calls application tasks or state-machine handlers and depends on nonblocking timing to remain responsive.",
    "aliases": [
      "main loop"
    ],
    "weeks": [
      15,
      26
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/superloop/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "superloop"
  },
  {
    "term": "surface mount",
    "category": "PCB & Assembly",
    "definition": "A PCB assembly method where components are mounted directly onto surface pads.",
    "technical": "Surface-mount technology attaches SMD packages to PCB lands using solder paste/reflow or other approved assembly processes.",
    "aliases": [
      "surface-mount"
    ],
    "weeks": [
      12
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɝfʌs maʊnt/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "surface-mount"
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
    "term": "switch",
    "category": "Components",
    "definition": "A device that intentionally opens, closes, or changes an electrical connection.",
    "technical": "A switch changes circuit topology by establishing or interrupting conductive paths between its terminals.",
    "aliases": [],
    "weeks": [
      3,
      7,
      8,
      9,
      11,
      19,
      20
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/swɪtʃ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "switch"
  },
  {
    "term": "switching frequency",
    "category": "Power Electronics",
    "definition": "The rate at which a switching converter or digital power stage repeats its switching cycle.",
    "technical": "Switching frequency sets the energy-transfer cycle rate and influences component size, ripple, switching loss, and electromagnetic interference.",
    "aliases": [],
    "weeks": [
      7,
      9
    ],
    "source": "iec",
    "notation": "f_SW",
    "note": "",
    "auto": true,
    "pronunciation": "/swɪtʃɪŋ fɹikwʌnsi/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "switching-frequency"
  },
  {
    "term": "switching regulator",
    "category": "Power Electronics",
    "definition": "A regulator that controls power by rapidly switching energy-storage elements rather than continuously dissipating excess voltage.",
    "technical": "Switching regulators use controlled duty cycle, inductors/capacitors, and feedback to convert voltage efficiently at a defined switching frequency.",
    "aliases": [],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/swɪtʃɪŋ ɹɛɡjʌleɪtɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "switching-regulator"
  },
  {
    "term": "symptom",
    "category": "Test & Troubleshooting",
    "definition": "An observable indication that a system is not behaving as expected.",
    "technical": "A troubleshooting symptom is measured or observed evidence used to localize a fault; it is not automatically the root cause.",
    "aliases": [],
    "weeks": [
      2,
      3,
      5,
      7,
      9,
      10,
      12,
      13
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɪmptʌm/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "symptom"
  },
  {
    "term": "system clock",
    "category": "Embedded Systems",
    "definition": "The primary timing clock used by a processor or microcontroller system.",
    "technical": "The system clock is selected and divided/multiplied through the clock tree to time the CPU and peripheral domains.",
    "aliases": [],
    "weeks": [
      16
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/sɪstʌm klɑk/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "system-clock"
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
    "term": "TCP",
    "category": "Interfaces & Protocols",
    "definition": "A connection-oriented transport protocol that provides reliable ordered byte delivery over IP networks.",
    "technical": "Transmission Control Protocol uses sequencing, acknowledgements, retransmission, flow control, and congestion control to provide a reliable stream.",
    "aliases": [
      "Transmission Control Protocol"
    ],
    "weeks": [
      17
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/TCP/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "tcp"
  },
  {
    "term": "terminal",
    "category": "Foundations & Units",
    "definition": "A defined connection point where a component, source, or circuit connects to something else.",
    "technical": "A terminal is a conductive connection point through which electrical quantities such as voltage or current are applied, measured, or transferred.",
    "aliases": [],
    "weeks": [
      3,
      7,
      8,
      10,
      12,
      13,
      14,
      17
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɝmʌnʌl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "terminal"
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
    "term": "test case",
    "category": "Test & Troubleshooting",
    "definition": "A specific test scenario with defined inputs, conditions, steps, and expected results.",
    "technical": "A test case is traceable to one or more requirements and includes objective pass/fail criteria.",
    "aliases": [],
    "weeks": [
      23,
      24,
      27,
      28
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɛst keɪs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "test-case"
  },
  {
    "term": "test equipment",
    "category": "Test & Troubleshooting",
    "definition": "Instruments and fixtures used to stimulate, measure, observe, or evaluate a device under test.",
    "technical": "Test equipment includes measurement instruments, sources, loads, analyzers, fixtures, adapters, and support tools with appropriate accuracy and ratings.",
    "aliases": [],
    "weeks": [
      3,
      18,
      28
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɛst ɪkwɪpmʌnt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "test-equipment"
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
    "term": "test lead",
    "category": "Instruments & Measurement",
    "definition": "An insulated wire and probe assembly used to connect a measuring instrument to a circuit.",
    "technical": "Test leads carry the measurement stimulus or sensed quantity between an instrument and test points and must meet the required voltage/current safety rating.",
    "aliases": [],
    "weeks": [
      3,
      27
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɛst lɛd/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "test-lead"
  },
  {
    "term": "test plan",
    "category": "Test & Troubleshooting",
    "definition": "A document describing what will be tested, why, how, and with what acceptance criteria.",
    "technical": "A test plan defines scope, requirements coverage, resources, methods, environments, responsibilities, and reporting strategy.",
    "aliases": [],
    "weeks": [
      19,
      22,
      23,
      28
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɛst plæn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "test-plan"
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
    "term": "test procedure",
    "category": "Test & Troubleshooting",
    "definition": "A documented sequence of steps for performing a test.",
    "technical": "A test procedure defines setup, equipment, stimuli, measurement steps, limits, data recording, safety constraints, and disposition.",
    "aliases": [],
    "weeks": [
      17,
      27,
      28
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɛst pɹʌsidʒɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "test-procedure"
  },
  {
    "term": "test setup",
    "category": "Test & Troubleshooting",
    "definition": "The complete arrangement used to perform a test.",
    "technical": "A test setup includes the DUT, instruments, cabling, fixtures, configuration, environment, software, connections, and reference conditions required for repeatable results.",
    "aliases": [],
    "weeks": [
      6,
      20,
      22,
      23
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɛst sɛtʌp/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "test-setup"
  },
  {
    "term": "thermistor",
    "category": "Components",
    "definition": "A resistor whose resistance changes strongly with temperature.",
    "technical": "A thermistor is a temperature-sensitive resistive device, commonly classified as NTC or PTC according to the sign of its temperature coefficient.",
    "aliases": [],
    "weeks": [
      7
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/thermistor/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "thermistor"
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
    "term": "thread",
    "category": "Embedded Systems",
    "definition": "An independently scheduled sequence of program execution within a process or embedded runtime.",
    "technical": "A thread has its own execution context and stack while sharing address-space resources with other threads in the same system.",
    "aliases": [],
    "weeks": [
      15
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/θɹɛd/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "thread"
  },
  {
    "term": "threshold voltage",
    "category": "Semiconductors",
    "definition": "A voltage level at which a device begins a specified change of state or conduction behavior.",
    "technical": "For a MOSFET, threshold voltage VGS(th) is the gate-source voltage at which a specified small drain current is reached; it is not the recommended fully-on gate voltage.",
    "aliases": [],
    "weeks": [
      7,
      8,
      30
    ],
    "source": "iec",
    "notation": "V_TH",
    "note": "",
    "auto": true,
    "pronunciation": "/θɹɛʃoʊld voʊltʌdʒ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "threshold-voltage"
  },
  {
    "term": "through-hole",
    "category": "PCB & Assembly",
    "definition": "A component or connection style that passes a lead or pin through a hole in the PCB.",
    "technical": "Through-hole technology uses plated or non-plated holes for component leads, connectors, or mechanical/electrical attachment.",
    "aliases": [],
    "weeks": [
      12
    ],
    "source": "ipc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/θɹu hoʊl/",
    "sourceDetail": {
      "name": "IPC Standards — Electronic Assembly and Printed Board Standards",
      "url": "https://www.ipc.org/meet-your-standards",
      "note": "Industry standards for PCB, soldering, rework, and cable/harness workmanship."
    },
    "slug": "through-hole"
  },
  {
    "term": "thyristor",
    "category": "Semiconductors",
    "definition": "A latching semiconductor switch built from multiple PN junctions.",
    "technical": "A thyristor is a four-layer regenerative semiconductor device that transitions to a conducting state when triggered and remains on until current falls below its holding condition.",
    "aliases": [],
    "weeks": [
      8,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/thyristor/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "thyristor"
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
    "term": "time domain",
    "category": "AC & Signals",
    "definition": "A way of viewing a signal as it changes over time.",
    "technical": "Time-domain representation expresses a signal or system response as a function of time.",
    "aliases": [],
    "weeks": [
      3,
      4
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/taɪm doʊmeɪn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "time-domain"
  },
  {
    "term": "timebase",
    "category": "Instruments & Measurement",
    "definition": "The timing system or horizontal time scale of an oscilloscope.",
    "technical": "The oscilloscope timebase controls acquisition timing and horizontal scaling, determining the time represented across the display.",
    "aliases": [],
    "weeks": [
      3
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/timebase/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "timebase"
  },
  {
    "term": "timeout",
    "category": "Software & Automation",
    "definition": "A maximum waiting interval after which software treats an expected event as missing or failed.",
    "technical": "Timeout logic bounds blocking/waiting behavior so communication or hardware failures cannot stall a test or embedded task indefinitely.",
    "aliases": [],
    "weeks": [
      13,
      15,
      17,
      21,
      22,
      25,
      26,
      27
    ],
    "source": "python",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/taɪmaʊt/",
    "sourceDetail": {
      "name": "Python 3 Documentation",
      "url": "https://docs.python.org/3/",
      "note": "Language-authoritative Python terminology."
    },
    "slug": "timeout"
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
    "term": "toolchain",
    "category": "Embedded Systems",
    "definition": "The set of software tools used to build and debug a program for a target system.",
    "technical": "An embedded toolchain commonly includes compiler, assembler, linker, libraries, debugger, binary utilities, and build tools.",
    "aliases": [],
    "weeks": [
      16,
      23
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/toolchain/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "toolchain"
  },
  {
    "term": "total resistance",
    "category": "Circuit Analysis",
    "definition": "The combined resistance presented by a complete path or network.",
    "technical": "Total resistance is the equivalent resistance calculated between the relevant circuit terminals.",
    "aliases": [],
    "weeks": [
      2,
      1
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/toʊtʌl ɹɪzɪstʌns/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "total-resistance"
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
    "term": "transconductance",
    "category": "Semiconductors",
    "definition": "A measure of how strongly an input voltage controls an output current.",
    "technical": "Transconductance gm is the small-signal derivative of output current with respect to controlling input voltage at an operating point.",
    "aliases": [],
    "weeks": [
      10
    ],
    "source": "iec",
    "notation": "gₘ = ∂I/∂V",
    "note": "",
    "auto": true,
    "pronunciation": "/transconductance/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "transconductance"
  },
  {
    "term": "transfer function",
    "category": "AC & Signals",
    "definition": "A mathematical description of how a system transforms an input into an output.",
    "technical": "For a linear time-invariant system, the transfer function is the output-to-input ratio in the complex-frequency domain with stated initial conditions.",
    "aliases": [],
    "weeks": [
      4
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɹænsfɝ fʌŋkʃʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "transfer-function"
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
    "term": "transmission line",
    "category": "RF & Communications",
    "definition": "A conductor structure that carries high-frequency signals where distributed effects matter.",
    "technical": "A transmission line is modeled with distributed inductance and capacitance and has a characteristic impedance, propagation delay, and reflection behavior.",
    "aliases": [],
    "weeks": [
      20
    ],
    "source": "fcc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɹænsmɪʃʌn laɪn/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "transmission-line"
  },
  {
    "term": "tri-state",
    "category": "Digital Logic",
    "definition": "A digital output mode that can drive HIGH, drive LOW, or enter a high-impedance state.",
    "technical": "A tri-state output includes an enable control; when disabled its output impedance becomes high enough to share a bus with other drivers.",
    "aliases": [
      "three-state"
    ],
    "weeks": [
      11,
      15
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɹaɪ steɪt/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "tri-state"
  },
  {
    "term": "triac",
    "category": "Semiconductors",
    "definition": "A bidirectional thyristor used to control AC power.",
    "technical": "A triac can conduct in either direction after triggering and is commonly used for phase control of AC loads.",
    "aliases": [],
    "weeks": [
      7,
      8
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/triac/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "triac"
  },
  {
    "term": "trigger",
    "category": "Instruments & Measurement",
    "definition": "A condition that tells an oscilloscope or acquisition system when to start or align a capture.",
    "technical": "A trigger compares a selected source against level, edge, pulse, protocol, or other conditions to establish a repeatable acquisition time reference.",
    "aliases": [],
    "weeks": [
      1,
      2,
      3,
      4,
      5,
      7,
      8,
      13
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɹɪɡɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "trigger"
  },
  {
    "term": "trigger level",
    "category": "Instruments & Measurement",
    "definition": "The signal level at which an oscilloscope decides to start a triggered acquisition.",
    "technical": "Trigger level is the threshold used with the selected trigger source, slope, and mode to establish repeatable waveform timing.",
    "aliases": [],
    "weeks": [
      3
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/tɹɪɡɝ lɛvʌl/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "trigger-level"
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
      "transmit signal",
      "TX line"
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
    "term": "UDP",
    "category": "Interfaces & Protocols",
    "definition": "A connectionless transport protocol that sends independent datagrams without guaranteeing delivery or ordering.",
    "technical": "User Datagram Protocol adds ports and checksum protection to IP datagrams with minimal transport-layer overhead.",
    "aliases": [
      "User Datagram Protocol"
    ],
    "weeks": [
      18,
      17
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/UDP/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "udp"
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
    "term": "USB",
    "category": "Interfaces & Protocols",
    "definition": "A standardized serial bus used to connect hosts, devices, and peripherals.",
    "technical": "Universal Serial Bus defines electrical signaling, connectors, enumeration, transfer types, device classes, and protocol layers across several speed generations.",
    "aliases": [
      "Universal Serial Bus"
    ],
    "weeks": [
      14,
      17,
      18,
      20,
      23,
      30
    ],
    "source": "nist_csrc",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/USB/",
    "sourceDetail": {
      "name": "NIST CSRC Glossary",
      "url": "https://csrc.nist.gov/glossary",
      "note": "NIST technical terminology for computing, firmware, hardware, and related systems."
    },
    "slug": "usb"
  },
  {
    "term": "UVLO",
    "category": "Power Electronics",
    "definition": "A protection function that prevents operation when supply voltage is too low for reliable behavior.",
    "technical": "Undervoltage lockout disables or resets a circuit below a defined supply threshold and typically uses hysteresis to avoid chatter.",
    "aliases": [
      "undervoltage lockout"
    ],
    "weeks": [
      9
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/UVLO/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "uvlo"
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
    "term": "variable resistor",
    "category": "Components",
    "definition": "A resistor whose resistance can be adjusted.",
    "technical": "A variable resistor provides a mechanically or electronically adjustable resistance for biasing, calibration, level setting, or current control.",
    "aliases": [],
    "weeks": [
      3
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/vɛɹiʌbʌl ɹɪzɪstɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "variable-resistor"
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
    "term": "verification test",
    "category": "Test & Troubleshooting",
    "definition": "A test used to show that an implementation satisfies specified requirements.",
    "technical": "Verification asks whether the system was built according to requirements and design specifications using objective test evidence.",
    "aliases": [],
    "weeks": [
      12,
      28
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/vɛɹʌfʌkeɪʃʌn tɛst/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "verification-test"
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
    "term": "volatile memory",
    "category": "Embedded Systems",
    "definition": "Memory that loses stored information when power is removed.",
    "technical": "Volatile memory such as SRAM requires power to retain state and is commonly used for runtime variables and stacks.",
    "aliases": [],
    "weeks": [
      14
    ],
    "source": "arm",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/vɑlʌtʌl mɛmɝi/",
    "sourceDetail": {
      "name": "Arm Developer Documentation",
      "url": "https://developer.arm.com/documentation",
      "note": "Processor architecture, register, exception, debug, and embedded-system terminology."
    },
    "slug": "volatile-memory"
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
      "electric potential difference",
      "electrical potential difference"
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
    "term": "voltage drop",
    "category": "Circuit Analysis",
    "definition": "A decrease in electric potential across a component in the chosen direction.",
    "technical": "A voltage drop is the signed potential difference across an element as traversed with the selected reference polarity.",
    "aliases": [],
    "weeks": [
      2,
      7,
      8,
      19
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/voʊltʌdʒ dɹɑp/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "voltage-drop"
  },
  {
    "term": "voltage regulator",
    "category": "Power Electronics",
    "definition": "A circuit or device that keeps output voltage near a target value despite changes in input or load.",
    "technical": "A voltage regulator uses feedback or controlled switching/pass elements to maintain output voltage within specified line, load, and temperature limits.",
    "aliases": [],
    "weeks": [
      9,
      24
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/voʊltʌdʒ ɹɛɡjʌleɪtɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "voltage-regulator"
  },
  {
    "term": "voltage source",
    "category": "Foundations & Units",
    "definition": "A source intended to establish a specified voltage between its terminals.",
    "technical": "An ideal voltage source maintains its specified terminal voltage independent of load current; real sources have finite internal impedance.",
    "aliases": [],
    "weeks": [
      1,
      3
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/voʊltʌdʒ sɔɹs/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "voltage-source"
  },
  {
    "term": "voltmeter",
    "category": "Instruments & Measurement",
    "definition": "An instrument used to measure voltage between two points.",
    "technical": "A voltmeter is connected across the measurement points and ideally has very high input impedance so it minimally loads the circuit.",
    "aliases": [],
    "weeks": [
      1,
      2
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/voltmeter/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "voltmeter"
  },
  {
    "term": "volts per division",
    "category": "Instruments & Measurement",
    "definition": "The oscilloscope vertical scale represented by one grid division.",
    "technical": "Volts/div specifies vertical sensitivity; with probe attenuation included, it determines the voltage represented by each vertical graticule division.",
    "aliases": [
      "volts/div"
    ],
    "weeks": [
      3
    ],
    "source": "iec",
    "notation": "V/div",
    "note": "",
    "auto": true,
    "pronunciation": "/voʊlts pɝ dɪvɪʒʌn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "volts-per-division"
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
    "term": "wavelength",
    "category": "RF & Communications",
    "definition": "The physical distance over which a periodic wave repeats one complete cycle.",
    "technical": "Wavelength λ equals propagation velocity divided by frequency: λ = v/f.",
    "aliases": [],
    "weeks": [
      1,
      3,
      4,
      20,
      22,
      30
    ],
    "source": "fcc",
    "notation": "λ",
    "note": "",
    "auto": true,
    "pronunciation": "/weɪvlɛŋθ/",
    "sourceDetail": {
      "name": "FCC — Radio Spectrum and RF Terminology",
      "url": "https://www.fcc.gov/engineering-technology/policy-and-rules-division/general/radio-spectrum-allocation",
      "note": "U.S. communications regulator reference for radio spectrum terminology."
    },
    "slug": "wavelength"
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
    "term": "winding",
    "category": "Components",
    "definition": "A coil of conductive wire arranged to produce or couple magnetic flux.",
    "technical": "Windings are turns of conductor used in transformers, inductors, motors, relays, and other electromagnetic devices.",
    "aliases": [],
    "weeks": [
      6,
      7
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/waɪndɪŋ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "winding"
  },
  {
    "term": "wire",
    "category": "Foundations & Units",
    "definition": "A conductive path used to carry current or connect circuit nodes.",
    "technical": "Electrical wire is a conductor, commonly metal, with geometry and insulation selected for the required current, voltage, environment, and signal behavior.",
    "aliases": [],
    "weeks": [
      1,
      2,
      7,
      11,
      12,
      13,
      16,
      17
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/waɪɝ/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "wire"
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
    "term": "wrist strap",
    "category": "Safety & Workmanship",
    "definition": "A wearable grounding device used to keep a person at the workstation reference potential during ESD-sensitive work.",
    "technical": "An ESD wrist strap connects the wearer through a safety resistor to the common point ground, continuously draining static charge when properly worn and tested.",
    "aliases": [],
    "weeks": [
      1,
      12
    ],
    "source": "osha",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/ɹɪst stɹæp/",
    "sourceDetail": {
      "name": "OSHA — Electrical Glossary and Electrical Safety Definitions",
      "url": "https://www.osha.gov/etools/electric-power/glossary-terms",
      "note": "U.S. occupational electrical-safety terminology."
    },
    "slug": "wrist-strap"
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
    "term": "Zener breakdown",
    "category": "Semiconductors",
    "definition": "Reverse-junction breakdown dominated by quantum tunneling in a strongly doped junction.",
    "technical": "Zener breakdown produces a sharp increase in reverse current at a relatively low reverse voltage and is intentionally used in Zener diodes.",
    "aliases": [],
    "weeks": [
      8,
      10
    ],
    "source": "iec",
    "notation": "",
    "note": "",
    "auto": true,
    "pronunciation": "/zener bɹeɪkdaʊn/",
    "sourceDetail": {
      "name": "IEC Electropedia — International Electrotechnical Vocabulary (IEC 60050)",
      "url": "https://www.electropedia.org/",
      "note": "International electrotechnical terminology maintained by the IEC."
    },
    "slug": "zener-breakdown"
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
