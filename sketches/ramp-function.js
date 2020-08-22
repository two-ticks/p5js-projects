function setup() {
  createCanvas(600, 600);
  frameRate(30);
}
function draw() {
  background(50);
  graph();
  unitStep(frameCount);
  fill(255);
  noStroke();
  textSize(28);
  textAlign(CENTER, CENTER);
  text("r(t)",width/2+30,0.1*height);  
  text("t",0.9*width,0.5*height+30);
}
function graph(){
    stroke(255);
    strokeWeight(1.5); line(0.1*width,height/2,0.9*width,height/2); triangle(0.09*width,height/2,0.1*width,height/2 - 3,0.1*width,height/2 + 3);
  triangle(0.91*width,height/2,0.9*width,height/2 - 3,0.9*width,height/2 + 3);
    line(width/2,0.1*height,width/2,0.9*height); 
    triangle(0.5*width,0.09*height,0.5*width- 3,0.1*height ,0.5*width+ 3,0.1*height );
  triangle(0.5*width,0.91*height,0.5*width- 3,0.9*height ,0.5*width+ 3,0.9*height );
}
function unitStep(t){
    stroke(255,0,0);
    if(t >0.1*width){
  if(t<=width/2 )
      {
      line(0.11*width,height/2,t,height/2);  
      }
    if(t>=0.9*width)
  {
      line(0.1*width,height/2,width/2,height/2);
      line(width/2,height/2,0.9*width,0.1*height);
  }   
  if(t>width/2 && t<=0.9*width)
  {
      line(0.1*width,height/2,width/2,height/2);
      line(width/2,height/2,t,-t+height);
      
  }
     
}
}
