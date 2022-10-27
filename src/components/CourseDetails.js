import React from "react";
import Pdf from "react-to-pdf";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
const ref = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [14, 10],
};

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { title, image_url, details, instructor, total_seat, _id } =
    courseDetails;
  return (
    <div>
      <MDBCard ref={ref}>
        <MDBCardHeader className="d-flex justify-content-between">
          <h3 className="text-primary">{title}</h3>
          <>
            <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
              {({ toPdf }) => (
                <button onClick={toPdf} className="border-0 fw-bold">
                  Download PDF
                  <FaDownload className="fs-3 text-primary" />
                </button>
              )}
            </Pdf>
          </>
        </MDBCardHeader>
        <MDBCardBody>
          <img className="w-100 rounded-1" src={image_url} alt="" />
          <div className="d-flex justify-content-between">
            <MDBCardTitle className="mb-2 mt-2">
              Advisor: {instructor.name}
            </MDBCardTitle>
            <div className="d-flex">
              <p className="me-4 text-primary">Total Seat: {total_seat}</p>
              <p className="me-4 text-primary">
                Course Duration: {instructor.course_duration}
              </p>
            </div>
          </div>
          <MDBCardText>{details}</MDBCardText>
          <button
            href="#"
            className="mb-4 bg-primary rounded-2 p-2 text-white border-0"
          >
            <Link
              className="text-decoration-none text-white"
              to={`/premium/${_id}`}
            >
              Get Premium Access
            </Link>
          </button>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default CourseDetails;
