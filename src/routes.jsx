import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginForm from "./components/Auth/LoginForm";
import CompanyDetail from "./components/Companies/CompanyDetail";
import CompanyList from "./components/Companies/CompanyList";
import JobList from "./components/Jobs/JobList";
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
