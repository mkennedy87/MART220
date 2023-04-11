let godzilla;
let squish;
let batman;
let bounty;
let prez;
let yawn;
let table;
let primitive = [box, cone, cylinder, sphere, plane];

function preload() {

godzilla = loadModel('3D/godzilla.obj', true);
table = loadModel('3D/coffee table.obj',true);
squish = loadImage('images/squish.jpeg');
batman = loadImage('images/batman.PNG');
bounty = loadImage('images/bounty.png');
prez = loadImage('images/prez.jpeg');
yawn = loadImage('images/yawn.jpeg');
myFont = loadFont('fonts/myfont.ttf');

}

function setup() {

    createCanvas( 800, 800, WEBGL);
    angleMode(DEGREES);
}

function draw() {

    background(255, 100, 100);
    //directionalLight(150, 100, 100, -300, 300, 200);
    
    push();
    scale(1.5);
    rotateZ(180);
    rotateX(45);
    //rotateY(45);
    rotateY(frameCount * .5);
   // rotateX(frameCount * .3);
   // normalMaterial();
   // model(godzilla);
    normalMaterial(255);
   // translate(0,-100,0);
    model(table);
    pop();

    
    
    push();
    //specularMaterial(150,50,50);
    translate(-200,-150,0);
    rotateX(frameCount * .5);
    rotateY(frameCount * .5);
    texture(squish);
    box(100);
    pop();
  
    push();
    //specularMaterial(0,156,0);
    translate(200,-250,0);
    rotateZ(frameCount * .3);
    rotateX(frameCount * .15);
    noStroke();
    texture(bounty);
    cone(50,150);
    pop();
   
  
    push();
   // specularMaterial(0,30,190);
    translate(250,0,0);
    rotateY(frameCount * .4);
    rotateZ(frameCount * .2);
    noStroke();
    texture(batman);
    cylinder();
    pop();

    push();
    normalMaterial();
    translate(-230,240,0);
    rotateZ(frameCount * .5);
    rotateY(frameCount * .0125)
    texture(prez);
    torus(100, 25);
    pop();


    push();
    normalMaterial();
    translate(200, 275);
    rotateZ(frameCount * 0.4);
    rotateX(frameCount * 0.2);
    rotateY(frameCount * 0.3);
    texture(yawn);
    plane(150, 150);
    pop();
    
    textFont(myFont);
    textSize(36);
    text("Look At These Photographs", -275, -300);
    textSize(24);
    text("By Mike Kennedy", -100, -275);

}