# Alfred AU-ESET 301 · v3.5 Academic and Assessment QA

**Baseline:** GitHub `e75512143627e42deec8cd307501fda084c18f76` (v3.4) · **Release gate:** GO for upload as a provisional learning improvement, **NO-GO for independent certification-readiness claims**.

## Core source invariants — PASS

| Check | v3.4 baseline | v3.5 | Result |
|---|---:|---:|---|
| Modules | 30 | 30 | PASS |
| Teaching page records and stable IDs | 373 | 373 | PASS |
| Existing scored-question placements, full objects and answer keys | 635 | 635 | PASS |
| Existing 60 candidate diagnostic prompts and answer keys | 60 | 60 | PASS |
| Existing readings and labs, IDs and ordering | preserved | preserved | PASS |
| New original form A questions | 0 | 100 | PASS |
| New original form B questions | 0 | 100 | PASS |
| New question IDs shared between forms | n/a | 0 | PASS |
| New questions with old question prompt high lexical similarity (>73 on RapidFuzz ratio) | n/a | 0 | PASS |
| Correct answer index distribution per form | n/a | 25 / 25 / 25 / 25 | PASS |
| New objective diagnostic grading and saved result route | unavailable | 60 | PASS |
| ETA objective crosswalk | 262 | 262 | PASS |
| Existing pages deepened with targeted first-principles explanations | — | 16 | PASS |
| Existing bundled 234-page Study Guide PDF | unchanged | unchanged | PASS |
| Progress schema/legacy keys and Cloud Sync protocol 2 | unchanged | unchanged | PASS |

## Executable test evidence

- **502 JavaScript runtime renderer and event-sequence checks passed**: all 373 teaching-page renders, 30 starts, 15 global routes, both full 10×10 new examination flows answered and scored 100%, archived rehearsal links, objective diagnostic answers recorded for all 60 gaps, progress and standards status.
- **Source ID and answer integrity:** all newly authored items have distinct 4-choice strings, index 0–3, a rationale, a tagged ETA objective, and a real teaching-page remediation link. The 100 target objectives span 28 teaching modules. New items explicitly have an `INTERNAL_STRUCTURAL_REVIEW_ONLY` editorial status.
- **Overlap screening:** all 200 new prompts have lower-than-73% RapidFuzz string similarity against all 635 historical placements; A/B forms also have no closely matching prompt above the 76% screen. This is a *lexical* test, not semantic or psychometric equivalence validation.
- **Math spot-checks:** selected calculations were independently hand recalculated for Ohm’s law, power, dB, RLC frequency, transformer ratios, binary conversion, Kirchhoff’s laws, RF wavelength, SWR, op-amp gain and service estimates. This is not an exhaustive independent answer-key review.
- **Browser limitation:** Chromium navigation timed out in the current execution environment. Mark direct live Pages browser tests, touchscreen navigation, offline cache migration, remote progress synchronization and assistive-technology QA as PENDING; the JS VM harness is not a substitute for those checks.

## Open academic issues — NOT COMPLETE

1. Obtain a qualified independent electronics educator/technician review of both 100-item banks and all 60 scored diagnostic items; replace ambiguous or weak distractors and validate answer rationales.
2. Complete passage-by-passage technical accuracy review of the entire Sixth Edition with special attention to 2025 ETA differences, obsolescent technology and safety advice; the prior 20 checkpoints were reviewed for topic fit, not full validity.
3. Calibrate exam balance and difficulty to any official, verified ETA topic-weighting specification. No topic-weight percentage was invented; both forms include one distinct question per selected 100 objectives, and still do not test all 262 in a single run.
4. Browser/device/Cloud Sync acceptance in v4.0, with actual iOS testing and migration from prior service-worker caches.
5. The new forms are not time-limited by the site; for realistic practice use an external 120-minute timer.

**Readiness adjudication:** `False`. Archived answers, self-reported scores, the new form results, and the 60 diagnostic results are saved learning evidence only. No verified certification-readiness pass is granted.
