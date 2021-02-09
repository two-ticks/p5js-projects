function setup() {
  createCanvas(1300, 600);
  frameRate(40);
}
function draw() {
  background(50);
  push();
  scale(0.5);  
    translate(width/2,height/2);
  graph();
    
    //translate(0,height);
    //graph();
  pop(); 
  scale(0.5);
    translate(width/2,0);
  var t1 = 0.55*width;
  var t2 = t1+150;
  var t  = 0.4*frameCount;    
  noFill();
  stroke(255);
  //rect(t1,0.5*height,150,-130); 
  fill(255);
  //noStroke();
  textSize(30);
  textAlign(CENTER, CENTER);
  var cosf_c1=concat("Acos(2π",int(t)) ;
  var cosf_c2=concat(cosf_c1,"t)") ;
  text(cosf_c2,2*width/4,0.55*height);  
  text("f",0.9*width,height+30);
  //text("f(t) * g(t)",width/2+100,1.1*height); 
  //text("t",0.9*width,1.5*height+30);
  //g(x) and f(x)
  //text("f(x)",width/2+140,0.5*height-160); 
    
    /*if (t<=0.9*width-100 && t>=0.1*width) {
        // text("g(t-x)",t+50,0.5*height-130);
       push(); drawingContext.setLineDash([20,5,5,5,5,5,5,5]);
        stroke(255);
        line(t+100,0.5*height,t+100,1.5*height);
        pop();
     }   
      */ 
    //DSB-FC
    if(t<500)
        {
    stroke(0,191,255);
    //fll(color(0,191,255));
    line(0.5*width-t,height,0.5*width-t,0.75*height);
    line(0.5*width+t,height,0.5*width+t,0.75*height);
    triangle(0.497*width-t,0.75*height,0.5*width-t,0.75*height -5,0.503*width-t,0.75*height);
    triangle(0.497*width+t,0.75*height,0.5*width+t,0.75*height -5,0.503*width+t,0.75*height);
    textSize(20);
    stroke(255);
    text("0.5A",0.5*width+t,0.75*height-20);
    text("0.5A",0.5*width-t,0.75*height-20);
        }
    else
    {
        t=500;
        stroke(0,191,255);
    //fll(color(0,191,255));
    line(0.5*width-t,height,0.5*width-t,0.75*height);
    line(0.5*width+t,height,0.5*width+t,0.75*height);
    triangle(0.497*width-t,0.75*height,0.5*width-t,0.75*height -5,0.503*width-t,0.75*height);
    triangle(0.497*width+t,0.75*height,0.5*width+t,0.75*height -5,0.503*width+t,0.75*height);
    textSize(20);
    stroke(255);
    text("0.5A",0.5*width+t,0.75*height-20);
    text("0.5A",0.5*width-t,0.75*height-20);
    }
   
}

function graph(){
    stroke(255);
    strokeWeight(1.5); line(0.1*width,height/2,0.9*width,height/2); triangle(0.09*width,height/2,0.1*width,height/2 - 3,0.1*width,height/2 + 3);
  triangle(0.91*width,height/2,0.9*width,height/2 - 3,0.9*width,height/2 + 3);
    line(width/2,0.1*height,width/2,0.9*height); 
    triangle(0.5*width,0.09*height,0.5*width- 3,0.1*height ,0.5*width+ 3,0.1*height );
  triangle(0.5*width,0.91*height,0.5*width- 3,0.9*height ,0.5*width+ 3,0.9*height );
}
