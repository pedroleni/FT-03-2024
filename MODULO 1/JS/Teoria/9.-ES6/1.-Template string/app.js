const template = `Esto es un ejemplo de tremplate string`; // siempre con lass comillas francesa
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

/** EJERCICIO QUE SERA SACAR POR CONSOLA LA  MEDIA DE TODAS LAS NOTAS DE TODOS LOS ALUMNOS
 *
 */

const media = (arrayDeAlumnos) => {
  /** 
  let acc = 0;
  arrayDeAlumnos.forEach((alumno, index) => {
    acc += alumno.notaFinal;
  }); */
  const suma = arrayDeAlumnos.reduce(
    (acumulador, alumno) => acumulador + alumno.notaFinal,
    0
  );
  const media = suma / arrayDeAlumnos.length;
  /**
   *
   */
  return media;
};

const mediaComponent = `<p>La media de los alumnos es: ${media(alumnos)}</p>`;
const figureComponent = `<article>${mediaComponent}</article>`;

const app = document.getElementById("app");
/** innerHTML es para pintarlo en la pagina */
app.innerHTML += figureComponent;

const ejemploTercerUso = `sumar: ${5 + 5}`;
