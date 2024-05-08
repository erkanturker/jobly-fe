import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";

const NavBar = ({ onLogout }) => {
  const currentUser = useContext(UserContext);
  let isLoggedIn;
  if (currentUser === null) {
    isLoggedIn = false;
  } else {
    isLoggedIn = true;
  }

  return (
    <Navbar>
      <Container fluid className="px-0 m-1">
        <Navbar.Brand as={NavLink} to="/" className="col-auto">
          Jobly
        </Navbar.Brand>

        <Nav className="col-auto">
          {!isLoggedIn && (
            <Nav.Link as={NavLink} to="/login" activeclassname="active">
              Login
            </Nav.Link>
          )}
          {isLoggedIn && (
            <>
              <Nav.Link as={NavLink} to="/companies" activeclassname="active">
                Companies
              </Nav.Link>
              <Nav.Link as={NavLink} to="/jobs" activeclassname="active">
                Jobs
              </Nav.Link>
              <Nav.Link
                onClick={onLogout}
                as={NavLink}
                to="/"
                activeclassname="active"
              >
                Logout
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
