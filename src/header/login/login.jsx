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
  MDBAlert,
} from "mdbreact";
import { LoginUser } from "../../API/loginUser-API";

const Login = ({ toggleLogin, setToggleLogin, token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const input = {
    username: username,
    password: password,
  };
  console.log(token);

  return (
    <MDBModal isOpen={toggleLogin} toggle={() => setToggleLogin(!toggleLogin)}>
      <MDBModalHeader
        isOpen={toggleLogin}
        toggle={() => setToggleLogin(!toggleLogin)}
      >
        Login
      </MDBModalHeader>
      <MDBCard>
        <MDBCardBody>
          <MDBCardText>
            <MDBInput
              icon="user"
              type="text"
              label="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <MDBInput
              icon="lock"
              type="password"
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </MDBCardText>
          <MDBBtn
            color="elegant"
            onClick={() => {
              LoginUser(input, setToken);
              setToggleLogin(!toggleLogin);
            }}
          >
            Login
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBModal>
  );
};

export default Login;
