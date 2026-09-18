# AU-ESET 301 v16.3 — Resource Verification

**Current runtime patch:** v16.3.5  
**Teaching Media revision:** 2026-09-17-31-week-self-reliance  
**Verification revision:** 2026-09-17-v16.3.5-self-reliance  

## Purpose

This record documents the v16.3.5 Teaching Media self-reliance revision. The controlling standard is stronger than the earlier v16.3.3/v16.3.4 reinforcement audit: the external Teaching Media/resource pathway must collectively teach the mapped explanation objectives for each module well enough to function as an independent explanation route. It is not sufficient for a card to point to a broad landing page or to defer missing explanation to the Alfred lesson.

Hands-on work remains separate. Teaching Media does **not** replace required labs, projects, physical measurements, soldering/rework, coding, debugging, troubleshooting demonstrations, assessments, mastery thresholds, or evidence requirements.

## Acceptance method

For each module, the audit maps actual module objectives to external teaching content; checks transcript, captions, chapter/lesson descriptions, slides, technical documentation or equivalent evidence; rejects superficial or misleading material; cross-checks technical claims with university, manufacturer, government or established engineering sources; and adds resources where the collective path leaves a material gap.

Preferred sources remain universities/professors, ETA and recognized electronics training organizations, manufacturers and test-equipment vendors, government/standards bodies, and established technical educators. Free/public material is preferred.

## Effective 31-week Teaching Media inventory

The production `teaching-media-self-reliance.js` overlay contains **177 effective media/resource cards across 31/31 modules**. The table below is generated from that production overlay rather than from a separate hand-maintained count.

| Week | Objective area | Effective sources |
|---:|---|---|
| 1 | Electrical quantities, safety, Ohm’s law, power, notation and circuit reference | `aacElectricalA`, `aacElectricalB`, `aacTechnicalNotation`, `aacCurrentPath`, `aacGroundReference`, `flukeSafety`, `phetDC` |
| 2 | DC networks, series/parallel, KCL/KVL, voltage dividers, loading and fault isolation | `aacSeries1`, `aacSeriesDivider`, `aacParallel`, `aacKclKvl`, `aacMeterLoading`, `aacTroubleshootSeriesParallel`, `phetDC` |
| 3 | DMM, bench supply, CV/CC operation, oscilloscope setup and probing | `flukeMultimeterGuide`, `keysightBenchPowerCourse`, `keysightBenchCvCc`, `tekScopeWebinar`, `tekScopeSetup` |
| 4 | AC waveform language, C/L behavior, reactance/phase and RC/RL time response | `aacSinusoidalSignals`, `aacCapIndModern`, `aacRcRl`, `aacRcTime1`, `aacRcTime2`, `adiLtspice` |
| 5 | Practical fault isolation and troubleshooting strategy | `aacTroubleshootOpenShort`, `aacTroubleshootSeries`, `aacTroubleshootParallel`, `aacTroubleshootSeriesParallel`, `aacTroubleshootingStrategies`, `etaFormula`, `mitLabs` |
| 6 | Reactance, impedance, RLC resonance, filters and transformers | `aacRcRl`, `aacSeriesRlc`, `aacResonantFilters`, `aacTransformerPart1`, `adiLtspice` |
| 7 | Components, ratings/datasheets, magnetism, relays, motors and generators | `aacPassiveComponents`, `aacElectronicComponents`, `aacElectromagnetism`, `aacElectromagneticInduction`, `tiTransformers2026`, `tiInductiveLoads`, `tiMotorTypes`, `digiKeyDatasheet` |
| 8 | Semiconductors: diodes, BJTs, MOSFETs, selection and troubleshooting | `aacSemiconductorBasics`, `aacDiodeCharacteristics`, `aacBjtIntro`, `aacMosfetLecture`, `tiMosfetBasics2026`, `digiKeyDatasheet`, `aacTroubleshootSemiconductors` |
| 9 | Rectifiers, filtering, regulation, switching supplies and power-rail faults | `aacPowerSupplies`, `aacPowerSupplyCircuits`, `aacPowerIcs`, `tiSwitchingRegulatorFundamentals`, `tiBoardTroubleshooting`, `flukeMultimeterGuide` |
| 10 | Amplifiers, op-amps, gain/decibels, loading, bandwidth and distortion | `aacDecibels`, `aacAmpConfigs`, `aacOpAmpBasicConfig`, `tiPrecisionOpAmps`, `tiOpAmpOutputStage` |
| 11 | Number systems, Boolean logic, sequential/combinational logic and real logic levels | `aacBinaryConversion`, `aacBooleanPostulates`, `aacCombinationalLogic`, `aacSequentialLogic`, `aacLogicLevels`, `aacCmosGateCircuitry`, `tiDebounceSwitch`, `saleaeDigitalSignals` |
| 12 | Soldering, ESD, defect recognition, rework and traceable repair | `nasaESD`, `digiKeySoldering`, `adafruitSolderProblems`, `chemtronicsSolderWick`, `nasaHarness`, `githubSkills` |
| 13 | Diagram types, schematics, datasheets and system-level troubleshooting | `aacSystemNotations`, `digiKeySchematics`, `digiKeyDatasheet`, `nscTroubleshooting`, `tiBoardTroubleshooting` |
| 14 | Computer architecture, C fundamentals, memory and pointers | `mitAssemblyArchitecture`, `cs50Week1C2026`, `cs50C`, `beejC` |
| 15 | Embedded C, registers, volatile/bitwise work, GPIO, state and timing | `armEmbedded`, `aacSequentialLogic`, `stCubeIdeBasics`, `saleaeDigitalSignals` |
| 16 | STM32 project creation, startup, GPIO/peripherals and SWD/debug workflow | `stCubeIdeBasics`, `stCubeIdeDebug`, `armEmbedded`, `stBootStartup` |
| 17 | UART electrical/framing behavior, capture/decoding and Python host access | `saleaeLearnAsync`, `saleaeStm32Uart`, `saleaeAsyncSerial`, `pyserial` |
| 18 | I2C/SPI electrical/protocol behavior, analyzer evidence and device datasheets | `saleaeLearnI2c`, `saleaeStm32I2c`, `saleaeLearnSpi`, `saleaeStm32Spi`, `saleaeI2cGuide`, `saleaeSpiGuide`, `digiKeyDatasheet` |
| 19 | Audio paths, copper/coax/premises cabling, fiber optics and fiber testing | `tiAudioAmpBasics`, `tiAudioFundamentals`, `foaPremisesGuide`, `foaMediaLectureIndex`, `foaSplicesConnectors`, `foaTestingOverview` |
| 20 | RF/microwave basics, transmission lines, modulation, spectrum analysis and safety | `rsRfDefinition`, `aacTransmissionLine`, `nptelComms`, `rsSpectrumBasics`, `rsOccupiedBandwidth`, `fccRF` |
| 21 | Retrieval practice, spacing/interleaving and cumulative CETa integration | `ucsdStudyVideos`, `ucsdRetrieval`, `etaCompetencies`, `etaFormula`, `privateGuide` |
| 22 | Requirements definition, traceability, verification and validation | `mitRequirements`, `nasaRequirementAppendix`, `mitVerification`, `nasaSystems`, `onetTech` |
| 23 | Project baseline, configuration control, BOM/readiness and first-power planning | `githubSkills`, `mitRequirements`, `nasaSystems`, `keysightBenchPowerCourse` |
| 24 | Safe first power, current limiting, board-level checks, startup and measurement | `keysightBenchCvCc`, `tiBoardTroubleshooting`, `stBootStartup`, `flukeMultimeterGuide`, `nasaESD` |
| 25 | Sensor/interface vertical slice, ADC/I2C/SPI integration and galvanic isolation | `tiGalvanicIsolation`, `tiIsolationSeries`, `stMooc`, `saleaeStm32I2c`, `saleaeStm32Spi`, `tiADC` |
| 26 | Firmware layers, state/memory, watchdogs, diagnostics and crash debugging | `armEmbedded`, `stOnlineTrainingCurrent`, `stWatchdogGuide`, `armDebuggingAdventures`, `tiCrashDebugging`, `nasaSystems` |
| 27 | Python hardware-test automation, serial robustness, fixtures, logging and verdict semantics | `pyserial`, `pytest`, `pythonDocs`, `matplotlib`, `mitVerification` |
| 28 | Controlled fault injection, root cause, repeatability and corrective-action evidence | `tiBoardTroubleshooting`, `saleae`, `pytest`, `nasaSystems` |
| 29 | Workmanship/instrumentation evidence dossier and role-proof integration | `adafruitSolderProblems`, `chemtronicsSolderWick`, `nasaHarness`, `nasaESD`, `flukeMultimeterGuide`, `tekScopeSetup`, `saleaeDigitalSignals`, `onetTech` |
| 30 | Evidence-backed resume/project bullets and technical/behavioral interview defense | `gatechResumeGuide`, `umichResumeBullets`, `pennStarVideo`, `umichInterviewing`, `etaExam`, `onetTech` |
| 31 | Application tracking, feedback loops and continuing technical retention | `umichJobSearch`, `pennSearchWorkshop`, `ucsdStudyVideos`, `etaCompetencies`, `etaExam`, `onetTech` |

