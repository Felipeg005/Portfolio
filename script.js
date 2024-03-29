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
    img: '<div class="cards card0"><div class="cardimg cardimg1"><img class="cardimgs"src="./img/projects/Covid-traking-app.png" alt="Card img-1"/></div>',
    popupTittle: 'Covid 19<br/>Traking App',
    tittle: '<h2 class="cardtitle">Covid 19<br/>Traking Ap</h2>',
    popupImage: '<img src="./img/projects/Covid-traking-app-popup.png"/>',
    technologies:
      '<ul class="proglist"><li class="prg2">JavaScript</li><li class="prg3">React</li><li class="prg4">Redux</li></ul>',
    button:
      '<button type="button" id="cardbutton0" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description:
      'Very usefull App to track the Covid-19 worldwide, you can see al cases with specific details for each country.',
    buttonLive:
      '<button class="see-live-button"><a href="https://felipeg005.github.io/Covid19-Tracking-App/">See Live</a><i><img src="./img/Icon-live.svg" alt=""></i></button>',
    buttonSource:
      '<button class="see-source-button"><a href="https://github.com/Felipeg005/Covid19-Tracking-App">See Source</a><i><img src="./img/See-Source-Icon.svg" alt=""></i></button>',
  },
];

const cardElementsArray1 = [
  {
    img: '<div class="cards card1"><div class="cardimg cardimg2"><img class="cardimgs"src="./img/projects/Bookstore-card-screenshot.png"alt="Card img-2"/></div>',
    popupTittle: 'Bookstore<br/>React & Redux',
    tittle: '<h2 class="cardtitle">Bookstore<br/>React & Redux</h2>',
    popupImage: '<img src="./img/projects/Bookstore-popup-screenshot.png" alt="popupimg"/>',
    technologies:
      '<ul class="proglist"><li class="prg1">React & Redux</li><li class="prg2">css</li><li class="prg3">JavaScript</li><li class="prg4">JSX</li></ul>',
    button:
      '<button type="button" id="cardbutton1" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description: 'Nice design and functionality Bookstore App developed with React-Redux getting and sending data for external API',
    buttonLive:
      '<button class="see-live-button"><a href="https://felipeg005.github.io/Bookstore-React-Redux/">See Live</a><i><img src="./img/Icon-live.svg" alt=""></i></button>',
    buttonSource:
      '<button class="see-source-button"><a href="https://github.com/Felipeg005/Bookstore-React-Redux">See Source</a><i><img src="./img/See-Source-Icon.svg" alt=""></i></button>',
  },
];

const cardElementsArray2 = [
  {
    img: '<div class="cards card2"><div class="cardimg cardimg3"><img class="cardimgs"src="./img/projects/AJ-card-screenshot.png"alt="Card img-3"/></div>',
    popupTittle: 'AJ<br/>Capital Funding',
    tittle: '<h2 class="cardtitle">AJ<br/>Capital Funding</h2>',
    popupImage: '<img src="./img/projects/AJ-popup-screenshot.png" alt="popupimg"/>',
    technologies:
      '<ul class="proglist"><li class="prg1">Wordpress</li><li class="prg2">css</li><li class="prg3">Elementor</li><li class="prg4">html</li></ul>',
    button:
      '<button type="button" id="cardbutton2" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description: 'This is a great project I did for a company 4',
    buttonLive:
    '<button class="see-live-button"><a href="https://ajcapitalfunding.com/business-loans/merchant-cash-advance/">See Live</a><i><img src="./img/Icon-live.svg" alt=""></i></button>',
    buttonSource:
    '<button class="see-source-button"><a href="https://ajcapitalfunding.com/">See Source</a><i><img src="./img/See-Source-Icon.svg" alt=""></i></button>',
  },
];

const cardElementsArray3 = [
  {
    img: '<div class="cards card3"><div class="cardimg cardimg4"><img class="cardimgs"src="./img/projects/mathmagicians-card-screenshot.png"alt="Card img-4"/></div>',
    popupTittle: 'Math<br/>Magicians',
    tittle: '<h2 class="cardtitle">Math<br/>Magicians</h2>',
    popupImage: '<img src="./img/projects/mathmagicians-popup-screenshot.png" alt="popupimg"/>',
    technologies:
    '<ul class="proglist"><li class="prg1">React.js</li><li class="prg2">css</li><li class="prg3">JavaScript</li><li class="prg4">JSX</li></ul>',
    button:
      '<button type="button" id="cardbutton3" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description: 'Great Calculator application, developed with JavaScript and React. This App follows all unit testing scenarios.',
    buttonLive:
    '<button class="see-live-button"><a href="https://felipeg005.github.io/Math-Magicians-React-App/">See Live</a><i><img src="./img/Icon-live.svg" alt=""></i></button>',
    buttonSource:
    '<button class="see-source-button"><a href="https://github.com/Felipeg005/Math-Magicians-React-App">See Source</a><i><img src="./img/See-Source-Icon.svg" alt=""></i></button>',
  },
];

const cardElementsArray4 = [
  {
    img: '<div class="cards card4"><div class="cardimg cardimg5"><img class="cardimgs"src="./img/projects/byd-app-screenshot.png"alt="Card img-5"/></div>',
    popupTittle: 'BYD<br/>Budget Manager App',
    tittle: '<h2 class="cardtitle">BYD<br/>Budget Manager App</h2>',
    popupImage: '<img src="./img/projects/byd-app-screenshot.png" alt="popupimg"/>',
    technologies:
      '<ul class="proglist"><li class="prg1">Ruby</li><li class="prg2">Ruby on Rails</li><li class="prg3">JavaScrip</li>',
    button:
      '<button type="button" id="cardbutton4" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description: 'Mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    buttonLive:
      '<button class="see-live-button"><a href="https://thawing-escarpment-03695.herokuapp.com/">See Live</a><i><img src="./img/Icon-live.svg" alt=""></i></button>',
    buttonSource:
      '<button class="see-source-button"><a href="https://github.com/Felipeg005/BYD-App/">See Source</a><i><img src="./img/See-Source-Icon.svg" alt=""></i></button>',
  },
];

const cardElementsArray5 = [
  {
    img: '<div class="cards card5"><div class="cardimg cardimg6"><img class="cardimgs"src="./img/projects/gotomedellin-card-screenshot.png"alt="Card img-6"/></div>',
    popupTittle: 'Go to<br/>Medellín',
    tittle: '<h2 class="cardtitle">Go to<br/>Medellín</h2>',
    popupImage: '<img src="./img/projects/gotomedellin-popup-screenshot.png" alt="popupimg"/>',
    technologies:
    '<ul class="proglist"><li class="prg1">Wordpress</li><li class="prg2">css</li><li class="prg3">Elementor</li><li class="prg4">html</li></ul>',
    button:
      '<button type="button" id="cardbutton5" class="cardbutton" onclick="clickedButton(this.id)">See Project</button>',
    description: 'Beautiful website for a company that Offers Premier services partner for tourists in Medellin city',
    buttonLive:
      '<button class="see-live-button"><a href="https://gotomedellin.co/">See Live</a><i><img src="./img/Icon-live.svg" alt=""></i></button>',
    buttonSource:
      '<button class="see-source-button"><a href="https://github.com/Felipeg005/">See Source</a><i><img src="./img/See-Source-Icon.svg" alt=""></i></button>',
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
