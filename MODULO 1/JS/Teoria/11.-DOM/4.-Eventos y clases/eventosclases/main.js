import "./style.css";

const input = document.createElement("input");
const label = document.createElement("label");
const button = document.createElement("button");
button.textContent = "enviar";
label.textContent = "Escriba su nombre";
input.addEventListener("change", (event) => {
  console.log(event.target.value);
});

button.addEventListener("click", () => {
  const input = document.querySelector("input");
  console.log(input.value);
});

const app = document.getElementById("app");
app.append(label, input, button);

const buttonTwo = `<button id="btn_cambioModo">CAMBIAR DE MODO</button>`;

app.innerHTML += buttonTwo;
const cambioDeModo = document.getElementById("btn_cambioModo");
cambioDeModo.addEventListener("click", () => {
  //document.body.classList.add("dark");
  document.body.classList.toggle("dark");
});
