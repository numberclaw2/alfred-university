# AU-ESET 301 v16.3.64 - Current Document, Resource, and Semantic Verification

**Release:** v16.3.64 Document System Refresh  
**Core curriculum:** 16.3 (preserved)  
**Cloud Sync protocol:** 2 (unchanged)  
**Purpose:** Replace stale learner-facing documentation and stale "Current" labels without rewriting historical QA evidence.

## Acceptance verdict

**PASS** - current learner-facing documents now describe the accepted live system, historical reports remain frozen, and the Documents page separates governing documents, current technical baselines, and archived/superseded evidence.

## Current governing documents

- Syllabus & Student Handbook - rebuilt for the current Classroom / Study / Calendar / Practice / Progress / Mastery workflow.
- Academic System Guide - rebuilt from the v16.3.64 runtime behavior, including split resume, Focus Prep, Study week selection, bundled CETa Study Guide behavior, and v16.3.63 completion truth.
- Learning Resource Manual - old MUST/SHOULD/STRETCH taxonomy retired; current roles are Classroom Required / Study / Engineering Library.
- Assignment, Laboratory & Office Hours Manual - current evidence templates; no parallel hours log, spreadsheet gradebook, or manual mastery rating.
- Embedded Career Transition Readiness Checklist - rebuilt from all 81 current v16.3.42 Career standards; 81/81 is explicitly not an application blocker.
- Current Curriculum & Instruction Governance Plan - concise current authority layer over the frozen 62-lesson v16.3 detailed baseline.

## Current resource architecture

| Metric | Current accepted value |
| --- | ---: |
| Teaching Media assignments | 347 |
| Classroom Required | 247 |
| Study | 81 |
| Engineering Library | 19 |
| Unique source IDs | 322 |
| Canonical sources | 319 |
| Target teaching sections | 491 |
| Inline placements | 1,021 |
| Canonical video resources | 120 |
| Canonical non-video resources | 131 |
| Outside-literature sources in central index | 152 |
| Total central reading records | 214 |
| Required contradictions | 0 |
| Missing backlinks | 0 |
| Required week misalignments | 0 |

Current resource architecture remains governed by the v16.3.60 combined multimodal QA repair. v16.3.64 changes documentation, not the underlying 347-assignment resource architecture.

## CETa Study Guide

- 64 Required printed pages across 14 weeks.
- 133 Study/Review printed pages.
- 27 Reference/Historical printed pages.
- 17 weeks with no new Required Study Guide reading.
- Verified printed-page to bundled-PDF mapping remains **+10**.
- Current ETA scope, formulas, errata, and current official guidance control conflicts with older book content.
- Opening/reading the Study Guide does not by itself establish mastery or completion.

## Semantic coverage refresh

The old v16.3 semantic matrix contained 340 rows: **262 CETa + 78 Career**. That file remains a historical baseline.

The current v16.3.64 matrix contains **343 rows: 262 CETa + 81 Career**. CETa rows preserve the accepted v16.3 semantic baseline. Career rows are regenerated from the authoritative v16.3.42 81-standard provenance / prerequisite / instructional-home map.

Files:
- `AU-ESET-301-v16.3.64-Semantic-Coverage-Matrix.csv`
- `AU-ESET-301-v16.3.64-Semantic-Coverage-Matrix.json`

## CETa readiness rule

Current internal readiness is dual-source:

1. One current full-length 100-question Alfred CETa practice run at **>=85%**.
2. One separate current **independent ETA/CETa practice assessment** at **>=85%** from outside the Alfred question bank.
3. Repair weak competencies before calling readiness green.

This supersedes older learner-facing documents that required two Alfred runs.

## Document-history policy

Historical acceptance / QA reports are not rewritten. They remain evidence of what was tested at their own release. The Documents page now labels them as baseline or historical rather than calling them globally current.

The 300+ page `AU-ESET-301-v16.3-Curriculum-and-Instruction-Plan.docx` remains the frozen detailed lesson baseline. v16.3.64 adds a concise current governance plan rather than mutating that historical baseline.

## Style / accessibility verification

New learner-facing documents use a common Alfred green/gold visual system, real heading styles, repeated table headers on data tables, consistent headers/footers, and image alt text. Decorative metadata/callout tables are intentionally not treated as semantic data-table headers.

## Files added or replaced by this document refresh

Current learner-facing replacements:
- `Alfred University - AU-ESET 301 - Syllabus and Student Handbook.pdf`
- `Alfred University - AU-ESET 301 - Academic System Guide.pdf`
- `Alfred University - AU-ESET 301 - Learning Resource Manual.pdf`
- `Alfred University - AU-ESET 301 - Assignment and Lab Manual.pdf`
- `Embedded Career Transition Readiness Checklist.pdf`

Current technical additions:
- `AU-ESET-301-v16.3.64-Current-Curriculum-and-Instruction-Plan.docx`
- `AU-ESET-301-v16.3.64-Semantic-Coverage-Matrix.csv`
- `AU-ESET-301-v16.3.64-Semantic-Coverage-Matrix.json`
- `AU-ESET-301-v16.3.64-Document-and-Resource-Verification.md`

Historical baseline files remain in place and are relabeled on the Documents page rather than rewritten.
