# AU-ESET 301 v16.3.12 — Practice Tab Rebuild QA

**Date:** September 18, 2026  
**Scope:** Practice tab only

## Purpose decision

- PASS — the old Practice page was too thin to justify a top-level navigation slot; it was only a two-link portal to Labs and Assessments.
- PASS — Practice still has a distinct job worth keeping: answer **“what should I practice right now?”** without duplicating the systems that actually teach, run labs, execute assessments, or record mastery.
- PASS — Practice is rebuilt as a read-only priority/router layer rather than a new completion system.

## New Practice Hub

- PASS — reads the selected/current week from existing course state.
- PASS — reads existing Classroom stage completion, lab route evidence, lab-check score, weekly mastery score, Study reviewQueue records, and below-target assessment evidence.
- PASS — does not create a new progress schema or write completion records.
- PASS — current-week selector allows inspection of another week without altering authoritative progress.

## Priority logic

The highest-value recommendation follows the existing learning sequence:

1. If prerequisite teaching is incomplete, return to the exact Classroom stage.
2. If Guided Practice is incomplete, open Classroom Practice.
3. If application is next and a lab route is incomplete, open the current Lab Center route.
4. If lab evidence exists but its required check is below 80% or unattempted, route to the required lab check.
5. If weekly mastery is ready, route to the required weekly assessment.
6. If weekly mastery has a below-target score, route to Study repair before another retest.
7. If the required week is complete but spaced retrieval is due, route to Study review.
8. If nothing required is due, label supplemental practice as optional instead of creating busywork.

## Practice Ladder

- PASS — Guided Practice, Lab/Application, Weekly Mastery, and Targeted Repair each show a live status.
- PASS — statuses distinguish Done, Ready now, Not ready yet, and Repair needed.
- PASS — locked downstream items route to the current prerequisite rather than encouraging the learner to skip ahead.
- PASS — required lab/application and weekly mastery routes preserve the existing Lab Center / Assessment Center authority.

## Repair Queue

- PASS — due Study concept/standard reviews are surfaced from the existing week `reviewQueue`.
- PASS — below-target lab and weekly assessment records are surfaced as repair signals.
- PASS — Study remains the owner of concept diagnosis/repair; Practice only routes to it.
- PASS — Assessment Center remains the owner of required retests.

## Logic tests

A Node VM harness executed the actual `practice.js` against four representative progress states:

- PASS — incomplete teaching -> **Finish Subject 1 first** / return to Classroom.
- PASS — lab route complete but lab check incomplete -> **required lab check** becomes the priority.
- PASS — weekly mastery at 65% -> **repair in Study before retest** becomes the priority.
- PASS — completed required week with a due Voltage retrieval -> due review becomes the priority and Voltage appears in the repair queue.

## Runtime / static QA

- PASS — `practice.js`, `release-notes-current.js`, and `service-worker.js` pass `node --check`.
- PASS — `build-info.json` parses as valid JSON and identifies runtime **v16.3.12**.
- PASS — `practice.html` loads `practice-v2.css` and `practice.js` after the existing course/state dependencies.
- PASS — service-worker cache namespace advances to `alfred-u-v16-3-12-practice-priority-hub-20260918`.
- PASS — `practice.js` and `practice-v2.css` are included in the service-worker core cache list.
- PASS — `practice.js` contains no progress write, completion write, assessment-score write, or Cloud Sync write path.
- PASS — Release Notes preserve current release history and add v16.3.12 at the top with exact Added / Modified / Removed file manifests.

## Scope boundary

This release does **not** modify Study, Week Overview, Engineering, Knowledge Base, Student Services, Classroom lesson content, Teaching Media, calendar data, lab definitions, assessment bank, mastery formulas, projects, Progress schema, or Cloud Sync protocol.

Step 2 is isolated. Step 3 (Week Overview) must not begin until this Practice release is uploaded, deployed, and accepted.
