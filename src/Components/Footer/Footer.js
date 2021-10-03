import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <p>
              Copyright © 2021 | <span>Edu Ghor</span> | Privacy Policy |
              Support
            </p>
            {/* <p>
              Copyright © 2021 <span>Edu Ghor</span> |<a> Privacy Policy </a> |
              <a> FAQ </a> |<a> Support</a>
            </p> */}
          </Col>
          <Col>
            <p>Designed by MD. Maruf</p>
            {/* <p>
              Designed by
              <a>Maruf</a> | Only on <span>Envato Market</span>
            </p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
