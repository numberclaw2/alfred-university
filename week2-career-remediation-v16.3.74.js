/* AU-ESET 301 — v16.3.74 Week 2 Career Coequal Instruction Remediation
   Scope: Week 2 Career lesson + cross-track handoffs + point-of-use career media/practice.
   Principle: CETa and Career are co-equal. CETa supplies circuit-analysis tools;
   Career teaches the technician decisions, demonstrations, practice, evidence, and documentation.
*/
(()=>{
  const C=window.ALFRED_CURRICULUM;
  if(!C?.modules?.length)return;
  const W=C.modules.find(m=>Number(m.week)===2);
  if(!W?.lessons?.length)return;
  const ceta=W.lessons[0], career=W.lessons[1];
  const A=C.teachingMediaArchitecture, R=C.teachingResourceIntegration, O=C.outsideLiteratureIntegration;

  const practice=(title,scenario,prompts,model,physical='')=>({title,scenario,prompts,model,physical});
  const demo=(title,steps,notice)=>({title,steps,notice});
  const handoff=(received,passes)=>({label:'CETa ↔ Career handoff',received,passes});

  // -----------------------------------------------------------------------
  // 1) Career pages: keep the five-concept progression, but make every page
  //    a complete technician lesson with demonstration + immediate practice.
  // -----------------------------------------------------------------------
  const T=career.integrated?.teaching||[];
  const byId=id=>T.find(s=>s.sectionId===id);

  const p1=byId('career-w02-predict-before-measuring');
  if(p1){
    p1.text='Treat the schematic as a map of expected behavior, not a picture to stare at after something fails. Mark the source, the reference node, important branches, and test points that divide the circuit into meaningful regions. Before touching the meter, write an expected value or range for the point you plan to test.\n\nUse the circuit-analysis tools from the CETa lesson to build those expectations: topology tells you what is shared, KCL constrains current at a node, KVL constrains voltage around a loop, and the divider relationship gives expected node voltage when its assumptions are valid. Then compare measured behavior to that model.\n\nA measurement is strongest when you can say what each possible result would mean before you take it. “What number is here?” is data collection. “If the source is healthy, I expect 10 V here; if I see 0 V I move upstream, and if I see 10 V I move downstream” is troubleshooting.';
    p1.remember='Prediction gives a reading meaning. Write the healthy expectation and the decision rule before probing.';
    p1.trackHandoff=handoff('CETa gives you topology, KCL/KVL, and divider calculations so you can define “normal.”','After measuring, return to the CETa model and explain which topology or conservation rule makes the result plausible or impossible.');
    p1.careerDemo=demo('Demonstration — predict, measure, interpret',["Draw a 10 V, two-resistor divider and label source, reference, midpoint, and load.","Calculate or estimate the healthy source and midpoint before touching the meter.","Write the decision rule: source wrong → move upstream; source right but midpoint wrong → move into the divider/load region.","Measure source first, then midpoint, keeping the same reference.","Compare actual to expected and state what region the result makes more or less likely."],'Watch the technician reasoning, not just the meter display: every probe placement is chosen because it can change the diagnosis.');
    p1.careerPractice=practice('Career Skill Drill — prediction table','A 5 V source feeds a 1 kΩ / 1 kΩ divider. The output is unloaded.',[
      'Before measuring, predict source, midpoint, ground, total current, and a reasonable direction of error if an unexpected load is attached.',
      'Write one sentence explaining what a correct source but low midpoint would tell you.',
      'Choose the first two measurements you would take and explain why that order is efficient.'
    ],'Healthy midpoint ≈2.5 V and series current ≈2.5 mA. A correct 5 V source with a low midpoint shifts suspicion downstream toward resistor value, loading, wiring, or reference—not toward a missing source. Measure the source/reference first, then the midpoint because the first result determines whether the second has diagnostic meaning.');
  }

  const p2=byId('career-w02-fault-signatures');
  if(p2){
    p2.text='Different faults tend to disturb a DC resistor network in recognizable ways. An open in a series path usually drives current toward zero and can leave a large voltage across the break. A short across a component pushes the voltage across that component toward zero and may increase current elsewhere.\n\nA wrong resistor value usually leaves the circuit alive but changes expected ratios. An unexpected load can imitate the wrong resistor because it changes the effective resistance at the node. A reference problem can make several otherwise-correct nodes appear wrong together because the measurement baseline is wrong.\n\nTreat these as signatures that rank hypotheses, not as automatic diagnoses. First predict the signature from the schematic, then deliberately choose a powered or power-off check that can confirm or reject it safely.';
    p2.trackHandoff=handoff('CETa series/parallel topology and the loaded-divider model tell you how opens, shorts, wrong values, and extra loading should change current and node voltage.','Use the fault signature to explain which KCL/KVL or divider relationship stopped matching the healthy model.');
    p2.careerDemo=demo('Demonstration — one circuit, four fault states',["Start with a healthy divider and record source, midpoint, and current expectation.","Open the upper path and predict the midpoint/current before measuring.","Restore the circuit, create a safe short/load condition, and predict how the midpoint changes.","Replace one resistor with a wrong value and compare the ratio shift with the open/short signatures.","For each case, name the measurement that proved the signature instead of guessing the component."],'Fault signatures become useful only when the learner sees the same circuit change state and connects the changed readings to the physical fault.');
    p2.careerPractice=practice('Fault-injection practice','A 10 V divider should produce 5 V. The actual midpoint is 0.2 V.',[
      'Name three plausible causes using the fault-signature table.',
      'For each cause, predict one additional reading that would support it.',
      'Choose one safe power-off check and explain what result would strongly support a short/load-to-ground hypothesis.'
    ],'Plausible causes include a short/heavy load to ground, an open/very high upper path, or an incorrect reference. With power removed, unexpectedly low resistance from midpoint to reference supports a short/heavy-load hypothesis. A healthy source under power with an abrupt voltage change across the upper path supports an open/high-resistance path.');
  }

  const p3=byId('career-w02-last-good-first-bad');
  if(p3){
    p3.text='Trace the intended signal or power path in an order that preserves information. If the source is correct, node A is correct, and node B is the first point that is wrong, A is the last known good point and B is the first known bad point. The most useful fault region is between those points or at a load/reference attached to B.\n\nDo not confuse “last good” with “first bad.” The good point is evidence that behavior was still correct up to that boundary. The bad point is evidence that the model has stopped matching somewhere before or at that point.\n\nFor a long path, you do not always have to walk every test point sequentially. Once the basic boundary idea is secure, split-half testing can sample near the middle of a long chain and eliminate roughly half the remaining region with one measurement. Sequential tracing is easier for a beginner; split-half is the technician extension.';
    p3.trackHandoff=handoff('CETa mixed-network reduction teaches you to redraw a complicated circuit into meaningful sections.','Once you isolate the suspect section, redraw only that region and recompute its expected values before the next test.');
    p3.careerDemo=demo('Demonstration — boundary first, then split the region',["Mark a path Source → A → B → C → Load with expected values at every point.","Reveal actual readings until A still matches and B is the first mismatch.","Shade only the region after A and at/before B instead of blaming the entire circuit.","On a longer chain, test near the midpoint of the remaining suspect region to eliminate a large portion quickly.","Stop when one component, connection, load, or reference explanation remains testable."],'This is the bridge from classroom node analysis to efficient board-level fault isolation.');
    p3.careerPractice=practice('Boundary practice','A path has expected readings S=12 V, A=9 V, B=6 V, C=3 V. Actual readings are S=12.0 V, A=9.1 V, B=1.0 V, C=0.9 V.',[
      'Identify the last known good point and first known bad point.',
      'State the immediate suspect region.',
      'If the path had 32 stages instead of four, explain how split-half could reduce the number of tests.'
    ],'A is last known good and B is first known bad. Concentrate on the path between A and B plus loads/references connected at B. With a long chain, test near the midpoint of the unexplored region; a good or bad result discards roughly half of the remaining path.');
  }

  const p4=byId('career-w02-discriminating-measurement');
  if(p4){
    p4.figure={type:'table',number:'Technician decision matrix',title:'Choose the test whose outcomes separate the hypotheses',columns:['Candidate test','Open upper resistor predicts','Output short predicts','Missing source predicts','Decision value'],rows:[['Measure Vout again','0 V','0 V','0 V','Low — all three predict the same result'],['Measure source-side voltage','12 V','12 V','0 V','High — immediately tests source-loss hypothesis'],['Power-off resistance Vout→GND','Normal intended resistance','Near 0 Ω','Normal intended resistance','High — separates output short from the other two']],caption:'The best next test is not the easiest measurement; it is the measurement whose possible outcomes divide the hypothesis set most strongly.',source:'Alfred technician decision model grounded in systematic troubleshooting / divide-and-conquer practice',provenance:'alfred-model'};
    p4.trackHandoff=handoff('CETa KCL/KVL and loaded-divider analysis let you predict what each competing fault would do to voltage, current, and resistance.','After the result, return to the governing equation or topology and explain why one hypothesis survived while the others did not.');
    p4.careerDemo=demo('Demonstration — stop measurement wandering',["Symptom: divider output is 0 V. List three hypotheses before touching the meter.","Write what each hypothesis predicts for source voltage, output voltage, and power-off output-to-ground resistance.","Cross out any candidate test whose result would be identical under every hypothesis.","Take the highest-information test first.","Update the hypothesis list before choosing another measurement."],'The technician skill is information selection. A meter reading is useful only if its possible outcomes change the next decision.');
    p4.careerPractice=practice('Choose-next-test drill','Vout is 0 V. Hypotheses: open upper resistor, output shorted to ground, or source missing.',[
      'Choose one: measure Vout again; measure source-side voltage; or perform a safe power-off Vout-to-ground resistance check.',
      'Before revealing the model, write what all three hypotheses predict for your chosen test.',
      'Explain whether your selected test truly separates the hypotheses.'
    ],'Measuring Vout again has almost no information value because every listed hypothesis predicts 0 V. Source-side voltage is a strong first test for the missing-source hypothesis; a power-off Vout-to-ground resistance check strongly tests the short hypothesis. Either can be correct depending on the evidence already collected, as long as you state the predicted outcomes first.');
  }

  const p5=byId('career-w02-change-one-verify');
  if(p5){
    p5.figure={type:'table',number:'Technician repair record',title:'A short causal record is stronger than “fixed”',columns:['Field','Example'],rows:[['Symptom','TP3 = 0.4 V; expected ≈4.5 V'],['Hypothesis','Unexpected connector-side load'],['Discriminating test','Disconnect connector and remeasure TP3'],['Before / after','0.4 V → 4.48 V'],['Change','Repair connector-side short'],['Verification','TP3 = 4.47 V with connector attached'],['Regression check','Source and upstream midpoint remain in tolerance'],['Disposition','PASS — original failure cleared and nearby behavior unchanged']],caption:'The record preserves the reasoning chain so a teammate can reproduce why the repair was made and why it is considered verified.',source:'Alfred technician documentation model; MIT PCB debugging workflow and production troubleshooting practice',sourceUrl:'https://pcb.mit.edu/archive/IAP2024/lectures/lecture_07/',provenance:'source-grounded'};
    p5.trackHandoff=handoff('CETa gives you the values and conservation checks that define the pass/fail expectation.','A repair is not complete until the measured circuit once again satisfies the expected CETa behavior and one nearby condition also remains correct.');
    p5.careerDemo=demo('Demonstration — diagnosis is not finished until verification',["Record the original failure and the exact test that exposed it.","State the single change being made and why the evidence supports it.","Repeat the original failing test after the change.","Run one nearby regression check to confirm the repair did not create another problem.","Write the causal record: symptom → expectation → measurement → conclusion → change → verification."],'A technician report should let someone else understand not only what was replaced, but why the evidence justified the repair.');
    p5.careerPractice=practice('Career Skill Drill — unknown-fault troubleshooting','Use the Week 2 resistor network. A partner, instructor, or simulator introduces one reversible fault without telling you which one.',[
      'Write healthy expectations and three hypotheses before probing.',
      'Choose measurements deliberately and count any unnecessary tests.',
      'Identify the last-good / first-bad boundary and isolate the fault region.',
      'Change one thing only, repeat the original failing test, perform one regression check, and complete the technician repair record.'
    ],'There is no single fixed measurement order because the injected fault can vary. Full-credit evidence is the reasoning chain: predictions, hypotheses, high-information test selection, boundary, diagnosis, one-variable repair, original-failure retest, regression check, and concise documentation.','Physical proficiency route: use only the approved low-voltage Week 2 network, power down before rewiring or resistance/continuity checks, and do not create a direct supply short. Simulation can demonstrate reasoning but not physical probe/lead handling.');
  }

  career.objectives=[
    'Predict healthy node voltages/currents before probing and state what each possible result would mean.',
    'Recognize common open, short, wrong-value, loading, and reference fault signatures without treating them as automatic diagnoses.',
    'Locate the last-known-good / first-known-bad boundary and extend the method with split-half isolation on longer paths.',
    'Choose discriminating measurements that separate competing hypotheses instead of collecting redundant readings.',
    'Change one variable, retest the original failure, perform a regression check, and preserve a reproducible technician record.'
  ];
  career.integrated.objectives=career.objectives;
  career.integrated.purpose='Turn Week 2 DC-network analysis into practical electronics-technician troubleshooting: predict, measure, isolate, discriminate, repair, verify, and document.';
  career.integrated.prereq='Use the Week 2 CETa pages as analytical tools, not as the lead track. Career pages independently teach how those tools become bench decisions and job evidence.';
  career.integrated.guidedPractice=[
    'Page 1 drill → build the expected-value table before touching the meter.',
    'Page 2 drill → inject or simulate an open/short/wrong-value/load fault and predict the signature before observing it.',
    'Page 3 drill → identify last-good / first-bad, then explain how split-half would scale to a longer path.',
    'Page 4 drill → choose the measurement with the highest information value and write predicted outcomes before testing.',
    'Page 5 drill → change one variable, retest the original failure, run one regression check, and complete a technician record.'
  ];
  career.integrated.independentScenario='Unknown-fault Career Skill Drill: diagnose one reversible low-voltage Week 2 network fault using predictions, at least three hypotheses, discriminating measurements, a last-good/first-bad boundary, one-variable repair, verification, regression, and a concise evidence record. Simulation may satisfy reasoning practice; physical proficiency requires real meter/probe handling on the approved low-voltage network.';
  career.integrated.connection='This is the core troubleshooting loop used in electronics technician, hardware test, validation, manufacturing test, repair, and embedded bring-up work. Later weeks add scopes, component testers, digital buses, and rework tools to the same prediction → evidence → isolation → verification loop.';
  career.integrated.teachBack='Explain a Week 2 troubleshooting case as if handing it to another technician: healthy expectation, symptom, hypotheses, chosen test and why it was discriminating, boundary, repair, original-failure retest, regression check, and final conclusion.';
  career.integrated.version='16.3.74';
  career.week2CareerRemediationRevision='2026-09-28-v16.3.74-coequal-career-instruction';

  // -----------------------------------------------------------------------
  // 2) Two-way CETa → Career → CETa handoffs. CETa supplies analytical tools;
  //    Career immediately tells the learner what technician decision they unlock.
  // -----------------------------------------------------------------------
  const ct=ceta.integrated?.teaching||[];
  const setH=(id,received,passes)=>{const s=ct.find(x=>x.sectionId===id);if(s)s.trackHandoff=handoff(received,passes);};
  setH('w02-topology-before-math','Career receives the node/branch/path map as the technician’s map of where useful test boundaries can exist.','Career returns evidence about where real behavior first diverges from that topology-based model.');
  setH('w02-series-one-path','Career receives the “same current through one path” prediction as a fault-signature tool.','An open or wrong-value symptom returns to CETa as a question: does the measured current/voltage pattern still satisfy the series model?');
  setH('w02-parallel-same-nodes','Career receives shared-node/shared-voltage reasoning for diagnosing branch faults and unexpected loading.','Career returns measured branch evidence that can be checked against the parallel equivalent and shared-voltage prediction.');
  setH('w02-kcl-conservation-charge','Career uses KCL as a plausibility check when measured branch currents or loading do not add up.','A suspicious branch measurement returns to CETa: write the KCL balance and identify which hypothesis makes it fail.');
  setH('w02-kvl-conservation-energy','Career uses KVL to decide whether measured drops around a suspected path can physically coexist.','The fault boundary returns to CETa: write the loop equation for the suspect region and compare expected versus actual drops.');
  setH('w02-mixed-reduce-redraw','Career turns the simplified/redrawn network into testable regions and last-good/first-bad boundaries.','Once the region is isolated, redraw only that section and recompute what the next measurement should be.');
  setH('w02-divider-ideal-then-loaded','Career uses loaded-divider reasoning to avoid blaming the divider when an attached load is actually pulling the node down.','A low output returns to CETa as a discriminating question: wrong resistor value, unexpected parallel load, or source/reference problem? Recompute each hypothesis before testing.');

  // -----------------------------------------------------------------------
  // 3) Career Teaching Media / literature. Three bounded Required sources plus
  //    contextual optional Study. AAC remains optional and visible at point-of-use.
  // -----------------------------------------------------------------------
  C.sources=C.sources||{};
  Object.assign(C.sources,{
    keysightBoardTroubleshootingW2Career:{title:'Troubleshooting Electronics Board with Keysight Handheld Instruments',org:'Keysight',kind:'Manufacturer board-troubleshooting demonstration video',url:'https://www.youtube.com/watch?v=sxYciIBQW9Q'},
    realparsOpenShortW2Career:{title:'How to Find Open and Short Circuits Fast',org:'RealPars',kind:'Practical troubleshooting video · 9:21',url:'https://www.youtube.com/watch?v=N8mj2CZ4sWs'},
    mitPcbDebuggingW2Career:{title:'Lecture 07 — Debugging',org:'MIT PCB Design',kind:'University debugging lecture notes · CC BY-SA 4.0',url:'https://pcb.mit.edu/archive/IAP2024/lectures/lecture_07/'},
    aacBasicTroubleshootingWorksheetW2:{title:'Basic Troubleshooting Strategies',org:'All About Circuits',kind:'Optional troubleshooting worksheet',url:'https://www.allaboutcircuits.com/worksheets/basic-troubleshooting-strategies/'}
  });

  W.integration=W.integration||{};W.integration.media=W.integration.media||[];
  const mediaDefs={
    keysightBoardTroubleshootingW2Career:{role:'Required Career · Real board troubleshooting context',use:'See what electronics-board troubleshooting looks like in an electronic manufacturing environment and focus on how technicians choose different evidence for different questions.',watchFor:'Focus on the workflow: symptom → instrument choice → evidence → next decision. You have not learned every featured instrument yet; do not copy LCR, oscilloscope, thermal-imager, or remote-logging procedures from this video in Week 2.',gap:'Career context only. Alfred’s Week 2 low-voltage resistor network remains the skill-practice environment.'},
    realparsOpenShortW2Career:{role:'Required Career · Open/short troubleshooting demonstration',use:'Watch a technician distinguish open and short faults with practical DMM testing instead of memorizing definitions.',watchFor:'Use 00:44–01:55 for the electrical behavior, then 02:48–end for the troubleshooting demonstrations. Focus on what the meter result means. Industrial PLC/relay hardware is context; the diagnostic logic transfers to electronics.',gap:'Alfred maps the same signatures back onto a low-voltage resistor network and adds wrong-value, loading, and reference faults.'},
    mitPcbDebuggingW2Career:{role:'Required Career · University debugging reading',use:'Read a professional debugging workflow that explicitly connects expected behavior, multimeter checks, continuity, voltage verification, and real PCB case studies.',watchFor:'Read Overview, Multimeters, and Strategies for Effective Debugging. On Page 5, reuse the Fixing Errors section as documentation/repair context. Skip logic-analyzer/scope details until those tools are taught.',gap:'The MIT board examples are more complex than Week 2. Alfred keeps your hands-on practice on a safe low-voltage resistor network.'},
    aacTroubleshootOpenShort:{role:'Study · Optional open/short reinforcement',use:'Use when you want a second explanation of how open and short faults change series-circuit measurements.',watchFor:'Predict voltage/current before reading the demonstrated result. Translate the circuit back to the Week 2 expected-versus-actual table.',gap:'Optional only; Alfred + RealPars are the first-pass Career path.'},
    aacTroubleshootingStrategies:{role:'Study · Optional fault-isolation strategy',use:'Use after the last-good/first-bad page for split-half, divide-and-conquer, signal tracing, and signal-injection vocabulary.',watchFor:'Focus on narrowing the fault region efficiently. Signal tracing/injection become more useful later when Alfred teaches changing signals and scopes.',gap:'Optional technician extension; do not treat later-tool techniques as Week 2 required skills.'},
    aacTroubleshootSeriesParallel:{role:'Study · Optional expected-vs-measured troubleshooting',use:'Use when you want another worked series/parallel troubleshooting example.',watchFor:'Write expected values first and notice how each measurement changes the set of plausible fault locations.',gap:'Optional reinforcement.'},
    aacBasicTroubleshootingWorksheetW2:{role:'Study · Optional troubleshooting reasoning worksheet',use:'Use after the discriminating-measurement page to practice divide-and-conquer reasoning without adding another formal assessment.',watchFor:'For every answer, write why the chosen test has more information value than measuring everything.',gap:'Optional practice; page-level Career drills remain the required application.'}
  };
  const ensureMedia=(source,d)=>{const i=W.integration.media.findIndex(x=>x.source===source);const n={source,...d};if(i>=0)W.integration.media[i]={...W.integration.media[i],...n};else W.integration.media.push(n);};
  Object.entries(mediaDefs).forEach(([id,d])=>ensureMedia(id,d));

  if(R?.placements){
    // Remove prior v16.3.74 career placements if the layer is evaluated twice.
    R.placements=R.placements.filter(p=>!(Number(p.assignmentWeek)===2&&Number(p.targetWeek)===2&&Number(p.lesson)===1&&String(p.revision||'').includes('v16.3.74')));
    const place=(source,segment,{requirement='supporting',mediaType='video',presentationRole='reinforcement',display='compact',relationship='Career reinforcement',afterAction='Return to Alfred and apply the idea to the Week 2 network.',inlineStudy=false}={})=>({assignmentWeek:2,source,targetWeek:2,lesson:1,segment,relationship,presentationRole,display,inline:true,inlineStudy,requirement,mediaType,afterAction,reason:'v16.3.74 Week 2 Career coequal-instruction remediation',revision:'v16.3.74'});
    const rows=[
      place('keysightBoardTroubleshootingW2Career','career-w02-predict-before-measuring',{requirement:'required',presentationRole:'demonstration',display:'primary',relationship:'Real electronics-board troubleshooting context',afterAction:'Name the measurement question the technician was answering each time a different instrument was selected.'}),
      place('mitPcbDebuggingW2Career','career-w02-predict-before-measuring',{requirement:'required',mediaType:'literature',presentationRole:'core',display:'primary',relationship:'Professional predict-then-debug workflow',afterAction:'Write a three-line rule for what you will predict before your next powered voltage measurement.'}),
      place('realparsOpenShortW2Career','career-w02-fault-signatures',{requirement:'required',presentationRole:'troubleshooting',display:'primary',relationship:'Practical open/short fault demonstration',afterAction:'Return to Alfred and predict the same open/short signatures on the Week 2 resistor network before running the Page 2 drill.'}),
      place('aacTroubleshootOpenShort','career-w02-fault-signatures',{requirement:'supporting',presentationRole:'reinforcement',relationship:'Optional alternate open/short explanation',inlineStudy:true}),
      place('aacTroubleshootingStrategies','career-w02-last-good-first-bad',{requirement:'supporting',presentationRole:'go-deeper',relationship:'Optional split-half / divide-and-conquer extension',inlineStudy:true,afterAction:'Explain how split-half differs from sequential last-good/first-bad tracing.'}),
      place('mitPcbDebuggingW2Career','career-w02-last-good-first-bad',{requirement:'supporting',mediaType:'literature',presentationRole:'review',relationship:'Reuse professional debugging strategy',afterAction:'Connect MIT’s continuity/voltage checks to the boundary you just isolated.'}),
      place('aacBasicTroubleshootingWorksheetW2','career-w02-discriminating-measurement',{requirement:'supporting',mediaType:'literature',presentationRole:'reinforcement',relationship:'Optional choose-the-next-test practice',inlineStudy:true}),
      place('aacTroubleshootSeriesParallel','career-w02-discriminating-measurement',{requirement:'supporting',presentationRole:'reinforcement',relationship:'Optional expected-vs-measured worked example',inlineStudy:true}),
      place('mitPcbDebuggingW2Career','career-w02-change-one-verify',{requirement:'supporting',mediaType:'literature',presentationRole:'reference',relationship:'Repair / documentation context',afterAction:'Compare the MIT repair workflow with Alfred’s symptom → evidence → change → verification record.'}),
      place('keysightBoardTroubleshootingW2Career','career-w02-change-one-verify',{requirement:'supporting',presentationRole:'review',relationship:'Return to real board troubleshooting context',afterAction:'Identify one example of evidence preservation or tool choice you understand better after completing the Career lesson.'})
    ];
    R.placements.push(...rows);
    R.byTargetWeek={};R.bySource={};R.byAssignment={};
    R.placements.forEach(p=>{(R.byTargetWeek[p.targetWeek]||(R.byTargetWeek[p.targetWeek]=[])).push(p);(R.bySource[p.source]||(R.bySource[p.source]=[])).push(p);const k=`${p.assignmentWeek}:${p.source}`;(R.byAssignment[k]||(R.byAssignment[k]=[])).push(p);});
    R.week2CareerRequiredSourceIds=['keysightBoardTroubleshootingW2Career','mitPcbDebuggingW2Career','realparsOpenShortW2Career'];
    R.week2ApprovedSourceIds=[...new Set([...(R.week2ApprovedSourceIds||[]),...R.week2CareerRequiredSourceIds])];
    R.week2CareerMediaRevision='2026-09-28-v16.3.74-coequal-career-media';
  }

  if(A?.assignments){
    const make=(source,destination,requirement,studyCategory='',track='career')=>({key:`2:${source}`,assignmentWeek:2,source,destination,requirement,studyWeek:2,studyCategory,libraryCategory:'',track,originalRequirement:requirement,originalRole:destination==='classroom'?(requirement==='required'?'Required':'Supporting'):'Study',placements:(R?.placements||[]).filter(p=>+p.assignmentWeek===2&&p.source===source)});
    for(const id of ['keysightBoardTroubleshootingW2Career','mitPcbDebuggingW2Career','realparsOpenShortW2Career']) A.assignments[`2:${id}`]=make(id,'classroom','required','', 'career');
    const studies={aacTroubleshootOpenShort:'Fault Signatures',aacTroubleshootingStrategies:'Fault Isolation Strategy',aacTroubleshootSeriesParallel:'Troubleshooting Help',aacBasicTroubleshootingWorksheetW2:'Troubleshooting Practice'};
    for(const [id,cat] of Object.entries(studies)) A.assignments[`2:${id}`]={...(A.assignments[`2:${id}`]||make(id,'study','supporting',cat,'career')),key:`2:${id}`,assignmentWeek:2,source:id,destination:'study',requirement:'supporting',studyWeek:2,studyCategory:cat,track:'career',originalRequirement:'supporting',originalRole:'Study',placements:(R?.placements||[]).filter(p=>+p.assignmentWeek===2&&p.source===id)};
  }

  // Outside literature metadata for the required MIT reading and optional worksheet.
  if(O){
    O.sources=O.sources||{};
    O.sources.mitPcbDebuggingW2Career={title:C.sources.mitPcbDebuggingW2Career.title,org:'MIT PCB Design',author:'MIT PCB Design course',kind:'University lecture notes',url:C.sources.mitPcbDebuggingW2Career.url,access:'Free online',literatureType:'Required Career Reading',provenance:'MIT course lecture notes; CC BY-SA 4.0.',verified:'2026-09-28'};
    O.sources.aacBasicTroubleshootingWorksheetW2={title:C.sources.aacBasicTroubleshootingWorksheetW2.title,org:'All About Circuits',author:'All About Circuits',kind:'Troubleshooting worksheet',url:C.sources.aacBasicTroubleshootingWorksheetW2.url,access:'Free online',literatureType:'Optional Study Worksheet',provenance:'Troubleshooting practice worksheet.',verified:'2026-09-28'};
    O.literaturePlacements=(O.literaturePlacements||[]).filter(p=>!(+p.assignmentWeek===2&&['mitPcbDebuggingW2Career','aacBasicTroubleshootingWorksheetW2'].includes(p.source)));
    const addLit=(source,segment,meta)=>{const base=(R?.placements||[]).find(p=>+p.assignmentWeek===2&&p.source===source&&p.segment===segment);if(base)O.literaturePlacements.push({...base,...meta,meta:O.sources[source]});};
    addLit('mitPcbDebuggingW2Career','career-w02-predict-before-measuring',{literatureType:'Required Career Reading',readUse:'Read Overview, Multimeters, and Strategies for Effective Debugging. Skip oscilloscope/logic-analyzer detail until those tools are taught.',focus:'Expected behavior before probing; continuity power-off; checking voltages against what the board should do; using evidence to narrow faults.',afterReading:'Write the exact prediction you will make before your next powered voltage measurement and the result that would move you upstream versus downstream.',why:'A university PCB course shows that real debugging depends on a model of expected behavior plus deliberate measurement—not random probing.'});
    addLit('mitPcbDebuggingW2Career','career-w02-change-one-verify',{literatureType:'Prior Required Reading · Reuse',readUse:'Reuse the Fixing Errors section only.',focus:'Repairs follow identified evidence; verify the actual fault is corrected rather than changing many things at once.',afterReading:'Compare the professional workflow with Alfred’s technician repair record.',why:'The repair step should preserve the causal link from symptom to evidence to correction.'});
    addLit('aacBasicTroubleshootingWorksheetW2','career-w02-discriminating-measurement',{literatureType:'Optional Study Worksheet',readUse:'Work only the questions that ask you to choose troubleshooting strategy / divide the fault region. Stop if the worksheet reaches components or tools Alfred has not taught yet.',focus:'Why one test is more informative than another and how divide-and-conquer reduces the search space.',afterReading:'For one problem, write the predicted outcomes under at least two competing hypotheses before choosing the measurement.',why:'Optional reasoning practice for the exact “choose the next test” skill.'});
    O.byPlacement={};O.bySource={};
    const key=p=>`${p.assignmentWeek}:${p.source}:${p.targetWeek}:${p.lesson}:${p.segment}`;
    O.literaturePlacements.forEach(p=>{O.byPlacement[key(p)]=p;(O.bySource[p.source]||(O.bySource[p.source]=[])).push(p);});
    O.sourceIds=[...new Set([...Object.keys(O.sources),...Object.keys(O.bySource)])];O.placementCount=O.literaturePlacements.length;O.uniqueSourceCount=O.sourceIds.length;
    O.week2CareerLiteratureRevision='2026-09-28-v16.3.74-career-point-of-use';
  }

  // -----------------------------------------------------------------------
  // 4) Rebalance Week 2 mastery: Career is co-equal, not 2/12.
  // -----------------------------------------------------------------------
  const AS=window.ALFRED_ASSESSMENT;
  if(AS?.questions){
    const q=(id,prompt,choices,answer,explanation,skill,section,standards)=>({id,track:'Career',standards,prompt,choices,answer,explanation,difficulty:'Foundation',kind:'MCQ',skill,questionClass:'substantive',masteryEvidence:true,evidenceWeight:0.7,sourceRef:'Alfred Week 2 Career v16.3.74',minWeek:2,family:`v16374-${id}`,reviewSectionId:section,reviewSectionTitle:(T.find(s=>s.sectionId===section)||{}).title||'Week 2 Career troubleshooting',reviewStandardCodes:standards.map(s=>s.replace('CAREER:','')),reviewConcept:'Week 2 Career troubleshooting',reviewRouteVersion:'16.3.74',audit:{status:'week2-career-v16.3.74-reviewed',date:'2026-09-28',note:'Original Alfred scenario aligned to the remediated Career lesson; not an official ETA item.',sources:[{title:'Alfred Week 2 Career remediation',url:'',locator:section}]}});
    const add=[
      q('CQ1204','A 10 V divider should have a 5 V midpoint. Before probing, what is the strongest troubleshooting habit?',['Measure random nodes until one looks strange','Write the expected source/midpoint values and what each possible result would imply','Replace both resistors','Measure resistance while the circuit is powered'],1,'Prediction turns each measurement into evidence and determines what the result means.','Application','career-w02-predict-before-measuring',['CAREER:C2.1','CAREER:C3.1']),
      q('CQ1205','A series path is open. Which signature is most consistent with that fault?',['Current through the path tends toward zero and a large voltage can appear across the break','Voltage across the break must be exactly zero','Every node must become the source voltage','Resistance to ground must always be zero'],0,'An open interrupts current; the source can place a substantial potential difference across the break.','Understanding','career-w02-fault-signatures',['CAREER:C2.4','CAREER:C5.1']),
      q('CQ1206','Source and node A match predictions, but the immediately downstream node B does not. What should you do next?',['Treat A as last known good, B as first known bad, and concentrate on the boundary/load/reference around B','Replace the supply','Ignore A and start over at a random node','Assume node A is the fault because it was measured first'],0,'The last-good / first-bad boundary narrows the region without claiming every upstream detail is permanently proven.','Application','career-w02-last-good-first-bad',['CAREER:C2.6','CAREER:C5.1']),
      q('CQ1207','Vout is 0 V under three hypotheses: open upper resistor, output short, or missing source. Which test has the LEAST information value?',['Measure Vout again','Measure source-side voltage','Power off and measure Vout-to-ground resistance','Compare voltage on both sides of the upper resistor'],0,'All three hypotheses already predict 0 V at Vout, so repeating that measurement barely separates them.','Application','career-w02-discriminating-measurement',['CAREER:C5.2','CAREER:C3.1']),
      q('CQ1208','After repairing a suspected connector-side short, what is the strongest verification?',['Stop as soon as the board powers on','Repeat the original failing measurement, then run one nearby regression check','Replace another component just in case','Delete the original readings so the record is cleaner'],1,'Verification must directly retest the original failure and check that the repair did not create a nearby problem.','Application','career-w02-change-one-verify',['CAREER:C5.3','CAREER:C2.1']),
      q('CQ1209','Why is changing several components and wires at once weak troubleshooting practice?',['It makes the circuit too visually simple','A successful result no longer tells you which change actually corrected the fault','It always violates Ohm’s law','It prevents any voltage measurement from being taken'],1,'One-variable changes preserve causal evidence between the diagnosis, repair, and verification.','Understanding','career-w02-change-one-verify',['CAREER:C5.2','CAREER:C5.3'])
    ];
    const ids=new Set(add.map(x=>x.id));AS.questions=AS.questions.filter(x=>!ids.has(x.id));AS.questions.push(...add);
    const test=(AS.weeklyTests||[]).find(x=>+x.week===2);
    if(test){
      test.title='Week 02 Mastery — DC Networks + Technician Troubleshooting';
      test.career=['C2.1','C2.4','C2.6','C3.1','C5.1','C5.2','C5.3'];
      test.count=12;test.mix={CETa:6,Career:6};test.target=80;
      test.questionIds=['CQ1067','CQ1068','CQ0312','CQ0316','CQ1088','CQ0290','CQ1204','CQ1205','CQ1206','CQ1207','CQ1208','CQ1209'];
      test.alignment='Balanced Week 2 mastery: six circuit-analysis questions and six technician-troubleshooting questions. CETa and Career are co-equal evidence tracks.';
      test.optional=true;
    }
    if(AS.meta){AS.meta.questionCount=AS.questions.length;AS.meta.cetaQuestionCount=AS.questions.filter(x=>x.track==='CETa').length;AS.meta.careerQuestionCount=AS.questions.filter(x=>x.track==='Career').length;}
  }

  // -----------------------------------------------------------------------
  // 5) Release accounting.
  // -----------------------------------------------------------------------
  W.week2CareerRemediationRevision='2026-09-28-v16.3.74-coequal-career-instruction';
  W.week2CareerRequiredMediaCount=3;
  W.week2CareerPointOfUseStudyCount=4;
  W.week2CareerPagePracticeCount=5;
  W.week2CareerHandoffModel='CETa supplies analytical tools; Career teaches the technician decision; Career returns measured evidence to the CETa model.';
  C.meta=C.meta||{};
  C.meta.week2CareerRemediationRevision=W.week2CareerRemediationRevision;
  C.meta.week2CareerRequiredMediaCount=3;
  C.meta.week2CareerRequiredMediaSources=['keysightBoardTroubleshootingW2Career','mitPcbDebuggingW2Career','realparsOpenShortW2Career'];
  C.meta.week2CareerPointOfUseStudyCount=4;
  C.meta.week2CareerPagePracticeCount=5;
  C.meta.week2CareerMasteryMix={CETa:6,Career:6};
  C.meta.week2CareerTrackStatus='COEQUAL — page-level demonstration, media, literature, practice, two-way CETa handoffs, and balanced mastery added.';
})();
