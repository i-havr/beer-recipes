import axios from "axios";

axios.defaults.baseURL = "https://api.punkapi.com/v2";

export const getBeers = async (page = 1) => {
  const response = await axios.get("/beers", {
    params: {
      page,
    },
  });
  // console.log(response.data);
  return response.data;
};

export const editFollowing = async (id, body) => {
  const response = await axios.put(`/users/${id}`, body);
  return response.data;
};
