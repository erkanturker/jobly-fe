import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const CustomAlert = ({ type, title, messages }) => {
  const [show, setShow] = useState(true);
  return (
    <Alert variant={type} onClose={() => setShow(false)} dismissible>
      <Alert.Heading>{title}</Alert.Heading>
      {messages.map((message) => (
        <p key={message}>{message}</p>
      ))}
    </Alert>
  );
};

export default CustomAlert;
