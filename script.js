const header = document.querySelector('.header');
const headerelement1 = document.querySelector('.headerelement1');
const navMenu = document.querySelector('.headerelement2');
const menuItems = document.querySelector('.menuitems');
const lines = document.querySelector('.lines');
const menuLine1 = document.querySelector('.line-1');
const menuLine2 = document.querySelector('.line-2');
const menuLine3 = document.querySelector('.line-3');
const navMenuBottom = document.querySelector('.navmenubottom');
const closeButton = document.querySelector('.closeme-button');
const popup = document.querySelector('.popup-container');
const worksSection = document.querySelector('.works');
let htmlString = "";
let cardElementsArray1 = ['<div class="cards card0"><div class="cardimg cardimg1"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-1"/></div>'+
'<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory</h2>'+
'<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>'+
'<button type="button" class="cardbutton cardbutton1">See Project</button>'];
let cardElementsArray2 = ['<div class="cards card1"><div class="cardimg cardimg2"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-2"/></div>'+
'<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory2</h2>'+
'<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>'+
'<button type="button" class="cardbutton cardbutton2">See Project</button>'];
let cardElementsArray3 = ['<div class="cards card2"><div class="cardimg cardimg3"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-3"/></div>'+
'<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory3</h2>'+
'<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>'+
'<button type="button" class="cardbutton cardbutton2">See Project</button>'];
let cardElementsArray4 = ['<div class="cards card3"><div class="cardimg cardimg4"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-4"/></div>'+
'<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory4</h2>'+
'<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>'+
'<button type="button" class="cardbutton cardbutton2">See Project</button>'];
let cardElementsArray5 = ['<div class="cards card4"><div class="cardimg cardimg5"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-5"/></div>'+
'<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory5</h2>'+
'<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>'+
'<button type="button" class="cardbutton cardbutton2">See Project</button>'];
let cardElementsArray6 = ['<div class="cards card5"><div class="cardimg cardimg6"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-6"/></div>'+
'<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory6</h2>'+
'<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>'+
'<button type="button" class="cardbutton cardbutton2">See Project</button>'];
let cardsArray = [cardElementsArray1, cardElementsArray2, cardElementsArray3, cardElementsArray4, cardElementsArray5,
cardElementsArray6];
const Popupobjt = new Object();


function clickMenu() {
  header.classList.toggle('header1');
  headerelement1.classList.toggle('headerelement1-1');
  menuItems.classList.toggle('menuitems1');
  lines.classList.toggle('lines1');
  navMenu.classList.toggle('nav-menu');
  menuLine1.classList.toggle('line-1-1');
  menuLine2.classList.toggle('line-1-2');
  menuLine3.classList.toggle('line-1-3');
  navMenuBottom.classList.toggle('navmenubottom1');
}

function pageload () {
  
  for (let i=0; i<cardsArray.length; i++){
    let newDiv = document.createElement("div");
    worksSection.appendChild(newDiv);
    newDiv.classList="cards-container"+" card"+i;
    for (let j=0; j<cardsArray[i].length; j++) {
      newDiv.innerHTML=cardsArray[i];
    }
  }
}

header.addEventListener('click', clickMenu);

closeButton.addEventListener('click', () => {
  popup.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', pageload);
