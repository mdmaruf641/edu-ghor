import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="fs-4 fw-bold logo" href="#home">
            Edu.<span>Ghor</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fs-5 px-4 menu">Home</Nav.Link>
              <Nav.Link className="fs-5 px-4 menu">About</Nav.Link>
              <Nav.Link className="fs-5 px-4 menu">Services</Nav.Link>
              <Nav.Link className="fs-5 px-4 menu">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
