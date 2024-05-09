import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const JobDetailCard = ({ title, companyName, salary, equity }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="mb-2">{companyName}</Card.Text>
        <Card.Text>Salary: {salary}</Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Text>Equity: {equity}</Card.Text>
          <Button variant="success">Apply</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobDetailCard;
