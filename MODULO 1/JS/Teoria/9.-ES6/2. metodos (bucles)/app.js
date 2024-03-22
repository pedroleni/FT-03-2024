const { character } = require("./data");

///! ----------------------------------------------------------------------------
///? ------------------------------------MAP ------------------------------------
///! ----------------------------------------------------------------------------
/** vamos a hacer detructuring del objeto de character
 * El destructuring lo que hace es crear constantes con las claves del objeto
 */

const { results, info } = character;

const allCharacterMapeada = results.map((personaje, index) => ({
  index,
  name: personaje.name,
  image: personaje.image,
})); // tiene un return implicito

const allCharacterMapeadaTwo = results.map((personaje, index) => {
  return {
    index,
    name: personaje.name,
    image: personaje.image,
  };
}); // return explicito

///! ----------------------------------------------------------------------------
///? ------------------------------------filter ---------------------------------
///! ----------------------------------------------------------------------------
/// ---------> me filtra todos los que cumplan la condicion
/// ---------> devuelve un conjunto de elementos en un array
const allCharacterFilter = results.filter(
  (personaje, index) => personaje.status == "Dead"
);

console.log("🚀 ~ allCharacterFilter:", allCharacterFilter);

///! ----------------------------------------------------------------------------
///? ------------------------------------find ---------------------------------
///! ----------------------------------------------------------------------------

// -------> devuelve un solo elemento sin un array
const allCharacterFind = results.find(
  (personaje, index) => personaje.status == "Dead"
);

console.log("🚀 ~ file: app.js:25 ~ allCharacterFind :", allCharacterFind);

///! ----------------------------------------------------------------------------
///? ------------------------------------EVERY---------------------------------
///! ----------------------------------------------------------------------------

// ds un true si todos cumplen con la condicion
const vegan = ["🥝", "🥝", "🥝", "🥝", "🍔", "🥝", "🥝", "🥝"];

const isVegan = vegan.every((item) => item === "🥝");
console.log("🚀 ~ file: app.js:44 ~ isVegan:", isVegan);

///! ----------------------------------------------------------------------------
///? ------------------------------------SOME ---------------------------------
///! ----------------------------------------------------------------------------

// da un true si al menos uno cumple con la condicion

const isVeganSome = vegan.some((item) => item === "🍔");
console.log("🚀 ~ file: app.js:55 ~ isVeganSome:", isVeganSome);

///! ----------------------------------------------------------------------------
///? ------------------------------------REDUCE---------------------------------
///! ----------------------------------------------------------------------------

const numbers = [5, 5, 5, 5, 5, 5];
/**
 * el 0 es en lo que empieza el valor del acumulador
 */
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log("🚀 ~ total:", total);

const suma = (array) => {
  let acc = 0;
  const result = array.forEach((num, index) => (acc += num));
  return result;
};
