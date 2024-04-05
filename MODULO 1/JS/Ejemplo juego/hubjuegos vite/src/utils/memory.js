import { items } from "../data/data.memory";
import { getStateMemory, setStateMemory } from "../global/state/memoryState";

export const generateRandom = (size = 4) => {
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

export const timeGenerator = () => {
  setStateMemory("seconds", getStateMemory("seconds") + 1);

  if (getStateMemory("seconds") >= 60) {
    setStateMemory("minutes", getStateMemory("minutes") + 1);
    setStateMemory("seconds", 0);
  }
  let secondsValue =
    getStateMemory("seconds") < 10
      ? `0${getStateMemory("seconds")}`
      : getStateMemory("seconds");
  let minutesValue =
    getStateMemory("minutes") < 10
      ? `0${getStateMemory("minutes")}`
      : getStateMemory("minutes");
  const timeValue = document.getElementById("time");
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};
