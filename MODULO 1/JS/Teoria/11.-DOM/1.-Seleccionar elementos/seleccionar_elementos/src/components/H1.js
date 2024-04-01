const createElementH1 = (texto) => {
  const H1 = document.createElement("h1");
  H1.textContent = texto;
  H1.id = "h2";
  return H1;
};

const createH2 = () => {
  const H2 = document.createElement("h2");
  H2.textContent = "soy un h2";
  H2.id = "h2";
  return H2;
};

const createH2Error = () =>
  (document.createElement("h2").textContent = "soy un h2"); // no utilizar en linea porque no crea la etiqueta de html

export const PrintH1 = (textoH1) =>
  document
    .querySelector("#app")
    .append(createElementH1(textoH1), createH2Error());

/**
 * APPEND -------> deja inyectar varios
 * APPENDCHILD --> deja solo uno
 *
 */
