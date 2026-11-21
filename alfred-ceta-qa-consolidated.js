/* Alfred University — B15 cumulative B05–B14 academic integration (STAGED, NOT FOR UPLOAD)
   Source read-only baseline: main ace81fd9e42e35e391c48005647981301287ead7.
   Requires installed production academic overlays in original load order.
   Existing staged source's eight repeat-load failures repaired via early return.
   Single transaction for lesson paragraph appends; no assessment, storage or sync changes.
   PUBLISH ONLY AFTER all G00–G12 gates accepted and one final upload package built.
*/
(function () {
'use strict';
const aggregateKey = 'ALFRED_CETA_QA_CUMULATIVE_STATUS';
const stages = ['B05','B06','B07','B08','B09','B10','B11','B12','B13','B14'];
if (window[aggregateKey]?.ok === true) return;
const originalFlags = Object.fromEntries(stages.map(b => {
 const k = 'ALFRED_CETA_QA_'+b+'_STATUS';
 return [k, {present: Object.prototype.hasOwnProperty.call(window,k), value:window[k]}];
}));
let snapshots=[];
const restore=()=>{
 for(const {page,original} of snapshots){
   page.goldTeaching.paragraphs.length=original.length;
   original.forEach((p,i)=>{page.goldTeaching.paragraphs[i]=p});
 }
 for(const [k,p] of Object.entries(originalFlags)){
   if(p.present) window[k]=p.value; else delete window[k];
 }
};
try {
 const data=window.ALFRED_CETA_DATA;
 if(window.ALFRED_ACADEMIC_PATCH_STATUS?.ok!==true ||
    window.ALFRED_FINAL_ASSESSMENT_STATUS?.ok!==true ||
    window.ALFRED_CETA_CLOSURE_STATUS?.ok!==true ||
    window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok!==true)
   throw Error('Full existing academic production overlay chain must pass first');
 if(!data || !Array.isArray(data.course) || data.course.length!==30 ||
    data.course.some(m=>!Array.isArray(m.pages)) ||
    data.course.reduce((n,m)=>n+m.pages.length,0)!==373)
   throw Error('Unexpected full curriculum shape');
 for(const m of data.course) for(const page of m.pages){
   if(!Array.isArray(page.goldTeaching?.paragraphs)) throw Error('Unexpected page teaching structure: '+m.id+'/'+page.id);
   snapshots.push({page,original:page.goldTeaching.paragraphs.slice()});
 }
// BEGIN BATCH 05
/* Alfred University — independent academic QA B05 (staged, NOT for upload)
   AST Q08 / ETA 2025 §2.1 and §2.2: teach the electrostatic inverse-square relationship.
   Additive lesson-only amendment; must load AFTER the installed academic and instructional overlays.
   NO changes to assessed items, answers, mastery, navigation, persistence or Cloud Sync.
*/
(function () {
  'use strict';
  const statusKey = 'ALFRED_CETA_QA_B05_STATUS';
  try {
    const data = window.ALFRED_CETA_DATA;
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true) throw Error('Final instructional overlay must pass first');
    if (!data || !Array.isArray(data.course) || data.course.length !== 30) throw Error('Unexpected course source');
    if (window[statusKey]?.ok === true) return; // B15 verified idempotent replay
    const module = data.course.find(m => m.id === 'M02');
    const page = module?.pages.find(p => p.id === 'L02-0-03');
    if (!page || page.title !== 'Matter, atoms, and the origin of electric charge' || !Array.isArray(page.goldTeaching?.paragraphs)) {
      throw Error('Coulomb teaching target changed');
    }
    const sections = [
      [
        'Coulomb’s law: charge attraction and repulsion',
        'Two stationary, idealized point charges exert electric forces on one another. Like-sign charges repel and opposite-sign charges attract. In vacuum the magnitude is F = k |q1 q2| / r², where F is in newtons (N), each charge q is in coulombs (C), separation r is in meters (m), and k ≈ 8.99 × 10⁹ N·m²/C². This is an inverse-SQUARE relationship: when the separation doubles while the charges stay fixed, the magnitude becomes one-quarter—not one-half. Doubling one charge at a fixed separation doubles the magnitude. The direction acts along the line between the ideal point charges. In a material, permittivity changes the proportionality, and extended objects require a more general field model.'
      ],
      [
        'Worked calculation: distinguish force from distance',
        'Take q1 = +2.0 µC and q2 = −3.0 µC separated by r = 0.30 m in vacuum. Convert microcoulombs to coulombs: 2.0 × 10⁻⁶ C and 3.0 × 10⁻⁶ C. Their charge product magnitude is 6.0 × 10⁻¹² C². Compute F = (8.99 × 10⁹)(6.0 × 10⁻¹²)/(0.30²) ≈ 0.599 N, directed toward each other because the charges are opposite. At 0.60 m, F ≈ 0.150 N, a quarter as large. Check units: (N·m²/C²)(C²)/(m²) = N. Do not confuse electric force, electric field and electric current.'
      ],
      [
        'Independent transfer: the inverse-square test',
        'Without looking back, consider two fixed point charges separated by 1.0 m. (a) Their distance triples: the force magnitude becomes 1/9 of its original value. (b) The magnitude of ONE charge doubles at the original distance: the force doubles. (c) Both charge signs become equal: the interaction changes from attraction to repulsion, but the magnitude formula still uses the absolute charge product. State the principle before computing. A practice source that says only “inversely proportional to distance” is incomplete unless it specifies the square.'
      ]
    ];
    for (const [heading] of sections) {
      if (page.goldTeaching.paragraphs.some(pair => pair[0] === heading)) throw Error('Coulomb passage already exists');
    }
    page.goldTeaching.paragraphs.push(...sections.map(pair => pair.slice()));
    window[statusKey] = {ok: true, revisedPage: page.id, addedSections: sections.length, astQuestion: 8};
  } catch (e) {
    window[statusKey] = {ok:false, error:String(e?.message || e)};
    if (typeof console !== 'undefined') console.warn('[Alfred B05] Not applied:', String(e?.message || e));
  }
})();

// END BATCH 05

// BEGIN BATCH 06
/* Alfred University — independent academic QA B06 (STAGED, NOT FOR UPLOAD)
   AST Q11; 2025 ETA §8.12 / §8.12.1: two-input / dual-trace oscilloscope terminology.
   Load AFTER canonical academic/instructional scripts and staged B05 Coulomb amendment.
   Additive instruction only: no questions, answer keys, progress or sync mutations.
*/
(function () {
  'use strict';
  const statusKey = 'ALFRED_CETA_QA_B06_STATUS';
  try {
    const data = window.ALFRED_CETA_DATA;
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true) throw Error('Final instructional overlay must pass first');
    if (window.ALFRED_CETA_QA_B05_STATUS?.ok !== true) throw Error('B05 staged academic amendment must pass first');
    if (!data || !Array.isArray(data.course) || data.course.length !== 30) throw Error('Unexpected canonical curriculum');
    if (window[statusKey]?.ok === true) return; // B15 verified idempotent replay
    const module = data.course.find(m => m.id === 'M06');
    const page = module?.pages.find(p => p.id === 'L03-0-00');
    if (!page || page.title !== 'Meter display versus complete waveform' || !Array.isArray(page.goldTeaching?.paragraphs) ||
        !page.goldTeaching.paragraphs.some(pair => pair[0] === 'Understand the physical model')) {
      throw Error('Oscilloscope teaching target changed');
    }
    const additions = [
      [
        'Two-input oscilloscopes: why dual-trace matters',
        'An oscilloscope plots measured voltage versus time. A traditional dual-trace oscilloscope has two vertical signal inputs (commonly CH1 and CH2) and can display two separate waveform traces against the same horizontal time reference. That lets a technician compare signals such as an input and an output, their amplitude, time delay and phase. The examination term for a two-vertical-input scope that displays two traces is dual-trace. A dual-trace instrument is not necessarily a dual-BEAM oscilloscope: many instruments share one display beam or digital acquisition/display system while showing both channels. A modern four-channel oscilloscope can show four traces; always verify the specific instrument capabilities.'
      ],
      [
        'Worked comparison: two waveforms at one instant',
        'On an appropriately isolated, low-voltage training circuit, channel 1 shows a 1.0 V peak sine-wave input while channel 2 shows a 0.50 V peak sine-wave output at the same frequency. With probe scaling checked and a shared timebase, the magnitude ratio is 0.50/1.0 = 0.50 (approximately −6.02 dB voltage gain). Use horizontal time separation between corresponding peaks to infer delay or phase. CH1 and CH2 are independent vertical inputs; both traces use the same selected horizontal sweep/timebase in the simple dual-trace model. Confirm which channels share earth-referenced grounds before connecting any probe; channel isolation is NOT implied by having two inputs.'
      ],
      [
        'Independent check: traces, inputs, and safe connections',
        'A scope has two vertical input connectors labeled CH1 and CH2, with both waveforms displayed against a common horizontal time axis. What is the traditional instrument category? Answer: dual-trace oscilloscope. Why is it not automatically a dual-beam scope? Two displayed channels do not imply two separate electron beams. What must be checked before attaching two grounded probes? Instrument grounding/isolation, probe ratings, circuit reference potentials and the approved measurement procedure. A second channel must not be mistaken for galvanic isolation.'
      ]
    ];
    if (additions.some(([heading]) => page.goldTeaching.paragraphs.some(pair => pair[0] === heading))) {
      throw Error('Dual-trace explanation already exists');
    }
    page.goldTeaching.paragraphs.push(...additions.map(pair => pair.slice()));
    window[statusKey] = {ok: true, revisedPage: page.id, revisedModule: module.id, addedSections: additions.length, astQuestion: 11};
  } catch (e) {
    window[statusKey] = {ok:false,error:String(e?.message||e)};
    if (typeof console !== 'undefined') console.warn('[Alfred B06] Not applied:', String(e?.message||e));
  }
})();

// END BATCH 06

// BEGIN BATCH 07
/* Alfred University — independent academic QA B07 (STAGED, NOT FOR UPLOAD)
   AST Q24 (ETA 10.3): battery ampere-hour/runtime reasoning.
   AST Q30 (ETA 2.9, 4.3, 4.4): series/parallel ideal uncoupled inductor reduction.
   Load AFTER the four installed academic overlays and staged B05/B06 additions.
   Additive instruction ONLY: question IDs/keys, learner progress, sync untouched.
*/
(function () {
  'use strict';
  const statusKey='ALFRED_CETA_QA_B07_STATUS';
  try {
    const data=window.ALFRED_CETA_DATA;
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true ||
        window.ALFRED_CETA_QA_B05_STATUS?.ok !== true ||
        window.ALFRED_CETA_QA_B06_STATUS?.ok !== true) {
      throw Error('Expected installed and staged academic corrections are not ready');
    }
    if (!data || !Array.isArray(data.course) || data.course.length !== 30)
      throw Error('Unexpected canonical course structure');
    if (window[statusKey]?.ok === true) return; // B15 verified idempotent replay
    const patches=[
      {module:'M13',page:'L09-1-03',title:'Batteries, current limits and protection',
       requiredHeading:'ETA competency 10.3 · targeted transfer instruction',
       sections:[
        ['Battery capacity in ampere-hours is charge, not a runtime guarantee',
         'A rating in ampere-hours (Ah) describes a stated amount of deliverable charge under specified test conditions. One ampere-hour is 3600 coulombs, not a unit of energy. For an idealized constant-current discharge, charge capacity Q_Ah = I_A × t_h, so time in hours is t_h = Q_Ah / I_A. If a battery is rated 350 Ah and delivers a constant 7 A with all rated charge usable under those test conditions, estimated time is 350/7 = 50 h. This is a planning estimate, not a promise that any actual battery will run a device for 50 h. Battery energy in watt-hours requires voltage information, ideally integration of voltage and current over discharge.' ],
        ['Worked runtime example: capacity, current and assumptions',
         'A 350 Ah battery at a constant 7 A gives ideal t = (350 A·h)/(7 A) = 50 h because amperes cancel. Compare: an ideal 12 Ah source supplying 3 A has 12/3 = 4 h of charge-equivalent time, assuming the rated capacity applies at that discharge rate. Do not confuse 350 Ah with 350 A of continuously available load current, or treat a voltage rating as additional hours. Real runtime varies with chemistry, discharge rate, cutoff voltage, temperature, age, state of charge and cell protection; the appropriate manufacturer discharge curve can supersede the ideal arithmetic.' ],
        ['Independent battery-transfer check',
         'Without looking back: (a) For an ideal constant-current 24 Ah battery feeding 2 A, calculate 12 h. (b) A 60 Ah battery delivering 10 A ideally provides 6 h under the stated assumption. (c) Explain why a 350 Ah rating alone cannot tell how much energy in Wh is delivered or guarantee runtime at a very high discharge rate. State the battery nominal voltage and appropriate discharge-curve/temperature information you would still need. Never carry out a full battery-discharge experiment on an unidentified pack.' ]
       ]},
      {module:'M07',page:'L04-0-02',title:'Inductance stores magnetic-field energy',
       requiredHeading:'Understand the physical model',
       sections:[
        ['Series and parallel inductors: identify the connection first',
         'For ideal, linear inductors with negligible mutual magnetic coupling, the same current flows through each series inductor. Their voltages add, and v = L·di/dt yields L_series = L1 + L2 + … . For ideal uncoupled inductors in parallel, every branch sees the same voltage; using v = L·di/dt and adding branch currents gives 1/L_parallel = 1/L1 + 1/L2 + … . For just two inductors the shortcut is L_parallel = (L1 L2)/(L1 + L2). Parallel equivalent inductance must be smaller than either positive branch inductance; series equivalent inductance must be larger. Use henries throughout, and evaluate a series subgroup before calculating its parallel combination.' ],
        ['Worked inductor network: the supplied practice-test topology',
         'The supplied AST practice question 30 has a left branch with 3 H and 6 H inductors in series, giving L_left = 3 + 6 = 9 H. That branch is in parallel with an 8 H inductor. For ideal uncoupled inductors, 1/L_total = 1/9 + 1/8 = 17/72 H^(-1), so L_total = 72/17 H ≈ 4.2353 H, or 4.24 H. Add series values only where the same branch current flows; do not simply add all three components. The result is less than either 8 H or 9 H, a useful magnitude check. Proximity and mutual coupling could invalidate this simple uncoupled-inductor reduction.' ],
        ['Independent reduction and coupling check',
         'For an unfamiliar network, two uncoupled inductors of 2 H and 4 H are in series in one branch; an uncoupled 3 H inductor forms the other parallel branch. First reduce the series pair to 6 H. Then L_eq = 6×3/(6+3) = 2 H. Why does an adjacent common magnetic core matter? Magnetic coupling introduces mutual-inductance terms, so the simple independent-branch formulas may not apply. This is an ideal paper calculation, not a reason to connect energized inductors without appropriate test and stored-energy controls.' ]
       ]}
    ];
    // Complete all precondition checks BEFORE mutating any teaching page.
    const targets=patches.map(p=>{
      const m=data.course.find(x=>x.id===p.module);
      const page=m?.pages?.find(x=>x.id===p.page);
      if (!page || page.title!==p.title || !Array.isArray(page.goldTeaching?.paragraphs) ||
          !page.goldTeaching.paragraphs.some(x=>x[0]===p.requiredHeading))
        throw Error('Teaching target changed: '+p.module+'/'+p.page);
      for (const [h] of p.sections) {
        if (page.goldTeaching.paragraphs.some(x=>x[0]===h))
          throw Error('Target already has heading: '+h);
      }
      return {p,page};
    });
    for (const {p,page} of targets) page.goldTeaching.paragraphs.push(...p.sections.map(x=>x.slice()));
    window[statusKey]={ok:true,revisedPages:targets.map(({p})=>p.module+'/'+p.page),addedSections:6,astQuestions:[24,30]};
  } catch (e) {
    window[statusKey]={ok:false,error:String(e?.message||e)};
    if (typeof console !== 'undefined') console.warn('[Alfred B07] Not applied:',String(e?.message||e));
  }
})();

// END BATCH 07

// BEGIN BATCH 08
/* Alfred University — independent academic QA Batch 08 (STAGED, NOT FOR UPLOAD)
   AST Q36; ETA ©2025 3.2 and 4.3: series-capacitor equivalent capacitance.
   Place AFTER the four installed overlays and staged B05, B06 and B07 scripts.
   Adds three first-principles teaching sections; no change to questions or learner data.
*/
(function () {
  'use strict';
  const statusKey = 'ALFRED_CETA_QA_B08_STATUS';
  try {
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true ||
        window.ALFRED_CETA_QA_B05_STATUS?.ok !== true ||
        window.ALFRED_CETA_QA_B06_STATUS?.ok !== true ||
        window.ALFRED_CETA_QA_B07_STATUS?.ok !== true) {
      throw Error('Prerequisite production and staged academic corrections are not ready');
    }
    const data = window.ALFRED_CETA_DATA;
    if (!data || !Array.isArray(data.course) || data.course.length !== 30) {
      throw Error('Unexpected canonical curriculum');
    }
    if (window[statusKey]?.ok === true) return; // B15 verified idempotent replay
    const module = data.course.find(m => m.id === 'M07');
    const page = module?.pages?.find(p => p.id === 'L04-0-01');
    if (!page || page.title !== 'A capacitor stores separated charge and electric-field energy' ||
        !Array.isArray(page.goldTeaching?.paragraphs) ||
        !page.goldTeaching.paragraphs.some(p => p[0] === 'Understand the physical model' &&
          typeof p[1] === 'string' && p[1].includes('C = Q/V'))) {
      throw Error('Capacitor instruction target changed');
    }
    const additions = [
      [
        'Capacitors in series versus parallel: begin with charge and voltage',
        'Two or more ideal capacitors in series carry the same magnitude of charge Q when initially uncharged and connected in a single chain, while the total applied voltage equals the sum of capacitor voltage drops. Because V_i = Q/C_i, the equivalent capacitor satisfies V_total = Q(1/C1 + 1/C2 + ...), giving 1/C_series = 1/C1 + 1/C2 + ... . For two capacitors only, C_series = C1×C2/(C1+C2). The series equivalent is smaller than the smallest positive branch value. Capacitors in parallel share voltage while their charge contributions add, giving C_parallel = C1+C2+... . This reverses the familiar resistance-series/parallel arithmetic: first identify the actual connections, then select the right equation. These ideal formulas assume no relevant parasitic or mutual effects; voltage ratings and balance can constrain real series capacitor assemblies.'
      ],
      [
        'Worked three-capacitor reduction: reciprocal calculation with units',
        'Paper case: 0.010 µF, 0.250 µF and 0.050 µF capacitors are connected in one series path. Keep all three values in µF and calculate 1/C_eq = 1/0.010 + 1/0.250 + 1/0.050 = 100 + 4 + 20 = 124 per µF. Therefore C_eq = 1/124 µF = 0.0080645 µF, about 0.00806 µF or 8.06 nF. It is less than the smallest part (0.010 µF), as a series capacitance should be. The same values in parallel would total 0.310 µF; do not use that sum for a series drawing. Never change between µF, nF and pF without an explicit conversion.'
      ],
      [
        'Independent capacitor-topology transfer and practical limitation',
        'Without looking at the worked calculation, find the equivalent of two ideal 6 µF capacitors in series: 1/C_eq = 1/6+1/6 per µF, so C_eq = 3 µF. Add a third ideal 3 µF capacitor in series: C_eq = (3×3)/(3+3) = 1.5 µF. In a separate PARALLEL connection, 6 µF + 6 µF + 3 µF = 15 µF. For a series stack connected to a potentially hazardous voltage, ideal capacitance arithmetic does not prove safe voltage distribution: leakage, tolerances, balancing, ratings and residual stored charge must be addressed by a qualified designer. This is a paper-only calculation.'
      ]
    ];
    if (additions.some(([heading]) => page.goldTeaching.paragraphs.some(pair => pair[0] === heading))) {
      throw Error('Series-capacitance instruction already applied');
    }
    page.goldTeaching.paragraphs.push(...additions.map(pair => pair.slice()));
    window[statusKey] = {ok:true, revisedModule:'M07', revisedPage:'L04-0-01', addedSections:additions.length, astQuestion:36};
  } catch (error) {
    window[statusKey] = {ok:false, error:String(error?.message || error)};
    if (typeof console !== 'undefined') console.warn('[Alfred B08] Not applied:', String(error?.message || error));
  }
})();

// END BATCH 08

