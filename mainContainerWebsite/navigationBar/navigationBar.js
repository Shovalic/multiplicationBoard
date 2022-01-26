function showMultiplicationBoard() {
  let divNotice = document.getElementById("notice");
  divNotice.style.display = "none";
  let practice = document.getElementById("practice");
  practice.style.display = "none";
  let process = document.getElementById("process");
  process.style.display = "none";
}

function showPractice() {
  let divNotice = document.getElementById("notice");
  divNotice.style.display = "none";

  let practice = document.getElementById("practice");
  practice.style.display = "block";
  let process = document.getElementById("process");
  process.style.display = "none";
}

function showProcess() {
  let divNotice = document.getElementById("notice");
  let msg = document.getElementById("msg-result");
  if (!msg) {
    msg = document.createElement("p");
    msg.id = "msg-result";
    msg.innerHTML = "קֹדֶם כֹּל נַתְחִיל וְאָז נְסַכֵּם. מָה דַּעְתְּך? :)";
    divNotice.appendChild(msg);
    divNotice.style.display = "block";
  }
  let process = document.getElementById("process");
  process.style.display = "block";
}
