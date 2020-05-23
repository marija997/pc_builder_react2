import React from "react";
import { MDBContainer, MDBView, MDBMask, MDBRow } from "mdbreact";
import CardComponent from "./cardComponent/cardComponent";

const HomePage = () => {
  return (
    <MDBContainer className="home-page-container">
      {/* Home PAGE */}
      <MDBView src="./images/home-page-banner-image.jpg">
        <MDBMask
          overlay="black-strong"
          className="flex-center flex-column text-white text-center"
        >
          <MDBRow md="12" className="cards-wrapper-row">
            <div className="background-color"></div>
            <CardComponent image="./images/register-card-image.jpg" />
            <CardComponent image="./images/build-pc-card-image.jpg" />
            <CardComponent image="./images/built-pc-card-image.jpg" />
          </MDBRow>
        </MDBMask>
      </MDBView>
    </MDBContainer>
  );
};

export default HomePage;
