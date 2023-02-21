class tegan
{

    constructor(idleAnimation, x, y, w, h)
    {
        this.idleAnimation = idleAnimation;
        this.character = [];
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    getX()
    {
        return this.x;
    }

    setX(x)
    {
        this.x = x;
    }
    draw(i)
    {       
       // console.log(this.character.length);
        image(this.character[i], this.x, this.y, this.w, this.h); // display image
    }

    animate()
    {

        
        for (var j = 0; j < idleAnimation.length; j++) {
           
            person = loadImage(this.idleAnimation[j]);
           // console.log(this.imageLinks[j]);
            this.character[j] = person;
        }
    }


}