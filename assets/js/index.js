// setting main-img-canvas(if image cannot show)
let canvas = document.getElementById("canvas");
let cxt = canvas.getContext("2d");
let gradient = cxt.createLinearGradient(0,0,0,canvas.height);
gradient.addColorStop(0,"#81b5f0");
gradient.addColorStop(1,"#3af");
cxt.fillStyle = gradient;
cxt.fillRect(0,0,400,400);