## Card-level instructional roles

### Week 1 — Electrical quantities, safety, Ohm’s law, power, notation and circuit reference

- **`aacElectricalA` — Required · Teaching lecture.** Build the physical meaning of charge, voltage, current and resistance before using formulas.
  - Verification note: Transcript inspected: definitions of charge/coulombs, voltage, current/amperes, resistance, electron/conventional-current language.
- **`aacElectricalB` — Required · Teaching lecture.** Learn Ohm’s law as a relationship and electrical power as energy-rate/rating evidence; work the examples.
  - Verification note: Transcript inspected: all Ohm and power forms, proportionality and worked circuit examples.
- **`aacTechnicalNotation` — Required · Teaching lecture.** Learn scientific/engineering notation and SI prefixes used throughout electronics.
  - Verification note: Transcript inspected: engineering notation, powers of ten, prefix substitutions and conversion exercises.
- **`aacCurrentPath` — Required · Teaching lecture.** Connect the electrical quantities to an actual source, load and complete return path.
  - Verification note: Transcript inspected: EMF/source, sustained-current requirements, open circuits and current direction.
- **`aacGroundReference` — Required · Teaching lecture.** Establish circuit reference/ground and polarity before DMM work.
  - Verification note: Transcript inspected: reference nodes, common return, alternate references and negative readings.
- **`flukeSafety` — Required · Safety instruction.** Complete the electrical measurement-safety material before physical meter work.
  - Verification note: Current Fluke safety objectives cross-checked: shock/electrocution, arc hazards, PPE, standards/ratings, inspection and safer measurement practices.
- **`phetDC` — Virtual route · Application.** Rehearse source/load loops, opens, shorts and meter placement only after prediction.
  - Verification note: Retained as application media; not counted as primary explanation.

### Week 2 — DC networks, series/parallel, KCL/KVL, voltage dividers, loading and fault isolation

- **`aacSeries1` — Required · Teaching lecture.** Learn series topology, shared current, total resistance, voltage drops and power.
  - Verification note: Transcript inspected: series definition and current/resistance/voltage/power relationships.
- **`aacSeriesDivider` — Required · Teaching lecture.** Derive and apply the voltage-divider relationship.
  - Verification note: Transcript inspected: divider derivation and worked resistor voltage drops.
- **`aacParallel` — Required · Teaching lecture.** Learn parallel topology, common voltage, branch currents, equivalent resistance and power.
  - Verification note: Transcript inspected: parallel definition and worked voltage/current/resistance/power relationships.
- **`aacKclKvl` — Required · Teaching tutorial.** Use conservation to generalize series/parallel reasoning to arbitrary nodes and loops.
  - Verification note: Transcript inspected: KCL, KVL, Ohm’s law, power and worked unknown-current/voltage examples.
- **`aacMeterLoading` — Required · Worked tutorial.** Study a quantitative loaded-divider example immediately after the ideal divider.
  - Verification note: Current tutorial inspected: explicitly compares divider behavior before/after a 10 MΩ voltmeter load.
- **`aacTroubleshootSeriesParallel` — Required · Technician application.** Use expected node values to select measurements that discriminate fault hypotheses.
  - Verification note: Transcript inspected: mixed-network fault localization using expected vs measured voltages.
- **`phetDC` — Virtual route · Application.** Build the analyzed network and compare simulated node/branch values to calculations.
  - Verification note: Retained as application media.

### Week 3 — DMM, bench supply, CV/CC operation, oscilloscope setup and probing

- **`flukeMultimeterGuide` — Required · DMM instruction.** Use the manufacturer guide/video for jacks, modes and voltage/resistance/continuity/frequency/diode/capacitance workflow.
  - Verification note: Current Fluke guide inspected; includes step-by-step functions and explicit current-jack short-circuit warning.
- **`keysightBenchPowerCourse` — Required · Bench-supply video course.** Complete Lessons 1–5: voltage/current/regulation, core specs, linear vs switching, CV/CC and readback.
  - Verification note: Current Keysight course page lists 16 demonstrations and explicitly identifies these first five topics.
- **`keysightBenchCvCc` — Required · Focused manufacturer video.** Use the dedicated CV/CC demonstration to understand the supply’s two interacting limits.
  - Verification note: Keysight lesson description explicitly teaches CV/CC operation and use cases.
- **`tekScopeWebinar` — Required · Oscilloscope video instruction.** Learn manual vertical, horizontal/acquisition and trigger controls plus common probing problems.
  - Verification note: Tektronix page inspected: 46-minute applications-engineer session covering the listed controls and probing problems.
