const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
let errorImg = document.querySelectorAll(".error-img");
let errorMsg = document.querySelectorAll(".error-msg");
let form = document.getElementById("my-form");
let buttons = document.querySelectorAll(".btn");
let redSpan = document.querySelector(".red-span");
let termsCont = document.querySelector(".tandc-cont");
let termsAndCond = document.querySelector(".tandc");
let closeTerms = document.querySelector(".close");

redSpan.addEventListener("click", () => {
  termsCont.style.display = "block";
  termsAndCond.style.top = "50%";
});

window.onclick = function (event) {
  if (event.target == termsCont) {
    termsCont.style.display = "none";
  }
};

closeTerms.addEventListener("click", () => {
  termsCont.style.display = "none";
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  check();
});

// firstName.addEventListener("input", check);
// lastName.addEventListener("input", check);
// email.addEventListener("input", check);
// password.addEventListener("input", check);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", check);
}

window.onload = function () {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
};

function check() {
  let firstNameValue = firstName.value;
  let lastNameValue = lastName.value;
  let passwordValue = password.value;
  let emailValue = email.value;
  let emailRgx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (firstNameValue == "") {
    setError(0, "name cannot be empty");
    firstName.classList.add("error");
  } else if (firstNameValue) {
    removeErrors(0);
    firstName.classList.remove("error");
  }

  if (lastNameValue == "") {
    setError(1, "name cannot be empty");
    lastName.classList.add("error");
  } else if (lastNameValue) {
    removeErrors(1);
    lastName.classList.remove("error");
  }
  function validateEmail(email) {
    return emailRgx.test(email);
  }

  if (emailValue == "") {
    setError(2, "cannot be empty");
    email.classList.add("error");
  } else if (!validateEmail(emailValue)) {
    setError(2, "looks like this is not an email");
    email.classList.add("error");
  } else {
    removeErrors(2);
    email.classList.remove("error");
  }

  if (passwordValue == "") {
    setError(3, "password cannot be empty");
    password.classList.add("error");
  } else if (passwordValue.length < 6) {
    setError(3, "password too short just like me");
    password.classList.add("error");
  } else {
    removeErrors(3);
    password.classList.remove("error");
  }
}

function setError(index, msg, inp) {
  errorImg[index].style.display = "inline";
  errorMsg[index].style.display = "block";
  errorMsg[index].innerHTML = msg;
}

function removeErrors(index) {
  errorImg[index].style.display = "none";
  errorMsg[index].style.display = "none";
}
// useful sites
// https://stackabuse.com/client-side-form-validation-using-vanilla-javascript/
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
