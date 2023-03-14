class animationImage {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imageObjects = [];
        this.currentAnimation;
        this.createAnimation();
        this.i = 0;
        this.currentFrameCount = 0;
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
        this.currentAnimation.width = 200;
        this.currentAnimation.height = 150;
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

        else if (animationType == 'walk' && this.direction == 'up') {
            this.currentAnimation.direction = 270;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = 2;}

        else if (animationType == 'walk' && this.direction == 'reverse') {

            this.currentAnimation.mirror.x = true;
            this.currentAnimation.direction = 180;
            this.currentAnimation.speed = 2;

        }
        else if (animationType == 'walk' && this.direction == 'down') {
            this.currentAnimation.direction = 90;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = 2;}
        else {
            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.velocity.y = 0;
        }


    }



    updatePosition(direction) 
    {
        
        this.direction = direction;
       
    }

    isRectanglesColliding(r2) {

        return collideRectRect(this.x, this.y, this.w, this.h, r2.getX(), r2.getY(), r2.getW(), r2.getH());

    }

}