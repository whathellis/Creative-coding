

let x = 0; 
let y = 0;
let xdirection = 3;
let ydirection = 1;
let d = 50;
let currentColour = color(244, 205, 0);
let targetColour = color(110,0,250);
let tColour = color(244, 205, 0);
let cColour = color(110,0,250);
let Colour = color(0,0,0);

function setup() {
  createCanvas(500, 500);
  background(5, 225, 220);
}

function draw() {
  
  strokeWeight(0);
  if (mouseIsPressed){fill(56,67,78);}
  else {fill(230);}
  circle(mouseX, mouseY, 20);


  x = x + xdirection;
	y = y + ydirection; 
 
  if (x > 500 - d ) {xdirection += -2;  cColour = lerpColor(cColour, tColour, 0.025);
    currentColour = lerpColor(currentColour, targetColour, 0.025);}
  if (y > 500 - d ) {ydirection += -1;}
  if (x < 0 + d/2 ) {xdirection += 3;}
  if (y < 0 + d/2 ) {ydirection += 1;}


  stroke(cColour);
	strokeWeight(5);
  fill(currentColour);
	ellipse(x, y, d, d);

}
