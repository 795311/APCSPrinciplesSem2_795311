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
        var a = countrydata[j].total;
        var b = countrydata[j+1].total;
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
        var a = countrydata[j].age;
        var b = countrydata[j+1].age;
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
        var a = countrydata[j].males;
        var b = countrydata[j+1].males;
        if (a > b) {
          var temp = a;
          a = b;
          a = temp;
        }
      }
  }
}
