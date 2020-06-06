import axios from "axios";
import { LoginUser } from "../API/loginUser-API";

export const RegisterUser = (input, setToken) => {
  return axios
    .post("register", {
      first_name: input.first_name,
      last_name: input.last_name,
      email: input.email,
      password: input.password,
      username: input.username,
    })
    .then((response) => {
      if (response.data.response == "success") {
        LoginUser(input, setToken);
      }
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
