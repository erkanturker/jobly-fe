import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const MainPage = () => {
  const { currentUser } = useOutletContext() || {};

  return (
    <div className="col-md-4">
      <div className="text-center mb-1">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
      </div>
      <div className="text-center mb-1"></div>
      <div className="text-center mb-1">
        {currentUser?.firstName && currentUser?.lastName ? (
          `Welcome Back ${currentUser?.firstName} ${currentUser?.lastName}`
        ) : (
          <>
            <Link
              className="btn btn-primary font-weight-bold mr-3 mx-2"
              to="/login"
            >
              Log in
            </Link>
            <Link
              className="btn btn-primary font-weight-bold mr-3 mx-2"
              to="/signup"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
