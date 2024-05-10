/**
 * Component: SignupForm
 * Description: Component for user signup form.

 * This component provides a form for user signup. It handles form submission, validation,
 * and displays error messages if signup fails.
 */

import React, { useState } from "react";
import useFormData from "../../Hooks/useFormData";
import { Button, Form } from "react-bootstrap";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import CustomAlert from "../../CommonJsx/CustomAlert";

/**
 * Component for user signup form.
 * @returns {ReactElement} - React element representing the signup form component.
 */

const SignupForm = () => {
  // State variables for form data, form errors, and alert visibility
  const [formData, setFormData] = useFormData();
  const [formErrors, setFormErrors] = useState([]);
  const [alertVisible, setAlertVisible] = useState(true);

  // Accessing signup function and currentUser from outlet context
  const { signup, currentUser } = useOutletContext();

  // Hook for navigating to different routes
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      // If signup is successful, navigate to the home page
      navigate("/");
    } else {
      // If signup fails, set form errors and display alert
      setFormErrors(result.error);
      setAlertVisible(true);
    }
  };

  // Redirect to home page if the user is already logged in
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
