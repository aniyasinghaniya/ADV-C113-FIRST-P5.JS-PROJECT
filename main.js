function preload(){
  
}
function setup() {
  canvas=createCanvas(400, 300);
  webcam=createCapture(VIDEO);
  webcam.hide();
  canvas.center();
  tintcolor="";
  
}

function draw() {
  image(webcam,0,0,400,300);
  tint(tintcolor);
}
function applyfilter(){
  tintcolor=document.getElementById("colour").value
}
