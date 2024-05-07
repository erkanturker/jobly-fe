import React from "react";
import { Button, Form } from "react-bootstrap";
import useFields from "../../Hooks/useFields";
import JoblyApi from "../../api";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../Hooks/useLocalStorage";

const LoginForm = () => {
  const [formData, setFormData] = useFields({ username: "", password: "" });
  const [token, setToken] = useLocalStorage("authToken", "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    JoblyApi.authToken(formData)
      .then((res) => {
        JoblyApi.token = res;
        setToken(res);
        navigate("/", { replace: true });
      })
      .catch((e) => console.log(e));
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
