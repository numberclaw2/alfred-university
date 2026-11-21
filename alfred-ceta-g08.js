/* Alfred University AU-ESET 301. Cumulative academic stage B35. */
(function applyG08() {
'use strict';
const original = window.ALFRED_CETA_DATA;
const prior = window.ALFRED_CETA_G08_B35_STATUS;
if (prior?.ok && prior.appliedData === original) return;
const before = new Map(Object.keys(window).filter(key => key.startsWith('ALFRED_CETA_G08_')).map(key => [key,window[key]]));
function check(key) {
  if (window[key]?.ok !== true) throw Error(key + ': ' + (window[key]?.error || 'prerequisite failed'));
}
try {
  check('ALFRED_CETA_QA_G05_B31_STATUS');
  check('ALFRED_CETA_INSTRUCTIONAL_STATUS');
  window.ALFRED_CETA_DATA = JSON.parse(JSON.stringify(original));
/* Alfred University AU-ESET 301 | G08-001 source-specific educational correction
 * STAGED ONLY -- NOT FOR DIRECT GITHUB UPLOAD.
 * Intended load position: after all existing academic overlays, before ceta.js.
 * Source pin: ace81fd9e42e35e391c48005647981301287ead7; course.js blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 * Does not change assessment records, question IDs, grading, saved progress or user data.
 */
(function () {
  'use strict';
  const revision = 'G08-001-M15-L29-0-04-20261029';
  const statusKey = 'ALFRED_CETA_G08_M15_STATUS';
  const oldFirst = 'When verified external workmanship photos are available, compare an acceptable joint, a solder bridge, insufficient wetting and a lifted pad using the relevant inspection criteria. This course does not currently supply an authenticated four-photo assessment set; do not mark visual classification as completed from absent images.';
  const oldSecond = 'Record results as image-based interpretation, not certified hand soldering.';
  const oldConclusion = 'The workmanship-photo case cannot currently certify visual classification because the four claimed authenticated photographs are not supplied. Use explicit evidence-tier labeling and defer that visual assessment until sourced images and criteria are available.';
  const newFirst = 'Inspect the four sourced photographs A–D in the image gallery below. Identify the visible shape or condition, then distinguish direct observations from hypotheses: A shows conical wetting, B suggests balling or possible nonwetting, C shows a joint reported as cold, and D requires a closer inspection before a fracture can be confirmed. If an online photograph cannot be viewed, use its source link; do not claim to have completed image classification without viewing the images.';
  const newSecond = 'A solder bridge and a lifted PCB pad are not unambiguously demonstrated by these four pictures. Explain each defect using the lesson descriptions and suitable authenticated visual examples when available. Document uncertain diagnoses, necessary magnification or safe tests, and the difference between photograph recognition and supervised physical workmanship.';
  const newConclusion = 'Four authentic, credited external photographs are linked for unscored visual practice, but they do not constitute a comprehensive solder-defect image test, confirm a joint’s internal integrity, or demonstrate physical soldering competence. The image exercise may be attempted when photographs load; hands-on rework verification remains a separate supervised task.';
  try {
    const course = window.ALFRED_CETA_DATA?.course;
    if (!Array.isArray(course)) throw Error('canonical course missing');
    const mod = course.find(x => x.id === 'M15');
    const page = mod?.pages?.find(x => x.id === 'L29-0-04');
    if (!page || page.title !== 'Workmanship practical case and evidence tiers') throw Error('target page missing or changed');
    const g = page.goldTeaching, w = g?.worked, gallery = g?.visualGallery;
    if (!w || !Array.isArray(w.steps) || w.steps.length !== 2) throw Error('workmanship steps changed');
    if (!gallery || !Array.isArray(gallery.images) || gallery.images.length !== 4 || gallery.images.map(x => x.id).join('') !== 'ABCD') throw Error('four-photo gallery changed');
    if (w.steps[0] === newFirst && w.steps[1] === newSecond && w.conclusion === newConclusion) {
      window[statusKey] = {ok:true, revision, alreadyApplied:true}; return;
    }
    if (w.steps[0] !== oldFirst || w.steps[1] !== oldSecond || w.conclusion !== oldConclusion) throw Error('expected prior wording differs -- no change made');
    w.steps[0] = newFirst;
    w.steps[1] = newSecond;
    w.conclusion = newConclusion;
    window[statusKey] = {ok:true, revision, changedPage:'M15/L29-0-04', staged:true};
  } catch (error) {
    window[statusKey] = {ok:false, revision, error:String(error?.message || error)};
    if (typeof console !== 'undefined') console.warn('[Alfred G08] Guarded correction not applied:', error);
  }
})();

check('ALFRED_CETA_G08_M15_STATUS');
/* Alfred University AU-ESET 301 | G08-003 / G08-004 guarded educational patch.
 * STAGED ONLY; do not upload alone. Merge into cumulative academic corrections after B31 recovery.
 * Production pin: ace81fd9e42e35e391c48005647981301287ead7.
 * Intent: add a gate-symbol visual to M17/L11-0-01 and clarify what a scope photograph can prove in M06/L03-0-02.
 * No question, key, score, page ID, learner record, storage, navigation or safety change.
 * Intended load: after established academic overlays and before ceta.js.
 */
(function () {
  'use strict';
  const revision = 'G08-003-004-20261029';
  const statusKey = 'ALFRED_CETA_G08_VISUAL_REINFORCEMENT_STATUS';
  const gateSectionTitle = 'Read physical gate symbols before interpreting logic diagrams';
  const gateSection = 'Begin at each input, identify the symbol and any small inversion bubble, and label intermediate outputs before evaluating the final result. In the credited drawing, an AND gate is high only when both inputs are high; an OR gate is high if at least one input is high; a NOT gate inverts its input. Adding an inverter to an AND output yields NAND. For a chain of gates, work stage by stage (for example X = (A AND B) OR C), then build a complete truth table. A real diode/transistor logic circuit can implement a gate, but first trace the component bias and output pull-up or pull-down rather than assuming its logic from the component drawing alone. This figure teaches the first three schematic symbols, not every gate type or complete transistor-level schematic.';
  const gateVisual = {
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/LogicGates.svg?width=960',
    link: 'https://commons.wikimedia.org/wiki/File:LogicGates.svg',
    alt: 'Schematic gate symbols for two-input AND and OR gates and a NOT inverter, showing input wires and the output wire of each symbol.',
    caption: 'Trace each symbol from its input wires to its output. AND needs both inputs high; OR needs at least one input high; the NOT output bubble reverses a signal. Next, draw AND feeding NOT to make a NAND, and construct its four-row truth table. This linked figure is online-only and does not show all gates or transistor-level implementations.',
    credit: 'Vaughan Pratt · CC BY 3.0',
    verifiedSource: 'Wikimedia Commons file description and author/license checked 2026-10-29; browser image rendering not verified',
    offlineAvailable: false
  };
  const scopeSectionTitle = 'What a real photographed scope trace can and cannot establish';
  const scopeSection = 'The linked scope photograph has a graticule and instrument annotations. First distinguish the trace (what was displayed) from the calibrated settings (what scales were active). A photograph does not establish an attached probe attenuation factor or whether an on-screen voltage cursor represents peak-to-peak amplitude. Identify the actual volts/div and time/div settings, count crest-to-trough and one full cycle, verify the channel/probe scaling, and then compute Vpp and f = 1/T. Use the lesson’s separate worked numbers to practice the arithmetic; do not substitute a displayed voltage annotation for a verified crest-to-trough calculation.';
  const priorScopeCaption = 'Count the vertical divisions to estimate peak-to-peak voltage; explain how changing the volts-per-division knob changes the reading. Image requires internet access; use the labeled source if the preview fails.';
  const revisedScopeCaption = 'Locate the graticule, trace, and instrument readouts. Practice estimating trace height in divisions, but verify V/div, time/div, and probe factor before treating the photograph as a calibrated voltage or frequency measurement. An on-screen voltage annotation is not automatically Vpp. Image requires internet access; use the linked source if the preview fails.';
  try {
    const modules = window.ALFRED_CETA_DATA?.course;
    if (!Array.isArray(modules)) throw Error('effective curriculum unavailable');
    function target(moduleId, pageId, exactTitle) {
      const modulesFound = modules.filter(m => m.id === moduleId);
      if (modulesFound.length !== 1) throw Error('module missing or nonunique: ' + moduleId);
      const hits = modulesFound[0].pages?.filter(p => p.id === pageId && p.title === exactTitle) || [];
      if (hits.length !== 1) throw Error('target page missing or nonunique: ' + moduleId + '/' + pageId);
      return hits[0];
    }
    const gates = target('M17', 'L11-0-01', 'Logic gates as real electronic building blocks');
    const scope = target('M06', 'L03-0-02', 'Volts per division and seconds per division');
    const gg = gates.goldTeaching, sg = scope.goldTeaching;
    if (!gg || !sg || !Array.isArray(gg.paragraphs) || !Array.isArray(sg.paragraphs)) throw Error('teaching data shape changed');
    const gateAdded = gg.paragraphs.filter(p => p[0] === gateSectionTitle);
    const scopeAdded = sg.paragraphs.filter(p => p[0] === scopeSectionTitle);
    if (gateAdded.length > 1 || scopeAdded.length > 1) throw Error('duplicate teaching section');
    if (gateAdded.length === 1 && scopeAdded.length === 1 && gg.visual?.url === gateVisual.url && sg.visual?.caption === revisedScopeCaption) {
      window[statusKey] = {ok:true, revision, alreadyApplied:true}; return;
    }
    if (gateAdded.length || scopeAdded.length || gg.visual || sg.visual?.caption !== priorScopeCaption ||
        sg.visual?.link !== 'https://commons.wikimedia.org/wiki/File:Oscilloscope_screen.jpg') {
      throw Error('unexpected existing content; no changes made');
    }
    if (!gg.paragraphs[0]?.[1]?.includes('An electronic logic gate uses transistors') ||
        !sg.paragraphs[0]?.[1]?.includes('volts/division')) {
      throw Error('source teaching fingerprint changed; no changes made');
    }
    // Both pages are fully validated before either is modified.
    gg.paragraphs.push([gateSectionTitle, gateSection]);
    gg.visual = {...gateVisual};
    sg.paragraphs.push([scopeSectionTitle, scopeSection]);
    sg.visual.caption = revisedScopeCaption;
    window[statusKey] = {ok:true, revision, changedPages:['M17/L11-0-01', 'M06/L03-0-02'], staged:true};
  } catch (e) {
    window[statusKey] = {ok:false, revision, error:String(e?.message || e)};
    if (typeof console !== 'undefined') console.warn('[Alfred G08] New visual teaching patch not applied:', e);
  }
})();

check('ALFRED_CETA_G08_VISUAL_REINFORCEMENT_STATUS');
/* Alfred University G08-005 · seven-segment display driver polarity.
 * STAGED ONLY — not loaded by production. Place after academic correction overlays and before ceta.js.
 * Accompany with original image asset alfred-g08-seven-segment-polarity.svg.
 * No changes to assessment items, IDs, scores, navigation, storage or prior instructional paragraphs.
 * Source base: ace81fd9e42e35e391c48005647981301287ead7.
 */
(function () {
  'use strict';
  const revision = 'G08-005-20261029';
  const key = 'ALFRED_CETA_G08_DISPLAY_STATUS';
  const driverTitle = 'Trace current through a common-anode or common-cathode segment';
  const driverText = 'A seven-segment LED package contains separate light-emitting diode elements. For a common-anode (CA) device, the anodes are connected to the positive common supply; a particular segment turns ON when an appropriately rated output sinks current through its cathode (LOW relative to the common anode), with suitable current limiting. For a common-cathode (CC) device, the cathodes share the return; a particular segment turns ON when its anode is driven HIGH relative to the common cathode, also with suitable current limiting. Follow the conventional current path, not the segment letter: the label a identifies a location on the numeral, not a dedicated anode pin. A GPIO is not necessarily strong enough to supply or sink the segment current; use the display and driver ratings. A segment turns off when the relevant LED is not sufficiently forward biased.';
  const displayTitle = 'Separate the segment-letter diagram from the electrical drive circuit';
  const displayText = 'The credited seven-segment picture labels the locations a through g; it is not an electrical pinout and does not show a common-anode or common-cathode driver. To display the numeral 7 in the conventional orientation, energize segments a, b and c. In a common-anode package, the shared anode connects to the positive supply and the selected segment cathodes must be driven to an appropriately low potential to sink current. In a common-cathode package, the shared cathode connects to the return and the selected segment anodes are driven sufficiently positive to source current. A current-limiting element or regulated display driver is required for each active current path. Distinguish segment identification, drive polarity, actual package pinout and device current ratings; none is determined by the appearance of the numeral alone.';
  const localFigure = 'alfred-g08-seven-segment-polarity.svg';
  const illustration = {
    url: localFigure,
    link: localFigure,
    alt: 'Original two-panel current-path comparison. Common anode: positive common anode through LED segment and resistor to a low current-sinking driver, making LOW turn the segment on. Common cathode: a high sourcing driver through resistor and LED to grounded common cathode, making HIGH turn the segment on. Conceptual; not a pinout.',
    caption: 'Compare the direction of current for just one segment, then draw the paths for the three segments (a, b, c) that form numeral 7. The two examples use an illustrative 5 V supply, not a specified display or driver rating. Check electrical pinout, resistor, and current ratings before any physical build. The figure is an original local instructional diagram.',
    credit: 'Alfred University · original instructional SVG · 2026-10-29',
    verifiedSource: 'Original diagram staged with G08-005; electrical model reconciled with ETA 2025 competencies 13.6, 18.2.1 and AST practice Q100',
    offlineAvailable: false
  };
  try {
    const modules = window.ALFRED_CETA_DATA?.course;
    if (!Array.isArray(modules)) throw Error('effective curriculum unavailable');
    function locate(mid, pid, title) {
      const ms = modules.filter(m => m.id === mid);
      if (ms.length !== 1) throw Error('module not unique: ' + mid);
      const ps = ms[0].pages?.filter(p => p.id === pid && p.title === title) || [];
      if (ps.length !== 1) throw Error('page not unique: ' + mid + '/' + pid);
      return ps[0];
    }
    const driver = locate('M17', 'L11-0-05', 'Display drivers and coding output');
    const display = locate('M25', 'L19-0-09', 'Seven-segment, LCD and OLED displays');
    const dg = driver.goldTeaching, sg = display.goldTeaching;
    if (!dg || !sg || !Array.isArray(dg.paragraphs) || !Array.isArray(sg.paragraphs)) throw Error('teaching shape changed');
    const dn = dg.paragraphs.filter(p => p[0] === driverTitle);
    const sn = sg.paragraphs.filter(p => p[0] === displayTitle);
    if (dn.length > 1 || sn.length > 1) throw Error('duplicate named teaching sections');
    if (dn.length === 1 && sn.length === 1 && dg.visual?.url === localFigure) {
      window[key] = {ok:true,revision,alreadyApplied:true}; return;
    }
    if (dn.length || sn.length || dg.visual || sg.visual?.link !== 'https://commons.wikimedia.org/wiki/File:7_Segment_Display_with_Labeled_Segments.svg' ||
        !dg.paragraphs[0]?.[1]?.includes('common-anode and common-cathode constructions') ||
        !sg.paragraphs[0]?.[1]?.includes('Seven-segment LEDs illuminate selected diode segments')) {
      throw Error('unexpected source content; no changes made');
    }
    // Validate all targets before changing either of them.
    dg.paragraphs.push([driverTitle,driverText]);
    dg.visual = {...illustration};
    sg.paragraphs.push([displayTitle,displayText]);
    window[key] = {ok:true,revision,changedPages:['M17/L11-0-05','M25/L19-0-09'],asset:localFigure,staged:true};
  } catch (error) {
    window[key] = {ok:false,revision,error:String(error?.message||error)};
    if (typeof console !== 'undefined') console.warn('[Alfred G08-005] Patch not applied:',error);
  }
})();

check('ALFRED_CETA_G08_DISPLAY_STATUS');
/* Alfred University | G08-006 schematic connection visual (2026-10-29).
 * STAGED ONLY. Intended after installed academic overlays, before ceta.js.
 * Source commit ace81fd9e42e35e391c48005647981301287ead7.
 * Requires alfred-g08-schematic-nets.svg in repository root when eventually released.
 */
(function () {
  'use strict';
  const revision = 'G08-006-20261029';
  const key = 'ALFRED_CETA_G08_SCHEMATIC_STATUS';
  const heading = 'Read the connection before touching the test point';
  const passage = 'A schematic line represents an electrical net, not a wire laid out to scale. At a crossing, a junction dot commonly indicates that conductors connect; a crossing without a dot may mean two separate nets. The exact drawing convention and printed net names take priority. On the original low-voltage example, +5 V passes through R12 to node TP3, while C4 shunts TP3 to the specified circuit return. This is the connection topology; no cutoff frequency or measured voltage follows without component values, source and load assumptions. The voltmeter would connect across TP3 and its designated circuit return, not across a convenient chassis screw. Never assume that a schematic return is protective earth or a safe oscilloscope ground-clip point. This illustration is conceptual and does not authorize any energized or mains-supply measurement.';
  const asset = 'alfred-g08-schematic-nets.svg';
  const visual = {
    url: asset, link: asset,
    alt: 'Original three-panel illustration: connected wire junction marked with dot, unconnected crossing without dot, and resistor R12 from +5 volts to test point TP3 with capacitor C4 from TP3 to circuit return.',
    caption: 'Compare the two wire intersections; use the drawing legend and matching net labels to decide connectivity. Then trace +5 V through R12 to TP3 and through C4 toward circuit return. Name the two references for a safe, approved voltmeter measurement without assuming chassis or protective earth is the return.',
    credit: 'Alfred University · original instructional vector · 2026-10-29',
    verifiedSource: 'Original in-stage SVG for ETA 2025 competencies 6.1, 6.3, 6.4 and 6.8; based on effective M05 worked example',
    offlineAvailable: false
  };
  try {
    const modules = window.ALFRED_CETA_DATA?.course;
    if (!Array.isArray(modules)) throw Error('effective curriculum missing');
    const ms = modules.filter(m => m.id === 'M05');
    if (ms.length !== 1) throw Error('M05 not unique');
    const ps = ms[0].pages?.filter(p => p.id === 'L13-0-03' && p.title === 'Symbols, net connections and identifiers') || [];
    if (ps.length !== 1) throw Error('M05/L13-0-03 not unique');
    const g = ps[0].goldTeaching;
    if (!g || !Array.isArray(g.paragraphs)) throw Error('teaching schema changed');
    const matches = g.paragraphs.filter(p => p[0] === heading);
    if (matches.length === 1 && g.visual?.url === asset && matches[0][1] === passage) {
      window[key] = {ok:true,revision,alreadyApplied:true}; return;
    }
    if (matches.length || g.visual || !g.paragraphs[0]?.[1]?.includes('Identify resistor R, capacitor C') ||
        !g.worked?.conclusion?.includes('R12 connects +5 V to TP3')) {
      throw Error('source fingerprint mismatch; no changes made');
    }
    g.paragraphs.push([heading,passage]);
    g.visual = {...visual};
    window[key] = {ok:true,revision,changedPages:['M05/L13-0-03'],asset,staged:true};
  } catch (e) {
    window[key] = {ok:false,revision,error:String(e?.message||e)};
    if (typeof console !== 'undefined') console.warn('[Alfred G08-006] Patch declined:',e);
  }
})();

check('ALFRED_CETA_G08_SCHEMATIC_STATUS');
/* Alfred University AU-ESET 301 | G08-007 pot-to-loaded-divider image interpretation.
 * STAGED ONLY. Load after installed academic overlays, before ceta.js.
 * Source pin: GitHub main ace81fd9e42e35e391c48005647981301287ead7.
 * Preserve existing image, questions, keys, page IDs, records, branding and sync.
 */
(function () {
  'use strict';
  const status = 'ALFRED_CETA_G08_POTENTIOMETER_STATUS';
  const revision = 'G08-007-20261029';
  const heading = 'Map the loaded-divider drawing to a three-terminal potentiometer';
  const lesson = 'The pictured circuit is a fixed-resistor model of a loaded divider, not a moving-wiper symbol. To recognize a real three-terminal potentiometer, find its two end terminals and sliding wiper. With the ends connected across an approved low-voltage source, the track above the wiper acts as Rtop and the track below it as Rbottom. The wiper is the output node. A load connected from wiper to circuit return is in parallel with Rbottom; it is not another resistor in series with the whole potentiometer. At halfway along a linear 10 kΩ track, Rtop = Rbottom = 5 kΩ. For 5 V applied across the ends, unloaded Vout = 5 × 5/(5+5) = 2.5 V; connecting a 5 kΩ load from wiper to return makes the effective lower resistance 5 kΩ || 5 kΩ = 2.5 kΩ and Vout = 5 × 2.5/(5+2.5) ≈ 1.67 V. Identify the wiper and load before applying the unloaded formula. A schematic symbol does not certify the device pin order; consult the device-specific manufacturer pinout. These are conceptual calculations, not permission to work on a mains or unknown circuit.';
  const oldCaption = 'Locate the second resistor across the lower divider leg. Predict why adding a load lowers the output voltage. Image requires internet access; use the labeled source if the preview fails.';
  const newCaption = 'Read this as the fixed-resistor equivalent of a loaded divider: Rtop sits between supply and output, while Rbottom and the added load connect between output and circuit return in parallel. In a three-terminal potentiometer the output is the movable wiper, separating the same track into upper and lower resistances. Predict why a finite wiper load reduces Vout. Image requires internet access; use the credited source if the preview fails.';
  const sourceLink = 'https://commons.wikimedia.org/wiki/File:Voltage_divider-loaded.svg';
  try {
    const modules = window.ALFRED_CETA_DATA?.course;
    if (!Array.isArray(modules)) throw Error('effective curriculum is unavailable');
    const matches = modules.filter(m => m.id === 'M03');
    if (matches.length !== 1) throw Error('M03 missing or not unique');
    const pages = matches[0].pages?.filter(p => p.id === 'L02-0-02' && p.title === 'Potentiometers and loaded voltage dividers') || [];
    if (pages.length !== 1) throw Error('target page missing or not unique');
    const g = pages[0].goldTeaching;
    if (!g || !Array.isArray(g.paragraphs) || !g.visual) throw Error('teaching schema mismatch');
    const prior = g.paragraphs.filter(p => Array.isArray(p) && p[0] === heading);
    if (prior.length === 1 && prior[0][1] === lesson && g.visual.caption === newCaption && g.visual.link === sourceLink) {
      window[status] = {ok:true,revision,alreadyApplied:true}; return;
    }
    if (prior.length || g.visual.caption !== oldCaption || g.visual.link !== sourceLink ||
        !g.paragraphs[0]?.[1]?.includes('For an unloaded divider, Vout = Vin') ||
        !g.worked?.conclusion?.includes('lower 5 kΩ track')) {
      throw Error('source fingerprint mismatch: patch not applied');
    }
    // Validate the complete expected state before making either change.
    g.paragraphs.push([heading, lesson]);
    g.visual.caption = newCaption;
    window[status] = {ok:true,revision,changedPages:['M03/L02-0-02'],staged:true};
  } catch (error) {
    window[status] = {ok:false,revision,error:String(error?.message||error)};
    if (typeof console !== 'undefined' && console.warn) console.warn('[Alfred G08-007] Patch declined:',error);
  }
})();

check('ALFRED_CETA_G08_POTENTIOMETER_STATUS');
/* Alfred AU-ESET 301 | G08-008 555 pinout -> timing-network interpretation.
 * STAGED ONLY; after installed academic overlays, before ceta.js.
 * Source pinned: ace81fd9e42e35e391c48005647981301287ead7.
 * Does not change questions, ID keys, learner progress or graphics attribution.
 */
(function () {
  'use strict';
  const key = 'ALFRED_CETA_G08_TIMER_PINOUT_STATUS';
  const revision = 'G08-008-20261029';
  const heading = 'Read the 555 package pinout as a real astable timing circuit';
  const text = 'A pinout picture identifies terminals but does not itself show the external timing connections. In the standard NE555 astable arrangement, pin 8 is VCC and pin 1 is ground; keep reset (pin 4) at its inactive HIGH level. The timing capacitor node joins trigger (pin 2) and threshold (pin 6); the discharge switch at pin 7 controls capacitor discharge through RB. During charging, the capacitor charges through RA plus RB until the threshold approaches 2/3 VCC; the output at pin 3 then changes state and the discharge path through RB pulls the capacitor toward 1/3 VCC. The trigger threshold changes the state again and the cycle repeats. Pin 5 (control voltage) can shift thresholds and may be bypassed as recommended for the actual device and circuit. With the usual textbook astable topology, high time is about 0.693(RA+RB)C and low time about 0.693 RB C, so frequency is approximately 1.44/((RA+2 RB)C); use ohms, farads and seconds. For example, RA=10 kΩ, RB=10 kΩ and C=10 µF give tHIGH≈0.139 s, tLOW≈0.0693 s, T≈0.208 s and f≈4.81 Hz in the ideal model. Distinguish this free-running circuit from a monostable: a monostable accepts a trigger and gives one timed pulse, not continuous switching. Device variants, component tolerances, output loading and supply limits require datasheet checks. The lesson diagram is a pinout, not proof that a physical breadboard or astable circuit is assembled correctly.';
  const oldCaption = 'Identify supply, discharge, trigger and output pins. Explain which pins participate in an astable timing cycle. Image requires internet access; use the labeled source if the preview fails.';
  const newCaption = 'Treat this illustration as an eight-pin package map, not an astable schematic. Locate VCC (8), GND (1), TRIG (2), OUT (3), RESET (4), CONT (5), THRES (6) and DISCH (7); then compare the external RA/RB/C wiring and capacitor/output waveforms in the linked Texas Instruments astable circuit. Image requires internet access; use the credited source if the preview fails.';
  const originalLink = 'https://commons.wikimedia.org/wiki/File:555_Pinout.svg';
  const source = {
    title:'Texas Instruments · xx555 Precision Timers datasheet (Rev. K), astable operation',
    url:'https://www.ti.com/lit/ds/symlink/ne555.pdf',
    role:'Required · manufacturer schematic and timing-waveform interpretation',
    task:'At Section 6.3.2, trace RA and RB from the supply through DISCH (7) to the capacitor connected to TRIG (2) and THRES (6). Compare the capacitor waveform with OUT (3). Predict which path charges versus discharges C; independently estimate period for RA=10 kΩ, RB=10 kΩ, C=10 µF. Explain why the package pinout alone cannot supply the circuit frequency.'
  };
  try {
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true) throw Error('installed teaching overlay must be applied first');
    const all = window.ALFRED_CETA_DATA?.course;
    if (!Array.isArray(all)) throw Error('effective curriculum unavailable');
    const mods = all.filter(m => m.id === 'M10');
    if (mods.length !== 1) throw Error('module absent or not unique');
    const pages = mods[0].pages?.filter(p => p.id === 'L11-0-09' && p.title === 'Monostable, astable and bistable multivibrators') || [];
    if (pages.length !== 1) throw Error('page absent or not unique');
    const g = pages[0].goldTeaching;
    if (!g || !Array.isArray(g.paragraphs) || !g.visual) throw Error('teaching schema changed');
    const prior = g.paragraphs.filter(p => Array.isArray(p) && p[0] === heading);
    if (prior.length === 1 && prior[0][1] === text && g.visual.caption === newCaption && g.source?.url === source.url) {
      window[key] = {ok:true,revision,alreadyApplied:true}; return;
    }
    if (prior.length || g.source || g.visual.link !== originalLink || g.visual.caption !== oldCaption ||
       !g.paragraphs[0]?.[1]?.includes('Astable circuits have no stable resting state') ||
       !g.worked?.conclusion?.includes('0.5-second pulse')) throw Error('source fingerprint mismatch: no mutation');
    // Validate all conditions before mutating a lesson.
    g.paragraphs.push([heading,text]);
    g.visual.caption = newCaption;
    g.source = source;
    window[key] = {ok:true,revision,changedPages:['M10/L11-0-09'],staged:true};
  } catch(e) {
    window[key] = {ok:false,revision,error:String(e?.message||e)};
    if(typeof console !== 'undefined' && console.warn) console.warn('[Alfred G08-008] declined:',e);
  }
})();

check('ALFRED_CETA_G08_TIMER_PINOUT_STATUS');
/* Alfred University AU-ESET 301 | G08-011: make lab evidence routes unambiguous.
 * STAGED ONLY — load after the installed instructional correction overlay and before ceta.js.
 * Source pinned to main commit ace81fd9e42e35e391c48005647981301287ead7
 * and course.js Git blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 * Retains the 23 existing labs, their route objects, grading, question IDs and all learner data.
 */
(function () {
  'use strict';
  const statusKey = 'ALFRED_CETA_G08_LAB_EVIDENCE_STATUS';
  const revision = 'G08-011-20261029';
  const expected = [
    'LAB-001','LAB-002','LAB-003','LAB-004','LAB-005','LAB-006',
    'LAB-007','LAB-008','LAB-009','LAB-010','LAB-011','LAB-012',
    'LAB-013','LAB-014','LAB-015','LAB-016','LAB-017','LAB-018',
    'LAB-019','LAB-020','LAB-021','LAB-022','LAB-023'
  ];
  const expectedSet = new Set(expected);
  function evidenceText(lab) {
    if (lab.id === 'LAB-012') return (
      'Virtual preparation evidence (not a physical workmanship check): ' + lab.virtual.evidence +
      '  |  Physical soldering/rework/harness skill-verification evidence (only from actual safely supervised work): ' + lab.physical.evidence +
      '  |  A photograph-based defect recognition activity does not by itself demonstrate soldering or crimping proficiency.'
    );
    return 'Virtual or reasoning-route academic evidence: ' + lab.virtual.evidence +
      '  |  Optional physical equipment-route evidence (only if that work is safely undertaken): ' + lab.physical.evidence +
      '  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.';
  }
  try {
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true) {
      throw Error('installed academic instructional overlay must be applied before this correction');
    }
    const course = window.ALFRED_CETA_DATA?.course;
    if (!Array.isArray(course) || course.length !== 30) throw Error('canonical course source mismatch');
    const labs = [];
    const found = new Set();
    for (const mod of course) {
      if (!mod || !Array.isArray(mod.pages) || !Array.isArray(mod.labs)) throw Error('module schema mismatch');
      for (const lab of mod.labs) {
        if (!lab || !expectedSet.has(lab.id) || found.has(lab.id)) {
          throw Error('lab missing, unexpected or duplicated');
        }
        found.add(lab.id);
        if (typeof lab.virtual?.evidence !== 'string' || !lab.virtual.evidence.trim() ||
            typeof lab.physical?.evidence !== 'string' || !lab.physical.evidence.trim() ||
            typeof lab.evidence !== 'string') throw Error('lab evidence schema mismatch');
        labs.push(lab);
      }
    }
    if (labs.length !== expected.length || found.size !== expected.length) {
      throw Error('expected complete LAB-001 through LAB-023 inventory');
    }
    // Validate all lab records *before* modifying any. A partial patch state fails closed.
    const unapplied = labs.every(lab => lab.evidence === lab.physical.evidence);
    const applied = labs.every(lab => lab.evidence === evidenceText(lab));
    if (applied) {
      window[statusKey] = {ok:true,revision,alreadyApplied:true,labCount:labs.length}; return;
    }
    if (!unapplied) throw Error('lab evidence mismatch or partial patch: no mutation');
    for (const lab of labs) lab.evidence = evidenceText(lab);
    window[statusKey] = {ok:true,revision,changedLabIds:expected.slice(),labCount:labs.length,staged:true};
  } catch (e) {
    window[statusKey] = {ok:false,revision,error:String(e?.message || e)};
    if (typeof console !== 'undefined' && console.warn) console.warn('[Alfred G08-011] declined:',e);
  }
})();

check('ALFRED_CETA_G08_LAB_EVIDENCE_STATUS');
/* Alfred University AU-ESET 301 | G08-012 actual resistor-chart visual interpretation.
 * STAGED ONLY. Original Wikimedia figure and CC0 attribution remain unchanged.
 * After installed instructional correction overlay, before ceta.js.
 * Pinned main: ace81fd9e42e35e391c48005647981301287ead7.
 */
(function () {
  'use strict';
  const key = 'ALFRED_CETA_G08_RESISTOR_CHART_STATUS';
  const revision = 'G08-012-20261029';
  const heading = 'Interpret what this specific resistor-chart image actually shows';
  const lesson = 'The credited Commons illustration contains TWO example resistors—not a six-band example or a full multiplier/temperature-coefficient table. The top component has five bands: yellow (4), violet (7), black (0), orange (multiply by 10³), brown (±1% tolerance). Under the standard five-band code its nominal value is 470 × 10³ Ω = 470 kΩ ±1%, or 465.3–474.7 kΩ. The lower component has four bands: blue (6), gray (8), red (multiply by 10²) and gold (±5% tolerance), giving 68 × 10² Ω = 6.8 kΩ ±5%, or 6.46–7.14 kΩ. The color strip at the bottom illustrates digits and selected tolerance colors; it does NOT label every multiplier or show how to decode six-band temperature coefficients. Apply the lesson’s explicit multiplier and band-placement rules; verify unfamiliar, historical or manufacturer-specific markings from documentation, and measure a disconnected resistor when it is safe to do so. The provided AST practice Q14 uses three bands and therefore should not be treated as an image depicted in this chart.';
  const oldAlt = 'Resistor identification chart displaying standard digit, multiplier and tolerance color bands for 4-, 5- and 6-band resistor markings.';
  const newAlt = 'Resistor color illustration showing a five-band yellow–violet–black–orange–brown resistor above a four-band blue–gray–red–gold resistor, plus separate 0–9 digit-color and selected tolerance-color legends. It does not depict a six-band resistor or a complete multiplier legend.';
  const oldCaption = 'Use the publisher-authored chart to read band order, significant figures and tolerance. Confirm the result with a safe out-of-circuit measurement if required; the image is online-only.';
  const newCaption = 'Decode the two illustrated parts using the written multiplier rules: five-band yellow–violet–black–orange–brown = 470 kΩ ±1%; four-band blue–gray–red–gold = 6.8 kΩ ±5%. The artwork has a digit/tolerance key but no six-band example or complete multiplier legend. For three- or six-band systems, use the lesson text and manufacturer markings. External image is online-only.';
  const sourceLink = 'https://commons.wikimedia.org/wiki/File:Resistor_Color_Code.svg';
  try {
    if (window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true) throw Error('required installed overlay not applied');
    const modules = window.ALFRED_CETA_DATA?.course;
    if (!Array.isArray(modules)) throw Error('canonical curriculum absent');
    const ms = modules.filter(m => m.id === 'M03');
    if (ms.length !== 1) throw Error('M03 missing or duplicate');
    const ps = ms[0].pages?.filter(p => p.id === 'L02-0-03' && p.title === 'Reading resistor markings and tolerance bands') || [];
    if (ps.length !== 1) throw Error('resistor lesson missing or duplicate');
    const g = ps[0].goldTeaching;
    if (!g || !Array.isArray(g.paragraphs) || !g.visual ||
        g.visual.link !== sourceLink || !g.visual.credit?.includes('Knarfili')) throw Error('figure attribution/source mismatch');
    const existing = g.paragraphs.filter(p => Array.isArray(p) && p[0] === heading);
    if (existing.length === 1 && existing[0][1] === lesson &&
        g.visual.alt === newAlt && g.visual.caption === newCaption) {
      window[key]={ok:true,revision,alreadyApplied:true};return;
    }
    if (existing.length !== 0 || g.visual.alt !== oldAlt || g.visual.caption !== oldCaption ||
        !g.paragraphs.some(p => Array.isArray(p) && p[1]?.includes('Five-band resistors are not all interpreted identically')) ||
        !g.worked?.conclusion?.includes('4.7 kΩ')) throw Error('effective lesson changed: no mutation');
    g.paragraphs.push([heading,lesson]);
    g.visual.alt = newAlt;
    g.visual.caption = newCaption;
    window[key]={ok:true,revision,changedPages:['M03/L02-0-03'],staged:true};
  } catch(e) {
    window[key]={ok:false,revision,error:String(e?.message||e)};
    if (typeof console !== 'undefined' && console.warn) console.warn('[Alfred G08-012] declined:',e);
  }
})();

check('ALFRED_CETA_G08_RESISTOR_CHART_STATUS');
/* Alfred University AU-ESET 301 · G08-015..017: media-to-independent-transfer bridge.
 * STAGED ONLY. After installed instructional overlay, before ceta.js.
 * No learner progress, quiz keys, mastery scoring, videos, or links are modified.
 * Pinned main ace81fd9e42e35e391c48005647981301287ead7.
 */
(function(){
  'use strict';
  const key='ALFRED_CETA_G08_MEDIA_TRANSFER_STATUS';
  const revision='G08-015-017-20261029';
  const specs=[{"module":"M04","index":2,"page":"L02-0-01","title":"Kirchhoff’s current law as charge conservation","videoTitle":"Khan Academy · Kirchhoff’s Current Law explained","url":"https://www.youtube.com/watch?v=OYerdzZPSI0","embed":"https://www.youtube-nocookie.com/embed/OYerdzZPSI0","originalTask":"After Alfred teaches conservation at nodes, watch the instructor derive current balance at a junction. Pause to predict the missing branch current.","originalSource":"Khan Academy official KCL lesson, confirmed October 2026","transfer":{"prompt":"After the node-current demonstration, solve a different case without looking at the earlier worked example: currents of 1.8 mA and 2.6 mA enter a node. A labeled current of 4.7 mA leaves. A fourth branch current Ix is drawn with its reference arrow LEAVING the node. Calculate signed Ix, explain what its sign says about the actual direction, and check Kirchhoff’s current law with units.","modelReasoning":"Conservation of charge requires ΣI_entering = ΣI_leaving. With the drawn leaving arrow, Ix = 1.8 mA + 2.6 mA − 4.7 mA = −0.3 mA. The minus sign means the actual 0.3 mA current is ENTERING the node, opposite the chosen Ix reference arrow. Check: 1.8 + 2.6 + 0.3 = 4.7 mA. A negative signed branch current is not a physical violation; it revises the assumed direction."}},{"module":"M06","index":4,"page":"L03-0-06","title":"Triggering, coupling, bandwidth and probe setup","videoTitle":"Keysight Labs · Oscilloscope Measurements and Triggering","url":"https://www.youtube.com/watch?v=LSyqPE6avo4","embed":"https://www.youtube-nocookie.com/embed/LSyqPE6avo4","originalTask":"Watch this focused Keysight demo after learning trigger levels and probe references. Identify what trigger setting makes a drifting trace stable. Do not attach an earth-referenced probe to an unknown live circuit.","originalSource":"Keysight Labs, 2016, confirmed October 2026","transfer":{"prompt":"After viewing the triggering demonstration, consider an isolated low-voltage CMOS output that switches between 0 and 3.3 V with an 80 µs HIGH pulse in each 400 µs cycle. With a correctly configured 10× passive probe, 100 µs/div horizontal scale and 1 V/div vertical scale, predict pulse width in divisions, one period in divisions, frequency, duty cycle and displayed peak-to-peak height. Then select a plausible stable trigger and coupling mode. Do not propose probing an unknown energized source.","modelReasoning":"Width = 80 µs / (100 µs/div) = 0.8 div. Period = 400 µs / (100 µs/div) = 4 div. Frequency = 1/(400 × 10^−6 s) = 2,500 Hz = 2.5 kHz. Duty cycle = (80/400) × 100% = 20%. The 0–3.3 V output is 3.3 Vpp, which spans 3.3 divisions at a correctly calibrated 1 V/div display. Select the correct channel, a rising-edge trigger between 0 and 3.3 V (for example 1.5 V) and DC coupling to retain the voltage offset. Verify the 10× physical-probe/channel-setting match and an authorized reference; scope ground clips are not safe for arbitrary energized nodes."}},{"module":"M23","index":1,"page":"L03-0-06","title":"Oscilloscope controls and spectrum fundamentals","videoTitle":"Keysight Labs · Oscilloscope Signal Scaling and Controls","url":"https://www.youtube.com/watch?v=t_UTV_9dpTc&t=136s","embed":"https://www.youtube-nocookie.com/embed/t_UTV_9dpTc?start=136&end=309","originalTask":"Watch 02:16–05:09 on signal scaling, probe compensation, and setup. Before watching, explain which knob changes volts per division and how probe attenuation affects the reading.","originalSource":"Keysight Labs, 2021, time-bounded chapter verified from publisher metadata","transfer":{"prompt":"After the scaling demonstration, an isolated 1 kHz test signal is independently known to be 2.0 Vpp. A physical 10× probe is used, but the oscilloscope channel is accidentally configured for 1×, and its readout shows 0.20 Vpp. A full cycle occupies 5 horizontal divisions at 0.2 ms/div. Decide whether the source is necessarily weak, identify the mismatch, predict the corrected displayed Vpp after matching the channel setting, and verify period and frequency from the timebase.","modelReasoning":"The physical 10× probe attenuates the voltage at the scope input by ten. If the channel incorrectly assumes 1×, the display can report 0.20 Vpp instead of the actual 2.0 Vpp. Match the channel attenuation to the physical probe (10×), check probe compensation and a safe reference, then the reading should be about 2.0 Vpp under the stated calibration. The period is 5 div × 0.2 ms/div = 1.0 ms; frequency 1/(0.001 s) = 1,000 Hz = 1 kHz. The initial low reading alone does not prove the generator output is weak."},"newTask":"Watch the oscilloscope demonstration (suggested excerpt approximately 02:16–05:09). Identify volts/div, time/div and probe attenuation. Predict what a mismatched probe setting would do to the reading. The excerpt boundaries and precise content have not been independently video-inspected; use the linked manufacturer reference and the challenge below if the video is unavailable.","newSource":"External oscilloscope demonstration; publisher year and exact 02:16–05:09 chapter contents not independently verified in this QA batch."}];
  try {
    if (window.ALFRED_CETA_CLOSURE_STATUS?.ok !== true ||
        window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true)
      throw Error('installed academic overlays not confirmed');
    const data=window.ALFRED_CETA_DATA,mods=data?.course;
    if (!Array.isArray(mods)||mods.length!==30) throw Error('canonical 30-module course missing');
    const videoIndex=data?.courseResourceVideoAdditions;
    if (!Array.isArray(videoIndex)||videoIndex.length!==3) throw Error('expected media manifest mismatch');
    const located=[];
    for (const [j,s] of specs.entries()) {
      const mm=mods.filter(m=>m.id===s.module);
      if(mm.length!==1||!Array.isArray(mm[0].pages)) throw Error('missing/duplicate module '+s.module);
      const pp=mm[0].pages.filter(p=>p.id===s.page);
      if(pp.length!==1||mm[0].pages[s.index]!==pp[0]||pp[0].title!==s.title) throw Error('page title/id/index changed '+s.module);
      const v=pp[0].goldTeaching?.video;
      if(!v||!Array.isArray(pp[0].goldTeaching.paragraphs)||v.title!==s.videoTitle||v.url!==s.url||v.embed!==s.embed)
        throw Error('original lesson/media identity changed '+s.module);
      const entry=videoIndex[j];
      if(entry.module!==s.module||entry.page!==s.index||entry.title!==s.videoTitle||entry.url!==s.url)
        throw Error('canonical media entry mismatch '+s.module);
      const original = v.task===s.originalTask&&v.source===s.originalSource&&pp[0].goldTeaching.transferPractice===undefined;
      const done = v.task===(s.newTask||s.originalTask) && v.source===(s.newSource||s.originalSource) &&
        pp[0].goldTeaching.transferPractice?.prompt===s.transfer.prompt &&
        pp[0].goldTeaching.transferPractice?.modelReasoning===s.transfer.modelReasoning;
      if(!original&&!done) throw Error('conflicting/partial prior media patch '+s.module);
      located.push({page:pp[0],spec:s,original,done});
    }
    if(located.every(x=>x.done)) { window[key]={ok:true,revision,alreadyApplied:true,staged:true}; return; }
    if(!located.every(x=>x.original)) throw Error('partial application; no edits');
    for(const {page,spec:s} of located) {
      page.goldTeaching.transferPractice={prompt:s.transfer.prompt,modelReasoning:s.transfer.modelReasoning};
      if(s.newTask)page.goldTeaching.video.task=s.newTask;
      if(s.newSource)page.goldTeaching.video.source=s.newSource;
    }
    window[key]={ok:true,revision,staged:true,changedPages:located.map(x=>x.spec.module+'/'+x.spec.page)};
  }catch(e){
    window[key]={ok:false,revision,staged:true,error:String(e?.message||e)};
    if(typeof console!=='undefined'&&console.warn)console.warn('[Alfred G08 media transfer] declined:',e);
  }
})();

check('ALFRED_CETA_G08_MEDIA_TRANSFER_STATUS');
/* Alfred AU-ESET 301 — G08-018/019/020, continuation of source-level media QA.
 * STAGED ONLY. Load AFTER installed academic/instructional overlays and BEFORE ceta.js.
 * Guarded changes to three exact lesson video fields and three unscored transfer prompts.
 * No change to video URLs, exam keys/scoring, progress records or module/page identifiers.
 */
(function(){
  'use strict';
  const revision='G08-018-020-20261029';
  const statusKey='ALFRED_CETA_G08_REMAINING_MEDIA_STATUS';
  const targets=[{"id":"G08-018","module":"M01","index":3,"page":"L01-0-06","title":"Lockout, stored energy and verification","videoTitle":"Lockout / Tagout — Electrical Safety Foundation International","url":"https://www.youtube.com/watch?v=LO1r8i92r9g","embed":"https://www.youtube-nocookie.com/embed/LO1r8i92r9g","originalTask":"After reading the isolation steps, watch and identify notification, energy isolation, stored energy, and verification. This is an overview, not authorization to perform LOTO.","newTitle":"Lockout/tagout overview — external publisher unverified","newTask":"First study the linked OSHA energy-control guidance. If this external overview plays, compare what it presents about notification, isolating EVERY energy source, controlling stored energy and verifying isolation with OSHA; the video identity, availability and full content have not been independently authenticated. This is classroom analysis, not permission to perform workplace lockout or voltage testing.","newSource":"Video publisher attribution and full contents NOT independently verified; authoritative OSHA 29 CFR 1910.147 and 1910.333 remain the safety reference.","originalSource":null,"transfer":{"prompt":"Paper-only safety case: a maintenance machine is stopped, its main electrical disconnect is padlocked, but a pressure gauge still indicates compressed air and a raised assembly is held by a spring. A second control panel displays OFF. Which hazards remain unaccounted for? Identify the professional decisions required BEFORE service and who can verify electrical absence of voltage. Explain why neither OFF indications nor a lock on a single source proves all hazardous energy is controlled. Do not perform this exercise on real equipment.","modelReasoning":"The padlocked electrical disconnect is not a verified all-energy condition. Potential pneumatic pressure, spring/gravity energy, stored electrical energy and possible secondary feeds require identification and documented control by trained, authorized personnel. A display/stop button is a control indication, not an isolating device; a lock on only one source does not control other sources. Under the equipment-specific procedure, authorized personnel isolate applicable sources, address stored energy and verify effectiveness. Where electrical absence-of-voltage testing is required, OSHA 1910.333 assigns that testing to a qualified person using suitable equipment. The trainee does not perform lockout or meter tests from this paper exercise."}},{"id":"G08-019","module":"M02","index":2,"page":"L01-0-00","title":"Current needs a conducting path","videoTitle":"Khan Academy · Introduction to circuits and Ohm’s law (2018)","url":"https://www.youtube.com/watch?v=F_vLWkkOETI","embed":"https://www.youtube-nocookie.com/embed/F_vLWkkOETI","originalTask":"Watch the instructor build a circuit/current model. Pause to describe what changes when the circuit opens. This supports the taught concept; it does not replace Alfred instruction.","originalSource":null,"newTask":"Study the circuit/current explanation, then reason through the paper-only 9 V, 3 kΩ switched circuit below. The linked video title/year is corroborated by secondary educational references; complete playback and the exact demonstrations have not been independently inspected. The Alfred lesson and required OpenStax reading remain the source of the assessed reasoning.","newSource":"Khan Academy video title/date corroborated in a secondary education reference (Philippine Department of Education 2020 bibliography); direct video playback/transcript not independently verified.","transfer":{"prompt":"Unfamiliar paper-only circuit: an ideal 9 V battery, 3.0 kΩ resistor, and ideal switch form one series loop. (a) With the switch OPEN, find steady loop current and explain whether 9 V may still exist across the opening. (b) With the switch CLOSED, calculate current in mA. (c) For 20 s of steady closed-switch current, determine the charge passing a point in coulombs. Explain what happens to charge and energy in the resistor. Do not physically short a battery or connect an ammeter directly across a source.","modelReasoning":"With the switch open, the ideal path is broken and steady current I = 0 A; an ideal source can still establish a 9 V potential difference across the opening. With the switch closed, R = 3.0 kΩ = 3000 Ω, so I = 9 V/3000 Ω = 0.003 A = 3.0 mA. In 20 s, charge Q = IΔt = 0.003 C/s × 20 s = 0.060 C. Charge is conserved through the loop; the resistor converts electrical energy to heat, rather than consuming charge. A current meter placed across a source is a dangerous low-resistance path and is not a valid test of this scenario."}},{"id":"G08-020","module":"M03","index":3,"page":"L01-0-09","title":"When Ohm’s-law predictions can fail","videoTitle":"Khan Academy · Ohm’s law: voltage–current experiment (2026)","url":"https://www.youtube.com/watch?v=FuIn1L3qeqI&t=356s","embed":"https://www.youtube-nocookie.com/embed/FuIn1L3qeqI?start=356&end=689","newEmbed":"https://www.youtube-nocookie.com/embed/FuIn1L3qeqI?start=356","originalTask":"Watch 05:56–11:29 for the Ohm’s law and calculated resistance explanations. Predict the straight-line plot before viewing; distinguish conductance and resistance axes.","newTask":"Watch from approximately 05:56 through the final section, INCLUDING the ohmic/non-ohmic discussion that starts at 11:29. Predict the I–V graph first. Label the graph axes: for CURRENT on the vertical axis versus VOLTAGE on the horizontal axis, slope is conductance (1/R); for VERTICAL voltage versus horizontal current, slope is resistance (R). Compare that model with the nonlinear measurements in the independent challenge.","originalSource":null,"newSource":"Publisher Khan Academy Ohm’s law video description (2026-06-13) lists sections at 05:56 (Ohm’s law), 08:50 (resistor value), and 11:29 (ohmic and non-ohmic devices). Previous embed stopped at the START of the last section. Entire video playback was not independently inspected.","transfer":{"prompt":"Paper-only measurement set taken at fixed external conditions: a component draws 4.0 mA at 2.0 V, 8.0 mA at 4.0 V, and 9.0 mA at 6.0 V. Find the apparent resistance V/I at each operating point and decide whether ONE constant-resistance Ohm’s-law model explains all three. What is the slope of the I-versus-V graph between the FIRST two points, and what units does it have? Name two reasonable diagnostic checks before calling the component faulty.","modelReasoning":"First point R = 2.0 V/0.004 A = 500 Ω. Second R = 4.0 V/0.008 A = 500 Ω. Third R = 6.0 V/0.009 A ≈ 666.7 Ω. Thus a single 500 Ω model fits the first two but not the third; this is not a straight I–V relationship across all points. I-versus-V slope over the first two points is ΔI/ΔV = (8−4) mA/(4−2) V = 2 mA/V = 0.002 S = 2 mS of conductance; a V-versus-I plot would instead show 500 Ω slope there. Verify the actual voltage across the part and meter/current range, then investigate heating, topology, supply limits or a deliberately non-ohmic component; one measurement is not enough to prove linearity."}}];
  try {
    const w=window;
    if(w.ALFRED_CETA_CLOSURE_STATUS?.ok!==true || w.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok!==true)
      throw Error('source academic and instructional overlay status not confirmed');
    if(w.ALFRED_CETA_G08_MEDIA_TRANSFER_STATUS?.ok!==true)
      throw Error('predecessor G08 media supplement 08 not installed');
    const course=w.ALFRED_CETA_DATA?.course;
    if(!Array.isArray(course)||course.length!==30)
      throw Error('expected canonical 30-module course not found');
    const refs=[];
    for(const t of targets){
      const mm=course.filter(m=>m.id===t.module);
      if(mm.length!==1||!Array.isArray(mm[0].pages))throw Error('missing or duplicate module: '+t.module);
      const matches=mm[0].pages.filter(p=>p.id===t.page);
      if(matches.length!==1 || mm[0].pages[t.index]!==matches[0] || matches[0].title!==t.title)
        throw Error('lesson identity/index/title mismatch: '+t.module+'/'+t.page);
      const p=matches[0]; const g=p.goldTeaching; const v=g?.video;
      if(!g||!Array.isArray(g.paragraphs)||!v||v.url!==t.url)
        throw Error('expected source video or lesson missing: '+t.module);
      const sourceOriginal = t.originalSource===null ? v.source===undefined : v.source===t.originalSource;
      const old = (v.title===t.videoTitle && v.embed===t.embed && v.task===t.originalTask && sourceOriginal && g.transferPractice===undefined);
      const done = (v.title===(t.newTitle||t.videoTitle) && v.embed===(t.newEmbed||t.embed) &&
        v.task===(t.newTask||t.originalTask) && v.source===t.newSource &&
        g.transferPractice?.prompt===t.transfer.prompt && g.transferPractice?.modelReasoning===t.transfer.modelReasoning);
      if(!old&&!done) throw Error('changed source or partially applied correction: '+t.module+'/'+t.page);
      refs.push({p,t,old,done});
    }
    if(refs.every(x=>x.done)){
      w[statusKey]={ok:true,alreadyApplied:true,staged:true,revision,changedPages:refs.map(x=>x.t.module+'/'+x.t.page)};
      return;
    }
    if(!refs.every(x=>x.old))throw Error('mixed old/new state; do not mutate');
    // All preconditions validated; apply each small additive edit atomically.
    for(const {p,t} of refs){
      const v=p.goldTeaching.video;
      p.goldTeaching.transferPractice={prompt:t.transfer.prompt,modelReasoning:t.transfer.modelReasoning};
      if(t.newTitle)v.title=t.newTitle;
      if(t.newTask)v.task=t.newTask;
      if(t.newSource)v.source=t.newSource;
      if(t.newEmbed)v.embed=t.newEmbed;
    }
    w[statusKey]={ok:true,revision,staged:true,changedPages:refs.map(x=>x.t.module+'/'+x.t.page)};
  }catch(e){
    window[statusKey]={ok:false,revision,staged:true,error:String(e?.message||e)};
    if(typeof console!=='undefined'&&console.warn)console.warn('[Alfred G08 remaining media] refused:',e);
  }
})();

check('ALFRED_CETA_G08_REMAINING_MEDIA_STATUS');
/* Alfred AU-ESET 301 — G08-021, LAB-001 engineering and bench-safety correction.
 * STAGED ONLY. Load after the installed instructional overlay and staged G08-011
 * lab-evidence patch, before ceta.js. No learner-state, rubric-grade or quiz mutation.
 * Read-only source: main ace81fd9e42e35e391c48005647981301287ead7;
 * course.js blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 */
(() => {
  'use strict';
  const key='ALFRED_CETA_G08_LAB001_TECHNICAL_STATUS';
  const revision='G08-021-20261029';
  const original={
    equipment:'Adjustable low-voltage DC bench supply with current limiting or a 3–9 V battery/source, DMM with intact leads, solderless breadboard, standard LED, 330 Ω and 1 kΩ 1/4-watt resistors, male-to-male jumper wires.',
    procedure:[
      'Calculate a safe series resistor and expected current.',
      'Set supply voltage and current limit before connecting the circuit.',
      'Build with power off; verify polarity and continuity.',
      'Measure supply, resistor drop, LED drop and current.',
      'Introduce one simple open/wrong-value fault and diagnose it.'
    ],
    virtualEquipment:'Web browser only.',
    virtualProcedure:[
      'Calculate the LED series resistor, expected current, and resistor power before opening the simulator.',
      'Build the source, resistor, and LED in Falstad and set the source to the planned low voltage.',
      'Use the simulator current/voltage readouts to record source voltage, resistor drop, LED drop, and current.',
      'Change the resistor value and then create an open connection; predict each symptom before observing it.',
      'Compare the simulated values with your hand calculations and explain any difference.'
    ],
    physicalEquipment:'Adjustable low-voltage DC bench supply with current limiting or a 3–9 V battery/source, DMM with intact leads, solderless breadboard, standard LED, 330 Ω and 1 kΩ 1/4-watt resistors, male-to-male jumper wires.',
    physicalProcedure:[
      'Calculate a safe series resistor and expected current.',
      'Set supply voltage and current limit before connecting the circuit.',
      'Build with power off; verify polarity and continuity.',
      'Measure supply, resistor drop, LED drop and current.',
      'Introduce one simple open/wrong-value fault and diagnose it.'
    ]
  };
  const improved={
    equipment:'Use only an isolated, low-voltage DC source. Preferred: a 5 V current-limited bench supply set to a conservative 15 mA limit, a standard LED with known polarity and rated forward current, a 1 kΩ 1/4 W resistor, and optionally 330 Ω 1/4 W at 5 V or less after rating checks. An unregulated 3–9 V battery/source requires its measured output and an LED-specific resistor calculation; never assume 9 V with 330 Ω is safe. For the physical route also use a breadboard, suitable insulated jumper leads, and a fused DMM with intact probes. Do not work on mains, unknown or high-energy circuits.',
    procedure:[
      'Begin on paper: connect +5 V -> 1 kΩ series resistor -> LED anode (+) -> LED cathode (−) -> source 0 V/return. No direct LED-to-source wiring. Treat the source, resistor, LED and return as one series loop.',
      'Assume a red LED forward voltage of 2.0 V ONLY for calculation: I=(5.0−2.0)/1000=0.003 A=3.0 mA; resistor drop 3.0 V; P_R=I²R=0.009 W=9 mW, below 0.25 W. Calculate again from the LED manufacturer data and actual supply before a physical build.',
      'Use the LED data-sheet continuous forward-current rating as the upper bound; check resistor tolerance and dissipation. The optional 330 Ω case at 5.0 V with 2.0 V assumed LED drop predicts 9.09 mA and 27.3 mW. At 9 V with the same assumptions, 330 Ω predicts 21.2 mA and must NOT be chosen as an unexamined default.',
      'Select the simulation route or a safely authorized physical low-voltage route. Make every circuit change with source disconnected/off; never test continuity or resistance on an energized circuit.',
      'Record measured or simulated source voltage, resistor drop, LED drop, series current, resistor power and polarity with units; voltage drops should approximately sum to source voltage.',
      'Predict and then create one safe fault: an open circuit, or a 1 kΩ-for-330 Ω substitution ONLY under a ≤5 V supply and checked component ratings. Record expected and observed symptoms, root cause and corrective action.',
      'Self-check against five criteria: correct series topology/polarity; calculation with units; proper and safe instrument/model settings; predicted-vs-observed comparison with explanation; fault diagnosis with defensible evidence. A simulator screenshot documents simulated behavior only, not physical bench competence.'
    ],
    virtualEquipment:'Web browser with Falstad CircuitJS; no physical circuit, meter or external supply required. Use the equivalent schematic described below.',
    virtualProcedure:[
      'Before opening Falstad, draw +5 V -> 1 kΩ -> LED anode -> LED cathode -> source return. Record assumed LED forward voltage of 2.0 V and calculate predicted series current 3.0 mA, resistor drop 3.0 V and resistor power 9 mW. Label assumptions and units.',
      'Open Falstad CircuitJS; build a DC voltage source set to 5.0 V, a 1 kΩ series resistor and a correctly oriented LED in a CLOSED loop. Check that the source negative terminal connects to the LED cathode/return. Do not use the simulator default example without constructing this topology.',
      'Inspect component readouts (hover or click for its voltage/current as supported by the simulator). Record source voltage, resistor voltage, LED forward voltage and loop current in a predicted-versus-simulated table. Confirm V_R+V_LED≈5 V. The simulator diode model may not use an exact 2.0 V drop.',
      'Before observing, predict the result of increasing series resistance from 1 kΩ or opening the loop. Change to 330 Ω only at the chosen 5 V simulated source. Observe current/brightness and the LED/resistor voltages. Restore 1 kΩ, introduce an OPEN wire or switch, and confirm ideal steady loop current ≈0 A.',
      'Compute P_R=I²R from the SIMULATED current and compare with a 0.25 W component rating. Explain any divergence from the original 3 mA prediction using the LED model and node voltage readings; do not silently claim that all LEDs drop exactly 2.0 V.',
      'Submit calculations, a labeled schematic or simulation screenshot, a table with units, and a fault/fix note. A self-check must identify topology, assumptions, current and voltage conservation, evidence and fault reasoning. Mark virtual academic exercise only; no physical instrument or soldering proficiency is certified.'
    ],
    physicalEquipment:'An isolated 5 V current-limited bench DC supply (15 mA limit preferred), or a small low-voltage battery pack with measured voltage and LED-compatible resistor; fused DMM with intact leads, breadboard, standard LED whose datasheet/current rating and anode/cathode are identified, 1 kΩ 1/4 W resistor; optional 330 Ω 1/4 W at ≤5 V after rating calculation. No household mains, unknown supplies, high-voltage equipment or oversized battery packs.',
    physicalProcedure:[
      'Work only on the isolated, low-voltage setup if you have suitable tools and supervision. Check LED datasheet maximum continuous forward current, resistor tolerance/power and source voltage. At 5.0 V with assumed V_F=2.0 V and R=1 kΩ, calculate I≈3.0 mA, V_R≈3.0 V, P_R≈9 mW. Treat V_F as an assumption, not a guarantee.',
      'With power OFF, identify LED anode/cathode and wire +5 V -> resistor -> LED anode -> LED cathode -> source return on the breadboard. Check polarity and continuity only when the circuit is de-energized; verify no supply short. Do not bridge the resistor.',
      'Set the isolated supply to 5.0 V and a conservative 15 mA current limit BEFORE applying power. If using a battery, choose resistance so that calculated current remains below the LED rating even for plausible supply and forward-voltage variation; never use a 9 V battery and 330 Ω by default.',
      'First verify source voltage and the two component drops with the DMM in VOLTAGE mode, meter leads in V and COM, connected ACROSS each point/component. Record V_source≈V_R+V_LED with units, allowing for actual LED and supply behavior.',
      'To measure current, SWITCH POWER OFF first. Check DMM fuse, current range and terminals, move red lead to the correct fused mA/A jack, OPEN the series loop and place the meter IN SERIES. Restore power for the reading, then power off and return the red lead to the VOLTAGE jack. NEVER place a meter in current mode across the battery or power supply.',
      'Calculate P_R=V_R×I or I²R using actual readings; confirm LED current and resistor dissipation are below manufacturer ratings. Troubleshoot any unexpected reading before continuing; never up-rate parts or defeat the bench supply limit.',
      'With power OFF, deliberately open a single series connection or change 330 Ω to 1 kΩ only for a ≤5 V safely rated setup. Predict the symptom first, then observe at low voltage and restore the original circuit while off. Do not intentionally short the supply or reverse-drive the LED.',
      'Keep a polarity-marked circuit photo, predicted-versus-measured table with units, meter mode/port record, calculated resistor power, and fault/fix explanation. The physical route requires actual supervised/authorized observations; a simulator capture alone does not substantiate bench skill.'
    ]
  };
  function same(a,b){return JSON.stringify(a)===JSON.stringify(b);}
  function fields(lab){return {
    equipment:lab.equipment,procedure:lab.procedure,
    virtualEquipment:lab.virtual?.equipment,virtualProcedure:lab.virtual?.procedure,
    physicalEquipment:lab.physical?.equipment,physicalProcedure:lab.physical?.procedure
  };}
  function commit(lab,t){lab.equipment=t.equipment;lab.procedure=t.procedure.slice();
    lab.virtual.equipment=t.virtualEquipment;lab.virtual.procedure=t.virtualProcedure.slice();
    lab.physical.equipment=t.physicalEquipment;lab.physical.procedure=t.physicalProcedure.slice();}
  try{
    if(window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok!==true ||
       window.ALFRED_CETA_G08_LAB_EVIDENCE_STATUS?.ok!==true) throw Error('installed instructional and G08-011 lab-route corrections required');
    const course=window.ALFRED_CETA_DATA?.course;
    if(!Array.isArray(course)||course.length!==30)throw Error('30-module source mismatch');
    const m=course.find(x=>x.id==='M03');
    if(!m||!Array.isArray(m.pages)||!Array.isArray(m.labs)||m.labs.length!==1)throw Error('target module schema mismatch');
    const lab=m.labs[0];
    if(lab.id!=='LAB-001'||lab.title!=='Ohm’s Law + Current-Limited LED'||
       lab.objective!=='Build a safe low-voltage LED circuit, predict current/power, then verify voltage and current with a DMM.' ||
       lab.virtual?.tool!=='Falstad CircuitJS'||lab.virtual?.completion!=='Full academic completion'||
       lab.physical?.completion!=='Full academic completion'||
       lab.disposition!=='RETAIN_REQUIRED'||
       !Array.isArray(lab.virtual.links)||lab.virtual.links[0]?.[1]!=='https://www.falstad.com/circuit/' ||
       !/Virtual or reasoning-route academic evidence/.test(lab.evidence)||
       !/physical/i.test(lab.evidence) || !/not proof/.test(lab.evidence)) throw Error('source lab identifier or predecessor evidence mismatch');
    const current=fields(lab);
    if(same(current,improved)) {window[key]={ok:true,revision,alreadyApplied:true,labId:'LAB-001'};return;}
    if(!same(current,original))throw Error('unexpected or partially updated LAB-001: no mutation');
    // All checks above precede the six field assignments: fail closed on modified source.
    commit(lab,improved);
    window[key]={ok:true,revision,staged:true,labId:'LAB-001',modifiedFields:Object.keys(improved)};
  }catch(e){window[key]={ok:false,revision,error:String(e?.message||e)};
    if(typeof console!=='undefined'&&console.warn)console.warn('[Alfred G08-021] declined:',e);}
})();

check('ALFRED_CETA_G08_LAB001_TECHNICAL_STATUS');
/* Alfred University AU-ESET 301 | G08-022/023/024: three individual lab corrections.
 * STAGED ONLY, NOT FOR GITHUB UPLOAD. Use after installed academic overlays,
 * G08-011 evidence-route patch and G08-021 LAB-001 patch, before ceta.js.
 * Read-only baseline main commit ace81fd9e42e35e391c48005647981301287ead7;
 * course.js blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 * No mutation of lab IDs, scores, questions, learner progress or completion labels.
 */
(() => {
  'use strict';
  const statusKey='ALFRED_CETA_G08_LABS_002_003_013_STATUS';
  const revision='G08-022-024-20261029';
  const patches=[
  {
    "module": "M04",
    "labId": "LAB-002",
    "expectedTitle": "Series / Parallel Network Verification",
    "expectedObjective": "Predict and measure branch currents, node voltages and equivalent resistance in mixed resistor networks.",
    "expectedSourceWeek": 2,
    "expectedDisposition": "RETAIN_REQUIRED",
    "expectedVirtualTool": "Falstad CircuitJS",
    "expectedVirtualLinks": [
      [
        "Open Falstad",
        "https://www.falstad.com/circuit/"
      ]
    ],
    "expectedVirtualEvidence": "Schematic + calculations + predicted-vs-simulated table + troubleshooting path.",
    "expectedPhysicalEvidence": "Schematic + calculations + predicted-vs-measured table + troubleshooting path.",
    "expectedVirtualCompletion": "Full academic completion",
    "expectedPhysicalCompletion": "Full academic completion",
    "original": {
      "equipment": "DMM, breadboard, resistor assortment, low-voltage supply.",
      "procedure": [
        "Calculate equivalent resistance and expected values.",
        "Build the network and verify resistance de-energized.",
        "Power and measure node voltages and branch currents.",
        "Use KVL/KCL as an error check.",
        "Troubleshoot an intentional open or wrong resistor."
      ],
      "virtualEquipment": "Web browser only.",
      "virtualProcedure": [
        "Draw and calculate the mixed series/parallel network before simulation.",
        "Build the same resistor network in Falstad and verify equivalent resistance or source current.",
        "Record node voltages and branch currents.",
        "Check the results with KVL and KCL.",
        "Create one open or wrong-resistor fault and trace it from the changed measurements."
      ],
      "physicalEquipment": "DMM, breadboard, resistor assortment, low-voltage supply.",
      "physicalProcedure": [
        "Calculate equivalent resistance and expected values.",
        "Build the network and verify resistance de-energized.",
        "Power and measure node voltages and branch currents.",
        "Use KVL/KCL as an error check.",
        "Troubleshoot an intentional open or wrong resistor."
      ]
    },
    "improved": {
      "equipment": "Paper/simulation first: isolated adjustable 6.0 V DC supply with a conservative 15 mA current limit, three 0.25 W resistors (R1=1.0 kΩ, R2=2.0 kΩ, R3=3.0 kΩ), a breadboard and insulated leads for the optional physical route; correctly rated fused DMM and inspected probes. No mains, unknown sources, or arbitrary current-mode connections.",
      "procedure": [
        "DRAW THE EXACT NETWORK. Source +6.0 V -> R1 (1.0 kΩ) -> NODE A; from A, two SEPARATE parallel return branches R2 (2.0 kΩ) -> 0 V and R3 (3.0 kΩ) -> 0 V; connect source negative to the same 0 V return. R1 is series with R2||R3. Label A and reference 0 V; do not place R2 and R3 in series.",
        "COMPUTE BEFORE OBSERVING. R2||R3=(2000×3000)/(2000+3000)=1200 Ω; R_total=2200 Ω; I_source=6.0/2200 A=2.727 mA. V_R1=2.727 V; V_A=6.0−2.727=3.273 V; I_R2=3.273/2000=1.636 mA; I_R3=3.273/3000=1.091 mA. Keep at least three significant figures for intermediate values.",
        "INDEPENDENT CHECKS. KCL at A: 2.727 mA arriving ≈1.636+1.091 mA leaving; KVL along either branch: 6.000 V ≈2.727+3.273 V. Predict P_R1=I_source²×1000≈7.44 mW, P_R2=V_A²/2000≈5.36 mW, P_R3=V_A²/3000≈3.57 mW; compare with each 0.25 W resistor rating.",
        "CHOOSE A ROUTE. In Falstad, reproduce the labeled topology and measure node A relative to source return. A physical low-voltage build is optional, subject to equipment ratings, authorized safe work and inspection; make or change connections only with source OFF. Meter resistance/continuity testing requires power OFF and disconnected components as applicable.",
        "MEASURE SAFELY. For node/component voltages use a DMM in voltage mode (V/COM) ACROSS the selected nodes. Infer each branch current from V_A/R_branch. To measure current directly, de-energize, select the correctly fused current range/lead jack, break the target branch, insert the meter IN SERIES, re-energize and return leads to V/COM with power OFF; never place current mode across the source.",
        "FAULT TEST. Predict before altering R3: an OPEN R3 branch leaves R2=2 kΩ; expected I_source=2.000 mA and V_A=4.000 V, with I_R3=0. Compare the observed A voltage and KCL, find the open, then restore normal operation. Do NOT deliberately short the source or supply rails.",
        "EVIDENCE RUBRIC (five checks): labeled source/network/return and node A; equivalent-resistance calculation with units; baseline KCL/KVL/branch-current and power checks; safe meter settings plus predicted-vs-observed data; fault diagnosis and restored measurements. State numerical differences due to resistor tolerance and meter accuracy. Virtual data do not prove physical proficiency."
      ],
      "virtualEquipment": "Browser with Falstad CircuitJS; use only a simulated 6 V DC source, 1 kΩ series resistor and 2 kΩ/3 kΩ parallel branches. No physical hardware required.",
      "virtualProcedure": [
        "Draw and label source +6 V, R1=1 kΩ, node A, R2=2 kΩ and R3=3 kΩ as TWO parallel branches to source return 0 V. Hand-calculate R_total=2.2 kΩ, I_source≈2.727 mA and V_A≈3.273 V before opening the simulator.",
        "Construct that exact network in Falstad CircuitJS, explicitly sharing both parallel branch end nodes. Set the ideal source to 6.0 V and inspect its reported source current and node voltages. Export/save the topology or capture an annotated screenshot.",
        "Record voltage across R1, node A versus 0 V, each parallel resistor voltage and source/branch currents; derive each current using I=V/R if no direct readout. Check KCL: I_R2+I_R3≈I_source, and KVL: V_R1+V_A≈6 V. Label A, mA, V, kΩ and mW correctly.",
        "Predict the change BEFORE opening only the R3 branch: R_total becomes 3.0 kΩ, I_source becomes 2.0 mA, and node A rises to 4.0 V while R3 current becomes zero. Simulate that open, record what changed, locate the fault by differences, then restore R3.",
        "Calculate each resistor dissipated power and compare against 0.25 W. Explain any differences if simulator model, source configuration or resistor values differ from the assigned ideal example. Provide the original and faulted schematic/captures plus a predicted/observed table and a root-cause explanation."
      ],
      "physicalEquipment": "Only isolated current-limited 6.0 V DC bench supply, preset limit ≈15 mA, three 0.25 W resistors (1 kΩ, 2 kΩ, 3 kΩ), breadboard, insulated leads and inspected fused DMM with correctly rated probes. Optional supervised work; no mains, line-connected power circuits, lithium pack improvisation or high-energy experiments.",
      "physicalProcedure": [
        "Before touching parts, calculate the precise expected R_total=2.2 kΩ, I_source≈2.727 mA, V_A≈3.273 V, I_R2≈1.636 mA and I_R3≈1.091 mA with supply at 6.0 V; check resistor 0.25 W ratings and calculate theoretical powers.",
        "Switch supply OFF. Connect source positive to R1=1 kΩ to node A; connect R2=2 kΩ and R3=3 kΩ separately from A to common 0 V return. Inspect the breadboard rail continuity, supply polarity and absence of shorts. Set supply current limit near 15 mA BEFORE energizing.",
        "Power on and read source voltage and node A voltage relative to 0 V with DMM red lead in V jack and black in COM; measure resistor voltage drops in parallel with each resistor. Compare V_R1+V_A to measured source voltage and compute I_R2/I_R3 from drops.",
        "If making direct current measurements, first turn supply OFF, check fuse and correct mA input, break ONE branch and place DMM in series (never across the supply). Turn supply on to read, turn it off again, and restore meter leads to V/COM. Unnecessary ammeter insertion can be omitted when voltage-derived current is sufficient.",
        "Power OFF, remove one end of R3 to make a deliberate OPEN only (never short any branch/source). Predict I_source≈2.0 mA, V_A≈4.0 V, then power on and compare. Power off to reconnect and confirm restored baseline. Do not change wiring energized.",
        "Record dated schematic/circuit photograph, supply setpoint and actual measured voltage, meter ports/ranges, baseline and faulted node values, theoretical and measured-derived currents/powers, Kirchhoff checks, uncertainty/tolerance, final root cause and verification. Physical skill is only evidenced by actual safely performed work, never inferred from the simulation."
      ]
    }
  },
  {
    "module": "M05",
    "labId": "LAB-003",
    "expectedTitle": "DMM / Bench Supply / Oscilloscope Familiarization",
    "expectedObjective": "Use core bench instruments safely and explain what each control or measurement tells you.",
    "expectedSourceWeek": 3,
    "expectedDisposition": "SPLIT_INTO_TWO_RELATED_ACTIVITIES",
    "expectedVirtualTool": "Tinkercad Circuits + Falstad",
    "expectedVirtualLinks": [
      [
        "Open Tinkercad Circuits",
        "https://www.tinkercad.com/learn/circuits"
      ],
      [
        "Open Falstad",
        "https://www.falstad.com/circuit/"
      ]
    ],
    "expectedVirtualEvidence": "Virtual-instrument checklist + annotated waveform screenshot + safe-use notes.",
    "expectedPhysicalEvidence": "Instrument checklist + one annotated waveform + safe-use notes.",
    "expectedVirtualCompletion": "Full academic completion",
    "expectedPhysicalCompletion": "Full academic completion",
    "original": {
      "equipment": "DMM, bench supply, oscilloscope, probe, function generator if available.",
      "procedure": [
        "Inspect leads/probes and identify ratings.",
        "Practice voltage/resistance/continuity without unsafe current-mode habits.",
        "Configure supply voltage/current limit and observe CV/CC behavior.",
        "Compensate/check probe and measure a known waveform.",
        "Capture amplitude, period and frequency.",
        "Before measuring, record the instrument and probe setting, calibration status if known, circuit revision, expected value and acceptable tolerance. Explain why display resolution alone does not establish accuracy. Repeat the measurement and account for probe loading or lead resistance."
      ],
      "virtualEquipment": "Web browser only.",
      "virtualProcedure": [
        "Use Tinkercad to identify the virtual supply, multimeter, breadboard, and leads; note what each instrument measures.",
        "Practice voltage, resistance, and continuity-style checks on a simple low-voltage circuit without moving into unsafe current-measurement habits.",
        "Use Falstad to observe a known waveform with the virtual scope and record amplitude, period, and frequency.",
        "Change one source setting and predict the new waveform before viewing it.",
        "Write a short checklist of the physical instrument habits that simulation cannot teach and must be practiced later.",
        "In the simulation, before measuring, record the instrument and probe setting, calibration status if known, circuit revision, expected value and acceptable tolerance. Explain why display resolution alone does not establish accuracy. Repeat the measurement and account for probe loading or lead resistance."
      ],
      "physicalEquipment": "DMM, bench supply, oscilloscope, probe, function generator if available.",
      "physicalProcedure": [
        "Inspect leads/probes and identify ratings.",
        "Practice voltage/resistance/continuity without unsafe current-mode habits.",
        "Configure supply voltage/current limit and observe CV/CC behavior.",
        "Compensate/check probe and measure a known waveform.",
        "Capture amplitude, period and frequency.",
        "Before measuring, record the instrument and probe setting, calibration status if known, circuit revision, expected value and acceptable tolerance. Explain why display resolution alone does not establish accuracy. Repeat the measurement and account for probe loading or lead resistance."
      ]
    },
    "improved": {
      "equipment": "Two structured activities: A) DMM and isolated, current-limited low-voltage supply with a 1.0 kΩ 0.25 W load for a 5 V worked case; B) safe 1 kHz low-amplitude function generator and earth-grounded oscilloscope with a properly compensated 10× probe, if actually available. Simulator-only route allowed. Inspect leads/ranges before any physical use. Never probe mains/unknown energized circuits or defeat protective earth.",
      "procedure": [
        "ACTIVITY A (DMM + BENCH SUPPLY): Start from an isolated 5.0 V source and 1.0 kΩ resistor. Predict I=5.0/1000=5.0 mA and P_R=V²/R=25 mW. Mark source positive, return and the load terminals on a diagram; power must be OFF for resistance or continuity checks.",
        "Set supply current limit above the expected 5 mA, e.g. 10 mA, with the output OFF; then energize the verified 1 kΩ load and record loaded voltage/current plus CV status. Do NOT create a short to test current limiting. If the bench supply supports it, lower the limit to 2 mA and predict CC behavior: resistor drop near 2 V and 2 mA; restore 10 mA limit with output OFF. Explain model assumptions and deviations.",
        "DMM RULES: For voltage, use V/COM terminals and parallel probes; for resistance/continuity, power OFF and de-energize/disconnect as required. For current, source OFF, move red lead to correctly fused mA/A range, open circuit, insert meter IN SERIES, power on, then OFF before restoring red lead to V. NEVER place a meter in current mode across a voltage source.",
        "ACTIVITY B (OSCILLOSCOPE): For a safe isolated function-generator example, select a nominal 1 kHz sine wave, 2.0 V peak-to-peak and 0 V DC offset. Expect period T=1/f=1.0 ms; with 0.25 ms/div the trace spans four horizontal divisions/cycle and with correctly configured 0.5 V/div four vertical divisions peak-to-peak. Record probe ratio and actual displayed scaling.",
        "Connect an ordinary grounded-scope probe reference only to the known safe circuit return/ground as specified by instrument documentation; the probe ground clip may connect to protective earth. Never clip to arbitrary energized/floating nodes; never defeat scope earth. Confirm 10× probe ratio in both probe and channel setup and compensate using the manufacturer calibration output where available.",
        "Check instrument loading and uncertainty: function-generator amplitude may be specified for a 50 Ω load, so measured amplitude can differ with a high-impedance input. Note bandwidth, sampling, probe attenuation, coupling and meter resolution versus accuracy. Compare predicted waveforms and measurements, correcting setup mistakes before faulting the circuit.",
        "RUBRIC: A) measurement plan, correct meter ports/modes, values and CV/CC reasoning; B) waveform diagram with Vpp, period/frequency, scale and safe ground reference; repeat measurement with units/settings; uncertainty explanation and one wrong-configuration diagnosis. Simulation teaches concepts, not verified physical probe or meter skill."
      ],
      "virtualEquipment": "Tinkercad Circuits (where the needed virtual instruments are supported) and Falstad CircuitJS; browser only. Use 5 V/1 kΩ test setup and ideal 1 kHz/2 Vpp conceptual scope example. Do not represent simulator menus as actual power-supply hardware controls.",
      "virtualProcedure": [
        "Complete virtual ACTIVITY A: draw 5.0 V source and 1 kΩ load. Predict 5.0 mA and 25 mW, record the simulator supply and load voltage/current, and identify DMM V/COM versus fused current jack in a paper instrument checklist.",
        "In the virtual model, reason through constant voltage when current limit exceeds 5 mA and constant current if a modeled supply is limited to 2 mA (approximately 2 V across 1 kΩ). If simulator has no current-limited source/CC indicator, present this AS A PAPER CALCULATION, not a simulated observation. Never short any source to demonstrate CC.",
        "Complete virtual ACTIVITY B: configure a safe 1 kHz sine waveform at 2 Vpp, 0 V offset; predict 1 ms period, four time divisions per period at 0.25 ms/div and four vertical divisions peak-to-peak at 0.5 V/div with properly normalized 1× displayed ratio. If simulator scope differs, annotate its actual time/amplitude readouts rather than claiming matching hardware knobs.",
        "Predict and then change one source frequency to 2 kHz, making the expected period 0.5 ms, or change amplitude to 1 Vpp. Observe one changed waveform and explain why frequency versus amplitude changes different axes.",
        "Record a virtual-instrument identification checklist, labeled source/load diagram, wave screenshots with scales, formula calculations, correct ground/probe-handling safety rules, potential 50 Ω loading caveat and three physical-skills tasks still unverified. No graded claim of hands-on competence."
      ],
      "physicalEquipment": "Isolated current-limited 5 V DC supply; inspected fused DMM; 1 kΩ 0.25 W resistor; insulated leads; for an optional separate scope segment, manufacturer-approved compensated 10× probe, properly earthed oscilloscope and safe isolated low-amplitude function generator. Never use household mains, floating scope earth, unknown power circuits or unsafe scope grounding.",
      "physicalProcedure": [
        "Inspect all meter/probe leads, ratings, fuse/jacks, supply output OFF and known isolation. Draw the 5 V-to-1 kΩ-to-return circuit; calculate expected 5 mA and 25 mW and confirm the physical resistor rating.",
        "With supply OFF, connect the 1 kΩ load, set 5.0 V and current limit 10 mA. Power on, measure V/COM voltage ACROSS the load and note current reading/indication. Turn output OFF before any resistance or continuity reading. Record actual voltage and inferred I=V/R.",
        "If the bench supply supports true CC indication, with the verified load and no short, reduce current limit to 2 mA under the manufacturer procedure and observe the loaded voltage near 2 V; restore the limit (with output OFF) and note whether supply or lead resistance alters the ideal prediction. Do not improvise or force CC on unsupported equipment.",
        "Optional direct DMM current: output OFF, verify meter fuse and proper current jack, break the 1 kΩ loop, insert the meter in series, power on to read, switch OFF, then move red lead back to V jack. Do not put mA input across source or measure resistance on an energized circuit.",
        "For optional scope work, use only a safe isolated signal generator; verify probe compensation and matching 10× scope setup, then connect probe ground clip to known safe return. Scope protective-earth connection stays intact; do not probe unknown/floating high-potential points. Set nominal 1 kHz, 2 Vpp sine, zero offset and check 1 ms period, volts/division, probe and 50 Ω termination conventions.",
        "Repeat a voltage and a waveform measurement; record measured versus expected, instrument model/range and calibration status if known, probe ratio, supply CV/CC mode, timebase, bandwidth and whether source/load impedance could explain discrepancy.",
        "Submit physical meter-use evidence and, if performed, scope waveform photo with instrument setup. If the function generator or scope is unavailable, mark the scope route as conceptual/simulated; do not claim actual physical oscilloscope proficiency."
      ]
    }
  },
  {
    "module": "M05",
    "labId": "LAB-013",
    "expectedTitle": "Schematic Signal Tracing + Root Cause",
    "expectedObjective": "Use a schematic and expected signal path to isolate a fault systematically.",
    "expectedSourceWeek": 13,
    "expectedDisposition": "RETAIN_WITH_CROSS_REFERENCES",
    "expectedVirtualTool": "Falstad CircuitJS",
    "expectedVirtualLinks": [
      [
        "Open Falstad",
        "https://www.falstad.com/circuit/"
      ]
    ],
    "expectedVirtualEvidence": "Annotated schematic + measurement trail + fault tree + root-cause report.",
    "expectedPhysicalEvidence": "Annotated schematic + fault tree + root-cause report.",
    "expectedVirtualCompletion": "Full academic completion",
    "expectedPhysicalCompletion": "Full academic completion",
    "original": {
      "equipment": "Known circuit/simulation, schematic, DMM/scope.",
      "procedure": [
        "Mark power, ground, input, processing and output blocks.",
        "Predict test-point values.",
        "Measure from known-good toward failure.",
        "Record each observation before changing anything.",
        "State root cause and verification step."
      ],
      "virtualEquipment": "Web browser only.",
      "virtualProcedure": [
        "Choose a working simulated circuit and save or sketch its schematic.",
        "Mark power, ground, input, processing, and output sections and predict key node values.",
        "Create one hidden fault such as an open, wrong value, or bad connection.",
        "Measure from known-good toward the failed output and record each observation before editing the circuit.",
        "State root cause, corrective action, and the measurement that proves the fix."
      ],
      "physicalEquipment": "Known circuit/simulation, schematic, DMM/scope.",
      "physicalProcedure": [
        "Mark power, ground, input, processing and output blocks.",
        "Predict test-point values.",
        "Measure from known-good toward failure.",
        "Record each observation before changing anything.",
        "State root cause and verification step."
      ]
    },
    "improved": {
      "equipment": "Paper/Falstad first; a safely isolated 5.0 V DC source, Rtop=1 kΩ and Rbottom=1 kΩ (each 0.25 W), insulated breadboard/leads and correctly fused DMM only for optional physical work. A DMM is sufficient; no oscilloscope is required for this DC tracing case. No high voltage or unknown powered assemblies.",
      "procedure": [
        "DRAW THE TESTABLE NETWORK. Source +5.0 V (TP1) -> upper Rtop=1 kΩ -> output node (TP2) -> lower Rbottom=1 kΩ -> return TP0=0 V. Both resistors form ONE series divider, not parallel legs. Mark ground, input, series processing element and output.",
        "PREDICT AND LABEL. Healthy circuit: V(TP1)=5.0 V, V(TP0)=0 V, I=5/(1000+1000)=2.5 mA, and V(TP2)=2.5 V relative to TP0. Each resistor dissipates I²R=6.25 mW. A DMM with high input resistance should minimally load this low-resistance divider.",
        "CREATE ONE OPEN FAULT, NEVER A SHORT: With Rbottom OPEN, negligible ideal DC current flows and TP2 tends toward +5 V through the still-connected Rtop (assuming a high-impedance meter/no additional load). With Rtop OPEN, TP2 is pulled to 0 V by Rbottom. These contrasting signatures support fault isolation; document any real leakage or meter loading.",
        "TRACE systematically: verify safe return TP0, measure source TP1 against TP0, then TP2 against TP0; compare observed voltage with the healthy predicted table. Use the LAST GOOD/FIRST BAD rule to locate which section is inconsistent before changing components. A single reading without known reference/expected value is not a root-cause proof.",
        "Choose simulation or supervised low-voltage physical work. Place a voltage-meter connection ACROSS node and reference in V/COM mode; turn source OFF before any resistance/continuity checks or replacing parts. For this case derive current from the known voltage drops rather than risking an unnecessary series ammeter insertion. Do not clip an earth-grounded oscilloscope lead to arbitrary unknown live nodes.",
        "After documenting the suspected open, turn source OFF, restore the chosen resistor connection, re-energize and show TP2 returns near 2.5 V. Separate source faults from branch faults: if TP1 is not near 5 V, troubleshoot the supply/return first rather than immediately blaming a resistor.",
        "EVIDENCE RUBRIC: annotated divider/schematic with TP0/TP1/TP2; expected healthy and two hypothetical open signatures with units; observed data in original faulted circuit; ranked hypothesis and safe verification; corrected reading with measured-versus-predicted interpretation. Present simulated faults honestly and never infer tactile skill from screenshots."
      ],
      "virtualEquipment": "Falstad CircuitJS browser simulation of a 5 V, two-1 kΩ voltage divider; record TP0=0 V, TP1=5 V and TP2=2.5 V and one OPEN fault. No hardware required.",
      "virtualProcedure": [
        "Build exactly the +5 V -> Rtop 1 kΩ -> TP2 -> Rbottom 1 kΩ -> TP0 return network. Name both test points in a labeled schematic and predict healthy source current 2.5 mA, TP2 2.5 V and each resistor power 6.25 mW.",
        "Capture healthy values at TP0, TP1 and TP2, then remove ONLY the lower resistor connection to create an open branch. Predict TP2 rises toward +5 V and total current falls toward zero (ideal open, high-impedance voltmeter). Do not add a short circuit.",
        "Observe the faulted TP1/TP2 readings without editing the source; identify the first unexpected point, infer why the voltage distribution changed and explain the competing upper-resistor-open case (which would pull TP2 to 0 V through the lower resistor).",
        "Restore the lower resistor, observe TP2 near +2.5 V and unchanged TP1 near +5.0 V. Export or capture before/fault/after schematics and a table with hypotheses, measured values, source conditions and decision.",
        "Conclude with a compact root-cause report showing what was known, what changed, the exact open and final verification. State that simulation cannot replicate every intermittent physical connector or DMM loading behavior."
      ],
      "physicalEquipment": "Isolated regulated/current-limited 5.0 V source, two 1 kΩ 0.25 W resistors, breadboard, inspected DMM and leads; optional supervised DC-only exercise. No unknown mains-related devices, high-voltage rails or unstable batteries.",
      "physicalProcedure": [
        "Calculate expected TP1=5 V, TP2=2.5 V, TP0=0 V, I=2.5 mA, and 6.25 mW dissipation in each resistor. Power OFF and build the two-1 kΩ series divider, mark TP0/TP1/TP2 and check source return wiring; choose a modest current limit before applying 5 V.",
        "Use DMM in V/COM mode to read TP1-to-TP0 and TP2-to-TP0, documenting initial healthy values and the actual loaded source voltage. Do not measure resistance/continuity while the source is energized.",
        "Turn supply OFF and disconnect one end of LOWER Rbottom to simulate an open. Predict TP2 moves toward source voltage and current nearly zero; re-energize only after confirming no short. Observe TP1 and TP2 without altering connections while energized.",
        "Power OFF, restore Rbottom and verify TP2 returns near half of measured TP1. Do not intentionally short resistor legs or rails. A DMM in current mode is not needed; source current follows from known resistor drops. If an unexpected node voltage persists, stop and recheck reference and wiring before continuing.",
        "Submit labeled circuit photo, before/open/after voltage table, meter range and reference location, evidence of the open, diagnosis, corrective step, and final re-test. A performed physical record is distinct from simulator-only evidence."
      ]
    }
  }
];
  const fields=l=>({equipment:l.equipment,procedure:l.procedure,
    virtualEquipment:l.virtual?.equipment,virtualProcedure:l.virtual?.procedure,
    physicalEquipment:l.physical?.equipment,physicalProcedure:l.physical?.procedure});
  const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
  const evidenceFor=l=>'Virtual or reasoning-route academic evidence: '+l.virtual.evidence+
    '  |  Optional physical equipment-route evidence (only if that work is safely undertaken): '+l.physical.evidence+
    '  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.';
  function apply(l,t){
    l.equipment=t.equipment;l.procedure=t.procedure.slice();
    l.virtual.equipment=t.virtualEquipment;l.virtual.procedure=t.virtualProcedure.slice();
    l.physical.equipment=t.physicalEquipment;l.physical.procedure=t.physicalProcedure.slice();
  }
  try {
    if(window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok!==true ||
       window.ALFRED_CETA_G08_LAB_EVIDENCE_STATUS?.ok!==true ||
       window.ALFRED_CETA_G08_LAB001_TECHNICAL_STATUS?.ok!==true)
      throw Error('required installed instructional and G08 LAB-001/evidence predecessor status missing');
    const course=window.ALFRED_CETA_DATA?.course;
    if(!Array.isArray(course)||course.length!==30)throw Error('canonical 30-module course missing');
    const found=[];let toChange=0;
    // Validate every target BEFORE any modification. Mixed old/new states are refused.
    for(const p of patches){
      const mod=course.find(m=>m.id===p.module);
      if(!mod||!Array.isArray(mod.pages)||!Array.isArray(mod.labs)) throw Error('target module not found: '+p.module);
      const lab=mod.labs.find(x=>x.id===p.labId);
      if(!lab||lab.title!==p.expectedTitle||lab.objective!==p.expectedObjective||
         lab.sourceWeek!==p.expectedSourceWeek||lab.disposition!==p.expectedDisposition||
         lab.virtual?.tool!==p.expectedVirtualTool||
         !same(lab.virtual?.links,p.expectedVirtualLinks)||
         lab.virtual?.evidence!==p.expectedVirtualEvidence||lab.physical?.evidence!==p.expectedPhysicalEvidence||
         lab.virtual?.completion!==p.expectedVirtualCompletion||lab.physical?.completion!==p.expectedPhysicalCompletion||
         lab.evidence!==evidenceFor(lab)) throw Error('target lab provenance or evidence mismatch: '+p.labId);
      if(!Array.isArray(lab.procedure)||!Array.isArray(lab.virtual.procedure)||!Array.isArray(lab.physical.procedure))
        throw Error('procedure array missing: '+p.labId);
      const f=fields(lab);
      if(same(f,p.original))toChange++;
      else if(!same(f,p.improved))throw Error('unexpected field changes: '+p.labId);
      found.push(lab);
    }
    if(toChange!==0 && toChange!==patches.length) throw Error('partial/mixed update refused');
    if(toChange===0){window[statusKey]={ok:true,revision,alreadyApplied:true,labIds:patches.map(p=>p.labId)};return;}
    for(let i=0;i<patches.length;i++)apply(found[i],patches[i].improved);
    window[statusKey]={ok:true,revision,staged:true,labIds:patches.map(p=>p.labId),changedFieldsPerLab:6};
  }catch(e){window[statusKey]={ok:false,revision,error:String(e?.message||e)};
    if(typeof console!=='undefined'&&console.warn)console.warn('[Alfred G08 LAB002/003/013] declined:',e);
  }
})();

check('ALFRED_CETA_G08_LABS_002_003_013_STATUS');
/* REPAIRED DROP-IN REPLACEMENT for G08-025/026/027 (source-level predecessor compatibility).
 * Replaces—not adds to—the ORIGINAL same-purpose JS script during final packaging.
 * Original script retained unmodified in this review archive for rollback.
 * Alfred University AU-ESET 301 G08-025/026/027 technical laboratory corrections.
 * STAGED SUPPLEMENTAL REVIEW — NOT FOR DIRECT GITHUB UPLOAD.
 * Original canonical course.js blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e
 * Commit ace81fd9e42e35e391c48005647981301287ead7.
 * Run after installed academic overlays and the previous cumulative G08 lab
 * patches, before ceta.js. No question, scoring, user state or achievement edits.
 */
(() => {
 'use strict';
 const statusKey='ALFRED_CETA_G08_LABS_004_005_006_STATUS';
 const revision='G08-025-027-20261029';
 const patches=[
  {
    "module": "M07",
    "labId": "LAB-004",
    "expectedTitle": "RC Time Constant + Filter Response",
    "expectedObjective": "Connect capacitor theory to measured charge/discharge and basic frequency response.",
    "expectedWeek": 4,
    "expectedDisposition": "SPLIT_AS_APPROPRIATE",
    "expectedVirtualTool": "Falstad CircuitJS",
    "expectedVirtualLinks": [
      [
        "Open Falstad",
        "https://www.falstad.com/circuit/"
      ]
    ],
    "expectedVirtualEvidence": "Calculations + two simulator scope captures + short interpretation.",
    "expectedPhysicalEvidence": "Calculations + two scope captures + short interpretation.",
    "expectedVirtualCompletion": "Full academic completion",
    "expectedPhysicalCompletion": "Full academic completion",
    "expectedVirtualVerification": "Physical scope probing is optional later.",
    "original": {
      "equipment": "Oscilloscope, function generator, breadboard, R/C components.",
      "procedure": [
        "Calculate RC time constant.",
        "Apply a step/square wave and capture capacitor response.",
        "Measure the 63% point and compare with prediction.",
        "Configure a basic low-pass/high-pass network.",
        "Change frequency and document attenuation/phase trend."
      ],
      "virtualEquipment": "Web browser only.",
      "virtualProcedure": [
        "Calculate the RC time constant and expected 63% point.",
        "Build the RC network in Falstad and drive it with a step or square wave.",
        "Use the scope trace to estimate the 63% charging point and compare it with your calculation.",
        "Configure low-pass and high-pass versions and sweep several input frequencies.",
        "Record attenuation/phase trends and explain what changed."
      ],
      "physicalEquipment": "Oscilloscope, function generator, breadboard, R/C components.",
      "physicalProcedure": [
        "Calculate RC time constant.",
        "Apply a step/square wave and capture capacitor response.",
        "Measure the 63% point and compare with prediction.",
        "Configure a basic low-pass/high-pass network.",
        "Change frequency and document attenuation/phase trend."
      ]
    },
    "improved": {
      "equipment": "Use paper + Falstad first. Optional physical route: isolated, adjustable 0–5 V low-energy DC/pulse source or low-voltage function generator, 10 kΩ 0.25 W resistor, 1 µF nonpolar capacitor rated >=10 V, breadboard, and rated oscilloscope/probe. Confirm capacitor type/rating and common return. No mains, exposed line-powered boards or connection of an ordinary earth-grounded scope clip to an arbitrary energized node.",
      "procedure": [
        "PART A — FIX THE CIRCUIT AND UNITS. 10.0 kΩ R from isolated source output to NODE A; 1.00 µF NONPOLAR C from A to common 0 V return. Measure Vc from A to return. Convert R=10000 Ω and C=0.000001 F; tau=RC=0.0100 s=10.0 ms.",
        "CHARGE/DISCHARGE PREDICTION. For a fully discharged capacitor after an ideal 0→5.00 V step, Vc(t)=5[1−exp(−t/0.0100)] V: Vc(10.0 ms)=3.161 V, Vc(50.0 ms)=4.966 V. After an ideal 5→0 V step from 5 V, Vc(10.0 ms)=5exp(−1)=1.839 V. The 63.2% level is measured RELATIVE TO THE STEP SIZE (or 36.8% remaining for discharge), not necessarily an absolute 3.16 V if the initial voltage differs.",
        "SIMULATE TRANSIENT FIRST. Use a 0–5 V, 5 Hz, 50% duty-cycle square wave (100 ms high and 100 ms low, each 10 tau), starting after the capacitor has settled near 0 V. Show input and Vc against the SAME return; use graph cursors to read rise time from the edge to 63.2% and discharge to 36.8%. Record actual source levels and numeric cursor units.",
        "PART B — TRANSFORM TO FILTER. Low-pass = same R in series and C to return, read Vout ACROSS C at A. High-pass = C in series from Vin to A, R from A to return, read Vout ACROSS R. Use a small 1.00 Vpp sine centered at 0 V with a NONPOLAR capacitor, and compare input and output at the same frequency. Do not reverse-connect a polarized electrolytic across a bipolar sine source.",
        "CALCULATE FREQUENCY RESPONSE. fc=1/(2πRC)=15.9155 Hz. Sweep roughly 1.59, 15.9, 159 Hz (0.1×, 1× and 10× fc). Low-pass |Vout/Vin|=1/sqrt(1+(f/fc)^2)≈0.995,0.707,0.0995; high-pass |Vout/Vin|=(f/fc)/sqrt(1+(f/fc)^2)≈0.0995,0.707,0.995. At fc each magnitude≈−3.01 dB relative to passband; do not conflate amplitude ratio with a power ratio.",
        "PHASE AND MEASUREMENT LIMITS. In the ideal unloaded model, low-pass output lags input (~−45° at fc) and high-pass leads (~+45° at fc). An actual generator may be specified into 50 Ω and a probe may load the filter. Check actual Vin, ground reference and probe attenuation; document if frequency response does not match the ideal model.",
        "SAFETY/RESET. Reconfigure wires with source output OFF, allow the capacitor to discharge through the resistor and confirm low voltage before touching. With a ground-referenced oscilloscope, use the verified isolated common return for probe reference; never defeat protective earth or clip it to arbitrary mains/floating points.",
        "EVIDENCE RUBRIC (unscored practical exercise). Provide circuit diagram with common return and measurement nodes; units and tau/fc calculations; two labeled plots (time response and frequency sweep showing BOTH filter outputs), predicted-versus-observed table at the stated frequencies; one explained discrepancy. Simulator work demonstrates conceptual application, NOT physical probe skill or grade-based mastery."
      ],
      "virtualEquipment": "Web browser with Falstad CircuitJS; isolated 10 kΩ/1 µF model, 0–5 V 5 Hz step-wave and 1.00 Vpp sine; no real power or probes.",
      "virtualProcedure": [
        "Before running Falstad, draw the RC low-pass (10 kΩ series, 1 µF nonpolar to return, Vc at junction) and calculate tau=10 ms and the expected 3.161 V after one time constant from a 0→5 V edge.",
        "Drive a model with a 0–5 V 5 Hz 50% square wave; allow settling and compare input and Vc with graph traces or cursor readouts. Verify timing in milliseconds, not seconds or microseconds; record the actual simulated 10 ms rise point and discharge point.",
        "Save a time-response screenshot with input/output labels, vertical volts and horizontal ms; record whether the measured 63.2% and 36.8% values match the exponential model.",
        "Switch to an AC 1 Vpp sine. Reuse the R/C in low-pass (output across capacitor); then reconnect as high-pass (output across resistor). At 1.59,15.9,159 Hz record Vin and Vout and compute the amplitude ratios; compare with the predicted 0.995/0.707/0.0995 and 0.0995/0.707/0.995 patterns.",
        "For phase, compare SAME reference trace crossing/time lag; at fc expect about −45° for the low-pass and +45° for the high-pass. If the virtual graph has no reliable phase cursor, record a paper prediction instead of inventing an observation.",
        "Change R to 20 kΩ while keeping C fixed: predict tau=20 ms and fc≈7.96 Hz, then observe or calculate. Explain how input load and simulator model assumptions influence comparisons.",
        "Submit original virtual evidence requirements with two annotated scope captures, table and interpretation; keep it labeled simulated, never physical proficiency."
      ],
      "physicalEquipment": "Optional ONLY: isolated <=5 V low-voltage bench source/pulse generator, inspected oscilloscope with rated probe, 10.0 kΩ 0.25 W resistor, 1.00 µF nonpolar capacitor with >=10 V working rating, breadboard and safe connecting leads. Verify generator output/load calibration and permitted scope-ground return.",
      "physicalProcedure": [
        "Confirm the source is isolated and <=5 V, capacitor nonpolar and >=10 V, and scope/probe reference is compatible with the common return; NO mains or unknown circuits. Power source OFF for all rewiring.",
        "Assemble 10 kΩ series R and 1 µF C to return. Observe a low-voltage 0–5 V, 5 Hz, 50% square-wave step; mark the true input edge and find the capacitor 63.2% rise and 36.8% discharge points near 10 ms. A scope ground lead belongs at verified permitted return only.",
        "Turn source OFF and let the capacitor discharge through R before rewiring. For a low-amplitude sine, compare output across C (low-pass) and across R after C (high-pass); use identical input amplitude at the circuit, recording any generator 50 Ω/load convention.",
        "Sweep near 1.59,15.9,159 Hz, write input/output Vpp and calculated ratios, then compare with predictions and state likely tolerance/loading causes of disagreement.",
        "Supply labeled time and frequency traces and a safe-work checklist. Do not use this paper/video/simulation exercise as a claim of verified real-world probe competence."
      ]
    }
  },
  {
    "module": "M06",
    "labId": "LAB-005",
    "expectedTitle": "Foundation Practical — Build / Measure / Fault-Isolate",
    "expectedObjective": "Independently solve, build, verify and troubleshoot a small circuit without tutorial copying.",
    "expectedWeek": 5,
    "expectedDisposition": "RETAIN_CUMULATIVE_CHECKPOINT",
    "expectedVirtualTool": "Falstad CircuitJS",
    "expectedVirtualLinks": [
      [
        "Open Falstad",
        "https://www.falstad.com/circuit/"
      ]
    ],
    "expectedVirtualEvidence": "Mastery checklist + calculations + simulator evidence + fault-isolation narrative.",
    "expectedPhysicalEvidence": "Mastery-gate checklist + calculations + fault-isolation narrative.",
    "expectedVirtualCompletion": "Full academic completion",
    "expectedPhysicalCompletion": "Full academic completion",
    "expectedVirtualVerification": "Physical build repetition is optional later.",
    "original": {
      "equipment": "DMM, supply, oscilloscope as needed, passive components.",
      "procedure": [
        "Read the problem statement and create a prediction sheet.",
        "Build from your own schematic.",
        "Take only measurements that answer a specific question.",
        "Diagnose one injected fault.",
        "Explain the circuit and the evidence out loud."
      ],
      "virtualEquipment": "Web browser only.",
      "virtualProcedure": [
        "Read the assigned circuit problem and create your own prediction sheet before opening the simulator.",
        "Build the circuit from your own schematic without copying a finished simulation.",
        "Make only measurements that answer a specific troubleshooting question.",
        "Inject one fault after the circuit works and isolate it systematically.",
        "Explain the circuit and your evidence aloud as if demonstrating it to a technician."
      ],
      "physicalEquipment": "DMM, supply, oscilloscope as needed, passive components.",
      "physicalProcedure": [
        "Read the problem statement and create a prediction sheet.",
        "Build from your own schematic.",
        "Take only measurements that answer a specific question.",
        "Diagnose one injected fault.",
        "Explain the circuit and the evidence out loud."
      ]
    },
    "improved": {
      "equipment": "Paper/simulation first; optional isolated 6.0 V, <=15 mA current-limited DC supply, breadboard, R1=1.5 kΩ, R2=3.0 kΩ, R3=6.0 kΩ 0.25 W resistors, fused correctly rated DMM and insulated leads. No oscilloscope necessary for this DC case; no mains, exposed power supply internals or deliberate short circuits.",
      "procedure": [
        "INDEPENDENT PRACTICAL PROBLEM. Without copying a premade simulation, draw: 6.00 V source -> R1=1.50 kΩ -> NODE A; R2=3.00 kΩ and R3=6.00 kΩ run in parallel from A to 0 V common return. Label source, return, R1, two branch currents and probe points. Keep the answer table covered until you have attempted every prediction.",
        "FIRST-PASS PREDICTIONS. Compute R_parallel=R2||R3=(3000×6000)/(3000+6000)=2.00 kΩ, R_total=3.50 kΩ, Itotal=6/3500=1.714 mA, V_A=6×(2000/3500)=3.429 V, I_R2=1.143 mA, I_R3=0.571 mA. Verify KCL (1.714≈1.143+0.571 mA) and KVL (6.000≈2.571+3.429 V). All three 0.25 W resistor ratings are sufficient for this case.",
        "BUILD OR SIMULATE ONLY AFTER PREDICTION. Assemble the circuit unpowered or in Falstad; verify that R2 and R3 share BOTH nodes A and 0 V. Use an isolated source and authorized low-voltage work if physical. Record Vin and node A relative to 0 V, not across an unlabelled wire.",
        "FAULT CHALLENGE. In the simulator, or with power OFF for optional bench changes, intentionally OPEN R2 only, then restore before a second pass. Predict altered Rtotal=7.50 kΩ, Itotal=0.800 mA, V_A=4.800 V, I_R2=0 and I_R3=0.800 mA. The node rises when a parallel load opens; do not mistake this for a source-voltage increase. DO NOT inject a short into a powered supply.",
        "DIFFERENTIAL DIAGNOSIS. Explain how R3-open instead would give Rtotal=4.50 kΩ, Itotal=1.333 mA, V_A=4.000 V; distinguish the faults with at least TWO predicted measurements before choosing a cause. A single high node voltage alone may not identify which branch opened.",
        "METER AND WORK PRACTICE. With a physical DMM set to voltage and leads in V/COM, measure across node A and return; use Ohm/continuity mode only on de-energized circuits and isolate components if alternate paths change the reading. Current mode requires the appropriately fused meter in series after power OFF reconfiguration—never across the source.",
        "GRADE-NEUTRAL EVIDENCE. Record handwritten predictions BEFORE looking at the reference values; a labeled schematic, predicted/observed table for healthy and faulted states, fault-isolation decision tree and spoken or written explanation. Do not claim verified physical skill or automatic exam/mastery credit from virtual completion.",
        "FINAL REVIEW. Explain why R_parallel is smaller than either branch resistance, why the total current equals the branch sum, which safe measurement distinguishes an open R2 from open R3, and what must be checked before touching a powered circuit."
      ],
      "virtualEquipment": "Web browser with Falstad CircuitJS; 6.00 V model, R1=1.50 kΩ, R2=3.00 kΩ, R3=6.00 kΩ, no physical meter required.",
      "virtualProcedure": [
        "Before opening the simulator, draw the mixed series/parallel diagram and work the R2||R3, total current and node-voltage predictions on paper; keep the reference solution hidden until done.",
        "Build only the predicted 6 V / 1.5k + (3k||6k) topology, with common return identified; take independent baseline Vin, V_A and branch current readings.",
        "For an UNKNOWN fault challenge, ask a partner to open R2 or R3 in a duplicate model; otherwise choose one yourself but do not consult the fault answer until measuring. Use two discriminating predicted test points/readings.",
        "Compare healthy V_A≈3.429 V with open-R2 V_A≈4.800 V and open-R3 V_A≈4.000 V. Verify KCL under each condition; explain why measurements support one diagnosis.",
        "Save a labeled healthy and faulted simulator view, prediction-to-observation table and a technician-style fault report with the restoration evidence.",
        "Use the existing virtual evidence route and mark simulated outcomes as conceptual practice, not supervised physical certification."
      ],
      "physicalEquipment": "Optional: isolated 6 V supply limited to <=15 mA, 1.5 kΩ/3.0 kΩ/6.0 kΩ resistors rated >=0.25 W, breadboard and properly fused rated DMM. Use no mains and do not open energized power assemblies.",
      "physicalProcedure": [
        "Inspect equipment, identify the return, set 6 V and conservative current limit while output OFF. Assemble exact circuit with source OFF; check for unintended shorts, then enable source to measure source/node voltages.",
        "Measure with the DMM in V mode across the low-voltage node and source return; do not connect an ammeter across the source. Prefer infer branch currents from measured drops/resistor values.",
        "Output OFF and confirm de-energized before removing just the R2 connection for the open fault. Reapply safe low voltage, record Vin and V_A, then turn OFF before restoring the connection.",
        "Compare predicted healthy, R2-open and R3-open values; explain effects of component tolerance and source current limiting. Do not intentionally force short-circuit faults or touch unknown live apparatus.",
        "Record a reproducible measurement table, labeled photo or schematic and written fault verification; actual technician competence still requires guided practice."
      ]
    }
  },
  {
    "module": "M08",
    "labId": "LAB-006",
    "expectedTitle": "RLC / Resonance / Filter Exploration",
    "expectedObjective": "Observe frequency-dependent impedance and resonance/filter behavior.",
    "expectedWeek": 6,
    "expectedDisposition": "RETAIN_REQUIRED",
    "expectedVirtualTool": "Falstad CircuitJS",
    "expectedVirtualLinks": [
      [
        "Open Falstad",
        "https://www.falstad.com/circuit/"
      ]
    ],
    "expectedVirtualEvidence": "Frequency table + simulator captures/plot + calculation sheet.",
    "expectedPhysicalEvidence": "Frequency table + plot/scope captures + calculation sheet.",
    "expectedVirtualCompletion": "Full academic completion",
    "expectedPhysicalCompletion": "Full academic completion",
    "expectedVirtualVerification": "Physical component-tolerance comparison is optional later.",
    "original": {
      "equipment": "Function generator, oscilloscope, R/L/C components or LTspice.",
      "procedure": [
        "Calculate XL/XC at selected frequencies.",
        "Predict filter/resonance behavior.",
        "Sweep several frequencies and record output.",
        "Identify cutoff or resonance trend.",
        "Explain discrepancies and component tolerance effects."
      ],
      "virtualEquipment": "Web browser only.",
      "virtualProcedure": [
        "Calculate XL and XC at several selected frequencies.",
        "Build the RLC/filter network and predict resonance or cutoff behavior.",
        "Sweep frequencies and record output magnitude.",
        "Identify the cutoff/resonance trend from the simulated response.",
        "Explain how component tolerance would affect a physical circuit."
      ],
      "physicalEquipment": "Function generator, oscilloscope, R/L/C components or LTspice.",
      "physicalProcedure": [
        "Calculate XL/XC at selected frequencies.",
        "Predict filter/resonance behavior.",
        "Sweep several frequencies and record output.",
        "Identify cutoff or resonance trend.",
        "Explain discrepancies and component tolerance effects."
      ]
    },
    "improved": {
      "equipment": "Paper/Falstad first. Optional isolated low-level 1.00 Vrms sine source (verified AT THE NETWORK), R=100 Ω 0.25 W, L=10.0 mH suitably rated inductor, C=1.00 µF nonpolar capacitor rated >=10 V, scope/probe rated for the actual source. No mains/high-energy tank circuits; manufacturer ratings and inductor DC resistance affect real measurements.",
      "procedure": [
        "SPECIFY TOPOLOGY AND FREQUENCY. Draw a SERIES RLC: isolated sine source -> L=10.0 mH -> C=1.00 µF NONPOLAR -> R=100 Ω -> source return. This LOW-SIDE resistor allows Vr measurement relative to the verified common return on ordinary grounded scopes; series current amplitude = Vr/R. Do NOT attach an earth-referenced scope ground clip to an intermediate non-ground node.",
        "CONVERT UNITS. L=0.0100 H; C=0.00000100 F; R=100 Ω. Predict f0=1/(2πsqrt(LC))=1591.55 Hz. At f0, XL=2πf0L≈100 Ω and XC=1/(2πf0C)≈100 Ω. Series net reactance cancels, but total Z is R (plus nonideal parasitics), NOT zero.",
        "INDEPENDENT THREE-FREQUENCY SWEEP. At f=500,1591.55,5000 Hz, calculate XL, XC, net X=XL−XC, |Z|=sqrt(R²+X²), and |I|=1.00 Vrms/|Z|. Ideal responses: 500 Hz XL≈31.42 Ω XC≈318.31 Ω; 5000 Hz XL≈314.16 Ω XC≈31.83 Ω. At resonance |Z|≈100 Ω, |I|≈10.00 mArms, Vr≈1.00 Vrms, P_R≈0.010 W.",
        "PHASE AND FILTER INTERPRETATION. With Vr across R, the output magnitude peaks near series resonance (band-pass current/resistor-voltage response). Below f0 net X is negative (capacitive, current leads source); above f0 net X positive (inductive, current lags). This is NOT the same output or response as probing across the inductor or capacitor.",
        "QUALITY FACTOR AND LIMITS. Ideal Q=ω0L/R=(2π×1591.55×0.010)/100≈1.00 and approximate 3 dB bandwidth f0/Q≈1591.55 Hz for this ideal series RLC. Q depends on TOTAL series losses including inductor resistance and source output impedance. Identify observed passband peak and bandwidth from a frequency table, not from a single trace.",
        "SAFETY AND MEASUREMENT. Use only isolated low-energy signals; verify the actual source Vrms at the load (generator readouts often assume 50 Ω). Never defeat oscilloscope protective earth. Turn output OFF before rewiring; avoid shorting the capacitor or measuring at a live high-energy source. Keep phase/voltage readings grounded to a legal reference or use a suitable rated differential setup.",
        "DIAGNOSTIC CHALLENGE. Suppose measured peak is broader and lower than the ideal prediction: check inductor DCR, source 50 Ω output impedance, capacitor tolerance, probe loading and connection errors before declaring the network defective. A resonance measurement is not a universal test that every inductor/capacitor is within spec.",
        "EVIDENCE RUBRIC. Provide labeled series-RLC diagram and reference points, unit conversions and f0/XL/XC/Z/I table for 500,1591.55,5000 Hz; a plotted Vr/Vin or calculated current response including phase sign; check for total-series-loss impact and compare model vs observation. Simulation cannot prove bench competence."
      ],
      "virtualEquipment": "Falstad CircuitJS with a 100 Ω, 10 mH, 1 µF nonpolar SERIES RLC model and 1.00 Vrms sinusoidal input; annotate input reference and resistor voltage.",
      "virtualProcedure": [
        "Draw the exact series RLC and convert L,C units before opening Falstad. Predict f0≈1591.55 Hz and XL=XC≈100 Ω. Write down what does and does not vanish at resonance.",
        "Build the 10.0 mH inductor and 1.00 µF capacitor in series from source toward a 100 Ω LOW-SIDE resistor tied to the common return; drive with 1.00 Vrms sine (equivalent 2.828 Vpp). Confirm the simulator source amplitude convention rather than assuming its default is RMS.",
        "Sweep 500,1591.55 and 5000 Hz, record source Vrms and resistor Vrms across SAME frequency. Infer |I|=Vr/100 Ω and compare with hand calculations. Above and below resonance, label whether source sees capacitive or inductive reactance.",
        "Add extra sweep points around the peak and create a response plot (frequency on x-axis, Vr/Vin or current on y-axis); describe why the peak is band-pass for the RESISTOR-voltage output.",
        "Compute and discuss Q≈1.0 and frequency bandwidth near 1592 Hz in the ideal model; if your simulator has nonideal models, state those assumptions rather than fabricating measured Q.",
        "Change R to 200 Ω: ideal f0 stays ≈1592 Hz while peak current halves for fixed input, Q halves and response widens. Contrast predicted versus simulated evidence.",
        "Save graph/table and source model screenshot as required, with explicit statement that simulation does not verify physical instrument skill."
      ],
      "physicalEquipment": "Optional: isolated low-level signal/function generator, 100 Ω 0.25 W resistor, 10.0 mH adequately rated inductor, 1.00 µF nonpolar capacitor with >=10 V working rating, correctly rated scope/probe and suitable measurement reference. Source load amplitude and its 50 Ω impedance must be considered.",
      "physicalProcedure": [
        "Source output OFF: assemble the rated isolated series RLC (100 Ω,10 mH,1 µF). Measure inductor DC resistance OFF before connecting and record component tolerances; ensure common reference/probe-ground arrangement is permitted by instrument documentation.",
        "Apply a low-level 1.00 Vrms sinusoid measured at the NETWORK input at 500, around 1592 and 5000 Hz. Place the resistor at the low side, with its return end at verified common ground, so a correctly grounded scope can read Vr safely; do not clip ground to a floating mid-network node.",
        "At each point measure actual input voltage and LOW-SIDE resistor voltage referenced to the same return; calculate I_rms=Vr_rms/100 Ω and compare with the model. If the function generator is set in Vpp or assumes 50 Ω, convert and verify actual source amplitude.",
        "With output OFF before adjustments, take additional frequency points to find peak and approximate half-power (Vr ratio≈0.707 of peak). Explain why inductor DCR, source impedance and probe loading change the measured response.",
        "Document schematic, safe measurement setup, frequencies, units, scope data and deviations; do not claim a human-tested proficiency score from a virtual exercise."
      ]
    }
  }
];
 const evidenceFor=l=>'Virtual or reasoning-route academic evidence: '+l.virtual.evidence+'  |  Optional physical equipment-route evidence (only if that work is safely undertaken): '+l.physical.evidence+'  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.';
 const deepEqual=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
 const fields=lab=>({equipment:lab.equipment,procedure:lab.procedure,virtualEquipment:lab.virtual.equipment,virtualProcedure:lab.virtual.procedure,physicalEquipment:lab.physical.equipment,physicalProcedure:lab.physical.procedure});
 const fail=error=>{window[statusKey]={ok:false,revision,error:String(error?.message||error)};console.warn('[Alfred CETa G08 labs 004-006] No modifications:',error);};
 try {
  const D=window.ALFRED_CETA_DATA;
  if(!D||!Array.isArray(D.course)||D.course.length!==30)throw Error('Canonical 30-module source missing');
  if(window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok!==true)throw Error('Instructional predecessor not verified');
  if(window.ALFRED_CETA_G08_LAB_EVIDENCE_STATUS?.ok!==true)throw Error('G08 evidence-route predecessor not verified');
  if(window.ALFRED_CETA_G08_LABS_002_003_013_STATUS?.ok!==true)throw Error('Previous G08 lab technical stage not verified');
  const modules=new Map(D.course.map(x=>[x.id,x]));
  if(modules.size!==30)throw Error('Nonunique module IDs');
  const target=[],states=[];
  for(const p of patches){
    const mod=modules.get(p.module);
    if(!mod||!Array.isArray(mod.labs))throw Error('Missing lab module '+p.module);
    const labs=mod.labs.filter(x=>x.id===p.labId);
    if(labs.length!==1)throw Error('Missing/nonunique lab '+p.module+'/'+p.labId);
    const lab=labs[0];
    if(!lab.virtual||!lab.physical||!Array.isArray(lab.procedure)||!Array.isArray(lab.virtual.procedure)||!Array.isArray(lab.physical.procedure))throw Error('Invalid lab structure '+p.labId);
    if(lab.title!==p.expectedTitle||lab.objective!==p.expectedObjective||lab.sourceWeek!==p.expectedWeek||lab.disposition!==p.expectedDisposition)throw Error('Metadata mismatch '+p.labId);
    if(lab.virtual.tool!==p.expectedVirtualTool||!deepEqual(lab.virtual.links,p.expectedVirtualLinks)||lab.virtual.evidence!==p.expectedVirtualEvidence||lab.physical.evidence!==p.expectedPhysicalEvidence||lab.evidence!==evidenceFor(lab)||lab.virtual.completion!==p.expectedVirtualCompletion||lab.physical.completion!==p.expectedPhysicalCompletion||lab.virtual.verification!==p.expectedVirtualVerification)throw Error('Evidence/grade/source mismatch '+p.labId);
    const state=deepEqual(fields(lab),p.original)?'original':deepEqual(fields(lab),p.improved)?'improved':'unexpected';
    if(state==='unexpected')throw Error('Changed or partial source '+p.labId);
    target.push(lab);states.push(state);
  }
  if(states.some(x=>x!==states[0]))throw Error('Mixed original/updated state; refuse partial application');
  if(states[0]==='improved'){
   window[statusKey]={ok:true,revision,alreadyApplied:true,labIds:patches.map(p=>p.labId),changes:0}; return;
  }
  // Validation precedes EVERY mutation; each lab retains its existing metadata.
  for(let i=0;i<patches.length;i++){
   const lab=target[i],p=patches[i].improved;
   lab.equipment=p.equipment; lab.procedure=p.procedure.slice();
   lab.virtual.equipment=p.virtualEquipment;lab.virtual.procedure=p.virtualProcedure.slice();
   lab.physical.equipment=p.physicalEquipment;lab.physical.procedure=p.physicalProcedure.slice();
  }
  window[statusKey]={ok:true,revision,labIds:patches.map(p=>p.labId),changes:patches.length,productionIntegrated:false};
 }catch(error){fail(error);}
})();

check('ALFRED_CETA_G08_LABS_004_005_006_STATUS');
/* Alfred University AU-ESET 301 G08-029..031 — individually source-guarded labs 007/008/009.
 * STAGED ONLY. This script is NOT a website upload or a learner-data change.
 * Source main ace81fd9e42e35e391c48005647981301287ead7,
 * course.js Git blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 * Load after academic and G08 evidence corrections, previous technical corrections
 * (including REPAIRED labs004/005/006 replacement), before ceta.js.
 */
(()=>{'use strict';
 const statusKey='ALFRED_CETA_G08_LABS_007_008_009_STATUS';
 const revision='G08-029-031-20261029';
 const patches=[
  {
    "module": "M09",
    "labId": "LAB-007",
    "expectedTitle": "Relay / Electromagnet / Flyback Protection",
    "expectedObjective": "Control an inductive load and demonstrate why flyback suppression matters.",
    "expectedWeek": 7,
    "expectedDisposition": "RETAIN_REQUIRED",
    "expectedVirtualTool": "Falstad CircuitJS",
    "expectedVirtualLinks": [
      [
        "Open Falstad",
        "https://www.falstad.com/circuit/"
      ]
    ],
    "expectedVirtualEvidence": "Driver schematic + before/after transient screenshots + relay/contact logic explanation.",
    "expectedPhysicalEvidence": "Driver schematic + relay pinout + switching evidence.",
    "expectedVirtualCompletion": "Full academic completion",
    "expectedPhysicalCompletion": "Full academic completion",
    "expectedVirtualVerification": "Physical relay pin identification and wiring are optional later.",
    "original": {
      "equipment": "Relay, diode, transistor/MOSFET, supply, DMM/scope.",
      "procedure": [
        "Identify coil and contacts from datasheet/measurements.",
        "Build a low-side driver.",
        "Add flyback diode with correct polarity.",
        "Observe coil behavior and switching.",
        "Explain NO/NC contact logic and failure modes."
      ],
      "virtualEquipment": "Web browser only.",
      "virtualProcedure": [
        "Create an inductive-load/relay-coil equivalent with a transistor or MOSFET driver.",
        "Observe the switching behavior first without flyback suppression, using only the simulator.",
        "Add the flyback diode with correct polarity and compare the transient behavior.",
        "Model normally-open/normally-closed switching logic with a controlled switch or relay equivalent.",
        "Explain what a real diode, transistor, and relay would protect or control."
      ],
      "physicalEquipment": "Relay, diode, transistor/MOSFET, supply, DMM/scope.",
      "physicalProcedure": [
        "Identify coil and contacts from datasheet/measurements.",
        "Build a low-side driver.",
        "Add flyback diode with correct polarity.",
        "Observe coil behavior and switching.",
        "Explain NO/NC contact logic and failure modes."
      ]
    },
    "improved": {
      "equipment": "Virtual first: Falstad relay/coil + low-side NPN or logic-rated N-MOSFET driver, DC source 5.00 V, coil equivalent R=100 Ω and L=0.10 H, flyback diode and NO/NC contact display. Optional physical: *datasheet-matched* 5 V DC-coil relay (do not assume all coils are 100 Ω), compatible rated driver and diode, bench 5 V supply with current limit, insulated meter leads. Use NO mains/contact loads; identify coil terminals using datasheet, not pin layout guesses.",
      "procedure": [
        "DRAW AND LABEL. Separate the coil from the electrically isolated contact circuit. Draw +5 V → coil (R=100 Ω nominal example, L=0.10 H simulation) → low-side transistor collector/drain → common return. Control ground and emitter/source must share the safe low-voltage reference where the chosen driver requires it. Contact COM/NO/NC are separate from coil pins.",
        "PREDICT DC COIL CURRENT. In an ideal steady-state DC coil, inductor reactance is zero and Icoil=5.00 V / 100 Ω = 0.050 A = 50 mA; copper loss P=I²R=0.250 W. This is model COIL dissipation, not the switching transistor loss; a physical relay must match its stated 5 V coil rating/current and driver limits.",
        "DRIVER CASE: a 5 V NPN low-side switch with nominal VBE(sat)≈0.8 V and 820 Ω base resistor would draw Ib≈(5−0.8)/820=5.12 mA. With 50 mA coil, forced gain≈9.8; verify real BJT collector, base, saturation and control-pin current ratings before physical use. A logic MOSFET alternative requires guaranteed RDS(on) at actual VGS—not VGS(th) alone.",
        "FLYBACK DIODE ORIENTATION. Put the diode DIRECTLY in parallel with the coil: CATHODE (banded end) to +5 V coil rail, ANODE to the switched low-side coil terminal. It must be reverse-biased during normal ON operation. A diode wired the opposite direction would short the supply when the switch turns on; NEVER perform that error as a powered physical demonstration.",
        "MEASURE TRANSIENT IN SIMULATION ONLY. For the R=100 Ω, L=0.10 H simplified model, τ=L/R=1.00 ms for an uncomplicated series RL decay. With a flyback diode, the current circulates through coil + diode after switch-off; it is not the same exponential RL test and a real relay release time depends on construction. Compare voltage at driver collector/drain with and without the diode in Falstad; use a sufficiently rated switch/device and never physically provoke an unsuppressed inductive spike.",
        "EXPLAIN CONTACT STATE. With relay deenergized, COM is connected to NC and not NO; when the relay energizes and actuates, COM switches to NO. This does not imply contact voltage equals coil voltage. Contact ratings and external load supplies remain separate. No real high-power loads in this course.",
        "FAULT ANALYSIS. In simulation introduce an open coil, absent control drive, and open flyback diode one at a time, with realistic predicted symptoms. With power OFF, examine coil continuity or wire/part orientation; do not diagnose by shorting relay contacts or switching test leads across energized inductors.",
        "EVIDENCE. Draw a labeled coil/driver/diode/contact schematic, show 50 mA and 0.25 W calculations, record before/after simulated drain/collector transients (clearly labeled simulated), explain diode polarity and slower-release tradeoff, and document NO/NC truth table and one fault justification. Academic exercise only; no physical competence or grade/mastery claim."
      ],
      "virtualEquipment": "Falstad CircuitJS with 5 V DC, 100 Ω + 0.10 H model coil, low-side NPN/logic MOSFET, correctly oriented flyback diode and independent normally-open/normally-closed relay contact representation. No bench hardware.",
      "virtualProcedure": [
        "Sketch the coil/driver and separate COM/NO/NC contacts; before simulation, compute I=5/100=50 mA and coil P=0.25 W. Check that the coil model is 100 Ω with 0.10 H for the inductive transient, rather than an ideal zero-resistance inductor.",
        "Simulate a low-side transistor and 5 V supply driving the R-L coil. Measure steady current with switch ON, ensuring driver model and voltage drop are documented; 50 mA is the ideal limit without switch saturation losses.",
        "Switch OFF briefly in simulation WITHOUT a clamp and capture switched node voltage transient; never reproduce an unclamped test with an actual relay and an underrated driver.",
        "Add diode cathode to supply +, anode to switched coil terminal. Verify it is normally OFF and conducts only on turn-off, then capture new switched-node voltage and decay behavior; compare release delay qualitatively.",
        "Model contact COM→NC at rest and COM→NO after coil energization. Explain why the independent contacts do not necessarily carry coil voltage.",
        "Inject one safe simulated open-control/open-coil/open-diode fault, record observations, identify what test discriminates it, and restore normal behavior.",
        "Submit existing virtual evidence items and truth table, labeling all traces as simulated. Do not claim that the schematic alone certifies live relay wiring."
      ],
      "physicalEquipment": "OPTIONAL, supervised low-energy route only: isolated 5 V DC bench supply with suitable conservative current limit, verified 5 V DC-coil relay and exact coil/contact datasheet, rated compatible low-side driver, base/gate resistors, correctly rated flyback diode, DMM and protective leads. No mains, motor or power contact loads.",
      "physicalProcedure": [
        "With source disconnected, identify coil and contact pinout from the relay datasheet and cross-check coil resistance. If it differs from 100 Ω, recalculate coil current and power from the REAL part specification.",
        "Validate diode cathode to coil + and anode to transistor-side coil end before applying power. Verify driver current/voltage ratings and base/gate drive, including the control source output-current budget. NEVER intentionally reverse the diode while powered.",
        "With the output OFF connect isolated 5 V relay coil through its properly rated low-side driver, limit current conservatively within source/coil specifications and monitor operation at permitted low voltage.",
        "After source OFF and transient energy is safely settled, use meter continuity (deenergized only) to identify COM-NC and COM-NO states. Do not connect high-voltage/contact power loads.",
        "Submit a labeled pinout, calculation and safe setup record; compare observations to coil datasheet. A physical waveform release test requires appropriately trained supervision and correct scope grounding, not an ad-hoc probe on a live/unknown node."
      ]
    }
  },
  {
    "module": "M11",
    "labId": "LAB-008",
    "expectedTitle": "Diode / BJT / MOSFET Switching",
    "expectedObjective": "Characterize common semiconductor devices and use them as switches.",
    "expectedWeek": 8,
    "expectedDisposition": "SPLIT_INTO_TWO_RELATED_ACTIVITIES",
    "expectedVirtualTool": "Falstad CircuitJS",
    "expectedVirtualLinks": [
      [
        "Open Falstad",
        "https://www.falstad.com/circuit/"
      ]
    ],
    "expectedVirtualEvidence": "Device observations + BJT/MOSFET switch screenshots + fault note.",
    "expectedPhysicalEvidence": "Device measurements + two switch circuits + fault note.",
    "expectedVirtualCompletion": "Full academic completion",
    "expectedPhysicalCompletion": "Full academic completion",
    "expectedVirtualVerification": "DMM diode-mode handling can be practiced physically later.",
    "original": {
      "equipment": "DMM diode mode, LEDs/diodes, BJT, logic MOSFET, resistors, supply.",
      "procedure": [
        "Measure diode forward behavior.",
        "Build a BJT LED/load switch.",
        "Build a MOSFET load switch.",
        "Check gate/base drive and load current.",
        "Create and diagnose one incorrect-bias or wiring condition."
      ],
      "virtualEquipment": "Web browser only.",
      "virtualProcedure": [
        "Observe diode forward/reverse behavior in a simple circuit.",
        "Build a BJT load switch and record base, collector, and load behavior.",
        "Build a MOSFET load switch and observe gate/source/drain behavior.",
        "Change drive or bias so the switch fails to operate correctly.",
        "Diagnose the incorrect-bias/wiring condition from the simulated values."
      ],
      "physicalEquipment": "DMM diode mode, LEDs/diodes, BJT, logic MOSFET, resistors, supply.",
      "physicalProcedure": [
        "Measure diode forward behavior.",
        "Build a BJT LED/load switch.",
        "Build a MOSFET load switch.",
        "Check gate/base drive and load current.",
        "Create and diagnose one incorrect-bias or wiring condition."
      ]
    },
    "improved": {
      "equipment": "Paper and Falstad first. For optional physical low-voltage: isolated 5 V regulated bench supply with conservative current limit, 330 Ω LED series resistor, standard visible LED with verified polarity and safe current rating, 4.7 kΩ BJT base resistor, 100 kΩ MOSFET gate pulldown, optional 220 Ω gate resistor, NPN BJT and logic-level enhancement N-MOSFET whose pinouts and guaranteed RDS(on) at VGS=5 V are checked in manufacturer datasheets, DMM.",
      "procedure": [
        "SCHEMATIC A — diode check. Sketch silicon diode anode/cathode, forward and reverse directions. On a disconnected part, DMM diode mode can report a forward junction drop but not prove rated current or maximum reverse voltage. Never use diode/ohms mode on energized circuits; do not assert every silicon diode has exactly 0.700 V.",
        "SCHEMATIC B — NPN LOW-SIDE LED SWITCH. Draw +5 V → 330 Ω → LED (anode toward +5 V) → NPN collector, emitter → 0 V. Apply a 5 V logic-level drive THROUGH 4.7 kΩ to BJT base, with common return. A nominal VfLED=2.0 V and VCE(sat)=0.2 V predict ILED=(5−2−0.2)/330≈8.48 mA and resistor power≈23.7 mW.",
        "BJT BASE DRIVE. Assuming VBE(sat)≈0.8 V, IB=(5−0.8)/4700≈0.894 mA. If IC≈8.48 mA, forced β≈9.49. Confirm actual BJT current gain/saturation specifications and source drive budget; no guarantee of saturation from nominal values alone.",
        "SCHEMATIC C — LOGIC N-MOSFET LOW-SIDE LED SWITCH. Draw +5 V → 330 Ω → LED → MOSFET drain, MOSFET source → common 0 V. Gate drive nominal 0 or 5 V, with 100 kΩ pull-down G→S to avoid floating gate. With near-zero switch resistance, ILED≈(5−2)/330≈9.09 mA. Verify guaranteed RDS(on) at 5 V gate-source, VGS max, VDS, and drain current before choosing a physical part.",
        "MEASUREMENT PLAN. When switched ON compare supply, resistor drop, device VCE(sat) or VDS(on), load current inferred from Vresistor/330 Ω, and switch state. An OFF MOSFET with gate at ~0 V should have almost no DC LED current in the ideal model. MOSFET threshold VGS(th) is only a low-current turn-on test, not proof of a fully enhanced switch.",
        "FAULT DIFFERENTIATION. In simulation remove BJT base drive, open LED path, remove MOSFET gate pull-down or substitute an insufficient VGS drive; predict LED state and resistor/collector/drain voltage. Do NOT test by removing a current limiter or swapping unknown real transistor pins under power.",
        "SAFE RESET. Turn off the source before moving components. Check BJT C/B/E and MOSFET G/D/S against part datasheets; do not assume TO-92/SOT-23 layouts are universal. Use no mains, no high-energy sources and no actual inductive loads without separate protection.",
        "EVIDENCE. Submit two labeled switch schematics, calculation sheet and voltage table, two simulator captures, one simulated fault diagnosis and diode-test reasoning. Simulator and text completion do not certify actual device wiring or graded CETa mastery."
      ],
      "virtualEquipment": "Falstad only: 5 V low-voltage source, 330 Ω resistor, LED with assumed 2.0 V forward point, NPN transistor, 4.7 kΩ base resistor, enhancement N-channel MOSFET with 100 kΩ gate pull-down, optional 220 Ω gate resistor; label diode and transistor terminals.",
      "virtualProcedure": [
        "Build a diode-only test with a current-limiting series resistor in Falstad; distinguish forward conduction from reverse blocking and state assumptions about breakdown.",
        "Build BJT low-side LED switch with +5 V, 330 Ω LED resistor, 4.7 kΩ base resistor and common ground. Before running, predict load current ~8.48 mA with VfLED=2.0 V and VCEsat=0.2 V, IB~0.894 mA, forced beta~9.49; record the simulation model values separately.",
        "Set drive HIGH and LOW and record resistor voltage, BJT VCE and LED current/brightness using simulated measurements; explain discrepancies with ideal assumed junction drops.",
        "Build analogous enhancement N-channel MOSFET switch, with source tied to return, drain at LED load and gate with 100 kΩ to source. For an ideally fully on switch predict ~9.09 mA with a 2 V LED; state if simulated RDSon differs.",
        "Reduce gate voltage or intentionally leave a gate floating ONLY in simulator to observe uncertain behavior; distinguish insufficient drive from an open LED fault via resistor voltage and gate-source measurement.",
        "Produce two annotated screenshots and a fault table. Never label simulation as real measured transistor characteristics or physical proficiency."
      ],
      "physicalEquipment": "OPTIONAL: insulated <=5 V current-limited DC supply, verified diode/LED ratings, 330 Ω 0.25 W LED resistors, 4.7 kΩ base resistor, NPN BJT, enhancement MOSFET guaranteed for low RDS(on) at applied gate drive, 100 kΩ pull-down, DMM and leads. Use exact pinouts and safe-work supervision.",
      "physicalProcedure": [
        "Output OFF. Check individual disconnected diode direction with diode-test mode (red lead to anode, black to cathode under ordinary DMM convention) and consult actual diode/LED datasheets. Do not measure resistance or diode mode on powered circuits.",
        "Assemble the NPN LED series circuit with correct cathode/emitter orientation and 4.7 kΩ base resistor. Verify no short and enable conservative current-limited 5 V. Measure resistor drop in voltage mode and infer LED current by Ohm’s law; never connect the DMM in current mode directly across the source.",
        "Output OFF before rewiring. Assemble the MOSFET switching circuit only with a datasheet-verified gate/source/drain and proper 100 kΩ pull-down; no assuming VGS(th) implies low RDS(on). Verify device temperature and low-voltage drop if supervised.",
        "Output OFF before injecting an OPEN/removed drive signal. Record on/off measurements against the predicted states and restore wiring with source OFF. Do not intentionally short the supply or omit LED current limiting.",
        "Document separate BJT/MOSFET observations, actual part numbers, assumptions and discrepancies; completion does not itself verify skill without supervised practice."
      ]
    }
  },
  {
    "module": "M13",
    "labId": "LAB-009",
    "expectedTitle": "Rectifier / Filter / Regulator Power Supply",
    "expectedObjective": "Trace power through rectification, filtering and regulation stages.",
    "expectedWeek": 9,
    "expectedDisposition": "RETAIN_REQUIRED",
    "expectedVirtualTool": "Falstad CircuitJS",
    "expectedVirtualLinks": [
      [
        "Open Falstad",
        "https://www.falstad.com/circuit/"
      ]
    ],
    "expectedVirtualEvidence": "Block diagram + rail values + ripple capture + fault map.",
    "expectedPhysicalEvidence": "Block diagram + rail measurements + ripple capture + fault map.",
    "expectedVirtualCompletion": "Full academic completion",
    "expectedPhysicalCompletion": "Full academic completion",
    "expectedVirtualVerification": "Physical power-supply construction is optional later and should remain low-voltage/supervised.",
    "original": {
      "equipment": "Safe low-voltage AC source or simulation, diodes/bridge, capacitor, regulator, DMM/scope.",
      "procedure": [
        "Predict rectified waveform and DC level.",
        "Observe rectified waveform.",
        "Add filter capacitor and measure ripple.",
        "Add regulation and test load change.",
        "Identify which stage would cause selected symptoms."
      ],
      "virtualEquipment": "Web browser only.",
      "virtualProcedure": [
        "Predict the rectified waveform and approximate DC level.",
        "Build a safe simulated AC source and bridge/diode rectifier.",
        "Add filtering and use the scope to observe ripple.",
        "Add a regulation stage or regulator model and vary the load.",
        "Inject one stage fault and map the symptom to the failed block."
      ],
      "physicalEquipment": "Safe low-voltage AC source or simulation, diodes/bridge, capacitor, regulator, DMM/scope.",
      "physicalProcedure": [
        "Predict rectified waveform and DC level.",
        "Observe rectified waveform.",
        "Add filter capacitor and measure ripple.",
        "Add regulation and test load change.",
        "Identify which stage would cause selected symptoms."
      ]
    },
    "improved": {
      "equipment": "SIMULATE FIRST. Use an ideal isolated 6.00 Vrms 60 Hz sinusoidal source (not mains), four silicon diode bridge model, 1.00 kΩ DC load, optional 1000 µF capacitor rated >=16 V and a 5.00 V regulator *model* with >=1 V input headroom. For optional physical work: truly isolated <=6 Vrms rated low-energy AC from an appropriate source, low-voltage bridge/capacitor and scope permitted grounding; never work on line-connected, off-line, unisolated or unknown supplies.",
      "procedure": [
        "BLOCK DIAGRAM. Draw 6.00 Vrms ISOLATED AC source (60 Hz) → full-wave FOUR-DIODE BRIDGE → reservoir capacitor across load → modeled 5 V regulator → resistive load. Label AC inputs, +DC, −DC/common, node before/after capacitor and regulator; show the return connection and NEVER connect test-instrument earth to unknown AC or bridge pins.",
        "PREDICT RECTIFIER PEAK. 6.00 Vrms ×sqrt(2)≈8.485 V peak. In a full bridge TWO diodes conduct at a time: approximate silicon drops of 0.70 V each give ≈7.085 V peak at the DC output with a light load. Vf is current- and temperature-dependent; this estimate is not a datasheet claim or exact flat DC output.",
        "DISTINGUISH WAVEFORMS. BEFORE filter, bridge output is pulsating unipolar full-wave at 120 Hz from a 60 Hz source. With an ideal capacitor-input filter and light resistive load, the voltage charges near peak and droops between peaks; never claim the waveform becomes ripple-free DC.",
        "PREDICT RIPPLE. For 1000 µF, 120 Hz refresh and roughly 7 mA current, ΔVpp≈I/(fripple×C)=0.007/(120×0.001)≈0.0583 Vpp. This is a SMALL-RIPPLE, approximately constant-current discharge estimate; diode conduction angle, source resistance, ESR and actual forward drop change real results.",
        "MODEL REGULATOR HEADROOM. An illustrative IDEAL 5 V regulator model requiring at least 6 V input should regulate with approximately 7 V reservoir voltage. A real 7805 or LDO has its OWN minimum headroom, input/output capacitor stability, current and thermal specifications. Do NOT promise a generic 7805 will maintain regulation at this source voltage.",
        "LOAD STEP. Reduce equivalent load from 1 kΩ to 500 Ω only in a safe simulator or rated low-voltage route; current and ripple approximately double (≈14 mA and ≈0.117 Vpp in the same simplified assumptions). Check whether min input still exceeds regulator model limit; compare prefilter and output ripple separately.",
        "DIAGNOSE BLOCKS. In a simulator, open one bridge diode, disconnect reservoir capacitor, or reduce input below regulator headroom one at a time. Predict half-wave-like recharge, increased ripple, or loss of 5 V regulation and justify with actual measured node/waveform evidence.",
        "SAFETY/RUBRIC. Source OFF and capacitors safely discharged before reconfiguration. Confirm capacitor polarity and voltage rating; a bridge DC +/− mark is not the same as an AC terminal. Provide waveforms before/after filter, ripple calculation, output/load table, exact schematic, one fault map and assumptions. This lab is academic learning, NOT training authorization for mains power supplies."
      ],
      "virtualEquipment": "Falstad CircuitJS; isolated 6.00 Vrms (8.485 V peak) 60 Hz sine, four rectifier diode model, optional 1000 µF capacitor, 1 kΩ or 500 Ω resistive load and ideal regulated 5.00 V output model with defined >=1 V input headroom. No mains.",
      "virtualProcedure": [
        "Draw and label AC input, four-diode bridge, DC +/− return, 1 kΩ load, 1000 µF smoothing capacitor and 5 V regulator model BEFORE simulating; verify Falstad source amplitude means Vrms versus peak so 6 Vrms=8.485 Vpeak.",
        "Run without reservoir capacitor first; observe full-wave unipolar 120 Hz pulses at the load (for 60 Hz input), and note two diode drops per conduction path.",
        "Add the 1000 µF capacitor across the DC output with correct polarity. Compare peak near 7.09 V (based on assumed two 0.7 V drops) and predicted ~0.058 Vpp ripple for ~7 mA. Use cursor/readouts and state model-specific differences.",
        "Add an IDEAL regulated 5 V output block whose input minimum is <=6 V. Sweep 1 kΩ then 500 Ω load; calculate input/output current and state whether regulation/headroom is maintained. Do not substitute a real unknown regulator model without its dropout and capacitor rules.",
        "Simulate one bridge-diode open, capacitor disconnection or inadequate input headroom; capture node waveforms to distinguish the fault. Revert to healthy baseline and record output 5 V when model headroom assumptions hold.",
        "Record three labeled images or graphs (bridge rectified, smoothed, regulated), computed peak/ripple, load-step table and one fault report. All measurements are simulated; this does not certify physical power-supply repair."
      ],
      "physicalEquipment": "OPTIONAL ONLY: explicitly isolated low-energy 6 Vrms AC supply (rated and independently verified isolation, NOT wall/mains), suitable bridge diodes, 1000 µF electrolytic >=16 V checked polarity, 1 kΩ/500 Ω power-rated loads, low-voltage DMM and safe scope with properly verified references. For regulator work, obtain exact device datasheet and guaranteed headroom/capacitor requirements; default to paper or simulator.",
      "physicalProcedure": [
        "A qualified supervisor must verify isolated low-energy source and instrument common-ground arrangement BEFORE any AC/rectifier breadboard work. NO mains plugs, variacs, hot chassis, rectified line voltage or unknown power supplies.",
        "With all equipment de-energized and capacitors discharged, verify bridge AC terminals versus DC +/− pins and capacitor polarity; ensure appropriate voltage/current/heat ratings for all parts.",
        "Energize only permitted isolated low-voltage circuit under supervision. Measure rectifier output with a safe rated instrument referencing the supervisor-verified DC return; do not connect earth-referenced scope ground arbitrarily to an AC secondary or floating bridge node.",
        "With output OFF, discharge and verify reservoir capacitor before rewiring. Add filter and note expected DC peak and approximate 120 Hz ripple under rated load. Do not bridge or defeat fuses, isolate scope earth, or make high-voltage measurements.",
        "Regulator part must be selected by datasheet, including dropout across load, thermal budget, and stability capacitors. If conditions cannot be guaranteed, use only simulation for regulator portion.",
        "Record stage-by-stage node measurements with units and actual instrument setup, and a fault hypothesis; do not physically induce diode shorts or deliberately disconnect a charged capacitor."
      ]
    }
  }
];
 const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
 const fields=l=>({equipment:l.equipment,procedure:l.procedure,virtualEquipment:l.virtual.equipment,virtualProcedure:l.virtual.procedure,physicalEquipment:l.physical.equipment,physicalProcedure:l.physical.procedure});
 const evidenceFor=l=>'Virtual or reasoning-route academic evidence: '+l.virtual.evidence+'  |  Optional physical equipment-route evidence (only if that work is safely undertaken): '+l.physical.evidence+'  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.';
 const fail=e=>{window[statusKey]={ok:false,revision,error:String(e?.message||e)};if(console?.warn)console.warn('[Alfred G08 labs007/008/009] declined:',e);};
 try{
  if(window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok!==true||window.ALFRED_CETA_G08_LAB_EVIDENCE_STATUS?.ok!==true||window.ALFRED_CETA_G08_LAB001_TECHNICAL_STATUS?.ok!==true||window.ALFRED_CETA_G08_LABS_002_003_013_STATUS?.ok!==true||window.ALFRED_CETA_G08_LABS_004_005_006_STATUS?.ok!==true)throw Error('Required predecessor correction not applied');
  const course=window.ALFRED_CETA_DATA?.course;
  if(!Array.isArray(course)||course.length!==30)throw Error('Canonical 30-module course missing');
  const mods=new Map(course.map(x=>[x.id,x])); if(mods.size!==30)throw Error('Duplicate module ID');
  const targets=[],states=[];
  for(const p of patches){
   const m=mods.get(p.module);if(!m||!Array.isArray(m.pages)||!Array.isArray(m.labs))throw Error('Missing module '+p.module);
   const found=m.labs.filter(x=>x.id===p.labId);if(found.length!==1)throw Error('Missing or duplicate lab '+p.labId);
   const l=found[0];
   if(l.title!==p.expectedTitle||l.objective!==p.expectedObjective||l.sourceWeek!==p.expectedWeek||l.disposition!==p.expectedDisposition||l.virtual?.tool!==p.expectedVirtualTool||!same(l.virtual?.links,p.expectedVirtualLinks)||l.virtual?.evidence!==p.expectedVirtualEvidence||l.physical?.evidence!==p.expectedPhysicalEvidence||l.evidence!==evidenceFor(l)||l.virtual.completion!==p.expectedVirtualCompletion||l.physical.completion!==p.expectedPhysicalCompletion||l.virtual.verification!==p.expectedVirtualVerification)throw Error('Lab metadata/evidence mismatch '+p.labId);
   const st=same(fields(l),p.original)?'original':same(fields(l),p.improved)?'improved':'unexpected';
   if(st==='unexpected')throw Error('Unexpected or partial field state '+p.labId);
   targets.push(l);states.push(st);
  }
  if(states.some(s=>s!==states[0]))throw Error('Partially applied/mixed state; refusing mutation');
  if(states[0]==='improved') {window[statusKey]={ok:true,revision,alreadyApplied:true,changes:0,labIds:patches.map(x=>x.labId)};return;}
  for(let i=0;i<targets.length;i++){
   const l=targets[i],p=patches[i].improved;
   l.equipment=p.equipment;l.procedure=p.procedure.slice();
   l.virtual.equipment=p.virtualEquipment;l.virtual.procedure=p.virtualProcedure.slice();
   l.physical.equipment=p.physicalEquipment;l.physical.procedure=p.physicalProcedure.slice();
  }
  window[statusKey]={ok:true,revision,changes:3,labIds:patches.map(x=>x.labId),productionIntegrated:false};
 }catch(e){fail(e)}
})();

check('ALFRED_CETA_G08_LABS_007_008_009_STATUS');
/* Alfred University AU-ESET 301 | G08-032/033 | LAB-010/011 staged source-guarded instructional corrections.
 * NOT FOR UPLOAD. Only after all preceding G08 patches (including repaired LAB-004/005/006 replacement).
 * Read-only production course.js blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 * Preserves all IDs, rubric/evidence routing, learner progress and source questions.
 */
(()=>{'use strict';
const key='ALFRED_CETA_G08_LABS_010_011_STATUS', revision='G08-032-033-20261029';
const patches=[
  {
    "module": "M14",
    "labId": "LAB-010",
    "title": "Op-Amp Buffer / Gain / Clipping",
    "objective": "Build or simulate common op-amp circuits and connect gain equations to real output limits.",
    "sourceWeek": 10,
    "disposition": "RETAIN_REQUIRED",
    "virtualTool": "Falstad CircuitJS",
    "virtualLinks": [
      [
        "Open Falstad",
        "https://www.falstad.com/circuit/"
      ]
    ],
    "virtualEvidence": "Gain calculation + simulated gain + clipping capture + explanation.",
    "physicalEvidence": "Gain calculation + measured gain + clipping capture.",
    "virtualCompletion": "Full academic completion",
    "physicalCompletion": "Full academic completion",
    "virtualVerification": "Physical op-amp wiring is optional later.",
    "original": {
      "equipment": "Op amp, dual/single supply as appropriate, DMM/scope/function generator or simulation.",
      "procedure": [
        "Build voltage follower and verify loading behavior.",
        "Build non-inverting or inverting amplifier.",
        "Calculate expected gain.",
        "Increase input until clipping appears.",
        "Explain rail limits, bandwidth/loading and feedback."
      ],
      "virtualEquipment": "Web browser only.",
      "virtualProcedure": [
        "Build a voltage follower and observe input/output behavior.",
        "Build an inverting or non-inverting amplifier and calculate expected gain.",
        "Measure simulated gain and compare it to the equation.",
        "Increase the input until clipping or output-limit behavior appears.",
        "Explain feedback, loading, rail limits, and bandwidth at the level required by the course."
      ],
      "physicalEquipment": "Op amp, dual/single supply as appropriate, DMM/scope/function generator or simulation.",
      "physicalProcedure": [
        "Build voltage follower and verify loading behavior.",
        "Build non-inverting or inverting amplifier.",
        "Calculate expected gain.",
        "Increase input until clipping appears.",
        "Explain rail limits, bandwidth/loading and feedback."
      ]
    },
    "improved": {
      "equipment": "SIMULATION FIRST: Falstad CircuitJS with op-amp voltage follower and non-inverting circuit, explicit common return and a stated idealized amplifier output limit of ±10.0 V (illustrative ±12.0 V supply rails), sine source 1.00 kHz, and 10 kΩ input/output load. Feedback resistors Rg=10 kΩ to ground and Rf=20 kΩ from output to − input. Optional physical work only with a specific datasheet-verified low-energy op amp, appropriate rated isolated ± supply, current-limited bench source and safe scope references; never connect line voltage.",
      "procedure": [
        "PREDICT BEFORE MEASURING. Sketch the op-amp triangle, mark non-inverting +, inverting −, output, feedback, supply rails +12 V and −12 V, and common/0 V node. Rails are not the same as the signal reference; confirm Falstad op-amp model output limits are set to ±10 V, an illustrative parameter rather than a universal datasheet value.",
        "FOLLOWER. Wire Vout directly to the − input (100% negative feedback), Vin into +. Drive with a 0.50 Vpeak (1.00 Vpp), 1.00 kHz sine centered at 0 V. With adequate common-mode range/bandwidth and no output overload, expected Vout≈Vin and closed-loop gain≈+1. A voltage follower does not increase voltage amplitude but can buffer a signal source from a load.",
        "GAIN STAGE. Connect non-inverting + to Vin, Rf=20 kΩ from output to −, Rg=10 kΩ from − to 0 V. Ideal negative-feedback gain Av=1+Rf/Rg=1+20k/10k=3.00 V/V. Expected Vout=1.50 Vpeak or 3.00 Vpp for Vin=0.50 Vpeak; feedback-node voltage ≈0.50 Vpeak when operating linearly.",
        "CHECK VOLTAGE GAIN. Label source CH1 and output CH2 scope traces and read both peak or both peak-to-peak amplitudes using identical units. Av = Vout/Vin =3.0, and output is non-inverted for this configuration. A phase shift, reduced gain or distortion should trigger a wiring/model/bandwidth check, not automatic acceptance.",
        "CLIPPING TEST IN SIMULATION. Raise Vin to 4.00 Vpeak: ideal gain predicts 12.0 Vpeak, but the specified simulator model limit is ±10.0 V, so output saturates/clips at the modeled limits; state that actual part output swing depends on supply, load and datasheet. Compare clipped output to a 1.00 Vpeak input (ideal 3.00 Vpeak output) still in the linear range.",
        "DISTINGUISH LIMITS. If a model output distorts before ±10 V, inspect input common-mode limits, supply polarity, slew rate, gain-bandwidth and load. With generic physical op amps, input/common-mode validity and output headroom must be confirmed by actual part datasheet; do not assume rail-to-rail behavior from a symbol.",
        "APPLICATION/FAULT. In a simulator remove Rf (open feedback), replace Rg with a wrong value, or overload output with lower resistance one at a time. Predict whether closed-loop gain, saturation, or output loading changes, measure and explain. Restore normal feedback; never introduce a supply short or test unsafe voltage physically.",
        "ACADEMIC EVIDENCE. Submit annotated follower/gain schematics, formula and numeric gain calculation, two labeled scope comparisons (linear and clipped), a fault diagnosis and modeled-vs-physical caveat. A screenshot is not proof of safely wired actual hardware or earned practical mastery."
      ],
      "virtualEquipment": "Falstad CircuitJS only: explicitly modeled ideal/generic op amp with illustrative output saturation at ±10 V and nominal ±12 V supplies; 0 V common; 1 kHz sine input; 10 kΩ (Rg) and 20 kΩ (Rf) feedback resistors; scope channel markers at Vin and Vout. Document actual model controls/limitations. No physical instrument required.",
      "virtualProcedure": [
        "Choose a generic op-amp component and verify model, supply/rail settings and output saturation values. Draw a follower with Vin→+ and output→−; label 0 V, +12 V and −12 V where the simulator supports explicit rails, otherwise document the simulated clip limits separately.",
        "At 1 kHz and 0.50 Vpeak input record follower Vin≈Vout; show unity gain and state why feedback tracks input.",
        "Build non-inverting gain stage: Rg=10 kΩ to ground, Rf=20 kΩ from output to − input, + input driven by sine. Before running show Av=1+(20k/10k)=3 and expected 1.50 Vpeak output.",
        "Capture CH1 (Vin) and CH2 (Vout) in linear region; compare 1.00 Vpp input and 3.00 Vpp output, matching waveform phase and gain ~3 for the idealized model.",
        "Change the input amplitude to 4.00 Vpeak ONLY in the simulator, predicting ±12 Vpeak ideal but clipping against assumed ±10 V model limit. Capture flattened peaks and explain why observed clipping is model-dependent, not a universal device characteristic.",
        "Inject one virtual fault (incorrect feedback resistor, open feedback or excessive modeled load); record observed gain/clipping and identify the likely cause. Restore circuit to normal and submit equations and annotated screenshots."
      ],
      "physicalEquipment": "OPTIONAL SUPERVISED LOW-ENERGY: exactly identified op amp and verified pinout/datasheet; manufacturer-permitted symmetrical supplies (example ±12 V only if appropriate), conservative current-limited isolated bench supply, function generator, DMM/scope with grounded reference explicitly verified and resistors 10 kΩ/20 kΩ. No mains/hot chassis; no arbitrary ground-clips on supply rails.",
      "physicalProcedure": [
        "Keep supply OFF. Identify op-amp actual supply/+,−/output pins and permissible common-mode range, output swing, gain-bandwidth and rated loads from datasheet. Confirm correct polarity, decoupling and common reference.",
        "Build follower and Rf/Rg gain circuit with power OFF; have supervisor check wiring and scope ground reference before enabling current-limited supply. Do not assume a single supply supports a negative-going input without biasing.",
        "Apply small 1 kHz input within allowed common-mode; compare Vin and Vout peaks/peak-to-peaks, compute gain and note device-specific nonideal behavior.",
        "For clipping demonstration, avoid exceeding input absolute maxima or rated output/load conditions; use simulation if safe operating limits and supervision cannot be guaranteed. Document measured versus modeled output swing.",
        "Power OFF before changing feedback or probes; never open feedback in a physical energized circuit deliberately. Record instrument settings, voltages and source assumptions; physical completion must be individually documented, not inferred from virtual screenshots."
      ]
    }
  },
  {
    "module": "M17",
    "labId": "LAB-011",
    "title": "Digital Logic / Pull Resistors / Debounce",
    "objective": "Build and troubleshoot basic digital logic while connecting voltage levels to Boolean states.",
    "sourceWeek": 11,
    "disposition": "SPLIT_INTO_TWO_RELATED_ACTIVITIES",
    "virtualTool": "Wokwi",
    "virtualLinks": [
      [
        "Open Wokwi",
        "https://wokwi.com/"
      ],
      [
        "Open CircuitVerse (optional logic-only practice)",
        "https://circuitverse.org/simulator"
      ]
    ],
    "virtualEvidence": "Truth table + logic-level evidence + analyzer/simulator capture + debounce note.",
    "physicalEvidence": "Truth table + voltage measurements + bounce capture.",
    "virtualCompletion": "Full academic completion",
    "physicalCompletion": "Full academic completion",
    "virtualVerification": "Real switch bounce and probe handling can be practiced physically later.",
    "original": {
      "equipment": "Logic ICs or MCU board, switches, resistors, logic analyzer/scope.",
      "procedure": [
        "Verify logic-high/low thresholds.",
        "Create pull-up and pull-down input circuits.",
        "Build/test basic gate truth table.",
        "Observe switch bounce.",
        "Apply hardware/software debounce concept and compare."
      ],
      "virtualEquipment": "Web browser only.",
      "virtualProcedure": [
        "Create digital inputs/outputs with a simulated MCU, switches, LEDs, or logic components.",
        "Demonstrate a pull-up and pull-down input and explain the default state.",
        "Build or verify a basic gate truth table; CircuitVerse may be used for the gate-only portion.",
        "Capture a button/input transition with the Wokwi logic analyzer and identify rapid transitions/bounce where the model permits.",
        "Implement or describe a debounce strategy and compare stable vs unstable input behavior."
      ],
      "physicalEquipment": "Logic ICs or MCU board, switches, resistors, logic analyzer/scope.",
      "physicalProcedure": [
        "Verify logic-high/low thresholds.",
        "Create pull-up and pull-down input circuits.",
        "Build/test basic gate truth table.",
        "Observe switch bounce.",
        "Apply hardware/software debounce concept and compare."
      ]
    },
    "improved": {
      "equipment": "SIMULATION FIRST: Wokwi Arduino-compatible 5 V MCU, two pushbuttons, pull-up input (INPUT_PULLUP) and separately demonstrated external 10.0 kΩ pull-down, LED with a 1.0 kΩ current-limiting resistor, logic analyzer/serial monitor. Use CircuitVerse for a separate 2-input AND gate truth table. Optional low-voltage physical route only after actual GPIO/IC data-sheet voltage/current ratings are checked.",
      "procedure": [
        "PREDICT LOGIC STATES. Define Boolean LOW as 0 and HIGH as 1 for the chosen 5 V MCU logic family. Do not assume every CMOS/TTL device or 3.3 V board shares the same numerical thresholds; identify VIH/VIL from the actual chip datasheet before physical verification. A floating digital input is neither reliably HIGH nor reliably LOW.",
        "INPUT_PULLUP ROUTE. Configure a digital input (example pin D2) as INPUT_PULLUP. Connect a normally-open switch only between D2 and circuit GND. Released state=HIGH (1); pressed state=LOW (0), an ACTIVE-LOW button. Do not wire this switch to +5 V simultaneously with INPUT_PULLUP in a way that shorts rails.",
        "EXTERNAL PULL-DOWN ROUTE, SEPARATE BUILD. Configure a different input (example D3) as INPUT (internal pull-up disabled). Connect 10 kΩ from D3 to GND and a normally-open button from D3 to rated +5 V. Released=LOW (0); pressed=HIGH (1), ACTIVE-HIGH. Never physically force an MCU output against a supply or short through a closed switch.",
        "CALCULATE PULL RESISTOR. When the external pull-down button is pressed, I≈5.0 V / 10,000 Ω=0.50 mA and resistor power P=V²/R=0.0025 W. Actual internal MCU pull-up is a specified range and is not necessarily 10 kΩ; do NOT imply both arrangements use identical currents.",
        "GATE TRUTH TABLE. Independently construct two-input AND: for (A,B)=00,01,10,11 the corresponding Y values are 0,0,0,1. Create and probe the AND gate in CircuitVerse, label wire connections, and explicitly distinguish the Boolean gate test from the Wokwi button electrical-input test.",
        "BOUNCE OBSERVATION. In Wokwi confirm the button bounce option is enabled (default) and compare with `bounce: \"0\"` which disables simulated bounce. Capture rapid transitions via logic analyzer or serial edge counter; if an analyzer view cannot resolve them, use an edge-count diagnostic and label as simulated, not measured mechanical bounce.",
        "DEBOUNCE STRATEGY. For one simulated button, count a new press only after the same stable raw logical state persists for a chosen 20 ms period. Record raw transient/edge count versus filtered valid presses. The 20 ms is an illustrative design choice, not a guaranteed requirement; discuss latency and test with bounce on/off.",
        "LED OUTPUT & FAULT. Show a 5 V MCU LED output driving an LED through 1.0 kΩ series resistor (illustratively Vf=2 V, I≈3 mA) only if the chosen board pin rating permits it. Diagnose one simulated missing pull resistor, inverted active-low assumption or absent GND using observed truth table and logic levels. Provide documented schematic, numeric calculation, state table and bounce evidence; no physical mastery claim."
      ],
      "virtualEquipment": "Wokwi with Arduino-compatible nominal 5 V board, pushbutton with bounce enabled by default, D2 INPUT_PULLUP and switch to GND, D3 configured INPUT and 10.0 kΩ resistor to GND plus switch to +5 V, serial edge counter and/or logic analyzer, optional LED with 1.0 kΩ series resistor. Optional CircuitVerse for 2-input AND only; simulation is not empirical GPIO qualification.",
      "virtualProcedure": [
        "Prepare two completely labeled input circuit diagrams. Use pin D2 INPUT_PULLUP with switch-to-GND (released=1, pressed=0). Separately use pin D3 INPUT with 10 kΩ pulldown-to-GND and switch-to-5 V (released=0, pressed=1). Keep grounds common and never configure input pins as actively driven outputs in these examples.",
        "Calculate 5/10,000=0.0005 A=0.50 mA and 25/10,000=0.0025 W for pressed external pulldown. Write how internal MCU pull-up resistance varies from this chosen external 10 kΩ example.",
        "Use CircuitVerse or equivalent simulator for a 2-input AND and submit the explicitly ordered 00→0, 01→0, 10→0, 11→1 truth table, marking A/B/Y and actual gate symbol.",
        "Run Wokwi button with simulated bouncing enabled, capture state transitions using Wokwi logic analyzer if timing resolution permits, otherwise an edge counter. Then disable bounce using the documented button property `bounce: \"0\"` and compare; record what is and is not visible.",
        "Implement a stable-state time filter (20 ms illustrative) in the simulated firmware: a new raw state restarts the timer; only a value unchanged for at least 20 ms updates debounced state; count a press on debounced HIGH→LOW transition for the active-low button.",
        "Record a counter trace or table comparing raw edges and filtered presses across at least three simulated press/release cycles. Include one failure diagnosis (floating input/no pull, wrong polarity, or wiring). Mark all traces as SIMULATED."
      ],
      "physicalEquipment": "OPTIONAL, SUPERVISED 5 V or 3.3 V low-energy MCU/logic device: identify exact VCC/GND/pinouts and VIH/VIL/input absolute max and output current ratings from datasheets; normally-open switches, 10 kΩ external resistor, properly current-limited LED, meter/logic analyzer with safe common ground. Never apply 5 V to a 3.3 V-only GPIO.",
      "physicalProcedure": [
        "Output power OFF. Verify MCU supply and pin tolerance, switch contact layout, ground reference, protection, and whether input/internal pull-up exists before wiring. Do not probe or assume logic thresholds based solely on 0/1 labels.",
        "Build INPUT_PULLUP active-low circuit with switch to GND first, power at rated low voltage and verify released HIGH/pressed LOW. Turn OFF power for any rewiring.",
        "Configure the separate 10 kΩ active-high pull-down circuit using a rated +V switch path and confirm released LOW/pressed HIGH, measuring voltage in voltage mode (not DMM current mode across supply).",
        "If a suitably rated logic analyzer and supervision are available, compare observed raw bounce versus debounced state, documenting sampling/timestamp resolution. If the real switch does not visibly bounce, do not fabricate a capture; supplement only with simulator evidence.",
        "With power OFF before fault changes, inspect a missing pull or ground using continuity checks on de-energized circuits, then document expected/detected symptom. Do not deliberately short supply rails, exceed pin ratings or equate a simulation with physical competence."
      ]
    }
  }
];
const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const fields=l=>({equipment:l.equipment,procedure:l.procedure,virtualEquipment:l.virtual.equipment,virtualProcedure:l.virtual.procedure,physicalEquipment:l.physical.equipment,physicalProcedure:l.physical.procedure});
const evid=l=>'Virtual or reasoning-route academic evidence: '+l.virtual.evidence+'  |  Optional physical equipment-route evidence (only if that work is safely undertaken): '+l.physical.evidence+'  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.';
try {
for(const s of ['ALFRED_CETA_INSTRUCTIONAL_STATUS','ALFRED_CETA_G08_LAB_EVIDENCE_STATUS','ALFRED_CETA_G08_LAB001_TECHNICAL_STATUS','ALFRED_CETA_G08_LABS_002_003_013_STATUS','ALFRED_CETA_G08_LABS_004_005_006_STATUS','ALFRED_CETA_G08_LABS_007_008_009_STATUS']) if(window[s]?.ok!==true)throw Error('Required predecessor not applied: '+s);
const course=window.ALFRED_CETA_DATA?.course;if(!Array.isArray(course)||course.length!==30)throw Error('Canonical 30-module course missing');
const mods=new Map(course.map(m=>[m.id,m]));if(mods.size!==30)throw Error('Duplicate module ID');
const targets=[],states=[];
for(const p of patches){const m=mods.get(p.module);if(!m||!Array.isArray(m.pages)||!Array.isArray(m.labs))throw Error('Module missing '+p.module);
const matches=m.labs.filter(l=>l.id===p.labId);if(matches.length!==1)throw Error('Missing/duplicated lab '+p.labId);const l=matches[0];
if(l.title!==p.title||l.objective!==p.objective||l.sourceWeek!==p.sourceWeek||l.disposition!==p.disposition||l.virtual?.tool!==p.virtualTool||!eq(l.virtual?.links,p.virtualLinks)||l.virtual?.evidence!==p.virtualEvidence||l.physical?.evidence!==p.physicalEvidence||l.evidence!==evid(l)||l.virtual?.completion!==p.virtualCompletion||l.physical?.completion!==p.physicalCompletion||l.virtual?.verification!==p.virtualVerification)throw Error('Metadata / evidence mismatch '+p.labId);
const state=eq(fields(l),p.original)?'original':eq(fields(l),p.improved)?'improved':'unexpected';if(state==='unexpected')throw Error('Field mismatch / partial patch '+p.labId);targets.push(l);states.push(state);}
if(states.some(x=>x!==states[0]))throw Error('Mixed target revision state');
if(states[0]==='improved'){window[key]={ok:true,revision,changes:0,alreadyApplied:true};return;}
for(let i=0;i<targets.length;i++){const l=targets[i],p=patches[i].improved;l.equipment=p.equipment;l.procedure=p.procedure.slice();l.virtual.equipment=p.virtualEquipment;l.virtual.procedure=p.virtualProcedure.slice();l.physical.equipment=p.physicalEquipment;l.physical.procedure=p.physicalProcedure.slice();}
window[key]={ok:true,revision,changes:2,labIds:patches.map(p=>p.labId),productionIntegrated:false};
}catch(e){window[key]={ok:false,revision,error:String(e?.message||e)};if(console?.warn)console.warn('[Alfred G08 labs 010/011] declined:',e)}
})();

check('ALFRED_CETA_G08_LABS_010_011_STATUS');
/* Alfred University AU-ESET 301 | G08-034/035 | LAB-012 and solder-photo lesson correction.
 * STAGED NOT FOR UPLOAD. Requires ALL previous G08 lab patches, using REPAIRED 004-006 only.
 * Read-only source: main course.js blob fbaee18f36f3282bc8ef9e4520ec49b5f9dd6f3e.
 * Only changes scoped instructions, preserving IDs, completion policy, evidence routes and learner records.
 */
(()=>{'use strict';
const key='ALFRED_CETA_G08_LAB012_AND_PHOTO_STATUS', revision='G08-034-035-20261103';
const p={
  "labModule": "M15",
  "labId": "LAB-012",
  "lessonId": "L29-0-04",
  "labOriginal": {
    "id": "LAB-012",
    "title": "Soldering / Rework / Harness Workmanship",
    "objective": "Create inspectable soldered and crimped connections and document workmanship.",
    "equipment": "Soldering station, wick, practice board, wire, crimp tools/connectors, ESD protection.",
    "procedure": [
      "Set up ESD and fume-safe workspace.",
      "Create several through-hole joints.",
      "Practice wick/desolder/rework.",
      "Prepare and crimp a small harness.",
      "Inspect against workmanship criteria and photograph results."
    ],
    "virtual": {
      "tool": "Alfred Engineering Library — Virtual Workmanship Preparation",
      "links": [
        [
          "Search soldering/workmanship resources",
          "search.html?q=soldering%20workmanship"
        ],
        [
          "Open Engineering Library",
          "resources.html"
        ]
      ],
      "equipment": "Web browser only; no soldering tools required for the virtual path.",
      "procedure": [
        "Study the course workmanship resources for acceptable and defective through-hole solder joints, rework, ESD, crimping, and harness preparation.",
        "Create an identification sheet that labels at least five good/bad solder or workmanship conditions and explains why each passes or fails.",
        "Write the correct sequence for safe solder setup, soldering, wick/desoldering, and rework.",
        "Create a virtual harness/crimp inspection checklist covering strip length, conductor damage, crimp location, strain relief, and inspection.",
        "Complete the knowledge/evidence portion now and leave the physical verification flag open for later."
      ],
      "evidence": "Workmanship identification sheet + procedure checklist + virtual inspection notes.",
      "completion": "Virtual preparation complete — physical skill verification later",
      "verification": "Actual soldering, desoldering, crimping, and tactile workmanship must be practiced physically when tools become available.",
      "physical_required": true
    },
    "physical": {
      "equipment": "Soldering station, wick, practice board, wire, crimp tools/connectors, ESD protection.",
      "procedure": [
        "Set up ESD and fume-safe workspace.",
        "Create several through-hole joints.",
        "Practice wick/desolder/rework.",
        "Prepare and crimp a small harness.",
        "Inspect against workmanship criteria and photograph results."
      ],
      "evidence": "Before/after photos + inspection checklist + rework note.",
      "completion": "Completes required physical skill verification"
    },
    "evidence": "Before/after photos + inspection checklist + rework note.",
    "sourceWeek": 12,
    "disposition": "SPLIT_INTO_TWO_RELATED_ACTIVITIES"
  },
  "lessonOriginal": {
    "module": "M15",
    "page": "L29-0-04",
    "title": "Workmanship practical case and evidence tiers",
    "worked": {
      "step0": "When verified external workmanship photos are available, compare an acceptable joint, a solder bridge, insufficient wetting and a lifted pad using the relevant inspection criteria. This course does not currently supply an authenticated four-photo assessment set; do not mark visual classification as completed from absent images.",
      "conclusion": "The workmanship-photo case cannot currently certify visual classification because the four claimed authenticated photographs are not supplied. Use explicit evidence-tier labeling and defer that visual assessment until sourced images and criteria are available.",
      "galleryIntro": "Photos A–D are externally hosted originals under their authors’ Creative Commons licenses. They load only with internet access; use the credited source links if a browser blocks image loading. None of these photographs alone establishes the condition of an unseen board."
    },
    "galleryTitle": "Four authentic solder-joint photographs: classify visible evidence",
    "galleryImageRefs": [
      {
        "id": "A",
        "filename": "Soldering-PCB-good.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Soldering-PCB-good.jpg",
        "credit": "Tlapicka · CC BY-SA 3.0"
      },
      {
        "id": "B",
        "filename": "Soldering-PCB-bad.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Soldering-PCB-bad.jpg",
        "credit": "Tlapicka · CC BY-SA 3.0"
      },
      {
        "id": "C",
        "filename": "Cold_solder_joint.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Cold_solder_joint.jpg",
        "credit": "Coronium · CC BY-SA 3.0"
      },
      {
        "id": "D",
        "filename": "Broken_Soldering_joint.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Broken_Soldering_joint.jpg",
        "credit": "MichaelFrey · CC BY-SA 3.0"
      }
    ]
  },
  "labImproved": {
    "equipment": "SIMULATION/PHOTO INTERPRETATION FIRST: verified source-credit links for A–D, magnification or linked higher-resolution source pages where possible, de-energized sample schematic, inspection checklist and separate simulated/physical evidence log. Physical route requires a supervised low-voltage, disconnected practice board (never mains or safety-critical/medical product), suitable soldering station/stand, appropriate alloy/flux and SDS, local fume extraction, eye protection, ESD setup, temperature-rated tools, approved solder wick, manufacturer-matched ratcheting crimp die/terminal/wire, and a documented test plan.",
    "procedure": [
      "SET THE EVIDENCE LEVEL. Record THREE different states: (1) theoretical written identification/checklist; (2) photographs actually opened, identified and interpreted; (3) personally completed, supervised solder/crimp workmanship. The first two cannot automatically satisfy physical skill. A source image or AI illustration is not a learner-produced before/after photograph.",
      "PHOTO CROSSWALK. Follow the existing course gallery links A–D. Source metadata lists A (Tlapicka, good conical fillet), B (Tlapicka, ball-shaped/possible nonwetting), C (Coronium, titled cold joint), D (MichaelFrey, reported broken car-radio joint); each page is attributed CC BY-SA 3.0. Distinguish observed surface features from claims of metallurgical quality, internal plated-through-hole fill, or exact fault diagnosis. Mark unknown if full-resolution inspection is unavailable.",
      "FOUR-PHOTO EXCEPTION. These FOUR linked examples do NOT comprise a comprehensive four-defect diagnostic practical: neither an unambiguous solder BRIDGE between distinct nets nor an unambiguous LIFTED PAD appears in the gallery. Do not score those categories from imagined details. Record them as NOT ASSESSED with a source-needed flag. Compare conceptual bridge/lifted-pad descriptions using a schematic and independent authorized inspection examples only if verified.",
      "PRE-WORK SAFETY. Use an unpowered, inspected practice PCB, not a powered field product. Separate ESD device protection from human thermal/electrical safety. Use effective local fume extraction, keep breathing zone out of flux plume, keep combustible items away and hot iron in secure holder, and follow flux/alloy SDS; wash hands after handling lead-containing solder, do not eat/drink at bench. Eye protection for splatter; stop if burn, fumes, damaged equipment or unknown power conditions are present.",
      "JOINT FORMATION THEORY. Explain contact/wetting: clean/tinned appropriate tip touches BOTH pad and lead; apply correct flux and solder as permitted by process, remove heat and keep immobile during solidification. Compare intended wetted fillet vs balling/nonwetting, insufficient fillet, bridge, damaged pad, disturbed joint. Visual gloss is not a universal pass criterion for lead-free alloys. No arbitrary iron temperature or dwell time can replace product/process specifications.",
      "WICK / REWORK THEORY. On a controlled low-energy sample, show how fluxed copper braid placed against the target joint and heated with a correctly sized tip draws molten solder by capillarity; stop when flow ceases. No tugging on a partly attached lead, long dwell or forced pad removal. If pad/annular ring/barrel lifts, STOP and document for approved repair rather than repeatedly reheat. A simple continuity beep does not prove internal plated through-hole integrity.",
      "CRIMP/HARNESS THEORY. Identify the actual connector/terminal family, compatible wire gauge/stranding, manufacturer strip length, matched crimper/die and specified inspection or pull/retention method before work. Predict exposed strands, insulation placement, conductor crimp, insulation support, polarity/pin order and strain relief. A de-energized continuity test alone does not establish crimp retention or contact quality; no invented universal pull-force threshold.",
      "PHYSICAL ROUTE, IF AVAILABLE. After supervisor confirms tools, training and safe setup, photograph BEFORE joints with board ID/side and scale; make a small set of training through-hole joints, one controlled wick removal/replacement, and a two-conductor crimp harness. Record tool/alloy/flux IDs, work sequence, any rework and each inspection result (pass/fail/unknown to declared shop/manufacturer/IPC criteria). Perform de-energized schematic-guided continuity/isolation tests and permitted physical retention checks, then photo AFTER under comparable scale and light.",
      "DIAGNOSTIC TRANSFER. Present a no-power board where neighboring nets read ~0 Ω: check schematic for legitimate parallel paths before diagnosing a bridge; demonstrate why an open trace/pad cannot be repaired by merely adding solder. Explain nonwetting vs insufficient solder without declaring a glossy surface universally good. Compare an observed photo-only clue with functional and mechanical evidence needed for release.",
      "EVIDENCE AND SIGNOFF. Virtual evidence: A–D source links and attribution, observational uncertainty table, ≥5 quality/defect mechanisms (including bridge/lifted pad explicitly marked conceptual if not photographed), safe sequence, crimp checklist and simulated case disposition. Physical evidence requires personal BEFORE/AFTER photos (where permitted), supervisor verification and actual test record. Keep the existing physical_required flag and do not automatically change completion or historical scores."
    ],
    "virtualEquipment": "Browser, displayed online Commons A–D source pages, course engineering library, offline note template and a printed/electronic schematic. No soldering, flux, heated tool or real hardware is required. Some hosted images may not render offline; do not claim a photo was inspected when only its metadata was viewed.",
    "virtualProcedure": [
      "Open each of the four already cited Wikimedia Commons file pages through the gallery. Record author/license/title and whether the ORIGINAL image—not merely alt text—was actually visible. Photos A–D are source-attributed photographs, not generated diagrams; the viewer must still judge whether a visible feature supports the alleged condition.",
      "Create a structured table with columns Photo A–D, directly visible clue, plausible classification, competing explanation, confidence, additional inspection needed. A: conical wetted outline; B: raised ball/possible nonwetting; C: publisher title says cold joint but actual bond quality not certified by image alone; D: high-resolution fracture identification requires close inspection and context.",
      "Write a separate five-defect comparison rubric: intended wetted joint, poor/nonwetting, bridge, lifted pad, and disturbed or cracked joint; label the bridge and lifted-pad photo rows UNSUPPORTED by this exact A–D gallery. Do not claim you recognized nonexistent images.",
      "Explain a safe powered-OFF solder setup, effective fume extraction for rosin/flux, eye protection, ESD boundaries, handwashing/no food with lead solder, correct iron stand, flux compatibility and operator/supervisor limits. Cite the safety rule source in your notes.",
      "Draft a 7-step de-energized wick/desolder/rework explanation including fluxed braid, heat transfer, removal without pad force, stopping on lifting, and after-work inspection, without asserting that you performed it.",
      "Draft a connector-specific crimp/harness checklist: wire and terminal family match, strip length per data sheet, no nicked strands, conductor barrel correctly positioned, insulation support and proper release, pin order/strain relief, specified retention method and schematic-guided continuity after disconnection.",
      "For a two-net short and a cracked-looking surface, predict whether a schematic parallel path or cosmetic variation could mislead. Complete virtual notes as KNOWLEDGE preparation ONLY; retain physical_required and leave hand-skill verification open."
    ],
    "physicalEquipment": "SUPERVISED PRACTICE ONLY: isolated unpowered low-voltage training PCB; ESD-protected workstation; local-exhaust unit properly maintained for flux; rated and inspected iron/stand, known compatible solder/flux with SDS, appropriate heat-resistant work surface and safety glasses, wick and controlled rework tool, terminal-specific wire/dies/crimper, magnifier, de-energized DMM, job-specific checklist and allowable photo capture method. No energized mains, unknown stored-energy device or patient/medical production equipment.",
    "physicalProcedure": [
      "Before heating, have qualified supervisor verify de-energization, residual energy, ESD plan, tool integrity, extraction capture location, approved material/flux compatibility and local burn/fire response. Follow supplier process for solder joint temperatures and dwell (none assumed universally).",
      "Record baseline photographs of training board/joints under consistent light and scale, identifying component/PCB side and net identities. Make representative through-hole joints on safe training board while heating both pad and lead with suitable tip; inspect fillet coverage and wetting to the declared applicable workmanship level.",
      "Practice ONE controlled solder-wick removal with a supported small through-hole joint, documenting tip, wick, flux and thermal exposure. Stop at any pad movement, scorch, exposed lifted trace or prolonged reheating; do not experiment on a production or safety-critical assembly.",
      "Create and check a small two-conductor practice harness using the exact matched crimper/terminal and manufacturer specified wire-gauge/strip length. Inspect barrel support, nicked/escaped strands, insulation retention, terminal orientation, strain relief and connector pin map.",
      "With the entire sample electrically de-energized and discharged, check expected node continuity and isolation against the board schematic and specify any legitimate parallel paths. Use only appropriate manufacturer-specified pull/retention verification; never claim a universal force.",
      "Photograph AFTER and compare to BEFORE with stated pass/fail/unknown criteria and limitation notes. Identify and document ≥1 failed or intentionally simulated defect, stopping and escalating if a pad or plated via has separated.",
      "Record personally performed operations, inspection standard/version, values/instruments, supervisor identity/signoff where applicable, and which tasks were NOT physically completed. Internet sample photos, theoretical identification, or simulated checks do not count as personally fabricated joints."
    ]
  },
  "lessonImproved": {
    "step0": "The four source-attributed photographs A–D already appear in this lesson gallery as ONLINE external links and may require an internet connection. They support a limited comparison of wetted-cone morphology, a rounded solder ball, a contributor-labeled cold joint, and a magnified board containing a reportedly fractured connection. They DO NOT unambiguously demonstrate both a solder bridge between distinct circuit nets and a lifted pad. Record those two diagnostic categories as unassessed from this photo set, not as detected images. Image analysis alone is never hands-on soldering certification.",
    "conclusion": "The four gallery photo SOURCE PAGES and CC BY-SA 3.0 author attributions have been independently cross-checked, but online rendering, complete four-defect diagnostic coverage, and hands-on proficiency remain unverified. Credit only the specific visual features the learner actually inspected. Do not award photo-based bridge or lifted-pad recognition, physical work or exam mastery from metadata or unsupported assumptions.",
    "galleryIntro": "Photos A–D are source-attributed PHOTOGRAPHS hosted on Wikimedia Commons, offered as internet-dependent image interpretation. Their source file pages identify individual authors and CC BY-SA 3.0 licensing. If an actual image cannot be viewed, record IMAGE NOT INSPECTED and use the source link; do not infer the condition from filename/alt text alone. This collection lacks an unambiguous bridge and lifted-pad photo and is not a comprehensive four-defect proficiency assessment.",
  "galleryTitle": "Four source-attributed solder-joint photographs: interpret only visible evidence"
  }
};
const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const fields=l=>({equipment:l.equipment,procedure:l.procedure,virtualEquipment:l.virtual.equipment,virtualProcedure:l.virtual.procedure,physicalEquipment:l.physical.equipment,physicalProcedure:l.physical.procedure});
const evidence=l=>'Virtual preparation evidence (not a physical workmanship check): '+l.virtual.evidence+'  |  Physical soldering/rework/harness skill-verification evidence (only from actual safely supervised work): '+l.physical.evidence+'  |  A photograph-based defect recognition activity does not by itself demonstrate soldering or crimping proficiency.';
const improvedFields=i=>({equipment:i.equipment,procedure:i.procedure,virtualEquipment:i.virtualEquipment,virtualProcedure:i.virtualProcedure,physicalEquipment:i.physicalEquipment,physicalProcedure:i.physicalProcedure});
const photoRefs=g=>g.images.map(x=>({id:x.id,filename:x.filename,source:x.source,credit:x.credit}));
const workedFields=g=>({step0:g.worked.steps[0],conclusion:g.worked.conclusion,galleryIntro:g.visualGallery.intro,galleryTitle:g.visualGallery.title});
try {
 for(const s of ['ALFRED_CETA_INSTRUCTIONAL_STATUS','ALFRED_CETA_G08_LAB_EVIDENCE_STATUS','ALFRED_CETA_G08_LAB001_TECHNICAL_STATUS','ALFRED_CETA_G08_LABS_002_003_013_STATUS','ALFRED_CETA_G08_LABS_004_005_006_STATUS','ALFRED_CETA_G08_LABS_007_008_009_STATUS','ALFRED_CETA_G08_LABS_010_011_STATUS'])if(window[s]?.ok!==true)throw Error('Required predecessor missing: '+s);
 const course=window.ALFRED_CETA_DATA?.course;if(!Array.isArray(course)||course.length!==30)throw Error('Canonical course missing');
 const mods=new Map(course.map(x=>[x.id,x]));if(mods.size!==30)throw Error('Duplicate modules');
 const m=mods.get('M15');if(!m||!Array.isArray(m.labs)||!Array.isArray(m.pages))throw Error('M15 not found');
 const labs=m.labs.filter(x=>x.id===p.labId),pages=m.pages.filter(x=>x.id===p.lessonId);
 if(labs.length!==1||pages.length!==1)throw Error('Target lab/page missing or duplicated');
 const l=labs[0],pg=pages[0],o=p.labOriginal;
 if(l.title!==o.title||l.objective!==o.objective||l.sourceWeek!==o.sourceWeek||l.disposition!==o.disposition||
    l.virtual?.tool!==o.virtual.tool||!eq(l.virtual?.links,o.virtual.links)||l.virtual?.evidence!==o.virtual.evidence||
    l.virtual?.completion!==o.virtual.completion||l.virtual?.verification!==o.virtual.verification||
    l.virtual?.physical_required!==true||l.physical?.completion!==o.physical.completion||
    l.physical?.evidence!==o.physical.evidence||l.evidence!==evidence(l))throw Error('Lab identity/evidence mismatch');
 const meta=p.lessonOriginal;
 if(pg.title!==meta.title||pg.id!==meta.page||pg.goldTeaching?.worked?.steps?.length!==2||
    !eq(photoRefs(pg.goldTeaching.visualGallery),meta.galleryImageRefs))throw Error('Lesson gallery identity mismatch');
 const oldFields={equipment:o.equipment,procedure:o.procedure,virtualEquipment:o.virtual.equipment,virtualProcedure:o.virtual.procedure,physicalEquipment:o.physical.equipment,physicalProcedure:o.physical.procedure};
 if(window.ALFRED_CETA_G08_M15_STATUS?.ok!==true || pg.goldTeaching.worked.steps[1] !== 'A solder bridge and a lifted PCB pad are not unambiguously demonstrated by these four pictures. Explain each defect using the lesson descriptions and suitable authenticated visual examples when available. Document uncertain diagnoses, necessary magnification or safe tests, and the difference between photograph recognition and supervised physical workmanship.') throw Error('Unexpected G08-001 predecessor');
 const oldWorked={...meta.worked,step0:'Inspect the four sourced photographs A–D in the image gallery below. Identify the visible shape or condition, then distinguish direct observations from hypotheses: A shows conical wetting, B suggests balling or possible nonwetting, C shows a joint reported as cold, and D requires a closer inspection before a fracture can be confirmed. If an online photograph cannot be viewed, use its source link; do not claim to have completed image classification without viewing the images.',conclusion:'Four authentic, credited external photographs are linked for unscored visual practice, but they do not constitute a comprehensive solder-defect image test, confirm a joint’s internal integrity, or demonstrate physical soldering competence. The image exercise may be attempted when photographs load; hands-on rework verification remains a separate supervised task.',galleryTitle:meta.galleryTitle},newWorked=p.lessonImproved;
 const labState=eq(fields(l),oldFields)?'original':eq(fields(l),improvedFields(p.labImproved))?'improved':'unexpected';
 const photoState=eq(workedFields(pg.goldTeaching),oldWorked)?'original':eq(workedFields(pg.goldTeaching),newWorked)?'improved':'unexpected';
 if(labState==='unexpected'||photoState==='unexpected'||labState!==photoState)throw Error('Mixed / partial / unexpected revision');
 if(labState==='improved'){window[key]={ok:true,revision,alreadyApplied:true,changes:0};return;}
 // Every guard has passed before any mutation; no change to grade, completion, evidence or gallery pictures.
 const x=p.labImproved;
 l.equipment=x.equipment;l.procedure=x.procedure.slice();l.virtual.equipment=x.virtualEquipment;l.virtual.procedure=x.virtualProcedure.slice();l.physical.equipment=x.physicalEquipment;l.physical.procedure=x.physicalProcedure.slice();
 pg.goldTeaching.worked.steps[0]=newWorked.step0;pg.goldTeaching.worked.conclusion=newWorked.conclusion;pg.goldTeaching.visualGallery.intro=newWorked.galleryIntro;pg.goldTeaching.visualGallery.title=newWorked.galleryTitle;
 window[key]={ok:true,revision,changes:2,labIds:[p.labId],lessonId:p.lessonId,productionIntegrated:false};
}catch(e){window[key]={ok:false,revision,error:String(e?.message||e)};if(console?.warn)console.warn('[Alfred G08 LAB012/photos] declined:',e)}
})();

check('ALFRED_CETA_G08_LAB012_AND_PHOTO_STATUS');
// Source records and revisions are injected by assemble.py from the two reviewed JSON files.
(function applyRemainingPracticals() {
  'use strict';
  const originals = {
  "LAB-017": {
    "id": "LAB-017",
    "title": "UART + Python Serial Console",
    "objective": "Build an end-to-end serial interface between MCU firmware and a Python host.",
    "equipment": "STM32 board, USB/UART path, Python + pySerial, logic analyzer optional.",
    "procedure": [
      "Configure UART parameters.",
      "Transmit structured status text.",
      "Receive at least one host command.",
      "Write Python script to send/read with timeout.",
      "Troubleshoot one baud/frame/cabling issue."
    ],
    "virtual": {
      "tool": "Wokwi + browser Python environment",
      "links": [
        [
          "Open Wokwi",
          "https://wokwi.com/"
        ],
        [
          "Open OnlineGDB C Compiler",
          "https://www.onlinegdb.com/online_c_compiler"
        ]
      ],
      "equipment": "Web browser only.",
      "procedure": [
        "Configure the simulated MCU UART and transmit structured status messages to the Wokwi serial terminal.",
        "Implement at least one received command and show the firmware response.",
        "Write the host-side Python/pySerial logic as a script even if a real serial port is not available in the browser.",
        "Test parsing, timeout, and malformed-message logic against copied/sample serial data.",
        "Create one baud/protocol/framing assumption error in the model or logs and explain how you would diagnose it physically."
      ],
      "evidence": "Firmware + Python host script + serial-terminal capture + protocol/error note.",
      "completion": "Full academic completion",
      "verification": "A real USB/UART end-to-end link can be practiced later when hardware is available."
    },
    "physical": {
      "equipment": "STM32 board, USB/UART path, Python + pySerial, logic analyzer optional.",
      "procedure": [
        "Configure UART parameters.",
        "Transmit structured status text.",
        "Receive at least one host command.",
        "Write Python script to send/read with timeout.",
        "Troubleshoot one baud/frame/cabling issue."
      ],
      "evidence": "Firmware + Python script + terminal/log capture.",
      "completion": "Full academic completion"
    },
    "evidence": "Virtual or reasoning-route academic evidence: Firmware + Python host script + serial-terminal capture + protocol/error note.  |  Optional physical equipment-route evidence (only if that work is safely undertaken): Firmware + Python script + terminal/log capture.  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.",
    "sourceWeek": 17,
    "disposition": "REDUCE_TO_INTERFACE_OBSERVATION"
  },
  "LAB-018": {
    "id": "LAB-018",
    "title": "I²C / SPI Sensor + Logic Analyzer",
    "objective": "Integrate a digital sensor and prove bus behavior using protocol captures.",
    "equipment": "STM32 board, I²C/SPI sensor, logic analyzer, datasheet.",
    "procedure": [
      "Read datasheet address/register/interface requirements.",
      "Wire power and bus signals.",
      "Perform ID/register read.",
      "Capture and decode transaction.",
      "Convert raw data to engineering units and test an error case."
    ],
    "virtual": {
      "tool": "Wokwi + Logic Analyzer",
      "links": [
        [
          "Open Wokwi",
          "https://wokwi.com/"
        ]
      ],
      "equipment": "Web browser only.",
      "procedure": [
        "Choose a supported simulated I²C or SPI sensor and read its datasheet/register information.",
        "Wire the virtual power and bus signals.",
        "Perform an ID/register read and capture the bus transaction with the Wokwi logic analyzer.",
        "Decode address/register/data behavior and convert raw data into engineering units.",
        "Create one incorrect address/wiring/configuration case and document the error evidence."
      ],
      "evidence": "Virtual wiring diagram + code + decoded analyzer capture + data table + error case.",
      "completion": "Full academic completion",
      "verification": "Physical wiring and probe attachment are optional later."
    },
    "physical": {
      "equipment": "STM32 board, I²C/SPI sensor, logic analyzer, datasheet.",
      "procedure": [
        "Read datasheet address/register/interface requirements.",
        "Wire power and bus signals.",
        "Perform ID/register read.",
        "Capture and decode transaction.",
        "Convert raw data to engineering units and test an error case."
      ],
      "evidence": "Wiring diagram + code + decoded capture + data table.",
      "completion": "Full academic completion"
    },
    "evidence": "Virtual or reasoning-route academic evidence: Virtual wiring diagram + code + decoded analyzer capture + data table + error case.  |  Optional physical equipment-route evidence (only if that work is safely undertaken): Wiring diagram + code + decoded capture + data table.  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.",
    "sourceWeek": 18,
    "disposition": "REDUCE_TO_INTERFACE_OBSERVATION"
  },
  "LAB-014": {
    "id": "LAB-014",
    "title": "C Memory / Bitwise / Register Simulation",
    "objective": "Use C to manipulate bits and model memory-mapped hardware concepts.",
    "equipment": "Computer, C compiler/IDE.",
    "procedure": [
      "Write bit-set/clear/test helpers.",
      "Use masks for packed status flags.",
      "Inspect pointer/struct memory behavior.",
      "Model a fake 32-bit peripheral register.",
      "Explain each operation without relying on library magic."
    ],
    "virtual": {
      "tool": "OnlineGDB C Compiler",
      "links": [
        [
          "Open OnlineGDB C Compiler",
          "https://www.onlinegdb.com/online_c_compiler"
        ]
      ],
      "equipment": "Web browser only.",
      "procedure": [
        "Write and run bit-set, bit-clear, and bit-test helper functions.",
        "Use masks to pack and unpack several status flags.",
        "Print addresses/values to inspect pointer, array, and struct memory behavior.",
        "Model a fake 32-bit peripheral register and manipulate fields with masks.",
        "Annotate the output so every operation can be explained without library magic."
      ],
      "evidence": "Source code + program output + annotated bitmask/register examples.",
      "completion": "Full academic completion",
      "verification": "No physical hardware is required for this lab objective."
    },
    "physical": {
      "equipment": "Computer, C compiler/IDE.",
      "procedure": [
        "Write bit-set/clear/test helpers.",
        "Use masks for packed status flags.",
        "Inspect pointer/struct memory behavior.",
        "Model a fake 32-bit peripheral register.",
        "Explain each operation without relying on library magic."
      ],
      "evidence": "Source code + annotated bitmask examples + short explanation.",
      "completion": "Full academic completion"
    },
    "evidence": "Virtual or reasoning-route academic evidence: Source code + program output + annotated bitmask/register examples.  |  Optional physical equipment-route evidence (only if that work is safely undertaken): Source code + annotated bitmask examples + short explanation.  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.",
    "sourceWeek": 14,
    "disposition": "REDUCE_TO_CONCEPTUAL_EXERCISE"
  },
  "LAB-015": {
    "id": "LAB-015",
    "title": "Embedded C State Machine",
    "objective": "Build a nonblocking state machine and reason about deterministic control flow.",
    "equipment": "C environment or MCU board.",
    "procedure": [
      "Define states/events/transitions.",
      "Implement with enum + switch or table.",
      "Remove blocking delays where practical.",
      "Inject invalid events/timeouts.",
      "Log transitions for verification."
    ],
    "virtual": {
      "tool": "OnlineGDB C Compiler",
      "links": [
        [
          "Open OnlineGDB C Compiler",
          "https://www.onlinegdb.com/online_c_compiler"
        ],
        [
          "Open Wokwi (optional MCU version)",
          "https://wokwi.com/"
        ]
      ],
      "equipment": "Web browser only.",
      "procedure": [
        "Define states, events, and transitions on paper first.",
        "Implement the state machine in C using enum + switch or a table.",
        "Replace blocking behavior with state/time/event logic where practical.",
        "Inject invalid events and timeout conditions.",
        "Print/log every transition and verify the sequence against the state diagram."
      ],
      "evidence": "State diagram + source code + transition log + one error-case explanation.",
      "completion": "Full academic completion",
      "verification": "Running the same state machine on a physical MCU is optional later."
    },
    "physical": {
      "equipment": "C environment or MCU board.",
      "procedure": [
        "Define states/events/transitions.",
        "Implement with enum + switch or table.",
        "Remove blocking delays where practical.",
        "Inject invalid events/timeouts.",
        "Log transitions for verification."
      ],
      "evidence": "State diagram + code + transition log.",
      "completion": "Full academic completion"
    },
    "evidence": "Virtual or reasoning-route academic evidence: State diagram + source code + transition log + one error-case explanation.  |  Optional physical equipment-route evidence (only if that work is safely undertaken): State diagram + code + transition log.  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.",
    "sourceWeek": 15,
    "disposition": "OPTIONAL_ENRICHMENT"
  },
  "LAB-016": {
    "id": "LAB-016",
    "title": "STM32 GPIO + SWD Bring-Up",
    "objective": "Create, flash and debug an STM32 GPIO application from a clean project.",
    "equipment": "STM32 board, ST-LINK/SWD, CubeIDE/CubeMX, DMM/scope.",
    "procedure": [
      "Create project and configure clocks/pin.",
      "Build/flash and verify debugger connection.",
      "Drive LED/output and read input.",
      "Use breakpoints/watch/register view.",
      "Document one bring-up failure and correction."
    ],
    "virtual": {
      "tool": "Wokwi STM32",
      "links": [
        [
          "Open Wokwi",
          "https://wokwi.com/"
        ]
      ],
      "equipment": "Web browser only.",
      "procedure": [
        "Create an STM32 simulation and configure one GPIO output and one input.",
        "Build/run firmware and verify the LED/output and input behavior.",
        "Use available debugger/inspection features or explicit serial/register logging to inspect program state.",
        "Create one bring-up failure such as the wrong pin, polarity, or configuration and repair it.",
        "Document the virtual pinout and the steps you would use to connect a real ST-LINK/SWD debugger later."
      ],
      "evidence": "Wokwi project link/screenshot + pinout + debug/log evidence + bring-up fault note.",
      "completion": "Full academic completion",
      "verification": "Physical ST-LINK/SWD cabling and real-board bring-up should be practiced when hardware becomes available."
    },
    "physical": {
      "equipment": "STM32 board, ST-LINK/SWD, CubeIDE/CubeMX, DMM/scope.",
      "procedure": [
        "Create project and configure clocks/pin.",
        "Build/flash and verify debugger connection.",
        "Drive LED/output and read input.",
        "Use breakpoints/watch/register view.",
        "Document one bring-up failure and correction."
      ],
      "evidence": "Project repo + debugger screenshot + pinout + bring-up log.",
      "completion": "Full academic completion"
    },
    "evidence": "Virtual or reasoning-route academic evidence: Wokwi project link/screenshot + pinout + debug/log evidence + bring-up fault note.  |  Optional physical equipment-route evidence (only if that work is safely undertaken): Project repo + debugger screenshot + pinout + bring-up log.  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.",
    "sourceWeek": 16,
    "disposition": "OPTIONAL_ENRICHMENT"
  },
  "LAB-019": {
    "id": "LAB-019",
    "title": "Cable / Connector / Optical Recognition & Test",
    "objective": "Identify cable families, connectors, termination concerns and basic loss/continuity tests.",
    "equipment": "Representative copper/coax/fiber items or high-quality references, DMM/cable tester as available.",
    "procedure": [
      "Identify construction and common use.",
      "Compare impedance/termination requirements.",
      "Inspect connectors and likely defects.",
      "Perform safe continuity/cable checks where applicable.",
      "Explain fiber eye/skin safety and dB loss concept."
    ],
    "virtual": {
      "tool": "Alfred Engineering Library — Cable/Connector Virtual Lab",
      "links": [
        [
          "Search cable/connector resources",
          "search.html?q=cable%20connector%20fiber%20coax"
        ],
        [
          "Open Engineering Library",
          "resources.html"
        ]
      ],
      "equipment": "Web browser only.",
      "procedure": [
        "Use the course library to identify representative copper, twisted-pair, coax, fiber, and common connector families.",
        "Build an identification table with construction, impedance/termination concerns, and typical use.",
        "Inspect high-quality connector examples and identify likely workmanship defects.",
        "Work through continuity/open/short test scenarios and state the expected meter/cable-tester indication.",
        "Explain fiber eye/skin safety and dB-loss concepts before completing the lab."
      ],
      "evidence": "Identification table + annotated connector examples + virtual test scenarios + safety notes.",
      "completion": "Full academic completion",
      "verification": "Physical connector handling, crimping, and cable-tester use are recommended later."
    },
    "physical": {
      "equipment": "Representative copper/coax/fiber items or high-quality references, DMM/cable tester as available.",
      "procedure": [
        "Identify construction and common use.",
        "Compare impedance/termination requirements.",
        "Inspect connectors and likely defects.",
        "Perform safe continuity/cable checks where applicable.",
        "Explain fiber eye/skin safety and dB loss concept."
      ],
      "evidence": "Identification sheet + connector photos + test notes.",
      "completion": "Full academic completion"
    },
    "evidence": "Virtual or reasoning-route academic evidence: Identification table + annotated connector examples + virtual test scenarios + safety notes.  |  Optional physical equipment-route evidence (only if that work is safely undertaken): Identification sheet + connector photos + test notes.  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.",
    "sourceWeek": 19,
    "disposition": "SPLIT_INTO_TWO_RELATED_ACTIVITIES"
  },
  "LAB-020": {
    "id": "LAB-020",
    "title": "RF / Spectrum / Modulation Observation",
    "objective": "Connect frequency, wavelength, modulation and spectrum concepts using safe signals or simulation.",
    "equipment": "Spectrum analyzer/SDR/simulation as available; signal source.",
    "procedure": [
      "Calculate wavelength for selected frequencies.",
      "Observe a known signal in frequency domain.",
      "Identify carrier/bandwidth concept.",
      "Compare AM/FM or other modulation examples.",
      "Explain impedance/SWR/matching at CETa depth."
    ],
    "virtual": {
      "tool": "Falstad + Alfred Spectrum/RF Resources",
      "links": [
        [
          "Open Falstad",
          "https://www.falstad.com/circuit/"
        ],
        [
          "Search RF/spectrum resources",
          "search.html?q=RF%20spectrum%20modulation"
        ]
      ],
      "equipment": "Web browser only.",
      "procedure": [
        "Calculate wavelength for several selected frequencies.",
        "Use Falstad or assigned course resources to observe time/frequency behavior of known signals and filters.",
        "Use verified spectrum-analyzer examples in the Engineering Library to identify carrier, sidebands, and bandwidth concepts.",
        "Compare AM/FM or another modulation example at CETa depth.",
        "Explain impedance, matching, SWR/VSWR, and what a real spectrum/SDR setup would add."
      ],
      "evidence": "Wavelength calculation sheet + simulation/resource capture + annotated spectrum concept summary.",
      "completion": "Full academic completion",
      "verification": "Hands-on spectrum-analyzer/SDR tuning is optional later."
    },
    "physical": {
      "equipment": "Spectrum analyzer/SDR/simulation as available; signal source.",
      "procedure": [
        "Calculate wavelength for selected frequencies.",
        "Observe a known signal in frequency domain.",
        "Identify carrier/bandwidth concept.",
        "Compare AM/FM or other modulation examples.",
        "Explain impedance/SWR/matching at CETa depth."
      ],
      "evidence": "Calculation sheet + spectrum capture + concept summary.",
      "completion": "Full academic completion"
    },
    "evidence": "Virtual or reasoning-route academic evidence: Wavelength calculation sheet + simulation/resource capture + annotated spectrum concept summary.  |  Optional physical equipment-route evidence (only if that work is safely undertaken): Calculation sheet + spectrum capture + concept summary.  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.",
    "sourceWeek": 20,
    "disposition": "RETAIN_REQUIRED_WITH_SIMULATION"
  },
  "LAB-021": {
    "id": "LAB-021",
    "title": "CETa Mixed Practical Review",
    "objective": "Rotate through representative calculations, identification, instruments, diagrams and troubleshooting before the exam-readiness gate.",
    "equipment": "Formula sheet, component kit, instruments, diagrams, practice questions.",
    "procedure": [
      "Complete timed mixed knowledge block.",
      "Perform component/instrument identification.",
      "Solve several fresh calculations.",
      "Trace one schematic fault.",
      "Tag every miss to a CETa domain and repair it."
    ],
    "virtual": {
      "tool": "Virtual Mixed Practical — Alfred + Falstad/Wokwi/CircuitVerse",
      "links": [
        [
          "Open Assessment Center",
          "assessments.html"
        ],
        [
          "Open Falstad",
          "https://www.falstad.com/circuit/"
        ],
        [
          "Open Wokwi",
          "https://wokwi.com/"
        ],
        [
          "Open CircuitVerse",
          "https://circuitverse.org/simulator"
        ]
      ],
      "equipment": "Web browser only plus ETA formula sheet.",
      "procedure": [
        "Complete a timed mixed knowledge block in the Assessment Center.",
        "Use images/simulators for component, instrument, and diagram identification.",
        "Solve fresh calculations without looking up the answer first.",
        "Trace one simulated schematic fault in Falstad or a digital/embedded fault in CircuitVerse/Wokwi.",
        "Tag every miss to a CETa domain and place weak items into review."
      ],
      "evidence": "Domain error log + corrected solutions + virtual practical checklist + one troubleshooting capture.",
      "completion": "Full academic completion",
      "verification": "Physical component/instrument identification is recommended before technician interviews when equipment becomes available."
    },
    "physical": {
      "equipment": "Formula sheet, component kit, instruments, diagrams, practice questions.",
      "procedure": [
        "Complete timed mixed knowledge block.",
        "Perform component/instrument identification.",
        "Solve several fresh calculations.",
        "Trace one schematic fault.",
        "Tag every miss to a CETa domain and repair it."
      ],
      "evidence": "Domain error log + corrected solutions + practical checklist.",
      "completion": "Full academic completion"
    },
    "evidence": "Virtual or reasoning-route academic evidence: Domain error log + corrected solutions + virtual practical checklist + one troubleshooting capture.  |  Optional physical equipment-route evidence (only if that work is safely undertaken): Domain error log + corrected solutions + practical checklist.  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.",
    "sourceWeek": 21,
    "disposition": "RETAIN_CUMULATIVE_CHECKPOINT"
  },
  "LAB-022": {
    "id": "LAB-022",
    "title": "Project 1 Design Review",
    "objective": "Turn an embedded project idea into requirements, architecture, interfaces, BOM and testable acceptance criteria.",
    "equipment": "Datasheets, diagramming tool, repository.",
    "procedure": [
      "Write measurable requirements.",
      "Create system block diagram and interface map.",
      "Select components with datasheet rationale.",
      "Create bring-up/test plan.",
      "Review risks, failure modes and evidence requirements."
    ],
    "virtual": {
      "tool": "Browser Design Review + Wokwi/Falstad",
      "links": [
        [
          "Open Wokwi",
          "https://wokwi.com/"
        ],
        [
          "Open Falstad",
          "https://www.falstad.com/circuit/"
        ],
        [
          "Open Project Center",
          "projects.html"
        ]
      ],
      "equipment": "Web browser, datasheets, repository/notes.",
      "procedure": [
        "Write measurable project requirements and acceptance criteria.",
        "Create a system block diagram and interface map.",
        "Select components from datasheets and document why they meet the requirements.",
        "Prototype risky circuit/firmware interfaces in Wokwi or Falstad where possible.",
        "Write a bring-up/test plan with risks, failure modes, and required evidence."
      ],
      "evidence": "Requirements + block diagram + BOM + interface plan + test plan + optional simulation proof.",
      "completion": "Full academic completion",
      "verification": "Purchasing/building the physical project can happen later."
    },
    "physical": {
      "equipment": "Datasheets, diagramming tool, repository.",
      "procedure": [
        "Write measurable requirements.",
        "Create system block diagram and interface map.",
        "Select components with datasheet rationale.",
        "Create bring-up/test plan.",
        "Review risks, failure modes and evidence requirements."
      ],
      "evidence": "Requirements + block diagram + BOM + interface plan + test plan.",
      "completion": "Full academic completion"
    },
    "evidence": "Virtual or reasoning-route academic evidence: Requirements + block diagram + BOM + interface plan + test plan + optional simulation proof.  |  Optional physical equipment-route evidence (only if that work is safely undertaken): Requirements + block diagram + BOM + interface plan + test plan.  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.",
    "sourceWeek": 22,
    "disposition": "RETIRE_PROJECT_OBLIGATION_KEEP_DOCUMENTATION_CONCEPTS"
  },
  "LAB-023": {
    "id": "LAB-023",
    "title": "Automated Hardware Test + Fault Injection",
    "objective": "Use Python to automate device interaction, log data, make PASS/FAIL decisions and verify recovery from faults.",
    "equipment": "Project hardware, Python, pySerial, pytest, instruments as needed.",
    "procedure": [
      "Define measurable test cases.",
      "Automate command/response collection.",
      "Add timeout/malformed-response handling.",
      "Inject at least two controlled faults.",
      "Generate logs/plots and verify the fix.",
      "Use the existing test report to define requirement, setup, firmware revision, input, expected result and pass/fail limit. Exercise nominal, boundary and failure cases: missing device, malformed data and timeout. Save timestamped raw results and distinguish a DUT failure from a fixture or connection failure."
    ],
    "virtual": {
      "tool": "Wokwi + browser-based Python test logic",
      "links": [
        [
          "Open Wokwi",
          "https://wokwi.com/"
        ]
      ],
      "equipment": "Web browser only.",
      "procedure": [
        "Define measurable PASS/FAIL test cases for the simulated device behavior.",
        "Add a command/response interface or deterministic log output in Wokwi.",
        "Write Python test logic that parses representative device output, handles timeout/malformed responses, and records results.",
        "Inject at least two controlled firmware/sensor/configuration faults in the simulation and capture the failing evidence.",
        "Rerun the virtual test after each fix and produce a results table/plot if appropriate.",
        "Use the existing test report to define requirement, setup, firmware revision, input, expected result and pass/fail limit. Exercise nominal, boundary and failure cases: missing device, malformed data and timeout. Save timestamped raw results and distinguish a DUT failure from a fixture or connection failure."
      ],
      "evidence": "Virtual test script + results table + fault-injection evidence + root-cause report.",
      "completion": "Full academic completion",
      "verification": "Connecting automated tests to real instruments/hardware is an optional later upgrade."
    },
    "physical": {
      "equipment": "Project hardware, Python, pySerial, pytest, instruments as needed.",
      "procedure": [
        "Define measurable test cases.",
        "Automate command/response collection.",
        "Add timeout/malformed-response handling.",
        "Inject at least two controlled faults.",
        "Generate logs/plots and verify the fix.",
        "Use the existing test report to define requirement, setup, firmware revision, input, expected result and pass/fail limit. Exercise nominal, boundary and failure cases: missing device, malformed data and timeout. Save timestamped raw results and distinguish a DUT failure from a fixture or connection failure."
      ],
      "evidence": "Test script + results table + plot + root-cause report.",
      "completion": "Full academic completion"
    },
    "evidence": "Virtual or reasoning-route academic evidence: Virtual test script + results table + fault-injection evidence + root-cause report.  |  Optional physical equipment-route evidence (only if that work is safely undertaken): Test script + results table + plot + root-cause report.  |  Simulated measurements and screenshots are not proof that a physical instrument or circuit was operated.",
    "sourceWeek": 27,
    "disposition": "OPTIONAL_ENRICHMENT"
  }
};
  const revisions = [
  {
    "module": "M19",
    "id": "LAB-017",
    "objective": "Read a logic-level UART frame, predict its timing and use a request and reply to distinguish a wiring fault from an incomplete message.",
    "scope": "Required interface reasoning. Firmware and Python implementation are optional extensions.",
    "equipment": "The frame below and a pencil. A known low-voltage trainer or simulator is optional.",
    "procedure": [
      "For the non-inverted UART in this example, HIGH is idle. A falling start edge synchronizes the receiver. It samples each data bit near its center, least significant bit first. 8-N-1 means eight data bits, no parity, one stop bit.",
      "Use the worked trace to count one start, eight data and one stop interval. At 9,600 bit/s one interval lasts 1/9,600 s, about 104.2 µs. Ten intervals occupy 1.042 ms before any idle gap.",
      "Separate three observations in your log: an edge on TX, a valid byte at RX, and a complete application reply. A terminal echo alone does not identify which device produced it."
    ],
    "virtual": {
      "tool": "Offline UART trace or Wokwi Serial Monitor",
      "equipment": "Paper or browser. Python 3 is optional for replaying sample bytes.",
      "procedure": [
        "Read the local trace, predict its decoded byte, then test the different line-ending case below. Record your prediction before opening the model reasoning.",
        "For optional simulation, make the device return PONG followed by LF only when it receives PING followed by LF. Distinguish the characters typed from the device reply. In optional Python code, use a finite timeout and a bounded read, for example port.read_until(b'\\n', size=32). An empty result and a partial line are different outcomes."
      ],
      "evidence": "A labeled frame and timing calculation, plus an explanation of a complete, partial and absent response. Mark the source as a diagram, simulation or captured data.",
      "links": [
        [
          "Wokwi Serial Monitor",
          "https://docs.wokwi.com/guides/serial-monitor"
        ],
        [
          "pySerial read and timeout behavior",
          "https://pyserial.readthedocs.io/en/latest/pyserial_api.html"
        ]
      ],
      "verification": "The local example can be completed offline. Only a capture from an actual connection documents physical communication."
    },
    "physical": {
      "equipment": "Optional isolated, extra-low-voltage trainer with documented UART logic levels, a compatible USB-to-logic UART adapter and, if available, a rated logic analyzer.",
      "procedure": [
        "With power off, confirm pinout and logic levels at both ends. Cross TX to RX, RX to TX and use the documented safe common signal reference. A raw USB or bipolar RS-232 port cannot be wired directly to MCU logic pins. Leave adapter power disconnected for a separately powered target unless its manual specifies a supply arrangement.",
        "Match speed, data, parity and stop settings. Send the specified request. Log raw reply bytes, delimiter and time limit. If it fails, change one software setting at a time and compare the same frame at transmitter and receiver. Do not create a physical short to simulate a fault."
      ],
      "evidence": "Pin map, UART settings and a time-stamped request and device-generated reply captured from the actual hardware."
    },
    "studyCase": {
      "label": "One UART character",
      "worked": "In the figure, D0 through D7 read 1, 1, 0, 0, 1, 0, 1, 0. The weights 1 + 2 + 16 + 64 give 83 decimal (0x53). The stop bit is HIGH.",
      "figure": "alfred-qa-uart.svg",
      "alt": "One non-inverted 8-N-1 frame. From left to right: idle high, start low, data 1 1 0 0 1 0 1 0, stop high. Each cell is 104.2 microseconds.",
      "challenge": "A second link runs at 19,200 bit/s, 8-N-1. A learner receives the four bytes P O N G before timeout, but the protocol requires a fifth byte, line feed. How long does one character take and what can this log establish?",
      "feedback": "Ten intervals at 19,200 bit/s take 520.8 µs per character. The four bytes show data reached the reader, but the reply is incomplete. Compare with an empty read and with a complete PONG followed by LF. Inspect the delimiter and capture before blaming the cable."
    }
  },
  {
    "module": "M19",
    "id": "LAB-018",
    "objective": "Interpret a sensor register transaction and distinguish an I²C address or acknowledgment from an SPI command or chip select.",
    "scope": "Required interface reasoning. Sensor programming and physical probing are optional.",
    "equipment": "The decoded transaction below. An MPU-6050 simulation or a supported physical sensor is optional.",
    "procedure": [
      "On ordinary I²C, SDA carries data and SCL the clock. Devices pull lines low or release them to correctly sized pull-ups on a compatible rail. START is SDA falling with SCL high. STOP is SDA rising with SCL high. Read eight bits MSB first and a ninth acknowledgment clock.",
      "For a conventional 7-bit target address, the first wire byte is (address × 2) + direction. The direction bit is 0 for write and 1 for read. An analyzer may display the 7-bit address and direction separately. A register address is a different field.",
      "On the separate SPI example the controller selects the device with CS, supplies SCLK, sends on MOSI and receives on MISO. The part's datasheet defines command bits, sample edge and idle polarity. Standard four-wire SPI has no I²C-style ninth acknowledgment clock."
    ],
    "virtual": {
      "tool": "Offline annotated transaction or Wokwi MPU-6050 and logic analyzer",
      "equipment": "Paper or browser. The static worked example is available offline.",
      "procedure": [
        "Trace an MPU-6050 ID read with AD0 low. S, D0, ACK, 75, ACK, Sr, D1, ACK, 68, NACK, P are annotated hexadecimal wire bytes and control symbols. S is START and Sr a repeated START. Underline the returned byte. The controller intentionally ends the one-byte read with NACK, then STOP.",
        "For optional simulation connect SDA and SCL to separate analyzer inputs, label them, capture one register read and export its VCD. Compare the raw edges and decoder address setting. An address NACK (SDA high during the ninth clock) has several possible causes. Compare target power, address, signal levels and routing before diagnosing one."
      ],
      "evidence": "An annotated address, direction, register and data byte, plus a reason for the final NACK. Label whether the trace was supplied, simulated or physically captured.",
      "links": [
        [
          "MPU-6050 simulator reference",
          "https://docs.wokwi.com/parts/wokwi-mpu6050"
        ],
        [
          "Logic analyzer capture and VCD export",
          "https://docs.wokwi.com/parts/wokwi-logic-analyzer"
        ]
      ],
      "verification": "A paper decode or a simulated VCD documents interpretation. Classify physical probe experience separately."
    },
    "physical": {
      "equipment": "A documented low-voltage trainer, compatible sensor and analyzer, current-limited supply if required, and the sensor and adapter manuals.",
      "procedure": [
        "Identify supply, I/O maximums and analyzer threshold/reference. Power down to connect. Check existing pull-ups before adding any. Use a verified compatible ground and do not power the board through signal pins.",
        "On I²C, capture one ID read. For an optional four-wire ADXL345 SPI comparison, the datasheet specifies mode 3 (idle HIGH, sampling on the rising trailing edge). Keep CS LOW for both bytes: transmit 0x80 for a single read at register 0x00, then clock a dummy 0x00 while reading the ID byte 0xE5 on MISO. Ignore the first received byte. An ID value is an identifier, not a physical measurement."
      ],
      "evidence": "Device and document revision, pin map, analyzer settings and labeled real capture. Keep the original read to compare with one safe software configuration fault."
    },
    "studyCase": {
      "label": "What each byte means",
      "worked": "In the I²C example D0 means address 0x68 with write, 75 selects WHO_AM_I, D1 means address 0x68 with read, and the returned ID byte is 0x68. Only the selected register determines what a data byte represents. For a separate MPU-6050 acceleration reading at ±2 g, 0xC000 is −16,384 signed counts, or −1.00 g at 16,384 counts/g.",
      "challenge": "Move AD0 high on the diagram. What two address bytes appear on the wire, and should the WHO_AM_I register change? What would an address NACK establish?",
      "feedback": "The 7-bit address becomes 0x69, so the address bytes are 0xD2 (write) and 0xD3 (read). The MPU-6050 WHO_AM_I value stays 0x68. An address NACK establishes that the controller saw no acknowledgment there; it cannot distinguish an incorrect address from a disconnected or unpowered target."
    }
  },
  {
    "module": "M20",
    "id": "LAB-014",
    "objective": "Predict how changing one bit in a register model changes its value while preserving neighboring bits.",
    "scope": "Conceptual exercise. Compiling C and inspecting live hardware registers are separate activities.",
    "equipment": "Paper and the hexadecimal model below. A C compiler is optional.",
    "procedure": [
      "Number bits from zero at the right. A mask with only bit 3 set is binary 00001000 or hexadecimal 0x08. OR with the mask to set it, AND with its complement to clear it, and AND with the mask to test it.",
      "Begin with a persistent 8-bit drawing of an ordinary read/write register holding 0xA2. Set bit 3 to obtain 0xAA, then clear bit 1 to obtain 0xA8. Check that the other six positions retain their values."
    ],
    "virtual": {
      "tool": "Offline register model or a C compiler",
      "equipment": "Paper or an optional C compiler.",
      "procedure": [
        "Trace the two operations before calculating. Optionally repeat with uint32_t value = 0xA2u; value |= 1u << 3; value &= ~(1u << 1); and test (value & (1u << 3)) != 0. Here the chosen shifts are within the width of the unsigned operand.",
        "Record before, mask, operation and after in binary and hex. A simulated variable does not model register access permissions, concurrent updates or peripheral side effects."
      ],
      "evidence": "A bit table with both transitions and an explanation of which bits were preserved."
    },
    "physical": {
      "equipment": "Optional computer running the model in RAM.",
      "procedure": [
        "If you run the program, compare its output with your prediction. Keep it in ordinary RAM. Do not dereference an invented peripheral address. For an actual peripheral, first consult its access table: writing a one can clear a status flag, and a normal read/modify/write sequence may be wrong."
      ],
      "evidence": "Actual program output, identified as a software model."
    },
    "studyCase": {
      "label": "A mask isolates one signal",
      "worked": "0xA8 is 10101000 in an 8-bit display. AND with 0x08 gives 0x08, so bit 3 is set.",
      "challenge": "Start with 0x55. Set bit 1, clear bit 4, and test bit 6. Which result and flag do you expect?",
      "feedback": "0x55 | 0x02 = 0x57; clearing 0x10 gives 0x47. AND with 0x40 is nonzero, so bit 6 remains set."
    }
  },
  {
    "module": "M20",
    "id": "LAB-015",
    "objective": "Trace an event-driven controller against a stated transition rule and find an incorrect transition.",
    "scope": "Optional programming enrichment. A paper trace practices the CETa control-flow concept.",
    "equipment": "A pencil and the short transition specification below.",
    "procedure": [
      "IDLE + START enters RUN and records the start time. In RUN, STOP returns to IDLE. If no STOP arrives by 100 ms after START, enter FAULT. Ignore other events. In FAULT only RESET returns to IDLE. At the exact timeout instant, process STOP first in this example.",
      "At every event or timer check, write the old state, time, input and next state. Elapsed time advances while the controller checks inputs. A blocking sleep can miss a STOP pulse if nothing captures it."
    ],
    "virtual": {
      "tool": "Offline transition trace or optional C simulator",
      "equipment": "Paper, or an optional application simulator.",
      "procedure": [
        "Trace START at 10 ms, an unrelated event at 40 ms, and a timer check at 109 ms and 110 ms. Repeat with STOP at 110 ms. Predict which output is on before inspecting the explanation.",
        "If implemented, use a software timer/event input, log the sequence and compare it with the paper table. If an event is sampled periodically, record the tick resolution and avoid promising detection of arbitrarily short pulses."
      ],
      "evidence": "A transition log with elapsed time, ignored input, boundary case and reset."
    },
    "physical": {
      "equipment": "Optional low-voltage trainer using only its indicator and controls.",
      "procedure": [
        "Use the onboard indicator as the output. Record what the board reports when STOP arrives near the timeout. Compare timer resolution and observation delay with the ideal paper trace. Do not connect an actuator or safety function."
      ],
      "evidence": "Actual board log and time resolution, labeled as a trainer observation."
    },
    "studyCase": {
      "label": "A timeout is a condition",
      "worked": "After START at 10 ms, 109 ms is 99 ms elapsed, so the state is RUN. A no-event check at 110 ms reaches 100 ms and enters FAULT. A simultaneous STOP instead takes the stated priority and returns to IDLE.",
      "challenge": "A new run starts at 200 ms. No STOP arrives. At 301 ms START is pressed again, then RESET at 315 ms. Does the later START restart the timer?",
      "feedback": "The timeout is due by the 301 ms check. START is ignored in RUN and cannot clear FAULT. RESET at 315 ms returns FAULT to IDLE. A fresh START in IDLE would begin another run."
    }
  },
  {
    "module": "M20",
    "id": "LAB-016",
    "objective": "Use the pin map, output state and measured pin level to isolate a GPIO bring-up fault.",
    "scope": "Optional STM32 practice. Simulated logging and physical SWD attachment produce different evidence.",
    "equipment": "A board schematic or the paper fixture below. Hardware flashing is optional.",
    "procedure": [
      "Trace the path from software pin selection through the output driver, resistor and indicator to the return. Read the schematic to decide whether a HIGH or LOW turns the LED on. The board's specific pin, polarity and jumper position matter.",
      "The paper fixture connects 3.3 V through a resistor and LED to a GPIO that can sink current. When configured as an output, LOW lights this LED. An output register reports a commanded value; a probe checks the actual pad relative to the documented reference."
    ],
    "virtual": {
      "tool": "Offline GPIO case or optional simulated STM32",
      "equipment": "Paper or a simulator with a known pin map.",
      "procedure": [
        "Predict the LED for a driven LOW and HIGH in the supplied fixture. Compare with a common alternate circuit from GPIO through LED and resistor to ground. Use a wrong software pin selection as a reversible fault.",
        "If using a simulator, log the commanded pin and simulated input/output level. Keep the pin, polarity and simulator name with the log. A virtual trace does not exercise the SWD cable."
      ],
      "evidence": "A labeled signal path, polarity prediction and a discriminating observation for a wrong pin."
    },
    "physical": {
      "equipment": "Optional student-owned, supported STM32 trainer, its schematic/manual and approved USB/ST-LINK interface.",
      "procedure": [
        "Use the board manual for jumpers, one approved power arrangement, SWDIO, SWCLK, target voltage reference, ground and reset if specified. Verify connector orientation with power off. A voltage-sense reference must not be assumed to power the target. Do not erase or reflash equipment in service.",
        "On the trainer, confirm target identity, compile and flash a benign indicator example, then compare commanded output with a rated meter or logic probe at the documented point. A breakpoint stops normal program timing and a DMM can average a rapidly toggling output."
      ],
      "evidence": "Board revision, source pin, measured level, indicator behavior and one verified debug observation."
    },
    "studyCase": {
      "label": "Pin state versus visible output",
      "worked": "The paper circuit lights when its pin sinks current. A HIGH command can therefore correctly turn the LED off.",
      "challenge": "The LED stays off while software alternates the output. The intended pad remains at 3.3 V and a neighboring unused pad toggles. What would you inspect first?",
      "feedback": "Compare the configured pin, pin-multiplexer selection and board revision to the schematic. The neighboring pad supports a pin-selection hypothesis. Repeat the observation after a single software correction."
    }
  },
  {
    "module": "M22",
    "id": "LAB-019",
    "objective": "Choose the correct test for a disconnected copper cable or an optical link and report what the result establishes.",
    "scope": "Two required reasoning activities, one for copper and one for optical fiber. Physical connector work is separate.",
    "equipment": "The two worked cases and equipment documentation. An unplugged sample cable is optional.",
    "procedure": [
      "Copper case. With both ends isolated and no connected power, a low reading can establish a DC path between the selected contacts. Check for unwanted conductor-to-conductor continuity separately. Lead resistance, parallel paths and far-end termination change the reading. A DMM reading does not measure a line's characteristic impedance.",
      "Optical case. Light travels in the core. A conductive continuity check cannot establish optical insertion loss. Use a suitable light source and optical power meter at the specified wavelength and reference method. Loss in dB is reference power in dBm minus received power in dBm."
    ],
    "virtual": {
      "tool": "Offline copper and optical cases",
      "equipment": "Paper and a calculator.",
      "procedure": [
        "Draw center conductor and shield at both ends of a disconnected, unterminated coax. Predict low resistance end-to-end on each conductor and an open circuit center-to-shield. Explain how a connected 75 Ω terminating resistor changes the third reading.",
        "For an optical reference of −3.0 dBm and received level of −5.0 dBm, calculate 2.0 dB loss. Compare with the stated example maximum of 2.5 dB at that wavelength. Record the value, limit and measured quantity; do not assume every link has this budget."
      ],
      "evidence": "Two labeled test plans, expected readings, reference wavelength/method for a real test, loss, and one limitation of each method."
    },
    "physical": {
      "equipment": "Optional disconnected known sample, appropriate meter or wiremap tester. Optical testing requires approved equipment and training.",
      "procedure": [
        "Disconnect all sources, including PoE or remote feeds, and verify de-energization before using a resistance or continuity range. Test a known-good copper sample first. A simple pin-to-pin test can miss a split pair; a suitable cable test instrument is needed to evaluate pairing and performance.",
        "Never look into a fiber or connector, even if it appears dark. Follow site isolation procedures and verify status using a suitable optical power meter before approved inspection. Keep caps on unused ends. Leave cleaving, splicing and disposal of glass shards to a properly equipped, trained operator."
      ],
      "evidence": "Test equipment, connections, conditions, measured result and instrument limits, identified separately for each medium."
    },
    "studyCase": {
      "label": "A reading needs the circuit around it",
      "worked": "A 75 Ω label is a property of a traveling wave. A 75 Ω resistor installed across a cable is instead a DC path that a meter may read, including lead and cable resistance.",
      "challenge": "A power meter reads −7.0 dBm against a −3.0 dBm reference on a link with a 2.5 dB maximum. Does it meet the limit? Does that single reading locate a defective connector?",
      "feedback": "Insertion loss is 4.0 dB, which exceeds the limit by 1.5 dB. A total-loss reading cannot locate the fault. Verify wavelength, reference and clean connections using the appropriate inspection procedure before sectional testing."
    }
  },
  {
    "module": "M26",
    "id": "LAB-020",
    "objective": "Read a simple RF spectrum, relate frequency to wavelength, and distinguish modulation bandwidth from impedance mismatch.",
    "scope": "Required reasoning or simulation. The local figure supplies the reference spectrum.",
    "equipment": "Paper, calculator and the local line spectrum. A physical RF source is optional.",
    "procedure": [
      "The horizontal axis is frequency. Vertical lines mark frequency components, not changes over time. A conventional double-sideband AM signal with a 1.000 MHz carrier and one 2 kHz modulating tone has components at 998, 1000 and 1002 kHz. The ideal outer-line spacing is 4 kHz.",
      "At 1.000 MHz the free-space wavelength is approximately 300 m using 3.00 × 10⁸ m/s divided by 1.00 × 10⁶ Hz. Propagation in cable uses its own velocity factor. FM can generate many significant sidebands, so the three-line AM rule does not determine FM bandwidth.",
      "For a lossless 50 Ω line ending in a purely resistive 75 Ω load, the load voltage reflection coefficient is (75−50)/(75+50) = 0.20. The reflected power fraction is 0.20² = 4%, and VSWR is (1+0.20)/(1−0.20) = 1.50. An ordinary spectrum screenshot alone does not measure reflected power."
    ],
    "virtual": {
      "tool": "Offline ideal AM spectrum or optional simulation",
      "equipment": "Paper or a circuit simulator.",
      "procedure": [
        "Read both outer frequencies before subtracting them. The shown amplitudes are relative voltage amplitudes for 50% sinusoidal AM: each sideband has 0.25 of the carrier voltage into the same impedance.",
        "Sketch a new example with a 3 kHz modulating tone. If an analyzer or simulation display cannot separate the peaks, inspect span and resolution bandwidth. Changing the display resolution does not change the source modulation."
      ],
      "evidence": "Two annotated spectra, a wavelength calculation and a separate mismatch calculation with units and assumptions.",
      "links": [
        [
          "Spectrum-analyzer controls",
          "https://www.rohde-schwarz.com/au/products/test-and-measurement/essentials-test-equipment/spectrum-analyzers/understanding-basic-spectrum-analyzer-operation_256005.html"
        ]
      ],
      "verification": "The supplied spectrum is an ideal calculated display, distinct from a real analyzer capture."
    },
    "physical": {
      "equipment": "Optional low-level shielded bench source, rated coax and compatible terminated instrument; follow both manuals.",
      "procedure": [
        "Use a known low-level cabled signal. Before connecting, check DC content and maximum allowable DC, RF power, peak level and frequency at the instrument input. Use rated protection/attenuation when required and keep the source disabled while making connections. Leave transmitters, antennas and unknown live feeds disconnected.",
        "Record source settings, span, reference level, input attenuation, resolution bandwidth and observed peaks. A forward/reflected measurement needs an appropriate directional setup or network analyzer."
      ],
      "evidence": "Original labeled capture and instrument settings from the safe bench setup."
    },
    "studyCase": {
      "label": "A three-line AM spectrum",
      "worked": "The 2 kHz spacings are measured from the carrier to either sideband. Lower to upper sideband spans 4 kHz. For 50% AM, the ideal sideband-to-carrier voltage ratio is 0.50/2.",
      "figure": "alfred-qa-am.svg",
      "alt": "Ideal AM line spectrum with relative voltage amplitudes 0.25 at 998 kHz, 1 at 1000 kHz, and 0.25 at 1002 kHz.",
      "challenge": "A new ideal spectrum shows 996, 1000 and 1004 kHz for the same AM type. Find the tone, outer-line spacing and approximate free-space wavelength of the carrier.",
      "feedback": "The tone is 4 kHz. The two outer components span 8 kHz. The carrier is still 1 MHz, so its free-space wavelength is still about 300 m."
    }
  },
  {
    "module": "M28",
    "id": "LAB-021",
    "objective": "Attempt a mixed practical independently, then use a predicted measurement to distinguish between plausible faults.",
    "scope": "Required cumulative practice. A completed worksheet or repeated item does not itself qualify a readiness score.",
    "equipment": "Local circuit case and a calculator. An isolated low-voltage trainer is optional.",
    "procedure": [
      "Make a first attempt before opening any model answer. Record your elapsed time, whether you had seen the item, the units and one suspected fault. Keep corrected second attempts in a separate column.",
      "Consider an ideal 6.0 V source feeding R1 = 2.0 kΩ from supply to test point A, and R2 = 1.0 kΩ from A to 0 V. A high-impedance voltmeter draws negligible current. First predict source current and node A relative to 0 V. Then predict the effect of opening the lower resistor.",
      "For component or instrument identification, name an observable feature, its function and a check that distinguishes a plausible alternative. Record the source as illustration, simulated capture or real hardware. Credit a new observation separately from a recalled label."
    ],
    "virtual": {
      "tool": "Offline mixed practical and optional circuit simulation",
      "equipment": "Paper and a calculator.",
      "procedure": [
        "Draw and label the divider, calculate the healthy and open-load values, then check with a simulator if desired. Identify the two voltage measurement points on your drawing and explain why an ammeter placed across the source is inappropriate.",
        "For each error record the initial reasoning, corrected reasoning and a new value or topology to try later. Keep a recognized or repeated prompt labeled as practice."
      ],
      "evidence": "Original first attempt, measured or modeled results by source, error correction and one changed-value attempt."
    },
    "physical": {
      "equipment": "Optional isolated extra-low-voltage, current-limited trainer, two resistors and rated DMM.",
      "procedure": [
        "Power down for wiring changes. Use a voltmeter in the correct voltage range and jacks across node A and reference. Use a source approved for the circuit; perform open-wire fault changes only with power off. Use resistance or continuity only on a verified de-energized and isolated network."
      ],
      "evidence": "Actual setup and DMM results alongside first predictions; identify measurement tolerance and whether a condition was physically tested."
    },
    "studyCase": {
      "label": "Two points isolate a fault",
      "worked": "The healthy current is 6.0 V / 3.0 kΩ = 2.0 mA. A is 2.0 V above return. With R2 open and negligible meter loading, current approaches zero and A approaches 6.0 V.",
      "challenge": "In another ideal build with the same topology, supply and return measure 9.0 V and 0 V, A is near 0 V. Which two single faults fit, and what safe follow-up distinguishes them?",
      "feedback": "An open upper resistor or a shorted lower resistor can both produce this reading. Power down and verify isolation, then test R1 and R2 separately as needed. The single node voltage cannot choose between these faults."
    }
  },
  {
    "module": "M28",
    "id": "LAB-022",
    "objective": "Write a testable requirement and hand off a measurement record another technician can reproduce.",
    "scope": "Documentation exercise only. The retired project-build obligation carries no required purchase, repository or project submission.",
    "equipment": "Paper and the reference case.",
    "procedure": [
      "For a 3.30 V trainer output with a specified ±5% tolerance at a stated load, convert the specification to 3.135–3.465 V inclusive before looking at results. Record the unit under test, revision, load, supply conditions, instrument and measurement point relative to return.",
      "Draw three labeled blocks: source, device under test and load. Add the two meter connections. State which requirements you can verify on paper and which need a physical test."
    ],
    "virtual": {
      "tool": "Offline test-report exercise",
      "equipment": "Paper or a text editor; use the supplied test case.",
      "procedure": [
        "Write one row with requirement, method, expected interval, observed value and disposition. For a nominal model value of 3.25 V, label the evidence as calculated. For a stated independent measurement include instrument uncertainty and a decision rule.",
        "Write a handoff giving another technician enough information to repeat the test under the same load. Leave unmeasured requirements marked untested."
      ],
      "evidence": "One labeled block diagram and one reproducible test row. No external project or hardware is required.",
      "links": [],
      "verification": "A paper test plan verifies the reasoning and documentation; a physical acceptance claim needs measurement evidence."
    },
    "physical": {
      "equipment": "No bench project required. Optional pre-approved trainer and rated meter.",
      "procedure": [
        "If a real measurement is available, add its instrument ID, range, uncertainty and test conditions as a separate row. Never present a calculated or simulated result as the measured result."
      ],
      "evidence": "Optional measured test row with traceable test conditions."
    },
    "studyCase": {
      "label": "A decision near the upper limit",
      "worked": "A reading of 3.250 V with stated uncertainty ±0.010 V spans 3.240–3.260 V, inside the example tolerance. Use the stated decision rule and the unrounded tolerance bounds.",
      "challenge": "The example rule accepts a reading only when its entire stated uncertainty interval is inside specification. What do you report for 3.460 V ±0.010 V?",
      "feedback": "The interval is 3.450–3.470 V. It overlaps the 3.465 V upper bound, so acceptance is inconclusive under this rule. Record the overlap and seek a suitably lower-uncertainty measurement; do not silently round it into a pass."
    }
  },
  {
    "module": "M28",
    "id": "LAB-023",
    "objective": "Use valid, missing and malformed records to distinguish an out-of-limit reading from a test that produced no valid measurement.",
    "scope": "Optional automated-test enrichment. The paper cases are sufficient for reasoning practice.",
    "equipment": "Supplied sample records; an optional local Python interpreter.",
    "procedure": [
      "Define a sample-only test protocol: each complete ASCII line is V=<decimal volts> followed by LF. The example limit is 3.10–3.50 V inclusive. Accept only the specified finite decimal format, units and complete delimiter; never turn a missing, partial or invalid value into zero.",
      "First verify the collection path with a known-good control. Preserve timestamp, run ID, test revision, units, raw input, parsed value and disposition. Classify a valid out-of-range measurement separately from an invalid test. Independent verification is needed to attribute an instrument reading to a bad device."
    ],
    "virtual": {
      "tool": "Offline message cases or optional Python replay",
      "equipment": "Paper or Python 3 with supplied sample records.",
      "procedure": [
        "Classify complete lines V=3.10 and V=3.50, a complete V=3.51, a partial V=3.3 with no LF, an empty timed-out read and V=NaN. Label whether a numerical comparison was possible.",
        "For optional automation inject faults only in saved strings, software settings or a simulator. Verify both lower and upper bounds and rerun each changed case. Keep the original failures in the record."
      ],
      "evidence": "Labeled results for boundary, out-of-range, timeout and malformed records, including an explicit no-valid-measurement outcome.",
      "links": [],
      "verification": "Replay validates decision logic. It does not establish that hardware was present or faulty."
    },
    "physical": {
      "equipment": "Optional approved low-voltage test fixture with known-good reference, documented interface and ratings.",
      "procedure": [
        "Use normal operation and known-good controls. Simulate communication loss or malformed data in software. Do not short outputs, defeat interlocks, overload a supply or intentionally damage hardware. Record the independent control before attributing a repeatable deviation to the device."
      ],
      "evidence": "Raw fixture and device logs kept separate, plus a reference control and retest under documented conditions."
    },
    "studyCase": {
      "label": "A failed test versus an invalid test",
      "worked": "A valid 3.51 V line is outside the example limit. A timeout yields no voltage measurement and cannot justify a device-failure claim.",
      "challenge": "A fixture reports 3.55 V for both a device and its independently verified 3.30 V control. What should happen to the two raw readings and the device disposition?",
      "feedback": "Retain both readings. The control also failed its expected check, so quarantine this run as an invalid basis for accepting or rejecting the device. Investigate the fixture, scaling or reference, then repeat the control and device measurements."
    }
  }
];
  const course = window.ALFRED_CETA_DATA.course;
  const seen = new Map();
  for (const module of course) {
    for (const lab of module.labs) {
      if (seen.has(lab.id)) throw Error('Duplicate lab ID: ' + lab.id);
      seen.set(lab.id, {moduleId: module.id, lab});
    }
  }
  if (seen.size !== 23) throw Error('Expected 23 independent lab records.');
  const prepared = revisions.map(revision => {
    const target = seen.get(revision.id);
    if (!target || target.moduleId !== revision.module ||
        JSON.stringify(target.lab) !== JSON.stringify(originals[revision.id])) {
      throw Error('Lab differs from the reviewed effective source: ' + revision.id);
    }
    // Preserve the original ID, title, disposition, source week and route completion policy.
    const virtual = {...target.lab.virtual, ...revision.virtual};
    const physical = {...target.lab.physical, ...revision.physical};
    const evidence = 'Academic evidence: ' + virtual.evidence +
      ' Optional equipment evidence: ' + physical.evidence;
    return [target.lab, {objective:revision.objective, equipment:revision.equipment,
      procedure:revision.procedure, scope:revision.scope, studyCase:revision.studyCase,
      virtual, physical, evidence}];
  });
  for (const [lab, changes] of prepared) Object.assign(lab, changes);
  window.ALFRED_CETA_G08_REMAINING_LABS_STATUS = {ok:true, ids:revisions.map(x => x.id)};
})();

check('ALFRED_CETA_G08_REMAINING_LABS_STATUS');
/* G08-002. Four original licensed photographs and visible-evidence reasoning. */
(function () {
  'use strict';
  const change = {
  "original": {
    "paragraphs": [
      [
        "The physical model and meaning",
        "Separate recognition, simulated diagnosis and physical performance. A learner may correctly classify bad joints in images without being able to safely rework them. A practical record needs process identification, observed details, inspection standard and appropriate test result."
      ],
      [
        "Where the model breaks or a technician can be misled",
        "A real soldering credential or workplace signoff requires authorized assessment beyond this online module."
      ],
      [
        "Different joint defects require different evidence",
        "A solder bridge joins adjacent conductors that should be separate; verify net identity from the schematic and inspect before touching the circuit. A lifted pad is a copper land separated from its PCB substrate; the board may have lost an electrical connection even if solder remains attached to a wire. Neither failure is shown unambiguously in the four source photographs below. A dry, dull, cracked or balled joint may suggest poor wetting or mechanical stress, but some lead-free alloys produce less glossy acceptable fillets; use the relevant workmanship standard, magnification and safe electrical tests instead of relying on shine alone."
      ]
    ],
    "worked": {
      "heading": "Reason it through · Workmanship practical case and evidence tiers",
      "scenario": "Work the following specific example before comparing your own steps.",
      "steps": [
        "The four source-attributed photographs A–D already appear in this lesson gallery as ONLINE external links and may require an internet connection. They support a limited comparison of wetted-cone morphology, a rounded solder ball, a contributor-labeled cold joint, and a magnified board containing a reportedly fractured connection. They DO NOT unambiguously demonstrate both a solder bridge between distinct circuit nets and a lifted pad. Record those two diagnostic categories as unassessed from this photo set, not as detected images. Image analysis alone is never hands-on soldering certification.",
        "A solder bridge and a lifted PCB pad are not unambiguously demonstrated by these four pictures. Explain each defect using the lesson descriptions and suitable authenticated visual examples when available. Document uncertain diagnoses, necessary magnification or safe tests, and the difference between photograph recognition and supervised physical workmanship."
      ],
      "conclusion": "The four gallery photo SOURCE PAGES and CC BY-SA 3.0 author attributions have been independently cross-checked, but online rendering, complete four-defect diagnostic coverage, and hands-on proficiency remain unverified. Credit only the specific visual features the learner actually inspected. Do not award photo-based bridge or lifted-pad recognition, physical work or exam mastery from metadata or unsupported assumptions."
    },
    "reflection": {
      "ask": "What would prove actual rework performance rather than theoretical recognition?",
      "answer": "Supervised physical work with documented setup, workmanship inspection and functional verification under the relevant standards."
    },
    "sectionNote": "ESD controls, ventilation, hot-tool handling and electrical isolation have separate purposes. Printed case studies do not qualify physical soldering performance.",
    "version": "v1.7",
    "transferPractice": {
      "prompt": "During through-hole desoldering, the plated barrel begins lifting from the board. Is prolonged reheating a safe repair strategy? What evidence should a technician record?",
      "modelReasoning": "No. Excess heat or force can further delaminate the pad/barrel and break interlayer continuity. Stop and follow approved rework criteria; document the location, board revision, physical condition and electrical continuity checks using the manufacturer/IPC workmanship standard applicable to the job. Cosmetic solder appearance alone is not proof of an intact plated via.",
      "format": "unscored-near-transfer",
      "source": "Alfred v4.8 academic editorial development; internal review only"
    },
    "visualGallery": {
      "title": "Four source-attributed solder-joint photographs: interpret only visible evidence",
      "intro": "Photos A–D are source-attributed PHOTOGRAPHS hosted on Wikimedia Commons, offered as internet-dependent image interpretation. Their source file pages identify individual authors and CC BY-SA 3.0 licensing. If an actual image cannot be viewed, record IMAGE NOT INSPECTED and use the source link; do not infer the condition from filename/alt text alone. This collection lacks an unambiguous bridge and lifted-pad photo and is not a comprehensive four-defect proficiency assessment.",
      "images": [
        {
          "id": "A",
          "filename": "Soldering-PCB-good.jpg",
          "case": "Conical wetting",
          "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Soldering-PCB-good.jpg",
          "source": "https://commons.wikimedia.org/wiki/File:Soldering-PCB-good.jpg",
          "credit": "Tlapicka · CC BY-SA 3.0",
          "type": "PHOTO_ONLINE_ONLY",
          "alt": "Image A: close view of two solder joints on a copper PCB trace. Solder rises in relatively smooth sloped cones around each lead.",
          "caption": "Note the wetted slope between metal lead and copper pad; angle, coverage, and contamination still require inspection."
        },
        {
          "id": "B",
          "filename": "Soldering-PCB-bad.jpg",
          "case": "Balling and possible nonwetting",
          "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Soldering-PCB-bad.jpg",
          "source": "https://commons.wikimedia.org/wiki/File:Soldering-PCB-bad.jpg",
          "credit": "Tlapicka · CC BY-SA 3.0",
          "type": "PHOTO_ONLINE_ONLY",
          "alt": "Image B: close view of solder on a PCB pad where solder appears as a rounded raised ball around the lead rather than a gently wetted fillet.",
          "caption": "A rounded ball is a warning for possible poor wetting. Shape alone does not prove internal metallurgical quality."
        },
        {
          "id": "C",
          "filename": "Cold_solder_joint.jpg",
          "case": "Cold solder connection",
          "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cold_solder_joint.jpg",
          "source": "https://commons.wikimedia.org/wiki/File:Cold_solder_joint.jpg",
          "credit": "Coronium · CC BY-SA 3.0",
          "type": "PHOTO_ONLINE_ONLY",
          "alt": "Image C: close photograph of an irregular solder joint on a metal conductor; inspect texture, contact and continuity.",
          "caption": "An irregular joint may have been formed with inadequate heat or disturbed motion. Visual classification is a screening step, not electrical proof."
        },
        {
          "id": "D",
          "filename": "Broken_Soldering_joint.jpg",
          "case": "Magnified inspection; fracture requires confirmation",
          "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Broken_Soldering_joint.jpg",
          "source": "https://commons.wikimedia.org/wiki/File:Broken_Soldering_joint.jpg",
          "credit": "MichaelFrey · CC BY-SA 3.0",
          "type": "PHOTO_ONLINE_ONLY",
          "alt": "Photo D: circuit board observed through a magnifying lens, with multiple soldered connections visible but no single crack reliably established at this preview scale.",
          "caption": "Inspect individual joint boundaries and look for a possible circular fracture or intermittent connection. This preview alone does not prove a cracked solder joint; closer magnification and safe, authorized testing are needed.",
          "v52EditorialReview": "File source title attributes a broken joint; low-resolution learner preview is not diagnostic by itself. Author review 2026-10-26."
        }
      ],
      "task": "Classify what is visibly supported: A shows conical wetting, B suggests solder balling or possible poor wetting, C requires inspection for a cold or disturbed joint, and D offers a magnified board view where a fracture must be confirmed. Identify which diagnoses remain hypotheses. What further evidence is needed before returning the board to service?",
      "modelReasoning": "A illustrates a roughly smooth, conical wetted joint; B shows a rounded solder ball consistent with possible nonwetting; C is a suspected cold/disturbed connection but a photograph alone cannot establish internal bond quality; D is a magnified board photograph whose title attributes a broken solder joint, yet an individual fracture is not unambiguously resolved at this preview scale. Do not falsely claim to see a lifted pad or solder bridge in these four images. Safe continuity and functional testing, higher-resolution examination and authorized rework evidence may be needed. Recognizing photograph patterns never fulfills ETA 5.12 physical desoldering demonstration.",
      "proficiencyDisclaimer": "Image recognition is unscored study practice, NOT evidence of physical soldering skill or an ETA qualification."
    }
  },
  "replacement": {
    "paragraphs": [
      [
        "The physical model and meaning",
        "Separate recognition, simulated diagnosis and physical performance. A learner may correctly classify bad joints in images without being able to safely rework them. A practical record needs process identification, observed details, inspection standard and appropriate test result."
      ],
      [
        "Where the model breaks or a technician can be misled",
        "A real soldering credential or workplace signoff requires authorized assessment beyond this online module."
      ],
      [
        "Different joint defects require different evidence",
        "A solder bridge is an unwanted solder connection between conductors. Inspect the material linking the joints and use the circuit drawing to establish whether they should be separate. A lifted pad is a copper land separating from the board substrate. Its remaining connection to a lead does not establish intact continuity to the circuit. Use the four local photographs E–H below to compare visible evidence. Surface finish varies with alloy and process, so assess wetting and geometry under the applicable workmanship criteria."
      ]
    ],
    "worked": {
      "heading": "Reason it through · Workmanship practical case and evidence tiers",
      "scenario": "Work the following specific example before comparing your own steps.",
      "steps": [
        "Examine E–H before opening the model answer. For each photograph, record the feature location, a provisional classification and the evidence needed before a board could return to service. Use the local originals at full size when necessary.",
        "A useful response distinguishes the visible solder span in E, the raised metal in F, the lead-to-pad boundaries in G and the separate covered pads in H. Circuit intent, hidden joints and process history require additional evidence. Treat the four cases as an unscored visual exercise."
      ],
      "conclusion": "The four local source photographs support comparison of a bridge, a lifted pad, insufficient pad wetting and an apparently well-wetted example. The original A–D gallery remains available as supplementary practice. Workmanship acceptance still depends on the applicable criteria and authorized inspection and testing."
    },
    "reflection": {
      "ask": "What would prove actual rework performance rather than theoretical recognition?",
      "answer": "Supervised physical work with documented setup, workmanship inspection and functional verification under the relevant standards."
    },
    "sectionNote": "ESD controls, ventilation, hot-tool handling and electrical isolation have separate purposes. Printed case studies do not qualify physical soldering performance.",
    "version": "v1.7",
    "transferPractice": {
      "prompt": "During through-hole desoldering, the plated barrel begins lifting from the board. Is prolonged reheating a safe repair strategy? What evidence should a technician record?",
      "modelReasoning": "No. Excess heat or force can further delaminate the pad/barrel and break interlayer continuity. Stop and follow approved rework criteria; document the location, board revision, physical condition and electrical continuity checks using the manufacturer/IPC workmanship standard applicable to the job. Cosmetic solder appearance alone is not proof of an intact plated via.",
      "format": "unscored-near-transfer",
      "source": "Alfred v4.8 academic editorial development; internal review only"
    },
    "visualGallery": {
      "title": "Four-photo workmanship exercise",
      "intro": "Study local photographs E–H. Open each full-size image to inspect its details. For every case, write an observation, a diagnosis with an uncertainty limit, and a next verification step. Source and license links accompany each image. The original A–D comparison remains below as supplementary online material.",
      "images": [
        {
          "id": "A",
          "filename": "Soldering-PCB-good.jpg",
          "case": "Conical wetting",
          "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Soldering-PCB-good.jpg",
          "source": "https://commons.wikimedia.org/wiki/File:Soldering-PCB-good.jpg",
          "credit": "Tlapicka · CC BY-SA 3.0",
          "type": "PHOTO_ONLINE_ONLY",
          "alt": "Image A: close view of two solder joints on a copper PCB trace. Solder rises in relatively smooth sloped cones around each lead.",
          "caption": "Note the wetted slope between metal lead and copper pad; angle, coverage, and contamination still require inspection."
        },
        {
          "id": "B",
          "filename": "Soldering-PCB-bad.jpg",
          "case": "Balling and possible nonwetting",
          "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Soldering-PCB-bad.jpg",
          "source": "https://commons.wikimedia.org/wiki/File:Soldering-PCB-bad.jpg",
          "credit": "Tlapicka · CC BY-SA 3.0",
          "type": "PHOTO_ONLINE_ONLY",
          "alt": "Image B: close view of solder on a PCB pad where solder appears as a rounded raised ball around the lead rather than a gently wetted fillet.",
          "caption": "A rounded ball is a warning for possible poor wetting. Shape alone does not prove internal metallurgical quality."
        },
        {
          "id": "C",
          "filename": "Cold_solder_joint.jpg",
          "case": "Cold solder connection",
          "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cold_solder_joint.jpg",
          "source": "https://commons.wikimedia.org/wiki/File:Cold_solder_joint.jpg",
          "credit": "Coronium · CC BY-SA 3.0",
          "type": "PHOTO_ONLINE_ONLY",
          "alt": "Image C: close photograph of an irregular solder joint on a metal conductor; inspect texture, contact and continuity.",
          "caption": "An irregular joint may have been formed with inadequate heat or disturbed motion. Visual classification is a screening step, not electrical proof."
        },
        {
          "id": "D",
          "filename": "Broken_Soldering_joint.jpg",
          "case": "Magnified inspection; fracture requires confirmation",
          "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Broken_Soldering_joint.jpg",
          "source": "https://commons.wikimedia.org/wiki/File:Broken_Soldering_joint.jpg",
          "credit": "MichaelFrey · CC BY-SA 3.0",
          "type": "PHOTO_ONLINE_ONLY",
          "alt": "Photo D: circuit board observed through a magnifying lens, with multiple soldered connections visible but no single crack reliably established at this preview scale.",
          "caption": "Inspect individual joint boundaries and look for a possible circular fracture or intermittent connection. This preview alone does not prove a cracked solder joint; closer magnification and safe, authorized testing are needed.",
          "v52EditorialReview": "File source title attributes a broken joint; low-resolution learner preview is not diagnostic by itself. Author review 2026-10-26."
        }
      ],
      "task": "Compare E, F, G and H. Which case shows the best visible pad coverage? Where does metal connect neighboring joints, where is a pad above the board, and where is the pad poorly wetted? Explain what the photographs establish and what requires a drawing, magnification or authorized testing. For each case, support your classification with a specific visible feature.",
      "modelReasoning": "E shows a continuous solder span between the two foreground joints. The publisher identifies a bridge. The circuit drawing establishes whether those points belong to different nets. F shows pad/trace metal raised above the green board around a lead. G shows solder climbing the leads with poor spread onto the surrounding pads. H shows separate covered pads, especially the central joints in the top row, with no visible connecting solder span there. Those visible features support provisional classifications. H cannot establish hidden hole fill or long-term reliability. A convincing response names each feature and states a missing piece of evidence. Electrical checks require isolation, stored-energy controls and a suitable approved procedure.",
      "proficiencyDisclaimer": "Unscored visual practice. The exercise records no exam score, mastery award or physical qualification. Physical soldering, wick use and crimping require a separate observed demonstration.",
      "rubric": [
        "E — identify the solder span and require the circuit drawing to confirm intended net separation.",
        "F — locate the lifted metal and require inspection of the remaining trace, pad attachment and relevant continuity.",
        "G — distinguish solder on the lead from wetting of the pad. The photograph alone cannot identify the process cause.",
        "H — identify the separate, covered top-row pads and limit the conclusion to visible appearance.",
        "Every response should separate observation, provisional diagnosis and next evidence. Revisit any missing reasoning before the physical route."
      ],
      "practicalImages": [
        {
          "id": "E",
          "filename": "tools_Solder_Bridge.jpg",
          "url": "alfred-qa-photo-e.jpg",
          "source": "https://learn.adafruit.com/assets/2048",
          "credit": "Bill Earl / Adafruit Learning System · tools_Solder_Bridge.jpg · CC BY-SA 3.0 · unchanged original",
          "license": "https://creativecommons.org/licenses/by-sa/3.0/",
          "type": "PHOTO_LOCAL_ORIGINAL",
          "alt": "Two foreground joints on a green board are joined by a continuous shiny solder span. A third joint is separate at the right.",
          "caption": "Inspect the material between the two foreground joints. State what circuit information you need to judge this connection."
        },
        {
          "id": "F",
          "filename": "tools_Lifted_Pad.jpg",
          "url": "alfred-qa-photo-f.jpg",
          "source": "https://learn.adafruit.com/assets/2039",
          "credit": "Bill Earl / Adafruit Learning System · tools_Lifted_Pad.jpg · CC BY-SA 3.0 · unchanged original",
          "license": "https://creativecommons.org/licenses/by-sa/3.0/",
          "type": "PHOTO_LOCAL_ORIGINAL",
          "alt": "A component lead protrudes through a green board while attached silvery pad and trace metal rise above the substrate.",
          "caption": "Compare the height of the metal around the lead with the surrounding board surface."
        },
        {
          "id": "G",
          "filename": "tools_Pad_Wetting.jpg",
          "url": "alfred-qa-photo-g.jpg",
          "source": "https://learn.adafruit.com/assets/1974",
          "credit": "Bill Earl / Adafruit Learning System · tools_Pad_Wetting.jpg · CC BY-SA 3.0 · unchanged original",
          "license": "https://creativecommons.org/licenses/by-sa/3.0/",
          "type": "PHOTO_LOCAL_ORIGINAL",
          "alt": "Two leads have tall shiny solder shapes, with visible boundaries where the solder meets the surrounding board pads.",
          "caption": "Inspect the lead-to-pad boundary on both foreground joints. Decide which surfaces show solder spread."
        },
        {
          "id": "H",
          "filename": "tools_2012_09_05_IMG_0643-1024.jpg",
          "url": "alfred-qa-photo-h.jpg",
          "source": "https://learn.adafruit.com/assets/2017",
          "credit": "Bill Earl / Adafruit Learning System · tools_2012_09_05_IMG_0643-1024.jpg · CC BY-SA 3.0 · unchanged original",
          "license": "https://creativecommons.org/licenses/by-sa/3.0/",
          "type": "PHOTO_LOCAL_ORIGINAL",
          "alt": "A blue board shows rows of individual solder-covered pads with visible spaces between the central top-row joints.",
          "caption": "Focus on the central top-row joints. Describe coverage and separation, and state what this overhead view cannot show."
        }
      ]
    }
  }
};
  const matches = window.ALFRED_CETA_DATA.course.filter(m => m.id === 'M15')
    .flatMap(m => m.pages.filter(p => p.id === 'L29-0-04'));
  if (matches.length !== 1 || JSON.stringify(matches[0].goldTeaching) !== JSON.stringify(change.original)) {
    throw Error('Unexpected M15 photo predecessor');
  }
  matches[0].goldTeaching = change.replacement;
  window.ALFRED_CETA_G08_PHOTOS_STATUS = {ok:true,originalPhotos:4,localPhotos:4};
})();

check('ALFRED_CETA_G08_PHOTOS_STATUS');
/* G08 direct-figure review and offline copies. */
(function () {
  'use strict';
  const changes = [
  {
    "module": "M01",
    "pageIndex": 3,
    "page": "L01-0-06",
    "original": {
      "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Lockout_Tagout_%2814853353063%29.jpg/960px-Lockout_Tagout_%2814853353063%29.jpg",
      "link": "https://commons.wikimedia.org/wiki/File:Lockout_Tagout_(14853353063).jpg",
      "alt": "Two US Navy electrical workers reviewing a lockout tag attached to an industrial control panel",
      "caption": "Actual lockout/tagout review: locate the controlled equipment, physical tag and the qualified workers. A tag visible in a photograph does not by itself prove every energy source has been isolated.",
      "credit": "NAVFAC / U.S. Navy; U.S. public-domain government photograph (Wikimedia Commons)."
    },
    "replacement": {
      "url": "alfred-qa-m01-3.jpg",
      "link": "https://commons.wikimedia.org/wiki/File:Lockout_Tagout_(14853353063).jpg",
      "alt": "Two US Navy electrical workers reviewing a lockout tag attached to an industrial control panel",
      "caption": "Locate the tagged equipment, workers and protective equipment. The photograph documents a procedure review. Electrical qualification, equipment-specific isolation and absence of hazardous energy require separate evidence.",
      "credit": "NAVFAC / U.S. Navy; U.S. public-domain government photograph (Wikimedia Commons). · Unchanged source original",
      "offlineAvailable": true,
      "license": "https://creativecommons.org/licenses/by/2.0/"
    }
  },
  {
    "module": "M01",
    "pageIndex": 8,
    "page": "L01-1-03",
    "original": {
      "url": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Anti_static_mat.png",
      "link": "https://commons.wikimedia.org/wiki/File:Anti_static_mat.png",
      "alt": "A blue antistatic work mat connected through a grounding cord with electronic circuit boards on the bench",
      "caption": "Real ESD work area: identify the mat, grounding lead, and exposed circuit board. The photograph shows equipment protection, not a certification that the workstation is safe for energized repair.",
      "credit": "Toniperis / Wikimedia Commons · CC BY-SA 3.0; reproduced unchanged, attribution and source link provided."
    },
    "replacement": {
      "url": "alfred-qa-m01-8.png",
      "link": "https://commons.wikimedia.org/wiki/File:Anti_static_mat.png",
      "alt": "A blue antistatic work mat connected through a grounding cord with electronic circuit boards on the bench",
      "caption": "Real ESD work area: identify the mat, grounding lead, and exposed circuit board. The photograph shows equipment protection, not a certification that the workstation is safe for energized repair.",
      "credit": "Toniperis / Wikimedia Commons · CC BY-SA 3.0; reproduced unchanged, attribution and source link provided. · Unchanged source original",
      "offlineAvailable": true,
      "license": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "module": "M03",
    "pageIndex": 9,
    "page": "L02-0-02",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Voltage%20divider-loaded.svg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:Voltage_divider-loaded.svg",
      "alt": "Loaded voltage divider schematic; output node shares a load with the lower resistor.",
      "caption": "Read this as the fixed-resistor equivalent of a loaded divider: Rtop sits between supply and output, while Rbottom and the added load connect between output and circuit return in parallel. In a three-terminal potentiometer the output is the movable wiper, separating the same track into upper and lower resistances. Predict why a finite wiper load reduces Vout. Image requires internet access; use the credited source if the preview fails.",
      "credit": "Zedh · CC BY-SA 2.5",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-qa-m03-9.svg",
      "link": "https://commons.wikimedia.org/wiki/File:Voltage_divider-loaded.svg",
      "alt": "Loaded voltage divider schematic; output node shares a load with the lower resistor.",
      "caption": "Read this as the fixed-resistor equivalent of a loaded divider: Rtop sits between supply and output, while Rbottom and the added load connect between output and circuit return in parallel. In a three-terminal potentiometer the output is the movable wiper, separating the same track into upper and lower resistances. Predict why a finite wiper load reduces Vout.",
      "credit": "Zedh · CC BY-SA 2.5 · Unchanged source original",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": true,
      "license": "https://creativecommons.org/licenses/by-sa/2.5/"
    }
  },
  {
    "module": "M03",
    "pageIndex": 10,
    "page": "L02-0-03",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Resistor_Color_Code.svg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:Resistor_Color_Code.svg",
      "alt": "Resistor color illustration showing a five-band yellow–violet–black–orange–brown resistor above a four-band blue–gray–red–gold resistor, plus separate 0–9 digit-color and selected tolerance-color legends. It does not depict a six-band resistor or a complete multiplier legend.",
      "caption": "Decode the two illustrated parts using the written multiplier rules: five-band yellow–violet–black–orange–brown = 470 kΩ ±1%; four-band blue–gray–red–gold = 6.8 kΩ ±5%. The artwork has a digit/tolerance key but no six-band example or complete multiplier legend. For three- or six-band systems, use the lesson text and manufacturer markings. External image is online-only.",
      "credit": "Knarfili · CC0 1.0 public-domain dedication; original Wikimedia Commons reference"
    },
    "replacement": {
      "url": "alfred-qa-m03-10.svg",
      "link": "https://commons.wikimedia.org/wiki/File:Resistor_Color_Code.svg",
      "alt": "Resistor color illustration showing a five-band yellow–violet–black–orange–brown resistor above a four-band blue–gray–red–gold resistor, plus separate 0–9 digit-color and selected tolerance-color legends. It does not depict a six-band resistor or a complete multiplier legend.",
      "caption": "Decode the two illustrated parts using the written multiplier rules: five-band yellow–violet–black–orange–brown = 470 kΩ ±1%; four-band blue–gray–red–gold = 6.8 kΩ ±5%. The artwork has a digit/tolerance key but no six-band example or complete multiplier legend. For three- or six-band systems, use the lesson text and manufacturer markings.",
      "credit": "Knarfili · CC0 1.0 public-domain dedication; original Wikimedia Commons reference · Unchanged source original",
      "offlineAvailable": true,
      "license": "https://creativecommons.org/publicdomain/zero/1.0/"
    }
  },
  {
    "module": "M04",
    "pageIndex": 4,
    "page": "L02-0-02",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Voltage%20divider.svg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:Voltage_divider.svg",
      "alt": "Voltage divider circuit with upper and lower resistors and output node.",
      "caption": "Identify the top and bottom resistors. Explain the difference between the source potential and the output node potential. Image requires internet access; use the labeled source if the preview fails.",
      "credit": "Aflafla1 · public domain",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-qa-m04-4.svg",
      "link": "https://commons.wikimedia.org/wiki/File:Voltage_divider.svg",
      "alt": "Voltage divider circuit with upper and lower resistors and output node.",
      "caption": "Identify the top and bottom resistors. Explain the difference between the source potential and the output node potential.",
      "credit": "Aflafla1 · public domain · Unchanged source original",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": true
    }
  },
  {
    "module": "M05",
    "pageIndex": 1,
    "page": "L13-0-03",
    "original": {
      "url": "alfred-g08-schematic-nets.svg",
      "link": "alfred-g08-schematic-nets.svg",
      "alt": "Original three-panel illustration: connected wire junction marked with dot, unconnected crossing without dot, and resistor R12 from +5 volts to test point TP3 with capacitor C4 from TP3 to circuit return.",
      "caption": "Compare the two wire intersections; use the drawing legend and matching net labels to decide connectivity. Then trace +5 V through R12 to TP3 and through C4 toward circuit return. Name the two references for a safe, approved voltmeter measurement without assuming chassis or protective earth is the return.",
      "credit": "Alfred University · original instructional vector · 2026-10-29",
      "verifiedSource": "Original in-stage SVG for ETA 2025 competencies 6.1, 6.3, 6.4 and 6.8; based on effective M05 worked example",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-g08-schematic-nets.svg",
      "link": "alfred-g08-schematic-nets.svg",
      "alt": "Original three-panel illustration: connected wire junction marked with dot, unconnected crossing without dot, and resistor R12 from +5 volts to test point TP3 with capacitor C4 from TP3 to circuit return.",
      "caption": "Compare the two wire intersections; use the drawing legend and matching net labels to decide connectivity. Then trace +5 V through R12 to TP3 and through C4 toward circuit return. Name the two references for a safe, approved voltmeter measurement without assuming chassis or protective earth is the return.",
      "credit": "Alfred University · original instructional vector · 2026-10-29",
      "verifiedSource": "Original in-stage SVG for ETA 2025 competencies 6.1, 6.3, 6.4 and 6.8; based on effective M05 worked example",
      "offlineAvailable": true
    }
  },
  {
    "module": "M06",
    "pageIndex": 3,
    "page": "L03-0-02",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Oscilloscope%20screen.jpg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:Oscilloscope_screen.jpg",
      "alt": "Photograph of an oscilloscope screen displaying a time-varying trace.",
      "caption": "Locate the graticule, trace, and instrument readouts. Practice estimating trace height in divisions, but verify V/div, time/div, and probe factor before treating the photograph as a calibrated voltage or frequency measurement. An on-screen voltage annotation is not automatically Vpp. Image requires internet access; use the linked source if the preview fails.",
      "credit": "Peterglen · public domain",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-qa-m06-3.jpg",
      "link": "https://commons.wikimedia.org/wiki/File:Oscilloscope_screen.jpg",
      "alt": "Photograph of an oscilloscope screen displaying a time-varying trace.",
      "caption": "Locate the graticule, trace, and instrument readouts. Practice estimating trace height in divisions, but verify V/div, time/div, and probe factor before treating the photograph as a calibrated voltage or frequency measurement. An on-screen voltage annotation is not automatically Vpp.",
      "credit": "Peterglen · public domain · Unchanged source original",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": true
    }
  },
  {
    "module": "M07",
    "pageIndex": 1,
    "page": "L04-0-06",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/RC%20switch.svg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:RC_switch.svg",
      "alt": "Resistor-capacitor network with a switch; capacitor stores charge on separated plates.",
      "caption": "Trace the charging path from source through resistance to capacitor. Explain why charging current drops with time. Image requires internet access; use the labeled source if the preview fails.",
      "credit": "PureCore · CC BY-SA 3.0",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-qa-m07-1.svg",
      "link": "https://commons.wikimedia.org/wiki/File:RC_switch.svg",
      "alt": "Resistor-capacitor network with a switch; capacitor stores charge on separated plates.",
      "caption": "The switch is drawn open. For the ideal, initially uncharged capacitor, trace conventional charging current after closure from the positive source terminal through the switch and resistor to the upper capacitor plate, with the return path from the lower plate to the source. Explain why the current then decreases.",
      "credit": "PureCore · CC BY-SA 3.0 · Unchanged source original",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": true,
      "license": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "module": "M10",
    "pageIndex": 8,
    "page": "L11-0-09",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/555%20Pinout.svg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:555_Pinout.svg",
      "alt": "Pinout diagram of a 555 timer integrated circuit, with power, trigger and output pins.",
      "caption": "Treat this illustration as an eight-pin package map, not an astable schematic. Locate VCC (8), GND (1), TRIG (2), OUT (3), RESET (4), CONT (5), THRES (6) and DISCH (7); then compare the external RA/RB/C wiring and capacitor/output waveforms in the linked Texas Instruments astable circuit. Image requires internet access; use the credited source if the preview fails.",
      "credit": "Inductiveload · public domain",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-qa-m10-8.svg",
      "link": "https://commons.wikimedia.org/wiki/File:555_Pinout.svg",
      "alt": "Pinout diagram of a 555 timer integrated circuit, with power, trigger and output pins.",
      "caption": "Treat this illustration as an eight-pin package map, not an astable schematic. Locate VCC (8), GND (1), TRIG (2), OUT (3), RESET (4), CONT (5), THRES (6) and DISCH (7); then compare the external RA/RB/C wiring and capacitor/output waveforms in the linked Texas Instruments astable circuit.",
      "credit": "Inductiveload · public domain · Unchanged source original",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": true
    }
  },
  {
    "module": "M11",
    "pageIndex": 0,
    "page": "L08-0-03",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/PN%20Junction.svg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:PN_Junction.svg",
      "alt": "P-N semiconductor junction and matching diode schematic symbol with polarity.",
      "caption": "Find the p side and n side. Predict how forward versus reverse bias changes the junction barrier. Image requires internet access; use the labeled source if the preview fails.",
      "credit": "Inductiveload · public domain",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-qa-m11-0.svg",
      "link": "https://commons.wikimedia.org/wiki/File:PN_Junction.svg",
      "alt": "P-N semiconductor junction and matching diode schematic symbol with polarity.",
      "caption": "The p-type side is the anode and the n-type side is the cathode. The diode symbol bar marks the cathode. The indicated + and − signs illustrate forward bias. Predict how reversing the applied voltage changes the junction barrier.",
      "credit": "Inductiveload · public domain · Unchanged source original",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": true
    }
  },
  {
    "module": "M13",
    "pageIndex": 3,
    "page": "L08-0-00",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Rectifier%20with%20reservoir.svg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:Rectifier_with_reservoir.svg",
      "alt": "Full-wave rectifier feeding a reservoir smoothing capacitor and load.",
      "caption": "Follow the charging path into the smoothing capacitor and identify what supplies the load between rectified peaks. Image requires internet access; use the labeled source if the preview fails.",
      "credit": "Spinningspark · CC BY-SA 3.0",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-qa-m13-3.svg",
      "link": "https://commons.wikimedia.org/wiki/File:Rectifier_with_reservoir.svg",
      "alt": "Center-tapped transformer secondary feeding two rectifier diodes with joined cathodes, a reservoir capacitor, and two output terminals. An external load is omitted.",
      "caption": "Trace alternating charging paths from each secondary end through its diode to the capacitor upper node. The center tap connects to the lower return node. Assume an external load across the two output terminals to explain capacitor discharge between peaks. The drawing omits that load. Study this as a paper circuit.",
      "credit": "Spinningspark · CC BY-SA 3.0 · Unchanged source original",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": true,
      "license": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "module": "M14",
    "pageIndex": 5,
    "page": "L10-0-02",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Op-amp%20symbol%20simplified.svg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:Op-amp_symbol_simplified.svg",
      "alt": "Simplified operational amplifier triangle with positive and negative input labels.",
      "caption": "Point out inverting/non-inverting inputs and the output. Distinguish the amplifier symbol from its power connections. Image requires internet access; use the labeled source if the preview fails.",
      "credit": "Rob Kam · CC0 1.0",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-qa-m14-5.png",
      "link": "https://commons.wikimedia.org/wiki/File:Op-amp_symbol_simplified.svg",
      "alt": "Simplified operational amplifier triangle with positive and negative input labels.",
      "caption": "The upper + input is non-inverting, the lower − input is inverting, and the point at right is the output. The supply pins are omitted from this simplified symbol. The input labels identify signal action.",
      "credit": "Rob Kam · CC0 1.0 · Unchanged Wikimedia-served preview",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": true,
      "license": "https://creativecommons.org/publicdomain/zero/1.0/"
    }
  },
  {
    "module": "M17",
    "pageIndex": 0,
    "page": "L11-0-01",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/LogicGates.svg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:LogicGates.svg",
      "alt": "Schematic gate symbols for two-input AND and OR gates and a NOT inverter, showing input wires and the output wire of each symbol.",
      "caption": "Trace each symbol from its input wires to its output. AND needs both inputs high; OR needs at least one input high; the NOT output bubble reverses a signal. Next, draw AND feeding NOT to make a NAND, and construct its four-row truth table. This linked figure is online-only and does not show all gates or transistor-level implementations.",
      "credit": "Vaughan Pratt · CC BY 3.0",
      "verifiedSource": "Wikimedia Commons file description and author/license checked 2026-10-29; browser image rendering not verified",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-qa-m17-0.svg",
      "link": "https://commons.wikimedia.org/wiki/File:LogicGates.svg",
      "alt": "Schematic gate symbols for two-input AND and OR gates and a NOT inverter, showing input wires and the output wire of each symbol.",
      "caption": "Trace each symbol from its input wires to its output. AND needs both inputs high; OR needs at least one input high; the NOT output bubble reverses a signal. Next, draw AND feeding NOT to make a NAND, and construct its four-row truth table. This figure depicts AND, OR and NOT. Derive the other gate types from the lesson examples.",
      "credit": "Vaughan Pratt · CC BY 3.0 · Unchanged source original",
      "verifiedSource": "Wikimedia Commons file description and author/license checked 2026-10-29; browser image rendering not verified",
      "offlineAvailable": true,
      "license": "https://creativecommons.org/licenses/by/3.0/"
    }
  },
  {
    "module": "M17",
    "pageIndex": 1,
    "page": "L11-0-03",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/LogicGates.jpg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:LogicGates.jpg",
      "alt": "Venn diagram representations of Boolean logic operations.",
      "caption": "Compare the shaded regions for AND versus OR. Derive two rows of each gate truth table before reading the solution. Image requires internet access; use the labeled source if the preview fails.",
      "credit": "Wikitikitaka · public domain",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-qa-m17-1.jpg",
      "link": "https://commons.wikimedia.org/wiki/File:LogicGates.jpg",
      "alt": "Venn diagram representations of Boolean logic operations.",
      "caption": "Compare the shaded regions for AND versus OR. Derive two rows of each gate truth table before reading the solution.",
      "credit": "Wikitikitaka · public domain · Unchanged Wikimedia-served preview",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": true
    }
  },
  {
    "module": "M17",
    "pageIndex": 4,
    "page": "L11-0-05",
    "original": {
      "url": "alfred-g08-seven-segment-polarity.svg",
      "link": "alfred-g08-seven-segment-polarity.svg",
      "alt": "Original two-panel current-path comparison. Common anode: positive common anode through LED segment and resistor to a low current-sinking driver, making LOW turn the segment on. Common cathode: a high sourcing driver through resistor and LED to grounded common cathode, making HIGH turn the segment on. Conceptual; not a pinout.",
      "caption": "Compare the direction of current for just one segment, then draw the paths for the three segments (a, b, c) that form numeral 7. The two examples use an illustrative 5 V supply, not a specified display or driver rating. Check electrical pinout, resistor, and current ratings before any physical build. The figure is an original local instructional diagram.",
      "credit": "Alfred University · original instructional SVG · 2026-10-29",
      "verifiedSource": "Original diagram staged with G08-005; electrical model reconciled with ETA 2025 competencies 13.6, 18.2.1 and AST practice Q100",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-g08-seven-segment-polarity.svg",
      "link": "alfred-g08-seven-segment-polarity.svg",
      "alt": "Original two-panel current-path comparison. Common anode: positive common anode through LED segment and resistor to a low current-sinking driver, making LOW turn the segment on. Common cathode: a high sourcing driver through resistor and LED to grounded common cathode, making HIGH turn the segment on. Conceptual; not a pinout.",
      "caption": "Compare the direction of current for just one segment, then draw the paths for the three segments (a, b, c) that form numeral 7. The two examples use an illustrative 5 V supply, not a specified display or driver rating. Check electrical pinout, resistor, and current ratings before any physical build. The figure is an original local instructional diagram.",
      "credit": "Alfred University · original instructional SVG · 2026-10-29",
      "verifiedSource": "Original diagram staged with G08-005; electrical model reconciled with ETA 2025 competencies 13.6, 18.2.1 and AST practice Q100",
      "offlineAvailable": true
    }
  },
  {
    "module": "M25",
    "pageIndex": 1,
    "page": "L19-0-09",
    "original": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/7%20Segment%20Display%20with%20Labeled%20Segments.svg?width=960",
      "link": "https://commons.wikimedia.org/wiki/File:7_Segment_Display_with_Labeled_Segments.svg",
      "alt": "Seven-segment display diagram labeling individual LED segments.",
      "caption": "Name each labeled segment and determine which ones illuminate to display the numeral 7. Image requires internet access; use the labeled source if the preview fails.",
      "credit": "Uln2003 · CC0 1.0",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": false
    },
    "replacement": {
      "url": "alfred-qa-m25-1.svg",
      "link": "https://commons.wikimedia.org/wiki/File:7_Segment_Display_with_Labeled_Segments.svg",
      "alt": "Seven-segment display diagram labeling individual LED segments.",
      "caption": "Name each labeled segment and determine which ones illuminate to display the numeral 7.",
      "credit": "Uln2003 · CC0 1.0 · Unchanged source original",
      "verifiedSource": "Wikimedia Commons source and license page checked 2026-10-24",
      "offlineAvailable": true,
      "license": "https://creativecommons.org/publicdomain/zero/1.0/"
    }
  }
];
  const targets = changes.map(change => {
    const module = window.ALFRED_CETA_DATA.course.find(m => m.id === change.module);
    const page = module?.pages[change.pageIndex];
    if (page?.id !== change.page ||
        JSON.stringify(page.goldTeaching.visual) !== JSON.stringify(change.original)) {
      throw Error('Unexpected visual predecessor ' + change.module + '/' + change.page);
    }
    return page;
  });
  changes.forEach((change,index) => {targets[index].goldTeaching.visual = change.replacement;});
  window.ALFRED_CETA_G08_VISUALS_STATUS = {ok:true,reviewedFigures:changes.length};
})();

