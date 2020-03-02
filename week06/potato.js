
let theImage;

function preload(){
  theImage = loadImage("globe.png");
}

function setup() {
console.log("p5!");
createCanvas(windowWidth, windowWidth);
}

function draw(){
  image(theImage, mouseX,mouseY, 100, 100)

}
