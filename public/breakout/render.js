/**
 * Created by Paul on 21/02/2016.
 */

var canvas = document.getElementsById('game');
var ctx = canvas.getContext('2d');
var W = 480,
    H = 320;
var inProgress = false;
var isPaused = true;

function pauseBrickBreaker(){
    document.getElementById('playBrickBreakerBtn').innerHTML = "unpause BrickBreaker";
    isPaused = true;
}

function unPauseBrickBreaker(){
    document.getElementById('playBrickBreakerBtn').innerHTML = "Pause BrickBreaker";
    isPaused = false;
}

function startBrickBreaker() {
    inProgress = true;
    newGame();
    document.getElementById('game').setAttribute("width", W);
    document.getElementById('game').setAttribute("height", H);
    unPauseBrickBreaker();
}

function stopBrickBreaker() {
    pauseBrickBreaker();
    inProgress = false;
    document.getElementById('game').setAttribute("width", "0");
    document.getElementById('game').setAttribute("height", "0");
    document.getElementById('playBrickBreakerBtn').innerHTML = "restart BrickBreaker";
}
