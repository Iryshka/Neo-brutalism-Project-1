// BURGER MENU

const burger = document.querySelector(".header__burger");
const navList = document.querySelector(".header__list");
const navLinks = document.querySelectorAll(".header__list-item");
const burgerSpan = document.querySelector(".header__span");

burger.addEventListener("click", () => {
  navList.classList.toggle("header__active");

  addAnimationToLinks();

  yellowBurger();
});

function yellowBurger() {
  burger.classList.toggle("m-yellow");
}

function addAnimationToLinks() {
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ``;
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.7
      }s`;
    }
  });
}

// function addListenerToLink() {
//   navLinks.addEventListener("click", () => {
//     navList.classList.remove("header__active");
//     burger.classList.remove("m-yellow");
//     console.log("Hey");
//   });
// }

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navList.classList.remove("header__active");
    burger.classList.remove("m-yellow");
  });
});

// VALIDATION FORM

const form = document.getElementById("welcome__form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".welcome__error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".welcome__error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else {
    setSuccess(email);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 5) {
    setError(password, "Password must be at least 6 characters");
  } else {
    setSuccess(password);
  }
};

// PASSWORD VISIBILITY ICON

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
