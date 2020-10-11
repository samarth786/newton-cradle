
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5, roof1, roof2, roof3, roof4, roof5;
var sling1, sling2, sling3, sling4, sling5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
roof1 = new Ground(400, 150, 300, 40);

bob4 = new Paper(300, 300, 50, 50);
bob3 = new Paper(350, 300, 50, 50);
bob1 = new Paper(400, 300, 50, 50);
bob2 = new Paper(450, 300, 50, 50);
bob5 = new Paper(500, 300, 50, 50);



sling1 = new Sling(bob4, roof1, -bobDiameter*2, 0);
sling2 = new Sling(bob3, roof1, -bobDiameter*2, 0);
sling3 = new Sling(bob1, roof1, -bobDiameter*2, 0);
sling4 = new Sling(bob2, roof1, -bobDiameter*2, 0);
sling5 = new Sling(bob5, roof1, -bobDiameter*2, 0);


Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(217);

  drawSprites();
 roof1.display();

 sling1.display();
 sling2.display();
 sling3.display();
 sling4.display();
 sling5.display();
 
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 keypressed();
text("sgjtas",10, 10,70,70);
}

function keypressed(){
	if(keyCode === UP_ARROW){
 Matter.Body.applyForce(bob4.body, bob4.body.position,{x:-65,y: -25});
	}
}

