var snake; //snake object
var w = 20;
var colo, rows;
var food = []; //food array
var rock;
var start = "true" //begins with start screen
var font;
var score = 0;
var numSeg = 1;


function setup(){
  textAlign(CENTER, CENTER); //center text
  frameRate(10); //max frameRate at 10 frames a seconds
  var cnv = createCanvas(800, 800);
  var colo = width/w;
  var rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  loadSnake();
  loadFood(1);
}

function draw(){
  background(0, 0, 255);
  fill(random(225), random(255), random(250));
  textSize(30);
  snake.run();
  //location of score
  text(score, 100, 100);
  rock.run();
  for(var i = 0; i < food.length; i++){
    food[i].run();
}
checkLoc();
gameStart();
deadGame();

}

function checkLoc(){ //eating the food, then splicing it once the snake collides
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      //splices food(gets rid of food and puts it in new location)
      food.splice(i, 1);
      loadFood(1);
      snake.segments.push(createVector(0, 0));
      score = score + 1

    }
  }
}
function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0,0);
  snake = new Snake (loc, vel);
}

function keyPressed(){
  text(keyCode, 0, 0);
  if(keyCode === 87){ // turn up (w)
    start = "false"
    snake.vel = createVector(0, -1*w);
  }
  if(keyCode === 83){ // turn down (s)
      start = "false"
    snake.vel = createVector(0, 1*w);
  }
  if(keyCode === 68){ // turn left (a)
      start = "false"
    snake.vel = createVector(1*w,0);
  }
  if(keyCode === 65){ // turn left (d)
      start = "false"
    snake.vel = createVector(-1*w,0);
  }
}

function loadFood(numFood){ //function for location of food
  for(var i = 0; i < numFood; i++);
  var min = 1;
  var max = 39;
  var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var loc = createVector(locX, locY);
  var j = new Food(loc);
  food.push(j);
  //food.push(newFood);
}
function loadRock(){
  var locX = 200
  var locY = 200
  var loc = createVector(locX, locY);
  var r = new Rock(loc);
  rock.push(r);
}

function gameStart(){
  if(start == "true"){
      noStroke();
    textFont()
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(100);
    text("Snake Game!", 400, 300)
    textSize(25);
    text("Press any button to start", 400, 550)
  }
}

function gameStart(){
  if(start == "true"){
    noStroke();
    fill(141, 206, 113);
    //inside rectangle
    rect(800, 800)
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(100);
    text("Snake", 400, 425)
    textSize(25);
    text("Press 'W' to begin...", 400, 625)
  }
}
function deadGame(){
  if(snake.alive == "true"){
    snake = 0
    score = 0;
    textAlign(CENTER);
    textSize(60);
    text("You Lose...", 400, 425)
  rect(800,800)
  fill(0, 0, 0);

  }
}
