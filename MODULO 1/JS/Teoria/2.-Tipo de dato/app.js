//! ------------------------------------------------------------------------------------
//? -----------------------------------DATOS PRIMITIVOS---------------------------------
//! ------------------------------------------------------------------------------------

//todo -------------------------- string

let name = "Pedro";
name = "Pedro";
name = `Pedro`;

// ----> concatenar
let nombreCompleto = name + " " + "lerida";
nombreCompleto = `${name} lerida`;
console.log(nombreCompleto);

const products = ["Asus Rog Ally", "Macbook", "fregadora"];

for (let i = 0; i < products.length; i++) {
  const cartaComponenteDeProductos = `
    <figure>
        <h3>${products[i]}</h3>
    </figure>
`;

  console.log(cartaComponenteDeProductos);
}

//todo --------------------------- number

let age = 30;

age += 50; // lo que
age++;
age--;
age /= 2;

let resto = age % 2; // resto de operacion
console.log(resto);

// -----> concatenar number con un  string ---> PRIORIZA UN STRING

let operacion = 25 + 5 + "hola";
console.log(operacion); // saca un string 30hola
operacion = "hola" + 25 + 5;
console.log(operacion); // saca un string hola255
operacion = `hola ${25 + 5}`; /// -----> con el template string
console.log(operacion); // saca un string
const pi = 3.14; // --> decimal
const price = 3_000_000; //
console.log(price);

/**
 * = ---> es asignacion de valor
 * == ----> comparacion de valor
 * === ---> comparacion de valor y de tipo
 */
if (30 === "30") {
  console.log("esto es igual");
} else {
  console.log("no son iguales");
}

//todo-------------------------------------  boolean
let verdadero = true; // 1
let falso = false; // 0

//todo ------------------------------------ undefined
let nombre; // no tiene valor definido por lo cual es undefined- no se ha inicializado

//  null
let nada = null; // ES NADA Y ESTA DEFINIDO

//! ------------------------------------------------------------------------------------
//? -----------------------------------DATOS COMPLEJOS----------------------------------
//! ------------------------------------------------------------------------------------

//todo------------------------------------ object - object {}

/**
 * Son un conjunto de datos compuesto por claves y valores
 * tienen llaves {}
 * las claves son name, age, adress
 * los valor sera de name = "Pedro"
 */

const profesor = {
  name: "Pedro",
  age: 30,
  adress: {
    cp: 28029,
    city: "Madrid",
  },
};

const profesorTwo = {
  name: "Pedro",
  age: 30,
  adress: {
    cp: 28029,
    city: "Madrid",
  },
};

/**
 * DOS FORMAS DE ACCEDER A LA POSICION DE LA CLAVE
 * --> CON EL PUNTO Y EL NOMBRE DE LA CLAVE profesor.name
 * --> NOMBRE DEL OBJETO Y EL CORCHETE CON EL NOMBRE DE LA CLAVE profesorTwo["name"]
 */
if (profesor.name === profesorTwo["name"]) {
  console.log("son iguales los profesores");
} else {
  console.log("no son iguales los profesores");
}

/**
 * LOS METODOS LLEVAN PARENTESIS AL FINAL
 * toString()
 *
 * LAS PROPIEDADES NO LLEVAN PARENTESIS
 * .length
 */

if (profesor.toString() === profesorTwo.toString()) {
  console.log("son iguales los profesores ----");
} else {
  console.log("no son iguales los profesores-----");
}

let letra = "A";
let letraTwo = "A";
if (letra === letraTwo) {
  console.log("son iguales ");
} else {
  console.log("no son iguales");
}

// const en los object object

profesor.name = "laura";
profesor["curso"] = "PT";
delete profesor.adress;
// profesor = {}; ----> no te deja porque estas incializandolo de nuevo la constante
console.log(profesor);

/**
 * en el caso de los object object puedo cambiar sus clave y valores aunque sea const
 * pero no puedo cambiar su tipo object object
 */

//todo ----------------------------------- object - array []

const exampleArray = [
  {
    name: "Pedro",
    age: 30,
    adress: {
      cp: 28029,
      city: "Madrid",
    },
  },
  {
    name: "Pedro",
    age: 30,
    adress: {
      cp: 28029,
      city: "Madrid",
    },
  },
  {
    name: "Pedro",
    age: 45,
    adress: {
      cp: 28029,
      city: "Madrid",
    },
  },
  {
    name: "lucio",
    age: 30,
    adress: {
      cp: 28029,
      city: "Madrid",
    },
  },
];

delete exampleArray[3].age;
console.log(exampleArray[3]);

/** EJERCICIO-----
 * vamos a cambiarles a los que tenga 30 años el codigo postal a 28000
 */

for (let i = 0; i < exampleArray.length; i++) {
  if (exampleArray[i].age === 30) {
    exampleArray[i].adress.cp = 28000;
  }
}

console.log(exampleArray);

//! -------------- como saber el tipo de dato  ---------------
const priceOne = 100000;
const alumno = {
  name: "luismi",
  age: 22,
}; // object

function example() {}

console.log(typeof example); // nos dice el tipo de dato en este caso number
