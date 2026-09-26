(()=>{
  const entry={
    version:'v16.3.65',
    date:'September 26, 2026',
    title:'Compact Scanned CETa Study Guide Switch',
    type:'Study Guide / PDF Mapping / Web Delivery',
    request:'Replace the former bundled CETa Study Guide copy with the cleaned scan-derived version while preserving all existing printed-page assignments and keeping the upload package below the 25 MB file limit.',
    changes:[
      'Replaced the bundled Study Guide PDF in place with a compact 234-page scan-derived copy so existing course references keep the same filename.',
      'Corrected the printed-page mapping from +10 to +9: printed page 1 opens PDF page 10 and printed page 224 opens PDF page 233; PDF page 234 is the back cover.',
      'Preserved the existing 62 Study Guide records and the 64 Required / 133 Study-Review / 27 Reference-Historical printed-page disposition.',
      'Kept a lightweight searchable text layer while reducing the bundled Study Guide to about 18 MB for GitHub/web upload compatibility.',
      'Versioned Study Guide URLs with v16.3.65 and refreshed the service-worker cache so the scan-derived PDF supersedes the former bundled copy without changing learner progress.',
      'Updated current learner-facing governance documents that explicitly described the old +10 mapping.',
      'Synchronized build metadata, service-worker revision, release logging, and the repository checksum manifest for the final v16.3.65 state.',
      'No lessons, assessments, mastery rules, learner progress, Teaching Media assignments, or Cloud Sync protocol were changed.'
    ],
    filesAdded:[
      'release-notes-v16.3.65.js',
      'PACKAGE_SHA256SUMS.txt',
      'UPLOAD_README_v16.3.65.txt'
    ],
    filesModified:[
      'Associate_CET_Study_Guide_Sixth_Edition.pdf',
      'ceta-study-guide-private.js',
      'patch-notes.html',
      'AU-ESET-301-v16.3.64-Current-Curriculum-and-Instruction-Plan.docx',
      'AU-ESET-301-v16.3.64-Current-Curriculum-and-Instruction-Plan.pdf',
      'AU-ESET-301-v16.3.64-Document-and-Resource-Verification.md',
      'Alfred University - AU-ESET 301 - Academic System Guide.pdf',
      'Alfred University - AU-ESET 301 - Learning Resource Manual.pdf',
      'Alfred University - AU-ESET 301 - Syllabus and Student Handbook.pdf',
      'build-info.json',
      'service-worker.js',
      'SHA256SUMS.txt'
    ],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
