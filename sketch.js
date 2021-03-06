const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var ground;
var base1,base2;
//var block1,block2,block3,

function setup() {
  createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(500,480,1000,40,{isStatic:true});

  base1=new Ground(400,350,200,10,{isStatic:true});
  base2=new Ground(700,250,200,10,{isStatic:true});

  ball=new Ball(100,300,50)

  chain=new Chain(ball.body,{x:100,y:300})

  //bottom row of left stand
  block1=new Box(340,320,"lightpink"); 
  block2=new Box(370,320,"lightpink");  
  block3=new Box(400,320,"lightpink");  
  block4=new Box(430,320,"lightpink");  
  block5=new Box(460,320,"lightpink");   

  //second bottom row of left stand
  block6=new Box(355,270,"lightgreen");   
  block7=new Box(385,270,"lightgreen");   
  block8=new Box(405,270,"lightgreen");   
  block9=new Box(435,270,"lightgreen");   

  //middle layer
  block10=new Box(370,220,"orange");   
  block11=new Box(400,220,"orange");   
  block12=new Box(430,220,"orange"); 
  
  //second top layer
  block13=new Box(385,170,"blue"); 
  block14=new Box(405,170,"blue"); 
    
  //top block
  block15=new Box(400,120,"black");

   //bottom row of right stand
  block16=new Box(640,220,"red"); 
  block17=new Box(680,220,"red");  
  block18=new Box(720,220,"red");  
  block19=new Box(760,220,"red");  

  //second bottom row of left stand
  block20=new Box(660,170,"yellow");   
  block21=new Box(700,170,"yellow");   
  block22=new Box(740,170,"yellow");   

  //second from top
  block23=new Box(680,120,"green");   
  block24=new Box(720,120,"green");   
 
  //top block
  block25=new Box(700,70,"pink");  

  Engine.run(engine);
}

function draw() {
  background(255);  

  ball.display();
  chain.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();

  block15.display();

  block16.display();
  block17.display();
  block18.display();
  block19.display();

  block20.display();
  block21.display();
  block22.display();

  block23.display();
  block24.display();

  block25.display();

  ground.display();
  base1.display();
  base2.display();

  reset();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();
}

function reset(){
  if(keyDown("space")){
   Matter.Body.setPosition(ball.body,{x:100,y:300});
   chain.attach();
  }
}