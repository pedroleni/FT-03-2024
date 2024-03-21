const getData = async () => {
  /**
   * Esta funcion se encarga de traer los datos del endpoint por id del pokemon
   * primero crea una variable vacia de un aray para una vez hecha la llamada a la api pushear los
   * datos en ese array
   */
  const data = [];
  for (let i = 1; i < 31; i++) {
    /**
     * hacemos el bucle para asi tener la i de forma dinamica y poder hjacer tantas llamadas a la API como
     * pokemon queramos
     *
     * Hay que decirle un await con el fetch para saber en que punto tiene que esperar a recibir los datos
     *
     */
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemonJson = await pokemon.json();
    data.push(pokemonJson);
  }

  mappeoData(data);
};

const mappeoData = (info) => {
  /**
   * esta funcion se encarga de quedarse con los datos en concreto que necesito para
   * asi hacer mas facil su rendr en la pagina
   */
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

    /**
     * aqui creamos un componente de una figure de cada pokemon
     * para posteriormente inyectarlo en el contenedor que
     * tenemos de la aplicacion que tiene el id de app
     * Recordar esto es una single page application SPA
     * solo hay un index y en este index hay un contenedor donde
     * se renderiza esta aplicacion
     */
    const figure = `
    <figure>
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h3>${pokemon.name} </h3>
    </figure>
    `;
    /**
     * apuntamos dentro del documento del dom a un elemento que tenga el id de app y le inyectamos
     * el componente que acabamos de crear con el template string
     */
    document.getElementById("app").innerHTML += figure;
  });
};

getData();
