var footer = document.getElementsByTagName("footer")[0];
var blank = footer.getElementsByTagName("div")[0];
var coord = footer.getElementsByTagName("div")[1];
var canvas = blank.getElementsByTagName("canvas")[0];

function boxed(x,y,ox,oy){
    var box = { left: 0, top: 0, right: 0, bottom: 0};
    box = coord.getBoundingClientRect();
    return x>box.left+ox && x<box.right+ox && y>box.top+oy && y<box.bottom+oy;
}
var pressed = false;
var start_x = 0;
var start_y = 0;
var stop_x = 0;
var stop_y = 0;
canvas.onmousedown = function(){
    this.setAttribute('draggable','true');
    pressed = true;
}
//getcanvas
document.onmouseup = function(){
    pressed = false;
}
canvas.onmouseemove = function(e){
    if(pressed){
        coord.innerText = "New coordinates => {x:"+e.pageX+", y:"+ e.pageY+"}";
    }
}
canvas.ondragstart = function(e){
    e.dataTransfer.setData("text", e.target.id);

}

//getcanvas
blank.ondragover = function(e){
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var offsetX = 0;
    var offsetY = 0;
    canvas.style.position = 'static';
    canvas.style.left = e.pageX+offsetX+"px";
    canvas.style.top = e.pageY+offsetY+"px";
    coord.innerText = "New coordinates => {x:"+e.pageX+", y:"+ e.pageY+"}";
}

blank.ondrop = function(e){
    //e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var offsetX = 0;
    var offsetY = 0;
    canvas.style.position = 'static';
    if(boxed(e.pageX+offsetX,e.pageY+offsetY)){
        canvas.style.left = e.pageX+offsetX+"px";
        canvas.style.top = e.pageY+offsetY+"px";
    }
}