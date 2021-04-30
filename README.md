# p5js-projects
This repository includes projects from p5.js, manim.js, katex.js, physics.js and similar.

<img src="images/integral_example.gif" width="350" />
<img src="images/crank_shaft.gif" width="500" /> 


[Go to webpage!](https://two-ticks.github.io/p5js-projects/) 

[sampling](https://two-ticks.github.io/p5js-projects/sampling)

[frequency_domain_shifting](https://two-ticks.github.io/p5js-projects/frequency_domain_shifting)

[multiplication_by_cosine](https://two-ticks.github.io/p5js-projects/multiplication_by_cosine)

[Go to webpage!](https://two-ticks.github.io/p5js-projects/)

[katex editor!](https://two-ticks.github.io/p5js-projects/katex-editor.html) 
## How to run a sketch
To run a sketch change the following code present in index.html file.
``` html
<script src="sketch_name.js"></script> 
<!--this will run sketch_name.js -->
```
## How to add KaTex
```javascript
let tex;
function setup() {
  createCanvas(400, 400);                 
  tex = createP(); 
  tex.style('font-size', '14px',);                                                 //font-size
  tex.position(width*1/5, height*2/5);                                             //position
  katex.render('\\Huge F = \\Huge G \\frac{m_{1}\\cdot m_{2}}{r^{2}}', tex.elt);   //KaTex script 
}
function draw() {  
  background(255);  
}
 
```
<img src="images/katex_example.jpg" width="150" />

## References

* https://p5js.org/reference/
* https://editor.p5js.org/
* https://katex.org/
* https://github.com/JazonJiao/Manim.js

