import React from "react";
import "./About.css";
import about from "../../images/about.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container>
        <h1 className="text-start">About Us</h1>
        <Row className="my-4">
          <Col>
            <img src={about} alt="about-img" className="w-100 about-img" />
          </Col>
          <Col className="text-start about-desc">
            <h5>Welcome to Edu Ghor.</h5>
            <h2>
              You can join with Edu Ghor and upgrade your skill for your
              <span> bright future.</span>
            </h2>
            <p>
              Lorem Ipsum has been the industr’s standard dummy text ever since
              unknown printer took galley type and scmbled make type specimen
              book. It has survived not only five centuries.
            </p>
            <Button className="about-btn">Start A Course</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
