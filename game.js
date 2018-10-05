p1x=500
p2x=0
p1y=250
p2y=0
function setup() {
  createCanvas(1920, 1080);
	background(102,153,153);
}

function draw() {
if (keyIsDown(LEFT_ARROW)){p1x -=1;}
if(keyIsDown(RIGHT_ARROW)){p1x += 1;}
if (keyIsDown(UP_ARROW)){p1y+=1;}
if (keyIsDown(DOWN_ARROW)){p1y-=1;}
	
	minion()
}
function minion()
{
	
	background(102,153,153);

	fill(26,140,255);
	ellipse(p1x+50,p1y,100,100)
	fill(255,204,0)
	rect(p1x,p1y,100,100);
	}