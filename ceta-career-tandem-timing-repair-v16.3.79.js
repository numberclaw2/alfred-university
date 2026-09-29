/* AU-ESET 301 v16.3.79 — CETa ↔ Career Tandem Timing Repair */
(()=>{
'use strict';
if(window.__ALFRED_TANDEM_TIMING_16379__)return; window.__ALFRED_TANDEM_TIMING_16379__=true;
const T=window.ALFRED_TANDEM_GOVERNANCE,C=window.ALFRED_CURRICULUM,A=window.ALFRED_ASSESSMENT;
if(!T||!C||!A)throw new Error('v16.3.79 requires v16.3.78 tandem governance and curriculum/assessment data');
const cetaWeek=new Map((C.coverageMatrix||[]).filter(r=>r.track==='CETa').map(r=>[r.code,Number(r.week)]));
const purpose={
CETA_TO_CAREER:'CETa theory/model is taught first; Career converts it into technician decisions, measurements, troubleshooting, or evidence.',
CAREER_TO_CETA_FORMALIZATION:'Alfred introduces the bounded technician behavior first; later CETa instruction formalizes broader terminology/theory. Future CETa rows are reinforcement, never prerequisites.',
CONCURRENT_SHARED:'CETa knowledge and technician performance are activated in the same week; neither evidence stream substitutes for the other.',
CAREER_EXTENSION:'Career skill extends beyond CETa scope while using selected CETa knowledge as support. It is never forced into false CETa equivalence.'};
for(const r of T.careerRelationships||[]){
 const w=Number(r.careerFirstTargetWeek), all=[...(r.allSupportCetaCodes||[])];
 const pre=all.filter(c=>cetaWeek.get(c)<w), con=all.filter(c=>cetaWeek.get(c)===w), later=all.filter(c=>cetaWeek.get(c)>w);
 r.prerequisiteCetaCodes=pre; r.concurrentCetaCodes=con; r.laterCetaReinforcementCodes=later;
 const type=r.relationshipType==='CAREER_EXTENSION'?'CAREER_EXTENSION':con.length?'CONCURRENT_SHARED':pre.length?'CETA_TO_CAREER':'CAREER_TO_CETA_FORMALIZATION';
 r.relationshipType=type; r.relationshipPurpose=purpose[type];
}
T.byCareerCode=Object.fromEntries((T.careerRelationships||[]).map(r=>[r.careerCode,r]));
for(const w of T.weekAcceptance||[]){
 const seen=[]; for(const code of (w.activeCareerStandards||[])){const t=T.byCareerCode[code]?.relationshipType;if(t&&!seen.includes(t))seen.push(t);} w.relationshipTypes=seen;
}
T.revision='2026-09-29-v16.3.79-tandem-timing-governance'; T.version='16.3.79'; T.timingClassificationRule='prerequisite < Career week; concurrent = Career week; later reinforcement > Career week'; T.futurePrerequisiteLeakCount=0;
A.meta=A.meta||{}; A.meta.tandemGovernanceRevision=T.revision;
for(const s of (A.careerStandards||[]))s.tandem=T.byCareerCode[s.code]||null;
C.meta=C.meta||{}; C.meta.crossTrackCurriculumRevision=T.revision; C.meta.tandemTimingClassificationRevision=T.revision;
for(const row of (C.coverageMatrix||[])){if(row.track==='Career'){const r=T.byCareerCode[row.code];if(r){row.tandemRelationshipType=r.relationshipType;row.prerequisiteCetaCodes=[...r.prerequisiteCetaCodes];row.concurrentCetaCodes=[...r.concurrentCetaCodes];row.laterCetaReinforcementCodes=[...r.laterCetaReinforcementCodes];row.traceabilityVersion='v16.3.79';}}}
for(const wr of (T.weekAcceptance||[])){const m=(C.modules||[]).find(x=>Number(x.week)===Number(wr.week));if(m)m.tandemGovernance=JSON.parse(JSON.stringify(wr));}
window.ALFRED_TANDEM_GOVERNANCE=T;
})();
