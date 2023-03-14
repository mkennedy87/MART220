var myAnimation;
var myWalkAnimation;
var idlePaths = [];
var walkPaths = [];
var burger;

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
  burger.img = "./images/burger3.png";
  burger.scale = 0.1;
  burger.diameter = 150;
    

}

function draw() {

    background(255,255,75);


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

  

    textSize(32);
   // text(isColliding, 300,300);
   // text("Score: " + points, 50,50);
  
    myAnimation.debug = mouseIsPressed;

}