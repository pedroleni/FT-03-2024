// -----------------------------------DIFENCIAS FUNCTION Y ARROW--------------------------------
// ----> 1) THIS

const casa = {
  medida: 400,
  getMedida: () => console.log(`La medida es: ${this.medida}`),
};

const casaFunction = {
  medida: 400,
  getMedida: function getMedida() {
    console.log(` La medida es: ${this.medida}`);
  },
};

casa.getMedida();
casaFunction.getMedida();

// --------------- POO

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  // getter nos da info
  get area() {
    return this.calcularArea();
  }

  // metodos
  calcularArea() {
    return this.ancho * this.alto;
  }
}

const rectanguloNuevo = new Rectangulo(20, 10);

console.log(rectanguloNuevo.area);

class Humano {
  constructor(altura, pelo, peso, deporteFav, numeroPie) {
    this.altura = altura;
    this.pelo = pelo;
    this.peso = peso;
    this.deporteFav = deporteFav;
    this.numeroPie = numeroPie;
  }

  get pelo() {
    return this.pelo();
  }

  cambiarPelo(value) {
    this.pelo = value;
  }

  pelo() {
    return this.pelo;
  }

  saludar() {
    console.log("hola que tal ");
  }
}

const pedro = new Humano(1.71, "castaño", 75, "natacion", 43);
pedro.saludar();
pedro.cambiarPelo("rubio");
console.log(pedro.pelo);

const alicia = new Humano(1.65, "rubia", 56, "natacion", 39);
alicia.cambiarPelo("castaña");
console.log("🚀 ~ alicia:", alicia);

// ------------> arguments

function argumentos(a, b, c) {
  console.log(arguments[1]);
}
argumentos(10, 20, 30);

// ------> arguments ----> no esta en function arrow
