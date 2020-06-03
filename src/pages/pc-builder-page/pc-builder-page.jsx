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

const PCBuilderPage = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <MDBContainer className="pc-builder-page">
      <MDBRow>
        <MDBCol xl="12">
          <h2 className="text-center font-weight-bold pt-4 pb-5">
            <strong>PC Builder</strong>
          </h2>
          <PCBuilderSteps activeStep={activeStep} />
          <form action="" method="post">
            <MDBRow>
              <MDBCol md="12">
                <MDBRow>
                  <MDBCol>
                    <MDBBtn className="float-left"> Previous </MDBBtn>
                  </MDBCol>
                  <MDBCol>
                    <MDBBtn
                      className="float-right"
                      t
                      // onClick={this.handleNextPrevClick(1)(2)}
                    >
                      next
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                <ComponentsList
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
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
