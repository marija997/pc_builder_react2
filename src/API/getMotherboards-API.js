export const GetAllMotherboards = (cpu) => {
  fetch("http://localhost:5000/motherboards/" + cpu, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response;
      }
    })
    .catch((error) => {
      return error;
    });
};
