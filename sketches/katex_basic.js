let tex;
function setup() {
  createCanvas(400, 400);                 
  tex = createP(); 
  tex.style('font-size', '14px',);                   //font-size
  tex.position(width/2, height/2);                   //position
  katex.render('\\Huge F = \\Huge G \\frac{m_{1}\\cdot m_{2}}{r^{2}}', tex.elt);   //KaTex script 
}
function draw() {  
    background(135,206,235);  
}
