# p5js-projects

This repository includes projects from p5.js, manim.js, katex.js, physics.js and similar.

[Go to webpage!](https://two-ticks.github.io/p5js-projects/) 

# How to run a sketch
To run a sketch change the following code present in index.html file.
``` html
<script src="sketch_name.js"></script> 
<!--this will run sketch_name.js -->
```
# KaTex
```javascript
  let tex;
  function setup() {
  createCanvas(400, 400);                 
  tex = createP(); 
  tex.style('font-size', '14px',);                   //font-size
  tex.position(width/2, height/2);                   //position
  katex.render('\\int _{0}^{3} x^{2}dx', tex.elt);   //KaTex script 
  }
```
