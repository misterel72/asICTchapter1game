/* Pure game logic, also exercised by node:test. */
const Game = {
  fresh: () => ({version:1,started:false,sector:0,task:0,solved:{},attempts:{},hints:{},inspected:{},sound:false,finished:false}),
  check(task, response) {
    if (task.type === 'number') return String(response).trim() !== '' && Number.isFinite(Number(response)) && Math.abs(Number(response)-task.answer)<0.001;
    if (!Array.isArray(response)) return false;
    if (task.type === 'multi' || task.type === 'choice') return response.length === task.answer.length && [...response].sort().every((x,i)=> x === [...task.answer].sort()[i]);
    return response.length === task.answer.length && response.every((x,i)=>x === task.answer[i]);
  },
  unlocked(sectors,state,index) {return index === 0 || sectors.slice(0,index).every(s=>s.tasks.every(t=>state.solved[t.id]));},
  xp(sectors,state) {return sectors.flatMap(s=>s.tasks).reduce((sum,t)=>sum+(state.solved[t.id] ? Math.max(50,100-10*Math.max(0,(state.attempts[t.id]||1)-1)-(state.hints[t.id]?10:0)) : 0),0);},
  restore(raw,sectors) {
    try {
      const data=JSON.parse(raw); if(!data || data.version!==1) return this.fresh();
      const clean=this.fresh();
      for(const field of ['solved','attempts','hints','inspected']) {
        for(const t of sectors.flatMap(s=>s.tasks)) {
          const value=data[field]?.[t.id];
          if(field==='attempts' && Number.isSafeInteger(value) && value>=0) clean[field][t.id]=value;
          else if(field!=='attempts' && value===true) clean[field][t.id]=true;
        }
      }
      clean.started=data.started===true; clean.sound=data.sound===true;
      clean.sector=Number.isInteger(data.sector) ? Math.max(0,Math.min(sectors.length-1,data.sector)) : 0;
      if(!this.unlocked(sectors,clean,clean.sector)) clean.sector=0;
      clean.task=Number.isInteger(data.task) ? Math.max(0,Math.min(2,data.task)) : 0;
      clean.finished=sectors.every(s=>s.tasks.every(t=>clean.solved[t.id]));
      return clean;
    } catch { return this.fresh(); }
  }
};
if (typeof module !== 'undefined') module.exports=Game;
