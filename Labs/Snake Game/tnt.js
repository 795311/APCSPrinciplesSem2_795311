
function Tnt(loc){
  this.loc = loc;

  this.run = function(){
    this.render();
  }

 this.render = function(){
   fill(255, 0, 0);
  image(img9, this.loc.x, this.loc.y, img.width/20, img.height/20);
 }

}
