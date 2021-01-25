var fairy, fairyImg;
var star, starImg;
var starnight, starnightImg;

function preload(){
fairyImg = loadImage("fairy1.png");
starImg = loadImage("star.png");
starnightImg = loadImage("starnight.png");
   
}

function setup() {
createCanvas(800, 750);

}


function draw() {
  background("black");

  drawSprites();
}
