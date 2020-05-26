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
import Cookies from "js-cookie";
import { user } from "../state/state";
import { LogoutUser } from "../API/logoutUser-API";
const Header = () => {
  const [aut, setAut] = useState(Cookies.get("userLogin"));
  const [toggleLogin, setToggleLogin] = useState(false);
  console.log(aut);
  useEffect(() => {}, [aut]);
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
              <MDBNavItem>
                <MDBNavLink to="register">Register</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                {aut === "true" ? (
                  <MDBNavLink
                    to="#"
                    onClick={() => {
                      LogoutUser(setAut);
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
              {aut === "true" && (
                <MDBNavItem>
                  <MDBNavLink to="#">Profile</MDBNavLink>
                </MDBNavItem>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
      <Login
        toggleLogin={toggleLogin}
        setToggleLogin={setToggleLogin}
        setAut={setAut}
      />
    </MDBContainer>
  );
};

export default Header;
