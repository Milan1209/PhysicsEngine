//namespacing
const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies



var engine;
var box;
var ground;

var boxOptions;


function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;

boxOptions = {
  restitution: 1
}

box = Bodies.rectangle(200,200,50,50,boxOptions);
World.add(world,box);

var ground_options= {
  isStatic : true
}



ground = Bodies.rectangle(400,400,800,10, ground_options);
console.log(box)
World.add(world,ground);
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  rectMode(CENTER);
 rect(box.position.x,box.position.y,50,50)
 rect(ground.position.x,ground.position.y,800,10)
  drawSprites();
}