const fs=require('fs'),path=require('path'),vm=require('vm');
const root=process.argv[2]||process.cwd();
const ctx={window:{},console,URL,URLSearchParams};vm.createContext(ctx);
const files=['course-data.js','curriculum-data.js','assessment-data.js','assessment-completion.js','semantic-repair.js','week1-instructional-depth.js','career-instructional-depth.js','career-curriculum-reconstruction.js','career-traceability-routing.js','week2-redesign-v16.3.68.js','week2-study-aac-v16.3.69.js','week2-final-acceptance-v16.3.70.js','week3-redesign-v16.3.71.js','week3-final-acceptance-v16.3.72.js','week2-career-remediation-v16.3.74.js','week2-final-career-ux-v16.3.75.js','week2-trainer-evidence-gate-v16.3.76.js','career-occupational-governance-v16.3.77.js'];
for(const f of files){const p=path.join(root,f);if(!fs.existsSync(p)){console.error('MISSING',f);process.exit(2)};vm.runInContext(fs.readFileSync(p,'utf8'),ctx,{filename:f});}
const F=ctx.window.ALFRED_CAREER_GOVERNANCE,G=ctx.window.ALFRED_CAREER_ACCEPTANCE,A=ctx.window.ALFRED_ASSESSMENT,C=ctx.window.ALFRED_CURRICULUM;
let hardFail=false;
console.log(`Career standards: ${A.careerStandards.length}; domains: ${A.careerDomains.length}`);
if(A.careerStandards.length!==95){console.error('FAIL expected 95 standards');hardFail=true}
for(const wm of F.weekMap){const r=G.evaluateWeek(wm.week); if(wm.careerAcceptanceStatus==='VERIFIED_PASS'&&!r.structuralPass){console.error(`FAIL Week ${wm.week} declared VERIFIED_PASS but gates fail`,r.sections.filter(x=>!x.pass));hardFail=true;} }
const w2=G.evaluateWeek(2);console.log('Week 2 structural gate',w2.structuralPass?'PASS':'FAIL');
const invalid=F.weekMap.flatMap(w=>w.targets).filter(t=>!A.careerStandards.some(s=>s.code===t.code));if(invalid.length){console.error('FAIL invalid target standards',invalid);hardFail=true;}
const dup=A.careerStandards.map(s=>s.code).filter((x,i,a)=>a.indexOf(x)!==i);if(dup.length){console.error('FAIL duplicate standards',dup);hardFail=true;}
const mismatch=F.careerStandards.filter(s=>A.careerStandards.find(x=>x.code===s.code)?.text!==s.text);if(mismatch.length){console.error('FAIL runtime standard text mismatch',mismatch.map(x=>x.code));hardFail=true;}
console.log(`Verified-pass weeks: ${F.weekMap.filter(w=>w.careerAcceptanceStatus==='VERIFIED_PASS').map(w=>w.week).join(', ')||'none'}`);
console.log(`Remediation-required weeks: ${F.weekMap.filter(w=>w.careerAcceptanceStatus!=='VERIFIED_PASS').length}`);
if(hardFail)process.exit(1);console.log('CAREER GOVERNANCE QA PASS');
