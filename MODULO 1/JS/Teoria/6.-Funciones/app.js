//todo --------------------TIPOS DE FUNCIONES QUE VAMOS A VER
//? .............> 1) funciones sin parametros
//? .............> 2) funciones con parametros
//? .............> 3) funciones que no retornan
//? .............> 4) funciones que retornan
//? .............> 5) funciones con parametro default

//!--------------------------CON PARAMETROS---------------------------------------
let cash = 4000;
function saludar(money = 1000) {
  const newMoney = money + 1000;
  /**
   * cuando llamo a la funcion le paso cash , esto hace que cash se asocie su valor con el parametro money
   * pero si modifico money no le va afectar a cash
   * es decir si yo a money le digo mas 1000 a cash de fuera no le afecta
   */
  console.log(`Hola manolo tienes ${money} euros`);
}

saludar();
/**
 *
 * como en saludar no le meto parametro coge el valor por defecto de money que es 1000
 */
//!----------------------------CON PARAMETROS Y UN RETURN-------------------------------------
const saludarArrow = (money) =>
  console.log(`Hola manolo tienes ${money} euros`); /// hay un return implicito

function sumar(a, b) {
  return a + b; // return explicito
}

const sumarArrow = (a, b) => a + b; // return implicito

const numberOne = 23;
const numberTwo = 2;

const suma = sumarArrow(numberOne, numberTwo);
console.log("🚀 ~ suma:", suma);
//!---------------------SIN NO LES ENVIAMOS LOS PARAMETROS----------------------------------
const sumarSinParametros = sumarArrow(); // si no le envio parametro el a y b son undefined
console.log("🚀 ~ sumarSinParametros:", sumarSinParametros);

const multi = (a = 1, b = 1) => a * b; // a y b tienen un operador de asignacion de valor

const multiResult = multi(2, 2);
console.log("🚀 ~ multiResult:", multiResult);
