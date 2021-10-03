import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import bannerImg from "../../images/ban-img.png";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row className="text-start ">
          <Col className="mt-5 pt-4">
            <h5>Start your favourite course</h5>
            <h2 className="w-75">
              Now learning from anywhere, and build your
              <span> bright career.</span>
            </h2>
            <p className="my-4 py-2 w-75 bnr-dtls">
              It has survived not only five centuries but also the leap into
              electronic typesetting.
            </p>
            <Button className="bnr-btn">Start A Course</Button>
          </Col>
          <Col className="mt-3">
            <img className="w-100" src={bannerImg} alt="Banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
