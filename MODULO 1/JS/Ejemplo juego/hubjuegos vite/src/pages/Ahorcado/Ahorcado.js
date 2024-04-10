import { palabras } from "../../data/ahorcadoData";
import {
  checkCoincidences,
  createSpanInParrafo,
  obtener_random,
} from "../../utils";
import "./Ahorcado.css";

let palabra = "";
let errores = 0;
let aciertos = 0;
let inputAhorcado = "";

//! ------------------------------------------------------------------------------
//? ------------------------------TEMPLATE INICIAL--------------------------------
//! ------------------------------------------------------------------------------
const template = () => `
    <div id="AhorcadoContainer">
        <div id="resultado"></div>
        <img
        src= ""
        id="imgAhorcado"/>
        <p id="palabraAhorcado"></p>
        <div id="containerinput">
            <input type="text" maxlength="1" id="inputAhorcado"/>
            <button id="comprobar">Comprobar</button>
        </div>
    </div>
  `;

//! ------------------------------------------------------------------------------
//? ----------------- FUNCION QUE TRAE LOS DATOS DEL CONTEXTO--------------------
//! ------------------------------------------------------------------------------
const listener = () => {
  const buttonComprobar = document.getElementById("comprobar");
  buttonComprobar.addEventListener("click", () => {
    const letraInput = inputAhorcado.value;
    const index = checkCoincidences(letraInput, palabra);

    if (index.length != 0) {
      const letrasSpan = document.querySelectorAll(".letra");
      index.forEach((posicion, index) => {
        if (!letrasSpan[posicion].textContent) {
          letrasSpan[posicion].innerHTML = inputAhorcado.value;
          aciertos++;
        }
      });
      if (aciertos === palabra.length) {
        const h3 = document.createElement("h3");
        h3.textContent = "¡Has ganado!";
        const button = document.createElement("button");
        button.textContent = "Empezar de nuevo";
        button.addEventListener("click", () => {
          PrintAhorcadoPage();
        });
        const divResultado = document.getElementById("resultado");
        divResultado.append(h3, button);

        buttonComprobar.disabled = "true";
        inputAhorcado.disabled = "true";
      }
    } else {
      errores++;
      const imgAhorcado = document.getElementById("imgAhorcado");
      imgAhorcado.src = `./sourceAhorcado/img${errores}.png`;

      if (errores === 7) {
        const h3 = document.createElement("h3");
        h3.textContent = "Has perdido";
        const button = document.createElement("button");
        button.textContent = "Reset Game";
        button.addEventListener("click", () => {
          PrintAhorcadoPage();
        });
        const divResultado = document.getElementById("resultado");
        divResultado.append(h3, button);
        buttonComprobar.disabled = "true";
        inputAhorcado.disabled = "true";
      }
    }
    inputAhorcado.value = "";
    inputAhorcado.focus();
  });
};

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------
export const PrintAhorcadoPage = () => {
  palabra = "";
  errores = 0;
  aciertos = 0;
  document.querySelector("main").innerHTML = template();
  palabra = palabras[obtener_random(0, 8)];
  createSpanInParrafo(palabra);
  const imgAhorcado = document.getElementById("imgAhorcado");
  imgAhorcado.src = `./sourceAhorcado/img${errores}.png`;
  console.log(palabra);
  listener();
  inputAhorcado = document.querySelector("#inputAhorcado");
  inputAhorcado.focus();
};
