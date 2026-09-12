#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const cp = require('child_process');

const root = path.resolve(__dirname, '..', 'alfred-university');
const failures = [];
const pass = [];
function check(condition, message) {
  if (condition) pass.push(message);
  else failures.push(message);
}
function read(file) { return fs.readFileSync(path.join(root, file), 'utf8'); }
function localTarget(raw) {
  if (!raw || /^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(raw)) return null;
  return raw.split('#')[0].split('?')[0];
}

const jsFiles = fs.readdirSync(root).filter(f => f.endsWith('.js'));
for (const file of jsFiles) {
  try { cp.execFileSync(process.execPath, ['--check', path.join(root, file)], {stdio:'pipe'}); }
  catch (error) { failures.push(`JavaScript syntax: ${file}: ${error.stderr?.toString() || error.message}`); }
}
check(!failures.some(x => x.startsWith('JavaScript syntax:')), `${jsFiles.length} JavaScript files parse`);

const htmlFiles = fs.readdirSync(root).filter(f => f.endsWith('.html'));
const expectedNav = ['index.html','study.html','week.html','calendar.html','practice.html','progress.html','analytics.html'];
for (const file of htmlFiles) {
  const html = read(file);
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]);
  check(new Set(ids).size === ids.length, `unique IDs: ${file}`);
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  check(h1Count === 1, `one primary h1: ${file}`);
  for (const m of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const target = localTarget(m[1]);
    if (!target) continue;
    check(fs.existsSync(path.join(root, target)), `${file} local reference exists: ${target}`);
  }
  if (!['404.html','offline.html'].includes(file)) {
    check(html.includes('site.js'), `${file} loads shared site layer`);
    const nav = html.match(/<nav[^>]+id=["']primary-navigation["'][\s\S]*?<\/nav>/i)?.[0] || '';
    const links = [...nav.matchAll(/<a[^>]+href=["']([^"'#?]+)["']/gi)].map(m => m[1]);
    check(expectedNav.every((item, i) => links[i] === item), `${file} primary navigation order`);
  }
}
check(htmlFiles.length >= 20, `${htmlFiles.length} routed HTML documents audited`);

const context = {window:{}};
vm.createContext(context);
for (const file of ['course-data.js','academic-content.js','assessment-data.js']) {
  vm.runInContext(read(file), context, {filename:file});
}
const w = context.window;
check(w.ALFRED_EVENTS.length === 125, '125 calendar events');
check(w.ALFRED_WEEKS.length === 31, '31 week modules');
check(w.ALFRED_RESOURCES.length === 48, '48 assigned resources');
check(w.ALFRED_ACADEMIC.deepResources.length === 99, '99 deep resources');
check(w.ALFRED_ACADEMIC.labs.length === 24, '24 labs');
check(w.ALFRED_ACADEMIC.knowledge.length === 61, '61 knowledge entries');
check(w.ALFRED_ACADEMIC.localDocuments.length === 7, '7 indexed local documents');
check(w.ALFRED_ASSESSMENT.cetaStandards.length === 262, '262 CETa standards');
check(w.ALFRED_ASSESSMENT.careerStandards.length === 78, '78 career standards');
check(w.ALFRED_ASSESSMENT.questions.length === 1048, '1,048 assessment questions');
check(w.ALFRED_ASSESSMENT.lessonQuizzes.length === 125, '125 lesson quizzes');
check(w.ALFRED_ASSESSMENT.labQuizzes.length === 24, '24 lab quizzes');
check(w.ALFRED_ASSESSMENT.weeklyTests.length === 31, '31 weekly tests');

const sw = read('service-worker.js');
check(sw.includes("const CACHE='alfred-u-v15-5'"), 'service-worker cache is v15.5');
const core = [...sw.matchAll(/'([^']+)'/g)].map(m => m[1]).filter(x => x.includes('.') || x === './');
for (const file of [...new Set(core)]) {
  if (/^(?:https?:|data:)/i.test(file)) continue;
  check(fs.existsSync(path.join(root, file)), `service-worker core asset exists: ${file}`);
}

const index = read('index.html');
check(index.indexOf('id="home-current-week"') < index.indexOf('class="card-grid six system-map"'), 'home current-week action precedes system map');
const site = read('site.js');
check(site.includes('installSkipLink') && site.includes('addContextTrail') && site.includes('groupMoreMenu'), 'orientation and grouped-navigation hooks present');
const css = read('styles.css');
check(css.includes('prefers-reduced-motion:reduce'), 'reduced-motion rule present');
check(css.includes('button,.button{min-height:44px}'), '44px core control rhythm present');
check(css.includes('--reading-measure:70ch'), '70ch reading measure present');
check(read('calendar.html').includes('125 dated learning items'), 'calendar orientation copy is concise');
check(read('calendar.html').includes('calendar-guidance'), 'calendar usage cue present');
check(site.includes('event-at-a-glance') && site.includes('event-reference'), 'calendar event hierarchy and progressive disclosure present');
check(site.includes('eventDisplayParts') && site.includes('aria-pressed'), 'calendar labels and view state semantics present');
check(site.includes('week-empty') && site.includes('type="button" class="week-event"'), 'week view event controls are keyboard-friendly');
check(read('study.js').includes('renderResumeSession') && read('study.js').includes('state.session'), 'Study saves and restores unfinished sessions');
check(read('study.html').includes('study-settings-help') && read('study.html').includes('Choose one mode, follow the steps in order'), 'Study focus settings and sequence are explicit');
check(read('assessment.js').includes('defaultWeek') && read('assessments.html').includes('lesson-filter-guidance'), 'Assessment Center opens at current week with filter guidance');
check(read('academic.js').includes('W.some(x=>x.week===requested)') && read('academic.js').includes('lab-filter-guidance'), 'Lab Center opens at current week with filter guidance');
check(EVERY_EVENT_DESCRIPTIONS_ARE_COMPLETE(w.ALFRED_EVENTS), 'every event retains outcomes and source descriptions');
check(read('README.md').includes('99 additional deep-study resources'), 'README inventory matches current data');
check(read('release-notes.js').includes("version:'v15.5'"), 'v15.5 release note present');
check(fs.existsSync(path.join(__dirname, 'ADHD_AUTISM_AUDIT_REPORT.md')), 'ADHD/autism-informed audit report exists');

function EVERY_EVENT_DESCRIPTIONS_ARE_COMPLETE(events) {
  return events.every(e => e.id && e.start && e.end && e.summary && e.description && Array.isArray(e.outcomes));
}

if (failures.length) {
  console.error(`FAIL ${failures.length}`);
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}
console.log(`PASS ${pass.length} checks`);
for (const item of pass) console.log(`- ${item}`);
