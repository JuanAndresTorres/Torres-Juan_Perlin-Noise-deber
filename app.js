let posX1, posX2, posY1, posY2, posX3, posY3;
let t = 0;
let taml = 0;

function setup() {
    createCanvas (800, 800);
    background(255);
    tam1 = noise(t) * 100;

}

function draw () {
    // background(255);
    posX1 = noise(t) * width;
    posY1 = noise(t + 1) * height;
    posX2 = noise(t + 2) * width;
    posY2 = noise(t + 3) * height;
    posX3 = noise(t + 4) * width;
    posY3 = noise(t + 5) * height;

    tam1 = noise(t) * 100;

    stroke ('rgba(255, 150, 0, 0.5');
    strokeWeight (5);
    circle (posX1, posY1, tam1);
    circle (posX2, posY2, tam1);
    circle (posX3, posY3, tam1);
    fill(0, 150, 255);
    
    stroke (' rgba(255, 150, 0, 0.5) ') ;
    strokeWeight(5);
    circle(posX1, posY1, tam1) ;
    circle(posX2, posY2, tam1) ;
    circle(posX3, posY3, tam1) ;
    fill(0, 150, 255);
    triangle (posX1, posY1, posX2, posY2, posX3,
    posY3);
    t += 0.01;
}
