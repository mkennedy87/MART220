var myImage;
var myAnimation;
var myWalkAnimation;
var i = 0;
var j = 0;
var idlePaths = [];
var walkPaths = [];
var walkanimations = [];
var rectangle1;
var isColliding = false;
var backgroundSound;
function preload() {

    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");
    backgroundSound = loadSound('./sounds/Trap.mp3');
}

function setup() {

    createCanvas(800, 800);
    myAnimation = new animationImage(idlePaths, 0, 0, 150, 150);
    myWalkAnimation = new animationImage(walkPaths, 0, 0, 150, 150);

    rectangle1 = new MyRectangle(200,50,50,100);

    rectangle2 = new MyRectangle(100,175,150,100);
  
}

function draw() {

    background(120);
    if(keyIsPressed)
    {
        if(key == 'd')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
           // isColliding = myWalkAnimation.isRectanglesColliding(rectangle1);
           // if(isColliding)
           // {
             //   if(!backgroundSound.isPlaying())
              //  backgroundSound.play();
           // }
            myWalkAnimation.updatePosition('forward');
            myAnimation.updatePosition('forward');
          
        }
        else if(key == 'a')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
            myWalkAnimation.updatePosition('reverse');
            myAnimation.updatePosition('reverse');
        }
        else
        {
            myAnimation.updatePosition('idle');
            myAnimation.setCurrentFrameCount(frameCount);
            myAnimation.drawAnimation();
            
       
        }
    }
    else
    {
        myAnimation.setCurrentFrameCount(frameCount);
        myAnimation.drawAnimation();
       
    }

    textSize(32);
   // text(isColliding, 300,300);
    rectangle1.draw();
    //rectangle2.draw();
    rectangle2.draw();
   // textSize(32);
   // text(collideRectRect(rectangle1.getX(), rectangle1.getY(), 
   // rectangle1.getW(), rectangle1.getH(),rectangle2.getX(), rectangle2.getY(),
   //  rectangle2.getW(), rectangle2.getH()), 300,300);
     text(isRectanglesColliding(rectangle1,rectangle2), 300,300);
}

function isRectanglesColliding(rec1, rec2){
    var topEdge1 = rec1.getY() + rec1.getH();
    var rightEdge1 = rec1.getX() + rec1.getW(); 
    var leftEdge1 = rec1.getX();
    var bottomEdge1 = rec1.getY();
    var topEdge2 = rec2.getY() + rec2.getH();
    var rightEdge2 = rec2.getX() + rec2.getW(); 
    var leftEdge2 = rec2.getX();
    var bottomEdge2 = rec2.getY();   
    
    if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
        return true; 
   }
   return false;
}

function mousePressed() {
    // playing a sound file on a user gesture
   
   // backgroundSound.play();
  }

