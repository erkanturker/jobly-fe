import React from "react";
import { Button, Form } from "react-bootstrap";
import useFields from "../../Hooks/useFields";
import JoblyApi from "../../api";
import { useNavigate, useOutletContext } from "react-router-dom";
import useLocalStorage from "../../Hooks/useLocalStorage";

const LoginForm = () => {
  const [formData, setFormData] = useFields({ username: "", password: "" });
  const [token, setToken] = useLocalStorage("authToken", "");
  const navigate = useNavigate();
  const { login } = useOutletContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = await login(formData);
    console.log(result);
    if (result.success) {
      navigate("/", { replace: true });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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
  );
};

export default LoginForm;
