const body = document.body;
const button = document.querySelector("button");

button.addEventListener("click", function () {
  body.classList.toggle("purple");
})