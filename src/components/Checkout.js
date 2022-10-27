import React from "react";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { MDBInput } from "mdb-react-ui-kit";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const course = useLoaderData();
  const handleCheckOut = () => {
    toast.primary("Successfully enrolled");
  };
  return (
    <div>
      <h2 className="text-primary text-center mb-4">Check Out...</h2>
      <Row>
        <Col lg="6">
          <div className="ms-5 me-5">
            <img className="w-100 rounded-2" src={course.image_url} alt="" />
            <p className="bg-primary mt-2 p-1 text-white rounded-1">
              Item Name: {course.title}
            </p>
            <p className="bg-primary mt-2 p-1 text-white rounded-1">
              Course Duration: {course.instructor.course_duration}Months
            </p>
            <p className="bg-primary mt-2 p-1 text-white rounded-1">
              Total Seat: {course.total_seat}
            </p>
          </div>
        </Col>
        <Col lg="6">
          <div className="ms-5 me-5">
            <p className="bg-primary p-1 text-white fs-4 text-center rounded-1">
              Billing Name: {user?.displayName}
            </p>
            <MDBInput
              wrapperClass="mb-2 text-dark"
              name="pre_address"
              label="Present Address"
              id="formControlLg1"
              type="Text"
              size="md"
              placeholder="Enter your Present Address"
            />
            <MDBInput
              wrapperClass="mb-2 text-dark"
              name="phone"
              label="Phone Number"
              id="formControlLg3"
              type="number"
              size="md"
              placeholder="Enter your Phone Number"
            />
            <p className="bg-primary mt-2 p-2 text-white fs-5 text-end rounded-1 text-center">
              Total Fees: ${course.total_seat}
            </p>
            <button
              onClick={handleCheckOut}
              className="bg-success w-100 mt-2 p-2 text-white fs-5 rounded-1"
            >
              <Link className="text-decoration-none text-white" to="/courses">
                Enroll
              </Link>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;
