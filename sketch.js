var car, wall
var speed, weight

function setup() {
  createCanvas(800,200);

  speed=random(55,90)
  weight=random(400,1500)

  car = createSprite(400, 100, 20, 20);
  car.velocityX = speed;
  car.weight = weight;

  wall = createSprite(750, 100, 20, 70);
  wall.shapeColor = (80,80,80);

}

function draw() {
  background(0,0,0);  

  car.collide(wall);

  drawSprites();
}