/* AU-ESET 301 v16 assessment policy overlay.
   Keeps the vetted v15.8 question bank intact while integrating required
   assessment gates into the v16 Classroom sequence. */
(() => {
  const data = window.ALFRED_ASSESSMENT;
  if (!data) return;

  data.meta = data.meta || {};
  data.meta.version = '16.0';
  data.meta.updated = '2026-09-15';
  data.meta.classroomPolicy = 'Two embedded lesson checks, one required lab check when a lab is assigned, and one required weekly mastery check are integrated into each Classroom module. Weekly and lab mastery require at least 80%; safety-critical embedded checks require 100%. Calendar-event quizzes remain supplemental retrieval practice.';
  data.meta.sourcePolicy = 'Original Alfred assessment items aligned to the current ETA competency framework, the student-provided private sixth-edition study guide scope, authoritative technical sources, and technician/embedded work standards. No official ETA questions or private study-guide pages are republished. Scores are learning evidence, not certification, hiring qualification, or a guarantee.';

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
  });
})();
