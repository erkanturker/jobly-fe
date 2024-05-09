import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import CustomAlert from "../../CommonJsx/CustomAlert";
import useFormData from "../../Hooks/useFormData";

const LoginForm = () => {
  const [formData, setFormData] = useFormData({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();
  const { login, currentUser } = useOutletContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = await login(formData);
    if (result.success) {
      navigate("/");
    } else {
      setFormErrors((data) => [...data, result.error]);
      console.log("from form: " + result.error);
    }
  };

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
