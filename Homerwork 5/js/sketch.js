var myImage;
var myAnimation;
var animations = [];
var walkAnimations = [];
var i = 0;
var j = 0;
var idlePaths = [];
var walkPaths = [];
var dinoX;

function preload() {

    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");

}

function setup() {
    createCanvas(800,800);
    dinoX = 250;
    for (var i = 0; i < idlePaths.length; i++) {
        myAnimation = new animationImage(idlePaths[i], dinoX, 200, 500, 400);
        animations[i] = myAnimation;
    }
    for (var i = 0; i < walkPaths.length; i++) {
        myAnimation = new animationImage(walkPaths[i], dinoX, 200, 500, 400);
        walkAnimations[i] = myAnimation;
    }

    setInterval(incrementIdleIndex, 50);
    setInterval(incrementWalkIndex, 50);
}


function draw() {

    background(255,255,75);
    if(keyIsPressed)
    {
        if(key == 'd')
        {
            walkAnimations[i].drawAnimation();
        }
        else{
            animations[i].drawAnimation();
        }
    }
    else {
        animations[i].drawAnimation();
    }
   

}

function incrementIdleIndex() {
    i++;
    if( i >= animations.length){
        i = 0;
    }
}

function incrementWalkIndex() {
    j++;
    if( j >= walkAnimations.length){
        j = 0;
    }
}