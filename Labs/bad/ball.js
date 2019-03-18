/*
**Ball Constructor function
**Justin Mills
**Aug 20, 2018
*/
function Ball(location, velocity, radius, col){ //gives the parameters of the ball/chaser
  this.loc=location;
  this.vel=velocity;
  this.rad=radius;
  this.col=col;
  this.acc = createVector(0,.1);

  this.run = function(){
    this.update();
    this.render();
    var mouseLoc = createVector(mouseX, mouseY); //makes the chaser follow the mouse
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09); //makes the chaser follow the mouse using a lerp function
}
  this.update=function(){
  }
  //checkEdges()reverses speed when the ball touches an edge
  this.render = function (){
    fill(this.col);
    stroke("red")
    line(this.loc.x, this.loc.y, this.rad, this.rad);
  }
  }

  //  End of the Ball constructor
