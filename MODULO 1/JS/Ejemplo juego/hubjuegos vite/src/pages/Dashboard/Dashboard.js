//Dashboard.js ------> src/pages/Dashboard/Dashboard.js
import { getStateMemory, setStateMemory } from "../../global/state/memoryState";
import { initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761641/pngwing.com_1_iq8zfk.png"
            alt=" go to wacka topo game"
          />
          <h2>WACKA TOPO</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateMemory">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png"
            alt="go to memory game"
          />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
       <li>
        <figure id="navigateAhorcado">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1712774409/kisspng-i-cannot-think-of-any-need-in-childhood-as-strong-5b1f4ffd488859.7575209315287787492971_gk8qn7.png"
            alt="go to ahorcado game"
          />
          <h2>AHORCADO</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

  const navigateMemory = document.getElementById("navigateMemory");
  navigateMemory.addEventListener("click", () => {
    initControler("Memory");
  });

  const navigateAhorcado = document.getElementById("navigateAhorcado");
  navigateAhorcado.addEventListener("click", () => {
    initControler("Ahorcado");
  });
};

export const printTemplateDashboard = () => {
  setStateMemory("reset");
  clearInterval(getStateMemory("interval"));
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListeners();
};

//getInfo();
