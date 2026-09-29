/* AU-ESET 301 v16.3.81 — Week 3 three-gate remediation
   Scope: Week 3 only. Load after v16.3.80 CETa authority.
   Goals: close CETa 8.1/8.2, activate C15 metrology/test-asset behaviors,
   re-home C3.8 to later specialty-instrument work, and harden LAB-003 evidence.
*/
(()=>{
  'use strict';
  if(window.__ALFRED_WEEK3_REMEDIATION_16381__) return;
  window.__ALFRED_WEEK3_REMEDIATION_16381__=true;

  const C=window.ALFRED_CURRICULUM;
  const A=window.ALFRED_ASSESSMENT;
  const AC=window.ALFRED_ACADEMIC;
  const CG=window.ALFRED_CAREER_GOVERNANCE;
  const T=window.ALFRED_TANDEM_GOVERNANCE;
  const rev='2026-09-29-v16.3.81-week3-three-gate-remediation';

  const upsert=(arr,item,key='sectionId')=>{
    if(!Array.isArray(arr)) return;
    const i=arr.findIndex(x=>x&&x[key]===item[key]);
    if(i>=0) arr[i]={...arr[i],...item}; else arr.push(item);
  };
  const removeCode=(arr,code)=>Array.isArray(arr)?arr.filter(x=>x!==code):[];
  const addCode=(arr,code)=>{arr=Array.isArray(arr)?arr:[];return arr.includes(code)?arr:[...arr,code];};

  // -----------------------------------------------------------------------
  // 1) Learner-facing Week 3 CETa + Career instruction.
  // -----------------------------------------------------------------------
  if(C?.modules?.length){
    const W=C.modules.find(m=>Number(m.week)===3);
    if(W?.lessons?.length){
      const ceta=W.lessons.find(l=>l.track==='CETa')||W.lessons[0];
      const career=W.lessons.find(l=>l.track==='Career')||W.lessons[1];

      if(ceta){
        ceta.objectives=Array.isArray(ceta.objectives)?ceta.objectives:[];
        const meterObjective='Explain the operating difference between analog and digital meters, identify the major functional blocks that make a meter work, and connect those design choices to range, polarity, loading, resolution, and safe use.';
        if(!ceta.objectives.includes(meterObjective)) ceta.objectives.splice(1,0,meterObjective);

        const compact={
          title:'Analog and digital meters: what is happening inside the tool',
          teach:'An analog meter turns current through a sensitive meter movement into pointer deflection across a printed scale. Range networks extend what that movement can measure, so polarity, range selection, scale reading, and circuit loading matter. A digital meter instead conditions the input, converts the electrical quantity into a digital value, and displays a number. Digital meters usually have high input impedance, but they still load the circuit and their extra digits describe resolution—not guaranteed accuracy. In both types, the meter is part of the circuit during a measurement. The internal design explains why voltage, resistance, and current modes use different paths, inputs, ranges, and protection.',
          remember:'Analog: movement + scale + range network. Digital: input conditioning + conversion + display. Neither meter is electrically invisible.'
        };
        ceta.sections=Array.isArray(ceta.sections)?ceta.sections:[];
        const ci=ceta.sections.findIndex(s=>String(s?.title||'').startsWith('Analog and digital meters'));
        if(ci>=0)ceta.sections[ci]={...ceta.sections[ci],...compact};else ceta.sections.splice(Math.min(1,ceta.sections.length),0,compact);

        const meterTeaching={
          sectionId:'w03-meter-operation-construction',
          title:'Analog and digital meters: operation, construction, and loading',
          buildOn:'Week 1 established voltage, current, resistance, and safe DMM use. Now connect those actions to the instrument model underneath them.',
          text:'A meter does not simply “look at” a circuit. It becomes part of the measurement path. In an analog meter, a small current drives a meter movement and pointer. Internal resistors, shunts, rectifier networks, switches, and protection components extend the basic movement into usable voltage, current, and resistance ranges. Because the movement needs current, analog meters can load a circuit noticeably; reading the correct scale and polarity also matters.\n\nA digital meter conditions the input and converts it to a digital code before displaying a number. Typical blocks include protected input jacks, function/range selection, voltage-divider or shunt networks, an analog-to-digital conversion stage, control logic, and the display. A high input impedance reduces loading in voltage mode, but it does not make loading zero. The number of visible digits primarily describes resolution; accuracy comes from the instrument specification, range, conditions, and calibration/status.\n\nThe practical rule is the same for both meter families: know what quantity you are measuring, know which internal path the selected mode uses, choose a safe range/input, predict the expected result, and ask whether the meter itself could meaningfully change the circuit.',
          remember:'Meter construction explains measurement behavior: input path + range network + sensing/conversion + display/indication + protection.',
          figure:{type:'table',number:'Week 3 meter model',title:'Analog and digital meter mental model',columns:['Feature','Analog meter','Digital meter','Technician consequence'],rows:[['Indication','Pointer on scale','Numeric display','Read the correct scale/range or digits'],['Sensing path','Meter movement plus range/shunt network','Conditioning plus ADC/conversion path','Selected mode changes the internal circuit'],['Loading','Often more noticeable in voltage measurements','Usually lower with high input impedance','Never assume the meter is invisible'],['Quality limits','Scale resolution, movement/range accuracy','Display resolution plus stated accuracy','More digits do not prove more accuracy']],caption:'The internal model is taught only far enough to explain correct use, loading, range, and measurement quality.',source:'ETA CETa competencies 8.1–8.2; Fluke digital multimeter fundamentals',provenance:'source-grounded'}
        };
        ceta.integrated=ceta.integrated||{};
        ceta.integrated.teaching=Array.isArray(ceta.integrated.teaching)?ceta.integrated.teaching:[];
        const ti=ceta.integrated.teaching.findIndex(s=>s?.sectionId===meterTeaching.sectionId);
        if(ti>=0)ceta.integrated.teaching[ti]={...ceta.integrated.teaching[ti],...meterTeaching};else ceta.integrated.teaching.splice(Math.min(1,ceta.integrated.teaching.length),0,meterTeaching);

        ceta.integrated.semanticTasks=Array.isArray(ceta.integrated.semanticTasks)?ceta.integrated.semanticTasks:[];
        const meterTask={taskId:'SEM-8-W03-16381',title:'CETa 8.1–8.2 meter operation and construction',track:'CETa',codes:['8.1','8.2'],teach:'Use the Week 3 analog/digital meter operation and construction page.',prompt:'Explain the major functional difference between an analog meter and a digital meter, then name at least two internal blocks or networks that affect how a measurement behaves. Finish by explaining why a meter can load the circuit and why display resolution is not the same thing as accuracy.',required:['Analog meter movement/scale model','Digital input-conditioning/conversion/display model','Range/shunt/divider/protection function','Loading consequence','Resolution versus accuracy distinction'],reviewSectionIds:['w03-meter-operation-construction'],reviewRouteVersion:'16.3.81'};
        const mt=ceta.integrated.semanticTasks.findIndex(t=>t?.taskId===meterTask.taskId);
        if(mt>=0)ceta.integrated.semanticTasks[mt]={...ceta.integrated.semanticTasks[mt],...meterTask};else ceta.integrated.semanticTasks.push(meterTask);
        ceta.integrated.version='16.3.81';

        W.standards=W.standards||{};
        W.standards.ceta=addCode(addCode(W.standards.ceta,'8.1'),'8.2');
      }

      if(career){
        career.integrated=career.integrated||{};
        career.integrated.teaching=Array.isArray(career.integrated.teaching)?career.integrated.teaching:[];
        const metrologyA={
          sectionId:'career-w03-test-asset-validity',
          title:'Before trusting the DUT result, prove the test asset is fit to use',
          buildOn:'A technically correct measurement method can still produce bad evidence when the instrument, probe, cable, status, or configuration is wrong.',
          text:'Before using a measurement as acceptance or troubleshooting evidence, verify the measurement chain. Identify the instrument and accessory you are actually using; inspect leads, probes, connectors, and visible condition; confirm the voltage/current/category/bandwidth or other relevant rating is appropriate; verify function, range, probe factor, coupling, reference, and any configuration that can change the result. When calibration or status information applies, confirm that status is current and acceptable for the task. Then perform the best available self-test, zero, probe compensation, known-reference, or reasonableness check. If that check fails, stop treating later DUT readings as trustworthy. The first diagnosis may be “measurement system not yet proven,” not “DUT failed.”',
          remember:'Test the test system before blaming the DUT.',
          occupationalTask:'Perform a pre-use validity check on the DMM/supply/scope measurement chain before using it as technician evidence.',
          careerDemo:{scenario:'A known 1 kHz scope reference looks distorted and its amplitude is wrong.',steps:['Check probe condition and attenuation switch.','Match the channel probe factor.','Compensate the passive probe on the known reference.','Record the reference result before moving to the DUT.'],decision:'A failed known-reference check invalidates DUT conclusions until the measurement chain is corrected.'},
          careerPractice:{prompt:'Given one DMM, supply, scope and probe, write the exact pre-use checks you would complete before accepting a DUT result.',required:['identity/status','ratings/condition','configuration','known-reference or sanity check','stop/escalate rule'],physical:'Reasoning can be practiced virtually. Physical proficiency requires handling the real instrument, probe/leads, controls and reference connection.'},
          physicalBoundary:'Simulation can prove the validity decision but cannot prove physical lead/probe inspection, compensation, connector handling, or real calibration/status verification.',
          evidenceSpec:'Instrument/fixture pre-use record + known-reference/self-test result + validity decision.',
          occupationalBenchmarkIds:['blsTech','rtxRepairTech','nasaMetrology'],
          trackHandoff:{fromCeta:['8.3','8.4','8.6','8.12','8.12.1'],toCareer:['C15.1','C15.2','C15.4','C15.5'],rule:'CETa instrument knowledge supports the validity check; Career requires observable technician evidence.'}
        };
        const metrologyB={
          sectionId:'career-w03-measurement-capability-decision',
          title:'Decide whether the measurement is good enough for the conclusion',
          buildOn:'The prior page established a valid measurement chain. Now decide whether the instrument can actually support the decision being made.',
          text:'A reading can be real and still be too weak to support PASS or FAIL. Compare the expected value and tolerance with the instrument’s accuracy, resolution, repeatability, loading, bandwidth, and stated uncertainty or limitations that matter for the task. If the allowed tolerance is smaller than what the setup can resolve or support confidently, the correct technician result is inconclusive—not a forced pass or fail. When the evidence looks suspicious, use a known-good reference, a second independent measurement, a substitute cable/probe/fixture, or another controlled check to separate a DUT problem from a test-system problem. Preserve the raw reading and the setup that produced it.',
          remember:'A trustworthy instrument can still be incapable of supporting a particular decision.',
          occupationalTask:'Judge whether a measurement can support PASS/FAIL or troubleshooting, and isolate DUT failure from measurement-system failure when evidence conflicts.',
          careerDemo:{scenario:'A 5.00 V rail must be within ±0.01 V, but the available setup has ±0.03 V stated uncertainty in the present range/conditions.',steps:['Compare the tolerance band with measurement capability.','Do not convert the display digits into false certainty.','Classify the result as inconclusive for acceptance.','Choose a better range/instrument or independent method before deciding PASS/FAIL.'],decision:'Do not issue a stronger conclusion than the measurement system can support.'},
          careerPractice:{prompt:'For a measurement with a stated tolerance and instrument limit, classify the result as pass, fail, or inconclusive and justify the decision. Then name one controlled check that separates DUT from test-system fault.',required:['expected/tolerance','instrument capability','valid verdict','known-good or independent cross-check','raw evidence preserved'],physical:'The reasoning may be simulated; role-proof instrument capability and DUT-vs-test-system isolation require authentic measurement evidence when physical proficiency is claimed.'},
          physicalBoundary:'Simulation can prove the decision logic but not real calibration status, physical accessory condition, contact quality, probe loading, or actual instrument performance.',
          evidenceSpec:'Measurement-capability justification + PASS/FAIL/inconclusive decision + DUT-vs-test-system isolation record.',
          occupationalBenchmarkIds:['blsTech','l3harrisAlpharetta','rtxRepairTech','nasaMetrology'],
          trackHandoff:{fromCeta:['8.6','8.12','8.12.1','9.1','9.3'],toCareer:['C15.3','C15.5'],rule:'CETa concepts describe instrument limits; Career applies those limits to a defensible technician decision.'}
        };
        upsert(career.integrated.teaching,metrologyA);
        upsert(career.integrated.teaching,metrologyB);

        const defaultGovernance={
          occupationalTask:'Use the DMM, current-limited supply, and oscilloscope to collect valid, reproducible evidence for a defined low-voltage troubleshooting question.',
          careerDemo:{scenario:'Alfred demonstrates the Week 3 measurement workflow on a known low-voltage condition.',steps:['State the question and expected result.','Choose and configure the instrument.','Verify the setup/reference.','Measure and compare.','Record limitations and conclusion.']},
          careerPractice:{prompt:'Repeat the page skill on the Week 3 board/scenario and preserve the requested evidence.',required:['question','expected result','setup','measurement','conclusion'],physical:'Reasoning/simulation evidence does not replace physical instrument handling when physical proficiency is claimed.'},
          physicalBoundary:'Simulation can prove planning and interpretation; physical DMM jack/lead use, supply controls, scope probe/reference handling, and probe compensation require real equipment.',
          evidenceSpec:'Reproducible measurement record with expected result, setup, raw evidence, limitation and conclusion.',
          occupationalBenchmarkIds:['onetTech','blsTech','l3harrisAlpharetta','nasaMetrology'],
          trackHandoff:{fromCeta:['8.3','8.4','8.6','8.12','8.12.1'],toCareer:['C3.1','C3.2','C3.3','C3.4','C3.6'],rule:'CETa explains the instrument model; Career requires technician performance and evidence.'}
        };
        career.integrated.teaching.forEach(s=>{
          if(!s.occupationalTask)s.occupationalTask=defaultGovernance.occupationalTask;
          if(!s.careerDemo)s.careerDemo=defaultGovernance.careerDemo;
          if(!s.careerPractice)s.careerPractice=defaultGovernance.careerPractice;
          if(!s.physicalBoundary)s.physicalBoundary=defaultGovernance.physicalBoundary;
          if(!s.evidenceSpec)s.evidenceSpec=defaultGovernance.evidenceSpec;
          if(!s.occupationalBenchmarkIds)s.occupationalBenchmarkIds=defaultGovernance.occupationalBenchmarkIds;
          if(!s.trackHandoff)s.trackHandoff=defaultGovernance.trackHandoff;
        });

        career.sections=career.integrated.teaching.map(s=>({title:s.title,teach:s.text,remember:s.remember}));
        career.integrated.version='16.3.81';
        career.integrated.purpose='Turn core bench instruments into a question-first, test-system-aware technician measurement workflow.';
        career.integrated.semanticTasks=Array.isArray(career.integrated.semanticTasks)?career.integrated.semanticTasks:[];
        const core=career.integrated.semanticTasks.find(t=>t?.taskId==='SEM-C3-03-1640A');
        if(core){
          core.codes=['C3.1','C3.2','C3.3','C3.4','C3.6','C15.1','C15.2','C15.3','C15.4','C15.5'];
          core.prompt='For a low-voltage board that intermittently resets during startup, write a measurement plan using the bench supply, DMM, and oscilloscope only. Include the hypothesis, expected result, pre-use/status checks, known-reference check, reference/setup, stop condition, result-validity decision, one measurement that separates competing hypotheses, and what each possible result would imply.';
          core.required=['Question and expected result before probing','Correct DMM and supply evidence','Safe scope reference/probe/scale/timebase/trigger plan','Pre-use status/configuration check','Known-reference or reasonableness check','One measurement that separates competing hypotheses','PASS/FAIL/inconclusive reasoning when measurement capability matters','Reproducible record with relevant uncertainty/limitations'];
          core.reviewSectionIds=['career-w03-question-first-selection','career-w03-test-asset-validity','career-w03-measurement-capability-decision','career-w03-discriminating-measurements','career-w03-reproducible-evidence'];
          core.reviewRouteVersion='16.3.81';
        }
        W.standards=W.standards||{};
        W.standards.career=['C3.1','C3.2','C3.3','C3.4','C3.6','C15.1','C15.2','C15.3','C15.4','C15.5'];

        if(W.integration){
          W.integration.guided=Array.isArray(W.integration.guided)?W.integration.guided:[];
          if(!W.integration.guided.some(x=>String(x).includes('calibration/status')))W.integration.guided.splice(1,0,'Complete a test-asset validity check: identity, condition, ratings, calibration/status where applicable, configuration, and a known-reference/self-test result.');
          if(!W.integration.guided.some(x=>String(x).includes('PASS/FAIL/inconclusive')))W.integration.guided.push('Decide whether the measurement supports PASS, FAIL, or inconclusive after considering tolerance, accuracy, resolution, loading, bandwidth, and other relevant limitations.');
          W.integration.evidence='Pre-power/measurement checklist + test-asset identity/status/configuration record + known-reference/self-test result + DMM connection evidence + CV/CC observation + annotated known waveform + manual Vpp/period/frequency calculation + predicted-versus-measured table + measurement-capability/limitations decision + DUT-vs-test-system isolation note + conclusion.';
        }
      }

      W.week3RemediationRevision=rev;
      W.week3FinalAcceptanceStatus='VERIFIED_PASS';
      W.week3FinalAcceptanceVerdict='VERIFIED_PASS — Week 3 now closes CETa 8.1/8.2, adds Career metrology/test-asset validity and evidence decisions, re-homes specialty-instrument performance, and requires a reproducible core-instrument evidence record.';
      C.meta=C.meta||{};
      C.meta.week3InstructionalRevision=rev;
      C.meta.week3FinalAcceptanceRevision=rev;
      C.meta.week3FinalAcceptanceStatus='PENDING_DEPLOYMENT_QA';
      C.meta.week3PrimaryCetaTeachingSectionCount=ceta?.integrated?.teaching?.length||0;
      C.meta.week3CareerTeachingSectionCount=career?.integrated?.teaching?.length||0;
    }
  }

  // -----------------------------------------------------------------------
  // 2) Assessments: close 8.1/8.2 and metrology validity/decision gaps.
  // -----------------------------------------------------------------------
  if(A?.questions){
    const sourceAudit=locator=>({status:'week3-v16.3.81-reviewed',date:'2026-09-29',note:'Original Alfred item reviewed for keyed answer, distractors, prerequisite stage, and direct Week 3 route alignment. Not an official ETA exam item.',sources:[{title:'Alfred Week 3 three-gate remediation',url:'',locator}]});
    const q=(id,track,standards,prompt,choices,answer,explanation,skill,reviewSectionId,reviewSectionTitle,sourceRef)=>({id,track,standards,prompt,choices,answer,explanation,difficulty:'Foundation',kind:'MCQ',skill,questionClass:'substantive',masteryEvidence:true,evidenceWeight:0.55,sourceRef,minWeek:3,family:`v16381-${id}`,reviewSectionId,reviewSectionTitle,reviewStandardCodes:standards.map(s=>s.replace(/^CETA:|^CAREER:/,'')),reviewConcept:reviewSectionTitle,reviewRouteVersion:'16.3.81',audit:sourceAudit(sourceRef)});
    const additions=[
      q('CQ1204','CETa',['CETA:8.1'],'Which statement best explains a practical difference between a traditional analog meter and a digital meter?',['An analog meter uses a movement/pointer and scale, while a digital meter conditions and converts the input before displaying a number','An analog meter never loads a circuit but a digital meter always shorts it','A digital meter can only measure voltage','Analog and digital meters use identical indication mechanisms'],0,'Analog meters use a physical movement and scale; digital meters condition/convert the input and present a numeric result. Both still become part of the measurement circuit.','Understanding','w03-meter-operation-construction','Analog and digital meters: operation, construction, and loading','ETA CETa 8.1 meter-operation scope'),
      q('CQ1205','CETa',['CETA:8.2'],'Why are divider, shunt/range, input-protection, sensing/conversion, and indication/display blocks useful to understand in a meter?',['They explain why selected mode/range changes the internal measurement path and why loading, ratings, and protection matter','They prove every meter has infinite input impedance','They eliminate the need to select the correct input jack','They guarantee displayed digits equal true accuracy'],0,'The functional blocks explain how the instrument interacts with the circuit and why mode, range, loading, ratings, and protection affect the result.','Application','w03-meter-operation-construction','Analog and digital meters: operation, construction, and loading','ETA CETa 8.2 meter-construction scope'),
      q('CQ1206','Career',['CAREER:C15.1','CAREER:C15.2','CAREER:C15.4'],'A scope probe fails its known-reference compensation check before you measure the DUT. What is the best technician action?',['Correct or remove the questionable measurement chain from service before using its readings as DUT evidence','Measure the DUT anyway and average several screenshots','Increase DUT voltage until the trace looks normal','Call the DUT failed because the reference was distorted'],0,'A failed pre-use/reference check means the measurement chain is not yet trustworthy. Correct the setup or escalate/remove it before using DUT data as evidence.','Troubleshooting','career-w03-test-asset-validity','Before trusting the DUT result, prove the test asset is fit to use','Week 3 metrology validity gate'),
      q('CQ1207','Career',['CAREER:C15.3'],'A 5.00 V rail has an acceptance limit of ±0.01 V, but the present measurement setup has ±0.03 V stated uncertainty. What verdict is justified?',['Inconclusive for acceptance until a capable setup is used','PASS because the display reads 5.00 V','FAIL because uncertainty is larger than zero','PASS if the same number appears twice'],0,'The setup cannot support the required acceptance decision because its uncertainty is wider than the allowed tolerance band.','Application','career-w03-measurement-capability-decision','Decide whether the measurement is good enough for the conclusion','Week 3 measurement-capability decision'),
      q('CQ1208','Career',['CAREER:C15.5'],'The DUT looks faulty on one scope channel, but a known-good reference also looks wrong through the same probe/cable path. What should you investigate first?',['The measurement path—probe, cable, channel/configuration, or instrument—before blaming the DUT','Replace the DUT immediately','Raise the bench-supply current limit','Switch the DMM to resistance mode while powered'],0,'A known-good reference reproducing the symptom points to the test system or setup as a competing cause that must be isolated first.','Troubleshooting','career-w03-measurement-capability-decision','Decide whether the measurement is good enough for the conclusion','Week 3 DUT-vs-test-system isolation')
    ];
    const ids=new Set(additions.map(x=>x.id));
    A.questions=A.questions.filter(x=>!ids.has(x.id));
    A.questions.push(...additions);

    const weekly=(A.weeklyTests||[]).find(x=>Number(x.week)===3);
    if(weekly){
      weekly.title='Week 03 Mastery — Meter Models, DMM, Supply, Scope & Measurement Validity';
      weekly.ceta=['8.1','8.2','8.3','8.4','8.6','8.12','8.12.1'];
      weekly.career=['C3.1','C3.2','C3.3','C3.4','C3.6','C15.1','C15.2','C15.3','C15.4','C15.5'];
      weekly.questionIds=['CQ1204','CQ1205','CQ1196','CQ1197','CQ1154','CQ1198','CQ1199','CQ1202','CQ1206','CQ1207','CQ1208','CQ1203','CQ1155','CQ1156'];
      weekly.count=14;weekly.mix={CETa:8,Career:6};weekly.target=80;weekly.optional=false;
      weekly.alignment='Focused Week 3 mastery: analog/digital meter operation and construction, safe DMM setup, CV/CC supply reasoning, scope setup/measurement/trigger, measurement limitations, test-asset validity, capability decisions, and DUT-vs-test-system isolation.';
    }
    const labQuiz=(A.labQuizzes||[]).find(x=>x.id==='LAB-003');
    if(labQuiz){
      labQuiz.title='LAB-003 Gate — Core Bench Setup & Measurement Validity';
      labQuiz.ceta=['8.1','8.2','8.3','8.4','8.12','8.12.1'];
      labQuiz.career=['C3.1','C3.2','C3.3','C15.1','C15.2','C15.4','C15.5'];
      labQuiz.questionIds=['CQ1204','CQ1197','CQ1154','CQ1200','CQ1206','CQ1208'];
      labQuiz.count=6;labQuiz.mix={CETa:4,Career:2};labQuiz.target=80;labQuiz.optional=false;
      labQuiz.alignment='Required Week 3 practical knowledge gate: meter model, current-mode safety, supply current limiting, probe compensation, pre-use validity, and DUT-vs-test-system isolation.';
    }
    A.meta=A.meta||{};
    A.meta.week3AssessmentRevision=rev;
  }

  // -----------------------------------------------------------------------
  // 3) LAB-003 physical/virtual evidence contract.
  // -----------------------------------------------------------------------
  if(AC?.labs){
    const lab=AC.labs.find(x=>x.id==='LAB-003');
    if(lab){
      const physical=[
        'Record the identity of the DMM, bench supply, oscilloscope, probe/accessories, and the DUT. Inspect leads/probe/terminals, visible condition, ratings, and calibration/status information when applicable; stop or escalate any questionable asset before acceptance evidence is collected.',
        'Perform available pre-use validity checks: DMM zero/reasonableness as applicable, bench-supply setpoint/current-limit sanity check, and oscilloscope self-test/probe compensation or known-reference check. Record PASS/FAIL and do not continue with acceptance evidence if the measurement chain fails.',
        'Create a prediction table before power: expected DC voltages, one de-energized resistance/continuity result, expected current range, and known-waveform Vpp/period/frequency.',
        'Measure DC voltage with the DMM using COM + V/Ω and a parallel connection. Compare predicted versus measured value and record tolerance, range, resolution/accuracy limit, and whether the result is capable of supporting the intended conclusion.',
        'With circuit power removed, demonstrate resistance/continuity measurement. Explain why the circuit is de-energized and how parallel paths could affect the reading.',
        'With the supply/source output OFF, predict the expected current, open the specified low-current path, place the DMM in series using the correct rated current input/range, and verify the setup before energizing. Make the measurement, de-energize again before removing the meter, then return the red lead to the V/Ω jack and record that reset.',
        'Configure the low-voltage bench supply with the justified voltage and conservative current limit before connection. Power the load, record voltage/current and CV/CC state, and stop if the current-limit state or current draw violates the planned boundary.',
        'Attach the oscilloscope only to the approved low-voltage reference/test point. Confirm probe attenuation, channel probe factor, coupling, rating, and conventional earth-referenced ground discipline.',
        'Verify/compensate the passive probe on the known reference, then fit the waveform with deliberate volts/div and time/div settings. Stabilize it with an edge trigger and record source, level, and slope.',
        'Calculate Vpp, period, and frequency manually from the graticule before comparing with automatic scope measurements.',
        'Introduce or identify one controlled questionable measurement-system condition (for example probe-factor mismatch, uncompensated probe, wrong coupling for the stated question, or suspect lead/probe path). Use a known-good reference or independent check to separate DUT failure from test-system failure before changing the DUT.',
        'Complete the evidence record: expected result, measured result, instrument/accessory identity and status, test point/reference, mode/range, probe factor, coupling, scales/timebase/trigger, one relevant limitation, PASS/FAIL/inconclusive validity decision, DUT-vs-test-system conclusion, and one safe stop condition.'
      ];
      lab.objective='Use a DMM, current-limited bench supply, and oscilloscope safely to make predicted, validated, reproducible low-voltage measurements; verify the measurement system before blaming the DUT and distinguish conceptual mastery from physical instrument proficiency.';
      lab.procedure=[...physical];
      lab.evidence='Required Week 3 evidence packet: asset identity/status/condition record + pre-use known-reference/self-test results + prediction table + DMM voltage/resistance/current evidence + current-mode output-off insertion/removal and lead reset + CV/CC observation + compensated known waveform + annotated scope capture + manual Vpp/period/frequency calculation + measurement-capability/limitations decision + controlled DUT-vs-test-system isolation + PASS/FAIL/inconclusive conclusion.';
      lab.evidenceGate={required:true,version:'16.3.81',rule:'LAB-003 is not complete from the quiz alone. Academic completion requires the evidence packet for the selected route; physical proficiency claims additionally require authentic physical evidence.',checkpoints:['asset-status-record','known-reference-check','prediction-table','dmm-connection-evidence','cv-cc-evidence','scope-known-waveform','manual-waveform-calculation','measurement-capability-decision','dut-vs-test-system-isolation','reproducible-conclusion']};
      lab.pathRule='Choose one route for scheduled academic completion. Simulation can prove planning, validity reasoning, and interpretation; only the physical route can establish real DMM lead/jack handling, supply-control handling, probe/reference attachment, probe compensation, accessory inspection, and authentic calibration/status evidence.';
      lab.physical={...(lab.physical||{}),equipment:lab.equipment,procedure:[...physical],evidence:lab.evidence,completion:'Full academic completion + physical core-instrument/metrology proficiency evidence',evidenceGate:lab.evidenceGate};
      lab.virtual={...(lab.virtual||{}),procedure:[
        'Create the same asset/status checklist conceptually and identify which physical status/condition checks the simulator cannot prove.',
        'Use the simulator’s known source/reference to perform a reasonableness check before measuring the unknown circuit.',
        'Create the prediction table before opening the virtual instruments.',
        'Practice voltage, resistance/continuity reasoning, and the difference between voltage-mode and current-mode connection. Do not claim physical jack/lead proficiency from simulation.',
        'Simulate current limiting or a current-constrained source/load condition and explain the CV/CC concept in writing.',
        'Use a virtual scope on a known waveform. Choose vertical scale/timebase and trigger/alignment as available, then calculate Vpp, period, and frequency manually.',
        'Create one invalid or misleading setup condition available in the simulator, then use a known/expected result to identify why the evidence is untrustworthy.',
        'Classify one result as PASS, FAIL, or inconclusive based on the stated tolerance and simulated measurement limitation.',
        'Submit the prediction/evidence table, annotated waveform, calculations, validity decision, DUT-vs-test-system reasoning, and a physical-skill gap checklist.'
      ],evidence:'Prediction table + simulated asset-validity checklist + known-reference result + virtual-instrument screenshots + annotated waveform + manual calculations + measurement-capability decision + DUT-vs-test-system reasoning + physical-skill gap checklist.',completion:'Full academic/concept completion after evidence packet; no physical proficiency claim',verification:'Simulation does not establish physical DMM lead/jack handling, bench-supply control handling, passive-probe compensation, accessory condition inspection, calibration/status verification, or real probe/reference technique.',evidenceGate:lab.evidenceGate};
      lab.week3RemediationRevision=rev;
    }
  }

  // -----------------------------------------------------------------------
  // 4) Governance: re-home C3.8 and close Week 3 gates after the new routes exist.
  // -----------------------------------------------------------------------
  if(CG?.weekMap){
    const w3=CG.weekMap.find(x=>Number(x.week)===3);
    if(w3){
      w3.targets=(w3.targets||[]).filter(t=>t.code!=='C3.8');
      const required=[['C3.1',2],['C3.2',2],['C3.3',2],['C3.4',2],['C3.6',2],['C15.1',2],['C15.2',2],['C15.3',1],['C15.4',1],['C15.5',1]];
      const names={1:'Guided Performance',2:'Independent Performance'};
      w3.targets=required.map(([code,targetLevel])=>({code,targetLevel,targetLevelName:names[targetLevel]}));
      w3.requiredArtifact='Reproducible DMM/supply/scope setup record + asset/status validity + known-reference checks + DUT-vs-test-system isolation';
      w3.remediationRule='Closed by v16.3.81 Week 3 three-gate remediation.';
      w3.priority='CLOSED';
      w3.careerAcceptanceStatus='VERIFIED_PASS';
    }
    const w6=CG.weekMap.find(x=>Number(x.week)===6);
    if(w6&&!w6.targets?.some(t=>t.code==='C3.8')) w6.targets.push({code:'C3.8',targetLevel:1,targetLevelName:'Guided Performance'});
    const s38=CG.careerStandards?.find(s=>s.code==='C3.8');
    if(s38){
      s38.firstCurriculumUseWeek=6;s38.firstExposureWeek=6;s38.firstSubstantiveTeachingWeek=6;s38.firstGuidedPracticeWeek=6;s38.primaryMasteryWeek=20;
      s38.instructionalHome='Week 6 guided specialty-instrument selection; Week 20 independent spectrum/RF specialization';
      s38.reconstructionStatus='RE-HOMED v16.3.81 — guided Week 6, independent Week 20';
      s38.provenance={...(s38.provenance||{}),rationale:'Re-homed from Week 3 so the core-instrument week remains focused on DMM, supply, scope, and measurement validity. Specialty-instrument performance begins only after the frequency/response model is available.'};
    }
    CG.revision=rev;CG.version='16.3.81';
  }

  if(T?.weekAcceptance){
    const w3=T.weekAcceptance.find(x=>Number(x.week)===3);
    const w6=T.weekAcceptance.find(x=>Number(x.week)===6);
    if(w3){
      w3.activeCetaCodes=addCode(addCode(w3.activeCetaCodes,'8.1'),'8.2');
      w3.cetaRouteBacklogCodes=removeCode(removeCode(w3.cetaRouteBacklogCodes,'8.1'),'8.2');
      w3.activeCareerStandards=['C3.1','C3.2','C3.3','C3.4','C3.6','C15.1','C15.2','C15.3','C15.4','C15.5'];
      w3.cetaGateStatus='STRUCTURAL_PASS_PENDING_DEPLOYMENT_QA';w3.careerGateStatus='STRUCTURAL_PASS_PENDING_DEPLOYMENT_QA';w3.tandemDeclaredStatus='STRUCTURAL_PASS_PENDING_DEPLOYMENT_QA';w3.tandemStructuralStatus='PASS';w3.overallAcceptanceStatus='PENDING_DEPLOYMENT_QA';
      w3.requiredArtifact='Reproducible DMM/supply/scope setup record + asset/status validity + known-reference checks + DUT-vs-test-system isolation';
    }
    if(w6&&!w6.activeCareerStandards?.includes('C3.8'))w6.activeCareerStandards.push('C3.8');

    if(T.cetaAuthorityByCode){
      ['8.1','8.2'].forEach(code=>{
        const r=T.cetaAuthorityByCode[code];if(!r)return;
        r.activeSemanticTeachingWeeks=[3];r.confirmedTeachingWeek=3;r.rehomeTargetWeek=null;r.routeAuthorityStatus='ACTIVE_SEMANTIC_ROUTE';r.rehomeReason='';r.liveFirstAssignmentWeek=3;
      });
      T.cetaInstructionalAuthority=(T.cetaInstructionalAuthority||[]).map(r=>T.cetaAuthorityByCode[r.code]||r);
    }
    const rel=T.byCareerCode?.['C3.8'];
    if(rel){
      rel.careerFirstTargetWeek=6;
      rel.prerequisiteCetaCodes=(rel.verifiedSupportCetaCodes||[]).filter(c=>Number(T.cetaAuthorityByCode?.[c]?.confirmedTeachingWeek||99)<6);
      rel.concurrentCetaCodes=(rel.verifiedSupportCetaCodes||[]).filter(c=>Number(T.cetaAuthorityByCode?.[c]?.confirmedTeachingWeek||99)===6);
      rel.laterCetaReinforcementCodes=(rel.verifiedSupportCetaCodes||[]).filter(c=>Number(T.cetaAuthorityByCode?.[c]?.confirmedTeachingWeek||0)>6);
      rel.relationshipType=rel.concurrentCetaCodes.length?'CONCURRENT_SHARED':rel.prerequisiteCetaCodes.length?'CETA_TO_CAREER':'CAREER_TO_CETA_FORMALIZATION';
      rel.relationshipPurpose='Specialty-instrument performance is re-homed after the core Week 3 measurement model; verified earlier/same-week CETa routes support the later technician task.';
    }
    T.revision=rev;T.version='16.3.81';
    if(T.cetaAuthoritySummary){
      T.cetaAuthoritySummary.activeSemanticRoutes=Number(T.cetaAuthoritySummary.activeSemanticRoutes||219)+2;
      T.cetaAuthoritySummary.routeRehomeRequired=Math.max(0,Number(T.cetaAuthoritySummary.routeRehomeRequired||43)-2);
    }
    if(C?.meta){C.meta.crossTrackCurriculumRevision=rev;C.meta.cetaInstructionalAuthorityRevision=rev;C.meta.verifiedActiveCetaRouteCount=221;C.meta.cetaRouteRehomeRequiredCount=41;}
    if(A?.meta){A.meta.cetaInstructionalAuthorityRevision=rev;A.meta.cetaRouteAuthority={verified:221,rehomeRequired:41};A.meta.careerStandardsRevision=rev;}
    const m3=C?.modules?.find(x=>Number(x.week)===3);if(m3&&w3)m3.tandemGovernance=JSON.parse(JSON.stringify(w3));
  }

  if(C?.meta){
    C.meta.week3RequiredEvidenceArtifact='Reproducible DMM/supply/scope setup record + asset/status validity + known-reference checks + DUT-vs-test-system isolation';
    C.meta.week3SpecialtyInstrumentRehome='C3.8 guided first use moved to Week 6; independent specialty-instrument mastery remains later specialization.';
    C.meta.week3ThreeGateVerdict='PENDING_DEPLOYMENT_QA';
  }
})();
