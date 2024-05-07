import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CompanyList from "./components/Companies/CompanyList";
import Layout from "./components/Layout";
import CompanyDetail from "./components/Companies/CompanyDetail";
import JobList from "./components/Jobs/JobList";
import LoginForm from "./components/Auth/LoginForm";
import MainPage from "./components/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
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
