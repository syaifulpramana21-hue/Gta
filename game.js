const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
addEventListener("resize", resize);
resize();

const world = {
    width: 3000,
    height: 3000
};

const camera = {
    x: 0,
    y: 0
};

const keys = {};

const player = {
    x: world.width / 2,
    y: world.height / 2,
    size: 18,
    speed: 220,
    sprint: 380
};

document.addEventListener("keydown", e => {
    keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", e => {
    keys[e.key.toLowerCase()] = false;
});

function update(dt){

    let speed = keys["shift"] ? player.sprint : player.speed;

    let dx = 0;
    let dy = 0;

    if(keys["w"]) dy--;
    if(keys["s"]) dy++;
    if(keys["a"]) dx--;
    if(keys["d"]) dx++;

    let len = Math.hypot(dx,dy);

    if(len>0){
        dx/=len;
        dy/=len;
    }

    player.x += dx*speed*dt;
    player.y += dy*speed*dt;

    player.x = Math.max(0,Math.min(world.width,player.x));
    player.y = Math.max(0,Math.min(world.height,player.y));

    camera.x = player.x - canvas.width/2;
    camera.y = player.y - canvas.height/2;

}

function drawGrid(){

    ctx.strokeStyle="#1d6f3d";

    for(let x=0;x<world.width;x+=100){
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,world.height);
        ctx.stroke();
    }

    for(let y=0;y<world.height;y+=100){
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(world.width,y);
        ctx.stroke();
    }

}

function drawRoad(){

    ctx.fillStyle="#4b4b4b";

    ctx.fillRect(0,1450,world.width,120);

    ctx.fillRect(1450,0,120,world.height);

}

function drawPlayer(){

    ctx.fillStyle="dodgerblue";

    ctx.beginPath();

    ctx.arc(player.x,player.y,player.size,0,Math.PI*2);

    ctx.fill();

}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.save();

    ctx.translate(-camera.x,-camera.y);

    ctx.fillStyle="#2e8b57";

    ctx.fillRect(0,0,world.width,world.height);

    drawGrid();

    drawRoad();

    drawPlayer();

    ctx.restore();

}

let last=performance.now();

function loop(time){

    const dt=(time-last)/1000;

    last=time;

    update(dt);

    draw();

    requestAnimationFrame(loop);

}

requestAnimationFrame(loop);
