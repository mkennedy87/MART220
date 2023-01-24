function setup() {
    createCanvas(800,800);
}

function draw() {
    background(0,100,0,50);

    

    fill( 245, 222, 179 );
    arc(400, 350, 400, 200, radians(180), radians(360), CHORD);

    fill( 245, 222, 179 );
    arc(400, 450, 400, 200, 0, PI, CHORD);

    fill( 139, 69, 19 );
    rect(200,370,400,60);

    fill( 255, 255, 0 );
    triangle(300,370,500,370,400,430);
}