var a =10;
function setup() {
  frameRate(10);
  createCanvas(600,600);
}

function draw() {
background(0);
var radius = 300;
var size=0;
a+=20;    
noFill();
translate(width/2,height/2);
for (theta=0; theta<a;theta+=20)
 {
    strokeWeight(random(4)); 
    stroke(random(255),random(255),random(255));
    radius += 4*random(10); 
    size=random(50);
    ellipse(0.1*radius*random(20)*cos(theta),0.1*radius*sin(theta), size, size);
  }  
}