// BEGIN BATCH 09
/* Alfred University — independent academic QA Batch 09 (STAGED, NOT FOR UPLOAD)
   AST Q46; ETA ©2025 3.5.2 — diagnose NPN terminal-voltage bias with a common reference.
   Intended after installed overlays and staged B05–B08. Adds lesson-only instruction;
   no change to scoring, identifiers, learner records, architecture or cloud sync.
*/
(function () {
  'use strict';
  const key = 'ALFRED_CETA_QA_B09_STATUS';
  try {
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true ||
        !['B05','B06','B07','B08'].every(n => window['ALFRED_CETA_QA_' + n + '_STATUS']?.ok === true)) {
      throw Error('Prerequisite installed and staged academic corrections not ready');
    }
    const data = window.ALFRED_CETA_DATA;
    if (!data || !Array.isArray(data.course) || data.course.length !== 30) {
      throw Error('Unexpected canonical curriculum');
    }
    if (window[key]?.ok === true) return; // B15 verified idempotent replay
    const module = data.course.find(m => m.id === 'M12');
    const page = module?.pages?.find(p => p.id === 'L08-0-05');
    if (!page || page.title !== 'Transistor bias and the DC operating point' ||
        !Array.isArray(page.goldTeaching?.paragraphs) ||
        !page.goldTeaching.paragraphs.some(row => row[0] === 'Bias is a prediction of a DC operating point' &&
          typeof row[1] === 'string' && row[1].includes('forward-biased base-emitter junction'))) {
      throw Error('NPN DC-bias instructional target or fingerprint changed');
    }
    const additions = [
      [
        'NPN DC bias from three measured node voltages',
        'For a common-emitter silicon NPN in forward-active operation, measure collector (VC), base (VB), and emitter (VE) relative to the SAME named reference, then subtract node voltages: VBE = VB − VE; VCE = VC − VE; VCB = VC − VB. A representative forward-active ordering is VC > VB > VE, with VBE commonly about +0.6 to +0.8 V at ordinary currents and temperatures. The base-emitter voltage is NOT simply the displayed base-to-ground number, especially when the emitter is below ground. VCB > 0 is consistent with a reverse-biased collector-base junction in the simplified NPN model. Voltage ordering alone does not prove adequate current limiting, correct power dissipation, thermal safety or the actual operating region: inspect the circuit and datasheet.'
      ],
      [
        'Worked NPN bias diagnosis with a negative emitter reference',
        'Paper-only calculation: suppose VE = −1.0 V, VB = −0.3 V and VC = +10.0 V relative to circuit ground. Then VBE = (−0.3) − (−1.0) = +0.7 V, VCE = 10.0 − (−1.0) = +11.0 V and VCB = 10.0 − (−0.3) = +10.3 V. These readings are consistent with conventional forward-active junction polarity, although load and device ratings still need checking. Contrast the supplied AST practice item 46: its nominally keyed VE = −1 V, VB = +1 V, VC = +10 V yields VBE = +2.0 V, which is NOT a normal approximately 0.7 V silicon-junction bias condition. That choice matches the intended terminal polarity ordering only; none of the supplied options establishes an unambiguously proper practical bias. Do not copy the flawed single-key question as an unquestioned scoring item.'
      ],
      [
        'Independent three-terminal bias transfer and fault discrimination',
        'Solve without copying the prior numbers. Given VE = +1.5 V, VB = +2.2 V, VC = +8.0 V with a common reference, VBE = +0.7 V and VCE = +6.5 V; the simple forward-active polarity criterion is plausible. Now change VB to +1.5 V with other nodes unchanged: VBE = 0 V, so the base-emitter junction is not forward biased in the ordinary silicon model, and the NPN cannot be presumed on. Finally, suppose VE = −2.0 V, VB = 0 V and VC = +8.0 V. Even though VC > VB > VE, VBE = +2.0 V signals an implausible uncontrolled normal-junction assumption; investigate current limiting and measurement conditions. A healthy bias determination needs reference polarity, VBE, VCE, available currents, component ratings and device condition, not numerical ordering alone.'
      ]
    ];
    if (additions.some(([h]) => page.goldTeaching.paragraphs.some(p => p[0] === h))) {
      throw Error('NPN bias training already present');
    }
    page.goldTeaching.paragraphs.push(...additions.map(p => p.slice()));
    window[key] = {ok:true, revisedModule:'M12', revisedPage:'L08-0-05', addedSections:3, astQuestion:46};
  } catch (e) {
    window[key] = {ok:false, error:String(e?.message || e)};
    if (typeof console !== 'undefined') console.warn('[Alfred B09] Not applied:', String(e?.message || e));
  }
})();

// END BATCH 09

// BEGIN BATCH 10
/* Alfred University — independent academic QA Batch 10 (STAGED, NOT FOR UPLOAD)
   AST Q51; ETA ©2025 4.17, 4.10, 3.1.4, 6.3 — determine node potential in an
   UNLOADED Wheatstone bridge from two independent divider branches.
   Requires installed production corrections and staged B05–B09. Lesson-only.
*/
(function () {
  'use strict';
  const key = 'ALFRED_CETA_QA_B10_STATUS';
  try {
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true ||
        !['B05','B06','B07','B08','B09'].every(n => window['ALFRED_CETA_QA_' + n + '_STATUS']?.ok === true)) {
      throw Error('Required installed or staged academic correction not ready');
    }
    const data = window.ALFRED_CETA_DATA;
    if (!data || !Array.isArray(data.course) || data.course.length !== 30) {
      throw Error('Unexpected canonical curriculum');
    }
    if (window[key]?.ok === true) return; // B15 verified idempotent replay
    const module = data.course.find(m => m.id === 'M04');
    const page = module?.pages?.find(p => p.id === 'L02-0-02');
    if (!page || page.title !== 'Unloaded divider: calculating a predictable reference' ||
        !Array.isArray(page.goldTeaching?.paragraphs) ||
        !page.goldTeaching.paragraphs.some(row => row[0] === 'Build the underlying model' &&
          typeof row[1] === 'string' &&
          row[1].includes('the same current flows through both when the output is unloaded'))) {
      throw Error('Unloaded divider lesson or academic fingerprint changed');
    }
    const additions = [
      [
        'Wheatstone bridge: two unloaded dividers sharing a source',
        'A four-resistor Wheatstone bridge can be understood as two series voltage dividers in parallel across the SAME source. The left branch has upper resistor R1 and lower resistor R2 with midpoint A; the right has upper R3 and lower R4 with midpoint B. If no component connects A to B and both meter inputs have negligible loading, each branch can be solved separately: VA = Vbottom + (Vtop − Vbottom)×R2/(R1+R2); VB = Vbottom + (Vtop − Vbottom)×R4/(R3+R4). The voltage across a hypothetical bridge detector from A to B is VAB = VA − VB, not either node voltage alone. For finite detector input resistance or a real bridge resistor between A and B, the branches load one another and the two *unloaded* divider expressions may no longer hold. Never confuse a Wheatstone sensing bridge with a four-diode rectifier bridge.'
      ],
      [
        'Worked Wheatstone midpoint calculation and balance test',
        'Read a paper diagram with the bridge top at +10.0 V, bottom at ground (0 V), left upper resistor 10.0 kΩ, left lower 2.30 kΩ, right upper 15.0 kΩ and right lower 15.0 kΩ. With A and B not interconnected, left current = 10/(10,000+2,300) ≈ 0.813 mA. The grounded-lower-resistor drop, hence VA, is 0.813 mA×2300 Ω = 1.8699 V ≈ 1.87 V (AST Q51 printed choice D says 1.86 V, the closest choice). Right midpoint VB = 10×15/(15+15) = 5.00 V. Thus VAB = VA−VB ≈ −3.13 V; the bridge is NOT balanced. In the ideal unloaded model balance means VA=VB, equivalent to R1/R2=R3/R4 for positive resistances. The AST question asks voltage at A relative to ground, NOT VAB. Follow the nodes before choosing a formula.'
      ],
      [
        'Independent bridge transfer: node reference, load and fault',
        'On a NEW 12 V paper bridge, left upper R1=4.7 kΩ, left lower R2=3.3 kΩ, right upper R3=2.2 kΩ, right lower R4=2.2 kΩ, with bottom at 0 V and no A–B detector loading, first compute VA=12×3.3/(4.7+3.3)=4.95 V, VB=12×2.2/(2.2+2.2)=6.00 V and VAB=−1.05 V. If a voltmeter has appreciable resistance between A and B, this direct result need not remain valid: redraw the extra connection and analyze its loading. If R1 becomes an open circuit while A remains connected to ground through R2 and an ideal unloaded probe observes A, VA becomes 0 V. Explain the distinction between a ground-referenced node reading and a voltage BETWEEN two nodes, and use current conservation and circuit topology as independent checks. All examples are paper or approved isolated low-energy simulation cases.'
      ]
    ];
    if (additions.some(([h]) => page.goldTeaching.paragraphs.some(p => p[0] === h))) {
      throw Error('Wheatstone bridge teaching already present');
    }
    page.goldTeaching.paragraphs.push(...additions.map(p => p.slice()));
    window[key] = {ok:true, revisedModule:'M04', revisedPage:'L02-0-02', addedSections:3, astQuestion:51};
  } catch (e) {
    window[key] = {ok:false, error:String(e?.message || e)};
    if (typeof console !== 'undefined') console.warn('[Alfred B10] Not applied:', String(e?.message || e));
  }
})();

// END BATCH 10

// BEGIN BATCH 11
/* Alfred University — independent academic QA Batch 11 (STAGED, NOT FOR UPLOAD)
   AST 62 (mixed series/parallel RLC), 66–67 (dBm), 68 (Colpitts).
   ETA ©2025 2.11, 4.4, 4.5, 4.9, 9.6.
   Requires installed instructional overlay and staged B05–B10, lesson-only.
   Never deploy this standalone without the final consolidated integration review.
*/
(function () {
  'use strict';
  const key = 'ALFRED_CETA_QA_B11_STATUS';
  try {
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true ||
        !['B05','B06','B07','B08','B09','B10'].every(n => window['ALFRED_CETA_QA_' + n + '_STATUS']?.ok === true)) {
      throw Error('Required installed or staged academic correction not ready');
    }
    const data = window.ALFRED_CETA_DATA;
    if (!data || !Array.isArray(data.course) || data.course.length !== 30 ||
        data.course.some(m => !Array.isArray(m.pages))) {
      throw Error('Unexpected canonical curriculum');
    }
    if (window[key]?.ok === true) return; // B15 verified idempotent replay
    const specs = [
      {
        module:'M08', page:'L04-0-02', title:'From impedance to an equivalent circuit',
        head:'Understand the physical model', fingerprint:'parallel branches combine by reciprocals',
        additions:[
          ['Trace a mixed AC network before selecting the equation',
           'A resistor in series with an inductor-capacitor PARALLEL pair is not a three-component series RLC circuit. At sinusoidal frequency f, first convert each reactive branch to impedance ZL=j(2πfL), ZC=−j/[2πfC]. Combine the parallel branches by admittance YLC=1/ZL+1/ZC, then ZLC=1/YLC. Only after that combine the series resistor: Ztotal=R+ZLC. Since the capacitor and inductor share two nodes, their AC voltage magnitudes are equal; finding the voltage across their combined branch also finds voltage across the capacitor. The ordinary series formula √[R²+(XL−XC)²] cannot be applied to this different topology.'],
          ['Worked voltage across a parallel LC pair behind a resistor',
           'Paper-only problem corresponding to AST Q62: 50 V rms at 440 Hz supplies a 270 Ω resistor followed by a parallel 150 mH inductor and 15 µF capacitor. XL=2π×440×0.150≈414.69 Ω and XC=1/(2π×440×15×10⁻⁶)≈24.114 Ω. The branch admittance is (−j/414.69)+(j/24.114)=+j0.0390576 S, so ZLC≈−j25.603 Ω. Therefore Ztotal≈270−j25.603 Ω, |Ztotal|≈271.21 Ω and |I|≈50/271.21=0.18436 A. The capacitor has the same voltage as the parallel LC combination: |VC|≈0.18436×25.603≈4.720 V rms. The printed AST key 4.7 V is correct; its printed SERIES RLC explanation does not describe this topology.'],
          ['Independent mixed-series/parallel AC transfer check',
           'Try a different paper-only topology, without copying the AST numbers: a 20 V rms, 1000 Hz sine source supplies a 100 Ω resistor followed by an ideal 20 mH inductor in PARALLEL with a 2 µF capacitor. XL≈125.664 Ω and XC≈79.577 Ω. Their ideal parallel admittance is j(1/XC−1/XL)=+j0.0046086 S, equivalent to ZLC≈−j216.985 Ω. Total impedance is approximately 100−j216.985 Ω, with magnitude 238.919 Ω; the source current is about 83.71 mA. The voltage magnitude across either LC branch is |VLC|≈0.08371×216.985≈18.16 V. Explain why the branch voltage may be close to the input despite the series resistor, and how the answer differs from incorrectly treating all three components as series. Work on paper or an isolated low-energy simulator, not an unknown energized power circuit.' ]
        ]
      },
      {
        module:'M14', page:'L10-1-02', title:'Decibels and voltage gain',
        head:'Decibels describe a ratio, not an absolute signal level', fingerprint:'dBm is an absolute power referenced to 1 mW',
        additions:[
          ['Power dB ratios versus absolute dBm units',
           'A plain dB figure describes a ratio; a dBm figure describes an absolute power level relative to 1 milliwatt. For positive powers P2 and P1 in the same unit, level difference ΔdB=10 log10(P2/P1). If a power falls by 3 dB, P2/P1=10^(−3/10)≈0.5012: about 49.88% of initial power is lost and about 50.12% remains. By contrast dBm=10 log10[P/(1 mW)]; 0 dBm=1 mW, +10 dBm=10 mW, and −10 dBm=0.1 mW. A dBm label must never be interpreted as a dimensionless power ratio without naming its reference.'],
          ['Reverse a dBm reading into milliwatts',
           'Start with dBm=10 log10[P(mW)/1]. Divide both sides by 10 and raise 10 to that power: P(mW)=10^(dBm/10). For −3 dBm, P=10^(−0.3)≈0.5012 mW, matching AST Q66 (~0.5 mW). For +7 dBm, P=10^0.7≈5.012 mW. For P=2.00 mW, dBm=10 log10(2)=+3.0103 dBm. Do not interchange −3 dB (a change) with −3 dBm (an absolute power), even though both involve a ratio of about one-half in their respective correctly defined contexts.'],
          ['Use reference levels and inverse conversions without memorizing keys',
           'An unfamiliar transmitter test shows −13 dBm at a properly specified measurement point. Calculate P=10^(−1.3)≈0.05012 mW or 50.12 µW. If an amplifier increases POWER by 20 dB, the ratio is 10^(20/10)=100 and the new reading is +7 dBm (approximately 5.012 mW), assuming the levels refer to the same physical power quantity. If the input were 1 mW, a −3 dB attenuation would yield about 0.501 mW and a level of about −3 dBm; the two numeric labels happen to coincide in that special starting case. Verify the log base, mW reference and any specified measurement impedance.']
        ]
      },
      {
        module:'M10', page:'L04-0-02', title:'Inductive timing and resonant oscillators',
        head:'Understand the physical model', fingerprint:'Adding resistance damps the exchange',
        additions:[
          ['Colpitts oscillator: identify the actual feedback network',
           'A classic Colpitts LC oscillator has an inductor and two split capacitors arranged so the capacitive divider provides a fraction of the tank AC signal back to an active gain device. The two capacitors do not merely filter supply ripple: their junction and connection to the amplifier establish the oscillator feedback fraction and polarity. With the proper active-stage phase relationship, that feedback is regenerative (positive at the oscillation frequency) and can sustain oscillations against losses. Incorrect loop polarity, insufficient gain, overloading or unsuitable bias prevents steady oscillation. The sustaining device draws power from the supply; the resonator alone cannot continuously supply it.'],
          ['Estimate Colpitts frequency without confusing its split capacitors',
           'For the simplified ideal topology where C1 and C2 act in series across L and parasitic capacitances are negligible, Ceq=(C1×C2)/(C1+C2) and f0≈1/[2π√(L×Ceq)]. With L=10 µH, C1=200 pF and C2=200 pF, Ceq=100 pF; f0≈5.033 MHz. This is an approximate tank frequency, not an exact loaded oscillator specification. Transistor capacitances, stray capacitance, resonator Q, bias and feedback loading shift the measured frequency. Do not incorrectly add the split capacitances as though they were parallel across the inductor.'],
          ['Differentiate regenerative feedback from a damped LC ring',
           'In AST Q68, the split capacitors provide the feedback path required for regeneration when combined with the appropriately phased amplifier; the intended answer is regenerative feedback. Contrast a passive LC ring that loses amplitude with each cycle. In a new paper-only design, L=20 µH, C1=100 pF and C2=300 pF give Ceq=75 pF and f0≈4.11 MHz before stray effects. A technician first identifies which capacitor junction is the tap, then checks bias, loop gain and loading using safe equipment-specific procedures rather than assuming all LC oscillators use the Colpitts topology.']
        ]
      }
    ];
    const targets = specs.map(s => {
      const module = data.course.find(m => m.id === s.module);
      const page = module?.pages?.find(p => p.id === s.page);
      if (!page || page.title !== s.title || !Array.isArray(page.goldTeaching?.paragraphs) ||
          !page.goldTeaching.paragraphs.some(p => p[0] === s.head && typeof p[1] === 'string' && p[1].includes(s.fingerprint)) ||
          s.additions.some(([h]) => page.goldTeaching.paragraphs.some(p => p[0] === h))) {
        throw Error('Instructional target or fingerprint mismatch: '+s.module+'/'+s.page);
      }
      return page;
    });
    // All preconditions checked before any mutation: failure is fail-closed.
    targets.forEach((page,i) => page.goldTeaching.paragraphs.push(...specs[i].additions.map(p => p.slice())));
    window[key]={ok:true, revisedPages:targets.length, addedSections:9,
      astQuestions:[62,66,67,68], targets:specs.map(s => s.module+'/'+s.page)};
  } catch (e) {
    window[key]={ok:false, error:String(e?.message || e)};
    if (typeof console !== 'undefined') console.warn('[Alfred B11] Not applied:',String(e?.message || e));
  }
})();

// END BATCH 11

// BEGIN BATCH 12
/* Alfred University — independent academic QA Batch 12 (STAGED, NOT FOR UPLOAD)
   AST 72 (parasitic damping), 73 (Class C); Q77 existing installed teaching sufficient.
   ETA ©2025 4.5, 4.8, 11.3; inherits B05–B11 staged fixes.
   Lesson-only guarded additive patch. DO NOT upload alone or claim integration.
*/
(function () {
  'use strict';
  const key = 'ALFRED_CETA_QA_B12_STATUS';
  try {
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true ||
        !['B05','B06','B07','B08','B09','B10','B11'].every(n =>
          window['ALFRED_CETA_QA_' + n + '_STATUS']?.ok === true)) {
      throw Error('Required installed or previously staged correction not ready');
    }
    const data = window.ALFRED_CETA_DATA;
    if (!data || !Array.isArray(data.course) || data.course.length !== 30 ||
        data.course.some(m => !Array.isArray(m.pages))) {
      throw Error('Unexpected canonical curriculum');
    }
    if (window[key]?.ok === true) return; // B15 verified idempotent replay
    const specs = [
      {
        module:'M09', page:'L06-0-02', title:'Resonant coils and practical magnetic coupling',
        head:'Understand the physical model',
        fingerprint:'Transformer leakage inductance and parasitic capacitance can create unwanted ringing',
        additions:[
          ['Parasitic oscillation, ringing and physical damping',
           'An unintended resonant loop can be formed by transformer leakage inductance, winding capacitance, wiring inductance, device capacitance and unintended feedback. After a switching edge it may ring even though the wanted signal is steady. A properly engineered resistive load or damping (sometimes called a swamping resistor) connected across the relevant resonant transformer winding or circuit section can dissipate oscillation energy, reduce effective parallel impedance and lower Q. This can suppress some unwanted oscillations. A resistor does not eliminate the underlying parasitic L and C; its role is to increase loss at the unwanted resonance. The term parasitic oscillation also describes sustained unwanted feedback in an active circuit, which requires investigating loop gain and phase rather than assuming all oscillations are transformer ringing.'],
          ['Worked diagnostic: damping is a tradeoff, not a universal repair',
           'Suppose a simplified parallel resonator has an effective 10 kΩ loss resistance. An engineering-approved 10 kΩ shunt across that same network produces 10 kΩ || 10 kΩ = 5 kΩ. Other elements unchanged, the ideal parallel-RLC relation Q≈R√(C/L) predicts half the Q. The unwanted peak may become lower and broader, but the shunt also consumes signal power, can change desired gain and selectivity, and must satisfy voltage, temperature, power and safety ratings. This illustrative circuit is a paper calculation, not a recommendation to modify unknown energized equipment or arbitrarily bridge a power transformer.'],
          ['Transfer: identify when a damping resistor is justified',
           'A switch-mode board shows a repeatable high-frequency ring after one transistor turns off. Before proposing a resistor, compare switching edges and ringing frequency, inspect the approved circuit and manufacturer guidance, identify the suspected resonant winding or snubber node, and check whether the observed ring is a normal bounded transient or a harmful oscillation. Predict how a correctly rated damping network would alter peak amplitude, decay time, heat and useful signal response. Contrast a sustained parasitic feedback oscillation: lowering transformer Q may help one feedback path but is not a universal cure. AST question 72 identifies a swamping resistor across a transformer as ONE possible method, not a rule for every transformer or every parasitic oscillation.']
        ]
      },
      {
        module:'M14', page:'L10-0-07', title:'Amplifier classes and efficiency tradeoffs',
        head:'The physical model and meaning', fingerprint:'Class A conducts across the full signal cycle',
        additions:[
          ['Class C versus A, B and AB: measure conduction angle',
           'Amplifier classes A, B, AB and C describe the active device conduction interval in each input cycle, not merely how the final output looks. In the ideal textbook model, Class A current conducts throughout 360°, Class B about 180°, Class AB between 180° and 360°, and Class C for LESS THAN 180°. A Class C transistor is intentionally biased below conduction for most of the input cycle and supplies brief collector-current pulses. Those pulses can transfer energy to a suitable tuned RF load, where the resonant network supports an approximately sinusoidal RF output. Without the tuned output network, a Class C device is not a general linear audio amplifier.'],
          ['Worked cycle fractions and output-network inference',
           'At a frequency of 1 MHz, one cycle lasts 1 µs. If an idealized Class C collector conducts for 120° of each cycle, the conduction window is (120/360)×1 µs=0.333 µs. It is below the 0.500 µs Class B half-cycle interval. The collector pulse stream is NOT itself a full sine wave; the tuned load stores and returns energy between pulses. The class alone does not fix power efficiency, transistor bias values or output spectral purity: these depend on device and network conditions.'],
          ['Transfer: recognize the conduction interval rather than a memorized label',
           'A technician compares stage P, whose output transistor conducts 330° of a cycle, with stage Q, which conducts 100°. Under the conventional class definitions, P is Class AB while Q is Class C. If stage Q must produce a narrowband RF output, determine what resonant or filtering network follows its collector and why. For AST question 73, the defining evidence is that collector current flows for less than half of the input cycle; “approximately 180°” describes Class B, not Class C.']
        ]
      },
    ];
    const targets = specs.map(s => {
      const module = data.course.find(m => m.id === s.module);
      const page = module?.pages?.find(p => p.id === s.page);
      if (!page || page.title !== s.title || !Array.isArray(page.goldTeaching?.paragraphs) ||
          !page.goldTeaching.paragraphs.some(p => p[0] === s.head &&
              typeof p[1] === 'string' && p[1].includes(s.fingerprint)) ||
          s.additions.some(([h]) => page.goldTeaching.paragraphs.some(p => p[0] === h))) {
        throw Error('Instructional target or fingerprint mismatch: '+s.module+'/'+s.page);
      }
      return page;
    });
    // All target preconditions verified before any mutation; unexpected sources fail closed.
    targets.forEach((page,i) => page.goldTeaching.paragraphs.push(...specs[i].additions.map(p=>p.slice())));
    window[key]={ok:true,revisedPages:targets.length,addedSections:6,
      astQuestions:[72,73],targets:specs.map(s=>s.module+'/'+s.page)};
  } catch (e) {
    window[key]={ok:false,error:String(e?.message||e)};
    if (typeof console!=='undefined' && typeof console.warn==='function') console.warn('B12 staged correction declined:',e);
  }
})();

