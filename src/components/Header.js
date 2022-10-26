import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-white text-decoration-none fw-bolder">
            Educine
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="text-white me-3 text-decoration-none" to="/">
              Home
            </Link>
            <Link
              className="text-white me-3 text-decoration-none"
              to="/courses"
            >
              Courses
            </Link>
            <Link className="text-white me-3 text-decoration-none" to="/blog">
              Blog
            </Link>
            <Link className="text-white me-3 text-decoration-none" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
