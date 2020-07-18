let result;
let prev=0;
let checkbox;
let tex1;
let strips=1;
let upper_bound=0;
let lower_bound=0;

let y_scale_input;
let x_scale_input;

function setup() {
    
  createCanvas(600, 600);
  textSize(15);
  textAlign(CENTER, CENTER);
  strips = createInput(1);
  strips.position(0.7*width, 0.75*height); 
  
  upper_bound = createInput(3);
  upper_bound.position(0.7*width, 0.80*height);    
  
  lower_bound = createInput(0);
  lower_bound.position(0.7*width, 0.85*height); 
  
  y_scale_input = createInput(150);
  y_scale_input.position(0.7*width, 0.95*height);
    
  x_scale_input = createInput(150);  
  x_scale_input.position(0.7*width, 0.90*height);
    
  checkbox = createCheckbox('Show Strips', true);
  checkbox.position(0.01*width, 0.90*height);
    
  div = createDiv(result).style('font-size', '18px');
  div.position(0.1*width, 0.7*height); 
    
  tex1 = createP();
  tex1.style('font-size', '12.5px',);
  tex1.position(0.5*width, 0.2*height);
  katex.render('\\huge I= \\int _{0} ^{3} \\dfrac{1}{\\sqrt{x^{2}+1}} dx  ', tex1.elt);
    
}
function integrate(x){
    // Write your function here 
    return 1/sqrt((x*x)+1) ;
}
function draw() {
    
    result=0;
    background(135,206,235);
    
    let y_scale=y_scale_input.value();
    let x_scale=x_scale_input.value();
    //let upper_bound = slider3.value();
    let scale = (upper_bound.value()-lower_bound.value())/strips.value();
    
    translate(10,2*height/3);
    
    text('Strips', 0.63*width ,0.103*height);
    text('Upper Limit', 0.60*width , 0.151*height);
    text('Lower Limit', 0.60*width , 0.202*height);
    text('X-scale', 0.60*width , 0.252*height);
    text('Y-scale', 0.60*width , 0.303*height);
  
    if(checkbox.checked())
    {
        strokeWeight(1);
        stroke(0);
        fill(0,255,150);
        beginShape();
        vertex(0,0);
        for ( let x=0; x<=upper_bound.value();x+=scale)
            {  
                vertex(x_scale*x,-y_scale*integrate(x));
            } 
      
            vertex(x_scale*upper_bound.value(),0);
        
        endShape();
     }
    noFill();
    strokeWeight(2);
    stroke(255);
    
    beginShape();
    //vertex(0,0);
    for ( let x=0; x<=upper_bound.value();x+=0.01)
        {  
        vertex(x_scale*x,-y_scale*integrate(x));
        }
    endShape();
    
    if(checkbox.checked())
        {
        for ( let x=0; x<=upper_bound.value(); x+=scale)
            {
            stroke(0);
            strokeWeight(4);    
            point(x_scale*x,-y_scale*integrate(x));
            strokeWeight(1);     
            line(x_scale*x,0,x_scale*x,-y_scale*integrate(x));
                
            result =  result + integrate(x);
            
            }

            result = 2*result - integrate(0)-integrate(upper_bound.value());
            result = scale*result/2
         }

    if(checkbox.checked()){
    div.html(result);
    }

}
