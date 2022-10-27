import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const ShortDetail = ({ course }) => {
  const { _id, thumbnail_url, instructor, title, details } = course;

  return (
    <div>
      <MDBCol sm="12">
        <MDBCard className="border-0">
          <MDBCardBody>
            <MDBCardTitle className="fw-bold">{title}</MDBCardTitle>
            <img
              className="w-100 rounded-3"
              src={thumbnail_url}
              alt="Courses"
            />
            <MDBCardText>
              {details.length > 120 ? (
                <>{details.slice(0, 120) + "..."}</>
              ) : (
                details
              )}
            </MDBCardText>
            <p className="mt-2 mb-2 text-primary">
              Course Duration: {instructor?.course_duration}
            </p>
            <button
              color="primary"
              className="mb-3 w-100 bg-primary rounded-2 p-2 text-white border-0"
            >
              <Link
                className="text-decoration-none text-white"
                to={`/courses/${_id}`}
              >
                Course Details
              </Link>
            </button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default ShortDetail;
