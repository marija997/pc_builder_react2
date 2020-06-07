import React from "react";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBCardTitle,
  MDBBtn,
  MDBCol,
  MDBView,
  MDBMask,
  MDBIcon,
} from "mdbreact";
import { RemovePCBuild } from "../../../../API/removePCBuild-API";

const PCBuild = ({ build, token }) => {
  console.log(build);

  return (
    <div className="pc-build-component">
      <MDBCard style={{ width: "27rem" }} className="build-card">
        <MDBView hover zoom>
          <MDBCardImage
            className="img-fluid"
            src={
              build.caseImage
                ? build.caseImage
                : "https://www.geographicexperiences.com/wp-content/uploads/revslider/home5/placeholder-1200x500.png"
            }
            waves
          />

          <MDBMask className="flex-center" overlay="black-strong">
            <MDBRow lg="12" className="build-info-wrapper">
              <MDBCol lg="6" className="info-left">
                <p>
                  Processor: <label>{build.cpu}</label>
                </p>
                <p>
                  Motherboard: <label>{build.motherboard}</label>
                </p>
                <p>
                  RAM: <label>{build.ram}</label>
                </p>
                <p>
                  Storage: <label>{build.storage}</label>
                </p>
              </MDBCol>
              <MDBCol lg="6" className="info-right">
                <p>
                  CPU Cooler:
                  <label>{build.cpu_cooler}</label>
                </p>
                <p>
                  Video Card: <label>{build.video_card}</label>
                </p>
                <p>
                  Power Supply: <label>{build.power_supply}</label>
                </p>
                <p>
                  Operating System: <label>{build.operating_system}</label>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBMask>
        </MDBView>
        <MDBBtn
          href="/profile"
          color="elegant"
          onClick={() => {
            RemovePCBuild(token, build.id);
          }}
        >
          <MDBIcon icon="trash" size="2x" />
        </MDBBtn>
      </MDBCard>
    </div>
  );
};

export default PCBuild;
