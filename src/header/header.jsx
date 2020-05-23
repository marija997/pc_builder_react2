import React, { useState } from "react";
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

const Header = () => {
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
              <MDBNavItem>
                <MDBNavLink to="register">Register</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" onClick={() => setToggleLogin(!toggleLogin)}>
                  Login
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">Profile</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
      <Login toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
    </MDBContainer>
  );
};

export default Header;
