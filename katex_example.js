let tex;
let tex1;

function setup() {
  createCanvas(610, 600);  
     
  tex = createP();
  tex.style('font-size', '13.5px');
  tex.position(15, 15);
  katex.render('sin^{6}(x)  =  \\bigg( \\dfrac {e^{xi}-e^{-xi}} {2i} \\bigg) ^{6}  =  \\dfrac {1} {-64} \\bigg(  {e^{xi}-e^{-xi}}  \\bigg) ^{6} \\\\ = \\dfrac {1} {-64} \\bigg( \\binom{6}{0} e^{6xi}e^{-0xi} - \\binom{6}{1} e^{5xi}e^{-xi} + \\binom{6}{2} e^{4xi}e^{-2xi} - \\binom{6}{3} e^{3xi}e^{-3xi} \\\\ \\hspace{3.5em} + \\binom{6}{4}  e^{2xi}e^{-4xi} - \\binom{6}{5} e^{xi}e^{-5xi} + \\binom{6}{6} e^{0xi}e^{-6xi} \\bigg) \\\\= \\dfrac {1} {-64} \\bigg( e^{6xi} - 6e^{4xi} + 15 e^{2xi} - 20 + 15e^{-2xi} - 6e^{-4xi} +  e^{-6xi} \\bigg) \\\\= \\dfrac {1} {-64} \\bigg( (e^{6xi} +  e^{-6xi}) - 6(e^{4xi} + e^{-4xi}) + 15 (e^{2xi}  + e^{-2xi}) - 20 \\bigg) \\\\= \\dfrac {1} {-64} \\bigg( 2cos(6x) - 12cos(4x) + 30cos(2x) - 20 \\bigg) \\hspace{3em} \\because \\dfrac {e^{nxi} +  e^{-nxi}}{2} = cos(nx)', tex.elt);
  
  tex1 = createP();
  tex1.style('font-size', '12.5px',);
  tex1.position(15, 300);
  katex.render(' \\\\ \\newline I= \\int e^{ax} cos(bx) dx  \\\\ =  cos(bx) \\int e^{ax} - \\int \\bigg(\\int e^{ax} dx .\\dfrac{d(cos(bx))}{dx}\\bigg) dx \\\\=  cos(bx) \\dfrac {e^{ax}}{a} +\\dfrac {b}{a} \\int e^{ax}sin(bx) dx \\\\=  cos(bx) \\dfrac {e^{ax}}{a} +\\dfrac {b}{a}( sin(bx)\\int e^{ax} dx - \\frac{b}{a}\\int e^{ax} cos(bx) dx \\\\ \\Rightarrow I =  cos(bx) \\dfrac {e^{ax}}{a} +\\dfrac {b}{a}( sin(bx)\\dfrac {e^{ax}}{a} - \\frac{b}{a}I) \\\\ I = \\dfrac {e^{ax}}{a^{2}+b^{2}} \\bigg[ acos(bx) + bsin(bx) \\bigg] \\\\ \\boxed {I \\big|_0 ^{\\infty} = \\dfrac {1}{a^{2}+b^{2}}}', tex1.elt);
   
}

function draw() {
    background(135,206,235);  
}
