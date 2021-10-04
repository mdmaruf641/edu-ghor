import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // menu active style
  const activeStyle = {
    color: "#319157",
  };

  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="fs-4 fw-bold logo">
            Edu.<span>Ghor</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                activeStyle={activeStyle}
                to="/home"
                className="fs-5 mx-3 menu"
              >
                Home
              </NavLink>
              <NavLink
                activeStyle={activeStyle}
                to="/about"
                className="fs-5 mx-3 menu"
              >
                About
              </NavLink>
              <NavLink
                activeStyle={activeStyle}
                to="/services"
                className="fs-5 mx-3 menu"
              >
                Services
              </NavLink>
              <NavLink
                activeStyle={activeStyle}
                to="/contact"
                className="fs-5 mx-3 menu"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
