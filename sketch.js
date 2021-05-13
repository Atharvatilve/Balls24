
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var paper, dustbin;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200,20,20);
	dustbin1= new Dustbin(500,550,20,150);
	dustbin2= new Dustbin(600,620,240,20);
	dustbin3 = new Dustbin(710,540,20,140);

	ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true})
	ground.shapeColor = "yellow";
	World.add(world,ground);
	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

