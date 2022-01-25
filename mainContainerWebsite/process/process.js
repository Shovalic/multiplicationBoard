let show = document.getElementById("close");
let msg = document.createElement("p");
function success(){
    show.style.display = "block";
    msg.innerHTML = "איזה כיף שהצלחת! אם כך, הגיע הזמן לשיא חדש. בהצלחה!"
    show.appendChild(msg);
}

function like(){
    show.style.display = "block";
    msg.innerHTML = "איזה כיף שאהבת! מקוות שתאהב גם בפעם הבאה. בהצלחה!"
    show.appendChild(msg);
}
  
function good(){
    show.style.display = "block";
    msg.innerHTML = "איזה כיף שנהנית! מוזמן לשתף את ההורים ואת החברים. בהצלחה!"
    show.appendChild(msg);
}
  
function repeat(){
    show.style.display = "block";
    msg.innerHTML = "זה בסדר גם לעצור ולחזור על החומר! אם לדעתך זה לא מספיק, תמיד אפשר לחזור למשחק ולשפר. בהצלחה!"
    show.style.height = "100px"
    show.appendChild(msg);
}
  
function frustrated(){
    show.style.display = "block";
    msg.innerHTML = "מותר גם להתעצבן! הכל עניין של תרגול. בהצלחה!!"
    show.appendChild(msg);
}
  
function confused(){
    show.style.display = "block";
    msg.innerHTML = "יש המון מספרים ותרגילים שונים ולפעמים.. גם בלבולים. הכל עניין של תרגול. בהצלחה!"
    msg.style.paddingLeft = "15px"
    msg.style.paddingRight = "15px"
    show.style.height = "100px"
    show.appendChild(msg);
}

function consentrate(){
    show.style.display = "block";
    msg.innerHTML = "זה בסדר להתבאס! עם תרגול נכון ומתמיד, הכל אפשר לשפר. בהצלחה!"
    show.appendChild(msg);
}
 
