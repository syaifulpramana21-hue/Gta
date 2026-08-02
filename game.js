const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');
function resize(){canvas.width=innerWidth;canvas.height=innerHeight}
addEventListener('resize',resize);resize();

const player={x:200,y:200,speed:200};

function update(dt){}
function draw(){
 ctx.fillStyle='#2e8b57';
 ctx.fillRect(0,0,canvas.width,canvas.height);
 ctx.fillStyle='dodgerblue';
 ctx.beginPath();
 ctx.arc(player.x,player.y,12,0,Math.PI*2);
 ctx.fill();
}
let last=performance.now();
function loop(t){
 const dt=(t-last)/1000;
 last=t;
 update(dt);
 draw();
 requestAnimationFrame(loop);
}
requestAnimationFrame(loop);