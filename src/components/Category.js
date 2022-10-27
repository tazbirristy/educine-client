import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import ShortDetail from "./ShortDetail";
import { MDBRow } from "mdb-react-ui-kit";

const Category = () => {
  const categoryCourses = useLoaderData();
  return (
    <div>
      <Container>
        <Row>
          <Col lg="3">
            <LeftSidebar></LeftSidebar>
          </Col>
          <Col lg="9">
            <h2 className="text-center text-warning fw-bold">
              All Courses Of {categoryCourses[0].category_name}
            </h2>
            <MDBRow style={{ rowGap: 20 }} className="mb-5">
              {categoryCourses.map((course) => (
                <ShortDetail key={course._id} course={course}></ShortDetail>
              ))}
            </MDBRow>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
