import axios from "axios";

export const GetAllFavourites = (token, setFavourites) => {
  return axios
    .get("/get_favourites", {
      headers: { Authorization: "Bearer " + token },
    })
    .then((response) => {
      return setFavourites(response.data.favourites);
    })
    .catch((error) => {
      console.log(error);
    });
};
