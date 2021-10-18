const header = document.querySelector('.header');
const headerelement1 = document.querySelector('.headerelement1');
const navMenu = document.querySelector('.headerelement2');
const menuItems = document.querySelector('.menuitems');
const lines = document.querySelector('.lines');
const menuLine1 = document.querySelector('.line-1');
const menuLine2 = document.querySelector('.line-2');
const menuLine3 = document.querySelector('.line-3');
const navMenuBottom = document.querySelector('.navmenubottom');
const popupContainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup');
const worksSection = document.querySelector('.works');
const checkLowerCase = /[A-Z]/;
const form = document.getElementById('form');
const nameField = document.getElementById('name');
const mailField = document.getElementById('mail');
const messageField = document.getElementById('msg');

const cardElementsArray0 = [
  {
    img: '<div class="cards card0"><div class="cardimg cardimg1"><img class="cardimgs"src="./Images/projects/app_screenshot1.png" alt="Card img-1"/></div>',
    popupTittle: 'E3 Broadcast<br/>2021 Event',
    tittle: '<h2 class="cardtitle">E3 Broadcast<br/>2021 Event</h2>',
    popupImage: '<img src="./Images/projects/app_screenshot2.png"/>',
    technologies:
      '<ul class="proglist"><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>',
    button:
      '<button type="button" id="cardbutton0" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description:
      'Website simulation of E3 annual event. beautiful design and a great layout.',
    buttonLive:
      '<button class="see-live-button"><a href="https://felipeg005.github.io/Capstone-html-css-Javascript/">See Live</a><i><img src="./Images/Icon-live.svg" alt=""></i></button>',
    buttonSource:
      '<button class="see-source-button"><a href="https://github.com/Felipeg005/Capstone-html-css-Javascript">See Source</a><i><img src="./Images/See-Source-Icon.svg" alt=""></i></button>',
  },
];

const cardElementsArray1 = [
  {
    img: '<div class="cards card1"><div class="cardimg cardimg2"><img class="cardimgs"src="./Images/projects/Fancypawsco-screenshot.png"alt="Card img-2"/></div>',
    popupTittle: 'Fancy Paws<br/>Pet Shop',
    tittle: '<h2 class="cardtitle">Fancy Paws<br/>Pet Shop</h2>',
    popupImage: '<img src="./Images/projects/Fancypawsco-mobile-screenshot.png" alt="popupimg"/>',
    technologies:
      '<ul class="proglist"><li class="prg1">Wordpress</li><li class="prg2">Elementor</li><li class="prg3">Woocommerce</li>',
    button:
      '<button type="button" id="cardbutton1" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description: 'This is a great ecommerce I did for Fancy Paws pet shop.',
    buttonLive:
      '<button class="see-live-button"><a href="https://fancypaws.co">See Live</a><i><img src="./Images/Icon-live.svg" alt=""></i></button>',
    buttonSource:
      '<button class="see-source-button"><a href="https://github.com/Felipeg005/">See Source</a><i><img src="./Images/See-Source-Icon.svg" alt=""></i></button>',
  },
];

const cardElementsArray2 = [
  {
    img: '<div class="cards card2"><div class="cardimg cardimg3"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-3"/></div>',
    popupTittle: 'Multi-Post Stories<br/>Gain+Glory3',
    tittle: '<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory3</h2>',
    popupImage: '<img src="./Images/Snapshoot-Portfolio.svg" alt="popupimg"/>',
    technologies:
      '<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>',
    button:
      '<button type="button" id="cardbutton2" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description: 'This is a great project I did for a company 3',
    buttonLive:
      '<button class="see-live-button"><p>See Live</p><i><img src="./Images/Icon-live.svg" alt=""></i></button>',
    buttonSource:
      '<button class="see-source-button"><p>See Source</p><i><img src="./Images/See-Source-Icon.svg" alt=""></i></button>',
  },
];

const cardElementsArray3 = [
  {
    img: '<div class="cards card3"><div class="cardimg cardimg4"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-4"/></div>',
    popupTittle: 'Multi-Post Stories<br/>Gain+Glory4',
    tittle: '<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory4</h2>',
    popupImage: '<img src="./Images/Snapshoot-Portfolio.svg" alt="popupimg"/>',
    technologies:
      '<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>',
    button:
      '<button type="button" id="cardbutton3" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description: 'This is a great project I did for a company 4',
    buttonLive:
      '<button class="see-live-button"><p>See Live</p><i><img src="./Images/Icon-live.svg" alt=""></i></button>',
    buttonSource:
      '<button class="see-source-button"><p>See Source</p><i><img src="./Images/See-Source-Icon.svg" alt=""></i></button>',
  },
];

const cardElementsArray4 = [
  {
    img: '<div class="cards card4"><div class="cardimg cardimg5"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-5"/></div>',
    popupTittle: 'Multi-Post Stories<br/>Gain+Glory5',
    tittle: '<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory5</h2>',
    popupImage: '<img src="./Images/Snapshoot-Portfolio.svg" alt="popupimg"/>',
    technologies:
      '<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>',
    button:
      '<button type="button" id="cardbutton4" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description: 'This is a great project I did for a company 5',
    buttonLive:
      '<button class="see-live-button"><p>See Live</p><i><img src="./Images/Icon-live.svg" alt=""></i></button>',
    buttonSource:
      '<button class="see-source-button"><p>See Source</p><i><img src="./Images/See-Source-Icon.svg" alt=""></i></button>',
  },
];

