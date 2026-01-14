const submitBtn = document.querySelector("button");
const radioBtns = document.querySelectorAll("input[type=radio]");
const contentContainer = document.querySelector(".content-container");
const thanksContainer = document.querySelector(".thanks-container");
const ratingElement = document.getElementById("rating");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-msg");

let ratingValue = null;

function reset() {
  ratingValue = null;

  for (let i = 0; i < radioBtns.length; i++) {
    radioBtns[i].checked = false;
  }
}

// Show/hide error message
function showHideError() {
  if (ratingValue === null) {
    errorMessage.classList.remove("visually-hidden");
  } else {
    errorMessage.classList.add("visually-hidden");
  }
}

// Handle selected rating
function handleSubmit() {
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked === true) {
      ratingValue = radioBtns[i].value;
      showHideError();
    }
  }
}

// Show thank you container
function showThanksContainer() {
  if (ratingValue === null) {
    showHideError();
    return;
  } else {
    errorMessage.classList.add("visually-hidden");
    ratingElement.textContent = ratingValue;
    contentContainer.classList.add("visually-hidden");
    thanksContainer.classList.remove("visually-hidden");
    thanksContainer.ariaHidden = "false";

    setTimeout(() => {
      contentContainer.classList.toggle("visually-hidden");
      thanksContainer.classList.toggle("visually-hidden");
      thanksContainer.ariaHidden = "true";
      reset();
    }, 10000)
  }
}

// Event Listeners
form.addEventListener("change", handleSubmit)

const events = ["click", "keydown"];

events.forEach((event) => {
  submitBtn.addEventListener(event, (e) => {
    if (event === "click" || e.key === "Enter") {
      e.preventDefault();
      showThanksContainer();
    }
  })
})