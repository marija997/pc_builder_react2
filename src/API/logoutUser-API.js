import Cookies from "js-cookie";

export const LogoutUser = (setAut) => {
  fetch("http://localhost:5000/logout", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.response === "success") {
        Cookies.set("userLogin", false);
        setAut(Cookies.get("userLogin"));
      }
    })
    .catch((error) => console.log(error, "ERROR"));
};
