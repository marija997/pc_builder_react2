import axios from "axios";

export const LogoutUser = (token) => {
  return axios
    .post("logout", {
      token: token,
    })
    .then((response) => {
      localStorage.setItem("userToken", null);
      console.log(token);

      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
