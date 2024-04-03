export const addItem = (item, list, index) => {
  const promise = new Promise((resolve, reject) => {
    if (!list) {
      reject("no tengo el listado para poder meter el nuevo item");
    } else {
      setTimeout(() => {
        list.push(item);
        resolve(list);
      }, 3000);
    }
  });

  return promise;
};
