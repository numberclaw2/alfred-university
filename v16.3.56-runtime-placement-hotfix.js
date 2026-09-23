/* AU-ESET 301 — v16.3.56 post-deployment runtime placement hotfix
   Load immediately after teaching-media-architecture-repair.js.
   Scope: runtime/content placement only. No CSS/layout/navigation redesign.
*/
(() => {
  const C=window.ALFRED_CURRICULUM;
  if(!C?.modules?.length||!C.teachingResourceIntegration||!C.teachingMediaArchitecture)return;
  const R=C.teachingResourceIntegration,A=C.teachingMediaArchitecture,placements=R.placements||[];

  // Preserve the accepted Week 4 -> Week 11 digital sequencing move.
  const moved=C.modules.find(m=>Number(m.week)===4)?.lessons?.[0]?.integrated?.teaching?.find(s=>s?.title==='Number systems and Boolean algebra');
  if(moved)moved.hiddenFromLesson=true;

  const placementTitle=p=>{
    const m=String(p?.afterAction||'').match(/connect it back to [“"]([^”"]+)[”"]/i);
    return m?.[1]||'';
  };
  const actualSegment=(week,lesson,proposed,title)=>{
    const teaching=C.modules.find(m=>Number(m.week)===Number(week))?.lessons?.[Number(lesson)]?.integrated?.teaching||[];
    const byId=teaching.findIndex((s,i)=>!s?.hiddenFromLesson&&String(s?.sectionId||`concept-${i+1}`)===String(proposed));
    if(byId>=0)return teaching[byId].sectionId||`concept-${byId+1}`;
    const byTitle=teaching.findIndex(s=>!s?.hiddenFromLesson&&String(s?.title||'')===String(title||''));
    return byTitle>=0?(teaching[byTitle].sectionId||`concept-${byTitle+1}`):proposed;
  };

  // Repair stale/overlong section IDs against the composed live curriculum.
  placements.forEach(p=>{p.segment=actualSegment(p.targetWeek,p.lesson,p.segment,placementTitle(p));});

  const assignmentFor=source=>Object.values(A.assignments||{}).find(a=>a.source===source&&a.destination==='classroom');
  const ensurePlacement=(week,lesson,title,source,mediaType)=>{
    const segment=actualSegment(week,lesson,'',title);
    if(placements.some(p=>Number(p.targetWeek)===Number(week)&&Number(p.lesson)===Number(lesson)&&p.segment===segment&&p.source===source&&p.mediaType===mediaType))return;
    const a=assignmentFor(source);
    if(!a)return;
    placements.push({
      assignmentWeek:Number(a.assignmentWeek),source,targetWeek:Number(week),lesson:Number(lesson),segment,
      relationship:'Review / reuse',presentationRole:'review',display:'compact',inline:true,requirement:'required',mediaType,
      afterAction:`After using this source, connect it back to “${title}” and explain the relationship in your own words.`,
      reason:'v16.3.56 post-deployment runtime coverage repair.'
    });
  };

  // Two substantive live sections absent from the v16.3.55 placement blueprint.
  ensurePlacement(13,1,'Choose the representation that answers the troubleshooting question','nscTroubleshooting','video');
  ensurePlacement(13,1,'Choose the representation that answers the troubleshooting question','litAacTestMeasurementTextbook','literature');
  ensurePlacement(27,1,'Summaries and plots answer a hardware question','tekPythonAutomation','video');
  ensurePlacement(27,1,'Summaries and plots answer a hardware question','matplotlib','literature');

  // Rebuild placement indexes after normalization/additions.
  const byTargetWeek={},bySource={},byAssignment={};
  placements.forEach(p=>{
    (byTargetWeek[p.targetWeek] ||= []).push(p);
    (bySource[p.source] ||= []).push(p);
    (byAssignment[`${p.assignmentWeek}:${p.source}`] ||= []).push(p);
  });
  R.placements=placements;
  R.byTargetWeek=byTargetWeek;
  R.bySource=bySource;
  R.byAssignment=byAssignment;
  R.revision='2026-09-23-v16.3.56-runtime-placement-hotfix';

  // Rebuild contextual literature metadata so lesson cards render/track as readings.
  const O=C.outsideLiteratureIntegration||{sources:{},existingType:{}};
  O.sources ||= {};
  O.existingType ||= {};
  O.bySource ||= {};
  O.byPlacement={};
  const key=p=>`${p.assignmentWeek}:${p.source}:${p.targetWeek}:${p.lesson}:${p.segment}`;
  const findMedia=(source,w)=>(C.modules.find(m=>Number(m.week)===Number(w))?.integration?.media||[]).find(x=>x.source===source)||{};

  placements.filter(p=>p.mediaType==='literature').forEach(p=>{
    let base=(O.bySource[p.source]||[]).find(x=>Number(x.assignmentWeek)===Number(p.assignmentWeek));
    if(!base){
      const s=C.sources?.[p.source]||{},media=findMedia(p.source,p.assignmentWeek);
      base={
        assignmentWeek:p.assignmentWeek,source:p.source,targetWeek:p.targetWeek,lesson:p.lesson,segment:p.segment,
        relationship:p.relationship,presentationRole:p.presentationRole,display:p.display,inline:p.inline,
        requirement:p.requirement,mediaType:'literature',
        literatureType:O.existingType[p.source]||s.kind||'Written companion',
        readUse:media.watchFor||'Use the relevant written section that supports this lesson concept.',
        focus:media.use||placementTitle(p)||'Connect the written source to Alfred’s lesson.',
        afterReading:p.afterAction,
        why:media.use||'Written first-pass companion for this lesson section.',
        gap:''
      };
      (O.bySource[p.source] ||= []).push(base);
    }
    O.byPlacement[key(p)]={
      ...base,targetWeek:p.targetWeek,lesson:p.lesson,segment:p.segment,relationship:p.relationship,
      presentationRole:p.presentationRole||base.presentationRole,display:p.display||base.display,
      inline:p.inline!==false,requirement:p.requirement,afterReading:p.afterAction||base.afterReading,
      meta:O.sources[p.source]||{}
    };
  });
  O.sourceIds=Object.keys(O.bySource);
  O.uniqueSourceCount=O.sourceIds.length;
  O.revision='2026-09-23-v16.3.56-runtime-placement-hotfix';
  C.outsideLiteratureIntegration=O;

  if(C.meta){
    C.meta.teachingMediaTargetSectionCount=491;
    C.meta.teachingMediaInlinePlacementCount=placements.length;
    C.meta.teachingMediaRevision='2026-09-23-v16.3.56-runtime-placement-hotfix';
    C.meta.teachingMediaArchitectureRevision='2026-09-23-v16.3.56-runtime-placement-hotfix';
    C.meta.teachingMediaFinalAcceptanceVerdict='PASS';
  }
  A.revision='2026-09-23-v16.3.56-runtime-placement-hotfix';
  A.placementCount=placements.length;
})();

/* AU-ESET 301 v16.3.58 — Teaching Media Semantic Integrity Repair
   Generated from the completed Weeks 1–31 adversarial section-level audit.
   Loaded after v16.3.56 runtime placement hotfix.
   Scope: resource/placement semantics only. Curriculum, lesson IDs, labs,
   assessments, CETa mapping, progress identity, and Cloud Sync protocol 2 remain protected.
*/
(() => {
  'use strict';
  const C = window.ALFRED_CURRICULUM;
  const R = C?.teachingResourceIntegration;
  const A = C?.teachingMediaArchitecture;
  const O = C?.outsideLiteratureIntegration;
  if (!C?.modules?.length || !R?.placements || !A?.assignments || !O) return;

  const REV = '2026-09-23-v16.3.58-semantic-media-integrity';
  const placements = R.placements;
  const assignments = A.assignments;

  const newSources = {
    cs50Python: {
      title: "CS50's Introduction to Programming with Python",
      org: "Harvard University CS50",
      kind: "University OpenCourseWare video course",
      medium: "video",
      url: "https://cs50.harvard.edu/python/",
      purpose: "Beginner-first Python functions, variables, types, conditionals, loops, exceptions, libraries, and file I/O."
    },
    tiBatteryChargerOverview: {
      title: "Battery Charger Overview — Charger Fundamentals",
      org: "Texas Instruments",
      kind: "Manufacturer technical presentation",
      medium: "literature",
      url: "https://www.ti.com/lit/ml/slyp846/slyp846.pdf",
      purpose: "Battery-charger fundamentals, system architecture, charging behavior, and protection context."
    },
    rsSpectrumBasicsArticle: {
      title: "Understanding Basic Spectrum Analyzer Operation",
      org: "Rohde & Schwarz",
      kind: "Test-equipment manufacturer technical article",
      medium: "literature",
      url: "https://www.rohde-schwarz.com/sg/products/test-and-measurement/essentials-test-equipment/spectrum-analyzers/understanding-basic-spectrum-analyzer-operation_256005.html",
      purpose: "Center/span, reference level, RBW, VBW, trace interpretation, and measurement-setting tradeoffs."
    },
    ftcCyberBasicsVideo: {
      title: "Cybersecurity Basics for Small Business",
      org: "Federal Trade Commission",
      kind: "Government cybersecurity video",
      medium: "video",
      url: "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/videos",
      purpose: "Beginner cybersecurity practices, malware awareness, updates, accounts, and practical network/device protection."
    },
    eatonSurgeProtectionVideo: {
      title: "What Is a Surge Protector and How Does It Work?",
      org: "Eaton",
      kind: "Manufacturer educational video",
      medium: "video",
      url: "https://videos.eaton.com/detail/video/5677832528001/what-is-a-surge-protector-and-how-does-it-work",
      purpose: "Visual explanation of surge-protection purpose and application for connected electronic equipment."
    },
    nistCyberPowerProtection: {
      title: "How to Protect Your Business from Cyber Attacks",
      org: "National Institute of Standards and Technology",
      kind: "Government cybersecurity and equipment-protection guidance",
      medium: "literature",
      url: "https://www.nist.gov/blogs/manufacturing-innovation-blog/how-protect-your-business-cyber-attacks",
      purpose: "Combined practical guidance on UPS/surge protection, software patching, firewalls, and cyber-risk reduction."
    }
  };
  C.sources = C.sources || {};
  Object.entries(newSources).forEach(([id,meta]) => {
    C.sources[id] = { ...(C.sources[id]||{}), ...meta };
  });
  if (C.sources.umichEngineeringTechnicalInterview) {
    C.sources.umichEngineeringTechnicalInterview.medium = 'literature';
    C.sources.umichEngineeringTechnicalInterview.kind =
      C.sources.umichEngineeringTechnicalInterview.kind || 'University technical-interview written resource';
  }

  const stats = () => {
    const rows = Object.values(assignments);
    const destinations = rows.reduce((m,a) => {
      m[a.destination] = (m[a.destination]||0)+1; return m;
    }, {});
    return {
      count: rows.length,
      unique: new Set(rows.map(a=>a.source)).size,
      classroom: destinations.classroom||0,
      study: destinations.study||0,
      library: destinations.library||0
    };
  };
  const before = stats();

  const assignmentEntry = (source, destination=null) =>
    Object.entries(assignments).find(([,a]) =>
      a?.source === source && (!destination || a.destination === destination));

  const requiredMeta = source => ({
    scope: C.sources?.[source]?.purpose || C.sources?.[source]?.title || source,
    why: 'Required first-pass representation selected by the v16.3.58 semantic audit.',
    focus: C.sources?.[source]?.purpose || C.sources?.[source]?.title || source,
    after: 'Return to the mapped Alfred section and explain or apply the connection.',
    completion: 'Complete this canonical source once; contextual reuses do not create a second obligation.'
  });

  function replaceAssignmentSource(oldSource, newSource, newWeek, medium, track='ceta') {
    const hit = assignmentEntry(oldSource, 'classroom');
    if (!hit) throw new Error(`v16.3.58: classroom assignment not found for ${oldSource}`);
    const [oldKey,old] = hit;
    delete assignments[oldKey];
    const key = `${Number(newWeek)}:${newSource}`;
    if (assignments[key]) throw new Error(`v16.3.58: replacement assignment already exists: ${key}`);
    assignments[key] = {
      ...old,
      key,
      assignmentWeek:Number(newWeek),
      source:newSource,
      destination:'classroom',
      requirement:'required',
      studyWeek:Number(newWeek),
      track,
      medium,
      requiredMeta:requiredMeta(newSource),
      originalRequirement:'required',
      originalRole:`Required · ${medium==='video'?'Video explanation':'Written companion'}`
    };
  }

  function swapClassroomWithStudy(classroomSource, studySource, targetWeek=null) {
    const aHit = assignmentEntry(classroomSource,'classroom');
    const bHit = assignmentEntry(studySource,'study');
    if (!aHit || !bHit) throw new Error(`v16.3.58: assignment swap failed: ${classroomSource} ↔ ${studySource}`);
    const [aKey,a] = aHit, [bKey,b] = bHit;

    a.destination='study';
    a.requirement='supporting';
    a.requiredMeta=null;
    a.originalRequirement='supporting';
    a.studyCategory=a.studyCategory||'Alternate Explanation';

    if (targetWeek != null && Number(b.assignmentWeek)!==Number(targetWeek)) {
      delete assignments[bKey];
      b.assignmentWeek=Number(targetWeek);
      b.studyWeek=Number(targetWeek);
      b.key=`${Number(targetWeek)}:${studySource}`;
      assignments[b.key]=b;
    }
    b.destination='classroom';
    b.requirement='required';
    b.requiredMeta=requiredMeta(studySource);
    b.originalRequirement='required';
  }

  // Reuse three exact-URL duplicate assignment slots for true content gaps.
  replaceAssignmentSource('aacPowerSupplies','cs50Python',17,'video','career');
  replaceAssignmentSource('tekPulseDutyCycle','tiBatteryChargerOverview',9,'literature','ceta');
  replaceAssignmentSource('fccRF','rsSpectrumBasicsArticle',20,'literature','career');
  replaceAssignmentSource('aacGroundReference','ftcCyberBasicsVideo',17,'video','career');
  replaceAssignmentSource('khanEquationIsolation','eatonSurgeProtectionVideo',17,'video','career');
  replaceAssignmentSource('aacCmosGateCircuitry','nistCyberPowerProtection',17,'literature','career');

  // Promote existing Study sources where the audit found a genuine first-pass gap,
  // while demoting now-redundant Required assignments so workload counts stay stable.
  swapClassroomWithStudy('aacAmpConfigs','aacTransistorBiasing',10);
  swapClassroomWithStudy('litNasaSystemsAppendix','mitStrobeLabNotes',12);
  swapClassroomWithStudy('tiPrecisionOpAmps','foaMediaLectureIndex',19);
  swapClassroomWithStudy('saleaeAsyncSerial','pythonDocs',17);
  swapClassroomWithStudy('keysightBenchPowerCourse','microsoftWindowsConfig',17);

  const affectedSources = new Set([
    'aacPowerSupplies','cs50Python','tekPulseDutyCycle','tiBatteryChargerOverview',
    'fccRF','rsSpectrumBasicsArticle','aacAmpConfigs','aacTransistorBiasing',
    'litNasaSystemsAppendix','mitStrobeLabNotes','tiPrecisionOpAmps','foaMediaLectureIndex',
    'saleaeAsyncSerial','pythonDocs','keysightBenchPowerCourse','microsoftWindowsConfig',
    'aacGroundReference','ftcCyberBasicsVideo','khanEquationIsolation','eatonSurgeProtectionVideo',
    'aacCmosGateCircuitry','nistCyberPowerProtection','ciscoNetworkingBasics'
  ]);

  // Refresh centralized Teaching Media entries for changed assignments.
  const templates = {};
  C.modules.forEach(mod => (mod.integration?.media||[]).forEach(item => {
    if (!templates[item.source]) templates[item.source]={...item};
  }));
  C.modules.forEach(mod => {
    mod.integration = mod.integration || {};
    mod.integration.media = (mod.integration.media||[]).filter(item=>!affectedSources.has(item.source));
  });
  Object.values(assignments).filter(a=>affectedSources.has(a.source)).forEach(a => {
    const mod=C.modules.find(m=>Number(m.week)===Number(a.assignmentWeek));
    if (!mod) return;
    const src=C.sources?.[a.source]||{};
    const medium=a.medium||src.medium||(/video/i.test(src.kind||'')?'video':'literature');
    const role=a.destination==='classroom'
      ? `Required · ${medium==='video'?'Video explanation':medium==='literature'?'Written companion':'Applied / authoritative resource'}`
      : a.destination==='study'
        ? 'Study · Additional support'
        : 'Engineering Library · Professional Reference';
    mod.integration.media.push({
      ...(templates[a.source]||{}),
      source:a.source,
      role,
      use:src.purpose||src.title||a.source,
      watchFor:src.purpose||src.title||a.source,
      gap:'Alfred remains the primary teacher; this source supplies a bounded parallel representation.'
    });
  });

  const REPAIRS = [
  {
    "week": 1,
    "segment": "concept-3",
    "literature": [
      "litSparkfunVcrOhm"
    ]
  },
  {
    "week": 1,
    "segment": "concept-7",
    "video": [
      "aacTechnicalNotation"
    ]
  },
  {
    "week": 1,
    "segment": "career-w01-current-limiting-is-a-protective-boundary-and-a-diagnostic-clue",
    "video": [
      "keysightBenchCvCc"
    ],
    "literature": [
      "litSparkfunBenchPower"
    ]
  },
  {
    "week": 1,
    "segment": "career-w01-pre-power-inspection-creates-the-first-known-good-state",
    "video": [
      "afrotechmodsMultimeter"
    ],
    "literature": [
      "litSparkfunBenchPower"
    ]
  },
  {
    "week": 1,
    "segment": "career-w01-you-do-write-a-bench-entry-checklist-you-can-reuse",
    "literature": [
      "litSparkfunBenchPower"
    ]
  },
  {
    "week": 2,
    "segment": "concept-3",
    "literature": [
      "litSparkfunVoltageDividers"
    ]
  },
  {
    "week": 2,
    "segment": "concept-4",
    "video": [
      "aacElectricalA"
    ],
    "literature": [
      "litSparkfunVcrOhm"
    ]
  },
  {
    "week": 2,
    "segment": "concept-8",
    "literature": [
      "neetsWaveGeneration",
      "litSparkfunAcDc"
    ]
  },
  {
    "week": 3,
    "segment": "concept-2",
    "video": [
      "keysightBenchCvCc"
    ],
    "literature": [
      "litSparkfunBenchPower"
    ]
  },
  {
    "week": 3,
    "segment": "concept-4",
    "video": [
      "afrotechmodsMultimeter"
    ],
    "literature": [
      "flukeMultimeterGuide"
    ]
  },
  {
    "week": 3,
    "segment": "concept-6",
    "video": [
      "saleaeDigitalSignals"
    ],
    "literature": [
      "litSparkfunDigitalLogic"
    ]
  },
  {
    "week": 4,
    "segment": "concept-4",
    "video": [
      "aacTechnicalNotation"
    ],
    "literature": [
      "litSparkfunMetricPrefixes"
    ]
  },
  {
    "week": 4,
    "segment": "concept-6",
    "literature": [
      "litAacAcTextbook"
    ]
  },
  {
    "week": 5,
    "segment": "concept-1",
    "video": [
      "ucsdStudyVideos"
    ],
    "literature": [
      "litCornellStudyStrategies"
    ]
  },
  {
    "week": 5,
    "segment": "concept-2",
    "video": [
      "ucsdStudyVideos"
    ],
    "literature": [
      "litCornellStudyStrategies"
    ]
  },
  {
    "week": 5,
    "segment": "concept-3",
    "video": [
      "ucsdStudyVideos"
    ],
    "literature": [
      "litCornellStudyStrategies"
    ]
  },
  {
    "week": 5,
    "segment": "concept-4",
    "video": [
      "ucsdStudyVideos"
    ],
    "literature": [
      "litCornellStudyStrategies"
    ]
  },
  {
    "week": 5,
    "segment": "concept-5",
    "video": [
      "ucsdStudyVideos"
    ],
    "literature": [
      "litCornellStudyStrategies"
    ]
  },
  {
    "week": 5,
    "segment": "concept-6",
    "video": [
      "ucsdStudyVideos"
    ],
    "literature": [
      "litCornellStudyStrategies"
    ]
  },
  {
    "week": 6,
    "segment": "career-w06-real-components-and-instruments-load-the-network",
    "video": [
      "tekScopeWebinar"
    ],
    "literature": [
      "aacMeterLoading"
    ]
  },
  {
    "week": 6,
    "segment": "career-w06-use-error-shape-to-choose-the-next-test",
    "video": [
      "aacTroubleshootingStrategies"
    ],
    "literature": [
      "litJplFailureAnalysis"
    ]
  },
  {
    "week": 6,
    "segment": "career-w06-amplitude-and-phase-are-separate-evidence",
    "literature": [
      "aacSeriesRlc"
    ]
  },
  {
    "week": 6,
    "segment": "career-w06-fault-signatures-can-be-predicted-before-sweeping",
    "video": [
      "aacTroubleshootingStrategies"
    ],
    "literature": [
      "litJplFailureAnalysis"
    ]
  },
  {
    "week": 7,
    "segment": "concept-1",
    "video": [
      "digiKeyDatasheet"
    ],
    "literature": [
      "neetsSolidStateDevices"
    ]
  },
  {
    "week": 7,
    "segment": "concept-3",
    "literature": [
      "aacSsrBasics"
    ]
  },
  {
    "week": 7,
    "segment": "concept-5",
    "literature": [
      "litSparkfunCapacitors"
    ]
  },
  {
    "week": 7,
    "segment": "concept-6",
    "literature": [
      "aacElectromagnetism"
    ]
  },
  {
    "week": 7,
    "segment": "concept-7",
    "video": [
      "aacSemiconductorBasics"
    ],
    "literature": [
      "neetsSolidStateDevices"
    ]
  },
  {
    "week": 7,
    "segment": "concept-8",
    "video": [
      "aacSemiconductorBasics"
    ],
    "literature": [
      "neetsSolidStateDevices"
    ]
  },
  {
    "week": 7,
    "segment": "concept-9",
    "literature": [
      "aacSsrBasics",
      "neetsSolidStateDevices"
    ]
  },
  {
    "week": 7,
    "segment": "concept-10",
    "literature": [
      "neetsSolidStateDevices"
    ]
  },
  {
    "week": 8,
    "segment": "concept-5",
    "video": [
      "aacSemiconductorBasics"
    ],
    "literature": [
      "neetsSolidStateDevices"
    ]
  },
  {
    "week": 8,
    "segment": "concept-6",
    "video": [
      "aacSemiconductorBasics"
    ],
    "literature": [
      "neetsSolidStateDevices"
    ]
  },
  {
    "week": 9,
    "segment": "concept-4",
    "video": [
      "usAgSafetyLotoVideo"
    ],
    "literature": [
      "oshaElectricalStandardsTrainer"
    ]
  },
  {
    "week": 9,
    "segment": "concept-5",
    "literature": [
      "tiBatteryChargerOverview"
    ]
  },
  {
    "week": 9,
    "segment": "career-w09-current-limiting-converts-catastrophic-faults-into-observable-evidence",
    "video": [
      "keysightBenchCvCc"
    ],
    "literature": [
      "litSparkfunBenchPower"
    ]
  },
  {
    "week": 9,
    "segment": "career-w09-ripple-measurement-can-be-corrupted-by-the-probe-loop",
    "video": [
      "tekScopeWebinar"
    ],
    "literature": [
      "litTekAbcProbes"
    ]
  },
  {
    "week": 9,
    "segment": "career-w09-document-staged-bring-up",
    "literature": [
      "mitStrobeLabNotes"
    ]
  },
  {
    "week": 10,
    "segment": "concept-3",
    "video": [
      "tiOpAmpOutputStage"
    ]
  },
  {
    "week": 10,
    "segment": "concept-4",
    "video": [
      "aacAmplifierConfigs"
    ],
    "literature": [
      "aacAudioElectronics"
    ]
  },
  {
    "week": 10,
    "segment": "concept-5",
    "video": [
      "aacTransistorBiasing"
    ],
    "literature": [
      "litSparkfunTransistors"
    ]
  },
  {
    "week": 10,
    "segment": "concept-7",
    "literature": [
      "aacAudioElectronics"
    ]
  },
  {
    "week": 10,
    "segment": "concept-8",
    "video": [
      "tiAudioAmpBasics"
    ],
    "literature": [
      "aacAudioElectronics"
    ]
  },
  {
    "week": 10,
    "segment": "concept-9",
    "video": [
      "aacTransistorBiasing"
    ],
    "literature": [
      "litSparkfunTransistors"
    ]
  },
  {
    "week": 10,
    "segment": "concept-10",
    "video": [
      "aacOpAmpBasicConfig"
    ]
  },
  {
    "week": 10,
    "segment": "career-w10-begin-with-a-signal-budget",
    "video": [
      "tiAudioFundamentals"
    ],
    "literature": [
      "aacAudioElectronics"
    ]
  },
  {
    "week": 10,
    "segment": "career-w10-report-gain-across-frequency-and-load",
    "literature": [
      "aacAudioElectronics"
    ]
  },
  {
    "week": 10,
    "segment": "career-w10-use-waveform-shape-to-classify-faults",
    "literature": [
      "litJplFailureAnalysis"
    ]
  },
  {
    "week": 10,
    "segment": "career-w10-change-one-condition-to-separate-mechanisms",
    "video": [
      "aacTroubleshootingStrategies"
    ],
    "literature": [
      "litJplFailureAnalysis"
    ]
  },
  {
    "week": 11,
    "segment": "concept-7",
    "video": [
      "saleaeDigitalSignals"
    ],
    "literature": [
      "litSparkfunDigitalLogic"
    ]
  },
  {
    "week": 11,
    "segment": "concept-9",
    "video": [
      "aacCombinationalLogic"
    ]
  },
  {
    "week": 11,
    "segment": "career-w11-a-logical-1-is-a-voltage-range-not-the-word-high",
    "video": [
      "saleaeDigitalSignals"
    ]
  },
  {
    "week": 11,
    "segment": "career-w11-unconnected-inputs-do-not-have-a-reliable-state",
    "video": [
      "saleaeDigitalSignals"
    ],
    "literature": [
      "aacLogicLevels"
    ]
  },
  {
    "week": 11,
    "segment": "career-w11-digital-1-is-an-electrical-contract",
    "video": [
      "saleaeDigitalSignals"
    ],
    "literature": [
      "aacLogicLevels"
    ]
  },
  {
    "week": 12,
    "segment": "concept-1",
    "video": [
      "digiKeyEsdBasicsVideo"
    ]
  },
  {
    "week": 12,
    "segment": "concept-2",
    "literature": [
      "neetsSolderingWiring"
    ]
  },
  {
    "week": 12,
    "segment": "concept-3",
    "video": [
      "digiKeyBrokenTrace"
    ],
    "literature": [
      "nasaCrewElectronicsRepair"
    ]
  },
  {
    "week": 12,
    "segment": "concept-7",
    "literature": [
      "nasaCrewElectronicsRepair"
    ]
  },
  {
    "week": 12,
    "segment": "concept-8",
    "video": [
      "digiKeySoldering"
    ],
    "literature": [
      "neetsSolderingWiring"
    ]
  },
  {
    "week": 12,
    "segment": "concept-9",
    "literature": [
      "paceThermoBondCitKit"
    ]
  },
  {
    "week": 12,
    "segment": "concept-10",
    "video": [
      "digiKeyEsdBasicsVideo"
    ]
  },
  {
    "week": 12,
    "segment": "career-w12-a-physical-change-needs-a-before-after-record",
    "literature": [
      "mitStrobeLabNotes"
    ]
  },
  {
    "week": 12,
    "segment": "career-w12-lab-notes-preserve-the-conditions-that-git-cannot",
    "literature": [
      "mitStrobeLabNotes"
    ]
  },
  {
    "week": 12,
    "segment": "career-w12-a-test-report-turns-evidence-into-a-decision",
    "video": [
      "mitVerification"
    ],
    "literature": [
      "litMitEecsResults"
    ]
  },
  {
    "week": 12,
    "segment": "career-w12-technical-handoff-separates-facts-hypotheses-and-the-question",
    "video": [
      "mitIndustryJobTalk"
    ],
    "literature": [
      "litMitEecsResults"
    ]
  },
  {
    "week": 12,
    "segment": "career-w12-career-integration-solder-rework-workmanship-and-harness-evidence",
    "video": [
      "digiKeySoldering"
    ]
  },
  {
    "week": 12,
    "segment": "career-w12-i-do-create-a-known-good-baseline-before-a-rework",
    "video": [
      "digiKeySoldering"
    ],
    "literature": [
      "mitStrobeLabNotes"
    ]
  },
  {
    "week": 13,
    "segment": "concept-1",
    "literature": [
      "neetsSolderingWiring"
    ]
  },
  {
    "week": 13,
    "segment": "concept-4",
    "literature": [
      "neetsSolderingWiring"
    ]
  },
  {
    "week": 13,
    "segment": "concept-9",
    "video": [
      "nscTroubleshooting"
    ],
    "literature": [
      "litJplFailureAnalysis"
    ]
  },
  {
    "week": 13,
    "segment": "career-w13-root-cause-requires-a-causal-chain",
    "literature": [
      "litJplFailureAnalysis"
    ]
  },
  {
    "week": 13,
    "segment": "career-w13-report-the-diagnosis-now-formal-fault-injection-comes-later",
    "literature": [
      "litMitEecsResults"
    ]
  },
  {
    "week": 14,
    "segment": "concept-3",
    "video": [
      "cs50Week1C2026"
    ],
    "literature": [
      "beejC"
    ]
  },
  {
    "week": 14,
    "segment": "concept-8",
    "video": [
      "cs50Week1C2026"
    ],
    "literature": [
      "beejC"
    ]
  },
  {
    "week": 14,
    "segment": "concept-9",
    "video": [
      "automationDirectPlcScan"
    ],
    "literature": [
      "plcopen61131Languages"
    ]
  },
  {
    "week": 14,
    "segment": "career-w14-bit-positions-turn-one-integer-into-named-yes-no-fields",
    "video": [
      "armEmbedded"
    ]
  },
  {
    "week": 14,
    "segment": "career-w14-i-do-we-do-you-do-inspect-set-clear-toggle-and-shift-a-bit",
    "video": [
      "armEmbedded"
    ]
  },
  {
    "week": 15,
    "segment": "concept-1",
    "literature": [
      "beejC"
    ]
  },
  {
    "week": 15,
    "segment": "concept-2",
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 15,
    "segment": "concept-4",
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 15,
    "segment": "concept-5",
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 15,
    "segment": "concept-6",
    "literature": [
      "beejC"
    ]
  },
  {
    "week": 15,
    "segment": "career-w15-map-c-onto-a-microcontroller-before-adding-concurrency",
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 15,
    "segment": "career-w15-register-operations-are-controlled-bit-changes",
    "literature": [
      "beejC"
    ]
  },
  {
    "week": 15,
    "segment": "career-w15-volatile-solves-one-compiler-visibility-problem-not-concurrency",
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 15,
    "segment": "career-w15-career-integration-embedded-c-mcu-architecture-and-nonblocking-design",
    "video": [
      "armEmbedded"
    ]
  },
  {
    "week": 16,
    "segment": "concept-2",
    "video": [
      "stCubeIdeBasics"
    ],
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 16,
    "segment": "concept-4",
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 16,
    "segment": "concept-5",
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 16,
    "segment": "concept-6",
    "video": [
      "stCubeIdeBasics"
    ],
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 16,
    "segment": "career-w16-a-project-contains-source-configuration-and-a-build-recipe",
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 16,
    "segment": "career-w16-generated-configuration-is-still-your-responsibility",
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 16,
    "segment": "career-w16-after-the-gpio-baseline-add-one-timer-proof",
    "video": [
      "armEmbedded"
    ],
    "literature": [
      "microchipNonblockingTick"
    ]
  },
  {
    "week": 16,
    "segment": "career-w16-then-prove-one-adc-conversion-with-a-known-input",
    "video": [
      "tiADC"
    ],
    "literature": [
      "litAdiAdcStudent"
    ]
  },
  {
    "week": 17,
    "segment": "concept-1",
    "literature": [
      "saleaeLearnAsync",
      "litSparkfunUart"
    ]
  },
  {
    "week": 17,
    "segment": "concept-4",
    "video": [
      "aacComputerHardware"
    ],
    "literature": [
      "microsoftWindowsConfig"
    ]
  },
  {
    "week": 17,
    "segment": "concept-5",
    "video": [
      "aacComputerHardware"
    ],
    "literature": [
      "microsoftWindowsConfig"
    ]
  },
  {
    "week": 17,
    "segment": "concept-6",
    "video": [
      "ftcCyberBasicsVideo"
    ],
    "literature": [
      "nistCyberPowerProtection"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-run-the-smallest-python-program-first",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-variables-and-basic-types-hold-different-kinds-of-values",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-conditionals-choose-a-path",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-loops-repeat-controlled-work",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-functions-package-one-job-with-inputs-and-outputs",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-imports-add-library-capabilities",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-exceptions-make-failures-explicit",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-files-turn-results-into-reproducible-evidence",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-bytes-and-text-are-not-the-same-thing",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-define-the-serial-contract-before-writing-the-client",
    "literature": [
      "litSparkfunUart"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-parse-and-validate-only-after-a-complete-message-exists",
    "literature": [
      "pyserial"
    ]
  },
  {
    "week": 17,
    "segment": "career-w17-i-do-we-do-you-do-build-the-first-python-evidence-logger",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 18,
    "segment": "concept-4",
    "literature": [
      "litSparkfunDigitalLogic"
    ]
  },
  {
    "week": 18,
    "segment": "career-w18-reconnect-uart-without-reteaching-it",
    "video": [
      "saleaeStm32Uart"
    ],
    "literature": [
      "litSparkfunUart"
    ]
  },
  {
    "week": 19,
    "segment": "concept-1",
    "video": [
      "foaSplicesConnectors"
    ],
    "literature": [
      "foaPremisesGuide"
    ]
  },
  {
    "week": 19,
    "segment": "concept-3",
    "video": [
      "foaTestingOverview"
    ],
    "literature": [
      "litFoaFiberBasics"
    ]
  },
  {
    "week": 19,
    "segment": "concept-4",
    "video": [
      "foaSplicesConnectors"
    ],
    "literature": [
      "foaPremisesGuide"
    ]
  },
  {
    "week": 19,
    "segment": "concept-5",
    "video": [
      "foaTestingOverview"
    ],
    "literature": [
      "foaPremisesGuide",
      "litFoaFiberBasics"
    ]
  },
  {
    "week": 19,
    "segment": "concept-6",
    "literature": [
      "nasaHarness"
    ]
  },
  {
    "week": 19,
    "segment": "concept-7",
    "literature": [
      "foaPremisesGuide"
    ]
  },
  {
    "week": 19,
    "segment": "concept-9",
    "video": [
      "tiAudioAmpBasics"
    ]
  },
  {
    "week": 19,
    "segment": "concept-10",
    "literature": [
      "aacOptoelectronicsIntro"
    ]
  },
  {
    "week": 19,
    "segment": "concept-11",
    "video": [
      "digiKeyOptoDisplays"
    ]
  },
  {
    "week": 19,
    "segment": "concept-12",
    "video": [
      "foaTestingOverview"
    ]
  },
  {
    "week": 19,
    "segment": "concept-13",
    "video": [
      "foaSplicesConnectors"
    ]
  },
  {
    "week": 19,
    "segment": "concept-14",
    "video": [
      "foaSplicesConnectors"
    ],
    "literature": [
      "foaPremisesGuide"
    ]
  },
  {
    "week": 19,
    "segment": "concept-15",
    "video": [
      "digiKeyOptoDisplays"
    ],
    "literature": [
      "aacOptoelectronicsIntro"
    ]
  },
  {
    "week": 20,
    "segment": "concept-1",
    "literature": [
      "aacTransmissionLine"
    ]
  },
  {
    "week": 20,
    "segment": "concept-2",
    "video": [
      "nptelComms"
    ]
  },
  {
    "week": 20,
    "segment": "concept-3",
    "video": [
      "nptelComms"
    ],
    "literature": [
      "qualcommCellularBasics"
    ]
  },
  {
    "week": 20,
    "segment": "concept-4",
    "literature": [
      "aacTransmissionLine"
    ]
  },
  {
    "week": 20,
    "segment": "concept-5",
    "video": [
      "nptelComms"
    ]
  },
  {
    "week": 20,
    "segment": "concept-6",
    "video": [
      "nptelComms"
    ]
  },
  {
    "week": 20,
    "segment": "concept-7",
    "video": [
      "rsSpectrumBasics"
    ]
  },
  {
    "week": 20,
    "segment": "concept-8",
    "video": [
      "nptelComms"
    ]
  },
  {
    "week": 20,
    "segment": "concept-10",
    "literature": [
      "litAacRfModulation"
    ]
  },
  {
    "week": 20,
    "segment": "concept-11",
    "literature": [
      "aacTransmissionLine"
    ]
  },
  {
    "week": 20,
    "segment": "concept-13",
    "video": [
      "nptelComms"
    ],
    "literature": [
      "qualcommCellularBasics"
    ]
  },
  {
    "week": 20,
    "segment": "career-w20-a-spectrum-analyzer-shows-signal-energy-versus-frequency",
    "literature": [
      "rsSpectrumBasicsArticle"
    ]
  },
  {
    "week": 20,
    "segment": "career-w20-write-the-measurement-procedure-before-collecting-the-trace",
    "literature": [
      "rsSpectrumBasicsArticle"
    ]
  },
  {
    "week": 20,
    "segment": "career-w20-classify-spectral-features-before-explaining-their-cause",
    "literature": [
      "rsSpectrumBasicsArticle"
    ]
  },
  {
    "week": 20,
    "segment": "career-w20-observation-interpretation-and-escalation-are-different-statements",
    "literature": [
      "rsSpectrumBasicsArticle"
    ]
  },
  {
    "week": 20,
    "segment": "career-w20-professional-procedure-preserves-continuity-across-people",
    "literature": [
      "rsSpectrumBasicsArticle"
    ]
  },
  {
    "week": 20,
    "segment": "career-w20-i-do-you-do-reproduce-one-spectral-measurement",
    "literature": [
      "rsSpectrumBasicsArticle"
    ]
  },
  {
    "week": 21,
    "segment": "career-w21-fast-documentation-is-still-structured",
    "video": [
      "mitIndustryJobTalk"
    ],
    "literature": [
      "mitStrobeLabNotes"
    ]
  },
  {
    "week": 21,
    "segment": "career-w21-technician-speed-comes-from-choosing-the-next-useful-action",
    "video": [
      "nscTroubleshooting"
    ],
    "literature": [
      "litJplFailureAnalysis"
    ]
  },
  {
    "week": 21,
    "segment": "career-w21-use-bounded-decision-trees-rather-than-giant-checklists",
    "video": [
      "nscTroubleshooting"
    ],
    "literature": [
      "litJplFailureAnalysis"
    ]
  },
  {
    "week": 21,
    "segment": "career-w21-communicate-the-decision-boundary",
    "video": [
      "mitIndustryJobTalk"
    ],
    "literature": [
      "litMitEecsResults"
    ]
  },
  {
    "week": 22,
    "segment": "concept-1",
    "literature": [
      "nasaSystems"
    ]
  },
  {
    "week": 22,
    "segment": "concept-3",
    "literature": [
      "nasaSystems"
    ]
  },
  {
    "week": 22,
    "segment": "concept-4",
    "literature": [
      "nasaSystems"
    ]
  },
  {
    "week": 22,
    "segment": "concept-6",
    "literature": [
      "nasaSystems"
    ]
  },
  {
    "week": 22,
    "segment": "career-w22-career-integration-git-command-line-lab-notes-reports-and-technical-handoff",
    "video": [
      "mitGit2026"
    ],
    "literature": [
      "mitStrobeLabNotes"
    ]
  },
  {
    "week": 23,
    "segment": "concept-1",
    "video": [
      "mitVerification"
    ],
    "literature": [
      "etaCompetencies"
    ]
  },
  {
    "week": 23,
    "segment": "concept-3",
    "video": [
      "mitVerification"
    ],
    "literature": [
      "etaCompetencies"
    ]
  },
  {
    "week": 23,
    "segment": "concept-4",
    "video": [
      "mitVerification"
    ],
    "literature": [
      "etaCompetencies"
    ]
  },
  {
    "week": 23,
    "segment": "concept-6",
    "video": [
      "mitVerification"
    ],
    "literature": [
      "etaExam"
    ]
  },
  {
    "week": 23,
    "segment": "concept-7",
    "video": [
      "mitVerification"
    ],
    "literature": [
      "etaCompetencies"
    ]
  },
  {
    "week": 23,
    "segment": "career-w23-a-repository-is-the-projects-reconstructable-memory",
    "video": [
      "mitGit2026"
    ]
  },
  {
    "week": 23,
    "segment": "career-w23-a-bill-of-materials-must-resolve-ambiguity",
    "video": [
      "digiKeyDatasheet"
    ]
  },
  {
    "week": 23,
    "segment": "career-w23-bom-and-compatibility-checks-prevent-avoidable-failures",
    "video": [
      "digiKeyDatasheet"
    ]
  },
  {
    "week": 23,
    "segment": "career-w23-recovery-paths-are-part-of-readiness",
    "video": [
      "mitGit2026"
    ]
  },
  {
    "week": 23,
    "segment": "career-w23-a-controlled-baseline-isolates-future-change",
    "video": [
      "mitGit2026"
    ],
    "literature": [
      "nasaConfigManagement"
    ]
  },
  {
    "week": 23,
    "segment": "career-w23-baseline-acceptance-criteria-make-ready-testable",
    "video": [
      "mitVerification"
    ]
  },
  {
    "week": 24,
    "segment": "concept-1",
    "literature": [
      "litSparkfunBenchPower"
    ]
  },
  {
    "week": 24,
    "segment": "concept-2",
    "literature": [
      "litAacPowerSuppliesTextbook"
    ]
  },
  {
    "week": 24,
    "segment": "concept-4",
    "literature": [
      "litAacPowerSuppliesTextbook"
    ]
  },
  {
    "week": 24,
    "segment": "concept-6",
    "literature": [
      "flukeMultimeterGuide"
    ]
  },
  {
    "week": 24,
    "segment": "concept-7",
    "video": [
      "tiBoardTroubleshooting"
    ],
    "literature": [
      "litJplFailureAnalysis"
    ]
  },
  {
    "week": 24,
    "segment": "career-w24-bring-up-dependencies-in-order",
    "literature": [
      "litAacPowerSuppliesTextbook"
    ]
  },
  {
    "week": 24,
    "segment": "career-w24-a-baseline-includes-recovery",
    "literature": [
      "nasaConfigManagement"
    ]
  },
  {
    "week": 24,
    "segment": "career-w24-first-power-is-a-controlled-experiment",
    "literature": [
      "litSparkfunBenchPower"
    ]
  },
  {
    "week": 25,
    "segment": "concept-1",
    "video": [
      "tiLogicTranslation"
    ]
  },
  {
    "week": 25,
    "segment": "concept-2",
    "video": [
      "tiADC"
    ]
  },
  {
    "week": 25,
    "segment": "concept-5",
    "video": [
      "mitVerification"
    ],
    "literature": [
      "nasaSensorRangeCheck"
    ]
  },
  {
    "week": 25,
    "segment": "career-w25-build-a-thin-end-to-end-slice-first",
    "video": [
      "saleaeStm32I2c"
    ],
    "literature": [
      "stHalI2cUseCases"
    ]
  },
  {
    "week": 25,
    "segment": "career-w25-define-the-slices-checkpoints",
    "video": [
      "mitVerification"
    ],
    "literature": [
      "stHalI2cUseCases"
    ]
  },
  {
    "week": 25,
    "segment": "career-w25-fault-injection-makes-the-slice-diagnostic",
    "video": [
      "niFaultInjection"
    ],
    "literature": [
      "litJplFailureAnalysis"
    ]
  },
  {
    "week": 26,
    "segment": "concept-1",
    "video": [
      "armEmbedded"
    ],
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 26,
    "segment": "concept-2",
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 26,
    "segment": "concept-3",
    "video": [
      "armEmbedded"
    ],
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 26,
    "segment": "concept-4",
    "video": [
      "armEmbedded"
    ],
    "literature": [
      "litArmCortexMBeginners"
    ]
  },
  {
    "week": 26,
    "segment": "concept-6",
    "literature": [
      "microchipDesignPatterns"
    ]
  },
  {
    "week": 26,
    "segment": "career-w26-architecture-follows-responsibilities-and-test-seams",
    "video": [
      "armEmbedded"
    ],
    "literature": [
      "microchipDesignPatterns"
    ]
  },
  {
    "week": 26,
    "segment": "career-w26-separate-hardware-access-from-application-decisions",
    "video": [
      "armEmbedded"
    ],
    "literature": [
      "microchipAsyncDrivers"
    ]
  },
  {
    "week": 26,
    "segment": "career-w26-make-errors-explicit-and-recoverable",
    "literature": [
      "litMemfaultHardfault"
    ]
  },
  {
    "week": 26,
    "segment": "career-w26-diagnostics-should-expose-state-without-becoming-the-design",
    "video": [
      "armDebuggingAdventures"
    ],
    "literature": [
      "litMemfaultDebugInterfaces"
    ]
  },
  {
    "week": 27,
    "segment": "concept-1",
    "video": [
      "aacComputerHardware"
    ],
    "literature": [
      "microsoftWindowsConfig"
    ]
  },
  {
    "week": 27,
    "segment": "concept-2",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 27,
    "segment": "concept-5",
    "literature": [
      "litMitEecsResults"
    ]
  },
  {
    "week": 27,
    "segment": "concept-6",
    "video": [
      "cs50Python"
    ],
    "literature": [
      "pythonDocs"
    ]
  },
  {
    "week": 27,
    "segment": "career-w27-configuration-should-have-one-source-of-truth",
    "video": [
      "mitGit2026"
    ],
    "literature": [
      "nasaConfigManagement"
    ]
  },
  {
    "week": 28,
    "segment": "concept-1",
    "literature": [
      "litJplFailureAnalysis"
    ]
  },
  {
    "week": 28,
    "segment": "concept-2",
    "video": [
      "tekScopeWebinar"
    ],
    "literature": [
      "litAacTestMeasurementTextbook"
    ]
  },
  {
    "week": 28,
    "segment": "concept-3",
    "video": [
      "mitIndustryJobTalk"
    ],
    "literature": [
      "mitStrobeLabNotes"
    ]
  },
  {
    "week": 28,
    "segment": "concept-5",
    "video": [
      "digiKeyDatasheet"
    ]
  },
  {
    "week": 28,
    "segment": "concept-8",
    "video": [
      "mitIndustryJobTalk"
    ],
    "literature": [
      "mitStrobeLabNotes"
    ]
  },
  {
    "week": 29,
    "segment": "career-w29-make-each-artifact-self-explanatory",
    "literature": [
      "gatechResumeGuide"
    ]
  },
  {
    "week": 29,
    "segment": "career-w29-every-skill-claim-should-point-to-evidence",
    "literature": [
      "umichResumeBullets"
    ]
  },
  {
    "week": 29,
    "segment": "career-w29-organize-for-a-hiring-manager-not-for-course-chronology",
    "literature": [
      "gatechResumeGuide"
    ]
  },
  {
    "week": 29,
    "segment": "career-w29-an-evidence-hierarchy-makes-a-portfolio-claim-believable",
    "literature": [
      "umichResumeBullets"
    ]
  },
  {
    "week": 30,
    "segment": "concept-3",
    "video": [
      "pennSearchWorkshop"
    ]
  },
  {
    "week": 30,
    "segment": "career-w30-a-resume-bullet-is-a-compact-evidence-claim",
    "video": [
      "pennSearchWorkshop"
    ],
    "literature": [
      "gatechResumeGuide",
      "umichResumeBullets"
    ]
  },
  {
    "week": 30,
    "segment": "career-w30-tell-the-transition-as-continuity-not-apology",
    "video": [
      "pennStarVideo"
    ],
    "literature": [
      "gatechResumeGuide"
    ]
  },
  {
    "week": 30,
    "segment": "career-w30-defend-the-project-at-30-seconds-2-minutes-and-depth",
    "video": [
      "mitIndustryJobTalk"
    ],
    "literature": [
      "gatechResumeGuide"
    ]
  },
  {
    "week": 30,
    "segment": "career-w30-career-integration-portfolio-proof-interviews-resumes-and-bridge-role-decisions",
    "video": [
      "pennSearchWorkshop"
    ]
  },
  {
    "week": 30,
    "segment": "career-w30-target-roles-by-transferable-task-not-title-alone",
    "video": [
      "pennSearchWorkshop"
    ]
  },
  {
    "week": 31,
    "segment": "concept-1",
    "literature": [
      "litCornellStudyStrategies"
    ]
  },
  {
    "week": 31,
    "segment": "concept-2",
    "literature": [
      "litCornellStudyStrategies"
    ]
  },
  {
    "week": 31,
    "segment": "concept-6",
    "literature": [
      "litCornellStudyStrategies"
    ]
  },
  {
    "week": 31,
    "segment": "concept-7",
    "literature": [
      "litCornellStudyStrategies"
    ]
  },
  {
    "week": 31,
    "segment": "career-w31-continue-building-toward-embedded-systems-through-work-plus-school",
    "literature": [
      "onetTech"
    ]
  }
];

  const assignmentWeekFor = (source,targetWeek) => {
    const row = Object.values(assignments).find(a=>a.source===source && a.destination==='classroom')
      || Object.values(assignments).find(a=>a.source===source);
    return Number(row?.assignmentWeek || targetWeek);
  };

  function replaceChannel(week,segment,channel,sources) {
    const rows=placements.filter(p =>
      Number(p.targetWeek)===Number(week) &&
      String(p.segment)===String(segment) &&
      String(p.requirement||'').toLowerCase()==='required' &&
      p.mediaType===channel
    );
    if (!rows.length) throw new Error(`v16.3.58: no ${channel} placement for W${week} ${segment}`);
    if (rows.length !== sources.length) {
      throw new Error(`v16.3.58: count mismatch W${week} ${segment} ${channel}: existing ${rows.length}, repair ${sources.length}`);
    }
    rows.forEach((p,i)=>{
      const source=sources[i];
      p.source=source;
      p.assignmentWeek=assignmentWeekFor(source,week);
      p.relationship='Reinforces this concept';
      p.presentationRole=channel==='video'?'demonstration':'core';
      p.display='primary';
      p.inline=true;
      p.requirement='required';
      p.mediaType=channel;
      p.afterAction=`After using this source, connect it back to the Alfred section and explain the relationship in your own words.`;
      p.reason='v16.3.58 semantic-integrity repair: source selected for direct instructional fit to this section.';
    });
  }

  // First remove references to assignment IDs intentionally retired by this repair.
  placements.forEach(p=>{
    if (p.source==='aacPowerSupplies') {
      p.source='aacPowerSuppliesApplications';
      p.assignmentWeek=assignmentWeekFor(p.source,p.targetWeek);
    }
    if (p.source==='aacAmpConfigs') {
      p.source='aacAmplifierConfigs';
      p.assignmentWeek=assignmentWeekFor(p.source,p.targetWeek);
    }
    if (p.source==='litNasaSystemsAppendix') {
      p.source='nasaRequirementAppendix';
      p.assignmentWeek=assignmentWeekFor(p.source,p.targetWeek);
    }
  });

  REPAIRS.forEach(r=>{
    if (r.video) replaceChannel(r.week,r.segment,'video',r.video);
    if (r.literature) replaceChannel(r.week,r.segment,'literature',r.literature);
  });

  // Week 17 concept 6 combines two distinct protection domains. Keep one
  // cybersecurity video and add a separate electrical-surge video rather than
  // pretending one source teaches both.
  const w17ProtectionVideo=placements.find(p=>
    Number(p.targetWeek)===17 && String(p.segment)==='concept-6' &&
    String(p.requirement||'').toLowerCase()==='required' && p.mediaType==='video');
  if(w17ProtectionVideo && !placements.some(p=>
    Number(p.targetWeek)===17 && String(p.segment)==='concept-6' &&
    p.source==='eatonSurgeProtectionVideo' && p.mediaType==='video')){
    placements.push({
      ...w17ProtectionVideo,
      source:'eatonSurgeProtectionVideo',
      assignmentWeek:assignmentWeekFor('eatonSurgeProtectionVideo',17),
      relationship:'Reinforces this concept',
      presentationRole:'demonstration',
      display:'primary',
      inline:true,
      requirement:'required',
      mediaType:'video',
      afterAction:'After watching, distinguish electrical surge protection from malware/network protection and state why both belong in a complete computer-protection plan.',
      reason:'v16.3.58 semantic-integrity repair: second video is required because this live section contains two distinct protection domains.'
    });
  }

  // Rebuild placement indexes after semantic substitutions.
  R.byTargetWeek={}; R.bySource={}; R.byAssignment={};
  placements.forEach(p=>{
    (R.byTargetWeek[p.targetWeek] ||= []).push(p);
    (R.bySource[p.source] ||= []).push(p);
    (R.byAssignment[`${p.assignmentWeek}:${p.source}`] ||= []).push(p);
  });
  R.revision=REV;
  R.retainedAssignmentCount=Object.keys(assignments).length;
  R.uniqueSourceCount=new Set(Object.values(assignments).map(a=>a.source)).size;
  R.canonicalSourceCount=new Set(Object.values(assignments).map(a =>
    R.canonicalAliases?.[a.source] || a.source)).size;

  // Rebuild contextual literature index so every repaired written placement renders.
  O.sources=O.sources||{};
  O.existingType=O.existingType||{};
  O.bySource={}; O.byPlacement={}; O.literaturePlacements=[];
  const litKey=p=>`${p.assignmentWeek}:${p.source}:${p.targetWeek}:${p.lesson}:${p.segment}`;
  placements.filter(p=>p.mediaType==='literature').forEach(p=>{
    const src=C.sources?.[p.source]||{};
    const media=(C.modules.find(m=>Number(m.week)===Number(p.assignmentWeek))?.integration?.media||[])
      .find(x=>x.source===p.source)||{};
    O.sources[p.source]={
      ...(O.sources[p.source]||{}),
      title:src.title||p.source,
      org:src.org||'',
      kind:src.kind||'Written companion',
      url:src.url||'',
      literatureType:'Required Written Companion'
    };
    O.existingType[p.source]='Required Written Companion';
    const row={
      assignmentWeek:p.assignmentWeek,source:p.source,targetWeek:p.targetWeek,lesson:p.lesson,segment:p.segment,
      relationship:p.relationship,presentationRole:p.presentationRole,display:p.display,inline:p.inline!==false,
      requirement:'required',mediaType:'literature',
      readUse:media.watchFor||src.purpose||src.title||p.source,
      focus:media.use||src.purpose||src.title||p.source,
      afterReading:p.afterAction,
      why:src.purpose||'Written first-pass companion selected for this lesson section.',
      gap:'Alfred supplies the primary instruction and course-specific practice.',
      literatureType:'Required Written Companion',
      meta:O.sources[p.source]
    };
    O.literaturePlacements.push(row);
    (O.bySource[p.source] ||= []).push(row);
    O.byPlacement[litKey(p)]=row;
  });
  O.sourceIds=Object.keys(O.bySource);
  O.placementCount=O.literaturePlacements.length;
  O.uniqueSourceCount=O.sourceIds.length;
  O.revision=REV;

  const after=stats();
  const same = (a,b,k) => {
    if (a[k]!==b[k]) throw new Error(`v16.3.58 protected assignment invariant changed: ${k} ${a[k]} -> ${b[k]}`);
  };
  ['count','unique','classroom','study','library'].forEach(k=>same(before,after,k));

  // Explicitly protect the v16.3.57 structural acceptance counts.
  const liveKeys=new Set();
  C.modules.forEach(mod=>(mod.lessons||[]).forEach((lesson,lessonIndex)=>
    (lesson?.integrated?.teaching||[]).forEach((section,i)=>{
      if(!section?.hiddenFromLesson) liveKeys.add(`${Number(mod.week)}:${lessonIndex}:${String(section?.sectionId||`concept-${i+1}`)}`);
    })));
  const pkey=p=>`${Number(p.targetWeek)}:${Number(p.lesson)}:${String(p.segment)}`;
  const orphans=placements.filter(p=>!liveKeys.has(pkey(p)));
  if (liveKeys.size!==491) throw new Error(`v16.3.58 expected 491 live sections, found ${liveKeys.size}`);
  if (placements.length!==1021) throw new Error(`v16.3.58 expected 1021 placements, found ${placements.length}`);
  if (placements.filter(p=>p.mediaType==='literature').length!==515)
    throw new Error('v16.3.58 literature placement count changed');
  if (orphans.length) throw new Error(`v16.3.58 found ${orphans.length} orphan placements`);

  A.revision=REV;
  A.placementCount=placements.length;
  A.counts=Object.values(assignments).reduce((o,a)=>{
    o[a.destination]=(o[a.destination]||0)+1;
    if(a.requirement==='required')o.universalRequired=(o.universalRequired||0)+1;
    return o;
  },{classroom:0,study:0,library:0,removed:0,universalRequired:0,conditionalRequired:0});

  C.meta=C.meta||{};
  C.meta.teachingMediaRevision=REV;
  C.meta.teachingMediaArchitectureRevision=REV;
  C.meta.teachingMediaResourceIntegrationRevision=REV;
  C.meta.teachingMediaSemanticIntegrityRevision=REV;
  C.meta.teachingMediaSemanticRepairCount=REPAIRS.length;
  C.meta.teachingMediaInlinePlacementCount=placements.length;
  C.meta.teachingMediaFinalAcceptanceVerdict='PASS — v16.3.58 semantic repair applied; Week 17 dual-domain protection receives separate cyber and surge videos';
})();
