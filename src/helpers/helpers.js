export const aiSelector = (array) => {
  const aiChoice = [];
  let randomChoice;
  const randomIdx = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  while (aiChoice.length < 4) {
    randomChoice = array[randomIdx(array)];
    if (!aiChoice.includes(randomChoice)) aiChoice.push(randomChoice);
  }
  return aiChoice;
};

export const userSelector = (array, pokeID, userSelection) => {
  const getIdx = (arr, id) => {
    let currentIdx;
    arr.forEach((el, idx) => {
      if (el.id === id) {
        currentIdx = idx;
      }
    });
    return currentIdx;
  };

  if (userSelection.length && userSelection.some((el) => el.id === pokeID)) {
    userSelection.splice(getIdx(userSelection, pokeID), 1);
    return userSelection;
  }

  if (userSelection.length < 4) {
    let currentIdx = getIdx(array, pokeID);
    userSelection.push(array[currentIdx]);
  }
  return userSelection;
};
