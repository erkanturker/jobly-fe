import React, { useState } from "react";
import useCompanies from "../../Hooks/useCompanies";
import SearchBox from "../SearchBox";
import CompanyCard from "./CompanyCard";
import Spinner from "react-bootstrap/Spinner";
import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";

export const CompanyList = () => {
  const isLoggedIn = useAuth();
  const [query, setQuery] = useState("");
  const { data: companies, error, isLoading } = useCompanies(query);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const handleSetQuery = (query) => {
    setQuery(query);
  };

  return (
    <>
      <SearchBox onSearch={handleSetQuery} />

      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {error && <div>Error fetching companies: {error.message}</div>}

      {companies.map((company) => (
        <CompanyCard
          key={company.handle}
          handle={company.handle}
          name={company.name}
          description={company.description}
        />
      ))}
    </>
  );
};

export default CompanyList;
