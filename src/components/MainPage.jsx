import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const MainPage = () => {
  const { currentUser } = useOutletContext() || {};

  return (
    <div>
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
            to="/login"
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default MainPage;
