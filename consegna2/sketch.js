function setup() {
  createCanvas(500,500);
  background(55);
  angleMode(DEGREES);
}

function draw() {
  translate(width/2,height/2);
  stroke(lerpColor(color('#ea0043'), color('#0fefca'),frameCount/120));
  noFill();
  line(200,0,cos(frameCount*3)*200,sin(frameCount*3)*200);
  
  

if (frameCount == 120) {
    noLoop();

}
}