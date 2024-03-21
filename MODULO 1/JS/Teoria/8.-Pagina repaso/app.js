const getData = async () => {
  const data = [];
  for (let i = 1; i < 31; i++) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemonJson = await pokemon.json();
    data.push(pokemonJson);
  }

  mappeoData(data);
};

const mappeoData = (info) => {
  console.log(info);
  const dataMapeada = info.map((pokemonSingular, index) => ({
    name: pokemonSingular.name,
    image: pokemonSingular.sprites.other.dream_world.front_default,
  }));

  printGallery(dataMapeada);
};

const printGallery = (dataAPintar) => {
  dataAPintar.forEach((pokemon, index) => {
    // esto es un componente
    const figure = `
    <figure>
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h3>${pokemon.name} </h3>
    </figure>
    `;

    document.getElementById("app").innerHTML += figure;
  });
};

getData();
