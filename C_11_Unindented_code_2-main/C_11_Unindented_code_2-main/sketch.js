var trex, trex_running, trex_collided;
var ground, invisibleground, groundImage;


function preload() {
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collided = loadImage("trex_collided.png");
groundImage = loadImage("ground2.png")
}

function setup() {

createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,150,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;

//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;

invisibleground=createSprite(300,185,600,10)
invisibleground.visible=false
}

function draw() {

background(220);

console.log(trex.y)
//jump when the space button is pressed
if (keyDown("space")&&trex.y>=156.5) {

trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.8
if (ground.x < 0) {
ground.x = ground.width / 2;
}

trex.collide(invisibleground);
drawSprites();
}
