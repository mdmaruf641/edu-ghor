import React from "react";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ServicePage from "../ServicePage/ServicePage";

const ServicesPage = () => {
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
            <ServicePage key={service.id} service={service}></ServicePage>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesPage;
