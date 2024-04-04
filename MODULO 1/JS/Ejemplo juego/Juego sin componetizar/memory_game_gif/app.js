const moves = document.getElementById("moves");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-c");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-c");

/// --------_> estas variables las vamos a meter en estados ----
let cards;
let interval;
let firstCard = false;
let secondCard = false;

// --------> esto va en la carpeta de data

const items = [
  { name: "goku", image: "./src/1.gif" },
  { name: "naruto", image: "./src/2.gif" },
  { name: "pika", image: "./src/3.gif" },
  { name: "gato", image: "./src/4.gif" },
  { name: "power", image: "./src/5.gif" },
  { name: "homer", image: "./src/6.gif" },
  { name: "chameleon", image: "./src/7.gif" },
  { name: "mickey", image: "./src/8.gif" },
  { name: "anaconda", image: "./src/9.gif" },
  { name: "lucha", image: "./src/10.gif" },
  { name: "cockatoo", image: "./src/11.gif" },
  { name: "gaga", image: "./src/12.gif" },
];

// ---------> estas variables sera estados seguramente
let seconds = 0,
  minutes = 0;
let movesCount = 0,
  winCount = 0;

// --------- TIEMPOS ---------------
const timeGenerator = () => {
  seconds += 1;
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

// --------- CONTADOR MOOVIMIENTOS  ---------------
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

// --------- RANDOM DE TARJETAS---------------
const generateRandom = (size = 4) => {
  let tempArray = [...items];
  let cardValues = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length); /// genero un index del array de forma aleatoria
    cardValues.push(tempArray[randomIndex]);
    // con el splice quitas el imagen que ya has metido en carVaslue y lo quitar de tempArray
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

// --------- GRID GENERADOR ---------------
const mGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  const copy = [...cardValues];
  console.log("sin cambiar", copy);
  const cambio = cardValues.sort(() => Math.random() - 0.5);
  /** el sort normalmente ordena
   * .sort((a,b )=> a-b)
   */

  console.log("cambiado", cambio);

  for (let i = 0; i < size * size; i++) {
    gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">?</div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>
     `;
  }

  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

  cards = document.querySelectorAll(".card-container");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!card.classList.contains("matched")) {
        card.classList.add("flipped");
        if (!firstCard) {
          firstCard = card;
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          movesCounter();

          secondCard = card;
          let secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue == secondCardValue) {
            firstCard.classList.add("matched");

            secondCard.classList.add("matched");

            firstCard = false;

            winCount += 1;

            if (winCount == Math.floor(cardValues.length / 2)) {
              result.innerHTML = `<div class="won"><img class src="./src/YOUW.gif" />
            `;
              stopGame();
            }
          } else {
            /** crea dos variables tempFirst, tempSecond que asocia su valor
             * al los valores de firstCard, secondCard */
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = false;
            secondCard = false;
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
            }, 900);
          }
        }
      }
    });
  });
};

// --------- BOTON DE STAR ---------------
startButton.addEventListener("click", () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;

  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startButton.classList.add("hide");

  interval = setInterval(timeGenerator, 1000);

  moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
  ini();
});

// --------- BOTON DE STOP  ---------------
stopButton.addEventListener(
  "click",
  (stopGame = () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
  })
);

// --------- INICIALIZAR TODO  ---------------
const ini = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  mGenerator(cardValues);
};
