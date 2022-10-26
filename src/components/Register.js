import React from "react";
import { Link } from "react-router-dom";
import { MDBInput, MDBCol, MDBRow, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

const Register = () => {
  return (
    <div className="w-50 justify-content-center mx-auto mb-4">
      <h1 className="text-center text-primary mt-3">Please Register!!!</h1>
      <form>
        <MDBRow className="mb-4"></MDBRow>
        <MDBInput
          className="mb-4"
          type="text"
          id="form3Example2"
          label="Name"
          placeholder="Enter Your Full Name"
        />
        <MDBInput
          className="mb-4"
          type="email"
          id="form3Example3"
          label="Email address"
          placeholder="Enter Your Email"
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form3Example4"
          label="Password"
          placeholder="Enter Your Password"
        />

        <Button type="submit" className="mb-4 w-100" block>
          Register
        </Button>

        <div className="text-center">
          <p>
            Already a member? <Link to="/login">LogIn</Link>
          </p>
          <p>or sign up with:</p>

          <Button floating className="mx-1">
            <MDBIcon fab icon="google" />
          </Button>

          <Button floating className="mx-1">
            <MDBIcon fab icon="github" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
