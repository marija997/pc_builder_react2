import React, { useState } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import RegisterPage from "./pages/register-page/register-page";
import Header from "./header/header";
import PCBuilderPage from "./pages/pc-builder-page/pc-builder-page";
import Profile from "./pages/profile-page/profile";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken"));

  return (
    <Router>
      <MDBContainer className="app-container">
        <Header token={token} setToken={setToken} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <HomePage token={token} setToken={setToken} />}
          />
          <Route
            path="/register"
            exact
            component={() => <RegisterPage token={token} setToken={setToken} />}
          />
          <Route
            path="/pc-builder"
            exact
            component={() => (
              <PCBuilderPage token={token} setToken={setToken} />
            )}
          />
          <Route
            path="/profile"
            exact
            component={() => <Profile token={token} setToken={setToken} />}
          />
        </Switch>
      </MDBContainer>
    </Router>
  );
};

export default App;
