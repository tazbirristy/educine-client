import React, { useContext, useState } from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "./../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { googleProviderLogin, githubProviderLogin, signIn, resetPassword } =
    useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  // email & password
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("LoggedIn successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    googleProviderLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("LoggedIn successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // github Sign in
  const handleGithubSignIn = () => {
    githubProviderLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("LoggedIn successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  // forget password
  const handleResetPassword = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success("Please check your email to Reset Password");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="w-50 justify-content-center mx-auto">
      <h1 className="text-center text-primary mt-3">Please LogIn!!!</h1>
      <form onSubmit={handleLogIn} className="m-3">
        <MDBInput
          onBlur={(event) => setUserEmail(event.target.value)}
          className="mb-4"
          type="email"
          id="form2Example1"
          name="email"
          placeholder="Enter Your Email"
          required
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form2Example2"
          name="password"
          placeholder="Enter Your Password"
          required
        />

        <MDBRow className="mb-4">
          <MDBCol>
            <button
              className="bg-primary rounded-2 text-white"
              onClick={handleResetPassword}
            >
              Forgot password?
            </button>
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

          <button
            onClick={handleGoogleSignIn}
            floating
            className="mx-1 bg-primary"
          >
            <MDBIcon fab icon="google" />
          </button>

          <button
            onClick={handleGithubSignIn}
            floating
            className="mx-1 bg-primary"
          >
            <MDBIcon fab icon="github" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
