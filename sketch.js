
var trex ,trex_running,edges,ground;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
   trex=createSprite(50,160,20,50);
  //create a trex sprite
 trex.addAnimation("running",trex_running)
 edges=createEdgeSprites();
 trex.scale=0.5;
 trex.x=50;
 ground=createSprite(200,180,400,20);
ground.addImage("ground",)
}

function draw(){
  background("white");
  ground.velocityX=-2;

  if(keyDown("space"))
  {
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.5;
  trex.collide(edges[3]);
  trex.collide(ground);
  drawSprites();

}
