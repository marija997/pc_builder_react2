import axios from "axios";

export const RemoveFromFavourites = (token, component_name) => {
  return axios
    .get("/remove_favourite/" + component_name, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
