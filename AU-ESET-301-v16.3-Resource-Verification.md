# AU-ESET 301 v16.3 — Teaching Media Resource Verification
## Runtime candidate: v16.3.6 post-audit corrective

**Course release:** v16.3  
**Runtime candidate:** v16.3.6  
**Evidence revision:** 16.2  
**Status:** **FINAL RE-AUDIT PENDING — DO NOT CLAIM 31/31 PASS YET**

## What the first post-repair audit proved

The first post-repair audit executed the actual GitHub runtime composition in production load order:

1. `curriculum-data.js`
2. `teaching-media-overrides.js`
3. `teaching-media-self-reliance.js`
4. `teaching-media-content-completion.js`

The uploaded candidate structurally produced 31 modules, 306 effective Teaching Media cards, 271 registered sources, zero unresolved effective source IDs, zero duplicate source cards, complete required card metadata, and idempotent execution. Protected prior-PASS weeks remained unchanged by the content-completion overlay.

## Residual defects found by that audit

The audit did **not** rubber-stamp the candidate. It found five residual issues:

- **Week 1 — MATERIAL DEFECT:** the v16.3 semantic matrix explicitly requires ESD-control instruction, while Week 1 had electrical/PPE safety but no direct ESD-control resource.
- **Week 7 — MATERIAL DEFECT:** the semantic matrix places JFET/MOSFET/CMOS/IGBT/Darlington and SCR/DIAC/TRIAC/diode-family recognition in Week 7, while the strongest focused instruction was assigned only in Week 8.
- **Week 12 — MATERIAL DEFECT (metadata):** the Week 12 GitHub Skills card still implied command-line `status`/history capability beyond what the introductory GitHub Skills pathway actually teaches.
- **Week 27 — MATERIAL DEFECT (resource mismatch):** the NI card claimed a coherent VeriStand validation workflow but linked to a free-trial page instead of the instructional workflow.
- **Week 28 — MATERIAL DEFECT:** service-work additions covered work orders, estimates, parts, support flow and service literature, but explicit productivity calculation and project-management/technical-planning instruction were still insufficient.

## Corrective repair applied

This candidate repairs those specific findings:

- Week 1 now assigns NASA-HDBK-8739.21 ESD-control instruction.
- Week 7 now directly assigns the verified focused semiconductor-family resources required by its own mapped semantic rows, while Week 8 keeps its application/troubleshooting progression.
- Week 12's GitHub Skills card is narrowed to repository/branch/commit/pull-request/merge workflow; command-line Git remains explicitly taught in Weeks 22–23.
- Week 27 now uses NI's actual **Creating Real-Time Stimulus Profiles in NI VeriStand** tutorial, which explicitly teaches Setup/Main/Cleanup, hardware I/O, data logging, pass/fail analysis and automated test sequencing.
- Week 28 now explicitly teaches a defined service-resource utilization calculation and NASA technical planning: scope, work breakdown, schedule/dependencies, resources, responsibilities, risk/contingency, status/reporting and replanning. The field-service card also explicitly compares field constraints with a controlled shop/bench route.

## Acceptance rule

The corrective candidate must now be uploaded and the **entire** 31-week standalone Teaching Media audit rerun against the exact GitHub runtime. No final `PASS`, no subject-level YES, and no "self-reliance complete" claim is authorized until that rerun finds **zero BLOCKER and zero MATERIAL DEFECT** results.

Hands-on labs, projects, measurements, soldering/rework, coding, debugging, fault injection, assessments and physical evidence remain required and are not replaced by Teaching Media.
