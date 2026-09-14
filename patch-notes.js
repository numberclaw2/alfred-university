(()=>{
  const releases=window.ALFRED_RELEASES||[];
  const out=document.querySelector('#release-list');
  const summary=document.querySelector('#release-summary');
  const filter=document.querySelector('#release-filter');
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function render(){
    const q=(filter?.value||'').trim().toLowerCase();
    const list=releases.filter(r=>!q||JSON.stringify(r).toLowerCase().includes(q));
    if(summary) summary.textContent=`${list.length} release${list.length===1?'':'s'} shown`;
    out.innerHTML=list.map((r,i)=>`<article id="release-${esc(r.version.replace(/[^a-z0-9]+/gi,'-'))}" class="release-card ${i===0?'latest':''}">
      <div class="release-card-head"><div><span class="release-version">${esc(r.version)}</span><span class="release-type">${esc(r.type)}</span></div><time>${esc(r.date)}</time></div>
      <h2>${esc(r.title)}</h2>
      <div class="release-request"><strong>Request that drove this release</strong><p>${esc(r.request)}</p></div>
      <h3>What changed</h3><ul>${(r.changes||[]).map(c=>`<li>${esc(c)}</li>`).join('')}</ul>
    </article>`).join('')||'<p class="empty-state">No release notes match that search.</p>';
  }
  filter?.addEventListener('input',render);render();
})();
