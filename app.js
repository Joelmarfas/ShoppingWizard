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

var purchaseColor = document.getElementById("purchase-color"); // Joel
purchaseColor.textContent = "Color: Black";

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
      purchaseColor.textContent = "Color: Black";
      bigImage.src = "gorras/black-main.jpg";
      smallImages[0].src = "gorras/black-main.jpg";
      smallImages[1].src = "gorras/black-boy.jpg";
      smallImages[2].src = "gorras/black-girl.jpg";
      smallImages[3].src = "gorras/black-white.jpg";
      break;

    case "orange":
      purchaseColor.textContent = "Color: Orange";

      bigImage.src = "gorras/orange-main.jpg";
      smallImages[0].src = "gorras/orange-main.jpg";
      smallImages[1].src = "gorras/orange-boy.jpg";
      smallImages[2].src = "gorras/orange-girl.jpg";
      smallImages[3].src = "gorras/orange-white.jpg";
      break;

    case "pink":
      purchaseColor.textContent = "Color: Pink";

      bigImage.src = "gorras/pink-main.jpg";
      smallImages[0].src = "gorras/pink-main.jpg";
      smallImages[1].src = "gorras/pink-boy.jpg";
      smallImages[2].src = "gorras/pink-girl.jpg";
      smallImages[3].src = "gorras/pink-white.jpg";
      break;

    case "white":
      purchaseColor.textContent = "Color: White";

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

var shippingCost = 0.0; //Joel
function shipmentDate(e) {
  estimated.innerHTML = "";
  var date = new Date();
  var nextDay = new Date();

  switch (e.target.value) {
    case "1":
      shippingCost = 9.99; //Joel
      orderShipping.innerHTML =
        "Premium shipping: " + "<strong>" + shippingCost + "€</strong>"; //Joel
      date.setDate(date.getDate() + 1);
      nextDay.setDate(date.getDate() + 1);
      break;
    case "2":
      shippingCost = 4.99; //Joel
      orderShipping.innerHTML =
        "Extra shipping: " + "<strong>" + shippingCost + "€</strong>"; //Joel
      date.setDate(date.getDate() + 2);
      nextDay.setDate(date.getDate() + 1);
      break;
    case "3":
      shippingCost = 0.0; //Joel
      orderShipping.innerHTML =
        "Free shipping: " + "<strong>" + shippingCost + "€</strong>"; //Joel
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
  var purchaseDelivery = document.getElementById("purchase-delivery");
  purchaseDelivery.innerHTML = estimatedTime;
}
var mainContainer = document.querySelector(".main-container");
var headstep1 = document.querySelector(".steps");

var step1 = document.getElementById("step1");
var profileStep = document.getElementById("profile-step");
var timer = document.querySelector("#timer");

function addToCart() {
  var size = document.getElementById("size"); // Joel
  var purchaseSize = document.getElementById("purchase-size"); // Joel
  purchaseSize.textContent = "Size: " + size.value; // Joel
  var purchaseImage = document.getElementById("purchase-image"); //Joel Step 4
  purchaseImage.src = bigImage.src; // Joel
  for (mainContainerElement of mainContainerElements) {
    mainContainerElement.classList.add("hidden");
  }
  timer.classList.remove("hidden");

  document.querySelector(".topnav").classList.add("hidden");
  document.querySelector("footer > p").classList.add("hidden");

  step1.classList.remove("hidden");

  headstep1.classList.remove("hidden");

  profileStep.style.color = "red";
  profileStep.style.fontWeight = "bold";
}

step1.addEventListener("submit", step1to2);

var step2 = document.querySelector("#step2");
var headstep2 = document.querySelector("#timer");

var adressStep = document.getElementById("adress-step");

function step1to2(event) {
  event.preventDefault();

  step1.classList.add("hidden");

  step2.classList.remove("hidden");

  mainContainer.appendChild(step2);

  profileStep.style.color = "orange";
  profileStep.style.fontWeight = "normal";

  adressStep.style.color = "red";
  adressStep.style.fontWeight = "bold";
}

var step3 = document.querySelector("#step3");
step2.addEventListener("submit", step2to3);

shippingStep = document.getElementById("shipping-step");

function step2to3(event) {
  event.preventDefault();

  step2.classList.add("hidden");

  step3.classList.remove("hidden");

  mainContainer.appendChild(step3);

  adressStep.style.color = "orange";
  adressStep.style.fontWeight = "normal";

  shippingStep.style.color = "red";
  shippingStep.style.fontWeight = "bold";
  //
}
// JOEL
step3.addEventListener("submit", step3to4);
var step4 = document.getElementById("step4");
var orderTotal = document.getElementById("order-total");
var orderShipping = document.getElementById("order-shipping");

function step3to4(event) {
  event.preventDefault();
  step3.classList.add("hidden");
  step4.classList.remove("invisible");

  var totalcost = shippingCost + 20.95;
  var c = totalcost.toFixed(2);

  orderTotal.innerHTML = "Total: " + "<strong>" + c + "€" + "</strong>";
}

var buyNow = document.getElementById("buyNow");
buyNow.addEventListener("click", finish);
function finish() {}

var checkboxFinish = document.getElementById("checkbox-finish");
checkboxFinish.addEventListener("click", acceptTerms);

var alertConditions = document.getElementById("alert-conditions");

function acceptTerms() {
  buyNow.classList.toggle("invisible");
  alertConditions.classList.toggle("invisible");
}
