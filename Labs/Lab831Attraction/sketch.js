//  Global variables

var balls=[];//array
var redBall;
var toggle = true;
// put setup code here

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(2000);
  redBall= new Ball(createVector(width/2, height/2), createVector(1,2), 25,
  color(255, 0, 0));
}


function draw() {
  if (toggle){
  background(20,20,20, 80);
  redBall.run();
  for(var i= 0; i<balls.length; i++){
    balls[i].run();
  }
}
}


function loadBalls(numBalls){
  for(i=0; i < numBalls; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3,3), random(-3,3));
    var radius=random(9,10);
    var col= color(random(1, 255), random(1, 255), random(1, 255));
    balls.push(new Ball(loc, vel, radius, col));
  }
console.log(balls);
}

function mousePress(){
  toggle = !toggle;
}
