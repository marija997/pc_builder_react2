import React, { useState, useEffect } from "react";
import { MDBContainer } from "mdbreact";
import { GetAllComponents } from "../../../API/getAllComponents-API";
import { GetAllMotherboards } from "../../../API/getMotherboards-API";
import Cookies from "js-cookie";

const ComponentsList = ({ activeStep }) => {
  const [activeComponent, setActiveComponent] = useState("");
  const [cpu, setCpu] = useState("");
  useEffect(() => {
    setActiveComponent(
      activeStep === 1
        ? "Processor"
        : activeStep === 2
        ? "Motherboard"
        : activeStep === 3
        ? "RMS"
        : activeStep === 4
        ? "Storage"
        : activeStep === 5
        ? "Video card"
        : activeStep === 6
        ? "CPU Cooler"
        : activeStep === 7
        ? "Cases"
        : activeStep === 8
        ? "Power supplies"
        : "Operating system"
    );
    activeStep === 1
      ? GetAllComponents("cpus")
      : activeStep === 2
      ? GetAllMotherboards(cpu)
      : activeStep === 3
      ? GetAllComponents("rams")
      : activeStep === 4
      ? GetAllComponents("storage")
      : activeStep === 5
      ? GetAllComponents("video_cards")
      : activeStep === 6
      ? GetAllComponents("cpu_coolers")
      : activeStep === 7
      ? GetAllComponents("cases")
      : activeStep === 8
      ? GetAllComponents("power_supplies")
      : GetAllComponents("operating_systems");
  }, [activeStep]);

  return (
    <MDBContainer className="components-list-container">
      <h3>{activeComponent}</h3>
    </MDBContainer>
  );
};

export default ComponentsList;
