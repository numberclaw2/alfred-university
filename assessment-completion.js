/* AU-ESET 301 v16.3 — historical v16.1 assessment-ID compatibility.
   Reconstructs the 186 legacy v16.1 filler IDs so saved histories continue to
   resolve, but creates them RETIRED from the start. They are never current
   mastery evidence and never satisfy semantic assessment coverage. */
(() => {
  const D = window.ALFRED_ASSESSMENT;
  if (!D || !Array.isArray(D.questions)) return;
  const home = {'1':1,'2':2,'3':7,'4':2,'5':12,'6':13,'7':19,'8':3,'9':4,'10':9,'11':10,'12':18,'13':11,'15':14,'16':17,'17':19,'18':19,'19':20,'20':20,'21':28,C1:1,C2:13,C3:3,C4:12,C5:13,C6:14,C7:15,C8:16,C9:18,C10:27,C11:28,C12:22,C13:30};
  const active = q => q.questionClass === 'substantive' && q.masteryEvidence !== false && q.audit?.status === 'editorially-reviewed';
  const covered = new Set(D.questions.filter(active).flatMap(q => q.standards || []).map(id => String(id).replace(/^CETA:|^CAREER:/,'')));
  const methods = {
    '1':'Stop and de-energize when applicable, identify the hazard and consequence, apply the approved control, document the correction, verify the safe state, and escalate any task beyond training or authorization.',
    '2':'Define the quantity physically, name its unit and governing relationship, predict direction or magnitude, calculate with consistent units, then compare with ratings and a safe observation.',
    '3':'Identify symbol, construction, function, polarity or pinout, ratings, normal behavior, failure signature, and datasheet-constrained substitution before installing or energizing the part.',
    '4':'Redraw the actual topology, identify shared current or voltage correctly, apply KCL/KVL and equivalent-resistance reasoning, and verify nodes, branches, power, and units.',
    '5':'Select the controlled tool/process, manage heat, force and ESD, recognize acceptable versus defective workmanship, inspect and electrically verify, and claim physical skill only from physical evidence.',
    '6':'Choose the correct diagram type, trace power and signal flow through designators/nets/pins, predict boundary behavior, and use the drawing to select a discriminating test point.',
    '7':'Confirm media type, connector view/pinout, impedance or signal constraints, shield/reference and termination; use a valid test and do not infer high-frequency or optical integrity from continuity alone.',
    '8':'Name the quantity, predict the safe range, choose instrument, mode, jack, connection, range/probe/reference, account for loading/uncertainty, and preserve settings with the interpretation.',
    '9':'Write the relationship, define variables and units, convert prefixes, solve step by step, estimate order of magnitude, and reject a result that violates dimensions, ratings, or physical behavior.',
    '10':'Trace protection, conversion/rectification, filtering, regulation/feedback and load; verify the input and expected output of each block and stop at the first violated boundary.',
    '11':'Identify bias, topology, feedback, gain, frequency, loading and headroom; calculate under stated assumptions and check real device limits, saturation, clipping, stability and bandwidth.',
    '12':'Identify electrical levels, direction, reference, timing/handshake and conversion; prove raw signals and transaction state before trusting interpreted data.',
    '13':'Represent values as bits, derive truth or state behavior, include voltage thresholds and timing, and verify both static logic and transitions with defined inputs.',
    '15':'Trace instructions/data through CPU, registers, memory, buses, storage and peripherals; distinguish address, value, representation and hardware/software responsibility.',
    '16':'Identify the software/application layer, installation/configuration, port/storage/network/backup/security requirement, expected outcome, failure behavior and recovery evidence.',
    '17':'Trace source, interface, processing, amplification/conversion and output; identify signal format, level, bandwidth, display or transducer role, and a valid boundary test.',
    '18':'Explain the light-to-electric or electric-to-light mechanism, device role, direction, isolation or display behavior, ratings and a suitable observation without conflating different optical devices.',
    '19':'Relate carrier, modulation, wavelength, bandwidth, feedline, antenna, channel, receiver and spectrum, and keep all work within approved receive-only or low-energy limits.',
    '20':'Trace information through telecommunications media, signaling, switching/multiplexing and recovery, identifying each representation change and an appropriate boundary check.',
    '21':'Use a revision-controlled procedure with safety/setup, expected result, raw evidence, acceptance rule, deviation, corrective action, verification and technical handoff.',
    C1:'Use a written hazard log: stop, identify the condition and risk, record the correction, independently verify the safe state, obtain required authorization, then continue.',
    C2:'Trace schematic and datasheet design intent into expected nodes, ratings, tolerances, interface conditions and test points, separating guaranteed limits from typical examples.',
    C3:'Create a prediction-first measurement plan with quantity, instrument, connection, settings, reference, uncertainty, acceptable range and interpretation.',
    C4:'Define process, tool, material, acceptance and inspection evidence; physical soldering, rework, crimping, harness and probe skill require physical performance.',
    C5:'Preserve a baseline, state competing hypotheses, choose one high-information test, cite the evidence for root cause, correct one supported cause and regression-test.',
    C6:'Explain C types, data/control flow, scope/lifetime, functions, arrays/pointers, build stages, tests and debugger evidence without relying on copied code.',
    C7:'Connect masks, registers, memory, timing, state, volatile limits and error handling to observable microcontroller hardware behavior.',
    C8:'Prove power/reset and configuration through build, flash, SWD observation, GPIO behavior, recovery path and a tagged STM32 baseline.',
    C9:'Prove UART/I²C/SPI electrical conditions, raw transaction, parsing, controlled fault, diagnosis, correction and recovery retest.',
    C10:'Use a scripted hardware-test sequence with configuration, stimulus, acquisition, validation, units, limits, raw data, verdict, error handling and safe cleanup.',
    C11:'Write measurable requirements and run nominal, boundary, error and repeatability checks with traceable evidence and an honest limitation.',
    C12:'Make work reproducible with revision control, notes, diagrams, procedures, logs, reports, evidence links and change rationale.',
    C13:'Use truthful role-specific project evidence, defend personal technical reasoning, and preserve the legitimate hardware, stability, compensation and college-compatibility gate.'
  };
  const difficulty = category => ['1','4','8','9','10','11','12','13','C1','C3','C5','C7','C8','C9','C10','C11'].includes(category) ? 'Intermediate' : 'Foundation';
  const skill = category => ['2','4','9','10','11','13'].includes(category) ? 'Analysis' : ['1','5','8','C1','C3','C4','C5','C8','C9','C10','C11'].includes(category) ? 'Troubleshooting' : 'Application';
  const promptFrames = [
    (row, text) => `A learner is preparing evidence for ${row.code} — “${text}.” Which plan most directly demonstrates that requirement?`,
    (row, text) => `During a practical review, the learner must prove ${row.code} — “${text}.” Which response is defensible?`,
    (row, text) => `A technician-in-training claims competence in ${row.code} — “${text}.” Which evidence path supports the claim?`,
    (row, text) => `For the current-course check on ${row.code} — “${text},” which approach produces valid evidence rather than recognition or guesswork?`
  ];
  const hash = value => [...String(value)].reduce((sum, char) => (sum * 33 + char.charCodeAt(0)) >>> 0, 5381);
  const rotate = (items, amount) => items.slice(amount).concat(items.slice(0, amount));
  let next = Math.max(0,...D.questions.map(q=>Number(String(q.id||'').replace(/^CQ/,''))||0)) + 1;
  const generated = [];
  for (const row of [...D.cetaStandards,...D.careerStandards]) {
    if (covered.has(row.code)) continue;
    const method = methods[row.category];
    const id = `CQ${String(next++).padStart(4,'0')}`;
    const specific = row.code === 'C1.6'
      ? 'Stop the test, de-energize as appropriate, log the exact hazard and risk, record the corrective action, independently verify the safe condition, and only then continue under the required authorization.'
      : method;
    const rowText = String(row.text).replace(/[.?!]+$/,'');
    const correct = `${specific} Tie the record explicitly to ${row.code} and the stated requirement: ${rowText}.`;
    const distractors = [
      `Name the topic and repeat the wording of ${row.code}, but do not make a prediction, perform the required action, or preserve an observation.`,
      `Work backward from the desired result, change multiple variables until it appears, and save only the successful final state without the failed evidence or assumptions.`,
      `Submit a video, answer key, or another person’s explanation as proof while omitting the learner’s own reasoning, settings, raw result, and verification.`
    ];
    // Balance the keyed position across the generated set so the learner
    // cannot exploit a repeated answer-letter pattern.
    const choiceShift = generated.length % 4;
    const choices = rotate([correct,...distractors],choiceShift);
    const answer = choices.indexOf(correct);
    generated.push({
      id,track:row.track,standards:[row.id],
      prompt:promptFrames[hash(`${row.code}-prompt`) % promptFrames.length](row,rowText),
      choices,answer,
      explanation:`Choice ${String.fromCharCode(65 + answer)} is correct because it performs the action required by ${row.code} and preserves inspectable reasoning or evidence. ${specific} The other choices omit performance evidence, hide uncontrolled trial-and-error, or substitute somebody else’s explanation for the learner’s own demonstrated understanding.`,
      difficulty:difficulty(row.category),kind:'MCQ',skill:skill(row.category),questionClass:'retired-v161-semantic-filler',masteryEvidence:false,retired:true,evidenceWeight:0,retirementReason:'v16.3: generic v16.1 coverage-fill item preserved only for historical ID compatibility; never current mastery evidence.',
      sourceRef:`${row.id} · ${row.sourceChapter || row.categoryTitle}`,
      audit:{status:'retired-history',date:'2026-09-15',reviewer:'Historical compatibility record',note:'Legacy v16.1 generic coverage-fill item. Retained only so saved question IDs remain resolvable. It is excluded from graded selection, mastery evidence, and semantic coverage.',sources:[{title:row.track==='CETa'?'ETA Associate CET competency requirements':'Alfred career evidence framework',url:row.track==='CETa'?'https://www.etai.org/comps/CETa_comps.pdf':'https://www.onetonline.org/link/summary/17-3023.00',locator:row.code}]},
      minWeek:home[row.category] || 1,family:`v161-${row.category}-${row.code}`
    });
    covered.add(row.code);
  }
  D.questions.push(...generated);

  const appendMatching = definition => {
    definition.questionIds = definition.questionIds || [];
    const standards = new Set([...(definition.ceta||[]),...(definition.career||[])]);
    generated.forEach(q => {const code=q.standards[0].replace(/^CETA:|^CAREER:/,'');if(standards.has(code) && Number(definition.week||99)>=q.minWeek && !definition.questionIds.includes(q.id))definition.questionIds.push(q.id)});
  };
  [...D.lessonQuizzes,...D.labQuizzes,...D.weeklyTests,...D.majorAssessments].forEach(appendMatching);
  const current = D.questions.filter(active);
  const currentSet = new Set(current.flatMap(q=>q.standards||[]).map(id=>id.replace(/^CETA:|^CAREER:/,'')));
  D.majorAssessments.forEach(m => {
    if (m.id === 'ceta-mock') Object.assign(m,{requiredRuns:2,qualifyingTarget:85,readinessRule:'Two separate current full-length Alfred CETa practice runs at 85% or higher. This is an internal readiness rule, not ETA’s official passing standard or a guarantee.'});
  });
  D.meta = {...D.meta,version:'16.3',updated:'2026-09-15',questionCount:D.questions.length,cetaQuestionCount:D.questions.filter(q=>q.track==='CETa').length,careerQuestionCount:D.questions.filter(q=>q.track==='Career').length,gradedQuestionCount:current.length,completionAudit:{generatedHistoricalItems:generated.length,generatedCurrentItems:0,cetaRowsWithDirectReviewedBankQuestion:D.cetaStandards.filter(s=>currentSet.has(s.code)).length,careerRowsWithDirectReviewedBankQuestion:D.careerStandards.filter(s=>currentSet.has(s.code)).length,cetaRowsTotal:D.cetaStandards.length,careerRowsTotal:D.careerStandards.length,incorrectKnownKeys:0,policy:'The 186 legacy v16.1 filler IDs are reconstructed only for saved-history compatibility and are retired at creation. Current row-level assessment coverage comes from reviewed bank questions plus v16.3 subject-specific semantic/performance tasks.'},audit:{...(D.meta.audit||{}),date:'2026-09-15',status:'v16.3-historical-id-compatibility',structurallyScreened:D.questions.length,editoriallyReviewed:current.length,retiredV161GenericQuestions:generated.length,remainingGradedReview:0,note:'Legacy filler IDs remain resolvable but are never active mastery evidence. No official ETA questions or private booklet pages are republished.'}};
  (D.meta.coverage||[]).forEach(c => {
    const rows=D.cetaStandards.filter(s=>s.category===String(c.id));
    c.practiceItems=current.filter(q=>q.track==='CETa'&&(q.standards||[]).some(id=>rows.some(s=>s.id===id))).length;
    c.directlySampled=rows.filter(s=>currentSet.has(s.code)).length;
    c.notDirectlySampled=rows.filter(s=>!currentSet.has(s.code)).map(s=>s.code);
  });
  window.ALFRED_ASSESSMENT_COMPLETION = {version:'16.3',generated,retiredLegacyCount:generated.length,activeCount:current.length};
})();
