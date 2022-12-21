import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import education1 from "../assests/education1.jpg";
import education2 from "../assests/education2.jpg";
import education3 from "../assests/education3.jpg";
import p1 from "../assests/p1.jpg";
import p2 from "../assests/p2.jpg";
import p3 from "../assests/p3.jpg";

const Home = () => {
  return (
    <div className="mb-3 mt-3">
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={education1} alt="First slide" />
            <Carousel.Caption className="text-white">
              <h3>Learn online from EduCine</h3>
              <p>
                Expand your skills and engage with a global network of learners
                through our flexible, online courses.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={education2}
              alt="Second slide"
            />

            <Carousel.Caption className="text-dark">
              <h3>Learn online from EduCine</h3>
              <p>
                {" "}
                Expand your skills and engage with a global network of learners
                through our flexible, online courses.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={education3} alt="Third slide" />

            <Carousel.Caption className="text-white">
              <h3>Learn online from EduCine</h3>
              <p>
                Expand your skills and engage with a global network of learners
                through our flexible, online courses.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <div className="mb-5 mt-5">
          <h1 className="text-center">Meet Our Instructors</h1>
        </div>
        <div>
          <Row data-aos="slide-up" data-aos-duration="2000">
            <Col lg="4" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={p1} />
                <Card.Body className="bg-primary">
                  <Card.Title className="text-white">Instructor</Card.Title>
                  <Card.Text className="text-white">
                    Course Title: Web Development
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={p2} />
                <Card.Body className="bg-primary">
                  <Card.Title className="text-white">Instructor</Card.Title>
                  <Card.Text className="text-white">
                    Course Title: Web Design
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={p3} />
                <Card.Body className="bg-primary">
                  <Card.Title className="text-white">Instructor</Card.Title>
                  <Card.Text className="text-white">
                    Course Title: Basic English
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
