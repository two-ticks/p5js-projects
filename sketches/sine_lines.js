var t = 0;
var amp = 0;
var slider = 0;
function setup() {
  createCanvas(500,500);
  slider = createSlider(0, 360, 133, 1);
  slider.position(width/10,height/10);
    amp = width/3;
}
function draw() {
background(0);
  t += 0.0314;
  translate(width/2,height/2);
    var len = 12;
    var shift;
  stroke(255);
    strokeWeight(2);
  fill(255);
  for (let a = 0 ; a < 110; a++)
    {
    rotate(slider.value());  
    line(0, 0, 0, -amp+0.1*amp*sin(a+2*t));  
      push();
      stroke(255, 10, 203);
      strokeWeight(5.5);
      point(0, -amp+0.1*amp*sin(a+2*t));
    pop();
      translate(0, -12); 
    }

}
