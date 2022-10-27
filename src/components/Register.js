import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MDBInput, MDBRow, MDBIcon } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { AuthContext } from "./../contexts/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        toast.success(
          "Successfully account created!!! Check your email, and verify before login..."
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, { autoClose: 500 });
      });
  };
  // profile update
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-50 justify-content-center mx-auto mb-4">
      <h1 className="text-center text-primary mt-3">Please Register!!!</h1>
      <form onSubmit={handleSubmit}>
        <MDBRow className="mb-4"></MDBRow>
        <MDBInput
          className="mb-4"
          type="text"
          id="form3Example2"
          label="Name"
          name="name"
          placeholder="Enter Your Full Name"
        />
        <MDBInput
          className="mb-4"
          type="text"
          id="form3Example2"
          label="Photo URL"
          name="photoURL"
          placeholder="Enter Your Photo URL"
        />
        <MDBInput
          className="mb-4"
          type="email"
          id="form3Example3"
          label="Email address"
          name="email"
          placeholder="Enter Your Email"
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form3Example4"
          label="Password"
          name="password"
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
