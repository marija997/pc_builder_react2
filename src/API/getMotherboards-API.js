export const GetAllMotherboards = (cpu, setComponentList) => {
  fetch("http://localhost:5000/motherboards/" + cpu, {
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
          if (res.data.motherboardList)
            return setComponentList(res.data.motherboardList);
        });
    })
    .catch((error) => {
      return error;
    });
};
