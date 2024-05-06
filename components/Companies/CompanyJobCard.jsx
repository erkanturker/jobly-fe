import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CompanyJobCard = ({ title, salary, equity }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Salary: {salary}</Card.Text>
        <Card.Text>Equity: {equity}</Card.Text>
        <Button variant="danger">Apply</Button>
      </Card.Body>
    </Card>
  );
};

export default CompanyJobCard;
