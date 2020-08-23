function setup() {
  createCanvas(1300, 600);
  frameRate(40);
}

function draw() {
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
  var t1 = 0.55 * width;
  var t2 = t1 + 150;
  var t = frameCount;
  noFill();
  stroke(255);
  rect(t1, 0.5 * height, 150, -130);
  if (t >= 0.1 * width && t <= t1 - 100) {
    rect(t, 0.5 * height, 100, -100);
  } else if (t > t1 - 100 && t <= t1) {
    fill(0, 144, 144);
    rect(t1, 0.5 * height, t - t1 + 100, -100);
    noFill();
    rect(t, 0.5 * height, 100, -100);
    //convolution
    push();
    translate(t1, 1.5 * height);
    line(0, 0, t - t1 + 100, -(t - t1 + 100));
    pop();
  } else if (t > t1 && t <= t2 - 100) {
    fill(0, 144, 144);
    //rect(t1,0.5*height,t-t1+100,-100);
    //noFill();
    rect(t, 0.5 * height, 100, -100);

    //convolution
    push();
    translate(t1, 1.5 * height);
    line(0, 0, 100, -100);
    line(100, -100, t - t1 + 100, -100);
    pop();
  } else if (t > t2 - 100 && t <= t2) {
    fill(0, 144, 144);
    rect(t2, 0.5 * height, t - t2, -100);
    noFill();
    rect(t, 0.5 * height, 100, -100);
    //convolution
    push();
    translate(t1, 1.5 * height);
    line(0, 0, 100, -100);
    line(100, -100, t2 - t1, -100);
    line(t2 - t1, -100, t - t1 + 100, (t - t2));
    pop();
  } else if (t > t2 && t <= 0.9 * width - 100) {
    //fill(234,44,44);
    //rect(t2,0.5*height,t-t2,-100);
    noFill();
    rect(t, 0.5 * height, 100, -100);

    //convolution
    push();
    translate(t1, 1.5 * height);
    line(0, 0, 100, -100);
    line(100, -100, t2 - t1, -100);
    line(t2 - t1, -100, t2 - t1 + 100, (t2 - t2));
    pop();
  } else if (t >= 0.9 * width - 100) {
    push();
    translate(t1, 1.5 * height);
    line(0, 0, 100, -100);
    line(100, -100, t2 - t1, -100);
    line(t2 - t1, -100, t2 - t1 + 100, (t2 - t2));
    pop();
  }
  fill(255);
  noStroke();
  textSize(38);
  textAlign(CENTER, CENTER);
  //text("y(x)",width/2+50,0.1*height);  
  text("x", 0.9 * width, 0.5 * height + 30);
  text("f(t) * g(t)", width / 2 + 100, 1.1 * height);
  text("t", 0.9 * width, 1.5 * height + 30);
  //g(x) and f(x)
  text("f(x)", width / 2 + 140, 0.5 * height - 160);
  if (t <= 0.9 * width - 100 && t >= 0.1 * width) {
    text("g(t-x)", t + 50, 0.5 * height - 130);
    push();
    drawingContext.setLineDash([20, 5, 5, 5, 5, 5, 5, 5]);
    stroke(255);
    line(t + 100, 0.5 * height, t + 100, 1.5 * height);
    pop();
  }

}

function graph() {
  stroke(255);
  strokeWeight(1.5);
  line(0.1 * width, height / 2, 0.9 * width, height / 2);
  triangle(0.09 * width, height / 2, 0.1 * width, height / 2 - 3, 0.1 * width, height / 2 + 3);
  triangle(0.91 * width, height / 2, 0.9 * width, height / 2 - 3, 0.9 * width, height / 2 + 3);
  line(width / 2, 0.1 * height, width / 2, 0.9 * height);
  triangle(0.5 * width, 0.09 * height, 0.5 * width - 3, 0.1 * height, 0.5 * width + 3, 0.1 * height);
  triangle(0.5 * width, 0.91 * height, 0.5 * width - 3, 0.9 * height, 0.5 * width + 3, 0.9 * height);
}
