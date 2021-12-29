window.addEventListener("load", startup, false);

var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");

var color;
var bgcolor;
var defaultColor = "#000000";

resize();

function startup() {
  color = document.querySelector("#c");
  color.value = defaultColor;
  color.addEventListener("input", updateFirst, false);
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
  //扣掉左邊的排版距離
  pos.x = e.clientX - 120;
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
  var yes = confirm('Are you sure you want to clean the canvas?\nThis step cannot be recovery!');
  if (yes) {
      alert('YES! I want to clean the canvas.');
      parent.document.location.reload();
  } else {
      alert('NO! NO! Go back! Don\'t clean~~~~');
  }
}

//------ radio (choose pen or eraser) ----
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

//當有按鍵被觸發
document.onkeydown = function(){
  if(window.event && (window.event.keyCode == 123 || window.event.keyCode == 116)) {
    if (window.event.keyCode == 123) {
      //此為防君子模式 如果你是小人就看ㄅㄏㄏ~~
      //還想偷看!!!!
      alert("不給你用F12ㄏㄏ!\n看屁看 自己寫辣 還想偷看阿~");
      // window.location = "about:blank"; 
      event.keyCode = 0;
      event.returnValue = false;
      return false;
    } else if (window.event.keyCode == 116) {
      //防止不小心按到F5
      var yes = confirm('Are you sure you want to clean the canvas?\nThis step cannot be recovery!');
      if (yes) {
        alert('YES! I want to clean the canvas.');
        parent.document.location.reload();
      } else {
        alert('NO! NO! Go back! Don\'t clean~~~~');
      }
    }
  }
}

// 禁用右键（防止右键查看源代码） 
window.oncontextmenu = function(){
  alert("用右鍵要幹嘛啊~~!\n是想偷看嗎?ㄎㄎ\n不給你看勒");
  return false;
} 

//視窗大小改變就關閉視窗
var h = window.innerHeight,w=window.innerWidth; 
window.onresize = function () { 
  if (h!= window.innerHeight||w!=window.innerWidth){
    alert("Finished!?\nThanks for using! Bye~~\n想要繼續畫畫請重新開一個分頁\n\n還是說你偷用+ +!");
    window.close(); 
    window.location = "about:blank"; 
  } 
}