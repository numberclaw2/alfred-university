# AU-ESET 301 v16.3.2 Final Runtime Acceptance Report

> **HISTORICAL / SUPERSEDED DEPLOYMENT RECORD:** This report documents the v16.3.2 runtime state *before* the final mobile visual acceptance repair. References below to build `v16.3.2-20260915T134653Z-8496298d62` or service-worker cache `alfred-u-v16-3-2` are historical evidence, not current deployment instructions. The current final production identifiers are build `v16.3.2-final-mobile-visual-20260915`, presentation patch `mobile-visual-readability-final`, and service-worker cache `alfred-u-v16-3-2-mobile-visual-final`. See `AU-ESET-301-v16.3.2-FINAL-MOBILE-VISUAL-REPAIR.md` and current `build-info.json` for the final release state.

**Course curriculum release:** 16.3 — Final Instructional Depth  
**Runtime patch:** 16.3.2  
**Reviewed objective-evidence revision:** 16.2  
**Cloud Sync protocol:** 2  
**Audit date:** 2026-09-15  
**Baseline:** current v16.3.1 merged release  
**Package disposition:** **PASS — v16.3.2 overlay ready for upload**  
**Live GitHub deployment:** **NOT YET VERIFIED — the overlay has not been published from this environment**

## A. Scope and release boundary

v16.3.2 is a surgical runtime/deployment/documentation repair. It does **not** reopen the accepted v16.3 instructional rebuild. Lesson instructional data, the 62 instructional SVGs, calendar/course identities, lab definitions, semantic coverage definitions, Cloud Sync protocol code, progress-key structure, project definitions, and the 329-page curriculum DOCX remain unchanged from the accepted v16.3.1 baseline.

The patch repairs three cold-audit findings:

1. learner-facing correct-answer positions in objective assessments were measurably biased;
2. the deployed release did not have a simple network-fetched build marker for authoritative live-version verification; and
3. the historical v15.8 Academic System Guide could surface through Search without sufficiently strong historical context.

The four version identities remain deliberately distinct:

- **Curriculum:** 16.3
- **Runtime patch:** 16.3.2
- **Reviewed objective bank evidence revision:** 16.2
- **Cloud Sync protocol:** 2

## B. Assessment answer-position repair

The canonical reviewed bank is not rewritten. Question IDs, prompts, four choices, correct choice content, explanations, standards, question selection, and question order remain stable. The runtime now generates a separate deterministic constrained-random correct-position sequence per form/attempt and independently shuffles distractors. It rejects conspicuously concentrated sequences and same-letter runs longer than three, but it deliberately does **not** impose an exact A/B/C/D quota that a learner could exploit near the end of a form. The canonical question objects are not mutated.

### Fresh acceptance test

Every supported non-disabled assessment form was generated for 20 attempts:

- **Supported forms:** 151
- **Generated forms:** 3,020
- **Selected questions:** 21,980
- **Generation/integrity errors:** 0

First attempts across all forms:

| Position | Count | Share |
|---|---:|---:|
| A | 284 | 25.842% |
| B | 242 | 22.020% |
| C | 299 | 27.207% |
| D | 274 | 24.932% |

Across all 20 attempts:

| Position | Count | Share |
|---|---:|---:|
| A | 5,407 | 24.600% |
| B | 5,438 | 24.741% |
| C | 5,596 | 25.460% |
| D | 5,539 | 25.200% |

The aggregate distributions are consistent with a uniform four-position process rather than a persistent source-position preference (Pearson chi-square versus 25/25/25/25: first attempts **p≈0.095**; all 20 attempts **p≈0.240**). This is a descriptive audit check, not a psychometric claim.

Additional pattern checks:

- maximum run of the same correct-answer letter across all 3,020 audited forms: **3**;
- source-position A was displayed as A/B/C/D **5,407 / 5,438 / 5,596 / 5,539** times across the 20-attempt audit;
- no fixed per-form quota is used; answer counts vary from attempt to attempt;
- largest observed single-position counts by common form size were **3/5, 5/12, 11/30, 14/40, and 35/100**;
- Week 6's 12-question browser-rendered form showed **2 / 2 / 3 / 5** correct positions with sequence `DABDCDBCDACD`, demonstrating that the runtime is not enforcing a predictable 3/3/3/3 quota;
- no empty choices, duplicate displayed choices, invalid correct indices, explanation mutation, standards-tag mutation, or source/correct-content mismatch was found.

The 62 integrated in-lesson MCQs use the existing Classroom display shuffle rather than the reviewed-bank engine. Their displayed correct positions are **A 19 / B 13 / C 12 / D 18** (30.65% / 20.97% / 19.35% / 29.03%); the four-position distribution is consistent with chance at this sample size (Pearson chi-square **p≈0.496**). All 62 preserve the source correct-choice mapping and render four non-empty choices.

