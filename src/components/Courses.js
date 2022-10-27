import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import ShortDetail from "./ShortDetail";
import { MDBRow } from "mdb-react-ui-kit";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <Container>
        <Row>
          <Col lg="3">
            <LeftSidebar></LeftSidebar>
          </Col>
          <Col lg="9">
            <h3>Preview of Our Courses</h3>
            <MDBRow style={{ rowGap: 20 }}>
              {courses.map((course) => (
                <ShortDetail key={course._id} course={course}></ShortDetail>
              ))}
            </MDBRow>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
