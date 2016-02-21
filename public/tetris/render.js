var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
var W = 300,
    H = 600;
var BLOCK_W = W / COLS,
    BLOCK_H = H / ROWS;
var inProgress = false;
var isPaused = true;

function pauseTetris(){
    document.getElementById('playTetrisBtn').innerHTML = "unpause Tetris";
    isPaused = true;
}

function unPauseTetris(){
    document.getElementById('playTetrisBtn').innerHTML = "Pause Tetris";
    isPaused = false;
}

function startTetris() {
    inProgress = true;
    newTetrisGame()
    document.getElementById('game').setAttribute("width", W);
    document.getElementById('game').setAttribute("height", H);
    unPauseTetris();
}

function stopTetris() {
    pauseTetris();
    inProgress = false;
    document.getElementById('game').setAttribute("width", "0");
    document.getElementById('game').setAttribute("height", "0");
    document.getElementById('playTetrisBtn').innerHTML = "restart Tetris";
}

// draw a single square at (x, y)
function drawBlock(x, y) {
    ctx.fillRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1, BLOCK_H - 1);
    ctx.strokeRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1, BLOCK_H - 1);
}

// draws the board and the moving shape
function render() {
    ctx.clearRect(0, 0, W, H);

    ctx.strokeStyle = 'black';
    for (var x = 0; x < COLS; ++x) {
        for (var y = 0; y < ROWS; ++y) {
            if (board[y][x]) {
                ctx.fillStyle = colors[board[y][x] - 1];
                drawBlock(x, y);
            }
        }
    }

    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'black';
    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (current[y][x]) {
                ctx.fillStyle = colors[current[y][x] - 1];
                drawBlock(currentX + x, currentY + y);
            }
        }
    }
}

setInterval(function() {
    if (!isPaused) {
        render()
    }
}, 30);