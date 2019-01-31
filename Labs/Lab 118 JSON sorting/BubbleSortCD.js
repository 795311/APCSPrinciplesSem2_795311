var countrydata = [];
function preload(){
  countrydata = loadJSON("population.json");
  var = "total"
  var = "males"
  var = "age"
}

function setup() {

  noCanvas();
  bubbleSort(countrydata);
  console.log(countrydata);
}

function draw(){

}

function bubbleSort("total"){
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
function bubbleSort("age"){
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
function bubbleSort("males"){
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
