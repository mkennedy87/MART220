class animationImage {
    constructor(fileNames, x, y, w, h) {
        this.fileNames = fileNames;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imageObjects = [];
        this.loadAnimation();
        this.i = 0;
        this.currentFrameCount = 0;

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



    loadAnimation() {
        for (var i = 0; i < this.fileNames.length; i++) {
            this.imageObjects[i] = loadImage(this.fileNames[i]);
        }

    }

    drawAnimation(i) {
        this.incrementIndex();
        if(this.direction == "reverse")
        {
            translate(this.w, 0);
            scale( -1.0, 1.0);
            image(this.imageObjects[this.i], -this.x+100, this.y, this.w, this.h);
        }
        else
        {
            image(this.imageObjects[this.i], this.x, this.y, this.w, this.h);
        }
        
    }

    incrementIndex() {
        if (this.currentFrameCount % 3 == 0) {
            this.i++;
        }

        if (this.i >= this.fileNames.length) {
            this.i = 0;
        }
    }

    updatePosition(direction)
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
    }
}