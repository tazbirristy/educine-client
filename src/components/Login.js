import React from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className="w-50 justify-content-center mx-auto">
      <h1 className="text-center text-primary mt-3">Please LogIn!!!</h1>
      <form className="m-3">
        <MDBInput
          className="mb-4"
          type="email"
          id="form2Example1"
          label="Email address"
          placeholder="Enter Your Email"
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form2Example2"
          label="Password"
          placeholder="Enter Your Password"
        />

        <MDBRow className="mb-4">
          <MDBCol>
            <a href="#!">Forgot password?</a>
          </MDBCol>
        </MDBRow>

        <Button type="submit" className="mb-4 w-100" block>
          Sign in
        </Button>

        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
          <p>or SignIn with:</p>

          <button floating className="mx-1">
            <MDBIcon fab icon="google" />
          </button>

          <button floating className="mx-1">
            <MDBIcon fab icon="github" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
