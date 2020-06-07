import axios from "axios";

export const EditUserInfo = (input, token) => {
  return axios
    .post(
      "/update_user_data",
      {
        first_name: input.first_name,
        last_name: input.last_name,
        email: input.email,
      },
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
