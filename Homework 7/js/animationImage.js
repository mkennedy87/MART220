class animationImage {
    constructor(fileNames, x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imageObjects = [];
        this.currentAnimation;
        this.createAnimation();
        this.i = 0;
        this.currentFrameCount = 0;
        this.direction  = ""; 

    }
    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    setCurrentFrameCount(currentFrameCount) {
        this.currentFrameCount = currentFrameCount;
    }

    createAnimation() {
    this.currentAnimation = createSprite(300, 250);
    }



loadAnimation(animationType,fileNames)
{ 
    this.currentAnimation.addAnimation(animationType,fileNames[0], fileNames[fileNames.length-1]);
       
}

drawAnimation(animationType)
{  
   this.currentAnimation.frameDelay = 5; 
   this.currentAnimation.changeAnimation(animationType);         
}


    incrementIndex() {
        if (this.currentFrameCount % 3 == 0) {
            this.i++;
        }

        if (this.i >= this.fileNames.length) {
            this.i = 0;
        }
    }

    /*updatePosition(direction)
    {
        this.direction = direction;
        if(direction == "forward")
        {
            this.x += 2;

        }
        else if(direction == "reverse")
        {
            this.x -= 2;
        }
    }*/

        isRectanglesColliding(r2){
            
            return collideRectRect(this.x, this.y, this.w, this.h,r2.getX(),
            r2.getY(), r2.getW(), r2.getH());
   
    }
}