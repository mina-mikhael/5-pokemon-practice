export const aiSelector = (array) => {
  const aiChoice = [];

  const randomIdx = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  while (aiChoice.length < 4) {
    aiChoice.push(array[randomIdx(array)]);
  }

  return aiChoice;
};

const userChoice = [];

export const userSelector = (array, pokeID) => {
  const getIdx = (arr, id) => {
    let currentIdx;
    arr.forEach((el, idx) => {
      if (el.id === id) {
        currentIdx = idx;
      }
    });
    return currentIdx;
  };

  if (userChoice.length && userChoice.some((el) => el.id === pokeID)) {
    userChoice.splice(getIdx(userChoice, pokeID), 1);
    return userChoice;
  }

  if (userChoice.length < 4) {
    let currentIdx = getIdx(array, pokeID);
    userChoice.push(array[currentIdx]);
  }
  return userChoice;
};
