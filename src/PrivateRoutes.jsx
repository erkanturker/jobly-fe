import React from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

const PrivateRoutes = () => {
  const context = useOutletContext();

  if (!context?.currentUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
