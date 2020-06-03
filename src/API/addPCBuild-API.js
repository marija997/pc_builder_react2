export const AddPCBuild = (input) => {
  fetch("http://localhost:5000/add_pcbuild", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cpu: input.cpu,
      motherboard: input.motherboard,
      ram: input.ram,
      storage: input.storage,
      video_card: input.video_card,
      cpu_cooler: input.cpu_cooler,
      case: input.case,
      power_supply: input.power_supply,
      operating_system: input.operating_system,
    }),
  })
    .then((response) => {
      if (response.status === 200) console.log("Build successfully added");
    })
    .catch((error) => {
      return error;
    });
};
