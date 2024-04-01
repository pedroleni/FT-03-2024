import { PrintH1, PrintUl } from "./src/components";
import "./style.css";
const ulSelector = document.querySelector("ul");
console.log("🚀 ~ ulSelector:", ulSelector);
PrintUl();

PrintH1("esto es un H1");
PrintH1(".----");

/** BUSCAR ELEMENTOS  */
//! ---------- ID
const app = document.getElementById("app");
console.log("🚀 ~ file: main.js:4 ~ app:", app);

const appID = document.querySelector("#app"); // BUSQUEDA POR ID
console.log("🚀 ~ file: main.js:14 ~ appID:", appID);

const appIDAll = document.querySelectorAll("#app"); // BUSQUEDA POR ID
console.log("🚀 ~ file: main.js:14 ~ appID:", appIDAll);

appIDAll.forEach((item, index) => console.log(item));

// -------__> EL querySelector nos devuelve nodeList que solo se puede recorrer con el forEach --> prototype

//! ------------ por etiqueta ----
const liTag = document.getElementsByTagName("li"); /// htmlColection
console.log("🚀 ~ liTag:", liTag);

/// ES COMO UN ARRAY ------ me devuelve un HTMLCollection --->
const h1s = document.getElementsByTagName("h1");
console.log("🚀 ~ h1s:", h1s);

//! ------------ el querySelectorAll----
const allH1 = document.querySelectorAll("h1");
console.log("🚀 ~ allH1 :", allH1.length);

//! -----------> seleccionar por class
