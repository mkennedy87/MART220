function preload() {

}
function setup() {
    createCanvas(800, 800, WEBGL);
  }

  function draw(){
    background(175,175,175);
    
    push();
    translate(-200,-100,0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50);
    pop();
  
    push();
    translate(100,-250,0);
    rotateZ(frameCount * .03);
    rotateX(frameCount * .015);
    cone(50,150);
    pop();
   
    /*push();
    translate(0,0,0);
    rotate(frameCount);
    plane();
    pop();
  
    push();
    translate(0,0,0);
    rotate(frameCount);
    cylinder();
    pop();

    push();
    translate(0,0,0);
    rotate(frameCount);
    torus(100, 25);
    pop();*/


    push();
    normalMaterial();
    translate(200, 275);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    plane(150, 150);
    pop();
 }