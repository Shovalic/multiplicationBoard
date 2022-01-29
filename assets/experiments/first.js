function checkNow() {
  let count = 0; 
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      const res = i * j;
      const studentResult = document.getElementById("row" + i + "-" + j).value;
      if (res != studentResult) {
        count = count + 1;
      }
    }
  }
  while (count>=0){
    const m = document.createElement("p");
    const divMessage = document.getElementById("tableMultiply");
    // var scorePara = document.createElement("p");
    // var divScore = document.getElementById("score");
    if (count >= 3){
      m.innerHTML = "יש כמה שגיאות, חזרי על החומר!";
      divMessage.appendChild(m);
      let scoreStudent = document.getElementById("scoreTable").value; 
      scoreStudent = 100 - count;
      document.getElementById("scoreTable").value = scoreStudent;
      break;
    }else if (count === 2){
      m.innerHTML = "יש שתי טעויות, חזרי על החומר!";
      divMessage.appendChild(m);
      let scoreStudent = document.getElementById("scoreTable").value; 
      scoreStudent = 100 - count;
      document.getElementById("scoreTable").value = scoreStudent;
      break;
    }else if (count == 1){
      m.innerHTML = "יש טעות אחת, חזרי על החומר!";
      divMessage.appendChild(m);
      let scoreStudent = document.getElementById("scoreTable").value;
      scoreStudent = 100 - count;
      document.getElementById("scoreTable").value = scoreStudent;
      break;
    }else{
      m.innerHTML = "פתרת הכל נכון, כל הכבוד!";
      divMessage.appendChild(m);
      document.getElementById("scoreTable").value = 100;
      break;
    }
  }
}


function resetTable() {
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      const studentResult = document.getElementById("row" + i + "-" + j).value;
      document.getElementById("row" + i + "-" + j).value = "";

    }
  }
}

let btn = document.getElementById("checkAnswer");
let div = document.getElementById("nice");
let res = "";
btn.addEventListener("click", () => {
  if (div.style.display === "none") {
    div.style.display = "block";
    const num1 = Math.floor(Math.random() * 11);
    document.getElementById("firstMult").value = num1;
    const num2 = Math.floor(Math.random() * 11);
    document.getElementById("secMult").value = num2;
    res = num1 * num2;
    const checkUserAnswer = done();
    const practice = practiceMore();
    document.getElementById("playagain").style.display = "none";
  }
});

function done() {
  let userAnswer = document.getElementById("res").value;
  userAnswer = parseInt(userAnswer);
  if (res === userAnswer) {
    var e = document.createElement("p");
    e.innerHTML = "את צודקת! כל הכבוד :)";
    e.style.marginTop = "10px";
    e.style.textAlign = "center";
    e.style.direction = "rtl";
    e.style.fontSize = "30px";
    e.style.fontWeight = "bold";
    var div = document.getElementById("nice");
    div.appendChild(e);
    document.getElementById("playagain").style.display = "block";
    return;
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
  document.getElementById("display").innerHTML = txt;
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


function practiceMore() {
  document.getElementById("res").value = "none";
  for (k = 1; k <= 10; k++) {
    const num1 = Math.floor(Math.random() * 11);
    document.getElementById("firstMult").value = num1;
    const num2 = Math.floor(Math.random() * 11);
    document.getElementById("secMult").value = num2;
    res = num1 * num2;
    const checkUserAnswer = done();
  }
}

function turn() {
  let content = document.getElementById("tellingStroy").value;
  checkboxes = document.querySelectorAll('input[type="checkbox"]');
  emails = [];

  for (let i = 0; i < checkboxes.length - 1; i++) {
    if (checkboxes[i].checked) {
      emails.push(checkboxes[i].value);
    }
  }
  if (checkboxes[3].checked == true) {
    let addMail = document.getElementById("sendPerson").value;
    emails.push(addMail);
  }
  Email.send({
    Host: "smtp.gmail.com",
    Username: "MultiplicationTableStatus",
    Password: "Believe678",
    To: emails,
    From: "MultiplicationTableStatus@gmail.com",
    Subject: "Sending Email using javascript",
    Body: content,
  });
  // .then(function (message) {
  //     alert("mail sent successfully");
  // })
  alert("mail sent successfully");
  return;
}

function success(){
  alert("איזה כיף שהצלחת! אם כך, הגיע הזמן לשיא חדש. בהצלחה!")
}

function like(){
  alert("איזה כיף שאהבת! מקוות שתאהב גם בפעם הבאה. בהצלחה!")
}

function good(){
  alert("איזה כיף שנהנית! מוזמן לשתף את ההורים ואת החברים. בהצלחה!")
}

function repeat(){
  alert("זה בסדר גם לעצור ולחזור על החומר! אם לדעתך זה לא מספיק, תמיד אפשר לחזור למשחק ולשפר. בהצלחה!")
}

function frustrated(){
  alert("מותר גם להתבאס! הכל עניין של תרגול. בהצלחה!")
}

function confused(){
  alert("יש המון מספרים ותרגילים שונים ולפעמים.. גם בלבולים. הכל עניין של תרגול. בהצלחה!")
}

function upset(){
  alert("זה בסדר להתבאס! עם תרגול נכון ומתמיד, הכל אפשר לשפר. בהצלחה!")
}