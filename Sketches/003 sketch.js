let currentColour = color(244, 205, 0);
let targetColour = color(254, 47, 3);

function setup() {
	createCanvas(500, 500);
}

function draw() { 
    background(255, 225, 220);




  currentColour = lerpColor(currentColour, targetColour, 0.02);
  fill(currentColour);
  noStroke();
  ellipse(250, 250, 200, 200);

  if (frameCount % 50 === 0) {
    targetColour = color(random(colours));
  }
}