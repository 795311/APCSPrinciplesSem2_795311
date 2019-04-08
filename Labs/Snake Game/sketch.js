var snake; //snake object
var w = 20;
var colo, rows;
var food = []; //food array
var rock = [];
var potion = [];
var potion2 = [];
var diamond = [];
var start = "true" //begins with start screen
var font;
var score = 0;
var img;
var numSeg = 1;


function setup(){
  textAlign(CENTER, CENTER); //center text
  frameRate(10); //max frameRate at 10 frames a seconds
  var cnv = createCanvas(800, 800);
  var colo = width/w;
  var rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  img = loadImage("cobblestone.png");
  img2 = loadImage("notchapple.png");
  img3 = loadImage("creeperbody.png");
  img4 = loadImage("creeper_head2.jpg");
  img5 = loadImage("splashpotion.png");
  img6 = loadImage("splashSwift.gif");
  img7 = loadImage("background1.png");
  loadSnake();
  loadFood(1);
  loadRock(25);
  loadPotion(1);
  loadPotion2(1);
}

function draw(){
  if(snake.alive == "false"){
    background(img7);
  }
  fill(random(225), random(255), random(250));
  textSize(30);
  snake.run();
  //location of score
  text(score, 100, 100);
  for(var i = 0; i < rock.length; i++){
    rock[i].run();
}
  for(var i = 0; i < food.length; i++){
    food[i].run();
}
    for(var i = 0; i < potion.length; i++){
      potion[i].run();
  }
  for(var i = 0; i < potion2.length; i++){
    potion2[i].run();
}

checkLoc();
checkPotion2();
checkRock();
checkPotion();
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
      frameRate(10);
      snake.segments.push(createVector(0, 0));
      score = score + 1

    }
  }
}

function checkRock(){ //hitting the rock then dying
  for(var i = 0; i < rock.length; i++){
    var distX = rock[i].loc.x - snake.loc.x;
    var distY = rock[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      snake.alive = "true";


    }
  }
}
function checkPotion(){ //eating the potion, then lower the frame rate
  for(var i = 0; i < potion.length; i++){
    var distX = potion[i].loc.x - snake.loc.x;
    var distY = potion[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      potion.splice(i, 1);
      loadPotion(1);
      frameRate(7);
    }
  }
}
function checkPotion2(){ //eating the potion, then lower the frame rate
  for(var i = 0; i < potion2.length; i++){
    var distX = potion2[i].loc.x - snake.loc.x;
    var distY = potion2[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      potion2.splice(i, 1);
      loadPotion2(1);
      frameRate(15);
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
function loadRock(numRock){ //function for location of food
  for(var i = 0; i < numRock; i++){
  var min = 1;
  var max = 39;
  var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var loc = createVector(locX, locY);
  var j = new Rock(loc);
  rock.push(j);
  }
  //food.push(newFood);
}
function loadPotion(numPotion){ //function for location of food
  for(var i = 0; i < numPotion; i++){
  var min = 1;
  var max = 39;
  var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var loc = createVector(locX, locY);
  var j = new Potion(loc);
  potion.push(j);
  }
  //food.push(newFood);
}
function loadPotion2(numPotion2){ //function for location of food
  for(var i = 0; i < numPotion2; i++){
  var min = 1;
  var max = 39;
  var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var loc = createVector(locX, locY);
  var j = new Potion2(loc);
  potion2.push(j);
  }
  //food.push(newFood);
}
//function loadPotion(numPotion){ //function for location of food
  for(var i = 0; i < numPotion; i++){
  var min = 1;
  var max = 39;
  var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * w;
  var loc = createVector(locX, locY);
  var j = new Potion(loc);
  potion.push(j);
}

function gameStart(){
  if(start == "true"){
    noStroke();
    fill(141, 206, 113);
    rect(800, 800, 50, 50);
    fill(255, 255, 255);
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
    fill(255, 255, 255);
    textAlign(CENTER);
    textSize(60);
    text("You Lose...", 400, 425)
  rect(800,800, 50, 50);
  fill(255, 255, 255);

  }
}
