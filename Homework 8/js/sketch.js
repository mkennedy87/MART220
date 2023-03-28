const particles = [];
var myImage;
var myAnimation;
var myWalkAnimation;
var idlePaths = [];
var walkPaths = [];
var attackPaths = [];
var burger;
//var isColliding = false;

var rectangleArray = [];
var points = 0;
var health = 100;
var buildingHealth = 100;
var buildingHealth2 = 100;
var buildingHealth3 = 100;
var burgers = [];

function preload() {
    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");
    attackPaths = loadStrings("./images/run/run.txt");
    loadImage("./images/building.png");
}

function setup() {
    createCanvas(800, 800);
    myAnimation = new animationImage(0, 0, 200, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    myAnimation.loadAnimation('attack', attackPaths);

    burger = createSprite(random(30,width - 50), random(30,height - 50),300,300, 'static');
    burger3 = createSprite(random(30,width -30), random(30,height - 30),300,300, 'static');
    burger2 = createSprite(random(30,width -30), random(30,height -30),300,300, 'static');

  burger.img = "./images/building.png";
  burger.scale = 0.3;
  burger2.img = "./images/building.png";
  burger2.scale = 0.3;
  burger3.img = "./images/building.png";
  burger3.scale = 0.3;
    
  for(let i = 0; i < 10; i++)
  {
      if(i % 2 == 0)
      {
          rectangleArray.push(new MyRectangle(random(30,width - 30), random(30,height - 30), random(20,100), random(10,75), 255,0,0,));
      }
      else
      {
          rectangleArray.push(new MyRectangle(random(30,width - 30), random(30,height - 30), random(20,100), random(10,75),0,255,0));
          
      }
  }
}

function draw() {

    background(255,255,75);

    textSize(32);
    text("Health: " + health, 50,100);
    text("Score: " + points, 50,50);
    
      if (kb.pressing('d')) {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        if (burger != null) {
            if (myAnimation.isColliding(burger)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');

            }
            if (myAnimation.isColliding(burger2)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');

            }
            if (myAnimation.isColliding(burger3)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');

            }
        }
    }
    else if (kb.pressing('a')) {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
    }
    else if (kb.pressing('w')) {
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
    }

    else if (kb.pressing('s')) {
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
    }
    else if (kb.pressing('x')) {
        myAnimation.drawAnimation('attack');
        if (burger != null) {
            if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, burger.position.x, burger.position.y) < 200) {
                createParticles(burger.position.x, burger.position.y);
                buildingHealth -= 1;
                if(buildingHealth <= 0)
                {
                    burger.remove();
                    burger = null;
                }
                if(buildingHealth <=0)
                {
                    points += 10;
                }    
            }

        }
        
       else if (burger2 != null) {
            if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, burger2.position.x, burger2.position.y) < 200) {
                createParticles(burger2.position.x, burger2.position.y);
                buildingHealth2 -= 1;
                if(buildingHealth2 <= 0)
                {
                    burger2.remove();
                    burger2 = null;
                }
                if(buildingHealth2 <=0)
                {
                    points += 10;
                }    
            }

        }
        else if (burger3 != null) {
            if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, burger3.position.x, burger3.position.y) < 200) {
                createParticles(burger3.position.x, burger3.position.y);
                buildingHealth3 -= 1;
                if(buildingHealth3 <= 0)
                {
                    burger3.remove();
                    burger3 = null;
                }
                if(buildingHealth3 <=0)
                {
                    points += 10;
                }    
            }

        }
    }

 

    else {
        myAnimation.drawAnimation('idle');
    }

     if(points >= 30)
    {
        textSize(100);
        fill(0,255,0);
        text("YOU WIN",150, 400);
        
    }

    if(health >= 100){
        health ==100;
    }

    if(health <=0)
    {
        textSize(100);
        fill(255,0,0);
        text("GAME OVER",80,400);
    }

    for(var i = 0; i < rectangleArray.length; i++){
        // check each object for collision
        //isColliding = myWalkAnimation.isRectanglesColliding(rectangleArray[i]);

       /* if (myAnimation.isColliding(MyRectangle))
        {
            if(rectangleArray[i].getG() > 0)
            {
                health++;
            }
            if(rectangleArray[i].getR() > 0)
            {
                health--;
            }
            
            // if colliding move the object to somewhere else
            rectangleArray[i] = new MyRectangle(random(0,width), random(0,height), random(20,100), random(10,75));
       
        }*/
    }
   
   /* textSize(32);
    //text(isColliding, 300,300);
    text("Score: " + points, 50,50);*/
   for(var i = 0; i < rectangleArray.length; i++)
    {
        noStroke();
        rectangleArray[i].draw();
    }

  
   // burger.debug = mouseIsPressed;

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