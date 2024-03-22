import "./CardPokemon.css";

const template = (image, name) => `
    <figure>
        <img src=${image} alt=${name} />
        <h3>${name} </h3>
    </figure>
    `;

export const PrintCardPokemon = (image, name) => {
  document.getElementById("containerGalleryPage").innerHTML += template(
    image,
    name
  );
};
