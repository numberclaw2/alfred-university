#!/usr/bin/env python3
"""Alfred CETa v2.1 assessment-integrity containment.

Downloads the EXACT GitHub revision inspected 2026-10-24. Creates complete
root-level replacement files in a separate output folder; never changes the
original repository, learner progress, browser state or historical records.
"""
from __future__ import annotations
import hashlib
import pathlib
import sys
import urllib.request
import urllib.parse
import zipfile
from datetime import date

REPO = 'numberclaw2/alfred-university'
BASE = 'd7faceda74ccf9b4c2159e304c76620d4c01ff0d'
EXPECTED_BLOBS = {
    'ceta.js': '6afaac4efc0f9f990b09ea90dd2ff74851ef32d2',
    'service-worker.js': '68c2e060dc51e18c7f5f55a69dcc2fe807c3e53e',
    'ALFRED PROJECT GOVERNANCE.md': 'bbd942dee155bbcc010742d5df5dd1da8d64e697',
}
ROOT = pathlib.Path.home() / 'Downloads' / 'Alfred_v2_1_Ready_to_Upload'


def get_exact_source(name: str) -> str:
    url = f'https://raw.githubusercontent.com/{REPO}/{BASE}/{urllib.parse.quote(name)}'
    req = urllib.request.Request(url, headers={'User-Agent':'Alfred-v2.1-ReadOnly-Patcher/1.0'})
    try:
        with urllib.request.urlopen(req, timeout=35) as res:
            raw = res.read()
    except Exception as error:
        raise RuntimeError(f'Cannot retrieve original {name}. Verify that you can access GitHub from this Mac. {error}') from error
    h = hashlib.sha1(f'blob {len(raw)}\0'.encode() + raw).hexdigest()
    if h != EXPECTED_BLOBS[name]:
        raise RuntimeError(f'Source-integrity guard failed for {name}. Expected Git blob {EXPECTED_BLOBS[name]}, got {h}. No files were replaced.')
    return raw.decode('utf-8')


