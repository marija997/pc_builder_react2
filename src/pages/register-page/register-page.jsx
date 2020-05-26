import React, { useState } from "react";
import { MDBContainer, MDBInput, MDBCol, MDBBtn, MDBAlert } from "mdbreact";
import { RegisterSubmit } from "../../API/registerUser-API";
import { Redirect } from "react-router-dom";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const input = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
    username: userName,
  };
  const [showAlert, setShowAlert] = useState(false);
  return (
    <MDBContainer className="register-page-wrapper">
      <h1>User registration</h1>
      {showAlert && <MDBAlert color="danger"> Registration failed! </MDBAlert>}
      <form className="register-form">
        <MDBCol lg="6">
          <MDBInput
            type="text"
            label="First name"
            value={firstName}
            icon="user"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <MDBInput
            type="email"
            label="Email"
            value={email}
            icon="envelope"
            onChange={(event) => setEmail(event.target.value)}
          />
          <MDBInput
            type="text"
            label="Username"
            value={userName}
            icon="at"
            onChange={(event) => setUserName(event.target.value)}
          />
        </MDBCol>
        <MDBCol lg="6">
          <MDBInput
            type="text"
            label="Last name"
            value={lastName}
            icon="user"
            onChange={(event) => setLastName(event.target.value)}
          />
          <MDBInput
            type="password"
            label="Password"
            value={password}
            icon="lock"
            onChange={(event) => setPassword(event.target.value)}
          />
          <MDBInput
            type="password"
            label=" Confirm password"
            value={confirmPassword}
            icon="lock"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </MDBCol>
      </form>
      <MDBBtn
        color="elegant"
        onClick={() => {
          if (RegisterSubmit(input).status === 200)
            return <Redirect to="/profile" />;
          else setShowAlert(true);
        }}
      >
        Submit
      </MDBBtn>
    </MDBContainer>
  );
};

export default RegisterPage;
