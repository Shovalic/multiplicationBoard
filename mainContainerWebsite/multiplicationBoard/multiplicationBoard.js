
function checkTableResultsFunction(){
  let count = 0; 
  for (i = 1; i <= 10; i++){
      for (j = 1; j <= 10; j++){
      const res = i * j;
      const studentResult = document.getElementById("raw" + i + "-" + j).value;
      if (res != studentResult){
          count = count + 1;
      }
    }
  }
  while (count>=0){
    var m = document.createElement("p");
    var divMessage = document.getElementById("multiplicationBoard");
    var scorePara = document.createElement("p");
    var divScore = document.getElementById("scoreMultiplicationBoard");
    if (count >= 3){
      m.innerHTML = "יש כמה שגיאות, חזרי על החומר!";
      divMessage.appendChild(m);
      let scoreStudent = document.getElementById("inputScoreMultiplicationBoard").value; 
      scoreStudent = 100 - count;
      document.getElementById("inputScoreMultiplicationBoard").value = scoreStudent;
      break;
    }else if (count == 2){
      m.innerHTML = "יש שתי טעויות, חזרי על החומר!";
      divMessage.appendChild(m);
      let scoreStudent = document.getElementById("inputScoreMultiplicationBoard").value; 
      scoreStudent = 100 - count;
      document.getElementById("inputScoreMultiplicationBoard").value = scoreStudent;
      break;
    }else if (count == 1){
      m.innerHTML = "יש טעות אחת, חזרי על החומר!";
      divMessage.appendChild(m);
      let scoreStudent = document.getElementById("inputScoreMultiplicationBoard").value;
      scoreStudent = 100 - count;
      document.getElementById("inputScoreMultiplicationBoard").value = scoreStudent;
      break;
    }else{
      m.innerHTML = "פתרת הכל נכון, כל הכבוד!";
      divMessage.appendChild(m);
      document.getElementById("inputScoreMultiplicationBoard").value = 100;
      break;
    }
  }
}

function resetTableInputFunction() {
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      const studentResult = document.getElementById("raw" + i + "-" + j).value;
      document.getElementById("raw" + i + "-" + j).value = "";
    }
  }
}

// stopwatch
// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("displayTime").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
}

// Create function to display buttons

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}
// Create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
