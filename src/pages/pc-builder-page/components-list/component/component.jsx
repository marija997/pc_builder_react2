import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBIcon,
} from "mdbreact";

const Component = ({
  pcBuild,
  item,
  activeComponent,
  setSelectedCpu,
  setSelectedMotherboard,
  setSelectedRam,
  setSelectedStorage,
  setSelectedVideoCard,
  setSelectedCooler,
  setSelectedCase,
  setSelectedPowerSupp,
  setSelectedOperatingSystem,
  activeStep,
  setActiveStep,
  selectedOperatingSystem,
}) => {
  const component =
    activeComponent === "Processor"
      ? item.cpu
      : activeComponent === "Motherboard"
      ? item.motherboard
      : activeComponent === "RAMS"
      ? item.ram
      : activeComponent === "Storage"
      ? item.storage
      : activeComponent === "Video card"
      ? item.video_card
      : activeComponent === "CPU Cooler"
      ? item.cpu_cooler
      : activeComponent === "Cases"
      ? item.case
      : activeComponent === "Power supplies"
      ? item.power_supply
      : item.operating_system;

  return (
    <MDBRow lg="12" className="component-container">
      <MDBCol lg="3" className="component-image-container">
        <div className="image-container">
          <MDBView hover zoom>
            <img src={component && component.image} />
          </MDBView>
        </div>
      </MDBCol>
      <MDBCol lg="9" className="info-container">
        <MDBRow lg="12">
          <MDBCol lg="9" className="item-info">
            <h4>{component && component.name}</h4>
            <p>{component && component.name}</p>
          </MDBCol>
          <MDBCol lg="3" className="item-price-wrapper">
            <div className="item-price">
              <h4>${component && component.price}</h4>
            </div>
            <div className="button-wrapper">
              <MDBBtn color="elegant">
                <MDBIcon icon="heart" />
              </MDBBtn>
              <MDBBtn
                className="add-button"
                color="dark-green"
                onClick={() => {
                  setActiveStep(activeStep + 1);

                  activeComponent === "Processor"
                    ? setSelectedCpu(component.name)
                    : activeComponent === "Motherboard"
                    ? setSelectedMotherboard(component.name)
                    : activeComponent === "RAMS"
                    ? setSelectedRam(component.name)
                    : activeComponent === "Storage"
                    ? setSelectedStorage(component.name)
                    : activeComponent === "Video card"
                    ? setSelectedVideoCard(component.name)
                    : activeComponent === "CPU Cooler"
                    ? setSelectedCooler(component.name)
                    : activeComponent === "Cases"
                    ? setSelectedCase(component.name)
                    : activeComponent === "Power supplies"
                    ? setSelectedPowerSupp(component.name)
                    : setSelectedOperatingSystem(component.name);
                }}
              >
                <MDBIcon icon="plus" />
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  );
};

export default Component;
