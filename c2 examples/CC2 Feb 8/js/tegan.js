class tegan
{

    constructor(idleAnimation)
    {
        this.idleAnimation = idleAnimation;
        this.character = [];
    }

    draw(i)
    {
       // console.log(this.character.length);
        image(this.character[i], 300, 100, 145, 250); // display image
    }

    animate()
    {
       // console.log(this.imageLinks);
        for (var j = 0; j < idleAnimation.length; j++) {
            console.log(this.idleAnimation[j]);
            person = loadImage(this.idleAnimation[j]);
           // console.log(this.imageLinks[j]);
            this.character[j] = person;
        }
    }


}