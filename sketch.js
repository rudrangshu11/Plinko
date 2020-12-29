const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var division1, division2, division3, division4;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  ground = new Ground(240, 780,480, 10);
  for (var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k, height = divisionHeight/0.475, 10 ,divisionHeight))
   }
  for(var j = 45; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));   
  }
  for(var j = 20; j<= width; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }
  for(var j = 45; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j= 20; j<= width; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background(0);
  ground.display();
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var j = 0; j< plinkos.length; j++){
    plinkos[j].display();
  }
  if(frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 15));
  }
  for(var j = 0; j< particles.length; j++){
    particles[j].display();
  }
  drawSprites();
  }
