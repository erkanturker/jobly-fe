import React, { useState } from "react";
import useFormData from "../../Hooks/useFormData";
import { Button, Form } from "react-bootstrap";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import CustomAlert from "../../CommonJsx/CustomAlert";

const SignupForm = () => {
  const [formData, setFormData] = useFormData();
  const [formErrors, setFormErrors] = useState([]);
  const [alertVisible, setAlertVisible] = useState(true);
  const { signup, currentUser } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      navigate("/");
    } else {
      setFormErrors(result.error);
      setAlertVisible(true);
    }
  };

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="col-md-4">
      <Form className="mx-2" onSubmit={handleSubmit}>
        {formErrors.length > 0 && (
          <CustomAlert
            type="danger"
            title="Oh snap! You got an error!"
            messages={formErrors}
            visible={alertVisible}
            onClose={() => setAlertVisible(false)}
          />
        )}

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control name="username" type="text" onChange={setFormData} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control name="firstName" type="text" onChange={setFormData} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" type="text" onChange={setFormData} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={setFormData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" onChange={setFormData} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignupForm;
