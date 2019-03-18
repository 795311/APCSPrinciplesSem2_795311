
//github



function boid(location, velocity, radius, col){ //this is what creates the boids
  this.loc=location;
  this.vel=velocity;
  this.rad=radius;
  this.col=col;
  this.acc = createVector(0,.01);

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  //This function changes the location of the Ball
  //by adding speed to x and y
  this.update=function(){
var d = this.loc.dist(chaser.loc); //creates repullsion between chaser and boids
if (d<275){
  var steeringForce = p5.Vector.sub(this.loc, chaser.loc);
  steeringForce.normalize();
  steeringForce.mult(.05);
  this.vel.add(steeringForce);
}
      this.vel.limit(5); //limits the velocity of each boids to 5
      this.loc.add(this.vel);
  }

  //checkEdges()reverses speed when the boids touch an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  this.render = function (){
    fill(this.col);
    push() // push or save the current coord system into the stack
      translate(this.loc.x, this.loc.y);
      rotate(this.vel.heading()+radians(90));//points each boids in the direction of their velocitu
      line(this.loc.x, this.loc.y, Ball.loc.x, Ball.loc.y);
  pop()  //  pop or restore the coordianate system from the stack

  }

  }//  End of the Ball constructor
