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
import Cookies from "js-cookie";

const Login = ({ toggleLogin, setToggleLogin, setAut }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const input = {
    username: username,
    password: password,
  };

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
          {showAlert && (
            <MDBAlert color="danger" icon="user">
              {" "}
              Login failed!{" "}
            </MDBAlert>
          )}
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
              // if (LoginUser(input, setAut).status === 200)
              //   setToggleLogin(!toggleLogin);
              // else setShowAlert(true);
              LoginUser(input, setAut);
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
