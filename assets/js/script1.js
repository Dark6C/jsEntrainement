//Selecteurs

let usernameEl = document.querySelector("#userName");
let usernameHelp = document.querySelector("#usernameHelp");
let emailEl = document.querySelector("#email");
let emailHelp = document.querySelector("#emailHelp");

let passwordEl = document.querySelector("#password");
let passwordCheckEl = document.querySelector("#passwordCheck");
let passwordHelp = document.querySelector("#passwordHelp");

let passHelp = document.querySelector("#passHelp");

//Variables et constantes

const regexUsername = /^[a-zA-Z0-9]+$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexWeak = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;
const regexAverage = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
const regexStrong =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

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

let passwordStrength = () => {
  passHelp.classList.add("d-none");
  passHelp.classList.remove("text-success", "text-warning", "text-danger");
  if (passwordEl.value.length > 0 && passwordEl.value.length < 8) {
    passHelp.classList.remove("d-none");
    passHelp.textContent = "Le mot de passe est très faible";
    passHelp.classList.add("text-danger");
    console.log("weak1");
  } else if (passwordEl.value.length >= 8) {
    if (regexStrong.test(passwordEl.value)) {
      passHelp.classList.remove("d-none");
      passHelp.classList.add("text-success");
      passHelp.textContent = "Le mot de passe est fort";
      console.log("fort");
    } else if (regexAverage.test(passwordEl.value)) {
      passHelp.classList.remove("d-none");
      passHelp.textContent = "Le mot de passe est moyen";
      passHelp.classList.add("text-warning");
      console.log("medium");
    } else if (regexWeak.test(passwordEl.value)) {
      passHelp.classList.remove("d-none");
      passHelp.textContent = "Le mot de passe est faible";
      console.log("weak2");
    } else {
      passHelp.classList.remove("d-none");
      passHelp.textContent = "Le mot de passe est très faible";
      console.log("weak1");
    }
  }
};

//écouteurs
usernameEl.addEventListener("input", checkUsername);
emailEl.addEventListener("input", checkEmail);

passwordEl.addEventListener("input", passwordStrength);
passwordCheckEl.addEventListener("input", checkPasswords);
