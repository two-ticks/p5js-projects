/*
 * @name Graphing 2D Equations
 * @frame 320, 180
 * @description Daniel Shiffman <br> Graphics the following equation: sin(n*cos(r) + 5*theta) where n is a function of horizontal mouse location.
 */
function setup() {
  createCanvas(320, 180);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  var n = (mouseX * 10.0) / width;
  var w = 16.0; // 2D space width
  var h = 16.0; // 2D space height
  var dx = w / width; // Increment x this amount per pixel
  var dy = h / height; // Increment y this amount per pixel
  var x = -w / 2; // Start x at -1 * width / 2

  //variables
  let i;
  let j;
  var y;
  var r;
  var theta;
  var val;
  let bw; //variable to store grayscale

  let cols = width;
  let rows = height;

  for (i = 0; i < cols; i += 1) {
    y = -h / 2;

    for (j = 0; j < rows; j += 1) {
      r = sqrt((x * x) + (y * y)); // Convert cartesian to polar
      theta = atan2(y, x); // Convert cartesian to polar
      // Compute 2D polar coordinate function
      val = sin(n * cos(r) + 5 * theta); // Results in a value between -1 and 1
      //var val = cos(r);                            // Another simple function
      //var val = sin(theta);                        // Another simple function
      bw = color(((val + 1) * 255) / 2);
      index = 4 * (i + j * width);
      pixels[index] = red(bw);
      pixels[index + 1] = green(bw);
      pixels[index + 2] = blue(bw);
      pixels[index + 3] = alpha(bw);

      y += dy;
    }

    x += dx;
  }
  updatePixels();
}