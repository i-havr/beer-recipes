export const endStringWithThreeDots = (str, limit = 145) => {
  var A = Array.from(str);
  return A.length <= limit ? str : A.slice(0, limit - 3).join("") + "...";
};
