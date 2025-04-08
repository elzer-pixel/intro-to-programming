document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(15deg)"

// put a 2-pixel-wide, solid black border around his body.
document.getElementById("body").style.border = "2px black solid"

//Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px"

//Put yellow dots around his right eye.
document.getElementById("righteye").style.border = "4px yellow dotted"

// change the text color.
document.getElementById("body").style.color = "#FF0000"
// Give Douglas hair.
document.getElementById("head").style.borderTop = "5px black solid"

// TRY IT OUT:

// Tilting Douglas's head to the other side.
document.getElementById("head").style.transform = "rotate(-15deg)"

// Make Douglas's nose round.
document.getElementById("nose").style.borderRadius = "50%"
//Make Douglas's lips pink.
document.getElementById("mouth").style.backgroundColor = "pink"

//Making Douglas Dance:
let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");
let mouth = document.getElementById("mouth");
let rightArm = document.getElementById("rightarm");
let nose = document.getElementById("nose");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
mouth.addEventListener("click", openCloseMouth);
rightArm.addEventListener("click", moveDownUp);
nose.addEventListener("click", breatheInOut);

function moveUpDown(e) {
  let robotPart = e.target;
  let top = 0;
  let id = setInterval(frame, 10); // draw every 10ms

  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 20) {
      clearInterval(id);
    }
  }
}

function moveRightLeft(e) {
  let robotPart = e.target;
  let left = 0;
  let id = setInterval(frame, 10); // draw every 10ms

  function frame() {
    robotPart.style.left = left + "%";
    left++;
    if (left === 70) {
      clearInterval(id);
    }
  }
}
// move the right arm up then down
function moveDownUp(e) {
  let robotPart = e.target;
  let top = 70;
  let id = setInterval(frame, 10); // draw every 10ms

  function frame() {
    robotPart.style.top = top + "%";
    top--;
    if (top === 35) {
      clearInterval(id);
    }
  }
}

function openCloseMouth(e) {
  let robotPart = e.target;
  let height = 30;
  let id = setInterval(frame, 20); // draw every 20ms

  function frame() {
    robotPart.style.height = height + "%";
    height--;
    if (height === 15) {
      clearInterval(id);
    }
  }
}

function breatheInOut(e) {
  let robotPart = e.target;
  let height = 20;
  let width = 20;
  let id = setInterval(frame, 50); // draw every 50ms

  function frame() {
    robotPart.style.height = height + "%";
    robotPart.style.width = width + "%";
    height--;
    width--;
    if (height === 10 && width === 10) {
      clearInterval(id);
    }
  }
}
