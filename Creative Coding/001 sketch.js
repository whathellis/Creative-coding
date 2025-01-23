// You can't add notes after numbers ಠ_ಠ

// Animation types:
	// 1. User input
	// 2. Fixed equation
	// 3. Rendom values function


// if you move the bacground from draw to setup shape will draw a line bc the bacground won't bu updated (will  be drawn only one time)
//animation starts from this point:
let x = 0; 
let y = 0;
// you can add phisycs
let xspeed = 1;
let yspeed = 1;
// to change the direction while it moves
let xdirection = 1;
let ydirection = 1;
// custom variables:
let d = 50;

function setup() {
	createCanvas(500, 500);
}

function draw() { //60fps by default
	background(255, 225, 220);
	frameRate(15);

	// V.1
	//the position should change evefy frame by these values (1 is smooth, 10 is too fast):
	x+= 1; 
	y+= 1; 

	// V.2
    // if you add physics
	x = x + xspeed; 
	y = y + yspeed;

	// V.3
	// If ("this" or-|| "that") {"than"}
	// If the ball hits the bottom (x > than canvas - 25 "d/2" [as "d" is the ball  size])  or the top, switch the direction (add "-")
		if (x > width - d/2 || x < d/2) {xdirection += -1;}
		if (y > height - d/2 || y < d/2) {ydirection += -1;}

	

	//basic shapes

	stroke(110,0,250);
	strokeWeight(5);
	noFill();
	ellipse(225, 225, d, d); //X,Y coordinates to the top left point an dimentions
	
	
	fill(250, 250, 120); //should be before the obgect bc the next one owerrides the first (noFill) one, otherwise applies to all
	noStroke();
	rect(width/1.4, height/1.4, 150,150); //width and height of a canvas
	rectMode(CENTER); //coordinates to center - MAST be full cups

	// p5.js Tuorial | Getting Started with Creative Cidding - 13min
}
