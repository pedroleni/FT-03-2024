import { PrintCardPokemon } from "../components";
import { getData } from "../utils";
import "./Gallery.css";

const init = async () => {
  const pokemons = await getData();
  pokemons.forEach((pokemon) => {
    const { image, name } = pokemon;
    PrintCardPokemon(image, name);
  });
};

//!----------- template

const template = () => `
<div id="containerGalleryPage">
</div>
`;

//! ---------> funcion que se encarga de gestionar eventos

const listeners = () => {};

//! --------> funcion que pinta

export const PrintGalleryPage = () => {
  document.querySelector("main").innerHTML = template();
  init();
};
