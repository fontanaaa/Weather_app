import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Weather App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/favorites"}>
              Favorites
            </Nav.Link>
            <Nav.Link as={Link} to={"/login"}>
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavBar;