check('ALFRED_CETA_G08_VISUALS_STATUS');
/* Visible media evidence and local transfer diagrams. */
(function () {
 'use strict';
 const changes = [
  {
    "module": "M01",
    "pageIndex": 3,
    "page": "L01-0-06",
    "originalVideo": {
      "title": "Lockout/tagout overview — external publisher unverified",
      "url": "https://www.youtube.com/watch?v=LO1r8i92r9g",
      "embed": "https://www.youtube-nocookie.com/embed/LO1r8i92r9g",
      "task": "First study the linked OSHA energy-control guidance. If this external overview plays, compare what it presents about notification, isolating EVERY energy source, controlling stored energy and verifying isolation with OSHA; the video identity, availability and full content have not been independently authenticated. This is classroom analysis, not permission to perform workplace lockout or voltage testing.",
      "source": "Video publisher attribution and full contents NOT independently verified; authoritative OSHA 29 CFR 1910.147 and 1910.333 remain the safety reference."
    },
    "replacementVideo": {
      "title": "External lockout/tagout overview",
      "url": "https://www.youtube.com/watch?v=LO1r8i92r9g",
      "embed": "https://www.youtube-nocookie.com/embed/LO1r8i92r9g",
      "task": "First study the linked OSHA energy-control guidance. If this external overview plays, compare what it presents about notification, isolating EVERY energy source, controlling stored energy and verifying isolation with OSHA; the video identity, availability and full content have not been independently authenticated. This is classroom analysis, not permission to perform workplace lockout or voltage testing.",
      "source": "Video publisher attribution and full contents NOT independently verified; authoritative OSHA 29 CFR 1910.147 and 1910.333 remain the safety reference.",
      "role": "supplementary",
      "evidenceNote": "Complete the local explanation, worked example and transfer challenge first. This external video is supplementary. Full playback and frame-level technical accuracy remain unverified in this review."
    }
  },
  {
    "module": "M02",
    "pageIndex": 2,
    "page": "L01-0-00",
    "originalVideo": {
      "title": "Khan Academy · Introduction to circuits and Ohm’s law (2018)",
      "url": "https://www.youtube.com/watch?v=F_vLWkkOETI",
      "embed": "https://www.youtube-nocookie.com/embed/F_vLWkkOETI",
      "task": "Study the circuit/current explanation, then reason through the paper-only 9 V, 3 kΩ switched circuit below. The linked video title/year is corroborated by secondary educational references; complete playback and the exact demonstrations have not been independently inspected. The Alfred lesson and required OpenStax reading remain the source of the assessed reasoning.",
      "verifiedSourceTitle": true,
      "source": "Khan Academy video title/date corroborated in a secondary education reference (Philippine Department of Education 2020 bibliography); direct video playback/transcript not independently verified."
    },
    "replacementVideo": {
      "title": "Khan Academy · Introduction to circuits and Ohm’s law (2018)",
      "url": "https://www.youtube.com/watch?v=F_vLWkkOETI",
      "embed": "https://www.youtube-nocookie.com/embed/F_vLWkkOETI",
      "task": "Study the circuit/current explanation, then reason through the paper-only 9 V, 3 kΩ switched circuit below. The linked video title/year is corroborated by secondary educational references; complete playback and the exact demonstrations have not been independently inspected. The Alfred lesson and required OpenStax reading remain the source of the assessed reasoning.",
      "verifiedSourceTitle": true,
      "source": "Khan Academy video title/date corroborated in a secondary education reference (Philippine Department of Education 2020 bibliography); direct video playback/transcript not independently verified.",
      "role": "supplementary",
      "evidenceNote": "Complete the local explanation, worked example and transfer challenge first. This external video is supplementary. Full playback and frame-level technical accuracy remain unverified in this review."
    },
    "newVisual": {
      "url": "alfred-qa-current.svg",
      "link": "alfred-qa-current.svg",
      "alt": "Open and closed 9 V circuit with a 3.0 kΩ resistor and a current/charge prediction for 20 seconds.",
      "caption": "Use the two switch states to solve the local current and charge challenge. Trace the entire return path.",
      "credit": "Alfred University · original diagram for the existing local transfer problem · 2026-11-03",
      "offlineAvailable": true
    }
  },
  {
    "module": "M03",
    "pageIndex": 3,
    "page": "L01-0-09",
    "originalVideo": {
      "title": "Khan Academy · Ohm’s law: voltage–current experiment (2026)",
      "url": "https://www.youtube.com/watch?v=FuIn1L3qeqI&t=356s",
      "embed": "https://www.youtube-nocookie.com/embed/FuIn1L3qeqI?start=356",
      "task": "Watch from approximately 05:56 through the final section, INCLUDING the ohmic/non-ohmic discussion that starts at 11:29. Predict the I–V graph first. Label the graph axes: for CURRENT on the vertical axis versus VOLTAGE on the horizontal axis, slope is conductance (1/R); for VERTICAL voltage versus horizontal current, slope is resistance (R). Compare that model with the nonlinear measurements in the independent challenge.",
      "verifiedSourceTitle": true,
      "source": "Publisher Khan Academy Ohm’s law video description (2026-06-13) lists sections at 05:56 (Ohm’s law), 08:50 (resistor value), and 11:29 (ohmic and non-ohmic devices). Previous embed stopped at the START of the last section. Entire video playback was not independently inspected."
    },
    "replacementVideo": {
      "title": "Khan Academy · Ohm’s law: voltage–current experiment (2026)",
      "url": "https://www.youtube.com/watch?v=FuIn1L3qeqI&t=356s",
      "embed": "https://www.youtube-nocookie.com/embed/FuIn1L3qeqI?start=356",
      "task": "Watch from approximately 05:56 through the final section, INCLUDING the ohmic/non-ohmic discussion that starts at 11:29. Predict the I–V graph first. Label the graph axes: for CURRENT on the vertical axis versus VOLTAGE on the horizontal axis, slope is conductance (1/R); for VERTICAL voltage versus horizontal current, slope is resistance (R). Compare that model with the nonlinear measurements in the independent challenge.",
      "verifiedSourceTitle": true,
      "source": "Publisher Khan Academy Ohm’s law video description (2026-06-13) lists sections at 05:56 (Ohm’s law), 08:50 (resistor value), and 11:29 (ohmic and non-ohmic devices). Previous embed stopped at the START of the last section. Entire video playback was not independently inspected.",
      "role": "supplementary",
      "evidenceNote": "Complete the local explanation, worked example and transfer challenge first. This external video is supplementary. Full playback and frame-level technical accuracy remain unverified in this review."
    },
    "newVisual": {
      "url": "alfred-qa-iv.svg",
      "link": "alfred-qa-iv.svg",
      "alt": "Current in mA plotted against voltage in V at the three measurement pairs from the local transfer challenge.",
      "caption": "Read the axes and compute V/I at each marked point. Explain whether one resistance predicts all three.",
      "credit": "Alfred University · original diagram for the existing local transfer problem · 2026-11-03",
      "offlineAvailable": true
    }
  },
  {
    "module": "M04",
    "pageIndex": 2,
    "page": "L02-0-01",
    "originalVideo": {
      "title": "Khan Academy · Kirchhoff’s Current Law explained",
      "url": "https://www.youtube.com/watch?v=OYerdzZPSI0",
      "embed": "https://www.youtube-nocookie.com/embed/OYerdzZPSI0",
      "task": "After Alfred teaches conservation at nodes, watch the instructor derive current balance at a junction. Pause to predict the missing branch current.",
      "source": "Khan Academy official KCL lesson, confirmed October 2026"
    },
    "replacementVideo": {
      "title": "Khan Academy · Kirchhoff’s Current Law explained",
      "url": "https://www.youtube.com/watch?v=OYerdzZPSI0",
      "embed": "https://www.youtube-nocookie.com/embed/OYerdzZPSI0",
      "task": "After Alfred teaches conservation at nodes, watch the instructor derive current balance at a junction. Pause to predict the missing branch current.",
      "source": "The linked KCL topic is corroborated by educational references and a secondary transcript. Full playback has not been independently inspected.",
      "role": "supplementary",
      "evidenceNote": "Complete the local explanation, worked example and transfer challenge first. This external video is supplementary. Full playback and frame-level technical accuracy remain unverified in this review."
    },
    "newVisual": {
      "url": "alfred-qa-kcl.svg",
      "link": "alfred-qa-kcl.svg",
      "alt": "Two currents enter a node and two reference arrows leave. The outward unknown Ix may have a negative signed result.",
      "caption": "Write current balance using the drawn reference arrows, then interpret the sign of Ix.",
      "credit": "Alfred University · original diagram for the existing local transfer problem · 2026-11-03",
      "offlineAvailable": true
    }
  },
  {
    "module": "M06",
    "pageIndex": 4,
    "page": "L03-0-06",
    "originalVideo": {
      "title": "Keysight Labs · Oscilloscope Measurements and Triggering",
      "url": "https://www.youtube.com/watch?v=LSyqPE6avo4",
      "embed": "https://www.youtube-nocookie.com/embed/LSyqPE6avo4",
      "task": "Watch this focused Keysight demo after learning trigger levels and probe references. Identify what trigger setting makes a drifting trace stable. Do not attach an earth-referenced probe to an unknown live circuit.",
      "source": "Keysight Labs, 2016, confirmed October 2026"
    },
    "replacementVideo": {
      "title": "External oscilloscope triggering demonstration",
      "url": "https://www.youtube.com/watch?v=LSyqPE6avo4",
      "embed": "https://www.youtube-nocookie.com/embed/LSyqPE6avo4",
      "task": "Watch this focused Keysight demo after learning trigger levels and probe references. Identify what trigger setting makes a drifting trace stable. Do not attach an earth-referenced probe to an unknown live circuit.",
      "source": "The inherited Keysight publisher/year claim was not independently established in the current source checks.",
      "role": "supplementary",
      "evidenceNote": "Complete the local explanation, worked example and transfer challenge first. This external video is supplementary. Full playback and frame-level technical accuracy remain unverified in this review."
    },
    "newVisual": {
      "url": "alfred-qa-scope.svg",
      "link": "alfred-qa-scope.svg",
      "alt": "Calibrated 0 to 3.3 V pulses on a 100 microseconds per division and one volt per division graticule with matching 10× probe settings.",
      "caption": "Read pulse duration and period from the graticule. Derive frequency and duty cycle, then explain a suitable trigger.",
      "credit": "Alfred University · original diagram for the existing local transfer problem · 2026-11-03",
      "offlineAvailable": true
    }
  },
  {
    "module": "M23",
    "pageIndex": 1,
    "page": "L03-0-06",
    "originalVideo": {
      "title": "Keysight Labs · Oscilloscope Signal Scaling and Controls",
      "url": "https://www.youtube.com/watch?v=t_UTV_9dpTc&t=136s",
      "embed": "https://www.youtube-nocookie.com/embed/t_UTV_9dpTc?start=136&end=309",
      "task": "Watch the oscilloscope demonstration (suggested excerpt approximately 02:16–05:09). Identify volts/div, time/div and probe attenuation. Predict what a mismatched probe setting would do to the reading. The excerpt boundaries and precise content have not been independently video-inspected; use the linked manufacturer reference and the challenge below if the video is unavailable.",
      "source": "External oscilloscope demonstration; publisher year and exact 02:16–05:09 chapter contents not independently verified in this QA batch."
    },
    "replacementVideo": {
      "title": "Keysight Labs · Oscilloscope Signal Scaling and Controls",
      "url": "https://www.youtube.com/watch?v=t_UTV_9dpTc&t=136s",
      "embed": "https://www.youtube-nocookie.com/embed/t_UTV_9dpTc?start=136&end=309",
      "task": "Watch the oscilloscope demonstration (suggested excerpt approximately 02:16–05:09). Identify volts/div, time/div and probe attenuation. Predict what a mismatched probe setting would do to the reading. The excerpt boundaries and precise content have not been independently video-inspected; use the linked manufacturer reference and the challenge below if the video is unavailable.",
      "source": "External oscilloscope demonstration; publisher year and exact 02:16–05:09 chapter contents not independently verified in this QA batch.",
      "role": "supplementary",
      "evidenceNote": "Complete the local explanation, worked example and transfer challenge first. This external video is supplementary. Full playback and frame-level technical accuracy remain unverified in this review."
    },
    "newVisual": {
      "url": "alfred-qa-probe.svg",
      "link": "alfred-qa-probe.svg",
      "alt": "Known 2.0 Vpp source followed by a physical 10× probe, a channel set to 1×, and a 0.20 Vpp displayed reading.",
      "caption": "Separate actual source amplitude, probe attenuation and channel scaling. Use the timebase evidence to check frequency.",
      "credit": "Alfred University · original diagram for the existing local transfer problem · 2026-11-03",
      "offlineAvailable": true
    }
  }
];
 const pages = changes.map(change => {
  const p = window.ALFRED_CETA_DATA.course.find(m=>m.id===change.module)?.pages[change.pageIndex];
  if (p?.id !== change.page || JSON.stringify(p.goldTeaching.video)!==JSON.stringify(change.originalVideo) ||
      (change.newVisual && p.goldTeaching.visual)) throw Error('Unexpected video predecessor '+change.module);
  return p;
 });
 changes.forEach((change,i)=>{
  pages[i].goldTeaching.video=change.replacementVideo;
  if(change.newVisual) pages[i].goldTeaching.visual=change.newVisual;
 });
 window.ALFRED_CETA_G08_VIDEO_ALTERNATIVES_STATUS={ok:true,lessons:changes.length,newFigures:5};
})();

check('ALFRED_CETA_G08_VIDEO_ALTERNATIVES_STATUS');
  const status = {ok:true,revision:'B35',newLabs:10};
  Object.defineProperty(status, 'appliedData', {value:window.ALFRED_CETA_DATA});
  window.ALFRED_CETA_G08_B35_STATUS = status;
} catch (error) {
  window.ALFRED_CETA_DATA = original;
  for (const key of Object.keys(window).filter(k => k.startsWith('ALFRED_CETA_G08_'))) {
    if (before.has(key)) window[key] = before.get(key); else delete window[key];
  }
  window.ALFRED_CETA_G08_B35_STATUS = {ok:false, error:String(error.message || error)};
  console.warn('[Alfred G08 B32] Rolled back:',error);
}
})();
