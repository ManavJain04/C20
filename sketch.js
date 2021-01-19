//desinging algorithum for is touching
// two sprite variables one fixed and another one is moving and when they will touch we will change their color
var fr;
var mr;
function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  fr.shapeColor="green";
  fr.debug=false;
  mr=createSprite(400, 200, 80, 30);
  mr.shapeColor="green";
  mr.debug=false;
}

function draw() {
  background(255,255,255);  
  mr.x=mouseX;
  mr.y=mouseY;
  console.log(mr.x-fr.x);//distance between mr and fr
  if(mr.x-fr.x<(fr.width/2+mr.width/2)&&fr.x-mr.x<(fr.width/2+mr.width/2)&&mr.y-fr.y<(fr.height/2+mr.height/2)&&fr.y-mr.y<(fr.height/2+mr.height/2))
  {
    mr.shapeColor="red";
    fr.shapeColor="red";
  }
  else{
    mr.shapeColor="green";
    fr.shapeColor="green";
  }
  drawSprites();
}