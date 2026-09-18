(()=>{
  const releases=window.ALFRED_RELEASES||[];
  const ledger=window.ALFRED_CHANGE_LEDGER||[];
  const out=document.querySelector('#release-list');
  const ledgerOut=document.querySelector('#change-ledger');
  const summary=document.querySelector('#release-summary');
  const filter=document.querySelector('#release-filter');
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const listFiles=(label,items)=>Array.isArray(items)?`<div class="release-file-group"><strong>${esc(label)}</strong>${items.length?`<ul>${items.map(x=>`<li><code>${esc(x)}</code></li>`).join('')}</ul>`:'<p>None</p>'}</div>`:'';
  const fmtDate=value=>{try{return new Intl.DateTimeFormat(undefined,{dateStyle:'medium',timeStyle:'short'}).format(new Date(value));}catch{return value;}};
  function render(){
    const q=(filter?.value||'').trim().toLowerCase();
    const list=releases.filter(r=>!q||JSON.stringify(r).toLowerCase().includes(q));
    const commits=ledger.filter(r=>!q||JSON.stringify(r).toLowerCase().includes(q));
    if(summary) summary.textContent=`${list.length} release${list.length===1?'':'s'} + ${commits.length} repository commit${commits.length===1?'':'s'} shown`;
    out.innerHTML=list.map((r,i)=>`<article id="release-${esc(r.version.replace(/[^a-z0-9]+/gi,'-'))}" class="release-card ${i===0?'latest':''}">
      <div class="release-card-head"><div><span class="release-version">${esc(r.version)}</span><span class="release-type">${esc(r.type)}</span></div><time>${esc(r.date)}</time></div>
      <h2>${esc(r.title)}</h2>
      <div class="release-request"><strong>Request that drove this release</strong><p>${esc(r.request)}</p></div>
      <h3>What changed</h3><ul>${(r.changes||[]).map(c=>`<li>${esc(c)}</li>`).join('')}</ul>
      ${(Array.isArray(r.filesAdded)||Array.isArray(r.filesModified)||Array.isArray(r.filesRemoved))?`<h3>Files changed</h3><div class="release-file-grid">${listFiles('Added',r.filesAdded)}${listFiles('Modified',r.filesModified)}${listFiles('Removed',r.filesRemoved)}</div>`:''}
    </article>`).join('')||'<p class="empty-state">No release notes match that search.</p>';
    if(ledgerOut){
      ledgerOut.innerHTML=commits.map(r=>`<details class="release-ledger-entry"><summary><span class="ledger-sha">${esc(r.sha.slice(0,12))}</span><time>${esc(fmtDate(r.date))}</time><span class="ledger-diff">+${esc(r.additions)} / -${esc(r.deletions)}</span>${r.treeChanged===false?'<span class="ledger-noop">No tree change</span>':''}</summary><div class="release-ledger-body"><p>${esc(r.message||'Repository update')}</p><p>${r.treeChanged===false?'This upload created a commit with no file-tree difference from its parent. It is retained here so the repository history is complete.':'This commit changed repository content. Open the GitHub diff for the exact file-by-file additions, modifications, removals, and line changes.'}</p><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Open exact GitHub commit diff ↗</a></div></details>`).join('')||'<p class="empty-state">No repository commits match that search.</p>';
    }
  }
  filter?.addEventListener('input',render);render();
})();
