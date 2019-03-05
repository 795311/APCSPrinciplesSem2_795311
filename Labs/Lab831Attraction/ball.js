/*
**Ball Constructor function
**Justin Mills
**Aug 20, 2018
*/
function Ball(location, velocity, radius, col){
  this.loc=location;
  this.vel=velocity;
  this.rad=radius;
  this.col=col;
  this.acc = createVector(0,.1);

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  //This function changes the location of the Ball
  //by adding speed to x and y
  this.update=function(){
    if(this != redBall){
      var d =this.loc.dist(redBall.loc);
      if(d<450){
        var attForce =p5.Vector.sub(redBall.loc, this.loc);
        attForce.normalize();
        attForce.mult(.08);
        this.vel.add(attForce);

      if(d < 85){
        var repForce = p5.Vector.sub(this.loc, redBall.loc);
        repForce.normalize();
        repForce.mult(.5);
        this.vel.add(repForce);
      }
    }else {

    }
    this.vel.limit(3);
    }
      this.loc.add(this.vel);
  }

  //checkEdges()reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  this.render = function (){
    fill(this.col);
  //  ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  stroke("green");
  line(this.loc.x, this.loc.y, 400, 400);

  }

  }//  End of the Ball constructor
