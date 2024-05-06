import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import CompanyList from "./components/CompanyList";
import Layout from "./components/Layout";
import CompanyDetail from "./components/CompanyDetail";

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
    ],
  },
]);

export default router;
