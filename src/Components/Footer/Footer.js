import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="text-start">
            <p>
              Copyright © 2021 | <span>Edu Ghor</span> | Privacy Policy |
              Support
            </p>
          </Col>
          <Col className="text-end">
            <p>Designed by MD. Maruf</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
