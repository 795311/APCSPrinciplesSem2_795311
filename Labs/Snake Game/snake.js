function Snake(loc, vel){
 this.loc = loc;
 this.vel = vel;
 this.segments = [];
 this.alive = "false";

this.run = function(){
  this.update();
  this.killed();
  this.render();
}

this.update = function(){
  for(var i = this.segments.length - 1; i >= 0; i--){
    if(i > 0){
      this.segments[i].x = this.segments[i-1].x;
      this.segments[i].y = this.segments[i-1].y;
    }else{
      this.segments[0].x = this.loc.x;
      this.segments[0].y = this.loc.y;
    }
  }
  this.loc.add(this.vel);

  this.loc.x = constrain(this.loc.x, 0, 800-20); //constrain both x and y
  this.loc.y = constrain(this.loc.y, 0, 800-20);
  //if tangled === true, start newRound
}

this.render = function(){
  for(var i = 0; i < this.segments.length; i++){
       //snake color
       fill(255, 255, 255);
       //stroke(0, 225, 225);
       image(img3, this.segments[i].x, this.segments[i].y, 20, 20)
       noStroke();
     }
     //stroke(0, 255, 255);
     fill(255);
     image(img4, this.loc.x, this.loc.y, 20, 20);
     noStroke();
   }

   this.killed = function(){
     for(var i = 0; i < this.segments.length; i++){
     var distX = this.loc.x - this.segments[i].x;
     var distY = this.loc.y - this.segments[i].y;
     if((distX == 0) && (distY == 0)){
       this.alive = "true";
       console.log(this.status);
     }
   }
 }
}
