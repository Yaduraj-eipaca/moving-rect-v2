var fixrect, movrect;
var o1, o2 , o3 ,o4 



function setup() {
  createCanvas(1200,800);
  fixrect = createSprite(200,200,50,80);
  fixrect.shapeColor = "green";
  movrect = createSprite(400,200,80,30);
  movrect.shapeColor = "green";

  o1 = createSprite(100,100,50,50);
  o1.shapeColor = "green";
  o2 = createSprite(200,100,50,50);
  o2.shapeColor = "green";
  o3 = createSprite(300,100,50,50);
  o3.shapeColor = "green";
  o4 = createSprite(400,100,50,50);
  o4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  console.log(movrect.x - fixrect.x)
  
  movrect.x = World.mouseX;
  movrect.y = World.mouseY;
  
  

  if(isTouching(movrect, o1))
  {
    movrect.shapeColor = "blue";
    o1.shapeColor = "blue";
  }  
  else 
  {
    movrect.shapeColor = "green";
    o1.shapeColor = "green";
  }
  drawSprites();
} 

function isTouching(o1, o2)
{
  if(o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2)
  {
    return true;
  }
  else 
  {
    return false;
  }
}