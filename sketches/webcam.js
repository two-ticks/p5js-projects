let capture;

function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide(); //comment this if you don't want to see default feed 
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
  //filter(INVERT); 
}
