class shape{

    consctructor(modelObject) {

    }

    drawShapes()
    {
        
        push();
        normalMaterial();
        translate(-230,240,0);
        rotateZ(frameCount * .5);
        rotateY(frameCount * .0125)
        texture(prez);
        plane(this.h, this.w);
        model(this.modelObject);
        pop();
    
    }

}