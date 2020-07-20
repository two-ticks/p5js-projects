let tex;
function setup() {
  createCanvas(400, 400);                 
  tex = createP(); 
  tex.style('font-size', '14px',);                   //font-size
  tex.position(width/2, height/2);                   //position
  katex.render('\\int _{0}^{3} x^{2}dx', tex.elt);   //KaTex script 
}
function draw() {  
    background(135,206,235);  
}
