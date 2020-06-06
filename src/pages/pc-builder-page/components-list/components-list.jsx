import React, { useState, useEffect } from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import { GetComponent } from "../../../API/getComponent-API";
import { GetMotherboard } from "../../../API/getMotherboards-API";
import Component from "./component/component";
import { AddPCBuild } from "../../../API/addPCBuild-API";

const ComponentsList = ({ activeStep, setActiveStep, token, setToken }) => {
  const [activeComponent, setActiveComponent] = useState("");
  const [componentList, setComponentList] = useState("");
  const [finalBuild, setFinalBuild] = useState(null);

  //selected components
  const [selectedCpu, setSelectedCpu] = useState("");
  const [selectedMotherboard, setSelectedMotherboard] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedVideoCard, setSelectedVideoCard] = useState("");
  const [selectedCooler, setSelectedCooler] = useState("");
  const [selectedCase, setSelectedCase] = useState("");
  const [selectedPowerSupp, setSelectedPowerSupp] = useState("");
  const [selectedOperatingSystem, setSelectedOperatingSystem] = useState("");
  const pcBuild = {
    cpu: selectedCpu,
    motherboard: selectedMotherboard,
    ram: selectedRam,
    storage: selectedStorage,
    video_card: selectedVideoCard,
    cpu_cooler: selectedCooler,
    case: selectedCase,
    power_supply: selectedPowerSupp,
    operating_system: selectedOperatingSystem,
  };
  console.log(finalBuild, "PC BUILD");

  useEffect(() => {
    setActiveComponent(
      activeStep === 1
        ? "Processor"
        : activeStep === 2
        ? "Motherboard"
        : activeStep === 3
        ? "RAMS"
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
      ? GetComponent("cpus", setComponentList)
      : activeStep === 2
      ? GetMotherboard(selectedCpu, setComponentList)
      : activeStep === 3
      ? GetComponent("rams", setComponentList)
      : activeStep === 4
      ? GetComponent("storages", setComponentList)
      : activeStep === 5
      ? GetComponent("video_cards", setComponentList)
      : activeStep === 6
      ? GetComponent("cpu_coolers", setComponentList)
      : activeStep === 7
      ? GetComponent("cases", setComponentList)
      : activeStep === 8
      ? GetComponent("power_supplies", setComponentList)
      : GetComponent("operating_systems", setComponentList);
  }, [activeStep]);
  return (
    <MDBContainer className="components-list-container">
      <div>
        <h3>{activeComponent}</h3>
        {activeStep >= 9 && (
          <MDBBtn
            disabled={selectedOperatingSystem === "" ? true : false}
            onClick={() => {
              AddPCBuild(pcBuild, token, setFinalBuild);
            }}
          >
            Build
          </MDBBtn>
        )}
      </div>
      {componentList.length > 0 &&
        componentList.map((item) => {
          return (
            <Component
              pcBuild={pcBuild}
              item={item}
              activeComponent={activeComponent}
              setSelectedCpu={setSelectedCpu}
              setSelectedMotherboard={setSelectedMotherboard}
              setSelectedRam={setSelectedRam}
              setSelectedStorage={setSelectedStorage}
              setSelectedVideoCard={setSelectedVideoCard}
              setSelectedCooler={setSelectedCooler}
              setSelectedCase={setSelectedCase}
              setSelectedPowerSupp={setSelectedPowerSupp}
              setSelectedOperatingSystem={setSelectedOperatingSystem}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              selectedOperatingSystem={selectedOperatingSystem}
            />
          );
        })}
    </MDBContainer>
  );
};

export default ComponentsList;
