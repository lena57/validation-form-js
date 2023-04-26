const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

console.log("form:", form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValidation();

  //console.log("e", e);
});

//el here is a HTML element such as input
const setError = (el, message) => {
  const divInputControl = el.parentElement;
  const errorDisplay = divInputControl.querySelector(".error");
  errorDisplay.innerHTML = message;
  divInputControl.classList.add("error");
  divInputControl.classList.remove("success");
};

const setSuccess = (el) => {
  const divInputControl = el.parentElement;
  const errorDisplay = divInputControl.querySelector(".error");
  errorDisplay.innerHTML = "";
  divInputControl.classList.add("success");
  divInputControl.classList.remove("error");
};

const isEmailValid = (email) => {
  const regExCheckEmail =
    /^(([^<>()[\]\\.,;:\s@“]+(\.[^<>()[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExCheckEmail.test(String(email).toLowerCase());
};

function inputValidation() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordConfirmValue = passwordConfirm.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First name is required");
  } else {
    setSuccess(firstName);
  }

  if (email === "") {
    setError(lastName, "Last name is required");
  } else {
    setSuccess(lastName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Last name is required");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isEmailValid(emailValue)) {
    setError(email, "Please prodide valid email");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password length requires more than 8 characters");
  } else {
    setSuccess(password);
  }

  if (passwordConfirmValue === "") {
    setError(passwordConfirm, "Password confirmation is required");
  } else if (passwordValue !== passwordConfirmValue) {
    setError(passwordConfirm, "Passwords do not match");
  } else {
    setSuccess(passwordConfirm);
  }
  console.log("firstName:", firstNameValue);
  console.log("lastName:", lastNameValue);
  console.log("email:", emailValue);
  console.log("password:", passwordValue);
  console.log("passwordConfirm:", passwordConfirmValue);
}
