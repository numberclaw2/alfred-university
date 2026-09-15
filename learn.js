(() => {
  const C = window.ALFRED_CURRICULUM || {};
  const A = window.ALFRED_ACADEMIC || {};
  const W = window.ALFRED_WEEKS || [];
  const MODULES = C.modules || [];
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const KEY = 'alfred-u-progress-v2';
  const SYNC_KEY = 'alfred-u-sync-config-v1';
  const DEVICE = 'classroom-v16';
  const params = new URLSearchParams(location.search);
  const requestedWeek = Number(params.get('week'));
  let week = MODULES.some(m => m.week === requestedWeek) ? requestedWeek : (window.AlfredState?.currentWeek?.() || 1);
  if (!MODULES.some(m => m.week === week)) week = 1;
  let moduleData = MODULES.find(m => m.week === week);
  let stageIndex = 0;

  const STAGES = [
    {id:'orientation',label:'Start Here',short:'Orient',track:'CETa + Career'},
    {id:'ceta-lesson',label:'CETa Lesson',short:'CETa lesson',track:'CETa'},
    {id:'career-lesson',label:'Career Lesson',short:'Career lesson',track:'Career'},
    {id:'media',label:'Teaching Media',short:'Media',track:'CETa + Career'},
    {id:'practice',label:'Guided Practice',short:'Practice',track:'CETa + Career'},
    {id:'application',label:'Lab / Application',short:'Lab / application',track:'CETa + Career'},
    {id:'mastery',label:'Weekly Mastery',short:'Mastery',track:'CETa + Career'}
  ];

  // One compact mental model per week. These are instructional signposts—not
  // decoration—and remain understandable as text when styles are unavailable.
  const CONCEPT_MAPS = {
    1:{title:'The DC prediction chain',steps:['Voltage difference','Resistance in the path','Current: I = V/R','Power: P = VI'],caption:'Predict current and power before energizing; then compare the safe measurement with the prediction.'},
    2:{title:'From network law to fault location',steps:['Choose reference node','Apply KCL / KVL','Predict every node','Measure one node','Isolate the first mismatch'],caption:'A schematic becomes a set of testable voltage and current predictions.'},
    3:{title:'A defensible measurement',steps:['Name the quantity','Choose mode + connection','Set range + reference','Measure safely','Report value + uncertainty'],caption:'Instrument choice is part of the result; a number without setup and context is weak evidence.'},
    4:{title:'Time-domain reasoning',steps:['Excitation changes','C resists ΔV','L resists ΔI','Transient evolves','Steady state emerges'],caption:'Capacitors and inductors do not “delay everything”; each resists a specific kind of instantaneous change.'},
    5:{title:'The troubleshooting loop',steps:['State symptom','Predict known-good','Choose discriminating test','Compare evidence','Repair + verify'],caption:'A failed guess adds little. A test that separates hypotheses creates information.'},
    6:{title:'Frequency changes the network',steps:['Set frequency','Compute XL and XC','Combine as impedance','Predict phase / gain','Measure response'],caption:'Resistance may stay fixed while reactance changes with frequency, reshaping current, phase, and transfer.'},
    7:{title:'Control an inductive load',steps:['Logic command','Driver device','Coil stores energy','Load moves','Clamp turn-off energy'],caption:'The driver handles load current; the protection path handles stored magnetic energy at turn-off.'},
    8:{title:'A transistor used as a switch',steps:['Control input','Bias / gate drive','Device enters ON or OFF region','Load current changes','Protection contains transients'],caption:'Switch design checks drive, load current, dissipation, voltage stress, and the default state—not only pin names.'},
    9:{title:'Power-supply signal path',steps:['Input','Rectify / switch','Filter','Regulate','Protected output rail'],caption:'Troubleshoot block by block: the first incorrect input-to-output relationship narrows the fault.'},
    10:{title:'Signal-chain evidence',steps:['Source','Input condition','Gain / filter stage','Loaded output','Amplitude + frequency + clipping'],caption:'Gain is meaningful only with stated frequency, loading, reference points, and headroom.'},
    11:{title:'Digital behavior over time',steps:['Input levels','Boolean decision','Clock / event','Stored state','Output transition'],caption:'Combinational logic depends on present inputs; sequential logic also depends on stored state and timing.'},
    12:{title:'A traceable physical repair',steps:['ESD-safe setup','Inspect + plan','Solder / rework','Clean + inspect','Record change + verification'],caption:'A professional repair is both acceptable workmanship and a reproducible record of what changed.'},
    13:{title:'Evidence-driven root cause',steps:['Read signal flow','List competing causes','Pick highest-information node','Measure against expectation','Confirm cause after repair'],caption:'Do not replace the first plausible part. Use the diagram to choose evidence that rules causes in or out.'},
    14:{title:'How C becomes executable behavior',steps:['Source code','Compile','Link','Load / run','Observe + debug'],caption:'Errors belong to different stages; identifying the stage prevents random edits.'},
    15:{title:'Responsive embedded control',steps:['Input event','Capture state','Decide transition','Update outputs','Return without blocking'],caption:'A state machine makes time and behavior explicit while keeping the system responsive.'},
    16:{title:'Minimum MCU bring-up',steps:['Power + reset','Clock + pin config','Build + flash','Reach breakpoint','Toggle and verify GPIO'],caption:'Change one subsystem at a time so power, configuration, firmware, and debug faults stay separable.'},
    17:{title:'UART frame to useful record',steps:['Bits on TX/RX','Matching frame settings','Receive bytes','Parse message','Timestamp + validate'],caption:'Separate electrical signaling, framing, transport, parsing, and application meaning during diagnosis.'},
    18:{title:'Peripheral integration stack',steps:['Datasheet requirements','Voltage + pullups / chip select','Bus transaction','Register meaning','Known-value verification'],caption:'A bus trace proves traffic; a controlled stimulus and interpreted register prove useful function.'},
    19:{title:'End-to-end media path',steps:['Source','Connector / cable','Conversion or transmission','Receiver','Known-good output'],caption:'Inspect, continuity-test, and substitute along the signal path without claiming measurements a tool cannot make.'},
    20:{title:'Communication system chain',steps:['Information','Modulate / encode','Channel + antenna','Receive / demodulate','Recover + verify'],caption:'Each block changes representation; troubleshoot with a measurement appropriate to that block and its safety limits.'},
    21:{title:'Integrated CETa decision',steps:['Recognize domain','Recall governing relationship','Predict direction / magnitude','Select safe test','Reject tempting misconception'],caption:'Interleaved practice builds the ability to choose the right model before calculating.'},
    22:{title:'Requirement-to-verification chain',steps:['User need','Measurable requirement','Design choice','Test procedure','Pass / fail evidence'],caption:'If a requirement cannot be tested objectively, it is not yet ready to guide a project.'},
    23:{title:'Reproducible project baseline',steps:['Readiness gaps closed','Repository created','Tool versions recorded','Known-good build tagged','Recovery path proven'],caption:'A baseline lets you tell a new defect from an environment or configuration problem.'},
    24:{title:'Staged first power',steps:['Power off inspection','Resistance / continuity checks','Current limit set','One rail at a time','Record known-good baseline'],caption:'Stop at the first violated expectation; adding more subsystems only hides the earliest fault.'},
    25:{title:'One controlled vertical slice',steps:['Known stimulus','Sensor / interface','Driver transaction','Parsed value','Expected system response'],caption:'Prove one complete path before adding features, then retain the evidence as a regression test.'},
    26:{title:'Firmware with diagnostic boundaries',steps:['Hardware driver','Interface service','Application state','Diagnostic output','Recovery behavior'],caption:'Layer boundaries turn symptoms into smaller hypotheses and make faults easier to reproduce.'},
    27:{title:'Automated hardware-test loop',steps:['Configure DUT','Apply controlled input','Acquire data','Check tolerance','Save verdict + raw evidence'],caption:'Automation is trustworthy only when configuration, units, limits, failures, and raw data are preserved.'},
    28:{title:'Controlled fault experiment',steps:['Record known-good','Inject one fault','Predict signature','Measure + localize','Restore + regression-test'],caption:'One changed variable and a restoration check make fault evidence defensible.'},
    29:{title:'Turn skill into role proof',steps:['Claim one skill','Link artifact','Show procedure','Show measured result','Explain judgment + limitation'],caption:'Employers can evaluate evidence when every claim points to observable work and an honest boundary.'},
    30:{title:'Evidence-first interview answer',steps:['State situation','Name technical task','Explain actions + decisions','Quantify result','Link artifact / lesson'],caption:'The artifact supports the story; the explanation shows that you—not merely the tool—understand the work.'},
    31:{title:'Application feedback loop',steps:['Target role','Submit tailored evidence','Track response','Extract skill signal','Repair portfolio / skill gap'],caption:'Treat outcomes as data. Change one weak point deliberately instead of rewriting everything after every response.'}
  };

  function renderConceptMap(){
    const visual = CONCEPT_MAPS[week];
    if (!visual) return '';
    return `<figure class="concept-map" aria-labelledby="concept-map-title-${week}"><div class="concept-map-label">Visual mental model · ${trackBadge('CETa + Career','How the ideas connect')}</div><h3 id="concept-map-title-${week}">${esc(visual.title)}</h3><ol>${visual.steps.map((step,i) => `<li><span>${i + 1}</span><strong>${esc(step)}</strong></li>`).join('')}</ol><figcaption>${esc(visual.caption)}</figcaption></figure>`;
  }

  function loadProgress(){
    try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; }
    catch { return {}; }
  }
  function normalize(p){
    p.events = p.events || {}; p.weeks = p.weeks || {}; p.readiness = p.readiness || {};
    p.analytics = p.analytics || {}; p.recordTimes = p.recordTimes || {};
    return p;
  }
  function weekObject(value){
    return typeof value === 'string'
      ? {mastery:value,assessments:{},labs:{},learning:{}}
      : {...(value || {}),mastery:value?.mastery || '',assessments:value?.assessments || {},labs:value?.labs || {},learning:value?.learning || {}};
  }
  function learningState(){
    const p = normalize(loadProgress());
    const w = weekObject(p.weeks[week]);
    const l = w.learning || {};
    l.version = 1; l.completed = l.completed || {}; l.checks = l.checks || {}; l.responses = l.responses || {};
    return {p,w,l};
  }
  function saveLearning(mutator,{sync=true,notify=true}={}){
    const {p,w,l} = learningState();
    mutator(l,w,p);
    const now = Date.now();
    l.updatedAt = new Date(now).toISOString();
    w.learning = l; p.weeks[week] = w; p.recordTimes[`week:${week}`] = now; p.updatedAt = l.updatedAt;
    try { localStorage.setItem(KEY,JSON.stringify(p)); }
    catch { setMessage('Progress could not be saved. Free browser storage before continuing.','error'); return false; }
    if (sync) pushRecord(`week:${week}`,w,now);
    if (notify) window.dispatchEvent(new CustomEvent('alfred-progress-updated'));
    return true;
  }
  async function pushRecord(key,value,updatedAt){
    try {
      const config = JSON.parse(localStorage.getItem(SYNC_KEY) || '{}');
      if (!config.connected || !navigator.onLine) return;
      let api = String(config.apiUrl || '').trim().replace(/\/+$/,'').replace(/\/(?:health|sync)$/i,'');
      const studentKey = String(config.studentKey || '').trim().toUpperCase();
      if (!/^https:\/\//.test(api) || !/^AU-(?:[A-F0-9]{4}-){9}[A-F0-9]{4}$/.test(studentKey)) return;
      const deviceId = config.deviceId || DEVICE;
      await fetch(api + '/sync',{
        method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer ' + studentKey},
        body:JSON.stringify({protocol:2,deviceId,deviceName:config.deviceName || 'Alfred Classroom',records:[{key,value,updatedAt,deviceId}]})
      });
    } catch {}
  }
  function trackClass(track){ return track === 'CETa' ? 'track-ceta' : track === 'Career' ? 'track-career' : 'track-both'; }
  function trackBadge(track,detail=''){
    const description = track === 'CETa' ? 'Certification knowledge' : track === 'Career' ? 'Technician / embedded job skill' : 'Certification knowledge + job skill';
    return `<span class="lesson-track ${trackClass(track)}"><strong>${esc(track)}</strong><small>${esc(detail || description)}</small></span>`;
  }
  function stageComplete(stageId){
    const {w,l} = learningState();
    if (stageId === 'application') {
      const labId = moduleData.integration.labId;
      if (labId) {
        const route = w.labs?.[labId];
        const practical = !!(route?.virtual || route?.physical);
        const labScore = Number(w.assessments?.[`lab:${labId}`]?.bestPct || 0);
        return practical && labScore >= 80;
      }
    }
    if (stageId === 'mastery') return Number(w.assessments?.[`week:${week}`]?.bestPct || 0) >= moduleData.mastery.target && criticalChecksComplete(l);
    return !!l.completed?.[stageId];
  }
  function criticalChecksComplete(l=learningState().l){
    return moduleData.lessons.every((lessonItem,index) => !lessonItem.knowledgeCheck?.critical || l.checks?.[`lesson-${index}`]?.correct === true);
  }
  function completedCount(){ return STAGES.filter(s => stageComplete(s.id)).length; }
  function nextIncompleteIndex(){
    const idx = STAGES.findIndex(s => !stageComplete(s.id));
    return idx < 0 ? STAGES.length - 1 : idx;
  }
  function setMessage(message,type=''){
    const out = $('#classroom-stage-message');
    if (!out) return;
    out.textContent = message; out.className = type ? `stage-message ${type}` : 'stage-message';
  }
  function markComplete(id,value=true){
    saveLearning(l => { l.completed[id] = value; l.currentStage = STAGES[stageIndex]?.id; });
    updateChrome();
  }
  function goTo(index,focus=true){
    stageIndex = Math.max(0,Math.min(STAGES.length - 1,index));
    saveLearning(l => { l.currentStage = STAGES[stageIndex].id; });
    renderStage(); updateChrome();
    if (focus) $('#classroom-card')?.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function source(sourceId){ return C.sources?.[sourceId] || {title:sourceId,org:'',kind:'Reference',url:''}; }
  function currentAssessment(){ return learningState().w.assessments?.[`week:${week}`] || {}; }

  function renderOrientation(){
    const weekRecord = W.find(w => w.week === week) || {};
    return `<div class="classroom-stage-head">
      <div><span class="stage-count">Stage 1 of ${STAGES.length} · Required</span><h2>Start with the destination</h2><p>${esc(moduleData.promise)}</p></div>${trackBadge('CETa + Career','Equal purpose this week')}
    </div>
    <div class="orientation-grid">
      <section><h3>What this week teaches</h3><ul>${(weekRecord.outcomes || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
      <section><h3>Why both tracks are here</h3><div class="purpose-explain"><span class="track-ceta">CETa</span><p>The first lesson builds the theory, terminology, calculations, and decisions mapped to ETA competencies.</p></div><div class="purpose-explain"><span class="track-career">Career</span><p>The second lesson turns that knowledge into bench, programming, test, documentation, or interview performance.</p></div><div class="purpose-explain"><span class="track-both">CETa + Career</span><p>Practice and lab work require the knowledge and the job behavior together.</p></div></section>
    </div>
    <section class="standards-snapshot"><h3>Standards being taught</h3><div><strong>CETa</strong>${moduleData.standards.ceta.map(x => `<span>${esc(x)}</span>`).join('')}</div><div><strong>Career</strong>${moduleData.standards.career.map(x => `<span>${esc(x.replace(/^C/,''))}</span>`).join('')}</div><p>These are curriculum mappings, not claims about ETA’s unpublished exam weighting.</p></section>
    <section class="time-map"><h3>Planned learning time</h3><div><span><b>${moduleData.time.ceta}</b> min CETa lesson</span><span><b>${moduleData.time.career}</b> min career lesson</span><span><b>${moduleData.time.combined}</b> min combined practice/application</span></div><p>Combined work contributes half to each track, preserving equal program weight.</p></section>
    <button class="button green classroom-complete" data-complete="orientation" type="button">${stageComplete('orientation') ? '✓ Orientation complete' : 'I understand the week’s destination'}</button>`;
  }

  function renderLesson(index){
    const lessonItem = moduleData.lessons[index];
    const stageId = index === 0 ? 'ceta-lesson' : 'career-lesson';
    const saved = learningState().l.checks?.[`lesson-${index}`] || {};
    const checkItem = lessonItem.knowledgeCheck;
    return `<div class="classroom-stage-head">
      <div><span class="stage-count">Stage ${index + 2} of ${STAGES.length} · Required · about ${lessonItem.minutes} minutes</span><h2>${esc(lessonItem.title)}</h2><p>Alfred’s lesson is complete instruction. The resource stage adds other teachers and references afterward.</p></div>${trackBadge(lessonItem.track)}
    </div>
    <section class="lesson-objectives"><h3>By the end, you can</h3><ul>${lessonItem.objectives.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
    ${index === 0 ? renderConceptMap() : ''}
    <div class="teaching-sections">${lessonItem.sections.map((section,i) => `<section class="teaching-block${section.critical ? ' critical-teaching' : ''}"><span class="concept-number">${i + 1}</span><div><h3>${esc(section.title)}</h3><p>${esc(section.teach)}</p><aside><strong>Hold onto this</strong><p>${esc(section.remember)}</p></aside>${section.critical ? '<div class="critical-flag">Safety-critical: do not continue to related hands-on work until this rule is correct.</div>' : ''}</div></section>`).join('')}</div>
    <section class="worked-example"><div class="worked-label">Worked example · follow the reasoning</div><h3>${esc(lessonItem.worked.problem)}</h3><ol>${lessonItem.worked.steps.map(x => `<li>${esc(x)}</li>`).join('')}</ol><div class="worked-answer"><strong>Answer</strong><p>${esc(lessonItem.worked.answer)}</p></div><p><strong>Transfer:</strong> ${esc(lessonItem.worked.transfer)}</p></section>
    <section class="required-check${checkItem.critical ? ' critical-check' : ''}" data-lesson-check="${index}">
      <div class="required-check-head"><div><span>${checkItem.critical ? 'Safety-critical check · 100% required' : 'Required knowledge check · correct answer required'}</span><h3>${esc(checkItem.prompt)}</h3></div>${saved.correct ? '<b class="check-passed">✓ Passed</b>' : ''}</div>
      <div class="check-options">${checkItem.choices.map((choice,i) => `<label><input type="radio" name="lesson-check-${index}" value="${i}"${saved.correct ? ' disabled' : ''}><span>${String.fromCharCode(65+i)}. ${esc(choice)}</span></label>`).join('')}</div>
      <button class="button ${saved.correct ? 'outline-green' : 'green'} submit-lesson-check" data-check-index="${index}" type="button"${saved.correct ? ' disabled' : ''}>${saved.correct ? 'Correct · stage complete' : 'Check my answer'}</button>
      <div class="check-feedback ${saved.correct ? 'correct' : ''}" role="status">${saved.correct ? esc(checkItem.correct) : ''}</div>
    </section>
    ${saved.correct ? `<div class="stage-complete-confirmation">✓ ${esc(STAGES[index + 1].label)} complete. Continue when you are ready.</div>` : ''}`;
  }

  function renderMedia(){
    const items = moduleData.integration.media || [];
    const requiredCount = items.filter(x => /^Required/.test(x.role)).length;
    return `<div class="classroom-stage-head"><div><span class="stage-count">Stage 4 of ${STAGES.length} · Required media or accessible text path</span><h2>Learn it from another voice—then connect it</h2><p>The links add demonstrations, diagrams, and expert perspective. Alfred’s two lessons remain sufficient if a video is unavailable or text is the more accessible route.</p></div>${trackBadge('CETa + Career')}</div>
    <div class="media-policy"><strong>Required does not mean video-only.</strong><p>For each required item, either review the linked section or use the complete Alfred lesson above as its text alternative. Do not let a broken link or unavailable caption block the course.</p></div>
    <div class="teaching-media-list">${items.map((item,i) => {const s=source(item.source);return `<article><div class="media-card-top"><span>${esc(item.role)}</span><span>${esc(s.kind)}</span></div><h3>${esc(s.title)}</h3><p class="media-org">${esc(s.org)}</p><p><strong>Use it for:</strong> ${esc(item.use)}</p><p><strong>Watch/read for:</strong> ${esc(item.watchFor)}</p><p><strong>What Alfred still supplies:</strong> ${esc(item.gap)}</p><div>${s.url ? `<a class="button outline-green" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">Open source ↗</a>` : '<span class="private-source">Use your private course copy; it is not republished here.</span>'}</div></article>`}).join('')}</div>
    <section class="media-reflection"><label for="media-connection"><strong>One-sentence connection</strong><span>What became clearer, or which Alfred explanation will you use instead?</span></label><textarea id="media-connection" rows="3" maxlength="1200" placeholder="Example: The scope demonstration made trigger level clearer; I can now explain why it stabilizes a repeating waveform.">${esc(learningState().l.responses?.media || '')}</textarea><button class="button green" id="complete-media" type="button">${stageComplete('media') ? '✓ Media / text path complete' : `Confirm media or text path complete${requiredCount ? ` (${requiredCount} required source${requiredCount === 1 ? '' : 's'})` : ''}`}</button></section>`;
  }

  function renderPractice(){
    const response = learningState().l.responses?.practice || '';
    return `<div class="classroom-stage-head"><div><span class="stage-count">Stage 5 of ${STAGES.length} · Required</span><h2>Worked → guided → independent</h2><p>Now remove support gradually. Write a real attempt before revealing the checkpoint.</p></div>${trackBadge('CETa + Career')}</div>
    <section class="practice-sequence"><div><span>1</span><h3>Review the worked examples</h3><p>Return to either lesson only for the exact step you cannot explain. Say why each step is legal instead of copying it.</p></div><div><span>2</span><h3>Guided practice</h3><ol>${moduleData.integration.guided.map(x => `<li>${esc(x)}</li>`).join('')}</ol></div><div><span>3</span><h3>Independent transfer</h3><p>${esc(moduleData.integration.independent)}</p></div></section>
    <section class="practice-response"><label for="practice-response"><strong>Write your attempt or reasoning</strong><span>At least a few complete sentences, calculations, or a precise pointer to your saved artifact.</span></label><textarea id="practice-response" rows="8" maxlength="6000" placeholder="Show your reasoning, units, expected result, and evidence—not only the final answer.">${esc(response)}</textarea><div class="practice-response-actions"><button class="button outline-green" id="reveal-practice" type="button">Reveal oral checkpoint</button><span id="practice-save-status">Saved as you type.</span></div><div class="practice-checkpoint hidden" id="practice-checkpoint"><strong>Checkpoint</strong><p>${esc(moduleData.integration.practiceCheck)}</p><p>Answer this aloud or add it above. If the explanation is shaky, return to the smallest relevant section before marking complete.</p></div><button class="button green" id="complete-practice" type="button">${stageComplete('practice') ? '✓ Guided practice complete' : 'Mark practice complete'}</button></section>`;
  }

  function renderApplication(){
    const labId = moduleData.integration.labId;
    const lab = (A.labs || []).find(x => x.id === labId);
    const {w,l} = learningState();
    const route = labId ? w.labs?.[labId] || {} : {};
    const labScore = labId ? Number(w.assessments?.[`lab:${labId}`]?.bestPct || 0) : 0;
    const practicalDone = !!(route.virtual || route.physical);
    return `<div class="classroom-stage-head"><div><span class="stage-count">Stage 6 of ${STAGES.length} · Required</span><h2>${esc(moduleData.integration.title)}</h2><p>${esc(moduleData.integration.brief)}</p></div>${trackBadge('CETa + Career')}</div>
    <section class="application-brief"><h3>Do this in order</h3><ol>${moduleData.integration.guided.map(x => `<li>${esc(x)}</li>`).join('')}</ol></section>
    <section class="evidence-contract"><h3>Evidence contract</h3><p>${esc(moduleData.integration.evidence)}</p><p><strong>Independent transfer:</strong> ${esc(moduleData.integration.independent)}</p></section>
    ${lab ? `<section class="lab-gate-status"><div><span>Assigned lab</span><h3>${esc(lab.id)} · ${esc(lab.title)}</h3><p>${esc(lab.objective)}</p></div><div class="gate-status-list"><span class="${practicalDone ? 'done' : ''}">${practicalDone ? '✓' : '○'} Virtual or physical evidence</span><span class="${labScore >= 80 ? 'done' : ''}">${labScore >= 80 ? '✓' : '○'} Required lab check: ${labScore ? `${labScore}% best` : 'not attempted'}</span></div><div class="lab-gate-actions"><a class="button green" href="labs.html?week=${week}#${esc(lab.id)}">Open lab instructions</a><a class="button outline-green" href="quiz.html?type=lab&id=${encodeURIComponent(lab.id)}&required=1">${labScore ? 'Retake' : 'Take'} required lab check</a></div><p class="gate-note">Complete either the approved virtual or physical route—not both—then reach 80% on its knowledge check. Physical-skill claims still require physical evidence where the lab says so.</p></section>` : `<section class="project-application-gate"><h3>Project / application evidence</h3><p>This week’s work is completed in the project, assessment, or application path rather than a separate Lab Center record. Mark it only after the evidence contract above exists.</p><label><input id="project-evidence-confirm" type="checkbox"${l.completed?.application ? ' checked' : ''}><span>I completed the stated evidence and can locate it.</span></label><button class="button green" id="complete-application" type="button">${stageComplete('application') ? '✓ Application complete' : 'Save application completion'}</button></section>`}
    ${stageComplete('application') ? '<div class="stage-complete-confirmation">✓ Lab / application gate complete.</div>' : ''}`;
  }

  function renderMastery(){
    const a = currentAssessment();
    const best = Number(a.bestPct || 0);
    const passed = best >= moduleData.mastery.target && criticalChecksComplete();
    return `<div class="classroom-stage-head"><div><span class="stage-count">Stage 7 of ${STAGES.length} · Required</span><h2>Prove the week, then repair exact gaps</h2><p>The weekly mastery check is part of instruction. It checks this week and may retrieve material already taught in earlier weeks. Work closed-note first, review specific feedback, complete corrective work, and retake a new form where needed.</p></div>${trackBadge('CETa + Career')}</div>
    <section class="mastery-gate ${passed ? 'passed' : ''}"><div class="mastery-score"><span>Best weekly result</span><strong>${best ? `${best}%` : 'Not attempted'}</strong><small>Required target: ${moduleData.mastery.target}%</small></div><div><h3>${passed ? 'Weekly mastery demonstrated' : 'Mastery evidence still required'}</h3><ul><li class="${criticalChecksComplete() ? 'done' : ''}">${criticalChecksComplete() ? '✓' : '○'} All safety-critical lesson checks correct</li><li class="${best >= moduleData.mastery.target ? 'done' : ''}">${best >= moduleData.mastery.target ? '✓' : '○'} Weekly assessment at ${moduleData.mastery.target}% or higher</li></ul><div class="mastery-actions"><a class="button green" href="quiz.html?type=week&id=${week}&required=1">${best ? 'Open new form / retake' : 'Begin required weekly mastery'}</a><a class="button outline-green" href="standards.html">Review standards evidence</a></div></div></section>
    ${!passed ? `<section class="remediation-map"><h3>Targeted correction—not a full restart</h3><p>Use the result feedback to identify the exact standard and error mechanism. Common traps for this week:</p><ul>${moduleData.commonMistakes.map(x => `<li>${esc(x)}</li>`).join('')}</ul><ol><li>Return to the smallest lesson section that corrects the cause.</li><li>Redo its worked example with changed numbers or context.</li><li>Solve a fresh item and explain why the tempting alternative is wrong.</li><li>Retake after the correction; do not click through until the answer pattern is memorized.</li></ol></section>` : `<section class="week-complete-card"><div><span>Week ${String(week).padStart(2,'0')} complete</span><h3>You taught it back, applied it, and met the evidence gate.</h3><p>Use spaced review when Standards &amp; Retention brings it back. Completion is not a claim of certification or job qualification.</p></div><a class="button gold" href="learn.html?week=${Math.min(31,week + 1)}">${week < 31 ? `Open Week ${String(week + 1).padStart(2,'0')}` : 'Review the course record'}</a></section>`}`;
  }

  function renderStage(){
    const content = $('#classroom-content');
    if (!content || !moduleData) return;
    const id = STAGES[stageIndex].id;
    if (id === 'orientation') content.innerHTML = renderOrientation();
    else if (id === 'ceta-lesson') content.innerHTML = renderLesson(0);
    else if (id === 'career-lesson') content.innerHTML = renderLesson(1);
    else if (id === 'media') content.innerHTML = renderMedia();
    else if (id === 'practice') content.innerHTML = renderPractice();
    else if (id === 'application') content.innerHTML = renderApplication();
    else content.innerHTML = renderMastery();
    bindStage();
  }

  function bindStage(){
    $$('[data-complete]').forEach(button => button.addEventListener('click',() => {markComplete(button.dataset.complete);renderStage();setMessage('Saved. Continue when ready.','success');}));
    $$('.submit-lesson-check').forEach(button => button.addEventListener('click',() => {
      const index = Number(button.dataset.checkIndex);
      const lessonItem = moduleData.lessons[index];
      const selected = $(`input[name="lesson-check-${index}"]:checked`);
      const feedback = $('.check-feedback',button.closest('.required-check'));
      if (!selected) { feedback.textContent = 'Choose an answer first.'; feedback.className = 'check-feedback error'; return; }
      const chosen = Number(selected.value), correct = chosen === lessonItem.knowledgeCheck.answer;
      saveLearning(l => {
        const key = `lesson-${index}`; const prior = l.checks[key] || {attempts:0};
        l.checks[key] = {...prior,attempts:Number(prior.attempts || 0) + 1,lastChoice:chosen,correct:prior.correct || correct,updatedAt:new Date().toISOString()};
        if (correct) l.completed[index === 0 ? 'ceta-lesson' : 'career-lesson'] = true;
      });
      feedback.textContent = correct ? lessonItem.knowledgeCheck.correct : lessonItem.knowledgeCheck.retry;
      feedback.className = `check-feedback ${correct ? 'correct' : 'error'}`;
      if (correct) { renderStage(); setMessage('Correct. The lesson stage is saved as complete.','success'); }
      else setMessage('Not yet. Read the targeted correction, then try again.','error');
      updateChrome();
    }));
    const mediaText = $('#media-connection');
    mediaText?.addEventListener('input',() => saveLearning(l => { l.responses.media = mediaText.value; },{sync:false,notify:false}));
    $('#complete-media')?.addEventListener('click',() => {
      const value = mediaText?.value.trim() || '';
      if (value.length < 15) { setMessage('Write one brief connection before completing this stage.','error'); mediaText?.focus(); return; }
      markComplete('media'); renderStage(); setMessage('Media / accessible text path saved.','success');
    });
    const practiceText = $('#practice-response'); let practiceTimer;
    practiceText?.addEventListener('input',() => {
      clearTimeout(practiceTimer); $('#practice-save-status').textContent = 'Saving…';
      practiceTimer = setTimeout(() => {saveLearning(l => { l.responses.practice = practiceText.value; },{sync:false,notify:false});$('#practice-save-status').textContent='Saved.';},350);
    });
    $('#reveal-practice')?.addEventListener('click',() => $('#practice-checkpoint')?.classList.remove('hidden'));
    $('#complete-practice')?.addEventListener('click',() => {
      const value = practiceText?.value.trim() || '';
      if (value.length < 30) { setMessage('Show a real attempt or point precisely to your saved artifact before completing practice.','error'); practiceText?.focus(); return; }
      saveLearning(l => {l.responses.practice=value;l.completed.practice=true;});renderStage();updateChrome();setMessage('Guided and independent practice saved.','success');
    });
    $('#complete-application')?.addEventListener('click',() => {
      if (!$('#project-evidence-confirm')?.checked) {setMessage('Confirm that the evidence contract exists before completing this stage.','error');return;}
      markComplete('application');renderStage();setMessage('Application evidence completion saved.','success');
    });
  }

  function updateChrome(){
    const count = completedCount();
    $('#classroom-title').textContent = `Week ${String(week).padStart(2,'0')} · ${moduleData.title}`;
    $('#classroom-promise').textContent = moduleData.promise;
    $('#classroom-phase').textContent = moduleData.phase;
    $('#classroom-week-label').textContent = `Week ${String(week).padStart(2,'0')}`;
    $('#week-overview-link').href = `week.html?week=${week}`;
    $('#week-stage-progress').textContent = `${count} of ${STAGES.length} stages complete`;
    const best = Number(currentAssessment().bestPct || 0);
    $('#week-mastery-summary').textContent = best ? `Weekly mastery best: ${best}% · target ${moduleData.mastery.target}%` : `Weekly mastery required: ${moduleData.mastery.target}%`;
    const next = STAGES[nextIncompleteIndex()];
    $('#next-action-label').textContent = count === STAGES.length ? 'Week complete' : next.label;
    $('#classroom-progress-bar').style.width = `${Math.round(count / STAGES.length * 100)}%`;
    $('#classroom-stages').innerHTML = STAGES.map((stage,i) => `<button type="button" data-stage-index="${i}" class="${i === stageIndex ? 'active ' : ''}${stageComplete(stage.id) ? 'complete' : ''}" aria-current="${i === stageIndex ? 'step' : 'false'}"><span>${stageComplete(stage.id) ? '✓' : i + 1}</span><div><strong>${esc(stage.label)}</strong><small>${esc(stage.track)}</small></div></button>`).join('');
    $$('[data-stage-index]').forEach(button => button.addEventListener('click',() => goTo(Number(button.dataset.stageIndex))));
    $('#classroom-prev').disabled = stageIndex === 0;
    const currentDone = stageComplete(STAGES[stageIndex].id);
    $('#classroom-next').disabled = stageIndex === STAGES.length - 1 || !currentDone;
    $('#classroom-next').textContent = stageIndex === STAGES.length - 1 ? (currentDone ? 'Week complete' : 'Complete mastery to finish') : currentDone ? `Continue to ${STAGES[stageIndex + 1].short}` : 'Complete this stage to continue';
  }

  function loadWeek(nextWeek){
    week = nextWeek; moduleData = MODULES.find(m => m.week === week);
    const requestedStage = params.get('stage');
    const {l} = learningState();
    const savedIndex = STAGES.findIndex(s => s.id === (requestedStage || l.currentStage));
    stageIndex = savedIndex >= 0 ? savedIndex : nextIncompleteIndex();
    history.replaceState(null,'',`learn.html?week=${week}&stage=${STAGES[stageIndex].id}`);
    renderStage(); updateChrome(); window.scrollTo({top:0,behavior:'smooth'});
  }

  function init(){
    const select = $('#classroom-week');
    MODULES.forEach(m => select.insertAdjacentHTML('beforeend',`<option value="${m.week}">Week ${String(m.week).padStart(2,'0')} · ${esc(m.title)}</option>`));
    select.value = String(week);
    select.addEventListener('change',() => loadWeek(Number(select.value)));
    $('#classroom-prev').addEventListener('click',() => goTo(stageIndex - 1));
    $('#classroom-next').addEventListener('click',() => { if (stageComplete(STAGES[stageIndex].id)) goTo(stageIndex + 1); });
    const quiet = $('#classroom-quiet');
    const quietOn = document.body.classList.contains('quiet-mode'); quiet.setAttribute('aria-pressed',String(quietOn)); quiet.textContent = quietOn ? 'Quiet Mode On' : 'Quiet Mode';
    quiet.addEventListener('click',() => {const on=document.body.classList.toggle('quiet-mode');quiet.setAttribute('aria-pressed',String(on));quiet.textContent=on?'Quiet Mode On':'Quiet Mode';try{localStorage.setItem('alfred-u-quiet-mode',on?'1':'0')}catch{}});
    const requestedStage = params.get('stage');
    const saved = learningState().l.currentStage;
    const idx = STAGES.findIndex(s => s.id === (requestedStage || saved));
    stageIndex = idx >= 0 ? idx : nextIncompleteIndex();
    renderStage(); updateChrome();
  }

  window.addEventListener('storage',event => { if (event.key === KEY) {renderStage();updateChrome();} });
  // This page emits alfred-progress-updated after saving. Listening to the
  // same-tab event here would replace an active textarea after each keystroke.
  // Cross-tab changes still arrive through the native storage event above.
  init();
})();
