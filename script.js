const burger = document.querySelector(".header__burger");
const navList = document.querySelector(".header__list");
const navLinks = document.querySelectorAll(".header__list-item");
const burgerSpan = document.querySelector(".header__span");

burger.addEventListener("click", () => {
  navList.classList.toggle("header__active");
  burgerSpan.classList.toggle("header__cross");

  addAnimationToLinks();
});

//   navLinks.forEach((link, index) => {
//     if (link.style.animation) {
//       link.style.animation = ``;
//     } else {
//       link.style.animation = `navLinkFade 0.5s ease forwards ${
//         index / 7 + 0.7
//       }s`;
//     }
//   });
// });

function addListenerToLink(link) {
  link.addEventListener("click", () =>
    navList.classList.remove("header__active")
  );
}

function addAnimationToLinks() {
  navLinks.forEach((link, index) => {
    addListenerToLink(link);

    const activeAnimation = link.style.animation.includes("navLinkFade")
      ? "navLinkFadeRevert"
      : "navLinkFade";
    const delay = index / 7 + 0.7;

    link.style.animation = `${activeAnimation} 0.5s ease forwards ${delay}s`;

    // console.log("0.5s ease 0.7s 1 normal forwards running navLinkFade");
  });
}

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
