//!----------------------------------------------------------------------------
//?---------------------------------ASYNC AWAIT TRY-CATCH -------------------------------
//!----------------------------------------------------------------------------

const getData = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/ability/1");
    if (res.status === 200) {
      const jsonData = await res.json();
      console.log("🚀 ~ getData ~ jsonData:", jsonData);
    } else {
      console.log(`hemos tenido un error: ${res.status}`);
    }
  } catch (err) {
    console.log("error", err);
  }
};

getData();

//!----------------------------------------------------------------------------
//?---------------------------------- .THEN .CATCH--------------------------------
//!----------------------------------------------------------------------------

const getDataThen = async () => {
  return fetch("https://pokeapi.co/api/v2/ability/1")
    .then((res) => {
      if (res.status === 200) {
        return res;
      } else {
        console.log("hemos tenido un error");
      }
    })
    .then((data) => {
      const dataJson = data.json();
      return dataJson;
    })
    .catch((error) => console.log(error));
};

getDataThen().then((res) => console.log("soy la respuesta", res));
