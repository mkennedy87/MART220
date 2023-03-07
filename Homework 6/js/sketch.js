var myImage;
var myAnimation;
var myWalkAnimation;
var animations = [];
var walkAnimations = [];
var i = 0;
var idlePaths = [];
var walkPaths = [];

function preload() {

    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");

}

function setup() {
    createCanvas(800,800);
 
    myAnimation = new animationImage(idlePaths, 250, 200, 200, 160);
    myWalkAnimation = new animationImage(walkPaths, 250, 200, 200, 160);

}


function draw() {

    background(255,255,75);

    var r1 = new Rectangle(100,100,20,40);
    var r2 = new Rectangle(100,210,30,20);
    
    r1.draw();
    r2.draw();

    if(keyIsPressed)
    {
        if(key == 'd')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
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
   
    

}


