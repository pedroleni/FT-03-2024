import { getAllCharacters } from "../services/ricky.service";

export const getDataRicky = async () => {
  const res = await getAllCharacters();
  console.log(res);

  /// si es un error el status se encuentra en la clave response ---> res.response.status
  // por eso en el if metemos el optional chainning
  if (res?.status === 200) {
    return mappeoData(res.data.results);
  }
};

const mappeoData = (data) => {
  return data.map((personaje, index) => {
    return { image: personaje.image, name: personaje.name, id: personaje.id };
  });
};
