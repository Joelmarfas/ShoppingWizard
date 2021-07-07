var giftCheckbox = document.getElementById("gift");
var giftTextArea = document.getElementById("textarea");

var radioButtons = document.querySelectorAll("[type='radio']");

var mainContainerElements = document.querySelectorAll(".main-container > div");
var carButton = document.getElementById("cart");

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
    hiddenShipping.classList.toggle("hidden");
  }
}

function shipmentDate(e) {
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
  }
}

carButton.addEventListener("click", addToCart);

function addToCart() {
  for (mainContainerElement of mainContainerElements) {
    mainContainerElement.classList.add("hidden");
  }
}
