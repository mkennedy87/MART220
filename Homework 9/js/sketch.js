let myFont;

function preload() {
  myFont = loadFont('fonts/myfont.ttf');
}
function setup() {
    createCanvas(800, 800, WEBGL);
  }

  function draw(){
    background(150,200,150);



    directionalLight(150, 100, 100, -300, 300, 200);
    
    push();
    specularMaterial(150,50,50);
    translate(-200,-150,0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(100);
    pop();
  
    push();
    specularMaterial(0,156,0);
    translate(200,-250,0);
    rotateZ(frameCount * .03);
    rotateX(frameCount * .015);
    noStroke()
    cone(50,150);
    pop();
   
  
    push();
    specularMaterial(0,30,190);
    translate(50,0,0);
    rotateY(frameCount * .02);
    rotateZ(frameCount * .01);
    noStroke();
    cylinder();
    pop();

    push();
    normalMaterial();
    translate(-230,240,0);
    rotateZ(frameCount * .5);
    rotateY(frameCount * .0125)
    torus(100, 25);
    pop();


    push();
    normalMaterial();
    translate(200, 275);
    rotateZ(frameCount * 0.02);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.0175);
    plane(150, 150);
    pop();
    
    textFont(myFont);
    textSize(36);
    text("The Shape of Homework", -250, -300);
    textSize(24);
    text("By Mike Kennedy", -100, -275);
 }