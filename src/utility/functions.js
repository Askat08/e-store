// Footer button scroll to top method
export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

// handles local storage data
export const setLocalStorage = (array) => {
  // Array from local storage
  const localStorageArray =
    JSON.parse(window.localStorage.getItem("cart-items")) || [];

  // New array with no duplicates
  const newFilteredArray = array.reduce(
    (newArr, eachArrayElem) => {
      if (
        localStorageArray.findIndex(
          (eachStorageElem) => eachStorageElem.id === eachArrayElem.id
        ) === -1
      ) {
        newArr.push(eachArrayElem);
      }
      return newArr;
    },
    [...localStorageArray]
  );
  // set items to localstorage
  localStorage.setItem("cart-items", JSON.stringify(newFilteredArray));
};

// Get item from an array by it's id
export const getItembyId = (id, arr) => {
  const comic = arr.find((item) => item.id === id);
  return comic;
};

// modify count of item in an array
export const cartItemModifyCount = (arr, id, action, cart) => {
  let comics = [...arr];
  const index = comics.indexOf(getItembyId(id, comics));
  const item = comics[index];

  if (action === "dec" && item.count > 1) {
    item.count -= 1;
  } else if (action === "inc" && item.count < 10) {
    item.count += 1;
  } else if (action === "add") {
    if (item.count === undefined) {
      item.count = 1;
    } else if (item.count < 10 && item.count !== undefined) {
      item.count += 1;
    }
  }

  // Filtered array with incremented item added
  const arrayWithModifiedItem = [
    ...cart.concat(item).filter((v, i, a) => a.indexOf(v) === i),
  ];

  return arrayWithModifiedItem;
};
