/* G08/B36 publisher figure accessibility fixes; after B35, only source task text. */
(function applyPublisherB36(){
'use strict';
const key='ALFRED_CETA_G08_PUBLISHER_B36_STATUS';
const d=window.ALFRED_CETA_DATA;
const existing=window[key];
if(existing?.ok && existing.appliedData===d) return;
const updates=[{"target": "M02[2]/L01-0-00", "module": "M02", "pageIndex": 2, "page": "L01-0-00", "sourceURL": "https://openstax.org/books/university-physics-volume-2/pages/9-1-electrical-current", "oldTask": "Study Figure 9.2 and distinguish charge amount from charge-flow rate.", "newTask": "Accessibility note: the publisher image description incorrectly mentions MRI. Figure 9.2 actually shows charged particles moving through a shaded cross-sectional area A of a cylindrical conductor. Read the caption and figure, then distinguish total charge (C) from the rate of charge crossing A (C/s = A)."}, {"target": "M02[4]/L01-0-09", "module": "M02", "pageIndex": 4, "page": "L01-0-09", "sourceURL": "https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law", "oldTask": "Inspect Figure 9.20; identify the plotted axes and explain the straight-line V–I relationship.", "newTask": "Accessibility note: the publisher image description reverses the graph axes. The actual Figure 9.20 has voltage V on the vertical axis and current I on the horizontal axis. Inspect the plotted points, calculate a slope from V versus I, and explain its physical units."}, {"target": "M03[3]/L01-0-09", "module": "M03", "pageIndex": 3, "page": "L01-0-09", "sourceURL": "https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law", "oldTask": "Inspect Figure 9.20; identify the plotted axes and explain the straight-line V–I relationship.", "newTask": "Accessibility note: the publisher image description reverses the graph axes. The actual Figure 9.20 has voltage V on the vertical axis and current I on the horizontal axis. Inspect the plotted points, calculate a slope from V versus I, and explain its physical units."}];
try{
 if(window.ALFRED_CETA_G08_B35_STATUS?.ok!==true ||
    window.ALFRED_CETA_G08_B35_STATUS.appliedData!==d)throw Error('Required B35 cumulative G08 stage is missing');
 const plan=[];
 for(const u of updates){
  const mod=d.course.find(x=>x.id===u.module);
  const p=mod?.pages[u.pageIndex];
  if(!p || p.id!==u.page || p.goldTeaching?.source?.url!==u.sourceURL ||
      p.goldTeaching?.source?.task!==u.oldTask)
      throw Error('Unexpected publisher source precondition: '+u.target);
  plan.push([p.goldTeaching.source,u.newTask]);
 }
 // Atomic after every precondition has been proven. No question, score or progress writes.
 for(const [src,task] of plan)src.task=task;
 const result={ok:true,revision:'B36',changedTasks:plan.length};
 Object.defineProperty(result,'appliedData',{value:d});
 window[key]=result;
}catch(error){
 window[key]={ok:false,error:String(error.message||error)};
 console.warn('[Alfred G08 B36] Did not apply publisher task changes:',error);
}
})();
