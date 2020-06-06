import axios from "axios";

export const AddPCBuild = (input, token, setFinalBuild) => {
  return axios
    .post(
      "add_pcbuild",
      {
        cpu: input.cpu,
        motherboard: input.motherboard,
        ram: input.ram,
        storage: input.storage,
        video_card: input.video_card,
        cpu_cooler: input.cpu_cooler,
        case: input.case,
        power_supply: input.power_supply,
        operating_system: input.operating_system,
      },
      { headers: { Authorization: "Bearer " + token } }
    )
    .then((response) => {
      setFinalBuild(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
