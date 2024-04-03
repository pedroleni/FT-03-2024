setTimeout(() => {
  console.log("han pasado 3 segundos");
}, 3000);

let segundos = 60;
let idInterval;

/*** para hacer una cuenta atras que os puede servir para los juegos del proyecto */
const printInterval = () => {
  segundos--;
  console.log(segundos);

  if (segundos === 0) {
    return clearInterval(idInterval);
  }
};

idInterval = setInterval(printInterval, 1000);

/**
 * TIMEOUT SOLO SE EJECUTA UNA VEZ
 * INTERVAL SE EJECUTA SIEMPRE HASTA QUE NO LO LIMPIEMOS CON EL CLEARINTERVAL
 */
