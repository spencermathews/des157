function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent("myContainer");
  // position does not work for some reason!
  // myCanvas.position(100,100);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  for(var i = 0; i<min(width,height); i+=20) {
    ellipse(width/2, height/2, i, i);
  }
}
