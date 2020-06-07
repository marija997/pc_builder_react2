import axios from "axios";

export const RemovePCBuild = (token, buildId) => {
  return axios
    .get("/delete_pcbuild/" + buildId, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
