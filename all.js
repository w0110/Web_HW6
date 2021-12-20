window.addEventListener("load", startup, false);

var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");

var color;
var defaultColor = "#000000";

resize();

function startup() {
  colorWell = document.querySelector("#c");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
}

function updateFirst(event) {
  color = event.target.value;
}

// ------- canvas size ------
// resize canvas when window is resized
function resize() {
  // ctx.canvas.width = window.innerWidth;
  // ctx.canvas.height = window.innerHeight;
  ctx.canvas.width = 500;
  ctx.canvas.height = 500;
}

// initialize position as 0,0
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  //扣掉上面的高度
  pos.y = e.clientY - 70;
}

// -----bg color------
function backgroundColor() {
  bgcolor = document.getElementById("bgColor").value;
  ctx.fillStyle = bgcolor;
  ctx.fillRect(0,0,1000,1000);
}

// ----draw----
function draw(e) {
  // if mouse is not clicked, do not go further
  if (e.buttons !== 1) return;
  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = document.getElementById("s").value; // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

//F5 重新整理畫面(刷新畫布)
function clean() { 
  parent.document.location.reload();
}

//------radio----
function submit() {
  var Total_Obj = document.getElementsByTagName("INPUT");
  for (var i = 0; i < Total_Obj.length; i++) {
    if (Total_Obj[i].type == "radio") {
      if (Total_Obj[i].checked) {
        if (Total_Obj[i].value == "eraser") {
          color = document.getElementById("bgColor").value;
        } else{
          color = document.getElementById("c").value;
        }
      }
    }
  }
}

// -------------save img -------------------
var image = document.getElementById('draw');
image.src = canvas.toDataURL();

//還想偷看!!!!
document.onkeydown = function(){
  if(window.event && window.event.keyCode == 123) {
    alert("不給你用F12ㄏㄏ!\n看屁看 自己寫辣 還想偷看阿~");
    // window.location = "about:blank"; 
    event.keyCode = 0;
    event.returnValue = false;
    return false;
  }
}

// 禁用右键（防止右键查看源代码） 
window.oncontextmenu = function(){
  alert("不給你用右鍵ㄏㄏ!\n看屁看 自己寫辣 還想偷看阿~");
  return false;
} 

//視窗大小改變就關閉視窗
var h = window.innerHeight,w=window.innerWidth; 
window.onresize = function () { 
  if (h!= window.innerHeight||w!=window.innerWidth){
    alert("你做完了嗎?Thanks for using! Bye~~\n還是說你偷用+ +!");
    window.close(); 
    window.location = "about:blank"; 
  } 
}