// END BATCH 12

// BEGIN BATCH 13
/* Alfred University — independent academic QA Batch 13 (STAGED; NOT FOR UPLOAD)
   AST Q82: historical 10BASE2 50-ohm coax; AST Q89: ESD vinyl-envelope humidity table.
   2025 ETA CETa 7.3, 7.6, 1.5. Additive, precondition-checked instructional correction.
   MUST be integrated only after current installed instructional overlay and B05-B12 stages.
   No quiz keys, IDs, learner data, sync, layout, or other site functionality modified.
*/
(function () {
  'use strict';
  const key = 'ALFRED_CETA_QA_B13_STATUS';
  try {
    if (window[key]?.ok === true) return; // True idempotence on the same runtime.
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true ||
        !['B05','B06','B07','B08','B09','B10','B11','B12'].every(n =>
          window['ALFRED_CETA_QA_' + n + '_STATUS']?.ok === true)) {
      throw Error('Missing installed instructional overlay or preceding cumulative QA stage');
    }
    const data = window.ALFRED_CETA_DATA;
    if (!data || !Array.isArray(data.course) || data.course.length !== 30 ||
        data.course.some(m => !Array.isArray(m.pages))) {
      throw Error('Unexpected curriculum structure');
    }
    const specs = [
      {
        module: 'M26', page: 'L20-0-04',
        title: 'Coaxial feedlines and their characteristic impedance',
        head: 'Understand the underlying model',
        fingerprint: 'Its characteristic impedance Z0 describes the ratio of traveling-wave voltage to current',
        additions: [
          ['The two familiar coaxial impedances are not interchangeable',
           'Historical 10BASE2 (also called thin Ethernet) uses nominal 50-ohm RG-58-type coax and 50-ohm termination at both ends of its shared bus segment. 10BASE5 was another 50-ohm coax-based Ethernet system, whereas many cable-TV video distribution systems use nominal 75-ohm coax. These are characteristic impedances for traveling signals, not end-to-end DC resistance. They come from the specific cable/network standard; the word Ethernet alone does NOT imply every Ethernet medium uses 50-ohm coax. The supplied AST question 82 contrasts 75-ohm cable TV with 10BASE2 and keys 50 ohms; the Sixth Edition guide does not independently supply that historical 10BASE2 designation in the reviewed text.'],
          ['Worked impedance-mismatch decision with units',
           'Suppose a nominal 50-ohm 10BASE2 line is incorrectly terminated by a purely resistive 75-ohm load. Under an ideal lossless line model the load reflection coefficient is Gamma=(ZL-Z0)/(ZL+Z0)=(75-50)/(75+50)=0.20, so the reflected voltage amplitude is 20% of the incident voltage. The reflected POWER fraction is |Gamma| squared = 0.04, or 4%. In contrast, a correct 50-ohm termination produces Gamma=0. A continuity meter may still report continuity with a wrong termination; it does not establish a matched transmission line. Real systems also have connectors, propagation loss and timing specifications.'],
          ['Independent transfer: choose termination based on the standard',
           'A technician finds two visually similar coaxial cables: one labeled legacy 10BASE2 RG-58 and one labeled 75-ohm television distribution. Identify which should have 50-ohm endpoint termination; explain why inserting the television cable in a matched 10BASE2 bus may cause reflections even though the center conductor remains continuous. Use a cable rating, datasheet or network specification to select components; do not generalize from connector shape or a simple DC resistance reading. IEEE 802.3 and Cisco cable guidance establish the 10BASE2 nominal 50-ohm medium.']
        ]
      },
      {
        module: 'M01', page: 'L01-1-03',
        title: 'ESD: protecting CMOS without creating a shock hazard',
        head: 'Why devices are vulnerable',
        fingerprint: 'Insulating materials can accumulate charge through contact and separation',
        additions: [
          ['Humidity and triboelectric charging: learn the risk, not a fixed voltage rule',
           'Opening and closing ordinary vinyl envelopes can transfer charge by contact and separation. In dry air there is often less surface moisture to help dissipate charge, so electrostatic potentials can become very high. Voltage alone is not a complete measure of discharge energy or device damage risk: capacitance, current path, discharge waveform and device susceptibility also matter. Approved ESD packaging, dissipative surfaces, grounding, training and monitoring are needed; humidity is not a substitute for an ESD-protected-area program, and an ESD wrist strap is never shock PPE for dangerous energized circuits.'],
          ['AST reference value: interpret the published ESD table as an example',
           'The supplied AST practice question 89 asks for the table value from opening/closing VINYL ENVELOPES FOR WORK INSTRUCTIONS at 10-20% relative humidity; its answer is approximately 7,000 V. A NASA EEE Parts ESD compendium (April 2019, page 19, Table 2, citing MIL-HDBK-263B) reproduces 7,000 V at 10-20% RH and 600 V at 65-90% RH for that illustrative activity. The same table includes DIFFERENT values for walking across carpet and handling poly bags. These are typical literature examples, not exact, guaranteed voltages or safe thresholds for every vinyl envelope, person, weather condition or test setup.'],
          ['Transfer: separate ESD magnitude, controls, and uncertainty',
           'An ungrounded worker handles a conventional plastic work-instruction envelope in a dry room. Explain why contact-and-separation charging threatens exposed CMOS, how the example-table 7,000 V differs from a measured reading, and why a circuit can still be harmed by a much smaller unseen discharge. Compare the table illustration of 7,000 V in dry air with 600 V at high humidity: the higher humidity condition suggests reduced typical charging in this example, but never proves protection is adequate. Select approved dissipative packaging and an authorized ESD bench rather than attempting to reproduce high-voltage static experiments.']
        ]
      }
    ];
    // Validate ALL pages and target teaching fingerprints before mutating ANY page.
    const targets = specs.map(s => {
      const module = data.course.find(m => m.id === s.module);
      const page = module?.pages?.find(p => p.id === s.page);
      if (!page || page.title !== s.title || !Array.isArray(page.goldTeaching?.paragraphs) ||
          !page.goldTeaching.paragraphs.some(p => p[0] === s.head &&
            typeof p[1] === 'string' && p[1].includes(s.fingerprint)) ||
          s.additions.some(([h]) => page.goldTeaching.paragraphs.some(p => p[0] === h))) {
        throw Error('Source fingerprint, page ID, or target heading mismatch: ' + s.module + '/' + s.page);
      }
      return page;
    });
    targets.forEach((page, i) => page.goldTeaching.paragraphs.push(
      ...specs[i].additions.map(a => a.slice())
    ));
    window[key] = {ok:true, revisedPages:2, addedSections:6,
      astQuestions:[82,89], targets:specs.map(s => s.module + '/' + s.page)};
  } catch (e) {
    window[key] = {ok:false,error:String(e?.message || e)};
    if (typeof console !== 'undefined' && typeof console.warn === 'function')
      console.warn('B13 staged academic correction declined:', e);
  }
})();

// END BATCH 13

// BEGIN BATCH 14
/* Alfred University independent academic QA Batch 14 (STAGED - NOT FOR UPLOAD).
   AST 91,92,97,98,99, ETA 2025 5.11,20.4,19.2,19.3,19.7,19.10.
   Additive lesson paragraphs only, validate every target before mutation.
   Final implementation must be source-tested against complete post-overlay curriculum. */
(function(){
  'use strict';
  const key = 'ALFRED_CETA_QA_B14_STATUS';
  try {
    if (window[key]?.ok === true) return;
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true ||
       !['B05','B06','B07','B08','B09','B10','B11','B12','B13'].every(n=>window['ALFRED_CETA_QA_'+n+'_STATUS']?.ok===true))
       throw Error('Previous academic correction stages missing');
    const data=window.ALFRED_CETA_DATA;
    if(!data || !Array.isArray(data.course) || data.course.length!==30 || data.course.some(m=>!Array.isArray(m.pages)))
      throw Error('Unexpected production course structure');
    const specs = [{"module":"M15","page":"L12-0-08","title":"Desoldering wick and suction","head":"The physical model and meaning","fingerprint":"Fluxed copper braid draws molten solder by capillarity","questions":[91],"additions":[["Select a desoldering method by joint and rework constraints","For a plated through-hole joint, a temperature-controlled continuous-vacuum desoldering station can heat and draw molten solder from the hole in one controlled operation. A hand-operated suction pump can also clear through-hole solder; fluxed copper braid is effective for surface pads, small deposits and final cleanup. In the supplied AST question 91, motorized vacuum extraction is the intended BEST option among the listed methods for common through-hole component removal, but the question omits package, pad geometry, thermal mass and approved process, so no method is universally preferred. Actual process selection depends on board construction, component type, operator qualifications, local rework procedure and inspection requirements."],["Worked rework selection: solder-filled hole versus surface pad","A failed connector pin is still bonded within a plated through-hole barrel. Compare options: braid can remove accessible solder by capillary action; a spring-loaded pump draws molten solder with a brief suction pulse; a maintained temperature-controlled vacuum tool may efficiently evacuate solder from the barrel while heat is applied. Start with authorized power isolation and any stored-energy/ESD controls. Stabilize the board, select approved heating and tip geometry, limit thermal exposure, and inspect the pad and barrel after removal. Shaking a board to eject molten solder can scatter hot solder, damage parts, or injure people and is never an acceptable shortcut."],["Independent transfer: reject the absolute preferred-tool claim","Scenario A: a populated high-density board has a minute excess-solder bridge between two surface-mount pads. Scenario B: a plated through-hole connector lead retains solder in its barrel. Select an approved removal method for each and defend it from copper-pad access, hole depth, pad/laminate thermal risk and inspection criteria. Good reasoning often favors small fluxed braid for A and a suitable controlled-vacuum tool for B, but a manufacturer procedure may dictate otherwise. The exam answer is contextual, not a replacement for approved rework documentation."]]},{"module":"M27","page":"L19-0-02","title":"Analog voice service versus packet transport","head":"Understand the underlying model","fingerprint":"Traditional wired voice circuits use switched service and analog signaling","questions":[92],"additions":[["Frequency-division versus time-division multiplexing are two separate resource maps","Multiplexing shares one physical transmission facility among several signals. In frequency-division multiplexing (FDM), channels occupy different frequency slots simultaneously; filtering and guard bands keep the channels distinguishable. In time-division multiplexing (TDM), channels use different recurring time slots on a shared digital or sampled stream; synchronization tells each receiver which time slots belong to it. TDM does not mean TDMA cellular access is the same as a traditional telephone T-carrier, and neither technique is identical to packet switching. ETA 2025 competency 20.4 covers wired voice and data technology, while practice question 92 contrasts historical FDM telephone carriers with subsequent TDM designs."],["Historical context: the source explanation is not an absolute engineering rule","Analog multichannel carrier telephony historically made substantial use of FDM; digital PCM-based telephone trunks commonly used TDM time slots, permitting digital regeneration and integration with digital switching. In the supplied practice question 92, answer A is time-division multiplexing. But the stem attributes all development to overcoming noise, distortion and maintenance cost of FDM; actual design decisions also depend on sampling, coding, synchronization, spectrum, equipment costs, available digital electronics and the network architecture. Digital transmission can reduce accumulated analog noise when correctly regenerated, but poor clocks, bit errors or design can still impair it. FDM and TDM can coexist in modern systems."],["Independent worked example: assign channels in frequency and time","Suppose four narrowband analog voice channels share a physical link. In an FDM sketch, each is placed into a distinct nonoverlapping frequency slot with an appropriate guard allocation; all are present simultaneously. In an ideal TDM diagram, the four sampled channels take turns in repeating slots 1, 2, 3 and 4; a synchronous frame repeats after all four slots. If each channel contributes 8,000 samples/s of 8 bits each, the ideal information rate before framing or overhead is 4×8,000×8 = 256,000 bit/s. Explain why receivers need frequency-selective separation in FDM and slot synchronization in TDM, then distinguish both from independently addressed IP packets."]]},{"module":"M26","page":"L20-0-03","title":"Propagation, polarization and path loss","head":"Understand the underlying model","fingerprint":"RF waves have electric and magnetic fields transverse to their direction","questions":[97,98],"additions":[["Far-field electric and magnetic vectors are perpendicular to each other","For an approximately plane electromagnetic wave propagating in a uniform, source-free medium, the electric-field vector E, magnetic-field vector H, and propagation direction are mutually perpendicular. The E-field and H-field therefore meet at 90 degrees; both are transverse to the travel direction. The supplied AST question 97 mistakenly calls one component an “electromagnetic field” and the other “electric field”; the intended pair is ELECTRIC and MAGNETIC fields. The correct 90-degree angle applies to this far-field plane-wave model, not unconditionally to every point in a reactive antenna near field or complex guided structure."],["Vertical polarization describes E direction, not just antenna shape","For a conventional vertically oriented linear antenna operating in its intended far-field mode, vertical polarization means E points along the vertical reference direction. The traveling-wave H field is perpendicular to E and to propagation, so at the far-field observation considered by AST question 98, H is at 90 degrees to the vertical radiating axis. Do not confuse magnetic field loops around a conductor in the near field with the radiated far-field vectors, and do not conclude every physically vertical object radiates the same polarization in every direction."],["Independent vector test: distinguish far-field geometry from near-field hazards","Take a plane wave traveling east with electric field directed vertically up. Select a magnetic-field direction perpendicular to both the eastward travel direction and vertical electric field, then check with a right-hand rule that E cross H points east for outgoing power flow. A receiver with a horizontally oriented linear E polarization may attenuate that wave, depending on its pattern and propagation path. Change the problem to an observer a few millimeters from a powered antenna feed: explain why the simple plane-wave orthogonality and impedance assumptions may no longer fully describe the local fields and why RF safety procedures still apply."]]},{"module":"M26","page":"L20-0-00","title":"Frequency bands and the geometry of RF systems","head":"Understand the underlying model","fingerprint":"Frequency sets wavelength and helps determine antenna scale","questions":[99],"additions":[["Four-metre is the conventional name for the 70 MHz amateur band","The supplied AST question 99 calls the “4-meter frequency band” the 70 MHz band. The Radio Society of Great Britain (RSGB) identifies the UK 70.0–70.5 MHz amateur allocation as “70MHz (4 Metre)”; the corresponding name is not an exact wavelength specification for every assigned channel. Using c≈3×10^8 m/s, a signal at 70 MHz has free-space wavelength 3×10^8/(70×10^6)≈4.29 m. The name “4 m” is therefore an approximate conventional band label. Band availability and transmitting authority vary by country and license; a study example never authorizes operation on that frequency."],["Worked band-identification cross-check","Convert 70 MHz to 70,000,000 Hz, calculate λ≈4.29 m, and verify that 70 MHz is inside VHF (30–300 MHz). Next compare 50 MHz: wavelength is about 6.0 m, which explains the familiar 6-meter band label without assuming all countries allocate the same ranges. Contrast 144 MHz: wavelength≈2.08 m, associated with the conventional 2-meter band. These are mnemonic relationships, not calculations of licensed frequency limits."],["Independent transfer: labels are approximate, allocation limits are precise","A datasheet lists nominal amateur-band coverage near 70.2 MHz and a technician refers to it as “4 meters.” Explain how to compute approximate free-space wavelength λ≈3×10^8/(70.2×10^6)≈4.27 m, why the shorthand name is acceptable, and why an approved national frequency table, actual license and current band plan are still necessary before transmitting. Compare why 70 MHz belongs to VHF while 700 MHz belongs to UHF, regardless of whether either happens to have a common amateur-band nickname."]]}];
    const targets=specs.map(s=>{
      const m=data.course.find(m=>m.id===s.module);
      const p=m?.pages?.find(x=>x.id===s.page);
      if(!p || p.title!==s.title || !Array.isArray(p.goldTeaching?.paragraphs) ||
         !p.goldTeaching.paragraphs.some(x=>x[0]===s.head && typeof x[1]==='string' && x[1].includes(s.fingerprint)) ||
         s.additions.some(([h])=>p.goldTeaching.paragraphs.some(x=>x[0]===h)))
         throw Error('Target precondition or duplicate heading: '+s.module+'/'+s.page);
      return p;
    });
    targets.forEach((p,i)=>p.goldTeaching.paragraphs.push(...specs[i].additions.map(a=>a.slice())));
    window[key]={ok:true,revisedPages:4,addedSections:12,astQuestions:[91,92,97,98,99],targets:specs.map(s=>s.module+'/'+s.page)};
  }catch(e){
    window[key]={ok:false,error:String(e?.message||e)};
    if(typeof console!=='undefined' && typeof console.warn==='function') console.warn('B14 staged patch declined:',e);
  }
})();

// END BATCH 14

const outcomes=stages.map(b=>({batch:b,status:window['ALFRED_CETA_QA_'+b+'_STATUS']}));
const failed=outcomes.filter(r=>r.status?.ok!==true);
if(failed.length) throw Error('Stage failed: '+failed.map(r=>r.batch+':'+String(r.status?.error||'not applied')).join(' | '));
const additions=outcomes.reduce((n,r)=>n+(Number(r.status.addedSections)||0),0);
if (additions!==54) throw Error('Unexpected total added section count: '+additions+' (expected 54)');
window[aggregateKey]={ok:true,batches:stages.slice(),addedSections:additions,
  targetPageCount:18,astQuestionCount:20,
  baseline:'ace81fd9e42e35e391c48005647981301287ead7'};
} catch(e){
 restore();
 window[aggregateKey]={ok:false,error:String(e?.message||e)};
 if(typeof console!=='undefined'&&typeof console.warn==='function')
   console.warn('[Alfred B15] cumulative academic integration rolled back:',String(e?.message||e));
}
})();

/* ALFRED B18 — G05 bounded M01 safety-item academic QA. STAGED / NOT FOR UPLOAD.
   Verified against pinned production SHA: ace81fd9e42e35e391c48005647981301287ead7
   Must load AFTER installed overlays and B15 cumulative script.
   Changes only 14 reviewed remediation placements and 2 weak distractors.
   No grading keys, IDs, source provenance or student records are changed. */
(function(){
  'use strict';
  var statusKey='ALFRED_CETA_QA_G05_B18_STATUS';
  if(window[statusKey] && window[statusKey].ok===true) return;
  var guards=[
  {
    "module": "M01",
    "id": "CQ1049",
    "prompt": "Why can a shock prevent someone from releasing a live conductor?",
    "before": null,
    "after": "L01-0-04",
    "answer": 0
  },
  {
    "module": "M29",
    "id": "CQ1049",
    "prompt": "Why can a shock prevent someone from releasing a live conductor?",
    "before": null,
    "after": "L01-0-04",
    "answer": 0
  },
  {
    "module": "M01",
    "id": "CQ1050",
    "prompt": "A device specifies a particular fuse type and current rating. What is the appropriate replacement approach?",
    "before": null,
    "after": "L01-0-05",
    "answer": 0
  },
  {
    "module": "M29",
    "id": "CQ1050",
    "prompt": "A device specifies a particular fuse type and current rating. What is the appropriate replacement approach?",
    "before": null,
    "after": "L01-0-05",
    "answer": 0
  },
  {
    "module": "M01",
    "id": "CQ1051",
    "prompt": "Which practice reduces ESD risk when handling an unpowered CMOS board at an approved ESD bench?",
    "before": null,
    "after": "L01-1-03",
    "answer": 0
  },
  {
    "module": "M29",
    "id": "CQ1051",
    "prompt": "Which practice reduces ESD risk when handling an unpowered CMOS board at an approved ESD bench?",
    "before": null,
    "after": "L01-1-03",
    "answer": 0
  },
  {
    "module": "M01",
    "id": "CQ1052",
    "prompt": "A machine is switched off before service. Why is its ordinary Stop button insufficient proof of energy isolation?",
    "before": null,
    "after": "L01-0-06",
    "answer": 0
  },
  {
    "module": "M29",
    "id": "CQ1052",
    "prompt": "A machine is switched off before service. Why is its ordinary Stop button insufficient proof of energy isolation?",
    "before": null,
    "after": "L01-0-06",
    "answer": 0
  },
  {
    "module": "M01",
    "id": "M01-SAFE-01",
    "prompt": "A coworker is still contacting exposed energized wiring. What should you do first?",
    "before": "L01-0-03",
    "after": "L01-0-04",
    "answer": 2
  },
  {
    "module": "M01",
    "id": "M01-SAFE-02",
    "prompt": "An NEC-compliant installation still needs a safety procedure before maintenance. Why?",
    "before": "L01-0-04",
    "after": "L01-0-05",
    "answer": 1
  },
  {
    "module": "M01",
    "id": "M01-SAFE-04",
    "prompt": "A locked electrical disconnect is present, but a machine also has stored pneumatic energy. What is missing?",
    "before": "L01-0-04",
    "after": "L01-0-06",
    "answer": 2
  },
  {
    "module": "M01",
    "id": "M01-SAFE-05",
    "prompt": "Which statement is correct regarding RF transmitter exposure limits?",
    "before": "L01-0-06",
    "after": "L12-0-00",
    "answer": 1
  },
  {
    "module": "M01",
    "id": "M01-SAFE-06",
    "prompt": "An optical port looks dark. What is the safe conclusion?",
    "before": "L01-0-06",
    "after": "L12-0-00",
    "answer": 0
  },
  {
    "module": "M01",
    "id": "M01-SAFE-07",
    "prompt": "A task involves an unknown electrical source. Which hierarchy is best?",
    "before": "L01-0-04",
    "after": "L01-0-05",
    "answer": 2
  }
];
  var choices=[
  {
    "module": "M01",
    "id": "M01-SAFE-02",
    "prompt": "An NEC-compliant installation still needs a safety procedure before maintenance. Why?",
    "answer": 1,
    "index": 2,
    "old": "The NEC only covers software programs.",
    "new": "NFPA 70 alone governs all maintenance practices, so separate OSHA and NFPA 70E work controls are unnecessary."
  },
  {
    "module": "M01",
    "id": "M01-SAFE-06",
    "prompt": "An optical port looks dark. What is the safe conclusion?",
    "answer": 0,
    "index": 2,
    "old": "Its connector can be cleaned by staring into it.",
    "new": "A dark optical port can be inspected directly with a standard magnifier while the equipment is powered."
  }
];
  var data=window.ALFRED_CETA_DATA;
  var fail=function(why){window[statusKey]={ok:false,error:String(why),baseline:'ace81fd9e42e35e391c48005647981301287ead7' };};
  if(!data || !Array.isArray(data.course) || !window.ALFRED_CETA_QA_CUMULATIVE_STATUS || window.ALFRED_CETA_QA_CUMULATIVE_STATUS.ok!==true){fail('Required earlier academic chain is not verified');return;}
  var resolve=function(moduleId,id){var m=data.course.find(function(x){return x.id===moduleId;});if(!m)throw Error('Module unavailable: '+moduleId);var qs=m.questions.filter(function(q){return q.id===id;});if(qs.length!==1)throw Error('Ambiguous or absent question '+moduleId+'/'+id);return qs[0];};
  try {
    for(var i=0;i<guards.length;i++){
      var g=guards[i],q=resolve(g.module,g.id);
      if(q.prompt!==g.prompt||q.answer!==g.answer)throw Error('Question text/key mismatch '+g.module+'/'+g.id);
      var old=q.reviewedRemediationPageId||q.sourcePageId||null;
      if(old!==g.before)throw Error('Remediation precondition mismatch '+g.module+'/'+g.id+': '+old);
      var target=data.course.find(function(m){return m.id==='M01';});
      if(!target||!target.pages.some(function(p){return p.id===g.after;}))throw Error('Target page absent '+g.after);
    }
    for(var j=0;j<choices.length;j++){
      var ce=choices[j],item=resolve(ce.module,ce.id);
      if(item.prompt!==ce.prompt||item.answer!==ce.answer||!Array.isArray(item.choices)||item.choices[ce.index]!==ce.old)throw Error('Choice precondition mismatch '+ce.id);
    }
    for(var k=0;k<guards.length;k++){var r=guards[k],t=resolve(r.module,r.id);t.reviewedRemediationModuleId='M01';t.reviewedRemediationPageId=r.after;}
    for(var e=0;e<choices.length;e++){var z=choices[e];resolve(z.module,z.id).choices[z.index]=z.new;}
    window[statusKey]={ok:true,baseline:'ace81fd9e42e35e391c48005647981301287ead7',mappedPlacements:guards.length,distractorsRefined:choices.length,affectedDistinctIDs:10,reviewedDistinctItems:12,changedAnswerKeys:0,scope:'M01 Q1-12 plus M29 shared-archived appearances',stage:'NOT_INSTALLED'};
  } catch(err){fail(err.message||err);}
})();

