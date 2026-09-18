/* AU-ESET 301 Teaching Media Content-Completion Repair — v16.3.6 WORKING DRAFT
   Cumulative Chunks 1–5: all previously identified Teaching Media content defects targeted.
   Prior-PASS Weeks 5–6, 16, 24, 26, 29, and 31 remain untouched by the content-completion additions.
   Generated 2026-09-18 against verified v16.3.5 runtime baseline.

   IMPORTANT: DO NOT DEPLOY THIS CHUNK AS THE FINAL v16.3.6 RELEASE.
   It is the completed content-repair working overlay, but it is NOT YET the audited final release.
   Runtime integration, full 31-week acceptance, link verification, regression QA, and version/reference synchronization still must pass.

   Scope: Teaching Media/resource data only.
   Load after curriculum-data.js, teaching-media-overrides.js, and teaching-media-self-reliance.js.
   This file APPENDS missing instructional resources and de-duplicates by source id.
   It does not alter lessons, labs, projects, assessments, dates/IDs, sequencing, progress,
   Cloud Sync, Study Guide assignments, navigation, or visual design.
*/
(() => {
  const C = window.ALFRED_CURRICULUM;
  if (!C || !Array.isArray(C.modules)) return;
  C.sources = C.sources || {};

  const appendMedia = (week, additions) => {
    const module = C.modules.find(item => Number(item.week) === Number(week));
    if (!module || !module.integration) return;

    const existing = Array.isArray(module.integration.media) ? module.integration.media : [];
    const seen = new Set(existing.map(item => item && item.source).filter(Boolean));
    const merged = [...existing];

    for (const card of additions) {
      if (!card || !card.source || seen.has(card.source)) continue;
      merged.push(card);
      seen.add(card.source);
    }

    module.integration.media = merged;
    module.sourceIds = [...new Set([
      ...(module.sourceIds || []),
      ...merged.map(item => item && item.source).filter(Boolean)
    ])];
  };

  const patchMediaCard = (week, source, patch) => {
    const module = C.modules.find(item => Number(item.week) === Number(week));
    if (!module || !module.integration || !Array.isArray(module.integration.media)) return;
    const card = module.integration.media.find(item => item && item.source === source);
    if (!card) return;
    Object.assign(card, patch || {});
  };

  Object.assign(C.sources, {
    "oshaLotoInteractive": {
      "title": "Lockout/Tagout Interactive Training Program",
      "org": "U.S. Occupational Safety and Health Administration",
      "kind": "Government interactive safety tutorial and case studies",
      "url": "https://www.osha.gov/etools/lockout-tagout"
    },
    "medlineElectricalInjury": {
      "title": "Electrical Injury — First Aid and Emergency Response",
      "org": "MedlinePlus / U.S. National Library of Medicine",
      "kind": "Government medical first-aid guidance",
      "url": "https://www.medlineplus.gov/ency/article/000053.htm"
    },
    "oshaFireExtinguisher": {
      "title": "Portable Fire Extinguishers — Basics, Classes, Selection, and Use",
      "org": "U.S. Occupational Safety and Health Administration",
      "kind": "Government interactive fire-safety training",
      "url": "https://www.osha.gov/etools/evacuation-plans-procedures/emergency-standards/portable-extinguishers/"
    },
    "oshaLadderSafety": {
      "title": "Construction eTool — Ladder Safety",
      "org": "U.S. Occupational Safety and Health Administration",
      "kind": "Government ladder-safety training",
      "url": "https://www.osha.gov/etools/construction/falls/ladder-safety"
    },
    "oshaDriverSafety": {
      "title": "Motor Vehicle Safety — Driver Safety Training",
      "org": "U.S. Occupational Safety and Health Administration",
      "kind": "Government work-vehicle safety training",
      "url": "https://www.osha.gov/motor-vehicle-safety/driver-safety-training"
    },
    "oshaRfSafety": {
      "title": "Radiofrequency and Microwave Radiation — Hazards and Controls",
      "org": "U.S. Occupational Safety and Health Administration",
      "kind": "Government RF hazard and control guidance",
      "url": "https://www.osha.gov/radiofrequency-and-microwave-radiation/hazards-solutions"
    },
    "oshaFiberLaserSafety": {
      "title": "OSHA Technical Manual — Optical Fiber Communication System Laser Safety",
      "org": "U.S. Occupational Safety and Health Administration",
      "kind": "Government optical-fiber and laser safety guidance",
      "url": "https://www.osha.gov/otm/section-3-health-hazards/chapter-6"
    },
    "oshaElectricalStandardsTrainer": {
      "title": "Electrical Safety Trainer Guide — NEC, NFPA 70E, and Safe Electrical Work Context",
      "org": "U.S. Occupational Safety and Health Administration",
      "kind": "Government electrical-safety training guide",
      "url": "https://www.osha.gov/sites/default/files/2026-02/Module3TrainerGuide.pdf"
    },
    "aacMagnetismElectromagnetism": {
      "title": "Magnetism and Electromagnetism",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/magnetism-and-electromagnetism/"
    },
    "neetsGeneratorsMotors": {
      "title": "NEETS Module 5 — Introduction to Generators and Motors",
      "org": "U.S. Navy Electricity and Electronics Training Series",
      "kind": "Technician self-study course with worked theory and review questions",
      "url": "https://maritime.org/doc/neets/mod05.pdf"
    },
    "neetsWaveGeneration": {
      "title": "NEETS Module 9 — Introduction to Wave-Generation and Wave-Shaping",
      "org": "U.S. Navy Electricity and Electronics Training Series",
      "kind": "Technician self-study course with calculations, circuits, and review questions",
      "url": "https://maritime.org/doc/neets/mod09.pdf"
    },
    "tiPllFundamentals": {
      "title": "TI Precision Labs — Phase-Locked Loop Fundamentals",
      "org": "Texas Instruments",
      "kind": "Manufacturer video series",
      "url": "https://www.ti.com/video/series/precision-labs/ti-precision-labs-phase-lock-loop-fundamentals.html"
    },
    "mitPiezoLab": {
      "title": "Lab 9 — Piezoelectricity",
      "org": "MIT OpenCourseWare — Electrical Engineering and Computer Science",
      "kind": "University video tutorial and physical-device exploration",
      "url": "https://ocw.mit.edu/courses/6-s079-nanomaker-spring-2013/resources/lab-9-piezoelectricity/"
    },
    "tekPulseDutyCycle": {
      "title": "What Is a Signal Generator? — Pulse Width and Duty Cycle",
      "org": "Tektronix",
      "kind": "Test-equipment manufacturer instructional primer",
      "url": "https://www.tek.com/en/documents/primer/xyzs-signal-generators"
    },
    "neetsTestEquipment": {
      "title": "NEETS Module 16 — Introduction to Test Equipment",
      "org": "U.S. Navy Electricity and Electronics Training Series",
      "kind": "Technician self-study test-equipment course",
      "url": "https://maritime.org/doc/neets/mod16.pdf"
    },
    "digiKeyLcrMeter": {
      "title": "How to Use an LCR Meter",
      "org": "B&K Precision / DigiKey",
      "kind": "Manufacturer measurement demonstration video",
      "url": "https://www.digikey.com/en/videos/b/bk-precision/how-to-use-an-lcr-meter"
    },
    "digiKeyEsr70": {
      "title": "Atlas ESR70 — Equivalent Series Resistance and Capacitor Testing",
      "org": "Peak Electronic Design / DigiKey",
      "kind": "Manufacturer instrument guide",
      "url": "https://media.digikey.com/pdf/Data%20Sheets/Peak%20PDFs/ESR70%20Atlas%20ESR%20Gold_Web.pdf"
    },
    "ietDecadeBoxes": {
      "title": "Resistance, Capacitance, and Inductance Decade Boxes",
      "org": "IET Labs",
      "kind": "Metrology manufacturer substitution-box reference",
      "url": "https://www.ietlabs.com/decade-box.html"
    },
    "tekSignalGenerator": {
      "title": "What Is a Signal Generator?",
      "org": "Tektronix",
      "kind": "Test-equipment manufacturer instructional primer",
      "url": "https://www.tek.com/en/documents/primer/xyzs-signal-generators"
    },
    "keysightElectronicLoadBasics": {
      "title": "Electronic Load Fundamentals",
      "org": "Keysight Technologies",
      "kind": "Manufacturer test-instrument white paper and training foundation",
      "url": "https://www.keysight.com/gb/en/assets/7018-06481/white-papers/5992-3625.pdf?courseId=75"
    },
    "bkVariableIsolatedAc": {
      "title": "1655A Variable Isolated AC Power Supply — Isolation and Line-Variation Testing",
      "org": "B&K Precision",
      "kind": "Manufacturer service-bench equipment reference",
      "url": "https://www.bkprecision.com/products/power-supplies/1655A?region_code=na"
    },
    "stacoVariableTransformer": {
      "title": "StacoVT Variable Transformer — Variable AC Voltage Control",
      "org": "Staco Energy Products",
      "kind": "Variable-transformer manufacturer technical reference",
      "url": "https://www.stacoenergy.com/products-solutions/products/variable-transformers-and-test-sets/variable-transformers/stacovt"
    },
    "aacSystemNotationsGraphs": {
      "title": "System Notations — Linear, Logarithmic, and Polar Graphs",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with transcript",
      "url": "https://www.allaboutcircuits.com/video-lectures/system-notations/"
    },
    "aacDecibels": {
      "title": "Decibels — Amplifier Basics",
      "org": "North Seattle Community College / All About Circuits",
      "kind": "College video lecture with worked dB calculations",
      "url": "https://www.allaboutcircuits.com/video-lectures/decibels-amplifier-basics/"
    },
    "khanEquationIsolation": {
      "title": "Why We Do the Same Thing to Both Sides — Isolating a Variable",
      "org": "Khan Academy",
      "kind": "Algebra video lesson with worked equations",
      "url": "https://www.khanacademy.org/math/algebra/one-variable-linear-equations/alg1-variables-on-both-sides/v/why-we-do-the-same-thing-to-both-sides-multi-step-equations"
    }
  });

  // WEEK 1 — close the CETa/workplace-safety and pre-power procedure gaps.
  appendMedia(1, [
    {
      "source": "oshaLotoInteractive",
      "role": "Required · Hazardous-energy control instruction",
      "use": "Complete the OSHA tutorial and case-study path for lockout/tagout purpose, energy-isolation procedure, verification, employee roles, and release from LOTO.",
      "watchFor": "Distinguish de-energizing from verified isolation. Identify stored-energy hazards and the sequence required before service work.",
      "gap": "This is workplace-safety instruction; it does not authorize work outside the course's approved low-voltage scope.",
      "verifiedEvidence": "OSHA's interactive program teaches 29 CFR 1910.147 through tutorial, hot topics, and case studies, including application of energy control, training, testing, group LOTO, and release from lockout/tagout."
    },
    {
      "source": "medlineElectricalInjury",
      "role": "Required · Electrical-emergency first aid",
      "use": "Learn the immediate response sequence for electrical injury: make the scene electrically safe, summon emergency help, assess airway/breathing/pulse, and provide appropriate first aid without becoming a second victim.",
      "watchFor": "Never touch a casualty still in contact with an energized source; high-voltage rescue requires trained emergency response and power isolation.",
      "gap": "Reading guidance does not substitute for employer-required CPR/first-aid certification or emergency training.",
      "verifiedEvidence": "Current MedlinePlus guidance explicitly covers current isolation, high-voltage stand-off, 911 activation, nonconductive rescue when safe, CPR/airway checks, burns, shock, and additional trauma."
    },
    {
      "source": "oshaFireExtinguisher",
      "role": "Required · Fire classes and extinguisher decision-making",
      "use": "Learn fire/extinguisher fundamentals, extinguisher classifications, correct selection, safe evacuation decision-making, and PASS use for incipient-stage fires.",
      "watchFor": "Recognize Class C as energized-electrical equipment and choose a nonconductive extinguishing agent; preserve an evacuation path and evacuate when conditions exceed incipient-stage response.",
      "gap": "Hands-on extinguisher training remains employer-specific when employees are designated to fight fires.",
      "verifiedEvidence": "OSHA's extinguisher eTool teaches fire classes, extinguisher ratings/selection, placement, use hazards, PASS operation, and when to evacuate."
    },
    {
      "source": "oshaLadderSafety",
      "role": "Required · Ladder and access safety",
      "use": "Learn ladder load, placement/angle, setup, inspection, climbing, and electrical-proximity rules before technician field work.",
      "watchFor": "Use the correct ladder type and setup for the environment; maintain stable placement and recognize electrical hazards before climbing.",
      "gap": "Site-specific fall-protection rules and competent-person direction still control actual work.",
      "verifiedEvidence": "OSHA's ladder-safety eTool teaches portable-ladder loads, setup angle, safe use, and fall-hazard controls."
    },
    {
      "source": "oshaDriverSafety",
      "role": "Required · Service/work-vehicle safety",
      "use": "Cover work-vehicle characteristics, controls, preventive checks, seat-belt/distraction policies, defensive driving, and backing hazards.",
      "watchFor": "Treat vehicle inspection and backing as technician safety tasks, not merely transportation details.",
      "gap": "Employer fleet policy and any CDL requirements remain controlling.",
      "verifiedEvidence": "OSHA's driver-safety training guidance explicitly lists vehicle limits/controls, preventive checks, policies, defensive driving, and backing."
    },
    {
      "source": "oshaRfSafety",
      "role": "Required · RF/microwave hazard awareness",
      "use": "Learn where occupational RF/microwave exposure can occur and the hierarchy of practical controls: shielding, distance, shutdown for maintenance, warnings, and exposure evaluation.",
      "watchFor": "Do not treat non-ionizing as harmless; risk depends on frequency, power density, geometry, and exposure conditions.",
      "gap": "Site-specific RF exposure limits and energized-transmitter procedures require the employer's RF safety program.",
      "verifiedEvidence": "OSHA identifies RF/MW hazard locations and controls including shielding, increased distance, equipment shutdown during maintenance, warnings, and exposure measurements."
    },
    {
      "source": "oshaFiberLaserSafety",
      "role": "Required · Fiber-optic/laser service hazard awareness",
      "use": "Learn why enclosed fiber systems are normally low-risk but can become an eye hazard during installation/service, disconnected connectors, broken fibers, or laser-test-equipment use.",
      "watchFor": "Never inspect an unknown live fiber with the unaided eye or optical magnifier; treat service conditions differently from normal enclosed operation.",
      "gap": "Specific optical-power limits, service-group controls, and PPE are system- and employer-specific.",
      "verifiedEvidence": "OSHA's technical manual explains OFCS service hazards, accessible-beam conditions, service groups, trained-personnel requirements, and optical test equipment controls."
    },
    {
      "source": "oshaElectricalStandardsTrainer",
      "role": "Required · NEC/NFPA electrical-safety context",
      "use": "Learn the distinct roles of NFPA 70 (NEC) for safe installation, NFPA 70B for maintenance, NFPA 70E for worker electrical safety, and OSHA electrical requirements.",
      "watchFor": "Do not confuse an installation code with energized-work authorization; applicable adopted code, OSHA rules, employer procedures, and qualified-person requirements still govern field work.",
      "gap": "This course builds code literacy, not electrician licensure or permission to perform code-regulated installation work.",
      "verifiedEvidence": "OSHA's electrical-safety trainer guide explicitly distinguishes NFPA 70/NEC, 70B, and 70E and explains their safety roles."
    },
    {
      "source": "keysightBenchPowerCourse",
      "role": "Required · Pre-power bench-supply procedure",
      "use": "Before first energization, apply the bench-supply workflow: verify the intended voltage, set a conservative current limit, confirm output state, connect with power off, then energize while watching current/readback.",
      "watchFor": "Predict expected current first; unexpected CC mode or current rise is a stop-and-investigate condition.",
      "gap": "Exact current limit must come from the circuit's expected load and component ratings.",
      "verifiedEvidence": "Existing verified Keysight course teaches bench-supply operation, CV/CC behavior, regulation, settings, and readback."
    },
    {
      "source": "flukeMultimeterGuide",
      "role": "Required · DMM pre-power verification",
      "use": "Use de-energized resistance/continuity checks, correct jacks/mode, polarity/reference checks, and expected-value reasoning before energizing a new circuit.",
      "watchFor": "Confirm the current lead is not left in the amperage jack and do not make resistance/continuity measurements on an energized circuit.",
      "gap": "Physical probe-handling skill remains part of the hands-on lab.",
      "verifiedEvidence": "Existing verified Fluke instruction covers modes, jacks, continuity/resistance workflow, voltage testing, and the current-jack short-circuit hazard."
    }
  ]);

  // WEEK 2 — close electromagnetism/electromechanics and wave-generation/shaping breadth.
  appendMedia(2, [
    {
      "source": "aacMagnetismElectromagnetism",
      "role": "Required · Electromagnetism foundation",
      "use": "Learn magnetic fields, flux, poles, flux density, permeability/reluctance, current-produced magnetic fields, and the field relationships behind electromechanical devices.",
      "watchFor": "Connect current direction to magnetic-field direction and explain why motors, generators, speakers, microphones, and magnetic components depend on electromagnetic interaction.",
      "gap": "Generator/motor construction and energy conversion are developed in the next resource.",
      "verifiedEvidence": "The inspected college transcript explicitly teaches magnetism/electromagnetism and ties the principles to motors, generators, speakers, microphones, and other devices."
    },
    {
      "source": "neetsGeneratorsMotors",
      "role": "Required · Motors and generators technician course",
      "use": "Study the mapped generator/motor sections to connect electromagnetic induction, torque, counter-EMF, commutation/slip rings, and AC/DC machine behavior to electrical↔mechanical energy conversion.",
      "watchFor": "Explain the direction/energy conversion physically before memorizing machine types; distinguish generator action from motor action.",
      "gap": "Modern drive electronics and detailed motor-control firmware are outside this week's scope.",
      "verifiedEvidence": "NEETS Module 5 is a structured self-study course with chapters on DC generators, DC motors, AC generators, and AC motors and embedded learning objectives/review questions."
    },
    {
      "source": "neetsWaveGeneration",
      "role": "Required · Oscillators, pulse circuits, tuned circuits, and wave-shaping course",
      "use": "Complete the mapped sections on tuned circuits/Q/bandwidth, oscillators, square/pulse waveforms, astable/monostable/bistable multivibrators, limiters/clampers, wave shaping, and RC/RL integrator/differentiator behavior.",
      "watchFor": "Calculate resonant frequency, Q/bandwidth, pulse timing, and RC/RL time-constant effects; identify circuit behavior from cause/effect rather than waveform memorization.",
      "gap": "PLL-specific loop blocks and design concepts are taught separately by TI below.",
      "verifiedEvidence": "Inspected NEETS Module 9 objectives explicitly require resonant-frequency and Q/bandwidth calculations, oscillators/multivibrators, wave generation, limiters/clampers, and RC/RL integrators/differentiators."
    },
    {
      "source": "tekPulseDutyCycle",
      "role": "Required · Pulse-width and duty-cycle calculation",
      "use": "Learn pulse width, period/repetition interval, frequency, and duty cycle and calculate duty cycle as active pulse width divided by period.",
      "watchFor": "Keep pulse width, period, frequency, and duty cycle as distinct quantities with units; verify time-domain measurements against calculated values.",
      "gap": "Circuit-generation mechanisms are supplied by NEETS Module 9.",
      "verifiedEvidence": "Tektronix's signal-generator primer defines pulse width and duty cycle and provides quantitative timing examples."
    },
    {
      "source": "tiPllFundamentals",
      "role": "Required · Phase-locked-loop video series",
      "use": "Complete the five-part TI path covering VCOs, integer/fractional dividers, phase detectors, charge pumps, loop filters, bandwidth, and transient response.",
      "watchFor": "Trace reference → phase/frequency comparison → loop filter → VCO → feedback divider and explain what lock means physically.",
      "gap": "RF synthesizer implementation details beyond the mapped fundamentals are optional enrichment.",
      "verifiedEvidence": "TI's current five-video Precision Labs series explicitly covers PLL building blocks, loop-filter design/theory, transient response, and bandwidth design."
    },
    {
      "source": "mitPiezoLab",
      "role": "Required · Piezoelectricity teaching/demo",
      "use": "Use the MIT tutorial to connect mechanical stress and electrical response in real piezo elements and recognize piezo devices as transducers/resonant elements.",
      "watchFor": "Explain the conversion mechanism and identify where a piezo element is acting as a sensor, actuator, buzzer, igniter, or resonant device.",
      "gap": "Detailed material constants and precision transducer design are beyond CETa foundation scope.",
      "verifiedEvidence": "MIT EECS's video tutorial disassembles, tests, and explores piezoelectric elements in a lighter and buzzer."
    }
  ]);

  // WEEK 3 — close the CETa test-equipment breadth gap without disturbing existing DMM/supply/scope instruction.
  appendMedia(3, [
    {
      "source": "neetsTestEquipment",
      "role": "Required · Technician test-equipment breadth course",
      "use": "Use the mapped chapters to learn test-equipment safety, R/C/L measurement, bridges, signal generators, frequency measurement/counters, logic-probe/pulse-generator work, oscilloscopes, and spectrum-analyzer fundamentals.",
      "watchFor": "For every instrument, state what quantity it measures/generates, how it connects, what can damage it or the DUT, and what conclusion a reading can support.",
      "gap": "Use the modern manufacturer resources already assigned for current DMM, bench-supply, and oscilloscope controls.",
      "verifiedEvidence": "Inspected NEETS Module 16 includes chapters on miscellaneous measurements, basic meters, common/special test equipment, and oscilloscope/spectrum analyzer; learning objectives include R/C/L bridge measurement and safe test procedures."
    },
    {
      "source": "tekSignalGenerator",
      "role": "Required · Modern signal-generator instruction",
      "use": "Learn waveform type, amplitude/offset, frequency, phase, pulse width/duty cycle, output impedance/termination, and safe connection of a generator to a DUT.",
      "watchFor": "Predict the intended DUT stimulus first and account for generator/source impedance and termination when comparing setpoint to measured amplitude.",
      "gap": "Advanced arbitrary-waveform synthesis is optional.",
      "verifiedEvidence": "Tektronix's instructional primer teaches signal-generator waveform parameters including pulse width/duty cycle and practical generator concepts."
    },
    {
      "source": "digiKeyLcrMeter",
      "role": "Required · LCR measurement demonstration",
      "use": "Learn how measurement mode and test frequency affect capacitance/inductance readings and how to select settings appropriate to the component under test.",
      "watchFor": "Do not treat a single L/C reading as context-free; note test frequency and series/parallel measurement model.",
      "gap": "Bridge theory and resistance measurement are reinforced by NEETS Module 16.",
      "verifiedEvidence": "B&K Precision's DigiKey video demonstrates test-frequency and measurement-mode selection for accurate capacitance and inductance measurements."
    },
    {
      "source": "digiKeyEsr70",
      "role": "Required · ESR/capacitor-condition instruction",
      "use": "Learn what equivalent series resistance represents, how ESR testing complements capacitance measurement, and when in-circuit readings can be useful or misleading.",
      "watchFor": "Safely discharge capacitors first; compare ESR against component type/value expectations rather than using a universal pass/fail number.",
      "gap": "The instrument's internal discharge protection does not make it safe to connect to dangerously charged capacitors.",
      "verifiedEvidence": "The Peak ESR70 guide defines ESR/capacitance functions, in/out-of-circuit behavior, controlled discharge, and explicit charged-capacitor safety responsibility."
    },
    {
      "source": "ietDecadeBoxes",
      "role": "Required · R/C/L substitution and decade-box reference",
      "use": "Learn the purpose of resistance, capacitance, and inductance decade boxes as known adjustable standards/substitutes for comparison, fault isolation, calibration, and circuit experimentation.",
      "watchFor": "Stay within voltage/current/power/frequency limits and record the substituted value that restores or changes circuit behavior.",
      "gap": "This reference establishes the tool and its ranges; substitution as a troubleshooting method is reinforced in Week 5.",
      "verifiedEvidence": "IET Labs documents dedicated resistance, capacitance, and inductance decade boxes, including laboratory/educational use and selectable ranges/resolution."
    },
    {
      "source": "keysightElectronicLoadBasics",
      "role": "Required · Electronic/dummy-load instruction",
      "use": "Learn why an electronic load is the controllable counterpart to a source: it sinks current/absorbs power and can emulate a DUT using constant-current, constant-voltage, constant-power, or constant-resistance modes.",
      "watchFor": "Check voltage/current/power limits and thermal capacity before connecting; distinguish a passive dummy load from an actively controlled electronic load.",
      "gap": "Hands-on load testing remains limited to approved low-voltage equipment and the actual instrument ratings.",
      "verifiedEvidence": "Keysight's Electronic Load Fundamentals defines electronic loads, source/load roles, DUT emulation, and CC/CV/CP/CR operating modes for power-source testing."
    },
    {
      "source": "bkVariableIsolatedAc",
      "role": "Required · Isolation-transformer/service-bench instruction",
      "use": "Study a real variable isolated AC service supply to understand why service benches may need mains isolation and controlled AC line variation when evaluating line-powered equipment.",
      "watchFor": "Isolation breaks the direct mains reference but does not make the secondary harmless; hazardous voltage, stored energy, current capability, and safe probing rules still apply.",
      "gap": "This is conceptual CETa/service-equipment preparation only; the course does not authorize live-mains servicing.",
      "verifiedEvidence": "B&K documents the 1655A as a 0–150 VAC variable isolated AC supply for line-variation testing with an isolation transformer intended for hot-chassis servicing."
    },
    {
      "source": "stacoVariableTransformer",
      "role": "Required · Variac/variable-transformer concept",
      "use": "Learn how a variable transformer continuously adjusts AC output voltage and how that function differs from electrical isolation.",
      "watchFor": "A variable transformer controls voltage; do not assume it provides isolation unless the specific model is explicitly isolated. Identify the isolation function separately before any service procedure.",
      "gap": "No live-mains operation is required in this course; this card closes the technician-equipment knowledge objective only.",
      "verifiedEvidence": "Staco explains that its variable transformer uses a movable brush on a toroidal winding for continuously adjustable output and separately lists isolated models, supporting the voltage-control-versus-isolation distinction."
    },
    {
      "source": "rsSpectrumBasics",
      "role": "Required · Modern spectrum-analyzer reinforcement",
      "use": "Use the existing Rohde & Schwarz manufacturer lesson to connect frequency-domain display, center/span, level, and basic analyzer operation to the broader NEETS instrument taxonomy.",
      "watchFor": "Choose a safe input level and explain what frequency-domain evidence adds beyond a time-domain oscilloscope view.",
      "gap": "Advanced RF measurements remain in the later RF/telecommunications module.",
      "verifiedEvidence": "Existing v16.3.5 source is a Rohde & Schwarz test-equipment manufacturer video on basic spectrum-analyzer operation."
    }
  ]);

  // WEEK 4 — close the mapped math/representation foundation gap while preserving the strong AC/time-domain path.
  appendMedia(4, [
    {
      "source": "aacBinaryConversion",
      "role": "Required · Number-system teaching",
      "use": "Learn binary, decimal, and hexadecimal representation and perform conversions rather than relying on a calculator's display mode.",
      "watchFor": "Show place value and powers-of-two reasoning and verify the converted value in both directions.",
      "gap": "Boolean manipulation follows below; deeper digital design remains in Week 11.",
      "verifiedEvidence": "Existing verified college video teaches binary/decimal/hex conversion with worked examples."
    },
    {
      "source": "aacBooleanPostulates",
      "role": "Required · Boolean-algebra foundation",
      "use": "Learn Boolean postulates, identities, complements, and simplification as the algebraic language behind digital logic.",
      "watchFor": "Keep Boolean operators distinct from ordinary arithmetic and verify simplifications with logic meaning/truth values.",
      "gap": "Gate-level implementation and sequential logic are developed later.",
      "verifiedEvidence": "Existing verified college video teaches Boolean-algebra postulates and simplification."
    },
    {
      "source": "aacSystemNotationsGraphs",
      "role": "Required · Technical graph interpretation",
      "use": "Learn how to read linear, logarithmic, and polar graphs, including interpolation and wide-range logarithmic axes used in electronics.",
      "watchFor": "Identify axis quantity/unit/scale before reading a value; do not assume equal physical spacing means equal numeric increments on a log axis.",
      "gap": "Frequency-response application deepens in filters/amplifiers later.",
      "verifiedEvidence": "The inspected college transcript explicitly teaches linear, logarithmic, and polar graphs and interpolation using electronics examples."
    },
    {
      "source": "aacDecibels",
      "role": "Required · Decibel calculation teaching",
      "use": "Learn gain/loss as a ratio and calculate voltage/current/power gain in decibels using logarithms and worked examples.",
      "watchFor": "Use 20 log10 for voltage/current ratios under the stated impedance assumptions and 10 log10 for power ratios; preserve sign for gain versus loss.",
      "gap": "Detailed amplifier design is not required here; this card supplies the mapped dB math foundation.",
      "verifiedEvidence": "The inspected college video derives and works voltage/current/power decibel calculations from output/input ratios."
    },
    {
      "source": "khanEquationIsolation",
      "role": "Required · Formula/equation rearrangement foundation",
      "use": "Practice preserving equality while isolating a variable, then immediately transfer the same operations to electronics formulas such as V=IR, P=VI, X=1/(2πfC), and f=1/(2π√LC).",
      "watchFor": "Perform the same legal operation to both sides, track units, and substitute the result back into the original relationship as a check.",
      "gap": "The video teaches algebraic isolation generally; the course's electronics formulas provide the domain-specific practice set.",
      "verifiedEvidence": "Khan Academy's worked video explicitly teaches isolating a variable by performing equivalent operations on both sides of an equation."
    }
  ]);


  // ---------------------------------------------------------------------------
  // CHUNK 2 — TARGETED CONTENT-COMPLETION REPAIR: WEEKS 7–12
  // Week 6 remains untouched because the adversarial standalone audit passed it.
  // ---------------------------------------------------------------------------
  Object.assign(C.sources, {
    "aacComponentResistors": {
        "title": "Electronic Components — Resistors",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/electronic-components-resistors/"
    },
    "aacResistorTypes": {
        "title": "Resistor Types — Thermistors, Photoresistors, Potentiometers, and Construction",
        "org": "All About Circuits",
        "kind": "Engineering textbook tutorial",
        "url": "https://www.allaboutcircuits.com/textbook/reference/chpt-9/resistors-types/"
    },
    "aacCapacitorsPart1": {
        "title": "Capacitors (Part 1) — Construction, Charge, Capacitance, and Q=CV",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/capacitors-part-1/"
    },
    "aacCapacitorsPart2": {
        "title": "Capacitors (Part 2) — Current Flow, Types, Polarity, and Ratings",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/capacitors-part-2-current-flow-in-a-capacitive-circuit/"
    },
    "aacInductorsPart2": {
        "title": "Inductors (Part 2) — Types and Applications",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/inductors-part-2-types-and-applications/"
    },
    "aacIntroICs": {
        "title": "Introduction to Integrated Circuits (ICs)",
        "org": "All About Circuits",
        "kind": "Engineering video tutorial",
        "url": "https://www.allaboutcircuits.com/video-tutorials/introduction-to-integrated-circuits/"
    },
    "aacSsrBasics": {
        "title": "The Basics of SSRs (Solid-State Relays)",
        "org": "All About Circuits",
        "kind": "Engineering technical article",
        "url": "https://www.allaboutcircuits.com/technical-articles/basics-of-ssr-solid-state-relay-the-switching-device/"
    },
    "neetsSolidStateDevices": {
        "title": "NEETS Module 7 — Introduction to Solid-State Devices and Power Supplies",
        "org": "U.S. Navy Electricity and Electronics Training Series / Historic Naval Ships Association",
        "kind": "Technician self-study manual",
        "url": "https://maritime.org/doc/neets/mod07.pdf"
    },
    "aacZener": {
        "title": "Special Diodes — Zener Diodes",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/zener-diodes/"
    },
    "aacSpecialPurposeDiodes": {
        "title": "Special-Purpose Diodes — Schottky and Other Device Types",
        "org": "All About Circuits",
        "kind": "Engineering textbook tutorial",
        "url": "https://www.allaboutcircuits.com/textbook/semiconductors/chpt-3/special-purpose-diodes/"
    },
    "aacDiac": {
        "title": "The DIAC",
        "org": "All About Circuits",
        "kind": "Engineering textbook tutorial",
        "url": "https://www.allaboutcircuits.com/textbook/semiconductors/chpt-7/the-diac/"
    },
    "aacTriac": {
        "title": "The TRIAC",
        "org": "All About Circuits",
        "kind": "Engineering textbook tutorial",
        "url": "https://www.allaboutcircuits.com/textbook/semiconductors/chpt-7/the-triac/"
    },
    "aacJfet": {
        "title": "Junction Field-Effect Transistors (JFET)",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/junction-field-effect-transistors-jfet/"
    },
    "aacIgbt": {
        "title": "Insulated-Gate Bipolar Transistors (IGBTs)",
        "org": "All About Circuits",
        "kind": "Engineering textbook tutorial",
        "url": "https://www.allaboutcircuits.com/textbook/semiconductors/chpt-6/igbts/"
    },
    "aacDarlington": {
        "title": "Darlington Pair — Compound BJT Current Gain",
        "org": "All About Circuits",
        "kind": "Engineering textbook tutorial within common-collector amplifiers",
        "url": "https://www.allaboutcircuits.com/textbook/semiconductors/chpt-4/common-collector-amplifier/"
    },
    "aacPowerSuppliesApplications": {
        "title": "Power Supplies — Applications",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/power-supplies-applications/"
    },
    "tiBatteryTraining": {
        "title": "Battery Management Deep Dive — Battery Chargers: Fundamentals",
        "org": "Texas Instruments",
        "kind": "Manufacturer on-demand video training series",
        "url": "https://www.ti.com/video/series/battery-management-deep-dive-on-demand-technical-training.html"
    },
    "aacAmplifierConfigs": {
        "title": "Amplifier Configurations — Common-Emitter, Common-Collector, and Common-Base",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/amplifier-configurations/"
    },
    "aacJfetAmplifiers": {
        "title": "JFET Amplifiers — Common-Source, Common-Gate, and Common-Drain",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/jfet-amplifiers/"
    },
    "aacMosfetAmplifiers": {
        "title": "MOSFET Amplifiers — Biasing and Common-Source Behavior",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/mosfet-amplifiers/"
    },
    "aacTransistorBiasing": {
        "title": "Transistor Biasing (continued) — Cutoff, Linear Region, and Saturation",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/transistor-biasing-cont/"
    },
    "aacCounters": {
        "title": "Counters — Synchronous/Asynchronous Counting and Frequency Division",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/counters/"
    },
    "aacShiftRegisters": {
        "title": "Introduction to Shift Registers",
        "org": "All About Circuits",
        "kind": "Engineering digital-circuits tutorial",
        "url": "https://www.allaboutcircuits.com/textbook/digital/chpt-12/introduction-to-shift-registers/"
    },
    "aacSevenSegmentDisplay": {
        "title": "Digital Lab — 7-Segment LED Display and Decoder/Driver",
        "org": "All About Circuits",
        "kind": "Engineering worked digital-circuit tutorial",
        "url": "https://www.allaboutcircuits.com/textbook/experiments/chpt-7/7-segment-display/"
    },
    "aacMicroprocessorBusNetworks": {
        "title": "Microprocessor Bus Networks — Address, Data, and Control Buses",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/microprocessor-bus-networks/"
    },
    "aacComputerHardware": {
        "title": "Computer Hardware — Processor, Memory, Controllers, Buses, and Peripherals",
        "org": "North Seattle Community College / All About Circuits",
        "kind": "College video lecture with transcript",
        "url": "https://www.allaboutcircuits.com/video-lectures/computer-hardware/"
    },
    "nasaCrewElectronicsRepair": {
        "title": "NASA/TM-2011-216933 — Electronics Repair Training for Spaceflight Crews",
        "org": "NASA",
        "kind": "Government electronics-repair training manual",
        "url": "https://ntrs.nasa.gov/api/citations/20110006369/downloads/20110006369.pdf"
    },
    "neetsSolderingWiring": {
        "title": "NEETS Module 4 — Introduction to Electrical Conductors, Wiring Techniques, and Schematic Reading",
        "org": "U.S. Navy Electricity and Electronics Training Series / Historic Naval Ships Association",
        "kind": "Technician self-study manual",
        "url": "https://maritime.org/doc/neets/mod04.pdf"
    },
    "paceBgaTutorial": {
        "title": "Official IR 3000 Tutorial — Install and Remove BGA and SMC",
        "org": "PACE Worldwide",
        "kind": "Professional rework video tutorial",
        "url": "https://paceworldwide.com/video/official-ir-3000-tutorial-install-and-remove-bga-and-smc"
    },
    "digiKeyBrokenTrace": {
        "title": "How to Repair Broken Traces — Another Teaching Moment",
        "org": "DigiKey Electronics",
        "kind": "Electronics repair video",
        "url": "https://www.digikey.com/en/videos/d/digi-key-electronics/how-to-repair-broken-traces--another-teaching-moment--digikey-electronics"
    },
    "paceThermoBondCitKit": {
        "title": "ThermoBond Cir-Kit — Land, Pad, and Trace Repair Procedures",
        "org": "PACE Worldwide",
        "kind": "Professional PCB repair procedure manual",
        "url": "https://paceworldwide.com/sites/default/files/2021-08/ThermoBond_Cit-Kit.pdf"
    }
});

  appendMedia(7, [
    {
        "source": "aacComponentResistors",
        "role": "Required · Component-identification video",
        "use": "Learn resistor construction families, surface-mount versus leaded forms, power/tolerance ratings, 3/4/5-band color codes, rheostats and potentiometers.",
        "watchFor": "Identify value, tolerance, power implications and variable-resistor terminal use from the physical part rather than schematic symbol alone.",
        "gap": "Temperature/light-sensitive resistor families are completed by the next reference.",
        "verifiedEvidence": "The inspected transcript explicitly teaches surface-mount, wirewound, film and carbon-composition resistors; color codes; tolerance; rheostats; and potentiometers."
    },
    {
        "source": "aacResistorTypes",
        "role": "Required · Specialty-resistor reference",
        "use": "Add thermistors, photoresistors and construction-dependent behavior to the resistor identification set.",
        "watchFor": "Separate a fixed resistor from a sensor-dependent resistor and explain what physical quantity changes its resistance.",
        "gap": "Use device datasheets for exact curves/ranges.",
        "verifiedEvidence": "The current resistor-types tutorial covers thermistors/photoresistors and variable-resistor forms alongside fixed-resistor construction."
    },
    {
        "source": "aacCapacitorsPart1",
        "role": "Required · Capacitor construction/calculation video",
        "use": "Learn plate/dielectric construction, stored charge, capacitance and the Q=CV relationship before selecting or testing a capacitor.",
        "watchFor": "Distinguish charge Q, capacitance C and voltage V; explain what geometry/dielectric changes do to capacitance.",
        "gap": "Types, polarity and practical ratings follow in Part 2.",
        "verifiedEvidence": "The inspected transcript teaches capacitor construction, electrostatic storage, capacitance and charge relationships."
    },
    {
        "source": "aacCapacitorsPart2",
        "role": "Required · Capacitor type/rating video",
        "use": "Learn fixed/variable and polarized/non-polarized categories, voltage/capacitance/temperature ratings, and charging-current behavior.",
        "watchFor": "Treat polarity and voltage rating as safety/reliability constraints; do not infer dielectric technology from package appearance alone.",
        "gap": "Specific dielectric families are datasheet/reference work rather than memorized package guesses.",
        "verifiedEvidence": "The inspected transcript explicitly teaches capacitor categories, polarity hazards and ratings; it does not overclaim the textbook-only technology photos."
    },
    {
        "source": "aacInductorsPart2",
        "role": "Required · Inductor types/application video",
        "use": "Learn practical inductor forms/applications, ferrite suppression, series/parallel combinations and how construction/application relates to behavior.",
        "watchFor": "Connect core/application choice to inductance, reactance and unwanted RF behavior rather than treating every coil as interchangeable.",
        "gap": "Exact saturation/current/core-loss limits remain datasheet-specific.",
        "verifiedEvidence": "The inspected lecture teaches inductor types/applications, ferrite beads and circuit combinations."
    },
    {
        "source": "aacIntroICs",
        "role": "Required · IC construction/package video",
        "use": "Learn what an integrated circuit is, die/package/pin relationships, through-hole versus surface-mount packaging and BGA-style packaging.",
        "watchFor": "Separate the silicon die/circuit from the external package and recognize that package style does not define function.",
        "gap": "Specific IC function/pin behavior comes from its datasheet.",
        "verifiedEvidence": "The current video explicitly explains IC die/package construction and through-hole, surface-mount and BGA package examples."
    },
    {
        "source": "aacSsrBasics",
        "role": "Required · Solid-state relay teaching",
        "use": "Learn how an SSR provides control/isolation without moving contacts and how BJT/MOSFET/SCR/TRIAC output stages change AC/DC suitability.",
        "watchFor": "Check output device/type, leakage/on-state loss and whether the load is AC or DC before selecting an SSR.",
        "gap": "Mains-load design remains outside the hands-on course safety boundary.",
        "verifiedEvidence": "The inspected technical article explains SSR isolation, output-device families, AC/DC constraints and tradeoffs versus electromechanical relays."
    }
]);

  appendMedia(8, [
    {
        "source": "neetsSolidStateDevices",
        "role": "Required · Coherent semiconductor technician sequence",
        "use": "Use the semiconductor-device chapters for the broader technician device family: special diodes, FETs, SCRs, TRIACs, photo-devices/opto-couplers and their switching/control roles.",
        "watchFor": "For each device, identify terminals, conduction/control mechanism, normal polarity and a representative application before troubleshooting it.",
        "gap": "Modern device-selection limits still come from current datasheets; focused current resources below deepen key families.",
        "verifiedEvidence": "The technician manual contains sequenced chapters on semiconductor diodes, transistors, special devices and solid-state power supplies, including SCR/TRIAC and photoelectric devices."
    },
    {
        "source": "aacZener",
        "role": "Required · Zener-diode video",
        "use": "Learn reverse-breakdown operation, Zener voltage/power ratings and simple regulation/clamping behavior.",
        "watchFor": "Do not treat intentional Zener breakdown as ordinary diode failure; include current limiting in every regulation example.",
        "gap": "Dynamic impedance/tolerance details come from the selected Zener datasheet.",
        "verifiedEvidence": "The college lecture teaches reverse-breakdown operation, ratings and Zener regulation applications."
    },
    {
        "source": "aacSpecialPurposeDiodes",
        "role": "Required · Special-diode breadth",
        "use": "Learn how Schottky and other special-purpose diode constructions change forward drop, switching/recovery and application behavior.",
        "watchFor": "Choose a diode family from the required voltage/current/speed/function instead of assuming any diode is interchangeable.",
        "gap": "LED/photo-device operation is reinforced in the NEETS sequence and exact ratings remain datasheet-specific.",
        "verifiedEvidence": "The current semiconductor tutorial includes Schottky and other special-purpose diode characteristics and tradeoffs."
    },
    {
        "source": "aacDiac",
        "role": "Required · DIAC teaching",
        "use": "Learn bidirectional breakover behavior and why a DIAC is commonly used as a repeatable TRIAC trigger element.",
        "watchFor": "Distinguish DIAC breakover triggering from a gated SCR/TRIAC control terminal.",
        "gap": "High-energy AC design remains conceptual only in this course.",
        "verifiedEvidence": "The current thyristor tutorial explains DIAC bidirectional breakover and its triggering role."
    },
    {
        "source": "aacTriac",
        "role": "Required · TRIAC teaching",
        "use": "Learn bidirectional AC control, the back-to-back-SCR analogy, gate triggering and phase-control use.",
        "watchFor": "Explain why TRIAC behavior differs from an SCR on alternating current and why current zero-crossing matters to turn-off.",
        "gap": "Mains phase-control construction is outside the hands-on route.",
        "verifiedEvidence": "The current tutorial explicitly teaches TRIAC bidirectional operation, triggering and AC phase-control applications."
    },
    {
        "source": "aacJfet",
        "role": "Required · JFET family video",
        "use": "Add JFET construction, terminals, channel control and switch/amplifier use to the transistor family map.",
        "watchFor": "Contrast voltage-controlled FET input behavior with BJT base-current control.",
        "gap": "Amplifier configurations are revisited in Week 10.",
        "verifiedEvidence": "The inspected college video teaches JFET construction/operation and its amplifier/switch role."
    },
    {
        "source": "aacIgbt",
        "role": "Required · IGBT family reference",
        "use": "Learn why an IGBT combines insulated-gate drive behavior with bipolar conduction characteristics and where it fits in power switching.",
        "watchFor": "Compare switching speed/conduction tradeoffs with MOSFET/BJT rather than treating IGBT as a drop-in substitute.",
        "gap": "Gate-drive/protection design is beyond this module's required depth.",
        "verifiedEvidence": "The current semiconductor tutorial explains the IGBT hybrid structure and practical tradeoffs."
    },
    {
        "source": "aacDarlington",
        "role": "Required · Darlington family reference",
        "use": "Learn the two-transistor compound connection and why current gain multiplies while voltage/headroom tradeoffs increase.",
        "watchFor": "Recognize a Darlington as a compound BJT structure and account for its larger effective base-emitter drop in practical circuits.",
        "gap": "Exact integrated-Darlington limits come from its datasheet.",
        "verifiedEvidence": "The current BJT amplifier tutorial includes Darlington-pair structure and gain multiplication."
    }
]);

  appendMedia(9, [
    {
        "source": "aacPowerSuppliesApplications",
        "role": "Required · Linear-supply/filter video",
        "use": "Trace AC input through transformation/rectification/filtering/regulation and explicitly study capacitor, L and π filter topologies.",
        "watchFor": "Predict where ripple exists, what each filter element suppresses and what measurements should appear before/after the filter.",
        "gap": "Battery charging and service-safety boundaries are taught separately below.",
        "verifiedEvidence": "The inspected lecture teaches rectification/filtering and explicitly introduces L and π filter networks in the AC-to-DC chain."
    },
    {
        "source": "tiBatteryTraining",
        "role": "Required · Battery/recharge video sequence",
        "use": "Complete the introductory battery-management lesson plus the mapped charger-fundamentals lessons, especially Li-ion charging and charger-system topology.",
        "watchFor": "Separate cell chemistry limits, charging stages/current/voltage control, protection and system power-path behavior.",
        "gap": "Never improvise charge parameters; the specific cell/pack manufacturer documentation remains authoritative.",
        "verifiedEvidence": "TI's current training page lists an Introduction to Battery Management block and a 16-video Battery Chargers: Fundamentals sequence including Li-ion charging and charger-system overview."
    },
    {
        "source": "neetsSolidStateDevices",
        "role": "Required · Technician power-supply troubleshooting reference",
        "use": "Use the solid-state power-supply chapter to reinforce rectifier/filter/regulator blocks, expected waveforms and fault isolation.",
        "watchFor": "Troubleshoot block-by-block from source to load and distinguish a failed rectifier, filter and regulator by measured evidence.",
        "gap": "Legacy examples are used for durable topology/troubleshooting principles, not as modern product-design guidance.",
        "verifiedEvidence": "The technician module includes a dedicated solid-state power-supply chapter after its semiconductor-device sequence."
    },
    {
        "source": "oshaElectricalStandardsTrainer",
        "role": "Required · Line-connected service boundary",
        "use": "Review electrical-hazard, de-energization and qualified-person boundaries before discussing line-connected supply faults.",
        "watchFor": "Do not turn a conceptual mains-supply lesson into live-line servicing; de-energize/isolate unless an authorized qualified procedure explicitly requires otherwise.",
        "gap": "AU-ESET 301 hands-on work remains approved low-voltage work.",
        "verifiedEvidence": "This government safety resource was already verified in Chunk 1 for electrical-work standards and safe-work boundaries."
    },
    {
        "source": "bkVariableIsolatedAc",
        "role": "Required · Isolation-versus-variable-AC concept",
        "use": "Reinforce why an isolated variable AC service source performs two distinct functions: galvanic isolation and controlled input-voltage adjustment.",
        "watchFor": "Do not call a plain variable transformer an isolation transformer; verify whether isolation is actually provided.",
        "gap": "No live-mains servicing is required by this course.",
        "verifiedEvidence": "The manufacturer service-supply documentation explicitly describes isolated variable AC output for service work."
    }
]);

  appendMedia(10, [
    {
        "source": "tiAudioAmpBasics",
        "role": "Required · Amplifier roles/classes video",
        "use": "Assign the TI amplifier-basics video here—not merely in the source registry—to learn amplifier purpose/specifications and Class A/B/AB/D distinctions.",
        "watchFor": "Relate class to conduction/switching behavior, efficiency/distortion tradeoffs and intended load/application rather than memorizing letters.",
        "gap": "Small-signal BJT/FET bias/configuration depth follows in the college lectures below.",
        "verifiedEvidence": "The already-verified TI video covers amplifier purpose/fundamentals/specifications and Class A/B/AB/D; this repair fixes the prior assignment/registry mismatch."
    },
    {
        "source": "tiAudioFundamentals",
        "role": "Required · Manufacturer amplifier fundamentals series",
        "use": "Use the mapped fundamentals lessons for gain, signal path, noise/distortion, load/interface and measurement vocabulary.",
        "watchFor": "Connect each spec to a measurable input/output behavior and distinguish gain from output-power capability.",
        "gap": "Only the relevant fundamentals lessons are required; the full professional series is broader.",
        "verifiedEvidence": "The current TI Precision Labs audio-fundamentals sequence is already verified elsewhere in the course and is now actually assigned to Week 10."
    },
    {
        "source": "aacTransistorBiasing",
        "role": "Required · BJT bias-region video",
        "use": "Learn why linear amplifiers require a quiescent operating point between cutoff and saturation and how bias establishes usable signal swing.",
        "watchFor": "Diagnose clipping as the signal forcing the device out of the intended linear region rather than simply 'too much gain.'",
        "gap": "Configuration-specific input/output behavior follows next.",
        "verifiedEvidence": "The inspected lecture explicitly distinguishes cutoff, saturation and linear-region bias requirements for switch versus amplifier use."
    },
    {
        "source": "aacAmplifierConfigs",
        "role": "Required · BJT amplifier configuration video",
        "use": "Learn common-emitter, common-collector/emitter-follower and common-base roles, biasing context, phase and impedance behavior.",
        "watchFor": "Explain why a near-unity-voltage-gain emitter follower can still be useful because of impedance/current-drive behavior.",
        "gap": "JFET/MOSFET equivalents follow below.",
        "verifiedEvidence": "The inspected college lecture teaches all three BJT configurations, bias context, phase and impedance/application differences."
    },
    {
        "source": "aacJfetAmplifiers",
        "role": "Required · JFET amplifier video",
        "use": "Map common-source/common-gate/common-drain to the corresponding BJT configurations and learn their bias/phase/impedance roles.",
        "watchFor": "Use the FET's high input impedance and configuration choice as part of the signal-chain explanation.",
        "gap": "Device-specific operating points remain datasheet/circuit dependent.",
        "verifiedEvidence": "The inspected lecture explicitly teaches the three common JFET amplifier configurations."
    },
    {
        "source": "aacMosfetAmplifiers",
        "role": "Required · MOSFET amplifier video",
        "use": "Learn MOSFET linear-region biasing, common-source response, high input impedance and the distinction between switching and linear operation.",
        "watchFor": "Keep the device out of cutoff/saturation when analyzing a linear amplifier and connect bias errors to waveform distortion.",
        "gap": "Power-stage thermal design is outside this week's required depth.",
        "verifiedEvidence": "The inspected college lecture explicitly teaches MOSFET amplifier biasing and common-source signal behavior."
    }
]);

  appendMedia(11, [
    {
        "source": "aacCounters",
        "role": "Required · Counter video",
        "use": "Learn synchronous/asynchronous counting, binary count sequences, frequency division, integrated counters and propagation-delay implications.",
        "watchFor": "Trace bit state across clock edges and identify when ripple delay can create transient false counts.",
        "gap": "Shift registers and display interfacing follow below.",
        "verifiedEvidence": "The inspected college lecture teaches counter construction, synchronous/asynchronous classes, frequency division and integrated counters."
    },
    {
        "source": "aacShiftRegisters",
        "role": "Required · Register/serial-parallel teaching",
        "use": "Learn SISO/PISO/SIPO/PIPO shift-register structures, serial-versus-parallel movement and uses in data transfer, peripherals and ring counters.",
        "watchFor": "Track what bit is stored in each stage after each clock and state whether the interface is serial or parallel on each side.",
        "gap": "Broader processor bus structure is taught by the microprocessor bus video below.",
        "verifiedEvidence": "The current digital-circuits tutorial teaches shift-register types and their use for serial/parallel conversion, peripherals and ring counters."
    },
    {
        "source": "aacSevenSegmentDisplay",
        "role": "Required · Display/decoder worked tutorial",
        "use": "Learn how BCD inputs drive a decoder/driver and 7-segment LED display, including active-high/active-low logic implications.",
        "watchFor": "Trace BCD input through decoder outputs to illuminated segments and distinguish common-cathode/common-anode requirements.",
        "gap": "The physical build is optional unless the course lab calls for it; the instructional target is display circuitry and logic interfacing.",
        "verifiedEvidence": "The current worked tutorial explicitly teaches a 4511 BCD-to-7-segment decoder/driver and display operation."
    },
    {
        "source": "aacMicroprocessorBusNetworks",
        "role": "Required · Digital-bus video",
        "use": "Learn address, data and control buses plus read/write coordination between a processor, memory and I/O.",
        "watchFor": "State what information each bus carries and follow one read/write transaction at block level.",
        "gap": "Protocol-specific serial buses such as UART/I²C/SPI come later in the course.",
        "verifiedEvidence": "The inspected microprocessor lecture explicitly teaches address, data and control buses and memory read/write operations."
    },
    {
        "source": "aacComputerHardware",
        "role": "Required · Processor-system block video",
        "use": "Learn processor, RAM/cache, controllers, I/O/peripheral blocks, power and system buses as one computer/electronic system.",
        "watchFor": "Trace data/control from CPU to memory and peripherals and identify which block owns each function.",
        "gap": "This is architecture/block understanding, not PC repair certification.",
        "verifiedEvidence": "The current college video walks through a practical computer block diagram including processor, memory, controllers, buses and peripheral interfaces."
    },
    {
        "source": "neetsTestEquipment",
        "role": "Required · Logic probe/pulser instrument section",
        "use": "Return only to the logic-probe/logic-pulser sections to learn instrument purpose, setup and fault-isolation use on digital nodes.",
        "watchFor": "Use a probe/pulser only on compatible logic circuitry and distinguish static logic-state indication from timing analysis with a logic analyzer/scope.",
        "gap": "The rest of the NEETS test-equipment module was already assigned in Week 3; do not repeat unrelated sections.",
        "verifiedEvidence": "The previously verified technician module includes dedicated logic probe/pulser material as part of the CETa test-equipment breadth."
    }
]);

  appendMedia(12, [
    {
        "source": "nasaCrewElectronicsRepair",
        "role": "Required · Solder process/safety training",
        "use": "Use the mapped training sections for safety, solder characteristics, flux characteristics, cleanliness, iron/tip care, heat bridge, component/terminal preparation, solder application/cleaning, wire preparation and through-hole installation.",
        "watchFor": "Treat solder alloy/flux/process as controlled variables; identify contamination, overheating and poor wetting risks before rework.",
        "gap": "The NASA document is an electronics-repair training model, not a substitute for current employer/IPC/NASA certification requirements.",
        "verifiedEvidence": "NASA's training syllabus explicitly enumerates safety, solder/flux characteristics, cleanliness, heat bridge, component preparation, terminations, application/cleaning and through-hole installation."
    },
    {
        "source": "neetsSolderingWiring",
        "role": "Required · Heat-shunt and soldering fundamentals reference",
        "use": "Use the soldering/wiring sections for flux/solder purpose, heat-sensitive-component protection, heat-shunt placement and controlled manual soldering sequence.",
        "watchFor": "Place thermal protection between the joint and heat-sensitive part when required and minimize dwell rather than compensating with excessive heat.",
        "gap": "Legacy material values are historical; current process specifications/datasheets control exact alloy, flux and temperature choices.",
        "verifiedEvidence": "The technician training module includes soldering/wiring technique and heat-shunt practice; it is used only for durable process concepts, not obsolete material mandates."
    },
    {
        "source": "paceBgaTutorial",
        "role": "Required · BGA/SMT rework process video",
        "use": "Observe controlled BGA/SMC removal and installation as a professional rework process: board support, thermal control, alignment, removal/placement and inspection workflow.",
        "watchFor": "Recognize why BGA rework requires dedicated thermal/profile/alignment equipment and should not be attempted as casual hand rework.",
        "gap": "Observation/recognition only; AU-ESET 301 does not require the learner to perform BGA rework.",
        "verifiedEvidence": "PACE's current professional tutorial demonstrates installation/removal of BGA and surface-mount components with a dedicated rework station."
    },
    {
        "source": "digiKeyBrokenTrace",
        "role": "Required · PCB trace-repair video",
        "use": "Learn the evidence path for a damaged/lifted trace: identify endpoints, clean/remove damaged material, restore continuity with an appropriate jumper/repair and verify afterward.",
        "watchFor": "Confirm the intended net from schematic/continuity evidence before bridging; avoid creating a shortcut around another component or net.",
        "gap": "High-reliability/flight repair acceptance requires the governing workmanship standard.",
        "verifiedEvidence": "The DigiKey repair video is specifically dedicated to repairing broken PCB traces."
    },
    {
        "source": "paceThermoBondCitKit",
        "role": "Required · Pad/land/trace repair procedure reference",
        "use": "Study representative professional procedures for surface-mount lands/traces and through-hole pad/trace combinations so you can recognize repairable versus escalate conditions.",
        "watchFor": "Distinguish conductor repair from pad/land replacement and preserve geometry/adhesion/clearance before electrical verification.",
        "gap": "This is advanced repair-process literacy; hands-on execution requires appropriate training, tooling and authorization.",
        "verifiedEvidence": "The PACE procedure set explicitly covers SMT land/trace and through-hole pad/trace repair methods."
    }
]);



  // ---------------------------------------------------------------------------
  // CHUNK 3 — TARGETED CONTENT-COMPLETION REPAIR: WEEKS 13–18
  // Week 16 remains untouched because the adversarial standalone audit passed it.
  // ---------------------------------------------------------------------------
  Object.assign(C.sources, {
    "oshaBranchCircuitAwareness": {
        "title": "OSHA Subpart S Electrical eTool — Conductors, Polarity, Branch Circuits, and Grounding",
        "org": "U.S. Occupational Safety and Health Administration",
        "kind": "Government electrical-safety and wiring-awareness training",
        "url": "https://www.osha.gov/etools/subpart-s"
    },
    "siemensProcessFlowcharts": {
        "title": "Siemens SCE Process Automation — Flowcharts, Control Flowcharts, Process Flowcharts, and P&IDs",
        "org": "Siemens Automation Cooperates with Education (SCE)",
        "kind": "University-oriented process-automation training module",
        "url": "https://www.automation.siemens.com/sce-static/learning-training-documents/pcs7/v8-0/p02-01-hmi-generation-v8.0-s0915-en.pdf"
    },
    "siemensScePlcCourses": {
        "title": "SCE PLC Courses — SIMATIC S7 and TIA Portal",
        "org": "Siemens Automation Cooperates with Education (SCE)",
        "kind": "Current curriculum-oriented PLC training pathway",
        "url": "https://www.siemens.com/en-us/content/sce-educational-institutions/plc-courses/"
    },
    "automationDirectPlcScan": {
        "title": "PLC Program Structure — Main Scan, Subroutines, and Interrupts",
        "org": "AutomationDirect",
        "kind": "Manufacturer PLC training video with transcript",
        "url": "https://www.automationdirect.com/videos/video?videoToPlay=MnR8e-cZLUs"
    },
    "plcopen61131Languages": {
        "title": "IEC 61131-3 Programming Languages — LD, FBD, ST, and SFC",
        "org": "PLCopen / IEC 61131-3",
        "kind": "Industrial-control programming standard overview",
        "url": "https://www.plcopen.org/standards/logic/iec-61131-3/status-iec-61131-3-standard/"
    },
    "microchipDesignPatterns": {
        "title": "MCC Melody Design Patterns — Polling, Interrupt/Callback, and State-Machine Control",
        "org": "Microchip Technology",
        "kind": "Manufacturer embedded design-pattern tutorial",
        "url": "https://onlinedocs.microchip.com/oxy/GUID-7CE1AEE9-2487-4E7B-B26B-93A577BA154E-en-US-2/GUID-EE2DA1DC-9F12-4F5F-8837-C61C290F48FA.html"
    },
    "microchipAsyncDrivers": {
        "title": "Asynchronous vs. Synchronous Drivers — Non-Blocking Bare-Metal State Machines",
        "org": "Microchip Technology",
        "kind": "Manufacturer embedded architecture guidance",
        "url": "https://onlinedocs.microchip.com/oxy/GUID-C6261C55-F82C-451C-9CF8-F0656D9BC52B-en-US-2/GUID-F19C699A-C66B-44E5-A8D2-2387A0499332.html"
    },
    "microchipNonblockingTick": {
        "title": "Tick Interface Using Timer Interrupts — Non-Blocking Delays",
        "org": "Microchip Developer Help",
        "kind": "Current 2026 hands-on embedded lab",
        "url": "https://developerhelp.microchip.com/xwiki/bin/view/products/mcu-mpu/dspic/33a/getting-started-vscode/hands-on/lab3/"
    },
    "microsoftWindowsConfig": {
        "title": "Configure Post-Installation Settings and Personalization in Windows",
        "org": "Microsoft Learn",
        "kind": "Beginner Windows client learning path",
        "url": "https://learn.microsoft.com/en-us/training/paths/configure-post-installation-settings-personalization/"
    },
    "microsoftSupportTools": {
        "title": "Explore Support and Diagnostic Tools — Task Manager, Event Viewer, Reliability Monitor, MMC, Registry",
        "org": "Microsoft Learn",
        "kind": "Beginner Windows diagnostic-tools module",
        "url": "https://learn.microsoft.com/en-us/training/modules/explore-support-diagnostic-tools/"
    },
    "microsoftAppsUpdates": {
        "title": "Manage Apps and Windows Updates",
        "org": "Microsoft Learn",
        "kind": "Beginner Windows application/update learning path",
        "url": "https://learn.microsoft.com/en-us/training/paths/manage-apps-windows-updates/"
    },
    "cisaDeviceBackup": {
        "title": "How to Protect the Data Stored on Your Devices — Backup and Malware-Resilient Practices",
        "org": "U.S. Cybersecurity and Infrastructure Security Agency",
        "kind": "Government cybersecurity training",
        "url": "https://www.cisa.gov/resources-tools/training/how-protect-data-stored-your-devices"
    },
    "microsoftDefenderBasics": {
        "title": "Explore Microsoft Defender — Malware Protection, Firewall, and Network Profiles",
        "org": "Microsoft Learn",
        "kind": "Beginner endpoint-security module",
        "url": "https://learn.microsoft.com/en-us/training/modules/explore-microsoft-defender/"
    },
    "ciscoNetworkingBasics": {
        "title": "CCST Networking — Networking Basics, Addressing, DNS, DHCP, Troubleshooting, and Security",
        "org": "Cisco",
        "kind": "Vendor networking fundamentals training pathway",
        "url": "https://www.cisco.com/site/us/en/learn/training-certifications/training/courses/ccst-networking.html"
    },
    "eatonUpsVsSurge": {
        "title": "UPS vs. Surge Suppressor — What Each Power-Protection Device Does",
        "org": "Eaton",
        "kind": "Power-protection manufacturer technical explainer",
        "url": "https://www.eaton.com/us/en-us/support/eaton-answers/ups-vs--surge-suppressor.html"
    },
    "stUsbTraining": {
        "title": "STM32 USB Training — Device/Host, Transfers, Electrical Requirements, Classes, and Hands-On",
        "org": "STMicroelectronics",
        "kind": "Manufacturer 10-hour MOOC with videos and exercises",
        "url": "https://www.st.com/content/st_com/en/support/learning/stm32-moocs/STM32-USB-training.html"
    },
    "silabsZigbeeFundamentals": {
        "title": "Zigbee Fundamentals — Architecture, Device Roles, Networking, Security, and Applications",
        "org": "Silicon Labs",
        "kind": "Wireless-vendor fundamentals curriculum",
        "url": "https://docs.silabs.com/zigbee/latest/zigbee-fundamentals-overview/"
    },
    "silabsZigbeeBootcamp": {
        "title": "Zigbee Software Boot Camp — Forming, Joining, Commands, Events, and Persistence",
        "org": "Silicon Labs",
        "kind": "Beginner hands-on wireless training series",
        "url": "https://www.silabs.com/support/training/zigbee-software-bootcamp"
    },
    "tiLogicTranslation": {
        "title": "Logic and Voltage Translation Training",
        "org": "Texas Instruments",
        "kind": "Manufacturer logic-interface video series",
        "url": "https://www.ti.com/video/series/logic-and-voltage-translation.html"
    },
    "adiMixedSignalGrounding": {
        "title": "Successful PCB Grounding with Mixed-Signal Chips — Follow the Path of Least Impedance",
        "org": "Analog Devices",
        "kind": "Semiconductor-vendor grounding tutorial",
        "url": "https://www.analog.com/en/resources/technical-articles/successful-pcb-grounding-with-mixedsignal-chips--follow-the-path-of-least-impedance.html"
    },
    "molexConnectorFundamentals": {
        "title": "Connector Fundamentals — Gender, Polarization, Keying, Coding, and Mis-Mating Prevention",
        "org": "Molex",
        "kind": "Connector-manufacturer engineering tutorial",
        "url": "https://www.molex.com/en-us/trends-insights/engineering-insights/connector-mating"
    }
});

  appendMedia(13, [
    {
        "source": "oshaBranchCircuitAwareness",
        "role": "Required · Building-wiring awareness/reference",
        "use": "Learn the technician-level meaning of grounded versus equipment-grounding conductors, polarity, branch circuits, receptacle grounding and protective grounding paths so building wiring on a drawing can be interpreted safely.",
        "watchFor": "Recognize hot/grounded/grounding functions and why polarity/grounding errors are hazardous; do not convert this awareness into authorization to perform premises wiring.",
        "gap": "This is interpretation/safety awareness only. Premises installation remains governed by qualified-person requirements, applicable code and employer procedures.",
        "verifiedEvidence": "OSHA Subpart S explicitly covers conductor identification, polarity, branch circuits, receptacles and equipment/system grounding."
    },
    {
        "source": "siemensProcessFlowcharts",
        "role": "Required · Process/control diagram teaching",
        "use": "Learn how control flowcharts, basic/process flowcharts and P&IDs communicate components plus material, energy and signal flow, then compare those representations with schematics/block diagrams already taught in the week.",
        "watchFor": "Identify what each diagram type is intended to communicate and trace flow direction/functional relationships without assuming it shows physical placement.",
        "gap": "Plant-specific symbols still require the drawing legend and governing documentation.",
        "verifiedEvidence": "Siemens SCE explicitly defines control flowcharts, basic/process flowcharts and P&IDs and explains their material/energy/signal-flow roles."
    }
]);

  appendMedia(14, [
    {
        "source": "siemensScePlcCourses",
        "role": "Required · PLC foundation pathway",
        "use": "Use the introductory/basic SIMATIC S7/TIA Portal training material to understand what a PLC is, how field inputs/outputs connect to controller logic and how industrial automation projects are organized.",
        "watchFor": "Keep PLC hardware/I-O, engineering software and the user control program conceptually separate.",
        "gap": "The next cards make execution cycle and IEC language concepts explicit so this course index is not overclaimed as the sole explanation.",
        "verifiedEvidence": "Siemens currently publishes curriculum-oriented SCE courses for introduction to automation and basic PLC programming with S7-1200/S7-1500 and TIA Portal."
    },
    {
        "source": "automationDirectPlcScan",
        "role": "Required · Scan-cycle and program-structure video",
        "use": "Learn the classic PLC scan model—read inputs, execute the main ladder/control program, update outputs and repeat—then see where subroutines and interrupts fit.",
        "watchFor": "Explain why normal logic is scan-based, why scan time matters and when an interrupt is used for an event that cannot wait for the ordinary scan.",
        "gap": "Vendor-specific CLICK program organization is an example; the scan-cycle concept transfers to PLCs generally.",
        "verifiedEvidence": "The current AutomationDirect training transcript explicitly teaches input read → main-program execution → output update on each scan plus subroutine/interrupt roles."
    },
    {
        "source": "plcopen61131Languages",
        "role": "Required · PLC programming-language framework",
        "use": "Learn the standardized PLC language families: Ladder Diagram, Function Block Diagram and Structured Text, plus Sequential Function Chart for program structure/state sequencing.",
        "watchFor": "Recognize equivalent control intent across graphical/textual representations and avoid treating one vendor editor as the definition of PLC programming.",
        "gap": "Hands-on PLC programming remains outside the primary embedded path; this is the mapped CETa/general-computer foundation.",
        "verifiedEvidence": "The current IEC 61131-3/PLCopen material identifies LD, FBD and ST and SFC as the standardized programmable-controller language suite/structuring notation."
    },
    {
        "source": "aacComputerHardware",
        "role": "Required · Computer/peripheral block teaching",
        "use": "Reuse the computer-hardware lecture here to connect CPU, memory, controllers, buses and peripherals to technician-level computer-electronics concepts.",
        "watchFor": "Trace a peripheral transaction as CPU/memory/controller/bus/device behavior instead of treating a computer as one opaque box.",
        "gap": "Specific modern expansion standards and operating systems vary; the architectural roles are the target.",
        "verifiedEvidence": "The previously verified college lecture covers processor, memory, controllers, buses and peripheral interfaces."
    },
    {
        "source": "aacMicroprocessorBusNetworks",
        "role": "Required · Interface-card/bus concept teaching",
        "use": "Reuse the address/data/control-bus lesson to understand how interface devices/cards communicate with a processor and how selection/control differs from payload data.",
        "watchFor": "Separate address selection, data transfer and control/handshake functions when tracing an interface fault.",
        "gap": "PCIe/USB implementation detail is not required in this Week 14 general-computer block; USB is taught explicitly in Week 18.",
        "verifiedEvidence": "The previously verified lecture teaches address, data and control bus roles in microprocessor systems."
    }
]);

  appendMedia(15, [
    {
        "source": "microchipDesignPatterns",
        "role": "Required · Embedded control-flow architecture",
        "use": "Learn an explicit state-machine application structure and compare polling/blocking behavior with interrupt/callback handling for quick asynchronous events.",
        "watchFor": "Define states, events/conditions and transitions before coding; keep interrupt work short and move longer behavior into normal application tasks/state handling.",
        "gap": "The examples use Microchip APIs, but the polling/interrupt/state-machine reasoning transfers directly to bare-metal STM32 firmware.",
        "verifiedEvidence": "Microchip's current design-pattern documentation explicitly identifies polling, interrupt/callback and state-machine control-flow approaches and notes non-blocking API behavior."
    },
    {
        "source": "microchipAsyncDrivers",
        "role": "Required · Nonblocking state-machine design guidance",
        "use": "Learn why bare-metal asynchronous drivers pair with state machines and why busy-wait loops or functions that wait indefinitely can block the whole superloop.",
        "watchFor": "Break long/external waits into smaller state-driven tasks that return promptly and make forward progress on later loop passes.",
        "gap": "RTOS scheduling is not required for this course's bare-metal foundation.",
        "verifiedEvidence": "Microchip explicitly recommends asynchronous/non-blocking APIs plus the state-machine programming model for bare-metal systems and explains avoiding busy waiting."
    },
    {
        "source": "microchipNonblockingTick",
        "role": "Required · Timer/interrupt nonblocking lab example",
        "use": "Use the current timer-interrupt lab as a concrete example of replacing blocking delays with a periodic tick that lets the application remain responsive.",
        "watchFor": "Separate the timer ISR/tick source from application state/timing decisions and explain why the main loop can continue doing other work.",
        "gap": "This is a transfer example, not a requirement to use dsPIC hardware; implement the equivalent pattern with the selected STM32 timer/SysTick resources.",
        "verifiedEvidence": "Microchip's 2026 lab states that Timer1 interrupts create a tick interface specifically to enable non-blocking delays."
    }
]);

  appendMedia(17, [
    {
        "source": "microsoftWindowsConfig",
        "role": "Required · Computer setup/configuration foundation",
        "use": "Learn common post-install configuration, Settings/Control Panel use, power settings, Windows PowerShell introduction and device-driver context.",
        "watchFor": "Document configuration changes and distinguish operating-system settings from application/driver configuration.",
        "gap": "This is a technician baseline, not enterprise Windows administration certification.",
        "verifiedEvidence": "Microsoft's beginner learning path explicitly covers common Windows configuration, Settings/Control Panel, PowerShell and device drivers."
    },
    {
        "source": "microsoftSupportTools",
        "role": "Required · Utilities/diagnostics teaching",
        "use": "Learn when to use Task Manager, Event Viewer, Reliability Monitor, MMC and related Windows support tools when software/system symptoms appear.",
        "watchFor": "Collect evidence before changing configuration; correlate time-stamped events/process/resource symptoms with the reported failure.",
        "gap": "Tool output must still be interpreted in the context of the actual system and fault hypothesis.",
        "verifiedEvidence": "Microsoft's beginner diagnostics module explicitly teaches these support and troubleshooting tools."
    },
    {
        "source": "microsoftAppsUpdates",
        "role": "Required · Software installation/update foundation",
        "use": "Learn application types, installation/deployment concepts and the role of controlled software/Windows updates in maintaining a computer system.",
        "watchFor": "Record versions and change one software variable at a time during troubleshooting so updates/installs remain traceable.",
        "gap": "Enterprise deployment tooling is beyond the CETa technician baseline.",
        "verifiedEvidence": "Microsoft's learning path covers Windows app management/installation methods and Windows/app update management."
    },
    {
        "source": "cisaDeviceBackup",
        "role": "Required · Backup/recovery and malware-resilience instruction",
        "use": "Learn why backups must be regular, protected from ransomware and recoverable, and connect backup practice to safe maintenance/change work.",
        "watchFor": "A backup is not proven until its recovery path is understood/tested; avoid leaving removable backup media continuously exposed to ransomware.",
        "gap": "Organization-specific retention/encryption policy still controls real systems.",
        "verifiedEvidence": "CISA explicitly teaches frequent external/cloud backups, ransomware exposure considerations, software updates and malware protection."
    },
    {
        "source": "microsoftDefenderBasics",
        "role": "Required · Malware/firewall/security teaching",
        "use": "Learn what malware protection and host firewalling do, how Defender detects/quarantines malware and why network profiles/firewall rules are separate from electrical surge protection.",
        "watchFor": "Do not confuse cybersecurity threats with electrical power disturbances; diagnose the failure domain before selecting a protective control.",
        "gap": "Advanced enterprise endpoint security is outside this week's scope.",
        "verifiedEvidence": "Microsoft's beginner module covers Defender malware detection/quarantine, firewall purpose/function and network-location profiles."
    },
    {
        "source": "ciscoNetworkingBasics",
        "role": "Required · Basic networking pathway",
        "use": "Complete the mapped fundamentals on small networks, IP addressing, ARP/DNS/DHCP, transport/application protocols and basic network troubleshooting/security.",
        "watchFor": "Trace a connectivity problem from physical link through addressing/name resolution rather than jumping immediately to application blame.",
        "gap": "Router/switch certification depth is not required; technician-level network literacy is the target.",
        "verifiedEvidence": "Cisco's current CCST Networking outline explicitly includes networking basics, addressing, ARP, DNS, DHCP, transport, troubleshooting and security."
    },
    {
        "source": "eatonUpsVsSurge",
        "role": "Required · Electrical power-protection distinction",
        "use": "Learn what a surge suppressor protects against and how that differs from a UPS providing ride-through/backup power and additional conditioning capabilities.",
        "watchFor": "Classify a symptom as data/software/security versus power interruption/surge before recommending a control.",
        "gap": "Exact surge/UPS sizing and installation require the equipment/load specifications.",
        "verifiedEvidence": "Eaton's current technical explainer explicitly distinguishes surge suppression from UPS protection and explains surge events."
    }
]);

  appendMedia(18, [
    {
        "source": "stUsbTraining",
        "role": "Required · USB theory + STM32 implementation MOOC",
        "use": "Use the ST USB course for host/device roles, USB standards, transfer types, electrical requirements, classes/drivers and practical STM32 device/host examples.",
        "watchFor": "Separate host/device role, bus power/electrical constraints, enumeration/class behavior and application payload; do not treat USB as 'UART with a different plug.'",
        "gap": "Complete only the theory/implementation sections needed for technician/interface literacy unless the project later chooses USB.",
        "verifiedEvidence": "ST's current 10-hour MOOC explicitly covers general USB theory, standards, transfer types, electrical specifications, Device/Host classes and hands-on STM32 work."
    },
    {
        "source": "silabsZigbeeFundamentals",
        "role": "Required · Zigbee architecture/fundamentals",
        "use": "Learn Zigbee's low-power wireless purpose, device/network roles, stack structure, mesh-network concepts and the difference between a wireless network protocol and a simple point-to-point serial bus.",
        "watchFor": "Identify coordinator/router/end-device roles and separate PHY/MAC/network/application-layer responsibilities at technician depth.",
        "gap": "RF certification and production wireless design are outside this course.",
        "verifiedEvidence": "Silicon Labs' current fundamentals series is explicitly intended as the starting point for developers new to Zigbee/wireless networking and covers Zigbee characteristics and networking concepts."
    },
    {
        "source": "silabsZigbeeBootcamp",
        "role": "Required · Zigbee applied training sequence",
        "use": "Use the beginner boot camp to see a Zigbee network formed/joined, commands exchanged and event-driven application behavior in a real embedded stack.",
        "watchFor": "Connect abstract network roles to observable commissioning/message/event behavior rather than memorizing terminology only.",
        "gap": "Silicon Labs tools are the worked example; the conceptual Zigbee behavior is the transfer target.",
        "verifiedEvidence": "The current boot camp is a beginner sequence of forming/joining, sending commands, using events and nonvolatile data modules."
    },
    {
        "source": "tiLogicTranslation",
        "role": "Required · Signal-level compatibility teaching",
        "use": "Learn why logic families and voltage domains may require translation and how inappropriate discrete/clamp/translation choices can corrupt or damage an interface.",
        "watchFor": "Check VIH/VIL/VOH/VOL, directionality, pull-ups/open-drain behavior and supply domains before connecting two digital devices.",
        "gap": "The exact translator topology must match the actual protocol and datasheets.",
        "verifiedEvidence": "TI's current logic/voltage-translation video collection includes signal-level translation, CMOS input/output behavior and pitfalls of discrete level shifting."
    },
    {
        "source": "adiMixedSignalGrounding",
        "role": "Required · Ground/reference and return-path teaching",
        "use": "Learn that signal current requires a return path and that grounding/reference layout affects crosstalk, noise and interface reliability—especially across mixed-signal hardware.",
        "watchFor": "Trace where current actually returns; do not assume every node labelled GND is automatically an ideal/common zero-impedance reference.",
        "gap": "Board-level EMC/layout optimization can go much deeper than the Week 18 technician/interface requirement.",
        "verifiedEvidence": "Analog Devices' tutorial starts from current-flow/return-path fundamentals and develops grounding/routing guidance for mixed-signal systems."
    },
    {
        "source": "molexConnectorFundamentals",
        "role": "Required · Connector compatibility/mis-mating teaching",
        "use": "Learn connector gender, polarization, keying and coding as physical interface controls that prevent reversed orientation, cross-connection and application of the wrong power/signal mapping.",
        "watchFor": "Verify pinout, orientation, mating family, power/ground assignment and mechanical keying before energizing an unfamiliar interface.",
        "gap": "Connector-specific current, voltage, environmental and signal-integrity ratings remain datasheet-controlled.",
        "verifiedEvidence": "Molex's current engineering tutorial explicitly teaches gender, polarization, keying/coding and how mis-mating can create shorts/cross-connections or wrong signal/power mapping."
    }
]);



  // ---------------------------------------------------------------------------
  // CHUNK 4 — TARGETED CONTENT-COMPLETION REPAIR: WEEKS 19–23
  // Week 24 remains untouched because the adversarial standalone audit passed it.
  // ---------------------------------------------------------------------------
  Object.assign(C.sources, {
    "aacAudioElectronics": {
        "title": "An Introduction to Audio Electronics — Sound, Microphones, Speakers, and Amplifiers",
        "org": "All About Circuits",
        "kind": "Engineering audio-electronics teaching article",
        "url": "https://www.allaboutcircuits.com/technical-articles/introduction-audio-electronics-sound-microphones-speakers-amplifiers/"
    },
    "neetsMagneticRecording": {
        "title": "NEETS Module 23 — Magnetic Recording: Record/Reproduce Electronics and Signal Path",
        "org": "U.S. Navy / Naval Education and Training Professional Development and Technology Center",
        "kind": "Legacy technician self-study module used only for enduring recording/reproduction electronics concepts",
        "url": "https://www.maritime.org/doc/neets/mod23.pdf"
    },
    "digiKeyOptoDisplays": {
        "title": "Getting Started with Optoelectronic Displays — LED, LCD, OLED, Plasma, e-Paper, and Touch",
        "org": "DigiKey Electronics",
        "kind": "Distributor engineering video",
        "url": "https://www.digikey.com/en/videos/unassigned/getting-started-with-optoelectronic-displays-tech-basics-digi-key-electronics"
    },
    "aacOptoelectronicsIntro": {
        "title": "An Introduction to Optoelectronics — LEDs, Photoresistors, Photodiodes, Solar Cells, Phototransistors, and Optoisolators",
        "org": "All About Circuits",
        "kind": "Engineering optoelectronics teaching article",
        "url": "https://www.allaboutcircuits.com/technical-articles/an-introduction-to-optoelectronics/"
    },
    "digiKeyPhotoDevices": {
        "title": "The Basics of Photodiodes and Phototransistors and How to Apply Them",
        "org": "DigiKey Electronics",
        "kind": "Engineering tutorial on photoelectric semiconductor devices",
        "url": "https://www.digikey.com/en/articles/the-basics-of-photodiodes-and-phototransistors-and-how-to-apply-them"
    },
    "aacImageSensorIntro": {
        "title": "Introduction to Image Sensor Technology — Photons to Electrons, CCD and CMOS",
        "org": "All About Circuits",
        "kind": "Engineering image-sensor/camera teaching article",
        "url": "https://www.allaboutcircuits.com/technical-articles/introduction-to-image-sensor-technology-photons-to-electrons/"
    },
    "aacOptocouplerBasics": {
        "title": "Beyond the Optocoupler — Understanding Optical Isolation and Digital Isolators",
        "org": "All About Circuits",
        "kind": "Engineering isolation tutorial",
        "url": "https://www.allaboutcircuits.com/technical-articles/beyond-the-optocoupler-understanding-digital-isolators/"
    },
    "tekDigitalVideoPrimer": {
        "title": "Guide to Standard and HD Digital Video Measurements",
        "org": "Tektronix",
        "kind": "Test-and-measurement manufacturer video-signal primer",
        "url": "https://www.tek.com/en/documents/primer/guide-standard-hd-digital-video-measurements"
    },
    "neetsAntennas": {
        "title": "NEETS Module 10 — Wave Propagation, Transmission Lines, Antennas, Matching, and SWR",
        "org": "U.S. Navy / Naval Education and Training",
        "kind": "Legacy technician self-study module used for enduring RF/antenna fundamentals",
        "url": "https://www.maritime.org/doc/neets/mod10.pdf"
    },
    "neetsRfComms": {
        "title": "NEETS Module 17 — RF Communications: Receiver Fundamentals, Radio Services, and Satellite Links",
        "org": "U.S. Navy / Naval Education and Training",
        "kind": "Legacy technician RF communications course used only for enduring receiver/system fundamentals",
        "url": "https://www.maritime.org/doc/neets/mod17.pdf"
    },
    "qualcommCellularBasics": {
        "title": "Fundamentals of Wireless Signals and Cellular Networks",
        "org": "Qualcomm",
        "kind": "Cellular-technology developer fundamentals article",
        "url": "https://www.qualcomm.com/news/onq/2019/10/fundamentals-wireless-signals-and-cellular-networks"
    },
    "ciscoPotsSplitters": {
        "title": "Using POTS Splitters and Microfilters in a DSL Environment",
        "org": "Cisco",
        "kind": "Network-vendor POTS/DSL wired voice-data technical tutorial",
        "url": "https://www.cisco.com/c/en/us/support/docs/long-reach-ethernet-lre-digital-subscriber-line-xdsl/asymmetric-digital-subscriber-line-adsl/12933-splitters.html"
    },
    "mitShell2026": {
        "title": "The Missing Semester 2026 — Course Overview and Introduction to the Shell",
        "org": "MIT",
        "kind": "University command-line lecture with video, notes, and exercises",
        "url": "https://missing.csail.mit.edu/2026/course-shell/"
    },
    "mitGit2026": {
        "title": "The Missing Semester 2026 — Version Control and Git",
        "org": "MIT",
        "kind": "University Git lecture with video, notes, and command-line exercises",
        "url": "https://missing.csail.mit.edu/2026/version-control/"
    },
    "mitStrobeLabNotes": {
        "title": "MIT 6.163 Strobe Project Laboratory — Lab Notebooks, Protocols, Data, and Reports",
        "org": "MIT OpenCourseWare / Electrical Engineering and Computer Science",
        "kind": "University engineering-laboratory documentation guidance",
        "url": "https://ocw.mit.edu/courses/6-163-strobe-project-laboratory-fall-2005/pages/labs/"
    },
    "mitEECSMethods": {
        "title": "MIT EECS Communication Lab — Electrical Engineering Methods: Reproducible Experimental Procedure",
        "org": "MIT EECS Communication Lab",
        "kind": "University technical-writing and experimental-method guide",
        "url": "https://mitcommlab.mit.edu/eecs/commkit/journal-article-methods-ee/"
    },
    "mitShipping2026": {
        "title": "The Missing Semester 2026 — Packaging and Shipping Code",
        "org": "MIT",
        "kind": "University release/versioning/dependency/configuration lecture with video",
        "url": "https://missing.csail.mit.edu/2026/shipping-code/"
    },
    "nasaConfigManagement": {
        "title": "NASA Systems Engineering Handbook — 6.5 Configuration Management",
        "org": "NASA",
        "kind": "Government configuration-management and baseline reference",
        "url": "https://www.nasa.gov/reference/6-5-configuration-management/"
    },
    "autodeskElectronicsBom": {
        "title": "Electronics Bill of Materials — Quantity, Value, Reference Designator, Footprint, and Manufacturer Part Number",
        "org": "Autodesk Fusion Electronics",
        "kind": "EDA documentation teaching BOM completeness and fields",
        "url": "https://help.autodesk.com/cloudhelp/ENU/Fusion-ECAD/files/ECD-BOM-CPT.htm"
    }
});

  appendMedia(19, [
    {
        "source": "aacAudioElectronics",
        "role": "Required · Microphone/speaker/audio signal-chain teaching",
        "use": "Learn the sound → microphone → electrical signal → amplification/processing → speaker → sound chain, including dynamic/electret microphone concepts, dynamic speakers, impedance and preamp/power-amplifier roles.",
        "watchFor": "Treat microphone and speaker as electroacoustic transducers with source/load behavior; identify where weak-signal gain, power gain, bandwidth, distortion and impedance problems appear in the chain.",
        "gap": "Studio-acoustics and professional audio-production techniques are outside the CETa electronics scope.",
        "verifiedEvidence": "The AAC tutorial explicitly teaches sound fundamentals, microphone types, speaker operation/impedance and preamp/low-power/power-amplifier roles."
    },
    {
        "source": "neetsMagneticRecording",
        "role": "Required · Recording/reproduction electronics concept path",
        "use": "Use the record/reproduce-electronics chapters to learn the enduring signal-chain idea of converting an input electrical signal into a stored representation and reconstructing/amplifying it on playback.",
        "watchFor": "Focus on record/reproduce heads/electronics, signal flow and performance concepts—not obsolete tape/disk formats or historical Navy equipment procedures.",
        "gap": "This 1998 module is deliberately a legacy teaching example; modern solid-state storage/media technology is not inferred from its historical hardware.",
        "verifiedEvidence": "The module's table of contents explicitly includes record/reproduce electronics, recorder specifications, digital magnetic recording and disk recording."
    },
    {
        "source": "digiKeyOptoDisplays",
        "role": "Required · Display-technology video",
        "use": "Learn the operating/application distinctions among LED, LCD, OLED, plasma and e-Paper displays and recognize resistive/capacitive touch as a related interface layer.",
        "watchFor": "Separate the display technology that creates/modulates light from the digital/analog interface used to drive it.",
        "gap": "Detailed display-controller programming is outside the CETa breadth requirement.",
        "verifiedEvidence": "DigiKey's video explicitly walks through LED, LCD, OLED, plasma and e-Paper display options and touch capability."
    },
    {
        "source": "aacOptoelectronicsIntro",
        "role": "Required · Optoelectronic-device foundation",
        "use": "Learn the light-emitting/light-detecting device family: LEDs/laser diodes, photoresistors, photodiodes, solar cells, phototransistors and optoisolators.",
        "watchFor": "For each device, state whether electrical energy becomes light or light becomes an electrical quantity, and what circuit role that enables.",
        "gap": "Device-level measurement/application depth is strengthened by the photodiode/phototransistor and imaging resources below.",
        "verifiedEvidence": "AAC explicitly teaches these optoelectronic families and includes solar cells and optoisolators."
    },
    {
        "source": "digiKeyPhotoDevices",
        "role": "Required · Photodiode/phototransistor application teaching",
        "use": "Learn how photodiodes and phototransistors convert incident light to electrical signals, including photovoltaic, photoconductive and avalanche photodiode modes plus sensor-interface considerations.",
        "watchFor": "Connect wavelength/sensitivity, bias mode, dark current, response speed and interface/amplifier choice to measurement behavior.",
        "gap": "Exact sensor bias/interface values remain device-datasheet controlled.",
        "verifiedEvidence": "The DigiKey tutorial explains photodiode and phototransistor operation and explicitly identifies photovoltaic mode as solar-cell operation."
    },
    {
        "source": "aacImageSensorIntro",
        "role": "Required · Camera/image-sensor foundation",
        "use": "Learn how camera image sensors convert photons into electrical charge/signal and distinguish the high-level CCD/CMOS sensor concepts used in electronic imaging.",
        "watchFor": "Trace photons → photosensitive pixel/device → charge/electrical signal → readout/processing instead of treating a camera as a black box.",
        "gap": "Computer-vision algorithms and detailed camera-interface protocols are outside this module.",
        "verifiedEvidence": "AAC's image-sensor series begins with photodiodes and explicitly compares CCD and CMOS image sensors."
    },
    {
        "source": "aacOptocouplerBasics",
        "role": "Required · Optocoupler/isolation teaching",
        "use": "Learn the classic LED + photosensitive receiver isolation path in an optocoupler and compare it with non-optical digital-isolator technologies.",
        "watchFor": "Explain that information crosses the isolation barrier without a direct conductive signal path and identify speed/aging/performance tradeoffs at a conceptual level.",
        "gap": "Safety-rated isolation design still requires component certifications, creepage/clearance and applicable standards beyond this overview.",
        "verifiedEvidence": "AAC explicitly explains optocouplers and contrasts optical isolation with transformer/capacitive digital-isolator approaches."
    },
    {
        "source": "tekDigitalVideoPrimer",
        "role": "Required · Video equipment/signal-path orientation",
        "use": "Use the introductory sections to understand camera/source → processing/serialization → transport → destination/display and the difference between video content and the physical/electrical transport carrying digital video data.",
        "watchFor": "Identify source, transport and destination blocks and connect amplitude/timing/termination errors to video-path symptoms; do not attempt professional broadcast certification depth.",
        "gap": "Only the foundational signal-path and basic measurement concepts are required; the primer contains much deeper professional SDI material.",
        "verifiedEvidence": "Tektronix explicitly explains camera/sensor sources, conversion to digital data, transport paths, displays/monitors and basic video-signal measurement."
    }
]);

  appendMedia(20, [
    {
        "source": "neetsAntennas",
        "role": "Required · Antenna/transmission-line/SWR fundamentals",
        "use": "Use the mapped transmission-line and antenna sections for reflections/matching, SWR/VSWR, wavelength/antenna length, radiation fields, antenna reciprocity, gain, polarization and common half-/quarter-wave behavior.",
        "watchFor": "Connect mismatch to reflected energy/standing waves and use wavelength/frequency relationships to reason about antenna dimensions and behavior.",
        "gap": "The text is legacy Navy training; use the physics/technician fundamentals only, not historical equipment examples as current industry practice.",
        "verifiedEvidence": "Module 10 explicitly teaches SWR/VSWR, transmission-line termination/reflection and antenna radiation, reciprocity, gain, polarization and resonant antenna concepts."
    },
    {
        "source": "neetsRfComms",
        "role": "Required · Receiver, radio-service, and satellite fundamentals",
        "use": "Use the mapped receiver/communications/satellite sections for receiver functions/characteristics, radiotelephone and other service categories, transmitter/receiver system blocks, and satellite repeater/uplink/downlink concepts.",
        "watchFor": "For a received signal, trace antenna → receiver selection/amplification/detection/reproduction and distinguish terrestrial radio service from satellite relay architecture.",
        "gap": "The module contains dated military systems. Use the enduring receiver/satellite/radio-system principles only; current cellular networking is taught separately below.",
        "verifiedEvidence": "The module explicitly covers receiver reception/selection/detection/reproduction and sensitivity/selectivity/noise, radio-service examples, and active-satellite repeater/uplink/downlink operation."
    },
    {
        "source": "qualcommCellularBasics",
        "role": "Required · Cellular-network fundamentals",
        "use": "Learn why coverage is divided into cells, what a base station/transceiver does, how frequency reuse and handoff support mobile service and how cells connect onward to phone/data networks.",
        "watchFor": "Separate radio access/cell coverage from the wider telephone/data network behind the base station.",
        "gap": "This is architecture/fundamentals, not protocol-stack or RF-network-engineering certification.",
        "verifiedEvidence": "Qualcomm explicitly explains cells, base stations/transceivers, frequency reuse, handoff, landline/Internet interconnection and cellular generations."
    },
    {
        "source": "ciscoNetworkingBasics",
        "role": "Required · Wired-data network baseline",
        "use": "Reuse the Week 17 networking foundation here to connect wired Ethernet/IP data transport, addressing and common network services to the telecommunications domain.",
        "watchFor": "Distinguish the physical/link network path from IP addressing/name/service behavior and from analog POTS voice signaling.",
        "gap": "Switch/router certification depth is not required for CETa telecom breadth.",
        "verifiedEvidence": "Cisco's existing networking pathway covers small networks, addressing, ARP, DNS, DHCP, transport/application protocols and troubleshooting."
    },
    {
        "source": "ciscoPotsSplitters",
        "role": "Required · POTS/wired voice-data coexistence teaching",
        "use": "Learn how analog telephone service and DSL data can share the same twisted-pair line and why splitters/microfilters separate the low-frequency voice path from higher-frequency data signals.",
        "watchFor": "Recognize POTS voice and broadband data as different frequency uses of the same copper pair and diagnose missing/incorrect filtering as a voice/data coexistence fault.",
        "gap": "This resource is a technician orientation to POTS/DSL coexistence, not a complete central-office or modern VoIP course.",
        "verifiedEvidence": "Cisco explicitly states that POTS splitters route high- and low-frequency line signals to the correct devices and that microfilters protect voice-call quality when voice and data share twisted pair."
    }
]);

  patchMediaCard(20, "nptelComms", {
    use: "Use the NPTEL course for communications-theory foundations such as signal representation, modulation/demodulation, sampling/quantization and noise/probability concepts at the depth mapped by the course.",
    watchFor: "Treat it as communications theory, not a complete telecommunications-hardware course; keep antenna, matching/SWR, receiver hardware, cellular, satellite and wired voice/data topics tied to their dedicated resources below.",
    gap: "This source does not substitute for antenna/SWR, receiver-system, cellular, satellite, wired-data or POTS instruction; those are assigned separately in this week."
  });

  patchMediaCard(21, "etaCompetencies", {
    role: "Required · Scope/remediation map",
    use: "Map every mixed-practice miss to the exact current CETa competency area, then return to the corresponding repaired Week 1–20 Teaching Media resources for explanation before re-attempting a changed problem.",
    watchFor: "Use the competency document to identify scope—not as instruction. Remediation must come from assigned Teaching Media; do not use Alfred lesson prose or the private Study Guide to prove media completeness.",
    gap: "Competency rows define scope but are not assumed to equal exam weighting or instructional depth."
  });

  patchMediaCard(21, "privateGuide", {
    role: "Optional course practice · Not Teaching Media evidence",
    use: "Use the authorized private Study Guide only as extra closed-book practice after Teaching-Media-based remediation, or when the course separately assigns it for CETa practice.",
    watchFor: "Do not use Study Guide explanations to fill a Teaching Media gap or to justify a standalone-media PASS. A media miss must be repaired with the assigned Teaching Media pathway first.",
    gap: "Preserved as an additional private course resource; explicitly excluded from evidence that Teaching Media independently teaches the course."
  });

  appendMedia(22, [
    {
        "source": "mitShell2026",
        "role": "Required · Command-line workflow teaching",
        "use": "Learn terminal/shell navigation, paths, program execution, standard input/output, pipes/redirection and basic shell automation so project build/test/log workflows can be reproduced without relying only on GUI clicks.",
        "watchFor": "Know the current directory, exact command, arguments, input/output and resulting artifact/log before claiming a workflow is reproducible.",
        "gap": "Advanced shell scripting is optional; the goal is technician/engineering command-line fluency.",
        "verifiedEvidence": "MIT's 2026 lecture teaches terminal/shell use, navigation, programs, PATH, pipes/redirection and shell scripting concepts with exercises and video."
    },
    {
        "source": "mitGit2026",
        "role": "Required · Command-line Git/history/diff teaching",
        "use": "Learn snapshots/history plus git status, add, commit, log, diff, checkout and safe reversal/recovery concepts from an actual version-control lecture rather than inferring them from GitHub collaboration UI.",
        "watchFor": "Before changing hardware/firmware, identify the known-good commit; inspect status/diff before committing and use history to explain what changed and why.",
        "gap": "Team-specific branch/review conventions can vary; the version-control model and core commands are the target.",
        "verifiedEvidence": "MIT's current 2026 Git lecture explicitly teaches the snapshot/history model and status/add/commit/log/diff/checkout, with advanced material including revert, stash and bisect."
    },
    {
        "source": "mitStrobeLabNotes",
        "role": "Required · Engineering lab-notebook and reporting practice",
        "use": "Learn to record objective, protocol, calculations/sketches, observations/data and conclusions contemporaneously so every report claim can be traced back to actual notebook evidence.",
        "watchFor": "Do not reconstruct missing data after the fact; preserve calculations/settings/results needed to reproduce or audit the test.",
        "gap": "The course's own evidence templates still control required formatting.",
        "verifiedEvidence": "MIT EECS 6.163 explicitly requires a lab notebook, states that all report statements/conclusions must be based on notebook data, and requires pre-lab objectives/protocol/calculations/sketches."
    },
    {
        "source": "mitEECSMethods",
        "role": "Required · Reproducible technical-method writing",
        "use": "Learn how to document experimental setup, procedure, algorithms/techniques and data-collection details at a level that lets another technical reader reproduce the work.",
        "watchFor": "Include only the necessary but sufficient setup/method detail, units/settings and rationale needed to repeat and verify the result.",
        "gap": "This is not a full research-paper writing course; use it for the methods/handoff quality expected in technical lab/project evidence.",
        "verifiedEvidence": "MIT EECS Communication Lab defines a successful EE Methods section as a step-by-step procedure with the details necessary to replicate the work and obtain similar results."
    },
    {
        "source": "mitShipping2026",
        "role": "Required · Technical handoff/release reproducibility teaching",
        "use": "Learn why a transferable project handoff needs version identifiers, dependencies, configuration, tested release artifacts and change/release notes rather than only source files.",
        "watchFor": "A receiver should be able to identify what version was handed off, reproduce its environment/dependencies and understand material changes from the prior release.",
        "gap": "Cloud deployment/package registries are examples; the transfer target is reproducible engineering handoff.",
        "verifiedEvidence": "MIT's 2026 lecture explicitly covers release processes, testing, dependency management, versioning, configuration, deployment/publishing and changelogs."
    }
]);

  patchMediaCard(23, "githubSkills", {
    role: "Required · Intro GitHub collaboration workflow",
    use: "Use GitHub Skills for repository, branch, commit, pull-request and merge workflow only.",
    watchFor: "Do not infer command-line status/diff/log, rollback or complete configuration management from this introduction; those skills are taught by the resources below.",
    gap: "Deliberately narrowed to what the introduction actually teaches; project-baseline/configuration-control depth is supplied separately."
  });

  appendMedia(23, [
    {
        "source": "mitGit2026",
        "role": "Required · Project-baseline and rollback Git teaching",
        "use": "Create and identify a known-good commit, inspect status/diff before a change, use log/history to reconstruct changes and understand git revert as a traceable way to reverse an earlier commit.",
        "watchFor": "Rollback means returning from a controlled change to an identified known-good state while preserving the history/evidence of what happened.",
        "gap": "Git controls files; hardware revision/BOM/configuration identity must also be recorded below.",
        "verifiedEvidence": "MIT's current Git lecture explicitly teaches status, log, diff and snapshots and includes git revert in its advanced command set."
    },
    {
        "source": "nasaConfigManagement",
        "role": "Required · Configuration-control/baseline framework",
        "use": "Learn configuration items, unique identification, baselines, proposed/approved change control, status accounting and configuration audit concepts, then scale them down to a one-person electronics/firmware project.",
        "watchFor": "Know exactly which hardware, firmware, documentation and test configuration constitutes the current baseline before modifying it.",
        "gap": "Do not import NASA program bureaucracy; use only the principles needed to make a small project reproducible and change-controlled.",
        "verifiedEvidence": "NASA defines CM as controlling changes to baselines, identifies configuration items and unique identifiers, establishes baselines and change control, and maintains current configuration/status records."
    },
    {
        "source": "autodeskElectronicsBom",
        "role": "Required · Electronics BOM identity/completeness teaching",
        "use": "Learn the minimum information needed for a useful electronics BOM: quantity, value, reference designator, footprint and manufacturer part number, and use those fields to make a hardware build reproducible.",
        "watchFor": "A generic part name is not enough—tie each populated design position to an unambiguous package/value/MPN and quantity where the project requires it.",
        "gap": "Fusion is only the documentation example; the BOM data model transfers to any EDA/project workflow.",
        "verifiedEvidence": "Autodesk's current electronics documentation explicitly lists these five BOM components and states the BOM is used to check design completeness."
    },
    {
        "source": "mitShipping2026",
        "role": "Required · Release/configuration handoff reinforcement",
        "use": "Freeze the project baseline with explicit version/configuration/dependency information and a tested handoff artifact so another person can identify and reproduce the released state.",
        "watchFor": "Do not call a folder copy a baseline unless its version, dependencies/configuration and release/change information are known.",
        "gap": "The physical hardware revision/BOM remains controlled by the NASA/BOM resources above.",
        "verifiedEvidence": "MIT's 2026 shipping lecture explicitly connects release identity to versioning, configuration, dependencies, testing and changelogs."
    }
]);


  // ---------------------------------------------------------------------------
  // CHUNK 5 — FINAL TARGETED CONTENT-COMPLETION REPAIR: WEEKS 25, 27, 28, 30
  // Weeks 26, 29 and 31 remain untouched because the adversarial standalone audit passed them.
  // ---------------------------------------------------------------------------
  Object.assign(C.sources, {
    "stHalI2cUseCases": {
      "title": "STM32 HAL I2C Use Cases — Status, Timeout, Error, Abort, and Recovery Paths",
      "org": "STMicroelectronics",
      "kind": "Manufacturer HAL driver use-case documentation",
      "url": "https://dev.st.com/stm32cube-docs/stm32u5-hal2/2.0.0-beta.1.1/docs/drivers/hal_drivers/i2c/hal_i2c_use_cases.html"
    },
    "nasaSensorRangeCheck": {
      "title": "R049 — Missing Software Sensor Range Checking Capabilities",
      "org": "NASA Software Engineering Handbook",
      "kind": "Government software-assurance risk and validation guidance",
      "url": "https://swehb.nasa.gov/spaces/SITE/pages/215777586/R049%2B-%2BMissing%2BSoftware%2BSensor%2BRange%2BChecking%2BCapabilities"
    },
    "schneiderI2cStaleData": {
      "title": "I2C Failure Case — Stale and Invalid Sensor Data Treated as Valid",
      "org": "Schneider Electric",
      "kind": "Manufacturer technical failure analysis",
      "url": "https://www.se.com/ae/en/faqs/FA219272/"
    },
    "niVeriStandWorkflow": {
      "title": "Getting Started with VeriStand — Full Validation Workflow",
      "org": "National Instruments",
      "kind": "Test-and-measurement manufacturer HIL workflow tutorial",
      "url": "https://www.ni.com/en/shop/data-acquisition-and-control/application-software-for-data-acquisition-and-control-category/what-is-veristand/free-trial.html"
    },
    "tekPythonAutomation": {
      "title": "Getting Started with Oscilloscope Automation and Python",
      "org": "Tektronix",
      "kind": "Test-equipment manufacturer Python automation guide",
      "url": "https://dev.tek.com/en/getting-started-guides/getting-started-with-oscilloscope-automation-and-python"
    },
    "keysightPythonAutomation": {
      "title": "Instrument Control and Automation with Python",
      "org": "Keysight Technologies",
      "kind": "Test-equipment manufacturer Python automation application note",
      "url": "https://www.keysight.com/us/en/assets/3123-1383/application-notes/Instrument-Control-and-Automation-with-Python.pdf"
    },
    "pyvisaInstrumentComm": {
      "title": "PyVISA — Communicating with Your Instrument",
      "org": "PyVISA Project",
      "kind": "Open-source instrument-control documentation",
      "url": "https://pyvisa.readthedocs.io/en/latest/introduction/communication.html"
    },
    "niFaultInjection": {
      "title": "Using Fault Insertion Units for Electronic Testing",
      "org": "National Instruments",
      "kind": "Test-and-measurement manufacturer fault-injection tutorial",
      "url": "https://www.ni.com/en/solutions/transportation/hardware-in-the-loop/using-fault-insertion-units--fius--for-electronic-testing.html"
    },
    "salesforceFieldServiceBasics": {
      "title": "Salesforce Field Service Basics — Work Orders, Time, Parts, Reports, and Service Operations",
      "org": "Salesforce Trailhead",
      "kind": "Current field-service operations training module",
      "url": "https://trailhead.salesforce.com/content/learn/modules/field_service_basics/field_service_basics_intro"
    },
    "salesforceWorkOrderEstimation": {
      "title": "Work Order Estimation — Cost, Effort, Quotes, and Work Planning",
      "org": "Salesforce",
      "kind": "Current field-service work-estimation documentation",
      "url": "https://help.salesforce.com/s/articleView?id=xcloud.aslm_woe_parent.htm&language=en_US&type=5"
    },
    "atlassianIncidentWorkflow": {
      "title": "Managing Incidents with an IT Service Desk",
      "org": "Atlassian",
      "kind": "Industry service-desk incident workflow guidance",
      "url": "https://confluence.atlassian.com/security/managing-incidents-with-your-it-service-desk-1402421268.html"
    },
    "digiKeyCrossReference": {
      "title": "How to Locate Alternate Products — Cross Reference Tool",
      "org": "DigiKey",
      "kind": "Electronics distributor parts cross-reference tutorial",
      "url": "https://www.digikey.com/en/help-support/products/cross-reference-tool"
    },
    "serviceNowFieldInventory": {
      "title": "Field Service Inventory — Parts, Consumption, Performed Services, and Invoicing",
      "org": "ServiceNow",
      "kind": "Current field-service operations documentation",
      "url": "https://www.servicenow.com/docs/r/field-service-management/work-order-management/sourcing-parts.html"
    },
    "neetsTechnicianHandbook": {
      "title": "NEETS Module 19 — The Technician's Handbook",
      "org": "U.S. Navy Electricity and Electronics Training Series / Historic Naval Ships Association",
      "kind": "Legacy technician reference manual used only for durable service-literature principles",
      "url": "https://www.maritime.org/doc/neets/mod19.pdf"
    },
    "umichEngineeringTechnicalInterview": {
      "title": "Technical Interview Resources",
      "org": "University of Michigan Engineering Career Resource Center",
      "kind": "Engineering-specific technical interview instruction",
      "url": "https://career.engin.umich.edu/technical-interviews/"
    },
    "mitTechnicalPresentation": {
      "title": "Technical Presentation",
      "org": "MIT Mechanical Engineering Communication Lab",
      "kind": "University engineering technical-presentation instruction",
      "url": "https://mitcommlab.mit.edu/meche/commkit/technical-presentation/"
    },
    "mitIndustryJobTalk": {
      "title": "Industry Job Talks — Explain Technical Choices, Evidence, and Your Contribution",
      "org": "MIT Communication Lab",
      "kind": "University technical job-talk guidance",
      "url": "https://mitcommlab.mit.edu/be/commkit/industry-job-talks/"
    }
  });

  appendMedia(25, [
    {
      "source": "stHalI2cUseCases",
      "role": "Required · Interface error-state and timeout teaching",
      "use": "Learn to treat a peripheral transaction as an explicit state/result, not merely as bytes: distinguish success, busy/in-progress, timeout and error results, retrieve error detail, and use abort/recovery paths when communication does not complete normally.",
      "watchFor": "A failed or timed-out transaction must not silently reuse the previous buffer as though it were a new sensor sample. Propagate an explicit validity/error state to the application.",
      "gap": "The exact status names differ across HAL versions and peripherals; the design principle is explicit result checking and bounded recovery.",
      "verifiedEvidence": "ST's current HAL2 I2C use cases explicitly show HAL_OK, HAL_INVALID_PARAM, HAL_BUSY, HAL_TIMEOUT and HAL_ERROR branches, last-error retrieval, callbacks, abort paths and recoverable blocking-error handling."
    },
    {
      "source": "schneiderI2cStaleData",
      "role": "Required · Real stale-data failure case",
      "use": "Study a real failure where an incomplete I2C transaction left old receive-buffer contents in place and firmware interpreted the stale value as fresh data; connect communication validity to data validity.",
      "watchFor": "Separate 'the last value was plausible' from 'a new valid sample was actually received.' Track freshness/validity and reject sentinel, malformed or failed-read data before conversion/control decisions.",
      "gap": "The Schneider device is only the failure example; the stale-data pattern transfers to the Week 25 sensor vertical slice.",
      "verifiedEvidence": "Schneider documents stale and invalid readings caused by failed/incomplete I2C transactions and describes initializing/validating the receive buffer so stale contents are not accepted as valid sensor data."
    },
    {
      "source": "nasaSensorRangeCheck",
      "role": "Required · Sensor plausibility/invalid-state teaching",
      "use": "Add requirement-based range/plausibility checks after transport success so electrically valid bytes cannot become trusted engineering values when the sensor result is out of allowed bounds or anomalous.",
      "watchFor": "Define the valid range from requirements/datasheet evidence, preserve the raw reading, mark invalid data explicitly and decide the safe application response rather than clamping or hiding the fault.",
      "gap": "Range checking complements but does not replace CRC/status-bit/freshness/timeout checks when the selected sensor provides them.",
      "verifiedEvidence": "NASA identifies missing software sensor range checking as a reliability risk because erroneous/out-of-bounds data can propagate into incorrect system behavior and calls for predefined acceptable thresholds and integration verification."
    }
  ]);

  appendMedia(27, [
    {
      "source": "niVeriStandWorkflow",
      "role": "Required · End-to-end automated-test architecture model",
      "use": "Learn the complete validation loop before coding it in Python: configure the test system/I/O, connect or simulate the DUT environment, apply a defined stimulus profile, observe/log signals, evaluate behavior, and preserve results for review.",
      "watchFor": "Keep setup, stimulus, acquisition, decision and logging as distinct test phases so a setup failure cannot be misreported as a DUT failure.",
      "gap": "VeriStand is the architecture example, not a required software dependency; implement the course project with the available Python/serial/instrument stack.",
      "verifiedEvidence": "NI's current getting-started material walks from host/project setup and I/O/model mapping through stimulus-profile automation, real-time data logging and fault-injection-capable validation."
    },
    {
      "source": "tekPythonAutomation",
      "role": "Required · Python measurement-automation teaching",
      "use": "Learn how a Python host controls real test equipment through a programmatic interface, repeats setup/measure/save operations consistently and turns manual measurement logging/validation into an automated routine.",
      "watchFor": "Automate deliberate instrument settings and queries; do not use remote control as a substitute for knowing what measurement the requirement actually needs.",
      "gap": "The oscilloscope is the concrete example; the same controller→instrument→DUT→measurement pattern transfers to other instruments.",
      "verifiedEvidence": "Tektronix explicitly teaches Python oscilloscope automation for repeatable setup, measurements, logging, validation/QA and programmatic interfaces."
    },
    {
      "source": "keysightPythonAutomation",
      "role": "Required · Structured instrument-driver/test-step example",
      "use": "Study a current manufacturer example that separates instrument abstraction from test-step logic and uses SCPI queries/commands to configure, stimulate/measure and retrieve waveform/result data programmatically.",
      "watchFor": "Keep instrument drivers responsible for reliable I/O and test logic responsible for requirement conditions/verdicts; preserve raw returned data before derived reporting.",
      "gap": "Keysight OpenTAP is an implementation example; the architectural separation transfers to the project's simpler Python test harness.",
      "verifiedEvidence": "Keysight's current application note demonstrates Python/OpenTAP instrument classes, SCPI commands/queries, oscilloscope measurements, screenshots and trace-data acquisition for automated testing."
    },
    {
      "source": "pyvisaInstrumentComm",
      "role": "Required when controlling VISA/SCPI instruments · I/O and timeout reference",
      "use": "Learn resource discovery/open, write/read/query, termination settings, timeout behavior and communication debugging so instrument-control failures are distinguishable from DUT failures.",
      "watchFor": "Verify identity/configuration before testing, set explicit timeouts/termination, handle communication exceptions, and close resources during cleanup.",
      "gap": "Use pySerial rather than VISA for the MCU's UART path; PyVISA applies to bench instruments that expose VISA-compatible interfaces.",
      "verifiedEvidence": "Current PyVISA documentation explicitly teaches ResourceManager/open_resource, write/read/query, termination configuration, timeouts and debugging of failed instrument communication."
    }
  ]);

  patchMediaCard(28, "saleae", {
    role: "Optional · Logic-analyzer product/support navigation",
    use: "Use only to locate the appropriate Saleae analyzer help when a controlled fault affects digital timing or protocol traffic.",
    watchFor: "Do not treat this generic support source as instruction in fault-injection methodology; controlled fault design is taught separately below.",
    gap: "Excluded from evidence that Week 28 independently teaches controlled fault injection."
  });

  appendMedia(28, [
    {
      "source": "niFaultInjection",
      "role": "Required · Controlled hardware fault-injection methodology",
      "use": "Learn fault injection as a deliberate test method: establish the no-fault/pass-through baseline, insert one defined fault, observe the DUT response, remove the fault, confirm recovery/reproducibility, and preserve the exact fault condition and evidence.",
      "watchFor": "Distinguish open circuit, pin-to-pin short, short-to-ground and short-to-power concepts; the course must emulate only electrically safe faults appropriate to the low-voltage project rather than copying high-energy HIL hardware literally.",
      "gap": "NI's FIU hardware is an industry example; AU-ESET 301 uses safe project-appropriate fault emulation/injection methods.",
      "verifiedEvidence": "NI explicitly teaches FIUs for validating ECU behavior under known fault conditions and documents no-fault operation, opens, shorts to ground/power and pin-to-pin shorts."
    },
    {
      "source": "salesforceFieldServiceBasics",
      "role": "Required · Technician work-order/productivity workflow",
      "use": "Learn the field-service records that surround technical work: work orders and work types, service appointments, time sheets, required/consumed parts, inventory movement and customer-facing service reports.",
      "watchFor": "Separate the technical diagnosis from the operational record, but make sure time, parts, status and final service result are traceable to the same job/work order.",
      "gap": "Salesforce is the workflow example; employers may use different FSM/ERP systems with equivalent records.",
      "verifiedEvidence": "Salesforce's current Field Service training enumerates work orders, time sheets, parts/product requests and transfers, service appointments and service-report templates as core field-service objects."
    },
    {
      "source": "salesforceWorkOrderEstimation",
      "role": "Required · Estimate/quote planning literacy",
      "use": "Learn why service work is estimated before execution: identify work scope, expected labor/effort and parts/cost inputs, review the estimate/quote, obtain approval, then generate/plan the work order.",
      "watchFor": "Do not promise a repair price or completion scope until the estimate states assumptions and required work/parts; technical uncertainty belongs in the estimate or escalation path.",
      "gap": "The course requires procedural literacy, not expertise in Salesforce pricing administration.",
      "verifiedEvidence": "Current Salesforce Work Order Estimation guidance explicitly covers assessing cost/effort, generating quote proposals, customer approval and conversion into work orders."
    },
    {
      "source": "serviceNowFieldInventory",
      "role": "Required · Parts consumption and billing-record literacy",
      "use": "Learn how a field-service system links required/used parts and performed services to inventory and customer billing/invoicing records.",
      "watchFor": "Record the actual quantity/part/service performed; do not substitute an approximate component description when the service record requires a specific item or entitlement/price-list entry.",
      "gap": "Accounting policy and pricing authority remain employer-specific; the learning target is traceable parts/service consumption and billing inputs.",
      "verifiedEvidence": "ServiceNow's current FSM documentation states that technicians record used products/performed services, inventory is adjusted and services/parts can be invoiced according to price lists or entitlements."
    },
    {
      "source": "atlassianIncidentWorkflow",
      "role": "Required · Help-desk, escalation, and closure workflow",
      "use": "Learn the support lifecycle: log and identify the incident, categorize/prioritize it, diagnose, communicate, escalate when needed, resolve, verify the fix, document the resolution and close the record.",
      "watchFor": "Escalation is a controlled technical decision when authority, risk, tools or expertise exceed your boundary—not a substitute for recording what you already observed and tried.",
      "gap": "ITIL/Jira terminology is an example; the log→diagnose→escalate→verify→document pattern transfers to electronics service operations.",
      "verifiedEvidence": "Atlassian's documented incident workflow explicitly covers logging, date/time/ID, categorization, priority, diagnosis, escalation to second-line support, verification, documentation and closure."
    },
    {
      "source": "digiKeyCrossReference",
      "role": "Required · Replacement-part cross-reference procedure",
      "use": "Learn to locate candidate substitute parts from a complete manufacturer part number and compare parametric/pinout information before treating a cross as a replacement.",
      "watchFor": "A cross-reference result is a candidate, not automatic equivalence; verify critical ratings, function, package/pinout and the governing datasheets before substitution.",
      "gap": "Availability/pricing change; the technical verification process is the durable skill.",
      "verifiedEvidence": "DigiKey's current cross-reference tutorial teaches full-part-number search, comparison/filtering, base-part options and pinout comparison for substitute parts."
    },
    {
      "source": "neetsTechnicianHandbook",
      "role": "Required · Legacy service-literature principles only",
      "use": "Study the durable rule that current equipment technical manuals/service publications are part of the maintenance system: identify the correct manual, keep revisions/change notices current, use general test/servicing references appropriately and avoid troubleshooting from obsolete schematics/data.",
      "watchFor": "Treat Navy publication names, organizations and ordering systems as historical examples only; transfer the principle to the current manufacturer service manual, datasheet, bulletin or employer knowledge base for the equipment at hand.",
      "gap": "Legacy logistics details are not current practice and are not assessed; only publication control, service-information selection and revision awareness are assigned.",
      "verifiedEvidence": "NEETS Module 19 explicitly explains publications for maintenance/reference, equipment technical manuals, change notices/updates, test/servicing handbooks and the productivity loss caused by obsolete data/schematics."
    }
  ]);

  appendMedia(30, [
    {
      "source": "umichEngineeringTechnicalInterview",
      "role": "Required · Engineering technical-interview reasoning",
      "use": "Practice solving and defending technical questions out loud: clarify missing information, state assumptions, show the reasoning path, use sketches/equations/evidence when useful, and explain how you reached the conclusion rather than only giving an answer.",
      "watchFor": "When discussing Project 1, make the same reasoning visible: symptom/requirement → hypothesis → expected observation → measurement/test → result → next decision.",
      "gap": "Interview topics vary by employer; this supplies the engineering reasoning behavior expected across technical interviews.",
      "verifiedEvidence": "Michigan Engineering defines technical interviews as demonstrations of how candidates solve problems and reach conclusions and explicitly recommends thinking aloud, asking clarifying questions and using available visual tools."
    },
    {
      "source": "mitTechnicalPresentation",
      "role": "Required · Evidence-based project defense",
      "use": "Build a short technical defense around the motivating problem, design/test approach, the minimum evidence needed to support each claim, results and limitations; be prepared to justify why you chose a method over alternatives.",
      "watchFor": "Introduce the expected pattern/measurement logic before showing data, then explain how the observed evidence supports or contradicts the hypothesis instead of narrating screenshots chronologically.",
      "gap": "This is presentation/defense structure; the underlying calculations, captures and logs must already exist in the project dossier.",
      "verifiedEvidence": "MIT's engineering presentation guidance explicitly requires a motivating problem, method rationale/alternatives, data tied to questions, anticipation of design-choice questions and evidence that supports the conclusion."
    },
    {
      "source": "mitIndustryJobTalk",
      "role": "Required · Technical contribution/tradeoff interview framing",
      "use": "Rehearse the project as an industry-facing technical story that highlights your specific contribution, the choices you made, the reasoning behind those choices, the evidence/results and what you learned or would change.",
      "watchFor": "Do not hide limitations or unsuccessful paths; explain what evidence changed your mind and how the next engineering decision followed from it.",
      "gap": "The job-talk format may be longer than an interview answer; compress the same reasoning into 30-second, 2-minute and deep-dive versions.",
      "verifiedEvidence": "MIT's industry job-talk guidance explicitly says hiring teams are interested in the candidate's reasoning and the choices made during technical project work, not only the final result."
    }
  ]);


  C.meta = C.meta || {};
  C.meta.mediaRevision = "2026-09-18-teaching-media-content-completion-v16.3.6-candidate";
  C.meta.mediaPolicy = "Teaching Media v16.3.6 content-completion candidate: the assigned external media/resource pathway has been repaired to independently teach the mapped explanation objectives, but final 31-week standalone acceptance remains pending the post-repair audit. Labs, projects, measurements, soldering, coding, debugging, troubleshooting demonstrations, assessments and physical evidence remain required.";

})();
