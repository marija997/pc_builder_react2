import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBStepper,
  MDBStep,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdbreact";

const PCBuilderSteps = ({ activeStep }) => {
  return (
    <MDBStepper form className="pc-builder-steps">
      <MDBStep form>
        <a href="#formstep1">
          <MDBBtn color={activeStep === 1 ? "indigo" : "default"} circle>
            1
          </MDBBtn>
        </a>
        <p>CPU</p>
      </MDBStep>
      <MDBStep form>
        <a href="#formstep2">
          <MDBBtn color={activeStep === 2 ? "indigo" : "default"} circle>
            2
          </MDBBtn>
        </a>
        <p>Motherboard</p>
      </MDBStep>
      <MDBStep form>
        <a href="#formstep3">
          <MDBBtn color={activeStep === 3 ? "indigo" : "default"} circle>
            3
          </MDBBtn>
        </a>
        <p>RAM</p>
      </MDBStep>
      <MDBStep form>
        <a href="#formstep4">
          <MDBBtn color={activeStep === 4 ? "indigo" : "default"} circle>
            4
          </MDBBtn>
        </a>
        <p>Storage</p>
      </MDBStep>
      <MDBStep form>
        <a href="#formstep5">
          <MDBBtn color={activeStep === 5 ? "indigo" : "default"} circle>
            5
          </MDBBtn>
        </a>
        <p>Video card</p>
      </MDBStep>
      <MDBStep form>
        <a href="#formstep6">
          <MDBBtn color={activeStep === 6 ? "indigo" : "default"} circle>
            6
          </MDBBtn>
        </a>
        <p>CPU Cooler</p>
      </MDBStep>
      <MDBStep form>
        <a href="#formstep7">
          <MDBBtn color={activeStep === 7 ? "indigo" : "default"} circle>
            7
          </MDBBtn>
        </a>
        <p>Case</p>
      </MDBStep>
      <MDBStep form>
        <a href="#formstep8">
          <MDBBtn color={activeStep === 8 ? "indigo" : "default"} circle>
            8
          </MDBBtn>
        </a>
        <p>Power supplies</p>
      </MDBStep>
      <MDBStep form>
        <a href="#formstep9">
          <MDBBtn color={activeStep === 9 ? "indigo" : "default"} circle>
            9
          </MDBBtn>
        </a>
        <p>Operating system</p>
      </MDBStep>
    </MDBStepper>
  );
};

export default PCBuilderSteps;
