var canvas;

var gameState = 0;
var playerCount;
var allPlayers;

var database;

var form, player, game;

var floppy1,floppy2,floppy3,floppy4;


function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}


function draw(){
    if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
    if(gameState === 2){
      game.end();
    }
  }