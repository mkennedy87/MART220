
var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];

function preload() {
    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");
}

function setup() {
    createCanvas(800, 600);
    myAnimation = new animationImage(0, 0, 150, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);

}

// display all the frames using the draw function as a loop
function draw() {

    background(120);

    if (kb.pressing('d')) {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
    }
    else if (kb.pressing('a')) {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
    }
    else {
        myAnimation.drawAnimation('idle');
    }

}