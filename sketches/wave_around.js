var t=0;

//CCapture
const capturer = new CCapture({
framerate : 50,
format : "webm",
name: "movie",
quality: 100,
verbose: true,
});
let p5Canvas;

function setup() {
  p5Canvas = createCanvas(400, 400);
  frameRate(50);
}

function draw() {
  //starting CCapture at first frame
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
  rotate(PI/(10));
}

//saving after specified frames
capturer.capture(p5Canvas.canvas);
if (frameCount === 1000)  //frame to stop
{
  noLoop();
  capturer.stop();
  //capturer.save();
}
}

function waves (){
   stroke(0,random(100),random(150));
  bezier(-150,00, 20*sin(t),140*sin(t) , 30*sin(t),140*cos(t) , 150 ,00);
  //bezier(-150,00, 30*sin(t),150*sin(t) , 40*sin(t),150*cos(t) , 150 ,00);
  bezier(-150,00, 40*sin(t),160*sin(t) , 50*sin(t),160*cos(t) , 150 ,00);
  //bezier(-150,00, 50*sin(t),170*sin(t) , 60*sin(t),170*cos(t) , 150 ,00);
  bezier(-150,00, 60*sin(t),180*sin(t) , 70*sin(t),180*cos(t) , 150 ,00);
  //bezier(-150,00, 70*sin(t),190*sin(t) , 80*sin(t),190*cos(t) , 150 ,00);
  //bezier(-150,00, 60*sin(t),200*sin(t) , 70*sin(t),200*cos(t) , 150 ,00);
  //bezier(-150,00, 80*sin(t),200*sin(t) , 90*sin(t),220*cos(t) , 150 ,00);

}