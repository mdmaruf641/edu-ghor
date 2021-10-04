import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
import { Container, Row } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./Services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-start my-2 ">Our All Services</h1>
        <Row xs={1} md={3} className="g-4 mb-4 mt-0">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
