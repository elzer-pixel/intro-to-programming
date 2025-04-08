// Creating three global variables
let trainSpeed = 250;
let trainPosition = 0;
let animation;

// Listening for events on the train element and call a function
let train = document.getElementById("train");
train.addEventListener("click", speedUp);

let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click",stopTrain);

function speedUp(){
 if (trainSpeed > 10){
 			trainSpeed -= 10;
      console.log("speed is increased")
      }
      
  		clearInterval(animation);
      /* The following code tracks the value of trainSpeed
      if trainSpeed is High = slow speed, if trainSpeed is low = fast speed */
  		animation = setInterval(frame, trainSpeed);
      
      function frame(){
      trainPosition += 2;
      train.style.left = trainPosition + "px";
      checkPosition(trainPosition);
      
      function checkPosition(currentPosition){
      	if(currentPosition === 300) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
        }
      }
      }
}
function stopTrain(){
	if (trainPosition < 300){
	clearInterval(animation)
	}
}
