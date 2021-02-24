let tex;
let katexScript;
let fontSize;
let size;
let grabbed=false;

//CCapture
const capturer = new CCapture({
    framerate : 30,
    format : "png",
    name: "movie",
    quality: 100,
    verbose: true,
    });
  
    let p5Canvas;
    

function setup() {
    p5Canvas = createCanvas(400, 400); 
    fontSize = createSlider(3,50,14,0.1);
    fontSize.position(width*2/3,height);
    katexScript = createInput('\\Huge F = \\Huge G \\frac{m_{1}\\cdot{m_{2}}}{r^{2}}');
    katexScript.position(0,height);
    katexScript.size(200,100);
    tex = createP();
    tex.position(width/5, height/3);
    
    button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(save_cnv);
}

function draw() {  
    if (frameCount === 1) capturer.start();
    background(155);
    tex.style('font-size', fontSize.value()+'px');
    katex.render(katexScript.value(), tex.elt);
    tex.mousePressed(clicked); 
}

function clicked(){
    grabbed=true;
}

function mouseReleased(){
    grabbed=false;
}
function mouseDragged(){
    if((grabbed==true)&&(mouseX<=width && mouseY<=height))
    {
       
       tex.position(pmouseX, pmouseY);
       
    }
    
}

function save_cnv(){
//saving after specified frames
capturer.capture(p5Canvas.canvas);
//if (frameCount === 1)  //frame to stop
//{
  //noLoop();
  capturer.stop();
  capturer.save();
//}
}