import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBInput,
} from "mdbreact";
import { EditUserInfo } from "../../../API/editUserInfo-API";

const EditProfile = ({ toggleEditModal, setToggleEditModal, token }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const input = {
    first_name: firstName,
    last_name: lastName,
    email: email,
  };

  return (
    <MDBModal
      isOpen={toggleEditModal}
      toggle={() => setToggleEditModal(!toggleEditModal)}
    >
      <MDBModalHeader
        isOpen={toggleEditModal}
        toggle={() => setToggleEditModal(!toggleEditModal)}
      >
        Edit profile
      </MDBModalHeader>
      <MDBCard>
        <MDBCardBody>
          <MDBCardText>
            <MDBInput
              icon="user"
              type="text"
              label="First name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <MDBInput
              icon="user"
              type="text"
              label="Last name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <MDBInput
              icon="envelope"
              type="text"
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </MDBCardText>
          <MDBBtn
            color="elegant"
            onClick={() => {
              EditUserInfo(input, token);
              setToggleEditModal(!toggleEditModal);
            }}
          >
            Save
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBModal>
  );
};

export default EditProfile;
