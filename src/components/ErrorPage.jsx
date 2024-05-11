import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4 text-center">
        <h1 className="mb-3">404 Not Found</h1>
        <p>We're sorry, we couldn't find the page you requested.</p>
        <Link to="/" className="btn btn-primary mt-3">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