- **`tekScopeSetup` — Required · Manufacturer tutorial.** Use the setup chapters for grounding, probe connection/compensation and basic voltage/time measurements.
  - Verification note: Current Tektronix primer cross-checked for controls, grounding, calibration, probe connection/compensation and measurement technique.

### Week 4 — AC waveform language, C/L behavior, reactance/phase and RC/RL time response

- **`aacSinusoidalSignals` — Required · Teaching tutorial.** Learn amplitude, period/frequency, phase, cycles and sine/cosine waveform representation.
  - Verification note: Transcript inspected: amplitude, frequency, phase, angular frequency and time-domain equations.
- **`aacCapIndModern` — Required · Teaching tutorial.** Compare capacitor electric-field storage with inductor magnetic-field storage and their time behavior.
  - Verification note: Tutorial inspected: capacitor/inductor storage, charging/current-voltage behavior and RC/RL time constants.
- **`aacRcRl` — Required · Teaching lecture.** Connect R/C/L behavior to sinusoidal steady state, reactance, impedance and phase.
  - Verification note: Transcript inspected: RC/RL, reactance, impedance, phase and phasor reasoning.
- **`aacRcTime1` — Required · Teaching lecture.** Calculate tau and predict RC charging/discharging before seeing a waveform.
  - Verification note: Transcript inspected: tau=RC, exponential response, current decay and five-time-constant convention.
- **`aacRcTime2` — Required · Teaching lecture.** Compare short/moderate/long time constants against pulse duration and filter/time-delay behavior.
  - Verification note: Transcript inspected: pulse/time-constant cases and filtering/time-delay applications.
- **`adiLtspice` — Virtual route · Application.** Reproduce the RC transient and frequency response after written predictions.
  - Verification note: Retained as application media after explanatory instruction.

### Week 5 — Practical fault isolation and troubleshooting strategy

- **`aacTroubleshootOpenShort` — Required · Teaching lecture.** Start with canonical open/short fault signatures.
  - Verification note: Transcript inspected: diagnosis definition, open/short effects and repair decision process.
- **`aacTroubleshootSeries` — Required · Teaching lecture.** Extend troubleshooting to increased/decreased component resistance.
  - Verification note: Transcript inspected: tolerance/aging plus open/short/increased/decreased resistance measurement signatures.
- **`aacTroubleshootParallel` — Required · Teaching lecture.** Learn branch-fault behavior and efficient measurement selection.
  - Verification note: Transcript inspected: those three rules plus parallel-circuit diagnostic demonstrations.
- **`aacTroubleshootSeriesParallel` — Required · Teaching lecture.** Apply expected-value diagnosis to a mixed network.
  - Verification note: Transcript inspected: stepwise series-parallel fault isolation from expected vs measured values.
- **`aacTroubleshootingStrategies` — Required · Teaching lecture.** Generalize to history/observation, in-circuit limitations, substitution, signal tracing/injection and split-half diagnosis.
  - Verification note: Transcript inspected: logbooks/history, in-circuit testing, substitution, tracing/injection and divide-and-conquer.
- **`etaFormula` — Required · Post-retrieval reference.** Use only after a closed-note formula brain dump, then solve a changed example.
  - Verification note: Official ETA formula reference retained for verification.
- **`mitLabs` — Reference · Evidence model.** Compare how university labs separate prediction, procedure, observation and interpretation.
  - Verification note: Retained as evidence-model reference.

### Week 6 — Reactance, impedance, RLC resonance, filters and transformers

- **`aacRcRl` — Required · Reactance/phase teaching.** Review how capacitor and inductor reactance changes with frequency and how phase makes AC circuit arithmetic different from DC.
  - Verification note: Previously verified transcript teaches RC/RL reactance, impedance, phase and phasor reasoning.
- **`aacSeriesRlc` — Required · Impedance worked tutorial.** Work a full R-L-C impedance example so resistance and opposite-sign reactive terms become one circuit model.
  - Verification note: Current AAC tutorial explicitly solves reactance and impedance in a series RLC circuit.
- **`aacResonantFilters` — Required · Resonance/filter teaching.** Learn why series and parallel LC impedance changes sharply at resonance and how that becomes band-pass or band-stop behavior.
  - Verification note: Current AAC tutorial explains series/parallel resonance, pass/stop topologies and SPICE frequency-response examples.
- **`aacTransformerPart1` — Required · Transformer teaching.** Learn turns ratio, voltage/current transformation and step-up/step-down behavior.
  - Verification note: Existing college transformer lecture retained.
- **`adiLtspice` — Required · Frequency-response application.** Run an AC sweep only after predicting resonance/cutoff behavior and compare the plot to the prediction.
  - Verification note: Existing LTspice source retained for application.

### Week 7 — Components, ratings/datasheets, magnetism, relays, motors and generators

- **`aacPassiveComponents` — Required · Component-family teaching.** Build the passive/active/electromechanical classification and connect each family to energy, signal, motion or interconnection behavior.
  - Verification note: Current AAC tutorial explicitly teaches passive, active and electromechanical categories including motors, generators, solenoids, switches and connectors.
- **`aacElectronicComponents` — Required · Relay/switch/component teaching.** Learn component symbols and basic relay/switch operation including poles, throws, NO/NC contacts and electromagnetic actuation.
  - Verification note: College transcript covers capacitors, inductors, transformers, switches, relays, transistors, diodes and ICs.
- **`aacElectromagnetism` — Required · Magnetism/relay foundation.** Connect current, magnetic field, coils and electromagnets to relays and motors.
  - Verification note: Current AAC text teaches current-produced magnetic fields, coils/electromagnets and relay/motor applications.
- **`aacElectromagneticInduction` — Required · Generator/transformer foundation.** Learn how changing magnetic flux induces voltage and why motion/change is required for generation.
  - Verification note: Current AAC text teaches Faraday induction and changing-flux voltage generation.
- **`tiTransformers2026` — Required · Real transformer behavior.** Extend the ideal transformer model to magnetizing/leakage inductance and real transformer effects.
  - Verification note: Existing TI/UT lecture retained.
- **`tiInductiveLoads` — Required · Relay/solenoid switching.** See what stored magnetic energy does at turn-off and how flyback/clamp paths protect the switch.
  - Verification note: Existing TI manufacturer training retained.
- **`tiMotorTypes` — Required · Motor-family overview.** Compare brushed DC, stepper and brushless motor behavior and what physically creates torque.
  - Verification note: Existing TI manufacturer training retained.
- **`digiKeyDatasheet` — Required · Ratings/datasheet teaching.** Learn how to find pinout, absolute maximums, recommended conditions, ratings, charts and operating specifications before connecting a component.
  - Verification note: DigiKey current instructional video explicitly teaches tables, charts and specifications for component selection/use.

### Week 8 — Semiconductors: diodes, BJTs, MOSFETs, selection and troubleshooting