/* ALFRED UNIVERSITY — Batch 19 G05 M01 questions 13–28, STAGED ONLY.
   Production read-only SHA ace81fd9e42e35e391c48005647981301287ead7.
   Load AFTER B18 and the previously verified B15 instructional correction chain.
   Precondition all changes before mutation; no IDs or answer keys changed. */
(function(){'use strict';
 var key='ALFRED_CETA_QA_G05_B19_STATUS';
 if(window[key]&&window[key].ok===true)return;
 var routes=[{"id":"M01-SAFE-08","before":"L01-0-03","after":"L01-0-06","answer":1,"prompt":"A person has not been trained for exposed energized service. What qualifies them?"},{"id":"M01-SAFE-15","before":"L12-0-00","after":"L01-1-03","answer":0,"prompt":"Why can an apparently functional CMOS board still be ESD-damaged?"},{"id":"M01-SAFE-16","before":"L01-0-04","after":"L01-0-05","answer":2,"prompt":"A specified fuse keeps failing and a larger-current substitute fits mechanically. What should happen?"},{"id":"M01-SAFE-17","before":"L01-0-03","after":"L01-0-04","answer":1,"prompt":"Why is body contact path a factor in electric shock severity?"}];
 var choices=[{"id":"M01-SAFE-08","index":0,"old":"Holding a basic digital multimeter.","new":"Having a personal multimeter and a general safety orientation."},{"id":"M01-SAFE-08","index":2,"old":"Passing an online MCQ alone.","new":"Passing an electronics written examination without task-specific qualification."},{"id":"M01-SAFE-14","index":0,"old":"Tool accuracy independently certified.","new":"A simulated instrument reading may be recorded as a verified physical measurement when its display looks realistic."},{"id":"M01-SAFE-14","index":2,"old":"Physical qualification completed.","new":"The virtual exercise establishes physical test-equipment proficiency without an observed hands-on assessment."},{"id":"M01-SAFE-15","index":1,"old":"ESD cannot affect silicon.","new":"An immediate successful functional test rules out hidden ESD damage."},{"id":"M01-SAFE-15","index":2,"old":"ESD always creates visible burn marks.","new":"Only a visibly damaged component can have reduced reliability from ESD."},{"id":"M01-SAFE-17","index":0,"old":"Contact path has no relationship to injury.","new":"Only the measured voltage matters; current path through the body does not affect injury."},{"id":"M01-SAFE-17","index":2,"old":"Electric shock acts only on fingernails.","new":"Only contact duration matters; the route of current through the torso can be ignored."}];
 var metadata=[{"id":"M01-SAFE-14","field":"objectiveIds","before":[],"after":["21.4"],"answer":1,"prompt":"A learner performs only an online lab simulation. What is the correct record?"}];
 var explanations=[{"id":"M01-SAFE-08","old":"Written study is not electrical work authorization.","new":"A basic meter or a written exam does not establish job-specific qualification for work on or near exposed energized parts. Training, demonstrated task-specific skill, authorization, and the applicable safe-work procedures are required; an online knowledge check is not permission to perform energized service."},{"id":"M01-SAFE-14","old":"Report the evidence level actually demonstrated.","new":"A simulation demonstrates only the modeled activity, not a verified physical measurement or hands-on qualification. Accurate technician records distinguish simulated, predicted, measured, and independently validated evidence, consistent with ETA competency 21.4 on recordkeeping."},{"id":"M01-SAFE-16","old":"Voltage/current, interrupt capability, and time behavior matter.","new":"A fuse that repeatedly opens may signal a fault. Do not bypass or up-rate it. Follow authorized troubleshooting, resolve the cause, and use the specified current rating, voltage rating, interrupting capacity, and time-current characteristic for any replacement."}];
 var D=window.ALFRED_CETA_DATA;
 function fail(msg){window[key]={ok:false,error:String(msg),stage:'NOT_INSTALLED'};}
 if(!D||!Array.isArray(D.course)||window.ALFRED_CETA_QA_G05_B18_STATUS?.ok!==true){fail('Verified Batch 18 prerequisite missing');return;}
 function lookup(id){var m=D.course.find(function(m){return m.id==='M01'});if(!m)throw Error('M01 missing');var qs=m.questions.filter(function(q){return q.id===id});if(qs.length!==1)throw Error('Missing or ambiguous question '+id);return qs[0];}
 try{
   routes.forEach(function(x){var q=lookup(x.id),old=q.reviewedRemediationPageId||q.sourcePageId||null;
     if(q.prompt!==x.prompt||q.answer!==x.answer||old!==x.before)throw Error('Route guard '+x.id);
     if(!D.course.find(function(m){return m.id==='M01'}).pages.some(function(p){return p.id===x.after}))throw Error('Target page not found '+x.after);
   });
   choices.forEach(function(x){var q=lookup(x.id);if(!Array.isArray(q.choices)||q.choices[x.index]!==x.old)throw Error('Choice guard '+x.id+'/'+x.index);});
   metadata.forEach(function(x){var q=lookup(x.id);if(q.prompt!==x.prompt||q.answer!==x.answer||JSON.stringify(q[x.field])!==JSON.stringify(x.before))throw Error('Objective guard '+x.id);});
   explanations.forEach(function(x){if(lookup(x.id).explanation!==x.old)throw Error('Explanation guard '+x.id);});
   routes.forEach(function(x){var q=lookup(x.id);q.reviewedRemediationModuleId='M01';q.reviewedRemediationPageId=x.after;});
   choices.forEach(function(x){lookup(x.id).choices[x.index]=x.new;});
   metadata.forEach(function(x){lookup(x.id)[x.field]=x.after.slice();});
   explanations.forEach(function(x){lookup(x.id).explanation=x.new;});
   window[key]={ok:true,reviewedQuestionIDs:16,routeCorrections:routes.length,distractorChanges:choices.length,objectiveTagCorrections:metadata.length,explanationImprovements:explanations.length,changedAnswerKeys:0,stage:'NOT_INSTALLED',baseline:'ace81fd9e42e35e391c48005647981301287ead7'};
 }catch(e){fail(e&&e.message||e);}
})();


/* ALFRED UNIVERSITY B20 · G05 independent review of M02 Q1–15 · STAGED, NOT FOR UPLOAD.
 * Append after B19 in the single cumulative academic correction script.
 * Source guard: ace81fd9e42e35e391c48005647981301287ead7; no question IDs, answer positions, student data or site architecture changed.
 * Preflight is all-or-none, and repeat execution is idempotent. */
(function(){'use strict';
 var statusKey='ALFRED_CETA_QA_G05_B20_STATUS';
 if(window[statusKey]?.ok===true)return;
 var routes=[{"id": "CQ1054", "modules": ["M02", "M29", "M30"], "after": "L02-0-03", "prompt": "Which particle carries a negative electric charge?", "answer": 0}, {"id": "CQ1055", "modules": ["M02", "M29", "M30"], "after": "L01-0-08", "prompt": "A specification states that a node is 3 V above the reference node. Which quantity is specified?", "answer": 0}, {"id": "CQ1093", "modules": ["M02", "M30"], "after": "L04-0-03", "prompt": "What is 4.7 kΩ expressed in ohms?", "answer": 0}, {"id": "CQ1094", "modules": ["M02", "M30"], "after": "L04-0-03", "prompt": "What is 3 × 10⁻³ amperes in milliamperes?", "answer": 0}, {"id": "KC01-0", "modules": ["M02"], "after": "L01-0-09", "prompt": "A 5 V source is applied to 2 kΩ. What current should you predict?", "answer": 1}];
 var nist={"id": "ALF-M02-V15-Q07", "module": "M02", "answer": 0, "oldPrompt": "Which pair of unit symbols differs by a factor of one billion for the same base unit?", "newPrompt": "Which pair correctly spells the SI-prefixed resistance unit names under NIST SP 811 §9.3?", "oldChoices": ["M and m", "k and M", "m and µ", "µ and n"], "newChoices": ["kilohm and megohm", "kiloohm and megohm", "kilohm and megaohm", "kilo-ohm and mega-ohm"], "oldExplanation": "Mega = 10⁶ and milli = 10⁻³, ratio 10⁹.", "newExplanation": "NIST SP 811 §9.3 uses the customary contracted spellings kilohm and megohm (not kiloohm or megaohm). SI prefix and unit names are written together without hyphens or spaces; the correct electrical symbols are kΩ and MΩ. The original item tested prefix magnitude (ETA 9.8) rather than the specified NIST spelling exception (ETA 9.8.1)."};
 var ohm={"id": "KC01-0", "expectedObjectiveIds": [], "newObjectiveIds": ["2.13.1"], "oldExplanation": "Correct. Volts divided by kilohms gives milliamperes: 5/2 = 2.5 mA.", "newExplanation": "For an ideal 2 kΩ resistance, convert 2 kΩ = 2000 Ω, then apply Ohm’s law: I = V/R = 5 V / 2000 Ω = 0.0025 A = 2.5 mA. Check the thousand-fold prefix conversion. This is a calculation under ETA 2.13.1, not a current or power rating for an unknown real circuit."};
 var D=window.ALFRED_CETA_DATA;
 function fail(e){window[statusKey]={ok:false,stage:'NOT_INSTALLED',error:String(e)};}
 if(!D||!Array.isArray(D.course)||window.ALFRED_CETA_QA_G05_B19_STATUS?.ok!==true){fail('Batch 19 cumulative prerequisite missing');return;}
 function mod(id){var m=D.course.find(function(x){return x.id===id;});if(!m)throw Error('Module missing '+id);return m;}
 function one(id,m){var hits=mod(m).questions.filter(function(x){return x.id===id;});if(hits.length!==1)throw Error('Question missing/duplicated '+m+':'+id);return hits[0];}
 try{
   // All target and original-record guards MUST pass before the first mutation.
   routes.forEach(function(x){
     if(!mod('M02').pages.some(function(pg){return pg.id===x.after;}))throw Error('Missing teaching target '+x.after);
     var actualModules=D.course.filter(function(m){return m.questions?.some(function(q){return q.id===x.id;});}).map(function(m){return m.id;}).sort();
     if(JSON.stringify(actualModules)!==JSON.stringify(x.modules.slice().sort()))throw Error('Unexpected placement set '+x.id);
     x.modules.forEach(function(mid){var q=one(x.id,mid);if(q.prompt!==x.prompt||q.answer!==x.answer||q.reviewedRemediationPageId||q.reviewedRemediationModuleId||q.sourcePageId||q.sourceModuleId)throw Error('Source link precondition mismatch '+mid+':'+x.id);});
   });
   var nq=one(nist.id,nist.module);
   if(nq.answer!==nist.answer||nq.prompt!==nist.oldPrompt||JSON.stringify(nq.choices)!==JSON.stringify(nist.oldChoices)||nq.explanation!==nist.oldExplanation||JSON.stringify(nq.objectiveIds)!=='["9.8.1"]')throw Error('NIST item precondition mismatch');
   var oq=one(ohm.id,'M02');
   if(JSON.stringify(oq.objectiveIds)!==JSON.stringify(ohm.expectedObjectiveIds)||oq.explanation!==ohm.oldExplanation)throw Error('Ohm item precondition mismatch');
   if(!mod('M02').pages.some(function(pg){return pg.id==='L04-0-03';}))throw Error('NIST instructional page unavailable');
   // Commit after complete preflight, no outside writes.
   routes.forEach(function(x){x.modules.forEach(function(mid){var q=one(x.id,mid);q.reviewedRemediationModuleId='M02';q.reviewedRemediationPageId=x.after;});});
   nq.prompt=nist.newPrompt;nq.choices=nist.newChoices.slice();nq.explanation=nist.newExplanation;
   oq.objectiveIds=ohm.newObjectiveIds.slice();oq.explanation=ohm.newExplanation;
   window[statusKey]={ok:true,stage:'NOT_INSTALLED',reviewedQuestionIDs:15,routePlacements:11,routeQuestionIDs:5,nistRealignment:1,objectiveTagChanges:1,explanationChanges:2,changedAnswerKeys:0,baseline:'ace81fd9e42e35e391c48005647981301287ead7'};
 }catch(e){fail(e&&e.message||e);}
})();
/* B21 — 14 independently reviewed M03 instructional remediation targets; 28 placements.
 * Staged only. Fail-closed, idempotent, no answer keys, IDs, history, or readiness altered.
 * IMPORTANT: existing 15-item all-A pattern and repeated equivalent problems are OPEN
 * under G05/G10, not silently treated as corrected. */
(function(){'use strict';
 var K='ALFRED_CETA_QA_G05_B21_STATUS';
 if(window[K]?.ok===true)return;
 var R=[{"id": "CQ0288", "prompt": "A 9 V source is applied across a 330 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0289", "prompt": "A 5 V source is applied across a 220 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0290", "prompt": "A 12 V source is applied across a 1000 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0291", "prompt": "A 3.3 V source is applied across a 470 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0292", "prompt": "A 24 V source is applied across a 1200 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0293", "prompt": "A 15 V source is applied across a 680 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0294", "prompt": "A 6 V source is applied across a 150 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0295", "prompt": "A 10 V source is applied across a 2000 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0296", "prompt": "A 7.5 V source is applied across a 1500 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0297", "prompt": "A 18 V source is applied across a 3600 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0298", "prompt": "A 5 V source is applied across a 1000 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0299", "prompt": "A 12 V source is applied across a 2400 Ω resistor. What current should you predict?", "modules": ["M03", "M29"], "target": "L01-0-01", "answer": 0}, {"id": "CQ0300", "prompt": "A DC load operates at 5 V and 20 mA. Approximately how much power does it consume?", "modules": ["M03", "M29"], "target": "L01-0-02", "answer": 0}, {"id": "CQ0301", "prompt": "A DC load operates at 12 V and 150 mA. Approximately how much power does it consume?", "modules": ["M03", "M29"], "target": "L01-0-02", "answer": 0}];
 var D=window.ALFRED_CETA_DATA;
 function fail(e){window[K]={ok:false,stage:'NOT_INSTALLED',error:String(e)};}
 if(!D||!Array.isArray(D.course)||window.ALFRED_CETA_QA_G05_B20_STATUS?.ok!==true){fail('B20 prerequisite missing');return;}
 function module(id){var m=D.course.find(function(x){return x.id===id;});if(!m)throw Error('Module not found: '+id);return m;}
 function question(id,mid){var q=module(mid).questions.filter(function(x){return x.id===id;});if(q.length!==1)throw Error('Question ambiguous: '+mid+' '+id);return q[0];}
 try{
  // Preflight every target and placement before mutating any source record.
  R.forEach(function(r){
   if(!module('M03').pages.some(function(x){return x.id===r.target;}))throw Error('Missing page: '+r.target);
   var actual=D.course.filter(function(m){return m.questions.some(function(q){return q.id===r.id;});}).map(function(m){return m.id;}).sort();
   if(JSON.stringify(actual)!==JSON.stringify(r.modules.slice().sort()))throw Error('Unexpected placement set: '+r.id);
   r.modules.forEach(function(mid){
    var q=question(r.id,mid);
    if(q.prompt!==r.prompt||q.answer!==r.answer||q.reviewedRemediationPageId||q.reviewedRemediationModuleId||q.sourcePageId||q.sourceModuleId)throw Error('Source mismatch: '+mid+' '+r.id);
   });
  });
  R.forEach(function(r){r.modules.forEach(function(mid){var q=question(r.id,mid);q.reviewedRemediationModuleId='M03';q.reviewedRemediationPageId=r.target;});});
  window[K]={ok:true,stage:'NOT_INSTALLED',questionIDs:14,placements:28,changedKeys:0,remainingPatternIssue:'ALL_FIRST_15_ANSWERS_INDEX_0',baseline:'ace81fd9e42e35e391c48005647981301287ead7'};
 }catch(e){fail(e&&e.message||e);}
})();


/* B22: six source-guarded G05 remediation/objective metadata corrections, 13 placements.
 * Precondition: B21 cumulative correction applied first. No answer, prompt, choice,
 * question ID, question order, or score modification. B22 DOES NOT fix the separate
 * G09 prerequisite sequencing defects (M03 cap-reactance and parallel-connections).
 * Nor does this fix 32/34 keyed-A bias: G05/G10 still OPEN. NOT INSTALLED. */
(function(){'use strict';
 var KEY='ALFRED_CETA_QA_G05_B22_STATUS';
 if(window[KEY]?.ok===true)return;
 var R=[{"id":"CQ0303","prompt":"A DC load operates at 24 V and 250 mA. Approximately how much power does it consume?","choices":["6 W","60 W","0.6 W","96 W"],"modules":["M03","M29"],"targetModule":"M03","targetPage":"L01-0-10","answer":0,"objectiveIds":["2.14","9.1"]},{"id":"CQ0304","prompt":"A DC load operates at 9 V and 50 mA. Approximately how much power does it consume?","choices":["0.45 W","4.5 W","0.045 W","180 W"],"modules":["M03","M29"],"targetModule":"M03","targetPage":"L01-0-10","answer":0,"objectiveIds":["2.14","9.1"]},{"id":"CQ0305","prompt":"A DC load operates at 15 V and 100 mA. Approximately how much power does it consume?","choices":["1.5 W","15 W","0.15 W","150 W"],"modules":["M03","M29"],"targetModule":"M03","targetPage":"L01-0-10","answer":0,"objectiveIds":["2.14","9.1"]},{"id":"CQ1059","prompt":"A four-band resistor is brown, black, red, gold. What is its nominal value and tolerance?","choices":["1 kΩ ±5%","100 Ω ±5%","10 kΩ ±10%","1 kΩ ±10%"],"modules":["M03","M29","M30"],"targetModule":"M03","targetPage":"L02-0-03","answer":0,"objectiveIds":["3.1.2"]},{"id":"CQ1060","prompt":"An NTC thermistor warms within its operating range. What typically happens to its resistance?","choices":["It decreases.","It increases, as in a common PTC temperature sensor.","It remains constant until the temperature reaches a single switching threshold.","It depends on applied current alone and not on temperature."],"modules":["M03","M29","M30"],"targetModule":"M03","targetPage":"L02-0-06","answer":0,"objectiveIds":["3.1.3"]},{"id":"KC02-0","prompt":"Two resistors connect between exactly the same pair of nodes. Which fact must be true?","choices":["They carry the same current","They have the same voltage","Their resistances are equal","Their powers are equal"],"modules":["M03"],"targetModule":"M04","targetPage":"L02-0-00","answer":1,"objectiveIds":[],"correctedObjectiveIds":["4.4"]}];
 var DATA=window.ALFRED_CETA_DATA;
 function fail(s){window[KEY]={ok:false,stage:'NOT_INSTALLED',error:String(s)};}
 if(!DATA||!Array.isArray(DATA.course)||window.ALFRED_CETA_QA_G05_B21_STATUS?.ok!==true){fail('B21 prerequisite missing');return;}
 function module(id){var a=DATA.course.filter(function(x){return x.id===id;});if(a.length!==1)throw Error('Missing or duplicate module '+id);return a[0];}
 function question(mid,id){var a=module(mid).questions.filter(function(q){return q.id===id;});if(a.length!==1)throw Error('Missing or duplicate question '+mid+'/'+id);return a[0];}
 function eq(a,b){return JSON.stringify(a)===JSON.stringify(b);}
 try{
  // Complete read-only preflight first: no partial patch if one target unexpectedly changed.
  R.forEach(function(r){
   if(!module(r.targetModule).pages.some(function(p){return p.id===r.targetPage;}))throw Error('Missing target page '+r.targetModule+'/'+r.targetPage);
   var found=DATA.course.filter(function(m){return m.questions.some(function(q){return q.id===r.id;});}).map(function(m){return m.id;}).sort();
   if(!eq(found,r.modules.slice().sort()))throw Error('Unexpected placements '+r.id);
   r.modules.forEach(function(mid){var q=question(mid,r.id);
    if(q.prompt!==r.prompt||!eq(q.choices,r.choices)||q.answer!==r.answer||!eq(q.objectiveIds,r.objectiveIds))throw Error('Source changed '+mid+'/'+r.id);
    if(q.reviewedRemediationModuleId||q.reviewedRemediationPageId||q.sourceModuleId||q.sourcePageId)throw Error('Already remediated '+mid+'/'+r.id);
   });
  });
  R.forEach(function(r){r.modules.forEach(function(mid){var q=question(mid,r.id);
   q.reviewedRemediationModuleId=r.targetModule;
   q.reviewedRemediationPageId=r.targetPage;
   if(r.correctedObjectiveIds)q.objectiveIds=r.correctedObjectiveIds.slice();
  });});
  window[KEY]={ok:true,stage:'STAGED_NOT_INSTALLED',batch:22,uniqueQuestionIds:R.length,placements:13,remediationPlacementChanges:13,objectiveAlignmentChanges:1,changedAnswerKeys:0,changedQuestionIds:0,unresolved:['G09_M03_PREREQUISITE_SEQUENCE','G05_G10_M03_ALL_A_PATTERN'],baseline:'ace81fd9e42e35e391c48005647981301287ead7'};
 }catch(e){fail(e&&e.message||e);}
})();


