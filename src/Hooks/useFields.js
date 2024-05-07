import React, { useState } from "react";

const useFields = (intialValue) => {
  const [state, setState] = useState(intialValue);

  const updateState = (e) => {
    const { name, value } = e.target;
    setState((formField) => ({ ...formField, [name]: value }));
  };

  return [state, updateState];
};

export default useFields;
