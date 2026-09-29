(()=>{const entry={
version:'v16.3.84',
date:'September 29, 2026',
title:'Week 3 Career Teaching-Render Repair',
type:'Career Instruction / Learn UX / Evidence Visibility',
request:'Make the latest Career-section objectives visible in the actual learner experience instead of merely passing governance behind the scenes.',
changes:[
'Adds a visible Technician Task card so every governed Career page states the real job behavior being learned.',
'Updates the CETa ↔ Career handoff renderer to understand both the older received/passes schema and the current fromCeta/toCareer/rule schema, preventing blank handoff cards.',
'Expands Technician Demonstration rendering to show the scenario, ordered steps, and final technician decision—not just the steps.',
'Updates immediate-practice rendering to support the current prompt + required[] schema while preserving the older prompts[] schema.',
'Adds a visible Evidence Required card so authentic performance evidence is presented to the learner rather than existing only in governance metadata.',
'Preserves and visibly states the physical-proficiency boundary so simulation/reasoning is not misrepresented as hands-on instrument competence.',
'Preserves backward compatibility with the v16.3.74/v16.3.75 Career page schema and interactive trainers.',
'Statically wires the accepted Week 3 v16.3.81 remediation and v16.3.83 acceptance layers into Learn so the current Career content is present on first load rather than depending on a second service-worker-controlled navigation.',
'Preserves Week 2 and Week 3 VERIFIED_PASS, Cloud Sync protocol 2, the sustainable calendar baseline, CETa content, Study Guide integration, and existing Career standards/governance.'
],
filesAdded:['release-notes-v16.3.84.js'],
filesModified:['learn.js','styles.css','learn.html','patch-notes.html','build-info.json','service-worker.js'],
filesRemoved:[]
};const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];window.ALFRED_RELEASES=[entry,...existing.filter(x=>x&&x.version!==entry.version)];})();