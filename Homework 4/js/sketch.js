
var redColor = random(255);
var greenColor = random(255);
var blueColor = random(255);
var alpha = random(255);

var img1;
var img2;
var img3;

var myFont;

function preload()
{
    img1 = loadImage('images/burger1.jpeg');
    img2 = loadImage('images/burger2.jpg');
    img3 = loadImage('images/burger3.jpg');
    idleAnimation = loadStrings("../images/idle.txt");
    myFont = loadFont('fonts/Oswald-VariableFont_wght.ttf');

}

function setup() {
    createCanvas(800,800);
}

function draw() {

var x = random(-10, 10);
var y = random(-10, 10);


var topBunX = 400;
var bottomBunX = 400 + x;

var pattyX = 200;

var cheeseFirstX = 300;
var cheeseTopY = 370;
var cheeseSecondX = 500;
var cheeseThirdX = 400;
var cheeseThirdY = 430;
    background(redColor,greenColor,blueColor,alpha);

//text
    fill(212,175,55);
    textFont(myFont);
    textSize(30);
    text("Michael Kennedy", 550, 780);
    fill(255);
    text("Das Burger Buns", 20, 40);
//top bun
    fill( 245, 222, 179 );
    arc(topBunX + y, 350 + x, 400 + y, 200 + x, radians(180), radians(360), CHORD);
//bottom bun
    fill( 245, 222, 179 );
    arc(bottomBunX, 450 + x, 400 + y, 200 + x, 0, PI, CHORD);
//meat patty
    fill( 139, 69, 19 );
    rect(pattyX,370,400,60);
//cheese
    fill( 255, 255, 0 );
    triangle(cheeseFirstX,cheeseTopY,cheeseSecondX,cheeseTopY,cheeseThirdX,cheeseThirdY);

   
}

function mouseClicked(){

    redColor = random(255);
    greenColor = random(255)
    blueColor = random(255)
    alpha = random(255)
}