/* AU-ESET 301 Teaching Media Architecture / Workload Calibration Repair — v16.3.50 + v16.3.51 source hotfix
   Scope: Teaching Media architecture only. Preserves v16.3 curriculum, IDs, progress,
   labs, projects, assessments, Cloud Sync protocol 2, visuals, glossary, and calendar.
   Load AFTER teaching-media-resource-integration.js and outside-literature-integration.js.
*/
(() => {
  const C = window.ALFRED_CURRICULUM;
  if (!C?.modules?.length || !C.teachingResourceIntegration) return;
  const R = C.teachingResourceIntegration;
  const key = (week, source) => `${Number(week)}:${source}`;

  const universal = {
    '1:medlineElectricalInjury': {scope:'Electrical-injury first aid and emergency response only',minutes:5,why:'Essential safety / emergency-response guidance.',focus:'Disconnect/isolate power safely, do not touch an energized casualty, call emergency services, and begin appropriate first aid/CPR.',ignore:'Broader medical detail not needed for the low-voltage bench workflow.',after:'State the immediate response to an electrical injury before beginning bench work.',completion:'You can state the emergency sequence without opening the source.'},
    '1:afrotechmodsMultimeter': {scope:'Short beginner DMM demonstration only',minutes:5,why:'Essential visual demonstration of meter modes, jacks, and connection method.',focus:'COM vs V/ohms/current jacks; voltage across; current through; resistance/continuity de-energized.',ignore:'Any advanced meter functions not used in Week 1.',after:'Configure the meter correctly for the first Week 1 measurement.',completion:'You can name the mode, jack, and across/through connection before touching the circuit.'},
    '1:keysightBenchCvCc': {scope:'Constant-voltage / constant-current and current-limit segment only',minutes:12,why:'Essential visual demonstration of the protective current-limit boundary.',focus:'Set voltage, set current limit, recognize CV vs CC, and stop when unexpected current limiting occurs.',ignore:'Remote sensing, combined outputs, advanced testing, and the rest of the full power-supply course.',after:'Set the Week 1 supply voltage/current limit with output off and state the stop condition.',completion:'You can explain why current limit is a ceiling rather than a target current.'},
    '3:tekScopeWebinar': {scope:'Beginner oscilloscope operation and probing sections',minutes:46,why:'Essential visual instrument demonstration.',focus:'Vertical scale, timebase, trigger, probe connection/compensation, and common setup errors.',ignore:'Advanced analysis features outside first-scope operation.',after:'Acquire and stabilize the Week 3 waveform, then compare it with the prediction.',completion:'You can set volts/div, time/div, trigger and probe connection without guessing.'},
    '7:digiKeyDatasheet': {scope:'Complete short datasheet-literacy tutorial',minutes:11,why:'Professional-document literacy is itself a Week 7 objective.',focus:'Pinout, absolute maximums, recommended conditions, tables/graphs, ratings and the difference between limits and normal operation.',ignore:'Device-specific details unrelated to the component you are selecting.',after:'Locate the exact datasheet fields needed for the Week 7 component decision.',completion:'You can cite the table/limit that supports your selection.'},
    '7:tiInductiveLoads': {scope:'Inductive-load turn-off / clamp behavior and safe switching',minutes:18,why:'Essential visual/applied support for relay and inductive-load switching.',focus:'Stored magnetic energy, turn-off voltage, flyback/clamp path, switch stress and safe protection.',ignore:'Advanced switching-speed optimization not needed for the basic protected load.',after:'Explain the protection path used in the Week 7 load circuit before energizing it.',completion:'You can predict what happens at turn-off with and without the clamp.'},
    '11:tiDebounceSwitch': {scope:'Short switch-bounce demonstration',minutes:2,why:'Essential visual demonstration of a mechanical phenomenon that is easy to misunderstand from prose alone.',focus:'Raw bounce during press/release and the difference between the physical event and the cleaned logical event.',ignore:'Vendor-specific implementation details beyond the Week 11 debounce objective.',after:'Predict what the oscilloscope should show before measuring the switch.',completion:'You can explain why one physical press can create multiple electrical transitions.'},
    '12:adafruitSolderProblems': {scope:'Common solder-joint defect examples',minutes:10,why:'Essential visual workmanship recognition.',focus:'Cold/disturbed joints, poor wetting, bridges, excess/insufficient solder, lifted pads and visible rework clues.',ignore:'Advanced repair methods outside the assigned controlled repair.',after:'Classify the Week 12 workmanship evidence before deciding accept/rework/escalate.',completion:'You can point to visible evidence supporting the disposition.'},
    '16:stCubeIdeBasics': {scope:'Project creation/configuration, one GPIO, build, flash and physical verification only',minutes:30,why:'Essential first-time toolchain demonstration.',focus:'Create/configure a minimal project, place user code, build, program through ST-LINK, and verify one GPIO result.',ignore:'ADC, DMA, RTOS, USART and other later modules in the full MOOC.',after:'Create and flash the Week 16 minimum GPIO project.',completion:'The board runs the minimal project and you can repeat the build/flash workflow.'},
    '16:stCubeIdeDebug': {scope:'STM32CubeIDE Eclipse debugger basics using the current UM2609 user guide',minutes:20,why:'Essential debugger/SWD demonstration matching the same IDE used for project creation.',focus:'Start debug, breakpoint, step/resume, registers, peripheral/memory view and stop/relaunch.',ignore:'RTOS-aware and advanced fault-analysis features until needed.',after:'Stop at a breakpoint and inspect one variable/register/peripheral state.',completion:'You can set a breakpoint, inspect state, resume and terminate/relaunch the session.'},
    '17:pyserial': {scope:'pySerial short introduction: open/configure, timeout, read/write, close and partial-read behavior',minutes:20,why:'Professional API documentation is used directly in the Week 17 host implementation.',focus:'Port settings, timeouts, bytes vs text, read/write behavior and safe close/error handling.',ignore:'Advanced URL handlers and platform-specific features outside the serial-client task.',after:'Implement the Week 17 open → exchange → parse → close path with an explicit timeout.',completion:'The script exchanges a framed message and handles timeout/partial response deterministically.'},
    '18:litNxpI2cSpec': {scope:'UM10204 §§3.1.3–3.1.6, §3.1.10 and Table 11 only',minutes:30,why:'Authentic professional specification literacy is itself part of the interface objective.',focus:'Data validity, START/STOP, byte/ACK-NACK format, addressing and the timing table relevant to the selected bus speed.',ignore:'Unassigned specification sections until a later engineering need exists.',after:'Map the selected peripheral transaction to the authoritative bus rules.',completion:'You can distinguish what comes from the I2C standard from what comes from the peripheral datasheet.'},
    '20:rsSpectrumBasics': {scope:'Basic spectrum-analyzer operation',minutes:20,why:'Essential visual instrument demonstration.',focus:'Center/span, reference level, RBW, VBW and recognizing signal energy versus frequency.',ignore:'Advanced demodulation/compliance measurements.',after:'Configure the analyzer for the Week 20 known-tone measurement.',completion:'You can choose the core controls and explain how each changes the displayed trace.'},
    '21:etaCompetencies': {scope:'Official CETa competency scope only',minutes:20,why:'Official professional scope document used to map readiness and remediation.',focus:'Identify the competency domain behind each miss; do not use the document as instruction.',ignore:'Study-guide material reserved for the later dedicated integration phase.',after:'Create a standards-based repair map from the cumulative retrieval attempt.',completion:'Every miss is mapped to an official competency area and a concrete repair action.'},
    '22:litNasaGoodRequirement': {scope:'NASA Appendix C guidance on writing a good requirement, bounded to the sections used by the Project 1 design review',minutes:20,why:'Professional-document literacy for measurable, verifiable requirements.',focus:'One thought, measurable condition/tolerance, shall/will/should usage, implementation independence and verifiability.',ignore:'Unrelated systems-engineering handbook material.',after:'Rewrite Project 1 requirements so each is observable and testable.',completion:'Every retained requirement has a condition and measurable pass criterion.'},
    '22:litNasaSystemsAppendix': {scope:'NASA Requirements Verification Matrix guidance / relevant Appendix D material only',minutes:20,why:'Professional verification-document literacy.',focus:'Requirement ID, verification method, evidence/result and traceability.',ignore:'Broader validation/system-lifecycle material not needed for the design review.',after:'Build the Project 1 requirement → verification method → evidence matrix.',completion:'Every Project 1 requirement maps to a named verification method and planned evidence.'},
    '23:autodeskElectronicsBom': {scope:'Short electronics BOM field guidance',minutes:10,why:'Professional artifact literacy for a reproducible hardware baseline.',focus:'Quantity, value, reference designator, footprint and manufacturer part number.',ignore:'Broader CAD/PLM workflow outside Project 1.',after:'Freeze the Project 1 BOM with enough identity to reproduce the hardware.',completion:'Another person can identify the exact required parts from the BOM.'},
    '30:onetTech': {scope:'Current O*NET Electrical/Electronic Engineering Technologists and Technicians task profile',minutes:20,why:'Authentic occupation-document literacy for evidence-to-role mapping.',focus:'Tasks that Project 1 evidence can truthfully prove: schematics, assembly/test, logs, measurement, troubleshooting and corrective-action documentation.',ignore:'Unrelated occupation data that does not change the application package.',after:'Map each selected portfolio artifact to at least one real technician task.',completion:'Every resume/project claim points to evidence and a real target-role duty.'},
    '31:etaCompetencies': {scope:'Current official CETa competency scope',minutes:15,why:'Official certification scope must be rechecked at the end of the course.',focus:'Confirm current competency domains and identify areas needing continuing retrieval.',ignore:'Private study-guide integration, which remains a separate future phase.',after:'Create the continuing CETa retention list.',completion:'You have a scheduled repair/retrieval plan tied to current official scope.'},
    '31:etaExam': {scope:'Current ETA Associate CET exam and certification policy information',minutes:10,why:'Current external exam rules can change and must come from the official source.',focus:'Question count, time, passing rule, certification term, practical requirement and current registration policy.',ignore:'Other ETA certifications unless they are part of a later plan.',after:'Record the current exam rules/date checked in the continuing-mastery plan.',completion:'Your plan reflects the current official CETa exam policy rather than an old course snapshot.'}
  };

  const conditional = {
    '6:adiLtspice': {condition:'Simulation route',scope:'LTspice AC-analysis setup/configuration only',minutes:12,focus:'AC source, .AC sweep, start/stop frequency, points/decade and plotting gain.',ignore:'The rest of the broad LTspice course.',after:'Run the Week 6 frequency sweep and compare it with the prediction.',completion:'The simulated response is saved with labeled axes and the expected trend.'},
    '12:digiKeySoldering': {condition:'Physical soldering route',scope:'Basic soldering procedure only',minutes:10,focus:'Heat both surfaces, feed solder to the joint, inspect wetting and stop before overheating.',ignore:'Advanced rework not performed in the assigned task.',after:'Make the assigned controlled joint/repair and inspect it.',completion:'The joint passes the Week 12 visual/continuity criteria.'},
    '12:chemtronicsSolderWick': {condition:'Physical route when solder wick is actually required',scope:'Solder-wick removal procedure only',minutes:5,focus:'Braid placement, heat application, solder flow and lifting iron/braid together.',ignore:'Other desoldering methods not used in the task.',after:'Remove only the solder needed for the controlled rework.',completion:'The joint/pad remains intact and passes inspection.'},
    '18:saleaeStm32I2c': {condition:'Physical logic-analyzer route',scope:'STM32 I2C capture/analyzer workflow only',minutes:25,focus:'Wiring, sample/capture setup, I2C analyzer settings, raw waveform and decoded transaction.',ignore:'SPI/UART analyzer tutorials unless needed later.',after:'Capture the Week 18 known-good transaction and one controlled fault.',completion:'You can reconcile raw waveform timing with decoded address/data/ACK behavior.'},
    '19:foaSplicesConnectors': {condition:'Fiber termination / connector route',scope:'The connector/termination portion matching the selected Week 19 medium',minutes:15,focus:'Correct preparation, termination/connector inspection and defect cues.',ignore:'Fiber procedures not used by the selected lab route.',after:'Perform or inspect the selected termination and record continuity/inspection evidence.',completion:'The selected medium passes the stated workmanship and continuity criteria.'},
    '25:stHalI2cUseCases': {condition:'Project 1 uses STM32 HAL I2C and the linked documentation matches the selected MCU family/package version',scope:'Exact HAL I2C status/timeout/error/abort/recovery APIs for the Project 1 tool version',minutes:20,focus:'Return status, timeout, error code, abort/recovery path and the exact APIs used in Project 1.',ignore:'Documentation for a different MCU family/HAL generation.',after:'Implement explicit success/error handling around the Project 1 I2C transaction.',completion:'The code distinguishes success, timeout and error paths and logs/recoveries are testable.',requiresVersionMatch:true},
    '26:stWatchdogGuide': {condition:'Project 1 implements watchdog-based recovery',scope:'STM32 watchdog purpose/configuration/refresh/reset behavior relevant to the selected MCU',minutes:20,focus:'Timeout/window, refresh responsibility, reset evidence and avoiding refresh from a failed path.',ignore:'Watchdog variants not present on the selected MCU.',after:'Prove one intentional timeout/reset and document the recovery evidence.',completion:'The watchdog detects the intended failure and the project returns to a known state.'}
  };

  const removedAssignments = new Set([
    '4:aacBinaryConversion','4:aacBooleanPostulates','9:aacPowerSupplies','10:aacAmpConfigs',
    '19:foaMediaLectureIndex','21:privateGuide','22:nasaRequirementAppendix','3:bkVariableIsolatedAc','9:bkVariableIsolatedAc',
    '3:rsSpectrumBasics','7:aacBjtIntro','7:aacMosfetLecture','7:aacCmosGateCircuitry','7:aacJfet','7:aacIgbt','7:aacDarlington','7:aacZener','7:aacSpecialPurposeDiodes','7:aacDiac','7:aacTriac',
    '11:aacComputerHardware','11:aacMicroprocessorBusNetworks','15:stCubeIdeBasics','30:etaExam'
  ]);

  const movedWeek = {
    '11:saleaeDigitalSignals':18,
    '15:saleaeDigitalSignals':18,
    '17:saleaeStm32Uart':18,
    '17:saleaeAsyncSerial':18,
    '14:cs50C':15
  };

  const librarySources = new Set([
    'flukeSafety','oshaLotoInteractive','oshaFireExtinguisher','oshaLadderSafety','oshaDriverSafety','oshaRfSafety','oshaFiberLaserSafety','oshaElectricalStandardsTrainer','keysightBenchPowerCourse','flukeMultimeterGuide','nasaESD',
    'neetsGeneratorsMotors','neetsWaveGeneration','tiPllFundamentals','mitLabs','neetsTestEquipment','tekSignalGenerator','digiKeyEsr70','ietDecadeBoxes','keysightElectronicLoadBasics','stacoVariableTransformer','litTekAbcProbes',
    'neetsSolidStateDevices','litTiMosfetSwitchLoss','tiSwitchingRegulatorFundamentals','tiBatteryTraining','tiPrecisionOpAmps','tiAudioFundamentals',
    'nasaCrewElectronicsRepair','neetsSolderingWiring','paceBgaTutorial','paceThermoBondCitKit','nasaHarness','oshaBranchCircuitAwareness','siemensProcessFlowcharts',
    'beejC','siemensScePlcCourses','plcopen61131Languages','mitAssemblyArchitecture','litArmCortexMBeginners',
    'ciscoNetworkingBasics','cisaDeviceBackup','stUsbTraining','silabsZigbeeFundamentals','silabsZigbeeBootcamp','saleaeI2cGuide','saleaeSpiGuide',
    'foaPremisesGuide','neetsMagneticRecording','tekDigitalVideoPrimer','nptelComms','fccRF','neetsAntennas','neetsRfComms',
    'nasaSystems','nasaConfigManagement','stMooc','tiIsolationSeries','tiADC','litAdiCn0314','stOnlineTrainingCurrent','litMemfaultDebugInterfaces',
    'pythonDocs','pytest','niVeriStandWorkflow','pyvisaInstrumentComm','niFaultInjection','neetsTechnicianHandbook','nasaTechnicalPlanning'
  ]);

  const studySources = new Set([
    'tiBoardTroubleshooting','digiKeySchematics','nscTroubleshooting','automationDirectPlcScan','cs50Week1C2026','cs50C','armEmbedded','saleaeLearnAsync','saleaeStm32Uart','eatonUpsVsSurge',
    'saleaeLearnI2c','saleaeLearnSpi','saleaeStm32Spi','tiLogicTranslation','adiMixedSignalGrounding','molexConnectorFundamentals','litSparkfunI2c','litAdiSpiIntro',
    'tiAudioAmpBasics','foaSplicesConnectors','foaTestingOverview','aacAudioElectronics','digiKeyOptoDisplays','aacOptoelectronicsIntro','digiKeyPhotoDevices','aacImageSensorIntro','aacOptocouplerBasics','litFoaFiberBasics',
    'rsRfDefinition','aacTransmissionLine','rsOccupiedBandwidth','qualcommCellularBasics','ciscoPotsSplitters','ciscoPotsLoopSignaling','ucsdStudyVideos','ucsdRetrieval','etaFormula',
    'mitRequirements','mitVerification','mitShell2026','mitGit2026','mitStrobeLabNotes','mitEECSMethods','mitShipping2026','githubSkills',
    'tiGalvanicIsolation','saleaeStm32I2c','saleaeStm32Spi','schneiderI2cStaleData','nasaSensorRangeCheck','litAacAdcDac','litAdiAdcStudent',
    'armDebuggingAdventures','tiCrashDebugging','litMemfaultWatchdog','litMemfaultHardfault','pyserial','matplotlib','tekPythonAutomation','keysightPythonAutomation',
    'salesforceFieldServiceBasics','salesforceWorkOrderEstimation','serviceNowFieldInventory','atlassianIncidentWorkflow','digiKeyCrossReference','salesforceResourceUtilization',
    'adafruitSolderProblems','chemtronicsSolderWick','tekScopeSetup','saleaeDigitalSignals','onetTech','gatechResumeGuide','umichResumeBullets','pennStarVideo','umichInterviewing','umichEngineeringTechnicalInterview','mitTechnicalPresentation','mitIndustryJobTalk','umichJobSearch','pennSearchWorkshop','litCornellStudyStrategies'
  ]);

  const assignmentStudyOverrides = new Set([
    '27:pyserial','27:pytest','27:matplotlib','28:pytest','28:tiBoardTroubleshooting','29:flukeMultimeterGuide','24:flukeMultimeterGuide','24:stBootStartup','24:tiBoardTroubleshooting','24:keysightBenchCvCc',
    '23:keysightBenchPowerCourse','25:saleaeStm32I2c','25:saleaeStm32Spi','26:nasaSystems','27:mitVerification','28:nasaSystems'
  ]);

  const categoryOverrides = {
    'aacTechnicalNotation':'Math Help','khanEquationIsolation':'Math Help','etaFormula':'Math Help',
    'tekScopeSetup':'Tool Help','keysightBenchCvCc':'Tool Help','digiKeyLcrMeter':'Demonstration','adiLtspice':'Tool Help','saleaeDigitalSignals':'Tool Help','saleaeAsyncSerial':'Tool Help','saleaeI2cGuide':'Tool Help','saleaeSpiGuide':'Tool Help','stBootStartup':'Troubleshooting Help','litMemfaultHardfault':'Troubleshooting Help',
    'aacTroubleshootOpenShort':'Troubleshooting Help','aacTroubleshootSeries':'Troubleshooting Help','aacTroubleshootParallel':'Troubleshooting Help','aacTroubleshootSeriesParallel':'Troubleshooting Help','aacTroubleshootingStrategies':'Troubleshooting Help','tiBoardTroubleshooting':'Troubleshooting Help','aacTroubleshootSemiconductors':'Troubleshooting Help','nscTroubleshooting':'Troubleshooting Help',
    'ucsdStudyVideos':'Review','ucsdRetrieval':'Review','litCornellStudyStrategies':'Review','digiKeyDatasheet':'Review','flukeMultimeterGuide':'Review','stBootStartup':'Review',
    'tiOpAmpOutputStage':'Go Deeper','armEmbedded':'Go Deeper','silabsZigbeeBootcamp':'Go Deeper','tiGalvanicIsolation':'Beginner Explanation',
    'schneiderI2cStaleData':'Another Example','nasaSensorRangeCheck':'Another Example','litJplFailureAnalysis':'Professional Reading','mitRequirements':'Professional Reading','mitVerification':'Professional Reading',
    'gatechResumeGuide':'Professional Reading','umichResumeBullets':'Professional Reading','pennStarVideo':'Professional Reading','umichInterviewing':'Professional Reading','umichEngineeringTechnicalInterview':'Professional Reading','mitTechnicalPresentation':'Professional Reading','mitIndustryJobTalk':'Professional Reading','umichJobSearch':'Professional Reading','pennSearchWorkshop':'Professional Reading'
  };

  const libraryCategory = (sourceId, s={}) => {
    const text = `${s.title||''} ${s.kind||''} ${s.org||''}`.toLowerCase();
    if (/standard|specification|competenc|official/.test(text)) return 'Standard / Specification';
    if (/nasa|systems engineering|configuration management|technical planning/.test(text)) return 'Systems Engineering';
    if (/osha|safety|esd|hazard|fcc/.test(text)) return 'Government / Safety';
    if (/neets|handbook|manual/.test(text)) return 'Technician Reference';
    if (/stm32|cortex|hal|mcu|embedded/.test(text)) return 'MCU / Toolchain';
    if (/instrument|oscilloscope|multimeter|probe|power supply|electronic load|spectrum/.test(text)) return 'Instrument';
    if (/course|curriculum|training|mooc|lecture/.test(text)) return 'Professional Course';
    if (/datasheet|application note|white paper|reference design/.test(text)) return 'Application Note / Documentation';
    return 'Professional Reference';
  };

  const inferStudyCategory = (sourceId, placement, item, source) => {
    if (categoryOverrides[sourceId]) return categoryOverrides[sourceId];
    const role = String(placement?.presentationRole || '').toLowerCase();
    const text = `${item?.role||''} ${source?.title||''} ${source?.kind||''}`.toLowerCase();
    if (/troubleshoot|fault|debug/.test(text) || role==='troubleshooting') return 'Troubleshooting Help';
    if (/review/.test(text) || role==='review') return 'Review';
    if (/demo|video|tutorial/.test(text) || role==='demonstration') return 'Demonstration';
    if (/math|formula|equation|binary|boolean|decibel/.test(text)) return 'Math Help';
    if (/simulation|interactive/.test(text)) return 'Interactive Practice';
    if (/documentation|guide|primer|manual/.test(text)) return 'Tool Help';
    if (/go deeper|advanced|precision labs/.test(text) || role==='go-deeper') return 'Go Deeper';
    if (/beginner|introduction|basics/.test(text)) return 'Beginner Explanation';
    return 'Alternate Explanation';
  };

  // Current authoritative replacements for Week 17 Microsoft breadth resources.
  const sourcePatches = {
    adiLtspice:{title:'LTspice AC Analysis Setup and Configuration',url:'https://www.analog.com/en/resources/media-center/videos/series/ltspice-ac-and-noise-simulation.html',kind:'Analog Devices targeted LTspice AC-analysis video — use video 1 only'},
    microsoftWindowsConfig:{title:'Configure Windows Client — Microsoft Learn Documentation',url:'https://learn.microsoft.com/en-us/windows/configuration/',kind:'Current Microsoft Windows client configuration documentation hub'},
    microsoftSupportTools:{title:'Windows Client Troubleshooting Documentation',url:'https://learn.microsoft.com/en-us/troubleshoot/windows-client/welcome-windows-client',kind:'Current Microsoft Windows troubleshooting documentation'},
    microsoftAppsUpdates:{title:'Manage Windows Updates and Lifecycle',url:'https://learn.microsoft.com/en-us/training/modules/manage-windows-updates-intune/',kind:'Current Microsoft Learn Windows update/lifecycle module'},
    microsoftDefenderBasics:{title:'Manage Microsoft Defender in Windows Client',url:'https://learn.microsoft.com/en-us/training/modules/manage-defender-windows-client/',kind:'Current Microsoft Learn Windows security module'},
    stCubeIdeDebug:{title:'STM32CubeIDE Eclipse Debugging — UM2609 User Guide',url:'https://www.st.com/resource/en/user_manual/dm00629856-stm32cubeide-user-guide-stmicroelectronics.pdf',kind:'Current STM32CubeIDE Eclipse user manual — bounded debugger sections'},
    stHalI2cUseCases:{title:'STM32 HAL I2C — Use the Exact Documentation for Your Selected MCU/Cube Package',url:'',kind:'Route-specific API documentation; select the documentation bundled with the Project 1 MCU family and Cube package version'}
  };
  Object.entries(sourcePatches).forEach(([id, patch]) => { if (C.sources?.[id]) Object.assign(C.sources[id], patch); });

  // Week 1 needs the short CV/CC segment rather than the full power-supply course.
  const week1 = C.modules.find(m=>Number(m.week)===1);
  const week3 = C.modules.find(m=>Number(m.week)===3);
  if (week1 && week3 && !(week1.integration?.media||[]).some(x=>x.source==='keysightBenchCvCc')) {
    const src = (week3.integration?.media||[]).find(x=>x.source==='keysightBenchCvCc');
    if (src) week1.integration.media.push({...src,role:'Required · Bench power supply current-limit demonstration',use:'See current limiting and CV/CC behavior before first power.',watchFor:'Set voltage/current limit with output off; recognize normal CV versus unexpected CC behavior; stop rather than increasing the limit.',gap:'Alfred supplies the circuit prediction, safe first-power sequence, stop conditions and interpretation.'});
  }
  if (!R.placements.some(p=>Number(p.assignmentWeek)===1 && p.source==='keysightBenchCvCc')) {
    const base = R.placements.find(p=>Number(p.assignmentWeek)===3 && p.source==='keysightBenchCvCc');
    if (base) R.placements.push({...base,assignmentWeek:1,targetWeek:1,lesson:1,segment:'career-w01-current-limiting-is-a-protective-boundary-and-a-diagnostic-clue',relationship:'Demonstrated in',presentationRole:'demonstration',display:'primary',inline:true,requirement:'required',afterAction:'After the bounded CV/CC segment, set the Week 1 supply voltage/current limit with output off and state the stop condition.',reason:'v16.3.50 workload calibration: bounded visual demonstration replaces the full Bench Power Supply Basics course as first-pass Required media.'});
  }

  const placementsByAssignment = new Map();
  R.placements.forEach(p => {
    const k=key(p.assignmentWeek,p.source);
    if (!placementsByAssignment.has(k)) placementsByAssignment.set(k,[]);
    placementsByAssignment.get(k).push(p);
  });
  const mediaByAssignment = new Map();
  C.modules.forEach(mod => (mod.integration?.media||[]).forEach(item => mediaByAssignment.set(key(mod.week,item.source), {mod,item})));
  const assignmentKeys = new Set([...placementsByAssignment.keys(), ...mediaByAssignment.keys()]);

  const assignments = {};
  for (const k of assignmentKeys) {
    const [weekText, sourceId] = k.split(':');
    const assignmentWeek = Number(weekText);
    const source = C.sources?.[sourceId] || {};
    const placements = placementsByAssignment.get(k) || [];
    const placement = placements[0] || null;
    const mediaEntry = mediaByAssignment.get(k);
    const item = mediaEntry?.item || null;
    let destination = 'study';
    let requirement = 'supporting';
    let meta = null;
    if (removedAssignments.has(k) || R.removedByAssignment?.[k]) destination='removed';
    else if (universal[k]) { destination='classroom'; requirement='required'; meta=universal[k]; }
    else if (conditional[k]) { destination='classroom'; requirement='conditional'; meta=conditional[k]; }
    else if (assignmentStudyOverrides.has(k) || studySources.has(sourceId)) destination='study';
    else if (librarySources.has(sourceId)) destination='library';
    else {
      const text=`${source.title||''} ${source.kind||''}`.toLowerCase();
      if (/(self-study|complete curriculum|professional course|training pathway|handbook|standard|specification|white paper|application note|technical reference|government .*guidance|manual|mooc)/.test(text)) destination='library';
    }
    const targetStudyWeek = movedWeek[k] || assignmentWeek;
    const lessonKinds = new Set(placements.map(p=>Number(p.lesson)===1?'career':'ceta'));
    const track = lessonKinds.size>1?'both':lessonKinds.has('career')?'career':'ceta';
    const studyCategory = inferStudyCategory(sourceId,placement,item,source);
    const libCategory = libraryCategory(sourceId,source);
    assignments[k] = {
      key:k,assignmentWeek,source:sourceId,destination,requirement,
      studyWeek:targetStudyWeek,studyCategory,libraryCategory:libCategory,track,
      requiredMeta:meta||null,
      originalRequirement:placement?.requirement||'supporting',
      originalRole:item?.role||''
    };
    placements.forEach(p=>{p.architectureDestination=destination;p.architectureRequirement=requirement;p.architectureStudyWeek=targetStudyWeek;p.architectureCategory=destination==='library'?libCategory:studyCategory;p.architectureRequiredMeta=meta||null;if(destination==='classroom')p.requirement=requirement;});
    if (item) {
      item.architectureDestination=destination;
      item.architectureRequirement=requirement;
      item.architectureStudyWeek=targetStudyWeek;
      item.architectureCategory=destination==='library'?libCategory:studyCategory;
      item.architectureRequiredMeta=meta||null;
      item.architectureOriginalRole=item.architectureOriginalRole||item.role||'';
      if (destination==='classroom') item.role=requirement==='conditional'?`Route-specific · ${item.architectureOriginalRole.replace(/^[^·]+·\s*/, '')}`:`Required · ${item.architectureOriginalRole.replace(/^[^·]+·\s*/, '')}`;
      else if (destination==='library') item.role=`Engineering Library · ${item.architectureOriginalRole.replace(/^[^·]+·\s*/, '')}`;
      else if (destination==='study') item.role=`Study · ${studyCategory}`;
    }
  }

  // Ensure removed assignments are absent from module runtime arrays, not merely hidden by the old reconciliation ledger.
  C.modules.forEach(mod=>{
    if(!mod.integration?.media)return;
    mod.integration.media=mod.integration.media.filter(item=>assignments[key(mod.week,item.source)]?.destination!=='removed');
    mod.sourceIds=[...new Set((mod.sourceIds||[]).filter(id=>(mod.integration.media||[]).some(item=>item.source===id)))];
  });

  // Rebuild resource-integration indexes after the additive Week 1 placement and architecture annotations.
  R.removedByAssignment = {...(R.removedByAssignment||{})};
  removedAssignments.forEach(k=>{ if(!R.removedByAssignment[k]){const [w,s]=k.split(':');R.removedByAssignment[k]={assignmentWeek:Number(w),source:s,reason:'v16.3.50 Teaching Media workload calibration / duplicate, stale, or sequencing repair.'};} });
  const retainedPlacements=R.placements.filter(p=>assignments[key(p.assignmentWeek,p.source)]?.destination!=='removed');
  R.byTargetWeek={}; R.bySource={}; R.byAssignment={};
  retainedPlacements.forEach(p=>{
    (R.byTargetWeek[p.targetWeek] ||= []).push(p);
    (R.bySource[p.source] ||= []).push(p);
    (R.byAssignment[key(p.assignmentWeek,p.source)] ||= []).push(p);
  });
  R.retainedAssignmentCount = Object.values(assignments).filter(a=>a.destination!=='removed').length;
  R.revision='2026-09-22-v16.3.51-required-only-classroom-study-library-source-hotfix';

  const counts = Object.values(assignments).reduce((acc,a)=>{acc[a.destination]=(acc[a.destination]||0)+1;if(a.requirement==='required')acc.universalRequired++;if(a.requirement==='conditional')acc.conditionalRequired++;return acc;},{classroom:0,study:0,library:0,removed:0,universalRequired:0,conditionalRequired:0});
  C.teachingMediaArchitecture={
    revision:'2026-09-22-v16.3.51-teaching-media-architecture-source-hotfix',
    policy:'Classroom = bounded first-pass Required media only; Study = help on demand; Engineering Library = professional reference. Learn once, retrieve/apply later, Study if forgotten.',
    assignments,universal,conditional,removedAssignments:[...removedAssignments],movedWeek,counts,
    sourcePatches
  };
  C.meta=C.meta||{};
  C.meta.mediaPolicy=C.teachingMediaArchitecture.policy;
  C.meta.teachingMediaArchitectureRevision=C.teachingMediaArchitecture.revision;
  C.meta.teachingMediaUniversalRequiredCount=counts.universalRequired;
  C.meta.teachingMediaConditionalRequiredCount=counts.conditionalRequired;
})();
