var bullet,wall,thickness;
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,60,15);
  bullet.shapeColor="white";
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor="gray";
  
  bullet.velocityX=speed;
  
}


function draw() {
  background("black");  

  //console.log(bullet.velocityX);

   if( hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
      
      if(damage>10){
        wall.shapeColor=color(255,0,0);
      }
    
      if(damage<10){
       wall.shapeColor=color(0,255,0);
     }
   
     
   }

  drawSprites();
  
}

function hasCollided(bullet,wall){
   bulletRightEdge=bullet.x + bullet.width;
   wallLeftEdge=wall.x;
   bullet.depth=wall.depth;
   bullet.depth=wall.depth+1;

  if(bulletRightEdge>=wallLeftEdge)
   { 
       return true;
   }
    return false;
  }
