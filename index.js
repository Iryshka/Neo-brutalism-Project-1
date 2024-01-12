// BURGER MENU

const burger = document.querySelector(".header__burger");
const navList = document.querySelector(".header__list");
const navLinks = document.querySelectorAll(".header__list-item");
const burgerSpan = document.querySelector(".header__span");
const WINDOW_WIDTH = window.innerWidth;

burger.addEventListener("click", () => toggleNavState());

function toggleNavState() {
  navList.classList.toggle("header__active");
  document.body.classList.toggle("no-scroll");
  changerBurgerColor("toggle");
}

function changerBurgerColor(state) {
  burger.classList[state]("m-yellow");
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => onLink());
});

function onLink() {
  navList.classList.remove("header__active");
  document.body.classList.remove("no-scroll");
  changerBurgerColor("remove");
}

//VALIDATE FORM

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
    icon.innerText = "visibility";
  } else {
    passwordInput.type = "password";
    icon.innerHTML = "visibility_off";
  }
});
