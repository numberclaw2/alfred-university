/* AU-ESET 301 Teaching Media Self-Reliance Upgrade
   Generated 2026-09-17 against main commit 5fea9d5cc4637d5310776d4d2959dfbc5efc2caa.
   Scope: Teaching Media/resource data only.
   This file is a DATA OVERLAY for review. Preferred final integration: merge its Object.assign
   and updateMedia calls into the existing teaching-media-overrides.js before the final C.meta block.
*/
(() => {
  const C = window.ALFRED_CURRICULUM;
  if (!C || !Array.isArray(C.modules)) return;
  C.sources = C.sources || {};
  const updateMedia = (week, media) => {
    const module = C.modules.find(item => Number(item.week) === Number(week));
    if (!module || !module.integration) return;
    module.integration.media = media;
    module.sourceIds = [...new Set([...(module.sourceIds || []), ...media.map(item => item.source)])];
  };

  Object.assign(C.sources, {
    "aacElectricalA": {
      "title": "Electrical Quantities A — Voltage, Current, Resistance, and Charge",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/electrical-quantities-a/"
    },
    "aacElectricalB": {
      "title": "Electrical Quantities B — Ohm’s Law and Electrical Power",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/electrical-quantities-b/"
    },
    "aacTechnicalNotation": {
      "title": "Technical Notation — Engineering Notation and SI Prefixes",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/technical-notation/"
    },
    "aacCurrentPath": {
      "title": "Basic Requirements for Current",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/basic-requirements-for-current/"
    },
    "aacGroundReference": {
      "title": "Ground and Other Reference Points",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/ground-reference-points/"
    },
    "aacSeries1": {
      "title": "Series Circuits — Part 1",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/series-circuits-part-1/"
    },
    "aacSeriesDivider": {
      "title": "Series Circuits — Part 2: Voltage Divider Equation",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/series-circuits-voltage-divider-equation/"
    },
    "aacParallel": {
      "title": "Parallel Circuits",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/parallel-circuits/"
    },
    "aacKclKvl": {
      "title": "Ohm’s Law, Kirchhoff’s Laws, and Power Equations",
      "org": "All About Circuits",
      "kind": "Engineering video tutorial with transcript",
      "url": "https://www.youtube.com/watch?v=ezvZuaVzoys"
    },
    "aacMeterLoading": {
      "title": "Voltmeter Impact on a Measured Circuit",
      "org": "All About Circuits",
      "kind": "Engineering worked tutorial",
      "url": "https://www.allaboutcircuits.com/textbook/direct-current/chpt-8/voltmeter-impact-measured-circuit/"
    },
    "aacTroubleshootOpenShort": {
      "title": "Troubleshooting Open and Shorted Series Circuits",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/troubleshooting-series-circuits/"
    },
    "aacTroubleshootSeries": {
      "title": "Troubleshooting Series Circuits",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/troubleshooting-series-circuits1/"
    },
    "aacTroubleshootParallel": {
      "title": "Troubleshooting Parallel Circuits",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/troubleshooting-parallel-circuits/"
    },
    "aacTroubleshootSeriesParallel": {
      "title": "Troubleshooting Series-Parallel Circuits",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/troubleshooting-series-parallel-circuits/"
    },
    "aacTroubleshootingStrategies": {
      "title": "Troubleshooting Strategies",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/troubleshooting-strategies/"
    },
    "keysightBenchPowerCourse": {
      "title": "Bench Power Supply Basics",
      "org": "Keysight Technologies",
      "kind": "Manufacturer video course",
      "url": "https://www.keysight.com/us/en/learn/course.bench-power-supply-basics.html"
    },
    "keysightBenchCvCc": {
      "title": "Bench Power Supply Basics — Constant Voltage and Constant Current Modes",
      "org": "Keysight Technologies",
      "kind": "Manufacturer video lesson",
      "url": "https://www.keysight.com/zz/en/assets/6123-1426/lessons/0027BenchPowerSupplyBasics004Using6UnderstandingConstantVoltageandConstantCurrentModes.html"
    },
    "tekScopeWebinar": {
      "title": "How to Get the Most Out of Your Oscilloscope",
      "org": "Tektronix",
      "kind": "Manufacturer video webinar",
      "url": "https://www.tek.com/en/video/webinar/how-to-get-the-most-out-of-your-oscilloscope"
    },
    "aacSinusoidalSignals": {
      "title": "Characteristics of Sinusoidal Signals",
      "org": "All About Circuits",
      "kind": "Engineering video tutorial with transcript",
      "url": "https://www.allaboutcircuits.com/video-tutorials/characteristics-of-sinusoidal-signals/"
    },
    "aacCapIndModern": {
      "title": "Capacitors and Capacitance vs. Inductors and Inductance",
      "org": "All About Circuits",
      "kind": "Engineering video tutorial with transcript",
      "url": "https://www.allaboutcircuits.com/video-tutorials/inductance-and-capacitance/"
    },
    "aacRcRl": {
      "title": "RC and RL Circuits",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/rc-and-rl-circuits/"
    },
    "aacRcTime1": {
      "title": "RC Time Constants — Part 1: Pulse Circuit Response",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/rc-time-constants-pulse-circuit-response/"
    },
    "aacRcTime2": {
      "title": "RC Time Constants — Part 2: Circuit Waveforms",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/rc-time-constants-part-2-circuit-waveforms/"
    },
    "aacBinaryConversion": {
      "title": "Binary Conversion — Binary, Decimal, and Hexadecimal",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/binary-conversion-converting-binary-to-decimal/"
    },
    "aacBooleanPostulates": {
      "title": "Boolean Algebra — Postulates and Simplification",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/boolean-algebra-postulates/"
    },
    "aacCombinationalLogic": {
      "title": "Combinational Logic",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/combinational-logic/"
    },
    "aacSequentialLogic": {
      "title": "Sequential Logic",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/sequential-logic/"
    },
    "aacLogicLevels": {
      "title": "Logic Signal Voltage Levels",
      "org": "All About Circuits",
      "kind": "Engineering textbook tutorial",
      "url": "https://www.allaboutcircuits.com/textbook/digital/chpt-3/logic-signal-voltage-levels/"
    },
    "aacCmosGateCircuitry": {
      "title": "CMOS Gate Circuitry",
      "org": "All About Circuits",
      "kind": "Engineering textbook tutorial",
      "url": "https://www.allaboutcircuits.com/textbook/digital/chpt-3/cmos-gate-circuitry/"
    },
    "tiDebounceSwitch": {
      "title": "Debounce a Switch",
      "org": "Texas Instruments",
      "kind": "Manufacturer video",
      "url": "https://www.ti.com/video/5840441551001"
    },
    "chemtronicsSolderWick": {
      "title": "How to Use Chemtronics Soder-Wick",
      "org": "Chemtronics / DigiKey",
      "kind": "Manufacturer rework demonstration",
      "url": "https://www.digikey.com/en/videos/c/chemtronics/how-to-use-chemtronics-soder-wick"
    },
    "tiAudioAmpBasics": {
      "title": "Audio Amplifier Basics",
      "org": "Texas Instruments",
      "kind": "Manufacturer video",
      "url": "https://www.ti.com/video/6287826793001"
    },
    "tiAudioFundamentals": {
      "title": "TI Precision Labs — Audio Fundamentals",
      "org": "Texas Instruments",
      "kind": "Manufacturer video series",
      "url": "https://www.ti.com/video/series/precision-labs/ti-precision-labs-audio-fundamentals.html"
    },
    "foaMediaLectureIndex": {
      "title": "FOA Fiber Optics and Premises Cabling Video Lecture Index",
      "org": "The Fiber Optic Association",
      "kind": "Professional training lecture series",
      "url": "https://www.foa.org/tech/ref/contents.html"
    },
    "foaPremisesGuide": {
      "title": "FOA Premises Cabling Reference and Training",
      "org": "The Fiber Optic Association",
      "kind": "Professional training reference with lecture links and quizzes",
      "url": "https://foa.org/tech/ref/premises/index.html"
    },
    "foaSplicesConnectors": {
      "title": "FOA Lecture 5 — Splices and Connectors",
      "org": "The Fiber Optic Association",
      "kind": "Professional training video",
      "url": "https://www.youtube.com/watch?v=7OBDhx9qzMQ"
    },
    "foaTestingOverview": {
      "title": "FOA Lecture 12 — Fiber Optic Testing Overview",
      "org": "The Fiber Optic Association",
      "kind": "Professional training video",
      "url": "https://www.youtube.com/watch?v=qqc3b4A-B_k"
    },
    "rsRfDefinition": {
      "title": "Definition of RF and Microwaves",
      "org": "Rohde & Schwarz",
      "kind": "Test-equipment manufacturer video",
      "url": "https://www.rohde-schwarz.com/in/knowledge-center/videos/definition-of-rf-and-microwaves_251220-1388948.html"
    },
    "aacTransmissionLine": {
      "title": "What Is a Transmission Line?",
      "org": "All About Circuits",
      "kind": "Engineering RF textbook tutorial",
      "url": "https://www.allaboutcircuits.com/textbook/radio-frequency-analysis-design/real-life-rf-signals/what-is-a-transmission-line/"
    },
    "rsSpectrumBasics": {
      "title": "Understanding Basic Spectrum Analyzer Operation",
      "org": "Rohde & Schwarz",
      "kind": "Test-equipment manufacturer video",
      "url": "https://www.rohde-schwarz.com/us/knowledge-center/videos/understanding-basic-spectrum-analyzer-operation_251220-1513228.html"
    },
    "rsOccupiedBandwidth": {
      "title": "Understanding Occupied Bandwidth",
      "org": "Rohde & Schwarz",
      "kind": "Test-equipment manufacturer video",
      "url": "https://www.rohde-schwarz.com/us/knowledge-center/videos/understanding-occupied-bandwidth_251220-1614804.html"
    },
    "ucsdStudyVideos": {
      "title": "Effective Study Techniques Videos — Spaced, Retrieval, and Interleaved Practice",
      "org": "University of California San Diego Department of Psychology",
      "kind": "University instructional video series",
      "url": "https://psychology.ucsd.edu/undergraduate-program/undergraduate-resources/academic-writing-resources/effective-studying/effective-studying-videos.html"
    },
    "ucsdRetrieval": {
      "title": "Retrieval Practice",
      "org": "University of California San Diego Department of Psychology",
      "kind": "University evidence-based learning guide with how-to video",
      "url": "https://psychology.ucsd.edu/undergraduate-program/undergraduate-resources/academic-writing-resources/effective-studying/retrieval-practice.html"
    },
    "mitRequirements": {
      "title": "Session 2 — Requirements Definition",
      "org": "MIT OpenCourseWare",
      "kind": "University systems-engineering video lecture with transcript",
      "url": "https://ocw.mit.edu/courses/16-842-fundamentals-of-systems-engineering-fall-2015/resources/session-2-requirements-definition/"
    },
    "mitVerification": {
      "title": "Session 9 — Verification and Validation",
      "org": "MIT OpenCourseWare",
      "kind": "University systems-engineering video lecture with transcript",
      "url": "https://ocw.mit.edu/courses/16-842-fundamentals-of-systems-engineering-fall-2015/resources/session-9-verification-and-validation/"
    },
    "nasaRequirementAppendix": {
      "title": "NASA Systems Engineering Handbook Appendix — How to Write a Good Requirement",
      "org": "NASA",
      "kind": "Government engineering reference",
      "url": "https://www.nasa.gov/reference/system-engineering-handbook-appendix/"
    },
    "stBootStartup": {
      "title": "STM32 Boot and Startup Tips MOOC",
      "org": "STMicroelectronics",
      "kind": "Manufacturer MOOC",
      "url": "https://www.st.com/content/st_com/en/support/learning/stm32-moocs/STM32_boot_startup_MOOC.html"
    },
    "tiBoardTroubleshooting": {
      "title": "Board Level Troubleshooting",
      "org": "Texas Instruments",
      "kind": "Manufacturer troubleshooting video",
      "url": "https://www.ti.com/video/5971802514001"
    },
    "armDebuggingAdventures": {
      "title": "Adventures in Debugging",
      "org": "Arm",
      "kind": "Processor-vendor debugging video/tutorial",
      "url": "https://developer.arm.com/additional-resources/video-tutorials/devhub/adventures-in-debugging"
    },
    "stOnlineTrainingCurrent": {
      "title": "STM32 Online Training",
      "org": "STMicroelectronics",
      "kind": "Current manufacturer technical training",
      "url": "https://www.st.com/content/st_com/en/support/learning/stm32-online-training.html"
    },
    "stWatchdogGuide": {
      "title": "Getting Started with STM32 Watchdogs",
      "org": "STMicroelectronics",
      "kind": "Manufacturer technical tutorial",
      "url": "https://wiki.st.com/stm32mcu/wiki/Getting_started_with_WDG"
    },
    "tiCrashDebugging": {
      "title": "Diagnose and Debug Embedded Software Program Crashes",
      "org": "Texas Instruments",
      "kind": "Manufacturer video with demonstrations",
      "url": "https://www.ti.com/video/6142095761001"
    },
    "umichResumeBullets": {
      "title": "Resume Resources — Write Higher Quality Bullet Points",
      "org": "University of Michigan Career Center",
      "kind": "University career instruction with video",
      "url": "https://careercenter.umich.edu/article/resume-resources"
    },
    "gatechResumeGuide": {
      "title": "Georgia Tech Career Center Resume Guide",
      "org": "Georgia Institute of Technology Career Center",
      "kind": "University career guide",
      "url": "https://career.gatech.edu/files/2024/02/Career_Center_Resume_Guide-645d43267633e4df.pdf"
    },
    "pennStarVideo": {
      "title": "Interviewing — The S.T.A.R. Method",
      "org": "University of Pennsylvania Career Services",
      "kind": "University career video with transcript",
      "url": "https://careerservices.upenn.edu/videos/interviewing-the-s-t-a-r-method/"
    },
    "pennSearchWorkshop": {
      "title": "Resume, Interview and Search Strategy Workshop",
      "org": "University of Pennsylvania Career Services",
      "kind": "University career workshop video",
      "url": "https://careerservices.upenn.edu/videos/livestream-prep-workshop-resume-interview-and-search-strategy/"
    },
    "umichJobSearch": {
      "title": "Search for Jobs or Internships — Strategy and Tracking",
      "org": "University of Michigan Career Center",
      "kind": "University job-search instruction",
      "url": "https://careercenter.umich.edu/content/start-your-job-or-internship-search"
    },
    "umichInterviewing": {
      "title": "Interviewing Resources",
      "org": "University of Michigan Career Center",
      "kind": "University interview instruction",
      "url": "https://careercenter.umich.edu/content/interviewing-resources"
    }
  });

  updateMedia(1, [
    {
      "source": "aacElectricalA",
      "role": "Required · Teaching lecture",
      "use": "Build the physical meaning of charge, voltage, current and resistance before using formulas.",
      "watchFor": "Explain each quantity, its unit, and whether it is measured across or through a circuit element.",
      "gap": "Equations and power follow in the next lecture.",
      "verifiedEvidence": "Transcript inspected: definitions of charge/coulombs, voltage, current/amperes, resistance, electron/conventional-current language."
    },
    {
      "source": "aacElectricalB",
      "role": "Required · Teaching lecture",
      "use": "Learn Ohm’s law as a relationship and electrical power as energy-rate/rating evidence; work the examples.",
      "watchFor": "Predict direct/inverse relationships before calculating; rearrange V=IR and verify P=VI, I²R and V²/R with units.",
      "gap": "Notation/prefix fluency is separated so formula work is not derailed by unit conversion.",
      "verifiedEvidence": "Transcript inspected: all Ohm and power forms, proportionality and worked circuit examples."
    },
    {
      "source": "aacTechnicalNotation",
      "role": "Required · Teaching lecture",
      "use": "Learn scientific/engineering notation and SI prefixes used throughout electronics.",
      "watchFor": "Convert base units ↔ milli/micro/nano/pico/kilo/mega/giga without losing powers of ten.",
      "gap": "NIST SI already in the module remains the authoritative convention check.",
      "verifiedEvidence": "Transcript inspected: engineering notation, powers of ten, prefix substitutions and conversion exercises."
    },
    {
      "source": "aacCurrentPath",
      "role": "Required · Teaching lecture",
      "use": "Connect the electrical quantities to an actual source, load and complete return path.",
      "watchFor": "Predict current before calculation and explain why an open path produces zero current.",
      "gap": "Ground/reference and polarity follow next.",
      "verifiedEvidence": "Transcript inspected: EMF/source, sustained-current requirements, open circuits and current direction."
    },
    {
      "source": "aacGroundReference",
      "role": "Required · Teaching lecture",
      "use": "Establish circuit reference/ground and polarity before DMM work.",
      "watchFor": "Predict positive/negative meter readings from probe order and chosen reference.",
      "gap": "Protective-earth and scope-ground hazards are reinforced in Week 3.",
      "verifiedEvidence": "Transcript inspected: reference nodes, common return, alternate references and negative readings."
    },
    {
      "source": "flukeSafety",
      "role": "Required · Safety instruction",
      "use": "Complete the electrical measurement-safety material before physical meter work.",
      "watchFor": "Separate shock/arc/tool-rating/PPE/lead-condition hazards and know stop/de-energize conditions.",
      "gap": "Course remains approved low-voltage work only.",
      "verifiedEvidence": "Current Fluke safety objectives cross-checked: shock/electrocution, arc hazards, PPE, standards/ratings, inspection and safer measurement practices."
    },
    {
      "source": "phetDC",
      "role": "Virtual route · Application",
      "use": "Rehearse source/load loops, opens, shorts and meter placement only after prediction.",
      "watchFor": "Use the simulation to test a written prediction rather than discover the rule by clicking.",
      "gap": "Does not establish physical probe handling.",
      "verifiedEvidence": "Retained as application media; not counted as primary explanation."
    }
  ]);

  updateMedia(2, [
    {
      "source": "aacSeries1",
      "role": "Required · Teaching lecture",
      "use": "Learn series topology, shared current, total resistance, voltage drops and power.",
      "watchFor": "Identify the single current path before doing arithmetic.",
      "gap": "Divider ratio follows in Part 2.",
      "verifiedEvidence": "Transcript inspected: series definition and current/resistance/voltage/power relationships."
    },
    {
      "source": "aacSeriesDivider",
      "role": "Required · Teaching lecture",
      "use": "Derive and apply the voltage-divider relationship.",
      "watchFor": "Derive from series current rather than memorizing an isolated ratio.",
      "gap": "Ideal/unloaded case only; meter/load effect follows below.",
      "verifiedEvidence": "Transcript inspected: divider derivation and worked resistor voltage drops."
    },
    {
      "source": "aacParallel",
      "role": "Required · Teaching lecture",
      "use": "Learn parallel topology, common voltage, branch currents, equivalent resistance and power.",
      "watchFor": "Use node identity rather than drawing shape to decide what is parallel.",
      "gap": "KCL/KVL are made explicit next.",
      "verifiedEvidence": "Transcript inspected: parallel definition and worked voltage/current/resistance/power relationships."
    },
    {
      "source": "aacKclKvl",
      "role": "Required · Teaching tutorial",
      "use": "Use conservation to generalize series/parallel reasoning to arbitrary nodes and loops.",
      "watchFor": "Write signed KCL/KVL equations before substituting numbers.",
      "gap": "Technician fault-isolation application follows.",
      "verifiedEvidence": "Transcript inspected: KCL, KVL, Ohm’s law, power and worked unknown-current/voltage examples."
    },
    {
      "source": "aacMeterLoading",
      "role": "Required · Worked tutorial",
      "use": "Study a quantitative loaded-divider example immediately after the ideal divider.",
      "watchFor": "Replace the loaded leg with the correct parallel equivalent and recalculate Vout.",
      "gap": "Lab provides additional load cases.",
      "verifiedEvidence": "Current tutorial inspected: explicitly compares divider behavior before/after a 10 MΩ voltmeter load."
    },
    {
      "source": "aacTroubleshootSeriesParallel",
      "role": "Required · Technician application",
      "use": "Use expected node values to select measurements that discriminate fault hypotheses.",
      "watchFor": "Write expected values first; measure only where the result shrinks the fault space.",
      "gap": "Week 5 broadens troubleshooting methods.",
      "verifiedEvidence": "Transcript inspected: mixed-network fault localization using expected vs measured voltages."
    },
    {
      "source": "phetDC",
      "role": "Virtual route · Application",
      "use": "Build the analyzed network and compare simulated node/branch values to calculations.",
      "watchFor": "Change one fault at a time and preserve before/after evidence.",
      "gap": "Physical wiring/probe skill still requires physical work.",
      "verifiedEvidence": "Retained as application media."
    }
  ]);

  updateMedia(3, [
    {
      "source": "flukeMultimeterGuide",
      "role": "Required · DMM instruction",
      "use": "Use the manufacturer guide/video for jacks, modes and voltage/resistance/continuity/frequency/diode/capacitance workflow.",
      "watchFor": "For every mode, state energized/de-energized condition, jack choice and series/parallel placement.",
      "gap": "Current-mode work remains restricted to the course’s low-voltage procedure.",
      "verifiedEvidence": "Current Fluke guide inspected; includes step-by-step functions and explicit current-jack short-circuit warning."
    },
    {
      "source": "keysightBenchPowerCourse",
      "role": "Required · Bench-supply video course",
      "use": "Complete Lessons 1–5: voltage/current/regulation, core specs, linear vs switching, CV/CC and readback.",
      "watchFor": "Set voltage/current limit deliberately and predict whether the load should place the supply in CV or CC.",
      "gap": "Remote sense/multi-output material can wait until a project needs it.",
      "verifiedEvidence": "Current Keysight course page lists 16 demonstrations and explicitly identifies these first five topics."
    },
    {
      "source": "keysightBenchCvCc",
      "role": "Required · Focused manufacturer video",
      "use": "Use the dedicated CV/CC demonstration to understand the supply’s two interacting limits.",
      "watchFor": "Explain why the supply changes mode and what that means about the load.",
      "gap": "Make the mode change observable in LAB-003 or its simulation route.",
      "verifiedEvidence": "Keysight lesson description explicitly teaches CV/CC operation and use cases."
    },
    {
      "source": "tekScopeWebinar",
      "role": "Required · Oscilloscope video instruction",
      "use": "Learn manual vertical, horizontal/acquisition and trigger controls plus common probing problems.",
      "watchFor": "Set volts/div, time/div, coupling/reference and trigger from an expected signal instead of relying on Autoset.",
      "gap": "Probe compensation/grounding is reinforced by the existing Tek primer.",
      "verifiedEvidence": "Tektronix page inspected: 46-minute applications-engineer session covering the listed controls and probing problems."
    },
    {
      "source": "tekScopeSetup",
      "role": "Required · Manufacturer tutorial",
      "use": "Use the setup chapters for grounding, probe connection/compensation and basic voltage/time measurements.",
      "watchFor": "Treat probe ground as an electrical connection; verify attenuation/compensation and preserve settings.",
      "gap": "The practical lab supplies the actual capture requirement.",
      "verifiedEvidence": "Current Tektronix primer cross-checked for controls, grounding, calibration, probe connection/compensation and measurement technique."
    }
  ]);

  updateMedia(4, [
    {
      "source": "aacSinusoidalSignals",
      "role": "Required · Teaching tutorial",
      "use": "Learn amplitude, period/frequency, phase, cycles and sine/cosine waveform representation.",
      "watchFor": "Label units, reference, amplitude convention, period, frequency and phase before interpretation.",
      "gap": "Storage-component dynamics follow next.",
      "verifiedEvidence": "Transcript inspected: amplitude, frequency, phase, angular frequency and time-domain equations."
    },
    {
      "source": "aacCapIndModern",
      "role": "Required · Teaching tutorial",
      "use": "Compare capacitor electric-field storage with inductor magnetic-field storage and their time behavior.",
      "watchFor": "State the continuity rule correctly: ideal capacitor voltage and ideal inductor current cannot change instantaneously.",
      "gap": "Reactance/phase and detailed RC response follow.",
      "verifiedEvidence": "Tutorial inspected: capacitor/inductor storage, charging/current-voltage behavior and RC/RL time constants."
    },
    {
      "source": "aacRcRl",
      "role": "Required · Teaching lecture",
      "use": "Connect R/C/L behavior to sinusoidal steady state, reactance, impedance and phase.",
      "watchFor": "Draw/interpret phase relationships; do not add out-of-phase magnitudes as ordinary scalars.",
      "gap": "Week 6 carries deeper RLC/resonance work.",
      "verifiedEvidence": "Transcript inspected: RC/RL, reactance, impedance, phase and phasor reasoning."
    },
    {
      "source": "aacRcTime1",
      "role": "Required · Teaching lecture",
      "use": "Calculate tau and predict RC charging/discharging before seeing a waveform.",
      "watchFor": "Predict one-tau ~63%, current decay, discharge polarity and ~five-tau settling.",
      "gap": "Part 2 connects tau to repetitive waveforms.",
      "verifiedEvidence": "Transcript inspected: tau=RC, exponential response, current decay and five-time-constant convention."
    },
    {
      "source": "aacRcTime2",
      "role": "Required · Teaching lecture",
      "use": "Compare short/moderate/long time constants against pulse duration and filter/time-delay behavior.",
      "watchFor": "Explain waveform shape from available charge/discharge time, not picture recognition.",
      "gap": "Lab supplies quantitative measured/simulated evidence.",
      "verifiedEvidence": "Transcript inspected: pulse/time-constant cases and filtering/time-delay applications."
    },
    {
      "source": "adiLtspice",
      "role": "Virtual route · Application",
      "use": "Reproduce the RC transient and frequency response after written predictions.",
      "watchFor": "Compare simulated 63% point and response trend to calculations.",
      "gap": "Simulation does not establish physical scope skill.",
      "verifiedEvidence": "Retained as application media after explanatory instruction."
    }
  ]);

  updateMedia(5, [
    {
      "source": "aacTroubleshootOpenShort",
      "role": "Required · Teaching lecture",
      "use": "Start with canonical open/short fault signatures.",
      "watchFor": "Predict which voltages/currents change before measuring.",
      "gap": "Drift and mixed networks follow.",
      "verifiedEvidence": "Transcript inspected: diagnosis definition, open/short effects and repair decision process."
    },
    {
      "source": "aacTroubleshootSeries",
      "role": "Required · Teaching lecture",
      "use": "Extend troubleshooting to increased/decreased component resistance.",
      "watchFor": "Recognize near-open/near-short behavior from voltage patterns.",
      "gap": "Parallel/mixed topology changes signatures.",
      "verifiedEvidence": "Transcript inspected: tolerance/aging plus open/short/increased/decreased resistance measurement signatures."
    },
    {
      "source": "aacTroubleshootParallel",
      "role": "Required · Teaching lecture",
      "use": "Learn branch-fault behavior and efficient measurement selection.",
      "watchFor": "Know the expected-good reading, minimize measurements and choose the best instrument.",
      "gap": "Series-parallel integration follows.",
      "verifiedEvidence": "Transcript inspected: those three rules plus parallel-circuit diagnostic demonstrations."
    },
    {
      "source": "aacTroubleshootSeriesParallel",
      "role": "Required · Teaching lecture",
      "use": "Apply expected-value diagnosis to a mixed network.",
      "watchFor": "Choose test points because they split hypotheses.",
      "gap": "General strategy follows.",
      "verifiedEvidence": "Transcript inspected: stepwise series-parallel fault isolation from expected vs measured values."
    },
    {
      "source": "aacTroubleshootingStrategies",
      "role": "Required · Teaching lecture",
      "use": "Generalize to history/observation, in-circuit limitations, substitution, signal tracing/injection and split-half diagnosis.",
      "watchFor": "For each method, state what evidence confirms/rejects a hypothesis and what could mislead it.",
      "gap": "Week 13 later applies these methods to larger systems.",
      "verifiedEvidence": "Transcript inspected: logbooks/history, in-circuit testing, substitution, tracing/injection and divide-and-conquer."
    },
    {
      "source": "etaFormula",
      "role": "Required · Post-retrieval reference",
      "use": "Use only after a closed-note formula brain dump, then solve a changed example.",
      "watchFor": "Do not convert mastery into recognition by reading the sheet first.",
      "gap": "Reference only; teaching is supplied above.",
      "verifiedEvidence": "Official ETA formula reference retained for verification."
    },
    {
      "source": "mitLabs",
      "role": "Reference · Evidence model",
      "use": "Compare how university labs separate prediction, procedure, observation and interpretation.",
      "watchFor": "Identify what makes a result reproducible and defensible.",
      "gap": "LAB-005 remains the controlling hands-on gate.",
      "verifiedEvidence": "Retained as evidence-model reference."
    }
  ]);

  updateMedia(11, [
    {
      "source": "aacBinaryConversion",
      "role": "Required · Teaching lecture",
      "use": "Build fluency converting binary ↔ decimal and binary ↔ hexadecimal.",
      "watchFor": "Work conversions without a calculator first and explain positional weights.",
      "gap": "Signed arithmetic/advanced coding is outside this module’s required depth.",
      "verifiedEvidence": "Transcript inspected: binary→decimal, decimal→binary, binary↔hex and worked examples."
    },
    {
      "source": "aacBooleanPostulates",
      "role": "Required · Teaching lecture",
      "use": "Learn Boolean operators/identities and simplify logic expressions into gate realizations.",
      "watchFor": "Translate every symbolic step back into a gate-level change.",
      "gap": "Truth tables/combinational behavior follow.",
      "verifiedEvidence": "Transcript inspected: Boolean postulates, De Morgan-style transformations, reduction and gate realization."
    },
    {
      "source": "aacCombinationalLogic",
      "role": "Required · Teaching lecture",
      "use": "Learn combinational logic as output determined by present inputs; connect equations/truth tables/gates.",
      "watchFor": "Complete truth tables before viewing the solution.",
      "gap": "Sequential state follows next.",
      "verifiedEvidence": "Transcript/page inspected as the course’s combinational-logic lecture."
    },
    {
      "source": "aacSequentialLogic",
      "role": "Required · Teaching lecture",
      "use": "Learn how latches/flip-flops and clocking create state/memory.",
      "watchFor": "Track state across input/clock events rather than treating outputs as purely combinational.",
      "gap": "Physical input quality is handled by the voltage/pull/debounce resources below.",
      "verifiedEvidence": "Transcript/page inspected: sequential-state and flip-flop behavior."
    },
    {
      "source": "aacLogicLevels",
      "role": "Required · Real-hardware reading",
      "use": "Learn that logic 0/1 are guaranteed voltage ranges with an indeterminate region and family-specific thresholds.",
      "watchFor": "Use datasheet VIH/VIL/VOH/VOL rather than assuming ‘0 V/5 V’.",
      "gap": "Device datasheet remains authoritative for the exact MCU/logic family.",
      "verifiedEvidence": "Current AAC tutorial inspected: logic ranges, uncertain region and TTL/CMOS compatibility issues."
    },
    {
      "source": "aacCmosGateCircuitry",
      "role": "Required · Real-hardware reading",
      "use": "Learn why CMOS inputs must not float and how pull-up/pull-down resistors establish a default state.",
      "watchFor": "Predict the state of an unconnected input and choose a pull direction intentionally.",
      "gap": "Switch bounce is addressed next.",
      "verifiedEvidence": "Current AAC CMOS tutorial inspected: floating-input warning and input behavior."
    },
    {
      "source": "tiDebounceSwitch",
      "role": "Required · Manufacturer video",
      "use": "See why a mechanical switch creates multiple transitions and how RC + Schmitt-trigger debounce changes the waveform.",
      "watchFor": "Relate bounce time to the unwanted digital events and explain hysteresis’ role.",
      "gap": "Firmware debounce may be compared in the lab but is not a substitute for understanding the physical signal.",
      "verifiedEvidence": "TI video transcript inspected: bounce, repeated triggers, RC shaping, slow edges and Schmitt hysteresis."
    },
    {
      "source": "saleaeDigitalSignals",
      "role": "Required · Logic-analyzer application",
      "use": "Capture a real or simulated digital transition/bounce event with deliberate threshold/sample-rate/channel settings.",
      "watchFor": "Correlate raw edges with decoded/logical events; do not rely only on a screenshot.",
      "gap": "The analyzer demonstrates measurement; it does not replace logic theory.",
      "verifiedEvidence": "Existing Saleae STM32 digital-signals tutorial retained for instrument application."
    }
  ]);

  updateMedia(12, [
    {
      "source": "nasaESD",
      "role": "Required · ESD instruction/reference",
      "use": "Learn protected-work-area, packaging, grounding and personnel-control concepts before physical semiconductor work.",
      "watchFor": "Keep ESD device protection distinct from shock/energy safety.",
      "gap": "Alfred’s low-voltage safety boundary still controls the lab.",
      "verifiedEvidence": "NASA ESD material retained as authoritative workmanship/safety reference."
    },
    {
      "source": "digiKeySoldering",
      "role": "Required · Soldering demonstration",
      "use": "Watch heat-both-surfaces, solder flow/wetting and undisturbed cooling before the workmanship task.",
      "watchFor": "Identify where heat and solder are applied and what acceptable wetting looks like.",
      "gap": "Acceptance criteria still come from the course/NASA workmanship references.",
      "verifiedEvidence": "DigiKey video page inspected; explicitly demonstrates proper heating, flow and wetting."
    },
    {
      "source": "adafruitSolderProblems",
      "role": "Required · Defect recognition",
      "use": "Practice accept/rework/escalate decisions from visible joint defects.",
      "watchFor": "Identify cold/disturbed/overheated joints, poor wetting, bridges, excess/insufficient solder and lifted pads.",
      "gap": "Not an IPC/NASA certification substitute.",
      "verifiedEvidence": "Existing defect gallery retained for practical recognition."
    },
    {
      "source": "chemtronicsSolderWick",
      "role": "Required · Rework demonstration",
      "use": "Learn controlled solder removal with braid before attempting low-risk rework.",
      "watchFor": "Heat the braid/joint together, minimize dwell, remove iron and braid together, and stop before pad/board damage.",
      "gap": "Hot-air/BGA rework is outside the required beginner route.",
      "verifiedEvidence": "Manufacturer/DigiKey video plus Chemtronics instructions cross-checked for wick selection, heat transfer and pad-damage control."
    },
    {
      "source": "nasaHarness",
      "role": "Path-specific · Workmanship reference",
      "use": "Use when the task includes wire, terminal, crimp, cable or harness inspection.",
      "watchFor": "State objective accept/rework/escalate evidence.",
      "gap": "Not a solder-technique tutorial.",
      "verifiedEvidence": "Retained for workmanship criteria only."
    },
    {
      "source": "githubSkills",
      "role": "Required · Version-control instruction",
      "use": "Complete the repository/status/add/commit/history workflow if Git is new.",
      "watchFor": "Keep secrets out of the repo and connect each physical change to a traceable record.",
      "gap": "Physical verification still requires before/after evidence and retest.",
      "verifiedEvidence": "Existing GitHub Skills source retained for the software/documentation change trail."
    }
  ]);

  updateMedia(19, [
    {
      "source": "tiAudioAmpBasics",
      "role": "Required · Audio teaching video",
      "use": "Build the audio source→amplifier→load model and learn core amplifier classes/specification language.",
      "watchFor": "Trace where gain, clipping, bandwidth/noise and load interaction can create symptoms.",
      "gap": "Detailed measurement metrics are reinforced by the Precision Labs series.",
      "verifiedEvidence": "TI video inspected: amplifier purpose, transistor/amplifier fundamentals, specifications and Class A/B/AB/D."
    },
    {
      "source": "tiAudioFundamentals",
      "role": "Required · Audio manufacturer series",
      "use": "Use the relevant fundamentals lessons for amplifier specifications, signal path, converter/interface context and measurement vocabulary.",
      "watchFor": "Connect each spec to what could be measured at a test point instead of memorizing labels.",
      "gap": "Only the modules mapped to this week are required.",
      "verifiedEvidence": "Current TI Precision Labs audio series inspected; it provides a six-video fundamentals sequence."
    },
    {
      "source": "foaPremisesGuide",
      "role": "Required · Copper/coax/media sequence",
      "use": "Use the FOA premises-cabling lectures on cable types, UTP installation/termination/testing and coax before the physical cable task.",
      "watchFor": "Choose media/termination from signal, distance/environment and failure mode; distinguish continuity/wiremap from signal-quality evidence.",
      "gap": "Fiber is handled by the companion FOA fiber sequence below.",
      "verifiedEvidence": "FOA current reference links the coherent premises-cabling lecture series, hands-on UTP termination/testing videos and quizzes."
    },
    {
      "source": "foaMediaLectureIndex",
      "role": "Required · Fiber teaching sequence",
      "use": "Complete the mapped FOA lectures: 1 communications, 2 safety, 3 fiber, 4 cables, 5/7 splices/connectors, 12 testing overview, 14 optical power and 16 insertion loss.",
      "watchFor": "Trace source→fiber/path→receiver; explain loss, connector/bend effects, eye safety and why test method depends on the fault question.",
      "gap": "Advanced OTDR design/long-haul topics remain optional unless the lab calls for them.",
      "verifiedEvidence": "FOA current lecture index inspected; it enumerates the full lecture sequence and hands-on demonstrations."
    },
    {
      "source": "foaSplicesConnectors",
      "role": "Required · Fiber termination video",
      "use": "Learn where splices/connectors are used and how termination becomes part of link loss/reliability.",
      "watchFor": "Treat connector condition/cleanliness and mating as electrical/optical evidence, not cosmetic appearance.",
      "gap": "Hands-on termination is still governed by the lab route.",
      "verifiedEvidence": "FOA Lecture 5 description inspected: splices vs connectors, termination and applications."
    },
    {
      "source": "foaTestingOverview",
      "role": "Required · Fiber test video",
      "use": "Learn what must be tested at component/link level and where visual, power/loss and other test methods fit.",
      "watchFor": "Select a test from the failure mode rather than defaulting to one instrument.",
      "gap": "Further FOA test lectures are available when a specific method is required.",
      "verifiedEvidence": "FOA Lecture 12 description inspected: components/locations of test plus sequence into visual, insertion loss, OTDR and advanced testing."
    }
  ]);

  updateMedia(20, [
    {
      "source": "rsRfDefinition",
      "role": "Required · RF teaching video",
      "use": "Establish RF/microwave frequency ranges, wavelength and why physical dimensions matter.",
      "watchFor": "Relate higher frequency to shorter wavelength and to practical interconnect/antenna behavior.",
      "gap": "Transmission-line behavior is taught next.",
      "verifiedEvidence": "Rohde & Schwarz video page inspected: RF/microwave definition, bands, wavelengths and applications."
    },
    {
      "source": "aacTransmissionLine",
      "role": "Required · RF engineering tutorial",
      "use": "Learn when a wire/trace must be treated as a transmission line and why characteristic impedance/matching/reflections matter.",
      "watchFor": "Explain why an RF interconnect can change the signal even when DC continuity is perfect.",
      "gap": "Use the exact system/datasheet impedance when available.",
      "verifiedEvidence": "Current AAC RF textbook tutorial inspected: electrical length, coax/PCB lines, characteristic impedance, matching/reflections."
    },
    {
      "source": "nptelComms",
      "role": "Required · Communications lecture sequence",
      "use": "Use the introductory modulation/transmitter/receiver lectures for AM/FM/PM and communication-system blocks.",
      "watchFor": "Distinguish carrier, information/baseband, modulation and receiver recovery at technician depth; avoid unnecessary advanced derivations.",
      "gap": "Spectrum measurement is handled by manufacturer instruction below.",
      "verifiedEvidence": "Existing university course retained because it provides coherent communications theory."
    },
    {
      "source": "rsSpectrumBasics",
      "role": "Required · Spectrum-analyzer video",
      "use": "Learn center/span, reference level, RBW and VBW and the measurement artifacts caused by wrong settings.",
      "watchFor": "Predict how narrowing RBW changes selectivity/noise floor/sweep time and how reference level can cause compression/overload.",
      "gap": "Advanced zero-span/vector analysis is not required here.",
      "verifiedEvidence": "Current R&S lesson inspected: exactly these four controls, overload/compression and RBW/VBW tradeoffs."
    },
    {
      "source": "rsOccupiedBandwidth",
      "role": "Required · Applied spectrum video",
      "use": "Use occupied bandwidth as a repeatable example of turning a spectrum trace into a defined measurement.",
      "watchFor": "Configure center frequency, channel/percent-power settings and interpret whether signal width indicates a path/modulation problem.",
      "gap": "Regulatory certification remains outside course scope.",
      "verifiedEvidence": "Current R&S lesson inspected: 99% power method, significance and analyzer configuration."
    },
    {
      "source": "fccRF",
      "role": "Required · Safety reference",
      "use": "Use the official RF exposure material to recognize that exposure limits depend on frequency, power, distance and standard.",
      "watchFor": "Do not infer safety from ‘low voltage’ when RF power is involved.",
      "gap": "Does not qualify the learner for transmitter compliance work.",
      "verifiedEvidence": "Existing FCC official reference retained as the safety authority."
    }
  ]);

  updateMedia(21, [
    {
      "source": "ucsdStudyVideos",
      "role": "Required · Learning-method videos",
      "use": "Watch the retrieval, spaced-practice and interleaving videos before the cumulative CETa integration set.",
      "watchFor": "Use mixed cues and delayed recall deliberately; do not reread a domain until after an independent attempt.",
      "gap": "The technical content itself comes from the prior module media and ETA materials.",
      "verifiedEvidence": "UCSD Psychology currently hosts dedicated how-to videos for all three evidence-based methods."
    },
    {
      "source": "ucsdRetrieval",
      "role": "Required · Repair method",
      "use": "Use the retrieval workflow: close materials, recall/solve, check, identify what was missing or wrong, then repeat on a fresh prompt.",
      "watchFor": "Classify a miss as concept, formula/unit, interpretation, procedure, or selection error before remediation.",
      "gap": "Confidence alone is not evidence of mastery.",
      "verifiedEvidence": "UCSD guide cross-checks retrieval practice against a large research literature and gives an explicit recall→check→repeat procedure."
    },
    {
      "source": "etaCompetencies",
      "role": "Required · Scope reference",
      "use": "Audit mixed practice against exact current CETa competency rows.",
      "watchFor": "Track taught/assessed/practical/retention-due separately.",
      "gap": "Competency-row count is not assumed to equal exam weighting.",
      "verifiedEvidence": "Official ETA competency document remains the scope authority."
    },
    {
      "source": "etaFormula",
      "role": "Required · Post-attempt reference",
      "use": "Check symbols/relationships only after no-notes recall and solve a changed example afterward.",
      "watchFor": "Do not use the sheet during the independent retrieval attempt.",
      "gap": "Reference only, not primary teaching.",
      "verifiedEvidence": "Official ETA formula sheet retained."
    },
    {
      "source": "privateGuide",
      "role": "Required · Private practice",
      "use": "Use assigned chapter/unit review closed-book first, then consult explanations only for targeted correction.",
      "watchFor": "A corrected item must be re-solved under changed conditions.",
      "gap": "Alfred’s current assessment/mastery rules remain unchanged.",
      "verifiedEvidence": "Existing authorized private study-guide assignment retained."
    }
  ]);

  updateMedia(22, [
    {
      "source": "mitRequirements",
      "role": "Required · Systems-engineering video lecture",
      "use": "Learn how to state what the system must do before design/build decisions begin.",
      "watchFor": "Rewrite vague wishes as observable subject + condition + required behavior with measurable bounds where applicable.",
      "gap": "NASA’s current requirement-writing rules below are the authoritative style cross-check.",
      "verifiedEvidence": "MIT OCW lecture with transcript inspected; its stated focus is specifying exactly what is expected before design begins."
    },
    {
      "source": "nasaRequirementAppendix",
      "role": "Required · Authoritative requirement reference",
      "use": "Apply NASA’s requirement-writing guidance to the one-person project at appropriate scale.",
      "watchFor": "Use ‘shall’ for requirements, active voice, necessary tolerances and testable/implementation-independent wording.",
      "gap": "Do not import heavyweight program bureaucracy into this small project.",
      "verifiedEvidence": "Current NASA handbook appendix inspected for requirement-writing rules."
    },
    {
      "source": "mitVerification",
      "role": "Required · Verification/validation lecture",
      "use": "Learn the difference among requirement, verification method/evidence and broader validation.",
      "watchFor": "For every project requirement, name how you will prove it before building.",
      "gap": "The course’s simplified trace table remains the required artifact.",
      "verifiedEvidence": "MIT OCW lecture with transcript inspected: verification, validation, testing, technical risk and readiness concepts."
    },
    {
      "source": "nasaSystems",
      "role": "Required · Traceability/reference",
      "use": "Use requirements flowdown, interfaces and bidirectional traceability as the professional cross-check.",
      "watchFor": "Every verification record should point back to a requirement and vice versa.",
      "gap": "Scale documentation to project risk.",
      "verifiedEvidence": "Existing NASA Systems Engineering Handbook retained as authority."
    },
    {
      "source": "onetTech",
      "role": "Reference · Career transfer",
      "use": "Check that selected project evidence maps to real technician tasks such as build, test, records, repair and integration.",
      "watchFor": "Use occupational tasks to choose relevant proof, not to claim a job outcome.",
      "gap": "Specific job postings later control applications.",
      "verifiedEvidence": "Existing O*NET occupational reference retained."
    }
  ]);

  updateMedia(23, [
    {
      "source": "githubSkills",
      "role": "Required · Reproducible baseline",
      "use": "Demonstrate status, diff, commit and history while keeping secrets/credentials out of the repository.",
      "watchFor": "Create a known-good project baseline before hardware changes.",
      "gap": "The actual Project 1 repo remains the graded artifact.",
      "verifiedEvidence": "Existing GitHub Skills tutorial retained."
    },
    {
      "source": "mitRequirements",
      "role": "Required · Baseline check",
      "use": "Revisit the requirement lecture only to verify that the frozen project scope is observable and testable.",
      "watchFor": "Do not add features during setup; unresolved ambiguity becomes an issue/decision record.",
      "gap": "Week 22 contains the full first pass.",
      "verifiedEvidence": "Reused as a targeted pre-build requirement check."
    },
    {
      "source": "nasaSystems",
      "role": "Required · Configuration/verification reference",
      "use": "Use configuration control and verification concepts at small-project scale.",
      "watchFor": "Record versions, BOM identifiers, interfaces and the planned evidence for first power.",
      "gap": "Avoid paperwork that does not improve reproducibility.",
      "verifiedEvidence": "Existing NASA handbook retained as professional reference."
    },
    {
      "source": "keysightBenchPowerCourse",
      "role": "Required · Pre-bring-up refresher",
      "use": "Review current limiting, CV/CC and readback before writing the first-power test case.",
      "watchFor": "Select conservative voltage/current limits from device/board requirements and predict normal current behavior.",
      "gap": "Actual values must come from the selected hardware documentation.",
      "verifiedEvidence": "Keysight manufacturer course already verified in Week 3."
    }
  ]);

  updateMedia(24, [
    {
      "source": "keysightBenchCvCc",
      "role": "Required · Safe first-power refresher",
      "use": "Use CV/CC behavior to understand why current limiting turns a wiring/design mistake into an observable protected condition.",
      "watchFor": "Set the current limit before enabling output and interpret unexpected CC entry as a stop/investigate signal.",
      "gap": "Exact limits come from the board/device requirements.",
      "verifiedEvidence": "Keysight lesson already verified for CV/CC operation."
    },
    {
      "source": "tiBoardTroubleshooting",
      "role": "Required · Bring-up/troubleshooting video",
      "use": "Use TI’s board-level process to move from symptom to root-cause checks rather than changing multiple things at once.",
      "watchFor": "Use A-B-A substitution only when it preserves evidence and is electrically safe; check board-level causes/parasitics/cleanliness where relevant.",
      "gap": "Do not copy device-specific checks that do not apply to the STM32 project.",
      "verifiedEvidence": "TI 14:52 manufacturer video inspected: structured board checks, A-B-A swap and board-level failure causes."
    },
    {
      "source": "stBootStartup",
      "role": "Required · MCU startup MOOC",
      "use": "Learn the STM32 boot/startup mechanisms that must succeed after rails are valid.",
      "watchFor": "Separate power/rail failure from reset/boot/clock/startup failure when the board does not reach firmware.",
      "gap": "Use exact board/reference-manual boot configuration for the selected STM32.",
      "verifiedEvidence": "Current ST MOOC inspected: startup/boot mechanisms and downloadable training material in short videos."
    },
    {
      "source": "flukeMultimeterGuide",
      "role": "Required · Measurement refresher",
      "use": "Verify unpowered resistance/continuity and powered rails using the correct meter function/jacks.",
      "watchFor": "Record expected rail, measured rail, units and decision; never measure resistance on an energized circuit.",
      "gap": "Scope/logic checks follow only after basic power state is established.",
      "verifiedEvidence": "Current Fluke guide already verified."
    },
    {
      "source": "nasaESD",
      "role": "Physical route · ESD control",
      "use": "Apply protected-work-area handling before semiconductor work.",
      "watchFor": "Keep ESD controls active during bring-up and probing.",
      "gap": "ESD is separate from electrical-energy safety.",
      "verifiedEvidence": "Existing NASA reference retained."
    }
  ]);

  updateMedia(26, [
    {
      "source": "armEmbedded",
      "role": "Required · Embedded C/machine-level course",
      "use": "Use the mapped modules on bitwise register work, volatile, functions/stack, modules, structures/CMSIS and machine-level execution.",
      "watchFor": "Tie each C construct to register/memory/processor state rather than treating firmware as abstract software.",
      "gap": "Family-specific peripheral semantics still come from ST/reference manuals.",
      "verifiedEvidence": "Arm-hosted course inspected: focused hands-on Cortex-M lessons explicitly teaching machine-level effects and common pitfalls."
    },
    {
      "source": "stOnlineTrainingCurrent",
      "role": "Required · STM32 peripheral/system training",
      "use": "Use the exact current STM32-family modules for system, memory, peripherals, watchdogs/timers and firmware drivers used by the project.",
      "watchFor": "Confirm status flags, initialization dependencies and error semantics rather than inventing behavior.",
      "gap": "Only modules relevant to the selected MCU/peripherals are required.",
      "verifiedEvidence": "ST current training page inspected: >50 modules per series across system/memory/communication/peripherals/watchdogs/firmware."
    },
    {
      "source": "stWatchdogGuide",
      "role": "Required · Timeout/recovery instruction",
      "use": "Learn IWDG vs WWDG behavior and how timeout windows turn missing execution into an observable reset/recovery event.",
      "watchFor": "Design watchdog service around verified progress, not unconditional kicking.",
      "gap": "Exact clock/timing configuration must match the project MCU.",
      "verifiedEvidence": "Current ST wiki inspected: IWDG/WWDG definitions, clocks, configurable timeouts, refresh behavior and reset action."
    },
    {
      "source": "armDebuggingAdventures",
      "role": "Required · Diagnostic practice",
      "use": "Learn practical embedded debugging techniques: logs, signal probing, GDB/Python, trace and remote debugging.",
      "watchFor": "Design diagnostics that preserve enough state to identify what failed before recovery erases the evidence.",
      "gap": "Tool availability can change by board; principles transfer.",
      "verifiedEvidence": "Current Arm page inspected; explicitly lists Cortex-M hardware/firmware troubleshooting techniques and useful/not-useful logs."
    },
    {
      "source": "tiCrashDebugging",
      "role": "Required · Failure-diagnosis demonstration",
      "use": "See run-time instrumentation used to diagnose stack/buffer overflows, memory leaks and CPU exceptions with stack traceback.",
      "watchFor": "Connect crash symptoms to preserved diagnostic evidence rather than simply resetting.",
      "gap": "TI-specific ROV tooling is an example, not a project dependency.",
      "verifiedEvidence": "TI 35:59 manufacturer video inspected; contains multiple demonstrations and the listed crash-diagnosis methods."
    },
    {
      "source": "nasaSystems",
      "role": "Reference · Traceability",
      "use": "Keep driver/application/diagnostic/recovery changes linked to the requirements they protect.",
      "watchFor": "Document failure mode, detection, response and verification at project scale.",
      "gap": "Avoid heavyweight process overhead.",
      "verifiedEvidence": "Existing NASA reference retained."
    }
  ]);

  updateMedia(27, [
    {
      "source": "pyserial",
      "role": "Required · API teaching/reference",
      "use": "Implement serial open/configuration, byte I/O, buffering and timeout behavior from the official API.",
      "watchFor": "Expect partial reads; define timeout semantics; always close/clean up the port.",
      "gap": "The test architecture must still define states and verdicts.",
      "verifiedEvidence": "Official pySerial docs inspected: timeout modes, reads/writes, context-manager cleanup and partial-read behavior."
    },
    {
      "source": "pytest",
      "role": "Required · Test framework instruction",
      "use": "Use fixtures/teardown and parametrization to make hardware tests repeatable without leaking state between cases.",
      "watchFor": "Separate setup/cleanup errors from DUT failures and guarantee resource cleanup.",
      "gap": "Framework output is not the engineering verdict by itself.",
      "verifiedEvidence": "Official pytest docs cross-checked for fixtures/yield teardown and parametrization."
    },
    {
      "source": "pythonDocs",
      "role": "Required · Language/library reference",
      "use": "Use the standard library for structured CSV/JSON/time/error handling where appropriate.",
      "watchFor": "Preserve raw values and timestamps before derived interpretation.",
      "gap": "Do not add dependencies when standard-library behavior is sufficient.",
      "verifiedEvidence": "Official Python documentation retained."
    },
    {
      "source": "matplotlib",
      "role": "Required when plotting · Evidence visualization",
      "use": "Produce a plot only after the raw log and requirement limits exist.",
      "watchFor": "Label axes/units/limits and preserve anomalies rather than smoothing them away.",
      "gap": "A plot supports but never defines pass/fail.",
      "verifiedEvidence": "Official Matplotlib quick-start retained."
    },
    {
      "source": "mitVerification",
      "role": "Required · Verdict semantics",
      "use": "Revisit verification logic so each automated test proves an explicit requirement under stated conditions.",
      "watchFor": "Distinguish test execution success from DUT requirement compliance.",
      "gap": "Project requirements remain frozen unless a documented change is justified.",
      "verifiedEvidence": "MIT V&V lecture reused as the engineering-test framework."
    }
  ]);

  updateMedia(28, [
    {
      "source": "tiBoardTroubleshooting",
      "role": "Required · Root-cause teaching video",
      "use": "Use TI’s structured board troubleshooting and A-B-A reasoning as the practical root-cause model.",
      "watchFor": "A root cause must explain the symptom and follow controlled reversal/reproduction, not just disappear after a change.",
      "gap": "Use only electrically safe substitutions.",
      "verifiedEvidence": "TI manufacturer video inspected: systematic checks, A-B-A swap and board-level causes."
    },
    {
      "source": "saleae",
      "role": "Path-specific · Digital fault evidence",
      "use": "Use protocol/raw digital capture when the injected fault affects timing or interface traffic.",
      "watchFor": "Preserve channel mapping, thresholds, sample rate, raw transitions and decode settings.",
      "gap": "Not every fault needs a logic analyzer.",
      "verifiedEvidence": "Existing Saleae official support retained."
    },
    {
      "source": "pytest",
      "role": "Path-specific · Reproducible fault cases",
      "use": "Parameterize controlled faults/recovery cases and report explicit error states.",
      "watchFor": "Keep fault IDs and requirement IDs traceable.",
      "gap": "Test-run output does not replace engineering analysis.",
      "verifiedEvidence": "Official pytest behavior already cross-checked."
    },
    {
      "source": "nasaSystems",
      "role": "Required · Report/evidence authority",
      "use": "Use NASA verification/anomaly/corrective-action concepts to structure the report.",
      "watchFor": "Record planned condition, observed result, anomaly, root cause, corrective action, retest and traceability.",
      "gap": "Keep the report proportional to project scope.",
      "verifiedEvidence": "NASA guidance cross-checked for pass/fail evidence, anomalies, root cause, corrective action and verification."
    }
  ]);

  updateMedia(29, [
    {
      "source": "adafruitSolderProblems",
      "role": "Required · Workmanship refresher",
      "use": "Use the defect/rework gallery before claiming solder/rework evidence.",
      "watchFor": "Identify cold/disturbed/overheated joints, wetting problems, bridges, excess/insufficient solder and lifted pads.",
      "gap": "Use objective course/workmanship criteria in the final dossier.",
      "verifiedEvidence": "Existing current override resource retained."
    },
    {
      "source": "chemtronicsSolderWick",
      "role": "Required when rework is shown · Rework refresher",
      "use": "Refresh controlled solder removal before a before/after rework demonstration.",
      "watchFor": "Minimize dwell and stop if continued heat risks pad/board damage.",
      "gap": "Do not perform advanced package rework outside the approved route.",
      "verifiedEvidence": "Manufacturer/DigiKey rework instructions cross-checked."
    },
    {
      "source": "nasaHarness",
      "role": "Physical harness route · Workmanship authority",
      "use": "Apply objective wire/terminal/harness acceptance observations.",
      "watchFor": "Name the exact accept/rework/escalate condition and preserve inspection evidence.",
      "gap": "Course does not confer NASA/IPC certification.",
      "verifiedEvidence": "Existing authoritative reference retained."
    },
    {
      "source": "nasaESD",
      "role": "Physical route · ESD control",
      "use": "Reapply protected-work-area and handling controls.",
      "watchFor": "Document controls actually used.",
      "gap": "Separate ESD protection from shock/energy safety.",
      "verifiedEvidence": "Existing authoritative reference retained."
    },
    {
      "source": "flukeMultimeterGuide",
      "role": "Required for DMM evidence",
      "use": "Refresh the exact meter function/jack/energized-state procedure used in the dossier.",
      "watchFor": "Every screenshot/photo must connect expected value, measured value, units and engineering decision.",
      "gap": "Approved low-voltage limits remain in force.",
      "verifiedEvidence": "Verified manufacturer guide reused."
    },
    {
      "source": "tekScopeSetup",
      "role": "Required for scope evidence",
      "use": "Refresh grounding, attenuation/compensation, volts/div, time/div and trigger setup.",
      "watchFor": "Preserve settings that make the waveform reproducible.",
      "gap": "A screenshot without setup/expected waveform is insufficient.",
      "verifiedEvidence": "Verified manufacturer primer reused."
    },
    {
      "source": "saleaeDigitalSignals",
      "role": "Required for logic-analyzer evidence",
      "use": "Refresh channel/threshold/sample/trigger setup and raw-transition interpretation.",
      "watchFor": "Correlate raw evidence to firmware action and requirement.",
      "gap": "Decode screenshot alone is insufficient.",
      "verifiedEvidence": "Verified Saleae tutorial reused."
    },
    {
      "source": "onetTech",
      "role": "Reference · Role relevance",
      "use": "Map only actually demonstrated artifacts to current technician tasks.",
      "watchFor": "Use occupational tasks as relevance evidence, never as a hiring guarantee.",
      "gap": "Specific job descriptions later control tailoring.",
      "verifiedEvidence": "Existing government source retained."
    }
  ]);

  updateMedia(30, [
    {
      "source": "gatechResumeGuide",
      "role": "Required · Engineering/project resume instruction",
      "use": "Use the Georgia Tech project/resume guidance to select only projects that add relevant evidence and describe role, technical skills, process and outcome.",
      "watchFor": "Tailor each project/bullet to the target duties; do not list every project or inflate scope.",
      "gap": "The project dossier remains the underlying proof behind each claim.",
      "verifiedEvidence": "Current Georgia Tech Career Center guide inspected; it explicitly addresses projects for early-career/career-changing candidates and how to construct project bullets."
    },
    {
      "source": "umichResumeBullets",
      "role": "Required · Resume bullet instruction",
      "use": "Convert project evidence into concise Action + What + How/Why/Impact bullets.",
      "watchFor": "Every bullet must be defensible from an artifact, log, result or documented role.",
      "gap": "Avoid claiming team/system results that were not personally demonstrated.",
      "verifiedEvidence": "Current University of Michigan resource includes instructional video and the bullet-plus model."
    },
    {
      "source": "pennStarVideo",
      "role": "Required · Interview teaching video",
      "use": "Use STAR to turn a real project/troubleshooting episode into a concise behavioral explanation.",
      "watchFor": "Keep Task/Action specific to your own role and make Result factual/measurable.",
      "gap": "STAR does not replace technical depth; it structures the behavioral layer.",
      "verifiedEvidence": "Penn Career Services video page includes transcript and explicit STAR instruction."
    },
    {
      "source": "umichInterviewing",
      "role": "Required · Technical-defense practice",
      "use": "Prepare field-specific technical questions plus behavioral stories; practice without memorizing a script.",
      "watchFor": "Explain the project at 30 seconds, ~2 minutes and deep technical level using the same verified facts.",
      "gap": "A technical interview may probe calculations, tradeoffs and troubleshooting beyond STAR.",
      "verifiedEvidence": "Current Michigan Career Center resource identifies technical interviews as field-knowledge/problem-solving assessments and gives rehearsal guidance."
    },
    {
      "source": "etaExam",
      "role": "Required · Credential wording authority",
      "use": "Verify exact credential/exam status before placing CETa language on resume/portfolio.",
      "watchFor": "Never imply certification before official award.",
      "gap": "Official source controls current credential terminology.",
      "verifiedEvidence": "Existing ETA official source retained."
    },
    {
      "source": "onetTech",
      "role": "Required · Duty mapping",
      "use": "Use current occupational tasks to decide which evidence belongs in the application package.",
      "watchFor": "Map only work actually demonstrated.",
      "gap": "Specific employer posting remains more precise than occupational summary.",
      "verifiedEvidence": "Existing O*NET government source retained."
    }
  ]);

  updateMedia(31, [
    {
      "source": "umichJobSearch",
      "role": "Required · Job-search system instruction",
      "use": "Build a focused role filter, identify target keywords/organizations, track contacts/applications/follow-ups and keep materials ready to tailor.",
      "watchFor": "Use the tracker as a feedback instrument: role → application version → response → interview stage → lesson/next change.",
      "gap": "Do not change the whole career direction from one rejection or one silent application.",
      "verifiedEvidence": "Current Michigan Career Center guide inspected: goal-first search, organized tracking, networking, tailoring, application follow-up and skill-building."
    },
    {
      "source": "pennSearchWorkshop",
      "role": "Required · Search/interview workshop",
      "use": "Use the university workshop to integrate resume, interview and search strategy into one repeatable application cycle.",
      "watchFor": "Separate search volume from search quality; preserve what changed between application versions.",
      "gap": "Specific technical-role selection remains anchored to actual job descriptions and project evidence.",
      "verifiedEvidence": "Penn Career Services workshop page inspected; it is an instructional session on resume, interview and search strategy."
    },
    {
      "source": "ucsdStudyVideos",
      "role": "Required · Continuing mastery instruction",
      "use": "Use spaced retrieval/interleaving to maintain CETa/electronics knowledge after the course instead of restarting from Week 1.",
      "watchFor": "Schedule periodic closed-note mixed retrieval and reopen only the domains that show evidence of decay.",
      "gap": "Official ETA changes still trigger a scope review even if retention is strong.",
      "verifiedEvidence": "UCSD current videos explicitly teach spaced, retrieval and interleaved practice."
    },
    {
      "source": "etaCompetencies",
      "role": "Required · Revalidation scope",
      "use": "Use the current official competency rows for periodic retention audits and future standard changes.",
      "watchFor": "Map only changed/new/retention-due items.",
      "gap": "Do not assume the standard is static.",
      "verifiedEvidence": "Existing official ETA source retained."
    },
    {
      "source": "etaExam",
      "role": "Required · Current policy/credential authority",
      "use": "Recheck official exam/credential information before scheduling or making public claims.",
      "watchFor": "Record the access date when policy details matter.",
      "gap": "Alfred never overrides ETA policy.",
      "verifiedEvidence": "Existing official ETA source retained."
    },
    {
      "source": "onetTech",
      "role": "Reference · Role filter",
      "use": "Use occupational duties as a broad anchor when filtering bridge roles.",
      "watchFor": "Compare each real posting with the model instead of treating O*NET as the job description.",
      "gap": "Specific postings control each application.",
      "verifiedEvidence": "Existing government source retained."
    }
  ]);

  C.meta = C.meta || {};
  C.meta.mediaRevision = "2026-09-17-teaching-media-self-reliance-audit";
  C.meta.mediaPolicy = "Teaching Media is an independently instructional explanation pathway: verified external media/resources collectively cover each mapped module objective at the required CETa and hardware/embedded depth, while Alfred labs, projects, measurements, coding, troubleshooting and assessments remain required hands-on/mastery work.";
})();
/* Final self-reliance closure for Weeks 6-10, 13-18, and 25.
   This runs after the main self-reliance overlay and replaces the older
   "Alfred supplies the missing instruction" media cards for these weeks. */