- **`aacSemiconductorBasics` — Required · Semiconductor foundation.** Learn doping, carriers and why semiconductor junctions can create controllable device behavior.
  - Verification note: Current AAC video tutorial teaches semiconductor materials, doping and device formation.
- **`aacDiodeCharacteristics` — Required · Diode teaching.** Learn forward/reverse bias, practical forward drop, leakage and breakdown.
  - Verification note: College transcript explicitly teaches ideal/practical diode behavior, forward drop and reverse breakdown.
- **`aacBjtIntro` — Required · BJT teaching.** Learn NPN/PNP structure, terminals and current-control concept before switch/bias work.
  - Verification note: College transcript introduces BJT structure, NPN/PNP and terminal roles.
- **`aacMosfetLecture` — Required · MOSFET teaching.** Learn enhancement/depletion and N/P channel behavior plus gate/source/drain roles.
  - Verification note: College transcript teaches MOSFET classes, channel types and device operation.
- **`tiMosfetBasics2026` — Required · MOSFET switch application.** Use the TI lecture to connect gate drive, body diode, switching behavior and on-resistance to a real low-side switch.
  - Verification note: Existing TI/UT MOSFET lecture retained.
- **`digiKeyDatasheet` — Required · Semiconductor selection.** Read pinout, absolute maximums, operating limits and characteristic curves before selecting or powering a diode/BJT/MOSFET.
  - Verification note: Current DigiKey datasheet lesson retained.
- **`aacTroubleshootSemiconductors` — Required · Device troubleshooting.** Learn practical semiconductor handling/test considerations and how failures can present.
  - Verification note: College transcript covers semiconductor troubleshooting and mechanical handling considerations.

### Week 9 — Rectifiers, filtering, regulation, switching supplies and power-rail faults

- **`aacPowerSupplies` — Required · Rectifier/power-supply lecture.** Learn the transformer→rectifier→filter→regulator chain and how half/full-wave rectification creates pulsating DC.
  - Verification note: College transcript explicitly teaches AC-to-DC supply purpose, rectification and power-supply stages.
- **`aacPowerSupplyCircuits` — Required · Supply topology reading.** Compare unregulated, linear regulated and switching supplies and connect ripple/noise behavior to each topology.
  - Verification note: Current AAC text distinguishes unregulated, linear, switching and ripple-regulated supplies.
- **`aacPowerIcs` — Required · Regulator teaching video.** Learn linear versus switching regulation, efficiency/noise tradeoffs and common PMIC roles.
  - Verification note: Current AAC video tutorial teaches linear vs switching regulator architecture and tradeoffs.
- **`tiSwitchingRegulatorFundamentals` — Required · Switching-regulator reference.** Use the introductory sections for PWM and buck/boost/buck-boost/flyback energy flow.
  - Verification note: TI application report explicitly teaches PWM and common switching-converter topologies.
- **`tiBoardTroubleshooting` — Required · Power fault-isolation application.** Apply structured board-level checks to power-rail symptoms rather than replacing parts by guesswork.
  - Verification note: Existing TI board troubleshooting video retained.
- **`flukeMultimeterGuide` — Required · Measurement application.** Use the correct DMM mode/jacks for rail voltage, de-energized resistance/continuity and diode checks.
  - Verification note: Previously verified Fluke guide retained.

### Week 10 — Amplifiers, op-amps, gain/decibels, loading, bandwidth and distortion

- **`aacDecibels` — Required · Gain/decibel teaching.** Learn voltage/current/power gain and convert ratios to decibels with worked examples.
  - Verification note: College transcript explicitly teaches amplifier gain and dB conversions.
- **`aacAmpConfigs` — Required · Transistor amplifier teaching.** Compare common-emitter, common-collector and common-base behavior and loading/phase implications.
  - Verification note: College transcript teaches the three common BJT amplifier configurations.
- **`aacOpAmpBasicConfig` — Required · Op-amp configuration teaching.** Learn inverting/non-inverting feedback configurations and derive closed-loop gain from the resistor network.
  - Verification note: College transcript teaches basic op-amp amplifier configurations.
- **`tiPrecisionOpAmps` — Required · Op-amp curriculum.** Complete the mapped introduction, input/output limitations, bandwidth/gain and slew-rate lessons.
  - Verification note: Current TI series lists sequenced college-style lessons on input/output limits, gain/bandwidth, slew, distortion, noise and stability.
- **`tiOpAmpOutputStage` — Required · Loading/clipping teaching.** Learn how output-stage topology and load current create distortion and clipping.
  - Verification note: TI video explicitly addresses output loading and clipping/distortion.

### Week 11 — Number systems, Boolean logic, sequential/combinational logic and real logic levels

- **`aacBinaryConversion` — Required · Teaching lecture.** Build fluency converting binary ↔ decimal and binary ↔ hexadecimal.
  - Verification note: Transcript inspected: binary→decimal, decimal→binary, binary↔hex and worked examples.
- **`aacBooleanPostulates` — Required · Teaching lecture.** Learn Boolean operators/identities and simplify logic expressions into gate realizations.
  - Verification note: Transcript inspected: Boolean postulates, De Morgan-style transformations, reduction and gate realization.
- **`aacCombinationalLogic` — Required · Teaching lecture.** Learn combinational logic as output determined by present inputs; connect equations/truth tables/gates.
  - Verification note: Transcript/page inspected as the course’s combinational-logic lecture.
- **`aacSequentialLogic` — Required · Teaching lecture.** Learn how latches/flip-flops and clocking create state/memory.
  - Verification note: Transcript/page inspected: sequential-state and flip-flop behavior.
- **`aacLogicLevels` — Required · Real-hardware reading.** Learn that logic 0/1 are guaranteed voltage ranges with an indeterminate region and family-specific thresholds.
  - Verification note: Current AAC tutorial inspected: logic ranges, uncertain region and TTL/CMOS compatibility issues.
- **`aacCmosGateCircuitry` — Required · Real-hardware reading.** Learn why CMOS inputs must not float and how pull-up/pull-down resistors establish a default state.
  - Verification note: Current AAC CMOS tutorial inspected: floating-input warning and input behavior.
- **`tiDebounceSwitch` — Required · Manufacturer video.** See why a mechanical switch creates multiple transitions and how RC + Schmitt-trigger debounce changes the waveform.
  - Verification note: TI video transcript inspected: bounce, repeated triggers, RC shaping, slow edges and Schmitt hysteresis.
- **`saleaeDigitalSignals` — Required · Logic-analyzer application.** Capture a real or simulated digital transition/bounce event with deliberate threshold/sample-rate/channel settings.
  - Verification note: Existing Saleae STM32 digital-signals tutorial retained for instrument application.

### Week 12 — Soldering, ESD, defect recognition, rework and traceable repair

- **`nasaESD` — Required · ESD instruction/reference.** Learn protected-work-area, packaging, grounding and personnel-control concepts before physical semiconductor work.
  - Verification note: NASA ESD material retained as authoritative workmanship/safety reference.
