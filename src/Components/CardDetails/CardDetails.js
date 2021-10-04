import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CardDetails.css";

const CardDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    const url = `./Services.JSON/services/${serviceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h1>Card details {serviceId}</h1>
      <h3>Name: {service.name}</h3>
    </div>
  );
};

export default CardDetails;
