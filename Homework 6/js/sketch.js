var myImage;
var myAnimation;
var myWalkAnimation;
var animations = [];
var walkAnimations = [];
var i = 0;
var idlePaths = [];
var walkPaths = [];
var isColliding = false;

function preload() {

    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");

}

function setup() {
    createCanvas(800,800);
 
    myAnimation = new animationImage(idlePaths, 350, 300, 200, 160);
    myWalkAnimation = new animationImage(walkPaths, 350, 300, 200, 160);

}


function draw() {

    background(255,255,75);

    var r1 = new MyRectangle(100,250,100,200);
    var r2 = new MyRectangle(575,350,150,100);

    text(collideRectRect(r1.getX(), r1.getY(), r1.getW(), r1.getH(),r2.getX(), r2.getY(), r2.getW(), r2.getH()), 300,300);
    
    r1.draw();
    r2.draw();

    if(keyIsPressed)
    {
        if(key == 'd')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
            isColliding = myWalkAnimation.isRectanglesColliding(r1, r2);
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




