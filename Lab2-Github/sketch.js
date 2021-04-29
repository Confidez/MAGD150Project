function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(10);

//This is supposed to be the ring around saturn 
background(0, 0, 0);
noFill();
stroke(255);
bezier(0, 350, 100, 300, 100, 0, 100, 0, 0, 0, 100, 0);
//End of this planet

//The Moon
let d = color('yellow');
fill(d);
noStroke();
arc(325, 300, 300, 300, 0, PI + QUARTER_PI, PIE);
//End of the moon

//Stars 
let c = color('purple');
fill(c);
noStroke();
triangle(250, 45, 270, 20, 290, 45);
triangle(300, 150, 320, 170, 340, 150);
triangle(400, 250, 420, 230, 440, 250);
triangle(30, 400, 58, 420, 86, 400);
//End of the stars
  
//Saturn 
let f = color('orange');
fill(f);
noStroke();
ellipse(56, 46, 300, 300);
//End of Saturn 

//Venus 
let g = color('blue');
fill(g);
noStroke();
ellipse(500, 50, 300, 300);}
//End of Venus
