var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
 
// direction variables

 var x = canvas.width/2;
 var y = canvas.height - 30;
 var dx = 2;
 var dy = -2;
 var ballRadious = 8;
 // paddle varriables
 var paddleHeight = 10;
 var paddleWidth = 75;
 var paddleX = (canvas.width - paddleWidth) / 2;

function drawBall(){
   ctx.beginPath();
   ctx.arc(x,y,ballRadious,0,Math.PI*2,false);
   ctx.fillstyle = 'green';
   ctx.fill();
   ctx.closePath;
}
function drawPaddle(){
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight,paddleWidth, paddleHeight);
  ctx.fillstyle = 'green';
  ctx.fill();
  ctx.closePath();
}

function playGame(){
  ctx.clearRect(0,0,canvas.width,canvas.hight);
  drawPaddle();
  drawBall();
  if(y + dy < ballRadious){
    dy = -dy;
  } else if(y + dy > canvas.height-ballRadious){
    if(x > paddleX && x < paddleX + paddleWidth){
      dy = -dy;
    } else {
      alert("Game Over");
      document.location.reload();
    }
  }
  if((x+dx > canvas.width-ballRadious) || (x+dx < ballRadious)){
    dx = -dx;
  }

  x += dx;
  y += dy;

}
setInterval(playGame, 15);