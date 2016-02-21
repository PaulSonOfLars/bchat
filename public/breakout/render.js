/**
 * Created by Paul on 21/02/2016.
 */

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var bbW = 480,
    bbH = 320;
var brickBreakerInProgress = false;
var brickBreakerIsPaused = true;

function pauseBrickBreaker(){
    document.getElementById('playBrickBreakerBtn').innerHTML = "unpause BrickBreaker";
    brickBreakerIsPaused = true;
}

function unPauseBrickBreaker(){
    document.getElementById('playBrickBreakerBtn').innerHTML = "Pause BrickBreaker";
    brickBreakerIsPaused = false;
}

function startFUCKINGBrickBreaker() {
    console.log("you fucking got here!");
    brickBreakerInProgress = true;
    newBrickBreakerGame();
    document.getElementById('game').setAttribute("width", bbW);
    document.getElementById('game').setAttribute("height", bbH);
    unPauseBrickBreaker();
}

function stopBrickBreaker() {
    pauseBrickBreaker();
    brickBreakerInProgress = false;
    document.getElementById('game').setAttribute("width", "0");
    document.getElementById('game').setAttribute("height", "0");
    document.getElementById('playBrickBreakerBtn').innerHTML = "restart BrickBreaker";
}
