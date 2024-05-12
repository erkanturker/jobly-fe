import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import useCompanies from "../../Hooks/useCompanies";
import SearchBox from "../CommonJsx/SearchBox";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "../CommonJsx/LoadingSpinner";

export const CompanyList = () => {
  const [query, setQuery] = useState("");
  const { data: companies, error, isLoading } = useCompanies(query);

  const handleSetQuery = (query) => {
    setQuery(query);
  };

  return (
    <div className="col-md-7">
      <SearchBox onSearch={handleSetQuery} />
      {isLoading && <LoadingSpinner />}
      {error && <div>Error fetching companies: {error.message}</div>}

      {companies.map((company) => (
        <CompanyCard
          key={company.handle}
          handle={company.handle}
          name={company.name}
          description={company.description}
        />
      ))}
    </div>
  );
};

export default CompanyList;
