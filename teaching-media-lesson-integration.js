(() => {
  const C = window.ALFRED_CURRICULUM;
  if (!C) return;

  // v16.3.47 — Retired compatibility marker.
  // The former video-only placement layer was superseded by
  // teaching-media-resource-integration.js, which is now the single authoritative
  // Teaching Media → curriculum map for videos and non-video resources alike.
  C.videoLessonIntegration = {
    revision: '2026-09-21-v16.3.47-retired-video-only-layer',
    status: 'retired',
    placements: [],
    placementByWeek: {},
    libraryOnly: [],
    libraryOnlyByWeek: {},
    roleLabels: {},
    note: 'Superseded by teaching-media-resource-integration.js. No standalone library-only Teaching Media decisions remain.'
  };
})();
