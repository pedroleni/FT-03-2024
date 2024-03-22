import "./Main.css";
//!----------- template

const template = () => `
<main>
</main>
`;

//! ---------> funcion que se encarga de gestionar eventos

const listeners = () => {};

//! --------> funcion que pinta

export const PrintMain = () => {
  document.getElementById("app").innerHTML += template();
};
