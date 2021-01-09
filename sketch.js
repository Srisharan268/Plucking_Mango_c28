
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImg,ground,tree,stone,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,rope;
var gameState = "attached";

function preload()
{

	boyImg = loadImage("boy.png")
	
}

function setup() {
	createCanvas(1400,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground  = new Ground(700,780,1400,40);
	tree = new Tree(1000,470,0.5);
	stone = new Stone(175,600 ,25);
	
	mango1 = new Mango(1000,200,40);
	mango2 = new Mango(1100,350,50);
	mango3 = new Mango(950,300,55);
	mango4 = new Mango(875,450,50);
	mango5 = new Mango(1200,400,30);
	mango6 = new Mango(750,365,40);
	mango7 = new Mango(830,300,30);
	mango8 = new Mango(999,400,40);
	mango9 = new Mango(1100,225,45);
	mango10 = new Mango(1285,355,25);

	rope = new Rope(stone.body);

	Engine.run(engine);
  
}


function draw() {

  background("lightBlue");
  
  imageMode(CENTER);
  image(boyImg,250,675,boyImg.width*0.15,boyImg.height*0.15);
  rectMode(CENTER);

  rope.display();
  ground.display();
  tree.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  if(gameState === "dragged"){
	stone.body.position = {x:mouseX,y:mouseY};
  }
  
  
  drawSprites();
 
}

function mouseDragged(){
	if(gameState === "attached"){
		gameState = "dragged";
	}
}

function mouseReleased(){
	if(gameState === "dragged"){
		rope.fly();
		gameState = "released";
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:175,y:600});
		rope.attach();
		gameState = "attached"
	}
}

function detectCollision(obj1,obj2){
	var pos1 = obj1.body.position;
	var pos2 = obj2.body.position;

	var distance = dist(pos1.x,pos1.y,pos2.x,pos2.y);
	if(distance <= obj1.radius + obj2.radius){
		Matter.Body.setStatic(obj2.body,false);
		Body.setVelocity(obj1.body,{x:-1,y:-1});
	}

}


