/* G08/B37 publisher figure-task correction: original B35+B36 remains unchanged. */
(function applyPublisherB37(){
'use strict';
const name='ALFRED_CETA_G08_PUBLISHER_B37_STATUS',d=window.ALFRED_CETA_DATA;
if(window[name]?.ok && window[name].appliedData===d)return;
const changes=[{"target": "M07[0]/L04-0-01", "module": "M07", "pageIndex": 0, "page": "L04-0-01", "sourceURL": "https://openstax.org/books/university-physics-volume-2/pages/8-1-capacitors-and-capacitance", "oldTask": "Study Fig. 8.4 showing actual capacitor constructions and link a physical dielectric to charge storage.", "newTask": "Study Figure 8.4 to recognize exterior packages of common capacitors (it does not show their internal construction). Then use Figure 8.2(b) to identify rolled conducting sheets separated by dielectric insulation and explain how this structure stores separated charge.", "originalInventoryIndex": 19}, {"target": "M07[1]/L04-0-06", "module": "M07", "pageIndex": 1, "page": "L04-0-06", "sourceURL": "https://openstax.org/books/university-physics-volume-2/pages/10-5-rc-circuits", "oldTask": "Examine Fig. 10.38 and the exponential charge plot. Estimate capacitor voltage after one τ before checking the curve.", "newTask": "Compare Figure 10.38 (the RC charge/discharge switch circuit) with Figure 10.39(a,c) (exponential charge and capacitor voltage). Predict the capacitor voltage after one time constant τ = RC before reading the graph labels.", "originalInventoryIndex": 20}, {"target": "M08[3]/L06-0-05", "module": "M08", "pageIndex": 3, "page": "L06-0-05", "sourceURL": "https://openstax.org/books/university-physics-volume-2/pages/15-5-resonance-in-an-ac-circuit", "oldTask": "Study Fig. 15.17 to identify frequency, peak response and bandwidth. Compare with the assigned worked resonance calculation.", "newTask": "Use Figure 15.17 to identify the resonant angular frequency and peak current amplitude in a series RLC circuit. Then use Figure 15.18 to identify the half-power bandwidth Δω and explain how bandwidth relates to Q.", "originalInventoryIndex": 23}, {"target": "M10[1]/L04-0-01", "module": "M10", "pageIndex": 1, "page": "L04-0-01", "sourceURL": "https://openstax.org/books/university-physics-volume-2/pages/10-5-rc-circuits", "oldTask": "Examine Fig. 10.38 and the exponential charge plot. Estimate capacitor voltage after one τ before checking the curve.", "newTask": "Compare Figure 10.38 (the RC switching arrangement) with Figure 10.39(a,c) (charge and voltage rise over time). For a zero-initial-voltage capacitor driven by a DC step, estimate Vc after one τ and justify the estimate before checking the graph.", "originalInventoryIndex": 27}, {"target": "M10[2]/L04-0-02", "module": "M10", "pageIndex": 2, "page": "L04-0-02", "sourceURL": "https://openstax.org/books/university-physics-volume-2/pages/15-5-resonance-in-an-ac-circuit", "oldTask": "Study Fig. 15.17 to identify frequency, peak response and bandwidth. Compare with the assigned worked resonance calculation.", "newTask": "Use Figure 15.17 to locate the peak series-RLC current at resonance. Then inspect Figure 15.18 for half-power bandwidth and Q. Explain what resistance does to resonance width before comparing with the worked LC-frequency calculation.", "originalInventoryIndex": 28}];
try {
 if(window.ALFRED_CETA_G08_B35_STATUS?.ok!==true ||
    window.ALFRED_CETA_G08_PUBLISHER_B36_STATUS?.ok!==true ||
    window.ALFRED_CETA_G08_PUBLISHER_B36_STATUS.appliedData!==d)
    throw Error('Required B35/B36 source stages not verified');
 const ready=[];
 for(const u of changes){
  const m=d.course.find(x=>x.id===u.module),p=m?.pages[u.pageIndex],src=p?.goldTeaching?.source;
  if(p?.id!==u.page || src?.url!==u.sourceURL || src.task!==u.oldTask)
   throw Error('B37 source task changed unexpectedly: '+u.target);
  ready.push([src,u.newTask]);
 }
 for(const [s,t] of ready)s.task=t;
 const result={ok:true,revision:'B37',changedTasks:ready.length};
 Object.defineProperty(result,'appliedData',{value:d});window[name]=result;
}catch(error){window[name]={ok:false,error:String(error.message||error)};console.warn('[Alfred G08 B37]',error);}
})();
