(()=>{
  const entry={
    version:'v16.3.64',
    date:'September 24, 2026',
    title:'Document System Refresh',
    type:'Documents / Governance / Semantic Coverage / Resource Verification',
    request:'Audit and update the Documents section for current content accuracy, visual consistency, and clearer separation between governing documents, current technical baselines, and historical records.',
    changes:[
      'Rebuilt the Syllabus & Student Handbook around the current v16.3.64 learner workflow, 31-week dates, evidence-based completion, Teaching Media roles, and dual-source CETa readiness.',
      'Rebuilt the Academic System Guide for split Learn/Study resume, Focus Prep, Study week selection, bundled Study Guide behavior, Cloud Sync protocol 2, assessment review routing, and v16.3.63 completion truth.',
      'Rebuilt the Learning Resource Manual around Classroom Required / Study / Engineering Library roles and the current v16.3.60 Teaching Media architecture instead of the legacy MUST/SHOULD/STRETCH taxonomy.',
      'Rebuilt the Assignment & Lab Manual with current evidence rules, templates, troubleshooting/test-report structure, Project 1 documentation, and the current 24 lab-route index.',
      'Rebuilt the Career Transition Readiness Checklist from all 81 current v16.3.42 Career standards and clarified that 81/81 completion is not an application barrier.',
      'Added a concise v16.3.64 Current Curriculum & Instruction Governance Plan while preserving the original 300+ page v16.3 detailed plan as a frozen baseline.',
      'Regenerated semantic coverage to 343 rows: 262 CETa plus all 81 current Career standards; the prior 340-row v16.3 matrix remains historical.',
      'Added a consolidated current Document & Resource System Verification covering the 347-assignment Teaching Media architecture, 214-record reading index, Study Guide disposition, and document authority.',
      'Reorganized Documents into Current Governing Documents, Current Technical Baselines, and Historical / Archived Records, with explicit status badges and updated cover previews.',
      'Course release remains 16.3 and Cloud Sync protocol remains 2.'
    ],
    filesAdded:[
      'release-notes-v16.3.64.js',
      'AU-ESET-301-v16.3.64-Current-Curriculum-and-Instruction-Plan.docx',
      'AU-ESET-301-v16.3.64-Current-Curriculum-and-Instruction-Plan.pdf',
      'AU-ESET-301-v16.3.64-Semantic-Coverage-Matrix.csv',
      'AU-ESET-301-v16.3.64-Semantic-Coverage-Matrix.json',
      'AU-ESET-301-v16.3.64-Document-and-Resource-Verification.md',
      'career-readiness-cover.png',
      'current-curriculum-cover.png'
    ],
    filesModified:[
      'documents.html',
      'Alfred University - AU-ESET 301 - Syllabus and Student Handbook.pdf',
      'Alfred University - AU-ESET 301 - Academic System Guide.pdf',
      'Alfred University - AU-ESET 301 - Learning Resource Manual.pdf',
      'Alfred University - AU-ESET 301 - Assignment and Lab Manual.pdf',
      'Embedded Career Transition Readiness Checklist.pdf',
      'syllabus-cover.png',
      'resource-manual-cover.png',
      'assignment-lab-cover.png',
      'build-info.json',
      'service-worker.js',
      'patch-notes.html',
      'SHA256SUMS.txt'
    ],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
