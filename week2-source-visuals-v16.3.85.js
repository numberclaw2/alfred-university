/* AU-ESET 301 v16.3.85 — Week 2 source-authentic visual upgrade
   Standing visual rule:
   - Prefer a real/public-domain or CC0 source visual for physical/circuit concepts.
   - Verify the technical meaning independently against a credible technical source.
   - Keep Alfred-created visuals only for Alfred-specific workflow/reasoning aids, and label them as such.
*/
(()=>{
'use strict';
if(window.__ALFRED_WEEK2_SOURCE_VISUALS_16385__) return;
window.__ALFRED_WEEK2_SOURCE_VISUALS_16385__=true;

const C=window.ALFRED_CURRICULUM;
if(!C?.modules?.length) return;
const W=C.modules.find(m=>Number(m.week)===2);
if(!W?.lessons?.length) return;
const ceta=W.lessons.find(l=>l.track==='CETa')||W.lessons[0];
const career=W.lessons.find(l=>l.track==='Career')||W.lessons[1];
const T=ceta?.integrated?.teaching||[];
const byId=id=>T.find(s=>s.sectionId===id);

const PD='Public domain';
const PD_URL='https://creativecommons.org/publicdomain/mark/1.0/';
const CC0='CC0 1.0 Universal';
const CC0_URL='https://creativecommons.org/publicdomain/zero/1.0/';
const OPENSTAX_SERIES='https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel';
const OPENSTAX_K='https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules';
const MIT_DIV='https://ocw.mit.edu/courses/6-071j-introduction-to-electronics-signals-and-measurement-spring-2006/ef361480b9bd43aa713ae43e96df517f_03_kirchhoff1.pdf';
const MIT_LOAD='https://ocw.mit.edu/courses/ec-s06-practical-electronics-fall-2004/pages/labs/';

function gallery(title,caption,items,technicalUrl,technicalUrl2=''){
  return {
    type:'gallery',
    number:'Source-authentic teaching visual',
    title,
    items,
    caption,
    source:'Public-domain/CC0 visual from Wikimedia Commons; technical meaning independently verified against the linked university/physics source.',
    sourceUrl:items[0]?.sourceUrl||'',
    secondaryUrl:technicalUrl||'',
    tertiaryUrl:technicalUrl2||'',
    provenance:'source'
  };
}
function item(src,label,alt,credit,sourceUrl,license,licenseUrl){
  return {src,label,alt,credit,sourceUrl,license,licenseUrl};
}

const topology=byId('w02-topology-before-math');
if(topology){
  topology.figure=gallery(
    'See series and parallel as connection relationships',
    'Look at the connection points first. In the series example there is one uninterrupted current path. In the parallel example each resistor spans the same two nodes. Use the picture to identify topology before using any formula.',
    [
      item(
        'https://upload.wikimedia.org/wikipedia/commons/c/cd/Resistors_in_Series_and_Parallel.svg',
        'Series and parallel resistor connections',
        'Public-domain schematic comparing resistors connected in series with resistors connected in parallel.',
        'Jjbeard / Wikimedia Commons',
        'https://commons.wikimedia.org/wiki/File:Resistors_in_Series_and_Parallel.svg',
        PD,PD_URL
      )
    ],
    OPENSTAX_SERIES
  );
}

const series=byId('w02-series-one-path');
if(series){
  series.figure=gallery(
    'Trace the single path through a series network',
    'Follow the wire from left to right: there is no junction where current can split between the resistors. That single-path structure is why the same current must pass through every series resistor.',
    [
      item(
        'https://upload.wikimedia.org/wikipedia/commons/5/5d/Resistors_in_Series.svg',
        'Resistors in series',
        'Public-domain schematic showing several resistors connected end to end in one path.',
        'Inductiveload / Wikimedia Commons',
        'https://commons.wikimedia.org/wiki/File:Resistors_in_Series.svg',
        PD,PD_URL
      )
    ],
    OPENSTAX_SERIES
  );
}

const parallel=byId('w02-parallel-same-nodes');
if(parallel){
  parallel.figure=gallery(
    'Find the two shared nodes in a parallel network',
    'Ignore the drawing shape and identify the two rails/nodes. Every resistor shown connects between that same pair of nodes, so every branch has the same node-to-node voltage.',
    [
      item(
        'https://upload.wikimedia.org/wikipedia/commons/6/64/Resistors_in_Parallel.svg',
        'Resistors in parallel',
        'Public-domain schematic showing multiple resistors connected between the same two nodes.',
        'Inductiveload / Wikimedia Commons',
        'https://commons.wikimedia.org/wiki/File:Resistors_in_Parallel.svg',
        PD,PD_URL
      )
    ],
    OPENSTAX_SERIES
  );
}

const kcl=byId('w02-kcl-conservation-charge');
if(kcl){
  kcl.figure=gallery(
    'KCL is visible at the junction',
    'Start at the central node and follow the current arrows. The important visual fact is not the algebra first—it is that every current path entering and leaving the node must be accounted for.',
    [
      item(
        'https://upload.wikimedia.org/wikipedia/commons/f/f2/Kirchhoff%27s_Current_Law.svg',
        'Kirchhoff’s Current Law at one node',
        'Public-domain schematic showing currents entering and leaving a central electrical node.',
        'Inductiveload / Wikimedia Commons',
        'https://commons.wikimedia.org/wiki/File:Kirchhoff%27s_Current_Law.svg',
        PD,PD_URL
      )
    ],
    OPENSTAX_K
  );
}

const kvl=byId('w02-kvl-conservation-energy');
if(kvl){
  kvl.figure=gallery(
    'KVL follows a complete closed path',
    'Trace the loop continuously and pay attention to source/resistor polarity. Returning to the starting node means returning to the same electric potential, so all signed rises and drops around the loop must balance.',
    [
      item(
        'https://upload.wikimedia.org/wikipedia/commons/3/38/KVL.svg',
        'Kirchhoff’s Voltage Law loop',
        'Public-domain circuit schematic illustrating a closed loop for Kirchhoff’s Voltage Law.',
        'Steen919 / Wikimedia Commons',
        'https://commons.wikimedia.org/wiki/File:KVL.svg',
        PD,PD_URL
      )
    ],
    OPENSTAX_K
  );
}

const mixed=byId('w02-mixed-reduce-redraw');
if(mixed){
  mixed.figure=gallery(
    'Practice seeing reducible groups in a mixed resistor network',
    'Before calculating, identify which resistors share both end nodes and which groups are connected in series with the rest of the circuit. This is the kind of real schematic you should learn to simplify one proven group at a time.',
    [
      item(
        'https://upload.wikimedia.org/wikipedia/commons/4/4f/Combo3.png',
        'Series-parallel combination resistor circuit',
        'CC0 schematic of a five-volt source feeding a mixed network containing two parallel resistor groups connected in series.',
        'Drjenncash / Wikimedia Commons',
        'https://commons.wikimedia.org/wiki/File:Combo3.png',
        CC0,CC0_URL
      )
    ],
    OPENSTAX_SERIES
  );
}

const divider=byId('w02-divider-ideal-then-loaded');
if(divider){
  divider.figure=gallery(
    'Compare the ideal divider with the loaded-divider model',
    'Look at the output node in both images. In the ideal divider, the lower resistor is the only path from Vout toward the reference node. When a load is connected, another path appears in parallel with the lower leg; that changes the effective resistance and therefore changes Vout.',
    [
      item(
        'https://upload.wikimedia.org/wikipedia/commons/8/8f/Voltage_divider.svg',
        'Unloaded resistor voltage divider',
        'Public-domain schematic of a two-resistor voltage divider with an output node between the resistors.',
        'Wikimedia Commons contributors',
        'https://commons.wikimedia.org/wiki/File:Voltage_divider.svg',
        PD,PD_URL
      ),
      item(
        'https://upload.wikimedia.org/wikipedia/commons/a/ae/Voltage_divider-loaded_eq.svg',
        'Loaded voltage divider equivalent',
        'Public-domain schematic showing the equivalent lower-leg resistance used when a voltage divider is loaded.',
        'Forthommel / Wikimedia Commons',
        'https://commons.wikimedia.org/wiki/File:Voltage_divider-loaded_eq.svg',
        PD,PD_URL
      )
    ],
    MIT_DIV,MIT_LOAD
  );
}

// Career-specific tables are not representations of physical circuitry.
// Keep them only as transparent Alfred reasoning aids, not as "source" diagrams.
const CT=career?.integrated?.teaching||[];
const cp4=CT.find(s=>s.sectionId==='career-w02-discriminating-measurement');
if(cp4?.figure){
  cp4.figure.provenance='alfred-model';
  cp4.figure.number='Alfred reasoning aid';
  cp4.figure.source='Alfred technician decision aid; technical workflow informed by the credited troubleshooting sources.';
}
const cp5=CT.find(s=>s.sectionId==='career-w02-change-one-verify');
if(cp5?.figure){
  cp5.figure.provenance='alfred-model';
  cp5.figure.number='Alfred documentation aid';
  cp5.figure.source='Alfred technician documentation template; workflow informed by MIT PCB debugging and production troubleshooting practice.';
}

C.meta=C.meta||{};
C.meta.week2VisualRevision='2026-09-29-v16.3.85-week2-source-authentic-visuals';
C.meta.week2VisualStatus='SOURCE_AUTHENTIC_PASS';
C.meta.visualSourcePolicyRevision='2026-09-29-source-authentic-first-public-domain-preferred';
C.meta.visualSourcePolicy={
  priority:['public-domain-or-CC0-source-visual','permissively-licensed-source-visual','official-source-link-when-redistribution-is-unclear','Alfred-created-only-for-course-specific-workflow-or-last-resort'],
  technicalVerification:'Visual license/provenance and technical correctness are verified separately.',
  alfredLabelRule:'Alfred-created visuals must be labeled as Alfred reasoning/workflow aids and must not masquerade as source-authentic diagrams.'
};

window.ALFRED_WEEK2_SOURCE_VISUALS_16385__={
  revision:C.meta.week2VisualRevision,
  status:C.meta.week2VisualStatus,
  replacedConceptVisuals:7,
  publicDomainVisualItems:7,
  cc0VisualItems:1,
  alfredCareerReasoningAidsRetained:2
};
})();