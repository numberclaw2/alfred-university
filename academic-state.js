/* v15.1: lossless compatibility helpers. No new backend record types. */
(() => {
  const key = 'alfred-u-progress-v2';
  function normalizeEvent(value) {
    const v = {...(value || {})};
    const flagged = Object.entries(v.review || {}).filter(([, flag]) => flag).map(([i]) => Number(i));
    if (v.status === 'review' || flagged.length) {
      if (!v.studyReview) v.studyReview = {due:'1970-01-01T00:00:00.000Z',interval:0,lastRating:'red',source:'legacy-review',outcomeIndices:flagged};
      else if (flagged.length) v.studyReview = {...v.studyReview,outcomeIndices:[...new Set([...(v.studyReview.outcomeIndices || []),...flagged])]};
    }
    if (v.status === 'review') v.status = 'in-progress';
    if(v.status&&!['not-started','in-progress','complete'].includes(v.status))v.status='not-started';
    delete v.review;
    return v;
  }
  function currentWeek(events=window.ALFRED_EVENTS||[],when=new Date(),weeks=window.ALFRED_WEEKS||[]){
    const day=new Date(when);day.setHours(0,0,0,0);
    const starts=weeks.filter(w=>w.week&&w.start).sort((a,b)=>a.week-b.week);
    if(starts.length){let n=Number(starts[0].week)||1;starts.forEach(w=>{if(new Date(w.start+'T00:00:00')<=day)n=Math.max(n,Number(w.week)||1)});return n;}
    let n=1;events.filter(e=>e.week&&e.type!=='Equipment').forEach(e=>{const t=new Date(e.start);t.setHours(0,0,0,0);if(t<=day)n=Math.max(n,Number(e.week)||1)});return n;
  }
  function migrate(p, legacyStudy = {}) {
    p.events = p.events || {}; p.recordTimes = p.recordTimes || {};
    Object.entries(p.events).forEach(([id,v]) => {p.events[id] = normalizeEvent(v);});
    Object.entries(legacyStudy.reviews || {}).forEach(([id,review]) => {
      if (p.events[id]?.studyReview) return;
      p.events[id] = {...(p.events[id] || {}),studyReview:review,studyConfidence:legacyStudy.sessionConfidence?.[id] || review.lastRating};
      p.recordTimes['event:'+id] = Math.max(Number(p.recordTimes['event:'+id] || 0),Date.parse(review.updatedAt || '') || Date.now());
    });
    return p;
  }
  window.AlfredState = {normalizeEvent,migrate,currentWeek};
  try {
    const raw = localStorage.getItem(key) || localStorage.getItem('alfred-u-progress-v1');
    const legacyStudy = JSON.parse(localStorage.getItem('alfred-u-study-v13') || '{}');
    if (raw || Object.keys(legacyStudy.reviews || {}).length) {
      const next = JSON.stringify(migrate(JSON.parse(raw || '{}'),legacyStudy));
      if (next !== localStorage.getItem(key)) localStorage.setItem(key,next);
    }
  } catch (error) { console.warn('Alfred compatibility migration could not run.',error); }
})();
