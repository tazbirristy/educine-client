import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "black" }}
      >
        <MDBContainer className="pt-4">
          <section className="mb-4">
            <Button
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fab fa-facebook-f" />
            </Button>

            <Button
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-twitter" />
            </Button>

            <Button
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-google" />
            </Button>

            <Button
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-instagram" />
            </Button>

            <Button
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-linkedin" />
            </Button>

            <Button
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-github" />
            </Button>
          </section>
        </MDBContainer>

        <div
          className="text-center text-white p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright: {""}
          <Link className="text-white" to="https://mdbootstrap.com/">
            educine.com
          </Link>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
