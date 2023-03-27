
const particles = [];

function preload() {

}

function setup() {
    createCanvas(800, 600);


}

// display all the frames using the draw function as a loop
function draw() {

    background(120);
    createParticles(width/2, height/2);
}

function createParticles(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}

