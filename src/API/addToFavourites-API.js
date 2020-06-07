import axios from "axios";

export const AddToFavourite = (component, token, setSuccessfullyAdded) => {
  return axios
    .get("add_favourite/" + component.type + "/" + component.name, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((response) => {
      console.log(response.data);
      return setSuccessfullyAdded(true);
    })
    .catch((error) => {
      console.log(error);
    });
};
