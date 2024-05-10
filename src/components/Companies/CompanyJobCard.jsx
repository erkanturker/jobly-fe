import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useJobApplication from "../../Hooks/useJobApplication";

const CompanyJobCard = ({ id, title, salary, equity }) => {
  const { handleJobApplication, isApplied } = useJobApplication();
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Salary: {salary}</Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Text>Equity: {equity}</Card.Text>
          <Button
            {...(isApplied(id) ? { disabled: true } : {})}
            onClick={() => handleJobApplication(id)}
            variant="success"
          >
            {isApplied(id) ? "Applied" : "Apply"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CompanyJobCard;
