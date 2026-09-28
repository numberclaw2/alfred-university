(()=>{
  const entry={
    version:'v16.3.71',
    date:'September 27, 2026',
    title:'Week 3 Instructional Redesign — Core Bench Measurement',
    type:'Curriculum / Teaching UX / Teaching Media / CETa Study Guide / Assessment / Lab',
    request:'Apply the Week 2 teaching standard to Week 3: audit and redesign Alfred-written instruction, videos, literature, Study Guide placement, practice, assessment, lab evidence, visual structure, and technician transfer while keeping the week beginner-first and focused.',
    changes:[
      'Rebuilt the Week 3 CETa lesson from eleven broad instrument sections into seven focused pages: question-first selection, DMM modes/connections, bench-supply CV/CC, scope voltage-over-time, probe/reference discipline, trigger, and measurement-system limits.',
      'Removed specialist-instrument overload from the required Week 3 path. Signal generators/frequency counters/LCR/ESR tools, logic probes/pulsers, spectrum analyzers, dummy loads, rheostats, isolation transformers/Variacs, and related breadth are preserved for Study or later natural weeks rather than treated as first-pass Week 3 requirements.',
      'Preserved active semantic IDs SEM-8-03-033 and SEM-8-03-036 with narrower truthful scope; preserved three broad future-topic semantic tasks plus analog-meter and spectrum-analyzer competency fragments for later re-homing rather than deleting certification coverage.',
      'Reorganized the Career lesson into six pages centered on measurable questions, static baseline evidence, known-waveform onboarding, reference/loading/bandwidth limits, discriminating measurements, and reproducible records.',
      'Reduced the Week 3 Required Teaching Media path to four bounded sources: Fluke DC-voltage setup, Keysight Bench Power Supply Basics Lesson 4 (CV/CC), Tektronix step-by-step scope/probe setup subsections, and Tektronix’s 4:31 trigger lesson.',
      'Moved the 46:26 Tektronix oscilloscope webinar to optional Study and added optional Afrotechmods scope reinforcement; broad/specialist test-equipment sources are Study/reference rather than required homework.',
      'Split CETa Study Guide Chapter 19 into point-of-use Study slices: p.165 test-equipment purpose/categories, pp.167–169 selected DMM/loading material, pp.172–173 oscilloscope fundamentals, and p.173 probe/loading/trigger material. The p.175 chapter quiz is explicitly not assigned wholesale.',
      'Rebalanced Week 3 mastery to twelve curated instrument-decision questions instead of a large pool dominated by repeated Ohm/power/network arithmetic; added eight original Week 3 questions aligned to the redesigned instruction.',
      'Strengthened LAB-003 into prediction → safe setup → measurement → comparison → interpretation → documentation, with explicit current-mode lead reset, CV/CC observation, probe compensation/check, known-waveform trigger setup, and manual Vpp/period/frequency calculation.',
      'Added three source-grounded technical visuals for DMM connections, CV/CC supply behavior, and oscilloscope graticule reading.',
      'Preserved calendar dates, pacing model, LAB-003 identity, Cloud Sync protocol 2, existing saved-progress keys, glossary, Focus Prep, direct navigation, and all other weeks.'
    ],
    filesAdded:['week3-redesign-v16.3.71.js','release-notes-v16.3.71.js','AU-ESET-301-v16.3.71-Week-3-Instructional-Redesign-QA.md','UPLOAD_README_v16.3.71.txt','w03-dmm-connections.svg','w03-cv-cc.svg','w03-scope-graticule.svg'],
    filesModified:['learn.html','study.html','practice.html','progress.html','resources.html','search.html','patch-notes.html','build-info.json','service-worker.js','README.md','SHA256SUMS.txt'],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
