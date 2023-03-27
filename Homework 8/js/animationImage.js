class animationImage {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.currentAnimation;
        this.createAnimation();
        this.direction = "";
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
        this.currentAnimation = createSprite(350, 350);
    }
    loadAnimation(animationType, fileNames) {

        this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length-1]);
        // set the hit box
        this.currentAnimation.width = 350;
        this.currentAnimation.height = 350;
    }


    drawAnimation(animationType) {
        
        this.currentAnimation.frameDelay = 2;
        this.currentAnimation.scale = .5;
        this.currentAnimation.changeAnimation(animationType);
        if (animationType == 'walk' && this.direction == 'forward') {
            this.currentAnimation.direction = 0;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = 2;

        }

        else if (animationType == 'walk' && this.direction == 'up') 
        {

            this.currentAnimation.direction = 270;
           // this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = 2;

        }

        else if (animationType == 'walk' && this.direction == 'reverse') 
        {

            this.currentAnimation.mirror.x = true;
            this.currentAnimation.direction = 180;
            this.currentAnimation.speed = 2;

        }
        
        else if (animationType == 'walk' && this.direction == 'down') 
        {

            this.currentAnimation.direction = 90;
           // this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = 2;

        }
        
        else 
        {

            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.velocity.y = 0;
            this.currentAnimation.velocity.w = 0;
            this.currentAnimation.velocity.h = 0;

        }


    }


    updatePosition(direction) 
    {
        
        this.direction = direction;
       
    }

    isColliding(myImage) 
    {

        return this.currentAnimation.collide(myImage);
    }

    isColliding(MyRectangle)
    {

        return this.currentAnimation.collide(MyRectangle);

    }
    

}