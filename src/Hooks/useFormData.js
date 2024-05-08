import React, { useState } from "react";

const useFormData = (initialValue) => {
  const [formData, setFormData] = useState(initialValue);

  const updateFormData = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  return [formData, updateFormData];
};

export default useFormData;
