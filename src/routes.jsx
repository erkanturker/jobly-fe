import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CompanyList from "./components/Companies/CompanyList";
import Layout from "./components/Layout";
import CompanyDetail from "./components/Companies/CompanyDetail";
import JobList from "./components/Jobs/JobList";
import LoginForm from "./components/Auth/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
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
        path: "login",
        element: <LoginForm />,
      },
    ],
  },
]);

export default router;
