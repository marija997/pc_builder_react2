import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBRow,
  MDBCol,
  MDBView,
  MDBMask,
  MDBIcon,
} from "mdbreact";
const FinalBuild = ({
  toggleFinalBuildModal,
  setToggleFinalBuildModal,
  finalBuild,
}) => {
  console.log(finalBuild);

  return (
    <MDBModal
      isOpen={toggleFinalBuildModal}
      toggle={() => setToggleFinalBuildModal(!toggleFinalBuildModal)}
      size="lg"
      className="final-build-modal"
    >
      <MDBModalHeader
        isOpen={toggleFinalBuildModal}
        toggle={() => setToggleFinalBuildModal(!toggleFinalBuildModal)}
      >
        Your final build <MDBIcon icon="cog" spin size="lg" fixed />
        <span className="sr-only">Loading...</span>
      </MDBModalHeader>
      <MDBModalBody>
        <MDBRow lg="12">
          <MDBCol lg="6" className="case-wrapper">
            <MDBView hover zoom>
              <img src={finalBuild && finalBuild.case.image} />
              <MDBMask className="flex-center" overlay="black-strong">
                <h4>{finalBuild && finalBuild.case.name}</h4>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol lg="6" className="final-build-components-info">
            <div className="pc-component-wrapper">
              <h4>Processor: </h4> <h6>{finalBuild && finalBuild.cpu}</h6>
            </div>
            <div className="pc-component-wrapper">
              <h4>Motherboard: </h4>{" "}
              <h6>{finalBuild && finalBuild.motherboard}</h6>
            </div>
            <div className="pc-component-wrapper">
              <h4>RAM: </h4> <h6>{finalBuild && finalBuild.ram}</h6>
            </div>
            <div className="pc-component-wrapper">
              <h4>Storage: </h4> <h6>{finalBuild && finalBuild.storage}</h6>
            </div>
            <div className="pc-component-wrapper">
              <h4>Video card: </h4>{" "}
              <h6>{finalBuild && finalBuild.video_card}</h6>
            </div>
            <div className="pc-component-wrapper">
              <h4>CPU Cooler: </h4>{" "}
              <h6>{finalBuild && finalBuild.cpu_cooler}</h6>
            </div>
            <div className="pc-component-wrapper">
              <h4>Power supply: </h4>{" "}
              <h6>{finalBuild && finalBuild.power_supply}</h6>
            </div>
            <div className="pc-component-wrapper">
              <h4>Operating system: </h4>{" "}
              <h6>{finalBuild && finalBuild.operating_system}</h6>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBModalBody>
    </MDBModal>
  );
};

export default FinalBuild;
