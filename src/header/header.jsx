import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBIcon,
} from "mdbreact";
import Login from "./login/login";
import { LogoutUser } from "../API/logoutUser-API";

const Header = (props) => {
  const [toggleLogin, setToggleLogin] = useState(false);
  return (
    <MDBContainer className="header-container">
      <header>
        <MDBNavbar
          color="black"
          fixed="top"
          dark
          expand="md"
          scrolling
          transparent
        >
          <MDBNavbarBrand href="/">
            <MDBIcon icon="biohazard" size="2x" />
          </MDBNavbarBrand>
          {<MDBNavbarToggler />}
          <MDBCollapse navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              {props.token === null && (
                <MDBNavItem>
                  <MDBNavLink to="register">Register</MDBNavLink>
                </MDBNavItem>
              )}
              <MDBNavItem>
                {props.token ? (
                  <MDBNavLink
                    to="#"
                    onClick={() => {
                      LogoutUser(props.token, props.setToken);
                    }}
                  >
                    Logout
                  </MDBNavLink>
                ) : (
                  <MDBNavLink
                    to="#"
                    onClick={() => {
                      setToggleLogin(!toggleLogin);
                    }}
                  >
                    Login
                  </MDBNavLink>
                )}
              </MDBNavItem>
              {props.token && (
                <MDBNavItem>
                  <MDBNavLink to="/profile">Profile</MDBNavLink>
                </MDBNavItem>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
      <Login
        toggleLogin={toggleLogin}
        setToggleLogin={setToggleLogin}
        token={props.token}
        setToken={props.setToken}
      />
    </MDBContainer>
  );
};

export default Header;
