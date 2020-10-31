
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new GG(600,350,800,20);


	Engine.run(engine);

	ball= new PB(100,100);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ball.display();
  drawSprites();
 
}



