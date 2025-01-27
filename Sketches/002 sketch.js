let currentColour, targetColour;
const colours = [
  "#e75397",
  "#01b2e8",
  "#e8441f",
  "#ff6a00",
  "#f7a000",
  "#f4cd00",
  "#1b82e6",
  "#6d5acf",
];
let b = 0;
const d = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(45, 45, 45);
}

function draw() {
  currentColour = color(45, 45, 45);
  targetColour = color(70, 0, 200);

  lerpColor(currentColour, targetColour, 0.15);

  circle(mouseX, mouseY, b);
  if (mouseIsPressed) {
    b = (random(d) * random(d)) / 5;
    fill(random(colours));
  } else {
    b = 20;
    fill(currentColour);
  }
}
