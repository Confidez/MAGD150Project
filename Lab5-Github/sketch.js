


function setup() { 
  createCanvas(800, 700);
} 
  
  //var of button
var d = 50;
var state = false;


function draw() {
  background('rgba(0,200,100, 0.60)');
  
  //TV Body
  // Body
  fill(300)
	rect(200, 200, 500, 400, 50);
  
  //screen
  if (state) {
  fill(50)
	rect(225, 240, 390, 320, 50);



  } else {
  fill(200)
	rect(225, 240, 390, 320, 50);
  }
  
  // bottom
  fill(300)
  rect(290, 600, 250, 20, 20, 15, 10, 5);
  
  //top
  fill(300)
  arc(420, 204, 90, 80, 135, 135, OPEN);

  //top lines
  line(520, 120, 415, 164);
  line(370, 120, 415, 164);
  
 //right lines
  line(640, 300, 670, 300);
  line(640, 350, 670, 350);
  line(640, 400, 670, 400);
  line(640, 450, 670, 450);
  
 // stroke
  strokeWeight(12.0);
  strokeCap(ROUND);
  
 // button
  fill(300)
  ellipse(655, 530, d, d);
}

 // button function
  function mousePressed() {
  if (dist(mouseX, mouseY, 655, 530) < d/2) {
    state = !state;
  }
}
  