const World = Matter.World;
const Bodies = Matetr.Bodies;



var ground1;
var ground2;
var ground3;
var rectangle;
var ball;

var box1;
var box2;


function setup() {
  createCanvas(1000,700);


  ground1 = createSprite(10,620,1000,10,ground1_options);
ground1.scale = 3;
ground1.shapeColor = "red";

ground2 = createSprite(875,180,100,10,ground2_options);
ground2.scale = 2.5;
ground2.shapeColor = "red";

ground3 = createSprite(875,330,100,10,ground3_options);
ground3.scale = 2.5;
ground3.shapeColor = "red";

var rectangle = createSprite(10,560,180,30);
rectangle.scale = 3;
rectangle.stroke = "red";
rectangle.strokeWeight = 150;
rectangle.shapeColor="blue";

line = createSprite(70,470,20,90);
line.scale = 1;
line.shapeColor = "yellow";

ellipse = createSprite(70,420,55,55);
ellipse.shapeColor = "green";

box = createSprite(875,150,50,30);
box.shapeColor = "light blue";
box = createSprite(820,150,50,30);
box.shapeColor = "light blue";
box = createSprite(930,150,50,30);
box.shapeColor = "light blue";
box = createSprite(850,117,50,30);
box.shapeColor = "green";
box = createSprite(905,117,50,30);
box.shapeColor = "green";
box = createSprite(877.5,85,50,30);
box.shapeColor= "red";

box2 = createSprite(820,300,50,30);
box2.shapeColor = "white";
box2 = createSprite(875,300,50,30);
box2.shapeColor = "white"; 
box2 = createSprite(930,300,50,30);
box2.shapeColor = "white";
box2 = createSprite(850,267,50,30);
box2.shapeColor = "green";
box2 = createSprite(905,267,50,30);
box2.shapeColor = "green";
box2 = createSprite(877.5,235,50,30);
box2.shapeColor = "red";

}



var options = {}

var ground1_options = {
	isStatic:true,
}

var ground2_options = {
	isStatic:true,
}
var ground3_options = {
    isStatic:true,
}


	


function draw() {
  background("black");  
  drawSprites();
  function mouseDreagged(){
  	Matter.Body.setPosition(rectangle.body,{x:mouseX , y :mouseY});
  }
function mouseReleased(){
	rectangle.fly();
}


}