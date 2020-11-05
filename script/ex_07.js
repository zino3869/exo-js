var canvas = document.getElementsByTagName("canvas")[0];
var buttons = document.getElementsByTagName("button");

var ctxt = canvas.getContext("2d");

ctxt.beginPath();
ctxt.moveTo(6, 6);
ctxt.lineTo(14, 10);
ctxt.lineTo(6, 14);
ctxt.closePath();
ctxt.borderWidth = 1;
ctxt.strokeStyle = 'white';
ctxt.stroke();
ctxt.fillStyle = 'white';
ctxt.fill();

var media = new Audio();
media.src = "/music.mp3";

canvas.onclick = function() {
    media.play();
    ctxt.strokeStyle = 'orange';
    ctxt.stroke();
    ctxt.fillStyle = 'orange';
    ctxt.fill();
}

buttons[0].onclick = function() {
    media.pause();
    ctxt.strokeStyle = 'white';
    ctxt.stroke();
    ctxt.fillStyle = 'white';
    ctxt.fill();
}

buttons[1].onclick = function() {
    media.pause();
    media.currentTime = 0;
    ctxt.strokeStyle = 'white';
    ctxt.stroke();
    ctxt.fillStyle = 'white';
    ctxt.fill();
}

buttons[2].onclick = function() {
    if (media.muted == true)
        media.muted = false;
    else
        media.muted = true;
}