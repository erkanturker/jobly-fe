import React, { useContext } from "react";
import UserContext from "../UserContext";

const MainPage = () => {
  const { firstName, lastName } = useContext(UserContext) || {};

  return (
    <div>
      {" "}
      {firstName && lastName ? `Welcome Back ${firstName} ${lastName}` : ""}
    </div>
  );
};

export default MainPage;
