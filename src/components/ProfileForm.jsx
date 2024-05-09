import React from "react";
import { Form, Button } from "react-bootstrap";
import useFormData from "../Hooks/useFormData";
import { useOutletContext } from "react-router-dom";

const ProfileForm = () => {
  const { currentUser } = useOutletContext();
  const [formData, setFormData] = useFormData(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="col-md-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter username"
            disabled
            value={formData.username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            onChange={setFormData}
            value={formData.firstName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={setFormData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={formData.email}
            onChange={setFormData}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default ProfileForm;
