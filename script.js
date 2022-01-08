function checkNow() {
  let count = 0;
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      const res = i * j;
      const studentResult = document.getElementById("raw" + i + "-" + j).value;
      if (res != studentResult) {
        count = count + 1;
      }
    }
  }
  while (count>=0){
    var m = document.createElement("p");
    var divMessage = document.getElementById("tableMultiply");
    if (count >= 3){
      m.innerHTML = "יש כמה שגיאות, חזרי על החומר!";
      divMessage.appendChild(m);
      break;
    }else if (count == 2){
      m.innerHTML = "יש 2 טעויות, חזרי על החומר!";
      divMessage.appendChild(m);
      break;
    }else if (count == 1){
      m.innerHTML = "יש טעות אחת, חזרי על החומר!";
      divMessage.appendChild(m);
      break;
    }else{
      m.innerHTML = "פתרת הכל נכון, כל הכבוד!";
      divMessage.appendChild(m);
      break;
    }
  }
}

function reset() {
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      const studentResult = document.getElementById("raw" + i + "-" + j).value;
      document.getElementById("raw" + i + "-" + j).value = "";

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
