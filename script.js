
let start=0,elapsed=0,run=false,intv;
function fmt(t){
let h=Math.floor(t/3600000),m=Math.floor(t%3600000/60000),s=Math.floor(t%60000/1000),ms=t%1000;
return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}:${String(ms).padStart(3,'0')}`;
}
function tick(){display.textContent=fmt(Date.now()-start+elapsed);}
function startTimer(){if(run)return;elapsed=0;start=Date.now();intv=setInterval(tick,10);run=true;status.textContent="Running";status.style.color="lime";}
function pauseTimer(){if(!run)return;clearInterval(intv);elapsed+=Date.now()-start;run=false;status.textContent="Paused";status.style.color="orange";}
function resumeTimer(){if(run)return;start=Date.now();intv=setInterval(tick,10);run=true;status.textContent="Running";status.style.color="lime";}
function resetTimer(){clearInterval(intv);run=false;elapsed=0;display.textContent="00:00:00:000";laps.innerHTML="";lapCount.textContent="0";status.textContent="Reset";status.style.color="red";}
function lap(){if(!run)return;let li=document.createElement("li");li.textContent=`Lap ${laps.children.length+1} - ${display.textContent}`;laps.prepend(li);lapCount.textContent=laps.children.length;}
function updateDate(){let n=new Date();datetime.innerHTML=n.toLocaleDateString()+"<br>"+n.toLocaleTimeString();}
setInterval(updateDate,1000);updateDate();
document.addEventListener("keydown",e=>{
if(e.code==="Space"){e.preventDefault();run?pauseTimer():resumeTimer();}
if(e.key==="r")resetTimer();
if(e.key==="l")lap();
});
