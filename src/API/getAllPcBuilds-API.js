import axios from "axios";

export const GetAllPcBuilds = (token, setPCBuildsList) => {
  return axios
    .get("/get_pcbuilds", {
      headers: { Authorization: "Bearer " + token },
    })
    .then((response) => {
      return setPCBuildsList(response.data.builds);
    })
    .catch((error) => {
      console.log(error);
    });
};
