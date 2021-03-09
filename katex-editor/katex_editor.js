let tex;
let katexScript;
let fontSize;
let size;
let grabbed=false;
var offsetX=0,offsetY=0;
var currX,currY;

let p5Canvas;
    

function setup() {
    
    p5Canvas = createCanvas(1000, 520); 
    //frameRate(25);
    fontSize = createSlider(10,98,44,0.1);
    fontSize.position(width*2/3,height);
    //katexScript = createInput('\\Huge F = \\Huge G \\frac{m_{1}\\cdot{m_{2}}}{r^{2}}');
    //katexScript.position(width,0);
    //katexScript.size(width/4,height);
    //katexScript.id('texScript');
    
    //katexScript.style("max-width:", 600px, ")");
    currX=width/1.75;
    currY=height/3;
    tex = createP();
    tex.position(currX, currY);
    
    //button = createButton('click me');
  //button.position(19, 19);
  //button.mousePressed(save_cnv);
}



function draw() {  
   // if (frameCount === 1) capturer.start();
    background(155);
    //console.log(document.getElementById("texScript").value);
    var textarea = document.getElementById('texScript');
    try {
        tex.style('font-size', fontSize.value()+'px');
        //katex.render(katexScript.value(), tex.elt);
        katex.render(textarea.value, tex.elt);
        tex.mousePressed(clicked);
    }
    catch (error){
        textSize(32);
        fill(0, 102, 153);
        text("Syntax Error!", width/2, height/2);
        textAlign(CENTER, CENTER);
        
        //text('word', 10, 60);
        console.log("Syntax Error!");
    }
    
    updateTexLocation();
     //console.log(tex.position().x);
    
}

function clicked(){
    grabbed=true;
    offsetX = tex.position().x - mouseX;
    offsetY = tex.position().y - mouseY;
    tex.style("user-select", "none");
}

function mouseReleased(){
    grabbed=false;
}
function mouseDragged(){
    if((grabbed==true)&&(mouseX<=width && mouseY<=height))
    {
       currX = mouseX+offsetX;
       currY = mouseY+offsetY;    
       
       console.log(tex.size().width);
    }
    
}

function updateTexLocation(){
    tex.position(currX,currY);
}

