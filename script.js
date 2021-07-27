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
const popup = document.querySelector('.popup-container')
const card1 = document.querySelector('.card1');
const popup1 = new Object();

let names = ['name1', 'name2', 'name3']
let descriptions = []

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

header.addEventListener('click', clickMenu);

closeButton.addEventListener('click', () => {
  popup.classList.toggle('hidden');
})

popup1 {
  name: names[1];
  description: desciptions[pressedButtonId];
}