

function Rock(loc){
  this.loc = loc;

  this.run = function(){
    this.render();
  }

 this.render = function(){
   fill(91, 64, 24);
   rect(this.loc.x, this.loc.y, 20, 20);
 }

}
