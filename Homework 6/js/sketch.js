var myImage;
var myAnimation;
var myWalkAnimation;
var animations = [];
var walkAnimations = [];
var i = 0;
var idlePaths = [];
var walkPaths = [];
var isColliding = false;
var r1;
var r2;
var r1X;
var r2X;
var points;

var backgroundSound;
var biteSound;

function preload() {

    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");
    backgroundSound = loadSound('./sound/bgmusic.mp3');
    biteSound = loadSound('./sound/bite.mp3');


}

function setup() {
    createCanvas(800,800);
 
    myAnimation = new animationImage(idlePaths, 350, 300, 200, 160);
    myWalkAnimation = new animationImage(walkPaths, 350, 300, 200, 160);
    r1X = 575;
    r2X = 100;
    r1 = new MyRectangle(r1X,250,100,200);
    r2 = new MyRectangle(r2X,350,150,100);
}


function draw() {

    background(255,255,75);
    points = 0;
    text("SCORE: points", 600, 50);
    r1.draw();
    r2.draw();

    
    if(keyIsPressed)
    {
        if(key == 'd')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
            isColliding = myWalkAnimation.isRectanglesColliding(r1);
            myWalkAnimation.updatePosition('forward');
            myAnimation.updatePosition('forward');
        }
        else if(key == 'a')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
            myWalkAnimation.updatePosition('reverse');
            myAnimation.updatePosition('reverse');
        }
        else{
            myAnimation.updatePosition('idle');
            myAnimation.setCurrentFrameCount(frameCount);
            myAnimation.drawAnimation();
        }
    }
    else {
        myAnimation.setCurrentFrameCount(frameCount);
        myAnimation.drawAnimation();
    }
    if(myImage > 500){
       biteSound.play();
    }
  //  if(biteSound.isPlaying()) {
   //     biteSound.stop();
  //  }
 
    text(isColliding, 300,300);
  
   // text(collideRectRect(r1.getX(), r1.getY(), r1.getW(), r1.getH(),r2.getX(),
   // r2.getY(), r2.getW(), r2.getH()), 300,300);


}

function mousePressed() {
   if(!backgroundSound.isPlaying()) {
    backgroundSound.loop();
}
    else{
        backgroundSound.pause();
}
}

