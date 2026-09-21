(() => {
  const C = window.ALFRED_CURRICULUM;
  if (!C?.modules?.length) return;

  // v16.3.45 — Curated video placement map.
  // Every row below is an explicit instructional-design decision. No runtime
  // keyword matching or automatic topic insertion is used.
  const P = [];
  const add = (week, source, lesson, segment, role='reinforcement', display='compact') =>
    P.push({week, source, lesson, segment, role, display});

  // Week 01 — foundational quantities first; bench videos only after the model exists.
  add(1,'mathScienceVoltageCurrentResistance',0,'concept-1','core','primary');
  add(1,'afrotechmodsWhatIsAmp',0,'concept-2','reinforcement');
  add(1,'afrotechmodsWhatIsVoltage',0,'concept-3','reinforcement');
  add(1,'aacCurrentPath',0,'concept-4','core','primary');
  add(1,'afrotechmodsResistanceOhmsLaw',0,'concept-5','demonstration','primary');
  add(1,'aacTechnicalNotation',0,'concept-6','core','primary');
  add(1,'afrotechmodsPowerWatts',0,'concept-10','demonstration','primary');
  add(1,'aacElectricalA',0,'concept-11','review');
  add(1,'aacElectricalB',0,'concept-10','reinforcement');
  add(1,'organicChemTutorBasicCircuits',0,'worked','reinforcement','primary');
  add(1,'afrotechmodsMultimeter',1,'career-w01-voltage-resistance-and-current-modes-are-different-circuits','demonstration','primary');
  add(1,'aacGroundReference',1,'career-w01-pre-power-inspection-creates-the-first-known-good-state','core');
  add(1,'keysightBenchPowerCourse',1,'career-w01-current-limiting-is-a-protective-boundary-and-a-diagnostic-clue','lab-prep','primary');

  // Week 02 — topology/conservation before troubleshooting applications.
  add(2,'aacSeries1',0,'concept-1','core','primary');
  add(2,'aacParallel',0,'concept-1','reinforcement');
  add(2,'aacKclKvl',0,'concept-2','core','primary');
  add(2,'aacSeriesDivider',0,'concept-3','demonstration','primary');
  add(2,'aacMagnetismElectromagnetism',0,'concept-5','reinforcement');
  add(2,'tiPllFundamentals',0,'concept-10','go-deeper');
  add(2,'mitPiezoLab',0,'concept-13','demonstration','primary');
  add(2,'aacTroubleshootSeriesParallel',1,'career-w02-fault-patterns-have-structure','troubleshooting','primary');

  // Week 03 — instrument video immediately after the corresponding instrument model.
  add(3,'keysightBenchPowerCourse',0,'concept-2','demonstration','primary');
  add(3,'tekScopeWebinar',0,'concept-3','demonstration','primary');
  add(3,'digiKeyLcrMeter',0,'concept-5','demonstration');
  add(3,'rsSpectrumBasics',0,'concept-7','demonstration');
  add(3,'keysightBenchCvCc',1,'career-w03-use-the-dmm-and-bench-supply-for-slow-or-static-evidence','lab-prep','primary');

  // Week 04 — waveform/storage/time-response flow. Binary/Boolean videos stay in the library here;
  // their stronger instructional home is Week 11, avoiding a distracting topic break.
  add(4,'aacSinusoidalSignals',0,'concept-1','core','primary');
  add(4,'aacCapIndModern',0,'concept-2','core','primary');
  add(4,'aacRcRl',0,'concept-3','reinforcement');
  add(4,'khanEquationIsolation',0,'concept-4','reinforcement');
  add(4,'aacSystemNotationsGraphs',0,'concept-6','core','primary');
  add(4,'aacDecibels',0,'concept-6','reinforcement');
  add(4,'aacRcTime1',0,'concept-7','demonstration','primary');
  add(4,'aacRcTime2',0,'concept-9','demonstration','primary');
  add(4,'adiLtspice',1,'career-w04-time-domain-and-frequency-domain-evidence-describe-the-same-network','lab-prep','primary');

  // Week 05 — fault videos live inside the troubleshooting decision sequence, not in CETa recall prose.
  add(5,'aacTroubleshootOpenShort',1,'career-w05-start-with-an-observable-failure-statement','troubleshooting','primary');
  add(5,'aacTroubleshootSeries',1,'career-w05-let-each-measurement-shrink-the-fault-space','troubleshooting');
  add(5,'aacTroubleshootParallel',1,'career-w05-let-each-measurement-shrink-the-fault-space','troubleshooting');
  add(5,'aacTroubleshootSeriesParallel',1,'career-w05-competing-hypotheses-make-measurements-useful','troubleshooting','primary');
  add(5,'aacTroubleshootingStrategies',1,'career-w05-root-cause-requires-verification-after-the-fix','troubleshooting','primary');

  // Week 06 — reactance model, transformer relation, then measured/simulated sweep.
  add(6,'aacRcRl',0,'concept-1','review','primary');
  add(6,'aacTransformerPart1',0,'concept-3','core','primary');
  add(6,'adiLtspice',1,'career-w06-characterization-starts-with-a-model-and-a-sweep-plan','lab-prep','primary');

  // Week 07 — component-family media sits beside the exact family; dense families collapse automatically.
  add(7,'aacPassiveComponents',0,'concept-1','core','primary');
  add(7,'aacElectronicComponents',0,'concept-3','reinforcement');
  add(7,'aacComponentResistors',0,'concept-4','demonstration','primary');
  add(7,'aacCapacitorsPart1',0,'concept-5','core','primary');
  add(7,'aacCapacitorsPart2',0,'concept-5','reinforcement');
  add(7,'aacInductorsPart2',0,'concept-6','core','primary');
  add(7,'aacBjtIntro',0,'concept-7','core','primary');
  add(7,'aacMosfetLecture',0,'concept-7','reinforcement');
  add(7,'aacJfet',0,'concept-7','reinforcement');
  add(7,'aacZener',0,'concept-8','reinforcement');
  add(7,'aacIntroICs',0,'concept-9','core','primary');
  add(7,'tiTransformers2026',0,'concept-11','demonstration','primary');
  add(7,'tiMotorTypes',0,'concept-12','demonstration','primary');
  add(7,'digiKeyDatasheet',1,'career-w07-read-the-datasheet-in-a-risk-first-order','core','primary');
  add(7,'tiInductiveLoads',1,'career-w07-a-relay-coil-is-an-inductive-load','demonstration','primary');

  // Week 08 — device physics first, switching/troubleshooting second.
  add(8,'aacDiodeCharacteristics',0,'concept-1','core','primary');
  add(8,'aacBjtIntro',0,'concept-2','core','primary');
  add(8,'aacMosfetLecture',0,'concept-3','core','primary');
  add(8,'aacSemiconductorBasics',0,'concept-4','reinforcement');
  add(8,'aacJfet',0,'concept-5','reinforcement');
  add(8,'aacZener',0,'concept-6','reinforcement');
  add(8,'digiKeyDatasheet',1,'career-w08-start-from-the-load-and-work-backward','core');
  add(8,'aacTroubleshootSemiconductors',1,'career-w08-three-node-measurements-usually-reveal-the-stage-that-failed','troubleshooting','primary');
  add(8,'tiMosfetBasics2026',1,'career-w08-gate-drive-and-switching-loss-are-real-design-constraints','demonstration','primary');

  // Week 09 — power chain, regulation, battery, then rail-by-rail diagnosis.
  add(9,'aacPowerSupplies',0,'concept-1','core','primary');
  add(9,'aacPowerSuppliesApplications',0,'concept-2','demonstration','primary');
  add(9,'aacPowerIcs',0,'concept-3','core','primary');
  add(9,'tiBatteryTraining',0,'concept-5','go-deeper','primary');
  add(9,'tiBoardTroubleshooting',1,'career-w09-use-rail-behavior-to-distinguish-source-regulator-and-load-faults','troubleshooting','primary');

  // Week 10 — put configuration videos next to the device/configuration they explain.
  add(10,'aacDecibels',0,'concept-1','core','primary');
  add(10,'aacAmpConfigs',0,'concept-4','core','primary');
  add(10,'tiAudioAmpBasics',0,'concept-4','reinforcement');
  add(10,'aacTransistorBiasing',0,'concept-5','core','primary');
  add(10,'aacAmplifierConfigs',0,'concept-5','reinforcement');
  add(10,'aacJfetAmplifiers',0,'concept-5','reinforcement');
  add(10,'aacMosfetAmplifiers',0,'concept-5','reinforcement');
  add(10,'aacOpAmpBasicConfig',0,'concept-6','core','primary');
  add(10,'tiOpAmpOutputStage',0,'concept-7','demonstration','primary');
  add(10,'tiPrecisionOpAmps',0,'concept-10','go-deeper','primary');
  add(10,'tiAudioFundamentals',1,'career-w10-report-gain-across-frequency-and-load','reinforcement','primary');

  // Week 11 — definitive home for binary/Boolean/sequential media; debounce moves to applied Career flow.
  add(11,'aacBinaryConversion',0,'concept-1','core','primary');
  add(11,'aacBooleanPostulates',0,'concept-2','core','primary');
  add(11,'aacCombinationalLogic',0,'concept-4','core','primary');
  add(11,'aacSequentialLogic',0,'concept-3','core','primary');
  add(11,'aacCounters',0,'concept-5','reinforcement');
  add(11,'aacMicroprocessorBusNetworks',0,'concept-5','reinforcement');
  add(11,'aacComputerHardware',0,'concept-6','reinforcement');
  add(11,'tiDebounceSwitch',1,'career-w11-debounce-is-a-time-domain-problem','demonstration','primary');

  // Week 12 — technique video immediately after Alfred explains the workmanship boundary.
  add(12,'digiKeySoldering',0,'concept-2','demonstration','primary');
  add(12,'paceBgaTutorial',0,'concept-6','go-deeper','primary');
  add(12,'digiKeyBrokenTrace',0,'concept-9','demonstration','primary');

  // Week 13 — representation/datasheet instruction first; troubleshooting examples after fault model exists.
  add(13,'aacSystemNotations',0,'concept-1','core','primary');
  add(13,'digiKeySchematics',0,'concept-2','demonstration','primary');
  add(13,'digiKeyDatasheet',0,'concept-3','demonstration','primary');
  add(13,'nscTroubleshooting',1,'career-w13-build-a-fault-model-before-probing','troubleshooting','primary');
  add(13,'tiBoardTroubleshooting',1,'career-w13-choose-a-high-information-test','troubleshooting','primary');

  // Week 14 — architecture/build path before C details; pointer video only after memory is introduced.
  add(14,'mitAssemblyArchitecture',0,'concept-1','core','primary');
  add(14,'aacComputerHardware',0,'concept-4','reinforcement');
  add(14,'automationDirectPlcScan',0,'concept-5','demonstration','primary');
  add(14,'aacMicroprocessorBusNetworks',0,'concept-6','reinforcement');
  add(14,'cs50Week1C2026',1,'career-w14-a-c-program-is-source-text-that-must-be-translated-before-it-runs','core','primary');
  add(14,'cs50C',1,'career-w14-addresses-and-pointers-make-memory-locations-explicit','reinforcement','primary');

  // Week 15 — software/logic/state media placed after the matching architecture concept.
  add(15,'aacSequentialLogic',0,'concept-3','review','primary');
  add(15,'armEmbedded',1,'career-w15-map-c-onto-a-microcontroller-before-adding-concurrency','core','primary');
  add(15,'stCubeIdeBasics',1,'career-w15-career-integration-embedded-c-mcu-architecture-and-nonblocking-design','lab-prep','primary');

  // Week 16 — bring-up is staged: architecture -> project -> boot -> debugger proof.
  add(16,'armEmbedded',0,'concept-4','review','primary');
  add(16,'stBootStartup',0,'concept-5','core','primary');
  add(16,'stCubeIdeBasics',1,'career-w16-a-project-contains-source-configuration-and-a-build-recipe','lab-prep','primary');

  // Week 18 — use datasheet/level videos only after the bus model exists; USB belongs with interface breadth.
  add(18,'tiLogicTranslation',0,'concept-4','core','primary');
  add(18,'stUsbTraining',0,'concept-5','go-deeper','primary');
  add(18,'digiKeyDatasheet',1,'career-w18-translate-one-i2c-datasheet-into-a-wiring-and-transaction-contract','lab-prep','primary');

  // Week 19 — focused media are inline; the broad FOA lecture index stays a library index.
  add(19,'foaPremisesGuide',0,'concept-5','core','primary');
  add(19,'foaSplicesConnectors',0,'concept-6','demonstration','primary');
  add(19,'foaTestingOverview',0,'concept-7','demonstration','primary');
  add(19,'tiAudioAmpBasics',0,'concept-8','reinforcement');
  add(19,'tiAudioFundamentals',0,'concept-9','reinforcement');
  add(19,'tekDigitalVideoPrimer',0,'concept-9','go-deeper');
  add(19,'digiKeyOptoDisplays',0,'concept-10','demonstration','primary');

  // Week 20 — conceptual RF/comms first; analyzer videos only at the Career measurement point.
  add(20,'rsRfDefinition',0,'concept-1','core','primary');
  add(20,'nptelComms',0,'concept-12','go-deeper');
  add(20,'rsSpectrumBasics',1,'career-w20-a-spectrum-analyzer-shows-signal-energy-versus-frequency','demonstration','primary');
  add(20,'rsOccupiedBandwidth',1,'career-w20-classify-spectral-features-before-explaining-their-cause','demonstration','primary');

  // Week 21 — study-method media are relevant here because the lesson itself teaches mixed retrieval/repair.
  add(21,'ucsdStudyVideos',0,'concept-1','core','primary');
  add(21,'ucsdRetrieval',0,'concept-3','reinforcement','primary');

  // Week 22 — systems requirements/verification first; tool-chain videos live in the Career integration block.
  add(22,'mitRequirements',1,'career-w22-a-requirement-describes-observable-behavior-and-conditions','core','primary');
  add(22,'mitVerification',1,'career-w22-verification-asks-whether-it-meets-the-requirement','core','primary');
  add(22,'mitShell2026',1,'career-w22-career-integration-git-command-line-lab-notes-reports-and-technical-hand','reinforcement');
  add(22,'mitGit2026',1,'career-w22-career-integration-git-command-line-lab-notes-reports-and-technical-hand','reinforcement');
  add(22,'mitShipping2026',1,'career-w22-career-integration-git-command-line-lab-notes-reports-and-technical-hand','go-deeper');

  // Week 23 — references become review/support at the project-baseline decision points.
  add(23,'mitRequirements',1,'career-w23-plan-first-power-as-a-test-case','review');
  add(23,'keysightBenchPowerCourse',1,'career-w23-plan-first-power-as-a-test-case','lab-prep','primary');
  add(23,'mitGit2026',1,'career-w23-a-baseline-is-a-recoverable-state','review','primary');
  add(23,'mitShipping2026',1,'career-w23-recovery-paths-are-part-of-readiness','reinforcement');

  // Week 24 — staged first-power media appears exactly at staged first power / dependency proof.
  add(24,'stBootStartup',1,'career-w24-bring-up-dependencies-in-order','review');
  add(24,'tiBoardTroubleshooting',1,'career-w24-bring-up-dependencies-in-order','troubleshooting');
  add(24,'keysightBenchCvCc',1,'career-w24-first-power-is-a-controlled-experiment','lab-prep','primary');

  // Week 25 — interface/isolation concepts first, MCU/ADC application at the vertical slice.
  add(25,'tiGalvanicIsolation',0,'concept-3','core','primary');
  add(25,'tiIsolationSeries',0,'concept-6','go-deeper');
  add(25,'stMooc',1,'career-w25-build-a-thin-end-to-end-slice-first','lab-prep','primary');
  add(25,'tiADC',1,'career-w25-triangulate-with-independent-evidence','reinforcement','primary');

  // Week 26 — architecture foundation before debugging/crash recovery.
  add(26,'armEmbedded',0,'concept-2','review','primary');
  add(26,'armDebuggingAdventures',1,'career-w26-diagnostics-must-survive-the-failure-they-describe','troubleshooting','primary');
  add(26,'tiCrashDebugging',1,'career-w26-make-errors-explicit-and-recoverable','troubleshooting','primary');

  // Week 27 — V&V video sits beside explicit verdict semantics, not generic Python instruction.
  add(27,'mitVerification',1,'career-w27-verdicts-need-explicit-semantics','review','primary');

  // Week 28 — one focused industry troubleshooting example at causal-reversal/root-cause teaching.
  add(28,'tiBoardTroubleshooting',1,'career-w28-root-cause-survives-controlled-reversal','troubleshooting','primary');

  // Week 30 — career media appears beside the exact artifact/interview skill it demonstrates.
  add(30,'umichResumeBullets',1,'career-w30-a-resume-bullet-is-a-compact-evidence-claim','core','primary');
  add(30,'pennStarVideo',1,'career-w30-defend-the-project-at-30-seconds-2-minutes-and-depth','demonstration','primary');

  // Week 31 — search workflow and continuing mastery are separate instructional homes.
  add(31,'ucsdStudyVideos',0,'concept-4','review','primary');
  add(31,'pennSearchWorkshop',1,'career-w31-use-a-role-filter-before-spending-application-energy','core','primary');

  // Deliberate library-only decisions: these are still useful references, but inserting them
  // in this week's sequential lesson would either duplicate a stronger home or break the flow.
  const libraryOnly = [
    {week:4, source:'aacBinaryConversion', reason:'Kept in Teaching Media for optional breadth. Binary conversion is taught and integrated in its stronger sequential home in Week 11.'},
    {week:4, source:'aacBooleanPostulates', reason:'Kept in Teaching Media for optional breadth. Boolean algebra is taught and integrated in its stronger sequential home in Week 11.'},
    {week:19, source:'foaMediaLectureIndex', reason:'This is a broad lecture index. Focused FOA cabling, connector, and testing videos are integrated at the exact lesson sections; the index remains the faster back-reference hub.'}
  ];

  const roleLabels = {
    core:'Core teaching video',
    demonstration:'Demonstration',
    'lab-prep':'Lab preparation',
    troubleshooting:'Troubleshooting demonstration',
    reinforcement:'Reinforcement',
    review:'Review',
    'go-deeper':'Go deeper'
  };

  const placementByWeek = {};
  P.forEach(p => {
    p.roleLabel = roleLabels[p.role] || 'Teaching video';
    (placementByWeek[p.week] ||= []).push(p);
  });

  const libraryOnlyByWeek = {};
  libraryOnly.forEach(x => (libraryOnlyByWeek[x.week] ||= []).push(x));

  C.videoLessonIntegration = {
    revision:'2026-09-21-v16.3.45-contextual-video-integration',
    placements:P,
    placementByWeek,
    libraryOnly,
    libraryOnlyByWeek,
    roleLabels
  };
})();
