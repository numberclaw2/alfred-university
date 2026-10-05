/* AU-ESET 301 — v16.3.90-H5.1 Week 3 teaching-media audit repair
   COMPATIBILITY NOTE: the historical H4 filename is intentionally retained because
   learn.html already loads it. The contents below are the H5 corrective layer.

   H5 governing fixes:
   1) no whole-video repetition across Week 3 pages;
   2) each page gets a video selected for that page's exact subject;
   3) all lesson-level written reading is Required;
   4) non-required CETa Study Guide records are removed from lesson Related Learning;
      only a previously/elsewhere Required Study Guide record may reappear as review;
   5) CETa and Career receive equal media-placement scrutiny.
*/
(()=>{
  'use strict';
  if(window.__ALFRED_WEEK3_MEDIA_QUALITY_16390_H51__) return;
  window.__ALFRED_WEEK3_MEDIA_QUALITY_16390_H51__=true;

  const C=window.ALFRED_CURRICULUM;
  if(!C?.modules?.length) return;
  const W=C.modules.find(m=>Number(m.week)===3);
  if(!W?.lessons?.length) return;

  const REV='2026-10-05-v16.3.90-H5.1-week3-media-audit-repair';
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
  const ids=lesson=>(lesson?.integrated?.teaching||[]).map(x=>x?.sectionId).filter(Boolean);
  const exact=(a,b)=>a.length===b.length&&a.every((x,i)=>x===b[i]);
  if(!exact(ids(ceta),expectedCeta)||!exact(ids(career),expectedCareer)){
    C.week3MediaQuality={revision:REV,status:'BLOCKED_SECTION_ID_DRIFT'};
    return;
  }

  // H5.1 Study Guide repair. H5 filtered non-required lesson records out, but the
  // user's rule is stronger: any exact Study Guide slice mapped to Week 3 lesson content
  // must be Required on its FIRST assignment. Later placements of that exact same record
  // are review/backlinks. Promote the four existing bounded Week 3 slices in-place so the
  // current learn.js renderer naturally shows primary Required cards and later reuse cards.
  const SG=window.ALFRED_CETA_STUDY_GUIDE;
  const week3GuideIds=[
    'sg-w03-v16371-p165-purpose',
    'sg-w03-v16371-p167-169-dmm',
    'sg-w03-v16371-p172-173-scope',
    'sg-w03-v16371-p173-probe-trigger'
  ];
  if(SG?.records){
    const promoted=week3GuideIds.map(id=>SG.records.find(r=>r?.id===id)).filter(Boolean);
    for(const r of promoted){
      r.classification='required';
      r.role='required';
      r.contextOnly=false;
      r.studyCategory='Required CETa Reading';
      r.notes='v16.3.90-H5.1: lesson-mapped Week 3 Study Guide slice promoted to Required on first assignment; later mapped placement is reuse/review only.';
      r.completionEvidence=SG.completionEvidenceByWeek?.[3]||'Complete the bounded reading, then perform the mapped Alfred retrieval/application action.';
      r.completionPolicy='Required reading is complete only after the bounded slice is read and its mapped Alfred retrieval/application action is performed; later reuse does not create a second reading obligation.';
    }
    SG.completionEvidenceByWeek=SG.completionEvidenceByWeek||{};
    SG.completionEvidenceByWeek[3]='Bounded Chapter 19 reading + mapped Week 3 instrument-selection / DMM / scope / probe-trigger retrieval or application.';
    SG.requiredWeeks=[...new Set([...(SG.requiredWeeks||[]),3])].sort((a,b)=>Number(a)-Number(b));
    SG.zeroNewRequiredWeeks=(SG.zeroNewRequiredWeeks||[]).filter(w=>Number(w)!==3);

    // Keep summary metadata consistent with the promoted records. Unique printed-page
    // count avoids double-counting p.173, which supports two different bounded concepts.
    const requiredRecords=(SG.records||[]).filter(r=>r?.classification==='required');
    const requiredPages=new Set();
    for(const r of requiredRecords){
      for(const g of (r.pageGroups||[])) for(let n=Number(g[0]);n<=Number(g[1]);n++) requiredPages.add(n);
    }
    if(typeof SG.pageCount==='function') SG.requiredPageCount=requiredRecords.reduce((n,r)=>n+SG.pageCount(r),0);
    SG.counts=SG.counts||{};
    SG.counts.requiredPrintedPages=requiredPages.size;
    SG.counts.studyReviewPrintedPages=Math.max(0,Number(SG.counts.totalPrintedPages||224)-Number(SG.counts.referenceHistoricalPrintedPages||27)-requiredPages.size);
    SG.counts.requiredWeeks=SG.requiredWeeks.length;
    SG.counts.zeroNewRequiredWeeks=SG.zeroNewRequiredWeeks.length;
    // Existing accepted required-time range plus the four bounded Week 3 tasks (27 min).
    SG.counts.requiredMinutesMin=248;
    SG.counts.requiredMinutesMax=287;
    SG.dispositionCounts={required:requiredPages.size,study:SG.counts.studyReviewPrintedPages,reference:Number(SG.counts.referenceHistoricalPrintedPages||27)};

    // Page-disposition metadata originally classifies Chapter 19 as Study. Override only
    // the six printed pages actually promoted, leaving the rest of Chapter 19 optional.
    const week3RequiredPages=new Set([165,167,168,169,172,173]);
    const oldDisposition=SG.dispositionForPage?.bind(SG);
    if(oldDisposition&&!SG.__ALFRED_WEEK3_REQUIRED_DISPOSITION_20261005__){
      SG.dispositionForPage=page=>week3RequiredPages.has(Number(page))
        ? {start:Number(page),end:Number(page),classification:'required',note:'Week 3 required contextual Study Guide slice'}
        : oldDisposition(page);
      SG.__ALFRED_WEEK3_REQUIRED_DISPOSITION_20261005__=true;
    }

    // Lesson Related Learning is required-only for Study Guide records. Because the
    // promoted records are now Required, the first placement appears as Required while
    // learn.js automatically labels later placements “Previously assigned · reuse if needed”.
    if(SG.recordsForSegment&&!SG.__ALFRED_REQUIRED_ONLY_LESSON_POLICY_20261005_H51__){
      const original=SG.recordsForSegment.bind(SG);
      SG.recordsForSegment=(week,lesson,segment)=>(original(week,lesson,segment)||[]).filter(r=>r?.classification==='required');
      SG.__ALFRED_REQUIRED_ONLY_LESSON_POLICY_20261005_H51__=true;
    }
    SG.week3RequiredReadingRevision=REV;
  }

  C.sources=C.sources||{};
  const sources={
    // ---------- CETa videos: eight distinct resources ----------
    h5VccsScopeVsDmm:{title:'Oscilloscope vs Multimeter',org:'VCCS Office of Professional Development / Auto Sprinkles',kind:'Instructional comparison video',url:'https://www.youtube.com/watch?v=iW2chXxqsHI'},
    h5EevblogAnalogDigital:{title:'EEVblog #1067 — Analog vs Digital Multimeters!',org:'EEVblog',kind:'Electronics educator video',url:'https://www.youtube.com/watch?v=HHALK0sv1Y0'},
    h5FlukeDmmHowToVideo:{title:'How to use a Multimeter | A comprehensive guide',org:'Fluke Corporation',kind:'Manufacturer how-to video',url:'https://www.youtube.com/watch?v=pTYDYQ87zHw'},
    h5KeysightCvCcVideo:{title:'Bench Power Supply Basics — Lesson 4: Constant Voltage and Constant Current Modes',org:'Keysight Technologies',kind:'Manufacturer lesson video',url:'https://www.keysight.com/fi/en/assets/6123-1426/lessons/0027BenchPowerSupplyBasics004Using6UnderstandingConstantVoltageandConstantCurrentModes.html'},
    h5TekTimeAmplitudeVideo:{title:'Basic Time and Amplitude Measurements',org:'Tektronix',kind:'Manufacturer oscilloscope video · 7:45',url:'https://www.tek.com/en/video/how-to/basic-time-and-amplitude-measurements'},
    h5TekProbeSetupVideo:{title:'How to Set Up Probes, Vertical and Horizontal Settings',org:'Tektronix',kind:'Manufacturer oscilloscope video · 6:37',url:'https://www.tek.com/en/video/how-to/how-to-set-up-probes-vertical-and-horizontal-settings'},
    h5TekTriggerVideo:{title:'The Basics of an Oscilloscope Trigger',org:'Tektronix',kind:'Manufacturer oscilloscope video · 4:31',url:'https://www.tek.com/en/video/the-basics-of-an-oscilloscope-trigger'},
    h5EevblogAccuracyVideo:{title:'EEVblog #26 — Multimeter Tutorial: Counts, Accuracy, Resolution & Calibration',org:'EEVblog',kind:'Electronics educator video',url:'https://www.youtube.com/watch?v=U4JFeU-o2kc'},

    // ---------- CETa required readings: eight distinct resources ----------
    h5RsDmmVsScopeReading:{title:'Digital multimeter vs. oscilloscope — which instrument do you need?',org:'Rohde & Schwarz',kind:'Manufacturer application article',url:'https://www.co.rohde-schwarz.com/in/products/test-and-measurement/essentials-test-equipment/rs-essentials-digital-oscilloscopes/digital-multimeter-vs-oscilloscope_258617.html'},
    h5FlukeWhatIsDmmReading:{title:'What is a Digital Multimeter?',org:'Fluke',kind:'Manufacturer fundamentals article',url:'https://www.fluke.com/en-id/learn/blog/electrical/what-is-a-digital-multimeter'},
    h5FlukeDcVoltageReading:{title:'How to Measure DC Voltage with a Digital Multimeter',org:'Fluke',kind:'Manufacturer how-to article',url:'https://www.fluke.com/en-us/learn/blog/digital-multimeters/how-to-measure-dc-voltage-with-a-digital-multimeter'},
    h5KeysightCvCcReading:{title:'4 Ways to Build Your Power Supply Skill Set — Tip 1: Understanding CV and CC',org:'Keysight Technologies',kind:'Manufacturer eBook',url:'https://www.keysight.com/us/en/assets/7018-06003/ebooks/5992-2716.pdf'},
    h5TekXyzReading:{title:'XYZs of Oscilloscopes Primer',org:'Tektronix',kind:'Manufacturer primer',url:'https://www.tek.com/en/documents/primer/xyzs-oscilloscopes-primer'},
    h5TekProbesReading:{title:'ABCs of Probes Primer',org:'Tektronix',kind:'Manufacturer probe primer',url:'https://www.tek.com/en/documents/whitepaper/abcs-probes-primer'},
    h5TekTriggerReading:{title:'Oscilloscope Fundamentals: Capturing Your Signal',org:'Tektronix',kind:'Manufacturer trigger/acquisition poster',url:'https://www.tek.com/en/documents/poster/oscilloscope-fundamentals-capturing-your-signal'},
    h5FlukeAccuracyReading:{title:'Why Digital Multimeter Accuracy and Precision Matter',org:'Fluke',kind:'Manufacturer fundamentals article',url:'https://www.fluke.com/en-us/learn/blog/digital-multimeters/accuracy-precision'},

    // ---------- Career videos: eight distinct resources ----------
    h5AfrotechmodsMultimeterVideo:{title:'THE BEST Multimeter Tutorial (HD)',org:'Afrotechmods',kind:'Beginner electronics demonstration video',url:'https://www.youtube.com/watch?v=bF3OyQ3HwfU'},
    h5KeysightReadbackVideo:{title:'Bench Power Supply Basics — Lesson 5: Power Supply Readback',org:'Keysight Technologies',kind:'Manufacturer lesson video · 2:50',url:'https://www.keysight.com/zz/en/assets/6123-1430/lessons/0027BenchPowerSupplyBasics005PowerSupplyReadback.html'},
    h5TekProbeCompVideo:{title:'How to Compensate a Passive Probe',org:'Tektronix',kind:'Manufacturer how-to video · 1:09',url:'https://www.tek.com/en/video/how-to/how-to-compensate-a-passive-probe'},
    h5TekProbeLoadingVideo:{title:'Probe Loading Affects Your Measurement',org:'Tektronix',kind:'Manufacturer demonstration video · 9:38',url:'https://www.tek.com/en/video/industry-comparison/probe-loading-affects-your-measurement'},
    h5MethodicalFaultFindingVideo:{title:'The Art Of Methodical Fault Finding — A Practical Example',org:'Learn Electronics Repair',kind:'Electronics repair educator video · sliced assignment',url:'https://www.youtube.com/watch?v=3vP0YEsBeE4'},
    h5KeysightUncertaintyVideo:{title:'Measurement Uncertainty: How Accurate?',org:'Keysight Technologies',kind:'Manufacturer calibration/metrology video · 12:32',url:'https://www.youtube.com/watch?v=p_BHEWzP11A'},
    h5KeysightOutOfCalVideo:{title:'Out-of-Cal Instruments Cause Bad Pass/Fail Decisions',org:'Keysight Technologies',kind:'Manufacturer calibration case-study video · 6:24',url:'https://www.youtube.com/watch?v=wGss-Elbf8E'},
    h5KeysightTraceabilityVideo:{title:'Traceability: Why Is It Important?',org:'Keysight Technologies',kind:'Manufacturer calibration/metrology video · 8:32',url:'https://www.youtube.com/watch?v=fvb2lDAjXTI'},

    // ---------- Career required readings: eight distinct resources ----------
    h5FlukePortableScopeReading:{title:'ABCs of Portable Oscilloscopes: Part 1 — Multimeters and Oscilloscopes',org:'Fluke',kind:'Manufacturer fundamentals article',url:'https://www.fluke.com/en-us/learn/blog/oscilloscopes/abcs-of-portable-oscilloscopes-part-1-multimeters-and-oscilloscopes'},
    h5KeysightBenchSupplyReading:{title:'An In-Depth Guide to Bench Power Supplies',org:'Keysight Technologies',kind:'Manufacturer educational article',url:'https://www.keysight.com/blogs/en/tech/educ/2023/bench-power-supply'},
    h5TekScopeSetupReading:{title:'How to Use an Oscilloscope and Probe: A Step-by-Step Tutorial',org:'Tektronix',kind:'Manufacturer setup primer',url:'https://www.tek.com/en/documents/primer/setting-and-using-oscilloscope'},
    h5TekProbeLoadingReading:{title:'How Oscilloscope Probes Affect Your Measurement',org:'Tektronix',kind:'Manufacturer application note',url:'https://www.tek.com/en/documents/application-note/how-oscilloscope-probes-affect-your-measurement'},
    h5NeetsTestEquipmentReading:{title:'NEETS Module 16 — Introduction to Test Equipment',org:'U.S. Navy Electricity and Electronics Training Series',kind:'Technician self-study manual',url:'https://casperarc.net/library/NEETS/14188A.pdf'},
    h5NistUncertaintyReading:{title:'Measurement Uncertainty',org:'National Institute of Standards and Technology (NIST)',kind:'Government measurement-science reference',url:'https://www.nist.gov/itl/sed/topic-areas/measurement-uncertainty'},
    h5NistTraceabilityReading:{title:'Metrological Traceability — Frequently Asked Questions and NIST Policy',org:'National Institute of Standards and Technology (NIST)',kind:'Government metrology reference',url:'https://www.nist.gov/metrology/metrological-traceability'},
    h5NistDecisionRulesReading:{title:'Assessment of Conformity, Decision Rules and Risk Analysis',org:'National Institute of Standards and Technology (NIST)',kind:'Government conformity/decision-rule publication',url:'https://www.nist.gov/publications/assessment-conformity-decision-rules-and-risk-analysis'}
  };
  Object.assign(C.sources,sources);

  const mediaDefs={
    // ----- CETa -----
    h5VccsScopeVsDmm:{role:'Required · Instrument-selection comparison',use:'See the basic difference between a meter that reports a value and a scope that exposes behavior over time before you choose a tool.',watchFor:'Focus on what each instrument can reveal. Return to Alfred and select the tool from the measurement question—not from familiarity.',gap:'Alfred supplies the formal decision model and safe-use boundaries.'},
    h5RsDmmVsScopeReading:{role:'Required · Instrument-selection reading',use:'Read the DMM-vs-scope comparison and scenario table.',watchFor:'Focus on steady DC/resistance/current versus dropouts, timing, ringing, PWM and ripple.',gap:'Alfred supplies the page-specific prediction and decision step.'},

    h5EevblogAnalogDigital:{role:'Required · Analog-versus-digital meter demonstration',use:'Use the comparison to see how analog pointer behavior and digital numeric conversion differ in practice.',watchFor:'Focus on response, loading/impedance implications, readability, trend visibility and why the meter type changes what you notice.',gap:'Alfred supplies the simplified internal construction model and Week 3 terminology.'},
    h5FlukeWhatIsDmmReading:{role:'Required · DMM construction/function reading',use:'Read the DMM parts, input impedance, resolution/counts and core measurement functions.',watchFor:'Connect screen, dial, jacks, leads and input impedance to the measurement path Alfred explains.',gap:'Analog-meter comparison remains in Alfred + the assigned video.'},

    h5FlukeDmmHowToVideo:{role:'Required · DMM mode/connection demonstration',use:'Use only the chapters that physically demonstrate the modes taught on this page.',watchFor:'Watch 00:32–02:50: anatomy, resistance (01:23), continuity (01:40), DC voltage (02:13), current (02:27). Then watch 04:07–04:34 for safety features. Do not treat the rest as required.',gap:'Alfred supplies the parallel-vs-series reasoning and de-energized resistance rule.'},
    h5FlukeDcVoltageReading:{role:'Required · Focused DC-voltage procedure',use:'Read the DC-voltage setup and connection steps as one concrete implementation of the DMM model.',watchFor:'COM + V/Ω jack, DC-volts mode, parallel connection, polarity/reference and safe lead handling.',gap:'Current and resistance connection differences remain explicitly taught by Alfred.'},

    h5KeysightCvCcVideo:{role:'Required · CV/CC bench-supply lesson',use:'Watch Keysight Lesson 4 specifically for constant-voltage and constant-current operation.',watchFor:'Identify what the supply controls in CV, what it controls in CC, and why output voltage can fall below the setpoint when current limiting takes control.',gap:'Alfred supplies the low-voltage bring-up and diagnostic stop rules.'},
    h5KeysightCvCcReading:{role:'Required · CV/CC graphical reading',use:'Read Tip 1 “Understanding CV and CC” and inspect the operating-locus figure.',watchFor:'Relate set voltage, current limit and load demand to the CV↔CC crossover.',gap:'Do not read the entire eBook for Week 3.'},

    h5TekTimeAmplitudeVideo:{role:'Required · Scope time/amplitude measurement demonstration',use:'Watch the Tektronix demonstration of taking voltage and time measurements from the oscilloscope display.',watchFor:'Focus on graticule divisions, vertical scale, horizontal/time scale, cursors and manually interpreting amplitude/time.',gap:'Alfred supplies Vpp, period and frequency equations plus manual practice.'},
    h5TekXyzReading:{role:'Required · Oscilloscope fundamentals reading',use:'Read only waveform types, vertical system, horizontal system and simple measurement sections.',watchFor:'Map volts/div to vertical magnitude and time/div to horizontal time; connect one cycle to period/frequency.',gap:'Triggering has its own separate page and source.'},

    h5TekProbeSetupVideo:{role:'Required · Probe/reference/setup demonstration',use:'Watch the Tektronix setup video for probe compensation, 1X/10X, coupling, vertical setup and horizontal setup.',watchFor:'Focus on the probe/reference chain and why setup choices become part of the measurement.',gap:'Alfred supplies the explicit low-voltage reference/ground safety boundary.'},
    h5TekProbesReading:{role:'Required · Probe safety/loading reading',use:'Read Probing Safety plus the bounded portions on probe loading, bandwidth, compensation and selecting a probe.',watchFor:'Identify rating, attenuation, reference, compensation, loading and bandwidth as measurement-system constraints.',gap:'Do not read the full primer beyond the sections tied to this page.'},

    h5TekTriggerVideo:{role:'Required · Trigger demonstration',use:'Watch the full 4:31 trigger lesson.',watchFor:'Focus on trigger source, level, slope and how triggering aligns repeated acquisitions to create a stable display.',gap:'A stable display does not prove the probe/reference setup is valid; Alfred keeps those ideas separate.'},
    h5TekTriggerReading:{role:'Required · Trigger/acquisition reading',use:'Read only the trigger/capturing-signal portion.',watchFor:'Explain what triggering changes about acquisition timing and what it does not change about the signal itself.',gap:'Probe setup and loading are covered on their own pages.'},

    h5EevblogAccuracyVideo:{role:'Required · Counts/accuracy/resolution/calibration lesson',use:'Use the tutorial to separate display counts, resolution, accuracy and calibration.',watchFor:'Focus on why more digits do not automatically mean a truer measurement and how range/counts affect displayed resolution.',gap:'Alfred supplies the Week 3 “can I trust this conclusion?” decision model.'},
    h5FlukeAccuracyReading:{role:'Required · Accuracy/precision/resolution reading',use:'Read Fluke’s definitions and examples for accuracy, precision, resolution, range, counts and digits.',watchFor:'Be able to explain why 5.0000 V can still carry meaningful uncertainty and why the correct range matters.',gap:'Formal uncertainty analysis is deferred; Career introduces defensible evidence at technician level.'},

    // ----- Career -----
    h5AfrotechmodsMultimeterVideo:{role:'Required · First-bench multimeter orientation',use:'Use this short beginner tutorial once—here—to make basic DMM controls and measurements concrete before the Career track turns them into technician evidence.',watchFor:'Watch the full short tutorial. Focus on recognizing the meter’s basic functions and how a technician gets a first useful static measurement.',gap:'This video is intentionally NOT repeated on later Week 3 pages.'},
    h5FlukePortableScopeReading:{role:'Required · DMM-versus-scope technician reading',use:'Read the multimeter-versus-oscilloscope comparison as a technician tool-selection rule.',watchFor:'Separate high-precision/static measurements from waveform/time-dependent evidence.',gap:'Alfred supplies the Career symptom→question→tool workflow.'},

    h5KeysightReadbackVideo:{role:'Required · Bench-supply readback demonstration',use:'Watch Keysight Lesson 5 to see how supply readback contributes static evidence beyond the setpoints alone.',watchFor:'Distinguish commanded/set values from measured/readback values and explain why current draw and operating state belong in the baseline.',gap:'Alfred combines readback with DMM rail checks and expected healthy behavior.'},
    h5KeysightBenchSupplyReading:{role:'Required · Bench-supply technician reading',use:'Read only the sections on adjustable voltage/current, display/readback, CV/CC behavior, protection and calibration.',watchFor:'Record setpoint, limit, readback, current draw and operating mode as separate facts.',gap:'Skip advanced sourcing/ATE features not needed for this Career page.'},

    h5TekProbeCompVideo:{role:'Required · Known-reference probe validation',use:'Watch the full 1:09 probe-compensation demonstration before treating an unknown DUT waveform as evidence.',watchFor:'See how the scope reference square wave exposes under/over-compensation and proves part of the measurement chain.',gap:'Alfred supplies the known-good-first diagnostic rule and required evidence record.'},
    h5TekScopeSetupReading:{role:'Required · Known-waveform setup reading',use:'Read Proper Grounding, Setting Controls, Connecting Probes, Compensating Probes and basic measurement technique.',watchFor:'Build a reproducible known-reference setup sequence before moving to the DUT.',gap:'Do not read unrelated advanced oscilloscope chapters.'},

    h5TekProbeLoadingVideo:{role:'Required · Probe-loading demonstration',use:'Watch the full probe-loading demonstration to see a measurement system visibly alter the signal it is measuring.',watchFor:'Track how probe capacitance/impedance and bandwidth can change amplitude, edges or circuit behavior.',gap:'Alfred turns the effect into a DUT-versus-test-system troubleshooting hypothesis.'},
    h5TekProbeLoadingReading:{role:'Required · Probe-loading application note',use:'Read the input-resistance, input-capacitance, loading and bandwidth portions.',watchFor:'Identify measurement-system variables that could create or hide the observed symptom.',gap:'Product-selection details outside this decision are not required.'},

    h5MethodicalFaultFindingVideo:{role:'Required · Discriminating-measurement troubleshooting slice',use:'Use only the assigned chapters from this long repair video; do not watch the whole repair as Week 3 required work.',watchFor:'Required slice 1: 00:00–10:35 “The Art Of Electronics Repair.” Required slice 2: 14:11–16:44 “Preliminary Enquiries.” Focus on gathering evidence, framing hypotheses and choosing the next high-information check.',gap:'Reverse-engineering and the full repair sequence are outside this page.'},
    h5NeetsTestEquipmentReading:{role:'Required · Technician test-equipment reading',use:'Use only the DMM/oscilloscope/test-equipment portion relevant to selecting a test that separates competing hypotheses.',watchFor:'Choose the simplest measurement whose possible outcomes meaningfully change what you believe about the fault.',gap:'Do not turn Module 16 into a cover-to-cover Week 3 assignment.'},

    h5KeysightUncertaintyVideo:{role:'Required · Reproducible-evidence uncertainty lesson',use:'Watch the full 12:32 calibration/metrology explanation.',watchFor:'Focus on why a numerical result needs uncertainty/limitations before another technician can judge the strength of the conclusion.',gap:'Week 3 does not require formal uncertainty-budget mathematics.'},
    h5NistUncertaintyReading:{role:'Required · Measurement-uncertainty reading',use:'Read the NIST introduction to measurement, measurand and measurement uncertainty.',watchFor:'Separate the displayed value from the uncertainty and limitations that qualify the result.',gap:'Advanced probability/statistical treatment is outside Week 3.'},

    h5KeysightOutOfCalVideo:{role:'Required · Test-asset validity case study',use:'Watch the full 6:24 case study showing how an out-of-cal instrument can create wrong pass/fail decisions.',watchFor:'Trace instrument condition → measurement error → incorrect DUT conclusion → need to restore/validate the test system.',gap:'Alfred supplies the pre-use status/reference checklist.'},
    h5NistTraceabilityReading:{role:'Required · Test-asset traceability reading',use:'Read NIST FAQ 5.1.1 and the practical elements in 5.2.1.',watchFor:'Understand that traceability is a property of a measurement result, not merely a calibration sticker, and requires a documented chain plus uncertainty/status information.',gap:'Alfred translates the metrology language into an entry-level technician pre-use decision.'},

    h5KeysightTraceabilityVideo:{role:'Required · Measurement-capability / traceability lesson',use:'Watch the full 8:32 traceability lesson.',watchFor:'Focus on why traceability strengthens a measurement chain but does not automatically make a setup capable of resolving every tolerance.',gap:'Alfred applies the idea to PASS/FAIL/INCONCLUSIVE decisions.'},
    h5NistDecisionRulesReading:{role:'Required · Conformity/decision-rule reading',use:'Read the NIST abstract/explanation of conformity assessment, acceptance zones, decision rules and the role of measurement uncertainty.',watchFor:'Connect uncertainty to the risk of accepting a bad item or rejecting a good one and to why a borderline result may be inconclusive.',gap:'Formal guard-banding mathematics and business-risk optimization are beyond Week 3.'}
  };

  // Upsert H5 media framing while preserving unrelated Week 3 library/study resources.
  W.integration=W.integration||{};
  W.integration.media=Array.isArray(W.integration.media)?W.integration.media:[];
  const mediaBySource=new Map(W.integration.media.map(x=>[x?.source,x]).filter(([id])=>id));
  for(const [source,def] of Object.entries(mediaDefs)){
    mediaBySource.set(source,{...(mediaBySource.get(source)||{}),source,...def});
  }
  W.integration.media=[...mediaBySource.values()];

  const P=(source,lesson,segment,mediaType,afterAction,extra={})=>({
    assignmentWeek:3,source,targetWeek:3,lesson,segment,
    relationship:'Required reinforcement for this exact page',
    presentationRole:extra.presentationRole||'core',
    display:extra.display||'primary',inline:true,
    requirement:'required',mediaType,afterAction,
    reason:'v16.3.90-H5.1 Week 3 page-specific media audit repair — exact subject fit; whole-video repetition prohibited; mapped Study Guide reading required.'
  });

  // PART 1 — CETa: eight distinct videos + eight distinct required readings.
  const cetaPlacements=[
    P('h5VccsScopeVsDmm',0,'w03-question-before-instrument','video','State the measurement question, then choose DMM or oscilloscope and explain what evidence that tool can reveal.'),
    P('h5RsDmmVsScopeReading',0,'w03-question-before-instrument','literature','Classify four scenarios as DMM-first or scope-first and justify the choice from the quantity/time behavior involved.'),

    P('h5EevblogAnalogDigital',0,'w03-meter-operation-construction','video','Compare analog-pointer and digital-meter behavior and identify one strength/limitation of each measurement approach.'),
    P('h5FlukeWhatIsDmmReading',0,'w03-meter-operation-construction','literature','Explain how the DMM display, selector, jacks, leads and input impedance participate in the measurement path.'),

    P('h5FlukeDmmHowToVideo',0,'w03-dmm-modes-connections','video','From memory, describe the correct jack/mode/physical connection for voltage, resistance/continuity and current.'),
    P('h5FlukeDcVoltageReading',0,'w03-dmm-modes-connections','literature','Write a safe 5 V rail measurement procedure, then contrast the voltage connection with series current insertion.'),

    P('h5KeysightCvCcVideo',0,'w03-supply-cv-cc','video','Predict whether a changed load/current limit leaves the supply in CV or pushes it into CC, and explain what happens to output voltage.'),
    P('h5KeysightCvCcReading',0,'w03-supply-cv-cc','literature','Use the CV/CC operating-locus idea to explain the crossover in your own words.'),

    P('h5TekTimeAmplitudeVideo',0,'w03-scope-voltage-over-time','video','Use volts/div and time/div to calculate Vpp, period and frequency from one waveform without relying on automatic measurements.'),
    P('h5TekXyzReading',0,'w03-scope-voltage-over-time','literature','Map vertical controls to voltage and horizontal controls to time, then explain how one cycle gives period/frequency.'),

    P('h5TekProbeSetupVideo',0,'w03-probe-reference-discipline','video','State the probe attenuation, compensation, coupling, reference/ground and rating checks you make before trusting a trace.'),
    P('h5TekProbesReading',0,'w03-probe-reference-discipline','literature','Name one safety error and two measurement errors a probe/reference setup can introduce.'),

    P('h5TekTriggerVideo',0,'w03-trigger-stable-display','video','Choose source, level and slope for a 0–3.3 V square wave and explain why repeated acquisitions stabilize.'),
    P('h5TekTriggerReading',0,'w03-trigger-stable-display','literature','Explain what trigger settings change about acquisition timing and what they do not fix.'),

    P('h5EevblogAccuracyVideo',0,'w03-measurement-limits','video','Explain the difference among counts, resolution, accuracy and calibration and why extra display digits do not prove truth.'),
    P('h5FlukeAccuracyReading',0,'w03-measurement-limits','literature','Use Fluke’s examples to explain accuracy, precision, resolution and range, then state one reason a result may be insufficient for a decision.')
  ];

  // PART 2 — Career: eight distinct videos + eight distinct required readings.
  const careerPlacements=[
    P('h5AfrotechmodsMultimeterVideo',1,'career-w03-question-first-selection','video','Turn one vague symptom into a measurable question and justify whether a DMM should be the first bench instrument.'),
    P('h5FlukePortableScopeReading',1,'career-w03-question-first-selection','literature','Write one technician scenario where a DMM is the correct first tool and one where time-domain evidence requires a scope.'),

    P('h5KeysightReadbackVideo',1,'career-w03-static-evidence','video','Build a static baseline record containing supply setpoints, voltage/current readback, CV/CC state, current draw and DMM rail value.'),
    P('h5KeysightBenchSupplyReading',1,'career-w03-static-evidence','literature','Separate supply setting from measured/readback behavior and list the static facts another technician needs before chasing a transient.'),

    P('h5TekProbeCompVideo',1,'career-w03-known-waveform-first','video','Explain how the scope reference square wave proves probe/channel behavior before an unknown DUT waveform is interpreted.'),
    P('h5TekScopeSetupReading',1,'career-w03-known-waveform-first','literature','Write the known-waveform setup in reproducible order: grounding/reference, controls, probe connection, compensation, stable display, manual check.'),

    P('h5TekProbeLoadingVideo',1,'career-w03-reference-loading-bandwidth','video','Describe how the probe/scope itself can alter amplitude or edges and create a false DUT symptom.'),
    P('h5TekProbeLoadingReading',1,'career-w03-reference-loading-bandwidth','literature','Create one DUT hypothesis and one measurement-system hypothesis for a suspicious waveform, then name a test that separates them.'),

    P('h5MethodicalFaultFindingVideo',1,'career-w03-discriminating-measurements','video','After the assigned 00:00–10:35 and 14:11–16:44 slices, choose the next measurement that gives the most information between two competing fault hypotheses.'),
    P('h5NeetsTestEquipmentReading',1,'career-w03-discriminating-measurements','literature','State what each possible result of your chosen measurement would rule in or rule out and why a broader instrument sweep is weaker.'),

    P('h5KeysightUncertaintyVideo',1,'career-w03-reproducible-evidence','video','Rewrite a bare numeric reading as a reproducible evidence statement that includes setup/context, limitation/uncertainty and the conclusion supported.'),
    P('h5NistUncertaintyReading',1,'career-w03-reproducible-evidence','literature','Explain why a measurement result is more than the displayed value and name the uncertainty/limitation another technician needs to judge it.'),

    P('h5KeysightOutOfCalVideo',1,'career-w03-test-asset-validity','video','Explain how an invalid test asset can make a good DUT look bad or a bad DUT look good, then state the pre-use checks that stop that mistake.'),
    P('h5NistTraceabilityReading',1,'career-w03-test-asset-validity','literature','Explain why a calibration sticker alone does not make the DUT result traceable and list the measurement-system/status evidence still required.'),

    P('h5KeysightTraceabilityVideo',1,'career-w03-measurement-capability-decision','video','Explain why traceability does not automatically mean the setup is capable of resolving the specific tolerance.'),
    P('h5NistDecisionRulesReading',1,'career-w03-measurement-capability-decision','literature','Classify a borderline result as PASS, FAIL or INCONCLUSIVE and explain how measurement uncertainty changes the decision risk.')
  ];

  const placements=[...cetaPlacements,...careerPlacements];

  // Replace all older target-Week-3 point-of-use cards. This removes H4 repeats rather
  // than layering H5 on top of them.
  const R=C.teachingResourceIntegration||{};
  const all=[...(R.placements||[]).filter(p=>Number(p.targetWeek)!==3),...placements];
  const byTargetWeek={},bySource={},byAssignment={};
  for(const p of all){
    (byTargetWeek[p.targetWeek] ||= []).push(p);
    (bySource[p.source] ||= []).push(p);
    (byAssignment[`${p.assignmentWeek}:${p.source}`] ||= []).push(p);
  }
  C.teachingResourceIntegration={
    ...R,revision:REV,placements:all,byTargetWeek,bySource,byAssignment,
    week3MediaQualityRevision:REV,week3PointOfUsePlacementCount:placements.length
  };

  // Every written resource attached to a lesson is Required. Optional reading belongs
  // in Study/Library, not the lesson Related Learning panel.
  const O=C.outsideLiteratureIntegration||{};
  const readingSources=placements.filter(p=>p.mediaType==='literature').map(p=>p.source);
  const sourceMeta={...(O.sources||{})};
  const literatureDetails={
    h5RsDmmVsScopeReading:['Manufacturer Reading','Read the DMM, oscilloscope and “when to use” comparison plus the scenario table.','Which instrument exposes the specific evidence you need?'],
    h5FlukeWhatIsDmmReading:['Manufacturer Fundamentals Reading','Read DMM purpose, impedance, main parts, resolution/counts and core functions.','How does the meter become part of the circuit and measurement path?'],
    h5FlukeDcVoltageReading:['Manufacturer Procedure','Read the DC-voltage setup/connection procedure only.','Jacks, mode, parallel connection, polarity/reference and safe handling.'],
    h5KeysightCvCcReading:['Manufacturer eBook Slice','Read Tip 1 “Understanding CV and CC” and its operating-locus figure only.','Load demand + set voltage + current limit determine CV/CC state.'],
    h5TekXyzReading:['Manufacturer Primer Slice','Read waveform types, vertical system, horizontal system and simple measurements only.','Voltage versus time, scales, divisions, period and frequency.'],
    h5TekProbesReading:['Manufacturer Primer Slice','Read Probing Safety plus loading, bandwidth, compensation and probe-selection sections.','Reference/ground, attenuation, compensation, loading, bandwidth and ratings.'],
    h5TekTriggerReading:['Manufacturer Trigger Reading','Read the trigger/capturing-signal portion only.','Source, level, slope and acquisition stability.'],
    h5FlukeAccuracyReading:['Manufacturer Fundamentals Reading','Read accuracy, precision, resolution, range, counts and digits.','Displayed precision is not the same as measurement truth.'],
    h5FlukePortableScopeReading:['Manufacturer Tool-Selection Reading','Read the multimeter-versus-oscilloscope portions and use cases.','Static precision versus time-dependent waveform evidence.'],
    h5KeysightBenchSupplyReading:['Manufacturer Bench-Supply Reading','Read adjustable output, readback/display, CV/CC, protection and calibration portions only.','Setpoint versus observed output/current and supply operating state.'],
    h5TekScopeSetupReading:['Manufacturer Setup Primer','Read Proper Grounding, Setting Controls, Connecting Probes, Compensating Probes and basic Measurement Techniques.','A repeatable known-good scope/probe setup before DUT diagnosis.'],
    h5TekProbeLoadingReading:['Manufacturer Application Note','Read input resistance, input capacitance, bandwidth and loading examples.','Could the test system itself create or hide the symptom?'],
    h5NeetsTestEquipmentReading:['Technician Reference Slice','Use only DMM/oscilloscope/test-equipment portions needed to choose a discriminating measurement.','Select the measurement that most efficiently separates hypotheses.'],
    h5NistUncertaintyReading:['Government Measurement-Science Reading','Read the introductory explanation of measurement, measurand and uncertainty.','How uncertainty limits the claim you can defend from a number.'],
    h5NistTraceabilityReading:['Government Metrology Reading','Read FAQ 5.1.1 and practical elements in 5.2.1.','Traceability belongs to a result and requires a documented measurement system/chain.'],
    h5NistDecisionRulesReading:['Government Conformity/Decision-Rule Reading','Read the abstract/explanation of conformity assessment, acceptance zones, decision rules and uncertainty.','How uncertainty creates decision risk near a tolerance boundary.']
  };
  for(const id of readingSources){
    const [literatureType,readUse,focus]=literatureDetails[id];
    sourceMeta[id]={
      ...(sourceMeta[id]||{}),...C.sources[id],author:C.sources[id]?.org,
      access:'Free/open online',literatureType:`Required · ${literatureType}`,
      provenance:'H5 page-specific Week 3 required reading; publisher/authority named in source record.',verified:'2026-10-05'
    };
  }
  const litRows=placements.filter(p=>p.mediaType==='literature').map(p=>{
    const [literatureType,readUse,focus]=literatureDetails[p.source];
    return {...p,literatureType:`Required · ${literatureType}`,readUse,focus,
      afterReading:p.afterAction,why:'Required written reinforcement for this exact Week 3 page; all lesson-level reading is Required.',
      realWorld:true,meta:sourceMeta[p.source]};
  });
  const allLit=[...(O.literaturePlacements||[]).filter(p=>Number(p.targetWeek)!==3),...litRows];
  const byPlacement={},byLitSource={};
  const litKey=p=>`${p.assignmentWeek}:${p.source}:${p.targetWeek}:${p.lesson}:${p.segment}`;
  for(const p of allLit){
    byPlacement[litKey(p)]=p;
    (byLitSource[p.source] ||= []).push(p);
  }
  C.outsideLiteratureIntegration={
    ...O,revision:REV,sources:sourceMeta,literaturePlacements:allLit,byPlacement,bySource:byLitSource,
    sourceIds:Object.keys(sourceMeta),placementCount:allLit.length,
    uniqueSourceCount:new Set(allLit.map(p=>p.source)).size,week3MediaQualityRevision:REV
  };

  // Content-structure guard. This does NOT claim browser verification; it prevents the
  // exact H4 failure mode (repeated whole videos) from being silently accepted again.
  const videos=placements.filter(p=>p.mediaType==='video');
  const readings=placements.filter(p=>p.mediaType==='literature');
  const videoIds=videos.map(p=>p.source);
  const videoUrls=videos.map(p=>C.sources[p.source]?.url).filter(Boolean);
  const duplicateIds=[...new Set(videoIds.filter((id,i,a)=>a.indexOf(id)!==i))];
  const duplicateUrls=[...new Set(videoUrls.filter((url,i,a)=>a.indexOf(url)!==i))];
  const allReadingsRequired=readings.every(p=>p.requirement==='required');
  const requiredGuideRecords=week3GuideIds.map(id=>SG?.records?.find(r=>r?.id===id)).filter(Boolean);
  const allMappedGuideRequired=requiredGuideRecords.length===4&&requiredGuideRecords.every(r=>r.classification==='required'&&r.role==='required'&&r.contextOnly===false);
  const guideSegmentChecks=[
    ['w03-question-before-instrument','sg-w03-v16371-p165-purpose'],
    ['w03-dmm-modes-connections','sg-w03-v16371-p167-169-dmm'],
    ['w03-measurement-limits','sg-w03-v16371-p167-169-dmm'],
    ['w03-scope-voltage-over-time','sg-w03-v16371-p172-173-scope'],
    ['w03-probe-reference-discipline','sg-w03-v16371-p173-probe-trigger'],
    ['w03-trigger-stable-display','sg-w03-v16371-p173-probe-trigger']
  ];
  const guidePlacementPolicyGood=guideSegmentChecks.every(([segment,id])=>(SG?.recordsForSegment?.(3,0,segment)||[]).some(r=>r?.id===id&&r?.classification==='required'));
  const perPage=[
    ...expectedCeta.map(id=>({track:'CETa',lesson:0,id})),
    ...expectedCareer.map(id=>({track:'Career',lesson:1,id}))
  ].map(page=>{
    const rows=placements.filter(p=>p.lesson===page.lesson&&p.segment===page.id);
    return {...page,videoSources:rows.filter(p=>p.mediaType==='video').map(p=>p.source),readingSources:rows.filter(p=>p.mediaType==='literature').map(p=>p.source)};
  });
  const structurallyGood=placements.length===32&&videos.length===16&&readings.length===16&&
    new Set(videoIds).size===16&&new Set(videoUrls).size===16&&duplicateIds.length===0&&duplicateUrls.length===0&&
    allReadingsRequired&&allMappedGuideRequired&&guidePlacementPolicyGood&&
    perPage.every(p=>p.videoSources.length===1&&p.readingSources.length===1);

  C.week3MediaQuality={
    revision:REV,
    status:structurallyGood?'VERIFIED_CONTENT_STRUCTURE':'FAILED_CONTENT_STRUCTURE',
    pageCount:16,cetaPageCount:8,careerPageCount:8,
    pointOfUsePlacementCount:placements.length,
    videoPlacementCount:videos.length,readingPlacementCount:readings.length,
    uniqueVideoSourceCount:new Set(videoIds).size,uniqueVideoUrlCount:new Set(videoUrls).size,
    duplicateVideoSourceIds:duplicateIds,duplicateVideoUrls:duplicateUrls,
    allLessonReadingsRequired:allReadingsRequired,
    studyGuideRequiredRecordCount:requiredGuideRecords.length,
    allMappedStudyGuideRequired:allMappedGuideRequired,
    studyGuidePlacementPolicyGood:guidePlacementPolicyGood,
    studyGuideRequiredPrintedPages:SG?.counts?.requiredPrintedPages,
    studyGuideLessonPolicy:'lesson-mapped Week 3 slices are Required on first assignment; an already-required record may reappear later as review/backlink',
    pages:perPage,
    specialistToolCoreExpansion:false,cloudSyncProtocol:2
  };
})();
