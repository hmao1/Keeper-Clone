import React, { useState } from "react";

//bootstrap
import SignUp from "./components/SignUp";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
//react route
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";

import ProtectedRoute from "./components/ProtectedRoute";
import Main from "./components/Main";

//authentication context
import { useAuth } from "./contexts/AuthContext";

//react bootstrap icon
import { FaUserCircle } from "react-icons/fa";

//need to fix the inline style(minWidth:450px ) in signUp and login page

function App(props) {
  const { isLogin } = useAuth();
  return (
    <div className="App">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Router>
          {isLogin ? (
            <Navbar
              bg="light"
              variant="dark"
              expand="lg"
              className="navbar navbar-expand-lg navbar-dark fixed-top"
            >
              <Container>
                <span>
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                    alt="logo"
                  />
                  <Navbar.Brand style={{ color: "black" }}>
                    Keep Clone
                  </Navbar.Brand>
                </span>

                <span style={{ fontSize: "1.5rem" }}>Welcome!</span>
                <span>
                  <NavDropdown
                    title=<FaUserCircle />
                    style={{ fontSize: "1.5rem" }}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>Log out</NavDropdown.Item>
                  </NavDropdown>
                </span>
              </Container>
            </Navbar>
          ) : (
            <Navbar
              bg="light"
              variant="dark"
              expand="lg"
              className="navbar navbar-expand-lg navbar-dark fixed-top"
            >
              <Container>
                <span>
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                    alt="logo"
                  />
                  <Navbar.Brand style={{ color: "black" }}>
                    Keep Clone
                  </Navbar.Brand>
                </span>

                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo02"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={"/signin"}
                        style={{ color: "black" }}
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={"/signup"}
                        style={{ color: "black" }}
                      >
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </div>
              </Container>
            </Navbar>
          )}

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signin" component={Login} />
                <Route path="/signup" component={SignUp} />
                <ProtectedRoute exact path="/main">
                  <Main />
                </ProtectedRoute>
              </Switch>
            </div>
          </div>
        </Router>
      </Container>
    </div>
  );
}

export default App;
