var D = new Date();
var s = D.getHours();
var lega = document.getElementById("legA");
if(s<18){
    lega.innerText = "صباح الخير!" + lega.innerText;
}
else {
    lega.innerText = "مساء الخير!"+ lega.innerText;
}
function cv(){window.open("images/CV-4.pdf");}
function inter(){window.location.href = "interests.html";}
function intera(){window.location.href = "interestsAr.html";}
function indexa(){window.location.href = "indexAr.html";}
function index(){window.location.href = "index.html";}
function cont(){window.location.href = "#cont";}
function AM(){window.location.href = "#sum2"}
function btt(){window.location.href = "#indH";}
function bttI(){window.location.href = "#intH";}
function FR344(){window.open("images/Final_Report_34408.pdf");}
function W(){ window.location.href = "#MWV";}

document.getElementById("YT").addEventListener("click", function(){window.open('https://www.youtube.com/@Mo64366', '_blank')});
document.getElementById("INS").addEventListener("click", function(){window.open('https://www.instagram.com/mohanadalasmri/')});
document.getElementById("WHT").addEventListener("click", function(){window.open('https://wa.me/966538821677')});
document.getElementById("LI").addEventListener("click", function(){window.open('https://www.linkedin.com/in/muhannadalasmari/')});
document.getElementById("GIT").addEventListener("click", function(){window.open('https://github.com/MuhannadAlasmari')});
document.getElementById("SM").addEventListener("click", function(){openid('interests.html', 'MWV');})
function openid(fileN, eleId){
    window.location.href = `${fileN}#${eleId}`;
}