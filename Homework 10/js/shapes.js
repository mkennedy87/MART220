class shapes{

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
        torus(100, 25);
        model(this.modelObject);
        pop();
    
    }

}