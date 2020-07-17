let result;
let prev=0;
let slider;
let slider1;
let slider2;
function setup() {
  createCanvas(600, 600);  
  slider = createSlider(0.01, 15, 15, 0.01);
  //slider.position(10, 500);
  slider1 = createSlider(1, 2000, 10, 10);
  //slider1.position(10, 520); 
  slider2 = createSlider(10, 1000, 100, 10);
  //slider2.position(10, 540); 
  div = createDiv(result).style('font-size', '18px');
  div.position(200, 35);   
}
function integrate(x){
    return exp(-x)*sin(pow(x,2));
    
}
function draw() {
    result=0;
    background(135,206,235);
    let scale=slider.value();
    let y_scale=slider1.value();
    let x_scale=slider2.value();
    translate(10,height/2);
    if(scale<=14.9)
    {
        strokeWeight(1);
        stroke(0);
        fill(0,255,150);
        beginShape();
        vertex(0,0);
        for ( let x=0; x<100;x+=0.1*scale)
            {  
                vertex(x_scale*x,-y_scale*integrate(x));
            }
        endShape();
     }
    noFill();
    strokeWeight(2);
    stroke(255);
    
    beginShape();
    vertex(0,0);
    for ( let x=0; x<100;x+=0.01)
        {  
        vertex(x_scale*x,-y_scale*integrate(x));
        }
    endShape();
    
    if(scale<=14.9)
        {
        for ( let x=0; x<100;x+=(0.1*scale))
            {
            stroke(0);
            strokeWeight(4);    
            point(x_scale*x,-y_scale*integrate(x));
            strokeWeight(1);     
            line(x_scale*x,0,x_scale*x,-y_scale*integrate(x));
            result =  result + (0.1*scale)*integrate(x);
            }
         }
    
    if(scale<14.9){
    div.html(result);
    }
    
     //katex.render(temp, tex1.elt);

}
