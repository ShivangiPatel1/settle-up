import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavigationBar.css"

const NavigationBar = () => {
  return (
    <div className="Navbar-container">
     <div>
     <Navbar className="navbar-style" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""y
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          Settle Up
          </Navbar.Brand>
          <Nav>
          <NavDropdown title="Shivangi" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Your Account</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Create a group</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Fairness Calculators</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Contact Support</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Log out</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
     </div>
  );
};

export default NavigationBar;
