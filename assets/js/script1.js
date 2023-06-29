//Selecteurs

let usernameEl = document.querySelector("#userName");
let usernameHelp = document.querySelector("#usernameHelp");
let emailEl = document.querySelector("#email");
let emailHelp = document.querySelector("#emailHelp");

let passwordEl = document.querySelector("#password");
let passwordCheckEl = document.querySelector("#passwordCheck");
let passwordHelp = document.querySelector("#passwordHelp");

//Variables et constantes

const regexUsername = /^[a-zA-Z0-9]+$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//Fonctions

const checkUsername = () => {
  usernameEl.classList.remove("border-danger", "border-success");
  usernameHelp.classList.add("d-none");
  if (usernameEl.value == "") {
    return;
  }

  let isValid = regexUsername.test(usernameEl.value);

  if (!isValid) {
    usernameEl.classList.add("border-danger", "border-4");
    usernameHelp.classList.remove("d-none");
  } else {
    usernameEl.classList.add("border-success", "border-4");
  }
};

const checkEmail = () => {
  emailEl.classList.remove("border-danger", "border-success");
  emailHelp.classList.add("d-none");
  if (emailEl.value == "") {
    return;
  }

  let regexInstance = new RegExp(regexEmail);
  let isValid = regexInstance.test(emailEl.value);

  if (!isValid) {
    emailEl.classList.add("border-danger", "border-4");
    emailHelp.classList.remove("d-none");
  } else {
    emailEl.classList.add("border-success", "border-4");
  }
};

let checkPasswords = () => {
  passwordCheckEl.classList.remove("border-danger", "border-success");
  passwordEl.classList.remove("border-danger", "border-success");
  if (passwordCheckEl.value == "" && passwordEl.value == "") {
    passwordHelp.classList.add("d-none");
    return;
  }

  if (passwordEl.value === passwordCheckEl.value) {
    passwordEl.classList.add("border-success", "border-4");
    passwordCheckEl.classList.add("border-success", "border-4");
    passwordHelp.classList.add("d-none");
    // console.log('ok');
  } else {
    passwordEl.classList.add("border-danger", "border-4");
    passwordCheckEl.classList.add("border-danger", "border-4");
    passwordHelp.classList.remove("d-none");
  }
};

//écouteurs
usernameEl.addEventListener("input", checkUsername);
emailEl.addEventListener("input", checkEmail);

passwordEl.addEventListener("input", checkPasswords);
passwordCheckEl.addEventListener("input", checkPasswords);
