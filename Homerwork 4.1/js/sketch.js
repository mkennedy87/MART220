var myImage;
var myAnimation;
var animations = [];
var i = 0;
var idlePaths = [];

function preload() {

    idlePaths = loadStrings("./images/idle/idle.txt");

}

function setup() {
    createCanvas(800,800);
    for (var i = 0; i < idlePaths.length; i++) {
        myAnimation = new animationImage(idlePaths[i], 250, 200, 500, 400);
        animations[i] = myAnimation;
    }

    setInterval(incrementIdleIndex, 50);
}


function draw() {

    background(255,255,75);
    console.log(i);
    animations[i].drawAnimation();

}

function incrementIdleIndex() {
    i++;
    if( i >= animations.length){
        i = 0;
    }
}