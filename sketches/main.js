let input;
function setup() {
  createCanvas(240, 240);
  input = createInput();
  input.position(20, 65);
  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(scriptChange);
}

function draw() {
  background(255); 
}

function scriptChange() {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = input;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
}
