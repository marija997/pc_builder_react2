import axios from "axios";

export const LogoutUser = (token, setToken) => {
  return axios
    .get("logout", {
      headers: { Authorization: "Bearer " + token },
    })
    .then((response) => {
      localStorage.removeItem("userToken");
      setToken(localStorage.getItem("userToken"));
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
