/* Alfred University CETa — search full teacher-written instructional content.
   Search-only progressive enhancement: no curricular, answer-key, or learner-data mutation.
   Requires instructional corrections to load before deferred ceta.js. */
(function () {
  'use strict';
  function enhance() {
    if (document.body?.dataset.page !== 'search') return;
    const params = new URLSearchParams(window.location.search);
    const query = (params.get('q') || '').trim();
    if (!query || document.documentElement.dataset.alfredSearchExtended === '1') return;
    const data = window.ALFRED_CETA_DATA;
    const results = document.querySelector('#app .search-results');
    if (!results || !Array.isArray(data?.course) || window.ALFRED_CETA_INSTRUCTIONAL_STATUS?.ok !== true) return;
    document.documentElement.dataset.alfredSearchExtended = '1';
    const term = query.toLocaleLowerCase();
    const matches = [];
    for (const module of data.course) {
      for (let i = 0; i < (module.pages || []).length; i++) {
        const page = module.pages[i];
        const g = page.goldTeaching;
        if (!g) continue;
        // The original search already lists matches from the title and lead text.
        if ((String(page.title || '') + ' ' + String(page.text || '')).toLocaleLowerCase().includes(term)) continue;
        const w = g.worked || {};
        const r = g.reflection || {};
        const check = g.check || {};
        const transfer = g.transferPractice || {};
        const gallery = g.visualGallery || {};
        const segments = [
          page.remember, g.sectionNote,
          ...(g.paragraphs || []).flat(),
          w.heading, w.scenario, ...(w.steps || []), w.conclusion,
          r.ask, r.answer, check.ask, ...(check.options || []), check.why,
          transfer.prompt, transfer.modelReasoning,
          g.video?.title, g.video?.task, g.visual?.alt, g.visual?.caption,
          gallery.title, gallery.intro, gallery.task, gallery.modelReasoning,
          ...(gallery.images || []).flatMap(v => [v.alt, v.caption]),
          g.source?.title, g.source?.task
        ].filter(v => typeof v === 'string' && v.length);
        const hit = segments.find(v => v.toLocaleLowerCase().includes(term));
        if (!hit) continue;
        const at = hit.toLocaleLowerCase().indexOf(term);
        const start = Math.max(0, at - 55);
        let excerpt = (start ? '…' : '') + hit.slice(start, start + 165);
        if (start + 165 < hit.length) excerpt += '…';
        matches.push({
          title: page.title,
          moduleId: module.id,
          pageIndex: i,
          excerpt
        });
      }
    }
    if (!matches.length) return;
    const label = document.querySelector('#app .card p.small');
    const base = label && /^\s*(\d+)\s+results?\s+for\b/i.exec(label.textContent || '');
    if (base) label.textContent = `${Number(base[1]) + matches.length} results for “${query}” (${base[1]} standard-index; ${matches.length} expanded-teaching)`;
    const intro = document.createElement('p');
    intro.className = 'small';
    intro.textContent = `${matches.length} additional matching teaching page${matches.length === 1 ? '' : 's'} found in the expanded instructor explanations. Follow each link to learn the full concept.`;
    results.parentNode.insertBefore(intro, results);
    for (const m of matches.slice(0, 60)) {
      const a = document.createElement('a');
      a.href = `learn.html?module=${encodeURIComponent(m.moduleId)}&stage=learn&page=${m.pageIndex}`;
      const kind = document.createElement('span');
      kind.className = 'eyebrow';
      kind.textContent = `${m.moduleId} · Expanded teaching`;
      const title = document.createElement('strong');
      title.style.display = 'block';
      title.textContent = m.title;
      const detail = document.createElement('small');
      detail.textContent = m.excerpt;
      a.append(kind, title, detail);
      results.appendChild(a);
    }
    if (matches.length > 60) {
      const notice = document.createElement('p');
      notice.className = 'small';
      notice.textContent = 'Showing the first 60 expanded-teaching matches. Use a more specific term to narrow the results.';
      results.parentNode.insertBefore(notice, results.nextSibling);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enhance, {once:true});
  else enhance();
})();
