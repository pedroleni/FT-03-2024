const template = (image, name, id) => `

<figure>
    <img src=${image} alt=${name}>
    <h3>${name}</h3> 
    <p>${id}</p>
</figure>


`;

export const PrintFigure = (image, name, id) =>
  (document.getElementById("containerRicky").innerHTML += template(
    image,
    name,
    id
  ));
