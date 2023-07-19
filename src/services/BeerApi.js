import axios from "axios";

axios.defaults.baseURL = "https://api.punkapi.com/v2";

export const getBeers = async (page = 1) => {
  const response = await axios.get("/beers", {
    params: {
      page,
    },
  });
  return response.data;
};
