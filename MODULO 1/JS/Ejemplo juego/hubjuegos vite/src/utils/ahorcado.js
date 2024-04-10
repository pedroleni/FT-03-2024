export const checkCoincidences = (letra, palabra) => {
  console.log("palabra en la funcion buscar", palabra);
  const arrayIndices = [];

  for (let i = 0; i < palabra.length; i++) {
    palabra[i] === letra && arrayIndices.push(i);
  }
  return arrayIndices;
};

export const obtener_random = (num_min, num_max) => {
  const amplitud_valores = num_max - num_min;
  const valor_al_azar = Math.floor(Math.random() * amplitud_valores) + num_min;
  return valor_al_azar;
};

export const createSpanInParrafo = (palabra) => {
  for (let i = 0; i < palabra.length; i++) {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.classList.add("letra");
    const parrafo = document.querySelector("#palabraAhorcado");
    parrafo.appendChild(span);
  }
};
