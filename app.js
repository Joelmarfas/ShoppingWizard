var giftCheckbox = document.getElementById("gift");
var giftTextArea = document.getElementById("textarea");

var radioButtons = document.querySelectorAll("[type='radio']");

var mainContainerElements = document.querySelectorAll(".main-container > div");
var carButton = document.getElementById("cart");

var estimated = document.getElementById("estimated-time");

giftCheckbox.addEventListener("click", giftArea);
for (radioButton of radioButtons) {
  radioButton.addEventListener("click", shipmentDate);
}

/*
function giftArea() {
  if (giftCheckbox.checked == true);
  console.log("pulsado");
}
*/

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
  var estimatedTime = `<h3>Your order will arrive:</h3>
  <p> ESTIMATED DELIVERY DATE: </p>
  <p> Between <b> ${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()} </b> and <b> ${nextDay.getDate()} ${
    monthNames[nextDay.getMonth()]
  } ${nextDay.getFullYear()}</b>`;
  estimated.insertAdjacentHTML("afterbegin", estimatedTime);
}

carButton.addEventListener("click", addToCart);

function addToCart() {
  for (mainContainerElement of mainContainerElements) {
    mainContainerElement.classList.add("hidden");
  }

  var mainContainer = document.querySelector(".main-container");
  var shipping = document.getElementById("shipping-container");
  mainContainer.appendChild(shipping);
}
