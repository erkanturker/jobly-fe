import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar>
      <Container fluid className="px-0 m-1">
        <Navbar.Brand as={NavLink} to="/" className="col-auto">
          Jobly
        </Navbar.Brand>
        <Nav className="col-auto">
          <Nav.Link as={NavLink} to="/companies" activeclassname="active">
            Companies
          </Nav.Link>
          <Nav.Link as={NavLink} to="/jobs" activeclassname="active">
            Jobs
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
