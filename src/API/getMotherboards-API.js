import axios from "axios";

export const GetMotherboard = (cpu, setComponentList) => {
  return axios
    .get("motherboards/" + cpu)
    .then((response) => {
      return setComponentList(response.data.motherboardList);
    })
    .catch((error) => {
      console.log(error);
    });
};
