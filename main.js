img = "";
function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
}
function draw(){
    image(img,0,0,300,300);
    fill("red");
    text("dog",45,75);
    noFill();
    stroke("red");
    rect(40,70,400,100);
}