import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginForm from "../components/Auth/LoginForm";
import CompanyDetail from "../components/Companies/CompanyDetail";
import CompanyList from "../components/Companies/CompanyList";
import JobList from "../components/Jobs/JobList";
import MainPage from "../components/MainPage";
import PrivateRoutes from "./PrivateRoutes";
import SignupForm from "../components/Auth/SignupForm";
import ProfileForm from "../components/ProfileForm";
import ErrorPage from "../components/ErrorPage";

/**
 * Router configuration for the application using react-router-dom.
 * @returns {ReactElement} - React element representing the router configuration.
 */

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },

      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        // Routes for pages accessible only to authorized users

        element: <PrivateRoutes />,
        children: [
          {
            path: "companies",
            element: <CompanyList />,
          },
          {
            path: "companies/:handle",
            element: <CompanyDetail />,
          },
          {
            path: "jobs",
            element: <JobList />,
          },
          {
            path: "profile",
            element: <ProfileForm />,
          },
        ],
      },
    ],
  },
]);

export default router;
