/* AU-ESET 301 v16.3.82 — Week 3 final three-gate acceptance repair
   Loads after week3-remediation-v16.3.81.js.
   Scope:
   - correct C3.8's false Week 6 teaching claim and re-home it to the existing Week 20 target;
   - close Week 3 CETa/Career/Tandem status only after runtime structural checks pass;
   - preserve the v16.3.81 learner content, LAB-003 evidence gate, calendar, and Cloud Sync protocol 2.
*/
(()=>{
'use strict';
if(window.__ALFRED_WEEK3_FINAL_ACCEPTANCE_16382__) return;
window.__ALFRED_WEEK3_FINAL_ACCEPTANCE_16382__=true;

const REV='2026-09-29-v16.3.82-week3-final-acceptance';
const C=window.ALFRED_CURRICULUM;
const A=window.ALFRED_ASSESSMENT;
const AC=window.ALFRED_ACADEMIC;
const CG=window.ALFRED_CAREER_GOVERNANCE;
const T=window.ALFRED_TANDEM_GOVERNANCE;

const removeCode=(arr,code)=>(arr||[]).filter(x=>x!==code);
const addCode=(arr,code)=>{const out=[...(arr||[])];if(!out.includes(code))out.push(code);return out;};
const failures=[];

// 1) Correct C3.8 governance truth.
// Week 6 never received a substantive C3.8 teaching route in v16.3.81.
// Keep C3.8 out of Week 3 and Week 6. Its existing Week 20 specialty-instrument
// assignment remains a future remediation target, not a verified teaching claim.
if(CG?.weekMap){
  const w3=CG.weekMap.find(x=>Number(x.week)===3);
  const w6=CG.weekMap.find(x=>Number(x.week)===6);
  const w20=CG.weekMap.find(x=>Number(x.week)===20);
  if(w3) w3.targets=(w3.targets||[]).filter(t=>t.code!=='C3.8');
  if(w6) w6.targets=(w6.targets||[]).filter(t=>t.code!=='C3.8');
  if(w20 && !(w20.targets||[]).some(t=>t.code==='C3.8')){
    w20.targets=[...(w20.targets||[]),{code:'C3.8',targetLevel:2,targetLevelName:'Independent Performance'}];
  }

  const s38=CG.careerStandards?.find(s=>s.code==='C3.8');
  if(s38){
    s38.firstCurriculumUseWeek=20;
    s38.firstExposureWeek=null;
    s38.firstSubstantiveTeachingWeek=null;
    s38.firstGuidedPracticeWeek=null;
    s38.primaryMasteryWeek=null;
    s38.instructionalHome='Week 20 specialty-instrument specialization target — substantive teaching, guided practice, assessment, and authentic evidence route still require remediation before VERIFIED_PASS.';
    s38.reconstructionStatus='RE-HOMED TARGET v16.3.82 — Week 20; route pending';
    s38.provenance={
      ...(s38.provenance||{}),
      rationale:'v16.3.82 removes the unsupported Week 6 teaching claim. C3.8 is not required for Week 3 acceptance and remains assigned to the existing Week 20 specialty-instrument specialization for later route construction.'
    };
  }
  CG.revision=REV;
  CG.version='16.3.82';
}

// 2) Correct tandem map for C3.8 without inventing unverified CETa support.
if(T?.weekAcceptance){
  const w3=T.weekAcceptance.find(x=>Number(x.week)===3);
  const w6=T.weekAcceptance.find(x=>Number(x.week)===6);
  const w20=T.weekAcceptance.find(x=>Number(x.week)===20);
  if(w6) w6.activeCareerStandards=removeCode(w6.activeCareerStandards,'C3.8');
  if(w20) w20.activeCareerStandards=addCode(w20.activeCareerStandards,'C3.8');

  const rel=T.byCareerCode?.['C3.8'];
  if(rel){
    rel.careerFirstTargetWeek=20;
    const authority=T.cetaAuthorityByCode||{};
    const all=[...(rel.allSupportCetaCodes||[])];
    const verified=all.filter(code=>authority[code]?.routeAuthorityStatus==='ACTIVE_SEMANTIC_ROUTE');
    const pending=all.filter(code=>authority[code]?.routeAuthorityStatus!=='ACTIVE_SEMANTIC_ROUTE');
    rel.verifiedSupportCetaCodes=verified;
    rel.pendingSupportCetaCodes=pending;
    rel.prerequisiteCetaCodes=verified.filter(code=>Number(authority[code]?.confirmedTeachingWeek||999)<20);
    rel.concurrentCetaCodes=verified.filter(code=>Number(authority[code]?.confirmedTeachingWeek||999)===20);
    rel.laterCetaReinforcementCodes=verified.filter(code=>Number(authority[code]?.confirmedTeachingWeek||0)>20);
    rel.relationshipType=rel.concurrentCetaCodes.length?'CONCURRENT_SHARED':
      rel.prerequisiteCetaCodes.length?'CETA_TO_CAREER':'CAREER_TO_CETA_FORMALIZATION';
    rel.relationshipPurpose='C3.8 is a Week 20 specialty-instrument target. Only currently verified CETa routes may count as prerequisites; pending specialty-instrument CETa routes remain warnings/remediation and do not establish Week 3 or Week 6 teaching.';
    rel.relationshipAuthorityStatus=pending.length?'VERIFIED_CORE_WITH_PENDING_SECONDARY_CETA_ROUTES':'ALL_CETA_SUPPORT_ROUTES_ACTIVE';
    rel.tandemStatus='REMEDIATION_REQUIRED';
  }

  if(w3){
    // v16.3.81 already removed C3.8 and activated 8.1/8.2.
    w3.activeCareerStandards=removeCode(w3.activeCareerStandards,'C3.8');
  }

  T.revision=REV;
  T.version='16.3.82';
}

// 3) Remove the contradictory v16.3.81 status before running the final checks.
if(C?.meta){
  C.meta.week3SpecialtyInstrumentRehome='C3.8 removed from Week 3 and the unsupported Week 6 teaching claim; Week 20 remains the future specialty-instrument target and is still remediation-required.';
}
const m3=C?.modules?.find(x=>Number(x.week)===3);
const ceta=m3?.lessons?.find(l=>l.track==='CETa')||m3?.lessons?.[0];
const career=m3?.lessons?.find(l=>l.track==='Career')||m3?.lessons?.[1];
const w3=T?.weekAcceptance?.find(x=>Number(x.week)===3);

// 4) Final structural acceptance checks.
if(!m3) failures.push('Week 3 curriculum module missing');
if(!w3) failures.push('Week 3 tandem acceptance record missing');

for(const code of ['8.1','8.2']){
  const row=T?.cetaAuthorityByCode?.[code];
  if(row?.routeAuthorityStatus!=='ACTIVE_SEMANTIC_ROUTE' || Number(row?.confirmedTeachingWeek)!==3){
    failures.push(`CETa ${code} is not an active Week 3 semantic route`);
  }
}
if((w3?.cetaRouteBacklogCodes||[]).some(code=>['8.1','8.2'].includes(code))){
  failures.push('8.1/8.2 still appear in the Week 3 CETa route backlog');
}
if((w3?.activeCareerStandards||[]).includes('C3.8')){
  failures.push('C3.8 still appears in Week 3 active Career standards');
}
for(const code of ['C15.1','C15.2','C15.3','C15.4','C15.5']){
  if(!(w3?.activeCareerStandards||[]).includes(code)) failures.push(`${code} missing from Week 3 Career targets`);
}

const teaching=career?.integrated?.teaching||[];
for(const id of ['career-w03-test-asset-validity','career-w03-measurement-capability-decision']){
  if(!teaching.some(s=>s.sectionId===id)) failures.push(`${id} missing from Week 3 Career teaching`);
}
for(const s of teaching){
  for(const field of ['occupationalTask','trackHandoff','careerDemo','careerPractice','physicalBoundary']){
    if(!s?.[field]) failures.push(`${s?.sectionId||'unknown Career section'} missing ${field}`);
  }
}

const task=(career?.semanticTeaching||career?.integrated?.semanticTasks||[]).find(t=>t.id==='SEM-C3-03-1640A');
if(!task) failures.push('Week 3 Career semantic task SEM-C3-03-1640A missing');

const qids=new Set((A?.questions||[]).map(q=>q.id));
for(const id of ['CQ1204','CQ1205','CQ1206','CQ1207','CQ1208']){
  if(!qids.has(id)) failures.push(`${id} missing from assessment bank`);
}

const lab=(AC?.labs||[]).find(l=>l.id==='LAB-003');
if(!lab?.evidenceGate?.required) failures.push('LAB-003 evidence gate is not required');
if((lab?.evidenceGate?.checkpoints||[]).length<10) failures.push('LAB-003 evidence gate is incomplete');

const careerEval=window.ALFRED_CAREER_ACCEPTANCE?.evaluateWeek?.(3);
if(!careerEval?.pass){
  failures.push('Career occupational acceptance engine did not pass Week 3');
}

// Tandem structural check independent of the declaration string.
if(w3 && T?.byCareerCode){
  for(const code of (w3.activeCareerStandards||[])){
    const rel=T.byCareerCode[code];
    if(!rel){failures.push(`Missing tandem relationship ${code}`);continue;}
    if(rel.relationshipType!=='CAREER_EXTENSION' && !(rel.verifiedSupportCetaCodes||[]).length){
      failures.push(`${code} has no verified CETa support`);
    }
    for(const c of (rel.prerequisiteCetaCodes||[])){
      const tw=Number(T.cetaAuthorityByCode?.[c]?.confirmedTeachingWeek||999);
      if(!(tw<Number(rel.careerFirstTargetWeek))) failures.push(`${code} prerequisite ${c} timing invalid`);
    }
    for(const c of (rel.concurrentCetaCodes||[])){
      const tw=Number(T.cetaAuthorityByCode?.[c]?.confirmedTeachingWeek||999);
      if(tw!==Number(rel.careerFirstTargetWeek)) failures.push(`${code} concurrent ${c} timing invalid`);
    }
  }
}

// 5) Declare VERIFIED_PASS only when every structural check above is clean.
if(w3 && failures.length===0){
  w3.cetaGateStatus='VERIFIED_PASS';
  w3.careerGateStatus='VERIFIED_PASS';
  w3.tandemDeclaredStatus='VERIFIED_PASS';
  w3.tandemStructuralStatus='PASS';
  w3.overallAcceptanceStatus='VERIFIED_PASS';
  w3.finalAcceptanceRevision=REV;

  if(CG?.weekMap){
    const cg3=CG.weekMap.find(x=>Number(x.week)===3);
    if(cg3){
      cg3.careerAcceptanceStatus='VERIFIED_PASS';
      cg3.priority='CLOSED';
      cg3.remediationRule='Closed by v16.3.82 after deployed v16.3.81 remediation audit and correction of C3.8 governance.';
    }
  }

  if(m3) m3.tandemGovernance=JSON.parse(JSON.stringify(w3));

  if(C?.meta){
    C.meta.week3FinalAcceptanceStatus='VERIFIED_PASS';
    C.meta.week3FinalAcceptanceRevision=REV;
    C.meta.week3FinalAcceptanceVerdict='VERIFIED_PASS — CETa 8.1/8.2 active, Career C15 metrology route present, LAB-003 evidence gate required, Career occupational gate passed, tandem timing structurally valid, and C3.8 removed from unsupported Week 3/Week 6 claims.';
    C.meta.week3ThreeGateVerdict='VERIFIED_PASS';
    C.meta.verifiedCombinedWeekCount=2;
  }
  if(A?.meta){
    A.meta.week3FinalAcceptanceRevision=REV;
    A.meta.week3ThreeGateStatus='VERIFIED_PASS';
  }

  // Confirm the existing acceptance engine agrees after the declaration is closed.
  const finalEval=window.ALFRED_WEEK_ACCEPTANCE?.evaluateWeek?.(3);
  if(finalEval && !finalEval.pass){
    failures.push(...(finalEval.ceta?.failures||[]).map(x=>`CETa engine: ${x}`));
    failures.push(...(finalEval.career?.failures||[]).map(x=>`Career engine: ${x}`));
    failures.push(...(finalEval.tandem?.failures||[]).map(x=>`Tandem engine: ${x}`));
    w3.cetaGateStatus='REMEDIATION_REQUIRED';
    w3.careerGateStatus='REMEDIATION_REQUIRED';
    w3.tandemDeclaredStatus='REMEDIATION_REQUIRED';
    w3.overallAcceptanceStatus='REMEDIATION_REQUIRED';
    if(C?.meta){
      C.meta.week3FinalAcceptanceStatus='REMEDIATION_REQUIRED';
      C.meta.week3ThreeGateVerdict='REMEDIATION_REQUIRED';
      C.meta.week3FinalAcceptanceFailures=[...failures];
      C.meta.verifiedCombinedWeekCount=1;
    }
  }
}else if(C?.meta){
  C.meta.week3FinalAcceptanceStatus='REMEDIATION_REQUIRED';
  C.meta.week3ThreeGateVerdict='REMEDIATION_REQUIRED';
  C.meta.week3FinalAcceptanceRevision=REV;
  C.meta.week3FinalAcceptanceFailures=[...failures];
}

if(C?.meta) C.meta.crossTrackCurriculumRevision=REV;
if(A?.meta) A.meta.cetaInstructionalAuthorityRevision=REV;

window.ALFRED_WEEK3_FINAL_ACCEPTANCE_16382={
  revision:REV,
  status:C?.meta?.week3FinalAcceptanceStatus||'NOT_EVALUATED',
  failures:[...failures],
  c3_8TargetWeek:20,
  c3_8VerifiedTeachingClaim:false
};
})();
