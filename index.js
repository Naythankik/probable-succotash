const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const header = document.querySelector("header");
const imageLogo = document.querySelector(".img-logo");

hamburger.addEventListener("click", () => {
  imageLogo.style.visibility = hamburger.style.visibility = "hidden";
  overlay.style.display = "grid";
});

close.addEventListener("click", () => {
  imageLogo.style.visibility = hamburger.style.visibility = "visible";
  overlay.style.display = "none";
});

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const arrow = question.firstElementChild.lastElementChild;

    if (arrow.classList.contains("invert-arrow")) {
      arrow.classList.remove("invert-arrow");
    } else {
      arrow.classList.add("invert-arrow");
    }
    question.lastElementChild.toggleAttribute("hidden");
  });
});

const menuPanel = document.querySelector(".features-menu").children;
const menuContainer = document.querySelector(".tabs-container").children;

for (let i = 0; i < menuPanel.length; i++) {
  menuPanel[i].addEventListener("click", () => {
    for (let k = 0; k < menuPanel.length; k++) {
      if (i !== k && menuPanel[k].classList.contains("active-feature")) {
        menuPanel[k].classList.remove("active-feature");
      }
      menuContainer[k].classList.add("d-hidden");
    }
    menuPanel[i].classList.add("active-feature");
    menuContainer[i].classList.remove("d-hidden");
  });
}
