export const LoginUser = (input) => {
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
      console.log("Success", response);
    })
    .catch((error) => console.log(error, "ERRRO"));
};
