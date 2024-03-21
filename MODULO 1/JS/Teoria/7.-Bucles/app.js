// ---------> iterar: recorrer los elementos de una coleccion
// ---------> posicion: el lugar que ocupa el elemento dentro del conjunto de datos
// ---------> elementos singular: dentro del conjunto, cada elemento por separado
// ---------> index: es el numero que ocupa esa posición
// ---------> elementos iterables: string, arrays, set, arguments

//! ----------------------------------------------------------------------
//? ---------------------------- while------------------------------------
//! ----------------------------------------------------------------------

let i = 0;

// mientras se cumpla la condicion se ejecuta lo que hay en las llaves
while (i < 10) {
  //console.log(`Estamos con la i: ${i}`);
  i++;
}

//! ----------------------------------------------------------------------
//? ---------------------------- FOR--------------------------------------
//! ----------------------------------------------------------------------

const comidas = [
  "sandia",
  "paella",
  "sandia",
  "lentejas",
  "ensalada",
  "sandia",
];

for (let i = 0; i < comidas.length; i++) {
  console.log(`La comida ${comidas[i]} tiene el index ${i}`);
}
console.log("-----------------------------------");
for (let i = comidas.length - 1; i >= 0; i--) {
  console.log("entro");
  console.log(`La comida ${comidas[i]} tiene el index ${i}`);
}

//const comidasReverse = comidas.reverse();
//console.log("🚀 ~ comidasReverse:", comidasReverse);

/** EJERCICIO --- > BUSCAR COMIDA MEDIANTE UNA FUNCIOON */

const buscarComida = (comidaABuscar, arrayDeComidas) => {
  let result = {
    encontrado: false,
    posicion: [],
  };
  for (let i = 0; i < arrayDeComidas.length; i++) {
    result =
      comidaABuscar.toLowerCase() === arrayDeComidas[i].toLowerCase()
        ? { ...result, encontrado: true, posicion: [...result.posicion, i] }
        : { ...result };
  }
  return result;
};

console.log(comidas);
const resultBuscarComida = buscarComida("Sandia", comidas);
console.log("🚀 ~ resultBuscarComida:", resultBuscarComida);

/**
 * EJERCICIO DE QUITAR LOS REPETIDOS DE UN ARRAY
 */

const quitarRepetidos = (array) => {
  const arrayNoRepetidos = [];

  for (let i = 0; i < array.length; i++) {
    /**
     * tenemos que mirar el array vacio que hay arriba y comprobar que
     * exista dentro la palabra que estamos recorriendo pueden pasar dos
     * stuaciones
     * 1)   No se encuentra en el array de arrayNoRepetidos --> añado la palabra al array porque aun no la puse como una paalabra unica
     * 2)   Se encuentra en el array de arrayNoRepetidos --> no hago nada , no meto la palabra dentro porque ya tengo una representacion singular de la palabra
     */

    !arrayNoRepetidos.includes(array[i]) && arrayNoRepetidos.push(array[i]);
  }
  return arrayNoRepetidos;
};

const resultQuitarRepe = quitarRepetidos(comidas);
console.log("🚀 ~ resultQuitarRepe:", resultQuitarRepe);

//! ----------------------------------------------------------------------
//? ---------------------------- FOR IN-----------------------------------
//! ----------------------------------------------------------------------
/// -------------es principal mente para los object object

/// EL FOR IN NOS DA LAS CLAVES DEL OBJETO Y CON ESO SACAMOS EL VALOR DE LA CLAVE OBJECT[NOMBRE_DE_ LA_CLAVE]

const personaje = {
  nombre: "Aventurero",
  clase: "Guerrero",
  nivel: 1,
  salud: 100,
  mana: 50,
  fuerza: 15,
  inteligencia: 10,
  equipamiento: {
    arma: "Espada básica",
    armadura: "Armadura de cuero",
  },
  habilidades: ["Golpe fuerte", "Defensa sólida"],
  atacar: function () {
    console.log(this.nombre + " ataca con " + this.equipamiento.arma + "!");
  },
  defender: function () {
    console.log(
      this.nombre + " se defiende con " + this.equipamiento.armadura + "!"
    );
  },
  subirDeNivel: function () {
    this.nivel++;
    this.salud += 20;
    this.mana += 10;
    this.fuerza += 5;
    this.inteligencia += 5;
    console.log(this.nombre + " ha subido al nivel " + this.nivel + "!");
  },
};

