let tex;
let tex1;
var temp='';
let pr;
let text1=['sin^{6}(x)  =  \\bigg( \\dfrac {e^{xi}-e^{-xi}} {2i} \\bigg) ^{6}  =  \\dfrac {1} {-64} \\bigg(  {e^{xi}-e^{-xi}}  \\bigg) ^{6}' , '\\\\ = \\dfrac {1} {-64} \\bigg( \\binom{6}{0} e^{6xi}e^{-0xi} - \\binom{6}{1} e^{5xi}e^{-xi} + \\binom{6}{2} e^{4xi}e^{-2xi} - \\binom{6}{3} e^{3xi}e^{-3xi} + \\binom{6}{4} e^{2xi}e^{-4xi} - \\binom{6}{5} e^{xi}e^{-5xi} + \\binom{6}{6} e^{0xi}e^{-6xi} \\bigg)' ,'\\\\= \\dfrac {1} {-64} \\bigg( e^{6xi} - 6e^{4xi} + 15 e^{2xi} - 20 + 15e^{-2xi} - 6e^{-4xi} +  e^{-6xi} \\bigg)' ,'\\\\= \\dfrac {1} {-64} \\bigg( (e^{6xi} +  e^{-6xi}) - 6(e^{4xi} + e^{-4xi}) + 15 (e^{2xi}  + e^{-2xi}) - 20 \\bigg)' , '\\\\= \\dfrac {1} {-64} \\bigg( 2cos(6x) - 12cos(4x) + 30cos(2x) - 20 \\bigg) \\hspace{9em} \\because \\dfrac {e^{nxi} +  e^{-nxi}}{2} = cos(nx) '];

let result;
let prev=0;
let slider;
let slider1;
let slider2;
function setup() {
  createCanvas(600, 600);  
  slider = createSlider(0.5, 15, 15, 0.1);
  slider3 = createSlider(0, text1.length, 0, 1);
  //slider.position(10, 500);
  slider1 = createSlider(100, 2000, 800, 10);
  //slider1.position(10, 520); 
  slider2 = createSlider(10, 1000, 100, 10);
  //slider2.position(10, 540);    
  tex = createP();
  tex.style('font-size', '18px');
  tex.position(15, 15);
  katex.render('\\int_{0}^{\\infty} e^{-x} sin^{6}(x) dx  = \\\\Integrating \\space By \\space Parts, \\\\ = \\int_{0}^{\\infty} \\dfrac {e^{-x}} {-64} \\big( 2cos(6x) - 12cos(4x) + 30cos(2x) - 20 \\big) \\\\= -\\dfrac{1}{64} \\big( 2\\dfrac{1}{1^{2}+6^{2}} - 6\\dfrac{1}{1^{2}+4^{2}} + 30\\dfrac{1}{1^{2}+2^{2}} - 20\\big) \\\\=\\dfrac{144}{629} \\approx 0.2289348171699475 ', tex.elt);
  tex1 = createP();
  tex1.style('font-size', '11px');
  tex1.position(25, 65);
  
    
    div = createDiv(result).style('font-size', '18px');
    div.position(200, 35);
    
}
function draw() {
    result=0;
    background(135,206,235);
    let scale=slider.value();
    let y_scale=slider1.value();
    let x_scale=slider2.value();
    translate(10,480);
    pr = slider3.value();
    if(scale<=14.9)
    {
        strokeWeight(1);
        stroke(0);
        fill(0,255,150);
        beginShape();
        vertex(0,0);
        for ( let x=0; x<100;x+=0.1*scale)
            {  
                vertex(x_scale*x,-y_scale*exp(-x)*pow(sin(x),6));
            }
        endShape(CLOSE);
     }
    noFill();
    strokeWeight(2);
    stroke(255);
    
    beginShape();
    vertex(0,0);
    for ( let x=0; x<100;x+=0.01)
        {  
        vertex(x_scale*x,-y_scale*exp(-x)*pow(sin(x),6));
        }
    endShape();
    
    if(scale<=14.9)
        {
        for ( let x=0; x<100;x+=(0.1*scale))
            {
            stroke(0);
            strokeWeight(4);    
            point(x_scale*x,-y_scale*exp(-x)*pow(sin(x),6));
            strokeWeight(1);     
            line(x_scale*x,0,x_scale*x,-y_scale*exp(-x)*pow(sin(x),6));
            result =  result + (0.1*scale)*exp(-x)*pow(sin(x),6);
            }
         }
    div.html('?');
    if(scale<14.9){
    div.html(result);
    }
    
     //katex.render(temp, tex1.elt);

}
