p1x=300
p2x=250
p1y=300
p2y=100
score1 = 100
score2 = 100

var fart = new Audio();
fart.src = "fart.mp3";

var fire = new Audio();
fire.src = "fire.mp3";

var musicAS = new Audio();
musicAS.src = "musicAS.mp3";

var game_over = new Audio();
game_over.src = "gameover(1).mp3";


function setup() {
  createCanvas(1350, 630);
  background(102,153,153);
}

function draw() {
if(gameover()!=0){minion()}
else
{ 
  game_over.play(); 
    document.location.reload();
}
}
function gameover()
{
  
if(score1<0)
{
  console.log('game over player 2 won')
  return 0
}
else if(score2<0)
{
  console.log('game over player 1 won')
  return 0  
}
  return 1
}
function minion()
{
  
  background(102,153,153);

  if (p1x<0)p1x=0;
  if (p1y<50)p1y=50;
  if (p1x>1250)p2x=1250;
  if (p1y>525)p1y=525;

  if (keyIsDown(LEFT_ARROW))p1x -=1;
  if (keyIsDown(RIGHT_ARROW)){p1x += 1;}
  if (keyIsDown(UP_ARROW)){p1y-=1;}
  if (keyIsDown(DOWN_ARROW)){p1y+=1;}
  
  fill(26,140,255);
  ellipse(p1x+50,p1y,100,100)
  fill(255,204,0)
  rect(p1x,p1y,100,100);
  fill(153, 153, 102)
  ellipse(p1x+50,p1y,40,40)
  fill(255,255,255)
  ellipse(p1x+50,p1y,30,30)
  fill(0,0,0)
  ellipse(p1x+50,p1y,10,10)
  fill(26,140,255);
  rect(p1x,p1y+60,100,40)
  rect(p1x,p1y+60,100,40)
  fill(255,255,255)
  ellipse(p1x+25,p1y+100,25,25)
  ellipse(p1x+75,p1y+100,25,25) 
  

  if (p2x<0)p2x=0;
  if (p2y<50)p2y=50;
  if (p2x>1250)p2x=1250;
  if (p2y>525)p2y=525;

  keyTyped();
  fill(0,0,0);
  ellipse(p2x+50,p2y,100,100)
  fill(255,204,0)
  rect(p2x,p2y,100,100);
  fill(153, 153, 102)
  ellipse(p2x+50,p2y,40,40)
  fill(255,255,255)
  ellipse(p2x+50,p2y,30,30)
  fill(0,0,0)
  ellipse(p2x+50,p2y,10,10)
  fill(0,0,0);
  rect(p2x,p2y+60,100,40)
  rect(p2x,p2y+60,100,40)
  fill(255,255,255)
  ellipse(p2x+25,p2y+100,25,25)
  ellipse(p2x+75,p2y+100,25,25) 

}
function fire(fx,fy)
{
    fill(255,0,0);
    arc(fx,fy,75,50,2.0,-2.0,PIE)
  fire.play(); 
 
}

function fart(fax,fay)
{
    fill(51, 204, 51);
  ellipse(fax,fay,25,25);
  fart.play(); 

}

function keyTyped() {
  if(key=='i')
  {
    fx=p1x;
  fy=p1y+50;
  while(fx>0)
  {
  fire(fx,fy);
    fx-=50;}
  if (p2y >= p1y-75 && p2y < p1y + 75 )
  { score2 = score2- 15
  }
  }
  
  if(key=='o')
  {
  fax=p1x+115;
  fay=p1y+70;
  while(fax<1350)
  {
  fart(fax,fay);
    fax+=20;}
  if (p2y >= p1y-75 && p2y < p1y + 75 )
  { score2 = score2- 15
  }
  }
  if(key=='f')
  {
    fx=p2x;
  fy=p2y+70;
  while(fx>0)
  {
    
    fart(fx,fy);
    fx-=20;}
  if (p1y >= p2y && p1y < p2y + 50 )
  {   score1 = score1- 15
  }
  }
  if(key=='g')
  {
  fax=p2x+115;
  fay=p2y+50;
  while(fax<1350)
  {
  
  fire(fax,fay);
    fax+=50;}
  
  if (p1y >= p2y && p1y < p2y + 50 )
  {score1 = score1- 15
  }
  }
  if (key == 'a') {
    p2x = p2x -1
  } 
  if (key == 'd') {
    p2x=p2x+1;
  }
  if (key == 'w') {
    p2y=p2y-1;
  }
  if (key== 's') {
    p2y=p2y+1;
}
  
}