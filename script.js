const burger = document.querySelector(".header__burger");
const navList = document.querySelector(".header__list");
const navLinks = document.querySelectorAll(".header__list-item");

burger.addEventListener("click", () => {
  navList.classList.toggle("header__active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ``;
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.7
      }s`;
    }
  });
});

const visibility = document.querySelector(".welcome__eye");

visibility.addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  const icon = document.getElementById("welcome__icon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.innerText = "visibility_off";
  } else {
    passwordInput.type = "password";
    icon.innerText = "visibility";
  }
});

// const visibilityBtn = document.getElementById("visibilityBtn");

// visibilityBtn.addEventListener("click", toggleVisibility);

// function toggleVisibility() {
//   const passwordInput = document.getElementById("password");
//   const icon = document.getElementById("welcome__icon");
//   if (passwordInput.type === "password") {
//     passwordInput.type = "text";
//     icon.innerText = "visibility_off";
//   } else {
//     passwordInput.type = "password";
//     icon.innerText = "visibility";
//   }
// }
