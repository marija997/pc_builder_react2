export const AuthenticateUser = (username) => {
  fetch("http://localhost:5000/authenticate/" + username, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        console.log(response, "RESPONSE");

        //   Cookies.set("userLogin", true);
        //   setAut(Cookies.get("userLogin"));
        //   return "success";
      }
    })
    .catch((error) => {
      return error;
    });
};
