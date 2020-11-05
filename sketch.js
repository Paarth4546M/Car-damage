const World = Matter.World;
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var myengine,myworld;

var car,wall; 
var speed,weight;


function setup() {
  createCanvas(1600,400);
  myengine = Engine.create();
    myworld = myengine.world;
  
  speed = random(55,90);
  weight = random(400,1600)

car  = Bodies.rectangle(50,200,50,50);
World.add(myworld,car)

wall = Bodies.rect(1500,200,60,height/2);
World.add(myworld,wall)

}

function draw() {
  background(0);  
  Engine.Update(myengine);

  rectMode(CENTER)
  rect(car.position.x,car.position.y,50,50)




}