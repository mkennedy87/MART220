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
    var p = 0;
    var score = p;
    background(255,255,75);
  
    text('SCORE: ', 600, 50);
    text(score, 650, 50);
    if(isColliding == true){
        p = p + 5;
    }
    r1.draw();
    text('good food', 600, 350);
    
    r2.draw();
    text('bad food', 150, 400);

    
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

