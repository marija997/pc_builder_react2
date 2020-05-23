import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBModal,
  MDBModalHeader,
  MDBInput,
  MDBIcon,
} from "mdbreact";
import { LoginUser } from "./functions";

const Login = ({ toggleLogin, setToggleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const input = {
    username: username,
    password: password,
  };
  return (
    <MDBModal isOpen={toggleLogin} toggle={() => setToggleLogin(!toggleLogin)}>
      <MDBModalHeader>Login</MDBModalHeader>
      <MDBCard>
        <MDBCardBody>
          <MDBCardText>
            <MDBInput icon="user" type="text" label="username" />
            <MDBInput icon="lock" type="password" label="password" />
          </MDBCardText>
          <MDBBtn href="#" color="elegant" onClick={() => LoginUser(input)}>
            Login
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBModal>
  );
};

export default Login;
