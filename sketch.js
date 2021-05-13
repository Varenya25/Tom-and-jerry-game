var cat, mouse;
var catImage, mouseImage;
var catRunning, catLastImage;
var mouseCheese, mouseStanding, mouseFunny;
var mouseGlass;
var garden, gardenImage;

function preload() {
    //load the images here
    catImage = loadAnimation("images/cat1.png");
    catRunning = loadAnimation("images/cat2.png", "images/cat3.png",);
    catLastImage = loadAnimation("images/cat4.png");

    mouseCheese = loadAnimation("images/mouse1.png");
    mouseStanding = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseGlass = loadAnimation("images/mouse4.png");
    gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create garden
    garden = createSprite(0,0,1000,800)
    garden.addImage(gardenImage);
   
    //create tom and jerry sprites here
    cat = createSprite(950,700,10,10);
    cat.addAnimation(catImage);
    mouse =  createSprite(100,700,10,10);
    mouse.addAnimation(mouseCheese);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  if(cat.x-mouse.x < (cat.width + mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catLast",catLastImage);
    cat.changeAnimation("catLast");
    mousde.addAnimation("mouseLast",mouseGlass);
    mouse.changeAnimation("mouseLast");
  }
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("catRun", catRunning)
    cat.changeAnimation("catRun")
    mouse.addAnimation("mouseTease", mouseStanding, MouseFunny)
    mouse.changeAnimation("mouseTease")
  }

}
