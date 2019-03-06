//  Global variables

var boids =[];//array
var chaser;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0,0,0);
  loadboid(200); //loads 200 boids
  frameRate(120); //sets the framerate at smooth 120 fps
  chaser = new Ball(createVector(width/2, height/2), createVector(1,2), 25, color(255, 0, 0));
}//creates a new ball that is used as the chaser

function draw() {
  background(20,20,20,60); //black background with an opactiy of 60
  chaser.run();
  
for(var i= 0; i<boids.length; i++){
 boids[i].run();
}
  for(var i= 0; i<boids.length; i++){
    var dist = boids[i].loc.dist(chaser.loc)
    if(dist <= 15){
      boids.splice(i,1);
    }//for loop that deletes the boids using splice once the chaser is within 15 pixels of any boid
  }
}
function loadboid(numboid){ //loadboid function, defines location, veloctiy, radius and color

  for(i=0; i < numboid; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-2,2), random(-2,2));
    var radius=random(10,10);
    var col= color(random(1, 255), random(1, 255), random(1, 255));
    boids.push(new boid(loc, vel, radius, col)); //pushes a new boid
  }
console.log(boids);
}
