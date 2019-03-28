

function Potion(loc){
  this.loc = loc;

  this.run = function(){
    this.render();
  }

 this.render = function(){
   fill(255, 0, 0);
  image(img5, this.loc.x, this.loc.y, img.width/16, img.height/16);
 }

}