/* Alfred University B23 -- source-guarded, atomic, cumulative G05 metadata &
 * one safety-specific question-clarity correction; NOT INSTALLED / NOT FOR UPLOAD.
 * All question IDs, keys, answer choices, order and scoring unchanged.
 * Depends on B22 previously staged status. Repeat-structure/answer-distribution
 * findings remain OPEN and are not hidden by remediation metadata changes. */
(function(){'use strict';
var KEY='ALFRED_CETA_QA_G05_B23_STATUS';
if(window[KEY]&&window[KEY].ok===true)return;
var R=[{"id":"CQ0306","prompt":"Three resistors of 100 Ω, 220 Ω, and 330 Ω are connected in series. What is the total resistance?","choices":["650 Ω","330 Ω","56.9 Ω","216.667 Ω"],"answer":0,"objectiveIds":["4.17"],"modules":["M04","M29"],"targetModule":"M04","targetPage":"L02-0-13"},{"id":"CQ0307","prompt":"Three resistors of 470 Ω, 470 Ω, and 1000 Ω are connected in series. What is the total resistance?","choices":["1940 Ω","1000 Ω","190.28 Ω","646.667 Ω"],"answer":0,"objectiveIds":["4.17"],"modules":["M04","M29"],"targetModule":"M04","targetPage":"L02-0-13"},{"id":"CQ0308","prompt":"Three resistors of 1000 Ω, 2200 Ω, and 3300 Ω are connected in series. What is the total resistance?","choices":["6500 Ω","3300 Ω","568.97 Ω","2166.67 Ω"],"answer":0,"objectiveIds":["4.17"],"modules":["M04","M29"],"targetModule":"M04","targetPage":"L02-0-13"},{"id":"CQ0309","prompt":"Three resistors of 150 Ω, 330 Ω, and 680 Ω are connected in series. What is the total resistance?","choices":["1160 Ω","680 Ω","89.55 Ω","386.667 Ω"],"answer":0,"objectiveIds":["4.17"],"modules":["M04","M29"],"targetModule":"M04","targetPage":"L02-0-13"},{"id":"CQ0310","prompt":"Three resistors of 2200 Ω, 4700 Ω, and 10000 Ω are connected in series. What is the total resistance?","choices":["16900 Ω","10000 Ω","1303.25 Ω","5633.33 Ω"],"answer":0,"objectiveIds":["4.17"],"modules":["M04","M29"],"targetModule":"M04","targetPage":"L02-0-13"},{"id":"CQ0311","prompt":"1000 Ω and 1000 Ω resistors are connected in parallel. What is their equivalent resistance?","choices":["500.00 Ω","2000.00 Ω","0.00 Ω","1000.00 Ω"],"answer":0,"objectiveIds":["4.17"],"modules":["M04","M29"],"targetModule":"M04","targetPage":"L02-0-13"},{"id":"CQ0312","prompt":"1000 Ω and 2000 Ω resistors are connected in parallel. What is their equivalent resistance?","choices":["666.67 Ω","3000.00 Ω","1000.00 Ω","1500.00 Ω"],"answer":0,"objectiveIds":["4.17"],"modules":["M04","M29"],"targetModule":"M04","targetPage":"L02-0-13"},{"id":"CQ0313","prompt":"2200 Ω and 3300 Ω resistors are connected in parallel. What is their equivalent resistance?","choices":["1320.00 Ω","5500.00 Ω","1100.00 Ω","2750.00 Ω"],"answer":0,"objectiveIds":["4.17"],"modules":["M04","M29"],"targetModule":"M04","targetPage":"L02-0-13"},{"id":"CQ0314","prompt":"470 Ω and 1000 Ω resistors are connected in parallel. What is their equivalent resistance?","choices":["319.73 Ω","1470.00 Ω","530.00 Ω","735.00 Ω"],"answer":0,"objectiveIds":["4.17"],"modules":["M04","M29"],"targetModule":"M04","targetPage":"L02-0-13"},{"id":"CQ0315","prompt":"1000 Ω and 4700 Ω resistors are connected in parallel. What is their equivalent resistance?","choices":["824.56 Ω","5700.00 Ω","3700.00 Ω","2850.00 Ω"],"answer":0,"objectiveIds":["4.17"],"modules":["M04","M29"],"targetModule":"M04","targetPage":"L02-0-13"},{"id":"CQ1067","prompt":"A node receives 8 mA. One outgoing branch carries 3 mA. With no charge accumulation, what flows in the other outgoing branch?","choices":["5 mA","11 mA","24 mA","2.67 mA"],"answer":0,"objectiveIds":["4.10"],"modules":["M04","M29","M30"],"targetModule":"M04","targetPage":"L02-0-01"},{"id":"CQ1068","prompt":"Two series elements drop 3 V and 4 V in a simple loop. What ideal source voltage balances the loop?","choices":["7 V","1 V","12 V","0.75 V"],"answer":0,"objectiveIds":["4.10"],"modules":["M04","M29","M30"],"targetModule":"M04","targetPage":"L02-0-14"},{"id":"KC02-1","prompt":"A circuit is wrong. What is the best first troubleshooting action?","choices":["Replace the most suspicious part","Measure random nodes until something looks odd","Reproduce and write the symptom, then verify source and reference","Rebuild the circuit from memory"],"answer":2,"objectiveIds":[],"modules":["M04"],"targetModule":"M04","targetPage":"L02-1-03","revisedPrompt":"A low-voltage DC training circuit behaves unexpectedly, and its test conditions have been confirmed safe. What is the best first troubleshooting action?"}];
var DATA=window.ALFRED_CETA_DATA;
function fail(err){window[KEY]={ok:false,stage:'NOT_INSTALLED',error:String(err)}}
if(!DATA||!Array.isArray(DATA.course)||!window.ALFRED_CETA_QA_G05_B22_STATUS||window.ALFRED_CETA_QA_G05_B22_STATUS.ok!==true){fail('B22 cumulative prerequisite not confirmed');return;}
function eq(a,b){return JSON.stringify(a)===JSON.stringify(b)}
function oneModule(id){var a=DATA.course.filter(function(x){return x.id===id});if(a.length!==1)throw Error('Missing or duplicate module '+id);return a[0]}
function oneQuestion(mid,id){var a=oneModule(mid).questions.filter(function(q){return q.id===id});if(a.length!==1)throw Error('Missing or duplicate question '+mid+'/'+id);return a[0]}
try{
 // Phase A -- complete read-only preflight before any mutation. Guard every
 // relevant placement, exact prompt, choices, answer key, objective IDs, and route.
 R.forEach(function(r){
  if(!oneModule(r.targetModule).pages.some(function(p){return p.id===r.targetPage}))throw Error('Missing teaching page '+r.targetModule+'/'+r.targetPage);
  var placements=DATA.course.filter(function(m){return Array.isArray(m.questions)&&m.questions.some(function(q){return q.id===r.id})}).map(function(m){return m.id}).sort();
  if(!eq(placements,r.modules.slice().sort()))throw Error('Placement mismatch '+r.id);
  r.modules.forEach(function(mid){var q=oneQuestion(mid,r.id);
   if(q.prompt!==r.prompt||!eq(q.choices,r.choices)||q.answer!==r.answer||!eq(q.objectiveIds,r.objectiveIds))throw Error('Source mismatch '+mid+'/'+r.id);
   if(q.reviewedRemediationModuleId||q.reviewedRemediationPageId||q.sourceModuleId||q.sourcePageId)throw Error('Already routed '+mid+'/'+r.id);
  });
 });
 // Phase B -- no write is possible until every source guard above passes.
 R.forEach(function(r){r.modules.forEach(function(mid){var q=oneQuestion(mid,r.id);
   q.reviewedRemediationModuleId=r.targetModule;
   q.reviewedRemediationPageId=r.targetPage;
   if(r.revisedPrompt)q.prompt=r.revisedPrompt;
 })});
 window[KEY]={ok:true,stage:'STAGED_NOT_INSTALLED',batch:23,questionIds:R.length,placements:27,remediationPlacements:27,safetyQualifiedPrompts:1,changedKeys:0,changedChoices:0,changedIds:0,sourceCommit:'ace81fd9e42e35e391c48005647981301287ead7',unresolved:['G05_G10_M04_REPEAT_TEMPLATES','G05_G10_M04_26_OF_28_ANSWER_A','G09_M03_PREREQUISITES','G11_CUMULATIVE_FULL_SOURCE_INTEGRATION']};
}catch(e){fail(e&&e.message||e)}
})();


/* Alfred University — Batch 24 G05, staged only / NOT FOR UPLOAD.
 * Scope: M05 CQ1078, CQ1088, CQ1089 (same IDs in M30) source-grounded
 * remediation links plus precise measurement-loading precondition in CQ1089.
 * Only after production academic correction chain and cumulative B23 pass.
 * All target records are checked BEFORE mutation; no keys, choices, IDs,
 * objective IDs, learner state, or score history change. No GitHub changes.
 */
(function(){'use strict';
  var KEY='ALFRED_CETA_QA_G05_B24_STATUS';
  if(window[KEY]&&window[KEY].ok===true)return;
  var T=[
    {id:'CQ1078', modules:['M05','M30'], target:'L13-0-00',
      prompt:'Which drawing most directly shows electrical connections and component functions rather than physical wire routing?',
      choices:['Schematic','Wiring diagram emphasizing point-to-point physical interconnections.','Functional block diagram emphasizing major stages and signal flow.','PCB assembly drawing emphasizing component placement and reference designators.'],
      answer:0, objectives:['6.3'], explanation:'A schematic uses symbols to depict component-level electrical relationships. Wiring diagrams focus on physical interconnections, block diagrams show functional stages, and assembly drawings show placement. Compare the document to the actual troubleshooting task.'},
    {id:'CQ1088', modules:['M05','M30'], target:'L03-0-00',
      prompt:'How should a DMM normally be connected to measure DC voltage across a resistor?',
      choices:['In parallel, using the voltage input and suitable range','In series with the resistor using the meter current input.','In parallel but with the meter in low-resistance/continuity mode.','Across the resistor using a high-current input with meter set to voltage.'],
      answer:0, objectives:['8.3'], explanation:'A DMM measures voltage across two nodes, normally in parallel with a high-impedance voltage input. Current and resistance modes use different input circuits; connecting current mode across a source can be hazardous.'},
    {id:'CQ1089', modules:['M05','M30'], target:'L03-0-03',
      prompt:"A voltmeter's input resistance is comparable to the resistance being measured across. What error is likely?",
      newPrompt:'A voltmeter is connected to a high-impedance sensor divider whose Thevenin source resistance is comparable to the meter input resistance. What error is likely?',
      choices:['The meter loads the circuit and changes the voltage.','The meter makes the load resistance effectively infinite.','The meter draws no current because it is digital.','The meter always raises the measured voltage by adding resistance in series.'],
      answer:0, objectives:['8.6'], explanation:'Finite meter input resistance creates an extra parallel load on the measured nodes. This changes the divider or source loading. Use an instrument whose input impedance is sufficiently high for the circuit.'}
  ];
  var D=window.ALFRED_CETA_DATA;
  function fail(e){window[KEY]={ok:false,stage:'NOT_INSTALLED',error:String(e)};}
  if(!D||!Array.isArray(D.course)||window.ALFRED_CETA_QA_G05_B23_STATUS?.ok!==true){fail('Cumulative B23 prerequisite missing');return;}
  function eq(a,b){return JSON.stringify(a)===JSON.stringify(b);}
  function mod(mid){var ms=D.course.filter(function(m){return m.id===mid;});if(ms.length!==1)throw Error('Expected exactly one module '+mid);return ms[0];}
  function one(mid,id){var a=mod(mid).questions.filter(function(q){return q.id===id;});if(a.length!==1)throw Error('Expected exactly one question '+mid+'/'+id);return a[0];}
  try{
    T.forEach(function(t){
      if(!mod('M05').pages.some(function(p){return p.id===t.target;}))throw Error('Missing reference page '+t.target);
      var found=D.course.filter(function(m){return Array.isArray(m.questions)&&m.questions.some(function(q){return q.id===t.id;});}).map(function(m){return m.id;}).sort();
      if(!eq(found,t.modules.slice().sort()))throw Error('Unexpected question placements '+t.id);
      t.modules.forEach(function(mid){var q=one(mid,t.id);
        if(q.prompt!==t.prompt||!eq(q.choices,t.choices)||q.answer!==t.answer||!eq(q.objectiveIds,t.objectives)||q.explanation!==t.explanation)
          throw Error('Source item drift '+mid+'/'+t.id);
        if(q.reviewedRemediationModuleId||q.reviewedRemediationPageId||q.sourceModuleId||q.sourcePageId)
          throw Error('Existing route unexpectedly present '+mid+'/'+t.id);
      });
    });
    // All source preconditions pass, then commit this self-contained transaction.
    T.forEach(function(t){t.modules.forEach(function(mid){var q=one(mid,t.id);
      q.reviewedRemediationModuleId='M05';
      q.reviewedRemediationPageId=t.target;
      if(t.newPrompt)q.prompt=t.newPrompt;
    });});
    window[KEY]={ok:true,batch:24,stage:'STAGED_NOT_INSTALLED',questionIds:3,placements:6,remediationPlacements:6,clarifiedPromptIds:['CQ1089'],changedAnswers:0,changedChoices:0,changedIds:0,baseCommit:'ace81fd9e42e35e391c48005647981301287ead7',unresolved:['G05_G10_M04_26_OF_28_KEY_A','G05_G10_M05_FIRST_12_KEY_A','G11_FULL_EFFECTIVE_RUNTIME']};
  }catch(e){fail(e&&e.message||e);}
})();

/* Alfred University — Batch 25 G05, staged only; NOT FOR UPLOAD.
 * Verified original source text: GitHub ace81fd9e42e35e391c48005647981301287ead7
 * course.js blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 * Requires the complete previous cumulative B24 patch after installed production overlays.
 * No scoring, IDs, choices, explanations, history or progress changes.
 * Static exact-source-target tests are not full effective-course G11 validation.
 */
