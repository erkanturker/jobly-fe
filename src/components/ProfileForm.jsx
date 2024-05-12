import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useFormData from "../Hooks/useFormData";
import { useOutletContext } from "react-router-dom";
import CustomAlert from "../CommonJsx/CustomAlert";

const ProfileForm = () => {
  const { currentUser, updateUser } = useOutletContext();
  const { username, firstName, lastName, email } = currentUser;
  const [formErrors, setFormErrors] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useFormData({
    username,
    firstName,
    lastName,
    email,
  });
  const [alertVisible, setAlertVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, ...sendingData } = formData;
    let result = await updateUser(currentUser.username, sendingData);

    if (result.success) {
      setIsSaved(true);
      setAlertVisible(true);
    } else {
      setFormErrors(result.error);
      setAlertVisible(true);
    }
  };

  return (
    <div className="col-md-4">
      {formErrors.length > 0 && (
        <CustomAlert
          type="danger"
          title="Oh snap! You got an error!"
          messages={formErrors}
          visible={alertVisible}
          onClose={() => setAlertVisible(false)}
        />
      )}
      {isSaved && (
        <CustomAlert
          type="success"
          title="Success"
          messages={["Your changes are saved"]}
          visible={alertVisible}
          onClose={() => setAlertVisible(false)}
        />
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter username"
            disabled
            value={currentUser.username}
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
