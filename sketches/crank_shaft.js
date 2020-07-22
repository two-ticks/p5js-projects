var time = 0;
var crankRadius=70;
var crankHeight=50;
var crankLen=200;
var pivotX;
var pivotY;
var endPoint;
var blockLength=70;
var blockWidth=30;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(100);
  time += 1;
  crank(); 
}
function crank(){
    translate(width/3,height/2);
    pivotX=crankRadius*cos(0.03*time);
    pivotY=crankRadius*sin(0.03*time);
    endPoint= pivotX+sqrt(crankLen*crankLen - pivotY*pivotY);
    push();
    translate(-blockLength/2,-blockWidth/2);
    block();
    pop();
    stroke(255); 
    strokeWeight(2.5);
    line(0,0,pivotX,pivotY);
    line(pivotX,pivotY,endPoint,-crankHeight);
    push();
    stroke(255,0,155);
    strokeWeight(7);
    point(0,0);
    point(pivotX,pivotY);
    point(endPoint,-crankHeight);
    pop();
    
}

function block(){
    push();
    noStroke();
    fill(0,155,255);
    rect(endPoint,-crankHeight,blockLength,blockWidth);
    pop();
    strokeWeight(4);
    line(width/3.8,-blockWidth/2-2.2,width,-blockWidth/2-2.2); // 2.2 is subtracted to compensate strokeWeight 
}