const cardElementsArray5 = [
  {
    img: '<div class="cards card5"><div class="cardimg cardimg6"><img class="cardimgs"src="./Images/transparent-img.png"alt="Card img-6"/></div>',
    popupTittle: 'Multi-Post Stories<br/>Gain+Glory6',
    tittle: '<h2 class="cardtitle">Multi-Post Stories<br/>Gain+Glory6</h2>',
    popupImage: '<img src="./Images/Snapshoot-Portfolio.svg" alt="popupimg"/>',
    technologies:
      '<ul class="proglist"><li class="prg1">Ruby on rails</li><li class="prg2">css</li><li class="prg3">JavScript</li><li class="prg4">html</li></ul>',
    button:
      '<button type="button" id="cardbutton5" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description: 'This is a great project I did for a company 6',
    buttonLive:
      '<button class="see-live-button"><p>See Live</p><i><img src="./Images/Icon-live.svg" alt=""></i></button>',
    buttonSource:
      '<button class="see-source-button"><p>See Source</p><i><img src="./Images/See-Source-Icon.svg" alt=""></i></button>',
  },
];

const cardsArray = [
  cardElementsArray0,
  cardElementsArray1,
  cardElementsArray2,
  cardElementsArray3,
  cardElementsArray4,
  cardElementsArray5,
];

const buttonsArray = [
  'cardbutton0',
  'cardbutton1',
  'cardbutton2',
  'cardbutton3',
  'cardbutton4',
  'cardbutton5',
];

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

function pageload() {
  for (let i = 0; i < cardsArray.length; i += 1) {
    const newDiv = document.createElement('div');
    worksSection.appendChild(newDiv);
    newDiv.classList = `cards-container card${i}`;
    for (let j = 0; j < cardsArray[i].length; j += 1) {
      newDiv.innerHTML += cardsArray[i][j].img;
      newDiv.innerHTML += cardsArray[i][j].tittle;
      newDiv.innerHTML += cardsArray[i][j].technologies;
      newDiv.innerHTML += cardsArray[i][j].button;
    }
  }
}

function loadPopup(buttonId) {
  for (let i = 0; i < buttonsArray.length; i += 1) {
    if (buttonId === buttonsArray[i]) {
      popupContainer.classList.toggle('hidden');

      const popupImg = document.createElement('div');
      popupImg.classList.add('popup-img');
      popup.appendChild(popupImg);
      popupImg.innerHTML = cardsArray[i][0].popupImage;

      const popupTittle = document.createElement('h2');
      popupTittle.classList.add('popup-tittle');
      popup.appendChild(popupTittle);
      popupTittle.innerHTML = cardsArray[i][0].popupTittle;

      const popupTechnologies = document.createElement('div');
      popupTechnologies.classList.add('popup-Technologies');
      popup.appendChild(popupTechnologies);
      popupTechnologies.innerHTML = cardsArray[i][0].technologies;

      const popupDescription = document.createElement('p');
      popupDescription.classList.add('popup-description');
      popup.appendChild(popupDescription);
      popupDescription.innerHTML = cardsArray[i][0].description;

      const popupButtonContainer = document.createElement('div');
      popupButtonContainer.classList.add('button-container');
      popup.appendChild(popupButtonContainer);

      const popupButtonLive = document.createElement('div');
      popupButtonLive.classList.add('popup-live');
      popupButtonContainer.appendChild(popupButtonLive);
      popupButtonLive.innerHTML = cardsArray[i][0].buttonLive;

      const popupButtonSource = document.createElement('div');
      popupButtonSource.classList.add('popup-source');
      popupButtonContainer.appendChild(popupButtonSource);
      popupButtonSource.innerHTML = cardsArray[i][0].buttonSource;
    }
  }
}

/* eslint-disable */ function clickedButton(buttonId) {
  loadPopup(buttonId);
}

/* eslint-disable */ function closePopup() {
  popupContainer.classList.toggle('hidden');
  const popupClear1 = document.querySelector('.popup-img');
  popupClear1.parentNode.removeChild(popupClear1);
  const popupClear2 = document.querySelector('.popup-tittle');
  popupClear2.parentNode.removeChild(popupClear2);
  const popupClear3 = document.querySelector('.popup-Technologies');
  popupClear3.parentNode.removeChild(popupClear3);
  const popupClear4 = document.querySelector('.popup-description');
  popupClear4.parentNode.removeChild(popupClear4);
  const popupClear5 = document.querySelector('.button-container');
  popupClear5.parentNode.removeChild(popupClear5);
}

function formLowerCaseValidate(submitForm) {
  const removeMessage = document.querySelector('.email-error');
  if (removeMessage) {
    submitForm.preventDefault();
    form.removeChild(removeMessage);
  }
  const emailInput = document.getElementById('mail').value;
  if ((checkLowerCase.test(emailInput)) === true) {
    submitForm.preventDefault();
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('email-error');
    form.appendChild(errorMessage);
    errorMessage.innerText = 'The form was not submited, please only use lower case in email field.';
  }
}

function storageEmailData() {
  const nameInput = document.getElementById('name').value;
  const emailInput = document.getElementById('mail').value;
  const msgInput = document.getElementById('msg').value;
  const formInfo = {
    name: nameInput,
    email: emailInput,
    message: msgInput,
  };
  localStorage.setItem('formInfo', JSON.stringify(formInfo));
}

function preFillFields() {
  const storageForm = JSON.parse(localStorage.getItem('formInfo'));
  if (storageForm) {
    nameField.value = storageForm.name;
    mailField.value = storageForm.email;
    messageField.value = storageForm.message;
  }
}

header.addEventListener('click', clickMenu);
document.addEventListener('DOMContentLoaded', (...e) => {
  pageload(...e);
  preFillFields(...e);
});

form.addEventListener('submit', (...e) => {
  formLowerCaseValidate(...e);
});

form.addEventListener('input', storageEmailData);
