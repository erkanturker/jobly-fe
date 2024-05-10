import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = ({ onLogout, currentUser }) => {
  // Determine if the user is logged in
  const isLoggedIn = currentUser !== null;
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container fluid className="px-2">
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="col-auto"
          activeclassname="active"
        >
          Jobly
        </Navbar.Brand>

        <Nav className="col-auto">
          {!isLoggedIn && (
            <>
              <Nav.Link as={NavLink} to="/login" activeclassname="active">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup" activeclassname="active">
                Sign Up
              </Nav.Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Nav.Link as={NavLink} to="/companies" activeclassname="active">
                Companies
              </Nav.Link>
              <Nav.Link as={NavLink} to="/jobs" activeclassname="active">
                Jobs
              </Nav.Link>
              <Nav.Link as={NavLink} to="/profile" activeclassname="active">
                Profile
              </Nav.Link>
              <Nav.Link
                onClick={onLogout}
                as={NavLink}
                to="/"
                activeclassname="active"
              >
                Log out {currentUser.username}
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
