import { LoginUser } from "../API/loginUser-API";

export const RegisterSubmit = (input) => {
  fetch("http://localhost:5000/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: input.first_name,
      last_name: input.last_name,
      email: input.email,
      password: input.password,
      username: input.username,
    }),
  })
    .then((response) => {
      if (response.status === 200)
        return LoginUser(input.username, input.password);
    })
    .catch((error) => {
      return error;
    });
};
