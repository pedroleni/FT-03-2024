const buttonSumbit = document.getElementById("buttonSubmit");

console.log(buttonSumbit);

const inputUserName = document.getElementById("userName");

buttonSumbit.addEventListener("click", (e) => {
  // Evito que se recargue la pagina
  e.preventDefault();
  console.log(inputUserName);
});

let valorInput = "";
inputUserName.addEventListener("change", (e) => {
  console.log(e.target.value);
  valorInput = e.target.value;
});
