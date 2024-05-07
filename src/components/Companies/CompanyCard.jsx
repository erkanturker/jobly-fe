import Card from "react-bootstrap/Card";

import React from "react";
import { Link } from "react-router-dom";

export const CompanyCard = ({ handle, name, description }) => {
  return (
    <Card className="mb-3">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/companies/${handle}`}
      >
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CompanyCard;
