var countrydata = [];
function preload(){
  countrydata = loadJSON("population.json");
}

function setup() {

  noCanvas();
  bubbleSort(countrydata);
  console.log(countrydata);
}

function draw(){

}

function bubbleSort(countrydata){
  var length = countrydata.length;
  for(var i = 0; i < length; i--){
      for(var j = 0; i < (length - i - 1); i++){
        var a = countrydata[j].females;
        var b = countrydata[j+1].females;
        if (a > b) {
          var temp = a;
          a = b;
          a = temp;
        }
      }
  }
}
