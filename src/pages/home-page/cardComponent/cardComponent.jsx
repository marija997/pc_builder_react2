import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const CardExample = ({ image, button, disabled }) => {
  return (
    <MDBCol md="3" className="card-wrapper">
      <MDBCard className="card-component">
        <MDBCardImage className="img-fluid" src={image} waves />
        <MDBCardBody className="card-body-content">
          <div>
            <MDBBtn color="dark-green" href={button.ref} disabled={disabled}>
              {button.text}
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CardExample;
