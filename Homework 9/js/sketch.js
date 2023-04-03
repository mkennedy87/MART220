function preload() {

}
function setup() {
    createCanvas(800, 800, WEBGL);
  }

  function draw(){
    background(175,175,175);
    
    push();
    translate(-200,-150,0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(100);
    pop();
  
    push();
    translate(200,-250,0);
    rotateZ(frameCount * .03);
    rotateX(frameCount * .015);
    cone(50,150);
    pop();
   
  
    push();
    translate(50,0,0);
    rotateY(frameCount * .02);
    rotateZ(frameCount * .01);
    cylinder();
    pop();

    push();
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
 }