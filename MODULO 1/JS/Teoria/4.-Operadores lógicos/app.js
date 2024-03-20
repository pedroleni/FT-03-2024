//! operador AND &&

console.log(true && true); // en este caso es true en el resto es false
console.log(false && true);
console.log(false && false);
console.log(true && false);

let age = 19;
let cp = 28000;
/**
 * pasa a lo siguiente en caso de que sea verdadero lo anterior al &&
 */
age === 19 && cp === 28000 && console.log("has ganado");

console.log(age, cp);

//TODO ------ AND SOLO ES TRUE CUANDO AMBOS SON TRUE

//! operador OR ||
console.log(true || true); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(true || false); // true

(age == 19 || cp == 30000) && console.log("cumples al menos con una condicion");

if (age == 19 || cp == 30000) {
  console.log("cumples al menos con una condicion");
} // es lo mismo

console.log(age == 19 || cp == 30000);

let status;
let error = 500;

const resCodeOk = status || 500; /// valores condicionales para resolver la posibilidad de tener un false

console.log(resCodeOk);

//! OPERADOR NOT ! ----> lo convierte a un boolean pero en el contrario

const adress = "viso 34"; // true porque tiene un  valor
let price = 0; // 0 es el false y el 1 es el true
console.log(!price);

// false ==== es el undefined , null

console.log(!null);

if (age !== "19") console.log("no tienes 18 años"); //  --- != (distinto valor) !== (distinto valor y tipo)

age != 18 && console.log("no tienes 18 años");

//-----------------------------------------------------------------------------------

let token = true;

token && console.log("tienes un token valido");

if (token) {
  console.log("tienes un token valido");
} else {
}

/**
 * si tiene solo una linea el if puede ir sin llaves pero si queremos poner un else hace falta las llaves, asi como
 * tambien si quiero meter varias lineas de logica
 */

/**
 * COMENTARIO DE VARIAS LINEAS
 */

// COMENTARIO DE UNA SOLA LINEA

2 + 2 && console.log("realizado");

//!
//?
//TODO
