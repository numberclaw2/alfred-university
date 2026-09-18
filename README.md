# Alfred University — AU-ESET 301 v16.3

AU-ESET 301 is a fictional, university-style independent-study environment built around two equal goals:

1. Prepare for the current ETA Associate Certified Electronics Technician (CETa) competency scope.
2. Build demonstrable electronics, hardware-test, and embedded-systems skill for an electronics / embedded career transition while continuing school.

It is not an accredited university, an ETA-endorsed course, an official exam, or a guarantee of certification or employment.

## v16.3.6 final-audit candidate

The accepted instructional curriculum remains **v16.3**. Runtime candidate **v16.3.6** adds the targeted Teaching Media content-completion layer discovered necessary by the adversarial audit of v16.3.5.

**Acceptance status:** final 31-week standalone-media audit pending. Do not describe v16.3.6 as accepted or 31/31 PASS until that audit and final regression are complete.

Current candidate markers:

- Course release: `16.3`
- Runtime patch: `16.3.6`
- Objective evidence revision: `16.2`
- Cloud Sync protocol: `2`
- Build: `v16.3.6-teaching-media-content-completion-20260918`
- Schedule revision: `2026-09-16-week1-reset`
- Teaching Media revision: `2026-09-18-content-completion-candidate`
- Resource verification revision: `2026-09-18-v16.3.6-final-audit-pending`
- Service-worker cache: `alfred-u-v16-3-6-teaching-media-content-completion-20260918`

The 31-week schedule is unchanged: **Week 1 is September 15–19, 2026** and **Week 31 is April 13–17, 2027**. Calendar identities and iCalendar UIDs remain preserved.

## Teaching Media architecture

The current candidate load order is:

1. `curriculum-data.js` — accepted v16.3 curriculum/source registry.
2. `teaching-media-overrides.js` — earlier targeted Teaching Media layer.
3. `teaching-media-self-reliance.js` — v16.3.5 independent-path attempt retained for provenance and existing assignments.
4. `teaching-media-content-completion.js` — v16.3.6 targeted content-completion and metadata-correction layer.

The v16.3.6 overlay uses append/de-duplicate behavior for missing instruction and only patches specific existing media-card claims when the prior audit proved they were inaccurate. It does not rewrite the accepted Alfred lessons.

Teaching Media is intended to provide the explanatory preparation layer. It does **not** replace required labs, projects, measurements, soldering/rework practice, coding, debugging, controlled troubleshooting/fault work, assessments, mastery gates, or physical evidence.

## What v16.3.6 does not change

This candidate does not change:

- the 62 primary Alfred lessons;
- the 24 labs or practical evidence rules;
- instructional objectives or standards mappings;
- CETa/Career 50/50 program balance;
- assessments, question identities, answers, or mastery thresholds;
- Study Guide assignments;
- calendar dates, event IDs, or iCalendar UIDs;
- progress keys, saved progress, or assessment history;
- Cloud Sync protocol 2 or Student Sync Key behavior;
- module sequencing;
- lesson SVGs or the accepted mobile visual system.

## Files of record for the v16.3.6 candidate

- `curriculum-data.js` — accepted v16.3 curriculum/source.
- `teaching-media-overrides.js` — earlier targeted media overlay.
- `teaching-media-self-reliance.js` — v16.3.5 media layer retained.
- `teaching-media-content-completion.js` — v16.3.6 content-completion candidate.
- `learn.html` — Classroom load order.
- `AU-ESET-301-v16.3-Resource-Verification.md` — candidate/final Teaching Media verification record.
- `release-notes.js` + `release-notes-current.js` — historical/current release record.
- `build-info.json` — deployment marker.
- `service-worker.js` — offline/cache behavior.

## Pre-audit deployment rule

**Do not deploy this release-candidate package as the accepted production release yet.** The final acceptance audit must first run against this exact runtime composition. If that audit finds a BLOCKER or MATERIAL DEFECT, repair the candidate and rerun acceptance. After a genuine 31/31 PASS, finalize the Resource Verification/acceptance wording and run final regression before producing the upload ZIP.

Production Cloud Sync endpoint remains unchanged:

`https://alfred-university-sync.totallywill13.workers.dev`
