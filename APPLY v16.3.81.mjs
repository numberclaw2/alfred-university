#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const overlay='week3-remediation-v16.3.81.js';
const release='release-notes-v16.3.81.js';
const required=[overlay,release];
const fail=(m)=>{console.error('ERROR:',m);process.exitCode=1;};
for(const f of required){if(!fs.existsSync(path.join(ROOT,f)))fail(`Missing ${f}`);}
if(process.exitCode)process.exit();

const htmlFiles=fs.readdirSync(ROOT).filter(f=>f.endsWith('.html'));
let runtimeSurfaces=0;
for(const file of htmlFiles){
  const p=path.join(ROOT,file);let s=fs.readFileSync(p,'utf8');let before=s;
  if(s.includes('ceta-instructional-authority-v16.3.80.js')&&!s.includes(overlay)){
    const re=/(<script src="ceta-instructional-authority-v16\.3\.80\.js\?v=16\.3\.80"><\/script>)/;
    if(re.test(s)){s=s.replace(re,`$1<script src="${overlay}?v=16.3.81"></script>`);runtimeSurfaces++;}
    else {
      const re2=/(<script src="ceta-instructional-authority-v16\.3\.80\.js"><\/script>)/;
      if(re2.test(s)){s=s.replace(re2,`$1<script src="${overlay}?v=16.3.81"></script>`);runtimeSurfaces++;}
    }
  }
  // Lab Center does not load the governance chain; the overlay safely patches ALFRED_ACADEMIC alone there.
  if(file==='labs.html'&&!s.includes(overlay)){
    const marker='<script src="practical-completion.js"></script>';
    if(s.includes(marker)){s=s.replace(marker,`${marker}<script src="${overlay}?v=16.3.81"></script>`);runtimeSurfaces++;}
    else fail('Could not find practical-completion.js insertion point in labs.html');
  }
  if(file==='patch-notes.html'&&!s.includes('release-notes-v16.3.81.js')){
    const marker='<script src="release-notes-v16.3.80.js"></script>';
    if(s.includes(marker))s=s.replace(marker,`${marker}<script src="release-notes-v16.3.81.js"></script>`);
    else fail('Could not find v16.3.80 release-note insertion point in patch-notes.html');
  }
  if(s!==before)fs.writeFileSync(p,s);
}

const bi=path.join(ROOT,'build-info.json');
if(fs.existsSync(bi)){
  const b=JSON.parse(fs.readFileSync(bi,'utf8'));
  b.runtimePatch='16.3.81';
  b.build='v16.3.81-week3-three-gate-remediation-20260929';
  b.releaseStatus='week3-three-gate-remediation-pending-production-qa';
  b.releaseNotesRevision='2026-09-29-v16.3.81-week3-three-gate-remediation';
  b.week3InstructionalRevision='2026-09-29-v16.3.81-week3-three-gate-remediation';
  b.week3ThreeGateStatus='PENDING_DEPLOYMENT_QA';
  b.week3CetaAuthorityRepair=['8.1','8.2'];
  b.week3CareerMetrologyStandards=['C15.1','C15.2','C15.3','C15.4','C15.5'];
  b.week3SpecialtyInstrumentRehome='C3.8 guided first use Week 6; independent specialization later';
  fs.writeFileSync(bi,JSON.stringify(b,null,2)+'\n');
}else fail('build-info.json not found');

const sw=path.join(ROOT,'service-worker.js');
if(fs.existsSync(sw)){
  let s=fs.readFileSync(sw,'utf8');
  s=s.replace(/const CACHE='alfred-u-v16-3-80-[^']*';/,"const CACHE='alfred-u-v16-3-81-week3-remediation-20260929';");
  if(!s.includes(`'${overlay}'`)){
    const marker="'ceta-instructional-authority-v16.3.80.js?v=16.3.80'";
    if(s.includes(marker))s=s.replace(marker,`${marker},'${overlay}','${overlay}?v=16.3.81'`);
    else fail('Could not add Week 3 overlay to service-worker CORE list');
  }
  if(!s.includes(`'${release}'`)){
    const marker="'release-notes-v16.3.80.js'";
    if(s.includes(marker))s=s.replace(marker,`${marker},'${release}'`);
    else fail('Could not add v16.3.81 release notes to service-worker CORE list');
  }
  fs.writeFileSync(sw,s);
}else fail('service-worker.js not found');

// Acceptance guardrails: source repair is intentionally not allowed to claim final VERIFIED_PASS yet.
const overlayText=fs.readFileSync(path.join(ROOT,overlay),'utf8');
const checks=[
  ['8.1 route',overlayText.includes("codes:['8.1','8.2']")],
  ['C15 validity page',overlayText.includes('career-w03-test-asset-validity')],
  ['measurement capability page',overlayText.includes('career-w03-measurement-capability-decision')],
  ['C3.8 rehome',overlayText.includes("s38.firstCurriculumUseWeek=6")],
  ['LAB-003 evidence gate',overlayText.includes('lab.evidenceGate')],
  ['pending QA truth',overlayText.includes('PENDING_DEPLOYMENT_QA')],
];
for(const [name,ok] of checks){if(!ok)fail(`Acceptance guard failed: ${name}`);}

console.log(`v16.3.81 source update applied. Runtime HTML surfaces patched: ${runtimeSurfaces}.`);
console.log('Final Week 3 VERIFIED_PASS remains intentionally withheld until the deployed artifact is audited.');
if(process.exitCode)process.exit(process.exitCode);
