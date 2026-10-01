# AU-ESET 301 v16.3.90-H4 — Week 3 Multimodal Content Quality QA

**Date:** October 1, 2026  
**Scope:** Week 3 content/media only — CETa + Career page-level teaching quality, videos/demonstrations, source-authentic visuals, bounded reading, retrieval/application, and regressions.  
**Deployment status:** **CANDIDATE ONLY — NOT YET DEPLOYED / NOT YET BROWSER-ACCEPTED**

## Verdict

**INTERNAL QA: PASS**

The H4 candidate satisfies the new content-priority acceptance rule at data/runtime level. All 16 Week 3 teaching pages now contain a coherent multimodal learning path instead of concentrating external media on CETa while leaving Career media-empty. This is not final Week 3 acceptance until the uploaded GitHub Pages artifact and Will’s real browser confirm the new page-level content actually loads.

## Acceptance metrics

| Check | Result |
|---|---:|
| JavaScript syntax | 110/110 PASS |
| Week 3 CETa teaching pages | 8/8 |
| Week 3 Career teaching pages | 8/8 |
| Pages with source-authentic visual/diagram | 16/16 |
| Pages with bounded video/demonstration | 16/16 |
| Pages with bounded reading/reference | 16/16 |
| Pages with retrieval/application action | 16/16 |
| Exact Week 3 point-of-use media placements | 32 |
| Video/demonstration placements | 16 |
| Reading/reference placements | 16 |
| Unique sources used by page placements | 19 |
| Week 3 mastery regression | 14 questions = 7 CETa + 7 Career PASS |
| LAB-003 knowledge regression | 6 questions = 3 CETa + 3 Career PASS |
| LAB-003 evidence gate | 10 checkpoints PASS |
| Week 2 mastery regression | 12 questions = 6 CETa + 6 Career PASS |
| Cloud Sync protocol | 2 preserved |
| Static Learn H4 loader | PASS |
| Service-worker H4 injection/cache transition | PASS |
| Service-worker precache targets | 208/208 PASS |

## 16-page multimodal matrix

Every row below also retains substantive Alfred instruction, the accepted H3 source-authentic visual layer, and a page-specific retrieval/application action. The external sources are complementary representations, not substitutes for Alfred teaching.

| Track | Teaching page | Video / demonstration | Bounded reading / reference |
|---|---|---|---|
| CETa | Start with the question, not the instrument | Afrotechmods multimeter demonstration | All About Circuits Test & Measurement reading |
| CETa | Analog and digital meters: operation, construction, and loading | Afrotechmods multimeter demonstration | Fluke comprehensive multimeter guide |
| CETa | DMM modes are different measurement circuits | Afrotechmods multimeter demonstration | Fluke DC-voltage procedure |
| CETa | Bench supply: voltage setting plus current limit | Keysight CV/CC Lesson 4 | Keysight “Understanding CV and CC” visual reading |
| CETa | Oscilloscope: turn voltage over time into a readable picture | Afrotechmods oscilloscope demonstration | Tektronix XYZs primer |
| CETa | Probe and reference discipline | Tektronix passive-probe compensation video | Tektronix ABCs of Probes |
| CETa | Trigger: make the event repeat in the same place | Tektronix trigger video | Tektronix XYZs trigger section |
| CETa | Measurements can change or misrepresent the circuit | Keysight measurement-uncertainty video | Tektronix probe-loading application note |
| Career | Start with a measurable question and choose only a tool you understand | Afrotechmods multimeter demonstration | All About Circuits Test & Measurement reading |
| Career | Use the DMM and supply for slow or static evidence first | Keysight CV/CC Lesson 4 | Fluke comprehensive multimeter guide |
| Career | Learn the scope on a known waveform before troubleshooting an unknown one | Tektronix passive-probe compensation video | Tektronix setup/probe primer |
| Career | Reference, grounding, loading, and bandwidth can change the result | Tektronix passive-probe compensation video | Tektronix probe-loading application note |
| Career | WE DO → YOU DO: choose measurements that separate hypotheses | Afrotechmods oscilloscope demonstration | U.S. Navy NEETS Module 16 — bounded test-equipment portion |
| Career | Preserve settings, uncertainty, and context so another technician can reproduce the result | Keysight measurement-uncertainty video | NIST Measurement Uncertainty introduction |
| Career | Before trusting the DUT result, prove the test asset is fit to use | Keysight out-of-cal pass/fail case-study video | NIST Metrological Traceability FAQ |
| Career | Decide whether the measurement is good enough for the conclusion | Keysight traceability video | NIST traceability / fitness-for-purpose rule |

## New authoritative sources added in H4

