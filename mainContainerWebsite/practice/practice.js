function multiplicationChoice(){
  let div = document.getElementById("randomExercise");
  div.style.display = "block";
  let res = "";
  const num1 = Math.floor(Math.random() * 11);
  document.getElementById("firstFactor").value = num1;
  const num2 = Math.floor(Math.random() * 11);
  document.getElementById("secondFactor").value = num2;
  res = num1 * num2;
  const checkUserAnswer = done();
  const practice = practiceMore();
  document.getElementById("playagain").style.display = "none";
}

function done() {
  let userAnswer = document.getElementById("resultRandomExercise").value;
  let firstNumber = document.getElementById("firstFactor").value;
  let secondNumber = document.getElementById("secondFactor").value;
  userAnswer = parseInt(userAnswer);
  let res = firstNumber * secondNumber;
  if (res === userAnswer){
    var e = document.createElement("p");
    e.innerHTML = "נָכוֹן מְאוֹד! כָּל הַכָּבוֹד :)";
    e.style.marginTop = "10px";
    e.style.textAlign = "center";
    e.style.direction = "rtl";
    e.style.fontSize = "25px";
    e.style.fontWeight = "bold";
    var div = document.getElementById("randomExercise");
    div.appendChild(e);
    document.getElementById("playagain").style.display = "block";
    return;
  }
}

function practiceMore() {
    document.getElementById("resultRandomExercise").value = "";
    for (k = 1; k <= 10; k++) {
      const num1 = Math.floor(Math.random() * 11);
      document.getElementById("firstFactor").value = num1;
      const num2 = Math.floor(Math.random() * 11);
      document.getElementById("secondFactor").value = num2;
      res = num1 * num2;
      const checkUserAnswer = done();
    }
}

const myTimeout = setTimeout(putName, 5000);
function putName(){
  var valueName = document.getElementById("user-name-insertion").value;
  if (valueName){
    let userNameInput = document.createElement("h1");
    let divUserNameInput = document.getElementById("user-name");
    userNameInput.innerText =   valueName + ",";
    userNameInput.style.color = "rgba(255, 153, 0, 1)";
    userNameInput.style.textShadow = "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;"
    divUserNameInput.appendChild(userNameInput);
  }
}




