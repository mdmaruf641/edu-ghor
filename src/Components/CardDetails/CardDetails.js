import { useParams } from "react-router";
import "./CardDetails.css";

const CardDetails = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h1>Service Id: {serviceId}</h1>
    </div>
  );
};

export default CardDetails;
