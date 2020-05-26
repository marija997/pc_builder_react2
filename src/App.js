import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import RegisterPage from "./pages/register-page/register-page";
import Header from "./header/header";
import PCBuilderPage from "./pages/pc-builder-page/pc-builder-page";

class App extends Component {
  render() {
    return (
      <Router>
        <MDBContainer className="app-container">
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/pc-builder" exact component={PCBuilderPage} />
          </Switch>
        </MDBContainer>
      </Router>
    );
  }
}

export default App;
