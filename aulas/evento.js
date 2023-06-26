// Eventos.
const myForm = document.querySelector("#my-form")
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const allItems = document.querySelector(".items");

const body = document.querySelector("body")

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    return alert('Por favor, preencha todos os campos.'); // Se for Verdadeira
  } // Caso seja Falsa Saira da condição.

  myForm.style.background = "purple";
  allItems.firstElementChild.textContent = nameValue;
  allItems.children[1].textContent = emailValue;

  body.style.background = "white";
})