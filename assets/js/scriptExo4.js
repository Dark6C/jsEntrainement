//Sélecteurs

let newFormUserButton = document.getElementById("newFormUser");
let mainForm = document.getElementById("mainForm");
let formSubmit = document.getElementById("formSubmit");
let numberClone = 0;

//Fonctions

let clonage = () => {
  let clonedForm = mainForm.cloneNode(true);
  clonedForm.id = "mainForm" + numberClone;
  clonedForm.lastName.value = "";
  clonedForm.firstName.value = "";
  clonedForm.email.value = "";
  mainForm.parentNode.appendChild(clonedForm);
  numberClone++;
};

let submitForm = () => {
  let cleanForm = document.getElementById("response");
  while (cleanForm) {
    cleanForm.remove("li");
    cleanForm = document.getElementById("response");
  }

  let resultat = [
    mainForm.lastName.value +
      " " +
      mainForm.firstName.value +
      " " +
      mainForm.email.value,
  ];
  for (let i = 0; i < numberClone; i++) {
    let formEl = document.getElementById("mainForm" + i);
    resultat.push(
      formEl.lastName.value +
        " " +
        formEl.firstName.value +
        " " +
        formEl.email.value
    );
  }
  console.log(resultat);

  resultat.forEach((El) => {
    let li = document.createElement("li");
    li.textContent = El;
    li.style.color = "white";
    li.style.textAlign = "center";
    li.id = "response";
    document.body.appendChild(li);
  });
};

//Ecouteurs

newFormUserButton.addEventListener("click", clonage);
formSubmit.addEventListener("click", submitForm);
