/* SELECTORS */
var giftCheckbox = document.getElementById("gift");
var giftTextArea = document.getElementById("textarea");

var radioButtons = document.querySelectorAll("[type='radio']");

var mainContainerElements = document.querySelectorAll(".main-container > div");
var carButton = document.getElementById("cart");

var estimated = document.getElementById("estimated-time");
var smallImages = document.getElementsByClassName("img-select");
var zoomImages = document.querySelectorAll(".small-images > img");
var colorImages = document.querySelectorAll(".color-container img");
var bigImage = document.querySelector(".big-images > img");

/* EVENTS */
for (colorImage of colorImages) {
  colorImage.addEventListener("click", changeColor);
}

for (zoomImage of zoomImages) {
  zoomImage.addEventListener("click", zoomIn);
}

giftCheckbox.addEventListener("click", giftArea);
for (radioButton of radioButtons) {
  radioButton.addEventListener("click", shipmentDate);
}
carButton.addEventListener("click", addToCart);

/* EVENT FUNCTIONS */

// Turn small mic in BIG PIC
function zoomIn(e) {
  bigImage.src = e.target.src;
  for (zoomImage of zoomImages) {
    zoomImage.style.borderColor = "transparent"; // Reset rest of borders
  }

  e.target.style.borderColor = "black"; // Put black border to the selected element after reset the rest
}

function changeColor(e) {
  for (colorImage of colorImages) {
    colorImage.style.borderColor = "transparent";
  }
  for (zoomImage of zoomImages) {
    zoomImage.style.borderColor = "transparent";
  }
  zoomImages[0].style.borderColor = "black";
  e.target.style.borderColor = "black";

  switch (e.target.id) {
    case "black":
      bigImage.src = "gorras/black-main.jpg";
      smallImages[0].src = "gorras/black-main.jpg";
      smallImages[1].src = "gorras/black-boy.jpg";
      smallImages[2].src = "gorras/black-girl.jpg";
      smallImages[3].src = "gorras/black-white.jpg";
      break;

    case "orange":
      bigImage.src = "gorras/orange-main.jpg";
      smallImages[0].src = "gorras/orange-main.jpg";
      smallImages[1].src = "gorras/orange-boy.jpg";
      smallImages[2].src = "gorras/orange-girl.jpg";
      smallImages[3].src = "gorras/orange-white.jpg";
      break;

    case "pink":
      bigImage.src = "gorras/pink-main.jpg";
      smallImages[0].src = "gorras/pink-main.jpg";
      smallImages[1].src = "gorras/pink-boy.jpg";
      smallImages[2].src = "gorras/pink-girl.jpg";
      smallImages[3].src = "gorras/pink-white.jpg";
      break;

    case "white":
      bigImage.src = "gorras/white-main.jpg";
      smallImages[0].src = "gorras/white-main.jpg";
      smallImages[1].src = "gorras/white-boy.jpg";
      smallImages[2].src = "gorras/white-girl.jpg";
      smallImages[3].src = "gorras/white-white.jpg";
      break;
    default:
      console.log("ERROR");
  }
}

function giftArea() {
  var hiddenShippings = document.getElementsByClassName("flex-form");
  for (hiddenShipping of hiddenShippings) {
    hiddenShipping.classList.toggle("invisible");
  }
}

function shipmentDate(e) {
  estimated.innerHTML = "";
  var date = new Date();
  var nextDay = new Date();

  switch (e.target.value) {
    case "1":
      date.setDate(date.getDate() + 1);
      nextDay.setDate(date.getDate() + 1);
      break;
    case "2":
      date.setDate(date.getDate() + 2);
      nextDay.setDate(date.getDate() + 1);
      break;
    case "3":
      date.setDate(date.getDate() + 3);
      nextDay.setDate(date.getDate() + 1);
      break;
    default:
      console.log("ERROR");
  }

  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var estimatedTime = `<h3 class="">Your order will arrive:</h3>
  <p> ESTIMATED DELIVERY DATE: </p>
  <p> Between <b> ${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()} </b> and <b> ${nextDay.getDate()} ${
    monthNames[nextDay.getMonth()]
  } ${nextDay.getFullYear()}</b>`;

  estimated.innerHTML = estimatedTime;
}

var step1 = document.getElementById("step1");
var profileStep = document.getElementById("profile-step");

function addToCart() {
  for (mainContainerElement of mainContainerElements) {
    mainContainerElement.classList.add("hidden");
  }

  var mainContainer = document.querySelector(".main-container");

  var headstep1 = document.querySelector(".steps");
  //let footstep1 = document.querySelector(".buttonfield");

  document.querySelector(".topnav").classList.add("hidden");
  document.querySelector("footer > p").classList.add("hidden");

  mainContainer.appendChild(step1);
  step1.classList.remove("hidden");

  document.querySelector("header").appendChild(headstep1);
  headstep1.classList.remove("hidden");

  profileStep.style.color = "red";
  profileStep.style.fontWeight = "bold";
}

step1.addEventListener("submit", step1to2);

var step2 = document.querySelector("#step2");

var adressStep = document.getElementById("adress-step");

function step1to2(event) {
  event.preventDefault();

  step1.classList.add("hidden");

  step2.classList.remove("hidden");

  mainContainer.appendChild(step2);

  profileStep.style.color = "black";
  profileStep.style.fontWeight = "normal";

  adressStep.style.color = "red";
  adressStep.style.fontWeight = "bold";
}

var step3 = document.querySelector("#step3");
step2.addEventListener("submit", step2to3);

function step2to3(event) {
  event.preventDefault();

  step2.classList.add("hidden");

  step3.classList.remove("hidden");

  mainContainer.appendChild(step3);
}
