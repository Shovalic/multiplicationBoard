let show = document.getElementById("close");
let msg = document.createElement("p");
function success(){
    show.style.display = "block";
    msg.innerHTML = "אֵיזֶה כֵּיף שהִצְלַחְת! אִם כָּךְ, הִגִּיעַ הַזְּמַן לְשִׂיא חָדָש. בְּהַצְלָחָה!"
    show.appendChild(msg);
}

function like(){
    show.style.display = "block";
    msg.innerHTML = "אֵיזֶה כֵּיף שאָהַבְת! מְקַוּוֹת שתֹּאהַב גַּם בַּפָּעַם הַבָּאָה. בְּהַצְלָחָה!"
    show.appendChild(msg);
}
  
function good(){
    show.style.display = "block";
    msg.innerHTML = "אֵיזֶה כֵּיף שנֶּהֱנֵית! אֶפְשר לְשתֵּף אֶת הַהוֹרִים וְאֶת הַחֲבֵרִים. בְּהַצְלָחָה!"
    show.appendChild(msg);
}
  
function repeat(){
    show.style.display = "block";
    msg.innerHTML = "זֶה בְּסֵדֶר גַּם לַעֲצֹר וְלַחֲזֹר עַל הַחֹמֶר! אִם לְדַעְתְּך זֶה לֹא מַסְפִּיק, תָּמִיד אֶפְשר לַחְזֹר לַמִּשְׂחָק וּלְשפֵּר. בְּהַצְלָחָה!"
    msg.style.paddingLeft = "15px"
    msg.style.paddingRight = "15px"
    show.style.height = "100px"
    show.appendChild(msg);
}
  
function frustrated(){
    show.style.display = "block";
    msg.innerHTML = "מֻתָּר גַּם לְהִתְעַצְבֵּן! הַכֹּל עִנְיָן של תִּרְגּוּל. בְּהַצְלָחָה!"
    show.appendChild(msg);
}
  
function confused(){
    show.style.display = "block";
    msg.innerHTML = "יֵש הֲמוֹן מִסְפָּרִים וְתַרְגִּילִים שוֹנִים וְלִפְעָמִים.. גַּם בִּלְבּוּלִים. הַכֹּל עִנְיָן של תִּרְגּוּל. בְּהַצְלָחָה!"
    msg.style.paddingLeft = "15px"
    msg.style.paddingRight = "15px"
    show.style.height = "100px"
    show.appendChild(msg);
}

function consentrate(){
    show.style.display = "block";
    msg.innerHTML = "זֶה בְּסֵדֶר לְהִתְבָּאֵס! עִם תִּרְגּוּל נָכוֹן וּמִתָּמִיד, הַכֹּל אֶפְשר לְשפֵּר. בְּהַצְלָחָה!"
    show.appendChild(msg);
}
 
