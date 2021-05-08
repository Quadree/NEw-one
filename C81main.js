var lastpositionofx,lastpositionofy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=2;
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    color=document.getElementById("colorInput").value;
    width_of_line=document.getElementById("width_of_line").value;
    lastpositionofx=e.touches[0].clientX-canvas.offsetLeft;
    lastpositionofy=e.touches[0].clientY-canvas.offsetTop;
}

function Eraser(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(lastpositionofx, lastpositionofy);
        ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
        ctx.stroke();
    lastpositionofx=current_position_of_touch_x;
    lastpositionofy=current_position_of_touch_y; 
}

