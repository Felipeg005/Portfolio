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
const Popupobjt = new Object();
let card1 = ['cards card1', 'cardimg cardimg1', './Images/transparent-img.png', '', 'cardtitle' ,'Multi-Post Stories<br/>Gain+Glory'];
const cardContent = [card1[0], card1[1], card1[2], card1[3], card1[4], card1[5]];

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
  let card = document.createElement("div");
  let cardImgContainer = document.createElement("div");
  let cardimg = document.createElement("img");
  let cardTittle = document.createElement("h3");
  let progList = document.createElement("ul");
  let prog1 = document.createElement("li");
  let prog2 = document.createElement("li");
  let prog3 = document.createElement("li");
  let prog4 = document.createElement("li");
  
  
  card.className = cardContent[0];
  cardImgContainer.className = cardContent[1];
  cardimg.src=(cardContent[2]);
  cardimg.alt=(cardContent[3]);
  cardTittle.className = cardContent[4];
  cardTittle.innerHTML = (cardContent[5]);
  progList.className = "proglist";
  prog1.className = "prg1";
  prog2.className = "prg2";
  prog3.className = "prg3";
  prog4.className = "prg4";

  worksSection.appendChild(card);
  card.appendChild(cardImgContainer);
  cardImgContainer.appendChild(cardimg);
  card.appendChild(cardTittle);
  card.appendChild(progList);
  progList.appendChild(prog1);
  progList.appendChild(prog2);
  progList.appendChild(prog3);
  progList.appendChild(prog4);

}

header.addEventListener('click', clickMenu);

closeButton.addEventListener('click', () => {
  popup.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', pageload);
