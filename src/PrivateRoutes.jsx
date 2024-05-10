/**
 * Module: PrivateRoutes
 * Description: Component for rendering private routes accessible only to authorized users.
 * Author: [Author Name]
 * Date: [Date]
 *
 * This component renders private routes, which are accessible only to authorized users.
 * It checks if a user is authenticated using the useOutletContext hook from react-router-dom.
 * If the user is not authenticated, it redirects to the login page.
 */

import React from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

/**
 * Component for rendering private routes accessible only to authorized users.
 * @returns {ReactElement} - React element representing the private routes component.
 */

const PrivateRoutes = () => {
  // Get the current user context using useOutletContext hook
  const context = useOutletContext();

  // If there is no currentUser in the context, redirect to the login page
  if (!context?.currentUser) {
    return <Navigate to="/login" />;
  }

  // Render the child routes within an Outlet component so that child component like company list reach currentUSer object
  return <Outlet context={context} />;
};

export default PrivateRoutes;
