// import { AuthenticateUser } from "./authenticateUser-API";
import axios from "axios";

export const LoginUser = (input) => {
  return axios
    .post("login", {
      username: input.username,
      password: input.password,
    })
    .then((response) => {
      localStorage.setItem("userToken", response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  // fetch("http://localhost:5000/login", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     username: input.username,
  //     password: input.password,
  //   }),
  // })
  //   .then((response) => {
  //     response
  //       .json()
  //       .then((data) => ({
  //         data: data,
  //         status: response.status,
  //       }))
  //       .then((res) => {
  //         console.log(res, "login results");
  //         if (res.data.response === "success") {
  //           AuthenticateUser(input.username);
  //           console.log("uso sam ivde");
  //         }
  //         // if (res.data.componentList)
  //         //   return setComponentList(res.data.componentList);
  //       });
  //   })
  //   .catch((error) => {
  //     return error;
  //   });
};
