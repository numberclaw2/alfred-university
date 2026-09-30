/* AU-ESET 301 v16.3.90 — Week 2 canonical Career mastery repair.
   Loaded after legacy/governance layers and before the assessment selector.
   It reconstructs the six Career items rather than patching only one eligibility field. */
(()=>{
'use strict';
if(window.__ALFRED_WEEK2_CANONICAL_ASSESSMENT_16390__) return;

const A=window.ALFRED_ASSESSMENT;
if(!A?.questions) return;

const RAW=[{"id":"CQ1204","prompt":"A 10 V divider should have a 5 V midpoint. Before probing, what is the strongest troubleshooting habit?","choices":["Measure random nodes until one looks strange","Write the expected source/midpoint values and what each possible result would imply","Replace both resistors","Measure resistance while the circuit is powered"],"answer":1,"explanation":"Prediction turns each measurement into evidence and determines what the result means.","skill":"Application","section":"career-w02-predict-before-measuring","title":"Predict before measuring","standards":["CAREER:C2.1","CAREER:C3.1"]},{"id":"CQ1205","prompt":"A series path is open. Which signature is most consistent with that fault?","choices":["Current through the path tends toward zero and a large voltage can appear across the break","Voltage across the break must be exactly zero","Every node must become the source voltage","Resistance to ground must always be zero"],"answer":0,"explanation":"An open interrupts current; the source can place a substantial potential difference across the break.","skill":"Understanding","section":"career-w02-fault-signatures","title":"Learn the signatures of common faults","standards":["CAREER:C2.4","CAREER:C5.1"]},{"id":"CQ1206","prompt":"Source and node A match predictions, but the immediately downstream node B does not. What should you do next?","choices":["Treat A as last known good, B as first known bad, and concentrate on the boundary/load/reference around B","Replace the supply","Ignore A and start over at a random node","Assume node A is the fault because it was measured first"],"answer":0,"explanation":"The last-good / first-bad boundary narrows the region without claiming every upstream detail is permanently proven.","skill":"Application","section":"career-w02-last-good-first-bad","title":"Find the last good point and the first bad point","standards":["CAREER:C2.6","CAREER:C5.1"]},{"id":"CQ1207","prompt":"Vout is 0 V under three hypotheses: open upper resistor, output short, or missing source. Which test has the LEAST information value?","choices":["Measure Vout again","Measure source-side voltage","Power off and measure Vout-to-ground resistance","Compare voltage on both sides of the upper resistor"],"answer":0,"explanation":"All three hypotheses already predict 0 V at Vout, so repeating that measurement barely separates them.","skill":"Application","section":"career-w02-discriminating-measurement","title":"Choose one measurement that separates hypotheses","standards":["CAREER:C5.2","CAREER:C3.1"]},{"id":"CQ1208","prompt":"After repairing a suspected connector-side short, what is the strongest verification?","choices":["Stop as soon as the board powers on","Repeat the original failing measurement, then run one nearby regression check","Replace another component just in case","Delete the original readings so the record is cleaner"],"answer":1,"explanation":"Verification must directly retest the original failure and check that the repair did not create a nearby problem.","skill":"Application","section":"career-w02-change-one-verify","title":"Change one thing, verify the repair, and preserve the evidence","standards":["CAREER:C5.3","CAREER:C2.1"]},{"id":"CQ1209","prompt":"Why is changing several components and wires at once weak troubleshooting practice?","choices":["It makes the circuit too visually simple","A successful result no longer tells you which change actually corrected the fault","It always violates Ohm’s law","It prevents any voltage measurement from being taken"],"answer":1,"explanation":"One-variable changes preserve causal evidence between the diagnosis, repair, and verification.","skill":"Understanding","section":"career-w02-change-one-verify","title":"Change one thing, verify the repair, and preserve the evidence","standards":["CAREER:C5.2","CAREER:C5.3"]}];

function buildQuestion(r){
  return {
    id:r.id,
    track:'Career',
    standards:[...r.standards],
    prompt:r.prompt,
    choices:[...r.choices],
    answer:r.answer,
    explanation:r.explanation,
    difficulty:'Foundation',
    kind:'MCQ',
    skill:r.skill,
    questionClass:'substantive',
    masteryEvidence:true,
    evidenceWeight:0.7,
    sourceRef:'Alfred Week 2 Career canonical v16.3.90',
    minWeek:2,
    family:`v16390-${r.id}`,
    reviewWeek:2,
    reviewLessonIndex:1,
    reviewSectionId:r.section,
    reviewSectionTitle:r.title,
    reviewStandardCodes:r.standards.map(s=>s.replace('CAREER:','')),
    reviewConcept:'Week 2 Career troubleshooting',
    reviewRouteVersion:'16.3.90',
    audit:{
      status:'editorially-reviewed',
      date:'2026-09-30',
      reviewRevision:'2026-09-30-v16.3.90-full-eligibility-contract',
      note:'Canonical Week 2 Career mastery item rebuilt after all legacy/governance layers; not an official ETA item.',
      sources:[{title:'Alfred Week 2 Career remediation',url:'',locator:r.section}]
    }
  };
}

function apply(){
  const ids=new Set(RAW.map(x=>x.id));
  A.questions=A.questions.filter(q=>!ids.has(q.id));
  A.questions.push(...RAW.map(buildQuestion));

  const t=(A.weeklyTests||[]).find(x=>Number(x.week)===2||String(x.id)==='2');
  if(t){
    t.title='Week 02 Mastery — DC Networks + Technician Troubleshooting';
    t.count=12;
    t.mix={CETa:6,Career:6};
    t.target=80;
    t.questionIds=['CQ1067','CQ1068','CQ0312','CQ0316','CQ1088','CQ0290','CQ1204','CQ1205','CQ1206','CQ1207','CQ1208','CQ1209'];
    t.career=['C2.1','C2.4','C2.6','C3.1','C5.1','C5.2','C5.3'];
    t.reviewRouteVersion='16.3.90';
    t.runtimeRepairRevision='2026-09-30-v16.3.90-full-eligibility-contract';
    t.runtimeRepairStatus='CANONICAL_SIX_REBUILT_AFTER_GOVERNANCE';
  }

  const eligibility=RAW.map(r=>{
    const q=A.questions.find(x=>x.id===r.id);
    return {
      id:r.id,
      present:!!q,
      track:q?.track,
      status:q?.audit?.status,
      masteryEvidence:q?.masteryEvidence,
      minWeek:q?.minWeek
    };
  });

  window.ALFRED_WEEK2_CANONICAL_ASSESSMENT_16390={
    version:'16.3.90',
    raw:RAW,
    apply,
    eligibility
  };
  return eligibility;
}

apply();
})();
