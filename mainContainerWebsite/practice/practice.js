function multiplicationChoice(){
  let div = document.getElementById("randomExercise");
  div.style.display = "block";
  let res = "";
  const num1 = Math.floor(Math.random() * 11);
  document.getElementById("firstFactor").value = num1;
  const num2 = Math.floor(Math.random() * 11);
  document.getElementById("secondFactor").value = num2;
  res = num1 * num2;
  // const checkUserAnswer = done();
  const practice = practiceMore();
  document.getElementById("playagain").style.display = "none";
}

function done() {
  let userAnswer = document.getElementById("resultRandomExercise").value;
  userAnswer = parseInt(userAnswer);
  let firstNumber = document.getElementById("firstFactor").value;
  let secondNumber = document.getElementById("secondFactor").value;
  let res = firstNumber * secondNumber;
  let divMessage = document.getElementById("randomExercise");
  let msg = document.getElementById("msg-result");
  let msgText = "";
  if (!msg) {
    msg = document.createElement("p");
    msg.id = "msg-result";
  }
  if (isNaN(userAnswer)){
    msgText = "הָזִינוּ עֵרֶךְ מַתְאִים וּפִתְרוּ :)"
  }else if (res !== userAnswer){
    msgText = "נִמְצְאָה שגִיאָה, נָסוּ שוּב :("
    let nextExercise = document.getElementById("next-level-process");
    nextExercise.style.display = "none";
    document.getElementById("playagain").style.display = "none";
  }else{
    msgText = "נָכוֹן מְאוֹד! כָּל הַכָּבוֹד :)"
    let nextExercise = document.getElementById("next-level-process");
    nextExercise.style.display = "block";
    document.getElementById("playagain").style.display = "block";
  }
  msg.innerHTML = msgText;
  msg.style.marginTop = "10px";
  msg.style.textAlign = "center";
  msg.style.direction = "rtl";
  msg.style.fontSize = "25px";
  msg.style.fontWeight = "bold";
  divMessage.appendChild(msg);
  return;
}

function practiceMore() {
  let msg = document.getElementById("msg-result");
  msg.innerHTML = "";
  document.getElementById("resultRandomExercise").value = ""
  for (k = 1; k <= 10; k++) {
    const num1 = Math.floor(Math.random() * 11);
    document.getElementById("firstFactor").value = num1;
    const num2 = Math.floor(Math.random() * 11);
    document.getElementById("secondFactor").value = num2;
    res = num1 * num2;
    // const checkUserAnswer = done();
  }
}

const myTimeout = setTimeout(putName, 15000);
function putName(){
  var valueName = document.getElementById("user-name-input").value;
  if (valueName){
    let userNameInput = document.createElement("h1");
    let divUserNameInput = document.getElementById("user-name");
    userNameInput.innerText =   valueName + ",";
    userNameInput.style.color = "rgba(255, 153, 0, 1)";
    userNameInput.style.textShadow = "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;"
    divUserNameInput.appendChild(userNameInput);
    console.log(userNameInput)
  }
}





