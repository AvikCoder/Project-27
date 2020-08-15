
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj1 = new Bob(240,500,70)
	bobObj2 = new Bob(310,500,70)
	bobObj3 = new Bob(380,500,70)
	bobObj4 = new Bob(450,500,70)
	bobObj5 = new Bob(520,500,70)
	roof = new Roof(380,200,400,20)
	rope1 = new Rope(bobObj1.body,roof.body,-70*2,0)
	rope2 = new Rope(bobObj2.body,roof.body,-70*1,0)
	rope3 = new Rope(bobObj3.body,roof.body,-70*0,0)
	rope4 = new Rope(bobObj4.body,roof.body,-70*-1,0)
	rope5 = new Rope(bobObj5.body,roof.body,-70*-2,0)
	Engine.run(engine);

  
}


function draw() {
Engine.update(engine)
 rectMode(CENTER);
  background("blue");
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:2,y:-3});
	}
}

