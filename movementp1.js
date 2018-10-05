p1x=0
p1y=0
function draw() {
  
  rect(p1x,p1y , 50, 50);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    p1y=p1y-10;
  } else if (keyCode === DOWN_ARROW) {
    p1y=p1y+10;
  }else if (keyCode === LEFT_ARROW) {
    p1x=p1x-10;
  }else if (keyCode === RIGHT_ARROW) {
    p1x=p1x+10;
  }
  return false; // prevent default
}