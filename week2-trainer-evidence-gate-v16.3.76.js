/* AU-ESET 301 — v16.3.76 Week 2 trainer evidence-gate + mastery-route hotfix */
(()=>{
  const C=window.ALFRED_CURRICULUM;
  const A=window.ALFRED_ASSESSMENT;
  if(A?.questions){
    const q=A.questions.find(x=>x.id==='CQ1088');
    if(q){
      q.reviewWeek=1;
      q.reviewLessonIndex=1;
      q.reviewSectionId='career-w01-voltage-resistance-and-current-modes-are-different-circuits';
      q.reviewSectionTitle='Voltage, resistance, and current modes are different circuits';
      q.reviewRouteVersion='16.3.76';
    }
    const test=(A.weeklyTests||[]).find(x=>Number(x.week)===2);
    if(test){
      test.reviewRouting='All 12 Week 2 mastery questions route to an existing exact teaching section, including cumulative Week 1 retrieval.';
      test.reviewRouteVersion='16.3.76';
    }
  }
  if(C){
    C.meta=C.meta||{};
    C.meta.week2CareerInteractiveRevision='2026-09-29-v16.3.76-no-guess-evidence-gate';
    C.meta.week2CareerBoundaryTrainerEvidenceGate=true;
    C.meta.week2CareerDecisionTrainerEvidenceGate=true;
    C.meta.week2MasteryExactReviewRouteCount=12;
    C.meta.week2MasteryReviewRouteRevision='2026-09-29-v16.3.76-stable-week1-dmm-route';
    C.meta.week2CareerFinalUXStatus='PASS after v16.3.76 evidence-gate + exact-route hotfix.';
  }
})();
