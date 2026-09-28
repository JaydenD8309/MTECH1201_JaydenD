function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,231,160);

  strokeWeight(10, 10);
    //Tree Trunk
    line(200, 200, 200, 300);

    //Top Branches
    line(200, 200, 225, 180);
    strokeWeight(8, 8);
    line(226, 180, 232, 165);

    strokeWeight(5, 5);
    line(200, 200, 195, 150);

    line(200, 200, 180, 180);
    strokeWeight(4, 4);
    line(179.5, 180, 175, 150);

    //Middle Branches
    line(200, 215, 220, 210);
    line(200, 225, 185, 210);
    line(200, 245, 220, 230);

    

  //Ground
  fill("White");
  circle(200,500,400);

  //sun
  fill("orange");
  circle(400, 10, 100);
  triangle(350, 20, 340, 40, 360, 40);
  triangle(349, 0, 335, 10, 351, 20);
  triangle(360, 40, 360, 60, 372, 53);
  triangle(372, 53, 375, 70, 389, 59);
  triangle(389, 59, 395, 75, 400, 62);
}
