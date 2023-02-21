var myImage;
var myAnimation;
var myWalkAnimation;
var i = 0;
var j = 0;
var idlePaths = [];
var walkPaths = [];
var walkanimations = [];

function preload() {

    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");

}

function setup() {

    createCanvas(1800, 1500);
    myAnimation = new animationImage(idlePaths, 0, 0, 150, 150);
    myWalkAnimation = new animationImage(walkPaths, 0, 0, 150, 150);
}

function draw() {

    background(120);
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
        else
        {
            myAnimation.updatePosition('idle');
            myAnimation.setCurrentFrameCount(frameCount);
            myAnimation.drawAnimation();
       
        }
    }
    else
    {
        myAnimation.setCurrentFrameCount(frameCount);
        myAnimation.drawAnimation();
       
    }


}

