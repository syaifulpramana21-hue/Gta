// Sistem kendaraan
const cars = [
{
    x:1600,
    y:1500,
    width:60,
    height:30,
    color:"#e53935",

    angle:0,
    speed:0,

    maxSpeed:280,
    accel:260,
    brake:320,
    turn:3,

    driver:false
}
];


    function updateCars(dt){

    for(const car of cars){

        if(!car.driver) continue;

        if(keys["w"]){
            car.speed+=car.accel*dt;
        }

        if(keys["s"]){
            car.speed-=car.brake*dt;
        }

        if(keys["a"]){
            car.angle-=car.turn*dt;
        }

        if(keys["d"]){
            car.angle+=car.turn*dt;
        }

        car.speed*=0.98;

        if(car.speed>car.maxSpeed)
            car.speed=car.maxSpeed;

        if(car.speed<-car.maxSpeed/2)
            car.speed=-car.maxSpeed/2;

        car.x+=Math.cos(car.angle)*car.speed*dt;
        car.y+=Math.sin(car.angle)*car.speed*dt;

    }

    }
    for(const car of cars){

        // badan mobil
        ctx.fillStyle=car.color;
        ctx.fillRect(
            car.x-car.width/2,
            car.y-car.height/2,
            car.width,
            car.height
        );

        // kaca
        ctx.fillStyle="#90caf9";
        ctx.fillRect(
            car.x-18,
            car.y-10,
            36,
            20
        );

        // roda
        ctx.fillStyle="#111";

        ctx.fillRect(car.x-28,car.y-18,10,6);
        ctx.fillRect(car.x+18,car.y-18,10,6);
        ctx.fillRect(car.x-28,car.y+12,10,6);
        ctx.fillRect(car.x+18,car.y+12,10,6);

    }

          }