- **`digiKeySoldering` — Required · Soldering demonstration.** Watch heat-both-surfaces, solder flow/wetting and undisturbed cooling before the workmanship task.
  - Verification note: DigiKey video page inspected; explicitly demonstrates proper heating, flow and wetting.
- **`adafruitSolderProblems` — Required · Defect recognition.** Practice accept/rework/escalate decisions from visible joint defects.
  - Verification note: Existing defect gallery retained for practical recognition.
- **`chemtronicsSolderWick` — Required · Rework demonstration.** Learn controlled solder removal with braid before attempting low-risk rework.
  - Verification note: Manufacturer/DigiKey video plus Chemtronics instructions cross-checked for wick selection, heat transfer and pad-damage control.
- **`nasaHarness` — Path-specific · Workmanship reference.** Use when the task includes wire, terminal, crimp, cable or harness inspection.
  - Verification note: Retained for workmanship criteria only.
- **`githubSkills` — Required · Version-control instruction.** Complete the repository/status/add/commit/history workflow if Git is new.
  - Verification note: Existing GitHub Skills source retained for the software/documentation change trail.

### Week 13 — Diagram types, schematics, datasheets and system-level troubleshooting

- **`aacSystemNotations` — Required · Diagram-type teaching.** Learn the purpose and differences among block, schematic, wiring and other system representations.
  - Verification note: College transcript covers system/wiring diagram notation and connectivity.
- **`digiKeySchematics` — Required · Schematic-reading video.** Reinforce symbols, net labels, connectivity and reference designators.
  - Verification note: Existing DigiKey schematic instruction retained.
- **`digiKeyDatasheet` — Required · Datasheet-reading video.** Learn how to extract pinout, operating conditions, absolute maximums, truth/timing tables and characteristic graphs.
  - Verification note: Current DigiKey tutorial explicitly teaches charts, tables and specs.
- **`nscTroubleshooting` — Required · System troubleshooting lecture.** Use block-diagram thinking, signal tracing, substitution and divide-and-conquer to choose test points.
  - Verification note: Existing college troubleshooting lecture retained.
- **`tiBoardTroubleshooting` — Required · Industry root-cause example.** See disciplined board checks and A-B-A substitution used in practice.
  - Verification note: Existing TI board-level troubleshooting video retained.

### Week 14 — Computer architecture, C fundamentals, memory and pointers

- **`mitAssemblyArchitecture` — Required · Computer-architecture lecture.** Follow the path from source code to compiler output to machine code to hardware execution.
  - Verification note: MIT OCW lecture description explicitly traces source→compilation→machine code→hardware interpretation→execution.
- **`cs50Week1C2026` — Required · C foundation.** Learn C syntax, types, control flow, functions, compilation and command-line workflow.
  - Verification note: Existing Harvard 2026 Week 1 resource retained.
- **`cs50C` — Required · Memory/pointer follow-on.** Learn addresses, pointers, arrays, stack/heap and common memory failures.
  - Verification note: Current CS50 Week 4 memory material includes pointers, stack, heap and buffer overflow.
- **`beejC` — Required · Language reference.** Use exact chapters for types, functions, arrays, structs, enums, pointers and language rules while completing the C task.
  - Verification note: Existing Beej C reference retained.

### Week 15 — Embedded C, registers, volatile/bitwise work, GPIO, state and timing

- **`armEmbedded` — Required · Embedded C/machine-level course.** Complete the mapped lessons on volatile, bitwise operators, pointers, stack/modules, fixed-width integers and CMSIS.
  - Verification note: Arm course map includes volatile, bitwise, pointers, stack, stdint, structures/CMSIS and debugger views.
- **`aacSequentialLogic` — Required · State foundation.** Reuse the sequential-logic lesson to connect stored state/clock events to finite-state firmware reasoning.
  - Verification note: Previously verified sequential-state resource retained.
- **`stCubeIdeBasics` — Required · GPIO/EXTI/timer application.** Complete the GPIO, EXTI and timer/PWM examples so polling, event-driven input and timed output have concrete MCU implementations.
  - Verification note: Current ST MOOC outline includes GPIO HAL/LL, EXTI, timer PWM, ADC/DMA/timer and USART examples.
- **`saleaeDigitalSignals` — Required · Timing evidence.** Measure GPIO edges/pulses and compare observed timing with firmware intent.
  - Verification note: Existing Saleae digital-signals tutorial retained.

### Week 16 — STM32 project creation, startup, GPIO/peripherals and SWD/debug workflow

- **`stCubeIdeBasics` — Required · STM32 bring-up course.** Use the ST MOOC for project creation, board setup, GPIO, EXTI, timers, ADC/DMA and USART in STM32CubeIDE.
  - Verification note: Current ST MOOC outline explicitly includes these hands-on examples.
- **`stCubeIdeDebug` — Required · Debug/SWD instruction.** Learn breakpoints, CPU registers, variables, peripheral registers, memory, disassembly and fault-analysis views.
  - Verification note: Current ST debug documentation lists breakpoints, CPU registers, peripheral/memory/disassembly views and Fault Analyzer.
- **`armEmbedded` — Required · Cortex-M architecture reinforcement.** Connect C statements to Cortex-M registers, memory and disassembly while stepping through the program.
  - Verification note: Existing Arm embedded course retained.
- **`stBootStartup` — Required · Boot/startup instruction.** Learn what must happen from reset/boot through startup before application code can run.
  - Verification note: Previously verified ST boot/startup MOOC retained.

### Week 17 — UART electrical/framing behavior, capture/decoding and Python host access

- **`saleaeLearnAsync` — Required · UART/async serial teaching.** Learn start/data/parity/stop framing, idle level, bit rate, bit order and framing/parity error meaning.
  - Verification note: Current Saleae teaching guide explains frame structure, stop bits, framing errors, bit order and analyzer settings.
- **`saleaeStm32Uart` — Required · STM32 UART application.** Follow the STM32 walkthrough from firmware settings to real TX/RX waveforms and decoded bytes.
  - Verification note: Existing Saleae STM32 UART tutorial retained.
- **`saleaeAsyncSerial` — Required · Analyzer configuration.** Configure bit rate, frame bits, parity, stop bits, inversion and channels correctly.
  - Verification note: Current Saleae analyzer guide explicitly documents these settings.
- **`pyserial` — Required · Host-side serial instruction/reference.** Implement explicit port configuration, bounded reads/timeouts, byte handling and deterministic close/cleanup.
  - Verification note: Official pySerial documentation retained.

### Week 18 — I2C/SPI electrical/protocol behavior, analyzer evidence and device datasheets

- **`saleaeLearnI2c` — Required · I2C teaching guide.** Learn SDA/SCL, addressing, START/STOP/repeated START, ACK/NACK, open-drain behavior and clock stretching.
  - Verification note: Current Saleae guide teaches address/data/ACK, START/STOP and clock-stretching behavior.
