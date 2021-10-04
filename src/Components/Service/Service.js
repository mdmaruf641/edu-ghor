import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { img, name, time, lesson, category, id, price } = props.service;

  // card details button
  const url = `/service/${id}`;
  return (
    <div>
      <Col>
        <Card className="main-card">
          <Card.Img className="card-img" variant="top" src={img} />
          <Card.Body className="text-start">
            <Card.Title className="card-title">
              Name: {name.slice(0, 43)}
            </Card.Title>
            <p>Time: {time}</p>
            <p>Lesson: {lesson}</p>
            <p>Category: {category}</p>
            <h4>Price: {price}</h4>
            <Link to={url}>View Details</Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
