var t=0;
const capturer = new CCapture({
framerate : 30,
format : "webm",
name: "movie",
quality: 100,
verbose: true,
});
let p5Canvas;

function setup() {
  p5Canvas = createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  if (frameCount === 1) capturer.start();
  background(220);
  t+=0.03;
  translate(width/2,height/2);
  noFill();
  
  //rotate(PI/2);
 
  //bezier(-150,00, -50,-100*sin(t) , 50,100*sin(t) , 150 ,00);
for (var a=0;a<=20;a++)
{
  
  waves();
  rotate(a*PI/10);
}

capturer.capture(p5Canvas.canvas);
if (frameCount === 300){
  noLoop();
  capturer.stop();
  capturer.save();
}
}

function waves (){
   stroke(random(255),random(50),random(155));
  bezier(-150,00, 20*sin(t),140*sin(t) , 30*sin(t),140*cos(t) , 150 ,00);
  //bezier(-150,00, 30*sin(t),150*sin(t) , 40*sin(t),150*cos(t) , 150 ,00);
  bezier(-150,00, 40*sin(t),160*sin(t) , 50*sin(t),160*cos(t) , 150 ,00);
  //bezier(-150,00, 50*sin(t),170*sin(t) , 60*sin(t),170*cos(t) , 150 ,00);
  bezier(-150,00, 60*sin(t),180*sin(t) , 70*sin(t),180*cos(t) , 150 ,00);
  //bezier(-150,00, 70*sin(t),190*sin(t) , 80*sin(t),190*cos(t) , 150 ,00);
  bezier(-150,00, 60*sin(t),200*sin(t) , 70*sin(t),200*cos(t) , 150 ,00);
}