

function Rock(loc){
  this.loc = loc;

  this.run = function(){
    this.render();
  }

 this.render = function(){
   fill(91, 64, 24);
   image(img, this.loc.x, this.loc.y, img.width/20, img.height/20);
 }

}
