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

const PCBuilderSteps = ({ activeStep, setActiveStep }) => {
  return (
    <MDBStepper form className="pc-builder-steps">
      <MDBStep form>
        <a>
          <MDBBtn
            onClick={() => activeStep > 1 && setActiveStep(1)}
            className={activeStep === 1 ? "active" : activeStep > 1 && "done"}
            circle
          >
            1
          </MDBBtn>
        </a>
        <p className={activeStep === 1 ? "active" : activeStep > 1 && "done"}>
          CPU
        </p>
      </MDBStep>
      <MDBStep form>
        <a>
          <MDBBtn
            onClick={() => activeStep > 2 && setActiveStep(2)}
            circle
            className={activeStep === 2 ? "active" : activeStep > 2 && "done"}
          >
            2
          </MDBBtn>
        </a>
        <p className={activeStep === 2 ? "active" : activeStep > 2 && "done"}>
          Motherboard
        </p>
      </MDBStep>
      <MDBStep form>
        <a>
          <MDBBtn
            onClick={() => activeStep > 3 && setActiveStep(3)}
            circle
            className={activeStep === 3 ? "active" : activeStep > 3 && "done"}
          >
            3
          </MDBBtn>
        </a>
        <p className={activeStep === 3 ? "active" : activeStep > 3 && "done"}>
          RAM
        </p>
      </MDBStep>
      <MDBStep form>
        <a>
          <MDBBtn
            onClick={() => activeStep > 4 && setActiveStep(4)}
            circle
            className={activeStep === 4 ? "active" : activeStep > 4 && "done"}
          >
            4
          </MDBBtn>
        </a>
        <p className={activeStep === 4 ? "active" : activeStep > 4 && "done"}>
          Storage
        </p>
      </MDBStep>
      <MDBStep form>
        <a>
          <MDBBtn
            onClick={() => activeStep > 5 && setActiveStep(5)}
            circle
            className={activeStep === 5 ? "active" : activeStep > 5 && "done"}
          >
            5
          </MDBBtn>
        </a>
        <p className={activeStep === 5 ? "active" : activeStep > 5 && "done"}>
          Video card
        </p>
      </MDBStep>
      <MDBStep form>
        <a>
          <MDBBtn
            onClick={() => activeStep > 6 && setActiveStep(6)}
            circle
            className={activeStep === 6 ? "active" : activeStep > 6 && "done"}
          >
            6
          </MDBBtn>
        </a>
        <p className={activeStep === 6 ? "active" : activeStep > 6 && "done"}>
          CPU Cooler
        </p>
      </MDBStep>
      <MDBStep form>
        <a>
          <MDBBtn
            onClick={() => activeStep > 7 && setActiveStep(7)}
            circle
            className={activeStep === 7 ? "active" : activeStep > 7 && "done"}
          >
            7
          </MDBBtn>
        </a>
        <p className={activeStep === 7 ? "active" : activeStep > 7 && "done"}>
          Case
        </p>
      </MDBStep>
      <MDBStep form>
        <a>
          <MDBBtn
            onClick={() => activeStep > 8 && setActiveStep(8)}
            circle
            className={activeStep === 8 ? "active" : activeStep > 8 && "done"}
          >
            8
          </MDBBtn>
        </a>
        <p className={activeStep === 8 ? "active" : activeStep > 8 && "done"}>
          Power supplies
        </p>
      </MDBStep>
      <MDBStep form>
        <a>
          <MDBBtn
            onClick={() => activeStep > 9 && setActiveStep(9)}
            circle
            className={activeStep === 9 ? "active" : activeStep > 9 && "done"}
          >
            9
          </MDBBtn>
        </a>
        <p className={activeStep === 9 ? "active" : activeStep > 9 && "done"}>
          Operating system
        </p>
      </MDBStep>
    </MDBStepper>
  );
};

export default PCBuilderSteps;