- **`saleaeStm32I2c` — Required · STM32 I2C sensor application.** Follow wiring, firmware, capture, decode and a changing sensor value end to end.
  - Verification note: Existing Saleae STM32 I2C tutorial retained.
- **`saleaeLearnSpi` — Required · SPI teaching guide.** Learn SCLK, MOSI, MISO, chip select, bit order and CPOL/CPHA.
  - Verification note: Current Saleae SPI guide explicitly teaches synchronous serial, select, MOSI/MISO, CPOL/CPHA and bit order.
- **`saleaeStm32Spi` — Required · STM32 SPI application.** Follow the STM32 example from firmware configuration through waveform capture/decode.
  - Verification note: Existing Saleae STM32 SPI tutorial retained.
- **`saleaeI2cGuide` — Required · I2C analyzer reference.** Configure channels/address interpretation and diagnose decode issues/noise around SCL edges.
  - Verification note: Current analyzer guide documents address, direction, data, ACK/NAK, START/STOP and common noise issues.
- **`saleaeSpiGuide` — Required · SPI analyzer reference.** Configure clock/data/select, bit order, word size, polarity and phase.
  - Verification note: Current analyzer guide documents these settings and alignment failures.
- **`digiKeyDatasheet` — Required · Sensor/peripheral datasheet workflow.** Use the datasheet to determine pinout, bus voltage, address/mode, register map, timing and raw-code conversion.
  - Verification note: Current DigiKey datasheet instruction retained.

### Week 19 — Audio paths, copper/coax/premises cabling, fiber optics and fiber testing

- **`tiAudioAmpBasics` — Required · Audio teaching video.** Build the audio source→amplifier→load model and learn core amplifier classes/specification language.
  - Verification note: TI video inspected: amplifier purpose, transistor/amplifier fundamentals, specifications and Class A/B/AB/D.
- **`tiAudioFundamentals` — Required · Audio manufacturer series.** Use the relevant fundamentals lessons for amplifier specifications, signal path, converter/interface context and measurement vocabulary.
  - Verification note: Current TI Precision Labs audio series inspected; it provides a six-video fundamentals sequence.
- **`foaPremisesGuide` — Required · Copper/coax/media sequence.** Use the FOA premises-cabling lectures on cable types, UTP installation/termination/testing and coax before the physical cable task.
  - Verification note: FOA current reference links the coherent premises-cabling lecture series, hands-on UTP termination/testing videos and quizzes.
- **`foaMediaLectureIndex` — Required · Fiber teaching sequence.** Complete the mapped FOA lectures: 1 communications, 2 safety, 3 fiber, 4 cables, 5/7 splices/connectors, 12 testing overview, 14 optical power and 16 insertion loss.
  - Verification note: FOA current lecture index inspected; it enumerates the full lecture sequence and hands-on demonstrations.
- **`foaSplicesConnectors` — Required · Fiber termination video.** Learn where splices/connectors are used and how termination becomes part of link loss/reliability.
  - Verification note: FOA Lecture 5 description inspected: splices vs connectors, termination and applications.
- **`foaTestingOverview` — Required · Fiber test video.** Learn what must be tested at component/link level and where visual, power/loss and other test methods fit.
  - Verification note: FOA Lecture 12 description inspected: components/locations of test plus sequence into visual, insertion loss, OTDR and advanced testing.

### Week 20 — RF/microwave basics, transmission lines, modulation, spectrum analysis and safety

- **`rsRfDefinition` — Required · RF teaching video.** Establish RF/microwave frequency ranges, wavelength and why physical dimensions matter.
  - Verification note: Rohde & Schwarz video page inspected: RF/microwave definition, bands, wavelengths and applications.
- **`aacTransmissionLine` — Required · RF engineering tutorial.** Learn when a wire/trace must be treated as a transmission line and why characteristic impedance/matching/reflections matter.
  - Verification note: Current AAC RF textbook tutorial inspected: electrical length, coax/PCB lines, characteristic impedance, matching/reflections.
- **`nptelComms` — Required · Communications lecture sequence.** Use the introductory modulation/transmitter/receiver lectures for AM/FM/PM and communication-system blocks.
  - Verification note: Existing university course retained because it provides coherent communications theory.
- **`rsSpectrumBasics` — Required · Spectrum-analyzer video.** Learn center/span, reference level, RBW and VBW and the measurement artifacts caused by wrong settings.
  - Verification note: Current R&S lesson inspected: exactly these four controls, overload/compression and RBW/VBW tradeoffs.
- **`rsOccupiedBandwidth` — Required · Applied spectrum video.** Use occupied bandwidth as a repeatable example of turning a spectrum trace into a defined measurement.
  - Verification note: Current R&S lesson inspected: 99% power method, significance and analyzer configuration.
- **`fccRF` — Required · Safety reference.** Use the official RF exposure material to recognize that exposure limits depend on frequency, power, distance and standard.
  - Verification note: Existing FCC official reference retained as the safety authority.

### Week 21 — Retrieval practice, spacing/interleaving and cumulative CETa integration

- **`ucsdStudyVideos` — Required · Learning-method videos.** Watch the retrieval, spaced-practice and interleaving videos before the cumulative CETa integration set.
  - Verification note: UCSD Psychology currently hosts dedicated how-to videos for all three evidence-based methods.
- **`ucsdRetrieval` — Required · Repair method.** Use the retrieval workflow: close materials, recall/solve, check, identify what was missing or wrong, then repeat on a fresh prompt.
  - Verification note: UCSD guide cross-checks retrieval practice against a large research literature and gives an explicit recall→check→repeat procedure.
- **`etaCompetencies` — Required · Scope reference.** Audit mixed practice against exact current CETa competency rows.
  - Verification note: Official ETA competency document remains the scope authority.
- **`etaFormula` — Required · Post-attempt reference.** Check symbols/relationships only after no-notes recall and solve a changed example afterward.
  - Verification note: Official ETA formula sheet retained.
- **`privateGuide` — Required · Private practice.** Use assigned chapter/unit review closed-book first, then consult explanations only for targeted correction.
  - Verification note: Existing authorized private study-guide assignment retained.

### Week 22 — Requirements definition, traceability, verification and validation

- **`mitRequirements` — Required · Systems-engineering video lecture.** Learn how to state what the system must do before design/build decisions begin.
  - Verification note: MIT OCW lecture with transcript inspected; its stated focus is specifying exactly what is expected before design begins.
- **`nasaRequirementAppendix` — Required · Authoritative requirement reference.** Apply NASA’s requirement-writing guidance to the one-person project at appropriate scale.
  - Verification note: Current NASA handbook appendix inspected for requirement-writing rules.
- **`mitVerification` — Required · Verification/validation lecture.** Learn the difference among requirement, verification method/evidence and broader validation.
  - Verification note: MIT OCW lecture with transcript inspected: verification, validation, testing, technical risk and readiness concepts.
