const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var ground;
var ball;
var box;
var lavaEngine, lavaWorld;

function setup() {
  createCanvas(800,400);
  
  lavaEngine = Engine.create();
  lavaWorld = lavaEngine.world;
  var ground_options ={
    isStatic : true
  }
  ground = Bodies.rectangle(400, 390, 800,20, ground_options);
  World.add(lavaWorld, ground);

  var ball_options ={
    restitution : 1.5
  }

  ball = Bodies.circle(400,200,20, ball_options);
  World.add(lavaWorld, ball);

  

  box = Bodies.rectangle(200,200,50,50);
  World.add(lavaWorld, box);

  console.log(ball);

}

function draw() {
  background('black'); 
  fill("brown");
  Engine.update(lavaEngine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20) ;

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);

  rect(box.position.x, ball.position.y, 50.50);
  
}