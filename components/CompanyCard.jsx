import Card from "react-bootstrap/Card";

import React from "react";

export const CompanyCard = ({ name, description }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CompanyCard;
