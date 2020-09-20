//declaring global variables
var car, wall;
var speed, weight;
var deformation;

function setup() {
  //creating a canvas
  createCanvas(1600,400);
  
  //defining the speed variable
  speed = random(55,90);

  //defining the weight variable
  weight = random(400,1500);

  //creating a car sprite
  car = createSprite(30, 200, 40, 20);
  car.shapeColor = "blue";
  car.velocityX = speed;

  //creating a wall sprite
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80);
  /*wall.depth = car.depth;
  car.depth = car.depth + 1;*/

}

function draw() {
  //defining a background colour
  background("black");  

  //checking collision
  if(wall.x - car.x < wall.width/2 + car.width/2 )
  {
    //setting the car velocity to 0
    car.velocityX = 0;

    //calculating the deformation for the car
    deformation = 0.5 * weight * speed * speed/22500

    //determing the color of the car according to its deformation rate
    if(deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }
    else if(deformation >= 100 && deformation < 180) {
      car.shapeColor = color(230, 230, 0);
    }
    else {
      car.shapeColor = color(255, 0, 0);
    }
  }

  drawSprites();
}