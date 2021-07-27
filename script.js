const header = document.querySelector(".header");
const headerelement1 = document.querySelector(".headerelement1");
const navMenu = document.querySelector(".headerelement2");
const menuItems = document.querySelector(".menuitems");
const lines = document.querySelector(".lines");



header.addEventListener("click", clickMenu)

function clickMenu () {
  header.classList.toggle("header1");
  headerelement1.classList.toggle("headerelement1-1");
  menuItems.classList.toggle("menuitems1");
  lines.classList.toggle("lines1");
  navMenu.classList.toggle("nav-menu");

}