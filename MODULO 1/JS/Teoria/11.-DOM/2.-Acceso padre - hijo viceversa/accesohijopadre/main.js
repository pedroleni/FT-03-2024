import "./style.css";

//!----------------------------------------------------------------
//!-------------------- saber los hijos de los padres--------------
//!----------------------------------------------------------------
const app = document.getElementById("app");
console.log("🚀 ~ file: main.js:2 ~ app:", app);

// ------> saber los hijos del app

const child = app.childNodes;
console.log("🚀 ~ child:", child);
console.log("🚀 ~ file: main.js:5 ~ child:", child[1].childNodes);

child[1].childNodes.forEach(
  (item, index) => index % 2 != 0 && (item.textContent = "🙌🏻 emoji")
);

const allLi = document.querySelectorAll("li");
console.log("🚀 ~ allLi :", allLi);

allLi[1].style.background = "blue";
allLi[1].style.color = "white";
child[1].style.listStyle = "none"; // EN CSS SERIA list-style

/** METODO QUE NOS DEVUELVE SI TIENES O NO HIJOS */

const hasChild = app.hasChildNodes(); /// devuelve un boolean
console.log("🚀 ~ hasChild:", hasChild);

//!----------------------------------------------------------------
//!-------------------- saber el padre de un hijo -----------------
//!----------------------------------------------------------------

const ul = document.querySelector("ul");
console.log("🚀 ~ file: main.js:2 ~ ul padre:", ul.parentElement);
