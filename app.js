
var ctx;
const PIXEL=3
adj = {
  scale:20,
  yoffset : 250,
  xoffset : 400,
}

function plot(x,y,color) {
  x = x * adj.scale + adj.xoffset;
  y = -y * adj.scale + adj.yoffset;
  ctx.fillStyle=color;
  ctx.fillRect(x,y,PIXEL,PIXEL)
}

window.addEventListener("load", function() {
  can = document.getElementById("plot")
  ctx = can.getContext("2d")
  ctx.fillRect(100,100,3,3)
  for (var x = -10; x < 10; x+=.01) {
    v = Math.cos(2*x);
    plot(x,v, "orange");
  }


});
