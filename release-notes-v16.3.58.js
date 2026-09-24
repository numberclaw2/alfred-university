(() => {
  const entry = {
  "version": "v16.3.58",
  "date": "September 23, 2026",
  "title": "Whole-Course Teaching Media Semantic Integrity Repair",
  "type": "Teaching Media / Contextual Placement / Required vs Study",
  "request": "Apply the completed Weeks 1–31 adversarial Teaching Media audit without redesigning the course or disturbing protected curriculum, labs, assessments, CETa, progress IDs, or Cloud Sync.",
  "changes": [
    "Completed the section-level semantic audit across all 31 weeks and all 491 live substantive teaching sections.",
    "Applied 210 targeted semantic repair rules to correct over-broad reuse, incomplete first-pass coverage, and source-to-section mismatches while preserving valid canonical reuse.",
    "Hardened semantic-repair routing: exact section IDs are used first, then the live lesson title is used when the composed curriculum has normalized a section ID.",
    "Corrected hard media-channel defects where written or non-video resources had occupied Required video slots.",
    "Added or promoted narrower resources for solder/rework, digital logic, MCU bring-up, Python, cabling/fiber, RF measurement, system bring-up, documentation, portfolio, retention, and other audited gaps.",
    "Week 17's dual-domain protection section now uses separate cybersecurity and electrical-surge videos plus a NIST written companion.",
    "The runtime enforces 491 live sections, 1,021 contextual placements, 515 written placements, zero orphan placements, 347 assignments, 322 unique assignment source IDs, and 319 canonical source identities.",
    "Preserved lesson IDs, assessments, 24 labs, CETa Study Guide integration, 262 CETa competencies, 81 Career standards, progress identity, and Cloud Sync protocol 2.",
    "Bumped the service-worker cache for the direct-file release while retaining network-first JavaScript refresh behavior."
  ],
  "filesAdded": [
    "release-notes-v16.3.58.js"
  ],
  "filesModified": [
    "v16.3.56-runtime-placement-hotfix.js",
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
