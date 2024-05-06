import { Form, Button } from "react-bootstrap";

import React from "react";

const SearchBox = () => {
  return (
    <Form className="d-flex mb-4">
      <Form.Control type="text" placeholder="Search" />
      <Button type="submit" variant="primary" className="ms-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
