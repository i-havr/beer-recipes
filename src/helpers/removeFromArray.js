export const removeFromArray = (firstArray, secondArray) => {
  const filteredArray = firstArray.filter(
    (obj) => !secondArray.includes(obj.id)
  );
  return filteredArray;
};
