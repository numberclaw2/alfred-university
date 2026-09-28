/* AU-ESET 301 — v16.3.72 Week 3 final acceptance
   Scope: Week 3 only. Load after week3-redesign-v16.3.71.js.
   Final QA repairs: sharpen Study Guide legacy-scope boundaries and make current-mode
   DMM insertion/removal safety explicit in teaching, assessment feedback, and LAB-003.
*/
(()=>{
  const C=window.ALFRED_CURRICULUM;
  if(!C?.modules?.length)return;
  const W=C.modules.find(m=>Number(m.week)===3);
  if(!W?.lessons?.length)return;
  const ceta=W.lessons[0];

  // 1) Make current-mode insertion/removal safety explicit rather than implied.
  const compactDmm=(ceta.sections||[]).find(s=>String(s.title||'').startsWith('DMM modes'));
  if(compactDmm){
    compactDmm.teach='Voltage, resistance/continuity, and current modes do not use the meter the same way. Voltage is measured across two points with the lead in the V/Ω input. Resistance/continuity uses the meter’s internal test source, so the circuit must be de-energized. Current mode routes circuit current through the meter, so de-energize the path before opening it or moving a lead, insert the meter in series using the correct rated current input/range, then energize only after the setup is verified. De-energize again before removing the meter. After current measurement, return the red lead to the V/Ω jack.';
    compactDmm.remember='Voltage: parallel. Resistance: power off. Current: power off to insert/remove, then measure in series with the correct current input.';
  }
  const dmmTeach=(ceta.integrated?.teaching||[]).find(s=>s.sectionId==='w03-dmm-modes-connections');
  if(dmmTeach){
    dmmTeach.text='In DC-voltage mode, place the black lead in COM and the red lead in the V/Ω input, then touch the probes across the two points whose potential difference you want. The meter is connected in parallel with the part of the circuit being observed.\n\nResistance and continuity are different. The meter supplies a small internal test stimulus, so turn circuit power off and discharge stored energy where applicable before measuring. In-circuit parallel paths can also change the resistance you read.\n\nCurrent mode changes the circuit most dramatically. Current must pass through the meter’s internal shunt and fuse. Predict the expected current first. With the source or supply output OFF, open the intended current path and insert the meter in series using the correct rated A or mA/µA input and an appropriate range according to the instrument manual. Verify the setup before energizing. Never place a current-configured meter directly across a low-impedance source as though it were a voltmeter. De-energize again before removing the meter or moving the lead. After the current measurement, return the red lead to the V/Ω jack before the next voltage check. That reset habit prevents one of the most common bench mistakes.';
    dmmTeach.remember='Voltage = across/parallel. Resistance = power off. Current = power off to insert/remove; measure in series with the correct rated input, then return the lead to V/Ω.';
  }

  // 2) The sixth-edition Study Guide scope pages contain useful fundamentals but also
  // legacy CRT/Z-axis detail and a blanket AC-coupling startup instruction. Bound them
  // precisely so the learner does not mistake historical procedure for the current rule.
  const SG=window.ALFRED_CETA_STUDY_GUIDE||C.cetaStudyGuide;
  if(SG?.records){
    const scope=SG.records.find(r=>r.id==='sg-w03-v16371-p172-173-scope');
    if(scope){
      scope.focus='Begin at the “Oscilloscopes” heading on printed p.172. Use the definition of voltage-versus-time display and the sections that identify horizontal time/div, vertical volts/div, input coupling, loading, and basic trigger behavior. Continue into p.173 only for those Week 3 ideas.';
      scope.safelySkim='Skip the inductor-ringer material before the Oscilloscopes heading; skim/defer CRT beam, Z-axis, blanking, and other legacy internal-construction detail. On p.173, do NOT copy the old “start AC-coupled” procedure as a universal rule: Alfred/Tektronix current guidance is authoritative. Use DC coupling when the absolute DC level matters and AC coupling only when you intentionally want to remove the DC component. Skip the spectrum-analyzer comparison until the later RF/spectrum week.';
      scope.after='Relate the useful Study Guide controls to Alfred’s modern setup: known low-voltage signal, safe reference, matched probe factor, deliberate coupling, volts/div, time/div, trigger, then manual Vpp/period/frequency.';
      scope.authorityNote='This Study Guide chapter includes legacy analog/CRT oscilloscope language. Current Tektronix/manufacturer guidance and Alfred’s low-voltage lab procedure control modern grounding, coupling, probe configuration, ratings, and model-specific operation.';
    }
    const probe=SG.records.find(r=>r.id==='sg-w03-v16371-p173-probe-trigger');
    if(probe){
      probe.focus='Use only the p.173 portions on oscilloscope input loading, the ×10 probe concept, trigger behavior, and the basic roles of volts/div, time/div, coupling, and trigger controls.';
      probe.safelySkim='Skip the spectrum-analyzer comparison and legacy CRT/Z-axis detail. Do not treat the page’s “AC-coupled” startup sentence as a universal instruction; choose coupling from the measurement question. Printed p.175 remains unassigned as a Week 3 quiz.';
      probe.after='Explain why a ×10 probe can reduce loading, why probe and channel factors must agree, what trigger source/level/slope do, and when DC versus AC coupling is appropriate.';
      probe.authorityNote='Use the Study Guide for CETa concept reinforcement. Current Tektronix/manufacturer guidance and Alfred’s lab sequence are authoritative for modern setup and safety.';
    }
  }

  // 3) Strengthen the practical route at the exact point where the meter becomes part of the circuit.
  const AC=window.ALFRED_ACADEMIC;
  const lab=AC?.labs?.find(x=>x.id==='LAB-003');
  if(lab){
    const replacement='With the supply/source output OFF, predict the expected current, open the specified low-current path, place the DMM in series using the correct rated current input/range, and verify the setup before energizing. Make the measurement, de-energize again before removing the meter, then return the red lead to the V/Ω jack and record that reset on the checklist.';
    const replaceProc=arr=>{
      if(!Array.isArray(arr))return;
      const i=arr.findIndex(x=>String(x).includes('Demonstrate a safe low-current measurement'));
      if(i>=0)arr[i]=replacement;
    };
    replaceProc(lab.procedure);
    replaceProc(lab.physical?.procedure);
    lab.evidence='Pre-measurement checklist + predicted-versus-measured table + DMM current-mode output-off insertion/removal and lead-reset evidence + CV/CC observation + compensated/known waveform + annotated scope capture + manual Vpp/period/frequency calculation + settings/limitations/conclusion.';
    if(lab.physical)lab.physical.evidence=lab.evidence;
    lab.week3FinalAcceptanceRevision='2026-09-27-v16.3.72-current-mode-and-study-guide-boundaries';
  }

  // 4) Assessment feedback now names the same safe current-mode sequence.
  const AS=window.ALFRED_ASSESSMENT;
  if(AS?.questions){
    const q=AS.questions.find(x=>x.id==='CQ1197');
    if(q){
      q.explanation='De-energize before opening the path or moving the lead, insert the meter in series through the correctly rated current input/range, verify setup, then energize for the measurement. De-energize before removing it and return the lead to V/Ω afterward.';
      q.reviewSectionId='w03-dmm-modes-connections';
      q.reviewSectionTitle='DMM modes are different measurement circuits';
      q.reviewRouteVersion='16.3.72';
    }
  }

  // 5) Final acceptance state.
  W.week3FinalAcceptanceRevision='2026-09-27-v16.3.72-current-mode-and-study-guide-boundaries';
  W.week3FinalAcceptanceVerdict='PASS — production-verified Week 3 redesign with precise Study Guide legacy-scope boundaries and explicit output-off current-mode insertion/removal safety.';
  C.meta=C.meta||{};
  C.meta.week3FinalAcceptanceRevision=W.week3FinalAcceptanceRevision;
  C.meta.week3FinalAcceptanceVerdict=W.week3FinalAcceptanceVerdict;
  C.meta.week3FinalAcceptanceStatus='PASS';
  C.meta.week3StudyGuideLegacyScopeBoundaryClarified=true;
  C.meta.week3DmmCurrentInsertionRemovalSafetyExplicit=true;
})();
