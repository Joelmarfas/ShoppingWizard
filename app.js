var storeColor = "black";
var storeSize = "";

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

var sizeOptions = document.getElementById("size");

/* EVENTS */
sizeOptions.addEventListener("change", getSize);

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

function getSize(e) {
  storeSize = e.target.value;
}

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

  storeColor = e.target.id;

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

function addToCart() {
  for (mainContainerElement of mainContainerElements) {
    mainContainerElement.classList.add("hidden");
  }

  var mainContainer = document.querySelector(".main-container");

  let headstep1 = document.querySelector(".steps");
  let step1 = document.getElementById("step1");
  let footstep1 = document.querySelector(".buttonfield");

  mainContainer.appendChild(step1);
  document.querySelector(".topnav").classList.add("hidden");
  document.querySelector("header").appendChild(headstep1);
  document.querySelector("footer > p").classList.add("hidden");
  document.querySelector("footer").appendChild(footstep1);
}

var form = document.getElementById("profile-form");
form.addEventListener("submit", step1to2);

function step1to2(event) {
  console.log("HOLA");
  event.preventDefault();
}
