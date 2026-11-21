/* Alfred University G07 B41: ETA 8.3/8.4/8.6 instrument-safety procedural clarification.
 * Source-oriented lesson overlay; no question keys, IDs, scoring or mastery changes.
 * Sources: OSHA 29 CFR 1910.334(c); Fluke DMM safety guide and Fluke 287/289 manual.
 */
(function alfredG07MeterSafetyB41(){
'use strict';
const key='ALFRED_CETA_G07_METER_B41_STATUS', d=window.ALFRED_CETA_DATA;
if(window[key]?.ok&&window[key].appliedData===d)return;
try{
 if(window.ALFRED_CETA_G07_B39_STATUS?.ok!==true || window.ALFRED_CETA_G07_B39_STATUS.appliedData!==d)
   throw Error('B39 safety prerequisite missing');
 const module=d?.course?.find(m=>m.id==='M05');
 const a=module?.pages?.find(p=>p.id==='L03-0-00');
 const b=module?.pages?.find(p=>p.id==='L03-0-03');
 if(!module||a?.title!=='A digital multimeter is several different measurement systems'||
    b?.title!=='Analog and digital meters: accuracy, burden and protection'||
    !Array.isArray(a.goldTeaching?.paragraphs)||a.goldTeaching.paragraphs.length!==6||
    !Array.isArray(b.goldTeaching?.paragraphs)||b.goldTeaching.paragraphs.length!==7||
    !String(a.goldTeaching.paragraphs[0][1]).includes('Resistance and continuity modes')||
    !String(b.goldTeaching.paragraphs[3][1]).includes('Connecting a lead in an amperes jack')||
    !Array.isArray(a.goldTeaching.worked?.steps)||a.goldTeaching.worked.steps.length!==3)
   throw Error('Unexpected M05 meter lesson predecessor');
 // All preconditions above must pass before the first mutation.
 a.goldTeaching.paragraphs.push([
   'Safety procedure · check the instrument before the circuit',
   'For a permitted, current-limited low-voltage training circuit: first identify the two test nodes, expected AC/DC voltage and safe current range; inspect the meter case, probe insulation, finger guards and leads. Use a meter and accessories rated for the potential hazard: BOTH the measurement category (CAT) and voltage limit must suit the circuit, and the least-rated component limits the setup. Confirm the black lead in COM, red lead in the correct voltage/resistance jack, selector on voltage and an appropriate range before contact. For a current measurement, de-energize the approved training setup before opening the series path; choose the manufacturer-specified fused current jack/range and only then place the meter in series. Never connect a lead in an A or mA current input directly across a voltage source. Use only the specified replacement fuse and never bypass a blown fuse. Before returning to voltage work, remove the red lead from the current input and restore it to the voltage jack. For resistance/continuity, isolate and de-energize the circuit and address stored energy before testing. Never use an ohmmeter across an energized circuit.'
 ]);
 a.goldTeaching.worked.steps.unshift('Preflight on this 5 V protected trainer: inspect the meter and leads, identify COM and the V/Ω jack, select DC volts, confirm lead placement and a suitable range, and identify the correct circuit return. Do not use this classroom example on mains or exposed high-energy equipment.');
 b.goldTeaching.paragraphs.push([
   'CAT categories, fuses and proving a measurement',
   'A CAT number is not a substitute for a voltage rating: CAT II generally covers receptacle-connected loads, CAT III the fixed building distribution system, and CAT IV the installation origin/service entrance. Select the meter AND every accessory for the actual circuit and transient environment; a fused input does not make an under-rated meter or lead safe. Do not assume the instrument is functional merely because its display lights. For qualified personnel using an approved procedure to establish absence of voltage, verify operation on an appropriate known-live source or proving unit before and after testing (live–dead–live, where required by the procedure). A zero reading alone cannot establish a safe condition if the mode, jack, lead, reference or instrument is defective. OSHA 29 CFR 1910.334(c) requires qualified persons for electrical test work, inspection of leads and instruments before use, and ratings suited to the circuit. The teaching lab authorizes only low-energy protected examples; energized building wiring, distribution panels and unknown high-energy circuits require qualified personnel, appropriate PPE and site-specific procedures.'
 ]);
 const status={ok:true,revision:'B41',pages:['M05/L03-0-00','M05/L03-0-03'],changedFields:['L03-0-00.goldTeaching.paragraphs[6]','L03-0-00.goldTeaching.worked.steps[0]','L03-0-03.goldTeaching.paragraphs[7]'],competencies:['8.3','8.4','8.6'],sources:['https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.334','https://www.fluke.com/en-us/learn/blog/safety/multimeter-guide','https://assets.fluke.com/manuals/287_289_umeng0000.pdf']};
 Object.defineProperty(status,'appliedData',{value:d});window[key]=status;
}catch(e){window[key]={ok:false,error:String(e.message||e)};console.warn('[Alfred G07 B41]',e);}
})();
