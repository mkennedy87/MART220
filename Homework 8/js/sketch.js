const particles = [];
var myImage;
var myAnimation;
var myWalkAnimation;
var idlePaths = [];
var walkPaths = [];
var burger;
var burger2;
var burger3;
var isColliding = false;
var rectangle1;
var rectangleArray = [];
var points = 0;
var health = 0;


function preload() {
    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");
}

function setup() {
    createCanvas(800, 800);
    myAnimation = new animationImage(0, 0, 200, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);

    burger = createSprite(random(30,width), random(30,height),100,100, 'static');
    burger3 = createSprite(random(30,width), random(30,height),100,100, 'static');
    burger2 = createSprite(random(30,width), random(30,height),100,100, 'static');

  burger.img = "./images/burger3.png";
  burger.scale = 0.1;
  burger.diameter = 75;
  burger2.img = "./images/burger3.png";
  burger2.scale = 0.1;
  burger2.diameter = 75;
  burger3.img = "./images/burger3.png";
  burger3.scale = 0.1;
  burger3.diameter = 75;

  rectangle1 = createSprite(random(30,width), random(30,height),100, 100, 'static');
  rectangle1 = new MyRectangle
  burger.scale = 0.1;
  burger.diameter = 75;
    
  for(let i = 0; i < 2; i++)
  {
      if(i % 2 == 0)
      {
          rectangleArray.push(new MyRectangle(random(30,width - 30), random(30,height - 30), random(20,100), random(10,75), 255,0,0));
      }
      else
      {
          rectangleArray.push(new MyRectangle(random(30,width - 30), random(30,height - 30), random(20,100), random(10,75),0,255,0));
          
      }
  }
}

function draw() {

    background(255,255,75);
   
    for (let i = 0; i < 10; i++) {
        let p = new Particle();
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


    if (kb.pressing('d')) {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        if(myAnimation.isColliding(burger))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
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
    else {
        myAnimation.drawAnimation('idle');
    }

  


   /* for(var i = 0; i < rectangleArray.length; i++)
    {
        
        
        if(myAnimation.isColliding(MyRectangle))
        {
            if(rectangleArray[i].getG() > 0)
            {
                health++;
                points++;
            }
            if(rectangleArray[i].getR() > 0)
            {
                health--;
                points--;
            }
            
            
            rectangleArray[i] = new MyRectangle(random(0,width), random(0,height), random(20,100), random(10,75));
        }
    }*/

    textSize(32);
    text("Health: " + health, 50,100);
    text("Score: " + points, 50,50);
    for(let i = 0; i < rectangleArray.length; i++)
    {
        rectangleArray[i].draw();
    }


  
    burger.debug = mouseIsPressed;

}