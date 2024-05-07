import { Form, Button } from "react-bootstrap";

import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex mb-4">
      <Form.Control
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
      <Button type="submit" variant="primary" className="ms-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
