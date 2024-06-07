function setup(){
createCanavas(400,400);
}

function draw(){
background(220);
if (mouseIsPressed) {
    fill('red');
  } else {
    fill('green');
  }
  ellipse(mouseX, mouseY, 80, 80);
}