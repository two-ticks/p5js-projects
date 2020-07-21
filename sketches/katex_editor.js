let tex;
let katexScript;
let fontSize;
let size;

function setup() {
    createCanvas(400, 400); 
    fontSize = createSlider(3,50,14,0.1);
    fontSize.position(0,height);
    katexScript = createInput('\\Huge F = \\Huge G \\frac{m_{1}\\cdot{m_{2}}}{r^{2}}');
    katexScript.position(width*2.85/5,height);
    tex = createP();
    tex.position(width/5, height/3);    
}

function draw() {  
    background(155);
    tex.style('font-size', fontSize.value()+'px');
    katex.render(katexScript.value(), tex.elt);
}

function mouseDragged(){
    if(mouseX<=width && mouseY<=height)
    {
       tex.position(mouseX, mouseY);
    }
    
}