**Verdict:** **PASS — the audited forms show no practically exploitable answer-position bias or fixed answer-letter quota.**

### Selection/history compatibility

The v16.3.1 and v16.3.2 engines were compared for all 151 forms at attempts 1, 2, 5, and 10: **604 comparisons**. Question selection and question order were identical in every comparison. Only learner-facing choice placement changed.

**Verdict:** **PASS — form/question identity compatibility preserved.**

## C. Assessment and mastery regression

- Active reviewed bank questions: **223**.
- Historical v16.1 generic filler questions: **186**, all retired from creation/load time.
- Semantic technical tasks: **87**.
- Integrated lesson MCQs: **62**.
- Integrated model-answer short responses: **62**.
- Practical/lab routes: **24 labs** plus project/gate evidence.
- Retired or `masteryEvidence=false` questions selected into audited forms: **0**.

The evidence revision remains intentionally **16.2**. A browser-level Assessment Center test with one 88% current `16.2` full-length run plus one 90% legacy `15.8` run correctly reports **1 of 2 qualifying current runs**, proving legacy evidence is not silently counted as a current qualifying run.

Standards/Analytics/Progress continue to derive the current evidence revision from assessment metadata. A synthetic standard with one current reviewed objective-bank item cannot reach automatic `Mastered` merely because a semantic task is mapped to it.

Evidence remains separated by type:

- **Auto-graded objective evidence:** reviewed bank and integrated lesson MCQs.
- **Rubric/self-reviewed semantic evidence:** constructed responses / teach-backs / technical evidence tasks.
- **Practical/physical evidence:** labs, captures, code, workmanship, measurement, and physical demonstrations where required.

**Verdict:** **PASS.**

## D. Deployment verification marker and service-worker behavior

A new network-verification file is added: `build-info.json`.

It contains only public non-sensitive release metadata:

```json
{
  "courseRelease": "16.3",
  "runtimePatch": "16.3.2",
  "evidenceRevision": "16.2",
  "cloudSyncProtocol": 2,
  "build": "v16.3.2-20260915T134653Z-8496298d62"
}
```

The service-worker cache is now **`alfred-u-v16-3-2`**. On activation it deletes only older `alfred-u-*` Cache Storage entries and claims clients. It does **not** clear localStorage, IndexedDB, progress, assessment history, notes, sync keys, or Cloud Sync data.

`build-info.json` is intentionally excluded from the offline CORE cache and is handled network-only with `cache: 'no-store'`, so an old application cache cannot masquerade as the current deployment marker.

**Package verdict:** **PASS.**

**Live GitHub verdict:** **NOT YET VERIFIED.** The public GitHub/Pages snapshots available during this run were stale and predated this patch. This environment did not publish the overlay. After upload, live acceptance requires the public `build-info.json` to report runtime patch `16.3.2` and the raw/public service worker to report `alfred-u-v16-3-2`.

## E. Historical-document/search repair

The historical Academic System Guide is retained unchanged for provenance. It is now explicitly classified as:

**Historical platform guide — superseded for current operations by the v16.3 Classroom and v16.3.2 runtime.**

Search results from that document receive a visible warning:

**Historical document — not current operating instructions. Use the live Classroom, current Assessment Center, Progress, and Deployment pages for current workflow.**

Search QA was run for current/release/revision and old-version phrases including `v15.8`, `v16.1`, `v16.2`, `v16.3`, `v16.3.1`, and `v16.3.2`. Historical content remains discoverable, but obsolete operational wording is contextualized instead of presented as current guidance.

The prior `00_V16_3_1_GITHUB_HOTFIX_UPLOAD.txt` and `AU-ESET-301-v16.3.1-GitHub-Runtime-Hotfix-Report.md` are also retained but now carry explicit **historical/superseded by v16.3.2** notices so a repository visitor cannot reasonably mistake them for the current update procedure.

**Verdict:** **PASS.**

## F. Full static/runtime regression

Fresh package checks:

- HTML pages: **25**.
- Production JavaScript files: **24 / 0 syntax failures**.
- Missing local references: **0**.
- Broken same-page anchors: **0**.
- Duplicate HTML IDs: **0**.
- Missing CSS references: **0**.
- Missing manifest assets: **0**.
- Lesson SVGs: **62 / 62 present**.
- `instructional-completion.js` in current learner path: **absent**.
- Current service-worker cache: **`alfred-u-v16-3-2`**.
- `build-info.json`: valid and network-only.
- Cloud Sync Worker/protocol-2 configuration: preserved.

All 25 HTML pages were initialized in the browser-like runtime with **0 meaningful page errors and 0 application console errors**. The isolated local-file QA harness can emit a localStorage security warning because browser local-file storage is intentionally unavailable in that harness; this is not a site runtime defect.

