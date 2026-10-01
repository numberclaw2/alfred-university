/* AU-ESET 301 — v16.3.90-H4 Week 3 multimodal content-quality layer
   Scope: Week 3 Learn content only. Runs after the H3 Week 3 acceptance layer.
   Purpose: every CETa and Career teaching page gets a deliberate mix of Alfred
   instruction + source-authentic visual + bounded demonstration/video + bounded
   written source + retrieval/application, without expanding Week 3 into a
   specialist-instrument survey.
*/
(()=>{
  'use strict';
  if(window.__ALFRED_WEEK3_MEDIA_QUALITY_16390_H4__) return;
  window.__ALFRED_WEEK3_MEDIA_QUALITY_16390_H4__=true;

  const C=window.ALFRED_CURRICULUM;
  if(!C?.modules?.length) return;
  const W=C.modules.find(m=>Number(m.week)===3);
  if(!W?.lessons?.length) return;

  const REV='2026-10-01-v16.3.90-H4-week3-multimodal-content-quality';
  const ceta=W.lessons.find(l=>l.track==='CETa')||W.lessons[0];
  const career=W.lessons.find(l=>l.track==='Career')||W.lessons[1];
  const expectedCeta=[
    'w03-question-before-instrument',
    'w03-meter-operation-construction',
    'w03-dmm-modes-connections',
    'w03-supply-cv-cc',
    'w03-scope-voltage-over-time',
    'w03-probe-reference-discipline',
    'w03-trigger-stable-display',
    'w03-measurement-limits'
  ];
  const expectedCareer=[
    'career-w03-question-first-selection',
    'career-w03-static-evidence',
    'career-w03-known-waveform-first',
    'career-w03-reference-loading-bandwidth',
    'career-w03-discriminating-measurements',
    'career-w03-reproducible-evidence',
    'career-w03-test-asset-validity',
    'career-w03-measurement-capability-decision'
  ];

  // Guard against silently binding media to the wrong instructional structure.
  const teachingIds=lesson=>(lesson?.integrated?.teaching||[]).map(x=>x?.sectionId).filter(Boolean);
  const same=(a,b)=>a.length===b.length&&a.every((x,i)=>x===b[i]);
  if(!same(teachingIds(ceta),expectedCeta)||!same(teachingIds(career),expectedCareer)){
    C.week3MediaQuality={revision:REV,status:'BLOCKED_SECTION_ID_DRIFT'};
    return;
  }

  C.sources=C.sources||{};
  Object.assign(C.sources,{
    h4TekProbeCompensation:{
      title:'How to Compensate a Passive Probe',org:'Tektronix',kind:'Manufacturer how-to video',
      url:'https://www.tek.com/en/video/how-to/how-to-compensate-a-passive-probe'
    },
    h4TekProbeLoading:{
      title:'How Oscilloscope Probes Affect Your Measurement',org:'Tektronix',kind:'Manufacturer application note',
      url:'https://www.tek.com/en/documents/application-note/how-oscilloscope-probes-affect-your-measurement'
    },
    h4KeysightCvCcReading:{
      title:'4 Ways to Build Your Power Supply Skill Set — Tip 1: Understanding CV and CC',org:'Keysight Technologies',kind:'Manufacturer eBook',
      url:'https://www.keysight.com/us/en/assets/7018-06003/ebooks/5992-2716.pdf'
    },
    h4KeysightMeasurementUncertaintyVideo:{
      title:'Measurement Uncertainty: How Accurate?',org:'Keysight Technologies',kind:'Manufacturer calibration/metrology video',
      url:'https://www.youtube.com/watch?v=p_BHEWzP11A'
    },
    h4KeysightTraceabilityVideo:{
      title:'Traceability: Why Is It Important?',org:'Keysight Technologies',kind:'Manufacturer calibration/metrology video',
      url:'https://www.youtube.com/watch?v=fvb2lDAjXTI'
    },
    h4KeysightOutOfCalVideo:{
      title:'Out-of-Cal Instruments Cause Bad Pass/Fail Decisions',org:'Keysight Technologies',kind:'Manufacturer calibration case-study video',
      url:'https://www.youtube.com/watch?v=wGss-Elbf8E'
    },
    h4NistTraceability:{
      title:'Metrological Traceability — FAQ and Policy',org:'National Institute of Standards and Technology (NIST)',kind:'Government metrology reference',
      url:'https://www.nist.gov/metrology/metrological-traceability'
    },
    h4NistMeasurementUncertainty:{
      title:'Measurement Uncertainty',org:'National Institute of Standards and Technology (NIST)',kind:'Government measurement-science reference',
      url:'https://www.nist.gov/itl/sed/topic-areas/measurement-uncertainty'
    }
  });

  W.integration=W.integration||{};
  W.integration.media=Array.isArray(W.integration.media)?W.integration.media:[];
  const mediaBySource=new Map(W.integration.media.map(x=>[x.source,x]));
  const mediaDefs={
    afrotechmodsMultimeter:{
      role:'Required · Beginner multimeter demonstration',
      use:'Use the demonstrated meter controls and connection changes to turn Alfred’s DMM rules into something you can picture on a real bench.',
      watchFor:'Use only the portions that demonstrate selector/function choice, input jacks, voltage across two points, de-energized resistance/continuity, and current through a series path. Stop when the video moves beyond the Week 3 question you are answering.',
      gap:'Alfred controls safety boundaries, expected-value reasoning, and the exact Week 3 decision sequence.'
    },
    litAacTestMeasurementTextbook:{
      role:'Required · Companion measurement reading',
      use:'Use only the meter/test-measurement topic that matches the current Alfred page.',
      watchFor:'Read the bounded Test & Measurement entry that supports the current page; do not treat the full collection as Week 3 homework.',
      gap:'Alfred remains the primary teacher and defines the Week 3 scope and technician decision.'
    },
    flukeMultimeterGuide:{
      role:'Required · Manufacturer multimeter reference',
      use:'Use Fluke’s real instrument guidance to reinforce mode, lead/jack, range, and safe-use decisions after Alfred teaches the mental model.',
      watchFor:'Use only the sections on the mode or measurement being taught on the current page; do not read the entire guide in one sitting.',
      gap:'Alfred supplies the analog/digital construction model, expected result, and troubleshooting interpretation.'
    },
    litFlukeDcVoltageW3:{
      role:'Required · Focused DC-voltage procedure',
      use:'Use this short manufacturer procedure as the concrete voltage-mode example after Alfred teaches all three DMM connection models.',
      watchFor:'Read the DC-voltage setup only: COM + V/Ω, DC-volts selection, probes across two points, and the current-jack warning.',
      gap:'Alfred also teaches resistance/continuity and series current insertion.'
    },
    keysightCvCcW3:{
      role:'Required · Focused bench-supply lesson',
      use:'Use Keysight Lesson 4 only after Alfred explains the CV/CC transition.',
      watchFor:'Use Lesson 4 only: constant-voltage versus constant-current operation and what happens to output voltage at the current boundary.',
      gap:'Alfred supplies the low-voltage bring-up scenario and diagnostic stop/investigate logic.'
    },
    h4KeysightCvCcReading:{
      role:'Required · CV/CC visual reading',
      use:'Use the CV/CC operating-locus explanation as a second representation of the bench-supply behavior Alfred just taught.',
      watchFor:'Read Tip 1 “Understanding CV and CC” and the associated operating-locus figure only.',
      gap:'Do not turn the full eBook into Week 3 required reading.'
    },
    afrotechScopePart2W3:{
      role:'Required · Beginner oscilloscope demonstration',
      use:'Use the conversational scope demonstration to see the controls Alfred just defined on a real instrument.',
      watchFor:'Use only the portions on probes, vertical/horizontal scaling, coupling, and viewing a repeating low-voltage waveform. Alfred/Tektronix guidance controls current safety and instrument-specific setup.',
      gap:'Alfred supplies the manual Vpp/period/frequency calculations and known-good-state workflow.'
    },
    litTekXyzScopes:{
      role:'Required · Oscilloscope operator primer',
      use:'Use the manufacturer diagrams and terminology as a second representation of voltage-versus-time, controls, and triggering.',
      watchFor:'Read only the sections on waveform types, vertical system, horizontal system, triggering, and taking simple measurements that match the current Alfred page.',
      gap:'The full primer is not required in Week 3.'
    },
    h4TekProbeCompensation:{
      role:'Required · 1:09 known-reference probe demonstration',
      use:'Use this short manufacturer demonstration to see what a known-reference probe check actually looks like before trusting DUT waveforms.',
      watchFor:'Watch the full 1:09: connect to the scope reference output, inspect square-wave shape, and adjust compensation when appropriate.',
      gap:'Alfred supplies the low-voltage reference/ground boundary and the decision rule for when the measurement chain is proven.'
    },
    tekScopeSetup:{
      role:'Required · Bounded oscilloscope setup reading',
      use:'Use the Tektronix setup sequence as the authentic physical counterpart to Alfred’s scope setup model.',
      watchFor:'Use only Proper Grounding, Setting Controls, Connecting Probes, Compensating Probes, and basic Oscilloscope Measurement Techniques.',
      gap:'Alfred remains the first-pass teaching path and supplies the troubleshooting logic.'
    },
    litTekAbcProbes:{
      role:'Required · Probe loading / selection reading',
      use:'Use the probe primer to connect reference, compensation, input loading, bandwidth, and probe choice to measurement validity.',
      watchFor:'Read Probing Safety plus the bounded sections on probe loading, bandwidth, compensation, and selecting a probe.',
      gap:'Alfred supplies the beginner mental model and the Week 3 practical boundary.'
    },
    tekTriggerW3:{
      role:'Required · Focused trigger demonstration',
      use:'Use the dedicated trigger lesson only at the trigger page.',
      watchFor:'Watch the full 4:31. Focus on source, level, slope, and why repeated acquisitions become stable.',
      gap:'Alfred supplies the 0–3.3 V square-wave setup and retrieval/application prompt.'
    },
    h4TekProbeLoading:{
      role:'Required · Probe-loading application note',
      use:'Use this manufacturer note to see why the measurement system can disturb the signal it is trying to observe.',
      watchFor:'Read the sections on input resistance, input capacitance, probe loading, and measurement disturbance. Stop before product-selection detail that does not support the current page.',
      gap:'Alfred ties these limits to the specific Week 3 trust/not-trust decision.'
    },
    h4KeysightMeasurementUncertaintyVideo:{
      role:'Required · 12:32 measurement-uncertainty demonstration',
      use:'Use this calibration/metrology explanation to make “accuracy versus displayed digits” and uncertainty feel like a real bench decision rather than vocabulary.',
      watchFor:'Watch the full 12:32. Focus on what uncertainty says about the strength of a measurement conclusion, not on memorizing calibration jargon.',
      gap:'Alfred keeps the math and decision rule at Week 3 technician level.'
    },
    neetsTestEquipment:{
      role:'Required · Bounded technician reference',
      use:'Use the U.S. Navy technician material only for the instrument family and measurement reasoning on the current Career page.',
      watchFor:'Use only the bounded DMM/oscilloscope/test-equipment portion relevant to the current hypothesis; do not read Module 16 cover-to-cover for Week 3.',
      gap:'Alfred supplies the modern low-voltage workflow and the exact discriminating-measurement exercise.'
    },
    h4NistMeasurementUncertainty:{
      role:'Required · Measurement-science reading',
      use:'Use the NIST introduction to anchor the distinction between a displayed result and the uncertainty attached to the conclusion.',
      watchFor:'Read only the introductory explanation of measurement uncertainty and how uncertainty qualifies reported results.',
      gap:'Alfred translates the principle into a technician record and pass/fail/inconclusive decision.'
    },
    h4KeysightOutOfCalVideo:{
      role:'Required · 6:24 test-asset validity case study',
      use:'Use the case study to see how an untrustworthy test asset can create the wrong DUT pass/fail conclusion.',
      watchFor:'Watch the full 6:24. Track the chain: instrument condition/status → measurement error → wrong DUT verdict → corrected test-system conclusion.',
      gap:'Alfred supplies the pre-use checklist and stop/escalate rule.'
    },
    h4NistTraceability:{
      role:'Required · Traceability / fitness-for-purpose reference',
      use:'Use NIST to connect instrument status and traceability to a defensible measurement result without pretending traceability alone guarantees fitness for every task.',
      watchFor:'Read the FAQ/policy sections defining metrological traceability and the need to state the measurement result/uncertainty and reference chain. Keep the Week 3 decision focused on whether the available setup can support the conclusion.',
      gap:'Alfred supplies the practical pre-use and pass/fail/inconclusive workflow.'
    },
    h4KeysightTraceabilityVideo:{
      role:'Required · 8:32 traceability demonstration',
      use:'Use this metrology video to see why a measurement result needs a defensible reference chain and stated capability before it supports a decision.',
      watchFor:'Watch the full 8:32. Focus on traceability as evidence about the measurement system, not as a magic guarantee of accuracy.',
      gap:'Alfred applies the idea to the Week 3 tolerance-versus-capability scenario.'
    }
  };
  for(const [source,def] of Object.entries(mediaDefs)){
    const old=mediaBySource.get(source)||{source};
    mediaBySource.set(source,{...old,...def,source});
  }
  // Preserve existing Study/Library breadth sources, then add/refresh H4 classroom sources.
  W.integration.media=[...mediaBySource.values()];

  const P=(source,lesson,segment,mediaType,afterAction,{role='core',requirement='required',display='primary',inlineStudy=false}={})=>({
    assignmentWeek:3,source,targetWeek:3,lesson,segment,
    relationship:'Supports this learning page',presentationRole:role,display,inline:true,inlineStudy,
    requirement,mediaType,afterAction,
    reason:'v16.3.90-H4 Week 3 multimodal content-quality placement — selected for exact page-level instructional fit.'
  });

  // Exactly two external representations per teaching page: one demonstration/video and one written source.
  const placements=[
    P('afrotechmodsMultimeter',0,'w03-question-before-instrument','video','State the measurement question first, then explain why the DMM is or is not the simplest tool.'),
    P('litAacTestMeasurementTextbook',0,'w03-question-before-instrument','literature','Name the quantity, connection model, expected result, and decision before touching the instrument.'),

    P('afrotechmodsMultimeter',0,'w03-meter-operation-construction','video','Point to the selector and input jacks and explain how changing mode changes what the meter does internally.'),
    P('flukeMultimeterGuide',0,'w03-meter-operation-construction','literature','Explain why display resolution is not the same as accuracy and why the selected mode/range changes the measurement path.'),

    P('afrotechmodsMultimeter',0,'w03-dmm-modes-connections','video','From memory, describe the correct physical connection for voltage, resistance/continuity, and current.'),
    P('litFlukeDcVoltageW3',0,'w03-dmm-modes-connections','literature','Describe a safe 5 V rail measurement, then contrast it with current-mode series insertion.'),

    P('keysightCvCcW3',0,'w03-supply-cv-cc','video','Explain why a 5 V setpoint can produce less than 5 V when the current limit is controlling.'),
    P('h4KeysightCvCcReading',0,'w03-supply-cv-cc','literature','Sketch or explain the CV-to-CC transition and identify what load behavior would make the supply cross the boundary.'),

    P('afrotechScopePart2W3',0,'w03-scope-voltage-over-time','video','Identify volts/div, time/div, and one full cycle on a known waveform, then calculate Vpp and frequency manually.',{inlineStudy:true}),
    P('litTekXyzScopes',0,'w03-scope-voltage-over-time','literature','Explain which scope control changes vertical magnitude per division and which changes time per division.',{inlineStudy:true}),

    P('h4TekProbeCompensation',0,'w03-probe-reference-discipline','video','Before trusting a trace, state the approved reference, probe factor, compensation status, coupling, and rating.'),
    P('litTekAbcProbes',0,'w03-probe-reference-discipline','literature','Name one safety error and two measurement errors a probe can introduce.'),

    P('tekTriggerW3',0,'w03-trigger-stable-display','video','Choose trigger source, level, and slope for a 0–3.3 V square wave and explain why the trace stabilizes.'),
    P('litTekXyzScopes',0,'w03-trigger-stable-display','literature','Explain what triggering changes about acquisition timing and what it does not fix.',{inlineStudy:true}),

    P('h4KeysightMeasurementUncertaintyVideo',0,'w03-measurement-limits','video','Explain why 5.0000 V on a display does not prove ±0.0001 V accuracy.'),
    P('h4TekProbeLoading',0,'w03-measurement-limits','literature','Name two ways the measurement system can change or hide the circuit behavior you are trying to observe.'),

    P('afrotechmodsMultimeter',1,'career-w03-question-first-selection','video','Turn one vague symptom into a measurable question and justify the first instrument selected.'),
    P('litAacTestMeasurementTextbook',1,'career-w03-question-first-selection','literature','Write the quantity, test point/reference, expected healthy result, and decision rule before choosing the tool.'),

    P('keysightCvCcW3',1,'career-w03-static-evidence','video','Build a slow/static baseline: supply setpoint, current limit, CV/CC state, current draw, and DMM rail value.'),
    P('flukeMultimeterGuide',1,'career-w03-static-evidence','literature','List the DMM/supply facts you would record before chasing a transient.'),

    P('h4TekProbeCompensation',1,'career-w03-known-waveform-first','video','Use a known reference waveform to prove probe/channel setup before moving to an unknown DUT signal.'),
    P('tekScopeSetup',1,'career-w03-known-waveform-first','literature','Write the known-waveform setup sequence from reference connection through stable display and manual measurement.'),

    P('h4TekProbeCompensation',1,'career-w03-reference-loading-bandwidth','video','Explain why a clean known reference can still expose a probe/setup problem before the DUT is blamed.'),
    P('h4TekProbeLoading',1,'career-w03-reference-loading-bandwidth','literature','Identify how input resistance, input capacitance, bandwidth, or reference choice could change the observed signal.'),

    P('afrotechScopePart2W3',1,'career-w03-discriminating-measurements','video','Choose one scope/DMM/supply measurement whose result would separate two competing reset hypotheses.',{inlineStudy:true}),
    P('neetsTestEquipment',1,'career-w03-discriminating-measurements','literature','For your chosen measurement, state what each possible result would imply and why the other available tools add less information.',{inlineStudy:true}),

    P('h4KeysightMeasurementUncertaintyVideo',1,'career-w03-reproducible-evidence','video','Describe the minimum setup/context another technician needs to reproduce and judge your result.'),
    P('h4NistMeasurementUncertainty',1,'career-w03-reproducible-evidence','literature','Separate the raw reading from the uncertainty/limitations and the conclusion you are willing to defend.'),

    P('h4KeysightOutOfCalVideo',1,'career-w03-test-asset-validity','video','Explain why a failed known-reference/status check invalidates later DUT conclusions until the measurement chain is corrected.'),
    P('h4NistTraceability',1,'career-w03-test-asset-validity','literature','Write a pre-use validity decision that includes identity/status, configuration, known-reference result, and stop/escalate rule.'),

    P('h4KeysightTraceabilityVideo',1,'career-w03-measurement-capability-decision','video','Explain why traceable equipment still has to be capable of supporting the specific tolerance decision.'),
    P('h4NistTraceability',1,'career-w03-measurement-capability-decision','literature','Classify a result as PASS, FAIL, or inconclusive when the measurement capability is wider than the allowed tolerance, and justify the next test.')
  ];

  // Replace earlier Week 3 point-of-use placements, leaving every other week untouched.
  const R=C.teachingResourceIntegration||{};
  const prior=(R.placements||[]).filter(p=>Number(p.targetWeek)!==3);
  const all=[...prior,...placements];
  const byTargetWeek={},bySource={},byAssignment={};
  for(const p of all){
    (byTargetWeek[p.targetWeek] ||= []).push(p);
    (bySource[p.source] ||= []).push(p);
    (byAssignment[`${p.assignmentWeek}:${p.source}`] ||= []).push(p);
  }
  C.teachingResourceIntegration={
    ...R,
    revision:REV,
    placements:all,
    byTargetWeek,
    bySource,
    byAssignment,
    retainedAssignmentCount:new Set(all.map(p=>`${p.assignmentWeek}:${p.source}`)).size,
    uniqueSourceCount:new Set(all.map(p=>p.source)).size,
    canonicalSourceCount:new Set(all.map(p=>(R.canonicalAliases?.[p.source]||p.source))).size,
    week3MediaQualityRevision:REV,
    week3PointOfUsePlacementCount:placements.length
  };

  // Add precise written-companion metadata so the lesson renderer labels these as readings,
  // displays bounded read/focus instructions, and preserves the existing centralized reading index.
  const O=C.outsideLiteratureIntegration||{};
  const sourceMeta={
    litAacTestMeasurementTextbook:{...(O.sources?.litAacTestMeasurementTextbook||{}),literatureType:'Required Written Companion'},
    flukeMultimeterGuide:{...(O.sources?.flukeMultimeterGuide||{}),literatureType:'Required Manufacturer Reading'},
    litFlukeDcVoltageW3:{...(O.sources?.litFlukeDcVoltageW3||{}),literatureType:'Required Manufacturer Reading'},
    h4KeysightCvCcReading:{title:C.sources.h4KeysightCvCcReading.title,org:C.sources.h4KeysightCvCcReading.org,author:'Keysight Technologies',kind:C.sources.h4KeysightCvCcReading.kind,url:C.sources.h4KeysightCvCcReading.url,access:'Free PDF',literatureType:'Required Manufacturer Reading',provenance:'Keysight bench-power-supply skills eBook; bounded to Tip 1 CV/CC material.',verified:'2026-10-01'},
    litTekXyzScopes:{...(O.sources?.litTekXyzScopes||{}),literatureType:'Required Manufacturer Primer'},
    litTekAbcProbes:{...(O.sources?.litTekAbcProbes||{}),literatureType:'Required Manufacturer Primer'},
    tekScopeSetup:{...(O.sources?.tekScopeSetup||{}),literatureType:'Required Manufacturer Primer'},
    h4TekProbeLoading:{title:C.sources.h4TekProbeLoading.title,org:C.sources.h4TekProbeLoading.org,author:'Tektronix',kind:C.sources.h4TekProbeLoading.kind,url:C.sources.h4TekProbeLoading.url,access:'Free online',literatureType:'Required Manufacturer Application Note',provenance:'Tektronix application note on probe loading and measurement disturbance.',verified:'2026-10-01'},
    neetsTestEquipment:{title:C.sources.neetsTestEquipment?.title||'NEETS Module 16 — Introduction to Test Equipment',org:C.sources.neetsTestEquipment?.org||'U.S. Navy Electricity and Electronics Training Series',author:'U.S. Navy',kind:C.sources.neetsTestEquipment?.kind||'Technician self-study manual',url:C.sources.neetsTestEquipment?.url||'https://maritime.org/doc/neets/mod16.pdf',access:'Free public copy',literatureType:'Required Technician Reference',provenance:'U.S. Navy technician training material; bounded to the instrument family needed by the current page.',verified:'2026-10-01'},
    h4NistMeasurementUncertainty:{title:C.sources.h4NistMeasurementUncertainty.title,org:C.sources.h4NistMeasurementUncertainty.org,author:'NIST',kind:C.sources.h4NistMeasurementUncertainty.kind,url:C.sources.h4NistMeasurementUncertainty.url,access:'Free online',literatureType:'Required Government Reference',provenance:'NIST introductory measurement-uncertainty guidance.',verified:'2026-10-01'},
    h4NistTraceability:{title:C.sources.h4NistTraceability.title,org:C.sources.h4NistTraceability.org,author:'NIST',kind:C.sources.h4NistTraceability.kind,url:C.sources.h4NistTraceability.url,access:'Free online',literatureType:'Required Government Reference',provenance:'NIST metrological-traceability policy and FAQ.',verified:'2026-10-01'}
  };

  const literatureDetails={
    'litAacTestMeasurementTextbook':{type:'Companion Reading',readUse:'Use only the Test & Measurement entry matching the current page (meter choice, loading, or measurement method).',focus:'Connect the instrument to the electrical quantity and connection model instead of memorizing controls.',why:'A free electronics text supplies a second written representation while Alfred remains the course.',after:'Explain the same measurement decision without the reference open.'},
    'flukeMultimeterGuide':{type:'Manufacturer Reading',readUse:'Use only the section matching the current DMM mode/setup; do not read the entire guide in one sitting.',focus:'Mode, input jack, lead placement, range and safe-use consequences.',why:'Manufacturer procedure grounds Alfred’s meter model in real instrument practice.',after:'Describe the exact setup from memory and name one misuse it prevents.'},
    'litFlukeDcVoltageW3':{type:'Manufacturer Reading',readUse:'Read the DC-voltage setup steps only: COM/VΩ inputs, DC volts, parallel probe placement, and current-jack warning.',focus:'Why voltage mode connects across two points and why jack selection matters.',why:'A concise manufacturer procedure reinforces the DMM connection model.',after:'Describe a safe 5 V rail measurement from memory.'},
    'h4KeysightCvCcReading':{type:'Manufacturer Reading',readUse:'Read Tip 1 “Understanding CV and CC” and use the operating-locus figure only.',focus:'Why load demand and the current-limit setting determine CV versus CC operation.',why:'The diagram gives a visual second representation of Alfred’s supply model.',after:'Predict CV/CC state for one changed load or current-limit value.'},
    'litTekXyzScopes':{type:'Manufacturer Primer',readUse:'Use only the waveform, vertical/horizontal, trigger, or simple-measurement subsection named by the current page.',focus:'Voltage-versus-time controls and the acquisition behavior they change.',why:'Tektronix supplies authentic operator diagrams and terminology.',after:'Explain the control/result relationship without the primer open.'},
    'litTekAbcProbes':{type:'Manufacturer Primer',readUse:'Read Probing Safety plus the bounded sections on loading, bandwidth, compensation and probe selection.',focus:'How the probe can change the circuit or misrepresent the signal.',why:'Probe technique is part of the measurement system, not an accessory detail.',after:'Name two ways a probe can distort a result and one safety check.'},
    'tekScopeSetup':{type:'Manufacturer Primer',readUse:'Use Proper Grounding, Setting Controls, Connecting Probes, Compensating Probes, and basic Measurement Techniques only.',focus:'Known-good setup sequence from reference through stable waveform.',why:'A manufacturer setup sequence makes Alfred’s abstract controls physically concrete.',after:'Write the known-waveform setup sequence in order.'},
    'h4TekProbeLoading':{type:'Manufacturer Application Note',readUse:'Read the sections on input resistance, input capacitance, loading, bandwidth, and signal disturbance.',focus:'The measurement system can alter the phenomenon it is observing.',why:'The application note turns “loading” into a real measurement-system limitation.',after:'Identify two conditions where the probe could change or hide the result.'},
    'neetsTestEquipment':{type:'Technician Reference',readUse:'Use only the DMM/oscilloscope/test-equipment portion relevant to the current hypothesis.',focus:'Instrument choice and interpretation as technician work, not a catalog of instruments.',why:'A technician training source reinforces question-driven test selection.',after:'State what one measurement result would rule in or rule out.'},
    'h4NistMeasurementUncertainty':{type:'Government Reference',readUse:'Read the introductory measurement-uncertainty explanation only.',focus:'A reported number is incomplete without limits on what can reasonably be concluded from it.',why:'NIST provides the authoritative measurement-science framing behind reproducible evidence.',after:'Separate raw reading, uncertainty/limitation, and engineering conclusion.'},
    'h4NistTraceability':{type:'Government Reference',readUse:'Use the FAQ/policy definition of metrological traceability and its relationship to stated results/uncertainty.',focus:'Traceability supports confidence in the measurement chain but does not by itself prove fitness for every tolerance decision.',why:'NIST supplies authoritative language for test-asset validity and defensible conclusions.',after:'State whether the current setup is fit for the specific decision and what evidence supports that judgment.'}
  };

  const readingPlacements=placements.filter(p=>p.mediaType==='literature').map(p=>{
    const d=literatureDetails[p.source];
    return {...p,literatureType:d?.type||'Written Companion',readUse:d?.readUse||mediaDefs[p.source]?.watchFor||'',focus:d?.focus||'',afterReading:d?.after||p.afterAction,why:d?.why||p.reason,realWorld:true,meta:sourceMeta[p.source]||O.sources?.[p.source]||null};
  });
  const priorLit=(O.literaturePlacements||[]).filter(p=>Number(p.targetWeek)!==3);
  const allLit=[...priorLit,...readingPlacements];
  const byPlacement={},byLitSource={};
  const key=p=>`${p.assignmentWeek}:${p.source}:${p.targetWeek}:${p.lesson}:${p.segment}`;
  for(const p of allLit){byPlacement[key(p)]=p;(byLitSource[p.source] ||= []).push(p);}
  const allLitSources={...(O.sources||{}),...sourceMeta};
  C.outsideLiteratureIntegration={
    ...O,
    revision:REV,
    sources:allLitSources,
    literaturePlacements:allLit,
    byPlacement,
    bySource:byLitSource,
    sourceIds:Object.keys(allLitSources),
    placementCount:allLit.length,
    uniqueSourceCount:new Set(allLit.map(p=>p.source)).size,
    week3RedesignRevision:REV,
    week3MediaQualityRevision:REV
  };

  // Machine-checkable acceptance metadata. The visual and retrieval layers remain owned by
  // H3/learn.js; this record verifies that the H4 page-level external mix was actually built.
  const perPage=[...expectedCeta.map(id=>({track:'CETa',lesson:0,id})),...expectedCareer.map(id=>({track:'Career',lesson:1,id}))].map(page=>{
    const rows=placements.filter(p=>p.lesson===page.lesson&&p.segment===page.id);
    return {...page,videoCount:rows.filter(x=>x.mediaType==='video').length,readingCount:rows.filter(x=>x.mediaType==='literature').length};
  });
  const sectionFigureCount=[...(ceta.integrated?.teaching||[]),...(career.integrated?.teaching||[])].filter(x=>x?.figure||x?.careerSourceVisual).length;
  C.week3MediaQuality={
    revision:REV,status:perPage.every(x=>x.videoCount===1&&x.readingCount===1)&&sectionFigureCount===16?'VERIFIED_PASS':'FAILED',
    pageCount:perPage.length,cetaPageCount:expectedCeta.length,careerPageCount:expectedCareer.length,
    pointOfUsePlacementCount:placements.length,videoPlacementCount:placements.filter(p=>p.mediaType==='video').length,
    readingPlacementCount:placements.filter(p=>p.mediaType==='literature').length,
    uniqueSourceCount:new Set(placements.map(p=>p.source)).size,sourceAuthenticFigurePageCount:sectionFigureCount,
    pages:perPage,specialistToolCoreExpansion:false,cloudSyncProtocol:2
  };
})();