(() => {
  const C = window.ALFRED_CURRICULUM;
  if (!C || !Array.isArray(C.modules)) return;
  C.sources = C.sources || {};

  const updateMedia = (week, media) => {
    const module = C.modules.find(item => Number(item.week) === Number(week));
    if (!module || !module.integration) return;
    module.integration.media = media;
    module.sourceIds = [...new Set([...(module.sourceIds || []), ...media.map(item => item.source)])];
  };

  Object.assign(C.sources, {
    aacSeriesRlc: {
      title: "Series R, L, and C — Reactance and Impedance",
      org: "All About Circuits",
      kind: "Engineering textbook tutorial",
      url: "https://www.allaboutcircuits.com/textbook/alternating-current/chpt-5/series-r-l-and-c/"
    },
    aacResonantFilters: {
      title: "Resonant Filters",
      org: "All About Circuits",
      kind: "Engineering textbook tutorial with SPICE examples",
      url: "https://www.allaboutcircuits.com/textbook/alternating-current/chpt-8/resonant-filters/"
    },
    aacPassiveComponents: {
      title: "Passive, Active, and Electromechanical Components",
      org: "All About Circuits",
      kind: "Engineering video tutorial",
      url: "https://www.allaboutcircuits.com/video-tutorials/passive-active-and-electromechanical-components/"
    },
    aacElectronicComponents: {
      title: "Electronic Components",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture with transcript",
      url: "https://www.allaboutcircuits.com/video-lectures/electronic-components/"
    },
    aacElectromagnetism: {
      title: "Electromagnetism",
      org: "All About Circuits",
      kind: "Engineering textbook tutorial",
      url: "https://www.allaboutcircuits.com/textbook/direct-current/chpt-14/electromagnetism/"
    },
    aacElectromagneticInduction: {
      title: "Electromagnetic Induction",
      org: "All About Circuits",
      kind: "Engineering textbook tutorial",
      url: "https://www.allaboutcircuits.com/textbook/direct-current/chpt-14/electromagnetic-induction/"
    },
    digiKeyDatasheet: {
      title: "How To Read A Datasheet — Electronics with Becky Stern",
      org: "DigiKey Electronics",
      kind: "Industry instructional video",
      url: "https://www.digikey.com/en/videos/d/digi-key-electronics/how-to-read-a-datasheet-electronics-with-becky-stern-digikey"
    },
    aacSemiconductorBasics: {
      title: "Semiconductor Basics: Materials and Devices",
      org: "All About Circuits",
      kind: "Engineering video tutorial",
      url: "https://www.allaboutcircuits.com/video-tutorials/semiconductor-materials-and-devices/"
    },
    aacDiodeCharacteristics: {
      title: "Diode Characteristics — Diode and Diode Circuits",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture with transcript",
      url: "https://www.allaboutcircuits.com/video-lectures/diode-characteristics-circuits/"
    },
    aacBjtIntro: {
      title: "Bipolar Transistors — Introduction",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture with transcript",
      url: "https://www.allaboutcircuits.com/video-lectures/bipolar-transistors-intro/"
    },
    aacMosfetLecture: {
      title: "MOSFETs — MOS Field Effect Transistors",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture with transcript",
      url: "https://www.allaboutcircuits.com/video-lectures/mosfets-mos-field-effect-transistors/"
    },
    aacTroubleshootSemiconductors: {
      title: "Troubleshooting Semiconductors",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture with transcript",
      url: "https://www.allaboutcircuits.com/video-lectures/troubleshooting-semiconductors/"
    },
    aacPowerSupplies: {
      title: "Power Supplies — Applications",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture with transcript",
      url: "https://www.allaboutcircuits.com/video-lectures/power-supplies-applications/"
    },
    aacPowerSupplyCircuits: {
      title: "Power Supply Circuits",
      org: "All About Circuits",
      kind: "Engineering textbook tutorial",
      url: "https://www.allaboutcircuits.com/textbook/semiconductors/chpt-9/power-supply-circuits/"
    },
    aacPowerIcs: {
      title: "Introduction to Power Management: Voltage Regulator ICs",
      org: "All About Circuits",
      kind: "Engineering video tutorial",
      url: "https://www.allaboutcircuits.com/video-tutorials/power-ics/"
    },
    tiSwitchingRegulatorFundamentals: {
      title: "Switching Regulator Fundamentals",
      org: "Texas Instruments",
      kind: "Manufacturer application report",
      url: "https://www.ti.com/lit/pdf/SNVA559"
    },
    aacDecibels: {
      title: "Decibels — Amplifier Basics",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture with transcript",
      url: "https://www.allaboutcircuits.com/video-lectures/decibels-amplifier-basics/"
    },
    aacAmpConfigs: {
      title: "Amplifier Configurations",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture with transcript",
      url: "https://www.allaboutcircuits.com/video-lectures/amplifier-configurations/"
    },
    aacOpAmpBasicConfig: {
      title: "Basic Amplifier Configuration — Op Amps",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture with transcript",
      url: "https://www.allaboutcircuits.com/video-lectures/basic-amplifier-configuration/"
    },
    tiPrecisionOpAmps: {
      title: "TI Precision Labs — Op Amps",
      org: "Texas Instruments",
      kind: "Manufacturer college-style video curriculum",
      url: "https://www.ti.com/video/series/precision-labs/ti-precision-labs-op-amps.html"
    },
    tiOpAmpOutputStage: {
      title: "Op Amp Distortion — Output Stage",
      org: "Texas Instruments",
      kind: "Manufacturer technical video",
      url: "https://www.ti.com/video/4650731413001"
    },
    aacSystemNotations: {
      title: "System Notations",
      org: "North Seattle Community College / All About Circuits",
      kind: "College video lecture with transcript",
      url: "https://www.allaboutcircuits.com/video-lectures/system-notations/"
    },
    mitAssemblyArchitecture: {
      title: "Lecture 4 — Assembly Language & Computer Architecture",
      org: "MIT OpenCourseWare",
      kind: "University lecture video with transcript",
      url: "https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-4-assembly-language-computer-architecture/"
    },
    armEmbeddedCourseInfo: {
      title: "Embedded C Programming with Arm Cortex-M Video Course",
      org: "Arm",
      kind: "Processor-vendor embedded course",
      url: "https://developer.arm.com/community/arm-community-blogs/b/embedded-and-microcontrollers-blog/posts/embedded-c-programming-with-arm-cortex-m-video-course"
    },
    stCubeIdeDebug: {
      title: "STM32CubeIDE Debug — Registers, Memory, Peripherals, Breakpoints and Fault Analysis",
      org: "STMicroelectronics",
      kind: "Manufacturer debug documentation",
      url: "https://dev.st.com/stm32cube-docs/stm32cubeide-vscode/latest/en/docs/markup/development/debug.html"
    },
    saleaeLearnAsync: {
      title: "Learn Asynchronous Serial",
      org: "Saleae",
      kind: "Manufacturer protocol teaching guide",
      url: "https://www.saleae.com/support/protocol-analyzers/learn-digital-protocols/learn-asynchronous-serial"
    },
    saleaeLearnI2c: {
      title: "Learn I2C — Inter-Integrated Circuit",
      org: "Saleae",
      kind: "Manufacturer protocol teaching guide",
      url: "https://www.saleae.com/support/protocol-analyzers/learn-digital-protocols/learn-i2c"
    },
    saleaeLearnSpi: {
      title: "Learn SPI — Serial Peripheral Interface",
      org: "Saleae",
      kind: "Manufacturer protocol teaching guide",
      url: "https://www.saleae.com/support/protocol-analyzers/learn-digital-protocols/learn-spi"
    },
    tiIsolationSeries: {
      title: "TI Precision Labs — Introduction to Isolation",
      org: "Texas Instruments",
      kind: "Manufacturer 13-part video curriculum",
      url: "https://www.ti.com/video/series/precision-labs/ti-precision-labs-introduction-to-isolation.html"
    },
    tiGalvanicIsolation: {
      title: "What Is Galvanic Isolation?",
      org: "Texas Instruments",
      kind: "Manufacturer technical video",
      url: "https://www.ti.com/video/6138482962001"
    }
  });

  updateMedia(6, [
    {
      source: "aacRcRl",
      role: "Required · Reactance/phase teaching",
      use: "Review how capacitor and inductor reactance changes with frequency and how phase makes AC circuit arithmetic different from DC.",
      watchFor: "State the direction of XC and XL change with frequency and identify leading/lagging relationships before calculation.",
      gap: "Series RLC and resonance follow below.",
      verifiedEvidence: "Previously verified transcript teaches RC/RL reactance, impedance, phase and phasor reasoning."
    },
    {
      source: "aacSeriesRlc",
      role: "Required · Impedance worked tutorial",
      use: "Work a full R-L-C impedance example so resistance and opposite-sign reactive terms become one circuit model.",
      watchFor: "Calculate XL/XC first, combine impedance correctly, and connect total impedance to current and phase.",
      gap: "Resonance/filter behavior is taught next.",
      verifiedEvidence: "Current AAC tutorial explicitly solves reactance and impedance in a series RLC circuit."
    },
    {
      source: "aacResonantFilters",
      role: "Required · Resonance/filter teaching",
      use: "Learn why series and parallel LC impedance changes sharply at resonance and how that becomes band-pass or band-stop behavior.",
      watchFor: "Distinguish series-resonant minimum impedance from parallel-resonant maximum impedance and relate both to the frequency response.",
      gap: "The practical sweep is completed in LTspice/lab.",
      verifiedEvidence: "Current AAC tutorial explains series/parallel resonance, pass/stop topologies and SPICE frequency-response examples."
    },
    {
      source: "aacTransformerPart1",
      role: "Required · Transformer teaching",
      use: "Learn turns ratio, voltage/current transformation and step-up/step-down behavior.",
      watchFor: "Relate Np/Ns to voltage ratio and explain why current changes in the opposite direction for an ideal transformer.",
      gap: "Real magnetic effects deepen in Week 7.",
      verifiedEvidence: "Existing college transformer lecture retained."
    },
    {
      source: "adiLtspice",
      role: "Required · Frequency-response application",
      use: "Run an AC sweep only after predicting resonance/cutoff behavior and compare the plot to the prediction.",
      watchFor: "Record sweep range, source amplitude, resonant/cutoff frequencies and magnitude/phase changes.",
      gap: "Simulation does not replace physical measurement skill.",
      verifiedEvidence: "Existing LTspice source retained for application."
    }
  ]);

  updateMedia(7, [
    {
      source: "aacPassiveComponents",
      role: "Required · Component-family teaching",
      use: "Build the passive/active/electromechanical classification and connect each family to energy, signal, motion or interconnection behavior.",
      watchFor: "Identify resistor/capacitor/inductor/transformer/sensor/switch/connector/motor/generator roles from function, not appearance alone.",
      gap: "Ratings and part-specific limits come from datasheets.",
      verifiedEvidence: "Current AAC tutorial explicitly teaches passive, active and electromechanical categories including motors, generators, solenoids, switches and connectors."
    },
    {
      source: "aacElectronicComponents",
      role: "Required · Relay/switch/component teaching",
      use: "Learn component symbols and basic relay/switch operation including poles, throws, NO/NC contacts and electromagnetic actuation.",
      watchFor: "Trace the coil and contact states separately and distinguish normal/de-energized state from energized state.",
      gap: "Flyback protection follows in the TI switching resource.",
      verifiedEvidence: "College transcript covers capacitors, inductors, transformers, switches, relays, transistors, diodes and ICs."
    },
    {
      source: "aacElectromagnetism",
      role: "Required · Magnetism/relay foundation",
      use: "Connect current, magnetic field, coils and electromagnets to relays and motors.",
      watchFor: "Use the right-hand rule and explain why more turns/current increase magnetomotive force.",
      gap: "Induction/generator action follows next.",
      verifiedEvidence: "Current AAC text teaches current-produced magnetic fields, coils/electromagnets and relay/motor applications."
    },
    {
      source: "aacElectromagneticInduction",
      role: "Required · Generator/transformer foundation",
      use: "Learn how changing magnetic flux induces voltage and why motion/change is required for generation.",
      watchFor: "Connect flux change to induced voltage and use the concept to explain generator and transformer action.",
      gap: "Device ratings remain datasheet-specific.",
      verifiedEvidence: "Current AAC text teaches Faraday induction and changing-flux voltage generation."
    },
    {
      source: "tiTransformers2026",
      role: "Required · Real transformer behavior",
      use: "Extend the ideal transformer model to magnetizing/leakage inductance and real transformer effects.",
      watchFor: "Separate ideal turns-ratio behavior from nonideal magnetic effects.",
      gap: "Use exact device datasheet values when selecting a part.",
      verifiedEvidence: "Existing TI/UT lecture retained."
    },
    {
      source: "tiInductiveLoads",
      role: "Required · Relay/solenoid switching",
      use: "See what stored magnetic energy does at turn-off and how flyback/clamp paths protect the switch.",
      watchFor: "Predict polarity reversal and identify the safe current-decay path.",
      gap: "The course remains low-voltage.",
      verifiedEvidence: "Existing TI manufacturer training retained."
    },
    {
      source: "tiMotorTypes",
      role: "Required · Motor-family overview",
      use: "Compare brushed DC, stepper and brushless motor behavior and what physically creates torque.",
      watchFor: "Identify what is being commutated and how the drive method differs by motor family.",
      gap: "Motor-control design depth beyond technician fundamentals is optional.",
      verifiedEvidence: "Existing TI manufacturer training retained."
    },
    {
      source: "digiKeyDatasheet",
      role: "Required · Ratings/datasheet teaching",
      use: "Learn how to find pinout, absolute maximums, recommended conditions, ratings, charts and operating specifications before connecting a component.",
      watchFor: "Separate absolute maximum ratings from normal operating conditions and cite the exact table/graph used.",
      gap: "The selected component's manufacturer datasheet remains authoritative.",
      verifiedEvidence: "DigiKey current instructional video explicitly teaches tables, charts and specifications for component selection/use."
    }
  ]);

  updateMedia(8, [
    {
      source: "aacSemiconductorBasics",
      role: "Required · Semiconductor foundation",
      use: "Learn doping, carriers and why semiconductor junctions can create controllable device behavior.",
      watchFor: "Relate material/doping changes to carrier availability instead of memorizing device symbols only.",
      gap: "Device operation follows below.",
      verifiedEvidence: "Current AAC video tutorial teaches semiconductor materials, doping and device formation."
    },
    {
      source: "aacDiodeCharacteristics",
      role: "Required · Diode teaching",
      use: "Learn forward/reverse bias, practical forward drop, leakage and breakdown.",
      watchFor: "Predict current path and polarity before calculating or measuring.",
      gap: "Rectifier/power-supply applications are taught in Week 9.",
      verifiedEvidence: "College transcript explicitly teaches ideal/practical diode behavior, forward drop and reverse breakdown."
    },
    {
      source: "aacBjtIntro",
      role: "Required · BJT teaching",
      use: "Learn NPN/PNP structure, terminals and current-control concept before switch/bias work.",
      watchFor: "Identify emitter/base/collector and distinguish NPN from PNP orientation/bias.",
      gap: "Use the module's switch application to connect operating regions to measurements.",
      verifiedEvidence: "College transcript introduces BJT structure, NPN/PNP and terminal roles."
    },
    {
      source: "aacMosfetLecture",
      role: "Required · MOSFET teaching",
      use: "Learn enhancement/depletion and N/P channel behavior plus gate/source/drain roles.",
      watchFor: "Separate gate threshold from guaranteed low-resistance full-on operation.",
      gap: "Logic-level selection is reinforced by TI and the exact datasheet.",
      verifiedEvidence: "College transcript teaches MOSFET classes, channel types and device operation."
    },
    {
      source: "tiMosfetBasics2026",
      role: "Required · MOSFET switch application",
      use: "Use the TI lecture to connect gate drive, body diode, switching behavior and on-resistance to a real low-side switch.",
      watchFor: "Check whether the available gate voltage actually meets the datasheet's on-resistance conditions.",
      gap: "Part-specific current/thermal limits come from the selected datasheet.",
      verifiedEvidence: "Existing TI/UT MOSFET lecture retained."
    },
    {
      source: "digiKeyDatasheet",
      role: "Required · Semiconductor selection",
      use: "Read pinout, absolute maximums, operating limits and characteristic curves before selecting or powering a diode/BJT/MOSFET.",
      watchFor: "Cite the exact condition attached to every current, voltage or resistance claim.",
      gap: "No tutorial overrides the manufacturer datasheet.",
      verifiedEvidence: "Current DigiKey datasheet lesson retained."
    },
    {
      source: "aacTroubleshootSemiconductors",
      role: "Required · Device troubleshooting",
      use: "Learn practical semiconductor handling/test considerations and how failures can present.",
      watchFor: "Separate mechanical/package/ESD issues from electrical junction symptoms.",
      gap: "The graded module applies the method to the assigned switch circuit.",
      verifiedEvidence: "College transcript covers semiconductor troubleshooting and mechanical handling considerations."
    }
  ]);

  updateMedia(9, [
    {
      source: "aacPowerSupplies",
      role: "Required · Rectifier/power-supply lecture",
      use: "Learn the transformer→rectifier→filter→regulator chain and how half/full-wave rectification creates pulsating DC.",
      watchFor: "Sketch the waveform after each block and predict what a failed/open/shorted block would do downstream.",
      gap: "Modern regulator topologies are added below.",
      verifiedEvidence: "College transcript explicitly teaches AC-to-DC supply purpose, rectification and power-supply stages."
    },
    {
      source: "aacPowerSupplyCircuits",
      role: "Required · Supply topology reading",
      use: "Compare unregulated, linear regulated and switching supplies and connect ripple/noise behavior to each topology.",
      watchFor: "Separate rectification/filter ripple from regulator behavior and identify where regulation is actually occurring.",
      gap: "Detailed switching operation is reinforced by TI.",
      verifiedEvidence: "Current AAC text distinguishes unregulated, linear, switching and ripple-regulated supplies."
    },
    {
      source: "aacPowerIcs",
      role: "Required · Regulator teaching video",
      use: "Learn linear versus switching regulation, efficiency/noise tradeoffs and common PMIC roles.",
      watchFor: "Explain why a linear pass device dissipates power continuously while a switcher transfers energy in switched intervals.",
      gap: "Buck/boost internal detail follows in the TI reference.",
      verifiedEvidence: "Current AAC video tutorial teaches linear vs switching regulator architecture and tradeoffs."
    },
    {
      source: "tiSwitchingRegulatorFundamentals",
      role: "Required · Switching-regulator reference",
      use: "Use the introductory sections for PWM and buck/boost/buck-boost/flyback energy flow.",
      watchFor: "Trace inductor/capacitor current paths during switch ON/OFF intervals.",
      gap: "Only technician-level topology recognition and symptom reasoning are required here.",
      verifiedEvidence: "TI application report explicitly teaches PWM and common switching-converter topologies."
    },
    {
      source: "tiBoardTroubleshooting",
      role: "Required · Power fault-isolation application",
      use: "Apply structured board-level checks to power-rail symptoms rather than replacing parts by guesswork.",
      watchFor: "Compare expected rails/current signatures with measured evidence and change one variable at a time.",
      gap: "Exact rail limits come from the board schematic/datasheet.",
      verifiedEvidence: "Existing TI board troubleshooting video retained."
    },
    {
      source: "flukeMultimeterGuide",
      role: "Required · Measurement application",
      use: "Use the correct DMM mode/jacks for rail voltage, de-energized resistance/continuity and diode checks.",
      watchFor: "Never measure resistance on an energized circuit and preserve expected/measured/decision evidence.",
      gap: "Scope ripple measurement is handled by the Week 3 scope foundation.",
      verifiedEvidence: "Previously verified Fluke guide retained."
    }
  ]);

  updateMedia(10, [
    {
      source: "aacDecibels",
      role: "Required · Gain/decibel teaching",
      use: "Learn voltage/current/power gain and convert ratios to decibels with worked examples.",
      watchFor: "Use the correct 20log versus 10log relationship and keep units/ratio meaning explicit.",
      gap: "Frequency response and op-amp limits follow.",
      verifiedEvidence: "College transcript explicitly teaches amplifier gain and dB conversions."
    },
    {
      source: "aacAmpConfigs",
      role: "Required · Transistor amplifier teaching",
      use: "Compare common-emitter, common-collector and common-base behavior and loading/phase implications.",
      watchFor: "Identify which terminal is common and what happens to voltage/current gain, phase and impedance.",
      gap: "Amplifier class overview is reinforced by TI audio fundamentals already present in the source registry.",
      verifiedEvidence: "College transcript teaches the three common BJT amplifier configurations."
    },
    {
      source: "aacOpAmpBasicConfig",
      role: "Required · Op-amp configuration teaching",
      use: "Learn inverting/non-inverting feedback configurations and derive closed-loop gain from the resistor network.",
      watchFor: "Trace negative feedback and distinguish ideal analysis from real input/output limitations.",
      gap: "Bandwidth/slew/output loading are taught by TI Precision Labs.",
      verifiedEvidence: "College transcript teaches basic op-amp amplifier configurations."
    },
    {
      source: "tiPrecisionOpAmps",
      role: "Required · Op-amp curriculum",
      use: "Complete the mapped introduction, input/output limitations, bandwidth/gain and slew-rate lessons.",
      watchFor: "Connect common-mode range, output swing, gain-bandwidth and slew rate to clipping/distortion/bandwidth symptoms.",
      gap: "Only mapped lessons are required; the full professional series is broader than this week.",
      verifiedEvidence: "Current TI series lists sequenced college-style lessons on input/output limits, gain/bandwidth, slew, distortion, noise and stability."
    },
    {
      source: "tiOpAmpOutputStage",
      role: "Required · Loading/clipping teaching",
      use: "Learn how output-stage topology and load current create distortion and clipping.",
      watchFor: "Separate input/common-mode problems from output-load/output-swing problems.",
      gap: "Exact limits come from the selected op-amp datasheet.",
      verifiedEvidence: "TI video explicitly addresses output loading and clipping/distortion."
    }
  ]);

  updateMedia(13, [
    {
      source: "aacSystemNotations",
      role: "Required · Diagram-type teaching",
      use: "Learn the purpose and differences among block, schematic, wiring and other system representations.",
      watchFor: "Never infer physical placement from schematic drawing position; use labels/nets/reference designators.",
      gap: "Datasheet and troubleshooting application follow.",
      verifiedEvidence: "College transcript covers system/wiring diagram notation and connectivity."
    },
    {
      source: "digiKeySchematics",
      role: "Required · Schematic-reading video",
      use: "Reinforce symbols, net labels, connectivity and reference designators.",
      watchFor: "Trace electrical relationships across page/net labels rather than by visual proximity.",
      gap: "Part pin behavior comes from the datasheet.",
      verifiedEvidence: "Existing DigiKey schematic instruction retained."
    },
    {
      source: "digiKeyDatasheet",
      role: "Required · Datasheet-reading video",
      use: "Learn how to extract pinout, operating conditions, absolute maximums, truth/timing tables and characteristic graphs.",
      watchFor: "Cite the exact table/condition supporting each expected test value.",
      gap: "The actual device datasheet controls the board-level expectation.",
      verifiedEvidence: "Current DigiKey tutorial explicitly teaches charts, tables and specs."
    },
    {
      source: "nscTroubleshooting",
      role: "Required · System troubleshooting lecture",
      use: "Use block-diagram thinking, signal tracing, substitution and divide-and-conquer to choose test points.",
      watchFor: "Every measurement must compare to an expected-good value and eliminate one or more hypotheses.",
      gap: "Board-specific values come from schematic/datasheet evidence.",
      verifiedEvidence: "Existing college troubleshooting lecture retained."
    },
    {
      source: "tiBoardTroubleshooting",
      role: "Required · Industry root-cause example",
      use: "See disciplined board checks and A-B-A substitution used in practice.",
      watchFor: "Do not blame a component until board conditions, parasitics/cleanliness and controlled swap evidence support it.",
      gap: "The method transfers; TI device specifics do not automatically transfer.",
      verifiedEvidence: "Existing TI board-level troubleshooting video retained."
    }
  ]);

  updateMedia(14, [
    {
      source: "mitAssemblyArchitecture",
      role: "Required · Computer-architecture lecture",
      use: "Follow the path from source code to compiler output to machine code to hardware execution.",
      watchFor: "Connect instructions to registers, memory and actual hardware execution rather than treating C as an abstract language.",
      gap: "C syntax and memory practice are supplied by the Harvard resources below.",
      verifiedEvidence: "MIT OCW lecture description explicitly traces source→compilation→machine code→hardware interpretation→execution."
    },
    {
      source: "cs50Week1C2026",
      role: "Required · C foundation",
      use: "Learn C syntax, types, control flow, functions, compilation and command-line workflow.",
      watchFor: "Compile frequently and treat compiler diagnostics as evidence, not noise.",
      gap: "Pointers/memory follow in the next resource.",
      verifiedEvidence: "Existing Harvard 2026 Week 1 resource retained."
    },
    {
      source: "cs50C",
      role: "Required · Memory/pointer follow-on",
      use: "Learn addresses, pointers, arrays, stack/heap and common memory failures.",
      watchFor: "Draw memory/address relationships and explain segmentation/buffer failures.",
      gap: "Embedded register-level transfer deepens in Week 15.",
      verifiedEvidence: "Current CS50 Week 4 memory material includes pointers, stack, heap and buffer overflow."
    },
    {
      source: "beejC",
      role: "Required · Language reference",
      use: "Use exact chapters for types, functions, arrays, structs, enums, pointers and language rules while completing the C task.",
      watchFor: "Look up a rule only when needed, then apply it in compiled/tested code.",
      gap: "Reference does not replace writing/debugging the assigned program.",
      verifiedEvidence: "Existing Beej C reference retained."
    }
  ]);

  updateMedia(15, [
    {
      source: "armEmbedded",
      role: "Required · Embedded C/machine-level course",
      use: "Complete the mapped lessons on volatile, bitwise operators, pointers, stack/modules, fixed-width integers and CMSIS.",
      watchFor: "Connect every register operation to the machine/register/memory effect visible in the debugger.",
      gap: "Family-specific register names and peripheral behavior come from ST/reference manuals.",
      verifiedEvidence: "Arm course map includes volatile, bitwise, pointers, stack, stdint, structures/CMSIS and debugger views."
    },
    {
      source: "aacSequentialLogic",
      role: "Required · State foundation",
      use: "Reuse the sequential-logic lesson to connect stored state/clock events to finite-state firmware reasoning.",
      watchFor: "Write state and transition conditions explicitly before coding.",
      gap: "Software architecture remains simple and bare-metal at this stage.",
      verifiedEvidence: "Previously verified sequential-state resource retained."
    },
    {
      source: "stCubeIdeBasics",
      role: "Required · GPIO/EXTI/timer application",
      use: "Complete the GPIO, EXTI and timer/PWM examples so polling, event-driven input and timed output have concrete MCU implementations.",
      watchFor: "Identify initialization, callback/interrupt path and main-loop behavior separately.",
      gap: "Exact MCU clock/pin routing must match the selected board.",
      verifiedEvidence: "Current ST MOOC outline includes GPIO HAL/LL, EXTI, timer PWM, ADC/DMA/timer and USART examples."
    },
    {
      source: "saleaeDigitalSignals",
      role: "Required · Timing evidence",
      use: "Measure GPIO edges/pulses and compare observed timing with firmware intent.",
      watchFor: "Preserve sample rate, channel/threshold and measured interval so timing claims are reproducible.",
      gap: "Logic capture verifies timing; it does not define correct firmware architecture.",
      verifiedEvidence: "Existing Saleae digital-signals tutorial retained."
    }
  ]);

  updateMedia(16, [
    {
      source: "stCubeIdeBasics",
      role: "Required · STM32 bring-up course",
      use: "Use the ST MOOC for project creation, board setup, GPIO, EXTI, timers, ADC/DMA and USART in STM32CubeIDE.",
      watchFor: "Separate generated initialization, application code and peripheral configuration.",
      gap: "Board-specific values still come from the selected MCU/board documentation.",
      verifiedEvidence: "Current ST MOOC outline explicitly includes these hands-on examples."
    },
    {
      source: "stCubeIdeDebug",
      role: "Required · Debug/SWD instruction",
      use: "Learn breakpoints, CPU registers, variables, peripheral registers, memory, disassembly and fault-analysis views.",
      watchFor: "Use the debugger to prove processor/peripheral state instead of relying on printf alone.",
      gap: "Exact probe/board connection must match the selected hardware.",
      verifiedEvidence: "Current ST debug documentation lists breakpoints, CPU registers, peripheral/memory/disassembly views and Fault Analyzer."
    },
    {
      source: "armEmbedded",
      role: "Required · Cortex-M architecture reinforcement",
      use: "Connect C statements to Cortex-M registers, memory and disassembly while stepping through the program.",
      watchFor: "Explain what the CPU/peripheral is doing at each debugger observation.",
      gap: "STM32-specific clocks/pins/peripherals come from ST.",
      verifiedEvidence: "Existing Arm embedded course retained."
    },
    {
      source: "stBootStartup",
      role: "Required · Boot/startup instruction",
      use: "Learn what must happen from reset/boot through startup before application code can run.",
      watchFor: "Separate power, reset/boot, clock, startup and application failures.",
      gap: "Exact boot configuration depends on the selected STM32.",
      verifiedEvidence: "Previously verified ST boot/startup MOOC retained."
    }
  ]);

  updateMedia(17, [
    {
      source: "saleaeLearnAsync",
      role: "Required · UART/async serial teaching",
      use: "Learn start/data/parity/stop framing, idle level, bit rate, bit order and framing/parity error meaning.",
      watchFor: "Calculate bit time from baud and explain how a wrong baud/framing assumption creates decode errors.",
      gap: "Voltage-level compatibility depends on the actual hardware interface.",
      verifiedEvidence: "Current Saleae teaching guide explains frame structure, stop bits, framing errors, bit order and analyzer settings."
    },
    {
      source: "saleaeStm32Uart",
      role: "Required · STM32 UART application",
      use: "Follow the STM32 walkthrough from firmware settings to real TX/RX waveforms and decoded bytes.",
      watchFor: "Capture both directions and correlate configuration with measured bit timing.",
      gap: "Application-message validity is handled by the host/parser work below.",
      verifiedEvidence: "Existing Saleae STM32 UART tutorial retained."
    },
    {
      source: "saleaeAsyncSerial",
      role: "Required · Analyzer configuration",
      use: "Configure bit rate, frame bits, parity, stop bits, inversion and channels correctly.",
      watchFor: "When decoding fails, verify raw timing before changing firmware.",
      gap: "A successful decode is not proof of correct application semantics.",
      verifiedEvidence: "Current Saleae analyzer guide explicitly documents these settings."
    },
    {
      source: "pyserial",
      role: "Required · Host-side serial instruction/reference",
      use: "Implement explicit port configuration, bounded reads/timeouts, byte handling and deterministic close/cleanup.",
      watchFor: "Expect partial reads and define what timeout means for the test.",
      gap: "The module still requires application framing/validation and evidence.",
      verifiedEvidence: "Official pySerial documentation retained."
    }
  ]);

  updateMedia(18, [
    {
      source: "saleaeLearnI2c",
      role: "Required · I2C teaching guide",
      use: "Learn SDA/SCL, addressing, START/STOP/repeated START, ACK/NACK, open-drain behavior and clock stretching.",
      watchFor: "Explain why pull-ups are required and identify address/data/ACK phases in a raw transaction.",
      gap: "Exact electrical/timing limits come from the MCU and peripheral datasheets.",
      verifiedEvidence: "Current Saleae guide teaches address/data/ACK, START/STOP and clock-stretching behavior."
    },
    {
      source: "saleaeStm32I2c",
      role: "Required · STM32 I2C sensor application",
      use: "Follow wiring, firmware, capture, decode and a changing sensor value end to end.",
      watchFor: "Correlate raw bytes with device-register intent and measured sensor change.",
      gap: "Independent unit conversion/calibration still comes from the selected sensor datasheet.",
      verifiedEvidence: "Existing Saleae STM32 I2C tutorial retained."
    },
    {
      source: "saleaeLearnSpi",
      role: "Required · SPI teaching guide",
      use: "Learn SCLK, MOSI, MISO, chip select, bit order and CPOL/CPHA.",
      watchFor: "Determine which edge samples data and verify mode against the peripheral datasheet.",
      gap: "Electrical voltage-level compatibility remains device-specific.",
      verifiedEvidence: "Current Saleae SPI guide explicitly teaches synchronous serial, select, MOSI/MISO, CPOL/CPHA and bit order."
    },
    {
      source: "saleaeStm32Spi",
      role: "Required · STM32 SPI application",
      use: "Follow the STM32 example from firmware configuration through waveform capture/decode.",
      watchFor: "Correlate transfers with chip select and raw clock/data edges.",
      gap: "The selected device's command/register format remains authoritative.",
      verifiedEvidence: "Existing Saleae STM32 SPI tutorial retained."
    },
    {
      source: "saleaeI2cGuide",
      role: "Required · I2C analyzer reference",
      use: "Configure channels/address interpretation and diagnose decode issues/noise around SCL edges.",
      watchFor: "Inspect raw waveform whenever decode conflicts with the datasheet transaction.",
      gap: "Analyzer output is evidence, not the definition of protocol correctness.",
      verifiedEvidence: "Current analyzer guide documents address, direction, data, ACK/NAK, START/STOP and common noise issues."
    },
    {
      source: "saleaeSpiGuide",
      role: "Required · SPI analyzer reference",
      use: "Configure clock/data/select, bit order, word size, polarity and phase.",
      watchFor: "If bytes are wrong, verify alignment and CPOL/CPHA against raw edges.",
      gap: "Decoded text alone is insufficient.",
      verifiedEvidence: "Current analyzer guide documents these settings and alignment failures."
    },
    {
      source: "digiKeyDatasheet",
      role: "Required · Sensor/peripheral datasheet workflow",
      use: "Use the datasheet to determine pinout, bus voltage, address/mode, register map, timing and raw-code conversion.",
      watchFor: "Cite the exact register/scale equation used to turn raw bytes into engineering units.",
      gap: "The actual selected device datasheet controls the implementation.",
      verifiedEvidence: "Current DigiKey datasheet instruction retained."
    }
  ]);

  updateMedia(25, [
    {
      source: "tiGalvanicIsolation",
      role: "Required · Isolation fundamentals",
      use: "Learn what galvanic isolation is, when it is needed and how capacitive/inductive/optical methods break the DC reference path.",
      watchFor: "Explain how isolation changes reference/ground relationships and why two sides need separate return/power domains.",
      gap: "Safety-rated design requires standards/ratings beyond this project scope.",
      verifiedEvidence: "TI video explicitly covers what isolation is, why it is used, methods and when a system needs it."
    },
    {
      source: "tiIsolationSeries",
      role: "Required · Isolation curriculum",
      use: "Complete the mapped lessons on digital isolators, isolated inputs, creepage/clearance, CMTI, isolated power and isolated communications as relevant to the vertical slice.",
      watchFor: "Separate functional/signal isolation from certified safety isolation and track how signals/power cross the barrier.",
      gap: "Only modules relevant to the selected project are required.",
      verifiedEvidence: "Current TI Precision Labs series contains 13 sequenced isolation lessons including galvanic isolation, digital isolators, standards, CMTI, isolated power and communication interfaces."
    },
    {
      source: "stMooc",
      role: "Required · MCU peripheral/HAL path",
      use: "Use the exact MCU peripheral/HAL section for the selected interface and confirm generated configuration against device documentation.",
      watchFor: "Understand initialization, error/return behavior and where application code belongs.",
      gap: "The exact selected MCU/device documentation remains authoritative.",
      verifiedEvidence: "Existing ST source retained."
    },
    {
      source: "saleaeStm32I2c",
      role: "Required for I2C path",
      use: "Use the complete STM32 sensor example for wiring, pull-ups, addressing, register traffic and raw capture.",
      watchFor: "Correlate raw bytes with device-register intent and the converted engineering value.",
      gap: "Project-specific scaling/calibration/timeout handling remain required.",
      verifiedEvidence: "Existing Saleae STM32 I2C tutorial retained."
    },
    {
      source: "saleaeStm32Spi",
      role: "Required for SPI path",
      use: "Use the complete STM32 SPI example for SCLK/MOSI/MISO/select, mode and captured transfer evidence.",
      watchFor: "Verify CPOL/CPHA and transaction framing against the selected device datasheet.",
      gap: "Project-specific recovery and requirement traceability remain required.",
      verifiedEvidence: "Existing Saleae STM32 SPI tutorial retained."
    },
    {
      source: "tiADC",
      role: "Required for analog path",
      use: "Use the TI ADC instruction to connect sampling, reference voltage, resolution, error/noise and raw code to engineering units.",
      watchFor: "Calculate expected code/value independently and compare to captured data.",
      gap: "Sensor front-end and calibration remain project-specific.",
      verifiedEvidence: "Existing TI ADC source retained."
    }
  ]);

  C.meta = C.meta || {};
  C.meta.mediaRevision = "2026-09-17-teaching-media-self-reliance-complete";
  C.meta.mediaPolicy = "Teaching Media is an independently instructional explanation pathway across all 31 modules: verified external media/resources collectively teach the mapped module objectives at the required CETa and hardware/embedded depth. Alfred labs, projects, measurements, soldering, coding, troubleshooting and assessments remain required hands-on/mastery work.";
})();
