import { getStateMemory, setStateMemory } from "../../global/state/memoryState";
import { generateRandom, timeGenerator } from "../../utils";
import "./Memory.css";

const template = () => `
<div id="containerMemory"> 
    <div class="wrapper">
      <div class="stats-c">
        <div id="moves"></div>
        <div id="time"></div>
      </div>
      <div class="game-c"></div>
      <button id="stop" class="hide">Stop Game</button>
    </div>
    <div class="controls-c">
      <div class="portada"><img src="./sourceMemory/portada.gif"></div>
      <p id="result"></p>
      <button id="start"><img src="./sourceMemory/star_game.gif"></button>
</div></div>`;

const starGame = () => {
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");

  startButton.addEventListener("click", () => {
    setStateMemory("movesCount", 0);
    setStateMemory("seconds", 0);
    setStateMemory("minutes", 0);
    const controls = document.querySelector(".controls-c");
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");

    setStateMemory("interval", setInterval(timeGenerator, 1000));
    const moves = document.getElementById("moves");
    moves.innerHTML = `<span>Moves:</span> ${getStateMemory("movesCount")}`;
    init();
  });

  // --------- BOTON DE STOP  ---------------
  const handleStop = () => {
    clearInterval(getStateMemory("interval"));
    const controls = document.querySelector(".controls-c");
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
  };

  setStateMemory("stopGame", handleStop);
  stopButton.addEventListener("click", handleStop);
};

const init = () => {
  console.log("entro");
  const result = document.getElementById("result");
  result.innerText = "";
  setStateMemory("winCount", 0);
  let cardValues = generateRandom();
  console.log(cardValues);
};

export const PrintMemoryPage = () => {
  document.querySelector("main").innerHTML = template();
  starGame();
};