- **`nasaSystems` — Required · Traceability/reference.** Use requirements flowdown, interfaces and bidirectional traceability as the professional cross-check.
  - Verification note: Existing NASA Systems Engineering Handbook retained as authority.
- **`onetTech` — Reference · Career transfer.** Check that selected project evidence maps to real technician tasks such as build, test, records, repair and integration.
  - Verification note: Existing O*NET occupational reference retained.

### Week 23 — Project baseline, configuration control, BOM/readiness and first-power planning

- **`githubSkills` — Required · Reproducible baseline.** Demonstrate status, diff, commit and history while keeping secrets/credentials out of the repository.
  - Verification note: Existing GitHub Skills tutorial retained.
- **`mitRequirements` — Required · Baseline check.** Revisit the requirement lecture only to verify that the frozen project scope is observable and testable.
  - Verification note: Reused as a targeted pre-build requirement check.
- **`nasaSystems` — Required · Configuration/verification reference.** Use configuration control and verification concepts at small-project scale.
  - Verification note: Existing NASA handbook retained as professional reference.
- **`keysightBenchPowerCourse` — Required · Pre-bring-up refresher.** Review current limiting, CV/CC and readback before writing the first-power test case.
  - Verification note: Keysight manufacturer course already verified in Week 3.

### Week 24 — Safe first power, current limiting, board-level checks, startup and measurement

- **`keysightBenchCvCc` — Required · Safe first-power refresher.** Use CV/CC behavior to understand why current limiting turns a wiring/design mistake into an observable protected condition.
  - Verification note: Keysight lesson already verified for CV/CC operation.
- **`tiBoardTroubleshooting` — Required · Bring-up/troubleshooting video.** Use TI’s board-level process to move from symptom to root-cause checks rather than changing multiple things at once.
  - Verification note: TI 14:52 manufacturer video inspected: structured board checks, A-B-A swap and board-level failure causes.
- **`stBootStartup` — Required · MCU startup MOOC.** Learn the STM32 boot/startup mechanisms that must succeed after rails are valid.
  - Verification note: Current ST MOOC inspected: startup/boot mechanisms and downloadable training material in short videos.
- **`flukeMultimeterGuide` — Required · Measurement refresher.** Verify unpowered resistance/continuity and powered rails using the correct meter function/jacks.
  - Verification note: Current Fluke guide already verified.
- **`nasaESD` — Physical route · ESD control.** Apply protected-work-area handling before semiconductor work.
  - Verification note: Existing NASA reference retained.

### Week 25 — Sensor/interface vertical slice, ADC/I2C/SPI integration and galvanic isolation

- **`tiGalvanicIsolation` — Required · Isolation fundamentals.** Learn what galvanic isolation is, when it is needed and how capacitive/inductive/optical methods break the DC reference path.
  - Verification note: TI video explicitly covers what isolation is, why it is used, methods and when a system needs it.
- **`tiIsolationSeries` — Required · Isolation curriculum.** Complete the mapped lessons on digital isolators, isolated inputs, creepage/clearance, CMTI, isolated power and isolated communications as relevant to the vertical slice.
  - Verification note: Current TI Precision Labs series contains 13 sequenced isolation lessons including galvanic isolation, digital isolators, standards, CMTI, isolated power and communication interfaces.
- **`stMooc` — Required · MCU peripheral/HAL path.** Use the exact MCU peripheral/HAL section for the selected interface and confirm generated configuration against device documentation.
  - Verification note: Existing ST source retained.
- **`saleaeStm32I2c` — Required for I2C path.** Use the complete STM32 sensor example for wiring, pull-ups, addressing, register traffic and raw capture.
  - Verification note: Existing Saleae STM32 I2C tutorial retained.
- **`saleaeStm32Spi` — Required for SPI path.** Use the complete STM32 SPI example for SCLK/MOSI/MISO/select, mode and captured transfer evidence.
  - Verification note: Existing Saleae STM32 SPI tutorial retained.
- **`tiADC` — Required for analog path.** Use the TI ADC instruction to connect sampling, reference voltage, resolution, error/noise and raw code to engineering units.
  - Verification note: Existing TI ADC source retained.

### Week 26 — Firmware layers, state/memory, watchdogs, diagnostics and crash debugging

- **`armEmbedded` — Required · Embedded C/machine-level course.** Use the mapped modules on bitwise register work, volatile, functions/stack, modules, structures/CMSIS and machine-level execution.
  - Verification note: Arm-hosted course inspected: focused hands-on Cortex-M lessons explicitly teaching machine-level effects and common pitfalls.
- **`stOnlineTrainingCurrent` — Required · STM32 peripheral/system training.** Use the exact current STM32-family modules for system, memory, peripherals, watchdogs/timers and firmware drivers used by the project.
  - Verification note: ST current training page inspected: >50 modules per series across system/memory/communication/peripherals/watchdogs/firmware.
- **`stWatchdogGuide` — Required · Timeout/recovery instruction.** Learn IWDG vs WWDG behavior and how timeout windows turn missing execution into an observable reset/recovery event.
  - Verification note: Current ST wiki inspected: IWDG/WWDG definitions, clocks, configurable timeouts, refresh behavior and reset action.
- **`armDebuggingAdventures` — Required · Diagnostic practice.** Learn practical embedded debugging techniques: logs, signal probing, GDB/Python, trace and remote debugging.
  - Verification note: Current Arm page inspected; explicitly lists Cortex-M hardware/firmware troubleshooting techniques and useful/not-useful logs.
- **`tiCrashDebugging` — Required · Failure-diagnosis demonstration.** See run-time instrumentation used to diagnose stack/buffer overflows, memory leaks and CPU exceptions with stack traceback.
  - Verification note: TI 35:59 manufacturer video inspected; contains multiple demonstrations and the listed crash-diagnosis methods.
- **`nasaSystems` — Reference · Traceability.** Keep driver/application/diagnostic/recovery changes linked to the requirements they protect.
  - Verification note: Existing NASA reference retained.

### Week 27 — Python hardware-test automation, serial robustness, fixtures, logging and verdict semantics

- **`pyserial` — Required · API teaching/reference.** Implement serial open/configuration, byte I/O, buffering and timeout behavior from the official API.
  - Verification note: Official pySerial docs inspected: timeout modes, reads/writes, context-manager cleanup and partial-read behavior.
- **`pytest` — Required · Test framework instruction.** Use fixtures/teardown and parametrization to make hardware tests repeatable without leaking state between cases.
  - Verification note: Official pytest docs cross-checked for fixtures/yield teardown and parametrization.
- **`pythonDocs` — Required · Language/library reference.** Use the standard library for structured CSV/JSON/time/error handling where appropriate.
  - Verification note: Official Python documentation retained.
- **`matplotlib` — Required when plotting · Evidence visualization.** Produce a plot only after the raw log and requirement limits exist.
  - Verification note: Official Matplotlib quick-start retained.
