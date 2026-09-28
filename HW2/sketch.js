let cloud1=0;
let y=400;
let cloud2=10;
let smoke1=440;
let smoke2=420;
let smoke3=400;
let smoke4=380;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(131, 192, 230);

//clouds
  fill(255);
  noStroke();
  ellipse(cloud1, 150, 100, 60);
  ellipse(cloud1, 130, 100, 60);
  ellipse(cloud1, 150, 100, 60);
  cloud1 += 0.5;
  ellipse(cloud2, 110, 100, 60);
  ellipse(cloud2, 90, 100, 60);
  ellipse(cloud2, 110, 100, 60);
  cloud2 += 0.25;


  //red building 
  fill(168, 37, 37);
  stroke(10);
  square(400, 100, 600);

  //windows
  fill(230, 226, 30);
  square(420, 120, 50);
  square(500, 120, 50);
  fill(0, 0, 0);
  square(420, 200, 50);
  fill(230, 226, 30);
  square(500, 200, 50);
  square(420, 280, 50);
  fill(0, 0, 0);
  square(500, 280, 50);
  square(420, 360, 50);
  square(500, 360, 50);
  fill(230, 226, 30);
  square(420, 440, 50);
  square(500, 440, 50);
  square(420, 520, 50);
  fill(0, 0, 0);
  square(500, 520, 50);

  //blue building
  fill(29, 76, 105);
  stroke(10);
  square(100, 500, 300);

  //smokestack
  fill(100);
  square(120, 450, 50);

  //smoke 
  fill(200);
  noStroke();
  ellipse(145, smoke1, 50, 50);
  ellipse(155, smoke2, 50, 50);
  ellipse(165, smoke3, 50, 50);
  ellipse(175, smoke4, 50, 50);
  smoke1 -= 0.25;
  smoke2 -= 0.35;
  smoke3 -= 0.4;
  smoke4 -= 0.5;

  

}

function mousePressed() {
  y = 0;
  smoke1 = 440;
  smoke2 = 420;
  smoke3 = 400;
  smoke4 = 380;
  cloud1 = 0;
  cloud2 = 10;
  x=0;
  
}