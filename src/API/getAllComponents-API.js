export const GetAllComponents = (component, setComponentList) => {
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
          if (res.data.componentList)
            return setComponentList(res.data.componentList);
        });
    })
    .catch((error) => {
      return error;
    });
};
