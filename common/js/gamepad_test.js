var haveEvents = 'ongamepadconnected' in window;
var controllers = {};

function connecthandler(e) {
  addgamepad(e.gamepad);
}

function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad;

  var d = document.createElement("div");
  d.setAttribute("id", "controller" + gamepad.index);

  var t = document.createElement("h1");
  t.appendChild(document.createTextNode("gamepad: " + gamepad.id));
  d.appendChild(t);

  var b = document.createElement("div");
  b.className = "buttons";
  for (var i = 0; i < gamepad.buttons.length; i++) {
    var e = document.createElement("span");
    e.className = "button";
    //e.id = "b" + i;
    e.innerHTML = i;
    b.appendChild(e);
    
  }

  d.appendChild(b);

  var a = document.createElement("div");
  a.className = "css-c4uk4t";

  for (var i = 0; i < 1; i++) {
    var p = document.createElement("div");
    p.className = "x-axis";
    //p.id = "a" + i;
    a.appendChild(p);
  }
  for (var i = 0; i < 1; i++) {
    var p = document.createElement("div");
    p.className = "y-axis";
    //p.id = "a" + i;
    a.appendChild(p);
  }  
  for (var i = 0; i < 1; i++) {
    var p = document.createElement("div");
    p.className = "circle-outline";
    //p.id = "a" + i;
    a.appendChild(p);
  }
  
  for (var i = 0; i < gamepad.axes.length-3; i++) {
    var p = document.createElement("div");
    p.className = "joystick-position";
    //p.id = "a" + i;
    a.appendChild(p);
  }
  
  d.appendChild(a);

  
  var l = document.createElement("div");
  l.className = "css-c4uk4t2";

  for (var i = 0; i < 1; i++) {
    var p = document.createElement("div");
    p.className = "x-axis";
    //p.id = "a" + i;
    l.appendChild(p);
  }
  for (var i = 0; i < 1; i++) {
    var p = document.createElement("div");
    p.className = "y-axis";
    //p.id = "a" + i;
    l.appendChild(p);
  }  
  for (var i = 0; i < 1; i++) {
    var p = document.createElement("div");
    p.className = "circle-outline";
    //p.id = "a" + i;
    l.appendChild(p);
  }
  
  for (var i = 0; i < gamepad.axes.length-3; i++) {
    var p = document.createElement("div");
    p.className = "joystick-position2";
    //p.id = "a" + i;
    l.appendChild(p);
  }

  d.appendChild(l);

  // See https://github.com/luser/gamepadtest/blob/master/index.html
  var start = document.getElementById("start");
  if (start) {
    start.style.display = "none";
  }

  document.getElementById("gamepad").appendChild(d);
  requestAnimationFrame(updateStatus);
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
  var d = document.getElementById("controller" + gamepad.index);
  document.getElementById("gamepad").removeChild(d);
  delete controllers[gamepad.index];
}

function updateStatus() {
  if (!haveEvents) {
    scangamepads();
  }

  var i = 0;
  var j;

  for (j in controllers) {
    var controller = controllers[j];
    var d = document.getElementById("controller" + j);
    var buttons = d.getElementsByClassName("button");

    for (i = 0; i < controller.buttons.length; i++) {
      var b = buttons[i];
      var val = controller.buttons[i];
      var pressed = val == 1.0;
      var touched = false;
      if (typeof(val) == "object") {
        pressed = val.pressed;
        if ('touched' in val) {
          touched = val.touched;
        }
        val = val.value;
      }
      var pct = Math.round(val * 150) + "%";
      b.style.backgroundSize = pct + " " + pct;
      b.className = "button";
      if (pressed) {
        b.className += " pressed";
      }
      if (touched) {
        b.className += " touched";
      }
    }
    
    var axes = d.getElementsByClassName("joystick-position");
    for (i = 0; i < controller.axes.length-3; i++) {
      var a = axes[i];
      a.setAttribute("style","left:"+ controller.axes[i]*50 +"%;" + " top:"+controller.axes[i+1]*50+"%;"+" margin:50%");
    }

    var axes = d.getElementsByClassName("joystick-position2");
    for (i = 0; i < controller.axes.length-3; i++) {
      var a = axes[i];
      a.setAttribute("style","left:"+ controller.axes[i+2]*50 +"%;" + " top:"+controller.axes[i+3]*50+"%;"+" margin:50%");
    }
    
  }

  requestAnimationFrame(updateStatus);
}

function scangamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (gamepads[i].index in controllers) {
        controllers[gamepads[i].index] = gamepads[i];
      } else {
        addgamepad(gamepads[i]);
      }
    }
  }
}

window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);

if (!haveEvents) {
setInterval(scangamepads, 500);

}