var cowgirl;
var animation = [];
var i = 0;
var x = 0;

// Bring in all the assets from our folder
function preload() {

    cowgirl = loadImage('assets/Idle (1).png');
    animation[0] = cowgirl;
    cowgirl = loadImage('assets/Idle (2).png');
    animation[1] = cowgirl;
    cowgirl = loadImage('assets/Idle (3).png');
    animation[2] = cowgirl;

    cowgirl = loadImage('assets/Idle (4).png');
    animation[3] = cowgirl;

    cowgirl = loadImage('assets/Idle (5).png');
    animation[4] = cowgirl;

    cowgirl = loadImage('assets/Idle (6).png');
    animation[5] = cowgirl;

    cowgirl = loadImage('assets/Idle (7).png');
    animation[6] = cowgirl;

    cowgirl = loadImage('assets/Idle (8).png');
    animation[7] = cowgirl;

    cowgirl = loadImage('assets/Idle (9).png');
    pics[8] = cowgirl;

    cowgirl = loadImage('assets/Idle (10).png');
    animation[9] = cowgirl;
}

// create the canvas
function setup() {

    createCanvas(641, 542);
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);

    // draw each frame based on the index in the array
    image(animation[i], x, 0);

    // increment the index
    i += 1;

    // if we reach the end of the array, start over
    if (i >= animation.length) {
        i = 0;
    }
}