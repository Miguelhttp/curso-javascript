const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const errorMessage = document.querySelector(".msg");
const addUser = document.querySelector(".items")

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "Por favor insira os campos";
    errorMessage.classList = "error";

    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 3000);
    return;
  }

  const li = document.createElement("li");
  li.classList = "item";
  li.innerHTML = `Nome: ${nameValue} <br /> Email: ${emailValue}`;

  addUser.appendChild(li);

  nameInput.value = "";
  emailInput.value = "";

  // addUser.innerHTML = `<li>${nameValue}</li>
  // <li>${emailValue}</li>`;
})