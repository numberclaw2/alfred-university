(()=>{
  const entry={
    version:'v16.3.73',
    date:'September 28, 2026',
    title:'Global Cloud Sync Status',
    type:'Cloud Sync / Navigation / Reliability',
    request:'Show the current Alfred Cloud Sync status on every page so connection health is visible without opening the Progress portal.',
    changes:[
      'Added a compact Cloud Sync status pill to every navigated Alfred page, using the shared header when available and a fixed-corner fallback on utility pages.',
      'Added five clear states: Local, Checking, Active, Offline, and Issue, with responsive desktop/mobile presentation.',
      'When a device is connected and online, the indicator verifies the configured Worker through /health and checks service health, D1/table/schema readiness, and protocol 2.',
      'The indicator never reads, renders, copies, or transmits the Student Recovery Key.',
      'On the Progress page, the global indicator also observes the authoritative Cloud Sync card so a sync error is reflected globally and remembered briefly across pages.',
      'The indicator links directly to Progress → Alfred Cloud Sync and refreshes on network, focus, visibility, configuration, and periodic health events.',
      'Preserved Worker r4, D1 records, Parking Lot cross-device sync, offline-first behavior, curriculum, assessments, calendar, and existing saved-progress keys.'
    ],
    filesAdded:[
      'cloud-sync-status.js',
      'release-notes-v16.3.73.js',
      'AU-ESET-301-v16.3.73-Global-Cloud-Sync-Status-QA.md',
      'UPLOAD_README_v16.3.73.txt'
    ],
    filesModified:[
      'service-worker.js',
      'build-info.json'
    ],
    filesRemoved:[]
  };
  const existing=Array.isArray(window.ALFRED_RELEASES)?window.ALFRED_RELEASES:[];
  window.ALFRED_RELEASES=[entry,...existing.filter(item=>item&&item.version!==entry.version)];
})();
