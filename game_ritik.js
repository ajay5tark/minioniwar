p1x=500
p2x=0
p1y=250
p2y=0

function setup() {
  createCanvas(600, 500);
	background(102,153,153);
}

function draw() {
	background(102,153,153);
	if (keyIsDown(LEFT_ARROW))
		p1x -=1;
	if (keyIsDown(RIGHT_ARROW)){p1x += 1;}
	if (keyIsDown(UP_ARROW)){p1y-=1;}
	if (keyIsDown(DOWN_ARROW)){p1y+=1;}
	keyTyped()
	minion1()
}
// function draw() {
// 	minion2()
// }

function keyTyped() {
  if (key === 'a') {
    p2x = p2x -1
  } else if (key === 'd') {
    p2x=p2x+1;
  }else if (key === 'w') {
    p2y=p2y-1;
  }else if (key === 's') {
    p2y=p2y+1;
  }
	
	minion2()
}

function minion1(){
	fill(26,140,255);
	ellipse(p1x+50,p1y,100,100)
	fill(255,204,0)
	rect(p1x,p1y,100,100);
}

function minion2(){
	fill(26,26,25);
	ellipse(p2x+50,p2y,100,100)
	fill(255,204,0)
	rect(p2x,p2y,100,100);
}



