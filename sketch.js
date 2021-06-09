var database
var player,game,form
var gameState=0,playerCount=0

function setup(){
database=firebase.database();

createCanvas(500,500);
  
game=new Game()
game.getState()
game.start()

}

function draw(){
   

}

