/* Alfred University G07-B39: update outdated Sixth Edition burn advice, preserving all scored questions and stable IDs. */
(function alfredG07BurnSafetyB39(){
'use strict';
const key='ALFRED_CETA_G07_B39_STATUS', d=window.ALFRED_CETA_DATA;
if(window[key]?.ok&&window[key].appliedData===d)return;
try{
  if(window.ALFRED_CETA_G08_PUBLISHER_B38_STATUS?.ok!==true ||
     window.ALFRED_CETA_G08_PUBLISHER_B38_STATUS.appliedData!==d)
    throw Error('B38 academic prerequisite missing');
  const m=d.course.find(m=>m.id==='M01');
  const p=m?.pages.find(p=>p.id==='L01-0-04');
  const lines=p?.goldTeaching?.paragraphs;
  if(!p || p.title!=='Shock physiology, emergency response and first-aid boundaries' ||
     !Array.isArray(lines) || lines.length!==4 ||
     !String(lines[3]?.[1]||'').includes('The examination tests the order of priorities'))
    throw Error('Unexpected M01 electrical-shock lesson predecessor');
  const annex=[
    'Safety erratum · burns: the historical Sixth Edition book is not current first-aid guidance',
    'The Sixth Edition study guide (printed page 26) states categorically that water should not be put on second- or third-degree burns and includes older rescue-breath instructions. Do not follow those statements as current emergency guidance. First protect the rescuer: never touch someone still in contact with electricity, and initiate emergency response and authorized isolation. After the source is off and the scene safe, current American Red Cross first-aid guidance recommends clean, cool running water to cool electrical burns for at least 15 minutes if available, followed by healthcare evaluation because unseen internal injury is possible. For thermal burns generally, 2024 AHA/Red Cross guidance recommends immediate clean running water, with 5–20 minutes a reasonable interval. Avoid direct ice, do not break blisters or remove clothing stuck to the wound, and follow emergency dispatcher and qualified medical instructions for severe burns. Cooling must never be attempted while electrical exposure remains possible.'
  ];
  lines.push(annex);
  const result={ok:true,revision:'B39',page:'M01/L01-0-04',changedFields:['goldTeaching.paragraphs[4]'],source:['https://www.redcross.org/take-a-class/resources/learn-first-aid/burns','https://cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines']};
  Object.defineProperty(result,'appliedData',{value:d}); window[key]=result;
}catch(e){window[key]={ok:false,error:String(e.message||e)};console.warn('[Alfred G07 B39]',e);}
})();
