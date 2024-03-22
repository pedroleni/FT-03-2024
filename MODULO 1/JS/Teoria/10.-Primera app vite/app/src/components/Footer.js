import "./Footer.css";

//!----------- template

const template = () => `
<footer>
footer
</footer>
`;

//! ---------> funcion que se encarga de gestionar eventos

const listeners = () => {};

//! --------> funcion que pinta

export const PrintFooter = () => {
  document.getElementById("app").innerHTML += template();
};
