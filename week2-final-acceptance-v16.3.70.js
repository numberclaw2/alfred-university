/* AU-ESET 301 — v16.3.70 Week 2 final acceptance repair
   Scope: Week 2 only. Final cleanup after v16.3.68/v16.3.69.
   Repairs: Study Guide retrieval question scope + optional AAC guidance precision.
*/
(()=>{
  const C=window.ALFRED_CURRICULUM;
  if(!C?.modules?.length)return;
  const W=C.modules.find(m=>Number(m.week)===2);
  const SG=window.ALFRED_CETA_STUDY_GUIDE;
  const R=C.teachingResourceIntegration;
  if(!W)return;

  // Study Guide p.34: Q5–7 rely on transistor-amplifier context that is not taught in Week 2.
  // Keep the useful spaced-retrieval / parallel-network items only.
  const quiz=SG?.records?.find(r=>r.id==='sg-w02-v16368-p034-quiz');
  if(quiz){
    quiz.focus='Use Chapter 4 quiz questions 2, 3, and 4 only. Questions 2–3 are spaced retrieval of Week 1 current/Ohm-law foundations; question 4 checks Week 2 parallel-resistance reasoning.';
    quiz.after='Answer Q2–Q4 before checking p.223. For every miss, return to the smallest Alfred lesson page that teaches the underlying idea, explain the rule in words, then solve a fresh example.';
    quiz.safelySkim='Do Q2, Q3, and Q4 only. Skip Q1 (atomic-number material), Q5–Q7 (transistor-amplifier context not taught yet), and Q8–Q9 (maximum power transfer, not Week 2).';
    quiz.estimatedMinutes=4;
    quiz.purpose='Use a tightly scoped Chapter 4 retrieval check without importing transistor-amplifier or maximum-power-transfer knowledge before Alfred teaches it.';
  }

  // Refine optional All About Circuits Study guidance. These remain optional and never gate Week 2.
  const media=W.integration?.media||[];
  const bySource=id=>media.find(x=>x.source===id);
  const series=bySource('aacSeries1');
  if(series){
    series.watchFor='Focus on the single current path, same current through each resistor, total resistance, and voltage-drop relationships. The lecture later discusses KVL and uses an electron-flow-style polarity explanation; for sign conventions, follow Alfred’s conventional-current/passive-sign convention and treat any conflicting polarity wording here as optional historical framing.';
    series.gap='Optional review only. Alfred remains authoritative for Week 2 sign conventions, node labeling, worked calculations, and mastery.';
  }
  const kk=bySource('aacKclKvl');
  if(kk){
    kk.watchFor='Use only the Kirchhoff’s Current Law and Kirchhoff’s Voltage Law sections. Skip the electron-flow-versus-current-flow introduction if it distracts you, and skip the later Ohm’s-law, electrical-power, and power-dissipation sections for this Week 2 review. Focus on: KCL = current balance at a node; KVL = voltage accounting around a closed loop.';
    kk.gap='Optional combined reinforcement. Alfred’s separate KCL and KVL pages remain the required first-pass explanation and use the course’s consistent sign convention.';
  }

  // Point the required KVL source at Khan's current canonical route.
  if(C.sources?.khanKvlW2){
    C.sources.khanKvlW2.url='https://www.khanacademy.org/science/ap-physics-2/x0e2f5a2c%3Aelectric-circuits/x0e2f5a2c%3Acurrent-resistivity-ohms-law/v/ee-kirchhoffs-voltage-law';
  }

  W.week2FinalAcceptanceRevision='2026-09-27-v16.3.70-study-guide-retrieval-and-aac-guidance';
  if(C.meta)C.meta.week2FinalAcceptanceRevision=W.week2FinalAcceptanceRevision;
  if(R)R.week2FinalAcceptanceRevision=W.week2FinalAcceptanceRevision;
})();
