var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
 
// direction variables

 var x = canvas.width/2;
 var y = canvas.height - 30;
 var dx = 2;
 var dy = -2;
 var ballRadious = 8;

function drawBall(){
   ctx.beginPath();
   ctx.arc(x,y,ballRadious,0,Math.PI*2,false);
   ctx.fillstyle = 'green';
   ctx.fill();
   ctx.closePath;
}
