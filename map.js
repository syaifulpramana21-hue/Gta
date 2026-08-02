function drawMap(ctx, world){

    // Rumput
    ctx.fillStyle = "#2e8b57";
    ctx.fillRect(0,0,world.width,world.height);

    // Jalan horizontal
    ctx.fillStyle="#555";
    ctx.fillRect(0,1450,world.width,120);

    // Jalan vertikal
    ctx.fillRect(1450,0,120,world.height);

    // Gedung
    ctx.fillStyle="#999";

    for(let x=150;x<world.width;x+=450){

        for(let y=150;y<world.height;y+=450){

            if(
                (x>1300&&x<1700)||
                (y>1300&&y<1700)
            ) continue;

            ctx.fillRect(x,y,180,180);

        }

    }

    // Pohon
    ctx.fillStyle="#0b6623";

    for(let i=0;i<80;i++){

        let px=(i*173)%world.width;
        let py=(i*241)%world.height;

        ctx.beginPath();
        ctx.arc(px,py,18,0,Math.PI*2);
        ctx.fill();

    }

                 }
