const addItem = (item, list) => {
  const promise = new Promise((resolve, reject) => {
    if (!list) {
      reject(" no tienes la lista por lo cual no puedo resolverte la promesa");
    } else {
      setTimeout(() => {
        if (!item) {
          resolve(list);
        } else {
          list.push(item);
          resolve(list);
        }
      }, 3000);
    }
  });

  return promise;
};

const listFruit = ["apple", "lemon", "pinapple"];

addItem("granada")
  .then((res) => {
    console.log("🚀 ~ res:", res);
  })
  .catch((error) => console.log("error", error));
