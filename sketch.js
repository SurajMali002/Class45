var helicopterIMG, helicopter, player,playerIMG,rope,ropeimg,raju,ground2,background1;
var playerBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	playerIMG=loadImage("snapshot8 copy.png")
	ropeimg=loadImage("Untitled-1 copy.PNG")
	raju=loadImage("snapshot1.png")
	background1=loadImage("middy_city_stage_landing_stage-2.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	player=createSprite(width/2, 80, 10,10);
	player.addImage(playerIMG)
	player.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6
	helicopter.velocity.x=0

	rope=createSprite(415,475,0.5,10)
	rope.addImage(ropeimg)
	


	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	playerBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, playerBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	 ground2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground2.visiblity=false

 	playerPosition=width/2-100
 	playerY=610;


 

 	playerLeftBody = Bodies.rectangle(playerPosition+20, playerY, 20,100 , {isStatic:true} );
 	World.add(world, playerLeftBody);

 	

 	playerBottomBody = Bodies.rectangle(playerPosition+100, playerY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, playerBottomBody);

 

 	playerRightBody = Bodies.rectangle(playerPosition+200-20 , playerY, 20,100 , {isStatic:true} );
 	World.add(world, playerRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(background1);
 
  player.x= playerBody.position.x 
  player.y= playerBody.position.y 

 // if(player.collide(ground2)){
//	player.addImage(raju)
//  }

  
  drawSprites();
}

function keyPressed(){
	if(keyCode ===(LEFT_ARROW)){
		helicopter.x=helicopter.x -20
	}
	if(keyCode ===(RIGHT_ARROW)){
		helicopter.x=helicopter.x +20
	}
	if(keyCode === (DOWN_ARROW)){
		Matter.Body.setStatic(playerBody,false)
	}
}