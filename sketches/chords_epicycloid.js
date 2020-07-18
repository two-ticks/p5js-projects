var a =180;
var u =2;
var p=2;
function setup() {
  createCanvas(400,400);
}
function draw() {
background(0);
u+=0.036;
var r = a;
    //a+=0.1;
//p+=0.05;
var theta = 2*PI/(u);
var k = p;

translate(width/2,height/2);
for (let i=0; i<u; i+=1)
    {
       strokeWeight(1.9);
        stroke(random(255),random(255),random(255));  
       line(r*cos(i*theta),r*sin(i*theta),r*cos(i*k*theta),r*sin(i*k*theta));
       
     strokeWeight(3.5);
       stroke(255); point(r*cos(i*theta),r*sin(i*theta));point(r*cos(i*k*theta),r*sin(i*k*theta))
    }
    

}
