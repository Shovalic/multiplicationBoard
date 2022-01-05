// function onChange(element) {
//     let array5 = [];
//     let array6 = [];
//     let array7 = [];
//     let array8 = [];
//     if (element.checked == true && element.value === "shovalmo7@gmail.com"){
//         let array1 = [];
//         let sendShoval = element.value;
//         array1[0] = sendShoval;
//         array5 = array1;
//         console.log(array5)
//     }else if (element.checked == true && element.value === "shovi743@gmail.com"){
//         let sendMom = element.value;
//         let array2 =[]; 
//         array2[0] = sendMom;
//         array6 = array2;
//         console.log(array6)

//     }else if (element.checked == true && element.value === "sa3@gmail.com"){
//         let sendFather = element.value;
//         let array3 =[]; 
//         array3[0] = sendFather;
//         array7 = array3;
//         console.log(array7)

//     }
//     }else if (element.checked == true && element.value === "someoneElse"){
//         console.log(sendSomeMail)
//         document.getElementById("sendPerson").style.display = "block";
//         document.getElementById("updateMail").style.display = "block";
//         var s = document.createElement("input");
//         var m = document.getElementById("sendMails");
//         s.style.marginLeft = "100px";
//         s.style.border = "solid 2px black";
//         m.appendChild(s);
//         s.value = s.value; 
//         alert(s.value);

//         let array4 =[]; 
//         array4[0] = sendSomeMail;
//         array8 = array4;
//         let sendChoice = array5 + array6 + array7;
//         console.log(sendChoice)
//         let btn = document.getElementById("sendMail");
//         let div = document.getElementById("sentItem");
//         btn.addEventListener("click", () => {
//         let content = document.getElementById("tellingStroy").value;
//         // let creatEmail = onChange();
//         // let sendChoiceMail = sendChoice;
//         // let sendShoval = document.getElementById("shovalic").value;
//         // let sendMom = document.getElementById("mom").value;
//         Email.send({
//             Host: "smtp.gmail.com",
//             Username: "MultiplicationTableStatus",
//             Password: "Believe678",
//             To: element.value,
//             From: "MultiplicationTableStatus@gmail.com",
//             Subject: "Sending Email using javascript",
//             Body: content,
//         }).then(function (message) {
//             alert("mail sent successfully");
//         });
//     });
// }