def patch_runtime(s: str) -> tuple[str, list[str]]:
    changes = []
    def sub(a: str, b: str, title: str):
        nonlocal s
        n = s.count(a)
        if n != 1:
            raise RuntimeError(f'Cannot safely patch {title}: expected 1 exact match, found {n}. No output was written.')
        s = s.replace(a,b,1)
        changes.append(title)

    sub("id==='M30'?!!state.independentPractice&&state.independentPractice.score>=85:r.master.some(x=>x.score>=(id==='M29'?85:(m.masteryTarget||80)))", "(id==='M29'||id==='M30')?false:r.master.some(x=>x.score>=(m.masteryTarget||80))", 'block unverified M29/M30 readiness')
    sub("function formatQuestions(qs,mode){return qs.map((q,i)=>{const shuffled=seededChoices(q,randomSeed(q.id+':' + (state.session[module.id+':'+mode]?.attempt||1)));return", "function formatQuestions(qs,mode,offset=0,total=qs.length){return qs.map((q,i)=>{const shuffled=seededChoices(q,randomSeed(q.id+':' + (state.session[module.id+':'+mode]?.attempt||1)));const previous=state.session[module.id+':'+mode]?.answers?.[q.id];return", 'restore saved answers')
    sub('Question ${i+1} of ${qs.length}', 'Question ${i+1+offset} of ${total}', 'show 1–100 question numbering')
    sub('value="${c.i}"> <span>${esc(c.t)}</span>', 'value="${c.i}" ${String(previous)===String(c.i)?"checked":""}> <span>${esc(c.t)}</span>', 'preselect saved answers')
    sub('100-question internal readiness rehearsal', '100-question practice rehearsal · validation pending', 'rename M29 rehearsal')
    sub('This 100-question practice set uses the reviewed Alfred base questions; its domain coverage is incomplete. It is not a validated substitute for the official ETA exam or an independent practice source.', 'This 100-question rehearsal reuses instructional questions and has incomplete objective coverage. It is useful for study, but not independent or validated certification-readiness evidence. Readiness validation remains pending.', 'correct M29 disclaimer')
    sub("score>=(exam?85:(module.masteryTarget||80))?'Internal threshold reached.':'Continue reviewing and try again.'", "exam?'Practice score retained; readiness validation pending.':(score>=(module.masteryTarget||80)?'Internal threshold reached.':'Continue reviewing and try again.')", 'do not award M29 readiness')
    sub("${formatQuestions(qs,'master')}<button type=\"submit\"", "${formatQuestions(qs,'master',exam?from:0,exam?n:qs.length)}<button type=\"submit\"", 'number exam questions across all pages')
    sub("${score!==null?button('Start a new attempt',{id:'restart-exam',cls:'ghost'}):''}", "${exam&&part>0?button('Previous 10 questions',{id:'exam-prev',cls:'outline'}):''}${score!==null?button('Start a new attempt',{id:'restart-exam',cls:'ghost'}):''}", 'previous-ten control')
    sub("<p>Take a separate, current 100-question assessment from outside Alfred's question bank. This cannot be replaced with another run of Alfred's internal questions.</p>", "<p>Use this optional form to record outside practice for your personal study history. The entered score is self-reported and cannot establish validated independent readiness. This Master stage remains pending until an independent assessment process is reviewed.</p>", 'clarify self-reported M30 assessment')
    sub("Alfred's full practice exam (Module 29), plus at least 85% on a separate independent test.", "Alfred's practice rehearsal (Module 29), plus a genuinely independent, verified assessment. This site has not validated either readiness form.", 'M30 benchmark correction')
    sub('Alfred internal independent threshold reached.', 'Score saved for personal study only; independent readiness validation is pending.', 'M30 no automatic pass')
    sub('Save independent assessment record', 'Save outside practice record', 'M30 button language')
    sub("function recordScore(type,score){const r=modRec();r[type].push({score,date:new Date().toISOString()});state.history.push({moduleId,type,score,date:new Date().toISOString()});state.lastModule=moduleId;state.lastStage=type;persist(true)}", "function recordScore(type,score,metadata={}){const r=modRec(),date=new Date().toISOString(),entry={score,date,...metadata};r[type].push(entry);state.history.push({moduleId,type,...entry});state.lastModule=moduleId;state.lastStage=type;persist(true)}", 'append score provenance without altering legacy records')
    sub("by('master-form')?.addEventListener('submit',e=>", "by('master-form')?.addEventListener('change',e=>{if(moduleId!=='M29'||!e.target.matches('input[type=\"radio\"]'))return;const name=e.target.name||'';if(!name.startsWith('answer-'))return;const key=module.id+':master',ses=state.session[key]||{attempt:1,answers:{},part:0};ses.answers=ses.answers||{};ses.answers[name.slice(7)]=e.target.value;state.session[key]=ses;persist(true)});\nby('exam-prev')?.addEventListener('click',()=>{if(moduleId!=='M29')return;const key=module.id+':master',ses=state.session[key];if(!ses)return;ses.part=Math.max(0,(ses.part||0)-1);persist(true);render();window.scrollTo(0,0)});\nby('master-form')?.addEventListener('submit',e=>", 'autosave selected answers and previous page')
    sub("recordScore('master',score);delete state.session[module.id+':master'];", "recordScore('master',score,{evidenceType:'practice-rehearsal',bank:'v2.0-reused-instructional',readinessEligible:false});delete state.session[module.id+':master'];", 'label new rehearsal scores')
    sub("${score>=85?'Alfred target reached.':'Target not yet reached. Review and retake.'}", 'Rehearsal only: this score is not a verified readiness pass.', 'correct completed rehearsal message')
    sub('Independent second assessment →','Outside practice record (unverified) →','correct follow-on label')
    sub('state.independentPractice={score,source,date:new Date().toISOString(),selfReported:true};', "state.independentPractice={score,source,date:new Date().toISOString(),selfReported:true,readinessEligible:false,provenance:'learner-entered'};", 'tag new outside self-report')
    sub('const ready=best29>=85&&ind?.score>=85;', 'const ready=false;', 'block misleading Ready status')
    sub("<strong>${ready?'Ready*':'Review'}</strong><span>${ready?'Alfred internal readiness met':'Readiness work still open'}</span>", '<strong>Pending</strong><span>Independent readiness validation not yet completed</span>', 'show explicit Pending status')
    sub('Work through 100 questions from the original reviewed base bank. This internal practice measure has incomplete objective coverage and is not the official exam.', 'Rehearse 100 reused instructional questions; useful for study, but neither fresh nor independently validated.', 'M29 assessment card')
    sub('Record a distinct practice test from an independent source. Another Alfred run cannot meet this gate.', 'Optionally record outside practice for personal study. Self-entered scores are not independently validated readiness evidence.', 'M30 assessment card')
    sub('Record independent result →', 'Record practice result →', 'M30 CTA')
    sub('*Alfred readiness is an internal learning target, not an ETA approval, prediction, or guarantee.', "Readiness validation is pending; preserved legacy scores and self-reported scores cannot award a pass. Alfred's 85% goal is internal, not an ETA approval, prediction, or guarantee.", 'full assessment disclaimer')
    sub("return head('Your academic record','Your progress, preserved and explainable.','Current CETa learning evidence remains separate from the original dual-track course record.',`<div class=\"hero-stat\"><strong>${pct}%</strong><span>Completion across five learning stages</span></div>`)+stats", "return head('Your academic record','Your progress, preserved and explainable.','Current CETa learning evidence remains separate from the original dual-track course record.',`<div class=\"hero-stat\"><strong>${pct}%</strong><span>Completion across five learning stages</span></div>`)+`<div class=\"note warn\" style=\"margin-top:14px\">M29 and M30 readiness Master stages are pending independent validation. All historical results remain saved as practice/learner reports, not verified readiness.</div>`+stats", 'progress status distinction')
    sub('active scope and v1.4/v1.5 known limitations.', 'active scope and v2.1 assessment-integrity limitations.', 'update Documents blurb')
    sub('ALFRED_RELEASE_NOTES_v1.5.md', 'ALFRED_RELEASE_NOTES_v2.1.md', 'point to new release notes')
    sub('Objective placements and reused questions require continuing editorial validation; the available question bank does not prove every objective is independently assessed.', 'Objective mappings and repeated questions still need review; neither M29/M30 nor any self-entered outside score can currently award validated certification readiness.', 'About-page disclosure')
    assert len(changes)==29, len(changes)
    assert "const ready=best29>=85&&ind?.score>=85;" not in s
    assert "const KEY='alfred-ceta-only-progress-v1'" in s
    return s,changes


