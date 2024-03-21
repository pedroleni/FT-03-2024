//! ---------> NAMING

/// ----------------> No podemos meter solo numeros:  let 2 = "Hola"
/// ----------------> Utilizar camelCase ------->  let holaMundo
/// ----------------> Evitar las palabras reservadas ---> let, break, if .....
/// ----------------> No ponemos guiones en medio ---> let nombre-apellido /// correcto _-> let nombreApellido
/// ----------------> No utilizar tildes ni ñ

//? --------------------> CONCEPTOS BASICOS DE LAS VARIABLES--------

//? -----------> 1) DECLARAR UNA VARIABLE ----->let name ( tipo de dato )
//? -----------> 2) INICIALIZAR UNA VARIABLE ----> let name = " Pedro "
//? -----------> 3) NO HACE FALTA INICIALIZAR UNA VARIABLE --->  let name (valorr no definido undefined)

// declaracion

let example;

// incializacion de la variable

example = "prueba";

// declaracion y una inicializacion
let name = "pedro";

// declaraciones multiples

let nombre = "-",
  apellido = "pedro";

nombre, (apellido = 34);

console.log(apellido);

///! tipos let const var

const pi = 3.14;
// ----> let name , como ya esta declarada no permite su redeclaracion
var miGato = "rodolfo";
var miGato = 34; // permite la redeclaracion

//pi = "hola que tal "; ---> como es constante no puedo redeclararla ni darle un nuevo valor

// ---------_> SCOPE ---------

const funcionFlecha = () => {
  let name = "Antonio";
  console.log("name", name);
  //pi = "LJKDSFJGHFG"; ---> da error porque es una constante de un primitivo (number, undefined, null, boolean, string) que no se puede cambiar
};

// name = "pedro"

funcionFlecha();
console.log("name fuera", name);

/// EJEMPLO CON UN BUCLE

let exampleArray = [1, 2, 3, 4]; /// tipo de dato complejo que tiene posiciones

for (let i = 0; i < exampleArray.length; i++) {
  name = i;
  console.log("el valor de la i", name);
  console.log(`en la posicon del array ${i} ----> ${exampleArray[i]} `); //exampleArray[i] ---> para sacar el valor de una posicion es con el del array y entre corchete el numero de la posicion del array
}

console.log(name); // el valor de name cambia a 3 porque dentro del bucle no puse let name

//! ----> BLOQUES ---> FUNCTION, BUCLES,  CONDICIONALES (IF ELSE SWITCH ...) lo que lleva una llave suele ser un bloque

const sumar = (one, two) => one + two; // esta devolviendo el resultado sin poner un return IMPLICITO PORQUE ESTA EN UNA LINEA
const restar = (one, two) => {
  return one - two; // return explicito , cuando tenga llaves hace falta
};