- **Tektronix — How to Compensate a Passive Probe** — 1:09 focused manufacturer demonstration; used for known-reference and probe-validity pages. `https://www.tek.com/en/video/how-to/how-to-compensate-a-passive-probe`
- **Tektronix — How Oscilloscope Probes Affect Your Measurement** — manufacturer application note on input resistance, input capacitance, loading, and signal disturbance. `https://www.tek.com/en/documents/application-note/how-oscilloscope-probes-affect-your-measurement`
- **Keysight — 4 Ways to Build Your Power Supply Skill Set** — Tip 1 “Understanding CV and CC” plus operating-locus figure. `https://www.keysight.com/us/en/assets/7018-06003/ebooks/5992-2716.pdf`
- **Keysight — Measurement Uncertainty: How Accurate?** — 12:32 calibration/metrology video from Keysight’s calibration series. `https://www.youtube.com/watch?v=p_BHEWzP11A`
- **Keysight — Traceability: Why Is It Important?** — 8:32 calibration/metrology video. `https://www.youtube.com/watch?v=fvb2lDAjXTI`
- **Keysight — Out-of-Cal Instruments Cause Bad Pass/Fail Decisions** — 6:24 case-study video showing how test-asset condition can reverse a DUT conclusion. `https://www.youtube.com/watch?v=wGss-Elbf8E`
- **NIST — Metrological Traceability: FAQ and Policy** — authoritative reading used for test-asset validity and fitness-for-purpose decisions. `https://www.nist.gov/metrology/metrological-traceability`
- **NIST — Measurement Uncertainty** — authoritative introductory measurement-science reading. `https://www.nist.gov/itl/sed/topic-areas/measurement-uncertainty`

These were checked against current publisher/government pages on 2026-10-01. H4 also deliberately reuses already-accepted canonical Fluke, Tektronix, All About Circuits, Afrotechmods, Keysight, and NEETS sources when reuse is semantically exact.

## Content-governance decisions

- **No filler-media rule:** H4 uses repeat sources only where the exact source genuinely supports the page. Page coverage is not achieved by adding unrelated links.
- **Alfred remains the professor:** the core lesson still carries the beginner-first technical teaching. Videos/readings add visual demonstration, authentic manufacturer context, or professional measurement language.
- **Career parity:** Career now receives the same page-level multimedia scrutiny as CETa; all 8 Career pages have their own video + reading pair in addition to their existing real occupational visuals, technician task/demo, and physical-vs-simulation boundary.
- **No premature specialist-tool dump:** spectrum analyzers, ESR/LCR meters, variable line-level AC, signal generators, decade boxes, and electronic loads remain outside Week 3 core point-of-use media.
- **Study Guide:** no new required CETa Study Guide pages are forced into Week 3. Existing Chapter 19 contextual Study slices remain optional and point-of-use.

## Runtime / cache integrity

- `learn.html` statically loads `week3-media-quality-v16.3.90-h4.js?v=16.3.90-H4` after the H3 final Week 3 layer.
- The service worker caches the H4 asset, uses a new H4 cache namespace, and injects exactly one H4 tag after the H3 Week 3 layer when a stale/static page does not already contain it.
- Service-worker navigation decoration was executed in Node against the real H4 `learn.html`; H4 remained single-loaded and correctly ordered.
- All 208 service-worker precache targets resolve to real repository files after query stripping.
- `build-info.json` and service-worker build-info decoration retain `cloudSyncProtocol: 2`.

## Preserved H3 acceptance contracts

- Week 3 mastery remains **14 = 7 CETa + 7 Career**.
- LAB-003 knowledge remains **6 = 3 CETa + 3 Career**.
- LAB-003 retains the **10-checkpoint evidence gate** and physical-versus-simulation truth boundary.
- Week 2 regression remains **12 = 6 CETa + 6 Career**.
- Existing Week 3 source-authentic visuals remain **8/8 CETa + 8/8 Career**.
- Cloud Sync protocol remains **2**.

## Remaining acceptance gate

After upload: verify the exact main commit, successful GitHub Pages run, exact Pages artifact, H4 build/cache metadata, and the deployed H4 runtime. Then Will should open representative Week 3 CETa and Career section pages in the real browser and confirm the video + reading cards actually appear. Only then may H4 / Week 3 be frozen.


## Final pre-package execution (2026-10-01)

The final candidate tree was re-executed after the H4 layer, service-worker, build metadata, and release-note edits were applied.

- 110/110 top-level JavaScript files pass `node --check`.
- The H4 layer executes against the actual Learn script order and reports `VERIFIED_PASS`.
- All 16 teaching pages resolve exactly one video/demonstration and one written reading/reference at point of use.
- Every H4 placement has a matching Week 3 media item and source record; every written placement has literature metadata; no placement is filtered out by the current Teaching Media architecture.
- CETa source-authentic visuals remain 8/8 and Career source-authentic visuals remain 8/8.
- The actual assessment selector was run for 100 attempts each: Week 2 stays 12 = 6/6, Week 3 stays 14 = 7/7, and LAB-003 stays 6 = 3/3.
- LAB-003 retains 10 evidence checkpoints.
- H4 service-worker test: 208/208 precache targets exist, static Learn keeps exactly one H4 tag, stale H3 Learn receives exactly one H4 tag, H4 remains ordered after the canonical H3 Week 3 layer, and decorated build info retains Cloud Sync protocol 2.
- New H4 source URLs were rechecked on 2026-10-01. Tektronix probe-compensation/probe-loading pages, the Keysight CV/CC eBook page, NIST traceability/uncertainty pages, and the Keysight calibration-video series all resolve from their publishers. The Keysight calibration series lists the exact 12:32 measurement-uncertainty, 8:32 traceability, and 6:24 out-of-cal pass/fail videos used by H4.

**Pre-package verdict: PASS.** Deployment and real-client confirmation remain separate acceptance gates.

## Final checksum / package integrity

- Package manifest covers the 8 core H4 replacement/content files; the repository-wide ledger is separate by governance design.
- Final repository checksum ledger contains **454 file entries** and validates **454/454 PASS** against the H4 candidate tree.
- `SHA256SUMS.txt` remains the complete repository-wide ledger; `PACKAGE_SHA256SUMS.txt` remains package-scoped and does not replace it.
