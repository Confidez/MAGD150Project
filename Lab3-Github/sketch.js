//The whole overall theme is supposed to be bubbles floting throught the blue sky.
//Along with this there are mesurement tooks to see how far apart the bubbles are.
function setup() {
  //Width is 700 & Height is 500
  createCanvas(700, 500);

}
function draw() {
  background(100, 200, 250);
 line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
  
//The bubbles!
fill(250,250,250);
  ellipse(mouseX, 100, 75, 150);
  ellipse(mouseY, 250, 100, 125);
  ellipse(mouseX, 400, 100, 75);
  
//This is the wall I decided to go with  
  let leftWall = 250;
  let rightWall = 400;

  let xm = mouseX;
  let xc = constrain(mouseX, leftWall, rightWall);

  stroke(200);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);

  noStroke();
  fill(150);
  ellipse(xc, 425, 9, 9); 
  fill(150);
  ellipse(xc, 66, 9, 9); 

//This is the map
let value = 25;
let m = map(value, 0, 100, 0, width);
ellipse(m, 250, 20, 20);
  
//The distance measurement tool starting from the top left corner
   let x1 = 0;
  let y1 = 0;
  let x2 = mouseX;
  let y2 = mouseY;

  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 7, 7);
  
  let d = int(dist(x1, y1, x2, y2));

  push();
  translate((x1 + x2) / 2, (y1 + y2) / 2);
  rotate(atan2(y2 * y1, x2 * x1));
  text(nfc(d, 1), 0, -5);
  pop();
  
//Float 
  let str = '20';
let diameter = float(str);
ellipse(width / 2.1, height / 2, diameter, diameter);
  
  let gtr = '20';
ellipse(width / 1.5, height / 2, diameter, diameter);
  
//2 forms of print for the console
  let x = 200;
print('This is a code for bubbles! ' + x);
  
   let y = 100;
print('The backround is a blue clear sky! ' + y);
  
//Random math operators for fun!
console.log(2021 + ': pretty moving bubbles');
console.log(10-9);
console.log(36/9);
console.log(20*5);

}