var circleX = 100;
var xChange = 5;
var circleR = 100;
var squareXChange = 5;
var squareY = 200;
var squareYChange = 3;

var catImage;
var myFont;

var catX = 100;
var counter = 0;

var mycircle;
var circles = [];

var person;
var character = [];
var idleAnimation = [];
var i = 0;
var teganObject;
var runAnimation;
var idleTegan;
var runTegan;
function preload() {
    // load image
    catImage = loadImage("../images/cat.jpg");
    idleAnimation = loadStrings("../images/idle/idle.txt");
    runAnimation = loadStrings("../images/run/run.txt");
    myFont = loadFont("../fonts/Pixelfy.ttf");
}
/*
    this function sets everything up
*/
function setup() {
    createCanvas(800, 500); // creating the canvas
    setInterval(displayCounter, 50);
    idleTegan = new tegan(idleAnimation, 200,200, 245,240);
    idleTegan.animate();

    runTegan = new tegan(runAnimation, 200,200, 245,240);
    runTegan.animate();


   /* for (var j = 0; j < idleAnimation.length; j++) {
        person = loadImage(idleAnimation[j]);
        character[j] = person;
    }*/

    // create instance (object) of class
    for (var i = 0; i < 50; i++) {
        mycircle = new MyCircle(random(10, width), random(20, height), random(5, 150)); // automatically calls constructor
        circles[i] = mycircle;
    }
}

function draw() {
    background(120);

   // image(character[i], 300, 100, 145, 250); // display image
    
    
    movementT();

    image(catImage, catX, 50, 200, 200); // display image


    //catX++;
    fill(0, 120, 120);
    drawCounter();
    
    moveSquares();

    textFont(myFont);
    textSize(64);
    fill(0);
    text("hello", 500, 400);
}

function movementT()
{
    if(keyIsPressed)
    {
        if(key == 'd')
        {
            runTegan.draw(i);
            runTegan.setX(runTegan.getX()+5);
            idleTegan.setX(idleTegan.getX()+5);
           // runTegan = new tegan(runAnimation, 200,200, 245,240);
           // runTegan.animate();
        }
        else if(key == 'a')
        {
            runTegan.draw(i);
            runTegan.setX(runTegan.getX()-5);
            idleTegan.setX(idleTegan.getX()-5);

           // runTegan = new tegan(runAnimation, 200,200, 245,240);
           // runTegan.animate();
        }
        
        else
        {
            idleTegan.draw(i);

          //  teganObject = new tegan(idleAnimation, 200,200, 245,240);
          //  teganObject.animate();
        }
    }
    else
    {
        idleTegan.draw(i);
        //idleTegan.setX();
        //console.log(idleTegan.getX());

        ////idleTegan = new tegan(idleAnimation, 200,200, 245,240);
        //idleTegan.animate();

    }

}

function moveSquares() {
    if (squareY > height - 50 || squareY < 0) {
        squareYChange *= -1;
    }
    squareY += squareYChange;
}

function movement() {
    if (circleX > width - circleR / 2 || circleX < circleR / 2) {
        //xChange*=-1;
        squareXChange *= -1;
    }
    circleX += squareXChange;

}
// created a function
function createCircle() {
    circle(circleX, 100, circleR);
}

function createSquare(x, y, w) {
    square(x, y, w);
}

function drawCounter() {
    textSize(50);
    text(counter, 450, 350);
}
function displayCounter() {
    counter++;

    i++;
    if (i > 9) {
        i = 0;
    }

}

