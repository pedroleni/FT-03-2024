//!-----------------------------------------------------------------------------
//?----------------------------if else switch-----------------------------------
//!-----------------------------------------------------------------------------
let age = 18;

if (age >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}

/**
 * switch evalua diferentes caso sobre el valor de una variable
 */

const evaluarEdad = (edad, nombre) => {
  switch (edad) {
    case 18:
      return `${nombre} tiene 18 años`;
    /** cuando hay un return el break se tiene que quitar */
    //break;
    case 20:
      return `${nombre} tiene 20 años`;
    /** cuando hay un return el break se tiene que quitar */
    //break;

    default:
      break;
  }
};

/*** si un funcion retorna un dato, hay que guardarlo en una variable */

const resultEvaluarEdad = evaluarEdad(age, "Pedro");
console.log(resultEvaluarEdad);
let edadDeMiHermana = 18;

evaluarEdad(edadDeMiHermana, "Diana");

/**
 * tanto age como edadDeMiHermana dentro de la funcion se pasarian a llamar edad
 * Porque las funciones tienen que ser desacopladas
 */

const token = true;

const okLogin = (okTokenValue) => okTokenValue && true; // si no lleva llaves lleva un return implicito
function okloginFunction(okTokenValue) {
  /**
   * la function no tiene return implicito, tiene que ser siempre explicito
   */
  return okTokenValue && true;
}

const resultOkLogin = okloginFunction(token);
console.log(resultOkLogin);

const alumno = {
  name: "fede",
  edad: 25,
};

evaluarEdad(alumno.edad, alumno.name);
//!-----------------------------------------------------------------------------
//?----------------------------else if.-----------------------------------------
//!-----------------------------------------------------------------------------

const edad = 16;

// ==  es igual solo sus dos valors

// === tiene que ser igual el valor y el tipo
if (edad >= 18) {
  console.log("puede conducir");
} else if (edad === 16) {
  console.log("party !!");
} else if (edad === 15) {
  console.log("----");
} else {
  console.log("estas en la flor de la vida");
}

//!-----------------------------------------------------------------------------
//?---------------------------- ternario----------------------------------------
//!-----------------------------------------------------------------------------
const edadProfe = 18;
edadProfe > 20 // esto seria la parte del if
  ? console.log("tiene mas de 20 años") /// esta seria la parte en caso de que sea true la  condicion
  : console.log("no eres mayor de 20 años"); // esta seria la parte en caso de ser false

const evaluarEdadProfe = (edad) => {
  /**el return en un  ternario va delante siempre  */
  return edad > 20
    ? "el profe tiene mas de 20"
    : edad > 18
    ? "el profe es mayor de edad pero tiene menos de 20"
    : "tiene menos de 18";
};

const resultFunction = evaluarEdadProfe(edadProfe);
console.log("🚀 ~ resultFunction:", resultFunction);

// -----> valores alternativos con el ternario

let status;

const res = status === 404 ? "error no encontrado" : "internal server error";
console.log("🚀 ~ res:", res);

const respuestaBack = `la RES del back es: ${
  status === 404 ? "error no encontrado" : "internal server error"
}`;

const evaluarStringRes = (code) => {
  return code === 404 ? "error no encontrado" : "internal server error";
};

const respuestaBackTwo = `la RES del back es: ${evaluarStringRes(status)}`;
console.log("🚀 ~  respuestaBackTwo:", respuestaBackTwo);

/**
 * EN UN TEMPLATE STRING PODEMOS PONER TERNARIOS , FUNCIONES, OPERADORES AND, OPERADOR OR ... EN LAS ${--- aqui dentro me refiero---}
 */

//!-----------------------------------------------------------------------------
//?----------------------------AND && -----------------------------------------
//!-----------------------------------------------------------------------------

const y = 21;
const evaluarEdadProfeAND = (edad) => {
  return edad > 20 && "el profe tiene mas de 20";
};

const resultEvaluar = evaluarEdadProfeAND(y);
console.log("🚀 ~ resultEvaluar:", resultEvaluar); /// me devuelve un false porque edad es menor de 20

/**
 * cuando el operador and no entra en la siguiente clausula porque sea false lo que tiene antes devuelve un false
 */
