export const GetAllComponents = (component) => {
  fetch("http://localhost:5000/" + component, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.json());
        return response;
      }
    })
    .catch((error) => {
      return error;
    });
};
