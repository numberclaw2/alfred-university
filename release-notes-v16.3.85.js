(()=>{const entry={
version:'v16.3.85',
date:'September 29, 2026',
title:'Week 2 Source-Authentic Visual Upgrade',
type:'Instructional Visuals / Provenance / Week 2',
request:'Shift Week 2 away from Alfred-generated concept diagrams and toward real public-domain or CC0 teaching visuals with independently verified technical grounding.',
changes:[
'Replaces all seven Week 2 CETa concept figures with source-authentic public-domain/CC0 circuit visuals hosted by Wikimedia Commons.',
'Uses separate technical-verification sources: OpenStax for series/parallel and Kirchhoff concepts, and MIT OpenCourseWare for voltage-divider behavior/loading.',
'Adds learner-facing captions that tell the student what to look at first, what relationship the visual demonstrates, and why it matters.',
'Keeps only two Alfred-created Career visuals because they are course-specific reasoning/documentation aids rather than representations of physical circuitry, and relabels them transparently as Alfred aids.',
'Establishes the permanent source-authentic-first visual policy: public domain/CC0 first, permissively licensed source visual second, official outbound source when redistribution is unclear, Alfred-created diagram only for course-specific workflow or genuine last-resort need.',
'Separates licensing/provenance verification from technical-correctness verification so a reusable image is not automatically treated as authoritative.',
'Preserves Week 2 curriculum, assessments, labs, Career gates, Week 3 acceptance, calendar, saved progress, and Cloud Sync protocol 2.'
],
filesAdded:['week2-source-visuals-v16.3.85.js','release-notes-v16.3.85.js','AU-ESET-301-v16.3.85-Week-2-Source-Authentic-Visual-QA.md'],
filesModified:['learn.html','patch-notes.html','build-info.json','service-worker.js','VISUAL-SOURCES.md'],
filesRemoved:[]
};const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];window.ALFRED_RELEASES=[entry,...existing.filter(x=>x&&x.version!==entry.version)];})();