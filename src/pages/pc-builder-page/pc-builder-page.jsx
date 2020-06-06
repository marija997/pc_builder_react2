import React, { useState } from "react";
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
import ComponentsList from "./components-list/components-list";
import PCBuilderSteps from "./pc-builder-steps/pc-builder-steps";

const PCBuilderPage = (props) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <MDBContainer className="pc-builder-page">
      <MDBRow>
        <MDBCol xl="12">
          <h2 className="text-center font-weight-bold pt-4 pb-5">PC Builder</h2>
          <PCBuilderSteps
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <form action="" method="post">
            <MDBRow>
              <MDBCol md="12">
                <ComponentsList
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  token={props.token}
                  setToken={props.setToken}
                />
              </MDBCol>
            </MDBRow>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PCBuilderPage;
