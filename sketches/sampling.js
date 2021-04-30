//CCapture
// const capturer = new CCapture({
//   framerate : 30,
//   format : "webm",
//   name: "movie",
//   quality: 100,
//   verbose: true,
//   });

let p5Canvas;
  

function setup() {
  p5Canvas = createCanvas(1300, 600);
  frameRate(70);
  
}

function draw() {
  //if (frameCount === 1) capturer.start();

  background(50);
  
  push();
  scale(0.5);
  translate(width / 2, 0);
  graph();
  translate(0, height);
  graph();
  pop();
  
  scale(0.5);
  translate(width / 2, 0);
  var t1 = 0.20 * width; //time instants
  var t2 = t1 + 100;
  var t = frameCount; //internal time
  //noFill();
  
  
  //rect(t1, 0.5 * height, 150, -130);
    
  //var n=-2;
  for(let a=0.115*width;a<=1350;a+=250)
  {
    //impulse
    stroke(0,150,255);
    strokeWeight(4);
    var temp1 = a;
    line(temp1,0.5*height-150,temp1,0.5*height);
    textSize(48);
    
    //line(t1,height,t1,0.75*height);
    triangle(temp1-5,0.5*height-150,temp1,0.5*height -155,temp1+5,0.5*height-150);
    //triangle(t1,0.75*height,t1,0.75*height -5,0.503*width,0.75*height);
    t1=0.0575 * width-100+a;
    t2=0.0575 * width+a;
    strokeWeight(1);
    
  if (t >= 0.1 * width-150 && t <= t1 - 100) {
    //rect(t, 0.5 * height, 100, -100);
    noStroke();
    fill(120, 154, 44);
    triangle(t, 0.5 * height, t+75, 0.5 * height-100, t+150, 0.5 * height);
  } 
  else if (t > t1 - 100 && t <= t1) {

    //convolution
    //stroke(150,150,255);
    push();
    translate(t1-75, 1.5 * height);
    line(0, 0, t - t1 + 100, -(t - t1 + 100));
    pop();
  } 
  else if (t > t1 && t <= t2 - 150) {
    //fill(0, 144, 144);
    //rect(t1,0.5*height,t-t1+100,-100);
    //noFill();
    //rect(t, 0.5 * height, 100, -100);

    //convolution
    push();
    translate(t1-75, 1.5 * height);
    line(0, 0, 100, -100);
    line(100, -100, t - t1 + 100, -100);
    pop();
  } 
  else if (t > t2 - 150 && t <= t2) {
    //fill(0, 144, 144);
    //rect(t2, 0.5 * height, t - t2, -100);
    //noFill();
    //rect(t, 0.5 * height, 100, -100);
    //convolution
    push();
    translate(t1-75, 1.5 * height);
    line(0, 0, 100, -100);
    line(100, -100, t2 - t1, -100);
    line(t2 - t1, -100, t - t1 + 100, (t - t2));
    pop();
  } 
  else if (t > t2 && t <  0.9*width+100) {
    //fill(234,44,44);
    //rect(t2,0.5*height,t-t2,-100);
    //noFill();
    //rect(t, 0.5 * height, 100, -100);

    //convolution
    push();
    translate(t1-75, 1.5 * height);
    line(0, 0, 100, -100);
    line(100, -100, t2 - t1, -100);
    line(t2 - t1, -100, t2 - t1 + 100, (t2 - t2));
    pop();
  } 
  else if (t >= 0.9 * width + 100) {
    
    push();
    translate(t1-75, 1.5 * height);
    line(0, 0, 100, -100);
    line(100, -100, t2 - t1, -100);
    line(t2 - t1, -100, t2 - t1 + 100, (t2 - t2));
    pop();
  }
  if (t >= 0.1 * width-150 && t <= t1+100 ) {
    //rect(t, 0.5 * height, 100, -100);
    noStroke();
    fill(120, 154, 44);
    triangle(t, 0.5 * height, t+75, 0.5 * height-100, t+150, 0.5 * height);
  } 
  }
 
  stroke(255);  
  
  fill(255);
  noStroke();
  textSize(48);
  textAlign(CENTER, CENTER);
  //text("y(x)",width/2+50,0.1*height);  
  text("x", 0.9 * width+100, 0.5 * height + 30);
  text("f˳ΣM(f-nf˳)", width / 2 + 130, 1.1 * height);
  text("f", 0.9 * width+100, 1.5 * height + 30);
  //g(x) and f(x)
  text("x˳Σδ(x-nx˳)", width / 2 + 140, 0.5 * height - 220);
  if (t <= 0.9 * width - 10 && t >= 0.1 * width-150) {
    text("M(f-x)", t + 50, 0.5 * height - 130);
    push();
    drawingContext.setLineDash([20, 5, 5, 5, 5, 5, 5, 5]);
    stroke(255);
    line(t +25, 0.5 * height, t +25, 1.5 * height);
    pop();
  }
  
//saving after specified frames
// capturer.capture(p5Canvas.canvas);
// if (frameCount === 1)  //frame to stop
// {
//   noLoop();
//   capturer.stop();
//   capturer.save();
// }
}

function graph() {
  stroke(255);
  strokeWeight(1.5);
  line(0.1 * width-100, height / 2, 0.9 * width+100, height / 2);
  triangle(0.09 * width-100, height / 2, 0.1 * width-100, height / 2 - 3, 0.1 * width-100, height / 2 + 3);
  triangle(0.91 * width+100, height / 2, 0.9 * width+100, height / 2 - 3, 0.9 * width+100, height / 2 + 3);
  line(width / 2, 0.1 * height, width / 2, 0.9 * height);
  triangle(0.5 * width, 0.09 * height, 0.5 * width - 3, 0.1 * height, 0.5 * width + 3, 0.1 * height);
  triangle(0.5 * width, 0.91 * height, 0.5 * width - 3, 0.9 * height, 0.5 * width + 3, 0.9 * height);
}
