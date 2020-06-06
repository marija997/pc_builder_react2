import axios from "axios";

export const LoginUser = (input, setToken) => {
  return axios
    .post("login", {
      username: input.username,
      password: input.password,
    })
    .then((response) => {
      localStorage.setItem("userToken", response.data.token);
      setToken(response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
