(()=>{
  const entry = {
  "version": "v16.3.60",
  "date": "September 23, 2026",
  "title": "Combined Multimodal QA & Required-Workload Cleanup",
  "type": "Teaching Media / Outside Literature / CETa / Workload Calibration",
  "request": "Audit the combined Teaching Media, outside-literature, and CETa Study Guide system after v16.3.59 for duplicate obligations, classification contradictions, bad week scheduling, centralized-index ambiguity, and weekly feasibility.",
  "changes": [
    "Preserved the 491-section curriculum and the 1,021 contextual Teaching Media placements; no lesson sequencing, labs, assessments, CETa mapping, progress IDs, or Cloud Sync protocol were redesigned.",
    "Removed five phantom Required assignments that had no Required contextual use after the v16.3.58 semantic repair.",
    "Promoted the AC Circuits textbook to the Week 4 Required slot where it is actually used and moved the unused ground-reference article to Study.",
    "Moved the Required BJT introduction from Week 7 to Week 8, where its contextual use actually occurs.",
    "Moved the Required NASA Systems Engineering Handbook role to Week 22 by swapping it with the existing Week 22 Library role, eliminating a before-assignment contextual use without creating a duplicate record.",
    "Replaced the Week 23 Required first-power reading link from Study-only Keysight Bench Power with the already-Required SparkFun bench-supply written companion.",
    "Reclassified zero-use DIAC, Zener, JFET, and FOA lecture-index assignments from Classroom Required to Study.",
    "Final assignment distribution becomes 247 Classroom Required / 81 Study / 19 Engineering Library, while total assignments remain 347 and source identity remains 322 unique / 319 canonical.",
    "Expanded the centralized Course Reading Index from contextual readings only to all 152 unique literature assignment sources plus 62 CETa Study Guide records.",
    "Mixed-role sources now retain every applicable Required / Study / Reference role and match all applicable status filters instead of being flattened to one global label."
  ],
  "filesAdded": [
    "release-notes-v16.3.60.js"
  ],
  "filesModified": [
    "v16.3.56-runtime-placement-hotfix.js",
    "reading-library-integration.js",
    "resources.html",
    "build-info.json",
    "patch-notes.html",
    "service-worker.js",
    "SHA256SUMS.txt"
  ],
  "filesRemoved": []
};
  const existing = Array.isArray(window.ALFRED_RELEASES) ? window.ALFRED_RELEASES : [];
  window.ALFRED_RELEASES = [entry, ...existing.filter(item => item && item.version !== entry.version)];
})();