def governance_append(s:str)->str:
    marker='### Recent drift and mandatory repair priorities'
    if s.count(marker)!=1: raise RuntimeError('Governance amendment location unexpected')
    passage='''### 2026-10-24 · Assessment-integrity containment for CETa v2.1 (review candidate)
- The October 23–24 whole-course v2.0 audit found that M29 and M30 mock item inventories share reused questions, and the external self-report form was treated as automatic readiness evidence. Stop false readiness-credit now while retaining all existing data.
- M29 remains an internal 100-item **practice rehearsal**, not a validated independent bank. Store new attempt provenance explicitly. M30 permits self-reported outside-practice tracking only, without awarding readiness Master-stage completion. Neither legacy practice score nor new self-reported outside result can be silently promoted into a readiness pass. The internal two distinct fresh 100-question scores ≥85% target is pending validation; ETA examination standards remain authoritative.
- Preserve historic M29 attempts, M30 reports, saved progress, Cloud Sync protocol 2, learner backups, exact question identities, and source data. Mark M29 and M30 Master stages pending—not lost—until technically reviewed evidence and real browser/assistive QA meet the gate.
- The CETa-only scope controls. Archival coequal-Career/31-week requirements are superseded, but university Grizzly crest, green-gold-cream identity, creed, pedagogical standards, official study guide, authentic source media, glossary, Focus Prep, and non-destructive preservation protections remain binding.
- This is a *contained repair candidate*, not the finished v2.1 assessment acceptance. Disjoint second-bank authoring, key/distractor review, objective evidence repair, real-device testing and final acceptance remain open.

'''
    return s.replace(marker,passage+marker,1)


