const submitBtn = document.querySelector("button");
const radioBtns = document.querySelectorAll("input[type=radio]");
const contentContainer = document.querySelector(".content-container");
const thanksContainer = document.querySelector(".thanks-container");
const ratingElement = document.getElementById("rating");

let ratingValue = null;

function handleSubmit() {
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked === true) {
      ratingValue = radioBtns[i].value;
    }
  }
  
  showThanksContainer();
}

function showThanksContainer() {
  ratingElement.textContent = ratingValue;
  contentContainer.classList.add("visually-hidden");
  thanksContainer.classList.remove("visually-hidden");

  setTimeout(() => {
    contentContainer.classList.toggle("visually-hidden");
    thanksContainer.classList.toggle("visually-hidden");
  }, 5000)
}


submitBtn.addEventListener("click", handleSubmit);

// Add error message when no rating is selected
// Add reset function