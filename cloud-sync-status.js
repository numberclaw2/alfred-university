(() => {
  const CONFIG_KEY = 'alfred-u-sync-config-v1';
  const RUNTIME_KEY = 'alfred-u-sync-health-v1';
  const EXPECTED_PROTOCOL = 2;
  const HEALTH_INTERVAL_MS = 5 * 60 * 1000;
  const LOCAL_REFRESH_MS = 5000;
  const HEALTH_TIMEOUT_MS = 5000;

  let badge = null;
  let stateNode = null;
  let currentHealth = 'idle';
  let currentDetail = '';
  let lastHealthAt = 0;

  function readJson(key){
    try{
      const value=JSON.parse(localStorage.getItem(key)||'null');
      return value && typeof value==='object' ? value : {};
    }catch{return {};}
  }

  function readConfig(){ return readJson(CONFIG_KEY); }
  function readRuntime(){ return readJson(RUNTIME_KEY); }

  function writeRuntime(value){
    try{localStorage.setItem(RUNTIME_KEY,JSON.stringify(value||{}));}catch{}
  }

  function apiRoot(config){
    return String(config?.apiUrl||'')
      .trim()
      .replace(/\/+$/,'')
      .replace(/\/(?:health|sync)$/i,'');
  }

  function lastSyncText(config){
    const value=Date.parse(String(config?.lastSync||''));
    if(!Number.isFinite(value)) return 'No successful sync recorded on this device yet.';
    try{
      return `Last successful sync: ${new Intl.DateTimeFormat('en-US',{
        month:'short',day:'numeric',hour:'numeric',minute:'2-digit'
      }).format(new Date(value))}.`;
    }catch{
      return `Last successful sync: ${new Date(value).toLocaleString()}.`;
    }
  }

  function installStyle(){
    if(document.getElementById('alfred-cloud-sync-status-style')) return;
    const style=document.createElement('style');
    style.id='alfred-cloud-sync-status-style';
    style.textContent=`
      .alfred-cloud-sync-status{
        --cloud-status-color:#6b756f;
        display:inline-flex;
        align-items:center;
        gap:.48rem;
        min-height:2.15rem;
        padding:.42rem .7rem;
        border:1px solid rgba(11,61,46,.18);
        border-radius:999px;
        background:rgba(255,255,255,.95);
        color:#153f34;
        font-size:.78rem;
        font-weight:800;
        line-height:1;
        text-decoration:none;
        white-space:nowrap;
        box-shadow:0 2px 10px rgba(20,45,37,.08);
        flex:0 0 auto;
        margin-left:auto;
        margin-right:.65rem;
        transition:border-color .15s ease,background .15s ease,transform .15s ease
      }
      .alfred-cloud-sync-status:hover{
        transform:translateY(-1px);
        border-color:rgba(11,61,46,.34);
        background:#fff;
        text-decoration:none
      }
      .alfred-cloud-sync-status:focus-visible{
        outline:3px solid rgba(184,145,39,.42);
        outline-offset:2px
      }
      .alfred-cloud-sync-dot{
        width:.58rem;
        height:.58rem;
        border-radius:50%;
        flex:0 0 auto;
        background:var(--cloud-status-color)
      }
      .alfred-cloud-sync-status[data-state="active"]{--cloud-status-color:#1d9562}
      .alfred-cloud-sync-status[data-state="checking"]{--cloud-status-color:#3979a8}
      .alfred-cloud-sync-status[data-state="offline"]{--cloud-status-color:#b47a16}
      .alfred-cloud-sync-status[data-state="issue"]{--cloud-status-color:#ba4040}
      .alfred-cloud-sync-status[data-state="local"]{--cloud-status-color:#6b756f}
      .alfred-cloud-sync-status.alfred-cloud-sync-fallback{
        position:fixed;
        right:1rem;
        bottom:1rem;
        z-index:9997;
        margin:0
      }
      @media(max-width:700px){
        .alfred-cloud-sync-status{
          min-height:2rem;
          padding:.4rem .58rem;
          gap:.4rem;
          margin-right:.45rem;
          font-size:.74rem
        }
        .alfred-cloud-sync-prefix{display:none}
      }
      @media(max-width:420px){
        .alfred-cloud-sync-status{padding:.36rem .48rem}
        .alfred-cloud-sync-dot{width:.52rem;height:.52rem}
      }
    `;
    document.head.appendChild(style);
  }

  function mount(){
    if(badge && document.documentElement.contains(badge)) return badge;
    installStyle();

    badge=document.createElement('a');
    badge.className='alfred-cloud-sync-status';
    badge.href='progress.html#cloud-sync';
    badge.setAttribute('aria-live','polite');
    badge.setAttribute('aria-atomic','true');
    badge.innerHTML='<span class="alfred-cloud-sync-dot" aria-hidden="true"></span><span><span class="alfred-cloud-sync-prefix">Cloud </span><span class="alfred-cloud-sync-state">Local</span></span>';
    stateNode=badge.querySelector('.alfred-cloud-sync-state');

    const row=document.querySelector('.brand-row');
    const toggle=row?.querySelector('.nav-toggle');
    if(row){
      if(toggle) row.insertBefore(badge,toggle);
      else row.appendChild(badge);
    }else{
      badge.classList.add('alfred-cloud-sync-fallback');
      document.body.appendChild(badge);
    }
    return badge;
  }

  function render(kind,label,detail=''){
    const node=mount();
    if(!node) return;

    const config=readConfig();
    node.dataset.state=kind;
    if(stateNode) stateNode.textContent=label;

    const description=`${detail ? detail+' ' : ''}${lastSyncText(config)}`;
    node.title=`Alfred Cloud Sync — ${label}. ${description}`;
    node.setAttribute(
      'aria-label',
      `Alfred Cloud Sync: ${label}. ${description} Open Cloud Sync settings.`
    );
  }

  function remember(kind,detail=''){
    writeRuntime({state:kind,detail,at:new Date().toISOString()});
  }

  function localState(){
    const config=readConfig();

    if(!config.connected){
      currentHealth='idle';
      currentDetail='';
      render('local','Local','Cloud Sync is not connected on this device.');
      return {config,connected:false,api:''};
    }

    const api=apiRoot(config);
    if(!/^https:\/\//i.test(api)){
      currentHealth='issue';
      currentDetail='The saved Cloud Sync server address is invalid.';
      remember('issue',currentDetail);
      render('issue','Issue',currentDetail);
      return {config,connected:true,api:''};
    }

    if(!navigator.onLine){
      render('offline','Offline','This device is offline; local progress remains available.');
      return {config,connected:true,api};
    }

    const runtime=readRuntime();
    const runtimeAge=Date.now()-Date.parse(String(runtime.at||''));
    if(
      runtime.state==='issue' &&
      Number.isFinite(runtimeAge) &&
      runtimeAge>=0 &&
      runtimeAge<HEALTH_INTERVAL_MS
    ){
      currentHealth='issue';
      currentDetail=String(runtime.detail||'Cloud Sync recently reported an issue.');
    }

    if(currentHealth==='active'){
      render('active','Active',currentDetail||'Cloud Sync server health is verified.');
    }else if(currentHealth==='issue'){
      render('issue','Issue',currentDetail||'Cloud Sync health could not be verified.');
    }else{
      render('checking','Checking','Checking Cloud Sync server health.');
    }

    return {config,connected:true,api};
  }

  async function checkHealth({force=false}={}){
    const local=localState();
    if(!local.connected||!local.api||!navigator.onLine) return;

    const now=Date.now();
    if(!force && now-lastHealthAt<HEALTH_INTERVAL_MS) return;
    lastHealthAt=now;

    currentHealth='checking';
    currentDetail='';
    render('checking','Checking','Checking Cloud Sync server health.');

    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),HEALTH_TIMEOUT_MS);

    try{
      const response=await fetch(`${local.api}/health`,{
        method:'GET',
        cache:'no-store',
        credentials:'omit',
        headers:{'Accept':'application/json'},
        signal:controller.signal
      });

      let data=null;
      try{data=await response.json();}catch{}

      if(!response.ok||!data?.ok){
        throw new Error('The Cloud Sync health endpoint did not report healthy.');
      }
      if(
        data.databaseBound===false ||
        data.syncTableReady===false ||
        data.limiterTableReady===false ||
        data.schemaReady===false
      ){
        throw new Error('The Cloud Sync database is not ready.');
      }
      if(Number(data.protocol)!==EXPECTED_PROTOCOL){
        throw new Error(
          `Cloud Sync protocol ${data.protocol??'unknown'} does not match Alfred protocol ${EXPECTED_PROTOCOL}.`
        );
      }

      currentHealth='active';
      currentDetail=data.version
        ? `Server healthy · Worker ${data.version} · protocol ${EXPECTED_PROTOCOL}.`
        : `Server healthy · protocol ${EXPECTED_PROTOCOL}.`;

      remember('active',currentDetail);
      render('active','Active',currentDetail);
    }catch(error){
      currentHealth='issue';
      currentDetail=error?.name==='AbortError'
        ? 'Cloud Sync health check timed out.'
        : (error?.message||'Cloud Sync health could not be verified.');

      remember('issue',currentDetail);
      render('issue','Issue',currentDetail);
    }finally{
      clearTimeout(timeout);
    }
  }

  function observeProgressBadge(){
    const progressBadge=document.getElementById('sync-status-badge');
    if(!progressBadge) return;

    const inspect=()=>{
      const title=document.getElementById('sync-status-title')?.textContent?.trim()||'';
      const copy=document.getElementById('sync-status-copy')?.textContent?.trim()||'';
      const classes=progressBadge.classList;

      if(classes.contains('error')||/sync error/i.test(title)){
        const detail=copy||title||'Cloud Sync reported an error.';
        currentHealth='issue';
        currentDetail=detail;
        remember('issue',detail);
        render('issue','Issue',detail);
      }else if(classes.contains('connected')||/cloud sync active/i.test(title)){
        currentHealth='active';
        currentDetail=copy||'This device is synchronized with the Alfred University student record.';
        remember('active',currentDetail);
        render('active','Active',currentDetail);
      }else if(classes.contains('offline')||/offline/i.test(title)){
        render('offline','Offline',copy||'This device is offline.');
      }
    };

    inspect();
    new MutationObserver(inspect).observe(progressBadge,{
      subtree:true,
      childList:true,
      attributes:true,
      attributeFilter:['class']
    });
  }

  function refresh({health=false,force=false}={}){
    localState();
    if(health) checkHealth({force});
  }

  function start(){
    mount();
    observeProgressBadge();
    refresh({health:true,force:true});

    window.addEventListener('online',()=>refresh({health:true,force:true}));
    window.addEventListener('offline',()=>refresh());
    window.addEventListener('focus',()=>refresh({health:true}));
    window.addEventListener('storage',event=>{
      if(event.key===CONFIG_KEY||event.key===RUNTIME_KEY){
        refresh({health:true,force:true});
      }
    });
    window.addEventListener('alfred-progress-updated',()=>refresh());

    document.addEventListener('visibilitychange',()=>{
      if(document.visibilityState==='visible') refresh({health:true});
    });

    window.setInterval(()=>refresh(),LOCAL_REFRESH_MS);
    window.setInterval(()=>{
      if(document.visibilityState==='visible') refresh({health:true});
    },HEALTH_INTERVAL_MS);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',start,{once:true});
  }else{
    start();
  }
})();
