var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];

function preload() {
    
    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");
}

function setup() {
    
    createCanvas(800, 800);

    myAnimation = new animationImage(idlePaths, 0, 0, 200, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
  
}

function draw() {

    background(155);

    if(keyIsPressed)
    {
        if(key == 'd')
        {
            myAnimation.drawAnimation('walk');
        }
        else
        {
            myAnimation.drawAnimation('idle');
        }
    }
    else
    {
        myAnimation.drawAnimation('idle');
    }  
}