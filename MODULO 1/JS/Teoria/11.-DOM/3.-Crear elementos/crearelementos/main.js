import "./style.css";

/**
 * CREAMOS ELEMENTOS CON DOS FORMAS:
 * 1) TEMPLATE -- innerHTML
 * 2) CREATE ELEMENT
 */

//!-------> template ---> innerHTML ---- insertAdjacentHTML

const h1 = `<h1>Hola soy un h1</h1>`;

const app = document.getElementById("app");

//app.innerHTML += h1;

app.insertAdjacentHTML("afterend", h1);

//! -------> create eleemnt

const h2 = document.createElement("h2");

const h1Node = document.querySelector("h1");

h1Node.insertAdjacentElement("afterend", h2);

//app.append(h2, h2) --------> podemos meter los elementos que queramos
app.appendChild(h2);

const parrafo = document.createElement("p");
parrafo.innerText = "¡SKLJDKLJLGJKLSDRJKGJKLJKDFJKGJKJKGJKDJKLJKL";

const parrafoTwo = document.createElement("p");
parrafoTwo.innerText = "¡SKLJDKLJLGJKLSDRJKGJKLJKDFJKGJKJKGJKDJKLJKL";
app.append(parrafo, parrafoTwo, "Hola");
