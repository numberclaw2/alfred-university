(()=>{const entry={
version:'v16.3.86',
date:'September 29, 2026',
title:'Week 2 Career Source-Authentic Visual Upgrade',
type:'Career Instruction / Real Technician Visuals / Provenance',
request:'Apply the new source-authentic visual standard to Week 2 Career, not only CETa.',
changes:[
'Adds a separate real/source visual block to all five Week 2 Career teaching pages.',
'Uses authentic public-domain electronics-technician photographs for multimeter troubleshooting, PCB connectivity testing, resistor testing, component repair, and continuity verification.',
'Uses a public-domain real breadboard photograph for physical-network/fault-signature teaching.',
'Preserves the useful Alfred discriminating-measurement decision matrix and repair-record table rather than replacing them; those remain clearly labeled Alfred reasoning/documentation aids.',
'Keeps source-image licensing/provenance separate from technical interpretation, which is independently grounded in Fluke instrument guidance and MIT PCB debugging/test-point instruction.',
'Explicitly tells the learner that occupational photographs show real technician context but do not by themselves prove the learner has demonstrated physical proficiency.',
'Preserves Week 2/Week 3 acceptance, assessments, labs, calendar, saved progress, and Cloud Sync protocol 2.'
],
filesAdded:['week2-career-source-visuals-v16.3.86.js','release-notes-v16.3.86.js','AU-ESET-301-v16.3.86-Week-2-Career-Source-Authentic-Visual-QA.md'],
filesModified:['learn.js','learn.html','patch-notes.html','build-info.json','service-worker.js','VISUAL-SOURCES.md'],
filesRemoved:[]
};const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];window.ALFRED_RELEASES=[entry,...existing.filter(x=>x&&x.version!==entry.version)];})();