(function(){'use strict';
 var KEY='ALFRED_CETA_QA_G05_B25_STATUS';
 if(window[KEY]&&window[KEY].ok===true)return;
 var T=[{"id":"ALF-M05-V15-Q06","modules":["M05"],"prompt":"When measuring resistance, which condition should be established first?","choices":["Circuit isolated and de-energized under applicable procedure","Full power applied","Meter dial on current","Leads shorted across a battery"],"answer":0,"explanation":"The resistance mode applies its own test stimulus; external power can damage the meter and injure personnel.","objectives":["8.4"],"route":["source","M05","L03-0-00"],"kind":"competency","newPrompt":null,"newObjectives":["8.3"],"target":null},{"id":"ALF-M05-V15-Q08","modules":["M05"],"prompt":"Signal exists at TP1 and TP2 but is absent at TP3. What is the defensible immediate conclusion?","choices":["The fault search area is between the last good and first bad observations","U3 is certainly defective","The battery is fully charged","Every upstream stage failed"],"answer":0,"explanation":"Last-good/first-bad narrows the stage; supplies, controls, loading and wiring require verification.","objectives":["6.8"],"route":["source","M05","L13-0-08"],"kind":"prompt","newPrompt":"On a verified signal path with consecutive test points TP1, TP2 and downstream TP3, the expected signal is present at TP1 and TP2 but absent at TP3 under the same operating conditions. What is the defensible immediate conclusion?","newObjectives":null,"target":null},{"id":"AV43-8-1","modules":["M05"],"prompt":"Why can an analog moving-coil voltmeter indicate a lower voltage than a high-input-impedance digital meter on the same weak signal node?","choices":["The analog meter has no resistance between its test leads.","The analog meter may draw more current and load the circuit.","A pointer always responds to a larger physical voltage than an ADC.","The digital meter cannot measure DC at all."],"answer":1,"explanation":"Finite input resistance draws current and creates a divider with the source. A high input impedance generally reduces loading, within instrument specifications.","objectives":["8.1"],"route":["reviewed","M05","L03-0-03"],"kind":"competency","newPrompt":null,"newObjectives":["8.1","8.6"],"target":null},{"id":"CQ0336","modules":["M06","M29"],"prompt":"A zero-offset sinusoid has a peak amplitude of 5 V. What is its RMS value?","choices":["3.54 V","7.07 V","10.00 V","2.50 V"],"answer":0,"explanation":"Vrms = Vpeak/√2 = 5/√2 ≈ 3.54 V.","objectives":["2.12.1"],"route":null,"kind":"remediation","newPrompt":null,"newObjectives":null,"target":["M06","L04-0-08"]},{"id":"CQ0337","modules":["M06","M29"],"prompt":"A zero-offset sinusoid has a peak amplitude of 10 V. What is its RMS value?","choices":["7.07 V","14.14 V","20.00 V","5.00 V"],"answer":0,"explanation":"Vrms = Vpeak/√2 = 10/√2 ≈ 7.07 V.","objectives":["2.12.1"],"route":null,"kind":"remediation","newPrompt":null,"newObjectives":null,"target":["M06","L04-0-08"]},{"id":"CQ0338","modules":["M06","M29"],"prompt":"A zero-offset sinusoid has a peak amplitude of 15 V. What is its RMS value?","choices":["10.61 V","21.21 V","30.00 V","7.50 V"],"answer":0,"explanation":"Vrms = Vpeak/√2 = 15/√2 ≈ 10.61 V.","objectives":["2.12.1"],"route":null,"kind":"remediation","newPrompt":null,"newObjectives":null,"target":["M06","L04-0-08"]},{"id":"CQ0339","modules":["M06","M29"],"prompt":"A zero-offset sinusoid has a peak amplitude of 20 V. What is its RMS value?","choices":["14.14 V","28.28 V","40.00 V","10.00 V"],"answer":0,"explanation":"Vrms = Vpeak/√2 = 20/√2 ≈ 14.14 V.","objectives":["2.12.1"],"route":null,"kind":"remediation","newPrompt":null,"newObjectives":null,"target":["M06","L04-0-08"]},{"id":"CQ0340","modules":["M06","M29"],"prompt":"A zero-offset sinusoid has a peak amplitude of 50 V. What is its RMS value?","choices":["35.36 V","70.71 V","100.00 V","25.00 V"],"answer":0,"explanation":"Vrms = Vpeak/√2 = 50/√2 ≈ 35.36 V.","objectives":["2.12.1"],"route":null,"kind":"remediation","newPrompt":null,"newObjectives":null,"target":["M06","L04-0-08"]}];
 var D=window.ALFRED_CETA_DATA;
 function fail(msg){window[KEY]={ok:false,stage:'NOT_INSTALLED',error:String(msg)};}
 if(!D||!Array.isArray(D.course)||!window.ALFRED_CETA_QA_G05_B24_STATUS||window.ALFRED_CETA_QA_G05_B24_STATUS.ok!==true){fail('Missing cumulative B24 prerequisite or valid curriculum');return;}
 function eq(a,b){return JSON.stringify(a)===JSON.stringify(b);}
 function mod(id){var a=D.course.filter(function(m){return m.id===id;});if(a.length!==1)throw Error('Module missing/duplicate '+id);return a[0];}
 function one(mid,id){var a=mod(mid).questions.filter(function(q){return q.id===id;});if(a.length!==1)throw Error('Question missing/duplicate '+mid+'/'+id);return a[0];}
 try {
  T.forEach(function(t){
   var found=D.course.filter(function(m){return Array.isArray(m.questions)&&m.questions.some(function(q){return q.id===t.id;});}).map(function(m){return m.id;}).sort();
   if(!eq(found,t.modules.slice().sort()))throw Error('Unexpected placement '+t.id);
   if(t.target&&!mod(t.target[0]).pages.some(function(p){return p.id===t.target[1];}))throw Error('Missing remediation target '+t.id);
   t.modules.forEach(function(mid){
    var q=one(mid,t.id);
    if(q.prompt!==t.prompt||!eq(q.choices,t.choices)||q.answer!==t.answer||q.explanation!==t.explanation||!eq(q.objectiveIds,t.objectives))throw Error('Source drift '+mid+'/'+t.id);
    var r=t.route;
    if(r&&r[0]==='source'&&!(q.sourceModuleId===r[1]&&q.sourcePageId===r[2]&&!q.reviewedRemediationModuleId&&!q.reviewedRemediationPageId))throw Error('Source page drift '+mid+'/'+t.id);
    if(r&&r[0]==='reviewed'&&!(q.reviewedRemediationModuleId===r[1]&&q.reviewedRemediationPageId===r[2]))throw Error('Existing reviewed route drift '+mid+'/'+t.id);
    if(!r&&(q.sourceModuleId||q.sourcePageId||q.reviewedRemediationModuleId||q.reviewedRemediationPageId))throw Error('Unexpected source/remediation route '+mid+'/'+t.id);
   });
  });
  // Every source record and every target page has passed all guards before any mutation.
  T.forEach(function(t){t.modules.forEach(function(mid){var q=one(mid,t.id);
   if(t.newPrompt)q.prompt=t.newPrompt;
   if(t.newObjectives)q.objectiveIds=t.newObjectives.slice();
   if(t.target){q.reviewedRemediationModuleId=t.target[0];q.reviewedRemediationPageId=t.target[1];}
  });});
  window[KEY]={ok:true,batch:25,stage:'STAGED_NOT_INSTALLED',uniqueIds:8,totalPlacements:13,remediationPlacements:10,correctedObjectiveIDs:['ALF-M05-V15-Q06','AV43-8-1'],clarifiedPromptIDs:['ALF-M05-V15-Q08'],changedKeys:0,changedChoices:0,changedIDs:0,baseCommit:'ace81fd9e42e35e391c48005647981301287ead7',unresolved:['G05_G10_REPEAT_RMS_FIVE_NEAR_CLONES','G05_G10_ANSWER_POSITION_IMBALANCE','G11_FULL_EFFECTIVE_SOURCE_RUNTIME']};
 } catch(e){fail(e&&e.message||e);}
})();
/* ALFRED UNIVERSITY — Batch 26 G05 independent academic QA; STAGED ONLY — DO NOT UPLOAD.
 Production commit ace81fd9e42e35e391c48005647981301287ead7.
 course.js Git blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 This delta requires cumulative B25 patch status. Every original question record and
 all expected placements must match exactly before ANY mutation is made.
 Existing keys, choices, IDs, explanations, placement count and learner history remain unchanged.
 Isolated exact-record fixture guards DO NOT certify the complete G11 production load chain.
*/
(function(){'use strict';
 var KEY='ALFRED_CETA_QA_G05_B26_STATUS';
 if(window[KEY]&&window[KEY].ok===true)return;
 var T=[{"id":"ALF-M06-V16-Q06","modules":["M06"],"prompt":"A filter output/input amplitude ratio is 0.5 under a defined voltage-transfer measurement. What is gain?","choices":["+6 dB","−6 dB","−20 dB","0 dB"],"answer":1,"explanation":"For voltage-transfer magnitude at defined comparable conditions, dB = 20log10(Vout/Vin). A ratio of 0.5 gives approximately -6.02 dB. A negative sign indicates attenuation, not reversed signal polarity.","objectiveIds":["8.12"],"route":["source","M06","L04-1-01"],"action":"objective","afterObjectives":["9.6"]},{"id":"ALF-M07-V16-Q06","modules":["M07"],"prompt":"Two 22 µH inductors have differing saturation-current ratings. Which criterion is essential for a 1 A converter?","choices":["Only its nominal inductance measured at very small test current.","Only its DC resistance, without checking thermal or core effects.","Only the maximum frequency shown in a small-signal test.","Rated saturation/current performance at 1 A"],"answer":3,"explanation":"Inductor suitability depends on saturation behavior and RMS/thermal current rating at the actual waveform, not the nominal inductance alone. Excess peak current can collapse effective inductance.","objectiveIds":["3.3"],"route":["source","M07","L07-0-05"],"action":"prompt","afterPrompt":"Two 22 µH inductors have differing saturation-current ratings. A converter's inductor current reaches 1 A peak, including ripple. Which criterion is essential when choosing an inductor?"},{"id":"ALF-M07-V16-Q07","modules":["M07"],"prompt":"At twice the frequency, ideal capacitive reactance does what?","choices":["Halves","Doubles","Becomes DC resistance","Stays unchanged"],"answer":0,"explanation":"Capacitive reactance is XC=1/(2πfC). Holding capacitance constant while doubling frequency doubles the denominator and halves |XC|. Ideal capacitors do not therefore become ordinary DC resistors.","objectiveIds":["2.8"],"route":["source","M07","L06-0-00"],"action":"objective","afterObjectives":["2.8","2.10"]},{"id":"CQ0326","modules":["M07","M08","M29"],"prompt":"What is the inductive reactance of 10 mH at 1000 Hz?","choices":["62.83 Ω","628.32 Ω","6.28 Ω","10.00 Ω"],"answer":0,"explanation":"Xl = 2πfL, with L = 10 × 10^-3 H; Xl ≈ 62.83 Ω. The alternative values represent a decimal-place error or a missing 2π factor.","objectiveIds":["2.9","2.10"],"route":null,"action":"route","afterRoute":["M07","L06-0-00"]},{"id":"CQ0327","modules":["M07","M08","M29"],"prompt":"What is the inductive reactance of 47 mH at 500 Hz?","choices":["147.65 Ω","1476.55 Ω","14.77 Ω","23.50 Ω"],"answer":0,"explanation":"Xl = 2πfL, with L = 47 × 10^-3 H; Xl ≈ 147.65 Ω. The alternative values represent a decimal-place error or a missing 2π factor.","objectiveIds":["2.9","2.10"],"route":null,"action":"route","afterRoute":["M07","L06-0-00"]},{"id":"CQ0328","modules":["M07","M08","M29"],"prompt":"What is the inductive reactance of 1 mH at 2000 Hz?","choices":["12.57 Ω","125.66 Ω","1.26 Ω","2.00 Ω"],"answer":0,"explanation":"Xl = 2πfL, with L = 1 × 10^-3 H; Xl ≈ 12.57 Ω. The alternative values represent a decimal-place error or a missing 2π factor.","objectiveIds":["2.9","2.10"],"route":null,"action":"route","afterRoute":["M07","L06-0-00"]},{"id":"CQ0329","modules":["M07","M08","M29"],"prompt":"What is the inductive reactance of 100 mH at 60 Hz?","choices":["37.70 Ω","376.99 Ω","3.77 Ω","6.00 Ω"],"answer":0,"explanation":"Xl = 2πfL, with L = 100 × 10^-3 H; Xl ≈ 37.70 Ω. The alternative values represent a decimal-place error or a missing 2π factor.","objectiveIds":["2.9","2.10"],"route":null,"action":"route","afterRoute":["M07","L06-0-00"]},{"id":"CQ0330","modules":["M07","M08","M29"],"prompt":"What is the inductive reactance of 2.2 mH at 10000 Hz?","choices":["138.23 Ω","1382.30 Ω","13.82 Ω","22.00 Ω"],"answer":0,"explanation":"Xl = 2πfL, with L = 2.2 × 10^-3 H; Xl ≈ 138.23 Ω. The alternative values represent a decimal-place error or a missing 2π factor.","objectiveIds":["2.9","2.10"],"route":null,"action":"route","afterRoute":["M07","L06-0-00"]}];
 var D=window.ALFRED_CETA_DATA;
 function fail(msg){window[KEY]={ok:false,stage:'NOT_INSTALLED',error:String(msg)};}
 if(!D||!Array.isArray(D.course)||!window.ALFRED_CETA_QA_G05_B25_STATUS||window.ALFRED_CETA_QA_G05_B25_STATUS.ok!==true){fail('Missing B25 prerequisite or curriculum');return;}
 function eq(a,b){return JSON.stringify(a)===JSON.stringify(b);}
 function mod(id){var a=D.course.filter(function(m){return m.id===id;});if(a.length!==1)throw Error('Missing/duplicate module '+id);return a[0];}
 function one(mid,id){var a=mod(mid).questions.filter(function(q){return q.id===id;});if(a.length!==1)throw Error('Missing/duplicate question '+mid+'/'+id);return a[0];}
 try{
  T.forEach(function(t){
   var found=D.course.filter(function(m){return Array.isArray(m.questions)&&m.questions.some(function(q){return q.id===t.id;});}).map(function(m){return m.id;}).sort();
   if(!eq(found,t.modules.slice().sort()))throw Error('Unexpected placements '+t.id);
   if(t.afterRoute&&!mod(t.afterRoute[0]).pages.some(function(p){return p.id===t.afterRoute[1];}))throw Error('Missing target lesson '+t.id);
   t.modules.forEach(function(mid){var q=one(mid,t.id);
    if(q.prompt!==t.prompt||!eq(q.choices,t.choices)||q.answer!==t.answer||q.explanation!==t.explanation||!eq(q.objectiveIds,t.objectiveIds))throw Error('Source drift '+mid+'/'+t.id);
    if(t.route){if(q.sourceModuleId!==t.route[1]||q.sourcePageId!==t.route[2]||q.reviewedRemediationModuleId||q.reviewedRemediationPageId)throw Error('Source route drift '+mid+'/'+t.id);}
    else if(q.sourceModuleId||q.sourcePageId||q.reviewedRemediationModuleId||q.reviewedRemediationPageId)throw Error('Unexpected route '+mid+'/'+t.id);
   });
  });
  // Atomic logical validation: only mutate AFTER all source guards pass.
  T.forEach(function(t){t.modules.forEach(function(mid){var q=one(mid,t.id);
   if(t.afterObjectives)q.objectiveIds=t.afterObjectives.slice();
   if(t.afterPrompt)q.prompt=t.afterPrompt;
   if(t.afterRoute){q.reviewedRemediationModuleId=t.afterRoute[0];q.reviewedRemediationPageId=t.afterRoute[1];}
  });});
  window[KEY]={ok:true,batch:26,stage:'STAGED_NOT_INSTALLED',uniqueIds:8,totalPlacements:18,remediationPlacements:15,correctedObjectiveIDs:['ALF-M06-V16-Q06','ALF-M07-V16-Q07'],clarifiedPromptIDs:['ALF-M07-V16-Q06'],changedKeys:0,changedChoices:0,changedIDs:0,baseCommit:'ace81fd9e42e35e391c48005647981301287ead7',unresolved:['G10_FIVE_INDUCTIVE_REACTANCE_CLONES','G10_ANSWER_POSITION_IMBALANCE','G11_FULL_EFFECTIVE_SOURCE_RUNTIME']};
 }catch(e){fail(e&&e.message||e);}
})();
/* Alfred University B27 academic QA delta — STAGED ONLY; NEVER UPLOAD.
 production commit ace81fd9e42e35e391c48005647981301287ead7
 course.js blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e
 Requires B26. Guarded 9 distinct IDs / 23 placements. No scoring/answer/key/choices/ID change.
 These local fixture tests do not constitute full production integration (G11 remains open).
*/
(function(){'use strict';
 var KEY='ALFRED_CETA_QA_G05_B27_STATUS';
 if(window[KEY]&&window[KEY].ok===true)return;
 var T=[{"id":"CQ0331","modules":["M08","M29"],"prompt":"Approximately what is the resonant frequency of an ideal LC circuit with L=10 mH and C=0.1 µF?","choices":["5032.9 Hz","10065.8 Hz","2516.5 Hz","31622.8 Hz"],"answer":0,"explanation":"f0 = 1/(2π√(LC)), with L in H and C in F; f0 ≈ 5032.9 Hz. Keep the entire product 2π√(LC) in the denominator.","objectiveIds":["4.8"],"route":null,"action":"route","afterRoute":["M08","L06-0-05"],"afterObjectives":null,"afterExplanation":null},{"id":"CQ0332","modules":["M08","M29"],"prompt":"Approximately what is the resonant frequency of an ideal LC circuit with L=47 mH and C=0.047 µF?","choices":["3386.3 Hz","6772.6 Hz","1693.1 Hz","21276.6 Hz"],"answer":0,"explanation":"f0 = 1/(2π√(LC)), with L in H and C in F; f0 ≈ 3386.3 Hz. Keep the entire product 2π√(LC) in the denominator.","objectiveIds":["4.8"],"route":null,"action":"route","afterRoute":["M08","L06-0-05"],"afterObjectives":null,"afterExplanation":null},{"id":"CQ0333","modules":["M08","M29"],"prompt":"Approximately what is the resonant frequency of an ideal LC circuit with L=1 mH and C=1 µF?","choices":["5032.9 Hz","10065.8 Hz","2516.5 Hz","31622.8 Hz"],"answer":0,"explanation":"f0 = 1/(2π√(LC)), with L in H and C in F; f0 ≈ 5032.9 Hz. Keep the entire product 2π√(LC) in the denominator.","objectiveIds":["4.8"],"route":null,"action":"route","afterRoute":["M08","L06-0-05"],"afterObjectives":null,"afterExplanation":null},{"id":"CQ0334","modules":["M08","M29"],"prompt":"Approximately what is the resonant frequency of an ideal LC circuit with L=100 mH and C=0.01 µF?","choices":["5032.9 Hz","10065.8 Hz","2516.5 Hz","31622.8 Hz"],"answer":0,"explanation":"f0 = 1/(2π√(LC)), with L in H and C in F; f0 ≈ 5032.9 Hz. Keep the entire product 2π√(LC) in the denominator.","objectiveIds":["4.8"],"route":null,"action":"route","afterRoute":["M08","L06-0-05"],"afterObjectives":null,"afterExplanation":null},{"id":"CQ0335","modules":["M08","M29"],"prompt":"Approximately what is the resonant frequency of an ideal LC circuit with L=2.2 mH and C=0.22 µF?","choices":["7234.3 Hz","14468.6 Hz","3617.2 Hz","45454.5 Hz"],"answer":0,"explanation":"f0 = 1/(2π√(LC)), with L in H and C in F; f0 ≈ 7234.3 Hz. Keep the entire product 2π√(LC) in the denominator.","objectiveIds":["4.8"],"route":null,"action":"route","afterRoute":["M08","L06-0-05"],"afterObjectives":null,"afterExplanation":null},{"id":"CQ1056","modules":["M08","M29","M30"],"prompt":"For an ideal capacitor driven by a sinusoidal voltage, how does its current relate to voltage?","choices":["Current leads voltage by 90 degrees.","Current lags voltage by 90 degrees, as for an ideal inductor.","Current and voltage are in phase, as for a resistor.","Current leads voltage by 45 degrees, as in a generic RC network."],"answer":0,"explanation":"For a sinusoid through an ideal capacitor, i=C dv/dt, so current leads the capacitor voltage by 90°. The direction reverses for an ideal inductor; a resistor has zero phase difference.","objectiveIds":["2.10"],"route":null,"action":"route","afterRoute":["M08","L06-0-04"],"afterObjectives":null,"afterExplanation":null},{"id":"CQ1069","modules":["M08","M29","M30"],"prompt":"A first-order RC low-pass filter is used to smooth a signal. Which components of the input are attenuated more strongly?","choices":["Frequencies well above its cutoff","Frequencies well below cutoff, while higher frequencies pass.","Both DC and all AC frequencies by the same factor.","Frequencies exactly at the cutoff only, leaving other frequencies unchanged."],"answer":0,"explanation":"An RC low-pass preferentially passes low frequency and attenuates the output more as frequency rises. Its cutoff is not a hard on/off boundary: a first-order stage is about -3 dB at cutoff.","objectiveIds":["4.13"],"route":null,"action":"route","afterRoute":["M08","L06-0-02"],"afterObjectives":null,"afterExplanation":null},{"id":"CQ1071","modules":["M08","M29","M30"],"prompt":"A series impedance is 3 + j4 Ω. What are its magnitude and type?","choices":["5 Ω and inductive","7 Ω and capacitive","1 Ω and purely resistive","5 Ω and capacitive"],"answer":0,"explanation":"Magnitude is √(3² + 4²) = 5 Ω. Positive imaginary reactance indicates inductive behavior under the usual convention.","objectiveIds":["4.9"],"route":null,"action":"route","afterRoute":["M08","L06-0-01"],"afterObjectives":null,"afterExplanation":null},{"id":"KC06-0","modules":["M08","M09","M10","M26"],"prompt":"Frequency doubles while L stays fixed. What happens to ideal inductive reactance?","choices":["It halves","It stays the same","It doubles","It becomes zero"],"answer":2,"explanation":"Correct. XL = 2πfL, so it changes directly with frequency.","objectiveIds":[],"route":null,"action":"route","afterRoute":["M08","L06-0-00"],"afterObjectives":["2.10"],"afterExplanation":"Because X_L = 2πfL, doubling frequency with inductance fixed doubles ideal inductive reactance. This frequency-dependent opposition is measured in ohms and is not the inductor winding’s DC resistance."}];
 var D=window.ALFRED_CETA_DATA;
 function fail(e){window[KEY]={ok:false,stage:'NOT_INSTALLED',error:String(e)};}
 function eq(a,b){return JSON.stringify(a)===JSON.stringify(b);}
 if(!D||!Array.isArray(D.course)||!window.ALFRED_CETA_QA_G05_B26_STATUS||window.ALFRED_CETA_QA_G05_B26_STATUS.ok!==true){fail('Missing valid B26 prerequisite or course');return;}
 function mod(id){var a=D.course.filter(function(m){return m.id===id;});if(a.length!==1)throw Error('Missing/duplicate module '+id);return a[0];}
 function one(mid,id){var q=mod(mid).questions.filter(function(q){return q.id===id;});if(q.length!==1)throw Error('Missing/duplicate question '+mid+'/'+id);return q[0];}
 try{
  T.forEach(function(t){
   var found=D.course.filter(function(m){return Array.isArray(m.questions)&&m.questions.some(function(q){return q.id===t.id;});}).map(function(m){return m.id;}).sort();
   if(!eq(found,t.modules.slice().sort()))throw Error('Placement drift '+t.id);
   if(t.afterRoute&&!mod(t.afterRoute[0]).pages.some(function(p){return p.id===t.afterRoute[1];}))throw Error('Missing teaching page '+t.id);
   t.modules.forEach(function(mid){var q=one(mid,t.id);
    if(q.prompt!==t.prompt||!eq(q.choices,t.choices)||q.answer!==t.answer||q.explanation!==t.explanation||!eq(q.objectiveIds,t.objectiveIds))throw Error('Question drift '+mid+'/'+t.id);
    if(t.route){if(q.sourceModuleId!==t.route[0]||q.sourcePageId!==t.route[1])throw Error('Source route drift '+mid+'/'+t.id);}
    else if(q.sourceModuleId||q.sourcePageId)throw Error('Unexpected source route '+mid+'/'+t.id);
    if(q.reviewedRemediationModuleId||q.reviewedRemediationPageId)throw Error('Existing remediation route '+mid+'/'+t.id);
   });
  });
  T.forEach(function(t){t.modules.forEach(function(mid){var q=one(mid,t.id);
   if(t.afterRoute){q.reviewedRemediationModuleId=t.afterRoute[0];q.reviewedRemediationPageId=t.afterRoute[1];}
   if(t.afterObjectives)q.objectiveIds=t.afterObjectives.slice();
   if(t.afterExplanation)q.explanation=t.afterExplanation;
  });});
  window[KEY]={ok:true,stage:'STAGED_NOT_INSTALLED',batch:27,uniqueIds:9,totalPlacements:23,remediationPlacements:23,objectivePlacements:4,explanationPlacements:4,changedIDs:0,changedKeys:0,changedChoices:0,baseCommit:'ace81fd9e42e35e391c48005647981301287ead7'};
 }catch(e){fail(e&&e.message||e);}
})();
/* Alfred University B28 independent QA delta — STAGED ONLY, NEVER UPLOAD.
 Production ace81fd9e42e35e391c48005647981301287ead7; course.js blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 Requires B27 passed. 12 unique IDs / 19 placements. Preserves question IDs, choices, answers, and scoring.
 Guard tests are isolated and are not full G11 production integration evidence.
*/
(function(){'use strict';
 var KEY='ALFRED_CETA_QA_G05_B28_STATUS';
 if(window[KEY]&&window[KEY].ok===true)return;
 var T=[{"id":"CQ1057","modules":["M09","M29","M30"],"prompt":"Which energy conversion describes a motor operating normally?","choices":["Electrical energy to mechanical motion","Mechanical motion to electrical energy","Thermal energy directly to stored program code","Resistance to electric charge without an energy source"],"answer":0,"explanation":"A motor produces motion from electrical input; a generator converts mechanical input to electrical output.","objectiveIds":["2.5"],"route":null,"afterRoute":["M09","L07-0-01"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"CQ1062","modules":["M09","M29","M30"],"prompt":"An ideal transformer has 100 primary turns and 50 secondary turns. With 12 V RMS on the primary, what is the secondary voltage?","choices":["6 V RMS","24 V RMS","12 V RMS","0.5 V RMS"],"answer":0,"explanation":"Vs/Vp = Ns/Np = 0.5. This is an ideal AC transformer calculation, not an instruction to work on mains equipment.","objectiveIds":["3.4.1"],"route":null,"afterRoute":["M09","L07-0-11"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"CQ1066","modules":["M09","M29","M30"],"prompt":"A normally-open relay contact is described in which condition?","choices":["The relay's unenergized state","The state after rated coil voltage has operated the relay.","The condition when line voltage is first applied to the contact load.","The state of an arbitrary solid-state output after power is removed."],"answer":0,"explanation":"Normally open or normally closed describes the contact state with the relay in its normal unoperated condition, typically with the coil not energized. Never infer physical wiring from the label alone.","objectiveIds":["3.9.1"],"route":null,"afterRoute":["M09","L07-0-02"],"afterObjectives":null,"afterExplanation":"For a conventional nonlatching electromechanical relay, a normally-open (NO) contact is open in its unoperated, de-energized state and closes when the coil operates the mechanism. Latching relays may retain a position with no coil current; verify the actual contact diagram and relay type.","afterPrompt":"For a conventional nonlatching electromechanical relay, a normally-open contact is described in which condition?"},{"id":"KC07-0","modules":["M09","M11"],"prompt":"What is the main purpose of a flyback diode across a DC relay coil?","choices":["Increase steady coil current","Provide a path for inductive current when switching off and limit the voltage spike","Reverse relay contacts","Raise contact voltage"],"answer":1,"explanation":"Correct. The diode conducts the decaying coil current and clamps the otherwise large reverse voltage.","objectiveIds":[],"route":null,"afterRoute":["M09","L07-1-04"],"afterObjectives":["2.9","3.9.2"],"afterExplanation":"When a DC relay coil is switched off, the inductance tries to maintain current and can generate a damaging voltage transient. A correctly oriented flyback diode provides a decay path and limits the voltage at the switch, but it commonly slows relay release. This rule does not authorize a plain diode across an AC coil.","afterPrompt":null},{"id":"ALF-M09-V16-Q01","modules":["M09"],"prompt":"An ideal transformer has primary turns 120, secondary 60, input 6 Vrms AC. Secondary is approximately:","choices":["12 V","3 V","6 V","0 V"],"answer":1,"explanation":"Vs/Vp=Ns/Np=60/120=0.5.","objectiveIds":["3.4.1"],"route":["M09","L07-0-11"],"afterRoute":["M09","L07-0-11"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M09-V16-Q02","modules":["M09"],"prompt":"Which condition is needed to induce a sustained voltage in a motionless secondary coil?","choices":["A constant DC flux with no relative motion or change.","A continuously energized primary that has reached steady DC state.","Changing flux linking the winding","A shorted secondary with no linked flux change."],"answer":2,"explanation":"Faraday’s law requires time-varying linked flux for sustained induced voltage in a stationary secondary. A DC primary produces only transient induced voltage while its current changes.","objectiveIds":["2.2"],"route":["M09","L07-0-10"],"afterRoute":["M09","L07-0-10"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M09-V16-Q03","modules":["M09"],"prompt":"Which energy conversion applies to a motor?","choices":["Electrical to mechanical","Mechanical to electrical","Heat to memory bit","Sound to temperature"],"answer":0,"explanation":"Motor converts electrical power to mechanical motion; generator reverses that energy flow.","objectiveIds":["2.5"],"route":["M09","L07-0-01"],"afterRoute":["M09","L07-0-01"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M09-V16-Q04","modules":["M09"],"prompt":"A transformer driven with equal RMS voltage but lower than rated frequency may risk:","choices":["A decrease in flux density because each cycle lasts longer.","Unchanged magnetizing current whenever RMS input voltage is fixed.","A lower V/f ratio even though voltage is held constant.","Excess flux and core saturation"],"answer":3,"explanation":"Approximately, core flux swing scales with V/f for comparable sinusoidal conditions. Holding RMS voltage fixed while reducing frequency raises flux demand and may drive the core toward saturation and overheating.","objectiveIds":[],"route":["M09","L07-0-05"],"afterRoute":["M09","L07-0-05"],"afterObjectives":["3.4"],"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M09-V16-Q05","modules":["M09"],"prompt":"A relay has NC contacts. When the coil operates normally those contacts:","choices":["Become permanently welded","Open","Always remain closed","Carry the coil current"],"answer":1,"explanation":"Normally closed contacts open when the relay energizes and actuates.","objectiveIds":["3.9.1"],"route":["M09","L07-0-02"],"afterRoute":["M09","L07-0-02"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M09-V16-Q06","modules":["M09"],"prompt":"A freewheel diode on a DC relay coil typically:","choices":["Requires power in reverse","Removes the need for safe isolation","Limits switch-off voltage but may slow release","Increases coil inductance by 100×"],"answer":2,"explanation":"The clamp provides a current-decay path at relatively low reverse voltage.","objectiveIds":["3.9.2"],"route":["M09","L07-1-04"],"afterRoute":["M09","L07-1-04"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M09-V16-Q07","modules":["M09"],"prompt":"A typical solid-state relay may have what property when its input is off?","choices":["An air gap visible between contacts","Guaranteed zero output current","No heat under any load","Small output leakage current"],"answer":3,"explanation":"Semiconductor output devices have off-state leakage, unlike idealized dry contacts.","objectiveIds":["3.9.3"],"route":["M09","L07-0-08"],"afterRoute":["M09","L07-0-08"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M09-V16-Q08","modules":["M09"],"prompt":"An ideal 2:1 turns transformer with a 20 Ω secondary load reflects what primary load?","choices":["80 Ω","10 Ω","5 Ω","40 Ω"],"answer":0,"explanation":"Zp=(Np/Ns)²Zs=4×20=80 Ω.","objectiveIds":["3.4.1"],"route":["M09","L06-0-01"],"afterRoute":["M09","L06-0-01"],"afterObjectives":null,"afterExplanation":"For an ideal transformer, Z_primary = (N_primary/N_secondary)² × Z_secondary = (2/1)² × 20 Ω = 80 Ω. This is a reflected impedance, not the DC winding resistance; real losses and magnetizing current modify input behavior.","afterPrompt":"An ideal transformer has a primary-to-secondary turns ratio Np:Ns = 2:1. With a 20 Ω secondary load, what impedance is reflected to the primary?"}];
 var D=window.ALFRED_CETA_DATA;
 function fail(e){window[KEY]={ok:false,stage:'NOT_INSTALLED',error:String(e)};}
 function eq(a,b){return JSON.stringify(a)===JSON.stringify(b);}
 if(!D||!Array.isArray(D.course)||!window.ALFRED_CETA_QA_G05_B27_STATUS||window.ALFRED_CETA_QA_G05_B27_STATUS.ok!==true){fail('Missing B27 passed prerequisite or course');return;}
 function mod(id){var a=D.course.filter(function(m){return m.id===id;});if(a.length!==1)throw Error('Missing/duplicate module '+id);return a[0];}
 function one(mid,id){var q=mod(mid).questions.filter(function(q){return q.id===id;});if(q.length!==1)throw Error('Missing/duplicate question '+mid+'/'+id);return q[0];}
 try{
  T.forEach(function(t){
   var found=D.course.filter(function(m){return Array.isArray(m.questions)&&m.questions.some(function(q){return q.id===t.id;});}).map(function(m){return m.id;}).sort();
   if(!eq(found,t.modules.slice().sort()))throw Error('Placement drift '+t.id);
   if(!mod(t.afterRoute[0]).pages.some(function(p){return p.id===t.afterRoute[1];}))throw Error('Missing teaching page '+t.id);
   t.modules.forEach(function(mid){var q=one(mid,t.id);
    if(q.prompt!==t.prompt||!eq(q.choices,t.choices)||q.answer!==t.answer||q.explanation!==t.explanation||!eq(q.objectiveIds,t.objectiveIds))throw Error('Question drift '+mid+'/'+t.id);
    if(t.route){if(q.sourceModuleId!==t.route[0]||q.sourcePageId!==t.route[1])throw Error('Source route drift '+mid+'/'+t.id);}
    else if(q.sourceModuleId||q.sourcePageId)throw Error('Unexpected source route '+mid+'/'+t.id);
    if(q.reviewedRemediationModuleId||q.reviewedRemediationPageId)throw Error('Existing remediation route '+mid+'/'+t.id);
   });
  });
  T.forEach(function(t){t.modules.forEach(function(mid){var q=one(mid,t.id);
   q.reviewedRemediationModuleId=t.afterRoute[0];q.reviewedRemediationPageId=t.afterRoute[1];
   if(t.afterObjectives)q.objectiveIds=t.afterObjectives.slice();
   if(t.afterExplanation)q.explanation=t.afterExplanation;
   if(t.afterPrompt)q.prompt=t.afterPrompt;
  });});
  window[KEY]={ok:true,stage:'STAGED_NOT_INSTALLED',batch:28,uniqueIds:12,totalPlacements:19,remediationPlacements:19,objectivePlacements:3,explanationPlacements:6,promptPlacements:4,changedIDs:0,changedKeys:0,changedChoices:0,baseCommit:'ace81fd9e42e35e391c48005647981301287ead7'};
 }catch(e){fail(e&&e.message||e);}
})();

/* Alfred University B29 independent QA delta — STAGED ONLY, NEVER UPLOAD.
 Production main ace81fd9e42e35e391c48005647981301287ead7; course.js blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 Requires B28 passed. Guards all 18 IDs / 28 placements before any write. No key, choice, ID, or scoring changes.
 Local exact-record fixture tests are NOT G11 full production integration.
*/
(function(){'use strict';
var KEY='ALFRED_CETA_QA_G05_B29_STATUS';if(window[KEY]&&window[KEY].ok===true)return;
var T=[{"id":"CQ1072","modules":["M10","M29","M30"],"prompt":"Which block in a basic PLL adjusts oscillator control from a comparison with a reference signal?","choices":["Phase detector with its loop filter","Fuse holder","Bridge rectifier alone","Audio speaker"],"answer":0,"explanation":"A PLL compares phase, filters the error, and controls an oscillator to follow the reference relationship.","objectiveIds":["4.12"],"route":null,"priorRemediation":null,"afterRoute":["M10","L11-0-05"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"KC04-0","modules":["M10"],"prompt":"A zero-offset sine wave is 8 V peak-to-peak. What is its peak value?","choices":["2 V","4 V","5.66 V","8 V"],"answer":1,"explanation":"Correct. Peak-to-peak spans both positive and negative peaks, so Vpk = Vpp/2 = 4 V.","objectiveIds":[],"route":null,"priorRemediation":null,"afterRoute":["M06","L04-0-08"],"afterObjectives":["2.12.1"],"afterExplanation":"For a zero-offset symmetric sine wave, peak-to-peak voltage runs from the negative crest to the positive crest, so Vpeak = Vpp/2 = 8 V/2 = 4 V. This is not the RMS value; Vrms would be 4/√2 ≈ 2.83 V.","afterPrompt":null},{"id":"KC10-0","modules":["M10","M12","M14"],"prompt":"A voltage gain of 10 corresponds to approximately what dB value?","choices":["3 dB","10 dB","20 dB","100 dB"],"answer":2,"explanation":"Use the voltage-gain definition 20 log10(Vout/Vin). A factor of 10 produces 20 dB; 10 dB would correspond to a power ratio of ten or a smaller voltage ratio, not this stated voltage transfer.","objectiveIds":[],"route":null,"priorRemediation":null,"afterRoute":["M08","L04-0-00"],"afterObjectives":["9.6"],"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M10-V16-Q01","modules":["M10"],"prompt":"An oscillator generates repeated electrical changes from a steady supply. What must provide its energy?","choices":["Only the crystal lattice forever","The powered sustaining circuit","No electrical source","An oscilloscope probe"],"answer":1,"explanation":"Real oscillators need powered gain/feedback to replenish losses.","objectiveIds":["4.5"],"route":["M10","L04-0-00"],"priorRemediation":null,"afterRoute":["M10","L04-0-00"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M10-V16-Q02","modules":["M10"],"prompt":"A timing RC uses 100 kΩ and 10 µF. What is τ?","choices":["0.001 s","10 s","1 s","1000 s"],"answer":2,"explanation":"100000×10×10^-6=1 s.","objectiveIds":["4.14"],"route":["M10","L04-0-01"],"priorRemediation":null,"afterRoute":["M10","L04-0-01"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M10-V16-Q03","modules":["M10"],"prompt":"For ideal LC resonance, increasing capacitance by a factor of four changes frequency by:","choices":["Half","Double","Fourfold","Unchanged"],"answer":0,"explanation":"f0∝1/√C; √4=2.","objectiveIds":["4.5"],"route":["M10","L04-0-02"],"priorRemediation":null,"afterRoute":["M10","L04-0-02"],"afterObjectives":["4.5","4.8"],"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M10-V16-Q04","modules":["M10"],"prompt":"A pulse period is 2 ms and high time is 0.5 ms. Duty cycle:","choices":["50%","75%","10%","25%"],"answer":3,"explanation":"D=0.5/2=25%.","objectiveIds":["4.14"],"route":["M10","L04-0-08"],"priorRemediation":null,"afterRoute":["M10","L04-0-08"],"afterObjectives":["4.14","2.12.2"],"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M10-V16-Q05","modules":["M10"],"prompt":"An ideal differentiator is fed a steady constant input. Its output is approximately:","choices":["Constant ramp","Zero after transition","An alternating sine wave","Infinite steady voltage"],"answer":1,"explanation":"A derivative of a constant is zero; practical circuits may have offsets.","objectiveIds":["4.11"],"route":["M10","L06-0-03"],"priorRemediation":null,"afterRoute":["M10","L06-0-03"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M10-V16-Q06","modules":["M10"],"prompt":"Which functional blocks are essential in a basic PLL?","choices":["Battery, fuse and transformer","Bridge, resistor and LED only","Phase detector, loop filter, voltage-controlled oscillator","Motor, relay and switch"],"answer":2,"explanation":"These blocks compare a reference, filter error and adjust local oscillator frequency.","objectiveIds":["4.12"],"route":["M10","L11-0-05"],"priorRemediation":null,"afterRoute":["M10","L11-0-05"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M10-V16-Q07","modules":["M10"],"prompt":"Why is a quartz crystal not a complete clock generator by itself?","choices":["Its resonance requires a powered sustaining circuit","It must be heated to 1000 C","It is a battery","It cannot be piezoelectric"],"answer":0,"explanation":"Piezoelectric resonator plus active oscillator circuit creates sustained clock output.","objectiveIds":["4.16"],"route":["M10","L11-0-06"],"priorRemediation":null,"afterRoute":["M10","L11-0-06"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M10-V16-Q08","modules":["M10"],"prompt":"Which multivibrator makes one timed output pulse after a trigger?","choices":["Astable","Bistable latch","Simple transformer","Monostable"],"answer":3,"explanation":"Monostable circuits return to their one resting state after timed interval.","objectiveIds":["4.6"],"route":["M10","L11-0-09"],"priorRemediation":null,"afterRoute":["M10","L11-0-09"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"CQ1063","modules":["M11","M29","M30"],"prompt":"A Zener diode used as a shunt reference is normally operated in which region?","choices":["Controlled reverse breakdown with current limiting","Forward conduction with no current limit","Reverse bias below breakdown with zero reference current","An open circuit created by overheating"],"answer":0,"explanation":"A Zener is designed for specified reverse breakdown operation. Its current and power limits must still be respected.","objectiveIds":["3.7.3"],"route":null,"priorRemediation":null,"afterRoute":["M11","L08-0-05"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"CQ1065","modules":["M11","M29","M30"],"prompt":"Which device can remain conducting after a gate pulse until its anode current falls below holding current?","choices":["SCR","Ordinary resistor","Nonpolar capacitor","Thermistor"],"answer":0,"explanation":"An SCR can latch on. Removing its gate pulse alone does not necessarily turn it off.","objectiveIds":["3.6.1"],"route":null,"priorRemediation":null,"afterRoute":["M11","L08-0-02"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"KC08-0","modules":["M11","M12"],"prompt":"Why is VGS(th) not enough to prove a MOSFET is fully on?","choices":["It is a reverse-voltage rating","It is measured at the onset of small conduction, not the guaranteed low RDS(on) load condition","It applies only to BJTs","It specifies maximum gate current"],"answer":1,"explanation":"Correct. Use RDS(on) guaranteed at the actual gate voltage and relevant current/temperature.","objectiveIds":[],"route":null,"priorRemediation":null,"afterRoute":["M12","L08-0-02"],"afterObjectives":["3.5.1","3.5.2"],"afterExplanation":"The MOSFET gate-to-source threshold voltage VGS(th) is defined at a small specified test current and is not a guarantee of low on-resistance at working load. Check the RDS(on) specification at the actual VGS, load current and temperature; the source is the VGS reference. The main MOSFET teaching is in Module 12, after this Module 11 question.","afterPrompt":null},{"id":"KC08-1","modules":["M11","M12"],"prompt":"For a low-side MOSFET, which voltage determines gate enhancement?","choices":["Gate to earth","Gate to drain","Gate to source","Drain to ground only"],"answer":2,"explanation":"Correct. MOSFET control is VGS, so the source reference must be known.","objectiveIds":[],"route":null,"priorRemediation":null,"afterRoute":["M12","L08-0-02"],"afterObjectives":["3.5.2"],"afterExplanation":"MOSFET channel enhancement depends primarily on the gate-to-source potential VGS, not the gate voltage relative to an arbitrary earth reference. Identify the source terminal and calculate VGS=VG−VS. The primary teaching is in Module 12; placing this scored question in Module 11 remains a sequencing issue.","afterPrompt":null},{"id":"ALF-M11-V17-Q01","modules":["M11"],"prompt":"A 5 V source powers a nominal 2 V LED at 10 mA. Which ideal resistor estimate is closest?","choices":["30 Ω","300 Ω","700 Ω","3 kΩ"],"answer":1,"explanation":"R=(5−2)/0.010=300 Ω, subject to LED tolerance and power limits.","objectiveIds":["3.7.1"],"route":["M11","L08-0-05"],"priorRemediation":null,"afterRoute":["M11","L08-0-01"],"afterObjectives":["3.7.1","2.13"],"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M11-V17-Q02","modules":["M11"],"prompt":"Which is an appropriate explanation of a diode depletion region?","choices":["It is a layer of solder","It is created by diffusing carriers leaving fixed ions","It contains no electrical field","It makes current equal both ways"],"answer":1,"explanation":"Diffusion/recombination leaves fixed dopant ions and a field opposing further diffusion.","objectiveIds":["3.7"],"route":["M11","L08-0-03"],"priorRemediation":null,"afterRoute":["M11","L08-0-03"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M11-V17-Q03","modules":["M11"],"prompt":"An isolated 6 Vrms sine feeds a bridge; what is the ideal input peak before diode drops?","choices":["6.0 V","4.2 V","12 V","8.5 V"],"answer":3,"explanation":"6×√2≈8.49 V. Two conducting diodes reduce loaded output peak further.","objectiveIds":["2.12.1"],"route":["M11","L08-0-00"],"priorRemediation":null,"afterRoute":["M11","L08-0-00"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null}];
var D=window.ALFRED_CETA_DATA;
function fail(e){window[KEY]={ok:false,stage:'NOT_INSTALLED',error:String(e)};}
function eq(a,b){return JSON.stringify(a)===JSON.stringify(b);}
if(!D||!Array.isArray(D.course)||!window.ALFRED_CETA_QA_G05_B28_STATUS||window.ALFRED_CETA_QA_G05_B28_STATUS.ok!==true){fail('Missing B28 passed prerequisite or course');return;}
function mod(id){var a=D.course.filter(function(m){return m.id===id;});if(a.length!==1)throw Error('Missing/duplicate module '+id);return a[0];}
function one(mid,id){var q=mod(mid).questions.filter(function(q){return q.id===id;});if(q.length!==1)throw Error('Missing/duplicate question '+mid+'/'+id);return q[0];}
try{
 T.forEach(function(t){
  var found=D.course.filter(function(m){return Array.isArray(m.questions)&&m.questions.some(function(q){return q.id===t.id;});}).map(function(m){return m.id;}).sort();
  if(!eq(found,t.modules.slice().sort()))throw Error('Placement drift '+t.id);
  if(!mod(t.afterRoute[0]).pages.some(function(p){return p.id===t.afterRoute[1];}))throw Error('Missing teaching page '+t.id);
  t.modules.forEach(function(mid){var q=one(mid,t.id);
   if(q.prompt!==t.prompt||!eq(q.choices,t.choices)||q.answer!==t.answer||q.explanation!==t.explanation||!eq(q.objectiveIds,t.objectiveIds))throw Error('Question drift '+mid+'/'+t.id);
   if(t.route){if(q.sourceModuleId!==t.route[0]||q.sourcePageId!==t.route[1])throw Error('Source route drift '+mid+'/'+t.id);}
   else if(q.sourceModuleId||q.sourcePageId)throw Error('Unexpected source route '+mid+'/'+t.id);
   if(t.priorRemediation){if(q.reviewedRemediationModuleId!==t.priorRemediation[0]||q.reviewedRemediationPageId!==t.priorRemediation[1])throw Error('Remediation route drift '+mid+'/'+t.id);}
   else if(q.reviewedRemediationModuleId||q.reviewedRemediationPageId)throw Error('Existing remediation route '+mid+'/'+t.id);
  });
 });
 T.forEach(function(t){t.modules.forEach(function(mid){var q=one(mid,t.id);
  q.reviewedRemediationModuleId=t.afterRoute[0];q.reviewedRemediationPageId=t.afterRoute[1];
  if(t.afterObjectives)q.objectiveIds=t.afterObjectives.slice();
  if(t.afterExplanation)q.explanation=t.afterExplanation;
  if(t.afterPrompt)q.prompt=t.afterPrompt;
 });});
 window[KEY]={ok:true,stage:'STAGED_NOT_INSTALLED',batch:29,uniqueIds:18,totalPlacements:28,changedIDs:0,changedKeys:0,changedChoices:0,baseCommit:'ace81fd9e42e35e391c48005647981301287ead7'};
}catch(e){fail(e&&e.message||e);}
})();

/* Alfred University B30 independent QA delta — STAGED ONLY, NEVER UPLOAD.
 Production main ace81fd9e42e35e391c48005647981301287ead7; course.js blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 Requires B29 passed. Guards all 12 IDs / 14 placements before any write. No ID, key, choice or scoring changes.
 Fixture regression is NOT G11 full production integration.
*/
(function(){'use strict';
var KEY='ALFRED_CETA_QA_G05_B30_STATUS';if(window[KEY]&&window[KEY].ok===true)return;
var T=[{"id":"ALF-M11-V17-Q04","modules":["M11"],"prompt":"12 V feeds a 5.1 V Zener with a 330 Ω series resistor and no load. Approximate current?","choices":["20.9 mA","2.09 A","5.1 mA","36 mA"],"answer":0,"explanation":"(12−5.1)/330=0.0209 A; dissipation and current ratings still apply.","objectiveIds":["3.7.3"],"route":["M11","L08-0-05"],"priorRemediation":null,"afterRoute":["M11","L08-0-05"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M11-V17-Q05","modules":["M11"],"prompt":"An SCR carries anode current above holding current. Gate drive is removed. What happens normally?","choices":["It always turns off","It may stay conducting","It becomes a Zener","Its gate becomes a fuse"],"answer":1,"explanation":"Gate removal does not usually unlatch an SCR until anode current falls appropriately.","objectiveIds":["3.6.1"],"route":["M11","L08-0-02"],"priorRemediation":null,"afterRoute":["M11","L08-0-02"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M11-V17-Q06","modules":["M11"],"prompt":"Why can a PN diode fail in a fast switching path even though it passes static diode test?","choices":["Reverse recovery loss","Zero current","Silicon becomes a resistor symbol","It cannot have capacitance"],"answer":0,"explanation":"Dynamic recovery, junction capacitance and switching losses can dominate.","objectiveIds":["3.7.1"],"route":["M11","L07-0-06"],"priorRemediation":null,"afterRoute":["M11","L07-0-06"],"afterObjectives":null,"afterExplanation":"A static diode test checks low-current forward/reverse junction behavior but cannot characterize switching speed. Reverse recovery briefly permits reverse current while stored minority-carrier charge clears. In a fast switching circuit this can cause loss, heat and timing faults even if a steady-state diode test appears normal. Also check junction capacitance, rated reverse voltage and manufacturer switching specifications; the intended answer is reverse recovery loss.","afterPrompt":null},{"id":"ALF-M11-V17-Q07","modules":["M11"],"prompt":"A diode marked 40 V maximum reverse rating must block 35 V plus unknown spikes. Best next step?","choices":["Use it without checking","Short it for testing","Evaluate transient and rating margin","Increase the input immediately"],"answer":2,"explanation":"Determine expected surges and derate from the actual absolute max as necessary.","objectiveIds":["3.7.1"],"route":["M11","L08-1-01"],"priorRemediation":null,"afterRoute":["M11","L08-1-01"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"CQ1064","modules":["M12","M29","M30"],"prompt":"In a BJT's forward-active region, beta is approximately which ratio?","choices":["Collector current divided by base current","Base voltage divided by collector voltage","Emitter voltage divided by resistance","Base current divided by collector current"],"answer":0,"explanation":"Beta is a current gain under specified conditions. It varies with device and operating point and is not a fixed switch guarantee.","objectiveIds":["3.5.3"],"route":null,"priorRemediation":null,"afterRoute":["M12","L08-0-04"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M12-V17-Q01","modules":["M12"],"prompt":"Low-side NPN switch draws 60 mA at forced beta 10. Approximate base-current target?","choices":["0.6 mA","6 mA","60 mA","600 mA"],"answer":1,"explanation":"60/10=6 mA; driver and transistor ratings matter.","objectiveIds":["3.5"],"route":["M12","L08-0-01"],"priorRemediation":null,"afterRoute":["M12","L08-0-01"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M12-V17-Q02","modules":["M12"],"prompt":"Why is a specified active-region beta unsuitable alone to guarantee saturation?","choices":["Current never changes","Base resistance is zero","Beta varies with current, temperature and region","Collector power is the base current"],"answer":2,"explanation":"Forced beta and rated saturation conditions must be verified.","objectiveIds":["3.5.3"],"route":["M12","L08-0-04"],"priorRemediation":null,"afterRoute":["M12","L08-0-04"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M12-V17-Q03","modules":["M12"],"prompt":"A MOSFET has VGS(th) max 2 V. What proves it can switch 2 A at 3.3 V drive?","choices":["Threshold alone","RDS(on) guaranteed at appropriate drive and current, thermal limits","Package color","Pin count alone"],"answer":1,"explanation":"Threshold indicates low-current onset, not low-resistance operation.","objectiveIds":["3.5.2"],"route":["M12","L08-0-02"],"priorRemediation":null,"afterRoute":["M12","L08-0-02"],"afterObjectives":null,"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M12-V17-Q04","modules":["M12"],"prompt":"MOSFET current doubles with constant on-resistance. Approximate resistive loss becomes:","choices":["Two times","Unchanged","Four times","Half"],"answer":2,"explanation":"I²R quadruples with doubled I.","objectiveIds":[],"route":["M12","L08-1-00"],"priorRemediation":null,"afterRoute":["M12","L08-1-00"],"afterObjectives":["3.5.1"],"afterExplanation":"Conduction loss for a MOSFET operating at a specified on-resistance is approximately P = I² × RDS(on). Doubling current while holding RDS(on) constant gives (2I)²R = 4I²R, so resistive loss quadruples. In real hardware RDS(on) can also change with junction temperature and gate drive; check device thermal limits.","afterPrompt":null},{"id":"ALF-M12-V17-Q05","modules":["M12"],"prompt":"Which can normally conduct at zero gate bias?","choices":["An enhancement-mode MOSFET with VGS well below threshold.","A conventional silicon PN diode without forward bias.","Typical JFET","An SCR that has never received triggering current or breakover conditions."],"answer":2,"explanation":"A typical depletion-mode JFET conducts with gate-source voltage near zero; a suitable reverse gate bias reduces current. Enhancement MOSFETs are ordinarily off below threshold.","objectiveIds":["3.5.1"],"route":["M12","L08-0-05"],"priorRemediation":null,"afterRoute":["M12","L08-1-04"],"afterObjectives":["3.5.1","3.5.3"],"afterExplanation":null,"afterPrompt":null},{"id":"ALF-M12-V17-Q06","modules":["M12"],"prompt":"Device dissipates 4 W at the operating point. What additional rating is essential?","choices":["Printing color","Thermal/SOA limits and duration","A 2 A current label alone","Number of letters in part code"],"answer":1,"explanation":"Power, junction temperature and safe operating area constrain operation.","objectiveIds":["3.8"],"route":["M12","L10-0-03"],"priorRemediation":null,"afterRoute":["M12","L10-0-03"],"afterObjectives":["3.5"],"afterExplanation":"Four watts of semiconductor dissipation cannot be judged from a current rating alone. Check junction-temperature and thermal-resistance limits, heatsinking, transient duration, and the datasheet safe-operating-area curve at the actual voltage and current. This transistor/device selection issue belongs to ETA competency 3.5, not 3.8 (integrated-circuit components and pin-outs).","afterPrompt":null},{"id":"ALF-M12-V17-Q07","modules":["M12"],"prompt":"A MOSFET low-side switch has 0 V VGS while commanded on. What should you investigate first?","choices":["Gate drive and reference","Random resistor substitution","The oscilloscope bezel","Whether the device has four pins"],"answer":0,"explanation":"VGS is the control variable; verify drive before condemning the transistor.","objectiveIds":["3.5.2"],"route":["M12","L10-0-06"],"priorRemediation":null,"afterRoute":["M12","L10-0-05"],"afterObjectives":null,"afterExplanation":"With VGS = VG − VS = 0 V for an enhancement-mode low-side MOSFET, commanded ON, first verify gate drive, the source reference and permissible measurement setup. A missing or incorrectly referenced gate command can explain the symptom without a failed device. Use the troubleshooting lesson M12/L10-0-05; the inherited source-page anchor L10-0-06 addresses Darlington, IGBT and CMOS context, not this initial diagnostic step.","afterPrompt":null}];
var D=window.ALFRED_CETA_DATA;
function fail(e){window[KEY]={ok:false,stage:'NOT_INSTALLED',error:String(e)};}
function eq(a,b){return JSON.stringify(a)===JSON.stringify(b);}
if(!D||!Array.isArray(D.course)||!window.ALFRED_CETA_QA_G05_B29_STATUS||window.ALFRED_CETA_QA_G05_B29_STATUS.ok!==true){fail('Missing B29 passed prerequisite or course');return;}
function mod(id){var a=D.course.filter(function(m){return m.id===id;});if(a.length!==1)throw Error('Missing/duplicate module '+id);return a[0];}
function one(mid,id){var q=mod(mid).questions.filter(function(q){return q.id===id;});if(q.length!==1)throw Error('Missing/duplicate question '+mid+'/'+id);return q[0];}
try{
 T.forEach(function(t){
  var found=D.course.filter(function(m){return Array.isArray(m.questions)&&m.questions.some(function(q){return q.id===t.id;});}).map(function(m){return m.id;}).sort();
  if(!eq(found,t.modules.slice().sort()))throw Error('Placement drift '+t.id);
  if(!mod(t.afterRoute[0]).pages.some(function(p){return p.id===t.afterRoute[1];}))throw Error('Missing teaching page '+t.id);
  t.modules.forEach(function(mid){var q=one(mid,t.id);
   if(q.prompt!==t.prompt||!eq(q.choices,t.choices)||q.answer!==t.answer||q.explanation!==t.explanation||!eq(q.objectiveIds,t.objectiveIds))throw Error('Question drift '+mid+'/'+t.id);
   if(t.route){if(q.sourceModuleId!==t.route[0]||q.sourcePageId!==t.route[1])throw Error('Source route drift '+mid+'/'+t.id);}
   else if(q.sourceModuleId||q.sourcePageId)throw Error('Unexpected source route '+mid+'/'+t.id);
   if(t.priorRemediation){if(q.reviewedRemediationModuleId!==t.priorRemediation[0]||q.reviewedRemediationPageId!==t.priorRemediation[1])throw Error('Remediation route drift '+mid+'/'+t.id);}
   else if(q.reviewedRemediationModuleId||q.reviewedRemediationPageId)throw Error('Existing remediation route '+mid+'/'+t.id);
  });
 });
 T.forEach(function(t){t.modules.forEach(function(mid){var q=one(mid,t.id);
  q.reviewedRemediationModuleId=t.afterRoute[0];q.reviewedRemediationPageId=t.afterRoute[1];
  if(t.afterObjectives)q.objectiveIds=t.afterObjectives.slice();
  if(t.afterExplanation)q.explanation=t.afterExplanation;
  if(t.afterPrompt)q.prompt=t.afterPrompt;
 });});
 window[KEY]={ok:true,stage:'STAGED_NOT_INSTALLED',batch:30,uniqueIds:12,totalPlacements:14,changedIDs:0,changedKeys:0,changedChoices:0,baseCommit:'ace81fd9e42e35e391c48005647981301287ead7'};
}catch(e){fail(e&&e.message||e);}
})();


/* Alfred University B31 independent academic QA delta — STAGED ONLY, NOT FOR UPLOAD.
 Production baseline ace81fd9e42e35e391c48005647981301287ead7; course.js fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 All 15 exact question-ID/choice/key/explanation/objective/location guards must pass before any write. Requires B30 success.
 Fixture regression is not complete G11 installed effective-source integration.
*/
(function(){'use strict';
var KEY='ALFRED_CETA_QA_G05_B31_STATUS'; if(window[KEY]&&window[KEY].ok===true)return;
var T=[{"id":"CQ1099","modules":["M13","M30"],"prompt":"A full-wave rectifier is fed by 60 Hz AC. Before smoothing, how often do its output peaks repeat?","choices":["120 times per second","30 times per second","60 times per second","600 times per second"],"answer":0,"explanation":"Full-wave rectification uses both half-cycles, doubling the ripple frequency.","objectiveIds":["10.10"],"source":null,"priorRemediation":null,"afterRoute":["M13","L09-1-04"],"afterObjectives":null,"afterExplanation":null},{"id":"CQ1100","modules":["M13","M30"],"prompt":"In a basic rectifier supply, what does a reservoir capacitor do between charging peaks?","choices":["Supplies load current while its voltage falls","Converts rectified pulses into a constant current without voltage ripple.","Raises the AC mains frequency before rectification.","Guarantees a fixed regulated voltage regardless of load or supply."],"answer":0,"explanation":"The capacitor charges near rectifier peaks and supplies the load between peaks, allowing its voltage to droop. Ripple depends on load current, capacitance and charging frequency; a reservoir alone is not a voltage regulator.","objectiveIds":["10.4"],"source":null,"priorRemediation":null,"afterRoute":["M13","L08-0-00"],"afterObjectives":null,"afterExplanation":null},{"id":"CQ1102","modules":["M13","M30"],"prompt":"Which description best matches a switch-mode power supply?","choices":["It switches a power device and transfers energy through reactive components.","Linear pass-device control without high-frequency switching or magnetic energy transfer.","An unregulated diode-capacitor rectifier with no switching control.","A fixed resistor divider that sets the load voltage independent of load current."],"answer":0,"explanation":"An SMPS periodically switches a power device and uses capacitors/inductors or transformer energy transfer. Feedback and filtering shape regulation; switching ripple and EMI require management.","objectiveIds":["10.11"],"source":null,"priorRemediation":null,"afterRoute":["M13","L09-0-02"],"afterObjectives":null,"afterExplanation":null},{"id":"KC09-0","modules":["M13"],"prompt":"A linear regulator drops 12 V to 5 V at 0.20 A. About how much power does it dissipate?","choices":["0.2 W","1.0 W","1.4 W","2.4 W"],"answer":2,"explanation":"Correct. (12−5) V × 0.20 A = 1.4 W, which requires thermal evaluation.","objectiveIds":[],"source":null,"priorRemediation":null,"afterRoute":["M13","L09-0-06"],"afterObjectives":["10.5"],"afterExplanation":"For an ideal series linear regulator with input 12 V, output 5 V, and load current 0.20 A, power lost as heat is approximately (Vin − Vout) × Iload = 7 V × 0.20 A = 1.4 W, ignoring quiescent current. This may produce substantial junction-temperature rise; assess the actual package, PCB and thermal limits. The relevant power-supply regulation topic is ETA 10.5."},{"id":"ALF-M13-V17-Q01","modules":["M13"],"prompt":"An isolated 9 Vrms sine has approximate ideal peak voltage of:","choices":["6.4 V","9.0 V","12.7 V","18.0 V"],"answer":2,"explanation":"9×√2≈12.73 V.","objectiveIds":["2.12.1"],"source":["M13","L09-0-05"],"priorRemediation":null,"afterRoute":["M13","L09-0-05"],"afterObjectives":null,"afterExplanation":null},{"id":"ALF-M13-V17-Q02","modules":["M13"],"prompt":"With 60 Hz AC feeding a full-wave bridge, dominant nominal ripple frequency before regulation is:","choices":["30 Hz","60 Hz","120 Hz","240 Hz"],"answer":2,"explanation":"Full-wave rectification charges the filter twice per 60 Hz cycle.","objectiveIds":["10.10"],"source":["M13","L09-1-04"],"priorRemediation":null,"afterRoute":["M13","L09-1-04"],"afterObjectives":null,"afterExplanation":null},{"id":"ALF-M13-V17-Q03","modules":["M13"],"prompt":"For 0.1 A load, 120 Hz ripple and 1000 µF capacitor, approximate ΔV?","choices":["0.083 V","0.83 V","8.3 V","83 V"],"answer":1,"explanation":"0.1/(120×0.001)≈0.83 V in a simple approximation.","objectiveIds":["10.4"],"source":["M13","L08-0-00"],"priorRemediation":null,"afterRoute":["M13","L08-0-00"],"afterObjectives":null,"afterExplanation":"For a reservoir capacitor between replenishment peaks, approximate peak-to-peak ripple ΔV≈Iload/(f_ripple C), assuming approximately constant load current, relatively small ripple and brief recharge intervals. C=1000 µF=0.001 F, so ΔV≈0.1 A/(120 s⁻¹×0.001 F)=0.833 V peak-to-peak. Real diode conduction, ESR, loading and line conditions can alter the measured ripple."},{"id":"ALF-M13-V17-Q04","modules":["M13"],"prompt":"A linear regulator converts 12 V to 5 V at 0.2 A. Its approximate heat loss is:","choices":["0.2 W","1.4 W","7 W","17 W"],"answer":1,"explanation":"(12−5)×0.2=1.4 W excluding small quiescent current.","objectiveIds":[],"source":["M13","L08-0-02"],"priorRemediation":null,"afterRoute":["M13","L09-0-06"],"afterObjectives":["10.5"],"afterExplanation":null},{"id":"ALF-M13-V17-Q05","modules":["M13"],"prompt":"Ideal buck with 12 V input and D=0.25 predicts output of:","choices":["48 V","9 V","3 V","0.25 V"],"answer":2,"explanation":"Vout≈D×Vin=3 V in ideal continuous conduction.","objectiveIds":["10.11"],"source":["M13","L09-0-02"],"priorRemediation":null,"afterRoute":["M13","L09-0-02"],"afterObjectives":null,"afterExplanation":null},{"id":"ALF-M13-V17-Q06","modules":["M13"],"prompt":"Which makes a DMM 5 V reading insufficient to accept a supply?","choices":["Capacitors exist","Ripple and transient behavior may be poor","A regulator always eliminates ripple","Voltages cannot vary"],"answer":1,"explanation":"DC averages can conceal ripple, spikes and startup problems.","objectiveIds":[],"source":["M13","L09-0-03"],"priorRemediation":null,"afterRoute":["M13","L09-0-03"],"afterObjectives":["8.12","10.5"],"afterExplanation":"A DMM reading 5 V may report nominal DC while missing fast ripple, spikes, startup transients or momentary droop under changing load. Acceptance also requires measurements under defined load and instrument bandwidth conditions, generally including a properly referenced oscilloscope in an appropriately safe low-voltage setup. A nominal DC value alone is not evidence of good ripple suppression or dynamic regulation."},{"id":"ALF-M13-V17-Q07","modules":["M13"],"prompt":"Regulator dissipates 1.4 W with 50 °C/W θJA in specified setup. Approximate junction rise?","choices":["7 °C","14 °C","28 °C","70 °C"],"answer":3,"explanation":"1.4×50=70 °C; thermal assumptions must match physical setup.","objectiveIds":[],"source":["M13","L09-0-06"],"priorRemediation":null,"afterRoute":["M13","L09-0-06"],"afterObjectives":["10.5"],"afterExplanation":"Under the stated operating/setup conditions, approximate junction-to-ambient rise ΔTj=P_loss×θJA=1.4 W×50 °C/W=70 °C above ambient. The absolute junction temperature is ambient plus this rise, and actual θJA depends on board layout, airflow and enclosure; verify the manufacturer limits."},{"id":"AV44-10-4-3","modules":["M13"],"prompt":"On a low-voltage DC supply schematic, the filtering section has a shunt capacitor to return, followed by a series choke, followed by another shunt capacitor to return. What is this network?","choices":["A simple L-section with one capacitor","A T-section with two series inductors","A bridge rectifier","A pi (C-L-C) filter"],"answer":3,"explanation":"A C-L-C network has two shunt capacitors separated by one series inductor, so its topology resembles the Greek letter pi. An L-section uses one series/shunt pair, while a T-section can use two series elements separated by a shunt element.","objectiveIds":["10.4.3"],"source":null,"priorRemediation":["M13","L09-0-05"],"afterRoute":["M13","L08-0-00"],"afterObjectives":null,"afterExplanation":null},{"id":"AV44-10-6","modules":["M13"],"prompt":"An older CRT receiver uses an integrated high-voltage transformer (IHVT or flyback assembly). What principally distinguishes its high-voltage supply from a simple direct low-voltage DC supply?","choices":["A switching/deflection pulse drives a transformer assembly that develops the CRT high voltage and may include rectification or focus networks","Its transformer removes every stored-energy hazard as soon as AC power is disconnected","It has no magnetic components and needs no high-voltage insulation","A resistive divider steps up steady DC without switching"],"answer":0,"explanation":"In CRT equipment, the flyback/IHVT uses switching pulses from the horizontal output system and transformer action to create a high-voltage output. Assemblies may integrate rectifiers and divider/focus components. Dangerous stored charge can persist when powered off.","objectiveIds":["10.6"],"source":null,"priorRemediation":["M13","L09-0-01"],"afterRoute":["M13","L09-0-02"],"afterObjectives":null,"afterExplanation":null},{"id":"AV44-10-8","modules":["M13"],"prompt":"A line-powered instrument repeatedly opens its specified time-delay fuse. Which response is technically and safely justified?","choices":["Bypass the fuse while measuring normal load current","Identify the root fault and replace only with the manufacturer-approved type, voltage rating, interrupting rating and time-current characteristic","Replace it with a wire of similar diameter","Install a higher current-rated fuse so normal operation is restored"],"answer":1,"explanation":"Repeated fuse operation can indicate overload, short or an incorrect part. Current rating alone is not enough: voltage, interrupting capacity, AC/DC suitability and time-current type must also agree with the equipment design. Household panel work is for qualified personnel, not an exam practice task.","objectiveIds":["10.8"],"source":null,"priorRemediation":["M01","L01-0-05"],"afterRoute":["M13","L09-0-01"],"afterObjectives":null,"afterExplanation":null},{"id":"A49-M13-09","modules":["M13"],"prompt":"Which connection is the usual C–L–C pi filter following a rectifier?","choices":["A capacitor to common, a series inductor, then another capacitor to common.","A series choke followed by one shunt capacitor, without an input shunt capacitor.","Two shunt inductors around a series capacitor.","Two series chokes separated by an output smoothing capacitor."],"answer":0,"explanation":"The C–L–C topology has two shunt capacitors separated by a series choke. The choke impedes ripple current; the capacitors provide lower-impedance paths for ripple to common. Its performance still depends on load, ESR, DCR and ratings.","objectiveIds":["10.4.3"],"source":null,"priorRemediation":["M13","L09-0-05"],"afterRoute":["M13","L08-0-00"],"afterObjectives":null,"afterExplanation":null}];
var D=window.ALFRED_CETA_DATA;
function eq(a,b){return JSON.stringify(a)===JSON.stringify(b);}
function fail(s){window[KEY]={ok:false,stage:'NOT_INSTALLED',error:String(s)};}
if(!D||!Array.isArray(D.course)||!window.ALFRED_CETA_QA_G05_B30_STATUS||window.ALFRED_CETA_QA_G05_B30_STATUS.ok!==true){fail('B30 passed prerequisite or course missing');return;}
function mod(id){var a=D.course.filter(function(m){return m.id===id;});if(a.length!==1)throw Error('Module missing/duplicate '+id);return a[0];}
function one(mid,id){var a=mod(mid).questions.filter(function(q){return q.id===id;});if(a.length!==1)throw Error('Question missing/duplicate '+mid+'/'+id);return a[0];}
try{
 T.forEach(function(t){
  var found=D.course.filter(function(m){return Array.isArray(m.questions)&&m.questions.some(function(q){return q.id===t.id;});}).map(function(m){return m.id;}).sort();
  if(!eq(found,t.modules.slice().sort()))throw Error('Placement drift '+t.id);
  if(!mod(t.afterRoute[0]).pages.some(function(p){return p.id===t.afterRoute[1];}))throw Error('Remediation page absent '+t.id);
  t.modules.forEach(function(mid){var q=one(mid,t.id);
   if(q.prompt!==t.prompt||!eq(q.choices,t.choices)||q.answer!==t.answer||q.explanation!==t.explanation||!eq(q.objectiveIds,t.objectiveIds))throw Error('Canonical question drift '+mid+'/'+t.id);
   if(t.source){if(q.sourceModuleId!==t.source[0]||q.sourcePageId!==t.source[1])throw Error('Source anchor drift '+mid+'/'+t.id);}
   else if(q.sourceModuleId!=null||q.sourcePageId!=null)throw Error('Unexpected source anchor '+mid+'/'+t.id);
   if(t.priorRemediation){if(q.reviewedRemediationModuleId!==t.priorRemediation[0]||q.reviewedRemediationPageId!==t.priorRemediation[1])throw Error('Prior route drift '+mid+'/'+t.id);}
   else if(q.reviewedRemediationModuleId!=null||q.reviewedRemediationPageId!=null)throw Error('Unexpected remediation route '+mid+'/'+t.id);
  });
 });
 T.forEach(function(t){t.modules.forEach(function(mid){var q=one(mid,t.id);
   q.reviewedRemediationModuleId=t.afterRoute[0];q.reviewedRemediationPageId=t.afterRoute[1];
   if(t.afterObjectives!==null)q.objectiveIds=t.afterObjectives.slice();
   if(t.afterExplanation!==null)q.explanation=t.afterExplanation;
  });});
 window[KEY]={ok:true,stage:'STAGED_NOT_INSTALLED',affectedIds:T.length,placements:T.reduce(function(n,t){return n+t.modules.length;},0)};
}catch(e){fail(e.message||e);}
})();
