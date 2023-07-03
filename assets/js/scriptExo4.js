//Sélecteurs

let newFormUserButton = document.getElementById("newFormUser");
let mainForm = document.getElementById("mainForm");


//Fonctions

let clonage = () => {
  let clonedForm = mainForm.cloneNode(true);
  mainForm.parentNode.appendChild(clonedForm);
};



//Ecouteurs

newFormUserButton.addEventListener("click", clonage);
