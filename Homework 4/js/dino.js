class dinosaur
{

    constructor(idleAnimation)
    {
        this.idleAnimation = idleAnimation;
        this.character = [];
    }

    draw(i)
    {

        image(this.character[i], 300, 100, 145, 250); // display image
    }

    animate()
    {

        for (var j = 0; j < idleAnimation.length; j++) {
            console.log(this.idleAnimation[j]);
            person = loadImage(this.idleAnimation[j]);
  
            this.character[j] = person;
        }
    }


}