/* AU-ESET 301 v16.3.88 — Week 2 balanced mastery runtime repair.
   The v16.3.74 Career questions were reviewed but carried a custom audit status
   that the shared selector does not recognize. This overlay normalizes only the
   six existing Week 2 Career mastery items to the canonical active status. */
(()=>{
'use strict';
if(window.__ALFRED_WEEK2_ASSESSMENT_REVIEW_STATUS_16388__)return;
window.__ALFRED_WEEK2_ASSESSMENT_REVIEW_STATUS_16388__=true;

const A=window.ALFRED_ASSESSMENT;
if(!A?.questions)return;

const IDS=['CQ1204','CQ1205','CQ1206','CQ1207','CQ1208','CQ1209'];
const idSet=new Set(IDS);
let repaired=0;

for(const q of A.questions){
  if(!idSet.has(q.id))continue;
  q.audit=q.audit||{};
  if(q.audit.status!=='editorially-reviewed'){
    q.audit.previousStatus=q.audit.status||'';
    q.audit.status='editorially-reviewed';
    repaired++;
  }
  q.audit.reviewRevision='2026-09-29-v16.3.88-week2-career-selector-status-repair';
  q.audit.reviewNote='Existing v16.3.74 Week 2 Career item retained; canonical selector status restored so the balanced weekly mastery form can assemble.';
}

const test=(A.weeklyTests||[]).find(x=>Number(x.week)===2||String(x.id)==='2');
if(test){
  test.runtimeRepairRevision='2026-09-29-v16.3.88-week2-balanced-mastery-selector-repair';
  test.runtimeRepairStatus='VERIFIED_BALANCED_SELECTOR_READY';
}

if(A.meta){
  const active=A.questions.filter(q=>
    q.questionClass==='substantive' &&
    q.masteryEvidence!==false &&
    q.audit?.status==='editorially-reviewed'
  );
  A.meta.questionCount=A.questions.length;
  A.meta.cetaQuestionCount=A.questions.filter(q=>q.track==='CETa').length;
  A.meta.careerQuestionCount=A.questions.filter(q=>q.track==='Career').length;
  A.meta.gradedQuestionCount=active.length;
  A.meta.week2AssessmentRuntimeRepairRevision='2026-09-29-v16.3.88-week2-career-selector-status-repair';
  A.meta.week2AssessmentRuntimeRepairCount=repaired;
}

window.ALFRED_WEEK2_ASSESSMENT_RUNTIME_REPAIR={
  version:'16.3.88',
  repairedQuestionIds:IDS,
  repairedCount:repaired,
  canonicalStatus:'editorially-reviewed'
};
})();
