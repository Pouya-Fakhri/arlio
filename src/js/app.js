let leftBtn = document.querySelector(".leftBtn");
let rightBtn = document.querySelector(".rightBtn");
let sliderContainer = document.querySelector(".sliderContainer");
let counter1 = 0;

rightBtn.addEventListener("click", () => {
  if (sliderContainer.classList.contains("goToLeft")) {
    sliderContainer.classList.remove("goToLeft");
  }
  sliderContainer.classList.add("goToRight");
});

leftBtn.addEventListener("click", () => {
  if (sliderContainer.classList.contains("goToRight")) {
    sliderContainer.classList.remove("goToRight");
  }
  sliderContainer.classList.add("goToLeft");
});