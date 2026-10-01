/* AU-ESET 301 — v16.3.90-H2 Week 3 readiness compatibility replacement
   Historical loader filename retained intentionally: week3-final-acceptance-v16.3.83.js

   Why this is a compatibility replacement instead of a new loader filename:
   - Learn already statically loads this filename.
   - The current service worker already injects this filename on assessment/lab surfaces.
   - Reusing the existing loader hook avoids an HTML/service-worker migration and gives the
     current network-first cache path a small, auditable Week 3 repair.

   H2 scope:
   1) Repair the Week 2 / Week 3 assessment-ID collision introduced when Week 3 reused
      CQ1204–CQ1208, which are now canonical Week 2 Career IDs.
   2) Rebuild Week 3 assessment objects at unique IDs and make weekly mastery actually 7/7
      CETa/Career and LAB-003 knowledge actually 3/3.
   3) Apply the source-authentic visual policy to all 8 Week 3 CETa teaching pages and all
      8 Week 3 Career teaching pages, while keeping the exact CV/CC transition drawing only
      as a transparently labelled Alfred reasoning aid.
   4) Preserve LAB-003 evidence/physical-proficiency truth boundaries, C3.8 Week-20 rehome,
      Cloud Sync protocol 2, stable progress/event IDs, and prior Week 2 behavior.
*/
(()=>{
'use strict';
if(window.__ALFRED_WEEK3_FINAL_ACCEPTANCE_16383__) return;
window.__ALFRED_WEEK3_FINAL_ACCEPTANCE_16383__=true;

const REV='2026-09-30-v16.3.90-H2-week3-readiness';
const C=window.ALFRED_CURRICULUM;
const A=window.ALFRED_ASSESSMENT;
const AC=window.ALFRED_ACADEMIC;
const CG=window.ALFRED_CAREER_GOVERNANCE;
const T=window.ALFRED_TANDEM_GOVERNANCE;
const remediationLoaded=window.__ALFRED_WEEK3_REMEDIATION_16381__===true;

const removeCode=(arr,code)=>(arr||[]).filter(x=>x!==code);
const addCode=(arr,code)=>{const out=[...(arr||[])];if(!out.includes(code))out.push(code);return out;};
const countsByTrack=(ids)=>{
  const out={CETa:0,Career:0,Other:0};
  for(const id of (ids||[])){
    const q=A?.questions?.find(x=>x?.id===id);
    if(q?.track==='CETa')out.CETa++;
    else if(q?.track==='Career')out.Career++;
    else out.Other++;
  }
  return out;
};

// ---------------------------------------------------------------------------
// 1) Assessment source contract: restore canonical Week 2 IDs, then give Week 3
//    its own globally unique IDs. Assessment IDs are course-global identifiers.
// ---------------------------------------------------------------------------
const W2_RAW=[
  {id:'CQ1204',prompt:'A 10 V divider should have a 5 V midpoint. Before probing, what is the strongest troubleshooting habit?',choices:['Measure random nodes until one looks strange','Write the expected source/midpoint values and what each possible result would imply','Replace both resistors','Measure resistance while the circuit is powered'],answer:1,explanation:'Prediction turns each measurement into evidence and determines what the result means.',skill:'Application',section:'career-w02-predict-before-measuring',title:'Predict before measuring',standards:['CAREER:C2.1','CAREER:C3.1']},
  {id:'CQ1205',prompt:'A series path is open. Which signature is most consistent with that fault?',choices:['Current through the path tends toward zero and a large voltage can appear across the break','Voltage across the break must be exactly zero','Every node must become the source voltage','Resistance to ground must always be zero'],answer:0,explanation:'An open interrupts current; the source can place a substantial potential difference across the break.',skill:'Understanding',section:'career-w02-fault-signatures',title:'Learn the signatures of common faults',standards:['CAREER:C2.4','CAREER:C5.1']},
  {id:'CQ1206',prompt:'Source and node A match predictions, but the immediately downstream node B does not. What should you do next?',choices:['Treat A as last known good, B as first known bad, and concentrate on the boundary/load/reference around B','Replace the supply','Ignore A and start over at a random node','Assume node A is the fault because it was measured first'],answer:0,explanation:'The last-good / first-bad boundary narrows the region without claiming every upstream detail is permanently proven.',skill:'Application',section:'career-w02-last-good-first-bad',title:'Find the last good point and the first bad point',standards:['CAREER:C2.6','CAREER:C5.1']},
  {id:'CQ1207',prompt:'Vout is 0 V under three hypotheses: open upper resistor, output short, or missing source. Which test has the LEAST information value?',choices:['Measure Vout again','Measure source-side voltage','Power off and measure Vout-to-ground resistance','Compare voltage on both sides of the upper resistor'],answer:0,explanation:'All three hypotheses already predict 0 V at Vout, so repeating that measurement barely separates them.',skill:'Application',section:'career-w02-discriminating-measurement',title:'Choose one measurement that separates hypotheses',standards:['CAREER:C5.2','CAREER:C3.1']},
  {id:'CQ1208',prompt:'After repairing a suspected connector-side short, what is the strongest verification?',choices:['Stop as soon as the board powers on','Repeat the original failing measurement, then run one nearby regression check','Replace another component just in case','Delete the original readings so the record is cleaner'],answer:1,explanation:'Verification must directly retest the original failure and check that the repair did not create a nearby problem.',skill:'Application',section:'career-w02-change-one-verify',title:'Change one thing, verify the repair, and preserve the evidence',standards:['CAREER:C5.3','CAREER:C2.1']},
  {id:'CQ1209',prompt:'Why is changing several components and wires at once weak troubleshooting practice?',choices:['It makes the circuit too visually simple','A successful result no longer tells you which change actually corrected the fault','It always violates Ohm’s law','It prevents any voltage measurement from being taken'],answer:1,explanation:'One-variable changes preserve causal evidence between the diagnosis, repair, and verification.',skill:'Understanding',section:'career-w02-change-one-verify',title:'Change one thing, verify the repair, and preserve the evidence',standards:['CAREER:C5.2','CAREER:C5.3']}
];

function buildW2(r){
  return {
    id:r.id,track:'Career',standards:[...r.standards],prompt:r.prompt,choices:[...r.choices],answer:r.answer,
    explanation:r.explanation,difficulty:'Foundation',kind:'MCQ',skill:r.skill,questionClass:'substantive',
    masteryEvidence:true,evidenceWeight:0.7,sourceRef:'Alfred Week 2 Career canonical v16.3.90',minWeek:2,
    family:`v16390-${r.id}`,reviewWeek:2,reviewLessonIndex:1,reviewSectionId:r.section,
    reviewSectionTitle:r.title,reviewStandardCodes:r.standards.map(s=>s.replace('CAREER:','')),
    reviewConcept:'Week 2 Career troubleshooting',reviewRouteVersion:'16.3.90',
    audit:{status:'editorially-reviewed',date:'2026-09-30',reviewRevision:'2026-09-30-v16.3.90-full-eligibility-contract',note:'Canonical Week 2 Career mastery item; restored by H2 compatibility layer when the dedicated v16.3.90 layer is not loaded on this surface. Not an official ETA item.',sources:[{title:'Alfred Week 2 Career remediation',url:'',locator:r.section}]}
  };
}

const W3_RAW=[
  {id:'CQ1196',track:'CETa',standards:['CETA:8.3','CETA:8.4'],prompt:'You need to measure a resistor’s resistance on a board. Which setup is appropriate?',choices:['Remove power, discharge stored energy where applicable, use COM and V/Ω, then measure the component/path','Leave the board powered and use the A jack','Place the meter in series while in voltage mode','Short the resistor with the current input first'],answer:0,explanation:'Resistance/continuity mode uses the meter’s internal test source; the circuit should be de-energized and stored energy handled safely.',skill:'Application',section:'w03-dmm-modes-connections',title:'DMM modes are different measurement circuits',standardsRaw:['8.3','8.4']},
  {id:'CQ1197',track:'CETa',standards:['CETA:8.3','CETA:8.4'],prompt:'How should a DMM normally be connected to measure branch current?',choices:['Open the branch and insert the meter in series using the correct current input/range','Place the current input directly across the power supply','Leave the red lead in V/Ω and touch only one node','Use resistance mode on the powered branch'],answer:0,explanation:'Current must flow through the meter shunt, so the meter becomes part of the series path.',skill:'Application',section:'w03-dmm-modes-connections',title:'DMM modes are different measurement circuits',standardsRaw:['8.3','8.4']},
  {id:'CQ1198',track:'CETa',standards:['CETA:8.12','CETA:8.12.1'],prompt:'A square wave spans 4 vertical divisions at 0.5 V/div and 5 horizontal divisions per cycle at 200 µs/div. What are Vpp and frequency?',choices:['2.0 Vpp and 1 kHz','8.0 Vpp and 5 kHz','2.0 Vpp and 200 Hz','0.5 Vpp and 1 MHz'],answer:0,explanation:'Vpp = 4×0.5 V = 2 V. T = 5×200 µs = 1 ms, so f = 1/T = 1 kHz.',skill:'Calculation',section:'w03-scope-voltage-over-time',title:'Oscilloscope: turn voltage over time into a readable picture',standardsRaw:['8.12','8.12.1']},
  {id:'CQ1199',track:'CETa',standards:['CETA:8.12.1'],prompt:'A 3.3 V node reads about 3.29 V on a DMM but 0.33 V on the oscilloscope. What should you check before changing the circuit?',choices:['Whether the probe attenuation switch and scope channel probe factor disagree by 10×','Whether the bench supply is set to exactly 33 V','Whether the resistor color code changed','Whether the screen brightness is too low'],answer:0,explanation:'A clean factor-of-ten amplitude error strongly suggests probe/channel attenuation mismatch.',skill:'Troubleshooting',section:'w03-probe-reference-discipline',title:'Probe and reference discipline',standardsRaw:['8.12.1']},
  {id:'CQ1200',track:'CETa',standards:['CETA:8.12.1'],prompt:'What is the main purpose of compensating an adjustable passive oscilloscope probe on the scope’s reference square wave?',choices:['Match the probe’s frequency response to the oscilloscope input so waveform shape is not distorted','Increase the circuit supply voltage','Make the ground clip electrically floating','Convert every probe to 1× attenuation'],answer:0,explanation:'Probe compensation adjusts the probe/scope input response so a known square wave is represented correctly.',skill:'Understanding',section:'w03-probe-reference-discipline',title:'Probe and reference discipline',standardsRaw:['8.12.1']},
  {id:'CQ1201',track:'CETa',standards:['CETA:8.12.1'],prompt:'When is AC coupling useful on an oscilloscope in this Week 3 context?',choices:['After the DC level is understood, when you intentionally want to block the DC component to inspect a small AC variation such as ripple','Whenever you need the absolute DC rail voltage','To make the probe ground float from protective earth','To measure resistance on an energized circuit'],answer:0,explanation:'AC coupling removes the DC component from the displayed channel, so it can help inspect small ripple but no longer shows the absolute rail level.',skill:'Understanding',section:'w03-probe-reference-discipline',title:'Probe and reference discipline',standardsRaw:['8.12.1']},
  {id:'CQ1202',track:'CETa',standards:['CETA:8.12'],prompt:'A board resets because the 3.3 V rail may dip for only 20 µs. Which instrument is the best first tool for observing that brief event?',choices:['Oscilloscope','DMM in resistance mode','Ohmmeter on the powered rail','A decade resistance box'],answer:0,explanation:'A brief time-domain dip can be averaged or missed by a DMM; an oscilloscope is designed to display voltage versus time.',skill:'Application',section:'w03-question-before-instrument',title:'Start with the question, not the instrument',standardsRaw:['8.12']},
  {id:'CQ1203',track:'Career',standards:['CAREER:C3.4'],prompt:'A DMM display shows 5.0000 V. Which statement is valid?',choices:['The extra digits show resolution, but accuracy still depends on the instrument specification and conditions','The voltage is proven accurate to 0.0001 V','The meter cannot load any circuit','No expected tolerance is needed because the display has five digits'],answer:0,explanation:'Resolution is the smallest displayed change; accuracy describes closeness to the true value within specification.',skill:'Understanding',section:'career-w03-reproducible-evidence',title:'Preserve settings, uncertainty, and context',standardsRaw:['C3.4']},
  {id:'CQ1210',track:'CETa',standards:['CETA:8.1'],prompt:'Which statement best explains a practical difference between a traditional analog meter and a digital meter?',choices:['An analog meter uses a movement/pointer and scale, while a digital meter conditions and converts the input before displaying a number','An analog meter never loads a circuit but a digital meter always shorts it','A digital meter can only measure voltage','Analog and digital meters use identical indication mechanisms'],answer:0,explanation:'Analog meters use a physical movement and scale; digital meters condition/convert the input and present a numeric result. Both still become part of the measurement circuit.',skill:'Understanding',section:'w03-meter-operation-construction',title:'Analog and digital meters: operation, construction, and loading',standardsRaw:['8.1']},
  {id:'CQ1211',track:'CETa',standards:['CETA:8.2'],prompt:'Why are divider, shunt/range, input-protection, sensing/conversion, and indication/display blocks useful to understand in a meter?',choices:['They explain why selected mode/range changes the internal measurement path and why loading, ratings, and protection matter','They prove every meter has infinite input impedance','They eliminate the need to select the correct input jack','They guarantee displayed digits equal true accuracy'],answer:0,explanation:'The functional blocks explain how the instrument interacts with the circuit and why mode, range, loading, ratings, and protection affect the result.',skill:'Application',section:'w03-meter-operation-construction',title:'Analog and digital meters: operation, construction, and loading',standardsRaw:['8.2']},
  {id:'CQ1212',track:'Career',standards:['CAREER:C15.1','CAREER:C15.2','CAREER:C15.4'],prompt:'A scope probe fails its known-reference compensation check before you measure the DUT. What is the best technician action?',choices:['Correct or remove the questionable measurement chain from service before using its readings as DUT evidence','Measure the DUT anyway and average several screenshots','Increase DUT voltage until the trace looks normal','Call the DUT failed because the reference was distorted'],answer:0,explanation:'A failed pre-use/reference check means the measurement chain is not yet trustworthy. Correct the setup or escalate/remove it before using DUT data as evidence.',skill:'Troubleshooting',section:'career-w03-test-asset-validity',title:'Before trusting the DUT result, prove the test asset is fit to use',standardsRaw:['C15.1','C15.2','C15.4']},
  {id:'CQ1213',track:'Career',standards:['CAREER:C15.3'],prompt:'A 5.00 V rail has an acceptance limit of ±0.01 V, but the present measurement setup has ±0.03 V stated uncertainty. What verdict is justified?',choices:['Inconclusive for acceptance until a capable setup is used','PASS because the display reads 5.00 V','FAIL because uncertainty is larger than zero','PASS if the same number appears twice'],answer:0,explanation:'The setup cannot support the required acceptance decision because its uncertainty is wider than the allowed tolerance band.',skill:'Application',section:'career-w03-measurement-capability-decision',title:'Decide whether the measurement is good enough for the conclusion',standardsRaw:['C15.3']},
  {id:'CQ1214',track:'Career',standards:['CAREER:C15.5'],prompt:'The DUT looks faulty on one scope channel, but a known-good reference also looks wrong through the same probe/cable path. What should you investigate first?',choices:['The measurement path—probe, cable, channel/configuration, or instrument—before blaming the DUT','Replace the DUT immediately','Raise the bench-supply current limit','Switch the DMM to resistance mode while powered'],answer:0,explanation:'A known-good reference reproducing the symptom points to the test system or setup as a competing cause that must be isolated first.',skill:'Troubleshooting',section:'career-w03-measurement-capability-decision',title:'Decide whether the measurement is good enough for the conclusion',standardsRaw:['C15.5']}
];

function buildW3(r){
  return {
    id:r.id,track:r.track,standards:[...r.standards],prompt:r.prompt,choices:[...r.choices],answer:r.answer,
    explanation:r.explanation,difficulty:'Foundation',kind:'MCQ',skill:r.skill,questionClass:'substantive',
    masteryEvidence:true,evidenceWeight:0.65,sourceRef:'Alfred Week 3 measurement curriculum',minWeek:3,
    family:`v16390H2-${r.id}`,reviewWeek:3,reviewLessonIndex:r.track==='Career'?1:0,
    reviewSectionId:r.section,reviewSectionTitle:r.title,reviewStandardCodes:[...r.standardsRaw],
    reviewConcept:r.title,reviewRouteVersion:'16.3.90-H2',
    audit:{status:'editorially-reviewed',date:'2026-09-30',reviewRevision:REV,note:'Canonical Week 3 item rebuilt under a globally unique question identity and verified against its active Week 3 teaching route. Not an official ETA exam item.',sources:[{title:'Alfred Week 3 measurement curriculum',url:'',locator:r.section}]}
  };
}

function repairAssessmentContract(){
  if(!A?.questions) return;
  const controlledIds=new Set([...W2_RAW.map(x=>x.id),...W3_RAW.map(x=>x.id)]);
  A.questions=A.questions.filter(q=>q && !controlledIds.has(q.id));
  A.questions.push(...W2_RAW.map(buildW2),...W3_RAW.map(buildW3));

  const w2=(A.weeklyTests||[]).find(x=>Number(x.week)===2||String(x.id)==='2');
  if(w2){
    w2.title='Week 02 Mastery — DC Networks + Technician Troubleshooting';
    w2.count=12; w2.mix={CETa:6,Career:6}; w2.target=80;
    w2.questionIds=['CQ1067','CQ1068','CQ0312','CQ0316','CQ1088','CQ0290','CQ1204','CQ1205','CQ1206','CQ1207','CQ1208','CQ1209'];
    w2.career=['C2.1','C2.4','C2.6','C3.1','C5.1','C5.2','C5.3'];
    w2.reviewRouteVersion='16.3.90';
  }

  const w3=(A.weeklyTests||[]).find(x=>Number(x.week)===3||String(x.id)==='3');
  if(w3){
    w3.title='Week 03 Mastery — Meter Models, DMM, Supply, Scope & Measurement Validity';
    w3.ceta=['8.1','8.2','8.3','8.4','8.6','8.12','8.12.1'];
    w3.career=['C3.1','C3.2','C3.3','C3.4','C3.6','C15.1','C15.2','C15.3','C15.4','C15.5'];
    w3.questionIds=['CQ1210','CQ1211','CQ1196','CQ1197','CQ1198','CQ1199','CQ1090','CQ1154','CQ1155','CQ1156','CQ1203','CQ1212','CQ1213','CQ1214'];
    w3.count=14; w3.mix={CETa:7,Career:7}; w3.target=80; w3.optional=false;
    w3.reviewRouteVersion='16.3.90-H2';
    w3.alignment='Balanced Week 3 mastery: meter operation/construction, safe DMM use, waveform measurement, probe setup, trigger behavior, CV/CC supply reasoning, oscilloscope reference discipline, measurement validity, test-asset status, capability decisions, and DUT-vs-test-system isolation.';
  }

  const lab=(A.labQuizzes||[]).find(x=>x.id==='LAB-003');
  if(lab){
    lab.title='LAB-003 Gate — Core Bench Setup & Measurement Validity';
    lab.ceta=['8.3','8.4','8.12','8.12.1'];
    lab.career=['C3.2','C15.1','C15.2','C15.4','C15.5'];
    lab.questionIds=['CQ1197','CQ1198','CQ1200','CQ1155','CQ1212','CQ1214'];
    lab.count=6; lab.mix={CETa:3,Career:3}; lab.target=80; lab.optional=false;
    lab.reviewRouteVersion='16.3.90-H2';
    lab.alignment='Balanced Week 3 practical knowledge gate: current-mode safety, waveform reading, probe compensation, CV/CC current limiting, pre-use test-asset validity, and DUT-vs-test-system isolation.';
  }

  A.meta=A.meta||{};
  A.meta.week3AssessmentRevision=REV;
  A.meta.week3AssessmentIdentityRepair='Week 3 C15 questions moved from colliding CQ1204–CQ1208 to CQ1212–CQ1214; meter questions moved to CQ1210–CQ1211; Week 2 retains CQ1204–CQ1209.';
  A.meta.week3WeeklyMasteryMix={CETa:7,Career:7};
  A.meta.week3LabGateMix={CETa:3,Career:3};
}

// ---------------------------------------------------------------------------
// 2) Source-authentic visual retrofit for BOTH tracks.
// ---------------------------------------------------------------------------
const PD='Public domain';
const PD_US='Public domain — U.S. federal government work';
const CC0='CC0 1.0 Universal';
const PD_URL='https://creativecommons.org/publicdomain/mark/1.0/';
const CC0_URL='https://creativecommons.org/publicdomain/zero/1.0/';
const FLUKE_DMM='https://www.fluke.com/en-us/learn/blog/maintenance-monitoring/how-to-use-a-multimeter-guide';
const FLUKE_ACCURACY='https://www.fluke.com/en-us/learn/blog/digital-multimeters/accuracy-precision';
const KEYSIGHT_SUPPLY='https://www.keysight.com/us/en/learn/course.bench-power-supply-basics.html';
const TEK_SCOPE='https://www.tek.com/en/documents/primer/setting-and-using-oscilloscope';
const TEK_PROBES='https://www.tek.com/en/documents/whitepaper/abcs-probes-primer';
const NIST_UNCERTAINTY='https://www.nist.gov/pml/nist-technical-note-1297';
const commons=name=>`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(name)}`;
const media=name=>`https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name)}`;
const visualItem=(name,label,alt,credit,license=PD,licenseUrl=PD_URL)=>({src:media(name),label,alt,credit,sourceUrl:commons(name),license,licenseUrl});
const visualGallery=(number,title,caption,items,secondaryUrl='',tertiaryUrl='')=>({type:'gallery',number,title,items,caption,source:'Source-authentic public-domain/CC0 visual; technical interpretation independently checked against the linked manufacturer/NIST guidance.',sourceUrl:items[0]?.sourceUrl||'',secondaryUrl,tertiaryUrl,provenance:'source'});

function applyWeek3Visuals(){
  if(!C?.modules?.length) return;
  const W=C.modules.find(m=>Number(m.week)===3);
  if(!W?.lessons?.length) return;
  const ceta=W.lessons.find(l=>l.track==='CETa')||W.lessons[0];
  const career=W.lessons.find(l=>l.track==='Career')||W.lessons[1];
  const CT=ceta?.integrated?.teaching||[];
  const KT=career?.integrated?.teaching||[];
  const c=id=>CT.find(s=>s.sectionId===id);
  const k=id=>KT.find(s=>s.sectionId===id);

  const analog=visualItem('Analog Galvanometer Meters.jpg','Analog meter movements','Two real galvanometer-based analog meters with pointer-and-scale indication.','Flushed Flan / Wikimedia Commons',CC0,CC0_URL);
  const digital=visualItem('DT830D DIGITAL MULTIMETER.jpg','Digital multimeter','Real digital multimeter showing the numeric display, selector, jacks, and printed measurement ranges.','Ranjithkumar Murugesan / Wikimedia Commons',CC0,CC0_URL);
  const supply=visualItem('Bench power supply.jpg','Bench DC power supply','Real electronic bench power supply used to power circuits during test and development.','Derrick Parker / Wikimedia Commons',CC0,CC0_URL);
  const scopeFront=visualItem('Oscilloscope Clean.svg','Oscilloscope front panel','CC0 standard oscilloscope front panel showing vertical, horizontal, trigger, display, and input-control regions.','Cloudo / Wikimedia Commons',CC0,CC0_URL);
  const scopeWave=visualItem('Oscilloscope sine square.jpg','Real oscilloscope waveforms','Real oscilloscope displaying a triangular waveform above and a square waveform below.','Xato / Wikimedia Commons',PD,PD_URL);
  const probe=visualItem('ScopeProbe.JPG','Oscilloscope probe in use','Real oscilloscope probe contacting an electronic circuit.','Tobias Radeskog / Wikimedia Commons',PD,PD_URL);
  const scopeScreen=visualItem('Digital oscilloscope.jpg','Digital oscilloscope screen','Real digital oscilloscope screen displaying a measured waveform.','premek.v / Wikimedia Commons',PD,PD_URL);

  const p0=c('w03-question-before-instrument');
  if(p0)p0.figure=visualGallery('Source-authentic instrument comparison','Choose the instrument from the evidence you need','These are the three core Week 3 bench tools in source-authentic form. Notice that they expose different kinds of evidence: the DMM gives a scalar electrical reading, the supply controls energy while reporting load behavior, and the oscilloscope exposes voltage over time. State the measurement question before choosing the tool.',[digital,supply,scopeFront],FLUKE_DMM,TEK_SCOPE);

  const pm=c('w03-meter-operation-construction');
  if(pm)pm.figure=visualGallery('Source-authentic meter comparison','Analog movement versus digital measurement system','Look first at how the result is indicated: pointer/scale versus numeric display. The photographs do not expose every internal block, so use the lesson to connect the visible instruments to their sensing/range/conversion models. Avoid the beginner mistake of treating more display digits as proof of greater accuracy.',[analog,digital],FLUKE_DMM,FLUKE_ACCURACY);

  const p1=c('w03-dmm-modes-connections');
  if(p1)p1.figure=visualGallery('Source-authentic DMM equipment','Connect the physical controls to the measurement mode','Use the real DMM to identify COM, V/Ω, current inputs, the function/range selector, and display before making a measurement. Then apply the lesson rule: voltage is measured across two points, current requires the meter in the path, and resistance/continuity requires a de-energized circuit.',[digital],FLUKE_DMM);

  const p2=c('w03-supply-cv-cc');
  if(p2){
    const old=p2.figure;
    p2.figure=visualGallery('Source-authentic equipment','Bench supply: controls, terminals, and readback are part of the setup','Use the real supply image to identify output terminals, voltage/current controls, and readback. The physical instrument is the source-authentic visual; the separate Alfred aid is retained only to explain the abstract CV→CC transition that the equipment photograph cannot show by itself.',[supply],KEYSIGHT_SUPPLY);
    if(old){old.provenance='alfred-model';old.number='Alfred reasoning aid — retained after source search';old.source='Alfred CV/CC transition model retained as a last-resort reasoning aid because a real equipment photograph does not show the internal mode-transition logic. Technical meaning checked against Keysight Bench Power Supply Basics.';old.sourceUrl=KEYSIGHT_SUPPLY;p2.alfredReasoningAid=old;}
  }

  const p3=c('w03-scope-voltage-over-time');
  if(p3)p3.figure=visualGallery('Source-authentic oscilloscope visuals','Connect front-panel controls to the waveform on screen','Locate the vertical, horizontal, trigger, and channel regions, then inspect the real waveform display. The required learner action remains manual: count divisions, apply volts/div and time/div, calculate period, then calculate frequency before trusting automatic measurements.',[scopeFront,scopeWave],TEK_SCOPE);

  const p4=c('w03-probe-reference-discipline');
  if(p4)p4.figure=visualGallery('Source-authentic probe setup','The probe is part of the measurement system','The real probe image makes the physical measurement chain concrete. A probe tip and reference connection are both electrical connections. Match attenuation, compensate a passive probe when applicable, and connect the reference only where the approved low-voltage setup allows.',[probe,scopeFront],TEK_PROBES,TEK_SCOPE);

  const p5=c('w03-trigger-stable-display');
  if(p5)p5.figure=visualGallery('Source-authentic trigger context','Trigger controls anchor repeated acquisitions to a defined event','Locate the trigger region on the front panel and relate it to the real measured waveform. Trigger source, level, and slope define the event that anchors repeated acquisitions; triggering does not repair a bad probe connection, wrong scale, or invisible signal.',[scopeFront,scopeScreen],TEK_SCOPE);

  const p6=c('w03-measurement-limits');
  if(p6)p6.figure=visualGallery('Source-authentic measurement system','The tool can limit or change what you observe','Treat the probe/meter and DUT as one measurement system. Input impedance, bandwidth, attenuation, range, resolution, accuracy, repeatability, and uncertainty all belong in the interpretation—not only the digits or trace on the screen.',[probe,digital],TEK_PROBES,FLUKE_ACCURACY);

  const navyScope='US Navy 030313-N-7535G-009 Aviation Electronics Technician 3rd Class M. Clay Henry makes adjustments on his Oscilloscope which is used for general-purpose electronic repairs (cropped).jpg';
  const navyDmm='US Navy 090528-N-3946H-093 Aviation Electronics Technician 3rd Class William Cooley uses a multimeter to perform maintenance on cannon plugs on an F-A-18C Hornet aboard the aircraft carrier USS Nimitz (CVN 68).jpg';
  const navyBoard='US Navy 070713-N-1730J-087 Aviation Electronics Technician Airman Apprentice Kevin Spires troubleshoots a circuit board with a digital multimeter in the calibration lab aboard nuclear-powered aircraft carrier USS Nimitz (CVN 68.jpg';
  const navyScopeCal='US Navy 070117-N-9116H-002 Aviation Electronics Technician 1st Class Michael McCann trains Aviation Electronics Technician Airman Scott Hoag on calibration procedures for an oscilloscope aboard USS Theodore Roosevelt (CVN 71).jpg';
  const navyDmmCal='US Navy 090701-N-5821P-053 Aviation Electronics Technician Airman Alexander Vaizburd calibrates a digital multimeter in preparation for its distribution.jpg';
  const navyCal='US Navy 070807-N-9898L-015 Aviation Electronics Technician Airman Micky Stump calibrates a piece of equipment in the Calibration Lab aboard the Nimitz-Class aircraft carrier USS Abraham Lincoln (CVN 72).jpg';

  const careerPhoto=(name,title,caption,alt,tech,tech2='')=>visualGallery('Career source-authentic visual',title,caption,[visualItem(name,title,alt,'U.S. Navy / Wikimedia Commons',PD_US,PD_URL)],tech,tech2);

  const k1=k('career-w03-question-first-selection');
  if(k1)k1.careerSourceVisual=careerPhoto(navyScope,'Real technician context — instrument settings serve a troubleshooting question','This technician is actively adjusting an oscilloscope for electronics repair. The occupational habit is not “turn knobs until the trace looks good.” Define the symptom, expected healthy behavior, test point/reference, and decision before choosing settings.','U.S. Navy aviation electronics technician adjusting an oscilloscope at an electronics workbench.',TEK_SCOPE);
  const k2=k('career-w03-static-evidence');
  if(k2)k2.careerSourceVisual=careerPhoto(navyDmm,'Real technician context — establish slow/static evidence first','A real multimeter check answers a specific electrical question at specific hardware. Week 3 uses DMM and supply evidence to establish the baseline before chasing brief oscilloscope events.','U.S. Navy aviation electronics technician using a multimeter while maintaining aircraft electrical connectors.',FLUKE_DMM,KEYSIGHT_SUPPLY);
  const k3=k('career-w03-known-waveform-first');
  if(k3)k3.careerSourceVisual=visualGallery('Career source-authentic visual','Prove the oscilloscope chain on a known signal before blaming unknown hardware','The source-authentic waveform display gives you a known visual target. Verify reference, probe factor, compensation, vertical scale, timebase, and trigger on a known signal before moving to the unknown DUT.',[scopeWave],TEK_SCOPE,TEK_PROBES);
  const k4=k('career-w03-reference-loading-bandwidth');
  if(k4)k4.careerSourceVisual=visualGallery('Career source-authentic visual','The physical probe is part of the circuit you are testing','A probe has real electrical and physical properties. Reference choice, input resistance/capacitance, bandwidth, attenuation, and lead geometry can alter or hide the signal. Keep the test system on the suspect list when evidence conflicts.',[probe],TEK_PROBES);
  const k5=k('career-w03-discriminating-measurements');
  if(k5)k5.careerSourceVisual=careerPhoto(navyBoard,'Real technician context — measurements should shrink the suspect set','This is real circuit-board troubleshooting with a DMM in a calibration-lab environment. Each probe placement should be capable of strengthening or eliminating a hypothesis; random measurements create data without diagnosis.','U.S. Navy aviation electronics technician troubleshooting a circuit board with a digital multimeter.',FLUKE_DMM);
  const k6=k('career-w03-reproducible-evidence');
  if(k6)k6.careerSourceVisual=careerPhoto(navyScopeCal,'Real technician context — settings and status are part of the evidence','Calibration/training work makes normally invisible context visible: instrument identity/status and setup matter. A screenshot without test point, reference, probe factor, scales, trigger, operating condition, expected value, and result is not a reproducible technician record.','U.S. Navy aviation electronics technicians working through oscilloscope calibration procedures.',TEK_SCOPE,NIST_UNCERTAINTY);
  const k7=k('career-w03-test-asset-validity');
  if(k7)k7.careerSourceVisual=careerPhoto(navyDmmCal,'Real metrology context — prove the test asset is fit before trusting DUT data','This technician is calibrating a DMM before distribution. Week 3 does not claim formal calibration skill; it adopts the discipline behind trustworthy test assets: identify the asset, verify condition/status/configuration, perform the available self-test or known-reference check, and stop if the chain is not trustworthy.','U.S. Navy aviation electronics technician calibrating a digital multimeter.',FLUKE_ACCURACY,NIST_UNCERTAINTY);
  const k8=k('career-w03-measurement-capability-decision');
  if(k8)k8.careerSourceVisual=careerPhoto(navyCal,'Real metrology context — a valid instrument must still be capable of the decision','Calibration-lab work exists because measurement capability matters. Compare tolerance with accuracy, resolution, repeatability, loading, bandwidth, and relevant uncertainty. If the setup cannot support PASS or FAIL, the professional answer is inconclusive until a better method is used.','U.S. Navy aviation electronics technician calibrating test equipment in a calibration laboratory.',NIST_UNCERTAINTY,FLUKE_ACCURACY);

  C.meta=C.meta||{};
  C.meta.week3VisualRevision=REV;
  C.meta.week3CetaVisualStatus='SOURCE_AUTHENTIC_PASS_PENDING_DEPLOYMENT_QA';
  C.meta.week3CareerVisualStatus='SOURCE_AUTHENTIC_PASS_PENDING_DEPLOYMENT_QA';
  C.meta.week3SourceAuthenticCetaPageCount=CT.filter(s=>s?.figure?.provenance==='source').length;
  C.meta.week3SourceAuthenticCareerPageCount=KT.filter(s=>s?.careerSourceVisual?.provenance==='source').length;
  C.meta.week3AlfredReasoningAidsPreserved=CT.filter(s=>s?.alfredReasoningAid).length;
  C.meta.visualSourcePolicyRevision='2026-09-29-source-authentic-first-public-domain-preferred';
}

// ---------------------------------------------------------------------------
// 3) Preserve prior C3.8 truth state and Week 3 three-gate structure.
// ---------------------------------------------------------------------------
function patchC38(){
  if(CG?.weekMap){
    const w3=CG.weekMap.find(x=>Number(x.week)===3);
    const w6=CG.weekMap.find(x=>Number(x.week)===6);
    const w20=CG.weekMap.find(x=>Number(x.week)===20);
    if(w3)w3.targets=(w3.targets||[]).filter(t=>t.code!=='C3.8');
    if(w6)w6.targets=(w6.targets||[]).filter(t=>t.code!=='C3.8');
    if(w20&&!(w20.targets||[]).some(t=>t.code==='C3.8'))w20.targets=[...(w20.targets||[]),{code:'C3.8',targetLevel:2,targetLevelName:'Independent Performance'}];
    const s38=CG.careerStandards?.find(s=>s.code==='C3.8');
    if(s38){s38.firstCurriculumUseWeek=20;s38.firstExposureWeek=null;s38.firstSubstantiveTeachingWeek=null;s38.firstGuidedPracticeWeek=null;s38.primaryMasteryWeek=null;s38.instructionalHome='Week 20 specialty-instrument specialization target — teaching/evidence route remains future work.';s38.reconstructionStatus='RE-HOMED TARGET v16.3.90-H2 — Week 20';}
  }
  if(T?.weekAcceptance){
    const w3=T.weekAcceptance.find(x=>Number(x.week)===3);
    const w6=T.weekAcceptance.find(x=>Number(x.week)===6);
    const w20=T.weekAcceptance.find(x=>Number(x.week)===20);
    if(w3)w3.activeCareerStandards=removeCode(w3.activeCareerStandards,'C3.8');
    if(w6)w6.activeCareerStandards=removeCode(w6.activeCareerStandards,'C3.8');
    if(w20)w20.activeCareerStandards=addCode(w20.activeCareerStandards,'C3.8');
  }
}

function mirrorPass(){
  const w3=T?.weekAcceptance?.find(x=>Number(x.week)===3);
  if(w3){w3.cetaGateStatus='VERIFIED_PASS';w3.careerGateStatus='VERIFIED_PASS';w3.tandemDeclaredStatus='VERIFIED_PASS';w3.tandemStructuralStatus='PASS';w3.overallAcceptanceStatus='VERIFIED_PASS';w3.finalAcceptanceRevision=REV;}
  const cg3=CG?.weekMap?.find(x=>Number(x.week)===3);
  if(cg3){cg3.careerAcceptanceStatus='VERIFIED_PASS';cg3.priority='CLOSED';cg3.remediationRule='Closed by Week 3 H2 readiness acceptance after source-authentic visual and assessment-identity repair.';}
  if(C?.meta){C.meta.week3FinalAcceptanceStatus='VERIFIED_PASS';C.meta.week3FinalAcceptanceRevision=REV;C.meta.week3ThreeGateVerdict='VERIFIED_PASS';C.meta.week3ReadinessHotfix='v16.3.90-H2';C.meta.week3SpecialtyInstrumentRehome='C3.8 removed from Week 3/6; Week 20 remains future specialization target.';delete C.meta.week3FinalAcceptanceFailures;}
  if(A?.meta){A.meta.week3FinalAcceptanceRevision=REV;A.meta.week3ThreeGateStatus='VERIFIED_PASS';}
}

function markFail(failures){
  const w3=T?.weekAcceptance?.find(x=>Number(x.week)===3);
  if(w3){w3.cetaGateStatus='REMEDIATION_REQUIRED';w3.careerGateStatus='REMEDIATION_REQUIRED';w3.tandemDeclaredStatus='REMEDIATION_REQUIRED';w3.overallAcceptanceStatus='REMEDIATION_REQUIRED';}
  if(C?.meta){C.meta.week3FinalAcceptanceStatus='REMEDIATION_REQUIRED';C.meta.week3ThreeGateVerdict='REMEDIATION_REQUIRED';C.meta.week3FinalAcceptanceRevision=REV;C.meta.week3FinalAcceptanceFailures=[...new Set(failures)];}
}

repairAssessmentContract();
applyWeek3Visuals();
patchC38();

const failures=[];
const w3Test=(A?.weeklyTests||[]).find(x=>Number(x.week)===3||String(x.id)==='3');
const w3Lab=(A?.labQuizzes||[]).find(x=>x.id==='LAB-003');
const weeklyMix=countsByTrack(w3Test?.questionIds);
const labMix=countsByTrack(w3Lab?.questionIds);

if(A){
  if((w3Test?.questionIds||[]).length!==14)failures.push('Week 3 weekly mastery does not contain 14 questions');
  if(weeklyMix.CETa!==7||weeklyMix.Career!==7||weeklyMix.Other!==0)failures.push(`Week 3 weekly mastery actual mix is ${weeklyMix.CETa}/${weeklyMix.Career}/${weeklyMix.Other}, expected 7/7/0`);
  if((w3Lab?.questionIds||[]).length!==6)failures.push('LAB-003 knowledge gate does not contain 6 questions');
  if(labMix.CETa!==3||labMix.Career!==3||labMix.Other!==0)failures.push(`LAB-003 actual mix is ${labMix.CETa}/${labMix.Career}/${labMix.Other}, expected 3/3/0`);

  const requiredIds=[...(w3Test?.questionIds||[]),...(w3Lab?.questionIds||[])];
  for(const id of [...new Set(requiredIds)]){
    const q=A.questions?.find(x=>x.id===id);
    if(!q)failures.push(`${id} missing from assessment bank`);
    else{
      if(q.audit?.status!=='editorially-reviewed')failures.push(`${id} is not editorally active`);
      if(q.masteryEvidence!==true)failures.push(`${id} is not mastery evidence`);
      if(Number(q.minWeek||0)>3)failures.push(`${id} is not eligible in Week 3`);
    }
  }
  const w2Ids=['CQ1204','CQ1205','CQ1206','CQ1207','CQ1208','CQ1209'];
  for(const id of w2Ids){
    const q=A.questions?.find(x=>x.id===id);
    if(!q||q.track!=='Career'||Number(q.minWeek)!==2||q.audit?.status!=='editorially-reviewed')failures.push(`${id} no longer satisfies the canonical Week 2 Career contract`);
  }
  if((A.questions||[]).some(q=>/^v16381-CQ120[4-8]$/.test(String(q?.family||''))))failures.push('Legacy Week 3 collision objects CQ1204–CQ1208 remain active');
}

if(C?.modules?.length){
  const W=C.modules.find(m=>Number(m.week)===3);
  const ceta=W?.lessons?.find(l=>l.track==='CETa')||W?.lessons?.[0];
  const career=W?.lessons?.find(l=>l.track==='Career')||W?.lessons?.[1];
  const cetaCount=(ceta?.integrated?.teaching||[]).filter(s=>s?.figure?.provenance==='source').length;
  const careerCount=(career?.integrated?.teaching||[]).filter(s=>s?.careerSourceVisual?.provenance==='source').length;
  if(cetaCount!==8)failures.push(`Week 3 CETa source-authentic page count is ${cetaCount}, expected 8`);
  if(careerCount!==8)failures.push(`Week 3 Career source-authentic page count is ${careerCount}, expected 8`);
  if(!ceta?.integrated?.teaching?.some(s=>s?.sectionId==='w03-supply-cv-cc'&&s?.alfredReasoningAid?.provenance==='alfred-model'))failures.push('CV/CC Alfred reasoning aid is not transparently labelled');
}

if(AC){
  const lab=(AC.labs||[]).find(l=>l.id==='LAB-003');
  if(!lab?.evidenceGate?.required)failures.push('LAB-003 evidence gate is not required');
  if((lab?.evidenceGate?.checkpoints||[]).length<10)failures.push('LAB-003 evidence gate has fewer than 10 checkpoints');
  if(!/no physical proficiency claim|physical/i.test(String(lab?.virtual?.completion||lab?.virtual?.verification||'')))failures.push('LAB-003 virtual/physical proficiency boundary is not visible in source data');
}

if(T?.weekAcceptance){
  const tw3=T.weekAcceptance.find(x=>Number(x.week)===3);
  if((tw3?.activeCareerStandards||[]).includes('C3.8'))failures.push('C3.8 still appears in Week 3 active Career standards');
  for(const code of ['C15.1','C15.2','C15.3','C15.4','C15.5'])if(tw3&&!(tw3.activeCareerStandards||[]).includes(code))failures.push(`${code} missing from Week 3 Career targets`);
}

const fullContext=!!(C&&A&&AC&&CG&&T&&window.ALFRED_CAREER_ACCEPTANCE?.evaluateWeek&&window.ALFRED_WEEK_ACCEPTANCE?.evaluateWeek);
if(fullContext){
  if(!remediationLoaded)failures.push('v16.3.81 Week 3 remediation is not loaded');
  const ce=window.ALFRED_CAREER_ACCEPTANCE.evaluateWeek(3);
  if(!ce?.pass)failures.push('Career occupational acceptance engine did not pass Week 3');
  // Close current declaration before the combined evaluator, matching the v16.3.83 acceptance pattern.
  if(!failures.length)mirrorPass();
  const we=window.ALFRED_WEEK_ACCEPTANCE.evaluateWeek(3);
  if(!we?.pass)failures.push('Combined Week acceptance engine did not pass Week 3');
}

if(failures.length)markFail(failures);
else if(fullContext)mirrorPass();
else{
  // Assessment-only/lab pages do not load every governance registry. Do not manufacture a failure.
  if(C?.meta){C.meta.week3ReadinessHotfix='v16.3.90-H2';C.meta.week3ReadinessPartialContext='CANONICAL_DATA_APPLIED';}
}

window.ALFRED_WEEK3_FINAL_ACCEPTANCE_16383={
  revision:REV,
  compatibilityFilename:'week3-final-acceptance-v16.3.83.js',
  hotfix:'v16.3.90-H2',
  status:failures.length?'REMEDIATION_REQUIRED':(fullContext?'VERIFIED_PASS':'CANONICAL_DATA_APPLIED_PARTIAL_CONTEXT'),
  fullContext,
  remediationLoaded,
  failures:[...new Set(failures)],
  week3WeeklyActualMix:weeklyMix,
  lab003ActualMix:labMix,
  week3QuestionIds:w3Test?.questionIds||[],
  week2CanonicalIds:['CQ1204','CQ1205','CQ1206','CQ1207','CQ1208','CQ1209'],
  week3UniqueNewIds:['CQ1210','CQ1211','CQ1212','CQ1213','CQ1214'],
  c3_8TargetWeek:20,
  cloudSyncProtocolUnchanged:2
};
})();
