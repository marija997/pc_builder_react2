export const GetAllComponents = (component, setCpu) => {
  fetch("http://localhost:5000/" + component, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      response
        .json()
        .then((data) => ({
          data: data,
          status: response.status,
        }))
        .then((res) => {
          // console.log(res);

          return setCpu(res.data.cpuList);
        });
    })
    .catch((error) => {
      return error;
    });
};
