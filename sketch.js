const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgimg,bg,back
var score = 0;

function preload() {

  
}

function setup(){
 createCanvas(1400,650);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(width/2,height-10,width,10); 
    ground2 = new Ground(width/2-20,height/2+40,width/6,6); 
    ground3 = new Ground(width/1.2+8,height/2-2,width/5+20,10); 

    
    block1 = new BlockClass(width/3+129,340,35,35);
    block2 = new BlockClass(width/2-50,340,35,35);
    block3 = new BlockClass(width/2+10,340,35,35);
    block4 = new BlockClass(width/2+65,345,35,35);

  
    block5 = new BlockClass(width/2.2-15,310,35,35);
    block6 = new BlockClass(width/2-20,310,35,35);
    block7 = new BlockClass(width/1.9,310,35,35);

    block8 = new BlockClass(width/2+7,280,35,35);
    block9 = new BlockClass(width/2-50,280,35,35);

    block10 = new BlockClass(width/2-20,240,35,35);


    block11 = new BlockClass(width-350,300,35,35);
    block12 = new BlockClass(width-300,300,35,35);
    block13 = new BlockClass(width-250,300,35,35);
    block14 = new BlockClass(width-200,300,35,35);
    block15 = new BlockClass(width-150,300,35,35);
    block16 = new BlockClass(width-100,300,35,35);

    block17 = new BlockClass(width-325,260,35,35);
    block18 = new BlockClass(width-275,260,35,35);
    block19 = new BlockClass(width-225,260,35,35);
    block20 = new BlockClass(width-175,260,35,35);
    block21 = new BlockClass(width-125,260,35,35);

    block22 = new BlockClass(width-300,230,35,35);
    block23 = new BlockClass(width-250,230,35,35);
    block24 = new BlockClass(width-200,230,35,35);
    block25 = new BlockClass(width-150,230,35,35);

    block26 = new BlockClass(width-275,200,35,35);
    block27 = new BlockClass(width-225,200,35,35);
    block28 = new BlockClass(width-175,200,35,35);

    block29 = new BlockClass(width-200,160,35,35);
    block30 = new BlockClass(width-250,160,35,35);
    
    block31 = new BlockClass(width-225,135,35,35);

    polygonb = new PolyClass(200,200,75,75);
   slingShot = new JoinClass(polygonb.body,{x:300,y:200})

}

function draw(){
    getbgimg();
   // background(50,20,150);
    Engine.update(engine);
    
    ground1.display();
    ground2.display();
    ground3.display();
    fill("purple")
   
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    fill("indigo")
    block5.display();
    block6.display();
    block7.display();
    fill("blue");
    block8.display();
    block9.display();
    fill(0,130,250)
    block10.display();
    fill("green");
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    fill(0,222,0);
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill(200,222,0);
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    fill("yellow");
    block26.display();
    block27.display();
    block28.display();
    fill("orange")
    block29.display();
    block30.display();
    fill(220,60,20);
    block31.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();
    block31.score();

    polygonb.display();
    slingShot.display();
  console.log(score);
  textSize(30);
  text("SCORE = "+score,width/2-50,100);

    // text(mouseX +" , "+ mouseY,mouseX,mouseY)
}

function mouseDragged(){
  Matter.Body.setPosition(polygonb.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){

if(keyCode=== 32){
   slingShot.attach(polygonb.body);
   Matter.Body.setPosition(polygonb.body, {x:200 , y:200});

}
}

async function getbgimg(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();
var datetime = responseJSON.datetime;
var hour = datetime.slice(11,13);
if(hour>=06 && hour<=18){
  background("skyblue");
}
else{
background(0,0,200);
}
//back = bg;
console.log(hour);
}
