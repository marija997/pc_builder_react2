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
            <MDBInput
              icon="user"
              type="text"
              label="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <MDBInput
              icon="lock"
              type="password"
              label="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </MDBCardText>
          <MDBBtn color="elegant" onClick={() => LoginUser(input)}>
            Login
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBModal>
  );
};

export default Login;
