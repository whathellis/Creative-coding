
let b=0;
const d = [
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220,220,224);

}

function draw() {



  circle(mouseX, mouseY, b);
  strokeWeight(0);
  if(mouseIsPressed){ b = random(d); fill(0,0,0); 

  } 
  else { b = 0; fill(220,220,224);}
}
