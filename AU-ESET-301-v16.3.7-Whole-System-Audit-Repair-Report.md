# AU-ESET 301 v16.3.7 — Whole-System Acceptance Audit Repair Report

**Date:** September 18, 2026  
**Course release:** v16.3  
**Runtime:** v16.3.7  
**Scope:** Three bounded material defects from the completed Parts 1–8 whole-system acceptance audit

## Repair result

The repair changes no accepted lesson, lab, calendar identity, Teaching Media assignment, Study Guide assignment, progress identity, Cloud Sync protocol, or evidence revision. It addresses only the three findings that prevented unconditional whole-system acceptance.

### 1. CETa readiness independence

The former policy counted two Alfred 100-question runs at 85%+ as separate readiness evidence even though the reviewed bank necessarily reuses substantial material. v16.3.7 replaces that claim with a dual-source gate: one current full-length Alfred CETa run at 85%+ plus one separate current independent CETa practice assessment at 85%+ from outside the Alfred question bank. Repeat Alfred forms remain practice but do not count as the independent second gate.

### 2. Automatic mastery progression

The former automatic status model required Intermediate/Advanced question evidence even though the active CETa bank is Foundation-classified. v16.3.7 does not relabel questions or manufacture artificial difficulty. Automatic status now uses validated accuracy, repeated sessions, retention streak, recency, and distinct reviewed-bank breadth. Standards with fewer than two distinct current reviewed items are explicitly labeled **Evidence Limited** and cannot automatically claim Mastered until the bank expands. Subject-specific semantic/performance evidence remains separate and is not used to inflate auto-graded status.

### 3. Project 2 identity

The Career Readiness checklist is now canonical: **Project 2 = Automated Hardware Validation / HIL**. The Project Center matches that identity; **Project 3 = Custom PCB** as a strong differentiator; the former Embedded Control System concept remains available only as an optional long-term extension.

## Regression boundary

Preserved without redesign: v16.3 curriculum, 62 primary lessons, 24 labs, 31-week sequence, accepted v16.3.6 Teaching Media pathway, evidence revision 16.2, calendar dates/event IDs/UIDs, Study Guide assignments, local/cloud progress identities, Cloud Sync protocol 2, and the course's CETa/Career balance.

## QA

The packaged repair is checked for JavaScript syntax, JSON validity, removal of superseded two-Alfred-mock readiness language from active runtime files, removal of the impossible Intermediate/Advanced prerequisite from automatic mastery-state logic, consistency between Standards and Analytics, canonical Project 2 naming, and service-worker/build/release-note synchronization.
