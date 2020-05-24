import Cookies from "js-cookie";

export const LoginUser = (input, setAut) => {
  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: input.username,
      password: input.password,
    }),
  })
    .then((response) => {
      if (response.response === "success") {
        Cookies.set("userLogin", true);
        setAut(Cookies.get("userLogin"));
      }
    })
    .catch((error) => console.log(error, "ERROR"));
};
