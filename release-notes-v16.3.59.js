(()=>{
  const entry = {
  "version": "v16.3.59",
  "date": "September 23, 2026",
  "title": "CETa Study Guide + Outside Literature Central Reference Integration",
  "type": "Study / Engineering Library / CETa / Outside Literature",
  "request": "Finish the planned outside-literature and CETa Study Guide integration so the same deliberately mapped resources remain contextual in lessons while also being easy to browse in a centralized Study/Engineering Library reference view.",
  "changes": [
    "Preserved the accepted v16.3.58 Teaching Media runtime and all 491 live teaching sections; this release does not alter curriculum sequencing, labs, assessments, progress IDs, or Cloud Sync.",
    "Added the CETa Study Guide map to Engineering Library and created one searchable Course Reading Index covering all 62 Study Guide records plus the runtime outside-literature source set.",
    "The centralized index shows Required/Review/Study/Reference status, mapped weeks, purpose, focus, after-reading action, Study Guide page ranges, estimated time, and official errata when applicable.",
    "Outside literature remains sourced from the existing single runtime integration record; the new index does not create duplicate assignments or additional homework.",
    "Study Guide cards in Study now display estimated time and the after-reading action, matching the context already shown in Classroom.",
    "Added a direct Study link to the centralized reading index for easier movement between targeted review and full-course reference browsing.",
    "Preserved the private CETa PDF model: the Study Guide PDF remains device-local in IndexedDB, is not Cloud Synced, and is not service-worker cached."
  ],
  "filesAdded": [
    "reading-library-integration.js",
    "release-notes-v16.3.59.js"
  ],
  "filesModified": [
    "resources.html",
    "ceta-study-guide-private.js",
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
