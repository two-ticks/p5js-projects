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
  pop(); 
  scale(0.5);
    translate(width/2,0);
  var t1 = 0.55*width;
  var t2 = t1+150;
  var t  = 0.4*frameCount;    
  noFill();
  stroke(255);
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
    //DSB-FC
    if(t<250)
        {
          var cosf_c1=concat("m(t)cos(2π",int(t)) ;
          var cosf_c2=concat(cosf_c1,"t)") ;
          text(cosf_c2,2*width/4,0.55*height);  
          text("f",0.9*width,height+30);      
    stroke(0,191,255);
    fill(0,191,255);
    triangle(0.3*width-t,height,0.4*width-t,0.85*height -5,0.5*width-t,height);
    triangle(0.5*width+t,height,0.6*width+t,0.85*height -5,0.7*width+t,height);
    textSize(25);
    stroke(255);
    noFill();
    var m_1=concat("M(f-",int(t));
    var m_2=concat("M(f+",int(t));
    var m_1f=concat(m_1,")");
    var m_2f=concat(m_2,")");
    text(m_1f,0.6*width+t,0.80*height-20);  
    text(m_2f,0.4*width-t,0.80*height-20);
        }
    else
    {
        t=250;
        var cosf_c1=concat("m(t)cos(2π",int(t)) ;
        var cosf_c2=concat(cosf_c1,"t)") ;
        text(cosf_c2,2*width/4,0.55*height);  
        text("f",0.9*width,height+30);
        stroke(0,191,255);
        fill(0,191,255);
        triangle(0.3*width-t,height,0.4*width-t,0.85*height -5,0.5*width-t,height);
        triangle(0.5*width+t,height,0.6*width+t,0.85*height -5,0.7*width+t,height);
        textSize(25);
        stroke(255);
        noFill();
        var m_1=concat("M(f-",int(t));
        var m_2=concat("M(f+",int(t));
        var m_1f=concat(m_1,")");
        var m_2f=concat(m_2,")");
        text(m_1f,0.6*width+t,0.80*height-20);  
        text(m_2f,0.4*width-t,0.80*height-20);
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
