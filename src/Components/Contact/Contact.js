import React from "react";
import "./Contact.css";
import contact from "../../images/contact.png";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container>
        <h1>Contact Us</h1>
        <Row className="my-4">
          <Col>
            <img src={contact} alt="Contact-img" className="contact-img" />
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="name"
              className="mb-2 w-75"
            >
              <Form.Control className="input" type="text" placeholder="name" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-2 w-75"
            >
              <Form.Control
                className="input"
                type="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                className="w-75 input"
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <div className="d-grid gap-2">
              <Button className="w-75 submit-btn mt-2" size="lg">
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