NOTES='''# Alfred University AU-ESET 301 · v2.1 Assessment Integrity (Review Candidate)
**Date:** 2026-10-24. **Status:** Complete replacement files prepared, but not automatically committed or deployed; final certification-readiness acceptance is pending.

## Contained assessment claims
- M29's 100-question exercise remains a reused-instructional-question practice rehearsal. No historical or new M29 score can complete readiness mastery.
- M30's outside score is self-reported; it cannot complete readiness mastery. Existing records are preserved; new entries declare `readinessEligible:false`.
- Assessment Center displays **Pending**. Progress, Modules 29–30, and About all distinguish practice from validated evidence.
- M29 saves selected answers, restores them after reload, permits previous-ten navigation, numbers questions 1–100, and tags new rehearsal results with source/provenance.
- No changes to `course.js`, `course.json`, stored questions, answers, old scores, source IDs, Cloud Sync protocol 2, Grizzly branding, or unrelated modules. The PWA cache version advances.

## Not yet accepted
- Two genuinely independent, technically reviewed 100-item forms and complete on-platform second-exam experience.
- Question quality, actual shuffled option-position distributions, 60 missing objective question tags and mastery evidence.
- Required Study Guide/media/visual verification, browser refresh/resume, accessible interaction, offline transition, and live Cloud Sync tests.

ETA certification eligibility and exam pass rules are separate from Alfred's internal two × ≥85% practice target. No official ETA affiliation, accreditation, or certification outcome is claimed. This update is a safety/accuracy containment, **not a complete v2.1 readiness validation**.
'''

README='''ALFRED UNIVERSITY — v2.1 CETa ASSESSMENT INTEGRITY

This package generates COMPLETE GitHub root-level replacement files from the exact v2.0 repository commit audited October 24, 2026.

TO GENERATE THE REPLACEMENT FILES (MAC)
1. Unzip this patch kit.
2. Open Terminal in the unzipped folder.
3. Run: python3 apply_v2_1.py
4. Find the resulting ZIP in Downloads named: Alfred_v2_1_Ready_to_Upload.zip
5. Extract that output ZIP and upload its four files to the ROOT of the GitHub repository, choosing REPLACE for the existing three files.

DO NOT upload apply_v2_1.py or this patch kit to your site. Do not upload the output ZIP itself as a website file. Upload the FOUR files inside it.

FILES THAT WILL BE GENERATED
- ceta.js — complete updated runtime
- service-worker.js — revised cache identity
- ALFRED PROJECT GOVERNANCE.md — cumulative reconciliation + addendum
- ALFRED_RELEASE_NOTES_v2.1.md — honest release history

Do not run this kit against another repository version; source blob fingerprints are checked against the audited commit. The script only reads public files from GitHub and writes output under Downloads, not into your repository or browsers. No credentials or paid services needed.

IMPORTANT LIMIT: This is a contained v2.1 readiness HONESTY and exam-resume repair, NOT full exam-bank validation. A further separate question-bank/content audit will be necessary. Import/export records and learner progress are not modified by the kit.
'''


def main():
    print('Alfred University CETa · v2.1 containment patch')
    print('Reading fixed, previously audited v2.0 GitHub sources (read-only)...')
    source={name:get_exact_source(name) for name in EXPECTED_BLOBS}
    patched,changes=patch_runtime(source['ceta.js'])
    patched_sw=source['service-worker.js']
    old_cache='alfred-ceta-gold-batch-v2-0-20261023'
    if patched_sw.count(old_cache)!=1: raise RuntimeError('Unexpected service-worker cache version')
    patched_sw=patched_sw.replace(old_cache,'alfred-ceta-integrity-v2-1-20261024')
    files={
        'ceta.js':patched,
        'service-worker.js':patched_sw,
        'ALFRED PROJECT GOVERNANCE.md':governance_append(source['ALFRED PROJECT GOVERNANCE.md']),
        'ALFRED_RELEASE_NOTES_v2.1.md':NOTES,
    }
    try:
        p=__import__('subprocess').run(['node','--check'],input=patched,encoding='utf-8',capture_output=True,timeout=20)
    except (FileNotFoundError,TimeoutError):
        p=None
    if p is not None and p.returncode != 0: raise RuntimeError('Generated ceta.js failed JavaScript parser check:\n'+p.stderr)
    ROOT.mkdir(parents=True,exist_ok=True)
    for name,data in files.items(): (ROOT/name).write_text(data,encoding='utf-8')
    out=ROOT.parent/'Alfred_v2_1_Ready_to_Upload.zip'
    with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
        for name in files: z.write(ROOT/name,arcname=name)
    print('PATCH READY:',out)
    print('29 runtime edits: PASS. Source SHA-1 blob checks: PASS. Node JS syntax:', 'PASS' if p is not None else 'SKIPPED (node not found)')
    print('No original repository or user progress has been modified.')
    print('Upload the four replacement files inside the output ZIP to the GitHub repository root.')

if __name__=='__main__':
    try: main()
    except Exception as exc:
        print('SAFE STOP:',exc,file=sys.stderr)
        sys.exit(1)
