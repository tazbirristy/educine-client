import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import toast from "react-hot-toast";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import educine from "../../src/educine.png";
import { AuthContext } from "./../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [navToggle, setnavToggle] = useState(false);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LoggedOut Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  const handleToggoleBtn = () => {
    setnavToggle(!navToggle);
  };
  return (
    <Navbar bg={`${navToggle === true ? "dark" : "primary"}`} expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-white text-decoration-none fw-bolder">
            <img src={educine} alt="" /> Educine
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
            <Link className="text-white me-3 text-decoration-none" to="/faq">
              FAQ
            </Link>
            <Link className="text-white me-3 text-decoration-none" to="/blog">
              Blog
            </Link>
            <>
              {user?.uid ? (
                <>
                  <Link to="/">
                    <button
                      onClick={handleLogOut}
                      className="border-0 text-white ms-1 bg-transparent"
                    >
                      logout
                    </button>
                  </Link>
                  <>
                    {user?.photoURL ? (
                      <Image
                        roundedCircle
                        title={user.displayName}
                        referrerPolicy="no-referrer"
                        src={user?.photoURL}
                        style={{
                          height: "30px",
                          width: "30px",
                          marginLeft: "10px",
                        }}
                      ></Image>
                    ) : (
                      <FaUserGraduate style={{ fontSize: "30px" }} />
                    )}
                  </>
                </>
              ) : (
                <>
                  <Link className="text-decoration-none text-white" to="/login">
                    Login
                  </Link>
                </>
              )}
            </>
            <button
              onClick={handleToggoleBtn}
              className={`border-0 rounded ms-4 text-white p-2 ${
                navToggle === false ? "bg-dark" : "bg-primary"
              }`}
            >
              Toggle
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