/*
El for in me da la clave del objeto y con esta c lave podemos sacar el valor mediante el corchete [] --> personaje[clave]
 */

for (clave in personaje) {
  console.log(
    ` las clave con el nombre ${clave} tiene el valor: ${personaje[clave]}`
  );
}

const clavesDeObjeto = Object.keys(personaje);
console.log("🚀 ~ clavesDeObjeto:", clavesDeObjeto);

/** EJERCICIO  DONDE HAY UNA FUNCION DDE ATAQUE
 * Vamos a recibir un numero de vida que vamos a quitar y se la quitaremos al objeto que recibamos
 */

const atacar = (puntoDeAtaque, objetivoDeAtaque) => {
  const copia = { ...objetivoDeAtaque };
  for (let caracteristica in objetivoDeAtaque) {
    /** vamos a modificar "salud" por lo cual solo quiero que en el bucle se meta en la clave salud */
    if (caracteristica == "salud") {
      /** dentro de que ya se que la clave es salud vamos a calcular el valor que le queda de vida poniendo
       * una condcion que si lo que le queda de vida es menor que 0, la vida sera 0
       */
      let puntosDeVida =
        copia[caracteristica] - puntoDeAtaque < 0
          ? 0
          : copia[caracteristica] - puntoDeAtaque;

      /**
       * Con ese valor de vida se lo asignamos a la copia que hay arriba
       */

      copia[caracteristica] = puntosDeVida;
    }
  }
  return copia;
};

const resultAtacar = atacar(20, personaje);
console.log("🚀 ~ resultAtacar:", resultAtacar);

// -------- forma corta---------------
const atacarSimple = (puntoDeAtaque, objetivoDeAtaque) => {
  /** spread operator
   * haCEMOS LA COPIA Y LUEGO MODIFICAMOS LA CLAVE SALUD
   * en la clave salud volvemos a meter la condicion donde si la resta es menor que 0 metemos 0  sino hacemos la resta
   */
  return {
    ...objetivoDeAtaque,
    salud:
      objetivoDeAtaque.salud - puntoDeAtaque < 0
        ? 0
        : objetivoDeAtaque.salud - puntoDeAtaque,
  };
};

//! ----------------------------------------------------------------------
//? ---------------------------- FOR OF-----------------------------------
//! ----------------------------------------------------------------------

/// --------> tipos de datos iterables------> principalmente arrays ----> no un object object

let escuela = "Neoland, clase";
console.log("🚀 ~ escuela:", escuela[0]);

for (let letra of escuela) {
  console.log(letra);
}

/** EJERCICIO CONTADOR DE PALABRAS  */

const oracion =
  "Alemania es el pais con mayor riqueza por habitante de la eurozona"; // 10 a

const contadorPalabras = (frase, letraBuscar) => {
  let acc = 0;
  for (let letra of frase) {
    /** tenemos que coger y convertir la letra a buscar en minusculas y quitarle los espacios de delante y detras con el trim
     * y en caso de seer igual a la letra que recorremos vamos a hacer el contador + 1
     *
     * se puede hacer con el == o el includes
     */
    //letraBuscar.toLowerCase().trim() === letra.toLowerCase() && acc++;
    letraBuscar.toLowerCase().trim().includes(letra.toLowerCase()) && acc++;
  }

  return acc;
};
const resultContar = contadorPalabras(oracion, "A ");
console.log("🚀 ~ resultContar :", resultContar);

//! ----------------------------------------------------------------------
//? ----------------------------- FOREACH---------------------------------
//! ----------------------------------------------------------------------
// sirve para recorrer elementos iterables menos los stringb

const superheroes = [
  "Superman",
  "Batman",
  "Wonder Woman",
  "Spider-Man",
  "Iron Man",
  "Hulk",
  "Thor",
  "Captain America",
  "Black Widow",
  "Hawkeye",
  "Flash",
  "Green Lantern",
  "Aquaman",
  "Cyborg",
  "Black Panther",
  "Doctor Strange",
  "Captain Marvel",
  "Scarlet Witch",
  "Ant-Man",
  "Wolverine",
];

//callback por dentro
superheroes.forEach(
  /* funcion dentro de otra funcion  -callback*/
  (heroe /** elemento singular */, index, objetoCompleto) => {
    console.log(`en la posicion ${index} se encuentra el heroe: ${heroe}`);
  }
);
