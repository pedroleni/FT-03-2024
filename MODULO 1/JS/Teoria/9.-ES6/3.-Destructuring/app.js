const alumnos = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    direccion: "Calle Falsa 123, Ciudad, País",
    notaFinal: 8,
  },
  {
    nombre: "Ana",
    apellido: "López",
    direccion: "Avenida Siempre Viva 456, Ciudad, País",
    notaFinal: 9,
  },
  {
    nombre: "Carlos",
    apellido: "Gómez",
    direccion: "Boulevard Las Flores 789, Ciudad, País",
    notaFinal: 7,
  },
  {
    nombre: "Luisa",
    apellido: "Martínez",
    direccion: "Callejón Diagonal 101, Ciudad, País",
    notaFinal: 10,
  },
];

// DE UN ARRAY

const [alumnoOne, alumnoTwo, ...restoElemento] = alumnos; /// ... es el operador rest --> no confundir con el spread operator
console.log("🚀 ~ restoElemento:", restoElemento);

const crearObjetoClase = (profesor, apoyo, ...alumnos) => {
  console.log("🚀 ~ crearObjetoClase ~  ...alumnos:", alumnos);

  return {
    profesores: [profesor, apoyo],
    alumnos,
  };
};

const result = crearObjetoClase(
  "laura",
  "pedro",
  "luisa",
  "bea",
  "andres",
  "Lucia"
);

console.log("resultado", result);

// -----> DE OBJECT OBJECT

const { notaFinal, apellido } = alumnos[0];
console.log("🚀 ~ notaFinal:", notaFinal);

// ------> DE FUNCIONES

const { alumnos: arrayAlumno, profesores } = crearObjetoClase(
  "laura",
  "pedro",
  "luisa",
  "bea",
  "andres",
  "Lucia"
);

/**
 * para cuando el nombre de la clave coincide con alguna variable global que ya esta ddeclarada podemos cambiar el nombre con los : --> alumnos: arrayAlumno
 * porque alumnos ya esta declarada de forma global como constante
 */

console.log(arrayAlumno);

/**
 * en el destructuring ponemos llaves porque lo que devuelve la funcion es un objeto
 * En caso de que fuera un array lo que devolviera la funcion se haria con  los corchetes []
 */
