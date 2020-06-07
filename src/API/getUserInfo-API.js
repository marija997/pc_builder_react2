import axios from "axios";

export const GetUserInfo = (token, setUserInfo) => {
  return axios
    .get("profile", { headers: { Authorization: "Bearer " + token } })
    .then((response) => {
      return setUserInfo(response.data.response[0].user);
    })
    .catch((error) => {
      console.log(error);
    });
};
