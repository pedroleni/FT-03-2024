import "./Header.css";
//!----------- template

const template = () => `
<header>
header
</header>
`;

//! ---------> funcion que se encarga de gestionar eventos

const listeners = () => {};

//! --------> funcion que pinta

export const PrintHeader = () => {
  document.getElementById("app").innerHTML += template();
};
