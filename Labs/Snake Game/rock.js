

function Rock(loc){
  this.loc = loc;

  this.run = function(){
    this.render();
  }

 this.render = function(){
   fill(255, 0, 0);
   rect(200, 200, 20, 20);
 }

}
