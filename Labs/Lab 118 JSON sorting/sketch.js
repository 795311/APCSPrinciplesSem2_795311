var SophiesData = [];

function preload(){
  SophiesData = loadJSON("population.json");

}

function setup() {

  noCanvas();
  bubbleSort();
  console.log(SophiesData);
}

function draw(){

}

function bubbleSort(){
  var length = SophiesData.length;
  for(var i = 0; i < length; i--){
      for(var j = 0; i < (length - i - 1); i++){
        var a = SophiesData[j].total;
        var b = SophiesData[j+1].total;
        if (a > b) {
          var temp = a;
          a = b;
          a = temp;
        }
      }
  }
}
function bubbleSort(){
  var length = SophiesData.length;
  for(var i = 0; i < length; i--){
      for(var j = 0; i < (length - i - 1); i++){
        var a = SophiesData[j].age;
        var b = SophiesData[j+1].age;
        if (a > b) {
          var temp = a;
          a = b;
          a = temp;
        }
      }
  }
}
function bubbleSort(){
  var length = SophiesData.length;
  for(var i = 0; i < length; i--){
      for(var j = 0; i < (length - i - 1); i++){
        var a = SophiesData[j].males;
        var b = SophiesData[j+1].males;
        if (a > b) {
          var temp = a;
          a = b;
          a = temp;
        }
      }
  }
}
console.log(SophiesData);
