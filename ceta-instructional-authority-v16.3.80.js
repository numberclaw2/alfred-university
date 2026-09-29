/* AU-ESET 301 v16.3.80 — CETa Instructional Authority + Tandem Source-of-Truth Repair
   Purpose: stop stale legacy coverage-week metadata from establishing CETa prerequisites.
   Live semantic teaching routes are the only verified timing authority. Standards without an
   active semantic route remain in the 262-standard universe but are explicitly re-home pending. */
(()=>{
'use strict';
if(window.__ALFRED_CETA_AUTHORITY_16380__) return;
window.__ALFRED_CETA_AUTHORITY_16380__=true;
const C=window.ALFRED_CURRICULUM,A=window.ALFRED_ASSESSMENT,T=window.ALFRED_TANDEM_GOVERNANCE;
if(!C||!A||!T) throw new Error('v16.3.80 requires curriculum, assessment, and v16.3.79 tandem governance');

const REHOME={
 '2.1':1,'2.2':7,'2.2.1':7,'2.2.2':7,'2.3':7,'2.4':1,'2.5':7,'2.5.1':7,'2.6':1,'2.7':7,
 '2.8':7,'2.9':7,'2.10':6,'2.11':6,'2.12':7,'2.12.1':4,'2.12.2':4,'2.13':1,'2.13.1':1,'2.14':1,
 '4.5':11,'4.6':11,'4.7':6,'4.8':6,'4.9':6,'4.11':6,'4.12':20,'4.13':6,'4.14':10,'4.15':6,'4.16':7,
 '8.1':3,'8.2':3,'8.5':6,'8.7':6,'8.8':7,'8.9':9,'8.10':11,'8.11':11,'8.13':20,'8.14':9,'8.15':9,'8.16':7
};
const REHOME_REASON={
 '2.1':'Atomic/charge foundation belongs with Week 1 electricity fundamentals.','2.2':'Electromagnetism belongs with Week 7 magnetism and electromechanical devices.','2.2.1':'Magnetic-field types belong with Week 7 magnetism.','2.2.2':'Electricity–magnetism relationship belongs with Week 7.','2.3':'Uses of magnetism belong with Week 7 relays/motors/generators.','2.4':'Basic uses of electricity belong with Week 1 fundamentals.','2.5':'Motor/generator conversion belongs with Week 7.','2.5.1':'EM5 cross-reference belongs with the Week 7 magnetics/electromechanical block.','2.6':'Current/voltage/resistance foundation belongs with Week 1.','2.7':'Resistive materials and resistor families belong with Week 7 components.','2.8':'Capacitor types/construction belong with Week 7 component families after Week 4 behavior.','2.9':'Inductor construction/cores/usages belong with Week 7 component families.','2.10':'Reactance vs resistance belongs with Week 6 impedance/reactance.','2.11':'Impedance belongs with Week 6.','2.12':'AC/DC sources and generation belong with Week 7 source/generator context.','2.12.1':'Peak/peak-to-peak/RMS belongs with Week 4 waveform language.','2.12.2':'Duty cycle/pulse width belongs with Week 4 waveform language.','2.13':'Ohm-law formulas belong with Week 1.','2.13.1':'Ohm-law calculations belong with Week 1.','2.14':'Power calculations belong with Week 1.',
 '4.5':'Oscillator/crystal purpose belongs with Week 11 digital timing.','4.6':'Oscillator vs multivibrator belongs with Week 11 digital timing.','4.7':'R/L/C circuit classification belongs with Week 6.','4.8':'Resonance belongs with Week 6.','4.9':'Polar/rectangular LRC representation belongs with Week 6.','4.11':'Differentiator/integrator behavior belongs with Week 6 filter/response work.','4.12':'PLL use belongs with Week 20 RF/communications.','4.13':'Filter circuits belong with Week 6.','4.14':'Wave-shaping belongs with Week 10 amplifier/op-amp signal conditioning.','4.15':'Bandwidth/Q belongs with Week 6 resonance/filter work.','4.16':'Piezoelectric effect belongs with Week 7 component/device families.',
 '8.1':'Analog/digital meter operation belongs with Week 3 instrumentation.','8.2':'Meter construction/components belong with Week 3.','8.5':'Signal-generator purpose belongs with Week 6 response characterization.','8.7':'Frequency-counter purpose/limits belong with Week 6 frequency-response work.','8.8':'RCL substitution equipment belongs with Week 7 component characterization.','8.9':'ESR measurement belongs with Week 9 power-supply/capacitor fault work.','8.10':'Logic probes belong with Week 11 digital troubleshooting.','8.11':'Logic pulsers belong with Week 11 digital troubleshooting.','8.13':'Spectrum analyzers belong with Week 20 RF/spectrum work.','8.14':'Dummy loads belong with Week 9 power-supply/load testing.','8.15':'Rheostats/isolation transformers/variacs belong with Week 9 controlled power work.','8.16':'Potentiometers belong with Week 7 component families and variable-divider use.'
};

const uniqSort=a=>[...new Set(a)].sort((x,y)=>Number(x)-Number(y));
const semanticWeeks=new Map(), moduleWeeks=new Map();
const add=(map,code,week)=>{if(!map.has(code))map.set(code,[]);const a=map.get(code);if(!a.includes(Number(week)))a.push(Number(week));};
for(const m of (C.modules||[])){
  for(const code of (m.standards?.ceta||[])) add(moduleWeeks,code,m.week);
  const ceta=(m.lessons||[]).find(l=>l.track==='CETa')||(m.lessons||[])[0];
  const tasks=(ceta?.semanticTeaching?.length?ceta.semanticTeaching:(ceta?.integrated?.semanticTasks||[]));
  for(const task of tasks) for(const code of (task.codes||[])) add(semanticWeeks,code,m.week);
}
const coverageByCode=new Map((C.coverageMatrix||[]).filter(r=>r.track==='CETa').map(r=>[r.code,r]));
const authority=[];
for(const s of (A.cetaStandards||[])){
  const sem=uniqSort(semanticWeeks.get(s.code)||[]), mod=uniqSort(moduleWeeks.get(s.code)||[]);
  const legacy=Number(coverageByCode.get(s.code)?.week||0)||null;
  const confirmed=sem.length?sem[0]:null;
  const assigned=mod.length?mod[0]:null;
  const target=confirmed??REHOME[s.code]??assigned;
  authority.push({
    code:s.code,category:s.category||String(s.code).split('.')[0],officialRequirement:s.officialRequirement||s.text||'',
    legacyCoverageWeek:legacy,moduleAssignedWeeks:mod,activeSemanticTeachingWeeks:sem,
    confirmedTeachingWeek:confirmed,firstModuleAssignedWeek:assigned,liveFirstAssignmentWeek:(sem.length||mod.length)?Math.min(...sem,...mod):null,rehomeTargetWeek:confirmed?null:(REHOME[s.code]??assigned??null),
    routeAuthorityStatus:confirmed?'ACTIVE_SEMANTIC_ROUTE':'ROUTE_REHOME_REQUIRED',
    rehomeReason:confirmed?'':(REHOME_REASON[s.code]||'Current module assignment exists but no active semantic teaching route; re-audit before claiming coverage.'),
    legacyWeekMatchesLiveAuthority:confirmed?legacy===confirmed:false
  });
}
const byCode=Object.fromEntries(authority.map(r=>[r.code,r]));
const verifiedCodes=new Set(authority.filter(r=>r.routeAuthorityStatus==='ACTIVE_SEMANTIC_ROUTE').map(r=>r.code));
const verifiedWeek=new Map(authority.filter(r=>r.confirmedTeachingWeek!=null).map(r=>[r.code,r.confirmedTeachingWeek]));
const confirmedByWeek=new Map();
for(const r of authority.filter(r=>r.confirmedTeachingWeek!=null)){if(!confirmedByWeek.has(r.confirmedTeachingWeek))confirmedByWeek.set(r.confirmedTeachingWeek,[]);confirmedByWeek.get(r.confirmedTeachingWeek).push(r.code);}
const backlogByWeek=new Map();
for(const r of authority.filter(r=>r.routeAuthorityStatus==='ROUTE_REHOME_REQUIRED'&&r.rehomeTargetWeek!=null)){if(!backlogByWeek.has(r.rehomeTargetWeek))backlogByWeek.set(r.rehomeTargetWeek,[]);backlogByWeek.get(r.rehomeTargetWeek).push(r.code);}

const PURPOSE={
 CETA_TO_CAREER:'Verified live CETa theory/model is taught first; Career converts it into technician decisions, measurements, troubleshooting, or evidence.',
 CAREER_TO_CETA_FORMALIZATION:'Career introduces the bounded technician behavior before a verified live CETa route formalizes broader terminology/theory. Pending/stale CETa routes never count as prerequisites.',
 CONCURRENT_SHARED:'Verified live CETa teaching and Career performance are activated in the same week; neither evidence stream substitutes for the other.',
 CAREER_EXTENSION:'Career skill extends beyond CETa scope while using only verified live CETa routes for any sequencing claim.'
};
for(const r of (T.careerRelationships||[])){
  const all=[...(r.allSupportCetaCodes||[])];
  const verified=all.filter(c=>verifiedCodes.has(c)), pending=all.filter(c=>!verifiedCodes.has(c));
  const w=Number(r.careerFirstTargetWeek);
  const pre=verified.filter(c=>verifiedWeek.get(c)<w), con=verified.filter(c=>verifiedWeek.get(c)===w), later=verified.filter(c=>verifiedWeek.get(c)>w);
  r.verifiedSupportCetaCodes=verified;
  r.pendingSupportCetaCodes=pending;
  r.prerequisiteCetaCodes=pre;
  r.concurrentCetaCodes=con;
  r.laterCetaReinforcementCodes=later;
  const type=r.relationshipType==='CAREER_EXTENSION'?'CAREER_EXTENSION':con.length?'CONCURRENT_SHARED':pre.length?'CETA_TO_CAREER':'CAREER_TO_CETA_FORMALIZATION';
  r.relationshipType=type;
  r.relationshipPurpose=PURPOSE[type];
  r.relationshipAuthorityStatus=pending.length?'VERIFIED_CORE_WITH_PENDING_SECONDARY_CETA_ROUTES':'ALL_CETA_SUPPORT_ROUTES_ACTIVE';
}
T.byCareerCode=Object.fromEntries((T.careerRelationships||[]).map(r=>[r.careerCode,r]));
for(const w of (T.weekAcceptance||[])){
  w.activeCetaCodes=[...(confirmedByWeek.get(Number(w.week))||[])];
  w.cetaRouteBacklogCodes=[...(backlogByWeek.get(Number(w.week))||[])];
  w.cetaGateStatus=w.cetaRouteBacklogCodes.length?'REMEDIATION_REQUIRED':'STRUCTURAL_PASS';
  const types=[];for(const code of (w.activeCareerStandards||[])){const t=T.byCareerCode[code]?.relationshipType;if(t&&!types.includes(t))types.push(t);}w.relationshipTypes=types;
  if(Number(w.week)!==2) w.overallAcceptanceStatus='REMEDIATION_REQUIRED';
}
T.revision='2026-09-29-v16.3.80-ceta-instructional-authority';
T.version='16.3.80';
T.cetaInstructionalAuthority=authority;
T.cetaAuthorityByCode=byCode;
T.cetaAuthoritySummary={standards:authority.length,activeSemanticRoutes:authority.filter(r=>r.routeAuthorityStatus==='ACTIVE_SEMANTIC_ROUTE').length,routeRehomeRequired:authority.filter(r=>r.routeAuthorityStatus==='ROUTE_REHOME_REQUIRED').length,legacyVsVerifiedSemanticMismatchCount:authority.filter(r=>r.confirmedTeachingWeek!=null&&r.legacyCoverageWeek!==r.confirmedTeachingWeek).length,legacyVsLiveAssignmentMismatchCount:authority.filter(r=>r.liveFirstAssignmentWeek!=null&&r.legacyCoverageWeek!==r.liveFirstAssignmentWeek).length};
T.timingAuthorityRule='Only active semantic teaching routes may establish verified CETa prerequisite/concurrent/later timing. Legacy coverage weeks and route-rehome targets never establish prerequisites.';
T.futurePrerequisiteLeakCount=0;
window.ALFRED_TANDEM_GOVERNANCE=T;

A.meta=A.meta||{};
A.meta.cetaInstructionalAuthorityRevision=T.revision;
A.meta.currentStandardsUniverse={ceta:262,career:95,total:357};
A.meta.cetaRouteAuthority={verified:219,rehomeRequired:43};
for(const s of (A.cetaStandards||[])) s.instructionalAuthority=byCode[s.code]||null;
for(const s of (A.careerStandards||[])) s.tandem=T.byCareerCode[s.code]||null;

C.meta=C.meta||{};
C.meta.crossTrackCurriculumRevision=T.revision;
C.meta.cetaInstructionalAuthorityRevision=T.revision;
C.meta.currentStandardsUniverse={ceta:262,career:95,total:357};
C.meta.verifiedActiveCetaRouteCount=219;
C.meta.cetaRouteRehomeRequiredCount=43;
C.meta.legacyCoverageWeekIsTimingAuthority=false;
for(const row of (C.coverageMatrix||[])){
  if(row.track==='CETa'){
    const x=byCode[row.code]; if(!x)continue;
    row.legacyCoverageWeek=x.legacyCoverageWeek;
    row.governanceConfirmedTeachingWeek=x.confirmedTeachingWeek;
    row.governanceRehomeTargetWeek=x.rehomeTargetWeek;
    row.governanceRouteAuthorityStatus=x.routeAuthorityStatus;
    row.routeStatus=x.routeAuthorityStatus==='ACTIVE_SEMANTIC_ROUTE'?'CETA_ACTIVE_ROUTE_VERIFIED':'CETA_ROUTE_REHOME_REQUIRED';
    row.tandemStatus='REQUIRES_WEEK_TANDEM_GATE';
  } else if(row.track==='Career'){
    const r=T.byCareerCode[row.code]; if(!r)continue;
    row.tandemRelationshipType=r.relationshipType;
    row.prerequisiteCetaCodes=[...r.prerequisiteCetaCodes];
    row.concurrentCetaCodes=[...r.concurrentCetaCodes];
    row.laterCetaReinforcementCodes=[...r.laterCetaReinforcementCodes];
    row.pendingCetaSupportCodes=[...r.pendingSupportCetaCodes];
    row.traceabilityVersion='v16.3.80';
  }
}
for(const wr of (T.weekAcceptance||[])){const m=(C.modules||[]).find(x=>Number(x.week)===Number(wr.week));if(m)m.tandemGovernance=JSON.parse(JSON.stringify(wr));}

const G={
 evaluateCetaGate(week){
  const w=T.weekAcceptance.find(x=>Number(x.week)===Number(week));if(!w)return {pass:false,failures:['missing week authority record']};
  const failures=[];
  for(const code of (w.activeCetaCodes||[])){if(byCode[code]?.routeAuthorityStatus!=='ACTIVE_SEMANTIC_ROUTE')failures.push(`unverified active CETa route ${code}`);}
  for(const code of (w.cetaRouteBacklogCodes||[])) failures.push(`CETa route requires re-home/re-audit: ${code}`);
  return {pass:failures.length===0,failures,activeCodes:[...(w.activeCetaCodes||[])],routeBacklog:[...(w.cetaRouteBacklogCodes||[])]};
 },
 evaluateCareerGate(week){const base=window.ALFRED_CAREER_ACCEPTANCE?.evaluateWeek?.(week);if(!base)return {pass:false,failures:['Career acceptance engine unavailable']};return {pass:!!base.pass,failures:(base.sections||[]).flatMap(s=>(s.failures||[]).map(f=>`${s.id}: ${f}`)),details:base};},
 evaluateTandemGate(week){
  const w=T.weekAcceptance.find(x=>Number(x.week)===Number(week));if(!w)return {pass:false,failures:['missing week tandem map']};
  const failures=[],warnings=[];
  for(const code of (w.activeCareerStandards||[])){
    const r=T.byCareerCode[code];if(!r){failures.push(`missing relationship ${code}`);continue;}
    if(r.relationshipType!=='CAREER_EXTENSION'&&!(r.verifiedSupportCetaCodes||[]).length) failures.push(`${code} has no verified live CETa support route`);
    for(const c of (r.prerequisiteCetaCodes||[])){const tw=verifiedWeek.get(c);if(!(tw<Number(r.careerFirstTargetWeek)))failures.push(`${code} prerequisite ${c} is not earlier verified teaching`);}
    for(const c of (r.concurrentCetaCodes||[])){const tw=verifiedWeek.get(c);if(tw!==Number(r.careerFirstTargetWeek))failures.push(`${code} concurrent ${c} is not same-week verified teaching`);}
    if((r.pendingSupportCetaCodes||[]).length) warnings.push(`${code} has pending secondary CETa support: ${r.pendingSupportCetaCodes.join(', ')}`);
  }
  if(w.tandemDeclaredStatus!=='VERIFIED_PASS') failures.push('Tandem acceptance is still remediation-required for this week');
  return {pass:failures.length===0,failures,warnings,declaredStatus:w.tandemDeclaredStatus};
 },
 evaluateWeek(week){const ceta=G.evaluateCetaGate(week),career=G.evaluateCareerGate(week),tandem=G.evaluateTandemGate(week);const pass=ceta.pass&&career.pass&&tandem.pass;return {week:Number(week),ceta,career,tandem,pass,status:pass?'VERIFIED_PASS':'REMEDIATION_REQUIRED'};}
};
window.ALFRED_WEEK_ACCEPTANCE=G;
})();
