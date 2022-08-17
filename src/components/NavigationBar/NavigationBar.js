import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { CustomNavbar ,Logo ,NavbarContainer } from "./Navigation.element.js";
import logo from "../../logo.png"

const NavigationBar = () => {
  return (
    <div>
      
        <CustomNavbar  fixed="top" variant="dark">
          <NavbarContainer>
            <Logo href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Settle Up
            </Logo>
            <Nav>
              <NavDropdown title="Shivangi" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Your Account
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Create a group
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Fairness Calculators
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Contact Support
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarContainer>
        </CustomNavbar>
      
    </div>
  );
};

export default NavigationBar;