- **`mitVerification` — Required · Verdict semantics.** Revisit verification logic so each automated test proves an explicit requirement under stated conditions.
  - Verification note: MIT V&V lecture reused as the engineering-test framework.

### Week 28 — Controlled fault injection, root cause, repeatability and corrective-action evidence

- **`tiBoardTroubleshooting` — Required · Root-cause teaching video.** Use TI’s structured board troubleshooting and A-B-A reasoning as the practical root-cause model.
  - Verification note: TI manufacturer video inspected: systematic checks, A-B-A swap and board-level causes.
- **`saleae` — Path-specific · Digital fault evidence.** Use protocol/raw digital capture when the injected fault affects timing or interface traffic.
  - Verification note: Existing Saleae official support retained.
- **`pytest` — Path-specific · Reproducible fault cases.** Parameterize controlled faults/recovery cases and report explicit error states.
  - Verification note: Official pytest behavior already cross-checked.
- **`nasaSystems` — Required · Report/evidence authority.** Use NASA verification/anomaly/corrective-action concepts to structure the report.
  - Verification note: NASA guidance cross-checked for pass/fail evidence, anomalies, root cause, corrective action and verification.

### Week 29 — Workmanship/instrumentation evidence dossier and role-proof integration

- **`adafruitSolderProblems` — Required · Workmanship refresher.** Use the defect/rework gallery before claiming solder/rework evidence.
  - Verification note: Existing current override resource retained.
- **`chemtronicsSolderWick` — Required when rework is shown · Rework refresher.** Refresh controlled solder removal before a before/after rework demonstration.
  - Verification note: Manufacturer/DigiKey rework instructions cross-checked.
- **`nasaHarness` — Physical harness route · Workmanship authority.** Apply objective wire/terminal/harness acceptance observations.
  - Verification note: Existing authoritative reference retained.
- **`nasaESD` — Physical route · ESD control.** Reapply protected-work-area and handling controls.
  - Verification note: Existing authoritative reference retained.
- **`flukeMultimeterGuide` — Required for DMM evidence.** Refresh the exact meter function/jack/energized-state procedure used in the dossier.
  - Verification note: Verified manufacturer guide reused.
- **`tekScopeSetup` — Required for scope evidence.** Refresh grounding, attenuation/compensation, volts/div, time/div and trigger setup.
  - Verification note: Verified manufacturer primer reused.
- **`saleaeDigitalSignals` — Required for logic-analyzer evidence.** Refresh channel/threshold/sample/trigger setup and raw-transition interpretation.
  - Verification note: Verified Saleae tutorial reused.
- **`onetTech` — Reference · Role relevance.** Map only actually demonstrated artifacts to current technician tasks.
  - Verification note: Existing government source retained.

### Week 30 — Evidence-backed resume/project bullets and technical/behavioral interview defense

- **`gatechResumeGuide` — Required · Engineering/project resume instruction.** Use the Georgia Tech project/resume guidance to select only projects that add relevant evidence and describe role, technical skills, process and outcome.
  - Verification note: Current Georgia Tech Career Center guide inspected; it explicitly addresses projects for early-career/career-changing candidates and how to construct project bullets.
- **`umichResumeBullets` — Required · Resume bullet instruction.** Convert project evidence into concise Action + What + How/Why/Impact bullets.
  - Verification note: Current University of Michigan resource includes instructional video and the bullet-plus model.
- **`pennStarVideo` — Required · Interview teaching video.** Use STAR to turn a real project/troubleshooting episode into a concise behavioral explanation.
  - Verification note: Penn Career Services video page includes transcript and explicit STAR instruction.
- **`umichInterviewing` — Required · Technical-defense practice.** Prepare field-specific technical questions plus behavioral stories; practice without memorizing a script.
  - Verification note: Current Michigan Career Center resource identifies technical interviews as field-knowledge/problem-solving assessments and gives rehearsal guidance.
- **`etaExam` — Required · Credential wording authority.** Verify exact credential/exam status before placing CETa language on resume/portfolio.
  - Verification note: Existing ETA official source retained.
- **`onetTech` — Required · Duty mapping.** Use current occupational tasks to decide which evidence belongs in the application package.
  - Verification note: Existing O*NET government source retained.

### Week 31 — Application tracking, feedback loops and continuing technical retention

- **`umichJobSearch` — Required · Job-search system instruction.** Build a focused role filter, identify target keywords/organizations, track contacts/applications/follow-ups and keep materials ready to tailor.
  - Verification note: Current Michigan Career Center guide inspected: goal-first search, organized tracking, networking, tailoring, application follow-up and skill-building.
- **`pennSearchWorkshop` — Required · Search/interview workshop.** Use the university workshop to integrate resume, interview and search strategy into one repeatable application cycle.
  - Verification note: Penn Career Services workshop page inspected; it is an instructional session on resume, interview and search strategy.
- **`ucsdStudyVideos` — Required · Continuing mastery instruction.** Use spaced retrieval/interleaving to maintain CETa/electronics knowledge after the course instead of restarting from Week 1.
  - Verification note: UCSD current videos explicitly teach spaced, retrieval and interleaved practice.
- **`etaCompetencies` — Required · Revalidation scope.** Use the current official competency rows for periodic retention audits and future standard changes.
  - Verification note: Existing official ETA source retained.
- **`etaExam` — Required · Current policy/credential authority.** Recheck official exam/credential information before scheduling or making public claims.
  - Verification note: Existing official ETA source retained.
- **`onetTech` — Reference · Role filter.** Use occupational duties as a broad anchor when filtering bridge roles.
  - Verification note: Existing government source retained.

## Scope protection

v16.3.5 changes the external Teaching Media/resource layer and the version/reference documentation needed to identify that layer. It does not alter the 62 primary lessons, 24 labs, assessment bank or question identities, mastery policy, study-guide assignments, calendar dates/event IDs/UIDs, module sequence, saved-progress identities, Cloud Sync protocol 2, Student Sync Key behavior, or the 50/50 CETa/Career architecture.

## Runtime files of record

- `curriculum-data.js` — accepted v16.3 lesson/module data.
- `teaching-media-overrides.js` — earlier v16.3.3/v16.3.4 targeted media overlay retained for compatibility.
- `teaching-media-self-reliance.js` — v16.3.5 effective self-reliance Teaching Media overlay loaded after the earlier override.
- `learn.html` / `learn.js` — Classroom renderer and stage flow.
- `build-info.json` — current deployment/version marker.
- `release-notes.js` plus `release-notes-current.js` — historical release record plus the current v16.3.5 entry.
- `service-worker.js` — offline/cache behavior.

## Final acceptance

The production overlay explicitly updates all 31 weeks, and the generated inventory above confirms 31/31 module coverage at the data layer. This verification record describes the intended self-reliant explanation pathway; successful learning still depends on completing the course’s required practice, labs, troubleshooting, assessments, and retention work.
