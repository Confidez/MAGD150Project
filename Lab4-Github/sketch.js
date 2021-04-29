//Just the start of a fun moving backround
var offset = 0;
function setup() {
  createCanvas(800, 500);
 
}
function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  
  for (var x = 0; x <= width; x += 50) {
    fill(random(255), 0, random(255));
    ellipse(x, 250, 100, 100);
  }
    offset = offset +1;
//End of the fun backround
  
//The Start of the Pizza
  stroke(20); 
  strokeWeight(1);
  fill("#C39B6C");
  
//This mouseIsPressed turned the pizza's shape from a square to a circle.
    if (mouseIsPressed) {
    ellipse(400, 250, 250, 250);
  } else {
    rect(275, 125, 250, 250);
  }

  print(mouseIsPressed);
//End shape.
  
  fill("#E2B981");
  ellipse(400,250, 220,220);
 	a = color(0);
	b = color(0);
  
  fill('red')
  ellipse(400,250, 200, 200)
  
//When the key is pressed you get sausage and when you aren't you get mozzarella.
    if (keyIsPressed === true) {
    fill(145, 109, 109);
  } else {
    fill(255);
  }
  rect(325, 200, 30, 30);
  rect(375, 175, 30, 30);
  rect(425, 200, 30, 30);
  rect(325, 250, 30, 30);
  rect(375, 275, 30, 30);
  rect(425, 280, 30, 30);
//End of the pizza toppings.
//The end of the pizza
  
//For-Loop Name and age
  let person = {fname:"Toby", lname:"Misch", age:21};
let myText = "";
function setup(){
  let x;
  for (x in person) {
      myText += person[x];
      myText += " ";
  }
  text(myText, 0, height/2);
}


}
//END 







  
