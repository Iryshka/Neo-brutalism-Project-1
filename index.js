// BURGER MENU

const burger = document.querySelector(".header__burger");
const navList = document.querySelector(".header__list");
const navLinks = document.querySelectorAll(".header__list-item");
const burgerSpan = document.querySelector(".header__span");
const WINDOW_WIDTH = window.innerWidth;

burger.addEventListener("click", () => toggleNavState());

function toggleNavState() {
  navList.classList.toggle("header__active");
  yellowBurger();
}

function yellowBurger() {
  burger.classList.toggle("m-yellow");
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => toggleNavState());
});
