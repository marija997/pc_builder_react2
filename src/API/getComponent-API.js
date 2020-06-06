import axios from "axios";

export const GetComponent = (component, setComponentList) => {
  return axios
    .get(component)
    .then((response) => {
      return setComponentList(response.data.componentList);
    })
    .catch((error) => {
      console.log(error);
    });
};