Representative lesson rendering was rechecked at mobile, tablet, and desktop widths for Weeks 1, 12, 16, 18, 20, and 27. In all 18 cases the document scroll width equaled the viewport. The off-canvas hidden More-navigation menu remains positioned outside the viewport by design and does not create document horizontal overflow.

**Verdict:** **PASS locally/package.**

## G. Protected instructional/course regression

Protected artifacts were byte-compared against v16.3.1. **No protected instructional/course artifact changed.** In particular, the patch does not alter:

- `curriculum-data.js` / integrated lesson instructional data;
- any of the **62 lesson SVGs**;
- `course-data.js` event identities;
- the simplified ICS calendar;
- `practical-completion.js` lab/gate definitions;
- `semantic-repair.js` semantic coverage/task definitions;
- `progress.js` progress-key structure;
- `site.js`, `study.js`, `academic.js`, or project definitions;
- the v16.3 curriculum DOCX.

A fresh lesson-content regression still reports:

- **31 weeks / 62 primary lessons**;
- **31 CETa + 31 Career lessons**;
- structural lesson issues: **0**;
- **62 unique instructional visuals / 0 missing**;
- two worked examples, three concrete guided tasks, two misconception/repair pairs, two checks, a changed independent scenario, specific connection, and specific teach-back per lesson;
- anti-template comparison across all **1,891 lesson pairs**: mean **6.229%**, median **4.882%**, highest **47.32%** for the legitimately overlapping Week 10 amplifier/op-amp theory and troubleshooting pair;
- duplicated long technical sentences of 20+ normalized words across lessons: **0**;
- duplicated teaching paragraphs of 40+ words: **0**.

The stricter independent substantive-word recount remains **942 minimum / 1,080 median / 1,234.8 mean / 2,582 maximum** after excluding metadata, resource lists, semantic-task rubric language, and old completion scaffolding. The instructional curriculum itself is unchanged from the accepted v16.3 release.

**Verdict:** **PASS.**

## H. CETa/Career, labs, gates, balance, and calendar regression

Fresh runtime data verification:

- CETa standards: **262**.
- Career standards: **78**.
- Semantic sections/tasks: **87 / 87**.
- Invalid semantic tasks: **0**.
- Invalid semantic standard routes: **0**.
- Labs: **24**.
- Week 5 foundational gate: preserved.
- Week 12 solder/rework/ESD gate: preserved.
- Week 18 cumulative STM32 → SWD → UART → I²C/SPI → logic analysis → reversible fault → diagnosis → correction → nominal/recovery retest → documentation gate: preserved.
- Weeks 21–23: two separate current 100-question CETa readiness runs at Alfred's internal **≥85%** target: preserved.
- Week 30 bridge-career green-light: preserved.
- Weighted CETa time: **2,790 minutes**.
- Weighted Career time: **2,790 minutes**.
- Calendar: **125 events / 125 unique event IDs**.
- ICS: **125 VEVENTs / 125 UIDs / 125 unique UIDs**.
- Malformed historical AST/practice wording in current release text: **0**.

**Verdict:** **PASS.**

## I. DOCX disposition

Per the repair mandate, the 329-page v16.3 Curriculum & Instruction Plan was **not regenerated**, because no instructional content changed. It remains byte-identical to the accepted v16.3.1 copy, so the prior complete render/visual review applies to the exact file carried forward.

Known accessibility result remains reported without concealment: **0 high / 921 medium / 0 low**. The medium findings are layout/callout-table header-structure warnings, not newly introduced runtime defects.

**Verdict:** **PASS — no curriculum-document churn required.**

## J. Final cold acceptance verdicts

| Area | Verdict |
|---|---|
| Actual lesson teaching | **PASS** |
| 62-lesson depth | **PASS** |
| Anti-template quality | **PASS** |
| Visual instruction | **PASS** |
| CETa semantic completeness | **PASS** |
| Career/embedded preparation | **PASS** |
| Assessment integrity | **PASS** |
| Labs/gates | **PASS** |
| 50/50 balance | **PASS** |
| Calendar/history preservation | **PASS** |
| Cloud Sync compatibility | **PASS** |
| Website/runtime integrity | **PASS locally/package** |
| Mobile/responsive QA | **PASS** |
| DOCX/site instructional consistency | **PASS** |
| Package readiness | **PASS** |
| Live GitHub deployment | **NOT YET VERIFIED** |

## Final decision

**PACKAGE READY — PASS.** The v16.3.2 runtime/deployment overlay fixes the answer-position bias, adds a non-cached public deployment marker, and prevents stale historical operating instructions from masquerading as current guidance while leaving the accepted instructional course untouched.

**LIVE GITHUB DEPLOYMENT — NOT YET VERIFIED.** This report deliberately does not convert a correct local package into a claim about the public site. After the overlay is uploaded and GitHub Pages finishes deploying, verify the public `build-info.json`, raw/public `service-worker.js`, and live Classroom/Assessment pages before declaring the deployed site accepted.
