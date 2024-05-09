import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const CustomAlert = ({ type, title, messages, visible, onClose }) => {
  return (
    <>
      {visible && (
        <Alert variant={type} onClose={onClose} dismissible>
          <Alert.Heading>{title}</Alert.Heading>
          {messages.map((message) => (
            <p key={message}>{message}</p>
          ))}
        </Alert>
      )}
    </>
  );
};

export default CustomAlert;
