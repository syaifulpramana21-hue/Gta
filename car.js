// Sistem kendaraan

const cars = [
{
    x:1600,
    y:1500,
    width:60,
    height:30,
    color:"#e53935"
}
];

function drawCars(ctx){

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
