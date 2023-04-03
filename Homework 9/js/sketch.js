function preload() {

}
function setup() {
    createCanvas(800, 800, WEBGL);
  }

  function draw(){
    background(175,175,175);
    
    push();
    translate(0,0,0);
    rotateX(frameCount * .01);
    box(40,55,80);
    pop();
  
    push();
    translate(0,0,0);
    console();
    pop();
   
    push();
    translate(0,0,0);
    plane();
    pop();
  
    push();
    translate(0,0,0);
    cylinder();
    pop();

    push();
    translate(0,0,0);
    torus(100, 25);
    pop();


push();
    normalMaterial();
    translate(-100,-100);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    plane(150, 150);
    pop();
 }