class Particle {

    constructor() {
      this.x = 300;
      this.y = 380;
      this.vx = random(-3, 3);
      this.vy = random(-3, 3);
      this.alpha = 255;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
    }
  
    show() {
      noStroke();
      //stroke(255);
      fill(225, this.alpha);
      ellipse(this.x, this.y, 16);
    }
  
  }
  