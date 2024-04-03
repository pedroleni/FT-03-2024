import { PrintFigure } from "../components/Figure/Figure";
import { getDataRicky } from "../utils/dataRicky";
import "./RickyPage.css"
const template = `<div id="containerRicky"></div>`;

const getData = async () => {
  const dataMappeada = await getDataRicky();
  printGallery(dataMappeada);
};

const printGallery = (data) =>
  data.map((personaje, index) =>
    PrintFigure(personaje.image, personaje.name, personaje.id)
  );

export const PrintPageRicky = () => {
  document.getElementById("app").innerHTML += template;
  getData();
};
