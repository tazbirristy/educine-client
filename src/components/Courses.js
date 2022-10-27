import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import ShortDetail from "./ShortDetail";

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
            <Row>
              {courses.map((course) => (
                <ShortDetail key={course._id} course={course}></ShortDetail>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
