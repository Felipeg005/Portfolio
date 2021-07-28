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
const popupContainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup');
const popupimg = document.querySelector('.popup-img');
const worksSection = document.querySelector('.works');
const button0 = document.getElementById("cardbutton0");
const button1 = document.getElementById('cardbutton1');
const button2 = document.getElementById('cardbutton2');
const button3 = document.getElementById('cardbutton3');
const button4 = document.getElementById('cardbutton4');
const button5 = document.getElementById('cardbutton5');



let cardElementsArray1 = [{img:'<div class="cards card0"><div class="cardimg cardimg1"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-1"/></div>',
popupImage: '<img src="./Images/icon-skills.png" alt="popupimg"/>',
tittle: '<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory</h2>',
technologies: '<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>',
button: '<button type="button" id="cardbutton0" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>'}];
let cardElementsArray2 = [{img:'<div class="cards card1"><div class="cardimg cardimg2"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-2"/></div>',
tittle : '<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory2</h2>',
technologies: '<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>',
button: '<button type="button" id="cardbutton1" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>'}];
let cardElementsArray3 = [{img: '<div class="cards card2"><div class="cardimg cardimg3"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-3"/></div>',
tittle:'<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory3</h2>',
technologies:'<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>',
button:'<button type="button" id="cardbutton2" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>'}];
let cardElementsArray4 = [{img:'<div class="cards card3"><div class="cardimg cardimg4"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-4"/></div>',
tittle:'<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory4</h2>',
technologies:'<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>',
button:'<button type="button" id="cardbutton3" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>'}];
let cardElementsArray5 = [{img:'<div class="cards card4"><div class="cardimg cardimg5"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-5"/></div>',
tittle:'<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory5</h2>',
technologies:'<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>',
button:'<button type="button" id="cardbutton4" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>'}];
let cardElementsArray6 = [{img:'<div class="cards card5"><div class="cardimg cardimg6"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-6"/></div>',
tittle:'<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory6</h2>',
technologies:'<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>',
button:'<button type="button" id="cardbutton5" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>'}];
let cardsArray = [cardElementsArray1, cardElementsArray2, cardElementsArray3, cardElementsArray4, cardElementsArray5,
cardElementsArray6];

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
      newDiv.innerHTML+=cardsArray[i][j].img;
      newDiv.innerHTML+=cardsArray[i][j].tittle;
      newDiv.innerHTML+=cardsArray[i][j].technologies;
      newDiv.innerHTML+=cardsArray[i][j].button;
    }
  }
}

function clickedButton (buttonId){
  loadPopup(buttonId);
  console.log(buttonId);
}

function loadPopup(buttonId){
  if (buttonId==="cardbutton0"){
    popupContainer.classList.toggle('hidden');

    let popupImg= document.createElement("div");
    popupImg.classList.add('popup-img');
    popup.appendChild(popupImg);
    popupImg.innerHTML=cardElementsArray1[0].popupImage;

    let popupTittle = document.createElement("h2");
    popupTittle.classList.add('popup-tittle');
    popup.appendChild(popupTittle);
    popupTittle.innerHTML=cardElementsArray1[0].tittle;
    
    let popupTechnologies = document.createElement("h2");
    popupTechnologies.classList.add('popup-tittle');
    popup.appendChild(popupTechnologies);
    popupTechnologies.innerHTML=cardElementsArray1[0].technologies;
    
    let popupDescription = document.createElement("ul");
    popupDescription.classList.add('popup-description');
    popup.appendChild(popupDescription);
    popupDescription.innerHTML=cardElementsArray1[0].description;
    
    let popupButtonLive = document.createElement("h2");
    popupButtonLive.classList.add('popup-live');
    popup.appendChild(popupTittle);
    popupTittle.innerHTML=cardElementsArray1[0].live;
    
    let popupButtonSource = document.createElement("h2");
    popupButtonLive.classList.add('popup-source');
    popup.appendChild(popupTittle);
    popupButtonLive.innerHTML=cardElementsArray1[0].source;
  }
}

function closePopup (){
  popupContainer.classList.toggle('hidden');

  let popupImg = document.querySelector(".popup-img")
  popupImg.remove();

  let popupTittle = document.querySelector(".popup-tittle")
  popupTittle.remove();
}

header.addEventListener('click', clickMenu);

closeButton.addEventListener('click', closePopup);

document.addEventListener('DOMContentLoaded', pageload);
