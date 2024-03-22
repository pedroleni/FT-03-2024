// nos sirve para hacer copias reales

const numero = 50;
let premio = numero;

premio = 100;
console.log("🚀 ~  premio:", premio);
console.log("🚀 ~ numero:", numero);

/** en el mundo de los datos primitivos me hago una copia con el operador de asignacion  =  */

//!------------------------------------------------------------------------------
//?------------------------------PARA LOS OBJECT OBJECT----------------------------------
//!------------------------------------------------------------------------------
const alumno = {
  nombre: "Juan",
  apellido: "Pérez",

  notaFinal: 8,
};
const alumnoTwo = {
  nombre: "Luisa",
  apellido: "Martínez",
  direccion: "Callejón Diagonal 101, Ciudad, País",
  notaFinal: 10,
};
console.log("🚀 ~ alumnoTwo :", alumnoTwo);

const direccion = { direccion: "Calle Falsa 123, Ciudad, País" };

const copy = alumno; // esto no vale porque
copy.nombre = "Pedro";
console.log("🚀 ~ copy:", copy);

//const copyReal = { ...alumno }; ----> ES UNA SIMPLE COPIA SIN CAMBIAR NINGUNA CLAVE

// fusion de dos objetos

const fusion = { ...alumno, ...direccion };
console.log("🚀 ~ fusion:", fusion);

// fusionar dos objetos que comparten claves
const fusionAlumnos = { ...alumno, ...alumnoTwo };
console.log("🚀 ~ fusionAlumnos:", fusionAlumnos);

const copyReal = { ...alumno, notaFinal: 2, pelo: "rubio" };
copyReal.nombre = "lucia";
console.log("🚀 ~ copyReal:", copyReal);
console.log("🚀 ~ alumno:", alumno);

//!------------------------------------------------------------------------------
//?------------------------------PARA LOS OBJECTS ARRAYS-------------------------
//!------------------------------------------------------------------------------
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

//const copyArray = [...alumnos]; ---> una copia sin añadir cosas
const copyArray = [
  ...alumnos,
  {
    nombre: "Luisa",
    apellido: "Martínez",
    direccion: "Callejón Diagonal 101, Ciudad, País",
    notaFinal: 10,
  },
  alumnos[3],
  "soy un string",
];
console.log("🚀 ~ copyArray:", copyArray);
