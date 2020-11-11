var ball;
var ground;
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

	
	 ground = new Ground(600,height,800,20)
	 ball = new paper(200,500,20,20);

     ball = Matter.Bodies.circle(x,y,radius,[options],[maxSides])
     world.add(world,ball);

	 boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  
  drawSprites();
 
}
function KeyPressed(){
	if(KeyCode === UP_ARROW){
        Matter.Bodies.applyForce(ball.body,ball.body.position,{x:85,y:-85})

	}


}



