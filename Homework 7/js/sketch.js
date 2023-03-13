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

    if(kb.pressing('d'))
        {
            myAnimation.updatePosition('forward');
            myAnimation.drawAnimation('walk');
            
        }
        else if(kb.pressing('a'))
        {
            myAnimation.updatePosition('reverse');
            myAnimation.drawAnimation('walk');
            
        }
        else
        {
            myAnimation.drawAnimation('idle');
        }   
}