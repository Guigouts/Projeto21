const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  text("pos.x: " + Math.round(ball.position.x) + " pos.y: " + Math.round(ball.position.y), 800, 350);
  fill(250,255,255);
  

  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  leftSide.display();  
  rightSide.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		//função força
		Matter.Body.applyForce(ball, ball.position, {x:(120/3)*2, y:-170/2});
    
  	}

	  if (keyCode === DOWN_ARROW) {

		//função força
		Matter.Body.applyForce(ball, ball.position, {x:-(120/3)*2, y:170/2});
    
  	}
}
