document.body.onkeydown = function(e) {
    var keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate',
        80: 'pause'
    };
    if (typeof keys[e.keyCode] != 'undefined') {
        if (!(isPaused && e.keyCode != 80)) {
            keyPress(keys[e.keyCode]);
            render();
        }
    }
};