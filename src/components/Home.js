import React from "react";
import Carousel from "react-bootstrap/Carousel";
import education1 from "../assests/education1.jpg";
import education2 from "../assests/education2.png";
import education3 from "../assests/education3.jpg";

const Home = () => {
  return (
    <div className="mb-3 mt-3">
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
          <img className="d-block w-100" src={education2} alt="Second slide" />

          <Carousel.Caption className="text-primary">
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

          <Carousel.Caption className="text-primary">
            <h3>Learn online from EduCine</h3>
            <p>
              Expand your skills and engage with a global network of learners
              through our flexible, online courses.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
