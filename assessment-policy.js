/* AU-ESET 301 v16.3 curriculum / v16.3.7 runtime assessment policy.
   Keeps the reviewed 16.2 evidence-revision question bank intact while integrating required
   assessment gates into the v16 Classroom sequence. */
(() => {
  const data = window.ALFRED_ASSESSMENT;
  if (!data) return;

  data.meta = data.meta || {};
  // `version` remains the reviewed assessment-bank/evidence revision so valid v16.2 runs stay comparable.
  // The course release itself is v16.3; keep these concepts separate.
  data.meta.version = '16.2';
  data.meta.releaseVersion = '16.3';
  data.meta.evidenceRevision = '16.2';
  data.meta.runtimePatch = '16.3.7';
  data.meta.updated = '2026-09-18';
  data.meta.classroomPolicy = 'Two embedded lesson checks, required v16.3 integrated subject-specific semantic tasks for the standards attached to each primary lesson, one required lab check when a lab is assigned, and one required weekly mastery check are integrated into each Classroom module. Weekly and lab mastery require at least 80%; safety-critical embedded checks require 100%. CETa readiness uses a dual-source gate: one current full-length 100-question Alfred CETa practice run at 85% or higher plus one separate current independent CETa practice assessment at 85% or higher from outside the Alfred question bank. Calendar-event quizzes remain supplemental retrieval practice.';
  data.meta.sourcePolicy = 'Original Alfred assessment items plus v16.3 integrated subject-specific constructed-response/performance tasks aligned to the current ETA competency framework, the student-provided private sixth-edition study guide scope, authoritative technical sources, and technician/embedded work standards. The 186 v16.1 generic coverage-fill questions remain preserved only for historical compatibility and do not count as current mastery evidence. No official ETA questions or private study-guide pages are republished. Scores and self-reviewed semantic tasks are learning evidence, not certification, hiring qualification, or a guarantee.';

  (data.lessonQuizzes || []).forEach(item => {
    item.optional = true;
    item.required = false;
    item.classification = 'Supplemental Practice';
    item.alignment = 'Optional retrieval practice for a scheduled calendar event. It supplements—but never replaces—the two required embedded lesson checks and required weekly mastery gate.';
  });

  (data.labQuizzes || []).forEach(item => {
    item.optional = false;
    item.required = true;
    item.classification = 'Required Lab Check';
    item.alignment = 'Required knowledge gate for the assigned lab route. Complete either the approved virtual or physical evidence route, then earn at least 80%; safety rules must be correct before related physical work.';
  });

  (data.weeklyTests || []).forEach(item => {
    item.optional = false;
    item.required = true;
    item.classification = 'Required Weekly Mastery';
    item.alignment = 'Required Classroom mastery gate after instruction, guided practice, and application. It checks the current week and may retrieve already-taught material from earlier weeks. Earn at least 80%, review targeted corrections, and retake only the weak material.';
  });

  (data.majorAssessments || []).forEach(item => {
    const supplemental = item.id === 'comprehensive-final';
    item.optional = supplemental;
    item.required = !supplemental;
    item.classification = supplemental ? 'Supplemental Mixed Review' : 'Required Readiness Gate';
    if (item.id === 'ceta-mock') {
      item.requiredRuns = 1;
      item.qualifyingTarget = 85;
      item.independentRunRequired = true;
      item.independentRunTarget = 85;
      item.readinessRule = 'Complete one current full-length 100-question Alfred CETa practice run at 85% or higher, then complete one separate current independent CETa practice assessment at 85% or higher from outside the Alfred question bank. Repeating the Alfred mock is useful retrieval practice, but it does not count as the independent second gate. ETA’s published 75% threshold is the official exam standard; Alfred’s dual-source 85% rule is a conservative internal readiness gate, not a prediction or guarantee.';
    }
  });
})();
