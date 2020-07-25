function setup() {
  createCanvas(2700, 2700);
}

function draw() {
  background(0);
  var r = 1300;
  stroke(255);
  translate(width/2, height*2.3/4);
  line(0,0,0,-r);
  line(0,0,r*cos(PI/6),r*sin(PI/6));
  line(0,0,-r*cos(PI/6),r*sin(PI/6));
  strokeWeight(4);
  for (let t = 0; t <= r; t = t + 100) {
    line(0, -t, -(r-t)*cos(PI/6), (r-t)*sin(PI/6));
    line(t*cos(PI/6), t*sin(PI/6), -(r-t)*cos(PI/6), (r-t)*sin(PI/6));
    line(0, -t, (r-t)*cos(PI/6), (r-t)*sin(PI/6));
  }
}
