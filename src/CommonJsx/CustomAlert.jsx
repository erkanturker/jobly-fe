import React, { useState } from "react";
import { Alert } from "react-bootstrap";

/**
 * A customizable alert component for displaying messages to the user.
 * @param {string} type - The type of the alert (e.g., "success", "danger", "warning").
 * @param {string} title - The title of the alert.
 * @param {Array} messages - An array of messages to be displayed in the alert.
 * @param {boolean} visible - Boolean indicating whether the alert is visible or not.
 * @param {function} onClose - Function to be called when the alert is dismissed.
 * @returns {ReactElement} - React element representing the custom alert component.
 */
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
