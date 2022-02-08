
function setup() {
  initializeFields();
  createCanvas(600, 200);
  background(color(0x08, 0xFA, 0xE4));
  noFill();
  frameRate(6);
}

function draw() {
  strokeWeight(random(25, 50));
  stroke(random(200, 250), random(200, 250), random(200, 250));
  var rainbowSize = random(250, 300);
  ellipse(400, 220, rainbowSize, rainbowSize);
}

function initializeFields() {
}
