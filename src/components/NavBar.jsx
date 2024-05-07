import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar>
      <Container fluid className="px-0 m-1">
        <Navbar.Brand href="/" className="col-auto">
          Jobly
        </Navbar.Brand>
        <Nav className="col-auto">
          <Nav.Link href="/companies">Companies</Nav.Link>
          <Nav.Link href="/jobs">Jobs</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
