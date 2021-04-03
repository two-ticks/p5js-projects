let To = 2;
let W = 1300;
var scale = 2;
let y_scale = 250;
let x_scale = 25;
let T = 1.5;
let T_p = 1;
let k = 10; //adjusment constant
let tex;
let cn;

function setup() {
    createCanvas(1500, 700);
    frameRate(6);
    slider = createSlider(1, 15, 1, 0.1);
    slider.position(0.1*width, 0.5*height);

    cn = createP(); 
    cn.style('font-size', '18px',);                                                 //font-size
    cn.position(0.075*width, 0.475*height);
    katex.render("T_p", cn.elt);   //KaTex script 


    tex = createP(); 
    tex.style('font-size', '28px',);                                                 //font-size
    tex.position(width*0.4, height*2/5);
    

   checkbox = createCheckbox('Animate', true);
   checkbox.position(0.075*width, 0.575*height);
  }
  
function draw() {
    background(50,20,150);
    noFill();

    T_p = slider.value();
    if(T<T_p)
    {
      T = T_p + 0.5;
    }
    if(checkbox.checked())
    {
      T+=0.05;
    }
    stroke(255);
    //graph
    push();
    translate(0, -0.25*height);
    graph();
    pop();

    push();
    translate(0, 0.25*height);
    graph();
    pop();
    //sinc
    push ();

    translate(0.5 * width, 0.75*height);
    scale(0.5);
    stroke(250,20,50);
    strokeWeight(4);
    beginShape();
    
    //vertex(0,0);
    for ( let x=-0.03*width; x<=0.03*width;x+=0.01)
        {  
        vertex(x_scale*x,-y_scale*sinc(x));
        }
    endShape();
        pop ();
       
        //coeff
        push ();
        translate(0.5 * width, 0.75*height);
        scale(0.5);
        
        //vertex(0,0);
        for ( let x=0; x<=0.03*width;x+=k*T_p/T)
            {  
              stroke(50,250,50);  
            strokeWeight(3);
            line(x_scale*x,0,x_scale*x,-y_scale*sinc(x));
            //stroke(50,250,50);
            strokeWeight(8);    
            point(x_scale*x,-y_scale*sinc(x));
            }
            
        //mirror
        for ( let x=0; x>=-0.03*width;x-=k*T_p/T)
            {  
              stroke(50,250,50); 
            strokeWeight(3); 
            line(x_scale*x,0,x_scale*x,-y_scale*sinc(x));
            //stroke(50,250,50);
            strokeWeight(8);    
            point(x_scale*x,-y_scale*sinc(x));
            }    

        pop ();


       ppf();

        //keys
        if (keyIsDown(LEFT_ARROW) && T>T_p+0.5) {
          T -= 0.5;
        }
      
        if (keyIsDown(RIGHT_ARROW)) {
          T += 0.5;
        }

        push(); 
        var a=concat("{c_n} = {{{", nfc(T_p, 2));
        var a1=concat(a, "}} \\over");
        var a2=concat(a1, nfc(T, 2));
        var b=concat(a2,"}{\\mathop{\\rm sinc}\\nolimits} \\left( {{{n{");
        var b1 = concat(b,nfc(T_p, 2));
        var b2 = concat(b1,"}} \\over");
        var c=concat(b2,nfc(T, 2));
        var d=concat(c,'}} \\right)');
        katex.render(d, tex.elt);   //KaTex script 
        pop();
  }

  function graph() {
    stroke(255);
    strokeWeight(0.5);

    line(0.1 * width, 0.5 * height, 0.9 * width, 0.5 * height ); //horizontal
    triangle(0.095 * width, 0.5 * height, 0.1 * width, 0.5 * height - 3, 0.1 * width, 0.5 * height + 3);
    triangle(0.905 * width, 0.5 * height, 0.9 * width, 0.5 * height - 3, 0.9 * width, 0.5 * height + 3);
    
    // line(0.5 * width, 0.1 * height, 0.5 * width, 0.9 * height); //vertical 
    // triangle(0.5 * width, 0.09 * height, 0.5 * width - 3, 0.1 * height, 0.5 * width + 3, 0.1 * height);
    // triangle(0.5 * width, 0.91 * height, 0.5 * width - 3, 0.9 * height, 0.5 * width + 3, 0.9 * height);
  }
  
function sinc(x){
    // Write your function here
    if(x!=0){
      return sin(x)/x ;
    }
    else {
      return 1;
    } 
}

function ppf(){
      //ppf
      
      push ();
      translate(0.5 * width, 0.25*height);
      scale(0.5);
      stroke(250,20,50);
      strokeWeight(4);
      beginShape();
      //vertex(0,0);
      for ( let x=0; x<=0.03*width;x+=T)
          {  
           vertex(x_scale*(x-0.5*T_p),0);  
           vertex(x_scale*(x-0.5*T_p),-y_scale);
           vertex(x_scale*x,-y_scale);
           vertex(x_scale*(x+0.5*T_p),-y_scale);
           vertex(x_scale*(x+0.5*T_p),0);
           
          }
          endShape();
          beginShape();
          //mirror reflection
          vertex(x_scale*(-0.5*T_p),0);
          for ( let x=-T; x>=-0.03*width;x-=T)
          {  
           vertex(x_scale*(x+0.5*T_p),0);  
           vertex(x_scale*(x+0.5*T_p),-y_scale);
           vertex(x_scale*x,-y_scale);
           vertex(x_scale*(x-0.5*T_p),-y_scale);
           vertex(x_scale*(x-0.5*T_p),0);
          }
      endShape();
      pop ();    
}
