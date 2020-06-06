import React from "react";
import { MDBContainer, MDBView, MDBMask, MDBRow } from "mdbreact";
import CardComponent from "./cardComponent/cardComponent";

const HomePage = (props) => {
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
            <CardComponent
              image="./images/register-card-image.jpg"
              button={
                props.token
                  ? { text: "profile", ref: "/profile" }
                  : { text: "register", ref: "/register" }
              }
            />
            <CardComponent
              image="./images/build-pc-card-image.jpg"
              button={{ text: "build your pc", ref: "/pc-builder" }}
            />
            <CardComponent
              image="./images/built-pc-card-image.jpg"
              button={{ text: "favourites", ref: "/register" }}
            />
          </MDBRow>
        </MDBMask>
      </MDBView>
    </MDBContainer>
  );
};

export default HomePage;
