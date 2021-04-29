function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(210);
  fill(220);
square(50, 120, 100);  
push();
  noFill();
  rect(85, 140, 30, 150);
pop();
  fill(100);
ellipse(100, 92, 90, 55);
  fill(120);
ellipse(100, 92, 70, 55);
  fill(140);
ellipse(100, 92, 50, 55);
  fill(160);
ellipse(100, 92, 30, 55);
strokeWeight(4);
  point(110,180);
  
  
}



