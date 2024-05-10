/**
 * Component: LoginForm
 * This component provides a form for user login. It handles form submission, validation,
 * and displays error messages if login fails.
 */

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import CustomAlert from "../../CommonJsx/CustomAlert";
import useFormData from "../../Hooks/useFormData";

/**
 * Component for user login form.
 * @returns {ReactElement} - React element representing the login form component.
 */
const LoginForm = () => {
  // State variables for form data, form errors, and alert visibility
  const [formData, setFormData] = useFormData({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState([]);
  const [alertVisible, setAlertVisible] = useState(true);

  // Hook for navigating to different routes
  const navigate = useNavigate();

  // Accessing login function and currentUser from outlet context
  const { login, currentUser } = useOutletContext();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = await login(formData);
    if (result.success) {
      // If login is successful, navigate to the home page
      navigate("/");
    } else {
      // If login fails, set form errors and display alert
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
      <Form onSubmit={handleSubmit}>
        {formErrors.length > 0 && (
          <CustomAlert
            type="danger"
            title="Oh snap! You got an error!"
            messages={formErrors}
            visible={alertVisible}
            onClose={() => setAlertVisible(false)}
          />
        )}

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter username"
            required
            value={formData.username}
            onChange={setFormData}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={formData.password}
            onChange={setFormData}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-1">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
